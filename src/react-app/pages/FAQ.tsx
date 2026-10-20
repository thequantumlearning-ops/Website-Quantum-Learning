import { Link } from "react-router-dom";
import { Container, PageHeader, CtaBand } from "../components/ui";
import { faqs } from "../site";

export default function FAQ() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Questions parents ask us.">
        Can't find what you're looking for? Book a free call or email us anytime.
      </PageHeader>
      <section>
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl divide-y divide-ink-line border-y border-ink-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-2xl font-normal text-gray-500 transition group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="pb-5 pr-10 leading-relaxed text-gray-300">
                  {f.a}
                  {f.link && (
                    <>
                      {" "}
                      <Link to={f.link.to} className="text-blue-400 hover:text-blue-300">
                        {f.link.label} →
                      </Link>
                    </>
                  )}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="Still have questions?" />
    </>
  );
}
