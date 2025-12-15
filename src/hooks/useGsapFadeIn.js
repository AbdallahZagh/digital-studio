import { useEffect, useRef } from "react";
import { gsap } from "../animations/gsapConfig";

export function useGsapFadeIn(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ctx;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        ctx = gsap.context(() => {
          gsap.from(el, {
            opacity: 0,
            y: options.y ?? 40,
            duration: options.duration ?? 1,
            ease: "power3.out",
            delay: options.delay ?? 0,
          });
        }, el);

        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      ctx?.revert();
    };
  }, []);

  return ref;
}
