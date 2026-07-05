# SQWAD Agency — Repository Layout & Implementation Summary

> Marketing landing page for **SQWAD Agency**, a done-for-you TikTok Shop creator program agency. Single-page site built with Next.js App Router.

---

## File Tree

```
sqwad-agency/
├── app/                          # Next.js App Router
│   ├── favicon.ico
│   ├── globals.css               # Design tokens, animations, all section styles
│   ├── layout.tsx                # Root layout, fonts, SEO metadata
│   └── page.tsx                  # Home page — composes all sections
│
├── components/                   # React UI components
│   ├── AnimatedCounter.tsx       # Scroll-triggered number animation
│   ├── Background.tsx            # Mesh blobs, grid overlay, grain
│   ├── CaseStudy.tsx             # TheHoopGang case study section
│   ├── FAQ.tsx                   # Accordion FAQ
│   ├── FinalCTA.tsx              # Bottom booking CTA
│   ├── Footer.tsx                # Site footer + links
│   ├── Hero.tsx                  # Hero headline + CTAs
│   ├── HeroDashboard.tsx         # 3D tilt dashboard mock (client)
│   ├── Nav.tsx                   # Fixed nav with scroll state (client)
│   ├── Offer.tsx                 # SQWAD vs typical agency comparison
│   ├── Proof.tsx                 # Social proof stats bar
│   ├── Reveal.tsx                # Intersection-observer fade-in (client)
│   ├── ScrollProgress.tsx        # Top scroll progress bar (client)
│   ├── System.tsx                # 7-step playbook (client)
│   └── WhoFor.tsx                # Qualification (good fit / bad fit)
│
├── public/                       # Static assets
│   ├── file.svg                  # Default Next.js assets (unused)
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── AGENTS.md                     # Next.js agent rules pointer
├── CLAUDE.md                     # Same rules, Claude alias
├── eslint.config.mjs
├── next.config.ts                # Default Next.js config
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs            # Tailwind v4 PostCSS
├── README.md                     # Default create-next-app readme
├── tsconfig.json                 # `@/*` path alias → project root
└── REPO_LAYOUT.md                # This file
```

**Not in repo (generated / ignored):** `node_modules/`, `.next/`, `tsconfig.tsbuildinfo`

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js **16.2.5** (App Router) |
| UI | React **19.2.4** |
| Language | TypeScript **5** |
| Styling | Tailwind CSS **v4** (`@import "tailwindcss"`, `@theme` tokens) + custom CSS in `globals.css` |
| Fonts | Inter (body), Space Grotesk (display) via `next/font/google` |
| Linting | ESLint 9 + `eslint-config-next` |

**Scripts:** `npm run dev` · `npm run build` · `npm run start` · `npm run lint`

---

## Page Architecture

`app/page.tsx` renders a single scroll landing page in this order:

```
Background (fixed layer)
ScrollProgress (fixed top bar)
Nav (fixed header)
main
  ├── Hero
  ├── Proof
  ├── Offer          (#pricing)
  ├── System         (#system)
  ├── CaseStudy      (#case)
  ├── WhoFor
  ├── FAQ            (#faq)
  └── FinalCTA       (#book)
Footer
```

All sections use in-page anchor links (`#system`, `#case`, `#pricing`, `#faq`, `#book`).

---

## What's Implemented

### Root layout (`app/layout.tsx`)

- Full **SEO metadata**: title template, description, keywords, Open Graph, Twitter cards, robots
- **Viewport** theme color (`#07070c`)
- Google fonts loaded as CSS variables (`--font-inter`, `--font-grotesk`)
- Production URL set to `https://sqwadagency.com`

### Global design system (`app/globals.css`)

- **Color tokens:** dark bg (`#07070c`), cyan/pink/purple brand gradient, success green
- **Reusable utilities:** `.gradient-text`, `.btn-primary`, `.btn-secondary`, `.section-tag`, `.reveal`
- **Animations:** blob drift, gradient shift, dashboard float, FAQ accordion (CSS grid trick), pulse effects
- **Responsive breakpoints:** 900px and 640px for nav, hero, grids, footer
- **`prefers-reduced-motion`:** blob animations disabled; `Reveal` and `AnimatedCounter` skip animation

### Shared client utilities

| Component | Behavior |
|-----------|----------|
| `Reveal` | IntersectionObserver fade/slide-in on scroll; optional delay; respects reduced motion |
| `AnimatedCounter` | Counts up when visible (easeOutCubic); used in Proof bar |
| `ScrollProgress` | 2px cyan gradient bar at top, width tied to scroll % |
| `Background` | Three animated gradient blobs + grid overlay + SVG noise grain |

### Section components

| Component | Section | Content / features |
|-----------|---------|-------------------|
| `Nav` | Header | Fixed glass nav; scroll state toggles border/bg; links to anchors; mobile hides nav links (CTA stays) |
| `Hero` | Above fold | Headline, subcopy, dual CTAs, trust bullets; wraps `HeroDashboard` in `Reveal` |
| `HeroDashboard` | Hero visual | Mock “SQWAD pulse” dashboard: stats grid, creator rows, floating badges; **mouse-tilt 3D** on desktop (901px+) |
| `Proof` | Stats bar | TheHoopGang metrics: $60K+ revenue, 1500+ units, 22 days to $10K, 136 videos — animated counters |
| `Offer` | Pricing | Side-by-side cards: SQWAD (10% revenue) vs typical agency (retainers/fees) |
| `System` | How it works | **7-step playbook** (Foundation → Spark Ads); each card has description + mock metric rows; hover spotlight via `--mx`/`--my` |
| `CaseStudy` | Results | TheHoopGang story: narrative + 4 stat tiles ($60K+, 1,547 units, 22 days, 136 videos) |
| `WhoFor` | Qualification | “Built for you if” vs “Not the right fit if” checklist cards |
| `FAQ` | FAQ | 7 questions; single-open accordion; ARIA `aria-expanded` / `aria-controls`; link to joinsqwad.com in scaling answer |
| `FinalCTA` | Book call | Calendly link (`calendly.com/thomasosayi/30min`), secondary link to case study, trust line |
| `Footer` | Footer | Brand blurb, Agency + Company link columns, copyright, “Powered by SQWAD Platform” |

### External integrations (links only)

- **Calendly** — strategy call booking (`FinalCTA`, `Nav`)
- **joinsqwad.com** — SQWAD creator platform (FAQ, Footer)
- **mailto:hello@sqwadagency.com** — contact (Footer)

No API routes, database, auth, payments, or form backends are implemented.

---

## Client vs Server Components

| Client (`'use client'`) | Server (default) |
|-------------------------|------------------|
| `Nav`, `ScrollProgress`, `Reveal`, `AnimatedCounter`, `HeroDashboard`, `System`, `FAQ` | `Background`, `Hero`, `Proof`, `Offer`, `CaseStudy`, `WhoFor`, `FinalCTA`, `Footer`, `page.tsx`, `layout.tsx` |

---

## Not Yet Implemented / Gaps

| Item | Notes |
|------|-------|
| `/public/og.png` | Referenced in `layout.tsx` Open Graph + Twitter metadata but **file not present** |
| Custom favicon/branding | Only default `favicon.ico` |
| Additional pages | Single route (`/`) only — no blog, legal, privacy, terms |
| Analytics | No GTM, Plausible, Vercel Analytics, etc. |
| Contact form | Email link only; no form submission |
| Mobile nav menu | Nav links hidden on small screens; no hamburger/drawer |
| Tests | No unit or E2E tests |
| CI/CD | No GitHub Actions or deploy config in repo |
| README | Still default create-next-app boilerplate |

---

## Quick Reference — Key Paths

| Purpose | Path |
|---------|------|
| Edit page order / sections | `app/page.tsx` |
| SEO & fonts | `app/layout.tsx` |
| All visual styling | `app/globals.css` |
| Section copy & structure | `components/*.tsx` |
| Path alias `@/` | Maps to project root (`tsconfig.json`) |

---

*Last updated: July 4, 2026*
