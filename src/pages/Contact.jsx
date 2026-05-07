import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import contactImg from "../assets/images/contact-office.png.webp";

export default function Contact() {
  return (
    <div className="py-24 bg-funeka-bg min-h-screen">
      <Container>
        <SectionHeading
          title="Get In Touch"
          subtitle="Reach out for specialized hiring needs, candidate support, or strategic enquiries."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start mt-16">
          {/* Left — image + location badge */}
          <div className="relative group">
            <div className="absolute -inset-6 bg-funeka-brand/10 rounded-[4rem] blur-[80px] group-hover:bg-funeka-action/10 transition-all duration-500"></div>
            <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
              <img
                src={contactImg}
                alt="Contact office"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-6 lg:hidden bg-funeka-anchor rounded-[1.5rem] px-6 py-4 text-white shadow-xl flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-funeka-action flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">Regional Hub</div>
                <div className="text-base font-black text-white">Rustenburg Operations</div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-funeka-anchor px-8 py-6 rounded-[2rem] shadow-2xl border-4 border-white hidden lg:block">
              <div className="text-funeka-brand font-black text-xs uppercase tracking-[0.25em] mb-1">Regional Hub</div>
              <div className="text-white font-black text-xl tracking-tighter">Rustenburg Operations</div>
            </div>
          </div>

          {/* Right — contact details + buttons */}
          <div className="space-y-8">
            {/* Details card */}
            <div className="rounded-[2.5rem] border-2 border-funeka-divider bg-white p-8 lg:p-12 shadow-xl">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="h-14 w-14 rounded-2xl bg-funeka-anchor text-funeka-brand flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-funeka-anchor/40 uppercase tracking-[0.25em] mb-2">Headquarters</div>
                    <div className="text-xl font-black text-funeka-anchor uppercase tracking-tighter leading-tight">
                      28 Abbie Str, <br className="hidden sm:block" />Rustenburg Visitors Center
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="h-14 w-14 rounded-2xl bg-funeka-anchor text-funeka-action flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-black text-funeka-anchor/40 uppercase tracking-[0.25em] mb-2">Email</div>
                    <a
                      className="text-base sm:text-lg font-black text-funeka-action hover:text-funeka-anchor transition-colors break-all leading-tight block"
                      href="mailto:rustenburg@funekaplacements.co.za"
                    >
                      rustenburg@<br className="sm:hidden" />funekaplacements.co.za
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] border-2 border-funeka-divider bg-white p-8 hover:shadow-xl hover:border-funeka-anchor/30 transition-all group">
                <h3 className="text-lg font-black text-funeka-anchor uppercase tracking-tight mb-3 group-hover:text-funeka-anchor">For Partners</h3>
                <p className="text-sm text-funeka-text/60 font-medium leading-relaxed mb-8">
                  Specialized hiring requests and technical requirements.
                </p>
                <Button
                  as="a"
                  variant="primary"
                  className="w-full py-4 text-xs"
                  href="mailto:rustenburg@funekaplacements.co.za?subject=Hiring%20Request%20-%20Funeka%20Placements&body=Role%20Title%3A%0ALocation%3A%0AEmployment%20Type%3A%0AResponsibilities%3A%0ARequirements%3A%0ATimeline%3A"
                >
                  Email Hiring Request
                </Button>
              </div>

              <div className="rounded-[2rem] border-2 border-funeka-divider bg-white p-8 hover:shadow-xl hover:border-funeka-action/30 transition-all group">
                <h3 className="text-lg font-black text-funeka-anchor uppercase tracking-tight mb-3 group-hover:text-funeka-action">For Candidates</h3>
                <p className="text-sm text-funeka-text/60 font-medium leading-relaxed mb-8">
                  Send your credentials and explore technical industrial opportunities.
                </p>
                <Button
                  as="a"
                  variant="primary"
                  className="w-full py-4 text-xs bg-funeka-anchor hover:bg-funeka-action"
                  href="mailto:rustenburg@funekaplacements.co.za?subject=CV%20Submission%20-%20Funeka%20Placements&body=Full%20Name%3A%0AEmail%3A%0APhone%3A%0ALocation%3A%0ARole%20Interested%20In%3A%0A%0APOPIA%20Consent%3A%20Yes"
                >
                  Submit CV by Email
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative bg-funeka-anchor h-[400px] flex items-center justify-center group">
          <div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:opacity-60"></div>
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=-25.6667,27.2333&zoom=13&size=800x400&maptype=roadmap&sensor=false')"}}></div>
          
          <div className="text-center relative z-20 p-8 backdrop-blur-md bg-white/10 border border-white/20 rounded-[2rem] shadow-2xl">
            <div className="h-16 w-16 mx-auto rounded-2xl bg-funeka-action text-white flex items-center justify-center mb-6 shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Interactive Map</h3>
            <p className="text-white/70 font-medium max-w-xs mx-auto">Embed live Google Maps iframe code here to activate.</p>
          </div>
          {/* TO ACTIVATE MAP: Uncomment below and replace src with actual Google Maps Embed URL */}
          {/* <iframe src="YOUR_EMBED_URL_HERE" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 z-30"></iframe> */}
        </div>
      </Container>
    </div>
  );
}
