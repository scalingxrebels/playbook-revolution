

# Plan: Boost Portfolio Value - Landing Page + Kachel-Umbenennung

## Briefing Review

### URL-Korrektur erforderlich

Das Briefing gibt `/solutions/boost-portfolio-value` an, aber gemaess etabliertem Pattern (analog zu anderen Boost Pages) sollte die URL lauten:

**Korrekt:** `/solutions/boost/portfolio-value`

### Umbenennung der Kachel

Die Kachel muss von "Boost: Portfolio Lift" zu "Boost: Portfolio Value" umbenannt werden - ein staerkerer, outcome-fokussierter Name der den Wertschoepfungsansatz betont.

### Metriken-Alignment: Kachel vs. Briefing

| Metrik | Aktuelle Kachel (ID 27) | Briefing | Empfehlung |
|--------|-------------------------|----------|------------|
| Headline | Boost: Portfolio Lift | Boost: Portfolio Value | Briefing uebernehmen |
| Metrik 1 | Portcos lifted: 3-5 | Portfolio IRR: +30-50pp | Briefing uebernehmen |
| Metrik 2 | Avg. Rule of 40: +10-15pp | Portfolio Value: +50-100% | Briefing uebernehmen |
| Metrik 3 | Cross-portfolio playbook | Companies Transformed: 3-5 | Briefing uebernehmen |
| Duration | 8-10 weeks | 90 days (12 weeks) | Briefing uebernehmen |
| Price | EUR58K | EUR60K-EUR78K | Briefing uebernehmen |
| slug | boost-portfolio | boost-portfolio-value | Aktualisieren |

Die Metriken im Briefing sind deutlich aggressiver (Portfolio IRR +30-50pp statt Rule of 40 +10-15pp) und beinhalten die "2 of 3 Outcomes Guaranteed" Struktur konsistent mit anderen Boost Pages.

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 27, Zeilen 1022-1055)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | boost-portfolio | boost-portfolio-value |
| headlineEn | Boost: Portfolio Lift | Boost: Portfolio Value |
| headlineDe | Boost: Portfolio Lift | Boost: Portfolio Value |
| price | EUR58K | EUR60K-EUR78K |
| problemEn | "You need to move multiple portcos simultaneously..." | "Your portfolio is underperforming. Portfolio IRR is 15% (benchmark: 45%+). 5-10 companies struggling. No systematic support. LPs asking: Why is portfolio performance so weak?" |
| problemDe | (entsprechend) | (entsprechend) |
| solutionEn | "We lift 3-5 portcos in parallel in 8-10 weeks..." | "We rebuild your entire portfolio operating system in 90 days: Portfolio IRR +30-50pp, Portfolio Value +50-100%, 3-5 Companies Transformed - with 2 of 3 outcomes guaranteed." |
| solutionDe | (entsprechend) | (entsprechend) |
| deliverablesEn | [Portcos lifted: 3-5, Avg. Rule of 40: +10-15pp, Cross-portfolio playbook] | [Portfolio IRR: +30-50pp, Portfolio Value: +50-100%, Companies Transformed: 3-5] |
| deliverablesDe | (entsprechend) | (entsprechend) |
| primaryCtaEn | Start Boost | More About Portfolio Value |
| primaryCtaDe | Boost starten | Mehr ueber Portfolio Value |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/boost/portfolio-value |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const BoostPortfolioValue = lazy(() => import("./pages/BoostPortfolioValue"));

