import { Container } from "../../components/layout/Container";
import { Button } from "../../components/ui/Button";
import { useGsapStaggerReveal } from "../../hooks/useGsapStaggerReveal";
import { useGsapFadeIn } from "../../hooks/useGsapFadeIn";
import { HeroWaterSphere } from "./HeroWaterSphere";
import heroImg from '../../assets/Hero.webp'

export function Hero() {
  const revealRef = useGsapStaggerReveal(".hero-anim");
  useGsapFadeIn(".hero-img", { y: 40, duration: 1.4 });

  return (
    <section
      id="hero"
      ref={revealRef}
      role="banner"
      aria-labelledby="hero-heading"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* THREE.JS BACKGROUND */}
      <HeroWaterSphere />

      {/* BLUR GLOW ABOVE CANVAS */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-br
          from-[var(--brand-start)]/25
          to-[var(--brand-end)]/25
          opacity-40
          backdrop-blur-2xl
          mix-blend-screen
          z-[3]
        "
      />

      <Container className="relative z-10 grid lg:grid-cols-2 gap-16 place-items-center">
        {/* TEXT */}
        <div className="space-y-6">
          <p className="hero-anim text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] bg-clip-text text-transparent">
            Creative Digital Agency
          </p>

          <h1
            id="hero-heading"
            className="
              hero-anim
              text-[clamp(2.75rem,6vw,4.5rem)]
              font-extrabold
              leading-tight
              text-[var(--text)]
            "
          >
            We Build
            <span className="block bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] bg-clip-text text-transparent">
              Stunning Experiences
            </span>
          </h1>

          <p className="hero-anim text-[var(--text-muted)] max-w-md text-base md:text-lg leading-relaxed">
            We help businesses grow through modern design, innovative strategies,
            and powerful digital solutions built to make an impact.
          </p>

          <div className="hero-anim flex gap-4 pt-4">
            <Button variant="primary" animated>
              Start a Project
            </Button>
            <Button variant="outline" animated>
              View Case Studies
            </Button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="hero-img relative">
          <div
            className="
              w-[320px] h-[420px]
              md:w-[500px] md:h-[500px]
              mx-auto rounded-3xl overflow-hidden
              shadow-[var(--shadow)]
              bg-[var(--surface)]
              backdrop-blur-md md:backdrop-blur-xl
              border border-[var(--border)]
              animate-floating
            "
          >
            <img
              src={heroImg}
              alt="Creative digital design showcase"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
