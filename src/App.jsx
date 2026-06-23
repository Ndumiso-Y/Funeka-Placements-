import { BrowserRouter, HashRouter, Navigate, Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Employers from "./pages/Employers.jsx";
import Candidates from "./pages/Candidates.jsx";
import Jobs from "./pages/Jobs.jsx";
import JobDetail from "./pages/JobDetail.jsx";
import Apply from "./pages/Apply.jsx";
import Services from "./pages/Services.jsx";
import Process from "./pages/Process.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import NotFound from "./pages/NotFound.jsx";
import StaffUnavailable from "./pages/StaffUnavailable.jsx";
import StaffLogin from "./pages/staff/StaffLogin.jsx";
import StaffDashboard from "./pages/staff/StaffDashboard.jsx";

export default function App() {
  const usesRootBase = import.meta.env.BASE_URL === "/";
  const Router = usesRootBase ? BrowserRouter : HashRouter;

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        {/* Public site — wrapped in SiteLayout (Navbar, Footer, Seo) */}
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Staff portal — no SiteLayout */}
        <Route path="/staff" element={<Navigate to="/staff/login" replace />} />
        <Route path="/staff/login" element={<StaffLogin />} />
        <Route path="/staff/*" element={<StaffUnavailable />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="/staff/dashboard" element={<StaffDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
