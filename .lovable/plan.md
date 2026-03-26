

## Plan: /about/ml Page Redesign — Briefing v1.0

### Scope

Complete rewrite of `ML.tsx` (725 lines) and ML translation keys in `LanguageContext.tsx`. The current page has ~10 sections with PRICEPLAQE, 5 photos, booking iframe in hero, old formulas. The new page has 7 sections, 1-2 photos, CTA only at end.

### Design System (from Home)

Every section follows the Home pattern:
- `useScrollAnimation` + `useParallaxLayers` for scroll-reveal and parallax backgrounds
- `bg-mesh opacity-30/40`, `bg-grid-pattern bg-grid-lg opacity-20`, gradient overlays
- Overline: `text-sm font-semibold uppercase tracking-widest text-accent mb-4 text-center`
- Headlines: `font-display text-display-md mb-12 text-center`
- Container: `max-w-5xl mx-auto px-6`
- Sections: `py-24 md:py-32 overflow-hidden`
- Staggered animations with `transitionDelay`

### Sections

**1. Hero** — Deep Space, 2-column (photo left 40%, text right 60%)
- Photo: round, `border-2 border-primary/30`, 400px max
- Overline: `GRÜNDER & CEO · SCALINGX HYPERGROWTH`
- H1: `Michel Lason`
- H2 (dominant): `Hat €1,3M auf €13,7M ARR gebracht. In 2 Jahren.`
- Subline: `Findet den Hebel der wirklich zieht. Setzt ihn um — fucking fast.`
- Badges: `[Revenue Architecture] [GTM Motions] [AI Orchestration] [Investor Readiness]`
- Result badges: `Rule of 40 +10 Pkt · EBITDA –€300k → +€150k · 18 Jahre Operator`
- Formula badge: `EXPERTISE × SPEED = IMPACT`
- NO CTA in hero
- Uses `useParallaxLayers`, TwinklingStars, GrowthTrails like HomeHero

**2. Die Formel** — Simple text section, max-w-3xl centered (like HomeShift)
- Overline: `DIE FORMEL`
- H2: `Expertise × Speed = Impact. Nicht als Slogan. Als Arbeitsweise.`
- 3 paragraphs, formula as large visual element in accent color

**3. Warum ich das kann** — Timeline with 3 stations
- Overline: `DIE STORY`
- H2: `Nicht Biographie. Fähigkeit.`
- 3 cards with Electric Blue labels: Die Erkenntnis, Der Beweis (smapOne), Die Konsequenz (ScalingX)
- Optional second photo (ml-speaking.png) in this section
- Timeline design using left border + dot pattern (like current section 5 but cleaner)

**4. Was Menschen sagen** — Testimonials
- Overline: `STIMMEN`
- H2: `Was andere sagen.`
- 3 prominent testimonials (testimonial8, testimonial5, testimonial7 per briefing)
- 4 remaining as compact grid below
- Quote icon, italic text, `bg-card border-border` cards

**5. Wofür ich nicht stehe** — 3 cards (reduced from 5)
- Overline: `KLARHEIT`
- H2: `Womit ich nicht arbeite.`
- 3 cards: Pfusch, Zeitverschwendung, Change Resistance
- X icon, destructive color accent
- Remove items 3+4 (Menschen als Mittel, Macht-Imbalance)

**6. Was mich antreibt** — 3 moments + closing quote
- Overline: `ANTRIEB`
- H2: `Drei Momente. Das ist warum ich tue, was ich tue.`
- 3 horizontal cards with icons (Lightbulb, Target, Star)
- Closing quote: `"Happiness is a problem (solved)."` — large, centered, muted

**7. Final CTA** — Like HomeWorkWithUs but simpler
- Overline: `NÄCHSTER SCHRITT`
- H2: `30 Minuten. Kein Pitch. Direkt mit mir.`
- Body + Primary CTA with `FilloutBookingModal`
- Secondary links: Book, LinkedIn, Solutions

### What gets removed
- PRICEPLAQE section (Section 4 old)
- Booking iframe in hero
- Formulas 2+3 (`Growth Engines × Scaling Systems × AI`, `Leadership × Love × Lebensfreude`)
- Section 9 (AI-Native Zielbilder)
- Section 8 old (Joy photos)
- 3 of 5 photos (contemplating, joy/shine, closeup)
- `buildEmbedUrl` function (replaced by `FilloutBookingModal`)
- Footer quotes section

### Files

| File | Change |
|---|---|
| `src/pages/ML.tsx` | Complete rewrite (~350 lines, 7 section components inline) |
| `src/contexts/LanguageContext.tsx` | Replace ML translation keys (remove PRICEPLAQE, formulas 2+3, sections 1/2/5/8/9, add new section keys) |

2 files. No routing changes (already at `/ml` and `/about/ml`).

