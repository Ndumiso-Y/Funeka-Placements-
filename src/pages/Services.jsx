import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { NavLink } from "react-router-dom";
import header from "../assets/images/services-header.png.webp";
 
export default function Services() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-funeka-anchor h-[450px] sm:h-[650px] flex items-center">
        <div className="absolute inset-0">
          <img src={header} alt="Services" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-funeka-anchor/95 via-funeka-anchor/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-funeka-anchor/50 to-transparent" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl px-4 py-1.5 text-[10px] font-black text-funeka-brand shadow-2xl uppercase tracking-[0.2em] mb-8">
              <span className="flex h-2 w-2 rounded-full bg-funeka-pop animate-pulse"></span>
              Comprehensive Staffing Infrastructure
            </div>
            <h1 className="text-6xl font-black text-white sm:text-[9rem] drop-shadow-2xl uppercase leading-[0.85] tracking-tighter">
              CORE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-funeka-brand to-funeka-white">SOLUTIONS</span>
            </h1>
            <p className="mt-10 text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md max-w-2xl font-medium">
              Permanent, temporary, and labour hosting solutions engineered for the <span className="text-funeka-brand font-black">mining and industrial</span> sectors.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <Button as={NavLink} to="/employers" variant="primary" className="px-12 py-5 text-lg">Partner With Us</Button>
              <Button as={NavLink} to="/process" variant="outline" className="px-12 py-5 text-lg">Our 12-Step Process</Button>
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
                text:
                  "For long-term roles where culture fit and performance alignment matter. We leverage our deep mining candidate databases to find high-impact talent.",
              },
              {
                title: "Temporary placements",
                text:
                  "For short-term cover or seasonal peaks. We help you maintain continuity in your mining and technical operations without operational friction.",
              },
              {
                title: "Contract staffing",
                text:
                  "For defined project work. We match specialized technical skills to your specific project requirements and timelines.",
              },
              {
                title: "Labour hosting",
                text:
                  "Flexible staffing support where speed is essential, backed by structured documentation and clear professional communication.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-[2.5rem] border-2 border-funeka-divider bg-funeka-bg/30 p-12 shadow-sm hover:shadow-2xl hover:border-funeka-brand/30 hover:bg-white transition-all group">
                <div className="h-1.5 w-12 bg-funeka-brand rounded-full mb-8 group-hover:w-20 transition-all duration-500"></div>
                <h3 className="text-2xl font-black text-funeka-anchor mb-6 uppercase tracking-tight leading-tight">{s.title}</h3>
                <p className="text-funeka-text/60 leading-relaxed font-medium text-lg">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
 
      <section className="border-t border-funeka-divider bg-funeka-anchor py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-funeka-pop/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <Container className="relative z-10">
          <SectionHeading
            title="Operational Integrity"
            subtitle="Leveraging data and industry insights to deliver consistent recruitment outcomes."
            className="text-white"
          />
          <div className="grid gap-10 md:grid-cols-3 mt-20">
            {[
              {
                title: "Industry Insight",
                text:
                  "We clarify the role, skills requirements, and technical values of the mining and industrial landscape.",
              },
              {
                title: "Database Leverage",
                text:
                  "We shortlist from our extensive mining candidate databases based on technical skills and verified suitability.",
              },
              {
                title: "Decision Support",
                text:
                  "We coordinate interviews and assist with offer management to ensure high-retention strategic placements.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-[2.5rem] border-2 border-white/5 bg-white/5 p-12 shadow-sm hover:shadow-2xl hover:border-funeka-pop/30 transition-all group">
                <div className="h-1.5 w-12 bg-funeka-pop rounded-full mb-10 group-hover:w-20 transition-all duration-500"></div>
                <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight leading-tight">{c.title}</h3>
                <p className="text-white/60 leading-relaxed font-medium text-lg">{c.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
