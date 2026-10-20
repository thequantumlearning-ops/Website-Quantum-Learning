import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Copy, Check } from "lucide-react";
import { Container, Eyebrow, Heading, Button } from "../components/ui";
import { SITE } from "../site";

const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined) ?? "";

type Data = {
  name: string;
  role: string;
  code: string;
  active: boolean;
  link: string;
  refundWindowDays: number;
  totals: { pendingCents: number; readyCents: number; paidCents: number; salesCount: number };
  sales: { date: string; commissionCents: number; status: string }[];
};

const dollars = (c: number) => `$${(c / 100).toFixed(2)}`;

export default function Ambassador() {
  const [params] = useSearchParams();
  const token = params.get("t") || "";
  const [data, setData] = useState<Data | null>(null);
  const [state, setState] = useState<"loading" | "ready" | "missing">("loading");
  const [copied, setCopied] = useState<"" | "link" | "code">("");

  useEffect(() => {
    if (!token) {
      setState("missing");
      return;
    }
    fetch(`${API_BASE}/api/ambassador/me?t=${encodeURIComponent(token)}`)
      .then((r) => (r.ok ? (r.json() as Promise<Data>) : Promise.reject(new Error("not found"))))
      .then((d: Data) => {
        setData(d);
        setState("ready");
      })
      .catch(() => setState("missing"));
  }, [token]);

  const copy = async (value: string, which: "link" | "code") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(which);
      setTimeout(() => setCopied(""), 2000);
    } catch {
      /* clipboard blocked; the value is visible to copy by hand */
    }
  };

  if (state === "loading") {
    return (
      <Container className="py-32">
        <p className="text-gray-400">Loading your dashboard…</p>
      </Container>
    );
  }

  if (state === "missing" || !data) {
    return (
      <Container className="py-32">
        <Eyebrow>Ambassador dashboard</Eyebrow>
        <Heading as="h1" className="mt-4">We couldn't find your dashboard.</Heading>
        <p className="mt-5 max-w-lg text-lg text-gray-300">
          Open it from the link in your welcome email. If you've lost it, email us at{" "}
          <a href={`mailto:${SITE.email}`} className="text-blue-400 hover:text-blue-300">{SITE.email}</a>.
        </p>
        <div className="mt-8">
          <Button to="/careers" variant="secondary">Learn about the ambassador program</Button>
        </div>
      </Container>
    );
  }

  const stats = [
    { label: "Pending", value: data.totals.pendingCents, note: `In the ${data.refundWindowDays}-day refund window` },
    { label: "Ready for payout", value: data.totals.readyCents, note: "Paid out on the 1st of the month" },
    { label: "Paid to date", value: data.totals.paidCents, note: `${data.totals.salesCount} enrollment${data.totals.salesCount === 1 ? "" : "s"} so far` },
  ];

  return (
    <>
      <section className="border-b border-ink-line">
        <Container className="pb-14 pt-16 sm:pt-20">
          <Eyebrow>Ambassador dashboard</Eyebrow>
          <Heading as="h1" className="mt-4">Hi, {data.name.split(" ")[0]}.</Heading>
          <p className="mt-4 text-lg text-gray-300">
            {data.role} · You earn 20% of every course sold through your link.
          </p>
          {!data.active && (
            <p className="mt-6 rounded-lg border border-ink-line bg-ink-soft p-4 text-gray-300">
              Your ambassador account is no longer active, so new sales won't earn commissions. Earnings already
              recorded are still paid.
            </p>
          )}
        </Container>
      </section>

      <section>
        <Container className="grid gap-6 py-14 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-ink-line bg-ink-soft p-7 shadow-soft">
            <h2 className="font-display text-xl font-bold tracking-tightish">Your personal link</h2>
            <p className="mt-2 text-[15px] text-gray-400">Share this. Every enrollment through it is credited to you automatically.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <code className="flex-1 break-all rounded-lg border border-ink-line bg-ink px-4 py-3 text-sm text-gray-200">{data.link}</code>
              <button
                type="button"
                onClick={() => copy(data.link, "link")}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 font-semibold text-white transition hover:bg-blue-500"
              >
                {copied === "link" ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                {copied === "link" ? "Copied" : "Copy link"}
              </button>
            </div>
          </div>
          <div className="rounded-2xl border border-ink-line bg-ink-soft p-7">
            <h2 className="font-display text-xl font-bold tracking-tightish">Your code</h2>
            <p className="mt-2 text-[15px] text-gray-400">Parents can type this in the "Who referred you?" box at checkout.</p>
            <div className="mt-5 flex items-center gap-3">
              <span className="font-display text-3xl font-bold tracking-wide">{data.code}</span>
              <button
                type="button"
                onClick={() => copy(data.code, "code")}
                aria-label="Copy code"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink-line text-gray-300 hover:text-white"
              >
                {copied === "code" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-6 pb-10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-ink-line p-6">
              <p className="text-sm font-semibold text-gray-400">{s.label}</p>
              <p className="mt-2 font-display text-3xl font-bold tracking-tightish">{dollars(s.value)}</p>
              <p className="mt-1 text-sm text-gray-500">{s.note}</p>
            </div>
          ))}
        </Container>
      </section>

      <section>
        <Container className="pb-24">
          <h2 className="font-display text-xl font-bold tracking-tightish">Your enrollments</h2>
          {data.sales.length === 0 ? (
            <p className="mt-4 text-gray-400">No enrollments yet. Share your link to get started.</p>
          ) : (
            <div className="mt-5 overflow-x-auto rounded-2xl border border-ink-line">
              <table className="w-full min-w-[420px] text-left text-[15px]">
                <thead className="bg-ink-soft text-sm text-gray-400">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-semibold">Date</th>
                    <th scope="col" className="px-5 py-3 font-semibold">Your commission</th>
                    <th scope="col" className="px-5 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-line">
                  {data.sales.map((s, i) => (
                    <tr key={i}>
                      <td className="px-5 py-3 text-gray-300">{s.date}</td>
                      <td className="px-5 py-3 font-semibold">{dollars(s.commissionCents)}</td>
                      <td className="px-5 py-3 text-gray-300">{s.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
