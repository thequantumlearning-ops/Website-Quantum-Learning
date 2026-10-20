import { Container, Eyebrow, Heading, PageHeader, CtaBand } from "../components/ui";

const team = [
  {
    name: "Krishnav",
    role: "Founder",
    bio: "Krishnav started Skillsvera to give students the confidence, money sense and creativity that school rarely has time for. He leads the curriculum and the overall vision.",
  },
  {
    name: "Ushnish",
    role: "Co-Founder · Financial Literacy",
    bio: "Ushnish leads the Financial Literacy track, turning budgeting, saving and investing into hands-on lessons kids can use right away.",
  },
  {
    name: "Kaustav",
    role: "Co-Founder · Innovation & Entrepreneurship",
    bio: "Kaustav leads the Innovation & Entrepreneurship track, teaching students to solve real problems, work in teams and pitch their ideas.",
  },
];

const beliefs = [
  { title: "Practice beats lectures", text: "Kids get better at speaking, budgeting and building by doing it, with feedback, in a small group." },
  { title: "Skills should compound", text: "Our tracks revisit the same skills every year at a higher level, so nothing is learned once and forgotten." },
  { title: "Small classes, real attention", text: "We cap every class so each student speaks, asks questions and gets noticed." },
];

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About us" title="We teach the skills we wish we'd learned earlier.">
        Skillsvera helps students in grades 2 to 8 become confident communicators, smart decision-makers with money and
        creative problem-solvers.
      </PageHeader>

      <section className="border-b border-ink-line">
        <Container className="grid gap-12 py-20 lg:grid-cols-3">
          {beliefs.map((b, i) => (
            <div key={b.title}>
              <p className="font-display text-sm font-bold text-blue-400">0{i + 1}</p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight">{b.title}</h2>
              <p className="mt-3 leading-relaxed text-gray-300">{b.text}</p>
            </div>
          ))}
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-28">
          <Eyebrow>The team</Eyebrow>
          <Heading className="mt-4 max-w-2xl">The founders teach every class.</Heading>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {team.map((m) => (
              <article key={m.name}>
                <div
                  className="flex aspect-[4/5] w-full items-end rounded-xl border border-ink-line bg-ink-soft p-6"
                  role="img"
                  aria-label={`Photo of ${m.name}`}
                >
                  <span className="font-display text-7xl font-bold text-white/10">{m.name[0]}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">{m.name}</h3>
                <p className="mt-1 text-sm font-semibold text-blue-400">{m.role}</p>
                <p className="mt-3 leading-relaxed text-gray-300">{m.bio}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Come meet us." text="Book a free call and talk with a founder about your child's goals." />
    </>
  );
}
