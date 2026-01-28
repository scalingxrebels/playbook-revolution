

# Plan: VC Due Diligence Simulation - Landing Page + Kachel-Update

## Briefing Review

### Wichtige Feststellungen

**1. URL-Korrektur erforderlich:**
Das Briefing gibt `/solutions/vc-due-diligence-simulation` an. Da dies eine Decision Support Seite ist (nicht Transformation), ist ein Top-Level URL korrekt. Allerdings sollte der Slug konsistent sein:

- **Aktueller Slug (ID 8):** `vc-dd-simulation`
- **Briefing URL:** `/solutions/vc-due-diligence-simulation`
- **Empfehlung:** `/solutions/vc-dd-simulation` (konsistent mit bestehendem Slug)

**2. Preis-Diskrepanz:**

| Quelle | Preis |
|--------|-------|
| Aktuelle Kachel (ID 8) | €3.9K-€5.9K |
| Briefing Base | €5.9K |
| Briefing + Execution Bridge | €9.8K |

**Analyse:** Das Briefing vereinfacht auf €5.9K (Base) mit optionalem +€3.9K (Execution Bridge). Die aktuelle Kachel zeigt €3.9K-€5.9K.

**Empfehlung:** Kachel auf €5.9K aktualisieren (Base-Preis, nicht Range)

**3. Duration-Aenderung:**

| Quelle | Duration |
|--------|----------|
| Aktuelle Kachel | 5-7 days |
| Briefing | 1-2 Weeks |

**Empfehlung:** Briefing uebernehmen (1-2 Weeks)

**4. Report-Laenge:**

| Quelle | Report |
|--------|--------|
| Aktuelle Kachel | 15-20 pages |
| Briefing | 30-40 pages |

**Empfehlung:** Briefing uebernehmen (30-40 pages = Board-Ready Quality)

### Metriken-Alignment: Aktuelle Kachel (ID 8) vs. Briefing

| Feld | Aktuelle Kachel (ID 8) | Briefing | Empfehlung |
|------|-------------------------|----------|------------|
| slug | vc-dd-simulation | vc-due-diligence-simulation | Aktuell behalten (kuerzer) |
| price | €3.9K-€5.9K | €5.9K | Briefing uebernehmen |
| Duration | 5-7 days | 1-2 Weeks | Briefing uebernehmen |
| Report | 15-20 pages | 30-40 pages | Briefing uebernehmen |
| Metrik 1 | DD simulation report | Red Flags Fixed: 100% | Briefing uebernehmen |
| Metrik 2 | Red flag mitigation plan | DD Readiness: 0% → 100% | Briefing uebernehmen |
| Metrik 3 | Q&A prep (50-100 questions) | Fundraising Rate: +40-60pp | Briefing uebernehmen |
| Execution Bridge | +€2K | +€3.9K | Briefing uebernehmen |

**Positionierungsaenderung:** Die Briefing-Version ist outcome-fokussiert:
- **Alt:** Deliverable-fokussiert (report, mitigation plan, Q&A)
- **Neu:** Outcome-fokussiert (Red Flags Fixed, DD Readiness, Fundraising Success)

### Unterscheidung zu anderen Solution Types

| Aspekt | Transformation (Power Up/Boost/Accelerate) | Decision Support (DD Simulation) |
|--------|------------------------------------------|--------------------------------|
| Modell | Projekt-basiert (Transformation) | Produkt-basiert (Report) |
| Fokus | Hands-on Implementation | Analysis + Report |
| Zeitraum | 30 Tage - 12 Monate | 1-2 Weeks |
| Outcome | Transformation abgeschlossen | DD-Readiness Report |
| Guarantee | 2 of 3 Outcomes | Quality Guarantee (Board-Ready Report) |

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 8, Zeilen 353-391)