// Route (neben anderen Boost-Routes):
<Route path="/solutions/boost/portfolio-value" element={<BoostPortfolioValue />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/BoostPortfolioValue.tsx`

Struktur analog zu `BoostBoardExcellence.tsx` und anderen Boost Pages mit 7 Sektionen:

### Section 1: Hero
- **Breadcrumb:** `Solutions > Boost Portfolio Value`
- **Badge:** `Boost . 90 Days . EUR60K-EUR78K`
- **Headline:** `Portfolio Underperformance -> Portfolio Value Built`
- **Subheadline:** Build your portfolio value in 90 days...
- **Stats:** Portfolio IRR +30-50pp | Portfolio Value +50-100% | Companies Transformed 3-5
- **Trust Badges:** 2 of 3 Outcomes Guaranteed (or 50% Refund), 90-Day Transformation, Reference Calls Available

### Section 2: Problem
- **Headline:** `Your Portfolio Is Underperforming`
- **Symptome:**
  - Low portfolio IRR: 15% (benchmark: 45%+)
  - Stagnant portfolio value: Flat growth (benchmark: +100% annually)
  - Companies struggling: 5-10 companies (out of 15-20) below targets
  - No systematic support: Ad-hoc help, no playbooks, no operating team
  - LP pressure: "Why is portfolio performance so weak?"

### Section 3: Solution
- **Headline:** `How We Build Your Portfolio Value`
- **3-Phasen-Ansatz (90 Days):**
  - Week 1-2: Diagnose (Portfolio Assessment, Bottleneck Analysis, Prioritization, Playbook Design)
  - Week 3-8: Build (Parallel Transformation of 3-5 Companies: CAC Optimization, NRR Boost, AI Transformation, Custom)
  - Week 9-12: Validate & Scale (Playbook Documentation, Operating Team Training)

### Section 4: Impact/Outcome
- **Metrics:**
  - Portfolio IRR +30-50pp (Beispiel: 15% -> 45-65%)
  - Portfolio Value +50-100% (Beispiel: EUR150M -> EUR225M-EUR300M)
  - Companies Transformed 3-5 (Beispiel: 0 -> 3-5 systematic)
- **Real Example:** VC Firm, Series B focus, EUR200M AUM, Portfolio IRR +35pp, Portfolio Value +75%, Companies Transformed 3

### Section 5: Process (How We Work)
- Week-by-Week Breakdown (90 Days)
- Time Commitment (12-16h, 20-30h, 10-15h)
- **2 of 3 Outcomes Guaranteed** (oder 50% Refund)
- Primary Metrics: Portfolio IRR (%), Portfolio Value (EUR), Companies Transformed (#)
- ROI: 15-30x

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Portfolio underperforming (IRR 15%, benchmark: 45%+)
  - Multiple portfolio problems (no systematic support, no operating team, no playbooks)
  - Series A-C focused VC/PE, 10-30 portfolio companies, EUR100M-EUR500M AUM
  - Budget: EUR60K-EUR78K
- **Not a Fit:**
  - Only one company struggling (-> Power Up for single company fixes)
  - Needs full portfolio transformation 10-20 companies (-> Portfolio Transformation 12 months)
  - Just wants portfolio strategy deck

### Section 7: Final CTA
- **Headline:** `Ready to Build Your Portfolio Value?`
- **Primary CTA:** Book Free Inflection Call (30 min)
- **Secondary:** Portfolio Assessment (EUR3.9K-EUR5.9K)
- **FAQ:** Duration (90 days), Investment (EUR60K-EUR78K), Risk Sharing (2 of 3 guaranteed), References (GPs), ROI (15-30x), Work with Portfolio CEOs (yes, directly)

---

## Technische Details

### Komponenten-Wiederverwendung
Die neue Landing Page verwendet die gleichen Patterns wie `BoostBoardExcellence.tsx`:
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
- **Scope:** Full Portfolio Operating System (3-5 Companies Transformed in Parallel)

### Spezifische Icons fuer Portfolio Value
- `TrendingUp` - Portfolio IRR
- `BarChart3` - Portfolio Value / Metrics
- `Target` - Company Transformations
- `Users` - Portfolio CEOs / LPs
- `Layers` - Parallel Transformations
- `FileText` - Playbooks / Documentation
- `Shield` - Risk Sharing
- `Sparkles` - Value Creation
- `Zap` - Systematic Execution
- `Brain` - Portfolio Intelligence

### Dateistruktur
```text
src/
  App.tsx                              # Neue Route hinzufuegen
  data/
    solutionTiles.ts                   # Kachel ID 27: Umbenennung + Metriken + CTA aktualisieren
  pages/
    BoostBoardExcellence.tsx           # Referenz fuer Section-Struktur
    BoostAIMaturity.tsx                # Referenz fuer Section-Struktur
    BoostScalingOS.tsx                 # Referenz fuer Section-Struktur
    BoostPortfolioValue.tsx            # NEU - Achte Boost Page
```

### URL-Pattern
Gemaess etablierter Boost-Logik: `/solutions/boost/portfolio-value` (nicht `/solutions/boost-portfolio-value`)

### Breadcrumb-Pattern
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">Boost Portfolio Value</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Besonderheiten dieser Seite

### Portfolio-fokussierter ICP (VC/PE Firms, nicht einzelne Unternehmen)
Diese Seite adressiert einen anderen ICP als die anderen Boost-Seiten:
- **Zielgruppe:** VC/PE Firms (Series A-C Fokus)
- **AUM:** EUR100M-EUR500M
- **Portfolio:** 10-30 Unternehmen
- **Stakeholder:** GPs und LPs (nicht CEOs)

### Parallel Transformation (3-5 Companies gleichzeitig)
Differenzierung durch parallele Execution:
- Nicht sequentiell (1 nach 1)
- 3-5 Companies gleichzeitig transformiert
- Verschiedene Transformationstypen pro Company (CAC, NRR, AI, Custom)
- Cross-Portfolio Learnings und Playbooks

### Portfolio Heatmap Framework
Proprietaeres Framework fuer Portfolio-Analyse:
- theta_index Assessment pro Company
- Rule of 40 Tracking
- Growth Rate Monitoring
- Bottleneck Identification
- Prioritization Matrix (Impact vs. Effort)

### LP Confidence als Kernthema
Die Seite adressiert stark den LP-Druck:
- Fund II Raising Pressure
- Portfolio Performance Expectations
- Competitive VC Landscape (Operating Teams)
- Exit Multiple Optimization

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 27: Umbenennung zu "Portfolio Value" + Slug + Metriken + Price + CTA + Duration aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/BoostPortfolioValue.tsx` | Neue Datei (7 Sektionen) - Achte Boost Landing Page |

