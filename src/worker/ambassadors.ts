/// <reference types="@cloudflare/workers-types" />
import { Hono } from "hono";
import { z } from "zod";
import { randomToken, signAction, verifyAction, verifyStripeSignature } from "./crypto";
import { sendEmail, layout, button, esc } from "./email";

export type Env = {
  DB: D1Database;
  RESEND_API_KEY?: string;
  STRIPE_WEBHOOK_SECRET?: string;
  ADMIN_SECRET?: string;
  PAYMENT_LINK_URL?: string;
  SITE_URL?: string;
  TEAM_EMAIL?: string;
  FROM_EMAIL?: string;
  KIT_URL?: string;
  REFUND_WINDOW_DAYS?: string;
};

const COMMISSION_RATE = 0.2;
const LINK_TTL_DAYS = 30;
const ROLES = ["Student Ambassador", "Parent Ambassador", "Community Partner"] as const;
const PAYOUT_METHODS = ["Venmo", "Zelle", "PayPal"] as const;

const dollars = (cents: number) => `$${(cents / 100).toFixed(2)}`;
const siteUrl = (env: Env) => (env.SITE_URL || "https://skillsvera.com").replace(/\/$/, "");
const teamEmail = (env: Env) => env.TEAM_EMAIL || "skillsvera.team@gmail.com";
const refundDays = (env: Env) => Math.max(0, Number(env.REFUND_WINDOW_DAYS ?? 14) || 14);

export function referralLink(env: Env, code: string) {
  const base = env.PAYMENT_LINK_URL || `${siteUrl(env)}/pricing`;
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}client_reference_id=${encodeURIComponent(code)}`;
}

async function actionUrl(env: Env, action: string, id: number) {
  const exp = Math.floor(Date.now() / 1000) + LINK_TTL_DAYS * 86400;
  const sig = await signAction(env.ADMIN_SECRET || "", action, id, exp);
  return `${siteUrl(env)}/api/admin/${action}/${id}?exp=${exp}&sig=${sig}`;
}

const text = (max: number) => z.string().trim().max(max);

const ApplicationSchema = z
  .object({
    role: z.enum(ROLES),
    name: text(100).min(2),
    email: text(150).email(),
    phone: text(30).optional().default(""),
    age: z.coerce.number().int().min(15).max(100),
    guardianName: text(100).optional().default(""),
    guardianEmail: text(150).optional().default(""),
    location: text(100).min(2),
    reach: text(1000).min(40),
    experience: text(1000).optional().default(""),
    referral: text(200).optional().default(""),
    payoutMethod: z.enum(PAYOUT_METHODS).optional(),
    website: z.string().max(200).optional().default(""), // honeypot
  })
  .superRefine((d, ctx) => {
    if (d.age < 18) {
      if (d.guardianName.length < 2) ctx.addIssue({ code: "custom", path: ["guardianName"], message: "Parent or guardian name is required." });
      if (!z.string().email().safeParse(d.guardianEmail).success)
        ctx.addIssue({ code: "custom", path: ["guardianEmail"], message: "A valid parent or guardian email is required." });
      if (d.guardianEmail.toLowerCase() === d.email.toLowerCase())
        ctx.addIssue({ code: "custom", path: ["guardianEmail"], message: "Parent or guardian email must be different from yours." });
    }
    if (d.role !== "Student Ambassador" && d.age < 18)
      ctx.addIssue({ code: "custom", path: ["age"], message: "This role requires applicants to be 18 or older." });
  });

type Ambassador = {
  id: number;
  status: string;
  role: string;
  name: string;
  email: string;
  phone: string | null;
  age: number;
  guardian_name: string | null;
  guardian_email: string | null;
  location: string;
  reach: string;
  experience: string | null;
  referral: string | null;
  payout_method: string | null;
  code: string | null;
  dashboard_token: string | null;
};

async function uniqueCode(db: D1Database, name: string) {
  const base = (name.split(/\s+/)[0] || "AMB").toUpperCase().replace(/[^A-Z]/g, "").slice(0, 8) || "AMB";
  for (let i = 0; i < 20; i++) {
    const code = `${base}${Math.floor(100 + Math.random() * 900)}`;
    const hit = await db.prepare("SELECT 1 FROM ambassadors WHERE code = ?").bind(code).first();
    if (!hit) return code;
  }
  return `${base}${randomToken(3).toUpperCase()}`;
}

function page(title: string, body: string, status = 200) {
  return new Response(
    `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title></head>
