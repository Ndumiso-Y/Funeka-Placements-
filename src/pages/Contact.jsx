import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import contactImg from "../assets/images/contact-office.png.webp";

export default function Contact() {
  return (
    <div className="py-32 bg-funeka-bg min-h-screen">
      <Container>
        <SectionHeading
          title="Operational Channels"
          subtitle="Get in touch for specialized hiring needs, candidate support, or strategic enquiries."
        />
 
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center mt-20">
          <div className="relative group">
            <div className="absolute -inset-10 bg-funeka-brand/10 rounded-full blur-[100px] group-hover:bg-funeka-pop/10 transition-all duration-700"></div>
            <div className="relative rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl">
              <img src={contactImg} alt="Contact office" className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-funeka-anchor p-10 rounded-[2.5rem] shadow-2xl border-4 border-white hidden sm:block rotate-3 group-hover:rotate-0 transition-all duration-500">
               <div className="text-funeka-brand font-black text-xs uppercase tracking-[0.25em] mb-2">Regional Hub</div>
               <div className="text-white font-black text-2xl tracking-tighter">Rustenburg Operations</div>
            </div>
          </div>
 
          <div className="space-y-10">
            <div className="rounded-[3rem] border-4 border-white bg-white p-12 shadow-2xl hover:shadow-2xl hover:border-funeka-pop/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-funeka-brand/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-funeka-pop/10 transition-all"></div>
              
              <div className="flex items-start gap-8 mb-12">
                <div className="h-16 w-16 rounded-2xl bg-funeka-anchor text-funeka-brand flex items-center justify-center flex-shrink-0 group-hover:bg-funeka-brand group-hover:text-white transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="text-[10px] font-black text-funeka-anchor/40 uppercase tracking-[0.25em] mb-3">Headquarters</div>
                  <div className="text-2xl font-black text-funeka-anchor uppercase tracking-tighter leading-tight">28 Abbie Str, <br />Rustenburg Visitors Center</div>
                </div>
              </div>
 
              <div className="flex items-start gap-8">
                <div className="h-16 w-16 rounded-2xl bg-funeka-anchor text-funeka-pop flex items-center justify-center flex-shrink-0 group-hover:bg-funeka-pop group-hover:text-white transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div className="text-[10px] font-black text-funeka-anchor/40 uppercase tracking-[0.25em] mb-3">Strategic Email</div>
                  <a className="text-2xl font-black text-funeka-pop hover:text-funeka-anchor transition-colors border-b-4 border-funeka-pop/20 leading-tight block" href="mailto:rustenburg@funekaplacements.co.za">
                    rustenburg@funekaplacements.co.za
                  </a>
                </div>
              </div>
            </div>
 
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-[2.5rem] border-2 border-funeka-divider bg-white p-10 hover:shadow-2xl hover:border-funeka-brand/30 transition-all group">
                <h3 className="text-xl font-black text-funeka-anchor uppercase tracking-tight mb-4 group-hover:text-funeka-brand">For Partners</h3>
                <p className="text-sm text-funeka-text/60 font-medium leading-relaxed mb-10">
                  Get in touch for specialized hiring requests and technical requirements.
                </p>
                <Button
                  as="a"
                  variant="primary"
                  className="w-full text-xs py-4"
                  href="mailto:sharon@funekaplacements.co.za,ruth@funekaplacements.co.za?subject=Hiring%20Request%20-%20Funeka%20Placements&body=Role%20Title%3A%0ALocation%3A%0AEmployment%20Type%3A%0AResponsibilities%3A%0ARequirements%3A%0ATimeline%3A"
                >
                  Email Hiring Request
                </Button>
              </div>
 
              <div className="rounded-[2.5rem] border-2 border-funeka-divider bg-white p-10 hover:shadow-2xl hover:border-funeka-pop/30 transition-all group">
                <h3 className="text-xl font-black text-funeka-anchor uppercase tracking-tight mb-4 group-hover:text-funeka-pop">For Specialists</h3>
                <p className="text-sm text-funeka-text/60 font-medium leading-relaxed mb-10">
                  Send your credentials and explore technical industrial opportunities.
                </p>
                <Button
                  as="a"
                  variant="pop"
                  className="w-full text-xs py-4 shadow-xl shadow-funeka-pop/30"
                  href="mailto:sharon@funekaplacements.co.za,ruth@funekaplacements.co.za?subject=CV%20Submission%20-%20Funeka%20Placements&body=Full%20Name%3A%0AEmail%3A%0APhone%3A%0ALocation%3A%0ARole%20Interested%20In%3A%0A%0APOPIA%20Consent%3A%20Yes"
                >
                  Email CV Submission
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
