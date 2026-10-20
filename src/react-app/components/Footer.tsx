import { Link } from "react-router-dom";
import { SITE } from "../site";

const columns = [
  {
    title: "Programs",
    links: [
      { to: "/programs#public-speaking", label: "Public Speaking" },
      { to: "/programs#financial-literacy", label: "Financial Literacy" },
      { to: "/programs#entrepreneurship", label: "Entrepreneurship" },
      { to: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About us" },
      { to: "/enterprise", label: "For schools" },
      { to: "/careers", label: "Careers" },
      { to: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Policies",
    links: [
      { to: "/privacy-policy", label: "Privacy" },
      { to: "/terms-of-service", label: "Terms" },
      { to: "/refund-policy", label: "Refunds" },
      { to: "/code-of-conduct", label: "Code of conduct" },
      { to: "/cookie-policy", label: "Cookies" },
      { to: "/disclaimer", label: "Disclaimer" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/skillsvera-logo.png" alt="" className="h-8 w-8 rounded object-contain" />
            <span className="font-display text-xl font-bold tracking-tight text-white">Skillsvera</span>
          </Link>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-gray-400">
            Live online classes in public speaking, financial literacy and entrepreneurship for grades {SITE.grades}.
          </p>
          <a href={`mailto:${SITE.email}`} className="mt-4 inline-block text-[15px] font-medium text-blue-400 hover:text-blue-300">
            {SITE.email}
          </a>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h2 className="text-sm font-semibold text-white">{col.title}</h2>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[15px] text-gray-400 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-ink-line">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-gray-500 sm:px-8">
          © {new Date().getFullYear()} SkillsVera LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
