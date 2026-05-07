export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10 lg:mb-16">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-1 w-12 bg-funeka-action rounded-full shadow-lg shadow-funeka-action/20"></div>
        <div className="h-1 w-4 bg-funeka-brand rounded-full"></div>
      </div>
      <h2 className="text-3xl sm:text-5xl font-black text-funeka-anchor uppercase tracking-tighter leading-none">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-6 text-lg sm:text-xl text-funeka-text leading-relaxed max-w-3xl font-medium">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
