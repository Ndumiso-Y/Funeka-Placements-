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
      <section className="relative overflow-hidden border-b border-funeka-dividerGrey h-[350px] sm:h-[450px]">
        <div className="absolute inset-0">
          <img src={hero} alt="Recruitment process" className="h-full w-full object-cover" />
        </div>
        <Container className="relative h-full flex items-center py-14">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white drop-shadow-lg">Recruitment Process (12 Steps)</h1>
            <p className="mt-3 max-w-2xl text-white/95 leading-relaxed drop-shadow-md">
              A structured recruitment journey that supports consistent quality, clear communication and documented decision-making.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button as={NavLink} to="/employers">Hire Talent</Button>
              <Button as={NavLink} to="/jobs" variant="ghost">Find Jobs</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeading
            title="The 12-step process"
            subtitle="This process is designed to protect employers and candidates through clarity, consistency and professional handling."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-sm font-semibold text-funeka-charcoal">
                    {s.n}. {s.t}
                  </div>
                  <span className="rounded-full bg-funeka-softBlue px-3 py-1 text-xs text-funeka-charcoal border border-funeka-dividerGrey">
                    Step {s.n}
                  </span>
                </div>
                <p className="mt-3 text-sm text-funeka-midGrey leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-funeka-dividerGrey bg-funeka-lightBlueTint p-6">
            <div className="text-sm font-semibold text-funeka-charcoal">Need help starting?</div>
            <p className="mt-2 text-sm text-funeka-midGrey leading-relaxed">
              If you are an employer, share role requirements and timelines. If you are a candidate, submit your CV or apply for available roles.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button as={NavLink} to="/contact">Contact us</Button>
              <Button as={NavLink} to="/apply" variant="dark">Submit CV</Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
