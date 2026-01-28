

# Plan: Boost Pricing Dominance - Landing Page + Kachel-Umbenennung

## Briefing Review

### URL-Korrektur erforderlich

Das Briefing gibt `/solutions/boost-pricing-dominance` an, aber gemaess etabliertem Pattern (analog zu anderen Boost Pages) sollte die URL lauten:

**Korrekt:** `/solutions/boost/pricing-dominance`

### Umbenennung der Kachel

Die Kachel muss von "Boost: Pricing Architecture" zu "Boost: Pricing Dominance" umbenannt werden - ein staerkerer, outcome-fokussierter Name.

### Metriken-Alignment: Kachel vs. Briefing

| Metrik | Aktuelle Kachel (ID 22) | Briefing | Empfehlung |
|--------|-------------------------|----------|------------|
| Headline | Boost: Pricing Architecture | Boost: Pricing Dominance | Briefing uebernehmen |
| Metrik 1 | Revenue increase: +20-35% | ARPU: +50-100% | Briefing uebernehmen |
| Metrik 2 | ARPU increase: +25-45% | Gross Margin: +15-20pp | Briefing uebernehmen |
| Metrik 3 | Pricing architecture deployed | Discounting: -30-50% | Briefing uebernehmen |
| Duration | 8-10 weeks | 90 days (12 weeks) | Briefing uebernehmen |
| Price | EUR58K | EUR60K-EUR78K | Briefing uebernehmen |
| slug | boost-pricing | boost-pricing-dominance | Aktualisieren |

Die Metriken im Briefing sind aggressiver und beinhalten die "2 of 3 Outcomes Guaranteed" Struktur konsistent mit anderen Boost Pages.

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 22, Zeilen 852-885)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | boost-pricing | boost-pricing-dominance |
| headlineEn | Boost: Pricing Architecture | Boost: Pricing Dominance |
| headlineDe | Boost: Pricing-Architektur | Boost: Pricing-Dominanz |
| price | EUR58K | EUR60K-EUR78K |
| problemEn | "Your pricing needs a complete overhaul..." | "Your pricing is broken. ARPU stagnated at EUR500, gross margin dropped to 50%, sales team discounting 30-50%. Board is asking: Why are we leaving money on the table?" |
| problemDe | (entsprechend) | (entsprechend) |
| solutionEn | "We redesign your entire pricing architecture in 8-10 weeks..." | "We rebuild your entire pricing architecture in 90 days: ARPU +50-100%, Gross Margin +15-20pp, Discounting -30-50%—with 2 of 3 outcomes guaranteed." |
| solutionDe | (entsprechend) | (entsprechend) |
| deliverablesEn | [Revenue +20-35%, ARPU +25-45%, Architecture deployed] | [ARPU: +50-100%, Gross Margin: +15-20pp, Discounting: -30-50%] |
| deliverablesDe | (entsprechend) | (entsprechend) |
| primaryCtaEn | Start Boost | More About Pricing Dominance |
| primaryCtaDe | Boost starten | Mehr ueber Pricing Dominance |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/boost/pricing-dominance |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const BoostPricingDominance = lazy(() => import("./pages/BoostPricingDominance"));

