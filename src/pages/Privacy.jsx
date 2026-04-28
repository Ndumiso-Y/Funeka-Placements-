import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import privacyImg from "../assets/images/privacy-security.png.webp";
 
export default function Privacy() {
  return (
    <div className="py-32 bg-funeka-bg min-h-screen">
      <Container>
        <SectionHeading
          title="POPIA & Privacy Mandate"
          subtitle="How Funeka Placements collects and utilizes strategic personal data for industrial recruitment."
        />
 
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start mt-20">
          <div className="rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative group">
            <div className="absolute inset-0 bg-funeka-anchor/20 group-hover:bg-transparent transition-all duration-700"></div>
            <img src={privacyImg} alt="Privacy and security" className="h-full w-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" />
          </div>
 
          <div className="rounded-[3rem] border-4 border-white bg-white p-12 shadow-2xl">
            <div className="space-y-10 text-lg text-funeka-text/70 leading-relaxed">
              <div className="group">
                <div className="font-black text-funeka-anchor uppercase tracking-tight flex items-center gap-3">
                  <div className="h-1.5 w-6 bg-funeka-brand rounded-full group-hover:w-10 transition-all"></div>
                  Data Procurement
                </div>
                <div className="mt-4 pl-9">
                  Identification and contact details, location, employment history, qualifications, references, and documents shared for strategic recruitment purposes.
                </div>
              </div>
 
              <div className="group">
                <div className="font-black text-funeka-anchor uppercase tracking-tight flex items-center gap-3">
                  <div className="h-1.5 w-6 bg-funeka-pop rounded-full group-hover:w-10 transition-all"></div>
                  Purpose & Alignment
                </div>
                <div className="mt-4 pl-9">
                  To assess candidate suitability for roles, communicate with industrial partners, coordinate rigorous interviews, and support long-term placements.
                </div>
              </div>
 
              <div className="group">
                <div className="font-black text-funeka-anchor uppercase tracking-tight flex items-center gap-3">
                  <div className="h-1.5 w-6 bg-funeka-brand rounded-full group-hover:w-10 transition-all"></div>
                  Strategic Usage
                </div>
                <div className="mt-4 pl-9">
                  Information is utilized strictly for recruitment-related activities and shared only when necessary, lawful and relevant to the technical hiring process.
                </div>
              </div>
 
              <div className="group">
                <div className="font-black text-funeka-anchor uppercase tracking-tight flex items-center gap-3">
                  <div className="h-1.5 w-6 bg-funeka-pop rounded-full group-hover:w-10 transition-all"></div>
                  Retention Policy
                </div>
                <div className="mt-4 pl-9">
                  We maintain records for the duration required by recruitment mandates and legal obligations, removing or anonymizing data where appropriate.
                </div>
              </div>
 
              <div className="rounded-[2rem] border-2 border-funeka-divider bg-funeka-bg/50 p-8 mt-12 group hover:border-funeka-brand/30 transition-all">
                <div className="font-black text-funeka-anchor uppercase tracking-tight flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-funeka-brand"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Connect with Privacy Officer
                </div>
                <div className="mt-4 text-base font-medium">
                  For privacy requests or compliance questions, email{" "}
                  <a className="text-funeka-pop font-black hover:text-funeka-anchor transition-colors border-b-2 border-funeka-pop/20" href="mailto:rustenburg@funekaplacements.co.za">
                    rustenburg@funekaplacements.co.za
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
