

# Plan: Power Up Scaling Velocity - Landing Page + Kachel-Update

## Übersicht

Umsetzung analog zu den bestehenden Power Up Landing Pages:
1. Kachel-Update und Umbenennung in solutionTiles.ts (ID 15)
2. Neue Route in App.tsx
3. Neue Landing Page erstellen

---

## URL-Korrektur

Das Briefing gibt `/solutions/power-up-scaling-velocity` an, aber gemäß etabliertem Pattern sollte die URL lauten:

**Korrekt:** `/solutions/power-up/scaling-velocity`

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 15, Zeilen 610-643)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | power-up-scaling | power-up-scaling-velocity |
| headlineEn | Power Up: Scaling Ready | Power Up: Scaling Velocity |
| headlineDe | Power Up: Scaling Ready | Power Up: Scaling Velocity |
| solutionEn | "...in 30 days..." | "...in 4-6 weeks..." |
| solutionDe | "...in 30 Tagen..." | "...in 4-6 Wochen..." |
| deliverablesEn | ARR/Employee: +20-40%, Operational Debt: -30-50%, Team Velocity: +20-30% | Decision Velocity: +50-100%, Operational Debt: -15-25pp, ARR/Employee: +30-50% |
| deliverablesDe | (entsprechend) | (entsprechend) |
| primaryCtaEn | Start Transformation | More About Scaling Velocity |
| primaryCtaDe | Transformation starten | Mehr über Scaling Velocity |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/power-up/scaling-velocity |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const PowerUpScalingVelocity = lazy(() => import("./pages/PowerUpScalingVelocity"));

// Route:
<Route path="/solutions/power-up/scaling-velocity" element={<PowerUpScalingVelocity />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/PowerUpScalingVelocity.tsx`

Struktur analog zu `PowerUpNRREngine.tsx` mit 7 Sektionen:

### Section 1: Hero
- **Breadcrumb:** `Solutions > Power Up Scaling Velocity`
- **Badge:** `Power Up · 4-6 Weeks · From €23.6K`
- **Headline:** `Scaling Chaos → 10x Ready`
- **Subheadline:** Unlock your scaling velocity in 4-6 weeks...
- **Stats:** Decision Velocity +50-100% | Operational Debt -15-25pp | ARR/Employee +30-50%
- **Trust Badges:** Outcome-Based Risk Sharing, 4-6 Week Sprint, Reference Calls Available

### Section 2: Problem
- **Headline:** `You're Stuck in Scaling Chaos`
- **Symptome:**
  - Decision velocity collapsed: 1 day → 7 days (7x slower)
  - Meeting overload: 10/week → 30/week (+200%)
  - Operational debt high: 50%+
  - ARR/Employee dropping: €200K → €150K (-25%)
  - Coordination chaos: 5 tools → 25 tools

### Section 3: Solution
- **Headline:** `How We Unlock Your Scaling Velocity`
- **3-Phasen-Ansatz:**
  - Week 1-2: Diagnose (Decision Velocity, Operational Debt, Coordination, Efficiency Analysis)
  - Week 2-4: Fix (Decision Framework, Process Standardization, or Org Design)
  - Week 4-6: Validate & Scale

### Section 4: Impact/Outcome
- **Metrics:**
  - Decision Velocity +50-100% (Beispiel: 7d → 2-3d)
  - Operational Debt -15-25pp (Beispiel: 50% → 30%)
  - ARR/Employee +30-50% (Beispiel: €150K → €200K)
- **Real Example:** Series B SaaS, €30M ARR, Decision Velocity +67%

### Section 5: Process (How We Work)
- Week-by-Week Breakdown
- Time Commitment (8-12h, 12-16h, 6-8h)
- Outcome-Based Risk Sharing Details
- Primary Metrics: Decision Velocity (days), Operational Debt (%), ARR/Employee (€)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Team grew 50 → 100+, but velocity dropped 50%
  - Decision velocity collapsed (1 day → 7 days)
  - Series A-D, €10M-€50M ARR
  - Budget: €23.6K
- **Not a Fit:**
  - Pre-revenue/pre-Series A
  - Needs full operations transformation (→ Boost/Accelerate)
  - Just wants strategy deck

### Section 7: Final CTA
- **Headline:** `Ready to Unlock Your Scaling Velocity?`
- **Primary CTA:** Book Free Inflection Call (30 min)
- **Secondary:** Expert Session: Scaling Velocity (€490-€890)
- **FAQ:** Duration, Investment, Risk Sharing, References (COOs), ROI, Tool Integration (Notion, Confluence, Asana, Monday.com)

---

## Technische Details

### Komponenten-Wiederverwendung
Die neue Landing Page verwendet die gleichen Patterns wie die anderen Power Up Pages:
- `TwinklingStars` für Hero-Hintergrund
- `useParallaxLayers` für Parallax-Effekte
- `useScrollAnimation` für Scroll-basierte Animationen
- `Accordion` für FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Spezifische Icons für Scaling Velocity
- `Zap` - Decision Velocity
- `FileText` - Operational Debt / Process Documentation
- `Users` - Team/Coordination
- `TrendingUp` - ARR/Employee
- `Settings` - Org Design/Operations
- `Clock` - Meetings/Time

### Dateistruktur
```text
src/
├── App.tsx                          # Neue Route hinzufügen
├── data/
│   └── solutionTiles.ts             # Kachel umbenennen + CTA aktualisieren
└── pages/
    ├── PowerUpCACCrisis.tsx         # Referenz
    ├── PowerUpGrowthMomentum.tsx    # Referenz
    ├── PowerUpPricingPower.tsx      # Referenz
    ├── PowerUpNRREngine.tsx         # Referenz
    └── PowerUpScalingVelocity.tsx   # NEU
```

### URL-Pattern
Gemäß etablierter Logik: `/solutions/power-up/scaling-velocity` (nicht `/solutions/power-up-scaling-velocity`)

### Breadcrumb-Pattern
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">Power Up Scaling Velocity</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Zusammenfassung der Änderungen

| Datei | Änderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 15: Umbenennung "Scaling Ready" → "Scaling Velocity" + CTA + Duration + Metriken aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/PowerUpScalingVelocity.tsx` | Neue Datei (7 Sektionen) |

