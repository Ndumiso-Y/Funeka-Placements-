import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import contactImg from "../assets/images/contact-office.png.webp";

export default function Contact() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=28%20Abbie%20Str%2C%20Rustenburg";
  const mapEmbedUrl = "https://www.google.com/maps?q=28%20Abbie%20Str%2C%20Rustenburg&output=embed";
  const phone = "014 88 00 501";
  const whatsapp = "078 342 6211";

  return (
    <div className="py-24 bg-funeka-bg min-h-screen">
      <Container>
        <SectionHeading
          as="h1"
          title="Contact Funeka Placements"
          subtitle="Reach out for recruitment services, staffing support, candidate support, or strategic enquiries in Rustenburg, North West."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start mt-16">
          {/* Left — image + location badge */}
          <div className="relative group">
            <div className="absolute -inset-6 bg-funeka-brand/10 rounded-[4rem] blur-[80px] group-hover:bg-funeka-action/10 transition-all duration-500"></div>
            <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
              <img
                src={contactImg}
                alt="Funeka Placements recruitment agency office in Rustenburg"
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
                    <div className="text-[10px] font-black text-funeka-anchor/40 uppercase tracking-[0.25em] mb-2">Funeka Placements</div>
                    <div className="text-xl font-black text-funeka-anchor uppercase tracking-tighter leading-tight">
                      28 Abbie Str, Rustenburg Visitors Center, North West, South Africa
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
                      rustenburg@funekaplacements.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="h-14 w-14 rounded-2xl bg-funeka-anchor text-funeka-brand flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.14a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-funeka-anchor/40 uppercase tracking-[0.25em] mb-2">Call</div>
                    <a className="text-lg font-black text-funeka-anchor hover:text-funeka-action transition-colors" href="tel:+27148800501">
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="h-14 w-14 rounded-2xl bg-funeka-anchor text-funeka-action flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-funeka-anchor/40 uppercase tracking-[0.25em] mb-2">WhatsApp</div>
                    <a className="text-lg font-black text-funeka-anchor hover:text-funeka-action transition-colors" href="https://wa.me/27783426211" target="_blank" rel="noopener noreferrer">
                      {whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="h-14 w-14 rounded-2xl bg-funeka-anchor text-funeka-brand flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-funeka-anchor/40 uppercase tracking-[0.25em] mb-2">Operating Hours</div>
                    <div className="text-base font-black text-funeka-anchor leading-relaxed">
                      <div>Monday–Thursday: 07:30–15:30</div>
                      <div>Friday: 07:30–15:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] border-2 border-funeka-divider bg-white p-8 hover:shadow-xl hover:border-funeka-anchor/30 transition-all group">
                <h3 className="text-lg font-black text-funeka-anchor uppercase tracking-tight mb-3 group-hover:text-funeka-anchor">For Partners</h3>
                <p className="text-sm text-funeka-text/60 font-medium leading-relaxed mb-8">
                  Specialized hiring requests, employer recruitment support and technical requirements.
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
                  Send your credentials and explore candidate placement support for technical industrial opportunities.
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
        <div className="mt-24 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative bg-funeka-anchor">
          <div className="h-[420px]">
            <iframe
              title="Funeka Placements location map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="bg-funeka-anchor p-6 sm:p-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-[10px] font-black text-funeka-brand uppercase tracking-[0.25em] mb-2">Visit Us</div>
              <div className="text-xl font-black text-white uppercase tracking-tighter">
                28 Abbie Str, Rustenburg
              </div>
            </div>
            <Button
              as="a"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="w-full sm:w-auto px-8 py-4"
            >
              Open in Google Maps
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
