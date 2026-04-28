import { useState } from "react";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { NavLink } from "react-router-dom";
import hero from "../assets/images/employers-hero.png.webp";

export default function Employers() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: document.getElementById('recruit-form').offsetTop - 100, behavior: 'smooth' });
  }

  return (
    <div>
      <section className="relative overflow-hidden border-b border-funeka-dividerGrey h-[400px] sm:h-[500px]">
        <div className="absolute inset-0">
          <img src={hero} alt="Employers" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <Container className="relative h-full flex items-center py-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-funeka-vibrantBlue/10 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-sm mb-4 uppercase tracking-wider">
              For Mining & Industrial Partners
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-xl">Hire Talent</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/95 leading-relaxed drop-shadow-md">
              A recruitment partner that saves your time, protects your reputation, and supports better hiring outcomes. We provide specialized staffing solutions for the mining and industrial sectors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="a" href="#recruit-form" className="bg-white text-funeka-charcoal hover:bg-funeka-softBlue">Submit Requirement</Button>
              <Button as={NavLink} to="/process" variant="ghost" className="border-white text-white hover:bg-white/10">View 12-Step Process</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            title="Strategic recruitment partnership"
            subtitle="Expertly sourcing and placing talent in specialized mining and technical roles."
          />
          <div className="grid gap-8 lg:grid-cols-3 mt-12">
            {[
              {
                title: "Role alignment & cultural fit",
                text:
                  "We clarify role expectations and align candidate profiles to both skills and culture fit — helping you hire for performance and retention in demanding environments.",
              },
              {
                title: "Clear communication",
                text:
                  "You receive regular updates, structured shortlists and clear next steps. Keeping hiring decisions moving without unnecessary delays.",
              },
              {
                title: "Flexible staffing solutions",
                text:
                  "Permanent, temporary, contract and labour hosting solutions depending on your operational needs and timelines.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-funeka-dividerGrey bg-white p-8 shadow-soft hover:shadow-xl transition-shadow border-b-4 border-b-funeka-vibrantBlue">
                <div className="text-lg font-bold text-funeka-charcoal mb-4">{card.title}</div>
                <p className="text-funeka-midGrey leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          <div id="recruit-form" className="mt-20 scroll-mt-24">
            <div className="bg-white rounded-3xl border border-funeka-dividerGrey shadow-2xl overflow-hidden">
              <div className="bg-funeka-charcoal p-8 text-white">
                <h2 className="text-2xl font-bold">Recruitment Requirement Form</h2>
                <p className="mt-2 text-white/80">Tell us about your hiring needs and we will get back to you with a structured proposal.</p>
              </div>
              <div className="p-8 lg:p-12">
                {/* Recruitment Form will be injected here */}
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-funeka-charcoal mb-4">Request Submitted</h3>
                    <p className="text-funeka-midGrey max-w-md mx-auto leading-relaxed">
                      Thank you for your recruitment request. Sharon or Ruth will review your requirements and get back to you with a structured proposal shortly.
                    </p>
                    <div className="mt-8">
                      <Button onClick={() => setSubmitted(false)} variant="ghost">Submit Another Request</Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-funeka-charcoal mb-1">Company Name</label>
                        <input required type="text" className="w-full rounded-xl border border-funeka-dividerGrey p-3 text-sm focus:ring-2 focus:ring-funeka-vibrantBlue outline-none transition" placeholder="e.g. Acme Mining Corp" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-funeka-charcoal mb-1">Contact Person</label>
                        <input required type="text" className="w-full rounded-xl border border-funeka-dividerGrey p-3 text-sm focus:ring-2 focus:ring-funeka-vibrantBlue outline-none transition" placeholder="Full name" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-funeka-charcoal mb-1">Email Address</label>
                          <input required type="email" className="w-full rounded-xl border border-funeka-dividerGrey p-3 text-sm focus:ring-2 focus:ring-funeka-vibrantBlue outline-none transition" placeholder="email@company.co.za" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-funeka-charcoal mb-1">Contact Number</label>
                          <input required type="tel" className="w-full rounded-xl border border-funeka-dividerGrey p-3 text-sm focus:ring-2 focus:ring-funeka-vibrantBlue outline-none transition" placeholder="012 345 6789" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-funeka-charcoal mb-1">Role / Job Title</label>
                        <input required type="text" className="w-full rounded-xl border border-funeka-dividerGrey p-3 text-sm focus:ring-2 focus:ring-funeka-vibrantBlue outline-none transition" placeholder="e.g. Senior Shift Boss" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-funeka-charcoal mb-1">Number of Positions</label>
                          <input required type="number" className="w-full rounded-xl border border-funeka-dividerGrey p-3 text-sm focus:ring-2 focus:ring-funeka-vibrantBlue outline-none transition" placeholder="1" min="1" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-funeka-charcoal mb-1">Location</label>
                          <input required type="text" className="w-full rounded-xl border border-funeka-dividerGrey p-3 text-sm focus:ring-2 focus:ring-funeka-vibrantBlue outline-none transition" placeholder="e.g. Rustenburg" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-funeka-charcoal mb-1">Employment Type</label>
                        <select className="w-full rounded-xl border border-funeka-dividerGrey p-3 text-sm focus:ring-2 focus:ring-funeka-vibrantBlue outline-none transition bg-white">
                          <option>Permanent</option>
                          <option>Temporary</option>
                        </select>
                      </div>
                    </div>

                    <div className="md:col-span-2 grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-semibold text-funeka-charcoal mb-1">Preferred Start Date</label>
                        <input required type="date" className="w-full rounded-xl border border-funeka-dividerGrey p-3 text-sm focus:ring-2 focus:ring-funeka-vibrantBlue outline-none transition" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-funeka-charcoal mb-1">Expected Recruitment Timeline</label>
                        <input required type="text" className="w-full rounded-xl border border-funeka-dividerGrey p-3 text-sm focus:ring-2 focus:ring-funeka-vibrantBlue outline-none transition" placeholder="e.g. Within 2 weeks" />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-funeka-charcoal mb-1">Job Description / Requirements</label>
                      <textarea required rows={4} className="w-full rounded-xl border border-funeka-dividerGrey p-3 text-sm focus:ring-2 focus:ring-funeka-vibrantBlue outline-none transition" placeholder="Briefly describe the key responsibilities and requirements..."></textarea>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-funeka-charcoal mb-1">Additional Notes</label>
                      <textarea rows={2} className="w-full rounded-xl border border-funeka-dividerGrey p-3 text-sm focus:ring-2 focus:ring-funeka-vibrantBlue outline-none transition" placeholder="Any other details we should know?"></textarea>
                    </div>

                    <div className="md:col-span-2 pt-4">
                      <Button type="submit" className="w-full py-4 text-base font-bold shadow-lg shadow-funeka-vibrantBlue/20">
                        Submit Recruitment Request
                      </Button>
                      <p className="mt-4 text-xs text-center text-funeka-midGrey">
                        By submitting this form, you agree to our privacy policy and POPIA compliance protocols. Enquiries are routed to Sharon and Ruth.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
