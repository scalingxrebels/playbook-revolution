

# Plan: Power Up Board Readiness - Landing Page + Kachel-Update

## Briefing Review

### URL-Korrektur erforderlich

Das Briefing gibt `/solutions/power-up-board-readiness` an, aber gemaess etabliertem Pattern sollte die URL lauten:

**Korrekt:** `/solutions/power-up/board-readiness`

### Kachel-Umbenennung

Die Kachel "Power Up: Board Ready" (ID 17) wird umbenannt zu **"Power Up: Board Readiness"**.

### Metriken-Alignment: Kachel vs. Briefing

| Metrik | Aktuelle Kachel (ID 17) | Briefing | Empfehlung |
|--------|-------------------------|----------|------------|
| Metrik 1 | Board Satisfaction: +30-50% | Board Confidence: +20-30pp | Briefing uebernehmen |
| Metrik 2 | Meeting Efficiency: +20-40% | Board Prep Time: -50-70% | Briefing uebernehmen |
| Metrik 3 | Strategic Alignment: +20-30% | Rule of 40: +10-20pp | Briefing uebernehmen |
| Duration | 30 days | 4-6 weeks | Briefing uebernehmen |
| slug | power-up-board | power-up-board-readiness | Aktualisieren |

Die Metriken im Briefing sind spezifischer und messbarer - wir aktualisieren auf die Briefing-Werte.

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 17, Zeilen 679-711)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | power-up-board | power-up-board-readiness |
| headlineEn | Power Up: Board Ready | Power Up: Board Readiness |
| headlineDe | Power Up: Board Ready | Power Up: Board Readiness |
| solutionEn | "...in 30 days..." | "...in 4-6 weeks..." |
| solutionDe | "...in 30 Tagen..." | "...in 4-6 Wochen..." |
| deliverablesEn | Board satisfaction +30-50%, Meeting efficiency +20-40%, Strategic alignment +20-30% | Board Confidence: +20-30pp, Board Prep Time: -50-70%, Rule of 40: +10-20pp |
| deliverablesDe | (entsprechend) | (entsprechend) |
| primaryCtaEn | Start Transformation | More About Board Readiness |
| primaryCtaDe | Transformation starten | Mehr ueber Board Readiness |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/power-up/board-readiness |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const PowerUpBoardReadiness = lazy(() => import("./pages/PowerUpBoardReadiness"));

// Route:
<Route path="/solutions/power-up/board-readiness" element={<PowerUpBoardReadiness />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/PowerUpBoardReadiness.tsx`

Struktur analog zu `PowerUpScalingVelocity.tsx` mit 7 Sektionen:

### Section 1: Hero
- **Breadcrumb:** `Solutions > Power Up Board Readiness`
- **Badge:** `Power Up . 4-6 Weeks . From EUR23.6K`
- **Headline:** `Board Pressure -> Board Confidence Restored`
- **Subheadline:** Get board-ready in 4-6 weeks...
- **Stats:** Board Confidence +20-30pp | Board Prep Time -50-70% | Rule of 40 +10-20pp
- **Trust Badges:** Outcome-Based Risk Sharing, 4-6 Week Sprint, Reference Calls Available

### Section 2: Problem
- **Headline:** `Your Board Is Losing Confidence`
- **Symptome:**
  - Low board confidence: 40-60% (benchmark: 80%+)
  - Long board prep: 5-7 days/quarter (benchmark: 24-48h)
  - Poor Rule of 40: 10% (benchmark: 40%+)
  - No board framework: Ad-hoc reporting
  - Valuation discount: 30-40% below peers

### Section 3: Solution
- **Headline:** `How We Restore Board Confidence`
- **3-Phasen-Ansatz:**
  - Week 1-2: Diagnose (Board Confidence, Rule of 40, Board Prep, Governance Analysis)
  - Week 2-4: Build (Strategic Narrative, Rule of 40 Improvement, Board Reporting System)
  - Week 4-6: Validate & Prepare

### Section 4: Impact/Outcome
- **Metrics:**
  - Board Confidence +20-30pp (Beispiel: 50% -> 75%)
  - Board Prep Time -50-70% (Beispiel: 5-7d -> 24-48h)
  - Rule of 40 +10-20pp (Beispiel: 10% -> 25%)
- **Real Example:** Series B SaaS, EUR30M ARR, Board Confidence +28pp

### Section 5: Process (How We Work)
- Week-by-Week Breakdown
- Time Commitment (8-12h, 12-16h, 6-8h)
- Outcome-Based Risk Sharing Details
- Primary Metrics: Board Confidence (%), Rule of 40 (%), Board Prep Time (days)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Board confidence is low (40-60%, trending down)
  - Board prep takes too long (5-7 days/quarter)
  - Series A-D, EUR10M-EUR50M ARR
  - Budget: EUR23.6K
- **Not a Fit:**
  - Don't have a board (pre-Series A)
  - Needs full governance transformation (-> Boost/Accelerate)
  - Just wants board strategy deck

### Section 7: Final CTA
- **Headline:** `Ready to Restore Board Confidence?`
- **Primary CTA:** Book Free Inflection Call (30 min)
- **Secondary:** Expert Session: Board Governance (EUR490-EUR890)
- **FAQ:** Duration, Investment, Risk Sharing, References (CEOs), ROI, Board Work

---

## Technische Details

### Komponenten-Wiederverwendung
Die neue Landing Page verwendet die gleichen Patterns wie die anderen Power Up Pages:
- `TwinklingStars` fuer Hero-Hintergrund
- `useParallaxLayers` fuer Parallax-Effekte
- `useScrollAnimation` fuer Scroll-basierte Animationen
- `Accordion` fuer FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Spezifische Icons fuer Board Readiness
- `Users` - Board/Stakeholders
- `TrendingUp` - Confidence/Rule of 40
- `Clock` - Board Prep Time
- `BarChart3` - Metrics/Dashboard
- `FileText` - Board Materials/Narrative
- `Shield` - Governance Framework
- `Target` - Strategic Clarity

### Dateistruktur
```text
src/
  App.tsx                          # Neue Route hinzufuegen
  data/
    solutionTiles.ts             # Kachel umbenennen + CTA aktualisieren
  pages/
    PowerUpCACCrisis.tsx         # Referenz
    PowerUpGrowthMomentum.tsx    # Referenz
    PowerUpPricingPower.tsx      # Referenz
    PowerUpNRREngine.tsx         # Referenz
    PowerUpScalingVelocity.tsx   # Referenz
    PowerUpAIQuickWins.tsx       # Referenz
    PowerUpBoardReadiness.tsx    # NEU
```

### URL-Pattern
Gemaess etablierter Logik: `/solutions/power-up/board-readiness` (nicht `/solutions/power-up-board-readiness`)

### Breadcrumb-Pattern
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">Power Up Board Readiness</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 17: Umbenennung "Board Ready" -> "Board Readiness" + Slug + Metriken + CTA + Duration aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/PowerUpBoardReadiness.tsx` | Neue Datei (7 Sektionen) |