| Feld | Aktuell | Neu |
|------|---------|-----|
| price | €3.9K-€5.9K | €5.9K |
| problemEn | "You're raising a round, but you don't know what VCs will find. Red flags could kill your deal." | "You're not ready for VC due diligence—and you don't know it. DD readiness is 0%, red flags are hidden, and your data room is incomplete." |
| problemDe | (entsprechend) | "Du bist nicht bereit fuer VC Due Diligence—und weisst es nicht. DD Readiness ist 0%, Red Flags sind versteckt, und dein Data Room ist unvollstaendig." |
| solutionEn | "We simulate VC due diligence in 5-7 days: identify red flags, prepare Q&A, optimize financials. You get a board-ready report." | "We simulate VC due diligence in 1-2 weeks (8 dimensions). You get: Red Flags Fixed 100%, DD Readiness 0% → 100%, Fundraising Success Rate +40-60pp—with board-ready report." |
| solutionDe | (entsprechend) | "Wir simulieren VC Due Diligence in 1-2 Wochen (8 Dimensionen). Du erhaeltst: Red Flags Fixed 100%, DD Readiness 0% → 100%, Fundraising Success Rate +40-60pp—mit Board-Ready Report." |
| deliverablesEn | [DD simulation report (15-20 pages), Red flag mitigation plan, Q&A prep (50-100 questions), Optional: Execution Bridge (+€2K discount)] | [Red Flags Fixed: 100%, DD Readiness: 0% → 100%, Fundraising Rate: +40-60pp] |
| deliverablesDe | (entsprechend) | (entsprechend) |
| impactEn | "Predict 30-50% higher success rate. Close your round faster." | "Fix red flags before VCs find them. Predict 10-50x ROI in fundraising success." |
| impactDe | (entsprechend) | (entsprechend) |
| primaryCtaEn | Request Simulation | More About DD Simulation |
| primaryCtaDe | Simulation anfragen | Mehr ueber DD Simulation |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/vc-dd-simulation |
| addOnPricing | { base: '€3.9K', bridge: '€5.9K' } | { base: '€5.9K', bridge: '€9.8K' } |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const VCDueDiligenceSimulation = lazy(() => import("./pages/VCDueDiligenceSimulation"));

