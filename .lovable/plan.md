

# Plan: Boost NRR Machine - Landing Page + Kachel-Update

## Briefing Review

### URL-Korrektur erforderlich

Das Briefing gibt `/solutions/boost-nrr-machine` an, aber gemaess etabliertem Pattern (analog zu anderen Boost Pages) sollte die URL lauten:

**Korrekt:** `/solutions/boost/nrr-machine`

### Metriken-Alignment: Kachel vs. Briefing

| Metrik | Aktuelle Kachel (ID 23) | Briefing | Empfehlung |
|--------|-------------------------|----------|------------|
| Metrik 1 | NRR: 120%+ | Churn: -50-75% | Briefing uebernehmen |
| Metrik 2 | Churn reduction: -40-60% | NRR: +30-50pp | Briefing uebernehmen |
| Metrik 3 | Expansion revenue: +50-80% | Expansion Rate: +100-200% | Briefing uebernehmen |
| Duration | 8-10 weeks | 90 days (12 weeks) | Briefing uebernehmen |
| Price | EUR58K | EUR60K-EUR78K | Briefing uebernehmen |
| slug | boost-nrr | boost-nrr-machine | Aktualisieren |

Die Metriken im Briefing sind aggressiver und beinhalten die "2 of 3 Outcomes Guaranteed" Struktur konsistent mit anderen Boost Pages.

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 23, Zeilen 886-919)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | boost-nrr | boost-nrr-machine |
| price | EUR58K | EUR60K-EUR78K |
| problemEn | "Customer success is a cost center..." | "Your customer success is broken. Churn has climbed to 20%+, NRR dropped to 90%, expansion rate at 5%. Board is asking: Why are we losing customers?" |
| problemDe | (entsprechend) | (entsprechend) |
| solutionEn | "We transform CS into a revenue function in 8-10 weeks..." | "We rebuild your entire CS engine in 90 days: Churn -50-75%, NRR +30-50pp, Expansion Rate +100-200% - with 2 of 3 outcomes guaranteed." |
| solutionDe | (entsprechend) | (entsprechend) |
| deliverablesEn | [NRR: 120%+, Churn -40-60%, Expansion +50-80%] | [Churn: -50-75%, NRR: +30-50pp, Expansion Rate: +100-200%] |
| deliverablesDe | (entsprechend) | (entsprechend) |
| primaryCtaEn | Start Boost | More About NRR Machine |
| primaryCtaDe | Boost starten | Mehr ueber NRR Machine |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/boost/nrr-machine |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const BoostNRRMachine = lazy(() => import("./pages/BoostNRRMachine"));

