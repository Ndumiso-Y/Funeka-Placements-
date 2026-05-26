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
              "There is always a need" - Recruitment agency in Rustenburg supporting employers and job seekers with staffing and placement services.
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 text-funeka-brand shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="text-sm font-bold text-white/80">Funeka Placements, 28 Abbie Str, Rustenburg Visitors Center, North West, South Africa</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 text-funeka-brand shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.14a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <a className="text-sm font-bold text-white/80 hover:text-funeka-brand transition-colors" href="tel:+27148800501">
                  014 88 00 501
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 text-funeka-action shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/></svg>
                </div>
                <a className="text-sm font-bold text-white/80 hover:text-funeka-action transition-colors" href="https://wa.me/27783426211" target="_blank" rel="noopener noreferrer">
                  WhatsApp 078 342 6211
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 text-funeka-action shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <a className="text-sm font-bold text-funeka-action hover:text-white transition-colors break-all" href="mailto:rustenburg@funekaplacements.co.za">
                  rustenburg@funekaplacements.co.za
                </a>
              </div>
              <div className="text-xs font-bold text-white/60 leading-relaxed">
                <div>Monday–Thursday: 07:30–15:30</div>
                <div>Friday: 07:30–15:00</div>
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
          </div>
        </Container>
      </div>
    </footer>
  );
}