<body style="margin:0;background:#0F1422;color:#EEF1F6;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif">
<main style="max-width:520px;margin:0 auto;padding:64px 20px"><p style="font-weight:700;margin:0 0 24px">Skillsvera</p>
<h1 style="font-size:24px;margin:0 0 12px">${esc(title)}</h1>${body}</main></body></html>`,
    { status, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

const app = new Hono<{ Bindings: Env }>();

/* ---------- 1. Applications ---------- */

app.post("/api/ambassadors/apply", async (c) => {
  let raw: unknown;
  try {
    raw = await c.req.json();
  } catch {
    return c.json({ error: "Invalid request." }, 400);
  }
  const parsed = ApplicationSchema.safeParse(raw);
  if (!parsed.success) return c.json({ error: parsed.error.issues[0]?.message || "Please check your application." }, 400);
  const d = parsed.data;

  // Bots fill the hidden field: accept quietly and store nothing.
  if (d.website) return c.json({ ok: true });

  const email = d.email.toLowerCase();
  const existing = await c.env.DB.prepare(
    "SELECT id FROM ambassadors WHERE email = ? AND status IN ('pending','approved') LIMIT 1"
  )
    .bind(email)
    .first();
  if (existing) return c.json({ ok: true });

  const recent = await c.env.DB.prepare("SELECT COUNT(*) AS n FROM ambassadors WHERE created_at > datetime('now','-1 hour')").first<{ n: number }>();
  if ((recent?.n ?? 0) > 50) return c.json({ error: "We're receiving a lot of applications. Please try again in an hour." }, 429);

  const minor = d.age < 18;
  const res = await c.env.DB.prepare(
    `INSERT INTO ambassadors (role, name, email, phone, age, guardian_name, guardian_email, location, reach, experience, referral, payout_method)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  )
    .bind(
      d.role,
      d.name,
      email,
      d.phone || null,
      d.age,
      minor ? d.guardianName : null,
      minor ? d.guardianEmail.toLowerCase() : null,
      d.location,
      d.reach,
      d.experience || null,
      d.referral || null,
      d.payoutMethod || null
    )
    .run();
  const id = Number(res.meta.last_row_id);

  const rows: [string, string][] = [
    ["Role", d.role],
    ["Name", d.name],
    ["Email", email],
    ["Phone", d.phone || "—"],
    ["Age", String(d.age)],
    ...(minor ? ([["Parent or guardian", `${d.guardianName} (${d.guardianEmail})`]] as [string, string][]) : []),
    ["Location", d.location],
    ["How they'd reach families", d.reach],
    ["Experience", d.experience || "—"],
    ["Heard about us", d.referral || "—"],
    ["Payout preference", d.payoutMethod || "—"],
  ];
  const table = `<table style="width:100%;border-collapse:collapse;font-size:14px">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 8px 8px 0;color:#6b7280;vertical-align:top;width:38%">${esc(k)}</td><td style="padding:8px 0;white-space:pre-line">${esc(v)}</td></tr>`
    )
    .join("")}</table>`;

  await sendEmail(c.env, {
    to: teamEmail(c.env),
    subject: `New ambassador application: ${d.name} (${d.role})`,
    replyTo: email,
    html: layout(
      "New ambassador application",
      `${table}<p style="margin:24px 0 8px">${button(await actionUrl(c.env, "approve", id), "Approve")}${button(
        await actionUrl(c.env, "decline", id),
        "Decline",
        "#6b7280"
      )}</p>${minor ? `<p style="color:#6b7280;font-size:13px">Applicant is under 18. Their parent or guardian has been emailed and copied on every message.</p>` : ""}`
    ),
  });

  await sendEmail(c.env, {
    to: email,
    cc: minor ? [d.guardianEmail.toLowerCase()] : undefined,
    subject: "We received your Skillsvera application",
    html: layout(
      `Thanks for applying, ${d.name.split(" ")[0]}`,
      `<p>We've received your application for <strong>${esc(d.role)}</strong>. Our team reviews every application and will email you a decision within 24 hours.</p>${
        minor
          ? `<p>${esc(d.guardianName)}, you're copied because ${esc(d.name.split(" ")[0])} is under 18. If you did not approve this application, just reply to this email and we'll remove it.</p>`
          : ""
      }`
    ),
  });

  return c.json({ ok: true });
});

/* ---------- 2. One-click admin actions from email ---------- */

const ACTIONS = {
  approve: { title: "Approve this ambassador?", label: "Approve", color: "#2563eb" },
  decline: { title: "Decline this application?", label: "Decline", color: "#6b7280" },
  deactivate: { title: "Deactivate this ambassador?", label: "Deactivate", color: "#b91c1c" },
  paid: { title: "Mark this payout as paid?", label: "Mark as paid", color: "#2563eb" },
} as const;
type Action = keyof typeof ACTIONS;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function checkAction(c: { env: Env; req: any }) {
  const action = c.req.param("action") as Action;
  const id = Number(c.req.param("id"));
  if (!(action in ACTIONS) || !Number.isInteger(id)) return null;
  const ok = await verifyAction(c.env.ADMIN_SECRET || "", action, id, Number(c.req.query("exp")), c.req.query("sig") || "");
  return ok ? { action, id } : null;
}

// GET shows a confirmation button, so email link scanners can't trigger an action by visiting the link.
app.get("/api/admin/:action/:id", async (c) => {
  const v = await checkAction(c);
  if (!v) return page("This link is invalid or has expired", "<p>Ask for a fresh link from the latest email.</p>", 403);
  const a = ACTIONS[v.action];
  let detail = "";
  if (v.action === "paid") {
    const p = await c.env.DB.prepare(
      "SELECT p.amount_cents, a.name, a.payout_method FROM payouts p JOIN ambassadors a ON a.id = p.ambassador_id WHERE p.id = ?"
    )
      .bind(v.id)
      .first<{ amount_cents: number; name: string; payout_method: string | null }>();
    if (!p) return page("Payout not found", "", 404);
    detail = `<p>${esc(p.name)} · ${dollars(p.amount_cents)}${p.payout_method ? ` · ${esc(p.payout_method)}` : ""}</p>`;
  } else {
    const amb = await c.env.DB.prepare("SELECT name, role, status FROM ambassadors WHERE id = ?").bind(v.id).first<Ambassador>();
    if (!amb) return page("Applicant not found", "", 404);
    detail = `<p>${esc(amb.name)} · ${esc(amb.role)} · currently ${esc(amb.status)}</p>`;
  }
  const url = new URL(c.req.url);
  return page(
    a.title,
    `${detail}<form method="post" action="${esc(url.pathname + url.search)}"><button style="background:${a.color};color:#fff;border:0;border-radius:8px;padding:12px 20px;font-size:16px;font-weight:600;cursor:pointer">${a.label}</button></form>`
  );
});

app.post("/api/admin/:action/:id", async (c) => {
  const v = await checkAction(c);
  if (!v) return page("This link is invalid or has expired", "<p>Ask for a fresh link from the latest email.</p>", 403);
  const db = c.env.DB;

  if (v.action === "paid") {
    const p = await db
      .prepare(
        "SELECT p.id, p.amount_cents, p.status, a.name, a.email, a.guardian_email FROM payouts p JOIN ambassadors a ON a.id = p.ambassador_id WHERE p.id = ?"
      )
      .bind(v.id)
      .first<{ id: number; amount_cents: number; status: string; name: string; email: string; guardian_email: string | null }>();
    if (!p) return page("Payout not found", "", 404);
    if (p.status !== "paid") {
      await db.prepare("UPDATE payouts SET status = 'paid', paid_at = datetime('now') WHERE id = ?").bind(p.id).run();
      await sendEmail(c.env, {
        to: p.email,
        cc: p.guardian_email ? [p.guardian_email] : undefined,
        subject: `Your Skillsvera payout of ${dollars(p.amount_cents)} has been sent`,
        html: layout("Payout sent", `<p>Hi ${esc(p.name.split(" ")[0])}, we've sent your commission of <strong>${dollars(p.amount_cents)}</strong>. Thank you for helping families find Skillsvera.</p>`),
      });
    }
    return page("Marked as paid", `<p>${esc(p.name)} · ${dollars(p.amount_cents)}. They've been emailed a receipt.</p>`);
  }

  const amb = await db.prepare("SELECT * FROM ambassadors WHERE id = ?").bind(v.id).first<Ambassador>();
  if (!amb) return page("Applicant not found", "", 404);
  const first = amb.name.split(" ")[0];
  const cc = amb.guardian_email ? [amb.guardian_email] : undefined;

  if (v.action === "approve") {
    if (amb.status === "approved") return page("Already approved", `<p>${esc(amb.name)}'s code is ${esc(amb.code)}.</p>`);
    const code = await uniqueCode(db, amb.name);
    const token = randomToken();
    await db
      .prepare("UPDATE ambassadors SET status = 'approved', code = ?, dashboard_token = ?, decided_at = datetime('now') WHERE id = ?")
      .bind(code, token, amb.id)
      .run();
    const link = referralLink(c.env, code);
    const dashboard = `${siteUrl(c.env)}/ambassador?t=${token}`;
    await sendEmail(c.env, {
      to: amb.email,
      cc,
      subject: "You're approved: welcome to the Skillsvera ambassador team",
      html: layout(
        `Welcome aboard, ${first}`,
        `<p>You're approved as a <strong>${esc(amb.role)}</strong>. You earn 20% of every course sold through your personal link.</p>
<p style="margin:20px 0 6px;color:#6b7280;font-size:13px">Your personal link</p>
<p style="margin:0;padding:12px;background:#f4f5f7;border-radius:8px;word-break:break-all;font-family:monospace;font-size:13px">${esc(link)}</p>
<p style="margin:12px 0 0;font-size:14px">If a parent can't use the link, they can type <strong>${esc(code)}</strong> in the "Who referred you?" box at checkout.</p>
<p style="margin:24px 0 8px">${button(dashboard, "View your earnings")}${c.env.KIT_URL ? button(c.env.KIT_URL, "Open your starter kit", "#111827") : ""}</p>
<p style="font-size:14px;color:#374151">Bookmark your earnings page; it's private to you. Commissions are paid monthly once each enrollment's ${refundDays(c.env)}-day refund window has closed.${
          amb.payout_method ? "" : " Reply to this email with how you'd like to be paid (Venmo, Zelle or PayPal)."
        }</p>`
      ),
    });
    await sendEmail(c.env, {
      to: teamEmail(c.env),
      subject: `Approved: ${amb.name} (${code})`,
      html: layout(
        `${amb.name} is approved`,
        `<p>Code <strong>${esc(code)}</strong>. Their welcome email and link have been sent.</p><p style="font-size:13px;color:#6b7280">Keep this email. If you ever need to remove them:</p><p>${button(
          await actionUrl(c.env, "deactivate", amb.id),
          "Deactivate",
          "#b91c1c"
        )}</p>`
      ),
    });
    return page("Approved", `<p>${esc(amb.name)} has been emailed their link and starter kit. Their code is <strong>${esc(code)}</strong>.</p>`);
  }

  if (v.action === "decline") {
    if (amb.status !== "pending") return page("Already decided", `<p>${esc(amb.name)} is ${esc(amb.status)}.</p>`);
    await db.prepare("UPDATE ambassadors SET status = 'declined', decided_at = datetime('now') WHERE id = ?").bind(amb.id).run();
    await sendEmail(c.env, {
      to: amb.email,
      cc,
      subject: "Your Skillsvera application",
      html: layout(
        `Thanks for applying, ${first}`,
        `<p>We appreciate your interest in becoming a Skillsvera ambassador. We're not able to move forward with your application right now, but you're welcome to apply again in the future.</p>`
      ),
    });
    return page("Declined", `<p>${esc(amb.name)} has been sent a polite decline.</p>`);
  }

  // deactivate
  await db.prepare("UPDATE ambassadors SET status = 'deactivated' WHERE id = ?").bind(amb.id).run();
  return page("Deactivated", `<p>${esc(amb.name)}'s code will no longer earn commissions. Earnings already recorded are kept.</p>`);
});

