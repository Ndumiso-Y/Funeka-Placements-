import { useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";
import jobHeader from "../assets/images/job-detail-header.png.png";
import { jobs } from "../data/jobs.js";

export default function JobDetail() {
  const { id } = useParams();
  const job = useMemo(() => jobs.find((j) => j.id === id), [id]);

  if (!job) {
    return (
      <div className="py-12">
        <Container>
          <h1 className="text-2xl font-semibold text-funeka-charcoal">Job not found</h1>
          <p className="mt-2 text-funeka-midGrey">The job you are looking for does not exist, or it may have been removed.</p>
          <div className="mt-6">
            <Button as={NavLink} to="/jobs">Back to Jobs</Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <section className="relative overflow-hidden border-b border-funeka-dividerGrey h-[350px] sm:h-[450px]">
        <div className="absolute inset-0">
          <img src={jobHeader} alt="Job detail" className="h-full w-full object-cover" />
        </div>
        <Container className="relative h-full flex items-center py-12">
          <div className="max-w-3xl">
            <div className="text-sm text-white/90 drop-shadow-md">
              <NavLink to="/jobs" className="hover:underline">Jobs</NavLink> / {job.title}
            </div>
            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-white drop-shadow-lg">
              {job.title}
            </h1>
            <p className="mt-3 text-white/90 drop-shadow-md">
              {job.location} • {job.employmentType}
            </p>
            <p className="mt-4 text-white/95 leading-relaxed drop-shadow-md">{job.summary}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button as={NavLink} to="/apply" variant="dark">Apply now</Button>
              <Button as="a" variant="ghost" href={`mailto:${job.applyEmail}?subject=Application%20-%20${encodeURIComponent(job.title)}`}>
                Email application
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-funeka-charcoal">Responsibilities</div>
              <ul className="mt-4 space-y-2 text-sm text-funeka-midGrey">
                {job.responsibilities.map((r) => (
                  <li key={r}>• {r}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-funeka-charcoal">Requirements</div>
              <ul className="mt-4 space-y-2 text-sm text-funeka-midGrey">
                {job.requirements.map((r) => (
                  <li key={r}>• {r}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-funeka-dividerGrey bg-funeka-lightBlueTint p-6">
            <div className="text-sm font-semibold text-funeka-charcoal">Apply email</div>
            <p className="mt-2 text-sm text-funeka-midGrey leading-relaxed">
              You can apply using the online form or email your CV directly to{" "}
              <a className="hover:underline" href={`mailto:${job.applyEmail}`}>{job.applyEmail}</a>.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
