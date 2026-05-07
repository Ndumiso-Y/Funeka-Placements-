import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container.jsx";
import Button from "../../components/Button.jsx";

const PASS = "funeka2025";

// ── tiny local-storage helpers ──────────────────────────────────────────────
function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}
function save(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

// ── seed data ────────────────────────────────────────────────────────────────
const SEED_INVOICES = [
  { id: "INV-001", client: "Platinum Ridge Mining", date: "2025-04-01", amount: 18500, status: "paid" },
  { id: "INV-002", client: "Kopano Engineering",   date: "2025-04-08", amount: 9200,  status: "pending" },
];
const SEED_EMPLOYERS = [
  { id: "E001", company: "Platinum Ridge Mining",  contact: "John Mokoena",  status: "Active",    lastNote: "Requirement brief received." },
  { id: "E002", company: "Kopano Engineering",      contact: "Sara Dlamini",  status: "Follow-up", lastNote: "Shortlist sent — awaiting feedback." },
];
const SEED_CANDIDATES = [
  { id: "C001", name: "Thabo Nkosi",    role: "Mine Overseer",   status: "Placed",      lastNote: "Started 2025-03-01." },
  { id: "C002", name: "Lerato Sithole", role: "Auto Electrician", status: "Interviewing", lastNote: "2nd interview scheduled." },
  { id: "C003", name: "David Mthembu",  role: "LHD Operator",    status: "In Database",  lastNote: "CV on file." },
];

const STATUS_COLORS = {
  Active:        "bg-green-100 text-green-700 border-green-200",
  "Follow-up":   "bg-yellow-100 text-yellow-700 border-yellow-200",
  Placed:        "bg-blue-100 text-blue-700 border-blue-200",
  Interviewing:  "bg-purple-100 text-purple-700 border-purple-200",
  "In Database": "bg-gray-100 text-gray-600 border-gray-200",
  paid:          "bg-green-100 text-green-700 border-green-200",
  pending:       "bg-yellow-100 text-yellow-700 border-yellow-200",
  overdue:       "bg-red-100 text-red-700 border-red-200",
};

export default function StaffDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("invoices");

  // ── invoices ─────────────────────────────────────────────────────────────
  const [invoices, setInvoices] = useState(() => load("fp_invoices", SEED_INVOICES));

  function addInvoice() {
    const client = prompt("Client name:");
    if (!client) return;
    const amount = parseFloat(prompt("Amount (R):") || 0);
    const date = new Date().toISOString().split("T")[0];
    const id = `INV-${String(invoices.length + 1).padStart(3, "0")}`;
    const updated = [...invoices, { id, client, date, amount, status: "pending" }];
    setInvoices(updated);
    save("fp_invoices", updated);
  }

  function markPaid(id) {
    const updated = invoices.map(i => i.id === id ? { ...i, status: "paid" } : i);
    setInvoices(updated);
    save("fp_invoices", updated);
  }

  // ── employer tracker ──────────────────────────────────────────────────────
  const [employers, setEmployers] = useState(() => load("fp_employers", SEED_EMPLOYERS));

  function updateEmployer(id, field, value) {
    const updated = employers.map(e => e.id === id ? { ...e, [field]: value } : e);
    setEmployers(updated);
    save("fp_employers", updated);
  }

  function addEmployer() {
    const company = prompt("Company name:");
    if (!company) return;
    const contact = prompt("Contact person:") || "—";
    const id = `E${String(employers.length + 1).padStart(3, "0")}`;
    const updated = [...employers, { id, company, contact, status: "Active", lastNote: "" }];
    setEmployers(updated);
    save("fp_employers", updated);
  }

  // ── candidate tracker ─────────────────────────────────────────────────────
  const [candidates, setCandidates] = useState(() => load("fp_candidates", SEED_CANDIDATES));

  function updateCandidate(id, field, value) {
    const updated = candidates.map(c => c.id === id ? { ...c, [field]: value } : c);
    setCandidates(updated);
    save("fp_candidates", updated);
  }

  function addCandidate() {
    const name = prompt("Candidate full name:");
    if (!name) return;
    const role = prompt("Target role:") || "—";
    const id = `C${String(candidates.length + 1).padStart(3, "0")}`;
    const updated = [...candidates, { id, name, role, status: "In Database", lastNote: "" }];
    setCandidates(updated);
    save("fp_candidates", updated);
  }

  function logout() {
    sessionStorage.removeItem("fp_auth");
    navigate("/staff/login");
  }

  const TABS = [
    { key: "invoices",   label: "Invoices" },
    { key: "employers",  label: "Employer Tracker" },
    { key: "candidates", label: "Candidate Tracker" },
    { key: "jobs",       label: "Jobs Management" },
  ];

  return (
    <div className="min-h-screen bg-funeka-bg">
      {/* Header */}
      <div className="bg-funeka-dark border-b border-white/10">
        <Container className="flex items-center justify-between h-16 gap-4">
          <div>
            <div className="text-base font-black text-white uppercase tracking-tight">
              FUNEKA <span className="text-funeka-brand">PLACEMENTS</span>
            </div>
            <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Staff Portal</div>
          </div>
          <button
            onClick={logout}
            className="text-[11px] font-black uppercase tracking-widest text-white/50 hover:text-funeka-action transition-colors"
          >
            Sign Out
          </button>
        </Container>
      </div>

      <Container className="py-10">
        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          <Stat label="Total Invoices" value={invoices.length} />
          <Stat label="Pending" value={invoices.filter(i => i.status === "pending").length} />
          <Stat label="Active Employers" value={employers.filter(e => e.status === "Active").length} />
          <Stat label="Candidates in Pipeline" value={candidates.filter(c => c.status !== "In Database").length} />
          <Stat label="Total Candidates" value={candidates.length} />
          <Stat label="Placed" value={candidates.filter(c => c.status === "Placed").length} />
        </div>

        {/* Tab bar */}
        <div className="flex gap-2 flex-wrap mb-8 border-b border-funeka-divider pb-0">
          {TABS.map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-5 py-3 text-xs font-black uppercase tracking-widest border-b-2 transition-all -mb-px ${
                tab === t.key
                  ? "border-funeka-action text-funeka-action"
                  : "border-transparent text-funeka-text/50 hover:text-funeka-anchor"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── INVOICES ── */}
        {tab === "invoices" && (
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="text-xl font-black text-funeka-anchor uppercase tracking-tight">Invoices</h2>
              <Button disabled variant="primary" className="px-6 py-3 text-xs">+ Create Invoice</Button>
            </div>
            
            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 text-sm text-funeka-text mb-6">
              <div className="font-black text-amber-600 uppercase tracking-widest mb-3">Backend Integration Required</div>
              <p className="text-amber-800 leading-relaxed mb-4 font-bold">
                Invoice generation is running in local preview mode. For full capability (Save, PDF Generation, Email Dispatch), a backend service is required.
              </p>
              <ul className="list-disc pl-5 text-amber-800/80 font-bold space-y-1 text-xs">
                <li>Connect database for persistent invoice storage and numbering.</li>
                <li>Integrate a PDF generation library (e.g., Puppeteer, jsPDF).</li>
                <li>Configure transactional email service (e.g., SendGrid, AWS SES).</li>
              </ul>
            </div>
            <div className="space-y-3">
              {invoices.length === 0 && (
                <div className="rounded-2xl border border-funeka-divider bg-white p-8 text-center text-funeka-text/50 text-sm">
                  No invoices yet. Click "+ Add Invoice" to create one.
                </div>
              )}
              {invoices.map(inv => (
                <div key={inv.id} className="rounded-2xl border border-funeka-divider bg-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-black text-funeka-anchor/40 uppercase tracking-[0.2em] mb-1">{inv.id}</div>
                    <div className="font-black text-funeka-anchor text-base">{inv.client}</div>
                    <div className="text-sm text-funeka-text/60 mt-1">{inv.date}</div>
                  </div>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="text-xl font-black text-funeka-anchor">R {Number(inv.amount).toLocaleString("en-ZA", { minimumFractionDigits: 2 })}</div>
                    <span className={`rounded-xl border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] ${STATUS_COLORS[inv.status] || ""}`}>
                      {inv.status}
                    </span>
                    {inv.status !== "paid" && (
                      <button
                        onClick={() => markPaid(inv.id)}
                        className="text-[11px] font-black uppercase tracking-widest text-funeka-action hover:text-funeka-dark transition-colors"
                      >
                        Mark Paid
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── EMPLOYER TRACKER ── */}
        {tab === "employers" && (
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="text-xl font-black text-funeka-anchor uppercase tracking-tight">Employer Tracker</h2>
              <Button disabled variant="primary" className="px-6 py-3 text-xs">+ Add Employer</Button>
            </div>

            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 text-sm text-funeka-text mb-6">
              <div className="font-black text-amber-600 uppercase tracking-widest mb-3">Backend Integration Required</div>
              <p className="text-amber-800 leading-relaxed mb-1 font-bold">
                Employer tracking is currently running in local storage preview mode.
              </p>
              <p className="text-amber-800/80 leading-relaxed text-xs">
                Requires database integration (e.g., Supabase) for secure persistence, multi-user real-time updates, and team collaboration.
              </p>
            </div>
            <div className="space-y-3">
              {employers.map(e => (
                <div key={e.id} className="rounded-2xl border border-funeka-divider bg-white p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="font-black text-funeka-anchor text-base">{e.company}</div>
                      <div className="text-sm text-funeka-text/60">{e.contact}</div>
                    </div>
                    <select
                      value={e.status}
                      onChange={ev => updateEmployer(e.id, "status", ev.target.value)}
                      className={`rounded-xl border px-3 py-2 text-[11px] font-black uppercase tracking-[0.15em] outline-none cursor-pointer ${STATUS_COLORS[e.status] || "border-funeka-divider"}`}
                    >
                      {["Active", "Follow-up", "On Hold", "Closed"].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <textarea
                    className="w-full rounded-xl border border-funeka-divider px-4 py-3 text-sm text-funeka-anchor font-medium resize-none focus:outline-none focus:border-funeka-action transition-colors"
                    rows={2}
                    placeholder="Notes..."
                    value={e.lastNote}
                    onChange={ev => updateEmployer(e.id, "lastNote", ev.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── CANDIDATE TRACKER ── */}
        {tab === "candidates" && (
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="text-xl font-black text-funeka-anchor uppercase tracking-tight">Candidate Tracker</h2>
              <Button disabled variant="primary" className="px-6 py-3 text-xs">+ Add Candidate</Button>
            </div>

            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 text-sm text-funeka-text mb-6">
              <div className="font-black text-amber-600 uppercase tracking-widest mb-3">Backend Integration Required</div>
              <p className="text-amber-800 leading-relaxed mb-1 font-bold">
                Candidate tracking is currently running in local storage preview mode.
              </p>
              <p className="text-amber-800/80 leading-relaxed text-xs">
                Requires database integration for secure CV file storage, persistence, and complex querying.
              </p>
            </div>
            <div className="space-y-3">
              {candidates.map(c => (
                <div key={c.id} className="rounded-2xl border border-funeka-divider bg-white p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="font-black text-funeka-anchor text-base">{c.name}</div>
                      <div className="text-sm text-funeka-text/60 uppercase tracking-wide">{c.role}</div>
                    </div>
                    <select
                      value={c.status}
                      onChange={ev => updateCandidate(c.id, "status", ev.target.value)}
                      className={`rounded-xl border px-3 py-2 text-[11px] font-black uppercase tracking-[0.15em] outline-none cursor-pointer ${STATUS_COLORS[c.status] || "border-funeka-divider"}`}
                    >
                      {["In Database", "Shortlisted", "Interviewing", "Offer Stage", "Placed", "Withdrawn"].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    className="w-full rounded-xl border border-funeka-divider px-4 py-3 text-sm text-funeka-anchor font-medium resize-none focus:outline-none focus:border-funeka-action transition-colors"
                    rows={2}
                    placeholder="Notes..."
                    value={c.lastNote}
                    onChange={ev => updateCandidate(c.id, "lastNote", ev.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {/* ── JOBS MANAGEMENT ── */}
        {tab === "jobs" && (
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="text-xl font-black text-funeka-anchor uppercase tracking-tight">Jobs Management</h2>
              <Button disabled variant="primary" className="px-6 py-3 text-xs">+ Post New Job</Button>
            </div>
            
            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 text-sm text-funeka-text mb-6">
              <div className="font-black text-amber-600 uppercase tracking-widest mb-3">Backend Integration Required</div>
              <p className="text-amber-800 leading-relaxed mb-4 font-bold">
                Dynamic job posting is currently disabled. To enable the creation, editing, archiving, and deletion of jobs, this platform must be connected to a database (e.g., PostgreSQL via Supabase, Firebase Firestore, or MongoDB). 
              </p>
              <ul className="list-disc pl-5 text-amber-800/80 font-bold space-y-1 text-xs">
                <li>Create structured job schema (Title, Location, Type, Closing Date, Description, Requirements, Status: Open/Closed).</li>
                <li>Implement REST/GraphQL API for CRUD operations.</li>
                <li>Migrate static jobs from `src/data/jobs.js` to the live database.</li>
              </ul>
            </div>

            <div className="space-y-3 opacity-60 pointer-events-none">
              <div className="rounded-2xl border border-funeka-divider bg-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                 <div>
                   <div className="font-black text-funeka-anchor text-base mb-1">Senior Underground Fitter</div>
                   <div className="text-sm text-funeka-text/60">Rustenburg, North West • Permanent</div>
                 </div>
                 <div className="flex gap-4">
                   <div className="rounded-xl border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] bg-green-100 text-green-700 border-green-200">Open</div>
                   <div className="text-[11px] font-black uppercase tracking-widest text-funeka-action">Edit</div>
                 </div>
              </div>
              <div className="rounded-2xl border border-funeka-divider bg-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                 <div>
                   <div className="font-black text-funeka-anchor text-base mb-1">Drill Rig Operator</div>
                   <div className="text-sm text-funeka-text/60">Steelpoort, Limpopo • Temporary</div>
                 </div>
                 <div className="flex gap-4">
                   <div className="rounded-xl border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] bg-red-100 text-red-700 border-red-200">Closed</div>
                   <div className="text-[11px] font-black uppercase tracking-widest text-funeka-action">Edit</div>
                 </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-funeka-divider bg-white p-5 shadow-sm">
      <div className="text-[10px] font-black text-funeka-anchor/40 uppercase tracking-[0.2em] mb-2">{label}</div>
      <div className="text-3xl font-black text-funeka-anchor">{value}</div>
    </div>
  );
}
