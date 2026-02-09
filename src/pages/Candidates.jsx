import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { NavLink } from "react-router-dom";
import hero from "../assets/images/candidates-hero.png.png";
import howToApply from "../assets/images/HowToApply.png.PNG";

export default function Candidates() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-funeka-dividerGrey h-[350px] sm:h-[450px]">
        <div className="absolute inset-0">
          <img src={hero} alt="Candidates" className="h-full w-full object-cover" />
        </div>
        <Container className="relative h-full flex items-center py-14">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white drop-shadow-lg">For Candidates</h1>
            <p className="mt-3 max-w-2xl text-white/95 leading-relaxed drop-shadow-md">
              Browse available jobs, apply online, or submit your CV for future opportunities.
              We process personal information responsibly in line with POPIA.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button as={NavLink} to="/jobs">View jobs</Button>
              <Button as={NavLink} to="/apply" variant="dark">Submit CV</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeading
            title="How to get started"
            subtitle="Simple steps to apply for roles and improve your chances of being matched correctly."
          />

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
              <ol className="space-y-3 text-sm text-funeka-midGrey">
                <li><span className="font-medium text-funeka-charcoal">1.</span> Browse available roles on the Jobs page.</li>
                <li><span className="font-medium text-funeka-charcoal">2.</span> Read the responsibilities and requirements carefully.</li>
                <li><span className="font-medium text-funeka-charcoal">3.</span> Apply using the Apply form (or email your CV).</li>
                <li><span className="font-medium text-funeka-charcoal">4.</span> Keep your contact details up to date and respond promptly.</li>
              </ol>
              <div className="mt-6 flex gap-3">
                <Button as={NavLink} to="/jobs">Find jobs</Button>
                <Button as={NavLink} to="/apply" variant="ghost">Submit CV</Button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-funeka-dividerGrey shadow-soft">
              <img src={howToApply} alt="How to apply" className="h-full w-full object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-funeka-dividerGrey bg-funeka-lightBlueTint py-12">
        <Container>
          <SectionHeading
            title="What to expect"
            subtitle="We aim for transparent communication and a clear, respectful process."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "POPIA-aware handling",
                text:
                  "Your personal information is used only for recruitment purposes and shared only when necessary and lawful.",
              },
              {
                title: "Clear updates",
                text:
                  "We communicate application steps and next actions. Feedback may depend on client timelines and role volumes.",
              },
              {
                title: "Role alignment",
                text:
                  "We match skills, role requirements and basic culture fit so you apply for opportunities that make sense for you.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
                <div className="text-sm font-semibold text-funeka-charcoal">{c.title}</div>
                <p className="mt-3 text-sm text-funeka-midGrey leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