/* ---------- 3. Stripe webhook: credit sales automatically ---------- */

type CheckoutSession = {
  id: string;
  payment_status?: string;
  amount_total?: number;
  client_reference_id?: string | null;
  payment_intent?: string | null;
  custom_fields?: { key: string; label?: { custom?: string }; text?: { value?: string | null } }[];
};

app.post("/api/stripe/webhook", async (c) => {
  const body = await c.req.text();
  const valid = await verifyStripeSignature(body, c.req.header("stripe-signature"), c.env.STRIPE_WEBHOOK_SECRET || "");
  if (!valid) return c.json({ error: "Invalid signature" }, 400);

  const event = JSON.parse(body) as { type: string; data: { object: any } };
  const db = c.env.DB;

  if (event.type === "checkout.session.completed" || event.type === "checkout.session.async_payment_succeeded") {
    const s = event.data.object as CheckoutSession;
    if (s.payment_status !== "paid" || !s.amount_total) return c.json({ received: true });

    const typed = s.custom_fields?.find((f) => /refer/i.test(`${f.key} ${f.label?.custom ?? ""}`))?.text?.value;
    const candidate = (s.client_reference_id || typed || "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (!candidate) return c.json({ received: true });

    const amb = await db
      .prepare("SELECT id, name, email, guardian_email FROM ambassadors WHERE code = ? AND status = 'approved'")
      .bind(candidate)
      .first<{ id: number; name: string; email: string; guardian_email: string | null }>();
    if (!amb) return c.json({ received: true });

    const commission = Math.round(s.amount_total * COMMISSION_RATE);
    const ins = await db
      .prepare(
        "INSERT OR IGNORE INTO sales (ambassador_id, stripe_session_id, stripe_payment_intent, amount_cents, commission_cents) VALUES (?, ?, ?, ?, ?)"
      )
      .bind(amb.id, s.id, s.payment_intent || null, s.amount_total, commission)
      .run();

    if (ins.meta.changes > 0) {
      await sendEmail(c.env, {
        to: amb.email,
        cc: amb.guardian_email ? [amb.guardian_email] : undefined,
        subject: `You earned ${dollars(commission)} with Skillsvera`,
        html: layout(
          "You made a sale",
          `<p>Nice work, ${esc(amb.name.split(" ")[0])}. A family just enrolled through your link, earning you <strong>${dollars(
            commission
          )}</strong>. It'll be included in your next monthly payout once the refund window closes.</p>`
        ),
      });
    }
  }

  if (event.type === "charge.refunded") {
    const pi = event.data.object?.payment_intent as string | undefined;
    if (pi) await db.prepare("UPDATE sales SET refunded = 1 WHERE stripe_payment_intent = ?").bind(pi).run();
  }

  return c.json({ received: true });
});

/* ---------- 4. Ambassador's private earnings page ---------- */

app.get("/api/ambassador/me", async (c) => {
  const token = c.req.query("t") || "";
  if (!/^[a-f0-9]{48}$/.test(token)) return c.json({ error: "Not found" }, 404);
  const amb = await c.env.DB.prepare("SELECT id, name, role, code, status FROM ambassadors WHERE dashboard_token = ?")
    .bind(token)
    .first<{ id: number; name: string; role: string; code: string; status: string }>();
  if (!amb) return c.json({ error: "Not found" }, 404);

  const days = refundDays(c.env);
  const { results } = await c.env.DB.prepare(
    `SELECT s.created_at, s.commission_cents, s.refunded, s.payout_id, p.status AS payout_status,
            (s.created_at <= datetime('now', ?)) AS cleared
     FROM sales s LEFT JOIN payouts p ON p.id = s.payout_id
     WHERE s.ambassador_id = ? ORDER BY s.created_at DESC LIMIT 200`
  )
    .bind(`-${days} days`, amb.id)
    .all<{ created_at: string; commission_cents: number; refunded: number; payout_id: number | null; payout_status: string | null; cleared: number }>();

  let pending = 0;
  let ready = 0;
  let paid = 0;
  const sales = results.map((r) => {
    let status = "Pending";
    if (r.refunded) status = "Refunded";
    else if (r.payout_status === "paid") status = "Paid";
    else if (r.payout_id || r.cleared) status = "Ready for payout";
    if (!r.refunded) {
      if (status === "Paid") paid += r.commission_cents;
      else if (status === "Ready for payout") ready += r.commission_cents;
      else pending += r.commission_cents;
    }
    return { date: r.created_at.slice(0, 10), commissionCents: r.commission_cents, status };
  });

  return c.json({
    name: amb.name,
    role: amb.role,
    code: amb.code,
    active: amb.status === "approved",
    link: referralLink(c.env, amb.code),
    refundWindowDays: days,
    totals: { pendingCents: pending, readyCents: ready, paidCents: paid, salesCount: sales.filter((s) => s.status !== "Refunded").length },
    sales,
  });
});

/* ---------- 5. Monthly payout run (cron) ---------- */

export async function runMonthlyPayouts(env: Env) {
  const db = env.DB;
  const days = refundDays(env);
  const { results: owed } = await db
    .prepare(
      `SELECT a.id, a.name, a.email, a.guardian_email, a.payout_method, SUM(s.commission_cents) AS total
       FROM sales s JOIN ambassadors a ON a.id = s.ambassador_id
       WHERE s.refunded = 0 AND s.payout_id IS NULL AND s.created_at <= datetime('now', ?)
       GROUP BY a.id HAVING total > 0 ORDER BY total DESC`
    )
    .bind(`-${days} days`)
    .all<{ id: number; name: string; email: string; guardian_email: string | null; payout_method: string | null; total: number }>();

  if (!owed.length) {
    await sendEmail(env, { to: teamEmail(env), subject: "Skillsvera payouts: nothing due this month", html: layout("No payouts due", "<p>No ambassador commissions are due this month.</p>") });
    return;
  }

  const lines: string[] = [];
  let grand = 0;
  for (const a of owed) {
    const p = await db.prepare("INSERT INTO payouts (ambassador_id, amount_cents) VALUES (?, ?)").bind(a.id, a.total).run();
    const payoutId = Number(p.meta.last_row_id);
    await db
      .prepare("UPDATE sales SET payout_id = ? WHERE ambassador_id = ? AND refunded = 0 AND payout_id IS NULL AND created_at <= datetime('now', ?)")
      .bind(payoutId, a.id, `-${days} days`)
      .run();
    grand += a.total;
    lines.push(
      `<tr><td style="padding:10px 8px 10px 0">${esc(a.name)}<br><span style="color:#6b7280;font-size:13px">${esc(a.payout_method || "Ask for payout method")} · ${esc(
        a.email
      )}</span></td><td style="padding:10px 8px;font-weight:600">${dollars(a.total)}</td><td style="padding:10px 0">${button(
        await actionUrl(env, "paid", payoutId),
        "Mark paid"
      )}</td></tr>`
    );
    await sendEmail(env, {
      to: a.email,
      cc: a.guardian_email ? [a.guardian_email] : undefined,
      subject: `Your Skillsvera payout: ${dollars(a.total)}`,
      html: layout("Your monthly payout", `<p>Hi ${esc(a.name.split(" ")[0])}, you have <strong>${dollars(a.total)}</strong> in commissions due this month. We'll send it shortly and email you when it's on its way.</p>`),
    });
  }

  await sendEmail(env, {
    to: teamEmail(env),
    subject: `Skillsvera payouts due: ${dollars(grand)} to ${owed.length} ambassador${owed.length === 1 ? "" : "s"}`,
    html: layout(
      "Ambassador payouts due",
      `<p>Send each payment, then tap <strong>Mark paid</strong> so they get a receipt.</p><table style="width:100%;border-collapse:collapse;font-size:14px">${lines.join(
        ""
      )}</table><p style="margin-top:16px;font-weight:600">Total: ${dollars(grand)}</p>`
    ),
  });
}

export default app;
