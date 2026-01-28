

# Plan: Portfolio Assessment - Landing Page + Kachel-Update

## Briefing Review

### Wichtige Feststellungen

**1. URL-Format:**
- **Aktueller Slug (ID 9):** `portfolio-assessment`
- **Briefing URL:** `/solutions/portfolio-assessment`
- **Status:** Bereits korrekt - keine Aenderung erforderlich

**2. Duration:**
3-5 Days - bereits korrekt im Briefing

**3. Report-Laenge:**
| Quelle | Report |
|--------|--------|
| Aktuelle Kachel | 5-30 companies, Heatmap |
| Briefing | 20-30 pages, Board/LP-ready |

**Empfehlung:** Briefing uebernehmen (20-30 pages + Portfolio Heatmap)

**4. Neue Metriken (Outcome-fokussiert):**
- **Portfolio Clarity:** +85%
- **Value Roadmap:** +30-60%
- **LP Confidence:** +40-70%

**5. Framework-Struktur:**
| Aktuell | Briefing |
|---------|----------|
| Underperformers, AI-readiness gaps, synergy opportunities | 6 Dimensionen: Growth Performance, Unit Economics, AI Maturity (theta_index), Operational Excellence, Market Position, Exit Readiness |

**6. Zielgruppe (ICP):**
- **Aktuell:** Allgemein "Portfolio"
- **Briefing:** Explizit VC/PE mit 10-50 Portfolio Companies, EUR50M-EUR500M AUM
- **Empfehlung:** Briefing uebernehmen (klarer ICP fuer VCs/PEs)

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 9, Zeilen 382-420)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | portfolio-assessment | portfolio-assessment (behalten) |
| Duration | 3-5 days | 3-5 days (behalten) |
| Report | Heatmap | 20-30 pages + Portfolio Heatmap |
| problemEn | "Your portfolio is underperforming. Some companies are thriving, others are struggling..." | "Your portfolio is underperforming—but you don't know why. 5/15 companies struggling (33%), average theta_index 0.35 (Level 1: AI-Powered). LPs asking 'Why isn't portfolio AI-Native?' You don't know which companies to fix first." |
| problemDe | (entsprechend) | "Dein Portfolio underperformt—aber du weisst nicht warum. 5/15 Companies strugglen (33%), durchschnittlicher theta_index 0.35 (Level 1: AI-Powered). LPs fragen 'Warum ist das Portfolio nicht AI-Native?' Du weisst nicht, welche Companies du zuerst fixen sollst." |
| solutionEn | "We assess your portfolio (5-30 companies) in 3-5 days..." | "We analyze your portfolio in 3-5 days (6 dimensions: Growth, Unit Economics, AI Maturity, Operations, Market Position, Exit Readiness). You get: Portfolio Clarity +85%, Value Roadmap +30-60%, LP Confidence +40-70%—with LP-ready report + Portfolio Heatmap." |
| solutionDe | (entsprechend) | "Wir analysieren dein Portfolio in 3-5 Tagen (6 Dimensionen: Growth, Unit Economics, AI Maturity, Operations, Market Position, Exit Readiness). Du erhaeltst: Portfolio Clarity +85%, Value Roadmap +30-60%, LP Confidence +40-70%—mit LP-Ready Report + Portfolio Heatmap." |
| deliverablesEn | [Portfolio heatmap, AI-readiness assessment, Synergy playbook, Optional: Transformation Plan] | [Portfolio Clarity: +85%, Value Roadmap: +30-60%, LP Confidence: +40-70%] |
| deliverablesDe | (entsprechend) | [Portfolio Clarity: +85%, Value Roadmap: +30-60%, LP Confidence: +40-70%] |
| impactEn | "Improve avg. Rule of 40 by 10-20pp..." | "Know exactly which companies to fix first. Predict 10-30x ROI from portfolio value increase and LP confidence." |
| impactDe | (entsprechend) | "Wisse genau, welche Companies du zuerst fixen sollst. Prognostiziere 10-30x ROI durch Portfolio-Wertsteigerung und LP-Vertrauen." |
| primaryCtaEn | Request Assessment | More About Portfolio Assessment |
| primaryCtaDe | Assessment anfragen | Mehr ueber Portfolio Assessment |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/portfolio-assessment |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const PortfolioAssessment = lazy(() => import("./pages/PortfolioAssessment"));

