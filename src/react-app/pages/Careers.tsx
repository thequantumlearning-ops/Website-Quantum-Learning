import { useState, type FormEvent } from "react";
import { PageHeader, Button } from "../components/ui";
import { BadgeCheck, MapPin, Clock, DollarSign, ChevronDown, ChevronUp, Check } from "lucide-react";

// Applications go to the site's own backend (src/worker/ambassadors.ts), which stores them,
// emails the team an Approve button, and sends approved ambassadors their link automatically.
// VITE_API_BASE is only needed if the backend runs on a different domain from the site.
const API_BASE = (import.meta.env.VITE_API_BASE as string | undefined) ?? "";

const TEAM_EMAIL = "skillsvera.team@gmail.com";
const SUBMITTED_KEY = "skillsvera-careers-submitted";

type Role = {
  id: string;
  title: string;
  eligibility: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
};

const roles: Role[] = [
  {
    id: "student-ambassador",
    title: "Student Ambassador",
    eligibility: "Ages 15+",
    summary:
      "Introduce Skillsvera to families with children in grades 2 to 8 through your school, community and personal network.",
    responsibilities: [
      "Share Skillsvera with families using your personal link and promo code",
      "Answer common parent questions using the provided FAQ",
      "Represent Skillsvera professionally online and in person",
    ],
    qualifications: [
      "15 years or older, with parent or guardian consent if under 18",
      "Clear, respectful communication",
      "Connections to families with elementary or middle school children",
    ],
  },
  {
    id: "parent-ambassador",
    title: "Parent Ambassador",
    eligibility: "Adults 18+",
    summary:
      "Recommend Skillsvera to other parents through your school, activity and community networks.",
    responsibilities: [
      "Share Skillsvera in parent groups, school communities and activities",
      "Refer interested families to a free consultation or enrollment",
      "Share honest feedback about your family's experience",
    ],
    qualifications: [
      "18 years or older",
      "Active in a school, activity or parent community",
      "Current Skillsvera families preferred",
    ],
  },
  {
    id: "community-partner",
    title: "Community Partner",
    eligibility: "Organizations",
    summary:
      "Bring Skillsvera to your homeschool co-op, PTA, community center or cultural organization.",
    responsibilities: [
      "Host or promote a free demo class for your members",
      "Share enrollment information with your community",
      "Coordinate with our team on scheduling",
    ],
    qualifications: [
      "Lead or represent an organization serving families",
      "Ability to reach families with children in grades 2 to 8",
    ],
  },
];

const steps = [
  { title: "Apply", text: "Complete the application below. It takes about five minutes." },
  { title: "Review", text: "Our team reviews every application and responds within 24 hours." },
  { title: "Onboard", text: "Approved ambassadors receive a personal link, promo code and starter kit." },
  { title: "Earn", text: "Earn 20% of every enrollment you refer, paid monthly." },
];

const faqs = [
  { q: "Who can apply?", a: "Anyone 15 or older. Applicants under 18 need a parent or guardian's consent, and a parent or guardian manages their payout account." },
  { q: "How are commissions paid?", a: "You earn 20% of each completed enrollment through your link or promo code. Commissions are paid monthly, after the enrollment's refund window closes." },
  { q: "Is there a minimum commitment?", a: "No quotas and no required hours. All roles are remote, independent contractor positions." },
  { q: "What happens after I apply?", a: "We review your application within 24 hours and email you a decision. If approved, your onboarding kit arrives the same day." },
];

type FormState = {
  role: string;
  name: string;
  email: string;
  phone: string;
  age: string;
  guardianName: string;
  guardianEmail: string;
  guardianConsent: boolean;
  location: string;
  reach: string;
  experience: string;
  referral: string;
  payoutMethod: string;
  agree: boolean;
  website: string; // honeypot: real people never see or fill this
};

