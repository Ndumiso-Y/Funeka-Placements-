import { NavLink } from "react-router-dom";
import Container from "./Container.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-funeka-dark text-white border-t-8 border-funeka-action/10">
      <Container className="py-16">
        {/* 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="text-2xl font-black text-white tracking-tighter uppercase mb-6">FUNEKA <span className="text-funeka-brand">PLACEMENTS</span></div>
            <div className="text-base font-bold text-white/80 leading-relaxed max-w-sm mb-8 border-l-4 border-funeka-brand pl-5">
              "There is always a need" — Your specialized recruitment partner for mining and industrial excellence.
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 text-funeka-brand shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="text-sm font-bold text-white/80">28 Abbie Str, Rustenburg Visitors Center</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 text-funeka-action shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <a className="text-sm font-bold text-funeka-action hover:text-white transition-colors break-all" href="mailto:rustenburg@funekaplacements.co.za">
                  rustenburg@funekaplacements.co.za
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-8">Quick Links</div>
            <div className="grid gap-4 text-sm font-bold">
              <NavLink className="text-white/80 hover:text-funeka-brand transition-all" to="/about">Company Profile</NavLink>
              <NavLink className="text-white/80 hover:text-funeka-brand transition-all" to="/services">Services</NavLink>
              <NavLink className="text-white/80 hover:text-funeka-brand transition-all" to="/jobs">Open Roles</NavLink>
              <NavLink className="text-white/80 hover:text-funeka-brand transition-all" to="/apply">Submit CV</NavLink>
              <NavLink className="text-white/80 hover:text-funeka-brand transition-all" to="/employers">Hire Talent</NavLink>
              <NavLink className="text-white/80 hover:text-funeka-brand transition-all" to="/privacy">Privacy (POPIA)</NavLink>
            </div>
          </div>

          {/* Compliance */}
          <div>
            <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-8">Compliance</div>
            <p className="text-sm font-medium text-white/70 leading-relaxed">
              We operate with full transparency, maintaining POPIA compliance across all recruitment phases, protecting both industrial partners and technical specialists.
            </p>
          </div>
        </div>
      </Container>

      <div className="bg-funeka-dark py-8 border-t border-white/5">
        <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
          <div className="flex flex-col gap-2">
            <div>© {year} Funeka Placements. Strategic Industrial Recruitment.</div>
            <div>
              Designed and Hosted by <span className="text-white/80">Embark Digitals</span>. <a href="https://www.embarkdigitals.com" target="_blank" rel="noreferrer" className="text-funeka-action hover:text-white transition-colors lowercase tracking-normal">www.embarkdigitals.com</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <NavLink className="hover:text-funeka-action transition-colors" to="/contact">Contact</NavLink>
            <NavLink className="hover:text-funeka-action transition-colors" to="/staff/login">Staff Portal</NavLink>
          </div>
        </Container>
      </div>
    </footer>
  );
}
