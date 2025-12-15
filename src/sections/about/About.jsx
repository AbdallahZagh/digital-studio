// src/sections/about/About.jsx

import { Container } from "../../components/layout/Container";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { useGsapStaggerReveal } from "../../hooks/useGsapStaggerReveal";
import { useGsapFadeIn } from "../../hooks/useGsapFadeIn";
import aboutImg from '../../assets/About.png'

export function About() {
  const revealRef = useGsapStaggerReveal(".about-anim");
  useGsapFadeIn(".about-img", { y: 30, duration: 1.2 });

  return (
    <section
      id="about"
      ref={revealRef}
      className="py-28 border-t border-[var(--border)] relative overflow-hidden"
    >
      {/* Background gradient blob */}
      <div
        className="
          absolute bottom-[-140px] left-[15%]
          w-[300px] h-[300px]
          md:w-[550px] md:h-[550px]
          bg-gradient-to-br from-[var(--brand-start)] to-[var(--brand-end)]
          opacity-10 blur-[90px] md:blur-[110px]
          rounded-full -z-10
        "
      />

      <Container className="grid md:grid-cols-2 gap-16 items-center">
        {/* IMAGE */}
        <div
          className="
            about-img relative w-full h-[340px] md:h-[420px]
            bg-[var(--surface)]
            backdrop-blur-md md:backdrop-blur-xl
            rounded-3xl
            border border-[var(--border)]
            shadow-[var(--shadow)]
            overflow-hidden
          "
        >
          <img
            src={aboutImg}
            alt="About our digital studio"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-60 transition" />
        </div>

        {/* TEXT */}
        <div className="space-y-6 about-anim">
          <SectionTitle
            eyebrow="Who We Are"
            title="We Design. We Build. We Transform."
            subtitle="We are a multidisciplinary digital agency helping brands create meaningful connections through high-quality design and technology."
          />

          <p className="text-[var(--text-muted)] leading-relaxed text-sm md:text-base">
            With expertise across UI/UX, software engineering, brand strategy,
            and AI-driven solutions, we craft experiences that empower clients
            to grow, scale, and innovate in an ever-evolving digital world.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              ["120+", "Projects"],
              ["40+", "Clients"],
              ["7+ yrs", "Experience"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="text-3xl font-bold text-[var(--text)]">{v}</p>
                <p className="text-xs text-[var(--text-muted)]">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

