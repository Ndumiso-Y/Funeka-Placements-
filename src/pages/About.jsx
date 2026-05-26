import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import aboutTeam from "../assets/images/about-team.png.webp";
import mvImg from "../assets/images/mission-vision.png.webp";

const values = [
  "Team Work",
  "Transparency",
  "Results",
  "Integrity",
  "Commitment",
  "Efficiency",
];

export default function About() {
  return (
    <div>
      <section className="border-b border-funeka-anchor bg-white overflow-hidden relative min-h-[600px] flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-funeka-bg" />
        <Container className="py-24 relative z-10">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-funeka-anchor/10 bg-funeka-bg px-4 py-1.5 text-[10px] font-black text-funeka-anchor mb-8 uppercase tracking-[0.25em]">
                <span className="flex h-2 w-2 rounded-full bg-funeka-action animate-pulse"></span>
                Rustenburg Recruitment Agency
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-funeka-anchor tracking-tight leading-[0.95] uppercase">
                About Funeka Placements <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-funeka-brand to-funeka-anchor">Rustenburg</span>
              </h1>
              <p className="mt-10 text-xl text-funeka-text/70 leading-relaxed max-w-xl font-medium">
                Funeka Placements is a recruitment agency in Rustenburg specializing in the <span className="text-funeka-anchor font-black border-b-4 border-funeka-action/30">mining and industrial sectors</span>.
              </p>
              <p className="mt-8 text-lg text-funeka-text/60 leading-relaxed max-w-xl">
                By leveraging our candidate databases and a rigorous process, we support dependable staff placement services for employers and career placement support for job seekers in North West.
              </p>
              
              <div className="mt-12 p-10 rounded-[3rem] border-4 border-funeka-bg bg-white shadow-2xl flex items-start gap-8 group hover:border-funeka-action/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-funeka-anchor flex items-center justify-center text-funeka-action flex-shrink-0 shadow-xl transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div className="text-[10px] font-black text-funeka-anchor/40 uppercase tracking-[0.25em] mb-2">Connect With Operations</div>
                  <div className="text-funeka-anchor leading-relaxed font-bold">
                    <div className="text-lg">28 Abbie Str, Rustenburg Visitors Center</div>
                    <div className="mt-3">
                      <a className="text-funeka-action font-black hover:text-funeka-anchor transition-colors border-b-4 border-funeka-action/20" href="mailto:rustenburg@funekaplacements.co.za">
                        rustenburg@funekaplacements.co.za
                      </a>
                    </div>
                    <div className="mt-3 text-sm text-funeka-anchor/70">
                      <a className="hover:text-funeka-action transition-colors" href="tel:+27148800501">014 88 00 501</a>
                      <span className="mx-2 text-funeka-anchor/30">|</span>
                      <a className="hover:text-funeka-action transition-colors" href="https://wa.me/27783426211" target="_blank" rel="noopener noreferrer">WhatsApp 078 342 6211</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <img src={aboutTeam} alt="Funeka Placements recruitment agency team in Rustenburg" className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-[#132D5D] p-10 rounded-[2.5rem] shadow-2xl hidden lg:block">
                <div className="text-white font-black text-5xl leading-none tracking-tighter">10+</div>
                <div className="text-white/60 font-black text-[10px] uppercase tracking-widest mt-2">Years Expert</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-white">
        <Container>
          <SectionHeading title="Strategic Intent" subtitle="What guides our work and how we define success for our global industrial partners." />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center mt-20">
            <div className="space-y-10">
              <div className="rounded-[3rem] border-2 border-funeka-divider bg-funeka-bg/30 p-12 shadow-sm hover:shadow-2xl hover:border-funeka-brand/30 hover:bg-white transition-all group">
                <div className="h-1.5 w-12 bg-funeka-brand rounded-full mb-8 group-hover:bg-funeka-action transition-all duration-500"></div>
                <h3 className="text-3xl font-black text-funeka-anchor mb-6 uppercase tracking-tight">Mission</h3>
                <p className="text-funeka-text/70 leading-relaxed font-medium text-xl">
                  To create lasting relationships with clients and candidates based on honesty, integrity, and deep technical trust through a unique recruitment experience.
                </p>
              </div>

              <div className="rounded-[3rem] border-2 border-funeka-divider bg-funeka-bg/30 p-12 shadow-sm hover:shadow-2xl hover:border-funeka-action/30 hover:bg-white transition-all group">
                <div className="h-1.5 w-12 bg-funeka-action rounded-full mb-8 group-hover:w-20 transition-all duration-500"></div>
                <h3 className="text-3xl font-black text-funeka-anchor mb-6 uppercase tracking-tight">Vision</h3>
                <p className="text-funeka-text/70 leading-relaxed font-medium text-xl">
                  To be the leading recruitment partner that clients and candidates always choose to connect with for strategic technical placements.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-funeka-brand/5 rounded-[4rem] blur-3xl"></div>
              <img src={mvImg} alt="Funeka Placements mission and vision for recruitment services" className="relative rounded-[3rem] shadow-2xl border-8 border-white" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-funeka-anchor text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-funeka-action/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
        <Container className="relative z-10">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-funeka-action rounded-full"></div>
              <div className="h-1 w-4 bg-funeka-brand rounded-full"></div>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Operational Values
            </h2>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl font-medium">
              The professional behaviours that shape how we deliver recruitment excellence.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div key={v} className="group rounded-[2rem] border-2 border-white/10 bg-white/10 p-8 hover:bg-white/10 hover:border-funeka-action/50 transition-all">
                <div className="flex items-center gap-5">
                  <div className="h-12 w-12 rounded-2xl bg-white/20 text-white flex items-center justify-center text-lg font-black group-hover:bg-funeka-action group-hover:text-white transition-all duration-300 shrink-0">
                    {i + 1}
                  </div>
                  <div className="text-xl font-black text-white uppercase tracking-tight font-black">{v}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-32 bg-white">
        <Container>
          <SectionHeading title="Service Delivery" subtitle="A practical overview of our strategic commitments." />
          <div className="grid gap-10 lg:grid-cols-2 mt-20">
            <div className="rounded-[3rem] border-2 border-funeka-divider bg-funeka-bg/30 p-12 shadow-sm hover:shadow-2xl hover:border-funeka-brand/30 hover:bg-white transition-all group">
              <div className="h-16 w-16 rounded-2xl bg-funeka-anchor text-funeka-brand flex items-center justify-center mb-8 group-hover:bg-funeka-action group-hover:text-white transition-all">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="text-3xl font-black text-funeka-anchor mb-6 uppercase tracking-tight">For Partners</h3>
              <p className="text-funeka-text/60 leading-relaxed font-medium mb-10 text-lg">
                We support your operations by sourcing technical talent, coordinating rigorous screenings, and assisting with placement - aligned to your specific role requirements and culture.
              </p>
              <ul className="space-y-5">
                {[
                  "Mining-specific needs analysis",
                  "Candidate sourcing from technical databases",
                  "Structured shortlisting protocols",
                  "Documentation and retention follow-up"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-funeka-anchor font-black text-xs uppercase tracking-[0.1em]">
                    <div className="h-2 w-2 rounded-full bg-funeka-brand"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[3rem] border-2 border-funeka-divider bg-funeka-bg/30 p-12 shadow-sm hover:shadow-2xl hover:border-funeka-action/30 hover:bg-white transition-all group">
              <div className="h-16 w-16 rounded-2xl bg-funeka-anchor text-funeka-action flex items-center justify-center mb-8 group-hover:bg-funeka-action group-hover:text-white transition-all">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
              </div>
              <h3 className="text-3xl font-black text-funeka-anchor mb-6 uppercase tracking-tight">For Specialists</h3>
              <p className="text-funeka-text/60 leading-relaxed font-medium mb-10 text-lg">
                We bridge your technical skills to elite industrial roles, supporting your career journey with professional communication and transparent strategic feedback.
              </p>
              <ul className="space-y-5">
                {[
                  "Exclusive mining & industrial roles",
                  "Secure, POPIA-compliant portal",
                  "Professional interview coaching",
                  "Strategic database for future matches"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-funeka-anchor font-black text-xs uppercase tracking-[0.1em]">
                    <div className="h-2 w-2 rounded-full bg-funeka-action"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
