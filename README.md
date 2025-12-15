# Digital Studio — Creative Agency Platform

A production-ready **creative agency web platform** built with **React**, **Tailwind CSS**, **GSAP**, and **Three.js**, engineered for **performance, accessibility, SEO, and scalable frontend architecture**.

This project demonstrates modern frontend best practices, animation discipline, and system-level thinking suitable for real-world commercial deployment.

---

## Table of Contents

- Overview
- Goals & Scope
- Tech Stack
- Architecture & Design Decisions
- Performance Strategy
- Animation System
- 3D Rendering Strategy
- SEO & Accessibility
- Image & Asset Strategy
- Environment Setup
- Scripts
- Build & Deployment
- Code Quality & Standards
- Known Tradeoffs
- Future Roadmap
- License

---

## Overview

**Digital Studio** is a single-page marketing platform designed for a creative digital agency.  
The focus is not only on aesthetics, but on **maintainability, performance, and real-world constraints** such as Lighthouse scoring, animation cost, and browser behavior.

The system is designed to scale in both:
- visual complexity (animations, 3D)
- content size (case studies, services, testimonials)

---

## Goals & Scope

### Primary Goals
- High Lighthouse scores (Performance, SEO, Accessibility)
- Smooth, non-blocking animations
- Clean component boundaries
- Minimal runtime overhead
- Production-grade code quality

### Non-Goals
- Server-side rendering (not required for this scope)
- CMS integration (future-ready, not implemented)
- Heavy state management (intentionally avoided)

---

## Tech Stack

### Core
- **React** — UI framework
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling

### Animation & Visuals
- **GSAP** — scroll, stagger, and interaction animations
- **GSAP ScrollTrigger** — viewport-based triggers
- **Three.js** — interactive hero 3D visual

### Tooling
- **ESLint** — linting & consistency
- **Lucide React** — icon system
- **WebP** — optimized image format

---

## Architecture & Design Decisions

### Component Structure
The project follows a **section-driven architecture**:

- `components/` → reusable UI and layout primitives
- `sections/` → page-level semantic blocks
- `hooks/` → animation and behavior logic
- `animations/` → GSAP configuration and plugin setup

This separation ensures:
- predictable rendering order
- isolated animation lifecycles
- low coupling between UI and behavior

---

## Performance Strategy

Performance was treated as a **first-class constraint**, not an afterthought.

Key decisions:
- No unnecessary `useMemo` / `React.memo`
- Animations run **outside React’s render cycle**
- GPU-friendly properties only (`transform`, `opacity`)
- WebGL canvas isolated from layout flow
- Controlled pixel ratio for Three.js
- Event listeners cleaned up deterministically

Target Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- SEO: 95+

---

## Animation System

Animations are implemented using **custom React hooks** to guarantee:

- predictable mount/unmount behavior
- zero memory leaks
- no re-initialization bugs
- separation of concerns

### Animation Types
- Fade-in on mount
- Stagger reveal on scroll
- Hover micro-interactions
- Theme toggle transitions
- Intro animations for hero content

All scroll animations use **ScrollTrigger**, registered once globally.

---

## 3D Rendering Strategy

The hero section uses **Three.js** with the following constraints:

- Canvas is `pointer-events: none`
- Geometry complexity capped
- Controlled `devicePixelRatio`
- Single render loop
- No React-Three-Fiber (intentional choice)

This ensures:
- smooth interaction
- no layout thrashing
- minimal main-thread blocking

---

## SEO & Accessibility

### SEO
- Semantic HTML5 structure
- Single `<h1>` per page
- Logical heading hierarchy
- Crawlable anchor navigation
- Content-first markup

### Accessibility
- Keyboard-navigable UI
- Sufficient color contrast
- Motion-safe defaults
- ARIA-ready structure
- Focus-safe interactive elements

---

## Image & Asset Strategy

### Image Types
- **Hero**: abstract / conceptual visuals
- **Case Studies**: real UI screenshots
- **About**: illustration with transparent background

### Formats
- WebP (primary)
- PNG (fallback only if needed)

### Rationale
- Reduced payload size
- Faster LCP
- Better visual consistency
- CDN-ready asset structure

---

## Environment Setup

### Requirements
- Node.js ≥ 18
- npm ≥ 9

### Installation
```bash
npm install
