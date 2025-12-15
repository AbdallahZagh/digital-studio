// src/sections/services/Services.jsx

import { Container } from "../../components/layout/Container";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { Card } from "../../components/ui/Card";
import { useGsapStaggerReveal } from "../../hooks/useGsapStaggerReveal";

export function Services() {
  // GSAP stagger on .svc-anim
  const revealRef = useGsapStaggerReveal(".svc-anim");

  const services = [
    {
      title: "UI/UX Design",
      desc: "Modern, intuitive, and visually striking interfaces designed with user psychology and product strategy in mind.",
      icon: "🎨",
    },
    {
      title: "Full-Stack Development",
      desc: "High-performance web applications built with scalable architecture and next-gen frameworks.",
      icon: "⚙️",
    },
    {
      title: "Brand Strategy",
      desc: "Distinctive brand identities and visual systems that connect emotionally with your audience.",
      icon: "🚀",
    },
    {
      title: "Digital Marketing",
      desc: "Data-driven campaigns that drive conversions and elevate brand awareness.",
      icon: "📈",
    },
    {
      title: "Motion Graphics",
      desc: "Animations and micro-interactions that bring your digital experiences to life.",
      icon: "🎞️",
    },
    {
      title: "AI Integrations",
      desc: "Enhance your product with AI automations, NLP workflows, chatbots, and intelligent features.",
      icon: "🤖",
    },
  ];

  return (
    <section
      id="services"
      ref={revealRef}
      className="py-28 border-t border-[var(--border)] relative"
    >
      {/* Background gradient accent blob */}
      <div className="absolute top-[-100px] left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-[var(--brand-start)] to-[var(--brand-end)] opacity-10 blur-[100px] rounded-full -z-10"></div>

      <Container>
        <div className="svc-anim">
          <SectionTitle
            eyebrow="Our Services"
            title="What We Offer"
            subtitle="A full suite of creative and technical services built for modern brands and fast-growing startups."
          />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
  {services.map((item, i) => (
    <Card
      key={i}
      className="svc-anim p-7"
      animated={true}   // hover animation
    >
      <div className="text-4xl mb-5">{item.icon}</div>

      <h3 className="text-xl font-bold text-[var(--text)] mb-3">
        {item.title}
      </h3>

      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
        {item.desc}
      </p>
    </Card>
  ))}
</div>

      </Container>
    </section>
  );
}
