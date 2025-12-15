// src/sections/caseStudies/CaseStudies.jsx

import { Container } from "../../components/layout/Container";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { useGsapStaggerReveal } from "../../hooks/useGsapStaggerReveal";
import ecommerceImg from '../../assets/E-commerce.webp'
import bankImg from '../../assets/BankApp.webp'
import aiImg from '../../assets/AI_system.webp'


export function CaseStudies() {
  const revealRef = useGsapStaggerReveal(".case-anim");

   const cases = [
    {
      title: "E-Commerce Redesign",
      desc: "A complete transformation that increased conversion rates by 42% using UX optimization and high-performance architecture.",
      image: ecommerceImg,
      link: "#",
    },
    {
      title: "Mobile Banking App",
      desc: "A modernized banking experience built with secure flows, clarity-focused UI, and intuitive financial tools.",
      image:bankImg,
      link: "#",
    },
    {
      title: "AI Customer Support System",
      desc: "End-to-end AI integration including NLP chatbots, automated workflows, and a real-time analytics dashboard.",
      image: aiImg,
      link: "#",
    },
  ];

  return (
    <section
      id="cases"
      ref={revealRef}
      className="py-28 relative border-t border-[var(--border)] overflow-hidden"
    >
      <div
        className="
          absolute top-[-160px] right-[5%]
          w-[320px] h-[320px]
          md:w-[600px] md:h-[600px]
          bg-gradient-to-br from-[var(--brand-start)] to-[var(--brand-end)]
          opacity-10 blur-[90px] md:blur-[110px]
          rounded-full -z-10
        "
      />

      <Container>
        <div className="case-anim">
          <SectionTitle
            eyebrow="Case Studies"
            title="Our Featured Work"
            subtitle="We partner with brands to build meaningful and scalable digital experiences."
          />
        </div>

        <div className="mt-20 space-y-24">
          {cases.map((item, index) => (
            <div
              key={index}
              className="case-anim grid md:grid-cols-2 gap-12 items-center"
            >
              <div className={`${index % 2 ? "md:order-2" : ""}`}>
                <div
                  className="
                    w-full h-[320px] md:h-[400px]
                    rounded-3xl overflow-hidden
                    shadow-[var(--shadow)]
                    border border-[var(--border)]
                    bg-[var(--surface)]
                    backdrop-blur-md md:backdrop-blur-xl
                    transition-all duration-300
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-60 transition" />

                </div>
              </div>

              <div className="space-y-5">
                <h3 className="text-3xl font-bold">{item.title}</h3>
                <p className="text-[var(--text-muted)] text-sm md:text-base max-w-md">
                  {item.desc}
                </p>
                <a href={item.link} className="font-semibold hover:text-[var(--brand-end)]">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
