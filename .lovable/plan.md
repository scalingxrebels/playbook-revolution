

# Plan: Boost Efficient Hypergrowth - Landing Page + Kachel-Update

## Briefing Review

### URL-Korrektur erforderlich

Das Briefing gibt `/solutions/boost-efficient-hypergrowth` an, aber gemaess etabliertem Pattern (analog zu Power Up) sollte die URL lauten:

**Korrekt:** `/solutions/boost/efficient-hypergrowth`

Dies ist die ERSTE Boost-Landing Page - sie etabliert das URL-Pattern fuer alle weiteren Boost Pages.

### Metriken-Alignment: Kachel vs. Briefing

| Metrik | Aktuelle Kachel (ID 20) | Briefing | Empfehlung |
|--------|-------------------------|----------|------------|
| Metrik 1 | CAC reduction: -30-40% | CAC: -40-60% | Briefing uebernehmen |
| Metrik 2 | LTV/CAC: 4-6x | LTV/CAC: +100-200% | Briefing uebernehmen |
| Metrik 3 | Rule of 40: +15-25pp | Rule of 40: +20-40pp | Briefing uebernehmen |
| Duration | 8-10 weeks | 90 days (12 weeks) | Briefing uebernehmen |
| Price | EUR58K | EUR60K-EUR78K | Briefing uebernehmen |
| slug | boost-hypergrowth | boost-efficient-hypergrowth | Aktualisieren |

Die Metriken im Briefing sind aggressiver und beinhalten die "2 of 3 Outcomes Guaranteed" Struktur.

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 20, Zeilen 785-817)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | boost-hypergrowth | boost-efficient-hypergrowth |
| price | EUR58K | EUR60K-EUR78K |
| problemEn | "You're growing fast, but burning cash..." | "Your unit economics are broken. CAC has exploded, LTV/CAC has collapsed, Rule of 40 is at 10%. Board is asking: When will we achieve efficient growth?" |
| problemDe | (entsprechend) | (entsprechend) |
| solutionEn | "We build a scalable GTM engine in 8-10 weeks..." | "We rebuild your entire GTM engine in 90 days: CAC -40-60%, LTV/CAC +100-200%, Rule of 40 +20-40pp—with 2 of 3 outcomes guaranteed." |
| solutionDe | (entsprechend) | (entsprechend) |
| deliverablesEn | [CAC -30-40%, LTV/CAC 4-6x, Rule of 40 +15-25pp] | [CAC: -40-60%, LTV/CAC: +100-200%, Rule of 40: +20-40pp] |
| deliverablesDe | (entsprechend) | (entsprechend) |
| primaryCtaEn | Start Boost | More About Efficient Hypergrowth |
| primaryCtaDe | Boost starten | Mehr ueber Efficient Hypergrowth |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/boost/efficient-hypergrowth |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const BoostEfficientHypergrowth = lazy(() => import("./pages/BoostEfficientHypergrowth"));

