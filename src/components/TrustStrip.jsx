import { ShieldCheck, FileCheck2, Users, ClipboardList } from "lucide-react";
import Container from "./Container.jsx";

const items = [
  {
    icon: ShieldCheck,
    title: "POPIA-aware handling",
    text: "Personal information is processed responsibly and only for recruitment purposes.",
  },
  {
    icon: FileCheck2,
    title: "Documented screening",
    text: "Role alignment, skills fit and candidate documentation are handled with care.",
  },
  {
    icon: Users,
    title: "Fair & transparent process",
    text: "Clear communication with clients and candidates throughout the journey.",
  },
  {
    icon: ClipboardList,
    title: "Structured recruitment steps",
    text: "A defined 12-step recruitment process for consistency and quality.",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-funeka-dividerGrey bg-funeka-lightBlueTint">
      <Container className="py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="rounded-xl bg-white border border-funeka-dividerGrey p-5 shadow-soft">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-funeka-softBlue p-2 text-funeka-charcoal">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-funeka-charcoal">{it.title}</div>
                    <div className="mt-1 text-sm text-funeka-midGrey leading-relaxed">{it.text}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
