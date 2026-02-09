import { NavLink } from "react-router-dom";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import TrustStrip from "../components/TrustStrip.jsx";
import { jobs } from "../data/jobs.js";

import heroImg from "../assets/images/home-hero.png.png";
import servicesHeader from "../assets/images/services-header.png.webp";
import processHero from "../assets/images/process-hero.png.png";

export default function Home() {
  const latest = jobs.slice(0, 3);

  return (
    <div>
      {/* 1) Hero */}
      <section className="relative overflow-hidden border-b border-funeka-dividerGrey h-[400px] sm:h-[500px]">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Funeka Placements" className="h-full w-full object-cover" />
        </div>

        <Container className="relative h-full flex items-center py-14 sm:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-white/30 bg-white px-3 py-1 text-xs text-funeka-midGrey shadow-sm">
              Recruitment Agency • South Africa
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl drop-shadow-lg">
              FUNEKA PLACEMENTS
            </h1>
            <p className="mt-3 text-lg text-white leading-relaxed drop-shadow-md">
              "There is always a need"
            </p>

            <p className="mt-5 text-white/95 leading-relaxed drop-shadow-md">
              We connect employers with the right talent and help candidates find the right opportunities —
              with a structured process, transparent communication, and POPIA-aware handling of personal information.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button as={NavLink} to="/employers">Hire Talent</Button>
              <Button as={NavLink} to="/jobs" variant="ghost">Find Jobs</Button>
              <Button as={NavLink} to="/apply" variant="dark">Submit CV</Button>
            </div>

            <div className="mt-6 text-sm text-white/90 drop-shadow-md">
              Email:{" "}
              <a className="hover:underline" href="mailto:recruitment@funekaplacements.co.za">
                recruitment@funekaplacements.co.za
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 2) Journey Cards */}
      <section className="py-12">
        <Container>
          <SectionHeading
            title="Choose your journey"
            subtitle="Whether you are hiring talent or looking for work, we’ll guide you to the right next step."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-funeka-charcoal">Employers / Recruiters</div>
              <p className="mt-2 text-funeka-midGrey leading-relaxed">
                Hire the right people with a structured recruitment process that supports performance, culture fit and role alignment.
              </p>
              <div className="mt-5 flex gap-3">
                <Button as={NavLink} to="/employers">Hire Talent</Button>
                <Button as={NavLink} to="/process" variant="ghost">View Process</Button>
              </div>
            </div>

            <div className="rounded-2xl border border-funeka-dividerGrey bg-funeka-lightBlueTint p-6 shadow-soft">
              <div className="text-sm font-semibold text-funeka-charcoal">Candidates / Job Seekers</div>
              <p className="mt-2 text-funeka-midGrey leading-relaxed">
                Find opportunities that match your skills and goals. Submit your CV and apply for available roles online.
              </p>
              <div className="mt-5 flex gap-3">
                <Button as={NavLink} to="/jobs">Find Jobs</Button>
                <Button as={NavLink} to="/apply" variant="ghost">Submit CV</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3) How Funeka Delivers (EXACT COPY) */}
      <section className="py-12 border-y border-funeka-dividerGrey bg-white">
        <Container>
          <SectionHeading title="How Funeka delivers" subtitle="What clients can expect when partnering with Funeka Placements." />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "We help employers focus on performance while we source and place the right talent.",
              "We understand your business, culture and values.",
              "We provide permanent, temporary, contract and labour hosting solutions.",
            ].map((t) => (
              <div key={t} className="rounded-2xl border border-funeka-dividerGrey p-6 shadow-soft">
                <p className="text-funeka-charcoal leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4) Recruitment Process Preview */}
      <section className="py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                title="A structured recruitment process"
                subtitle="Our 12-step process supports consistent quality, clear communication, and documented decision-making."
              />
              <ul className="space-y-2 text-sm text-funeka-midGrey">
                <li>• Clear role briefing and expectations</li>
                <li>• Sourcing, screening and shortlisting</li>
                <li>• Interview coordination and feedback loops</li>
                <li>• Reference and document checks where applicable</li>
                <li>• Offer support and placement follow-up</li>
              </ul>
              <div className="mt-6">
                <Button as={NavLink} to="/process">View the 12 steps</Button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-funeka-dividerGrey shadow-soft">
              <img src={processHero} alt="Recruitment process" className="h-full w-full object-cover" />
            </div>
          </div>
        </Container>
      </section>

      {/* 5) Services Preview */}
      <section className="py-12 border-y border-funeka-dividerGrey bg-funeka-lightBlueTint">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="rounded-2xl overflow-hidden border border-funeka-dividerGrey shadow-soft">
              <img src={servicesHeader} alt="Services" className="h-full w-full object-cover" />
            </div>
            <div>
              <SectionHeading
                title="Services that support your hiring goals"
                subtitle="From permanent placements to contract and labour hosting solutions, we help you hire with confidence."
              />
              <div className="grid gap-3 sm:grid-cols-2 text-sm">
                {[
                  "Permanent placements",
                  "Temporary placements",
                  "Contract staffing",
                  "Labour hosting solutions",
                  "Candidate sourcing & screening",
                  "Interview coordination support",
                ].map((s) => (
                  <div key={s} className="rounded-xl border border-funeka-dividerGrey bg-white p-4">
                    <div className="font-medium text-funeka-charcoal">{s}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button as={NavLink} to="/services">Explore services</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6) Latest Jobs Preview (3) */}
      <section className="py-12">
        <Container>
          <SectionHeading
            title="Latest jobs"
            subtitle="Browse roles currently available and apply online, or submit your CV for future opportunities."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {latest.map((job) => (
              <div key={job.id} className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
                <div className="text-sm font-semibold text-funeka-charcoal">{job.title}</div>
                <div className="mt-1 text-sm text-funeka-midGrey">{job.location} • {job.employmentType}</div>
                <p className="mt-3 text-sm text-funeka-midGrey leading-relaxed line-clamp-4">
                  {job.summary}
                </p>
                <div className="mt-5 flex gap-3">
                  <Button as={NavLink} to={`/jobs/${job.id}`}>View</Button>
                  <Button as={NavLink} to="/apply" variant="ghost">Apply</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button as={NavLink} to="/jobs" variant="dark">View all jobs</Button>
          </div>
        </Container>
      </section>

      {/* 7) Trust & Compliance Strip */}
      <TrustStrip />

      {/* 8) Footer handled globally */}
    </div>
  );
}