const emptyForm: FormState = {
  role: roles[0].title,
  name: "",
  email: "",
  phone: "",
  age: "",
  guardianName: "",
  guardianEmail: "",
  guardianConsent: false,
  location: "",
  reach: "",
  experience: "",
  referral: "",
  payoutMethod: "",
  agree: false,
  website: "",
};

const stepLabels = ["Role", "About you", "Your approach", "Review"];

const inputClass =
  "w-full rounded-lg bg-ink border border-ink-line px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
const labelClass = "block text-sm font-semibold text-gray-200 mb-2";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

const alreadySubmitted = () => {
  try {
    return localStorage.getItem(SUBMITTED_KEY) === "1";
  } catch {
    return false;
  }
};

export default function Careers() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [step, setStep] = useState(0);
  const [openRole, setOpenRole] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">(alreadySubmitted() ? "sent" : "idle");
  const [error, setError] = useState("");

  const update = (key: keyof FormState, value: string | boolean) =>
    setForm((f) => ({ ...f, [key]: value }));

  const age = Number(form.age);
  const isMinor = form.age !== "" && age < 18;

  const validate = (s: number): string => {
    if (s === 0 && !form.role) return "Please choose a role.";
    if (s === 1) {
      if (form.name.trim().length < 2) return "Please enter your full name.";
      if (!isEmail(form.email)) return "Please enter a valid email address.";
      if (!age || age < 15 || age > 100) return "Applicants must be 15 or older.";
      if (form.role !== "Student Ambassador" && age < 18) return `${form.role}s must be 18 or older.`;
      if (isMinor) {
        if (form.guardianName.trim().length < 2) return "Please enter your parent or guardian's name.";
        if (!isEmail(form.guardianEmail)) return "Please enter a valid parent or guardian email.";
        if (form.guardianEmail.trim().toLowerCase() === form.email.trim().toLowerCase())
          return "Your parent or guardian's email must be different from yours.";
        if (!form.guardianConsent) return "Please confirm your parent or guardian has approved your application.";
      }
      if (form.location.trim().length < 2) return "Please enter your city and state.";
    }
    if (s === 2 && form.reach.trim().length < 40)
      return "Please tell us a bit more about how you'd reach families (a few sentences).";
    if (s === 3 && !form.agree) return "Please agree to the ambassador guidelines.";
    return "";
  };

  const next = () => {
    const msg = validate(step);
    setError(msg);
    if (!msg) setStep((s) => s + 1);
  };

  const back = () => {
    setError("");
    setStep((s) => s - 1);
  };

  const chooseRole = (title: string) => {
    update("role", title);
    setStep(1);
    setError("");
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    for (let s = 0; s <= 3; s++) {
      const msg = validate(s);
      if (msg) {
        setStep(s);
        setError(msg);
        return;
      }
    }

    // Bots fill hidden fields. Quietly accept and drop the submission.
    if (form.website) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`${API_BASE}/api/ambassadors/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: form.role,
          name: form.name,
          email: form.email,
          phone: form.phone,
          age: Number(form.age),
          guardianName: isMinor ? form.guardianName : "",
          guardianEmail: isMinor ? form.guardianEmail : "",
          location: form.location,
          reach: form.reach,
          experience: form.experience,
          referral: form.referral,
          payoutMethod: form.payoutMethod || undefined,
          website: form.website,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setStatus("idle");
        setError(data.error || `We couldn't submit your application. Please try again or email ${TEAM_EMAIL}.`);
        return;
      }
    } catch {
      setStatus("idle");
      setError(`We couldn't reach our server. Please try again or email ${TEAM_EMAIL}.`);
      return;
    }

    try {
      localStorage.setItem(SUBMITTED_KEY, "1");
    } catch {
      /* storage unavailable; ignore */
    }
    setStatus("sent");
  };

  const review: [string, string][] = [
    ["Role", form.role],
    ["Name", form.name],
    ["Email", form.email],
    ["Phone", form.phone || "Not provided"],
    ["Age", form.age],
    ...(isMinor
      ? ([["Parent or guardian", `${form.guardianName} (${form.guardianEmail})`]] as [string, string][])
      : []),
    ["Location", form.location],
    ["How you'd reach families", form.reach],
    ["Relevant experience", form.experience || "Not provided"],
    ["How you heard about us", form.referral || "Not provided"],
    ["Preferred payout", form.payoutMethod || "Not provided"],
  ];

  return (
    <div className="text-white">
      <PageHeader eyebrow="Careers" title="Help more kids find their voice.">
        Join our ambassador team and earn 20% of every enrollment you bring in. Fully remote, flexible hours, and
        we review every application within 24 hours.
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="#roles" arrow>View open roles</Button>
          <Button to="#process" variant="secondary">Our process</Button>
        </div>
      </PageHeader>

      {/* ================= OPEN ROLES ================= */}
      <section id="roles" className="mx-auto mt-24 px-5 sm:px-8 max-w-6xl w-full scroll-mt-32">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">Open Roles</h2>
        <p className="mt-4 mb-12 text-lg text-gray-400">
          {roles.length} open positions · Remote · Independent contractor
        </p>
        <div className="space-y-6">
          {roles.map((role) => {
            const open = openRole === role.id;
            return (
              <div key={role.id} className="bg-ink-soft border border-ink-line rounded-xl">
                <div className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight mb-3">{role.title}</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4" aria-hidden="true" />Remote, United States</span>
                      <span className="flex items-center gap-2"><Clock className="w-4 h-4" aria-hidden="true" />Flexible hours</span>
                      <span className="flex items-center gap-2"><DollarSign className="w-4 h-4" aria-hidden="true" />20% commission</span>
                      <span className="text-blue-300 font-semibold">{role.eligibility}</span>
                    </div>
                    <p className="text-gray-300 mt-4 leading-relaxed max-w-2xl">{role.summary}</p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <button
                      type="button"
                      onClick={() => setOpenRole(open ? null : role.id)}
                      aria-expanded={open}
                      className="px-5 py-3 border border-white/15 text-white rounded-lg font-semibold hover:bg-white/5 transition flex items-center gap-2"
                    >
                      Details {open ? <ChevronUp className="w-4 h-4" aria-hidden="true" /> : <ChevronDown className="w-4 h-4" aria-hidden="true" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => chooseRole(role.title)}
                      className="px-5 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                {open && (
                  <div className="border-t border-ink-line p-8 grid md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Responsibilities</h4>
                      <ul className="space-y-2 text-gray-400">
                        {role.responsibilities.map((r) => <li key={r}>• {r}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Qualifications</h4>
                      <ul className="space-y-2 text-gray-400">
                        {role.qualifications.map((q) => <li key={q}>• {q}</li>)}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" className="mx-auto mt-24 px-5 sm:px-8 max-w-6xl w-full scroll-mt-32">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">Our Hiring Process</h2>
        <p className="mt-4 mb-12 text-lg text-gray-400">
          A simple, transparent process from application to onboarding
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-ink-soft border border-ink-line p-8 rounded-xl">
              <p className="text-blue-400 font-bold mb-2">Step {i + 1}</p>
              <h3 className="font-display text-2xl font-bold tracking-tight mb-3">{s.title}</h3>
              <p className="text-gray-300 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= APPLICATION ================= */}
      <section id="apply" className="mx-auto mt-24 px-5 sm:px-8 max-w-3xl w-full scroll-mt-32">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">Application</h2>
        <p className="mt-4 mb-12 text-lg text-gray-400">
          All fields marked required must be completed. We respond within 24 hours.
        </p>

        <div className="bg-ink-soft border border-ink-line rounded-xl overflow-hidden">
          {status === "sent" ? (
            <div className="text-center p-12">
              <BadgeCheck className="w-16 h-16 text-blue-400 mx-auto mb-6" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-3">Application submitted</h3>
              <p className="text-gray-300 leading-relaxed max-w-md mx-auto">
                {"Thank you for applying. We've emailed you a confirmation, and our team will send a decision within 24 hours."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Progress */}
              <div className="px-8 pt-8">
                <ol className="flex items-center gap-2" aria-label="Application progress">
                  {stepLabels.map((label, i) => (
                    <li key={label} className="flex-1">
                      <div className={`h-1.5 rounded-full ${i <= step ? "bg-blue-500" : "bg-gray-700"}`}></div>
                      <p className={`mt-2 text-xs font-semibold ${i === step ? "text-white" : "text-gray-500"}`}>
                        <span className="hidden sm:inline">{i + 1}. </span>{label}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-8 space-y-6">
                {/* Honeypot: hidden from people, tempting for bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="c-website">Website</label>
                  <input id="c-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} />
                </div>

                {step === 0 && (
                  <fieldset>
                    <legend className="text-xl font-semibold mb-6">Which role are you applying for?</legend>
                    <div className="space-y-3">
                      {roles.map((r) => {
                        const selected = form.role === r.title;
                        return (
                          <label
                            key={r.id}
                            className={`flex items-start gap-4 p-5 rounded-lg border cursor-pointer transition ${
                              selected ? "border-blue-500 bg-blue-500/10" : "border-ink-line hover:border-gray-500"
                            }`}
                          >
                            <input
                              type="radio"
                              name="role"
                              value={r.title}
                              checked={selected}
                              onChange={() => update("role", r.title)}
                              className="mt-1 w-4 h-4 accent-blue-600"
                            />
                            <span>
                              <span className="block font-semibold">{r.title} <span className="text-sm text-gray-400 font-normal">· {r.eligibility}</span></span>
                              <span className="block text-sm text-gray-400 mt-1">{r.summary}</span>
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                )}

                {step === 1 && (
                  <>
                    <h3 className="text-xl font-semibold">About you</h3>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-name" className={labelClass}>Full name *</label>
                        <input id="c-name" autoComplete="name" maxLength={100} className={inputClass} value={form.name} onChange={(e) => update("name", e.target.value)} />
                      </div>
                      <div>
                        <label htmlFor="c-email" className={labelClass}>Email *</label>
                        <input id="c-email" type="email" autoComplete="email" maxLength={150} className={inputClass} value={form.email} onChange={(e) => update("email", e.target.value)} />
                      </div>
                      <div>
                        <label htmlFor="c-phone" className={labelClass}>Phone <span className="text-gray-500 font-normal">(optional)</span></label>
                        <input id="c-phone" type="tel" autoComplete="tel" maxLength={30} className={inputClass} value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                      </div>
                      <div>
                        <label htmlFor="c-age" className={labelClass}>Age *</label>
                        <input id="c-age" type="number" min={15} max={100} className={inputClass} value={form.age} onChange={(e) => update("age", e.target.value)} />
                      </div>
                    </div>
                    {isMinor && (
                      <div className="rounded-lg border border-ink-line p-5 space-y-5">
                        <p className="text-sm text-gray-300">Because you're under 18, we need your parent or guardian's details. We'll contact them before approving your application.</p>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="c-gname" className={labelClass}>Parent or guardian name *</label>
                            <input id="c-gname" maxLength={100} className={inputClass} value={form.guardianName} onChange={(e) => update("guardianName", e.target.value)} />
                          </div>
                          <div>
                            <label htmlFor="c-gemail" className={labelClass}>Parent or guardian email *</label>
                            <input id="c-gemail" type="email" maxLength={150} className={inputClass} value={form.guardianEmail} onChange={(e) => update("guardianEmail", e.target.value)} />
                          </div>
                        </div>
                        <label className="flex items-start gap-3 text-sm text-gray-300">
                          <input type="checkbox" className="mt-0.5 w-5 h-5 accent-blue-600" checked={form.guardianConsent} onChange={(e) => update("guardianConsent", e.target.checked)} />
                          <span>My parent or guardian knows about and approves this application. *</span>
                        </label>
                      </div>
                    )}
                    <div>
                      <label htmlFor="c-location" className={labelClass}>City and state *</label>
                      <input id="c-location" autoComplete="address-level2" maxLength={100} className={inputClass} value={form.location} onChange={(e) => update("location", e.target.value)} />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h3 className="text-xl font-semibold">Your approach</h3>
                    <div>
                      <label htmlFor="c-reach" className={labelClass}>How would you reach families with children in grades 2 to 8? *</label>
                      <textarea id="c-reach" rows={5} maxLength={1000} className={inputClass} value={form.reach} onChange={(e) => update("reach", e.target.value)} />
                      <p className="text-xs text-gray-500 mt-2">{form.reach.trim().length}/1000 · a few sentences is plenty</p>
                    </div>
                    <div>
                      <label htmlFor="c-exp" className={labelClass}>Relevant experience <span className="text-gray-500 font-normal">(optional)</span></label>
                      <textarea id="c-exp" rows={3} maxLength={1000} className={inputClass} value={form.experience} onChange={(e) => update("experience", e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="c-ref" className={labelClass}>How did you hear about us? <span className="text-gray-500 font-normal">(optional)</span></label>
                      <input id="c-ref" maxLength={200} className={inputClass} value={form.referral} onChange={(e) => update("referral", e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="c-payout" className={labelClass}>How would you like to be paid? <span className="text-gray-500 font-normal">(optional)</span></label>
                      <select id="c-payout" className={inputClass} value={form.payoutMethod} onChange={(e) => update("payoutMethod", e.target.value)}>
                        <option value="" className="bg-ink">Choose later</option>
                        <option value="Venmo" className="bg-ink">Venmo</option>
                        <option value="Zelle" className="bg-ink">Zelle</option>
                        <option value="PayPal" className="bg-ink">PayPal</option>
                      </select>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <h3 className="text-xl font-semibold">Review your application</h3>
                    <dl className="divide-y divide-ink-line border border-ink-line rounded-lg">
                      {review.map(([k, v]) => (
                        <div key={k} className="grid sm:grid-cols-3 gap-2 p-4">
                          <dt className="text-sm text-gray-400">{k}</dt>
                          <dd className="sm:col-span-2 text-gray-200 break-words whitespace-pre-line">{v}</dd>
                        </div>
                      ))}
                    </dl>
                    <label className="flex items-start gap-3 text-gray-300">
                      <input type="checkbox" className="mt-1 w-5 h-5 accent-blue-600" checked={form.agree} onChange={(e) => update("agree", e.target.checked)} />
                      <span>I confirm this information is accurate and agree to the ambassador guidelines, including no promises about results and no unofficial discounts. *</span>
                    </label>
                  </>
                )}

                {error && <p className="text-red-400 text-sm" role="alert">{error}</p>}

                <div className="flex justify-between gap-4 pt-2">
                  {step > 0 ? (
                    <button type="button" onClick={back} className="px-6 py-3 border border-white/15 text-white rounded-lg font-semibold hover:bg-white/5 transition">
                      Back
                    </button>
                  ) : <span />}
                  {step < 3 ? (
                    <button type="button" onClick={next} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
                      Continue
                    </button>
                  ) : (
                    <button type="submit" disabled={status === "sending"} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60 flex items-center gap-2">
                      <Check className="w-4 h-4" aria-hidden="true" />
                      {status === "sending" ? "Submitting…" : "Submit Application"}
                    </button>
                  )}
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="mx-auto mt-28 px-5 sm:px-8 max-w-3xl w-full mb-24">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl mb-12">Frequently asked questions</h2>
        <div className="divide-y divide-ink-line border-y border-ink-line">
          {faqs.map((faq) => (
            <div key={faq.q} className="py-6">
              <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
              <p className="text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
