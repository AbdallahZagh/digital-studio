import { useState, useEffect, useRef } from "react";
import { Container } from "./Container";
import { gsap } from "../../animations/gsapConfig";
import AnimatedIcon from "./ThemeToggleIcon";

export function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [mobileOpen, setMobileOpen] = useState(false);

  const headerRef = useRef(null);
  const top = useRef(null);
  const mid = useRef(null);
  const bot = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);

    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35 }
      );
    }
  }, [theme]);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current
      .to(top.current, { y: 8, rotate: 45, duration: 0.25 })
      .to(mid.current, { opacity: 0, duration: 0.2 }, "<")
      .to(bot.current, { y: -8, rotate: -45, duration: 0.25 }, "<");

    return () => tl.current?.kill();
  }, []);

  useEffect(() => {
    mobileOpen ? tl.current.play() : tl.current.reverse();
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-[var(--surface)] backdrop-blur-lg border-b border-[var(--border)]"
    >
      <Container className="flex justify-between items-center py-4">
        <p className="font-bold text-lg bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] text-transparent bg-clip-text">
          DIGITAL STUDIO
        </p>

        <nav className="hidden md:flex gap-8 text-sm items-center font-medium">
          {["services", "cases", "about", "testimonials", "contact"].map(id => (
            <a key={id} href={`#${id}`} className="relative group">
              {id.charAt(0).toUpperCase() + id.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
        <AnimatedIcon theme={theme} setTheme={setTheme} />
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span ref={top} className="w-6 h-[2px] bg-[var(--text)] block" />
          <span ref={mid} className="w-6 h-[2px] bg-[var(--text)] block" />
          <span ref={bot} className="w-6 h-[2px] bg-[var(--text)] block" />
        </button>
        </div>
      </Container>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-[var(--surface)] border-t border-[var(--border)] px-6 py-6 space-y-4">
          {["services", "cases", "about", "testimonials", "contact"].map(id => (
            <a key={id} href={`#${id}`} className="block text-lg">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          {/* <AnimatedIcon theme={theme} setTheme={setTheme} /> */}
        </div>
      </div>
    </header>
  );
}
