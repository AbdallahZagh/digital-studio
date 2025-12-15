import { useGsapHover } from "../../hooks/useGsapHover";

export function Button({
  children,
  className = "",
  variant = "primary",
  animated = true,
  ...props
}) {
  const ref = animated ? useGsapHover({ scale: 1.06, y: -2 }) : null;

  const base =
    "relative inline-flex justify-center items-center font-semibold text-sm px-6 py-3 rounded-xl transition-all select-none";

  const styles = {
    primary: `
      text-white
      bg-[var(--brand-start)]
      hover:brightness-110
      shadow-[var(--shadow)]
    `,
    outline: `
      text-[var(--text)]
      border border-[var(--border)]
      hover:border-transparent
      hover:bg-gradient-to-r
      from-[var(--brand-start)]/35
      to-[var(--brand-end)]/35
    `,
    ghost: `
      text-[var(--text-muted)]
      hover:text-[var(--text)]
    `,
  };

  return (
    <button
      ref={ref}
      {...props}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
