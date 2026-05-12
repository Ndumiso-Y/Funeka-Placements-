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
  { n: 9, t: "Reference & document checks", d: "Support checks based on role needs, legal requirements and client instructions." },
  { n: 10, t: "Offer support", d: "Assist with offer communication and acceptance steps." },
  { n: 11, t: "Placement & start confirmation", d: "Confirm start date, onboarding expectations and required documentation." },
  { n: 12, t: "Follow-up & relationship management", d: "Post-placement check-in to support retention and continuous improvement." },
];
 
export default function Process() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-funeka-anchor min-h-[500px] sm:h-[650px] flex items-center pt-20 sm:pt-0">
        <div className="absolute inset-0">
          <img src={hero} alt="Recruitment process" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-funeka-anchor/95 via-funeka-anchor/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-funeka-anchor/50 to-transparent" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl pt-16 pb-16 md:pt-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-2xl uppercase leading-[0.95] tracking-tight">
              OPERATIONAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-funeka-brand to-funeka-white">PROTOCOL</span>
            </h1>
            <p className="mt-10 text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md max-w-2xl font-medium">
              A structured recruitment journey that supports consistent quality, clear communication and documented strategic decision-making.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <Button as={NavLink} to="/employers" variant="primary" className="w-full sm:w-auto px-8 py-4 text-sm sm:px-12 sm:py-5 sm:text-lg">Hire Talent</Button>
              <Button as={NavLink} to="/jobs" variant="outline" className="w-full sm:w-auto px-8 py-4 text-sm sm:px-12 sm:py-5 sm:text-lg">Find Jobs</Button>
            </div>
          </div>
        </Container>
      </section>
 
      <section className="py-24 bg-white">
        <Container>
          <SectionHeading
            title="Recruitment Process"
            subtitle="A clear, step-by-step approach for employers and candidates from first brief through placement follow-up."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-[2rem] border-2 border-funeka-divider bg-white p-8 shadow-sm hover:shadow-xl hover:border-funeka-action/20 transition-all group"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-funeka-anchor text-sm font-black text-funeka-brand shadow-lg shadow-funeka-anchor/10">
                    {String(step.n).padStart(2, "0")}
                  </span>
                  <div className="h-1.5 w-10 rounded-full bg-funeka-action group-hover:w-14 transition-all" />
                </div>
                <h3 className="text-xl font-black text-funeka-anchor uppercase tracking-tight leading-tight">
                  {step.t}
                </h3>
                <p className="mt-4 text-funeka-text/70 leading-relaxed font-medium">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-funeka-bg">
        <Container>
          <div className="mt-24 rounded-[3rem] bg-funeka-anchor text-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-funeka-action/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
            <div className="relative z-10 p-12 lg:p-20 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
              <div className="max-w-3xl">
                <div className="h-1.5 w-16 bg-funeka-action rounded-full mb-8"></div>
                <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                  Ready to start the <br />
                  <span className="text-funeka-brand">Strategic Journey?</span>
                </h2>
                <p className="text-xl text-white/60 font-medium leading-relaxed">
                  Whether you are an employer looking for elite technical talent or a candidate seeking a specialized career move.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto shrink-0">
                <Button as={NavLink} to="/contact" variant="outline" className="w-full sm:w-auto px-12 py-5 text-lg">Contact Team</Button>
                <Button as={NavLink} to="/apply" variant="primary" className="w-full sm:w-auto px-12 py-5 text-lg shadow-xl shadow-funeka-action/20">Submit Your CV</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
