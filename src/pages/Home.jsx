import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import TrustStrip from "../components/TrustStrip.jsx";
import { jobs } from "../data/jobs.js";

import heroImg from "../assets/images/home-hero-v3.png";
import verticalImg from "../assets/images/Home-vertical.png";
import servicesHeader from "../assets/images/services-header.png.webp";
import processHero from "../assets/images/process-hero.png.webp";

const deliverItems = [
  { t: "Expert Insight", d: "We understand your business, culture and values, especially within the specialized mining and industrial sectors." },
  { t: "Database Leverage", d: "We provide permanent, temporary, contract and labour hosting solutions backed by a deep candidate database." },
  { t: "Structured Results", d: "Our structured recruitment process ensures every placement delivers the right skills and long-term performance." },
];

export default function Home() {
  const latest = jobs.slice(0, 3);

  // Mobile carousel state
  const [slide, setSlide] = useState(0);
  const timerRef = useRef(null);

  function startTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSlide((s) => (s + 1) % deliverItems.length);
    }, 4000);
  }

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  function goTo(i) {
    setSlide(i);
    startTimer();
  }

  return (
    <div>
      {/* 1) Hero */}
      <section className="relative overflow-hidden border-b border-funeka-anchor min-h-[550px] sm:h-[750px] flex items-center">
        <div className="absolute inset-0">
          <picture>
            <source media="(max-width: 640px)" srcSet={verticalImg} />
            <img src={heroImg} alt="Funeka Placements" className="h-full w-full object-cover object-center sm:object-right" />
          </picture>
          {/* Stronger scrim for navbar + mobile text readability */}
          <div className="absolute inset-0 bg-black/30 sm:bg-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-funeka-anchor/90 via-funeka-anchor/40 to-black/80 sm:from-black/80 sm:via-black/20 sm:to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-funeka-anchor/95 via-funeka-anchor/30 to-transparent sm:from-funeka-anchor/60" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-xl pt-32 pb-16 md:pt-32 ml-0 lg:-ml-20">
            <h1 className="text-5xl md:text-7xl lg:text-[10rem] font-black tracking-tighter text-white uppercase leading-[0.85] drop-shadow-2xl">
              TRUSTED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-funeka-brand to-white">TALENT</span>
            </h1>

            <p className="mt-8 text-base sm:text-xl text-white font-semibold leading-relaxed max-w-lg drop-shadow-lg bg-funeka-anchor/40 sm:bg-transparent rounded-xl p-3 sm:p-0">
              "There is always a need" — We connect industry leaders with top-tier technical talent through rigorous methodology.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <Button as={NavLink} to="/employers" variant="primary" className="w-full sm:w-auto px-10 py-4 text-base shadow-xl">Hire Talent</Button>
              <Button as={NavLink} to="/jobs" variant="outline" className="w-full sm:w-auto px-10 py-4 text-base">Explore Jobs</Button>
            </div>

            <div className="mt-10 flex items-center gap-4 text-xs font-black uppercase tracking-[0.25em] text-white/60">
              <div className="h-px w-12 bg-white/30"></div>
              <span>Expert recruitment since 2013</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2) Journey Cards */}
      <section className="py-24 bg-funeka-bg">
        <Container>
          <SectionHeading
            title="Strategic Entry Points"
            subtitle="Whether you are building a team or growing a career, we provide the industrial bridge."
          />

          <div className="grid gap-8 md:grid-cols-2 mt-16">
            <div className="rounded-[2.5rem] border-2 border-funeka-divider bg-white p-12 shadow-sm hover:shadow-xl transition-all group">
              <div className="h-1.5 w-12 bg-funeka-anchor rounded-full mb-8"></div>
              <h3 className="text-3xl font-black text-funeka-anchor uppercase tracking-tight mb-4">Employers</h3>
              <p className="text-lg text-funeka-text/70 leading-relaxed font-medium mb-10">
                Scale your operations with a structured recruitment process that ensures safety, skills, and culture fit.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button as={NavLink} to="/employers" variant="primary">Hire Talent</Button>
                <Button as={NavLink} to="/process" variant="ghost">Our Process</Button>
              </div>
            </div>

            <div className="rounded-[2.5rem] border-2 border-funeka-divider bg-white p-12 shadow-sm hover:shadow-xl transition-all group">
              <div className="h-1.5 w-12 bg-funeka-action rounded-full mb-8"></div>
              <h3 className="text-3xl font-black text-funeka-anchor uppercase tracking-tight mb-4">Candidates</h3>
              <p className="text-lg text-funeka-anchor/70 leading-relaxed font-medium mb-10">
                Access specialized mining and technical roles. Join our database for exclusive career growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button as={NavLink} to="/jobs" variant="primary">View Openings</Button>
                <Button as={NavLink} to="/apply" variant="ghost">Submit CV</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3) How Funeka Delivers — desktop grid, mobile carousel */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-funeka-brand/5 -translate-x-1/2"></div>
        <Container className="relative z-10">
          <SectionHeading title="How Funeka delivers" subtitle="A recruitment partner that saves your time, protects your reputation, and supports better hiring outcomes." />

          {/* Desktop grid */}
          <div className="hidden md:grid gap-8 md:grid-cols-3 mt-16">
            {deliverItems.map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] border-2 border-funeka-divider bg-white hover:border-funeka-action/20 transition-all group shadow-sm hover:shadow-xl">
                <div className="h-16 w-16 rounded-2xl bg-funeka-brand/20 flex items-center justify-center text-funeka-anchor mb-8 group-hover:bg-funeka-action group-hover:text-white transition-all duration-300">
                  <span className="font-black text-2xl">{i + 1}</span>
                </div>
                <h3 className="text-2xl font-black text-funeka-anchor mb-4 uppercase tracking-tight">{item.t}</h3>
                <p className="text-funeka-text/70 leading-relaxed font-medium text-lg">{item.d}</p>
              </div>
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden mt-12">
            <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-funeka-divider bg-white shadow-xl p-8 min-h-[260px]">
              {deliverItems.map((item, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${i === slide ? "opacity-100" : "opacity-0 absolute inset-0 p-8 pointer-events-none"}`}
                >
                  <div className="h-14 w-14 rounded-2xl bg-funeka-brand/20 flex items-center justify-center text-funeka-anchor mb-6">
                    <span className="font-black text-2xl">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-black text-funeka-anchor mb-3 uppercase tracking-tight">{item.t}</h3>
                  <p className="text-funeka-text/70 leading-relaxed font-medium">{item.d}</p>
                </div>
              ))}
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-3 mt-5">
              {deliverItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === slide ? "w-8 bg-funeka-action" : "w-2.5 bg-funeka-divider"}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4) Process Preview */}
      <section className="py-24 bg-funeka-bg border-y border-funeka-divider">
        <Container>
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            <div>
              <SectionHeading
                title="The Funeka Way"
                subtitle="Our rigorous recruitment process is designed to protect employers and candidates through clarity and professional handling."
              />
              <div className="space-y-6 mt-12">
                {[
                  "In-depth role profiling and culture analysis",
                  "Rigorous candidate screening and verification",
                  "Comprehensive interview coordination",
                  "Post-placement performance follow-ups"
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="h-10 w-10 rounded-xl bg-funeka-anchor flex items-center justify-center text-funeka-brand shadow-lg shadow-funeka-anchor/20 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    </div>
                    <span className="text-xl font-bold text-funeka-anchor/80 group-hover:text-funeka-action transition-colors">{s}</span>
                  </div>
                ))}
              </div>
              <div className="mt-14">
                <Button as={NavLink} to="/process" className="px-12 py-5">View Recruitment Process</Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-funeka-anchor/5 rounded-full blur-[100px]"></div>
              <img src={processHero} alt="Process" className="relative rounded-[3rem] shadow-2xl border-8 border-white w-full" />
              <div className="absolute -bottom-10 -right-10 bg-funeka-anchor p-10 rounded-[2.5rem] shadow-2xl border-4 border-white hidden sm:block">
                <div className="text-5xl font-black text-funeka-brand">100%</div>
                <div className="text-xs font-black text-white/60 uppercase tracking-[0.2em] mt-2">Compliance Focus</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5) Services Preview */}
      <section className="py-24 bg-white overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-10 bg-funeka-brand/5 rounded-full blur-[100px] transition-colors"></div>
                <img src={servicesHeader} alt="Services" className="relative rounded-[3rem] shadow-2xl border-8 border-white w-full" />
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <SectionHeading
                title="Specialized Services"
                subtitle="From permanent placements to contract and labour hosting solutions, we support your industrial hiring goals."
              />
              <div className="grid gap-4 sm:grid-cols-2 mt-12">
                {[
                  "Permanent placements",
                  "Temporary staffing",
                  "Contract solutions",
                  "Labour hosting",
                  "Executive search",
                  "Skills verification"
                ].map((s) => (
                  <div key={s} className="group rounded-2xl border-2 border-funeka-divider bg-white p-6 hover:border-funeka-action transition-all">
                    <div className="flex items-center gap-4">
                      <div className="h-3 w-3 rounded-full bg-funeka-action shadow-[0_0_8px_rgba(14,101,230,0.4)]"></div>
                      <div className="font-black text-funeka-anchor uppercase tracking-tight text-sm">{s}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Button as={NavLink} to="/services" variant="primary" className="px-12 py-5 text-base shadow-xl shadow-funeka-action/20">
                  Explore All Services
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6) Latest Jobs Preview */}
      <section className="py-32 bg-funeka-anchor text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-funeka-action/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>

        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="max-w-3xl">
              <div className="h-1.5 w-16 bg-funeka-action rounded-full mb-8"></div>
              <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none">
                Latest <br />
                <span className="text-funeka-brand">Opportunities</span>
              </h2>
              <p className="mt-8 text-2xl text-white/60 font-medium leading-relaxed">
                Explore our current technical and operational roles in the mining and engineering sectors.
              </p>
            </div>
            <Button as={NavLink} to="/jobs" variant="outline" className="px-12 py-5 text-lg">View Open Portal</Button>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {latest.map((job) => (
              <NavLink
                key={job.id}
                to={`/jobs/${job.id}`}
                className="group p-10 rounded-[2.5rem] bg-white/5 border-2 border-white/10 hover:bg-white/10 hover:border-funeka-action transition-all"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="h-1 w-10 bg-funeka-action rounded-full"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-funeka-brand">New Opening</span>
                </div>
                <h3 className="text-3xl font-black mb-3 leading-tight group-hover:text-funeka-brand transition-colors uppercase tracking-tighter">{job.title}</h3>
                <div className="text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-8">{job.location}</div>
                <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">{job.employmentType}</span>
                  <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-funeka-action group-hover:text-white transition-all shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </Container>
      </section>

      {/* 7) Trust & Compliance Strip */}
      <TrustStrip />
    </div>
  );
}
