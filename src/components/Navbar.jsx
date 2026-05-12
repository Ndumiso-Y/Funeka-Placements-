import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "./Container.jsx";
import logo from "../assets/logos/Logo-Funeka-Transparent.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/employers", label: "Employers" },
  { to: "/candidates", label: "Candidates" },
  { to: "/jobs", label: "Jobs" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Toggle solid background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const heroPages = ["/", "/services", "/process", "/employers", "/candidates"];
  const isHeroPage = heroPages.includes(location.pathname) || location.pathname === "";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-white/5 transition-all duration-300 ${
        scrolled || !isHeroPage ? "bg-[#132D5D] shadow-xl" : "bg-black/10"
      }`}
    >
      <Container className="flex h-20 md:h-24 items-center justify-between !max-w-none px-6 sm:px-8 lg:px-12">
        <NavLink to="/" className="flex items-center gap-4 group">
          <div className="leading-tight">
            <div className="text-lg md:text-xl font-black text-white tracking-tighter uppercase">
              FUNEKA <span className="text-funeka-brand">PLACEMENTS</span>
            </div>
            <div className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-[0.25em]">
              Recruitment Specialists
            </div>
          </div>
        </NavLink>

        {/* Desktop navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative px-3 py-2 text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${
                  isActive ? "text-white" : "text-white hover:text-funeka-brand"
                }`
              }
              end={l.to === "/"}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-funeka-action rounded-full shadow-[0_0_12px_rgba(14,101,230,0.8)]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="xl:hidden inline-flex items-center justify-center rounded-xl border border-white/20 p-2.5 text-white hover:bg-white/10 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile navigation panel */}
      {open && (
        <div className="xl:hidden border-t border-white/10 bg-[#012E41] shadow-2xl">
          <Container className="py-6 flex flex-col gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-sm font-bold uppercase tracking-widest rounded-xl transition-all ${
                    isActive ? "bg-white/10 text-white" : "text-white hover:bg-white/5"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
