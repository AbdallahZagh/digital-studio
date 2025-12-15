export function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="space-y-3 max-w-2xl">
      {eyebrow && (
        <p className="text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] text-transparent bg-clip-text">
          {eyebrow}
        </p>
      )}

      <h2
        className="
          text-[clamp(2rem,4vw,3rem)]
          font-extrabold
          text-[var(--text)]
          leading-tight
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p className="text-[var(--text-muted)] text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
