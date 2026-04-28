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

        <div className="grid gap-10 md:grid-cols-2 mt-16">
          {sortedJobs.map((job) => (
            <NavLink
              key={job.id}
              to={`/jobs/${job.id}`}
              className={`group block rounded-[2.5rem] border-2 transition-all duration-500 bg-white relative overflow-hidden ${
                job.status === "open"
                  ? "border-funeka-divider hover:border-funeka-pop shadow-sm hover:shadow-2xl hover:-translate-y-2"
                  : "border-funeka-divider/50 bg-funeka-bg grayscale-[0.8] cursor-not-allowed opacity-60"
              }`}
            >
              <div className="p-10">
                <div className="flex items-start justify-between gap-6 mb-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-funeka-anchor uppercase tracking-tighter leading-tight group-hover:text-funeka-pop transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-black text-funeka-pop uppercase tracking-[0.2em]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      {job.location}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3 shrink-0">
                    <span
                      className={`rounded-xl px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] border-2 ${
                        job.status === "open"
                          ? "bg-funeka-pop/10 text-funeka-pop border-funeka-pop/20"
                          : "bg-funeka-divider text-funeka-text/40 border-funeka-divider"
                      }`}
                    >
                      {job.status === "open" ? "Active" : "Closed"}
                    </span>
                    <div className="flex items-center gap-2 text-[11px] font-black text-funeka-text/40 uppercase tracking-widest">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-funeka-pop"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                      Ends: {job.closingDate}
                    </div>
                  </div>
                </div>

                <p className="text-lg text-funeka-text/70 leading-relaxed line-clamp-2 font-medium">
                  {job.summary}
                </p>

                <div className="mt-10 pt-8 border-t border-funeka-divider flex items-center justify-between">
                   <div className="text-[10px] font-black text-funeka-anchor/30 uppercase tracking-[0.25em]">
                    {job.employmentType}
                  </div>
                  <div className="flex items-center gap-3 text-funeka-anchor font-black text-xs uppercase tracking-[0.2em] group-hover:text-funeka-pop transition-colors">
                    View Details
                    <div className="h-8 w-8 rounded-xl bg-funeka-anchor/5 flex items-center justify-center group-hover:bg-funeka-pop group-hover:text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        <div className="mt-20 rounded-[3rem] border-2 border-funeka-anchor bg-funeka-anchor p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-funeka-brand/5 rounded-full -mr-32 -mt-32 blur-[100px] group-hover:bg-funeka-pop/10 transition-all duration-700" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-1.5 w-12 bg-funeka-pop rounded-full mb-8"></div>
              <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-6">No matching <br /><span className="text-funeka-brand">Role Found?</span></h3>
              <p className="text-xl text-white/60 font-medium leading-relaxed">
                Even if a specific role isn't listed, we are constantly building our database of industry specialists. Submit your CV today.
              </p>
            </div>
            <div className="flex flex-wrap gap-5 lg:justify-end">
              <Button as={NavLink} to="/apply" variant="pop" className="px-12 py-5 text-lg">
                Submit Your CV
              </Button>
              <Button as={NavLink} to="/contact" variant="outline" className="px-12 py-5 text-lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
