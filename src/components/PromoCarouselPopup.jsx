import { useEffect, useMemo, useState } from "react";

const CAMPAIGN_END_DATE = "2026-06-26";
const SESSION_KEY = "funeka_june_2026_promo_seen";
const AUTO_SLIDE_MS = 5000;

const PROMO_SLIDES = [
  {
    title: "Engineering Foreman",
    src: "/promos/june-2026/engineering-foreman.jpeg",
  },
  {
    title: "LHD Operator",
    src: "/promos/june-2026/lhd-operator.jpeg",
  },
  {
    title: "Auto Electrician",
    src: "/promos/june-2026/auto-electrician.jpeg",
  },
  {
    title: "Production Planner",
    src: "/promos/june-2026/production-planner.jpeg",
  },
  {
    title: "Mine Overseer",
    src: "/promos/june-2026/mine-overseer.jpeg",
  },
  {
    title: "Artisan Diesel Mechanic",
    src: "/promos/june-2026/artisan-diesel-mechanic.jpeg",
  },
  {
    title: "Diesel Fitter",
    src: "/promos/june-2026/diesel-fitter.jpeg",
  },
  {
    title: "Diesel Mechanic Trackless Mining",
    src: "/promos/june-2026/diesel-mechanic-trackless-mining.jpeg",
  },
  {
    title: "Drill Rig Operator",
    src: "/promos/june-2026/drill-rig-operator.jpeg",
  },
  {
    title: "Shift Supervisor (TMM)",
    src: "/promos/june-2026/shift-supervisor-tmm.jpeg",
  },
  {
    title: "Quantity Surveyor",
    src: "/promos/june-2026/quantity-surveyor.jpeg",
  },
];

function getLocalDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isCampaignActive() {
  return getLocalDateString() <= CAMPAIGN_END_DATE;
}

export default function PromoCarouselPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = useMemo(() => PROMO_SLIDES, []);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname.startsWith("/staff")) return;
    if (!isCampaignActive()) return;
    if (sessionStorage.getItem(SESSION_KEY) === "true") return;

    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen || slides.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTO_SLIDE_MS);

    return () => window.clearInterval(timer);
  }, [isOpen, slides.length]);

  useEffect(() => {
    if (!isOpen) return undefined;

    function onKeyDown(event) {
      if (event.key === "Escape") closePopup();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  function closePopup() {
    sessionStorage.setItem(SESSION_KEY, "true");
    setIsOpen(false);
  }

  function showPrevious() {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % slides.length);
  }

  if (!isOpen || !activeSlide) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-funeka-dark/75 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="June 2026 Funeka Placements opportunities"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close promotional popup"
        onClick={closePopup}
      />

      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-funeka-divider px-5 py-4 sm:px-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-funeka-brand">
              June 2026 Opportunities
            </p>
            <h2 className="mt-1 text-lg font-black uppercase tracking-tight text-funeka-anchor sm:text-2xl">
              Now Recruiting
            </h2>
          </div>
          <button
            type="button"
            onClick={closePopup}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-funeka-divider text-2xl font-bold leading-none text-funeka-anchor transition-colors hover:border-funeka-brand hover:text-funeka-brand"
            aria-label="Close promotional popup"
          >
            &times;
          </button>
        </div>

        <div className="relative bg-funeka-bg">
          <img
            src={activeSlide.src}
            alt={`${activeSlide.title} recruitment promotion`}
            className="h-[70vh] max-h-[720px] min-h-[340px] w-full object-contain"
          />

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-funeka-dark/75 text-2xl font-bold text-white shadow-lg transition-colors hover:bg-funeka-brand"
            aria-label="Previous promotion"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-funeka-dark/75 text-2xl font-bold text-white shadow-lg transition-colors hover:bg-funeka-brand"
            aria-label="Next promotion"
          >
            ›
          </button>
        </div>

        <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm font-bold text-funeka-anchor">
            {activeSlide.title}
          </p>
          <div className="flex flex-wrap gap-2" aria-label="Promotion carousel controls">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-funeka-brand"
                    : "w-2.5 bg-funeka-divider hover:bg-funeka-anchor/40"
                }`}
                aria-label={`Show ${slide.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
