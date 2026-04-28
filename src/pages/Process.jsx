import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { NavLink } from "react-router-dom";
import hero from "../assets/images/process-hero.png.webp";
 
const steps = [
  { n: 1, t: "Client briefing & role definition", d: "Clarify requirements, location, employment type, role outcomes and expectations." },
  { n: 2, t: "Recruitment plan & timeline", d: "Agree on the approach, communication flow and key dates." },
  { n: 3, t: "Sourcing strategy", d: "Identify sourcing channels and target candidate profiles." },
  { n: 4, t: "Candidate sourcing", d: "Source candidates through appropriate channels aligned to the role." },
  { n: 5, t: "Initial screening", d: "Screen candidates for basic suitability, interest and alignment to requirements." },
  { n: 6, t: "Shortlisting", d: "Present a structured shortlist aligned to role requirements." },
  { n: 7, t: "Interview coordination", d: "Schedule interviews and manage communication between parties." },
  { n: 8, t: "Interview feedback loop", d: "Capture feedback and guide next steps (additional rounds, assessments, etc.)." },
  { n: 9, t: "Reference & document checks (where applicable)", d: "Support checks based on role needs, legal requirements and client instructions." },
  { n: 10, t: "Offer support", d: "Assist with offer communication and acceptance steps." },
  { n: 11, t: "Placement & start confirmation", d: "Confirm start date, onboarding expectations and required documentation." },
  { n: 12, t: "Follow-up & relationship management", d: "Post-placement check-in to support retention and continuous improvement." },
];
 
export default function Process() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-funeka-anchor h-[400px] sm:h-[650px] flex items-center">
        <div className="absolute inset-0">
          <img src={hero} alt="Recruitment process" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-funeka-anchor/95 via-funeka-anchor/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-funeka-anchor/50 to-transparent" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl px-4 py-1.5 text-[10px] font-black text-funeka-brand shadow-2xl uppercase tracking-[0.2em] mb-8">
              <span className="flex h-2 w-2 rounded-full bg-funeka-pop animate-pulse"></span>
              Strategic Methodologies
            </div>
            <h1 className="text-6xl font-black text-white sm:text-[9rem] drop-shadow-2xl uppercase leading-[0.85] tracking-tighter">
              OPERATIONAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-funeka-brand to-funeka-white">PROTOCOL</span>
            </h1>
            <p className="mt-10 text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md max-w-2xl font-medium">
              A structured 12-step recruitment journey that supports consistent quality, clear communication and documented strategic decision-making.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <Button as={NavLink} to="/employers" variant="primary" className="px-12 py-5 text-lg">Hire Talent</Button>
              <Button as={NavLink} to="/jobs" variant="outline" className="px-12 py-5 text-lg">Find Jobs</Button>
            </div>
          </div>
        </Container>
      </section>
 
      <section className="py-24 bg-funeka-bg">
        <Container>
          <SectionHeading
            title="The 12-Step Protocol"
            subtitle="Designed to protect employers and candidates through professional handling and technical precision."
          />
          <div className="grid gap-8 lg:grid-cols-2 mt-20">
            {steps.map((s) => (
              <div key={s.n} className="rounded-[2.5rem] border-2 border-funeka-divider bg-white p-10 shadow-sm hover:shadow-2xl hover:border-funeka-pop/30 transition-all group">
                <div className="flex items-center justify-between gap-6 mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-funeka-anchor text-funeka-pop flex items-center justify-center text-xl font-black group-hover:bg-funeka-pop group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                    {s.n}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-funeka-anchor/30">Strategic Phase {s.n}</span>
                </div>
                <h3 className="text-2xl font-black text-funeka-anchor uppercase tracking-tight mb-4 leading-tight group-hover:text-funeka-pop transition-colors">{s.t}</h3>
                <p className="text-funeka-text/60 leading-relaxed font-medium text-lg">{s.d}</p>
              </div>
            ))}
          </div>
 
          <div className="mt-24 rounded-[3rem] border-4 border-funeka-divider bg-funeka-anchor p-12 lg:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-funeka-pop/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 group-hover:bg-funeka-brand/10 transition-all duration-700"></div>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
              <div className="max-w-3xl">
                <div className="h-1.5 w-12 bg-funeka-pop rounded-full mb-8"></div>
                <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                  Ready to start the <br />
                  <span className="text-funeka-brand">Strategic Journey?</span>
                </h2>
                <p className="text-xl text-white/60 font-medium leading-relaxed">
                  Whether you are an employer looking for elite technical talent or a candidate seeking a specialized career move.
                </p>
              </div>
              <div className="flex flex-wrap gap-5 shrink-0">
                <Button as={NavLink} to="/contact" variant="outline" className="px-12 py-5 text-lg">Contact Team</Button>
                <Button as={NavLink} to="/apply" variant="pop" className="px-12 py-5 text-lg shadow-funeka-pop/30">Submit Your CV</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
