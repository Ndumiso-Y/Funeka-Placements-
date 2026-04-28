import { NavLink } from "react-router-dom";
import Container from "./Container.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-funeka-dividerGrey bg-white">
      <div className="bg-funeka-lightBlueTint">
        <Container className="py-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-funeka-charcoal">FUNEKA PLACEMENTS</div>
              <div className="mt-2 text-sm text-funeka-midGrey leading-relaxed">
                “There is always a need”
              </div>
              <div className="mt-4 text-sm text-funeka-midGrey">
                <div>28 Abbie Str, Rustenburg Visitors Center</div>
                <div className="mt-1">
                  <a className="hover:underline" href="mailto:rustenburg@funekaplacements.co.za">
                    rustenburg@funekaplacements.co.za
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-funeka-charcoal">Quick Links</div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <NavLink className="text-funeka-charcoal hover:underline" to="/about">
                  Company Profile
                </NavLink>
                <NavLink className="text-funeka-charcoal hover:underline" to="/services">
                  Services
                </NavLink>
                <NavLink className="text-funeka-charcoal hover:underline" to="/process">
                  Process
                </NavLink>
                <NavLink className="text-funeka-charcoal hover:underline" to="/jobs">
                  Jobs
                </NavLink>
                <NavLink className="text-funeka-charcoal hover:underline" to="/apply">
                  Submit CV
                </NavLink>
                <NavLink className="text-funeka-charcoal hover:underline" to="/privacy">
                  Privacy (POPIA)
                </NavLink>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-funeka-charcoal">Trust & Compliance</div>
              <div className="mt-3 text-sm text-funeka-midGrey leading-relaxed">
                We respect confidentiality, fair recruitment practices, and the protection of personal information in line with POPIA.
                We also support ethical hiring decisions and documented recruitment processes that protect both employers and candidates.
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-funeka-dividerGrey pt-4 text-sm text-funeka-midGrey md:flex-row md:items-center md:justify-between">
            <div>© {year} Funeka Placements. All rights reserved.</div>
            <div className="flex gap-4">
              <NavLink className="hover:underline" to="/contact">Contact</NavLink>
              <NavLink className="hover:underline" to="/staff/login">Staff Portal</NavLink>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
