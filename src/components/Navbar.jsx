import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "./Container.jsx";
import logo from "../assets/logos/Logo-Funeka-Transparent.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Company Profile" },
  { to: "/employers", label: "Hire Talent" },
  { to: "/candidates", label: "For Candidates" },
  { to: "/jobs", label: "Jobs" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
];

function LinkItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `relative px-3 py-2 text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${
          isActive
            ? "text-funeka-anchor"
            : "text-funeka-anchor/60 hover:text-funeka-anchor"
        }`
      }
      end={to === "/"}
    >
      {({ isActive }) => (
        <>
          {label}
          {isActive && (
            <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-funeka-pop rounded-full shadow-[0_0_8px_rgba(182,208,225,0.5)]" />
          )}
        </>
      )}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-funeka-divider bg-white/95 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between !max-w-none px-4 lg:px-8">
        <NavLink to="/" className="flex items-center gap-4 group">
          <img src={logo} alt="Funeka Placements" className="h-14 w-14 rounded-xl border border-funeka-divider bg-white p-1.5 shadow-sm group-hover:shadow-md transition-shadow" />
          <div className="leading-tight">
            <div className="text-xl font-black text-funeka-anchor tracking-tighter uppercase">FUNEKA <span className="text-funeka-pop">PLACEMENTS</span></div>
            <div className="text-[10px] font-black text-funeka-anchor/50 uppercase tracking-[0.25em]">Recruitment Specialists</div>
          </div>
        </NavLink>
 
        <nav className="hidden xl:flex items-center gap-1">
          {links.map((l) => (
            <LinkItem key={l.to} to={l.to} label={l.label} />
          ))}
          <NavLink
            to="/staff/login"
            className="ml-6 rounded-xl bg-funeka-anchor px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] text-white hover:bg-funeka-pop transition-all shadow-lg shadow-funeka-anchor/20 active:scale-95"
          >
            Staff Portal
          </NavLink>
        </nav>

        <button
          className="xl:hidden inline-flex items-center justify-center rounded-xl border border-funeka-divider p-2.5 hover:bg-funeka-bg transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open ? (
        <div className="md:hidden border-t border-funeka-divider bg-white">
          <Container className="py-3 flex flex-col gap-1">
            {links.map((l) => (
              <LinkItem key={l.to} to={l.to} label={l.label} onClick={() => setOpen(false)} />
            ))}
            <NavLink
              to="/staff/login"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl border border-funeka-divider px-3 py-2 text-sm text-funeka-anchor hover:bg-funeka-bg transition"
            >
              Staff Login
            </NavLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
