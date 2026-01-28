

# Plan: Boost AI Maturity - Landing Page + Kachel-Umbenennung

## Briefing Review

### URL-Korrektur erforderlich

Das Briefing gibt `/solutions/boost-ai-maturity` an, aber gemaess etabliertem Pattern (analog zu anderen Boost Pages) sollte die URL lauten:

**Korrekt:** `/solutions/boost/ai-maturity`

### Umbenennung der Kachel

Die Kachel muss von "Boost: AI Foundation" zu "Boost: AI Maturity" umbenannt werden - ein staerkerer, outcome-fokussierter Name der den theta_index-Ansatz betont.

### Metriken-Alignment: Kachel vs. Briefing

| Metrik | Aktuelle Kachel (ID 25) | Briefing | Empfehlung |
|--------|-------------------------|----------|------------|
| Headline | Boost: AI Foundation | Boost: AI Maturity | Briefing uebernehmen |
| Metrik 1 | AI use-cases deployed: 3-5 | theta_index: +0.3-0.5 | Briefing uebernehmen |
| Metrik 2 | theta_index improvement: +0.2-0.3 | AI Use Cases: +10-20 | Briefing uebernehmen |
| Metrik 3 | AI roadmap (12 months) | Process Automation: +40-60% | Briefing uebernehmen |
| Duration | 8-10 weeks | 90 days (12 weeks) | Briefing uebernehmen |
| Price | EUR58K | EUR60K-EUR78K | Briefing uebernehmen |
| slug | boost-ai | boost-ai-maturity | Aktualisieren |

Die Metriken im Briefing sind aggressiver und beinhalten die "2 of 3 Outcomes Guaranteed" Struktur konsistent mit anderen Boost Pages.

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 25, Zeilen 955-987)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | boost-ai | boost-ai-maturity |
| headlineEn | Boost: AI Foundation | Boost: AI Maturity |
| headlineDe | Boost: AI-Foundation | Boost: AI Maturity |
| price | EUR58K | EUR60K-EUR78K |
| problemEn | "You want AI woven into your product and ops..." | "You're AI-Powered, not AI-Native. theta_index is 0.3 (Level 1), competitors are 0.8+ (Level 3). Time to EUR100M is 60-84 months (benchmark: 8-18 months). Board asking: When will we become AI-native?" |
| problemDe | (entsprechend) | (entsprechend) |
| solutionEn | "We build AI capability across multiple use-cases in 8-10 weeks..." | "We rebuild your entire AI maturity in 90 days: theta_index +0.3-0.5, AI Use Cases +10-20, Process Automation +40-60% - with 2 of 3 outcomes guaranteed." |
| solutionDe | (entsprechend) | (entsprechend) |
| deliverablesEn | [AI use-cases: 3-5, theta_index +0.2-0.3, AI roadmap] | [theta_index: +0.3-0.5, AI Use Cases: +10-20, Automation: +40-60%] |
| deliverablesDe | (entsprechend) | (entsprechend) |
| primaryCtaEn | Start Boost | More About AI Maturity |
| primaryCtaDe | Boost starten | Mehr ueber AI Maturity |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/boost/ai-maturity |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const BoostAIMaturity = lazy(() => import("./pages/BoostAIMaturity"));

