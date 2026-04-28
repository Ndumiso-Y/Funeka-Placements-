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
      <section className="border-b border-funeka-dividerGrey bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-funeka-lightBlueTint/30 skew-x-12 transform translate-x-20" />
        <Container className="py-20 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-funeka-vibrantBlue/20 bg-funeka-vibrantBlue/5 px-3 py-1 text-xs font-bold text-funeka-vibrantBlue mb-6 uppercase tracking-widest">
                Established Recruitment Partners
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-funeka-charcoal tracking-tight leading-[1.1]">
                Company <span className="text-funeka-vibrantBlue">Profile</span>
              </h1>
              <p className="mt-6 text-lg text-funeka-midGrey leading-relaxed max-w-xl">
                Funeka Placements is a premier recruitment agency specializing in the <span className="text-funeka-charcoal font-bold underline decoration-funeka-vibrantBlue/30 underline-offset-4">mining and industrial sectors</span>. We work with organizations ranging from SMEs to large-scale enterprises across South Africa.
              </p>
              <p className="mt-4 text-lg text-funeka-midGrey leading-relaxed max-w-xl">
                By leveraging our extensive <span className="text-funeka-charcoal font-bold">candidate databases</span> and a rigorous 12-step recruitment process, we ensure that every placement delivers the right skills, cultural fit, and long-term performance — with a primary focus on <span className="text-funeka-charcoal font-bold">mining-specific roles</span> across technical and operational departments.
              </p>
              
              <div className="mt-10 p-8 rounded-3xl border border-funeka-dividerGrey bg-white shadow-xl flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-funeka-charcoal flex items-center justify-center text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-funeka-charcoal uppercase tracking-wider mb-2">Connect With Us</div>
                  <div className="text-funeka-midGrey leading-relaxed">
                    <div className="font-medium">28 Abbie Str, Rustenburg Visitors Center</div>
                    <div className="mt-1">
                      <a className="text-funeka-vibrantBlue font-bold hover:underline" href="mailto:rustenburg@funekaplacements.co.za">
                        rustenburg@funekaplacements.co.za
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
               <div className="absolute -inset-4 bg-funeka-vibrantBlue/10 rounded-3xl blur-3xl" />
              <div className="rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative">
                <img src={aboutTeam} alt="About Funeka Placements" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeading title="Mission and vision" subtitle="What guides our work and how we define success for clients and candidates." />
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-funeka-charcoal">Mission</div>
              <p className="mt-3 text-funeka-midGrey leading-relaxed">
                To create lasting relationships with clients and candidates based on honesty, integrity, trust and mutual respect through a unique recruitment experience.
              </p>

              <div className="mt-6 text-sm font-semibold text-funeka-charcoal">Vision</div>
              <p className="mt-3 text-funeka-midGrey leading-relaxed">
                To be the leading recruitment partner that clients and candidates always choose to connect with.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-funeka-dividerGrey shadow-soft">
              <img src={mvImg} alt="Mission and vision" className="h-full w-full object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-funeka-dividerGrey bg-funeka-lightBlueTint py-12">
        <Container>
          <SectionHeading title="Our values" subtitle="The behaviours that shape how we deliver recruitment services." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v} className="rounded-xl border border-funeka-dividerGrey bg-white p-5 shadow-soft">
                <div className="text-sm font-semibold text-funeka-charcoal">{v}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeading title="What we do" subtitle="A practical overview for employers and candidates." />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-funeka-charcoal">For employers</div>
              <p className="mt-3 text-funeka-midGrey leading-relaxed">
                We support hiring by sourcing and screening candidates, coordinating interviews, and assisting with placement — aligned to your role requirements, culture and performance expectations.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-funeka-midGrey">
                <li>• Role briefing and mining-specific needs analysis</li>
                <li>• Candidate sourcing from specialized databases</li>
                <li>• Shortlisting and interview coordination</li>
                <li>• Documentation and placement follow-up</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-funeka-charcoal">For candidates</div>
              <p className="mt-3 text-funeka-midGrey leading-relaxed">
                We help you access opportunities by matching your skills to available roles and supporting your application journey with professional communication and feedback where possible.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-funeka-midGrey">
                <li>• Browse available roles</li>
                <li>• Apply online or submit your CV</li>
                <li>• Interview scheduling support</li>
                <li>• POPIA-aware handling of your personal information</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
