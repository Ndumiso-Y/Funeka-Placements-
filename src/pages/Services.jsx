import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { NavLink } from "react-router-dom";
import header from "../assets/images/services-header.png.webp";

export default function Services() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-funeka-dividerGrey h-[400px] sm:h-[500px]">
        <div className="absolute inset-0">
          <img src={header} alt="Services" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <Container className="relative h-full flex items-center py-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-funeka-vibrantBlue/10 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-sm mb-4 uppercase tracking-wider">
              Specialized Staffing Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-xl">Services & Value Adds</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/95 leading-relaxed drop-shadow-md">
              We provide permanent, temporary, contract and labour hosting solutions. Our services are powered by deep <span className="font-bold text-funeka-softBlue">mining and industrial expertise</span> and extensive candidate databases.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as={NavLink} to="/employers" className="bg-white text-funeka-charcoal hover:bg-funeka-softBlue">Partner with us</Button>
              <Button as={NavLink} to="/process" variant="ghost" className="border-white text-white hover:bg-white/10">View process</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Core staffing solutions"
            subtitle="Strategically sourcing and placing talent in specialized technical and operational environments."
          />

          <div className="grid gap-8 lg:grid-cols-2 mt-12">
            {[
              {
                title: "Permanent placements",
                text:
                  "For long-term roles where culture fit and performance alignment matter. We leverage our deep mining candidate databases to find high-impact talent for your team.",
              },
              {
                title: "Temporary placements",
                text:
                  "For short-term cover, seasonal peaks or interim staffing needs. We help you maintain continuity in mining and technical operations.",
              },
              {
                title: "Contract staffing",
                text:
                  "For defined project work and contract-based roles. We match specialized skills to your project requirements and timelines.",
              },
              {
                title: "Labour hosting solutions",
                text:
                  "Flexible staffing support where operational speed is essential, backed by structured documentation and clear communication.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-3xl border border-funeka-dividerGrey bg-white p-8 shadow-soft hover:shadow-xl transition-shadow border-l-8 border-l-funeka-vibrantBlue">
                <div className="text-xl font-bold text-funeka-charcoal mb-4">{s.title}</div>
                <p className="text-funeka-midGrey leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-funeka-dividerGrey bg-funeka-lightBlueTint/50 py-20">
        <Container>
          <SectionHeading
            title="Strategic service approach"
            subtitle="Leveraging data and industry insights to deliver consistent recruitment outcomes."
          />
          <div className="grid gap-8 md:grid-cols-3 mt-12">
            {[
              {
                title: "Industry Insight",
                text:
                  "We clarify the role, skills requirements, and technical values of the mining and industrial landscape.",
              },
              {
                title: "Database Leverage",
                text:
                  "We shortlist from our extensive mining and industrial candidate databases based on skills, role alignment and verified suitability.",
              },
              {
                title: "Decision Support",
                text:
                  "We coordinate interviews, capture structured feedback, and assist with offer management to ensure successful placements.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-funeka-dividerGrey bg-white p-8 shadow-soft hover:shadow-lg transition-all">
                <div className="text-lg font-bold text-funeka-charcoal mb-4">{c.title}</div>
                <p className="text-funeka-midGrey leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
