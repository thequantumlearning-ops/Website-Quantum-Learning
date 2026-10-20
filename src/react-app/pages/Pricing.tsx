import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Container, Eyebrow, Heading, Button, PageHeader, CtaBand } from "../components/ui";
import { SITE, formatPrice, tracks } from "../site";

const included = [
  `${SITE.classesPerCourse} live classes, ${SITE.classLengthMinutes} minutes each`,
  `Small groups of ${SITE.maxClassSize} students or fewer`,
  "Taught by our founders",
  "Recordings of every class",
  "Downloadable materials",
  "Feedback on your child's final project",
  "Digital certificate of completion",
  "Recap email for parents after each course",
];

const pricingFaqs = [
  { q: "Are there any extra fees?", a: "No. The course price covers everything listed above. There are no add-ons, upgrades or materials fees." },
  { q: "Is the price the same for every track?", a: `Yes. Public Speaking, Financial Literacy and Entrepreneurship courses are all ${formatPrice(SITE.price)}.` },
  { q: "How do I pay?", a: "Securely online by card when you enroll." },
];

export default function Pricing() {
  return (
    <>
      <PageHeader eyebrow="Pricing" title="One price. Everything included.">
        No tiers, no packages, no upsells. Every course in every track is {formatPrice(SITE.price)}.
      </PageHeader>

      <section className="border-b border-ink-line">
        <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="rounded-xl border border-ink-line bg-ink-soft p-8 sm:p-10">
            <p className="text-sm font-semibold text-gray-400">Per course</p>
            <p className="mt-2 font-display text-7xl font-bold tracking-tight">{formatPrice(SITE.price)}</p>
            <p className="mt-3 text-gray-400">
              {SITE.classesPerCourse} classes over {SITE.weeksPerCourse} weeks · about {formatPrice(Math.round(SITE.price / SITE.classesPerCourse))} per class
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to={SITE.enrollUrl} arrow className="flex-1">
                Enroll now
              </Button>
              <Button to="/schedule" variant="secondary" className="flex-1">
                Book a free call
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Running a school or program? See{" "}
              <Link to="/enterprise" className="text-blue-400 hover:text-blue-300">curriculum licensing</Link>.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Available for {tracks.map((t) => t.name).join(", ").replace(/, ([^,]*)$/, " and $1")}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">What's included</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-gray-200">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Eyebrow>Questions</Eyebrow>
            <Heading className="mt-4">About pricing</Heading>
          </div>
          <dl className="divide-y divide-ink-line border-y border-ink-line">
            {pricingFaqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="font-semibold text-white">{f.q}</dt>
                <dd className="mt-2 leading-relaxed text-gray-400">{f.a}</dd>
              </div>
            ))}
            <div className="py-6">
              <dt className="font-semibold text-white">What if it isn't a fit?</dt>
              <dd className="mt-2 leading-relaxed text-gray-400">
                See our{" "}
                <Link to="/refund-policy" className="text-blue-400 underline-offset-4 hover:underline">
                  refund policy
                </Link>
                , or email us and we'll work it out.
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <CtaBand title="Not sure where to start?" />
    </>
  );
}
