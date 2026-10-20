import { BookOpen, Presentation, ClipboardCheck, GraduationCap } from "lucide-react";
import { Container, Eyebrow, Heading, Button, PageHeader } from "../components/ui";
import { SITE } from "../site";

const included = [
  { icon: BookOpen, title: "Ready-to-teach lesson plans", text: "Step-by-step plans your teachers can run with minimal prep." },
  { icon: Presentation, title: "Slides and student materials", text: "Class slides, worksheets and activities for every lesson." },
  { icon: ClipboardCheck, title: "Rubrics and assessments", text: "Simple tools to measure progress and share it with families." },
  { icon: GraduationCap, title: "Teacher training", text: "A short onboarding session and ongoing support from our team." },
];

const steps = [
  { title: "Discovery call", text: "We learn about your students, schedule and goals." },
  { title: "Proposal", text: "You receive a plan and pricing tailored to your school." },
  { title: "Pilot", text: "Try the curriculum with one class before committing school-wide." },
  { title: "Launch", text: "Roll out with trained teachers and ongoing support." },
];

const audiences = ["Private schools", "Homeschool co-ops", "After-school programs", "Community organizations"];

export default function Enterprise() {
  return (
    <>
      <PageHeader eyebrow="For schools" title="Bring Skillsvera to your students.">
        License our public speaking, financial literacy and entrepreneurship curriculum for grades {SITE.grades}, and
        teach it with your own staff.
      </PageHeader>

      <section className="border-b border-ink-line">
        <Container className="py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <Eyebrow>What's included</Eyebrow>
              <Heading className="mt-4">Everything your teachers need.</Heading>
            </div>
            <div className="grid gap-10 sm:grid-cols-2">
              {included.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <Icon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white text-gray-900">
        <Container className="py-20">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-blue-600">How it works</p>
          <Heading className="mt-4 max-w-xl">From first call to classroom.</Heading>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-white p-7">
                <p className="text-sm font-semibold text-blue-600">Step {i + 1}</p>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section>
        <Container className="grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Who it's for</Eyebrow>
            <Heading className="mt-4">Built for small schools and programs.</Heading>
            <ul className="mt-8 flex flex-wrap gap-3">
              {audiences.map((a) => (
                <li key={a} className="rounded-full border border-ink-line px-4 py-2 text-[15px] text-gray-200">
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-ink-line bg-ink-soft p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold tracking-tight">Request a proposal</h2>
            <p className="mt-3 leading-relaxed text-gray-300">
              Pricing depends on grades and number of students. Tell us about your school and we'll follow up with a
              plan that fits.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to={`mailto:${SITE.email}?subject=${encodeURIComponent("School curriculum inquiry")}`} arrow>
                Email our team
              </Button>
              <Button to="/schedule" variant="secondary">
                Book a call
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
