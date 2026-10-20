import { useEffect, useRef } from "react";
import { Mail, MessageSquare, ListChecks } from "lucide-react";
import { Container, PageHeader } from "../components/ui";
import { SITE } from "../site";

const expect = [
  { icon: MessageSquare, title: "Tell us about your child", text: "Their grade, interests and what you'd like them to get better at." },
  { icon: ListChecks, title: "Get a recommendation", text: "We'll suggest which track and course to start with, and why." },
  { icon: Mail, title: "Leave with next steps", text: "Upcoming dates, how enrollment works, and answers to any questions." },
];

export default function Schedule() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const link = document.createElement("link");
    link.href = "https://calendar.google.com/calendar/scheduling-button-script.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    script.onload = () => {
      (window as any).calendar?.schedulingButton?.load({
        url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0JIYF3UZj73Dg7hZm-6Li3SyDHtlzYBA80vnQYK6ULvL2gqNnvKmtmtjftbVbzFMIh5EYigjho?gv=true",
        color: "#2563EB",
        label: "Choose a time",
        target: document.getElementById("google-calendar-button"),
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <PageHeader eyebrow="Free consultation" title="Book a free consultation.">
        No pressure and no obligation. We'll help you figure out whether Skillsvera is a good fit for your child.
      </PageHeader>

      <section>
        <Container className="grid gap-14 py-20 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">What we'll cover</h2>
            <ul className="mt-8 space-y-8">
              {expect.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 leading-relaxed text-gray-400">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-ink-line bg-ink-soft p-8">
            <h2 className="font-display text-2xl font-bold tracking-tight">Pick a time</h2>
            <p className="mt-3 leading-relaxed text-gray-300">
              Choose a slot that works for you and you'll get a calendar invite with the meeting link.
            </p>
            <div id="google-calendar-button" className="mt-6 min-h-[48px]"></div>
            <div className="mt-8 border-t border-ink-line pt-6 text-[15px] text-gray-400">
              Prefer email?{" "}
              <a href={`mailto:${SITE.email}`} className="font-medium text-blue-400 hover:text-blue-300">
                {SITE.email}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
