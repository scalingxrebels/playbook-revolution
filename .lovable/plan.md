
# Plan: Power Up CAC Crisis Landing Page

## Übersicht

Erstellung einer vollständigen Landing Page für "Power Up: CAC Crisis Averted" unter `/solutions/power-up/cac-crisis`. Die Seite folgt dem Homepage-Design-System mit 7 Sektionen und verwendet die gleichen Komponenten-Patterns, Animationen und visuellen Stile.

---

## Struktur

| Sektion | Komponente | Höhe | Beschreibung |
|---------|------------|------|--------------|
| 1 | Hero | 100vh | Breadcrumb, Badge, Headline, Stats, CTAs, Trust Badges |
| 2 | Problem | 50vh | Emotionale Connection, Symptom-Checkliste, Before/After |
| 3 | Solution | 60vh | 3-Phasen-Ansatz, Kernhebel, Timeline |
| 4 | Impact | 60vh | Outcome-Based Risk Sharing, Proof Points, Vergleichstabelle |
| 5 | Qualification | 40vh | Ideal For / Not For Checklisten, Data Readiness |
| 6 | Pricing | 70vh | Explorer/Master/Genius Tiers, FAQ Accordion |
| 7 | Final CTA | 50vh | Calendly Integration, Trust Badges |

---

## Technische Umsetzung

### Neue Dateien

```text
src/pages/PowerUpCACCrisis.tsx       # Hauptseite (Page Component)
```

### Bestehende Patterns aus Homepage

- **HeroOptimized.tsx**: Parallax Background, TwinklingStars, Gradient Text
- **ProblemOptimized.tsx**: Card Grid, Stat Badges, Icon-basierte Cards
- **SolutionOptimized.tsx**: Color-coded Cards, Hover Effects
- **HowItWorksOptimized.tsx**: Timeline/Phase Cards, Number Badges
- **ProofOptimized.tsx**: Before/After Cards, Case Studies
- **FinalCTAOptimized.tsx**: Fillout/Calendly Integration, Benefits List

### UI-Komponenten aus vorhandener Library

- `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbSeparator`
- `Button` (primary, outline, ghost variants)
- `Badge`
- `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent`
- `useScrollAnimation`, `useParallax` hooks

---

## Sektion 1: Hero (Above the Fold)

**Elemente:**
- Breadcrumb: Home > Solutions > Power Up > CAC Crisis
- Badge: "⚡ Power Up · 4-6 Weeks · From €23.6K"
- H1: "CAC Crisis → Back to Efficient Growth"
- H2/Subheadline mit Outcome-Metriken
- 3 Hero Stats Cards (CAC -40-60%, Win Rate +30-50%, Sales Cycle -50%)
- Primary CTA: "Book Free Inflection Call (30 min)"
- Secondary CTA: "See How It Works" (scroll)
- Trust Badges Row

**Styling:**
- Deep Space Background (wie HeroOptimized)
- TwinklingStars + Mesh Gradient
- animate-blur-in, animate-slide-up

---

## Sektion 2: The Problem

**Elemente:**
- Overline: "The Problem"
- Headline: "You're in a CAC Crisis"
- Beschreibungstext mit konkreten Zahlen
- Symptoms Checklist (7 Items mit Check-Icons)
- Before/After Metrics Visual

**Styling:**
- destructive/red Color-Coding für Problem-Theme
- Card-Grid für Symptome
- bg-destructive/10 für Before, bg-accent/10 für After

---

## Sektion 3: The Solution

**Elemente:**
- Overline: "The Solution"
- Headline: "How We Fix Your CAC Crisis in 4-6 Weeks"
- 3 Core Levers Cards
- 3-Phase Timeline Cards (Diagnose, Design, Deploy)
- Deliverables pro Phase

**Styling:**
- Timeline mit Number Badges (1, 2, 3)
- primary Color für Solution Cards
- Expandable Details pro Phase

---

## Sektion 4: The Impact

**Elemente:**
- Overline: "The Impact"
- Headline: "What You Get in 4-6 Weeks"
- 3 Outcome Cards mit Measurement Definitions
- Additional Benefits Liste
- ROI Calculation Box
- 2 Testimonial Cards (anonymisiert)
- Comparison Table (Traditional vs Power Up)

**Styling:**
- accent Color für Outcome Cards
- Expandable Measurement Definitions (Collapsible)
- shadow-brutal für Impact Cards

---

## Sektion 5: Who Is This For?

**Elemente:**
- Headline: "Is Power Up Right for You?"
- "Ideal For" Checklist (6 Items, grün)
- "Data Readiness" Requirements (4 Items)
- "Not For" Checklist (4 Items, rot)
- CTA: "Book Free Inflection Call"

**Styling:**
- 2-Column Layout auf Desktop
- Check/X Icons mit Color-Coding

---

## Sektion 6: Pricing & Investment

**Elemente:**
- Headline: "Investment & Engagement Options"
- 3 Pricing Tier Cards (Explorer/Master/Genius)
- Payment Options
- FAQ Accordion (4 Fragen)

**Styling:**
- Pricing Cards mit hover-brutal Effect
- Center Card (Master) highlighted
- Collapsible FAQ Items

---

## Sektion 7: Final CTA

**Elemente:**
- Headline: "Ready to Fix Your CAC Crisis?"
- Subheadline
- Primary CTA (Calendly Link)
- Secondary CTA (Download Case Study)
- Tertiary CTA (Reference Call Request)
- Trust Badges

**Styling:**
- Gradient Background
- shadow-accent-glow auf Primary Button

---

## Routing

Neue Route in `App.tsx`:
```tsx
<Route path="/solutions/power-up/cac-crisis" element={<PowerUpCACCrisis />} />
```

---

## Bilingual Support

Alle Texte werden mit `language === 'de'` Conditionals implementiert für vollständige DE/EN Unterstützung.

---

## Geschätzte Dateigrößen

| Datei | Zeilen | Größe |
|-------|--------|-------|
| PowerUpCACCrisis.tsx | ~900-1100 | ~35-40 KB |
| App.tsx (Update) | +2 | Minimal |

---

## Implementierungsreihenfolge

1. Neue Seite `PowerUpCACCrisis.tsx` mit allen 7 Sektionen
2. Route in `App.tsx` hinzufügen
3. Import der bestehenden Komponenten (Navigation, Footer, UI, Hooks)
