import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../animations/gsapConfig";

export function useGsapStaggerReveal(selector = ".anim", options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll(selector);
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: options.y ?? 40 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.8,
          ease: "power3.out",
          stagger: options.stagger ?? 0.15,
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}