// Route (neue Decision Support Page, nach Strategic Advisory):
<Route path="/solutions/vc-dd-simulation" element={<VCDueDiligenceSimulation />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/VCDueDiligenceSimulation.tsx`

Struktur analog zu StrategicAdvisory.tsx mit 7 Sektionen (aber angepasst fuer Decision Support Produkt):

### Section 1: Hero
- **Breadcrumb:** `Solutions > VC Due Diligence Simulation`
- **Badge:** `Decision Support . 1-2 Weeks . €5.9K`
- **Headline:** `Simulate VC Due Diligence—Before The Real One`
- **Subheadline:** Get your company due diligence-ready in 1-2 weeks...
- **Stats:** Red Flags Fixed 100% | DD Readiness 0% → 100% | Fundraising Rate +40-60pp
- **Trust Badges:** Fast Turnaround (1-2 Weeks), Board-Ready Report (30-40 Pages), Investor Perspective

### Section 2: Problem
- **Headline:** `You're Not Ready For VC Due Diligence—And You Don't Know It`
- **Symptome:**
  - Not DD-ready: 0% due diligence readiness
  - Red flags hidden: Financials, contracts, compliance issues
  - Data room incomplete: Missing documents, outdated data
  - No investor perspective: Don't know what VCs actually check
  - Fundraising risk: Can't raise next round

### Section 3: Solution
- **Headline:** `How VC Due Diligence Simulation Works`
- **8 DD Dimensions:**
  1. Financial Due Diligence (revenue, unit economics, burn)
  2. Commercial Due Diligence (customers, contracts, pipeline)
  3. Product Due Diligence (PMF, tech debt, roadmap, IP)
  4. Team Due Diligence (management, key person risk, culture)
  5. Legal Due Diligence (cap table, contracts, compliance)
  6. Operational Due Diligence (processes, infrastructure, vendors)
  7. Strategic Due Diligence (growth, positioning, exit potential)
  8. Governance Due Diligence (board, reporting, decision-making)
- **Week 1:** DD Simulation (8 dimensions analyzed)
- **Week 2 (Optional +€3.9K):** DD Readiness Roadmap (90-day action plan)

### Section 4: Impact/Outcome
- **Metrics:**
  - Red Flags Fixed 100% (unknown → 100% identified + fixed)
  - DD Readiness 0% → 100% (not prepared → fully prepared)
  - Fundraising Success Rate +40-60pp (20-40% → 60-100%)
- **Real Example:** Series A SaaS, €8M ARR, Red Flags Fixed 100% (15 issues), DD Readiness +100%, Fundraising Rate +50pp, Deal Timeline -40%

### Section 5: Process (How We Work)
- Week-by-Week Breakdown (1-2 Weeks)
- Time Commitment (4-6 hours)
- **Pricing:**
  - Base Package: €5.9K (Red Flags Report, 30-40 pages)
  - + Execution Bridge: +€3.9K (DD Readiness Roadmap)
  - Total: €9.8K (Base + Execution)
- Quality Guarantee (Board-Ready Report)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Preparing for fundraising (Series A-C)
  - 3-6 months away from fundraising
  - Not DD-ready (0% prepared)
  - Series A-B, €5M-€30M ARR, 30-150 people
  - Budget: €5.9K-€9.8K
- **Not a Fit:**
  - Not fundraising (no immediate need)
  - Already DD-ready (100% prepared) → Pitch Deck Check (€1.9K)
  - Need hands-on DD preparation → Boost: Board Excellence (€60K-€78K)

### Section 7: Final CTA
- **Headline:** `Ready to Simulate VC Due Diligence?`
- **Primary CTA:** Request Simulation (€5.9K)
- **Secondary:** Book Free Inflection Call (30 min)
- **FAQ:** Duration (1-2 weeks), Investment (€5.9K-€9.8K), Documents needed, References, ROI, Difference to lawyers

---

## Technische Details

### Komponenten-Wiederverwendung
Die neue Landing Page verwendet die gleichen Patterns wie StrategicAdvisory:
- `TwinklingStars` fuer Hero-Hintergrund
- `useParallaxLayers` fuer Parallax-Effekte
- `useScrollAnimation` fuer Scroll-basierte Animationen
- `Accordion` fuer FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Spezifische Icons fuer DD Simulation
- `FileSearch` - Due Diligence / Simulation
- `AlertTriangle` - Red Flags
- `CheckCircle2` - DD Ready / Fixed
- `TrendingUp` - Fundraising Success
- `Briefcase` - Investor Perspective
- `Shield` - Quality Guarantee
- `Clock` - Fast Turnaround (1-2 Weeks)
- `FileText` - Board-Ready Report
- `Layers` - 8 Dimensions
- `Building2` - Financial DD
- `Users` - Team DD
- `Scale` - Legal DD
- `Settings` - Operational DD

### Unterschiede zu Transformation Pages
Diese Seite unterscheidet sich von Transformation Pages:
- **Kein "2 of 3 Outcomes Guaranteed"** - Decision Support ist Produkt, nicht Transformation
- **Quality Guarantee** statt Outcome Guarantee
- **Fokus auf Report Delivery** statt Team Transformation
- **Kuerzerer Zeitraum** (1-2 Wochen statt 30 Tage - 12 Monate)

### 8 DD Dimensions (Kernkonzept)
Diese Seite verwendet 8 Dimensionen als strukturierenden Rahmen:

```text
┌───────────────────────────────────────────────────────────┐
│                   8 DD DIMENSIONS                          │
├──────────────────┬──────────────────┬─────────────────────┤
│ 1. Financial     │ 2. Commercial    │ 3. Product          │
│ 4. Team          │ 5. Legal         │ 6. Operational      │
│ 7. Strategic     │ 8. Governance    │                     │
└──────────────────┴──────────────────┴─────────────────────┘
```

### Dateistruktur

```text
src/
  App.tsx                           # Neue Route hinzufuegen
  data/
    solutionTiles.ts                # Kachel ID 8: Price + Metriken + CTA aktualisieren
  pages/
    VCDueDiligenceSimulation.tsx    # NEU - Erste Decision Support Landing Page
```

### URL-Pattern
Top-Level Decision Support Page: `/solutions/vc-dd-simulation`

### Breadcrumb-Pattern
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">VC Due Diligence Simulation</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Besonderheiten dieser Seite

### Decision Support vs. Transformation
Diese Seite ist die erste "Decision Support" Landing Page:
- **Transformation Pages:** Projekt-basiert, Team arbeitet mit, Outcome-Garantie
- **Decision Support Pages:** Produkt-basiert, Report-Lieferung, Quality-Garantie

### Investor Perspective als Differentiator
Die Seite positioniert "Investor Perspective" als Kernunterscheidung:
- "What VCs actually check" (nicht nur Compliance)
- 8 Dimensionen (nicht nur Financial + Legal)
- Board-Ready Report (nicht nur internes Dokument)

### Fundraising-fokussierte Metriken
Die Seite verwendet fundraising-spezifische Metriken:
- **Red Flags Fixed:** 100% (vor echtem DD gefunden + geloest)
- **DD Readiness:** 0% → 100% (von unprepared zu fully prepared)
- **Fundraising Success Rate:** +40-60pp (von 20-40% auf 60-100%)

### Execution Bridge als Upsell
Die Seite positioniert eine klare Upsell-Moeglichkeit:
- **Base (€5.9K):** Red Flags Report (30-40 pages)
- **+ Execution Bridge (+€3.9K):** DD Readiness Roadmap (90-day action plan)
- **Total (€9.8K):** Komplettpaket

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 8: Price (€3.9K-€5.9K → €5.9K) + Metriken (outcome-fokussiert) + CTA (learn-more) + addOnPricing (€5.9K + €9.8K) aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import (erste Decision Support Landing Page) |
| `src/pages/VCDueDiligenceSimulation.tsx` | Neue Datei (7 Sektionen) mit 8 DD Dimensions und Execution Bridge Upsell |

