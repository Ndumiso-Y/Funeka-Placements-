import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { NavLink } from "react-router-dom";
import hero from "../assets/images/employers-hero.png.webp";

export default function Employers() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-funeka-dividerGrey h-[350px] sm:h-[450px]">
        <div className="absolute inset-0">
          <img src={hero} alt="Employers" className="h-full w-full object-cover" />
        </div>
        <Container className="relative h-full flex items-center py-14">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white drop-shadow-lg">Hire Talent</h1>
            <p className="mt-3 max-w-2xl text-white/95 leading-relaxed drop-shadow-md">
              We help employers focus on performance while we source and place the right talent. Our approach is structured,
              transparent and aligned to your business, culture and values.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button as={NavLink} to="/contact">Request a call</Button>
              <Button as={NavLink} to="/process" variant="ghost">View recruitment process</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeading
            title="What you get when you partner with Funeka"
            subtitle="A recruitment partner that protects your time, reputation and hiring outcomes."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Role alignment & cultural fit",
                text:
                  "We clarify role expectations and align candidate profiles to both skills and culture fit — helping you hire for performance and retention.",
              },
              {
                title: "Clear communication",
                text:
                  "You receive regular updates, structured shortlists and clear next steps, keeping hiring decisions moving without unnecessary delays.",
              },
              {
                title: "Flexible staffing solutions",
                text:
                  "Permanent, temporary, contract and labour hosting solutions depending on your operational needs and timelines.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
                <div className="text-sm font-semibold text-funeka-charcoal">{card.title}</div>
                <p className="mt-3 text-sm text-funeka-midGrey leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-funeka-dividerGrey bg-funeka-lightBlueTint p-6">
            <div className="text-sm font-semibold text-funeka-charcoal">Fast next step</div>
            <p className="mt-2 text-sm text-funeka-midGrey leading-relaxed">
              Send a brief role description, location and employment type — and we’ll respond with the next steps and timelines.
            </p>
            <div className="mt-4">
              <Button as="a" href="mailto:recruitment@funekaplacements.co.za?subject=Hiring%20Request%20-%20Funeka%20Placements">
                Email recruitment
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
