// src/components/layout/ThemeToggleIcon.jsx
import { useEffect, useRef } from "react";
import { gsap } from "../../animations/gsapConfig";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggleIcon({ theme, setTheme }) {
  const iconRef = useRef(null);

  // GSAP rotation animation on theme switch
 useEffect(() => {
  if (!iconRef.current) return;

  const tween = gsap.fromTo(
    iconRef.current,
    { rotate: theme === "light" ? -180 : 180 },
    { rotate: 0, duration: 0.6, ease: "power3.out" }
  );

  return () => tween.kill();
}, [theme]);


  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-9 flex items-center justify-center rounded-full 
      bg-[var(--surface)] shadow-[var(--shadow)]
      border border-[var(--border)] hover:brightness-110 transition"
    >
      {/* Sun / Moon Icon */}
      <div ref={iconRef}>
        {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400"/>
        ) : (
        <Moon className="w-5 h-5 text-[var(--text)]"/>
        )}
      </div>
    </button>
  );
}
