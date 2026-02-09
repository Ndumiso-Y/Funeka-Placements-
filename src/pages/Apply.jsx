import { useMemo, useState } from "react";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { jobs } from "../data/jobs.js";

export default function Apply() {
  const roleOptions = useMemo(() => ["(Not sure yet)", ...jobs.map((j) => j.title)], []);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    role: "(Not sure yet)",
    message: "",
    consent: false,
    fileName: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function update(key, value) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!form.consent) return;
    setSubmitted(true);
  }

  const mailto = useMemo(() => {
    const subject = `CV Submission - ${form.fullName || "Candidate"} - Funeka Placements`;
    const body =
`Full Name: ${form.fullName}
Email: ${form.email}
Phone: ${form.phone}
Location: ${form.location}
Role Interested In: ${form.role}
CV File: ${form.fileName || "Not attached (online form)"}

Message:
${form.message}

POPIA Consent: Yes`;
    return `mailto:recruitment@funekaplacements.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  return (
    <div className="py-12">
      <Container>
        <SectionHeading
          title="Submit CV"
          subtitle="Complete the form below. Uploading a CV is optional. POPIA consent is required."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <form onSubmit={onSubmit} className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-funeka-charcoal">Full Name</label>
                <input
                  className="mt-1 w-full rounded-xl border border-funeka-dividerGrey px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-funeka-blueHover"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-funeka-charcoal">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-funeka-dividerGrey px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-funeka-blueHover"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-funeka-charcoal">Phone</label>
                <input
                  className="mt-1 w-full rounded-xl border border-funeka-dividerGrey px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-funeka-blueHover"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-funeka-charcoal">Location</label>
                <input
                  className="mt-1 w-full rounded-xl border border-funeka-dividerGrey px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-funeka-blueHover"
                  value={form.location}
                  onChange={(e) => update("location", e.target.value)}
                  placeholder="e.g., Rustenburg, North West"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-funeka-charcoal">Role Interested In</label>
                <select
                  className="mt-1 w-full rounded-xl border border-funeka-dividerGrey px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-funeka-blueHover"
                  value={form.role}
                  onChange={(e) => update("role", e.target.value)}
                >
                  {roleOptions.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-funeka-charcoal">Upload CV (optional)</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mt-1 w-full rounded-xl border border-funeka-dividerGrey bg-white px-3 py-2 text-sm"
                  onChange={(e) => update("fileName", e.target.files?.[0]?.name || "")}
                />
                <div className="mt-1 text-xs text-funeka-midGrey">
                  Upload is stored only in your browser for this starter build. For production, connect to secure storage.
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-funeka-charcoal">Message</label>
                <textarea
                  rows="5"
                  className="mt-1 w-full rounded-xl border border-funeka-dividerGrey px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-funeka-blueHover"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us about your experience, availability, and the role you want."
                />
              </div>

              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 rounded-xl border border-funeka-dividerGrey bg-funeka-lightBlueTint p-4">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={form.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                    required
                  />
                  <span className="text-sm text-funeka-charcoal leading-relaxed">
                    <span className="font-medium">Consent (required):</span>{" "}
                    “I consent to Funeka Placements processing my personal information in line with POPIA.”
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="submit" disabled={!form.consent} className={!form.consent ? "opacity-60 cursor-not-allowed" : ""}>
                Submit
              </Button>
              <Button as="a" variant="ghost" href={mailto}>
                Email CV instead
              </Button>
            </div>

            {submitted ? (
              <div className="mt-6 rounded-2xl border border-funeka-dividerGrey bg-white p-5">
                <div className="text-sm font-semibold text-funeka-charcoal">Submission captured</div>
                <p className="mt-2 text-sm text-funeka-midGrey leading-relaxed">
                  This starter build does not send data to a server yet. Use the “Email CV instead” button to send your details,
                  or email your CV directly to{" "}
                  <a className="hover:underline" href="mailto:recruitment@funekaplacements.co.za">
                    recruitment@funekaplacements.co.za
                  </a>.
                </p>
              </div>
            ) : null}
          </form>

          <div className="rounded-2xl border border-funeka-dividerGrey bg-white p-6 shadow-soft">
            <div className="text-sm font-semibold text-funeka-charcoal">Fallback option</div>
            <p className="mt-2 text-sm text-funeka-midGrey leading-relaxed">
              If you experience issues with the form, send your CV to{" "}
              <a className="hover:underline" href="mailto:recruitment@funekaplacements.co.za">
                recruitment@funekaplacements.co.za
              </a>.
            </p>

            <div className="mt-6 text-sm font-semibold text-funeka-charcoal">What to include</div>
            <ul className="mt-3 space-y-2 text-sm text-funeka-midGrey">
              <li>• Updated CV (PDF preferred)</li>
              <li>• Correct contact details (email and phone)</li>
              <li>• Your location and availability</li>
              <li>• Role you’re applying for</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-funeka-dividerGrey bg-funeka-lightBlueTint p-5">
              <div className="text-sm font-semibold text-funeka-charcoal">POPIA note</div>
              <p className="mt-2 text-sm text-funeka-midGrey leading-relaxed">
                We process your personal information for recruitment purposes only and keep it secure. Read our Privacy (POPIA) page for details.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