// Route:
<Route path="/solutions/boost/nrr-machine" element={<BoostNRRMachine />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/BoostNRRMachine.tsx`

Struktur analog zu `BoostPricingDominance.tsx` und anderen Boost Pages mit 7 Sektionen:

### Section 1: Hero
- **Breadcrumb:** `Solutions > Boost NRR Machine`
- **Badge:** `Boost . 90 Days . EUR60K-EUR78K`
- **Headline:** `Customer Success Broken -> NRR Machine Built`
- **Subheadline:** Build your NRR machine in 90 days...
- **Stats:** Churn -50-75% | NRR +30-50pp | Expansion Rate +100-200%
- **Trust Badges:** 2 of 3 Outcomes Guaranteed (or 50% Refund), 90-Day Transformation, Reference Calls Available

### Section 2: Problem
- **Headline:** `Your Customer Success Is Broken`
- **Symptome:**
  - High churn: 20%+ annually (benchmark: <10%)
  - Low NRR: 90% (benchmark: 120%+)
  - No expansion: 5% expansion rate (benchmark: 25%+)
  - Reactive CS: Fighting fires, no proactive retention
  - Board pressure: "Why are we losing customers?"

### Section 3: Solution
- **Headline:** `How We Build Your NRR Machine`
- **3-Phasen-Ansatz (90 Days):**
  - Week 1-2: Diagnose (Churn Analysis, NRR Analysis, CS Operations Audit, AI Readiness)
  - Week 3-8: Build (Retention Loops, Expansion Engine, CS Operations)
  - Week 9-12: Validate & Scale

### Section 4: Impact/Outcome
- **Metrics:**
  - Churn -50-75% (Beispiel: 20% -> 5-10%)
  - NRR +30-50pp (Beispiel: 90% -> 120-140%)
  - Expansion Rate +100-200% (Beispiel: 5% -> 15-25%)
- **Real Example:** Series B SaaS, EUR22M ARR, Churn -68%, NRR +42pp, Expansion Rate +400%

### Section 5: Process (How We Work)
- Week-by-Week Breakdown (90 Days)
- Time Commitment (12-16h, 20-30h, 10-15h)
- **2 of 3 Outcomes Guaranteed** (oder 50% Refund)
- Primary Metrics: Churn (%), NRR (%), Expansion Rate (%)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - CS broken (high churn, low NRR, no expansion)
  - Multiple CS problems (reactive CS, no churn prediction, no expansion playbooks)
  - Series A-C, EUR10M-EUR50M ARR, 50-200 people
  - Budget: EUR60K-EUR78K
- **Not a Fit:**
  - Only one CS issue (-> Power Up: NRR Engine)
  - Needs full AI-native transformation (-> Accelerate)
  - Just wants CS strategy deck

### Section 7: Final CTA
- **Headline:** `Ready to Build Your NRR Machine?`
- **Primary CTA:** Book Free Inflection Call (30 min)
- **Secondary:** Customer Success Audit (EUR3.9K-EUR5.9K)
- **FAQ:** Duration (90 days), Investment (EUR60K-EUR78K stage-based), Risk Sharing (2 of 3 guaranteed), References (CEOs), ROI (20-40x), CS Team Training

---

## Technische Details

### Komponenten-Wiederverwendung
Die neue Landing Page verwendet die gleichen Patterns wie `BoostPricingDominance.tsx`:
- `TwinklingStars` fuer Hero-Hintergrund
- `useParallaxLayers` fuer Parallax-Effekte
- `useScrollAnimation` fuer Scroll-basierte Animationen
- `Accordion` fuer FAQ-Bereich
- `Collapsible` fuer Outcome-Details
- Bilingual (DE/EN) mit `useLanguage`

### Boost-spezifische Elemente (konsistent mit anderen Boost Pages)
- **Badge:** "Boost"
- **Duration:** 90 Days
- **Price:** EUR60K-EUR78K
- **Guarantee:** "2 of 3 Outcomes Guaranteed (or 50% Refund)"
- **Scope:** Full NRR Machine Rebuild (Retention + Expansion)

### Spezifische Icons fuer NRR Machine
- `TrendingDown` - Churn Reduction
- `TrendingUp` - NRR Growth
- `BarChart3` - Expansion Rate
- `Users` - Customer Success
- `Shield` - Retention Loops
- `Rocket` - Expansion Engine
- `Brain` - AI-Powered Churn Prediction
- `Target` - Health Scoring

### Dateistruktur
```text
src/
  App.tsx                              # Neue Route hinzufuegen
  data/
    solutionTiles.ts                   # Kachel ID 23: Slug + Metriken + CTA aktualisieren
  pages/
    BoostEfficientHypergrowth.tsx      # Referenz fuer Section-Struktur
    BoostGrowthEngine.tsx              # Referenz fuer Section-Struktur
    BoostPricingDominance.tsx          # Referenz fuer Section-Struktur
    BoostNRRMachine.tsx                # NEU - Vierte Boost Page
```

### URL-Pattern
Gemaess etablierter Boost-Logik: `/solutions/boost/nrr-machine` (nicht `/solutions/boost-nrr-machine`)

### Breadcrumb-Pattern
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">Boost NRR Machine</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 23: Slug + Metriken + Price + CTA + Duration aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/BoostNRRMachine.tsx` | Neue Datei (7 Sektionen) - Vierte Boost Landing Page |