// Route:
<Route path="/solutions/boost/pricing-dominance" element={<BoostPricingDominance />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/BoostPricingDominance.tsx`

Struktur analog zu `BoostGrowthEngine.tsx` und `BoostEfficientHypergrowth.tsx` mit 7 Sektionen:

### Section 1: Hero
- **Breadcrumb:** `Solutions > Boost Pricing Dominance`
- **Badge:** `Boost . 90 Days . EUR60K-EUR78K`
- **Headline:** `Pricing Breakdown -> Pricing Dominance Built`
- **Subheadline:** Build your pricing dominance in 90 days...
- **Stats:** ARPU +50-100% | Margin +15-20pp | Discounting -30-50%
- **Trust Badges:** 2 of 3 Outcomes Guaranteed (or 50% Refund), 90-Day Transformation, Reference Calls Available

### Section 2: Problem
- **Headline:** `Your Pricing Is Broken`
- **Symptome:**
  - ARPU stagnation: EUR500 (benchmark: EUR1,000+)
  - Margin compression: 50% gross margin (benchmark: 75%+)
  - Excessive discounting: 30-50% discounts (benchmark: 10-15%)
  - Value metric unclear: Pricing not aligned to customer value
  - Board pressure: "Why are we leaving money on the table?"

### Section 3: Solution
- **Headline:** `How We Build Your Pricing Dominance`
- **3-Phasen-Ansatz (90 Days):**
  - Week 1-2: Diagnose (Pricing Analysis, Value Metric Analysis, Packaging Analysis, Willingness-to-Pay Research)
  - Week 3-8: Build (Pricing Strategy C1, Pricing Execution C3, Pricing Discipline)
  - Week 9-12: Validate & Scale

### Section 4: Impact/Outcome
- **Metrics:**
  - ARPU +50-100% (Beispiel: EUR500 -> EUR750-EUR1,000)
  - Gross Margin +15-20pp (Beispiel: 50% -> 65-70%)
  - Discounting -30-50% (Beispiel: 40% -> 10-15%)
- **Real Example:** Series B SaaS, EUR18M ARR, ARPU +78%, Gross Margin +18pp, Discounting -32pp

### Section 5: Process (How We Work)
- Week-by-Week Breakdown (90 Days)
- Time Commitment (12-16h, 20-30h, 10-15h)
- **2 of 3 Outcomes Guaranteed** (oder 50% Refund)
- Primary Metrics: ARPU (EUR), Gross Margin (%), Discounting (%)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Pricing broken (ARPU stagnation, margin compression, excessive discounting)
  - Multiple pricing problems (value metric, packaging, sales discipline)
  - Series A-C, EUR10M-EUR50M ARR, 50-200 people
  - Budget: EUR60K-EUR78K
- **Not a Fit:**
  - Only one pricing issue (-> Power Up)
  - Needs full revenue transformation (-> Accelerate)
  - Just wants pricing strategy deck

### Section 7: Final CTA
- **Headline:** `Ready to Build Your Pricing Dominance?`
- **Primary CTA:** Book Free Inflection Call (30 min)
- **Secondary:** Pricing & Packaging Review (EUR3.9K-EUR5.9K)
- **FAQ:** Duration (90 days), Investment (EUR60K-EUR78K stage-based), Risk Sharing (2 of 3 guaranteed), References (CEOs), ROI (20-40x), Customer Migration

---

## Technische Details

### Komponenten-Wiederverwendung
Die neue Landing Page verwendet die gleichen Patterns wie `BoostGrowthEngine.tsx`:
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
- **Scope:** Full Pricing Architecture Rebuild

### Spezifische Icons fuer Pricing Dominance
- `DollarSign` - ARPU
- `TrendingUp` - Margin Expansion
- `TrendingDown` - Discounting Reduction
- `Target` - Value Metric
- `Layers` - Packaging Strategy
- `Settings` - Pricing Execution
- `Shield` - Pricing Discipline
- `Users` - Sales Training

### Dateistruktur
```text
src/
  App.tsx                              # Neue Route hinzufuegen
  data/
    solutionTiles.ts                   # Kachel ID 22: Umbenennung + Metriken + CTA aktualisieren
  pages/
    BoostEfficientHypergrowth.tsx      # Referenz fuer Section-Struktur
    BoostGrowthEngine.tsx              # Referenz fuer Section-Struktur
    BoostPricingDominance.tsx          # NEU - Dritte Boost Page
```

### URL-Pattern
Gemaess etablierter Boost-Logik: `/solutions/boost/pricing-dominance` (nicht `/solutions/boost-pricing-dominance`)

### Breadcrumb-Pattern
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">Boost Pricing Dominance</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 22: Umbenennung zu "Pricing Dominance" + Slug + Metriken + Price + CTA + Duration aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/BoostPricingDominance.tsx` | Neue Datei (7 Sektionen) - Dritte Boost Landing Page |

