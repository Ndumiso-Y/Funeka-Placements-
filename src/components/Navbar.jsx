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
    <header className="sticky top-0 z-40 border-b border-funeka-dividerGrey bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Funeka Placements" className="h-10 w-10 rounded-lg border border-funeka-dividerGrey bg-white p-1" />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-funeka-charcoal">FUNEKA PLACEMENTS</div>
            <div className="text-xs text-funeka-midGrey">There is always a need</div>
          </div>
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <LinkItem key={l.to} to={l.to} label={l.label} />
          ))}
          <NavLink
            to="/staff/login"
            className="ml-2 rounded-xl border border-funeka-dividerGrey px-3 py-2 text-sm text-funeka-charcoal hover:bg-funeka-lightBlueTint transition"
          >
            Staff
          </NavLink>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-funeka-dividerGrey p-2 hover:bg-funeka-lightBlueTint transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
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
