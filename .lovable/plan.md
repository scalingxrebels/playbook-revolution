

# Plan: Power Up Portfolio Performance - Landing Page + Kachel-Update

## Briefing Review

### URL-Korrektur erforderlich

Das Briefing gibt `/solutions/power-up-portfolio-performance` an, aber gemaess etabliertem Pattern sollte die URL lauten:

**Korrekt:** `/solutions/power-up/portfolio-performance`

### Kachel-Umbenennung

Die Kachel "Power Up: Portfolio Quick Win" (ID 18) wird umbenannt zu **"Power Up: Portfolio Performance"**.

### Metriken-Alignment: Kachel vs. Briefing

| Metrik | Aktuelle Kachel (ID 18) | Briefing | Empfehlung |
|--------|-------------------------|----------|------------|
| Metrik 1 | Portcos unblocked: 1-2 | Companies Fixed: 3-5 | Briefing uebernehmen |
| Metrik 2 | KPI improvement: +20-40% | Portfolio IRR: +5-10pp | Briefing uebernehmen |
| Metrik 3 | Intervention playbook delivered | Portfolio Value: +20-30% | Briefing uebernehmen |
| Duration | 30 days | 4-6 weeks | Briefing uebernehmen |
| slug | power-up-portfolio | power-up-portfolio-performance | Aktualisieren |

Die Metriken im Briefing sind umfassender und auf Portfolio-Ebene (nicht einzelne Portcos) - wir aktualisieren auf die Briefing-Werte.

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 18, Zeilen 712-745)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | power-up-portfolio | power-up-portfolio-performance |
| headlineEn | Power Up: Portfolio Quick Win | Power Up: Portfolio Performance |
| headlineDe | Power Up: Portfolio Quick Win | Power Up: Portfolio Performance |
| problemEn | "You need to move the needle on 1-2 portcos..." | "Your portfolio is underperforming. 5-10 companies stuck..." |
| problemDe | (entsprechend) | (entsprechend) |
| solutionEn | "...unblock 1-2 portcos in 30 days..." | "...transform 3-5 underperforming companies in 4-6 weeks..." |
| solutionDe | (entsprechend) | (entsprechend) |
| deliverablesEn | [1-2 portcos, +20-40% KPI, Playbook] | [3-5 Companies Fixed, Portfolio IRR +5-10pp, Portfolio Value +20-30%] |
| deliverablesDe | (entsprechend) | (entsprechend) |
| primaryCtaEn | Start Transformation | More About Portfolio Performance |
| primaryCtaDe | Transformation starten | Mehr ueber Portfolio Performance |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/power-up/portfolio-performance |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const PowerUpPortfolioPerformance = lazy(() => import("./pages/PowerUpPortfolioPerformance"));

