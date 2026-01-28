

# Plan: Power Up NRR Engine – Landing Page + Kachel-Update

## Übersicht

Umsetzung analog zu den bestehenden Power Up Landing Pages:
1. Kachel-Update in solutionTiles.ts (ID 14)
2. Neue Route in App.tsx
3. Neue Landing Page erstellen

---

## URL-Korrektur

Das Briefing gibt `/solutions/power-up-nrr-engine` an, aber gemäß etabliertem Pattern sollte die URL lauten:

**Korrekt:** `/solutions/power-up/nrr-engine`

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (Zeilen 576-609, ID 14)

| Feld | Aktuell | Neu |
|------|---------|-----|
| solutionEn | "...in 30 days..." | "...in 4-6 weeks..." |
| solutionDe | "...in 30 Tagen..." | "...in 4-6 Wochen..." |
| deliverablesEn[2] | "Expansion revenue: +20-40%" | "Expansion Rate: +50-100%" |
| deliverablesDe[2] | "Expansion Revenue: +20-40%" | "Expansion Rate: +50-100%" |
| primaryCtaEn | Start Transformation | More About NRR Engine |
| primaryCtaDe | Transformation starten | Mehr über NRR Engine |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/power-up/nrr-engine |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const PowerUpNRREngine = lazy(() => import("./pages/PowerUpNRREngine"));

// Route:
<Route path="/solutions/power-up/nrr-engine" element={<PowerUpNRREngine />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/PowerUpNRREngine.tsx`

Struktur analog zu `PowerUpPricingPower.tsx` mit 7 Sektionen:

### Section 1: Hero
- **Breadcrumb:** `Solutions > Power Up NRR Engine`
- **Badge:** `Power Up · 4-6 Weeks · From €23.6K`
- **Headline:** `Customer Success Broken → NRR Engine Built`
- **Subheadline:** Build your retention engine in 4-6 weeks...
- **Stats:** Churn -20-40% | NRR +10-20pp | Expansion Rate +50-100%
- **Trust Badges:** Outcome-Based Risk Sharing, 4-6 Week Sprint, Reference Calls Available

### Section 2: Problem
- **Headline:** `Your Customer Success Is Broken`
- **Symptome:**
  - High churn: 20%+ annually (benchmark: <10%)
  - Low NRR: 90-95% (benchmark: 110-130%)
  - No expansion: 10% of customers expand (benchmark: 30%+)
  - Reactive CS: Fire-fighting mode
  - No retention loops: No health scoring, no early warning

### Section 3: Solution
- **Headline:** `How We Build Your NRR Engine`
- **3-Phasen-Ansatz:**
  - Week 1-2: Diagnose (Onboarding, Retention, Expansion, CS Operations Analysis)
  - Week 2-4: Fix (Onboarding Optimization, Retention Loops, or Expansion Engine)
  - Week 4-6: Validate & Scale

### Section 4: Impact/Outcome
- **Metrics:**
  - Churn -20-40% (Beispiel: 20% → 12%)
  - NRR +10-20pp (Beispiel: 95% → 110%)
  - Expansion Rate +50-100% (Beispiel: 10% → 18%)
- **Real Example:** Series B SaaS, €25M ARR, NRR +18pp

### Section 5: Process (How We Work)
- Week-by-Week Breakdown
- Time Commitment (8-12h, 12-16h, 6-8h)
- Outcome-Based Risk Sharing Details
- Primary Metrics: Churn Rate, NRR, Expansion Rate

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Churn high (15%+ annually)
  - NRR below 100%
  - Series A-D, €10M-€50M ARR
  - Budget: €23.6K
- **Not a Fit:**
  - Pre-revenue/pre-Series A
  - Needs full CS transformation (→ Boost/Accelerate)
  - Just wants strategy deck

### Section 7: Final CTA
- **Headline:** `Ready to Build Your NRR Engine?`
- **Primary CTA:** Book Free Inflection Call (30 min)
- **Secondary:** Expert Session: Net Retention Revenue Boost (€490-€890)
- **FAQ:** Duration, Investment, Risk Sharing, References, ROI, CS Tool Integration (Gainsight, ChurnZero, Totango, Vitally)

---

## Technische Details

### Komponenten-Wiederverwendung
Die neue Landing Page verwendet die gleichen Patterns wie `PowerUpPricingPower.tsx`:
- `TwinklingStars` für Hero-Hintergrund
- `useParallaxLayers` für Parallax-Effekte
- `useScrollAnimation` für Scroll-basierte Animationen
- `Accordion` für FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Dateistruktur
```text
src/
├── App.tsx                          # Neue Route hinzufügen
├── data/
│   └── solutionTiles.ts             # Kachel-CTA aktualisieren
└── pages/
    ├── PowerUpCACCrisis.tsx         # Referenz
    ├── PowerUpGrowthMomentum.tsx    # Referenz
    ├── PowerUpPricingPower.tsx      # Referenz
    └── PowerUpNRREngine.tsx         # NEU
```

### URL-Pattern
Gemäß etablierter Logik: `/solutions/power-up/nrr-engine` (nicht `/solutions/power-up-nrr-engine`)

### Breadcrumb-Pattern
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">Power Up NRR Engine</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Zusammenfassung der Änderungen

| Datei | Änderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 14: CTA + Duration + Expansion Rate aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/PowerUpNRREngine.tsx` | Neue Datei (7 Sektionen) |

