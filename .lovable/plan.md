

# Plan: Power Up Growth Momentum – Landing Page + Kachel-Update

## Übersicht

Umsetzung aller 3 Aufgaben:
1. Neue Landing Page `/solutions/power-up/growth-momentum` erstellen
2. Kachel "Growth Unlocked" → "Growth Momentum" umbenennen
3. Button-Text und Breadcrumb korrigieren

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (Zeilen 508-541)

| Feld | Aktuell | Neu |
|------|---------|-----|
| headlineEn | Power Up: Growth Unlocked | Power Up: Growth Momentum |
| headlineDe | Power Up: Growth entsperrt | Power Up: Growth Momentum |
| solutionEn | "...in 30 days..." | "...in 4-6 weeks..." |
| solutionDe | "...in 30 Tagen..." | "...in 4-6 Wochen..." |
| primaryCtaEn | Start Transformation | More About Growth Momentum |
| primaryCtaDe | Transformation starten | Mehr über Growth Momentum |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/power-up/growth-momentum |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

Neue Route hinzufügen:
```tsx
const PowerUpGrowthMomentum = lazy(() => import("./pages/PowerUpGrowthMomentum"));

// Route:
<Route path="/solutions/power-up/growth-momentum" element={<PowerUpGrowthMomentum />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/PowerUpGrowthMomentum.tsx`

Struktur analog zu `PowerUpCACCrisis.tsx` mit 7 Sektionen:

### Section 1: Hero
- **Breadcrumb:** `Solutions > Power Up Growth Momentum`
- **Badge:** `Power Up · 4-6 Weeks · From €23.6K`
- **Headline:** `Growth Stalled → Back to Hypergrowth`
- **Subheadline:** Reignite your growth engine in 4-6 weeks...
- **Stats:** ARR Growth +30-60pp | Win Rate +30-50% | Pipeline +50-100%
- **Trust Badges:** Outcome-Based Risk Sharing, 4-6 Week Sprint, Reference Calls Available

### Section 2: Problem
- **Headline:** `Your Growth Has Stalled`
- **Symptome:**
  - Declining growth rate: 150% → 120% → 80% YoY
  - Stagnant pipeline: Same volume, lower conversion (35% → 22%)
  - Longer sales cycles: 45 days → 75 days
  - Lower win rates: 40% → 25%
  - Product-market fit concerns

### Section 3: Solution
- **Headline:** `How We Reignite Your Growth Engine`
- **3-Phasen-Ansatz:**
  - Week 1-2: Diagnose the Bottleneck (C₁, C₃ Assessment, PMF Analysis)
  - Week 2-4: Fix the Bottleneck (ICP, Sales Process, or PMF)
  - Week 4-6: Validate & Scale

### Section 4: Impact/Outcome
- **Metrics:**
  - ARR Growth +30-60pp (Beispiel: 80% → 130% YoY)
  - Win Rate +30-50% (Beispiel: 25% → 37%)
  - Pipeline +50-100% (Beispiel: €2M → €3.5M)
- **Real Example:** Series B SaaS Case Study

### Section 5: Process (How We Work)
- Week-by-Week Breakdown
- Time Commitment (8-12h, 12-16h, 6-8h)
- Outcome-Based Risk Sharing Details

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - ARR growth dropped from 100%+ to <80%
  - Series A-D, €10M-€50M ARR
  - Willing to execute (8-12 hours/week)
  - Budget: €23.6K
- **Not a Fit:**
  - Pre-revenue/pre-Series A
  - Needs full transformation (→ Boost/Accelerate)
  - Just wants strategy deck

### Section 7: Final CTA
- **Headline:** `Ready to Reignite Your Growth Engine?`
- **Primary CTA:** Book Free Inflection Call (30 min)
- **Secondary:** Expert Session Option (€490-€890)
- **FAQ:** Duration, Investment, Risk Sharing, References, ROI

---

## Technische Details

### Komponenten-Wiederverwendung
Die neue Landing Page verwendet die gleichen Patterns wie `PowerUpCACCrisis.tsx`:
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
│   └── solutionTiles.ts             # Kachel umbenennen
└── pages/
    ├── PowerUpCACCrisis.tsx         # Referenz-Template
    └── PowerUpGrowthMomentum.tsx    # NEU
```

### Breadcrumb-Pattern
Gemäß etablierter Logik:
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">Power Up Growth Momentum</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Zusammenfassung der Änderungen

| Datei | Änderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel umbenennen + CTA aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/PowerUpGrowthMomentum.tsx` | Neue Datei (7 Sektionen) |

