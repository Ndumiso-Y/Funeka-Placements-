export default function Button({ as: Comp = "button", className = "", variant = "primary", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-black transition-all duration-300 active:scale-95 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-funeka-anchor/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider";
  const variants = {
    primary: "bg-funeka-action text-white hover:bg-funeka-dark shadow-funeka-action/20 hover:shadow-funeka-action/40",
    secondary: "bg-funeka-brand text-funeka-dark hover:bg-white border border-funeka-anchor/20",
    dark: "bg-funeka-dark text-white hover:bg-funeka-action",
    ghost: "bg-white text-funeka-anchor border-2 border-funeka-divider hover:border-funeka-action hover:text-funeka-action",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-funeka-dark",
  };
  return <Comp className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props} />;
}
