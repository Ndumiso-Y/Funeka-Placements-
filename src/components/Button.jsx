export default function Button({ as: Comp = "button", className = "", variant = "primary", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-black transition-all duration-300 active:scale-95 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-funeka-anchor/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider";
  const variants = {
    primary: "bg-funeka-anchor text-white hover:bg-funeka-text shadow-funeka-anchor/20 hover:shadow-funeka-anchor/30",
    secondary: "bg-funeka-brand text-funeka-anchor hover:bg-white border border-funeka-anchor/20",
    pop: "bg-funeka-pop text-white hover:bg-funeka-anchor shadow-funeka-pop/30 hover:shadow-funeka-anchor/30",
    ghost: "bg-white text-funeka-anchor border-2 border-funeka-divider hover:border-funeka-anchor hover:bg-funeka-bg",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-funeka-anchor",
  };
  return <Comp className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
