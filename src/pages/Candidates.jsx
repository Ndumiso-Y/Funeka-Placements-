import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { NavLink } from "react-router-dom";
import hero from "../assets/images/candidates-hero.png.webp";
import howToApply from "../assets/images/HowToApply.png.webp";

export default function Candidates() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-funeka-dividerGrey h-[400px] sm:h-[500px]">
        <div className="absolute inset-0">
          <img src={hero} alt="Candidates" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <Container className="relative h-full flex items-center py-14">
          <div className="max-w-2xl">
             <div className="inline-flex items-center rounded-full border border-white/20 bg-funeka-vibrantBlue/10 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-sm mb-4 uppercase tracking-wider">
              Launch Your Mining or Industrial Career
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-xl">For Candidates</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/95 leading-relaxed drop-shadow-md">
              Your next career move in mining and industry starts here. Access specialized roles, receive clear feedback, and join our elite candidate database.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as={NavLink} to="/jobs" className="px-8">View Open Roles</Button>
              <Button as={NavLink} to="/apply" variant="dark" className="bg-funeka-vibrantBlue hover:bg-funeka-deepBlue px-8">Submit Your CV</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 -mt-20 sm:-mt-32 relative z-10">
        <Container>
          <div className="bg-white rounded-3xl border border-funeka-dividerGrey shadow-2xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-funeka-charcoal mb-4">How to get started</h2>
              <p className="text-funeka-midGrey text-lg">Four simple steps to connect with top mining and industrial employers.</p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Explore Opportunities",
                    text: "Browse our specialized job listings focusing on mining, technical, and industrial roles in South Africa."
                  },
                  {
                    step: "02",
                    title: "Review & Match",
                    text: "Check responsibilities and requirements carefully. We prioritize candidate-to-role alignment for long-term success."
                  },
                  {
                    step: "03",
                    title: "Submit & Consent",
                    text: "Apply via our secure portal. Our process is POPIA-compliant, ensuring your personal information is handled with care."
                  },
                  {
                    step: "04",
                    title: "Stay Connected",
                    text: "Once you're in our database, our recruiters will match your profile against new requirements as they arise."
                  }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 group">
                    <div className="flex-shrink-0 text-4xl font-black text-funeka-dividerGrey group-hover:text-funeka-vibrantBlue transition-colors duration-300 leading-none">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-funeka-charcoal mb-2">{item.title}</h4>
                      <p className="text-funeka-midGrey leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}

                <div className="pt-6 flex flex-wrap gap-4">
                  <Button as={NavLink} to="/jobs" className="px-10 py-4 shadow-lg shadow-funeka-vibrantBlue/20 bg-funeka-vibrantBlue hover:bg-funeka-deepBlue border-none text-white">Find Jobs</Button>
                  <Button as={NavLink} to="/apply" variant="ghost" className="px-10 py-4 border-funeka-dividerGrey text-funeka-charcoal hover:bg-funeka-lightBlueTint">Submit CV</Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-funeka-vibrantBlue/5 rounded-3xl blur-2xl transform rotate-3" />
                <div className="relative rounded-2xl overflow-hidden border border-funeka-dividerGrey shadow-xl">
                  <img src={howToApply} alt="How to apply" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-funeka-lightBlueTint/50">
        <Container>
          <SectionHeading
            title="What to expect from Funeka"
            subtitle="Professionalism, transparency, and respect for your time and data."
          />
          <div className="grid gap-8 lg:grid-cols-3 mt-12">
            {[
              {
                title: "POPIA-aware handling",
                text:
                  "Your personal information is used only for recruitment purposes and shared only when necessary and lawful.",
              },
              {
                title: "Clear communication",
                text:
                  "You receive regular updates, structured shortlists and clear next steps. Keeping hiring decisions moving without unnecessary delays.",
              },
              {
                title: "Strategic alignment",
                text:
                  "We match skills, role requirements and culture fit so you apply for opportunities that make sense for your career goals.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-funeka-dividerGrey bg-white p-8 shadow-soft hover:shadow-lg transition-all border-t-4 border-t-funeka-vibrantBlue">
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
