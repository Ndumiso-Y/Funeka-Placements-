export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl sm:text-3xl font-semibold text-funeka-charcoal">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-funeka-midGrey leading-relaxed">{subtitle}</p>
      ) : null}
      <div className="mt-4 h-px w-full bg-funeka-dividerGrey" />
    </div>
  );
}
