
# Plan: Boost Custom Program - Landing Page + Kachel-Update

## Briefing Review

### URL-Korrektur erforderlich

Das Briefing gibt `/solutions/boost-custom-program` an, aber gemaess etabliertem Pattern (analog zu anderen Boost Pages) sollte die URL lauten:

**Korrekt:** `/solutions/boost/custom-program`

### Metriken-Alignment: Kachel vs. Briefing

| Metrik | Aktuelle Kachel (ID 28) | Briefing | Empfehlung |
|--------|-------------------------|----------|------------|
| Headline | Boost: Custom Program | Boost: Custom Program | Behalten |
| Metrik 1 | Custom program design | Custom Metric 1: +100-150% | Briefing uebernehmen |
| Metrik 2 | Cross-functional execution | Custom Metric 2: +150-200% | Briefing uebernehmen |
| Metrik 3 | Integrated outcomes delivered | Custom Solution: Fully Built | Briefing uebernehmen |
| Duration | 8-10 weeks | 90 days (12 weeks) | Briefing uebernehmen |
| Price | EUR58K | EUR60K-EUR78K | Briefing uebernehmen |
| slug | boost-custom | boost-custom-program | Aktualisieren |

Die Metriken im Briefing sind outcome-fokussierter (messbare Verbesserungen statt qualitative Deliverables) und beinhalten die "2 of 3 Outcomes Guaranteed" Struktur konsistent mit anderen Boost Pages.

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 28, Zeilen 1056-1089)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | boost-custom | boost-custom-program |
| price | EUR58K | EUR60K-EUR78K |
| problemEn | "Your transformation needs span multiple domains..." | "Your problem is unique. Standard offerings don't work (CAC, NRR, Scaling, AI, Board solutions are close but not exact). You need a custom solution—but you don't have 12 months. You have 90 days to show results." |
| problemDe | (entsprechend) | (entsprechend) |
| solutionEn | "We design a custom multi-domain program for 8-10 weeks..." | "We design and build a custom solution tailored to your unique problem in 90 days: Custom Metric 1 +100-150%, Custom Metric 2 +150-200%, Custom Solution Fully Implemented - with 2 of 3 outcomes guaranteed." |
| solutionDe | (entsprechend) | (entsprechend) |
| deliverablesEn | [Custom program design, Cross-functional execution, Integrated outcomes] | [Custom Metric 1: +100-150%, Custom Metric 2: +150-200%, Custom Solution: Fully Built] |
| deliverablesDe | (entsprechend) | (entsprechend) |
| primaryCtaEn | Discuss Scope | More About Custom Program |
| primaryCtaDe | Scope besprechen | Mehr ueber Custom Program |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/boost/custom-program |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const BoostCustomProgram = lazy(() => import("./pages/BoostCustomProgram"));

