

# Plan: Boost Growth Engine - Landing Page + Kachel-Update

## Briefing Review

### URL-Korrektur erforderlich

Das Briefing gibt `/solutions/boost-growth-engine` an, aber gemaess etabliertem Pattern (analog zu Power Up und Boost: Efficient Hypergrowth) sollte die URL lauten:

**Korrekt:** `/solutions/boost/growth-engine`

### Metriken-Alignment: Kachel vs. Briefing

| Metrik | Aktuelle Kachel (ID 21) | Briefing | Empfehlung |
|--------|-------------------------|----------|------------|
| Metrik 1 | Growth rate: +40-60% | ARR Growth: +50-100% | Briefing uebernehmen |
| Metrik 2 | Experiment velocity: 3x | Win Rate: +30-50% | Briefing uebernehmen |
| Metrik 3 | Growth playbook institutionalized | Pipeline: +50-100% | Briefing uebernehmen |
| Duration | 8-10 weeks | 90 days (12 weeks) | Briefing uebernehmen |
| Price | EUR58K | EUR60K-EUR78K | Briefing uebernehmen |
| slug | boost-growth | boost-growth-engine | Aktualisieren |

Die Metriken im Briefing sind outcome-fokussiert und beinhalten die "2 of 3 Outcomes Guaranteed" Struktur.

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 21, Zeilen 818-851)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | boost-growth | boost-growth-engine |
| price | EUR58K | EUR60K-EUR78K |
| problemEn | "You hit a plateau. Growth is stalling..." | "Your growth has stalled. ARR growth dropped from 150% to 80%. Win rate fallen from 35% to 15%. Board is asking: When will we reignite growth?" |
| problemDe | (entsprechend) | (entsprechend) |
| solutionEn | "We build internal growth capability in 8-10 weeks..." | "We rebuild your entire growth engine in 90 days: ARR Growth +50-100%, Win Rate +30-50%, Pipeline +50-100%—with 2 of 3 outcomes guaranteed." |
| solutionDe | (entsprechend) | (entsprechend) |
| deliverablesEn | [Growth rate +40-60%, Experiment velocity 3x, Playbook] | [ARR Growth: +50-100%, Win Rate: +30-50%, Pipeline: +50-100%] |
| deliverablesDe | (entsprechend) | (entsprechend) |
| primaryCtaEn | Start Boost | More About Growth Engine |
| primaryCtaDe | Boost starten | Mehr ueber Growth Engine |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/boost/growth-engine |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const BoostGrowthEngine = lazy(() => import("./pages/BoostGrowthEngine"));

