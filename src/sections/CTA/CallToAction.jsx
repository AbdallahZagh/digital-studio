import { Container } from "../../components/layout/Container";
import { Button } from "../../components/ui/Button";
import { useGsapStaggerReveal } from "../../hooks/useGsapStaggerReveal";

export function CallToAction() {
  const revealRef = useGsapStaggerReveal(".cta-anim");

  return (
    <section
      id="contact"
      ref={revealRef}
      className="
        py-32
        border-t border-[var(--border)]
        relative overflow-hidden
      "
      aria-labelledby="cta-heading"
    >
      {/* 🔥 Responsive background glow (GPU-safe) */}
      <div
        className="
          absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[320px] h-[320px]
          md:w-[700px] md:h-[700px]
          bg-gradient-to-br
          from-[var(--brand-start)]
          to-[var(--brand-end)]
          opacity-20
          blur-[90px] md:blur-[120px]
          rounded-full
          -z-10
        "
      />

      <Container>
        {/* CTA Box */}
        <div
          className="
            cta-anim
            text-center
            rounded-3xl
            p-12 md:p-20
            bg-[var(--surface)]
            backdrop-blur-md md:backdrop-blur-xl
            border border-[var(--border)]
            shadow-[var(--shadow)]
            relative overflow-hidden
          "
        >
          {/* Subtle gradient overlay (cheap) */}
          <div
            className="
              absolute inset-0
              pointer-events-none
              opacity-20
              bg-gradient-to-br
              from-[var(--brand-start)]
              to-[var(--brand-end)]
            "
          />

          {/* Heading */}
          <h2
            id="cta-heading"
            className="
              cta-anim
              text-[clamp(2.5rem,6vw,3.75rem)]
              font-extrabold
              leading-tight
              text-[var(--text)]
            "
          >
            Ready to Build{" "}
            <span
              className="
                bg-gradient-to-r
                from-[var(--brand-start)]
                to-[var(--brand-end)]
                text-transparent
                bg-clip-text
              "
            >
              Something Great?
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              cta-anim
              mt-5
              text-[var(--text-muted)]
              max-w-xl
              mx-auto
              text-base md:text-lg
              leading-relaxed
            "
          >
            Let’s bring your ideas to life with beautiful design, smooth user
            experiences, and powerful development.
          </p>

          {/* Buttons */}
          <div
            className="
              cta-anim
              mt-10
              flex flex-col
              sm:flex-row
              justify-center
              gap-5
            "
          >
            <Button variant="primary" className="px-8 py-3 text-base">
              Start a Project
            </Button>

            <Button variant="outline" className="px-8 py-3 text-base">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
