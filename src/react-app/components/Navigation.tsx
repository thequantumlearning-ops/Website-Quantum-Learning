import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SITE } from "../site";

const links = [
  { href: "/programs", label: "Programs" },
  { href: "/pricing", label: "Pricing" },
  { href: "/enterprise", label: "For Schools" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/careers", label: "Careers" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[15px] font-medium transition-colors ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-line bg-ink/95 backdrop-blur">
      <div className="flex h-10 items-center justify-center border-b border-ink-line bg-ink-soft px-4 text-center text-[13px] font-medium text-gray-300">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-400" aria-hidden="true"></span>
        <span className="hidden sm:inline">{SITE.announcement}</span>
        <span className="sm:hidden">{SITE.announcementShort}</span>
      </div>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Skillsvera home">
          <img src="/skillsvera-logo.png" alt="" className="h-8 w-8 rounded object-contain" />
          <span className="font-display text-xl font-bold tracking-tight text-white">Skillsvera</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.href} to={l.href} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href={SITE.courseUrl} className="text-[15px] font-medium text-gray-400 transition-colors hover:text-white">
            Self-paced beta
          </a>
          <Link
            to="/schedule"
            className="inline-flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Free consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-gray-300 hover:text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav aria-label="Mobile" className="border-t border-ink-line bg-ink md:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                className={({ isActive }) =>
                  `py-3 text-base font-medium ${isActive ? "text-white" : "text-gray-300"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a href={SITE.courseUrl} className="py-3 text-base font-medium text-gray-300">
              Self-paced beta
            </a>
            <Link
              to="/schedule"
              className="mt-3 inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 font-semibold text-white"
            >
              Schedule a free consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
