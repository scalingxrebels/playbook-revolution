

# GTM Stack Map + Power Up Growth Momentum — Redesign

## Problem

Comparing both pages against the **Boost Efficient Hypergrowth** reference reveals clear gaps:

### GTM Stack Map (major issues)
- **Hero**: Missing 4-layer Deep Space system (Gradient + Mesh + Stars + Grid with parallax). Uses `text-display-lg` instead of `text-hero-lg`, no `animate-blur-in`, `Badge variant="outline"` instead of `variant="gradient"`, no scroll indicator, wrong container sizing (`max-w-4xl` vs `max-w-5xl`)
- **All sections**: Missing the standardized section header pattern (`text-sm font-semibold uppercase tracking-widest` color-coded label above `text-display-md` headline)
- **Benefits**: Simple bullet list instead of structured grid cards with icons
- **ICP / Social Proof sections**: Missing `animate-slide-up` stagger delays, no section labels
- **CTA Repeat**: Missing proper 4-layer Deep Space, no trust badges, no stats row

### Power Up Growth Momentum (minor issues)
- **Problem section**: Symptom + real-cost cards use `rounded-lg` (reference uses no rounded corners — brutalist style)
- **Outcome section**: Case study card uses `rounded-lg` on outcome box
- **Solution section**: Differentiators card uses `rounded-lg`
- **FinalCTA**: Background uses `from-secondary/30` (same as Boost — this is fine). But FAQ items in both Boost and PowerUp could be more consistent. Minor: no section label above Final CTA headline.

---

## Changes

### 1. GTM Stack Map (`src/pages/GTMStackMap.tsx`) — Full rewrite

**Hero Section** — Match Boost exactly:
- 4-layer Deep Space: `bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]` + `bg-mesh opacity-60` + `TwinklingStars` in parallax wrapper + `bg-grid-pattern bg-grid-lg opacity-20`
- Container: `container max-w-5xl mx-auto px-6 py-24 relative z-10 text-center`
- Breadcrumb: same pattern as Boost (Solutions > GTM Stack Map 2026)
- Badge: `variant="gradient"` with Download icon
- Headline: `text-hero-lg` + `animate-blur-in`, line 2 uses `text-gradient animate-gradient bg-gradient-primary`
- Subline: `text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up`
- Inline form stays (this is a lead magnet, not booking)
- Trust signal below form
- Scroll indicator at bottom (ChevronDown bounce)

**Benefits Section** — Add section label + grid cards:
- Section label: `text-sm font-semibold uppercase tracking-widest text-accent mb-4 block`
- Headline: `text-display-md`
- Replace bullet list with 5 benefit cards in a grid (`md:grid-cols-3` with stagger)
- Each card: `bg-card border-2 border-border hover:border-accent/50 p-6 transition-all` with icon + text

**ICP Section** — Add section label:
- Add `text-sm font-semibold uppercase tracking-widest text-primary mb-4 block` label
- Headline: `text-display-md`
- Cards: add `backdrop-blur-sm`, stagger delays

**Social Proof Section** — Add section label + improve cards:
- Section label
- Cards: add `border-l-4 border-accent` for visual distinction

**CTA Repeat Section** — Full Deep Space:
- 4-layer background (same as hero)
- Section label
- Stats row (200+ Teams, Free, Instant Download)
- Trust badges below form
- Badge `variant="gradient"` with Sparkles

### 2. Power Up Growth Momentum (`src/pages/PowerUpGrowthMomentum.tsx`) — Targeted fixes

- **Problem section** (line 266): Remove `rounded-lg` from symptom items — change to no border-radius (brutalist). Same for real-cost cards (line 292)
- **Solution section** (line 450): Remove `rounded-lg` from differentiators card
- **Outcome section** (line 577): Remove `rounded-lg` from case study card. Remove `rounded-lg` from outcome box (line 606). Remove `rounded` from measurement popup (line 567)
- **Qualification section** (line 894): Remove `rounded-lg` from fit/not-fit items

These are ~10 small `rounded-lg` → empty string replacements across the file.

---

## Files

| File | Change |
|---|---|
| `src/pages/GTMStackMap.tsx` | Full rewrite (~400 lines, same content, new styling) |
| `src/pages/PowerUpGrowthMomentum.tsx` | Remove ~10 instances of `rounded-lg` and `rounded` |

No new files. No database changes. No new dependencies.

