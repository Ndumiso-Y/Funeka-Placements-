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
    <div className="py-12">
      <Container>
        <div className="max-w-xl">
          <h1 className="text-3xl font-semibold text-funeka-charcoal">Staff Login</h1>
          <p className="mt-3 text-funeka-midGrey leading-relaxed">
            Admin-created accounts only. No public self-signup.
          </p>

          <div className="mt-6 rounded-2xl border border-funeka-dividerGrey bg-funeka-lightBlueTint p-5 text-sm text-funeka-midGrey">
            <div className="font-semibold text-funeka-charcoal">Starter access (for testing)</div>
            <div className="mt-2">Email: <span className="font-medium">admin@funekaplacements.co.za</span></div>
            <div>Password: <span className="font-medium">Funeka@123</span></div>
            <div className="mt-2">
              Replace with real authentication (Supabase/Firebase/API) for production.
            </div>
          </div>

          <form onSubmit={onSubmit} className="mt-6 rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium text-funeka-charcoal">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-funeka-dividerGrey px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-funeka-blueHover"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-funeka-charcoal">Password</label>
                <input
                  type="password"
                  className="mt-1 w-full rounded-xl border border-funeka-dividerGrey px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-funeka-blueHover"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {err ? (
                <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  {err}
                </div>
              ) : null}

              <div className="flex flex-wrap items-center justify-between gap-3">
                <Button type="submit">Login</Button>
                <button
                  type="button"
                  onClick={() => setShowForgot(true)}
                  className="text-sm text-funeka-charcoal hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <div className="text-xs text-funeka-midGrey">
                Back to <NavLink className="hover:underline" to="/">Home</NavLink>
              </div>
            </div>
          </form>
        </div>
      </Container>

      {showForgot ? (
        <Modal title="Forgot password" onClose={() => setShowForgot(false)}>
          <p className="text-sm text-funeka-midGrey leading-relaxed">
            For this Phase 1 foundation, password resets are managed by an admin.
            Please email{" "}
            <a className="hover:underline" href="mailto:recruitment@funekaplacements.co.za">
              recruitment@funekaplacements.co.za
            </a>{" "}
            to request a reset.
          </p>
          <div className="mt-4">
            <Button as="a" href="mailto:recruitment@funekaplacements.co.za?subject=Staff%20Password%20Reset%20Request">
              Email admin
            </Button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
