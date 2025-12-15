import { useGsapHover } from "../../hooks/useGsapHover";

export function Card({ children, className = "", animated = true, ...props }) {
  const ref = animated ? useGsapHover({ scale: 1.03, y: -6 }) : null;

  return (
    <div
      ref={ref}
      {...props}
      className={`
        relative overflow-hidden rounded-2xl p-6
        bg-[var(--surface)]
        backdrop-blur-md md:backdrop-blur-xl
        border border-[var(--border)]
        shadow-[var(--shadow)]
        transition-all duration-300
        hover:border-transparent
        hover:shadow-[0_0_30px_var(--accent)]
        ${className}
      `}
    >
      {/* gradient border glow */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl">
        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-20 transition bg-gradient-to-br from-[var(--brand-start)] to-[var(--brand-end)]" />
      </div>

      {children}
    </div>
  );
}
