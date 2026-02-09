import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import aboutTeam from "../assets/images/about-team.png.png";
import mvImg from "../assets/images/mission-vision.png.png";

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
      <section className="border-b border-funeka-dividerGrey bg-white">
        <Container className="py-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-funeka-charcoal">
                Company Profile
              </h1>
              <p className="mt-4 text-funeka-midGrey leading-relaxed">
                Funeka Placements is a Recruitment Agency working with organisations across multiple industries, including SMEs and growing enterprises.
                We source, select and place staff by ensuring the right skills, role alignment and cultural fit.
              </p>
              <div className="mt-6 rounded-2xl border border-funeka-dividerGrey bg-funeka-lightBlueTint p-6">
                <div className="text-sm font-semibold text-funeka-charcoal">Contact</div>
                <div className="mt-2 text-sm text-funeka-midGrey">
                  <div>28 Abbie Str, Rustenburg Visitors Center</div>
                  <div className="mt-1">
                    <a className="hover:underline" href="mailto:recruitment@funekaplacements.co.za">
                      recruitment@funekaplacements.co.za
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-funeka-dividerGrey shadow-soft">
              <img src={aboutTeam} alt="About Funeka Placements" className="h-full w-full object-cover" />
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
                <li>• Role briefing and needs analysis</li>
                <li>• Candidate sourcing and screening</li>
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
