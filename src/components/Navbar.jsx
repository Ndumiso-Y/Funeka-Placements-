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
        `rounded-lg px-3 py-2 text-sm transition ${
          isActive
            ? "bg-funeka-lightBlueTint text-funeka-charcoal"
            : "text-funeka-charcoal hover:bg-funeka-lightBlueTint"
        }`
      }
      end={to === "/"}
    >
      {label}
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
    <header className="sticky top-0 z-40 border-b border-funeka-dividerGrey bg-white/95 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between !max-w-none px-4 lg:px-8">
        <NavLink to="/" className="flex items-center gap-4 group">
          <img src={logo} alt="Funeka Placements" className="h-14 w-14 rounded-xl border border-funeka-dividerGrey bg-white p-1.5 shadow-sm group-hover:shadow-md transition-shadow" />
          <div className="leading-tight">
            <div className="text-lg font-extrabold text-funeka-charcoal tracking-tighter">FUNEKA PLACEMENTS</div>
            <div className="text-[10px] font-bold text-funeka-vibrantBlue uppercase tracking-[0.2em]">Recruitment Specialists</div>
          </div>
        </NavLink>

        <nav className="hidden xl:flex items-center gap-1">
          {links.map((l) => (
            <LinkItem key={l.to} to={l.to} label={l.label} />
          ))}
          <NavLink
            to="/staff/login"
            className="ml-4 rounded-full bg-funeka-charcoal px-6 py-2 text-sm font-semibold text-white hover:bg-funeka-darkGreyHover transition shadow-sm"
          >
            Staff Portal
          </NavLink>
        </nav>

        <button
          className="xl:hidden inline-flex items-center justify-center rounded-xl border border-funeka-dividerGrey p-2.5 hover:bg-funeka-lightBlueTint transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open ? (
        <div className="md:hidden border-t border-funeka-dividerGrey bg-white">
          <Container className="py-3 flex flex-col gap-1">
            {links.map((l) => (
              <LinkItem key={l.to} to={l.to} label={l.label} onClick={() => setOpen(false)} />
            ))}
            <NavLink
              to="/staff/login"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl border border-funeka-dividerGrey px-3 py-2 text-sm text-funeka-charcoal hover:bg-funeka-lightBlueTint transition"
            >
              Staff Login
            </NavLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