// Route (nach AIMaturityAssessment):
<Route path="/solutions/portfolio-assessment" element={<PortfolioAssessment />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/PortfolioAssessment.tsx`

### Section 1: Hero
- **Breadcrumb:** `Solutions > Portfolio Assessment`
- **Badge:** `Decision Support · 3-5 Days · EUR3.9K-EUR5.9K`
- **Headline:** `Expert Portfolio Assessment—In 3-5 Days`
- **Subheadline:** Get expert analysis of your portfolio performance in 3-5 days...
- **Stats:** Portfolio Clarity +85% | Value Roadmap +30-60% | LP Confidence +40-70%
- **Trust Badges:** Fast Turnaround (3-5 Days), LP-Ready Report (20-30 Pages), Expert Analysis (McKinsey-Level)

### Section 2: Problem
- **Headline:** `Your Portfolio Is Underperforming—But You Don't Know Why`
- **Symptome:**
  - Portfolio underperformance: 5/15 companies struggling (33% underperformers)
  - Low theta_index: Average 0.35 (Level 1: AI-Powered, benchmark: 0.7-0.8 for AI-Native)
  - No portfolio clarity: Don't know which companies to fix first
  - LP pressure: LPs asking "Why isn't portfolio AI-Native?"
  - Operating partner overwhelmed: 1:15 ratio (no time for hands-on support)
- **Real Cost:** Destroys fund performance, limits exit potential, weakens LP confidence, increases down-round risk

### Section 3: Solution
- **Headline:** `How Portfolio Assessment Works`
- **6 Dimensions:**
  1. Growth Performance (growth rate, trajectory, drivers, bottlenecks)
  2. Unit Economics (CAC, LTV/CAC, payback period, gross margin)
  3. AI Maturity / theta_index (theta_index score, AI adoption, AI ROI, AI competitive advantage)
  4. Operational Excellence (execution velocity, decision velocity, operational debt, scaling readiness)
  5. Market Position (market share, competitive position, PMF, category leadership)
  6. Exit Readiness (valuation potential, strategic buyer fit, exit timeline, exit blockers)
- **Day 1-2:** Data Collection & Portfolio Analysis (6 dimensions analyzed)
- **Day 3-5 (Optional +EUR2K):** 90-Day Portfolio Roadmap
- **Unique:** Portfolio Heatmap (visual prioritization of all companies)

### Section 4: Impact/Outcome
- **Metrics:**
  - Portfolio Clarity +85% (low to high)
  - Value Roadmap +30-60% (EUR150M to EUR195M-EUR240M target)
  - LP Confidence +40-70% (medium to high)
- **Real Example:** Series A-B VC, EUR200M AUM, 18 portfolio companies. Portfolio Clarity +90%, Value Roadmap +45% (EUR200M to EUR290M target), LP Confidence +60%, Operating Partner Efficiency +80%

### Section 5: Process (How We Work)
- Day-by-Day Breakdown (3-5 Days)
- Time Commitment (2-4 hours)
- **Pricing:**
  - Base Package: EUR3.9K (Portfolio Assessment Report, 20-30 pages + Heatmap)
  - + Execution Bridge: +EUR2K (90-Day Portfolio Roadmap)
  - Total: EUR5.9K (Base + Execution)
- Quality Guarantee (Expert-Grade, McKinsey-Level)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Portfolio problems but don't know which companies to fix first
  - 10-50 portfolio companies, 30-50% underperforming, Average theta_index 0.2-0.4
  - VC/PE with EUR50M-EUR500M AUM
  - Budget: EUR3.9K-EUR5.9K
- **Not a Fit:**
  - Need hands-on portfolio transformation: Accelerate: Portfolio Transformation (EUR360K-EUR720K)
  - Less than 5 or more than 100 portfolio companies: custom solution needed
  - Already know which companies to fix: Power Up: Portfolio Performance (EUR23.6K)

### Section 7: Final CTA
- **Headline:** `Ready to Get Portfolio Clarity?`
- **Primary CTA:** Request Assessment (EUR3.9K)
- **Secondary:** Book Free Portfolio Assessment Call (30 min)
- **FAQ:** Duration (3-5 days), Investment (EUR3.9K-EUR5.9K), Data needed, References, ROI, Difference to consultants, How many companies can be assessed

---

## Technische Details

### Komponenten-Wiederverwendung
- `TwinklingStars` fuer Hero-Hintergrund
- `useParallaxLayers` fuer Parallax-Effekte
- `useScrollAnimation` fuer Scroll-basierte Animationen
- `Accordion` fuer FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Spezifische Icons fuer Portfolio Assessment
- `Briefcase` - Portfolio / VC/PE
- `TrendingUp` - Growth Performance / Value
- `Calculator` - Unit Economics
- `Brain` - AI Maturity / theta_index
- `Settings` - Operational Excellence
- `Target` - Market Position
- `DoorOpen` - Exit Readiness
- `BarChart3` - Portfolio Heatmap
- `Users` - LP Confidence
- `Clock` - Fast Turnaround (3-5 Days)
- `FileText` - LP-Ready Report
- `Shield` - Quality Guarantee (McKinsey-Level)

### 6 Portfolio Dimensions Framework
Diese Seite verwendet 6 Dimensionen als strukturierenden Rahmen:

```text
+-----------------------------------------------------------+
|                 6 PORTFOLIO DIMENSIONS                     |
+------------------+------------------+----------------------+
| 1. Growth        | 2. Unit Econ     | 3. AI Maturity       |
| 4. Operations    | 5. Market Pos    | 6. Exit Readiness    |
+------------------+------------------+----------------------+
```

### Unterschied zu anderen Decision Support Pages
| Aspekt | GTM Review | VC DD Simulation | Pricing Review | Scaling Assessment | AI Assessment | Portfolio Assessment |
|--------|------------|------------------|----------------|-------------------|---------------|---------------------|
| Dimensionen | 6 GTM | 8 DD | 5 Pricing | 4 Capabilities | 8 AI Dimensions | 6 Portfolio Dimensions |
| Fokus | GTM Performance | Fundraising | Monetization | Operations | AI Maturity | Portfolio Performance |
| ICP | Series A-B | Series A-B | Series A-B | Series A-B | Series A-B | VC/PE (10-50 Companies) |
| Preis | EUR3.9K-EUR5.9K | EUR5.9K-EUR9.8K | EUR3.9K-EUR5.9K | EUR3.9K-EUR5.9K | EUR3.9K-EUR5.9K | EUR3.9K-EUR5.9K |
| Unique | CAC Benchmarks | Investor-grade | ARPU Benchmarks | C1-C4 Framework | theta_index Score | Portfolio Heatmap + LP-Ready |
| Metriken | GTM Clarity, Decision Velocity, CAC Roadmap | DD Readiness, Red Flags Fixed, Fundraising Rate | Pricing Clarity, ARPU Roadmap, Margin Roadmap | Scaling Clarity, Capability Roadmap, Decision Velocity | AI Clarity, theta_index Roadmap, Efficiency Roadmap | Portfolio Clarity, Value Roadmap, LP Confidence |

### URL-Pattern
Top-Level Decision Support Page: `/solutions/portfolio-assessment`

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 9: Metriken (outcome-fokussiert mit 6 Dimensionen + theta_index) + CTA (learn-more) aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import (sechste Decision Support Landing Page) |
| `src/pages/PortfolioAssessment.tsx` | Neue Datei (7 Sektionen) mit 6 Portfolio Dimensions Framework, Portfolio Heatmap, LP-fokussierte Sprache, und Execution Bridge Upsell |

