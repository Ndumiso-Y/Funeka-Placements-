import { NavLink } from "react-router-dom";
import Container from "./Container.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-funeka-anchor text-white border-t-8 border-funeka-pop/10">
      <Container className="py-24">
        <div className="grid gap-16 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="text-3xl font-black text-white tracking-tighter uppercase mb-8">FUNEKA <span className="text-funeka-brand">PLACEMENTS</span></div>
            <div className="text-xl font-medium text-white/60 leading-relaxed max-w-sm italic mb-10 border-l-4 border-funeka-brand/30 pl-6">
              “There is always a need” — Your specialized recruitment partner for mining and industrial excellence.
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 text-funeka-brand shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="text-sm font-bold text-white/80">28 Abbie Str, Rustenburg Visitors Center</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-6 w-6 text-funeka-pop shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <a className="text-sm font-bold text-funeka-pop hover:text-white transition-colors" href="mailto:rustenburg@funekaplacements.co.za">
                  rustenburg@funekaplacements.co.za
                </a>
              </div>
            </div>
          </div>
 
          <div>
            <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-10">Strategic Access</div>
            <div className="grid gap-5 text-sm font-bold">
              <NavLink className="text-white/60 hover:text-funeka-brand transition-all flex items-center gap-2 group" to="/about">
                <div className="h-1 w-0 bg-funeka-brand group-hover:w-4 transition-all"></div> Company Profile
              </NavLink>
              <NavLink className="text-white/60 hover:text-funeka-brand transition-all flex items-center gap-2 group" to="/services">
                <div className="h-1 w-0 bg-funeka-brand group-hover:w-4 transition-all"></div> Specialized Services
              </NavLink>
              <NavLink className="text-white/60 hover:text-funeka-brand transition-all flex items-center gap-2 group" to="/process">
                <div className="h-1 w-0 bg-funeka-brand group-hover:w-4 transition-all"></div> 12-Step Protocol
              </NavLink>
              <NavLink className="text-white/60 hover:text-funeka-brand transition-all flex items-center gap-2 group" to="/jobs">
                <div className="h-1 w-0 bg-funeka-brand group-hover:w-4 transition-all"></div> Open Opportunities
              </NavLink>
              <NavLink className="text-white/60 hover:text-funeka-brand transition-all flex items-center gap-2 group" to="/apply">
                <div className="h-1 w-0 bg-funeka-brand group-hover:w-4 transition-all"></div> Register CV
              </NavLink>
              <NavLink className="text-white/60 hover:text-funeka-brand transition-all flex items-center gap-2 group" to="/privacy">
                <div className="h-1 w-0 bg-funeka-brand group-hover:w-4 transition-all"></div> Privacy (POPIA)
              </NavLink>
            </div>
          </div>
 
          <div>
            <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-10">Compliance Mandate</div>
            <p className="text-sm font-medium text-white/50 leading-relaxed">
              We operate with full technical transparency, maintaining POPIA compliance across all strategic recruitment phases. We support ethical hiring and documented decisions that protect the integrity of our industrial partners and technical specialists.
            </p>
            <div className="mt-8 flex gap-4">
               <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group hover:border-funeka-pop hover:text-funeka-pop transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               </div>
               <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group hover:border-funeka-brand hover:text-funeka-brand transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
               </div>
            </div>
          </div>
        </div>
      </Container>
 
      <div className="bg-black/20 py-10 border-t border-white/5">
        <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
          <div>© {year} Funeka Placements. Strategic Industrial Recruitment.</div>
          <div className="flex gap-10">
            <NavLink className="hover:text-funeka-pop transition-colors" to="/contact">Contact</NavLink>
            <NavLink className="hover:text-funeka-pop transition-colors" to="/staff/login">Staff Portal</NavLink>
          </div>
        </Container>
      </div>
    </footer>
  );
}