// Route:
<Route path="/solutions/boost/efficient-hypergrowth" element={<BoostEfficientHypergrowth />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/BoostEfficientHypergrowth.tsx`

Struktur analog zu Power Up Pages mit 7 Sektionen, aber mit Boost-spezifischen Elementen:

### Section 1: Hero
- **Breadcrumb:** `Solutions > Boost Efficient Hypergrowth`
- **Badge:** `Boost . 90 Days . EUR60K-EUR78K` (statt Power Up Badge)
- **Headline:** `CAC Crisis -> Efficient Hypergrowth Engine Built`
- **Subheadline:** Build your efficient hypergrowth engine in 90 days...
- **Stats:** CAC -40-60% | LTV/CAC +100-200% | Rule of 40 +20-40pp
- **Trust Badges:** 2 of 3 Outcomes Guaranteed (or 50% Refund), 90-Day Transformation, Reference Calls Available

### Section 2: Problem
- **Headline:** `Your Unit Economics Are Broken`
- **Symptome:**
  - CAC explosion: EUR2K -> EUR5K+ (150% increase)
  - LTV/CAC collapse: 5x -> 2.5x (50% decline)
  - Rule of 40 crisis: 10% (benchmark: 40%+)
  - Magic Number broken: 0.5 (benchmark: 1.2+)
  - Board pressure: "When will we achieve efficient growth?"

### Section 3: Solution
- **Headline:** `How We Build Your Efficient Hypergrowth Engine`
- **3-Phasen-Ansatz (90 Days):**
  - Week 1-2: Diagnose (Unit Economics, GTM Audit, Capability Assessment, AI Readiness)
  - Week 3-8: Build (Strategic Foundation C1, Execution Excellence C3, Measurement System)
  - Week 9-12: Validate & Scale

### Section 4: Impact/Outcome
- **Metrics:**
  - CAC -40-60% (Beispiel: EUR5K -> EUR2K-EUR3K)
  - LTV/CAC +100-200% (Beispiel: 2.5x -> 6x-8x)
  - Rule of 40 +20-40pp (Beispiel: 10% -> 35-50%)
- **Real Example:** Series B SaaS, EUR20M ARR, CAC -52%, LTV/CAC +174%, Rule of 40 +28pp

### Section 5: Process (How We Work)
- Week-by-Week Breakdown (90 Days statt 4-6 Weeks)
- Time Commitment (12-16h, 20-30h, 10-15h)
- **2 of 3 Outcomes Guaranteed** (oder 50% Refund)
- Primary Metrics: CAC (EUR), LTV/CAC (ratio), Rule of 40 (%)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Unit economics broken (CAC explosion, LTV/CAC collapse)
  - Multiple GTM problems (ICP, positioning, sales process, pricing)
  - Series A-C, EUR10M-EUR50M ARR, 50-200 people
  - Budget: EUR60K-EUR78K
- **Not a Fit:**
  - Only one GTM bottleneck (-> Power Up)
  - Needs full AI-native transformation (-> Accelerate)
  - Just wants GTM strategy deck

### Section 7: Final CTA
- **Headline:** `Ready to Build Your Efficient Hypergrowth Engine?`
- **Primary CTA:** Book Free Inflection Call (30 min)
- **Secondary:** GTM Effectiveness Review (EUR3.9K-EUR5.9K)
- **FAQ:** Duration (90 days), Investment (EUR60K-EUR78K stage-based), Risk Sharing (2 of 3 guaranteed), References (CEOs), ROI (15-30x), Sales Team Training

---

## Technische Details

### Komponenten-Wiederverwendung
Die neue Landing Page verwendet die gleichen Patterns wie die Power Up Pages:
- `TwinklingStars` fuer Hero-Hintergrund
- `useParallaxLayers` fuer Parallax-Effekte
- `useScrollAnimation` fuer Scroll-basierte Animationen
- `Accordion` fuer FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Boost-spezifische Unterschiede zu Power Up
- **Badge:** "Boost" statt "Power Up"
- **Duration:** 90 Days statt 4-6 Weeks
- **Price:** EUR60K-EUR78K statt EUR23.6K
- **Guarantee:** "2 of 3 Outcomes Guaranteed (or 50% Refund)" statt "Outcome-Based Risk Sharing"
- **Scope:** Full GTM Engine Rebuild statt Single Bottleneck Fix

### Spezifische Icons fuer Efficient Hypergrowth
- `TrendingDown` - CAC Reduction
- `TrendingUp` - LTV/CAC Growth
- `BarChart3` - Rule of 40
- `Zap` - Efficiency
- `Target` - ICP/Positioning
- `Settings` - GTM Engine
- `Brain` - AI-Powered Tools
- `Rocket` - Hypergrowth

### Dateistruktur
```text
src/
  App.tsx                              # Neue Route hinzufuegen
  data/
    solutionTiles.ts                   # Kachel Slug + Metriken + CTA aktualisieren
  pages/
    PowerUpCACCrisis.tsx               # Referenz fuer Section-Struktur
    PowerUpCustomSprint.tsx            # Referenz fuer Section-Struktur
    BoostEfficientHypergrowth.tsx      # NEU - Erste Boost Page
```

### URL-Pattern (NEU fuer Boost)
Gemaess etablierter Power Up Logik: `/solutions/boost/efficient-hypergrowth` (nicht `/solutions/boost-efficient-hypergrowth`)

### Breadcrumb-Pattern
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">Boost Efficient Hypergrowth</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 20: Slug + Metriken + Price + CTA + Duration aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/BoostEfficientHypergrowth.tsx` | Neue Datei (7 Sektionen) - Erste Boost Landing Page |

