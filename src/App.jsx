import React, { lazy, Suspense, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar.jsx";
import { Footer } from "./components/layout/Footer.jsx";
import { Hero } from "./sections/hero/Hero.jsx";
import { useJquerySmoothScroll } from "./hooks/useJquerySmoothScroll";
import { registerGsap } from "./animations/gsapConfig";

const Services = lazy(() =>
  import("./sections/services/Services.jsx").then(m => ({ default: m.Services }))
);
const CaseStudies = lazy(() =>
  import("./sections/caseStudies/CaseStudies.jsx").then(m => ({ default: m.CaseStudies }))
);
const About = lazy(() =>
  import("./sections/about/About.jsx").then(m => ({ default: m.About }))
);
const Testimonials = lazy(() =>
  import("./sections/testimonials/Testimonials.jsx").then(m => ({ default: m.Testimonials }))
);
const CallToAction = lazy(() =>
  import("./sections/CTA/CallToAction.jsx").then(m => ({ default: m.CallToAction }))
);

export default function App() {
  useJquerySmoothScroll();

  useEffect(() => {
    registerGsap();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--background1)] via-[var(--background2)] to-[var(--background3)] text-[var(--text)] overflow-hidden">
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />

        <Suspense fallback={null}>
          <Services />
          <CaseStudies />
          <About />
          <Testimonials />
          <CallToAction />
        </Suspense>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
