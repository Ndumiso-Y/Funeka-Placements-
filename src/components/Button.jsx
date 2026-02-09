export default function Button({ as: Comp = "button", className = "", variant = "primary", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition shadow-soft focus:outline-none focus:ring-2 focus:ring-funeka-blueHover focus:ring-offset-2";
  const variants = {
    primary: "bg-funeka-softBlue text-funeka-charcoal hover:bg-funeka-blueHover",
    ghost: "bg-white text-funeka-charcoal border border-funeka-dividerGrey hover:bg-funeka-lightBlueTint",
    dark: "bg-funeka-charcoal text-white hover:bg-funeka-darkGreyHover",
  };
  return <Comp className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
