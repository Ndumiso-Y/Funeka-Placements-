import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "../../components/Container.jsx";
import Button from "../../components/Button.jsx";
import Modal from "../../components/Modal.jsx";
import { getSession, login, seedDefaultUsers } from "../../utils/auth.js";

export default function StaffLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [showForgot, setShowForgot] = useState(false);

  useEffect(() => {
    seedDefaultUsers();
    const s = getSession();
    if (s) navigate("/staff", { replace: true });
  }, [navigate]);

  function onSubmit(e) {
    e.preventDefault();
    setErr("");
    const res = login(email, password);
    if (!res.ok) {
      setErr(res.message);
      return;
    }
    navigate("/staff", { replace: true });
  }

  return (
    <div className="py-24 bg-funeka-bg min-h-screen flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-funeka-anchor uppercase tracking-tighter mb-4">Staff <span className="text-funeka-brand">Login</span></h1>
            <p className="text-lg text-funeka-text font-medium">
              Authorized access only. Secure recruitment management portal.
            </p>
          </div>

          <div className="rounded-[2.5rem] border-2 border-funeka-divider bg-white p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-funeka-action/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="mb-10 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 text-sm text-funeka-text">
              <div className="font-black text-amber-600 uppercase tracking-widest mb-3">System Status: Backend Pending</div>
              <div className="space-y-1 font-bold">
                <p className="text-amber-800 leading-relaxed mb-2">
                  This portal is currently running as a high-fidelity frontend UI prototype.
                </p>
                <p className="text-amber-800/80 leading-relaxed text-xs">
                  <strong>Required Setup:</strong> To enable secure login, session management, and role-based access control, this application must be integrated with a secure backend authentication provider (e.g., Supabase, Firebase Auth, or a custom Node/NextJS backend).
                </p>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="text-xs font-black text-funeka-anchor uppercase tracking-[0.2em] mb-2 block">Email Address</label>
                <input
                  type="email"
                  className="w-full rounded-2xl border-2 border-funeka-divider px-5 py-4 text-sm font-bold focus:outline-none focus:border-funeka-brand transition-colors bg-funeka-bg/30"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@funeka.co.za"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-black text-funeka-anchor uppercase tracking-[0.2em] mb-2 block">Secret Password</label>
                <input
                  type="password"
                  className="w-full rounded-2xl border-2 border-funeka-divider px-5 py-4 text-sm font-bold focus:outline-none focus:border-funeka-brand transition-colors bg-funeka-bg/30"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              {err ? (
                <div className="rounded-xl border-2 border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-red-600 animate-shake">
                  {err}
                </div>
              ) : null}

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                <Button type="submit" className="w-full sm:w-auto px-12 py-4 shadow-xl shadow-funeka-brand/30">Enter Portal</Button>
                <button
                  type="button"
                  onClick={() => setShowForgot(true)}
                  className="text-xs font-black text-funeka-anchor/40 hover:text-funeka-anchor uppercase tracking-[0.2em] transition-colors"
                >
                  Forgot access?
                </button>
              </div>

              <div className="pt-8 border-t border-funeka-divider text-center">
                <NavLink className="text-xs font-black text-funeka-brand uppercase tracking-[0.2em] hover:text-funeka-deepBlue transition-colors" to="/">
                  ← Back to main site
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </Container>

      {showForgot ? (
        <Modal title="Forgot password" onClose={() => setShowForgot(false)}>
          <p className="text-sm text-funeka-text leading-relaxed">
            For this Phase 1 foundation, password resets are managed by an admin.
            Please email{" "}
            <a className="hover:underline" href="mailto:rustenburg@funekaplacements.co.za">
              rustenburg@funekaplacements.co.za
            </a>{" "}
            to request a reset.
          </p>
          <div className="mt-4">
            <Button as="a" href="mailto:rustenburg@funekaplacements.co.za?subject=Staff%20Password%20Reset%20Request">
              Email admin
            </Button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
