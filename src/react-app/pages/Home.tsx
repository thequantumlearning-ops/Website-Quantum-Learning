import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mic,
  PiggyBank,
  Lightbulb,
  Video,
  Users,
  CalendarDays,
  CalendarCheck,
  Clock,
  GraduationCap,
  Check,
  Minus,
  Quote,
  PlayCircle,
} from "lucide-react";
import { Container, Eyebrow, Heading, Button, CtaBand } from "../components/ui";
import { SITE, formatPrice, tracks, levels, comparison, testimonials } from "../site";
import { enrollHref } from "../referral";

const trackIcons = { "public-speaking": Mic, "financial-literacy": PiggyBank, entrepreneurship: Lightbulb } as const;

const outcomes: Record<string, string[]> = {
  "public-speaking": [
    "Plan a talk with a clear beginning, middle and end",
    "Speak to a group without reading from notes",
    "Answer questions and handle nerves",
  ],
  "financial-literacy": [
    "Build and stick to a simple budget",
    "Explain the difference between saving and investing",
    "Compare real options before buying",
  ],
  entrepreneurship: [
    "Turn an everyday problem into a product idea",
    "Estimate costs and set a price",
    "Pitch an idea and improve it with feedback",
  ],
};

const facts = [
  { icon: CalendarDays, value: `${SITE.classesPerCourse} live classes`, label: `over ${SITE.weeksPerCourse} weekends` },
  { icon: Users, value: `${SITE.maxClassSize} students max`, label: "so every child speaks up" },
  { icon: GraduationCap, value: "Taught by the founders", label: "who wrote the curriculum" },
  { icon: Video, value: "Every class recorded", label: "in case you miss one" },
];

