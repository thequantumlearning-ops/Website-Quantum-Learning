import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/programs", label: "Programs" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/enterprise", label: "For Schools" },
  { href: "/faq", label: "FAQ" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[15px] font-medium transition-colors ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Skillsvera home">
          <img src="/skillsvera-logo.png" alt="" className="h-8 w-8 rounded object-contain" />
          <span className="font-display text-xl font-bold tracking-tight text-white">Skillsvera</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.href} to={l.href} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/schedule"
            className="inline-flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Book a free call
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
            <Link
              to="/schedule"
              className="mt-3 inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 font-semibold text-white"
            >
              Book a free call
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
