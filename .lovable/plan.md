

# Plan: Power Up Custom Sprint - Landing Page + Kachel-Update

## Briefing Review

### URL-Korrektur erforderlich

Das Briefing gibt `/solutions/power-up-custom-sprint` an, aber gemaess etabliertem Pattern sollte die URL lauten:

**Korrekt:** `/solutions/power-up/custom-sprint`

### Metriken-Alignment: Kachel vs. Briefing

| Metrik | Aktuelle Kachel (ID 19) | Briefing | Empfehlung |
|--------|-------------------------|----------|------------|
| Metrik 1 | Custom scope design | Bottleneck Fixed (✓ Identified) | Briefing uebernehmen |
| Metrik 2 | 3 guaranteed outcomes | Solution Deployed (✓ Deployed) | Briefing uebernehmen |
| Metrik 3 | Transition + handoff playbook | ROI Delivered (2-5x) | Briefing uebernehmen |
| Duration | 30 days | 4-6 weeks | Briefing uebernehmen |
| slug | power-up-custom | power-up-custom-sprint | Aktualisieren |

Die Metriken im Briefing sind klarer und outcome-fokussiert - wir aktualisieren auf die Briefing-Werte.

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 19, Zeilen 746-779)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | power-up-custom | power-up-custom-sprint |
| problemEn | "Your bottleneck doesn't fit a standard track. You need a bespoke 30-day sprint." | "Your challenge is unique. It's not CAC crisis, not scaling chaos, not board pressure. Standard solutions don't fit your unique business model." |
| problemDe | (entsprechend) | (entsprechend) |
| solutionEn | "We design a custom sprint around your unique constraint. 30 days..." | "We diagnose your unique bottleneck and build a custom solution in 4-6 weeks..." |
| solutionDe | (entsprechend) | (entsprechend) |
| deliverablesEn | [Custom scope design, 3 guaranteed outcomes, Transition + handoff playbook] | [Custom Bottleneck Fixed, Custom Solution Deployed, ROI: 2-5x] |
| deliverablesDe | (entsprechend) | (entsprechend) |
| primaryCtaEn | Discuss Scope | More About Custom Sprint |
| primaryCtaDe | Scope besprechen | Mehr ueber Custom Sprint |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/power-up/custom-sprint |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const PowerUpCustomSprint = lazy(() => import("./pages/PowerUpCustomSprint"));

// Route:
<Route path="/solutions/power-up/custom-sprint" element={<PowerUpCustomSprint />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/PowerUpCustomSprint.tsx`

Struktur analog zu `PowerUpPortfolioPerformance.tsx` mit 7 Sektionen:

### Section 1: Hero
- **Breadcrumb:** `Solutions > Power Up Custom Sprint`
- **Badge:** `Power Up . 4-6 Weeks . From EUR23.6K`
- **Headline:** `Unique Bottleneck -> Custom Solution Deployed`
- **Subheadline:** Fix your unique challenge in 4-6 weeks...
- **Stats:** Bottleneck Fixed (✓ Identified, Week 1-2) | Solution Live (✓ Deployed, Week 2-4) | ROI Delivered (2-5x, Predicted)
- **Trust Badges:** Outcome-Based Risk Sharing, 4-6 Week Sprint, Reference Calls Available

### Section 2: Problem
- **Headline:** `Your Challenge Doesn't Fit Standard Solutions`
- **Symptome:**
  - Unique business model: Your GTM doesn't fit standard B2B SaaS playbooks
  - Unique market: Your industry has specific constraints (regulated, complex)
  - Unique product: Your product requires custom go-to-market approach
  - Unique bottleneck: Your #1 constraint isn't covered by standard offerings
  - No clear solution: Standard consultants don't understand your problem

### Section 3: Solution
- **Headline:** `How We Build Your Custom Solution`
- **3-Phasen-Ansatz:**
  - Week 1-2: Diagnose (Business Model Analysis, Market Analysis, Bottleneck Diagnosis, Solution Design)
  - Week 2-4: Build (Option A: Custom GTM Playbook, Option B: Custom Operations System, Option C: Custom Product Strategy)
  - Week 4-6: Validate & Scale

### Section 4: Impact/Outcome
- **Metrics:**
  - Custom Bottleneck Fixed (Beispiel: From "stuck" to "scaling" in 30 days)
  - Custom Solution Deployed (Beispiel: Repeatable, scalable solution)
  - ROI: 2-5x (Beispiel: EUR23.6K -> EUR50K-EUR120K return)
- **Real Example:** Series B FinTech, EUR25M ARR, Custom GTM playbook, Sales Cycle -40%, Win Rate +25pp, 3x ROI

### Section 5: Process (How We Work)
- Week-by-Week Breakdown
- Time Commitment (8-12h, 12-16h, 6-8h)
- Outcome-Based Risk Sharing Details
- Primary Metrics: Custom Bottleneck Fixed (✓/✗), Custom Solution Deployed (✓/✗), ROI Delivered (2-5x)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Challenge is unique (standard solutions don't fit)
  - Unique bottleneck (GTM, operations, or product)
  - Series A-D, EUR10M-EUR50M ARR, 50-200 people
  - Budget: EUR23.6K
- **Not a Fit:**
  - Challenge fits a standard solution (-> Standard Power Up)
  - Needs full custom transformation (-> Boost/Accelerate Custom)
  - Just wants custom strategy deck

### Section 7: Final CTA
- **Headline:** `Ready to Build Your Custom Solution?`
- **Primary CTA:** Book Free Inflection Call (30 min)
- **Secondary:** Expert Session: Custom Challenge (EUR490-EUR890)
- **FAQ:** Duration, Investment, Risk Sharing, References (CEOs with similar challenges), ROI (2-5x), Unique Challenges (FinTech, B2B2C, vertical SaaS)

---

## Technische Details

### Komponenten-Wiederverwendung
Die neue Landing Page verwendet die gleichen Patterns wie die anderen Power Up Pages:
- `TwinklingStars` fuer Hero-Hintergrund
- `useParallaxLayers` fuer Parallax-Effekte
- `useScrollAnimation` fuer Scroll-basierte Animationen
- `Accordion` fuer FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Spezifische Icons fuer Custom Sprint
- `Puzzle` - Custom/Unique
- `Target` - Bottleneck Fixed
- `Rocket` - Solution Deployed
- `TrendingUp` - ROI
- `Wrench` - Custom Build
- `Settings` - Custom Operations
- `Lightbulb` - Custom Strategy
- `Layers` - Custom GTM

### Dateistruktur
```text
src/
  App.tsx                           # Neue Route hinzufuegen
  data/
    solutionTiles.ts                # Kachel Slug + Metriken + CTA aktualisieren
  pages/
    PowerUpCACCrisis.tsx            # Referenz
    PowerUpGrowthMomentum.tsx       # Referenz
    PowerUpPricingPower.tsx         # Referenz
    PowerUpNRREngine.tsx            # Referenz
    PowerUpScalingVelocity.tsx      # Referenz
    PowerUpAIQuickWins.tsx          # Referenz
    PowerUpBoardReadiness.tsx       # Referenz
    PowerUpPortfolioPerformance.tsx # Referenz
    PowerUpCustomSprint.tsx         # NEU
```

### URL-Pattern
Gemaess etablierter Logik: `/solutions/power-up/custom-sprint` (nicht `/solutions/power-up-custom-sprint`)

### Breadcrumb-Pattern
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">Power Up Custom Sprint</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 19: Slug + Metriken + CTA + Duration aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/PowerUpCustomSprint.tsx` | Neue Datei (7 Sektionen) |

