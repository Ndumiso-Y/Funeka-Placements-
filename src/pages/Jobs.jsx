import { NavLink } from "react-router-dom";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { jobs } from "../data/jobs.js";

export default function Jobs() {
  const sortedJobs = [...jobs].sort((a, b) => (a.status === "open" ? -1 : 1));

  return (
    <div className="py-24 bg-funeka-bg">
      <Container>
        <SectionHeading
          title="Open Opportunities"
          subtitle="Explore specialized roles in the mining and engineering sectors. We strictly monitor all closing dates."
        />

        <div className="grid gap-6 md:gap-10 md:grid-cols-2 mt-16">
          {sortedJobs.map((job) => (
            <div
              key={job.id}
              className={`rounded-[2rem] border-2 bg-white relative overflow-hidden transition-all duration-300 ${
                job.status === "open"
                  ? "border-funeka-divider hover:border-funeka-action/30 shadow-sm hover:shadow-xl"
                  : "border-funeka-divider/50 bg-funeka-bg opacity-60"
              }`}
            >
              <div className="p-6 sm:p-10">
                {/* Status + closing date row */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span
                    className={`rounded-xl px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] border-2 ${
                      job.status === "open"
                        ? "bg-funeka-action/10 text-funeka-action border-funeka-action/20"
                        : "bg-funeka-divider text-funeka-text/40 border-funeka-divider"
                    }`}
                  >
                    {job.status === "open" ? "Active" : "Closed"}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] font-black text-funeka-text/40 uppercase tracking-widest">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-funeka-action shrink-0"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    Closes: {job.closingDate}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-funeka-anchor uppercase tracking-tighter leading-tight mb-3">
                  {job.title}
                </h3>

                {/* Location + type */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-5">
                  <div className="flex items-center gap-2 text-xs font-black text-funeka-action uppercase tracking-[0.15em]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    {job.location}
                  </div>
                  <div className="text-[10px] font-black text-funeka-anchor/40 uppercase tracking-[0.2em]">
                    {job.employmentType}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-funeka-text/70 leading-relaxed line-clamp-2 font-medium mb-6">
                  {job.summary}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-5 border-t border-funeka-divider">
                  {job.status === "open" ? (
                    <>
                      <NavLink
                        to={`/jobs/${job.id}`}
                        className="inline-flex items-center gap-2 rounded-xl border-2 border-funeka-divider bg-white px-4 py-2.5 text-xs font-black uppercase tracking-wider text-funeka-anchor hover:border-funeka-action hover:text-funeka-action transition-all"
                      >
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                      </NavLink>
                      <NavLink
                        to={`/apply`}
                        className="inline-flex items-center gap-2 rounded-xl bg-funeka-action px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white hover:bg-funeka-dark transition-all shadow-md shadow-funeka-action/20"
                      >
                        Apply Now
                      </NavLink>
                    </>
                  ) : (
                    <span className="text-[11px] font-black text-funeka-text/30 uppercase tracking-widest">Position closed</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No role found CTA */}
        <div className="mt-16 rounded-[2.5rem] bg-funeka-dark p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-funeka-action/5 rounded-full -mr-32 -mt-32 blur-[100px]" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="h-1.5 w-12 bg-funeka-action rounded-full mb-6"></div>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-none mb-5">
                No matching <br /><span className="text-funeka-brand">Role Found?</span>
              </h3>
              <p className="text-lg text-white/60 font-medium leading-relaxed">
                Even if a specific role isn't listed, we are constantly building our database. Submit your CV today.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Button as={NavLink} to="/apply" variant="primary" className="px-10 py-4 shadow-xl">
                Submit Your CV
              </Button>
              <Button as={NavLink} to="/contact" variant="outline" className="px-10 py-4">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