// Route:
<Route path="/solutions/boost/growth-engine" element={<BoostGrowthEngine />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/BoostGrowthEngine.tsx`

Struktur analog zu `BoostEfficientHypergrowth.tsx` mit 7 Sektionen:

### Section 1: Hero
- **Breadcrumb:** `Solutions > Boost Growth Engine`
- **Badge:** `Boost . 90 Days . EUR60K-EUR78K`
- **Headline:** `Growth Stalled -> Growth Engine Built`
- **Subheadline:** Build your growth engine in 90 days...
- **Stats:** ARR Growth +50-100% | Win Rate +30-50% | Pipeline +50-100%
- **Trust Badges:** 2 of 3 Outcomes Guaranteed (or 50% Refund), 90-Day Transformation, Reference Calls Available

### Section 2: Problem
- **Headline:** `Your Growth Has Stalled`
- **Symptome:**
  - ARR growth collapsed: 150% -> 80% (47% decline)
  - Win rate plummeted: 35% -> 15% (57% decline)
  - Pipeline stagnated: EUR2M (benchmark: EUR5M+)
  - PMF eroding: 60% (benchmark: 80%+)
  - Board pressure: "When will we reignite growth?"

### Section 3: Solution
- **Headline:** `How We Build Your Growth Engine`
- **3-Phasen-Ansatz (90 Days):**
  - Week 1-2: Diagnose (Growth Analysis, GTM + Product Audit, PMF Assessment, AI Readiness)
  - Week 3-8: Build (GTM Engine Dimension 1, Product Engine Dimension 2, Measurement System)
  - Week 9-12: Validate & Scale

### Section 4: Impact/Outcome
- **Metrics:**
  - ARR Growth +50-100% (Beispiel: 80% -> 150-180%)
  - Win Rate +30-50% (Beispiel: 15% -> 45-65%)
  - Pipeline +50-100% (Beispiel: EUR2M -> EUR3M-EUR4M)
- **Real Example:** Series B SaaS, EUR15M ARR, ARR Growth +82pp, Win Rate +35pp, Pipeline +73%

### Section 5: Process (How We Work)
- Week-by-Week Breakdown (90 Days)
- Time Commitment (12-16h, 20-30h, 10-15h)
- **2 of 3 Outcomes Guaranteed** (oder 50% Refund)
- Primary Metrics: ARR Growth (%), Win Rate (%), Pipeline (EUR)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Growth stalled (ARR, Win Rate, Pipeline all declining)
  - Multiple growth problems (ICP, positioning, PMF, sales process)
  - Series A-C, EUR10M-EUR50M ARR, 50-200 people
  - Budget: EUR60K-EUR78K
- **Not a Fit:**
  - Only one growth bottleneck (-> Power Up)
  - Needs full AI-native transformation (-> Accelerate)
  - Just wants growth strategy deck

### Section 7: Final CTA
- **Headline:** `Ready to Build Your Growth Engine?`
- **Primary CTA:** Book Free Inflection Call (30 min)
- **Secondary:** Growth Momentum Expert Session (EUR490-EUR890)
- **FAQ:** Duration (90 days), Investment (EUR60K-EUR78K stage-based), Risk Sharing (2 of 3 guaranteed), References (CEOs), ROI (20-40x), Product Team Integration

---

## Technische Details

### Komponenten-Wiederverwendung
Die neue Landing Page verwendet die gleichen Patterns wie `BoostEfficientHypergrowth.tsx`:
- `TwinklingStars` fuer Hero-Hintergrund
- `useParallaxLayers` fuer Parallax-Effekte
- `useScrollAnimation` fuer Scroll-basierte Animationen
- `Accordion` fuer FAQ-Bereich
- `Collapsible` fuer Outcome-Details
- Bilingual (DE/EN) mit `useLanguage`

### Boost-spezifische Elemente (konsistent mit Efficient Hypergrowth)
- **Badge:** "Boost" (gleich)
- **Duration:** 90 Days
- **Price:** EUR60K-EUR78K
- **Guarantee:** "2 of 3 Outcomes Guaranteed (or 50% Refund)"
- **Scope:** Full Growth Engine Rebuild (GTM + Product)

### Spezifische Icons fuer Growth Engine
- `TrendingUp` - ARR Growth
- `Target` - Win Rate
- `BarChart3` - Pipeline
- `Rocket` - Growth Engine
- `Users` - GTM Engine
- `Settings` - Product Engine
- `Brain` - AI-Powered Tools
- `Sparkles` - PMF

### Dateistruktur
```text
src/
  App.tsx                              # Neue Route hinzufuegen
  data/
    solutionTiles.ts                   # Kachel ID 21 Slug + Metriken + CTA aktualisieren
  pages/
    BoostEfficientHypergrowth.tsx      # Referenz fuer Section-Struktur
    BoostGrowthEngine.tsx              # NEU - Zweite Boost Page
```

### URL-Pattern
Gemaess etablierter Boost-Logik: `/solutions/boost/growth-engine` (nicht `/solutions/boost-growth-engine`)

### Breadcrumb-Pattern
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">Boost Growth Engine</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 21: Slug + Metriken + Price + CTA + Duration aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/BoostGrowthEngine.tsx` | Neue Datei (7 Sektionen) - Zweite Boost Landing Page |

