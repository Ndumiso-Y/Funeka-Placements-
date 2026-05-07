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
      <section className="relative overflow-hidden border-b border-funeka-anchor min-h-[500px] sm:h-[650px] flex items-center pt-20 sm:pt-0">
        <div className="absolute inset-0">
          <img src={hero} alt="Employers" className="h-full w-full object-cover object-center md:object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-funeka-anchor/95 via-funeka-anchor/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-funeka-anchor/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent h-64" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl pt-16 pb-16 md:pt-0">
            <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-black text-white drop-shadow-2xl uppercase leading-[0.85] tracking-tighter">
              SCALE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-funeka-brand to-funeka-white">TALENT</span>
            </h1>
            <p className="mt-10 text-xl sm:text-2xl text-white/95 leading-relaxed drop-shadow-md max-w-2xl font-medium">
              We save your time, protect your reputation, and support better hiring outcomes in the most demanding technical sectors.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <Button as="a" href="#recruit-form" variant="primary" className="w-full sm:w-auto px-8 py-4 text-sm sm:px-12 sm:py-5 sm:text-lg">Submit Requirement</Button>
              <Button as={NavLink} to="/services" variant="outline" className="w-full sm:w-auto px-8 py-4 text-sm sm:px-12 sm:py-5 sm:text-lg">Our Services</Button>
            </div>
          </div>
        </Container>
      </section>
 
      <section className="py-24 bg-funeka-bg">
        <Container>
          <SectionHeading
            title="Recruitment Excellence"
            subtitle="Expertly sourcing and placing talent in specialized mining and technical roles."
          />
          <div className="grid gap-8 lg:grid-cols-3 mt-16">
            {[
              {
                title: "Role alignment & fit",
                text:
                  "We clarify role expectations and align candidate profiles to both skills and culture fit — helping you hire for performance and retention.",
              },
              {
                title: "Clear communication",
                text:
                  "You receive regular updates, structured shortlists and clear next steps. Keeping hiring decisions moving without unnecessary delays.",
              },
              {
                title: "Flexible solutions",
                text:
                  "Permanent, temporary, contract and labour hosting solutions depending on your operational needs and timelines.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-[2.5rem] border-2 border-funeka-divider bg-white p-12 shadow-sm hover:shadow-xl hover:border-funeka-action/20 transition-all group">
                <div className="h-1.5 w-12 bg-funeka-brand rounded-full mb-8"></div>
                <h3 className="text-2xl font-black text-funeka-anchor mb-6 uppercase tracking-tight leading-tight">{card.title}</h3>
                <p className="text-funeka-text/70 leading-relaxed font-medium text-lg">{card.text}</p>
              </div>
            ))}
          </div>
 
          <div id="recruit-form" className="mt-24 scroll-mt-24">
            <div className="bg-white rounded-[3rem] border-4 border-funeka-divider shadow-2xl overflow-hidden group">
              <div className="bg-funeka-dark p-10 lg:p-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-funeka-action/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                <div className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter">Requirement Brief</h2>
                  <p className="mt-4 text-xl text-white/60 font-medium">Our team will review your submission and follow up.</p>
                </div>
              </div>
              <div className="p-10 lg:p-16">
                {submitted ? (
                  <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-green-50 text-green-600 mb-8 border-2 border-green-100 shadow-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <h3 className="text-4xl font-black text-funeka-anchor mb-4 uppercase tracking-tighter">Request Logged</h3>
                    <p className="text-xl text-funeka-text/60 max-w-md mx-auto leading-relaxed font-medium">
                      Thank you for your brief. Our team will analyze your requirements and reach out within 24 business hours.
                    </p>
                    <div className="mt-10">
                      <Button onClick={() => setSubmitted(false)} variant="ghost" className="px-10 py-4">New Request</Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-10 md:grid-cols-2">
                    <div className="space-y-8">
                      <div>
                        <label className="block text-[10px] font-black text-funeka-anchor uppercase tracking-[0.2em] mb-3">Company Details</label>
                        <input required type="text" className="w-full rounded-2xl border-2 border-funeka-divider p-4 text-sm font-bold focus:border-funeka-action outline-none transition bg-funeka-bg/30" placeholder="Organization Name" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-funeka-anchor uppercase tracking-[0.2em] mb-3">Contact Person</label>
                        <input required type="text" className="w-full rounded-2xl border-2 border-funeka-divider p-4 text-sm font-bold focus:border-funeka-action outline-none transition bg-funeka-bg/30" placeholder="Full name & Title" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[10px] font-black text-funeka-anchor uppercase tracking-[0.2em] mb-3">Email</label>
                          <input required type="email" className="w-full rounded-2xl border-2 border-funeka-divider p-4 text-sm font-bold focus:border-funeka-action outline-none transition bg-funeka-bg/30" placeholder="email@company.co.za" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black text-funeka-anchor uppercase tracking-[0.2em] mb-3">Direct Phone</label>
                          <input required type="tel" className="w-full rounded-2xl border-2 border-funeka-divider p-4 text-sm font-bold focus:border-funeka-action outline-none transition bg-funeka-bg/30" placeholder="012 345 6789" />
                        </div>
                      </div>
                    </div>
 
                    <div className="space-y-8">
                      <div>
                        <label className="block text-[10px] font-black text-funeka-anchor uppercase tracking-[0.2em] mb-3">Target Role</label>
                        <input required type="text" className="w-full rounded-2xl border-2 border-funeka-divider p-4 text-sm font-bold focus:border-funeka-action outline-none transition bg-funeka-bg/30" placeholder="e.g. Senior Mine Engineer" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[10px] font-black text-funeka-anchor uppercase tracking-[0.2em] mb-3">Headcount</label>
                          <input required type="number" className="w-full rounded-2xl border-2 border-funeka-divider p-4 text-sm font-bold focus:border-funeka-action outline-none transition bg-funeka-bg/30" placeholder="1" min="1" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black text-funeka-anchor uppercase tracking-[0.2em] mb-3">Location</label>
                          <input required type="text" className="w-full rounded-2xl border-2 border-funeka-divider p-4 text-sm font-bold focus:border-funeka-action outline-none transition bg-funeka-bg/30" placeholder="Site / Region" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-funeka-anchor uppercase tracking-[0.2em] mb-3">Placement Type</label>
                        <select className="w-full rounded-2xl border-2 border-funeka-divider p-4 text-sm font-bold focus:border-funeka-action outline-none transition bg-funeka-bg/30 appearance-none">
                          <option>Permanent Placement</option>
                          <option>Temporary Staffing</option>
                          <option>Contract / Fixed-term</option>
                          <option>Labour Hosting</option>
                        </select>
                      </div>
                    </div>
 
                    <div className="md:col-span-2 grid gap-10 md:grid-cols-2">
                      <div>
                        <label className="block text-[10px] font-black text-funeka-anchor uppercase tracking-[0.2em] mb-3">Target Start Date</label>
                        <input required type="date" className="w-full rounded-2xl border-2 border-funeka-divider p-4 text-sm font-bold focus:border-funeka-action outline-none transition bg-funeka-bg/30" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-funeka-anchor uppercase tracking-[0.2em] mb-3">Hiring Timeline</label>
                        <input required type="text" className="w-full rounded-2xl border-2 border-funeka-divider p-4 text-sm font-bold focus:border-funeka-action outline-none transition bg-funeka-bg/30" placeholder="e.g. Urgent / Within 1 Month" />
                      </div>
                    </div>
 
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-black text-funeka-anchor uppercase tracking-[0.2em] mb-3">Role Requirements & Expectations</label>
                      <textarea required rows={6} className="w-full rounded-2xl border-2 border-funeka-divider p-5 text-sm font-bold focus:border-funeka-action outline-none transition bg-funeka-bg/30" placeholder="Outline technical skills, certifications, and key deliverables..."></textarea>
                    </div>
 
                    <div className="md:col-span-2 pt-6">
                      <Button type="submit" variant="primary" className="w-full py-6 text-xl font-black shadow-2xl shadow-funeka-action/30">
                        Submit Strategic Brief
                      </Button>
                      <div className="mt-8 flex items-center justify-center gap-4 text-[10px] font-black text-funeka-text/30 uppercase tracking-[0.2em]">
                        <span className="h-px w-8 bg-funeka-divider"></span>
                        Our team reviews all submissions
                        <span className="h-px w-8 bg-funeka-divider"></span>
                      </div>
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
