import { NavLink } from "react-router-dom";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import TrustStrip from "../components/TrustStrip.jsx";
import { jobs } from "../data/jobs.js";
 
import heroImg from "../assets/images/home-hero.png.webp";
import servicesHeader from "../assets/images/services-header.png.webp";
import processHero from "../assets/images/process-hero.png.webp";
 
export default function Home() {
  const latest = jobs.slice(0, 3);
 
  return (
    <div>
      {/* 1) Hero */}
      <section className="relative overflow-hidden border-b border-funeka-anchor h-[550px] sm:h-[750px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Funeka Placements" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-funeka-anchor/95 via-funeka-anchor/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-funeka-anchor/50 to-transparent" />
        </div>
 
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl px-4 py-1.5 text-[10px] font-black text-funeka-brand shadow-2xl uppercase tracking-[0.2em] mb-8">
              <span className="flex h-2 w-2 rounded-full bg-funeka-pop animate-pulse"></span>
              Specialized Industrial Recruitment
            </div>
 
            <h1 className="text-6xl font-black tracking-tighter text-white sm:text-[10rem] drop-shadow-2xl uppercase leading-[0.85]">
              TRUSTED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-funeka-brand to-funeka-white">TALENT</span>
            </h1>
            
            <p className="mt-10 text-xl sm:text-2xl text-white/90 font-medium leading-relaxed max-w-2xl drop-shadow-lg">
              "There is always a need" — We connect industry leaders with top-tier technical talent through rigorous methodology.
            </p>
 
            <div className="mt-12 flex flex-wrap gap-5">
              <Button as={NavLink} to="/employers" variant="pop" className="px-12 py-5 text-lg">Hire Talent</Button>
              <Button as={NavLink} to="/jobs" variant="outline" className="px-12 py-5 text-lg">Explore Jobs</Button>
            </div>
 
            <div className="mt-12 flex items-center gap-4 text-xs font-black uppercase tracking-[0.25em] text-funeka-brand/60">
              <div className="h-px w-12 bg-funeka-pop/50"></div>
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
            <div className="rounded-[2.5rem] border-2 border-funeka-divider bg-white p-12 shadow-sm hover:shadow-2xl transition-all group">
              <div className="h-1.5 w-12 bg-funeka-anchor rounded-full mb-8 group-hover:w-20 transition-all duration-500"></div>
              <h3 className="text-3xl font-black text-funeka-anchor uppercase tracking-tight mb-4">Employers</h3>
              <p className="text-lg text-funeka-text/70 leading-relaxed font-medium mb-10">
                Scale your operations with a 12-step recruitment process that ensures safety, skills, and culture fit.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button as={NavLink} to="/employers" variant="primary">Hire Talent</Button>
                <Button as={NavLink} to="/process" variant="ghost">Our Process</Button>
              </div>
            </div>
 
            <div className="rounded-[2.5rem] border-2 border-funeka-anchor/10 bg-funeka-brand/20 p-12 shadow-sm hover:shadow-2xl transition-all group">
              <div className="h-1.5 w-12 bg-funeka-pop rounded-full mb-8 group-hover:w-20 transition-all duration-500"></div>
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
 
      {/* 3) How Funeka Delivers */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-funeka-brand/10 -skew-x-12 translate-x-1/2"></div>
        <Container className="relative z-10">
          <SectionHeading title="How Funeka delivers" subtitle="A recruitment partner that saves your time, protects your reputation, and supports better hiring outcomes." />
          <div className="grid gap-8 md:grid-cols-3 mt-16">
            {[
              { t: "Expert Insight", d: "We understand your business, culture and values, especially within the specialized mining and industrial sectors." },
              { t: "Database Leverage", d: "We provide permanent, temporary, contract and labour hosting solutions backed by a deep candidate database." },
              { t: "Structured Results", d: "Our 12-step recruitment process ensures every placement delivers the right skills and long-term performance." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] border-2 border-funeka-divider bg-white hover:border-funeka-anchor/30 transition-all group shadow-sm hover:shadow-2xl">
                <div className="h-16 w-16 rounded-2xl bg-funeka-brand/30 flex items-center justify-center text-funeka-anchor mb-8 group-hover:bg-funeka-pop group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  <span className="font-black text-2xl">{i+1}</span>
                </div>
                <h3 className="text-2xl font-black text-funeka-anchor mb-4 uppercase tracking-tight">{item.t}</h3>
                <p className="text-funeka-text/70 leading-relaxed font-medium text-lg">{item.d}</p>
              </div>
            ))}
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
                subtitle="Our rigorous 12-step recruitment process is designed to protect employers and candidates through clarity and professional handling." 
              />
              <div className="space-y-6 mt-12">
                {[
                  "In-depth role profiling and culture analysis",
                  "Rigorous candidate screening and verification",
                  "Comprehensive interview coordination",
                  "Post-placement performance follow-ups"
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="h-10 w-10 rounded-xl bg-funeka-anchor flex items-center justify-center text-funeka-pop shadow-lg shadow-funeka-anchor/20 group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <span className="text-xl font-bold text-funeka-anchor/80 group-hover:text-funeka-anchor transition-colors">{s}</span>
                  </div>
                ))}
              </div>
              <div className="mt-14">
                <Button as={NavLink} to="/process" className="px-12 py-5">Explore the 12-Step Process</Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-funeka-anchor/5 rounded-full blur-[100px]"></div>
              <img src={processHero} alt="Process" className="relative rounded-[3rem] shadow-2xl border-8 border-white" />
              <div className="absolute -bottom-10 -right-10 bg-funeka-anchor p-10 rounded-[2.5rem] shadow-2xl border-4 border-white hidden sm:block rotate-3">
                <div className="text-5xl font-black text-funeka-pop">100%</div>
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
                <div className="absolute -inset-10 bg-funeka-brand/10 rounded-full blur-[100px] group-hover:bg-funeka-pop/10 transition-colors"></div>
                <img src={servicesHeader} alt="Services" className="relative rounded-[3rem] shadow-2xl border-8 border-white" />
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
                  <div key={s} className="group rounded-2xl border-2 border-funeka-divider bg-white p-6 hover:border-funeka-pop hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4">
                      <div className="h-3 w-3 rounded-full bg-funeka-pop group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(229,159,26,0.4)]"></div>
                      <div className="font-black text-funeka-anchor uppercase tracking-tight text-sm">{s}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Button as={NavLink} to="/services" variant="ghost" className="px-12 py-5">Explore All Services</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
 
      {/* 6) Latest Jobs Preview */}
      <section className="py-32 bg-funeka-anchor text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-funeka-brand/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-funeka-pop/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
        
        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="max-w-3xl">
              <div className="h-1.5 w-16 bg-funeka-pop rounded-full mb-8"></div>
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
                className="group p-10 rounded-[2.5rem] bg-white/5 border-2 border-white/10 hover:bg-white/10 hover:border-funeka-pop/50 transition-all hover:-translate-y-3"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="h-1 w-10 bg-funeka-pop rounded-full"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-funeka-pop">New Opening</span>
                </div>
                <h3 className="text-3xl font-black mb-3 leading-tight group-hover:text-funeka-pop transition-colors uppercase tracking-tighter">{job.title}</h3>
                <div className="text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-8">{job.location}</div>
                <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">{job.employmentType}</span>
                  <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-funeka-pop group-hover:text-white transition-all shadow-xl group-hover:shadow-funeka-pop/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
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
