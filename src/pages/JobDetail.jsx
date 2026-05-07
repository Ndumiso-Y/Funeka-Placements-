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
            <h1 className="text-3xl font-bold text-funeka-anchor">Job not found</h1>
            <p className="mt-4 text-funeka-text leading-relaxed">The job you are looking for does not exist, or it may have been removed or closed.</p>
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
      <section className="relative overflow-hidden border-b border-funeka-anchor min-h-[450px] sm:min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src={jobHeader} alt="Job detail" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-funeka-anchor/95 via-funeka-anchor/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-funeka-anchor/50 to-transparent" />
        </div>
        <Container className="relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] mb-10">
              <NavLink to="/jobs" className="text-funeka-brand hover:text-white transition-colors">Portal</NavLink>
              <span className="text-funeka-action">/</span>
              <span className="text-white/60">{job.title}</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <span className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 shadow-2xl ${isClosed ? "bg-white/5 text-white/30 border-white/10" : "bg-funeka-action/20 text-funeka-action border-funeka-action/30 backdrop-blur-md"
                }`}>
                {job.status === "open" ? "Strategic Opening" : "Process Complete"}
              </span>
              <span className="px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest bg-white text-funeka-anchor border-2 border-white/20 shadow-xl">
                Closing: {job.closingDate}
              </span>
            </div>

            <h1 className="text-5xl sm:text-[6rem] font-black text-white drop-shadow-2xl tracking-tighter uppercase leading-[0.9]">
              {job.title}
            </h1>
            <p className="mt-10 text-xl sm:text-2xl text-white/90 font-bold flex items-center gap-5">
              <span className="bg-funeka-action w-3 h-10 rounded-full shadow-[0_0_15px_rgba(182,208,225,0.6)]" />
              {job.location} <span className="text-white/40">•</span> {job.employmentType}
            </p>

            {!isClosed && (
              <div className="mt-12 flex flex-wrap gap-5">
                <Button as={NavLink} to="/apply" variant="pop" className="px-12 py-5 text-lg shadow-funeka-action/40">
                  Apply for this position
                </Button>
                <Button as="a" variant="outline" className="px-12 py-5 text-lg" href={`mailto:${job.applyEmail}?subject=Application%20-%20${encodeURIComponent(job.title)}`}>
                  Email CV Directly
                </Button>
              </div>
            )}

            {isClosed && (
              <div className="mt-12">
                <p className="text-white/60 font-medium italic border-l-4 border-funeka-action/50 pl-6 py-3 bg-white/5 rounded-r-2xl">
                  This position has reached its closing date and is no longer accepting new applications.
                </p>
                <div className="mt-8">
                  <Button as={NavLink} to="/apply" variant="outline" className="px-12 py-5 text-lg">
                    Submit CV for future roles
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <div className="grid gap-20 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-16">
              <div className="prose prose-slate max-w-none">
                <h3 className="text-3xl font-black text-funeka-anchor mb-8 uppercase tracking-tight border-b-4 border-funeka-bg pb-4">Job Summary</h3>
                <p className="text-xl text-funeka-text/70 leading-relaxed font-medium">{job.summary}</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-funeka-anchor mb-8 uppercase tracking-tight border-b-4 border-funeka-bg pb-4">
                  Key Responsibilities
                </h3>
                <ul className="grid gap-5">
                  {job.responsibilities.map((r, i) => (
                    <li key={i} className="flex gap-6 p-6 rounded-[1.5rem] border-2 border-funeka-divider bg-funeka-bg/50 hover:bg-white hover:border-funeka-brand/30 transition-all group">
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-funeka-anchor text-funeka-action flex items-center justify-center text-sm font-black group-hover:scale-110 transition-transform">{i + 1}</span>
                      <span className="text-funeka-anchor font-bold text-lg leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-3xl font-black text-funeka-anchor mb-8 uppercase tracking-tight border-b-4 border-funeka-bg pb-4">Minimum Requirements</h3>
                <ul className="space-y-5">
                  {job.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-5 text-funeka-text/70">
                      <div className="mt-2 w-2.5 h-2.5 rounded-full bg-funeka-action flex-shrink-0 shadow-[0_0_8px_rgba(182,208,225,0.4)]" />
                      <span className="text-lg font-medium leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-10">
              <div className="rounded-[2.5rem] border-4 border-funeka-bg bg-white p-10 shadow-2xl sticky top-28">
                <h4 className="text-xl font-black text-funeka-anchor mb-8 uppercase tracking-tight">Position Profile</h4>
                <div className="space-y-8">
                  <div className="flex justify-between items-center border-b border-funeka-divider pb-4">
                    <span className="text-xs font-black text-funeka-text/40 uppercase tracking-widest">Status</span>
                    <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-lg ${isClosed ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'}`}>
                      {isClosed ? 'Closed' : 'Active'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-funeka-divider pb-4">
                    <span className="text-xs font-black text-funeka-text/40 uppercase tracking-widest">Closing Date</span>
                    <span className="text-sm font-black text-funeka-anchor">{job.closingDate}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-funeka-divider pb-4">
                    <span className="text-xs font-black text-funeka-text/40 uppercase tracking-widest">Location</span>
                    <span className="text-sm font-black text-funeka-anchor">{job.location}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-funeka-divider pb-4">
                    <span className="text-xs font-black text-funeka-text/40 uppercase tracking-widest">Employment</span>
                    <span className="text-sm font-black text-funeka-anchor">{job.employmentType}</span>
                  </div>
                </div>

                {!isClosed ? (
                  <div className="mt-12 space-y-6">
                    <Button as={NavLink} to="/apply" variant="pop" className="w-full justify-center py-5 text-lg">Apply Online</Button>
                    <div className="p-4 rounded-2xl bg-funeka-bg text-center">
                      <p className="text-[10px] font-black text-funeka-text/40 uppercase tracking-[0.1em] mb-1">Direct Inquiries</p>
                      <a href={`mailto:${job.applyEmail}`} className="text-xs font-black text-funeka-anchor hover:text-funeka-action transition-colors">{job.applyEmail}</a>
                    </div>
                  </div>
                ) : (
                  <div className="mt-12 p-6 rounded-2xl bg-red-50 border-2 border-red-100">
                    <p className="text-sm font-bold text-red-600 text-center leading-relaxed">
                      This role is no longer accepting strategic applications.
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