function Tabs({
  active,
  onChange,
  idPrefix,
  size = "md",
}: {
  active: number;
  onChange: (i: number) => void;
  idPrefix: string;
  size?: "sm" | "md";
}) {
  return (
    <div role="tablist" aria-label="Choose a track" className="flex flex-wrap gap-2">
      {tracks.map((t, i) => {
        const selected = i === active;
        const label = t.id === "entrepreneurship" ? "Entrepreneurship" : t.name;
        return (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`${idPrefix}-tab-${i}`}
            aria-selected={selected}
            aria-controls={`${idPrefix}-panel`}
            onClick={() => onChange(i)}
            className={`rounded-full border font-semibold transition ${
              size === "sm" ? "min-h-[40px] px-4 text-sm" : "min-h-[44px] px-5 text-[15px]"
            } ${
              selected
                ? "border-blue-500 bg-blue-600 text-white"
                : "border-ink-line text-gray-300 hover:border-gray-500 hover:text-white"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default function Home() {
  const [heroTab, setHeroTab] = useState(0);
  const [curTab, setCurTab] = useState(0);
  const heroTrack = tracks[heroTab];
  const curTrack = tracks[curTab];
  const HeroIcon = trackIcons[heroTrack.id as keyof typeof trackIcons];

  return (
    <>
      {/* Hero */}
      <section>
        <Container className="grid items-center gap-14 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.45fr_1fr] lg:gap-16 lg:pb-28">
          <div>
            <Eyebrow>For students in grades {SITE.grades}</Eyebrow>
            <Heading as="h1" className="mt-5">
              Kids who speak up, manage money and build ideas.
            </Heading>
            <p className="mt-6 max-w-xl text-lg leading-[1.6] text-gray-300">
              Live weekend classes on Zoom in public speaking, financial literacy and entrepreneurship, capped at{" "}
              {SITE.maxClassSize} students so every child participates. Self-paced courses are in private beta for families
              who need more flexibility.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/programs" arrow>
                Explore live programs
              </Button>
              <Button to="/schedule" variant="secondary">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Schedule a consultation
              </Button>
            </div>
            <figure className="mt-10 flex max-w-lg items-start gap-3 border-l-2 border-ink-line pl-4">
              <Quote className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" aria-hidden="true" />
              <div>
                <blockquote className="text-[15px] leading-relaxed text-gray-300">
                  “Both of my children loved Skillsvera. They come out of each session excited to share what they've
                  learned.”
                </blockquote>
                <figcaption className="mt-1 text-sm text-gray-500">Mukul Pal, parent</figcaption>
              </div>
            </figure>
          </div>

          {/* Interactive preview card */}
          <div className="rounded-2xl border border-ink-line bg-ink-soft p-6 shadow-soft sm:p-7">
            <Tabs active={heroTab} onChange={setHeroTab} idPrefix="hero" size="sm" />
            <div id="hero-panel" role="tabpanel" aria-labelledby={`hero-tab-${heroTab}`} className="mt-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/15 text-blue-300">
                  <HeroIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold tracking-tightish">{heroTrack.name}</p>
                  <p className="text-sm text-gray-400">{heroTrack.short}</p>
                </div>
              </div>
              <p className="mt-5 text-[15px] font-semibold text-gray-200">By the end, your child can</p>
              <ul className="mt-3 space-y-2.5">
                {outcomes[heroTrack.id].map((o) => (
                  <li key={o} className="flex gap-2.5 text-[15px] leading-snug text-gray-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-end justify-between gap-4 border-t border-ink-line pt-5">
                <div>
                  <p className="font-display text-3xl font-bold tracking-tightish">{formatPrice(SITE.price)}</p>
                  <p className="text-sm text-gray-400">
                    {SITE.classesPerCourse} classes · {SITE.weeksPerCourse} weeks
                  </p>
                </div>
                <Button to={enrollHref(heroTrack.id)} className="min-h-[44px] px-5">
                  Enroll
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust strip: true facts only */}
      <section className="border-y border-ink-line bg-ink-soft">
        <Container className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4">
          {facts.map(({ icon: Icon, value, label }) => (
            <div key={value} className="flex items-start gap-3">
              <Icon className="mt-1 h-5 w-5 shrink-0 text-blue-400" aria-hidden="true" />
              <div>
                <p className="font-semibold text-white">{value}</p>
                <p className="text-sm text-gray-400">{label}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Problem vs solution */}
      <section>
        <Container className="grid gap-14 py-24 sm:py-28 lg:grid-cols-[1fr_1.5fr] lg:items-center">
          <div>
            <Eyebrow>Why Skillsvera</Eyebrow>
            <Heading className="mt-4">School teaches the facts. We teach kids to use them.</Heading>
            <p className="mt-5 text-lg leading-[1.6] text-gray-300">
              Most kids never practice speaking to a room, handling money or turning an idea into a plan. Our classes are
              built around doing exactly that, with an instructor right there to help.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink-line shadow-soft">
            <table className="w-full text-left text-[15px]">
              <caption className="sr-only">Typical classroom compared with Skillsvera</caption>
              <thead>
                <tr className="bg-ink-soft">
                  <th scope="col" className="w-[28%] px-5 py-4 font-medium text-gray-500">
                    <span className="sr-only">Topic</span>
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold text-gray-400">Typical classroom</th>
                  <th scope="col" className="bg-blue-600/10 px-5 py-4 font-semibold text-blue-300">Skillsvera</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-line">
                {comparison.map((row) => (
                  <tr key={row.topic}>
                    <th scope="row" className="px-5 py-4 align-top font-semibold text-gray-200">
                      {row.topic}
                    </th>
                    <td className="px-5 py-4 align-top text-gray-400">
                      <span className="flex gap-2">
                        <Minus className="mt-1 h-4 w-4 shrink-0 text-gray-600" aria-hidden="true" />
                        {row.typical}
                      </span>
                    </td>
                    <td className="bg-blue-600/5 px-5 py-4 align-top text-gray-100">
                      <span className="flex gap-2">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                        {row.ours}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Curriculum tabs */}
      <section className="border-y border-ink-line bg-ink-soft">
        <Container className="py-24 sm:py-28">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow>The curriculum</Eyebrow>
              <Heading className="mt-4">
                {SITE.courseCount} courses that grow with your child from 2nd to 8th grade.
              </Heading>
            </div>
            <Tabs active={curTab} onChange={setCurTab} idPrefix="curriculum" />
          </div>

          <div
            id="curriculum-panel"
            role="tabpanel"
            aria-labelledby={`curriculum-tab-${curTab}`}
            className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr]"
          >
            <div className="rounded-2xl border border-ink-line bg-ink p-8 shadow-soft">
              <h3 className="font-display text-2xl font-bold tracking-tightish">{curTrack.name}</h3>
              <p className="mt-3 leading-[1.6] text-gray-300">{curTrack.description}</p>
              <h4 className="mt-8 text-sm font-semibold text-gray-400">Key skills</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {curTrack.skills.map((s) => (
                  <li key={s} className="rounded-full border border-ink-line px-3.5 py-1.5 text-sm text-gray-200">
                    {s}
                  </li>
                ))}
              </ul>
              <h4 className="mt-8 text-sm font-semibold text-gray-400">Outcomes</h4>
              <ul className="mt-3 space-y-2.5">
                {outcomes[curTrack.id].map((o) => (
                  <li key={o} className="flex gap-2.5 text-gray-200">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <ol className="space-y-4">
              {levels[curTrack.id].map((lvl, i) => (
                <li key={lvl.grades} className="flex gap-5 rounded-2xl border border-ink-line bg-ink p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500/40 font-display text-sm font-bold text-blue-300">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{lvl.grades}</p>
                    <p className="mt-1 leading-[1.6] text-gray-400">{lvl.focus}</p>
                  </div>
                </li>
              ))}
              <li className="px-1 pt-2 text-sm text-gray-500">
                Students revisit each skill at a higher level every year, so they keep building instead of starting over.
              </li>
            </ol>
          </div>
        </Container>
      </section>

      {/* Learning models */}
      <section>
        <Container className="py-24 sm:py-28">
          <div className="max-w-2xl">
            <Eyebrow>Ways to learn</Eyebrow>
            <Heading className="mt-4">Live classes or self-paced.</Heading>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-2xl border border-blue-500/30 bg-ink-soft p-8 shadow-soft sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-bold tracking-tightish">Live weekend classes</h3>
                <span className="rounded-full bg-blue-600/15 px-3 py-1 text-sm font-semibold text-blue-300">
                  Enrolling now
                </span>
              </div>
              <p className="mt-3 max-w-lg leading-[1.6] text-gray-300">
                Real-time classes on Zoom where kids practice out loud, work in small groups and get feedback while it
                still matters.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: CalendarDays, t: `${SITE.classesPerCourse} classes over ${SITE.weeksPerCourse} weekends` },
                  { icon: Clock, t: `${SITE.classLengthMinutes} minutes each` },
                  { icon: Users, t: `Up to ${SITE.maxClassSize} students` },
                  { icon: Video, t: "Recordings of every class" },
                ].map(({ icon: Icon, t }) => (
                  <li key={t} className="flex items-center gap-2.5 text-[15px] text-gray-200">
                    <Icon className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button to={SITE.enrollUrl} arrow>
                  Enroll for {formatPrice(SITE.price)}
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-ink-line p-8 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-bold tracking-tightish">Self-paced</h3>
                <span className="rounded-full border border-ink-line px-3 py-1 text-sm font-semibold text-gray-400">
                  Private beta
                </span>
              </div>
              <p className="mt-3 leading-[1.6] text-gray-400">
                Recorded lessons kids can take on their own schedule, with weekly check-ins from an instructor.
              </p>
              <div className="mt-8">
                <Button to={SITE.courseUrl} variant="secondary">
                  <PlayCircle className="h-4 w-4" aria-hidden="true" />
                  Self-paced beta
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="border-t border-ink-line">
        <Container className="py-24 sm:py-28">
          <Eyebrow>From parents</Eyebrow>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col justify-between rounded-2xl border border-ink-line bg-ink-soft p-8 shadow-soft sm:p-10">
                <blockquote className="font-display text-xl font-semibold leading-[1.45] tracking-tightish text-white sm:text-[1.4rem]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/15 font-display font-bold text-blue-300"
                    aria-hidden="true"
                  >
                    {t.name[0]}
                  </span>
                  <span className="text-[15px]">
                    <span className="block font-semibold text-gray-100">{t.name}</span>
                    <span className="text-gray-400">Skillsvera {t.role.toLowerCase()}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="border-t border-ink-line bg-ink-soft">
        <Container className="py-24 sm:py-28">
          <div className="max-w-2xl">
            <Eyebrow>Pricing</Eyebrow>
            <Heading className="mt-4">Simple, honest pricing.</Heading>
            <p className="mt-5 text-lg leading-[1.6] text-gray-300">One price for every course. No tiers, no upsells.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-2xl border border-blue-500/30 bg-ink p-8 shadow-soft sm:p-10">
              <p className="text-sm font-semibold text-gray-400">Families · per course</p>
              <p className="mt-2 font-display text-6xl font-bold tracking-tightish">{formatPrice(SITE.price)}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  `${SITE.classesPerCourse} live classes`,
                  `Max ${SITE.maxClassSize} students`,
                  "Class recordings",
                  "Materials included",
                  "Project feedback",
                  "Certificate of completion",
                ].map((f) => (
                  <li key={f} className="flex gap-2.5 text-gray-200">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button to={SITE.enrollUrl} arrow>
                  Enroll now
                </Button>
                <Link to="/refund-policy" className="text-[15px] text-gray-400 underline-offset-4 hover:text-white hover:underline">
                  See our refund policy
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-ink-line bg-ink p-8 sm:p-10">
              <p className="text-sm font-semibold text-gray-400">Schools and programs</p>
              <p className="mt-2 font-display text-3xl font-bold tracking-tightish">Curriculum licensing</p>
              <p className="mt-4 leading-[1.6] text-gray-400">
                Teach our curriculum with your own staff. Includes lesson plans, materials, rubrics and teacher training.
                Pricing depends on grades and enrollment.
              </p>
              <div className="mt-8">
                <Button to="/enterprise" variant="secondary" arrow>
                  Learn about licensing
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