// Route:
<Route path="/solutions/power-up/portfolio-performance" element={<PowerUpPortfolioPerformance />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/PowerUpPortfolioPerformance.tsx`

Struktur analog zu `PowerUpBoardReadiness.tsx` mit 7 Sektionen:

### Section 1: Hero
- **Breadcrumb:** `Solutions > Power Up Portfolio Performance`
- **Badge:** `Power Up . 4-6 Weeks . From EUR23.6K`
- **Headline:** `Portfolio Underperforming -> Value Creation Unlocked`
- **Subheadline:** Unlock portfolio value in 4-6 weeks...
- **Stats:** 3-5 Companies Fixed | Portfolio IRR +5-10pp | Portfolio Value +20-30%
- **Trust Badges:** Outcome-Based Risk Sharing, 4-6 Week Sprint, Reference Calls Available

### Section 2: Problem
- **Headline:** `Your Portfolio Is Underperforming`
- **Symptome:**
  - Low portfolio IRR: 15% (benchmark: 25%+)
  - 5-10 companies stuck: CAC crisis, scaling chaos, board pressure
  - Operating partner overwhelmed: 1 OP managing 20+ companies
  - No systematic approach: Ad-hoc support, no playbooks
  - LP pressure: "Why is portfolio performance so low?"

### Section 3: Solution
- **Headline:** `How We Unlock Portfolio Value`
- **3-Phasen-Ansatz:**
  - Week 1-2: Identify (Portfolio Assessment, Bottleneck Diagnosis, Impact Prioritization, Transformation Plan)
  - Week 2-4: Transform (3-5 companies parallel: CAC Crisis Fix, Scaling Chaos Fix, Board Pressure Fix)
  - Week 4-6: Measure & Scale

### Section 4: Impact/Outcome
- **Metrics:**
  - 3-5 Companies Transformed (Beispiel: Company A CAC -50%, Company B Decision Velocity +250%, Company C Board Confidence +27pp)
  - Portfolio IRR +5-10pp (Beispiel: 15% -> 22%)
  - Portfolio Value +20-30% (Beispiel: EUR100M -> EUR125M)
- **Real Example:** EUR500M AUM VC Firm, Portfolio IRR +8pp, Portfolio Value +28%

### Section 5: Process (How We Work)
- Week-by-Week Breakdown
- Time Commitment (8-12h, 12-16h, 6-8h)
- Outcome-Based Risk Sharing Details
- Primary Metrics: Companies Transformed (#), Portfolio IRR (%), Portfolio Value (EUR)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Portfolio IRR below target (15% vs. 25%)
  - 5-10 companies stuck
  - VC/PE firm with 10-50 portfolio companies, EUR200M-EUR2B AUM
  - Budget: EUR23.6K
- **Not a Fit:**
  - Fewer than 10 portfolio companies
  - Needs full portfolio transformation (-> Portfolio Transformation 12-18 months)
  - Just wants portfolio strategy deck

### Section 7: Final CTA
- **Headline:** `Ready to Unlock Portfolio Value?`
- **Primary CTA:** Book Free Inflection Call (30 min)
- **Secondary:** Portfolio Assessment (EUR3.9K-EUR5.9K)
- **FAQ:** Duration, Investment, Risk Sharing, References (GPs), ROI (100-500x), Operating Partner Training

---

## Technische Details

### Komponenten-Wiederverwendung
Die neue Landing Page verwendet die gleichen Patterns wie die anderen Power Up Pages:
- `TwinklingStars` fuer Hero-Hintergrund
- `useParallaxLayers` fuer Parallax-Effekte
- `useScrollAnimation` fuer Scroll-basierte Animationen
- `Accordion` fuer FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Spezifische Icons fuer Portfolio Performance
- `Briefcase` - Portfolio/VC/PE
- `TrendingUp` - IRR/Value Creation
- `Building2` - Portfolio Companies
- `Users` - Operating Partners
- `BarChart3` - Metrics/Dashboard
- `Target` - Bottleneck Diagnosis
- `Layers` - Parallel Transformation
- `PieChart` - Portfolio Allocation

### Dateistruktur
```text
src/
  App.tsx                              # Neue Route hinzufuegen
  data/
    solutionTiles.ts                   # Kachel umbenennen + CTA aktualisieren
  pages/
    PowerUpCACCrisis.tsx               # Referenz
    PowerUpGrowthMomentum.tsx          # Referenz
    PowerUpPricingPower.tsx            # Referenz
    PowerUpNRREngine.tsx               # Referenz
    PowerUpScalingVelocity.tsx         # Referenz
    PowerUpAIQuickWins.tsx             # Referenz
    PowerUpBoardReadiness.tsx          # Referenz
    PowerUpPortfolioPerformance.tsx    # NEU
```

### URL-Pattern
Gemaess etablierter Logik: `/solutions/power-up/portfolio-performance` (nicht `/solutions/power-up-portfolio-performance`)

### Breadcrumb-Pattern
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">Power Up Portfolio Performance</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 18: Umbenennung "Portfolio Quick Win" -> "Portfolio Performance" + Slug + Metriken + CTA + Duration aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/PowerUpPortfolioPerformance.tsx` | Neue Datei (7 Sektionen) |

