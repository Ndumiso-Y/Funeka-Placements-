import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { NavLink } from "react-router-dom";
import header from "../assets/images/services-header.png.webp";

export default function Services() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-funeka-dividerGrey h-[350px] sm:h-[450px]">
        <div className="absolute inset-0">
          <img src={header} alt="Services" className="h-full w-full object-cover" />
        </div>
        <Container className="relative h-full flex items-center py-14">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white drop-shadow-lg">Services & Value Adds</h1>
            <p className="mt-3 max-w-2xl text-white/95 leading-relaxed drop-shadow-md">
              We provide permanent, temporary, contract and labour hosting solutions. Our services support both operational speed and long-term hiring quality.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button as={NavLink} to="/contact">Contact us</Button>
              <Button as={NavLink} to="/process" variant="ghost">View process</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeading
            title="Core staffing solutions"
            subtitle="Choose the engagement model that fits your operational needs and timelines."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Permanent placements",
                text:
                  "For long-term roles where culture fit and performance alignment matter. We support sourcing, screening and placement follow-up.",
              },
              {
                title: "Temporary placements",
                text:
                  "For short-term cover, seasonal peaks or interim staffing needs. We help you maintain continuity without lowering quality.",
              },
              {
                title: "Contract staffing",
                text:
                  "For defined project work and contract-based roles. We assist with matching skills to role requirements and timelines.",
              },
              {
                title: "Labour hosting solutions",
                text:
                  "For flexible staffing support where operational speed is essential, while maintaining structured documentation and communication.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
                <div className="text-sm font-semibold text-funeka-charcoal">{s.title}</div>
                <p className="mt-3 text-sm text-funeka-midGrey leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-funeka-dividerGrey bg-funeka-lightBlueTint py-12">
        <Container>
          <SectionHeading
            title="Service approach"
            subtitle="How we keep recruitment consistent, transparent and focused on outcomes."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Understand your business",
                text:
                  "We clarify the role, skills requirements, culture and values, then align sourcing accordingly.",
              },
              {
                title: "Source & screen responsibly",
                text:
                  "We shortlist based on skills, role alignment and basic suitability — and handle candidate information responsibly.",
              },
              {
                title: "Support decisions and placement",
                text:
                  "We coordinate interviews, capture feedback, and assist with next steps to reach a clear placement outcome.",
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

      <section className="py-12">
        <Container>
          <SectionHeading
            title="Next step"
            subtitle="If you are hiring, contact us with your role requirements. If you are a candidate, submit your CV."
          />
          <div className="flex flex-wrap gap-3">
            <Button as={NavLink} to="/employers">Hire Talent</Button>
            <Button as={NavLink} to="/apply" variant="dark">Submit CV</Button>
            <Button as={NavLink} to="/jobs" variant="ghost">Browse Jobs</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
