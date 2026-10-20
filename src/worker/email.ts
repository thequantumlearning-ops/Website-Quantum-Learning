// Sends email through Resend (free tier: 3,000 emails a month).
// Without RESEND_API_KEY set, emails are logged instead of sent, so nothing breaks in development.

export type MailEnv = { RESEND_API_KEY?: string; FROM_EMAIL?: string; TEAM_EMAIL?: string };

export const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export function layout(title: string, body: string) {
  return `<!doctype html><html><body style="margin:0;background:#f4f5f7;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#111827">
<div style="max-width:560px;margin:0 auto;padding:32px 20px">
<p style="font-weight:700;font-size:18px;margin:0 0 24px">Skillsvera</p>
<div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:28px">
<h1 style="font-size:20px;margin:0 0 16px">${esc(title)}</h1>
${body}
</div>
<p style="color:#6b7280;font-size:12px;margin:20px 0 0">SkillsVera LLC</p>
</div></body></html>`;
}

export const button = (href: string, label: string, color = "#2563eb") =>
  `<a href="${esc(href)}" style="display:inline-block;background:${color};color:#ffffff;text-decoration:none;font-weight:600;padding:12px 20px;border-radius:8px;margin:4px 8px 4px 0">${esc(label)}</a>`;

export async function sendEmail(
  env: MailEnv,
  msg: { to: string | string[]; subject: string; html: string; replyTo?: string; cc?: string[] }
) {
  const to = Array.isArray(msg.to) ? msg.to : [msg.to];
  if (!env.RESEND_API_KEY) {
    console.log("[email not sent: RESEND_API_KEY missing]", { to, subject: msg.subject });
    return false;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.FROM_EMAIL || "Skillsvera <team@skillsvera.com>",
      to,
      cc: msg.cc?.length ? msg.cc : undefined,
      subject: msg.subject,
      html: msg.html,
      reply_to: msg.replyTo || env.TEAM_EMAIL,
    }),
  });
  if (!res.ok) console.error("Resend error", res.status, await res.text());
  return res.ok;
}
