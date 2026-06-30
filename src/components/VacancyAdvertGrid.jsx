import { NavLink } from "react-router-dom";
import { vacancyAdverts } from "../data/vacancyAdverts.js";

const styles = {
  light: {
    shell: "bg-white border-funeka-divider shadow-sm hover:border-funeka-action/40 hover:shadow-xl",
    imageWrap: "bg-funeka-bg/50 border-funeka-divider",
    title: "text-funeka-anchor",
    meta: "text-funeka-text/70",
    badge: "bg-funeka-action/10 text-funeka-action border-funeka-action/20",
    button: "bg-funeka-action text-white hover:bg-funeka-dark",
  },
  dark: {
    shell: "bg-white/5 border-white/10 hover:bg-white/10 hover:border-funeka-action",
    imageWrap: "bg-white/5 border-white/10",
    title: "text-white",
    meta: "text-white/65",
    badge: "bg-funeka-brand/15 text-funeka-brand border-funeka-brand/25",
    button: "bg-funeka-action text-white hover:bg-funeka-brand hover:text-funeka-anchor",
  },
};

export default function VacancyAdvertGrid({ limit, variant = "light" }) {
  const theme = styles[variant] || styles.light;
  const adverts = limit ? vacancyAdverts.slice(0, limit) : vacancyAdverts;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {adverts.map((advert) => (
        <article
          key={advert.image}
          className={`overflow-hidden rounded-[2rem] border-2 transition-all duration-300 ${theme.shell}`}
        >
          <div className={`m-4 overflow-hidden rounded-2xl border ${theme.imageWrap}`}>
            <img
              src={advert.image}
              alt={`${advert.title} vacancy advert flyer`}
              className="aspect-[4/5] h-full w-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="px-5 pb-5">
            <div className={`mb-4 inline-flex rounded-xl border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] ${theme.badge}`}>
              Extended to 6 July 2026
            </div>
            <h3 className={`text-xl font-black uppercase leading-tight tracking-tight ${theme.title}`}>
              {advert.title}
            </h3>
            <p className={`mt-3 text-sm font-semibold leading-relaxed ${theme.meta}`}>
              Applications extended to 6 July 2026.
            </p>
            <NavLink
              to="/apply"
              className={`mt-5 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-xs font-black uppercase tracking-wider transition-all ${theme.button}`}
            >
              Apply Now
            </NavLink>
          </div>
        </article>
      ))}
    </div>
  );
}
