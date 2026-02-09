import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import privacyImg from "../assets/images/privacy-security.png.webp";

export default function Privacy() {
  return (
    <div className="py-12">
      <Container>
        <SectionHeading
          title="POPIA & Privacy"
          subtitle="How Funeka Placements collects and uses personal information for recruitment purposes."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl overflow-hidden border border-funeka-dividerGrey shadow-soft">
            <img src={privacyImg} alt="Privacy and security" className="h-full w-full object-cover" />
          </div>

          <div className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
            <div className="space-y-6 text-sm text-funeka-midGrey leading-relaxed">
              <div>
                <div className="font-semibold text-funeka-charcoal">Data we may collect</div>
                <div className="mt-2">
                  Identification and contact details, location, employment history, qualifications, references, and documents shared for recruitment purposes.
                </div>
              </div>

              <div>
                <div className="font-semibold text-funeka-charcoal">Purpose</div>
                <div className="mt-2">
                  To assess candidate suitability for roles, communicate with clients and candidates, coordinate interviews, and support placements.
                </div>
              </div>

              <div>
                <div className="font-semibold text-funeka-charcoal">How we use information</div>
                <div className="mt-2">
                  Information is used only for recruitment-related activities and shared only when necessary, lawful and relevant to the hiring process.
                </div>
              </div>

              <div>
                <div className="font-semibold text-funeka-charcoal">Retention</div>
                <div className="mt-2">
                  We keep information for as long as required for recruitment purposes and legal obligations, and remove or anonymise where appropriate.
                </div>
              </div>

              <div>
                <div className="font-semibold text-funeka-charcoal">Security</div>
                <div className="mt-2">
                  We take reasonable steps to secure personal information and limit access to authorised staff only.
                </div>
              </div>

              <div className="rounded-xl border border-funeka-dividerGrey bg-funeka-lightBlueTint p-4">
                <div className="font-semibold text-funeka-charcoal">Contact</div>
                <div className="mt-2">
                  For privacy requests or questions, email{" "}
                  <a className="hover:underline" href="mailto:recruitment@funekaplacements.co.za">
                    recruitment@funekaplacements.co.za
                  </a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
