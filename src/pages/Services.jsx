import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { NavLink } from "react-router-dom";
import header from "../assets/images/services-header.png.webp";

export default function Services() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-funeka-anchor min-h-[500px] sm:h-[650px] flex items-center pt-20 sm:pt-0">
        <div className="absolute inset-0">
          <img src={header} alt="Services" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-funeka-anchor/95 via-funeka-anchor/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-funeka-anchor/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent h-64" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl pt-16 pb-16 md:pt-0">
            <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-black text-white drop-shadow-2xl uppercase leading-[0.85] tracking-tighter">
              CORE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-funeka-brand to-funeka-white">SOLUTIONS</span>
            </h1>
            <p className="mt-10 text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md max-w-2xl font-medium">
              Permanent, temporary, and labour hosting solutions engineered for the <span className="text-funeka-brand font-black">mining and industrial</span> sectors.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <Button as={NavLink} to="/employers" variant="primary" className="w-full sm:w-auto px-8 py-4 text-sm sm:px-12 sm:py-5 sm:text-lg">Partner With Us</Button>
              <Button as={NavLink} to="/employers" variant="outline" className="w-full sm:w-auto px-8 py-4 text-sm sm:px-12 sm:py-5 sm:text-lg">Submit a Requirement</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <SectionHeading
            title="Strategic Service Model"
            subtitle="Strategically sourcing and placing talent in specialized technical and operational environments."
          />

          <div className="grid gap-12 lg:grid-cols-2 mt-20">
            {[
              {
                title: "Permanent placements",
                text: "For long-term roles where culture fit and performance alignment matter. We leverage our deep mining candidate databases to find high-impact talent.",
              },
              {
                title: "Temporary placements",
                text: "For short-term cover or seasonal peaks. We help you maintain continuity in your mining and technical operations without operational friction.",
              },
              {
                title: "Contract staffing",
                text: "For defined project work. We match specialized technical skills to your specific project requirements and timelines.",
              },
              {
                title: "Labour hosting",
                text: "Flexible staffing support where speed is essential, backed by structured documentation and clear professional communication.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-[2.5rem] border-2 border-funeka-divider bg-funeka-bg/30 p-12 shadow-sm hover:shadow-xl hover:border-funeka-action/20 hover:bg-white transition-all group">
                <div className="h-1.5 w-12 bg-funeka-brand rounded-full mb-8"></div>
                <h3 className="text-2xl font-black text-funeka-anchor mb-6 uppercase tracking-tight leading-tight">{s.title}</h3>
                <p className="text-funeka-text/60 leading-relaxed font-medium text-lg">{s.text}</p>
              </div>
            ))}
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
              Operational Integrity
            </h2>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl font-medium">
              Leveraging data and industry insights to deliver consistent recruitment outcomes.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Industry Insight",
                text: "We clarify the role, skills requirements, and technical values of the mining and industrial landscape.",
              },
              {
                title: "Database Leverage",
                text: "We shortlist from our extensive mining candidate databases based on technical skills and verified suitability.",
              },
              {
                title: "Decision Support",
                text: "We coordinate interviews and assist with offer management to ensure high-retention strategic placements.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-[2.5rem] border-2 border-white/20 bg-white/10 p-12 shadow-sm hover:shadow-xl hover:border-funeka-action/40 hover:bg-white/15 transition-all group">
                <div className="h-1.5 w-12 bg-funeka-action rounded-full mb-10"></div>
                <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight leading-tight">{c.title}</h3>
                <p className="text-white/80 leading-relaxed font-medium text-lg">{c.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
