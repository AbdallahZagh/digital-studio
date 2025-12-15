// src/components/layout/Footer.jsx
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="py-12 mt-20 border-t border-[var(--border)] bg-[var(--surface)] backdrop-blur-md">
      <Container className="text-center text-sm text-[var(--text-muted)] space-y-3">
        <p className="font-semibold tracking-wide text-[var(--text)]">
          DIGITAL STUDIO
        </p>

        <p>© {new Date().getFullYear()} All rights reserved.</p>

        <p className="bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] text-transparent bg-clip-text font-semibold">
          Built with React, Tailwind, GSAP, Three.
        </p>
      </Container>
    </footer>
  );
}