// src/sections/testimonials/Testimonials.jsx

import { Container } from "../../components/layout/Container";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { Card } from "../../components/ui/Card";
import { useGsapStaggerReveal } from "../../hooks/useGsapStaggerReveal";

export function Testimonials() {
  const revealRef = useGsapStaggerReveal(".test-anim");

  const testimonials = [
    {
      quote:
        "Their design and development transformed our digital presence. The new interface boosted engagement instantly.",
      name: "Emily Carter",
      role: "Product Manager, NovaTech",
      image: "/avatar1.jpg",
    },
    {
      quote:
        "A world-class team delivering world-class results. Our conversion rate increased dramatically after launch.",
      name: "Daniel Robinson",
      role: "Founder, ScaleFlow",
      image: "/avatar2.jpg",
    },
    {
      quote:
        "They bring both creativity and technical expertise. Working with them felt like an extension of our internal team.",
      name: "Sarah Mitchell",
      role: "Head of Design, Orios",
      image: "/avatar3.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      ref={revealRef}
      className="py-28 border-t border-[var(--border)] relative"
    >
      {/* Background Gradient Blob */}
      <div
        className="
          absolute top-[10%] left-[60%] w-[500px] h-[500px]
          bg-gradient-to-br from-[var(--brand-start)] to-[var(--brand-end)]
          opacity-10 blur-[100px] rounded-full -z-10
        "
      ></div>

      <Container>
        <div className="test-anim">
          <SectionTitle
            eyebrow="Testimonials"
            title="What Our Clients Say"
            subtitle="Trusted by founders, startups, and enterprise teams who value design, speed, and innovation."
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="
                test-anim p-8 relative 
                shadow-[var(--shadow)] transition-all 
              "
            >
              {/* Quote Icon */}
              <div className="text-4xl mb-4 text-[var(--brand-end)] opacity-90">
                ❝
              </div>

              {/* Quote Text */}
              <p className="text-[var(--text)] text-sm md:text-base leading-relaxed mb-6">
                {t.quote}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
                  <img
  src={t.image}
  loading="lazy"
  decoding="async"
  alt={t.name}
/>

                </div>

                <div>
                  <p className="font-semibold text-[var(--text)]">{t.name}</p>
                  <p className="text-xs text-[var(--text-muted)]">{t.role}</p>
                </div>
              </div>

              {/* Glow gradient on hover */}
              <div
                className="
                  absolute inset-0 pointer-events-none rounded-2xl opacity-0 
                  group-hover:opacity-20 transition 
                  bg-gradient-to-br from-[var(--brand-start)] to-[var(--brand-end)]
                "
              ></div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
