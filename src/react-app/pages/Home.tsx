import { Link } from "react-router-dom";
import { Mic, PiggyBank, Lightbulb, Video, Users, CalendarDays, Clock } from "lucide-react";
import { Container, Eyebrow, Heading, Button, CtaBand } from "../components/ui";
import { SITE, formatPrice, tracks, testimonials, faqs } from "../site";

const trackIcons = { "public-speaking": Mic, "financial-literacy": PiggyBank, entrepreneurship: Lightbulb } as const;

const grades = [2, 3, 4, 5, 6, 7, 8];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-ink-line">
        <Container className="grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.25fr_1fr] lg:pb-28">
          <div>
            <Eyebrow>Live online classes · Grades {SITE.grades}</Eyebrow>
            <Heading as="h1" className="mt-5">
              Kids who can speak up, manage money and build ideas.
            </Heading>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
              Small weekend classes in public speaking, financial literacy and entrepreneurship, taught live by the
              people who wrote the curriculum.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to={SITE.enrollUrl} arrow>
                Enroll for {formatPrice(SITE.price)}
              </Button>
              <Button to="/schedule" variant="secondary">
                Book a free call
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-ink-line bg-ink-soft p-7 sm:p-8">
            <p className="text-sm font-semibold text-gray-400">Every course</p>
            <p className="mt-2 font-display text-5xl font-bold tracking-tight">
              {formatPrice(SITE.price)}
              <span className="ml-2 font-sans text-base font-medium text-gray-400">all-inclusive</span>
            </p>
            <ul className="mt-7 divide-y divide-ink-line border-t border-ink-line">
              {[
                { icon: CalendarDays, text: `${SITE.classesPerCourse} live classes over ${SITE.weeksPerCourse} weekends` },
                { icon: Clock, text: `${SITE.classLengthMinutes} minutes per class` },
                { icon: Users, text: `Never more than ${SITE.maxClassSize} students` },
                { icon: Video, text: "On Zoom, with recordings if you miss one" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 py-3.5 text-[15px] text-gray-200">
                  <Icon className="h-5 w-5 shrink-0 text-blue-400" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Tracks */}
      <section>
        <Container className="py-20 sm:py-28">
          <div className="max-w-2xl">
            <Eyebrow>Three tracks</Eyebrow>
            <Heading className="mt-4">The skills school doesn't have time to teach.</Heading>
          </div>
          <div className="mt-14 divide-y divide-ink-line border-y border-ink-line">
            {tracks.map((t) => {
              const Icon = trackIcons[t.id as keyof typeof trackIcons];
              return (
                <div key={t.id} className="grid gap-6 py-10 md:grid-cols-[1fr_1.2fr_1fr] md:gap-10">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-tight">{t.name}</h3>
                      <p className="mt-1 text-gray-400">{t.short}</p>
                    </div>
                  </div>
                  <p className="leading-relaxed text-gray-300">{t.description}</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[15px] text-gray-400 md:grid-cols-1">
                    {t.skills.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <Link to="/programs" className="font-semibold text-blue-400 hover:text-blue-300">
              Explore the programs →
            </Link>
          </div>
        </Container>
      </section>

      {/* How a course works */}
      <section className="bg-white text-gray-900">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-blue-600">How a course works</p>
              <Heading className="mt-4">Four weekends. One real result.</Heading>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Every course follows the same arc: learn the idea, practice it live with feedback, then finish with a
                project your child is proud to show.
              </p>
            </div>
            <ol className="grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-2">
              {[
                { when: "Week 1", title: "Learn", text: "Core ideas, explained with examples kids actually care about." },
                { when: "Week 2", title: "Practice", text: "Short live exercises in small groups, with feedback from the instructor." },
                { when: "Week 3", title: "Build", text: "Each student develops their own talk, budget or business idea." },
                { when: "Week 4", title: "Present", text: "Students share their work and get specific, encouraging feedback." },
              ].map((s) => (
                <li key={s.when} className="bg-white p-7">
                  <p className="text-sm font-semibold text-blue-600">{s.when}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Curriculum map */}
      <section className="border-b border-ink-line">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-center">
            <div>
              <Eyebrow>The curriculum</Eyebrow>
              <Heading className="mt-4">
                {SITE.courseCount} courses. One path from 2nd to 8th grade.
              </Heading>
              <p className="mt-5 text-lg leading-relaxed text-gray-300">
                Each track comes back to the same skills at a higher level every year, so your child keeps growing
                instead of starting over. Join at any grade and pick up where you fit.
              </p>
            </div>
            <figure className="rounded-xl border border-ink-line bg-ink-soft p-6 sm:p-8">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] border-separate border-spacing-y-3 text-left">
                  <caption className="sr-only">Tracks available by grade</caption>
                  <thead>
                    <tr>
                      <th scope="col" className="w-40 pb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Grade
                      </th>
                      {grades.map((g) => (
                        <th key={g} scope="col" className="pb-2 text-center text-sm font-semibold text-gray-400">
                          {g}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tracks.map((t) => (
                      <tr key={t.id}>
                        <th scope="row" className="pr-4 text-[15px] font-medium text-gray-200">
                          {t.name.replace("Innovation & ", "")}
                        </th>
                        {grades.map((g, i) => (
                          <td key={g} className="px-0.5">
                            <div
                              className="h-2.5 rounded-full bg-blue-500"
                              style={{ opacity: 0.35 + (i / (grades.length - 1)) * 0.65 }}
                              aria-hidden="true"
                            ></div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <figcaption className="mt-4 text-sm text-gray-500">
                Every track runs through every grade, getting deeper each year.
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section>
        <Container className="py-20 sm:py-28">
          <Eyebrow>From parents</Eyebrow>
          <div className="mt-8 grid gap-12 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name}>
                <blockquote className="font-display text-2xl font-semibold leading-snug tracking-tight text-white sm:text-[1.7rem]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-[15px] text-gray-400">
                  <span className="font-semibold text-gray-200">{t.name}</span> · {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* Founders + FAQ */}
      <section className="border-t border-ink-line">
        <Container className="grid gap-16 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <Eyebrow>Who teaches</Eyebrow>
            <Heading className="mt-4">Taught by the founders. Every class.</Heading>
            <p className="mt-5 text-lg leading-relaxed text-gray-300">
              Krishnav, Ushnish and Kaustav built Skillsvera and teach every session themselves. No outsourced tutors,
              no prerecorded lectures.
            </p>
            <div className="mt-8">
              <Button to="/about" variant="secondary" arrow>
                Meet the team
              </Button>
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">Common questions</h2>
            <dl className="mt-6 divide-y divide-ink-line border-y border-ink-line">
              {faqs.slice(1, 5).map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="font-semibold text-white">{f.q}</dt>
                  <dd className="mt-2 leading-relaxed text-gray-400">{f.a}</dd>
                </div>
              ))}
            </dl>
            <Link to="/faq" className="mt-6 inline-block font-semibold text-blue-400 hover:text-blue-300">
              All questions →
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
