import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import contactImg from "../assets/images/contact-office.png.png";

export default function Contact() {
  return (
    <div className="py-12">
      <Container>
        <SectionHeading
          title="Contact"
          subtitle="Get in touch for hiring needs, candidate support, or general enquiries."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl overflow-hidden border border-funeka-dividerGrey shadow-soft">
            <img src={contactImg} alt="Contact office" className="h-full w-full object-cover" />
          </div>

          <div className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
            <div className="text-sm font-semibold text-funeka-charcoal">Office</div>
            <p className="mt-2 text-sm text-funeka-midGrey leading-relaxed">
              28 Abbie Str, Rustenburg Visitors Center
            </p>

            <div className="mt-6 text-sm font-semibold text-funeka-charcoal">Email</div>
            <p className="mt-2 text-sm text-funeka-midGrey leading-relaxed">
              <a className="hover:underline" href="mailto:recruitment@funekaplacements.co.za">
                recruitment@funekaplacements.co.za
              </a>
            </p>

            <div className="mt-6 rounded-2xl border border-funeka-dividerGrey bg-funeka-lightBlueTint p-5">
              <div className="text-sm font-semibold text-funeka-charcoal">For employers</div>
              <p className="mt-2 text-sm text-funeka-midGrey leading-relaxed">
                Include role title, location, employment type (permanent/temporary/contract), key responsibilities and required experience.
              </p>
              <div className="mt-4">
                <Button
                  as="a"
                  href="mailto:recruitment@funekaplacements.co.za?subject=Hiring%20Request%20-%20Funeka%20Placements&body=Role%20Title%3A%0ALocation%3A%0AEmployment%20Type%3A%0AResponsibilities%3A%0ARequirements%3A%0ATimeline%3A"
                >
                  Email hiring request
                </Button>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-funeka-dividerGrey bg-white p-5">
              <div className="text-sm font-semibold text-funeka-charcoal">For candidates</div>
              <p className="mt-2 text-sm text-funeka-midGrey leading-relaxed">
                Send your CV and the role you’re interested in. POPIA consent applies to personal information you submit.
              </p>
              <div className="mt-4">
                <Button
                  as="a"
                  variant="ghost"
                  href="mailto:recruitment@funekaplacements.co.za?subject=CV%20Submission%20-%20Funeka%20Placements&body=Full%20Name%3A%0AEmail%3A%0APhone%3A%0ALocation%3A%0ARole%20Interested%20In%3A%0A%0APOPIA%20Consent%3A%20Yes"
                >
                  Email CV submission
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