// Route:
<Route path="/solutions/boost/ai-maturity" element={<BoostAIMaturity />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/BoostAIMaturity.tsx`

Struktur analog zu `BoostScalingOS.tsx` und anderen Boost Pages mit 7 Sektionen:

### Section 1: Hero
- **Breadcrumb:** `Solutions > Boost AI Maturity`
- **Badge:** `Boost . 90 Days . EUR60K-EUR78K`
- **Headline:** `AI-Powered -> AI-Native Built`
- **Subheadline:** Build your AI maturity in 90 days...
- **Stats:** theta_index +0.3-0.5 | AI Use Cases +10-20 | Automation +40-60%
- **Trust Badges:** 2 of 3 Outcomes Guaranteed (or 50% Refund), 90-Day Transformation, Reference Calls Available

### Section 2: Problem
- **Headline:** `You're AI-Powered, Not AI-Native`
- **Symptome:**
  - Low AI maturity: theta_index 0.3 (Level 1: AI-Powered)
  - Few AI use cases: 2-5 use cases (benchmark: 20-50+)
  - Low automation: 10-20% (benchmark: 60-80%+)
  - Slow time to market: 60-84 months to EUR100M (benchmark: 8-18 months)
  - Board pressure: "When will we become AI-native?"

### Section 3: Solution
- **Headline:** `How We Build Your AI Maturity`
- **3-Phasen-Ansatz (90 Days):**
  - Week 1-2: Diagnose (theta_index Assessment, AI Use Case Analysis, AI Capability Analysis, AI Readiness)
  - Week 3-8: Build (AI Strategy C1, AI Setup C2, AI Execution C3, AI Operationalization C4)
  - Week 9-12: Validate & Scale

### Section 4: Impact/Outcome
- **Metrics:**
  - theta_index +0.3-0.5 (Beispiel: 0.3 -> 0.6-0.8, Level 1 -> Level 2)
  - AI Use Cases +10-20 (Beispiel: 2-5 -> 15-25)
  - Process Automation +40-60% (Beispiel: 10-20% -> 50-80%)
- **Real Example:** Series B SaaS, EUR20M ARR, theta_index +0.42, AI Use Cases +14, Automation +52pp

### Section 5: Process (How We Work)
- Week-by-Week Breakdown (90 Days)
- Time Commitment (12-16h, 20-30h, 10-15h)
- **2 of 3 Outcomes Guaranteed** (oder 50% Refund)
- Primary Metrics: theta_index (0-1 scale), AI Use Cases (number), Process Automation (%)
- ROI: 20-40x

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - AI-Powered, not AI-Native (theta_index 0.2-0.5, Level 1)
  - Multiple AI problems (no AI strategy, limited use cases, low automation, slow adoption)
  - Series A-C, EUR10M-EUR50M ARR, 50-200 people
  - Budget: EUR60K-EUR78K
- **Not a Fit:**
  - Only needs AI tools (-> Power Up: AI Quick Wins for single use cases)
  - Needs full AI-native transformation Level 3 (-> Accelerate)
  - Just wants AI strategy deck

### Section 7: Final CTA
- **Headline:** `Ready to Build Your AI Maturity?`
- **Primary CTA:** Book Free Inflection Call (30 min)
- **Secondary:** AI Maturity Assessment (EUR3.9K-EUR5.9K)
- **FAQ:** Duration (90 days), Investment (EUR60K-EUR78K stage-based), Risk Sharing (2 of 3 guaranteed), References (CEOs), ROI (20-40x), Difference Boost vs. Accelerate

---

## Technische Details

### Komponenten-Wiederverwendung
Die neue Landing Page verwendet die gleichen Patterns wie `BoostScalingOS.tsx`:
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
- **Scope:** Full AI Maturity Rebuild (Strategy + Setup + Execution + Operationalization)

### Spezifische Icons fuer AI Maturity
- `Brain` - AI/theta_index
- `Layers` - AI Use Cases / Multi-Use-Case Deployment
- `Zap` - Automation
- `Target` - AI Strategy
- `Settings` - AI Setup
- `Rocket` - AI Execution
- `Users` - AI Team/Culture
- `BarChart3` - AI Metrics
- `Sparkles` - AI-Native Transformation

### Dateistruktur
```text
src/
  App.tsx                              # Neue Route hinzufuegen
  data/
    solutionTiles.ts                   # Kachel ID 25: Umbenennung + Metriken + CTA aktualisieren
  pages/
    BoostScalingOS.tsx                 # Referenz fuer Section-Struktur
    BoostNRRMachine.tsx                # Referenz fuer Section-Struktur
    BoostPricingDominance.tsx          # Referenz fuer Section-Struktur
    BoostAIMaturity.tsx                # NEU - Sechste Boost Page
```

### URL-Pattern
Gemaess etablierter Boost-Logik: `/solutions/boost/ai-maturity` (nicht `/solutions/boost-ai-maturity`)

### Breadcrumb-Pattern
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">Boost AI Maturity</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Besonderheiten dieser Seite

### theta_index-Framework als Kernkonzept
Diese Seite nutzt das theta_index-Framework (AI Maturity Index, 0-1 Skala) als Hauptmetrik:
- **Level 1 (0.0-0.4):** AI-Powered - AI als Tool
- **Level 2 (0.4-0.7):** AI-Enabled - AI als System
- **Level 3 (0.7-1.0):** AI-Native - AI als Core

### Transformation von Level 1 zu Level 2
Die Boost-Seite fokussiert auf die Transformation von Level 1 (AI-Powered) zu Level 2 (AI-Enabled). Fuer Level 3 (AI-Native) wird auf Accelerate (12 Monate) verwiesen.

### Alle 4 Capabilities (C1-C4) werden adressiert
Im Gegensatz zu anderen Boost-Seiten, die typischerweise 2-3 Capabilities transformieren, adressiert AI Maturity alle 4:
- C1: AI Strategy
- C2: AI Setup
- C3: AI Execution
- C4: AI Operationalization

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 25: Umbenennung zu "AI Maturity" + Slug + Metriken + Price + CTA + Duration aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/BoostAIMaturity.tsx` | Neue Datei (7 Sektionen) - Sechste Boost Landing Page |

