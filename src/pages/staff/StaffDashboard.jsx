import { useMemo, useState } from "react";
import Container from "../../components/Container.jsx";
import Button from "../../components/Button.jsx";
import Modal from "../../components/Modal.jsx";
import { logout, getSession } from "../../utils/auth.js";
import { NavLink, useNavigate } from "react-router-dom";
import { Lock, FileText, UploadCloud, Activity, LayoutDashboard, Receipt, Users2, ClipboardCheck, Timer, BarChart3 } from "lucide-react";

const ACTIVE = [
  { key: "overview", label: "Dashboard Overview", icon: LayoutDashboard, desc: "Quick stats and shortcuts for staff.", type: "active" },
  { key: "invoices", label: "Invoices (create/view)", icon: Receipt, desc: "Create basic invoices and view previous entries.", type: "active" },
  { key: "docs", label: "Documents Upload", icon: UploadCloud, desc: "Upload documents (stored locally in this starter build).", type: "active" },
  { key: "log", label: "Basic Activity Log", icon: Activity, desc: "Track recent actions captured in-browser.", type: "active" },
];

const LOCKED = [
  { key: "pipeline", label: "Candidate Pipeline", icon: Users2, desc: "Track candidates through stages and client feedback.", type: "locked" },
  { key: "compliance", label: "Compliance Tracking (AFIS/MIE)", icon: ClipboardCheck, desc: "Centralise compliance checks and evidence.", type: "locked" },
  { key: "timesheets", label: "Timesheets", icon: Timer, desc: "Staff timesheets and approvals.", type: "locked" },
  { key: "reports", label: "Reports", icon: BarChart3, desc: "Operational and client reports.", type: "locked" },
];

const STORAGE_INVOICES = "funeka_staff_invoices_v1";
const STORAGE_LOG = "funeka_staff_log_v1";
const STORAGE_DOCS = "funeka_staff_docs_v1";

function readJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default function StaffDashboard() {
  const navigate = useNavigate();
  const session = getSession();

  const [tab, setTab] = useState("overview");
  const [modal, setModal] = useState(null);

  const cards = useMemo(() => [...ACTIVE, ...LOCKED], []);
  const invoices = readJSON(STORAGE_INVOICES, []);
  const docs = readJSON(STORAGE_DOCS, []);
  const log = readJSON(STORAGE_LOG, []);

  function pushLog(action) {
    const entry = { at: Date.now(), action, by: session?.email || "staff" };
    writeJSON(STORAGE_LOG, [entry, ...log].slice(0, 25));
  }

  function createInvoice() {
    const now = new Date();
    const inv = {
      id: `INV-${now.getFullYear()}-${String(invoices.length + 1).padStart(4, "0")}`,
      client: "Example Client",
      amount: 2500,
      status: "Draft",
      date: now.toISOString().slice(0, 10),
    };
    writeJSON(STORAGE_INVOICES, [inv, ...invoices]);
    pushLog(`Created invoice ${inv.id}`);
    setTab("invoices");
  }

  function addDoc(name) {
    const item = { id: crypto.randomUUID?.() || String(Date.now()), name, at: Date.now() };
    writeJSON(STORAGE_DOCS, [item, ...docs]);
    pushLog(`Uploaded document: ${name}`);
    setTab("docs");
  }

  function onCardClick(card) {
    if (card.type === "locked") {
      setModal({
        title: "Feature preview – Coming soon / Upgrade available",
        body: (
          <div className="text-sm text-funeka-text leading-relaxed">
            <p>
              <span className="font-semibold text-funeka-anchor">{card.label}</span> is a locked preview feature in Phase 1.
            </p>
            <p className="mt-3">
              This dashboard shows the full long-term system. Locked items are visual previews only — they will be activated in future phases.
            </p>
          </div>
        ),
      });
      return;
    }
    setTab(card.key);
  }

  function signOut() {
    logout();
    navigate("/staff/login", { replace: true });
  }

  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-funeka-anchor">Staff Dashboard</h1>
            <p className="mt-1 text-sm text-funeka-text">
              Logged in as <span className="font-medium text-funeka-anchor">{session?.email}</span> ({session?.role})
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button onClick={createInvoice}>Quick: Create invoice</Button>
            <Button as={NavLink} to="/" variant="ghost">Back to website</Button>
            <Button onClick={signOut} variant="dark">Logout</Button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Sidebar cards */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-funeka-divider bg-white p-4 shadow-soft">
              <div className="text-sm font-semibold text-funeka-anchor">System modules</div>
              <div className="mt-3 grid gap-2">
                {cards.map((c) => {
                  const Icon = c.icon;
                  const active = tab === c.key;
                  const locked = c.type === "locked";
                  return (
                    <button
                      key={c.key}
                      onClick={() => onCardClick(c)}
                      className={[
                        "w-full rounded-xl border px-4 py-3 text-left transition",
                        active ? "border-funeka-blueHover bg-funeka-bg" : "border-funeka-divider hover:bg-funeka-bg",
                        locked ? "opacity-60 grayscale" : "",
                      ].join(" ")}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-lg bg-funeka-brand/20 p-2 text-funeka-anchor">
                          <Icon size={18} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <div className="text-sm font-medium text-funeka-anchor">{c.label}</div>
                            {locked ? (
                              <span className="inline-flex items-center gap-1 text-xs text-funeka-text">
                                <Lock size={14} /> Locked
                              </span>
                            ) : null}
                          </div>
                          <div className="mt-1 text-xs text-funeka-text leading-relaxed">{c.desc}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-funeka-divider bg-funeka-bg p-5">
              <div className="text-sm font-semibold text-funeka-anchor">Phase 1 notes</div>
              <p className="mt-2 text-sm text-funeka-text leading-relaxed">
                Active modules store data in your browser (localStorage). Locked modules open a preview modal.
              </p>
            </div>
          </div>

          {/* Main area */}
          <div className="lg:col-span-2">
            {tab === "overview" ? (
              <div className="rounded-2xl border border-funeka-divider bg-white p-6 shadow-soft">
                <div className="text-sm font-semibold text-funeka-anchor">Overview</div>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <Stat label="Invoices" value={String(invoices.length)} />
                  <Stat label="Documents" value={String(docs.length)} />
                  <Stat label="Activity log" value={String(log.length)} />
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-funeka-divider p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-funeka-anchor">
                      <FileText size={16} /> Shortcuts
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button onClick={() => setTab("invoices")} variant="ghost">Invoices</Button>
                      <Button onClick={() => setTab("docs")} variant="ghost">Documents</Button>
                      <Button onClick={() => setTab("log")} variant="ghost">Activity Log</Button>
                    </div>
                  </div>

                  <div className="rounded-xl border border-funeka-divider p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-funeka-anchor">
                      <Activity size={16} /> Recent activity
                    </div>
                    <div className="mt-3 text-sm text-funeka-text">
                      {log.length === 0 ? (
                        <div>No activity yet. Create an invoice or upload a document to generate activity.</div>
                      ) : (
                        <ul className="space-y-2">
                          {log.slice(0, 5).map((l) => (
                            <li key={l.at}>
                              • {l.action} <span className="text-xs">({new Date(l.at).toLocaleString()})</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {tab === "invoices" ? (
              <div className="rounded-2xl border border-funeka-divider bg-white p-6 shadow-soft">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-semibold text-funeka-anchor">Invoices</div>
                  <Button onClick={createInvoice}>Create invoice</Button>
                </div>

                <p className="mt-2 text-sm text-funeka-text leading-relaxed">
                  This starter build stores invoices in your browser. Replace with a backend in later phases.
                </p>

                <div className="mt-5 space-y-3">
                  {invoices.length === 0 ? (
                    <div className="rounded-xl border border-funeka-divider bg-funeka-bg p-5 text-sm text-funeka-text">
                      No invoices yet. Use “Create invoice” to add your first one.
                    </div>
                  ) : (
                    invoices.map((inv) => (
                      <div key={inv.id} className="rounded-xl border border-funeka-divider p-5">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <div className="text-sm font-semibold text-funeka-anchor">{inv.id}</div>
                            <div className="mt-1 text-sm text-funeka-text">{inv.client} • {inv.date}</div>
                          </div>
                          <div className="text-sm text-funeka-anchor">
                            R {Number(inv.amount).toFixed(2)} •{" "}
                            <span className="rounded-full border border-funeka-divider bg-funeka-bg px-3 py-1 text-xs text-funeka-text">
                              {inv.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ) : null}

            {tab === "docs" ? (
              <div className="rounded-2xl border border-funeka-divider bg-white p-6 shadow-soft">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-semibold text-funeka-anchor">Documents</div>
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-funeka-brand/20 px-4 py-2 text-sm font-medium text-funeka-anchor hover:bg-funeka-blueHover transition shadow-soft">
                    <UploadCloud size={16} />
                    Upload
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        addDoc(file.name);
                        e.target.value = "";
                      }}
                    />
                  </label>
                </div>

                <p className="mt-2 text-sm text-funeka-text leading-relaxed">
                  Document names are stored locally for this starter build.
                </p>

                <div className="mt-5 space-y-3">
                  {docs.length === 0 ? (
                    <div className="rounded-xl border border-funeka-divider bg-funeka-bg p-5 text-sm text-funeka-text">
                      No documents yet. Use “Upload” to add one.
                    </div>
                  ) : (
                    docs.map((d) => (
                      <div key={d.id} className="rounded-xl border border-funeka-divider p-5">
                        <div className="text-sm font-semibold text-funeka-anchor">{d.name}</div>
                        <div className="mt-1 text-sm text-funeka-text">
                          Uploaded: {new Date(d.at).toLocaleString()}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ) : null}

            {tab === "log" ? (
              <div className="rounded-2xl border border-funeka-divider bg-white p-6 shadow-soft">
                <div className="text-sm font-semibold text-funeka-anchor">Activity Log</div>
                <p className="mt-2 text-sm text-funeka-text leading-relaxed">
                  Recent actions (stored locally).
                </p>

                <div className="mt-5 space-y-3">
                  {log.length === 0 ? (
                    <div className="rounded-xl border border-funeka-divider bg-funeka-bg p-5 text-sm text-funeka-text">
                      No activity yet.
                    </div>
                  ) : (
                    log.map((l) => (
                      <div key={l.at + l.action} className="rounded-xl border border-funeka-divider p-5">
                        <div className="text-sm text-funeka-anchor">{l.action}</div>
                        <div className="mt-1 text-xs text-funeka-text">
                          {new Date(l.at).toLocaleString()} • {l.by}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Container>

      {modal ? (
        <Modal title={modal.title} onClose={() => setModal(null)}>
          {modal.body}
          <div className="mt-5 flex gap-3">
            <Button onClick={() => setModal(null)}>Close</Button>
            <Button
              as="a"
              variant="ghost"
              href="mailto:recruitment@funekaplacements.co.za?subject=Staff%20Portal%20Upgrade%20Request%20-%20Funeka%20Placements"
            >
              Request upgrade
            </Button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-funeka-divider bg-funeka-bg p-5">
      <div className="text-xs text-funeka-text">{label}</div>
      <div className="mt-2 text-2xl font-semibold text-funeka-anchor">{value}</div>
    </div>
  );
}
