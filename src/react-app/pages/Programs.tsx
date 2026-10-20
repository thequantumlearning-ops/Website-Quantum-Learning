import { Mic, PiggyBank, Lightbulb, Check } from "lucide-react";
import { Container, Eyebrow, Heading, Button, PageHeader, CtaBand } from "../components/ui";
import { SITE, formatPrice, tracks } from "../site";
import { enrollHref } from "../referral";

const icons = { "public-speaking": Mic, "financial-literacy": PiggyBank, entrepreneurship: Lightbulb } as const;

const outcomes: Record<string, string[]> = {
  "public-speaking": [
    "Plan a talk with a clear beginning, middle and end",
    "Speak to a group without reading from notes",
    "Answer questions and handle nerves",
  ],
  "financial-literacy": [
    "Build and stick to a simple budget",
    "Explain the difference between saving and investing",
    "Make purchase decisions by comparing real options",
  ],
  entrepreneurship: [
    "Turn an everyday problem into a product idea",
    "Estimate costs and set a price",
    "Pitch an idea and improve it with feedback",
  ],
};

export default function Programs() {
  return (
    <>
      <PageHeader eyebrow="Programs" title="Three tracks. Real skills. Built to grow with your child.">
        Every course is {SITE.classesPerCourse} live classes over {SITE.weeksPerCourse} weeks, capped at{" "}
        {SITE.maxClassSize} students, for {formatPrice(SITE.price)}.
      </PageHeader>

      {tracks.map((t, idx) => {
        const Icon = icons[t.id as keyof typeof icons];
        return (
          <section key={t.id} id={t.id} className={`scroll-mt-32 ${idx % 2 === 1 ? "bg-ink-soft" : ""} border-b border-ink-line`}>
            <Container className="grid gap-12 py-20 lg:grid-cols-2 lg:gap-20">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <Heading className="mt-6">{t.name}</Heading>
                <p className="mt-2 text-lg text-blue-300">{t.short}</p>
                <p className="mt-6 text-lg leading-relaxed text-gray-300">{t.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button to={enrollHref(t.id)} arrow>
                    Enroll in {t.name.split(" ")[0] === "Innovation" ? "Entrepreneurship" : t.name}
                  </Button>
                </div>
              </div>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">What they learn</h3>
                  <ul className="mt-4 space-y-3">
                    {t.skills.map((s) => (
                      <li key={s} className="text-gray-200">{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">By the end, they can</h3>
                  <ul className="mt-4 space-y-3">
                    {outcomes[t.id].map((o) => (
                      <li key={o} className="flex gap-3 text-gray-200">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" aria-hidden="true" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <section>
        <Container className="py-20">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <Eyebrow>Coming soon</Eyebrow>
              <Heading as="h3" className="mt-3">Self-paced learning</Heading>
            </div>
            <p className="text-lg leading-relaxed text-gray-300 lg:col-span-2">
              We're building self-paced versions of our courses for busy families, with prerecorded lessons and weekly
              check-ins from an instructor. Book a call if you'd like to hear when they launch.
            </p>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
