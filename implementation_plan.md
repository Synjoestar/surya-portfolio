# Surya's High-End ML Portfolio - Implementation Plan

> Building a visually stunning ML portfolio that showcases technical expertise with modern web aesthetics.

## Project Overview

**Vision:** Create a portfolio website that combines high-end visual aesthetics (TikTok Tech Vibe) with solid technical proof as a Machine Learning Engineer.

**Target:** Top-tier tech company recruiters through three pillars:
1. Stunning visuals
2. Interactive project demos
3. Deep technical explanations

---

## User Review Required

> [!IMPORTANT]
> **Tech Stack Choice:** The PRD specifies Aceternity UI which is a custom UI library. I'll implement similar effects using Framer Motion directly as Aceternity components are typically copy-paste components, not an npm package.

> [!NOTE]
> **Live Model Demo:** The optional API integration for Diabetes Prediction can be added later. The initial focus will be on the visual showcase.

---

## Proposed Changes

### Core Setup

#### [NEW] Project Initialization
- Next.js 14+ with App Router
- TypeScript configuration
- Tailwind CSS with dark mode default
- Framer Motion for animations
- Custom fonts: Inter (text) & JetBrains Mono (code)

#### [NEW] Design System (`globals.css`)
```css
/* Color Tokens */
--background: #000000 (Deep Charcoal/Black)
--accent: #F59E0B (Solar Orange/Gold - Named "Surya")
--text: #FFFFFF
--muted: #71717A

/* Effects */
- Glassmorphism
- Neon Glow
- Subtle Motion
```

---

### Page Structure

#### [NEW] `/app/page.tsx` - Main Landing Page
All sections on single scrollable page:
1. **Hero Section** - Name + Typewriter titles + CTA
2. **Projects Section** - Bento Grid with 3 projects
3. **Experience Section** - Tracing Beam timeline

---

### Components Architecture

#### [NEW] `/components/hero/`
| Component | Description |
|-----------|-------------|
| `BackgroundBeams.tsx` | Animated gradient beams in background |
| `TypewriterEffect.tsx` | Rotating text: "ML Engineer", "CV Enthusiast", "Data Scientist" |
| `HeroSection.tsx` | Main hero wrapper with CTA |

#### [NEW] `/components/projects/`
| Component | Description |
|-----------|-------------|
| `BentoGrid.tsx` | Responsive grid layout for project cards |
| `ProjectCard.tsx` | Base card with glassmorphism effect |
| `PinContainer.tsx` | 3D hover effect for TrashLab card |
| `InfiniteMovingCards.tsx` | Carousel for book covers |
| `GlowingStars.tsx` | Star animation for Diabetes project |

#### [NEW] `/components/experience/`
| Component | Description |
|-----------|-------------|
| `TracingBeam.tsx` | Scroll-following light line |
| `TimelineItem.tsx` | Education/experience entry |

#### [NEW] `/components/ui/`
| Component | Description |
|-----------|-------------|
| `Button.tsx` | Primary action button with glow |
| `Badge.tsx` | Tech stack badges |
| `GlassCard.tsx` | Reusable glassmorphism card |

---

### Project Content

#### TrashLab (Computer Vision)
- **Headline:** Klasifikasi Sampah Organik & Non-Organik
- **Tech:** Python, CNN, Vercel
- **Link:** https://trashlab.vercel.app
- **Effect:** Pin Container (3D hover)

#### Book Recommendation System
- **Headline:** Personalized Reading Experience
- **Tech:** Collaborative Filtering, Scikit-Learn
- **Effect:** Infinite Moving Cards (book covers)

#### Diabetes Prediction
- **Headline:** Healthcare Predictive Analytics
- **Tech:** Logistic Regression/Random Forest
- **Effect:** Glowing Stars (high accuracy indicator)

---

## Verification Plan

### Visual Testing
- Test on desktop (1920x1080, 1440x900)
- Test on mobile (iPhone 14, Android)
- Verify all animations are smooth (60fps)
- Check dark mode contrast ratios

### Performance
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Total Blocking Time < 200ms

### Functionality
- All links working (TrashLab, GitHub)
- Scroll interactions smooth
- Typewriter effect cycling correctly

---

## File Structure

```
PORTFOLIOSURYA/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── hero/
│   ├── projects/
│   ├── experience/
│   └── ui/
├── lib/
│   └── utils.ts
├── public/
│   └── (project images)
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## Timeline

| Phase | Focus | Status |
|-------|-------|--------|
| P1 | Setup Foundation | 🔲 Pending |
| P2 | Hero & Identity | 🔲 Pending |
| P3 | Bento Projects | 🔲 Pending |
| P4 | Experience Section | 🔲 Pending |
| P5 | Polish & Deploy | 🔲 Pending |
