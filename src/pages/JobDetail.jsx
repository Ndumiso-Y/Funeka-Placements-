import { useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";
import jobHeader from "../assets/images/job-detail-header.png.webp";
import { jobs } from "../data/jobs.js";

export default function JobDetail() {
  const { id } = useParams();
  const job = useMemo(() => jobs.find((j) => j.id === id), [id]);

  if (!job) {
    return (
      <div className="py-20">
        <Container>
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl font-bold text-funeka-charcoal">Job not found</h1>
            <p className="mt-4 text-funeka-midGrey leading-relaxed">The job you are looking for does not exist, or it may have been removed or closed.</p>
            <div className="mt-8">
              <Button as={NavLink} to="/jobs">Back to All Jobs</Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  const isClosed = job.status === "closed";

  return (
    <div>
      <section className="relative overflow-hidden border-b border-funeka-dividerGrey min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img src={jobHeader} alt="Job detail" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />
        </div>
        <Container className="relative py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-funeka-softBlue font-medium uppercase tracking-widest mb-4">
              <NavLink to="/jobs" className="hover:text-white transition">Jobs</NavLink>
              <span>/</span>
              <span className="text-white/60">{job.title}</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                isClosed ? "bg-gray-800 text-gray-400 border-gray-700" : "bg-funeka-vibrantBlue/20 text-funeka-softBlue border-funeka-vibrantBlue/30"
              }`}>
                {job.status === "open" ? "Active Vacancy" : "Applications Closed"}
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                Closing: {job.closingDate}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-2xl tracking-tight">
              {job.title}
            </h1>
            <p className="mt-6 text-xl text-white/90 font-medium flex items-center gap-3">
              <span className="bg-funeka-vibrantBlue w-1.5 h-6 rounded-full" />
              {job.location} • {job.employmentType}
            </p>
            
            {!isClosed && (
              <div className="mt-10 flex flex-wrap gap-4">
                <Button as={NavLink} to="/apply" className="px-10 py-4 bg-funeka-vibrantBlue hover:bg-funeka-deepBlue border-none">
                  Apply for this position
                </Button>
                <Button as="a" variant="ghost" className="border-white/30 text-white hover:bg-white/10 px-8 py-4" href={`mailto:${job.applyEmail}?subject=Application%20-%20${encodeURIComponent(job.title)}`}>
                  Email CV Directly
                </Button>
              </div>
            )}
            
            {isClosed && (
              <div className="mt-10">
                <p className="text-white/60 italic border-l-2 border-white/20 pl-4 py-2">
                  This position has reached its closing date and is no longer accepting new applications.
                </p>
                <div className="mt-6">
                   <Button as={NavLink} to="/apply" variant="ghost" className="border-white/30 text-white hover:bg-white/10">
                    Submit CV for future roles
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-blue max-w-none">
                <h3 className="text-2xl font-bold text-funeka-charcoal mb-6 border-b pb-4">Job Summary</h3>
                <p className="text-lg text-funeka-midGrey leading-relaxed">{job.summary}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-funeka-charcoal mb-6 border-b pb-4 flex items-center gap-2">
                  Key Responsibilities
                </h3>
                <ul className="grid gap-4 sm:grid-cols-1">
                  {job.responsibilities.map((r, i) => (
                    <li key={i} className="flex gap-4 p-4 rounded-xl border border-funeka-dividerGrey bg-funeka-lightBlueTint/20">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-funeka-vibrantBlue/10 text-funeka-vibrantBlue flex items-center justify-center text-xs font-bold">{i+1}</span>
                      <span className="text-funeka-charcoal font-medium leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-funeka-charcoal mb-6 border-b pb-4">Minimum Requirements</h3>
                <ul className="space-y-4">
                  {job.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-funeka-midGrey">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-funeka-vibrantBlue flex-shrink-0" />
                      <span className="leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl border border-funeka-dividerGrey bg-white p-8 shadow-xl sticky top-28">
                <h4 className="text-lg font-bold text-funeka-charcoal mb-6">Position Details</h4>
                <div className="space-y-6 text-sm">
                  <div className="flex justify-between border-b pb-3">
                    <span className="text-funeka-midGrey font-medium">Status</span>
                    <span className={`font-bold ${isClosed ? 'text-red-600' : 'text-green-600'}`}>
                      {isClosed ? 'CLOSED' : 'OPEN'}
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-3">
                    <span className="text-funeka-midGrey font-medium">Closing Date</span>
                    <span className="font-bold text-funeka-charcoal">{job.closingDate}</span>
                  </div>
                  <div className="flex justify-between border-b pb-3">
                    <span className="text-funeka-midGrey font-medium">Location</span>
                    <span className="font-bold text-funeka-charcoal">{job.location}</span>
                  </div>
                  <div className="flex justify-between border-b pb-3">
                    <span className="text-funeka-midGrey font-medium">Type</span>
                    <span className="font-bold text-funeka-charcoal">{job.employmentType}</span>
                  </div>
                </div>

                {!isClosed ? (
                  <div className="mt-8 space-y-4">
                    <Button as={NavLink} to="/apply" className="w-full justify-center py-4">Apply Online</Button>
                    <p className="text-[10px] text-center text-funeka-midGrey px-2 uppercase tracking-tighter">
                      Apply via portal or email: <span className="font-bold">{job.applyEmail}</span>
                    </p>
                  </div>
                ) : (
                  <div className="mt-8">
                    <p className="text-sm text-funeka-midGrey text-center italic">
                      This role is no longer accepting applications.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
