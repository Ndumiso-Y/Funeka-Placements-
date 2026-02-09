import { NavLink } from "react-router-dom";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { jobs } from "../data/jobs.js";

export default function Jobs() {
  return (
    <div className="py-12">
      <Container>
        <SectionHeading
          title="Job Listings"
          subtitle="Browse roles currently available. If you don’t see your role, submit your CV for future opportunities."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {jobs.map((job) => (
            <div key={job.id} className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-funeka-charcoal">{job.title}</div>
                  <div className="mt-1 text-sm text-funeka-midGrey">
                    {job.location} • {job.employmentType}
                  </div>
                </div>
                <span className="rounded-full border border-funeka-dividerGrey bg-funeka-lightBlueTint px-3 py-1 text-xs text-funeka-midGrey">
                  SA Role
                </span>
              </div>

              <p className="mt-4 text-sm text-funeka-midGrey leading-relaxed">
                {job.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button as={NavLink} to={`/jobs/${job.id}`}>View details</Button>
                <Button as={NavLink} to="/apply" variant="ghost">Apply</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-funeka-dividerGrey bg-funeka-lightBlueTint p-6">
          <div className="text-sm font-semibold text-funeka-charcoal">Not seeing your role?</div>
          <p className="mt-2 text-sm text-funeka-midGrey leading-relaxed">
            Submit your CV and tell us what role you’re interested in — we’ll keep your details on record for suitable opportunities.
          </p>
          <div className="mt-4">
            <Button as={NavLink} to="/apply" variant="dark">Submit CV</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