// Route (nach anderen Boost-Routes, vor dem Catch-All):
<Route path="/solutions/boost/custom-program" element={<BoostCustomProgram />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/BoostCustomProgram.tsx`

Struktur analog zu `BoostPortfolioValue.tsx` und anderen Boost Pages mit 7 Sektionen:

### Section 1: Hero
- **Breadcrumb:** `Solutions > Boost Custom Program`
- **Badge:** `Boost . 90 Days . EUR60K-EUR78K`
- **Headline:** `Unique Problem -> Custom Solution Built`
- **Subheadline:** Build your custom solution in 90 days...
- **Stats:** Custom Metric 1 +100-150% | Custom Metric 2 +150-200% | Custom Solution Fully Built
- **Trust Badges:** 2 of 3 Outcomes Guaranteed (or 50% Refund), 90-Day Transformation, Reference Calls Available

### Section 2: Problem
- **Headline:** `Your Problem Doesn't Fit Standard Solutions`
- **Symptome:**
  - Unique problem: Not covered by standard offerings (CAC, NRR, Scaling, AI, Board)
  - Standard solutions don't work: Power Up/Boost for related problems don't fully fit
  - Time pressure: 90 days to show results (not 12 months)
  - No clear solution: Consultants say "it's complex" but don't deliver
  - Board/investor pressure: "Why can't we solve this?"

### Section 3: Solution
- **Headline:** `How We Build Your Custom Solution`
- **3-Phasen-Ansatz (90 Days):**
  - Week 1-2: Diagnose (Problem Definition, Gap Analysis, Custom Metrics Design, Success Criteria)
  - Week 3-8: Build (Custom Strategy C1, Custom Setup C2, Custom Execution C3, Optional Operationalization C4)
  - Week 9-12: Validate & Scale (Metrics Tracking, Team Training, Scale Playbook)

### Section 4: Impact/Outcome
- **Metrics:**
  - Custom Metric 1 +100-150% (defined during diagnose phase)
  - Custom Metric 2 +150-200% (defined during diagnose phase)
  - Custom Solution Fully Implemented (0% -> 100%)
- **Real Example:** Series B SaaS, EUR25M ARR, Hybrid PLG + Enterprise GTM, PLG Signups +120%, Enterprise Pipeline +180%, Hybrid GTM Engine 100% built

### Section 5: Process (How We Work)
- Week-by-Week Breakdown (90 Days)
- Time Commitment (12-16h, 20-30h, 10-15h)
- **2 of 3 Outcomes Guaranteed** (oder 50% Refund)
- Custom Metrics defined during Week 1-2
- ROI: 15-30x

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Unique problem (standard solutions don't work)
  - Can define problem clearly (root cause, not symptoms)
  - Series A-C, EUR10M-EUR50M ARR, 50-200 people
  - Willing to co-create (not just receive)
  - Budget: EUR60K-EUR78K
- **Not a Fit:**
  - Problem fits standard solution (-> Standard Boost offerings)
  - Can't define problem clearly (-> Inflection Call first)
  - Not ready to co-create (-> Traditional consulting)

### Section 7: Final CTA
- **Headline:** `Ready to Build Your Custom Solution?`
- **Primary CTA:** Book Free Inflection Call (30 min)
- **Secondary:** Custom Analysis (EUR3.9K-EUR5.9K)
- **FAQ:** Duration (90 days), Investment (EUR60K-EUR78K), Risk Sharing (2 of 3 guaranteed), References (CEOs with custom problems), ROI (15-30x), Difference to Standard Boost

---

## Technische Details

### Komponenten-Wiederverwendung
Die neue Landing Page verwendet die gleichen Patterns wie `BoostPortfolioValue.tsx`:
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
- **Scope:** Fully Custom Solution (Strategy + Setup + Execution + Optional Operationalization)

### Spezifische Icons fuer Custom Program
- `Sparkles` - Custom Solution / Unique
- `Target` - Custom Metrics / Success Criteria
- `Settings` - Custom Setup / Configuration
- `Zap` - Custom Execution
- `FileText` - Custom Playbooks / Documentation
- `Users` - Co-Creation / Collaboration
- `Shield` - Risk Sharing / Guarantee
- `Brain` - Problem Definition / Root Cause
- `Layers` - Multi-Domain / Cross-Functional
- `MessageCircle` - Inflection Call

### Dateistruktur
```text
src/
  App.tsx                              # Neue Route hinzufuegen
  data/
    solutionTiles.ts                   # Kachel ID 28: Slug + Metriken + CTA aktualisieren
  pages/
    BoostPortfolioValue.tsx            # Referenz fuer Section-Struktur
    BoostBoardExcellence.tsx           # Referenz fuer Section-Struktur
    BoostAIMaturity.tsx                # Referenz fuer Section-Struktur
    BoostCustomProgram.tsx             # NEU - Neunte Boost Page
```

### URL-Pattern
Gemaess etablierter Boost-Logik: `/solutions/boost/custom-program` (nicht `/solutions/boost-custom-program`)

### Breadcrumb-Pattern
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">Boost Custom Program</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Besonderheiten dieser Seite

### "Custom" als Kernkonzept
Diese Seite unterscheidet sich von allen anderen Boost-Seiten:
- **Kein Standard-Problem:** CAC, NRR, Scaling, AI, Board sind bereits abgedeckt
- **Unique Problem:** Nur fuer Probleme, die NICHT in Standard-Angebote passen
- **Co-Creation:** Kunde muss aktiv mitarbeiten (nicht nur empfangen)
- **Custom Metrics:** Werden erst in Week 1-2 definiert (nicht vorab bekannt)

### "Custom Metrics" Placeholder-Logik
Die Seite verwendet Platzhalter-Metriken, da echte Metriken erst definiert werden:
- Custom Metric 1 +100-150% (konkret erst nach Diagnose)
- Custom Metric 2 +150-200% (konkret erst nach Diagnose)
- Custom Solution Fully Built (0% -> 100%)

### Hybrid Example als Real-World Case
Das Briefing gibt ein konkretes Beispiel:
- **Problem:** Hybrid PLG + Enterprise GTM (passt nicht zu Standard CAC/NRR)
- **Custom Solution:** Hybrid GTM Engine (PLG Loops + Enterprise Motion)
- **Outcomes:** PLG Signups +120%, Enterprise Pipeline +180%

Dies zeigt, dass Custom Program fuer Business-Model-spezifische Probleme gedacht ist.

### Klare Abgrenzung zu Standard Boost
Die "Not a Fit" Section muss klar kommunizieren:
- Wenn CAC-Problem -> Efficient Hypergrowth oder Growth Engine
- Wenn NRR-Problem -> NRR Machine
- Wenn Scaling-Problem -> Scaling OS
- Wenn AI-Problem -> AI Maturity
- Wenn Board-Problem -> Board Excellence
- Wenn Portfolio-Problem -> Portfolio Value
- **Nur wenn NICHTS davon passt -> Custom Program**

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 28: Slug + Metriken + Price + CTA + Duration aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/BoostCustomProgram.tsx` | Neue Datei (7 Sektionen) - Neunte Boost Landing Page |
