import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Seo from "../components/Seo.jsx";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton.jsx";
import PromoCarouselPopup from "../components/PromoCarouselPopup.jsx";

export default function SiteLayout() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const heroPages = ["/", "/services", "/process", "/employers", "/candidates"];
  const isHeroPage = heroPages.includes(location.pathname) || location.pathname === "";

  return (
    <div className="min-h-screen flex flex-col">
      <Seo />
      <Navbar />
      <main className={`flex-1 ${isHeroPage ? "" : "pt-20 md:pt-24"}`}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
      <PromoCarouselPopup />
    </div>
  );
}
