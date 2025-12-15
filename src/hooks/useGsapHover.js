import { useEffect, useRef } from "react";
import { gsap } from "../animations/gsapConfig";

export function useGsapHover(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.willChange = "transform";

    const hoverIn = () => {
      gsap.to(el, {
        scale: options.scale ?? 1.05,
        y: options.y ?? -5,
        duration: options.duration ?? 0.25,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const hoverOut = () => {
      gsap.to(el, {
        scale: 1,
        y: 0,
        duration: 0.25,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    el.addEventListener("mouseenter", hoverIn);
    el.addEventListener("mouseleave", hoverOut);

    return () => {
      el.style.willChange = "auto";
      el.removeEventListener("mouseenter", hoverIn);
      el.removeEventListener("mouseleave", hoverOut);
    };
  }, []);

  return ref;
}
