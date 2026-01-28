

# Plan: GTM Effectiveness Review - Landing Page + Kachel-Update (Korrigiert)

## Korrektur zur Duration

| Feld | Briefing | Korrigiert |
|------|----------|------------|
| Duration | 1-2 Weeks | **3-5 Days** (behalten) |

Alle anderen Empfehlungen werden uebernommen.

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 3)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | gtm-review | gtm-effectiveness-review |
| Duration | 3-5 days | 3-5 days (behalten) |
| Report | 10-15 pages | 20-30 pages |
| problemEn | "Your CAC is rising, win rates are dropping..." | "Your GTM is broken—but you don't know where. CAC is €5K-€10K (benchmark: €500-€2K). Win rate is 15-25% (benchmark: 40-60%). Sales cycle is 90-180 days (benchmark: 30-60 days)." |
| problemDe | (entsprechend) | (entsprechend) |
| solutionEn | "We audit your GTM in 3-5 days..." | "We analyze your GTM effectiveness in 3-5 days (6 dimensions). You get: GTM Clarity +80%, Decision Velocity +50-100%, CAC Reduction Roadmap 30-50%—with board-ready report." |
| solutionDe | (entsprechend) | (entsprechend) |
| deliverablesEn | [GTM audit report, Bottleneck identification, 3-5 recommendations] | [GTM Clarity: +80%, Decision Velocity: +50-100%, CAC Roadmap: -30-50%] |
| deliverablesDe | (entsprechend) | (entsprechend) |
| impactEn | "Reduce CAC by 20-30%..." | "Know exactly which GTM lever to pull first. Predict 10-30x ROI from CAC reduction and growth acceleration." |
| impactDe | (entsprechend) | (entsprechend) |
| primaryCtaEn | Request Review | More About GTM Review |
| primaryCtaDe | Review anfragen | Mehr ueber GTM Review |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/gtm-effectiveness-review |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const GTMEffectivenessReview = lazy(() => import("./pages/GTMEffectivenessReview"));

// Route (nach VC DD Simulation):
<Route path="/solutions/gtm-effectiveness-review" element={<GTMEffectivenessReview />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/GTMEffectivenessReview.tsx`

### Section 1: Hero
- **Breadcrumb:** `Solutions > GTM Effectiveness Review`
- **Badge:** `Decision Support . 3-5 Days . €3.9K-€5.9K`
- **Headline:** `Expert GTM Review—In 3-5 Days`
- **Subheadline:** Get expert analysis of your GTM effectiveness in 3-5 days...
- **Stats:** GTM Clarity +80% | Decision Velocity +50-100% | CAC Roadmap -30-50%
- **Trust Badges:** Fast Turnaround (3-5 Days), Board-Ready Report (20-30 Pages), Expert Analysis (McKinsey-Level)

### Section 2: Problem
- **Headline:** `Your GTM Is Broken—But You Don't Know Where`
- **Symptome:**
  - High CAC: €5K-€10K (benchmark: €500-€2K for AI-native)
  - Low win rate: 15-25% (benchmark: 40-60% for AI-native)
  - Long sales cycle: 90-180 days (benchmark: 30-60 days for AI-native)
  - No GTM clarity: Don't know which lever to pull first
  - Growth stalled: 150% → 80% YoY growth

### Section 3: Solution
- **Headline:** `How GTM Effectiveness Review Works`
- **6 GTM Dimensions:**
  1. Market & ICP (TAM, SAM, SOM, ICP definition, positioning)
  2. Customer Acquisition (CAC analysis, win rate, sales cycle, channels)
  3. Messaging & Positioning (value proposition, messaging framework)
  4. Sales Process (sales motion, playbook, enablement, tools)
  5. Pricing & Packaging (pricing model, packaging strategy, monetization)
  6. GTM Operations (metrics, systems, team, processes)
- **Days 1-3:** GTM Analysis (6 dimensions analyzed)
- **Days 4-5 (Optional +€2K):** 90-Day GTM Roadmap

### Section 4: Impact/Outcome
- **Metrics:**
  - GTM Clarity +80% (low → high)
  - Decision Velocity +50-100% (7-14d → 3-7d)
  - CAC Reduction Roadmap 30-50% (€8K → €4K-€5.6K target)
- **Real Example:** Series A SaaS, €12M ARR, GTM Clarity +85%, Decision Velocity +80%, CAC Roadmap -40%

### Section 5: Process (How We Work)
- Day-by-Day Breakdown (3-5 Days)
- Time Commitment (4-6 hours)
- **Pricing:**
  - Base Package: €3.9K (GTM Effectiveness Report, 20-30 pages)
  - + Execution Bridge: +€2K (90-Day GTM Roadmap)
  - Total: €5.9K (Base + Execution)
- Quality Guarantee (Expert-Grade, McKinsey-Level)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - GTM problems but don't know which lever to pull first
  - CAC €5K-€10K, Win Rate 15-25%, Sales Cycle 90-180 days
  - Series A-B, €5M-€30M ARR, 30-150 people
  - Budget: €3.9K-€5.9K
- **Not a Fit:**
  - Need hands-on GTM implementation → Power Up: CAC Crisis (€23.6K)
  - Need full GTM transformation → Boost (€60K-€78K)

### Section 7: Final CTA
- **Headline:** `Ready to Get GTM Clarity?`
- **Primary CTA:** Request Review (€3.9K)
- **Secondary:** Book Free Inflection Call (30 min)
- **FAQ:** Duration (3-5 days), Investment (€3.9K-€5.9K), Data needed, References, ROI

---

## Technische Details

### Komponenten-Wiederverwendung
- `TwinklingStars` fuer Hero-Hintergrund
- `useParallaxLayers` fuer Parallax-Effekte
- `useScrollAnimation` fuer Scroll-basierte Animationen
- `Accordion` fuer FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Spezifische Icons
- `Target` - GTM Clarity / ICP
- `TrendingUp` - CAC / Growth Metrics
- `Zap` - Decision Velocity
- `Users` - Customer Acquisition / Sales
- `MessageSquare` - Messaging & Positioning
- `DollarSign` - Pricing & Packaging
- `Settings` - GTM Operations
- `BarChart3` - Metrics / Analysis
- `Clock` - Fast Turnaround (3-5 Days)
- `FileText` - Board-Ready Report

### 6 GTM Dimensions Framework

```text
+-----------------------------------------------------------+
|                   6 GTM DIMENSIONS                         |
+------------------+------------------+----------------------+
| 1. Market & ICP  | 2. Acquisition   | 3. Messaging         |
| 4. Sales Process | 5. Pricing       | 6. Operations        |
+------------------+------------------+----------------------+
```

### URL-Pattern
Top-Level Decision Support Page: `/solutions/gtm-effectiveness-review`

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 3: Slug (gtm-review → gtm-effectiveness-review) + Metriken (outcome-fokussiert) + CTA (learn-more) aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/GTMEffectivenessReview.tsx` | Neue Datei (7 Sektionen) mit 6 GTM Dimensions und Execution Bridge Upsell |

