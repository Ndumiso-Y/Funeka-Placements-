import { NavLink } from "react-router-dom";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { jobs } from "../data/jobs.js";

export default function Jobs() {
  const sortedJobs = [...jobs].sort((a, b) => (a.status === "open" ? -1 : 1));

  return (
    <div className="py-12 bg-funeka-lightBlueTint/30">
      <Container>
        <SectionHeading
          title="Current Opportunities"
          subtitle="Explore open roles in mining, industrial, and administrative sectors. Closing dates are strictly observed."
        />

        <div className="grid gap-6 md:grid-cols-2 mt-10">
          {sortedJobs.map((job) => (
            <div
              key={job.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                job.status === "open"
                  ? "border-funeka-dividerGrey bg-white shadow-soft hover:shadow-xl hover:-translate-y-1"
                  : "border-gray-200 bg-gray-50 opacity-75 grayscale-[0.5]"
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-bold text-funeka-charcoal tracking-tight">{job.title}</div>
                    <div className="mt-1 text-sm font-medium text-funeka-vibrantBlue">
                      {job.location} • {job.employmentType}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        job.status === "open"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-gray-200 text-gray-600 border border-gray-300"
                      }`}
                    >
                      {job.status === "open" ? "Active" : "Closed"}
                    </span>
                    <div className="text-[11px] font-semibold text-funeka-midGrey">
                      Closing: {job.closingDate}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-funeka-midGrey leading-relaxed line-clamp-3">
                  {job.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button as={NavLink} to={`/jobs/${job.id}`} className="px-6">
                    View Details
                  </Button>
                  {job.status === "open" && (
                    <Button as={NavLink} to="/apply" variant="ghost">
                      Apply Now
                    </Button>
                  )}
                </div>
              </div>
              {job.status === "closed" && (
                <div className="bg-gray-200 py-1.5 text-center text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Applications Closed
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-funeka-dividerGrey bg-funeka-charcoal p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-funeka-vibrantBlue/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold">Not seeing your ideal role?</h3>
            <p className="mt-4 text-white/80 max-w-2xl leading-relaxed">
              We specialize in mining and industrial placements. Even if a specific role isn't listed, we are constantly building our candidate database. Submit your CV today and we'll reach out when a match arises.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as={NavLink} to="/apply" className="bg-funeka-vibrantBlue hover:bg-funeka-deepBlue border-none text-white px-10 py-4">
                Submit Your CV
              </Button>
              <Button as={NavLink} to="/contact" variant="ghost" className="border-white/30 text-white hover:bg-white/10">
                Contact Recruitment
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
