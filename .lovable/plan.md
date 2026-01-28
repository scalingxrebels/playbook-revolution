

# Plan: Pricing & Packaging Review - Landing Page + Kachel-Update

## Briefing Review

### Wichtige Feststellungen

**1. URL-Format:**
- **Aktueller Slug (ID 4):** `pricing-review`
- **Briefing URL:** `/solutions/pricing-packaging-review`
- **Empfehlung:** Briefing übernehmen (vollständiger, konsistenter Name)

**2. Duration:** 
3-5 Days - bereits korrekt, keine Änderung erforderlich

**3. Report-Länge:**
| Quelle | Report |
|--------|--------|
| Aktuelle Kachel | 10-15 pages |
| Briefing | 20-30 pages |

**Empfehlung:** Briefing übernehmen (20-30 pages = Board-Ready Quality)

**4. Neue Metriken (Outcome-fokussiert):**
- **Pricing Clarity:** +90%
- **ARPU Roadmap:** +30-50%
- **Margin Roadmap:** +10-15pp

**5. AI-Native Benchmarks (neu):**
- ARPU: €15K-€25K (vs. €5K-€10K bei Traditional)
- Gross Margin: 75-85% (vs. 60-70% bei Traditional)
- Discounting: 0-10% (vs. 20-30% bei Traditional)

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 4, Zeilen 195-233)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | pricing-review | pricing-packaging-review |
| Duration | 3-5 days | 3-5 days (behalten) |
| Report | 10-15 pages | 20-30 pages |
| problemEn | "Your pricing is stuck. ARPU isn't growing..." | "Your pricing is broken—but you don't know why. ARPU is €5K (benchmark: €15K-€25K). Gross margin is 60% (benchmark: 75-85%). Packaging is unclear. You don't know if problem is value metric, packaging, or positioning." |
| problemDe | (entsprechend) | "Dein Pricing ist kaputt—aber du weißt nicht warum. ARPU liegt bei €5K (Benchmark: €15K-€25K). Gross Margin ist 60% (Benchmark: 75-85%). Packaging ist unklar. Du weißt nicht, ob das Problem beim Value Metric, Packaging oder Positioning liegt." |
| solutionEn | "We analyze your value metric..." | "We analyze your pricing & packaging in 3-5 days (5 dimensions: Value Metric, Pricing Model, Packaging, Positioning, Monetization). You get: Pricing Clarity +90%, ARPU Roadmap +30-50%, Margin Roadmap +10-15pp—with board-ready report." |
| solutionDe | (entsprechend) | "Wir analysieren dein Pricing & Packaging in 3-5 Tagen (5 Dimensionen: Value Metric, Pricing Model, Packaging, Positioning, Monetization). Du erhältst: Pricing Clarity +90%, ARPU Roadmap +30-50%, Margin Roadmap +10-15pp—mit Board-Ready Report." |
| deliverablesEn | [Pricing audit report, Pricing optimization roadmap, Revenue impact prediction, Optional: 90-Day Monetization Plan] | [Pricing Clarity: +90%, ARPU Roadmap: +30-50%, Margin Roadmap: +10-15pp] |
| deliverablesDe | (entsprechend) | [Pricing Clarity: +90%, ARPU Roadmap: +30-50%, Margin Roadmap: +10-15pp] |
| impactEn | "Increase revenue by 10-30%..." | "Know exactly which pricing lever to pull first. Predict 10-30x ROI from ARPU increase and margin improvement." |
| impactDe | (entsprechend) | "Wisse genau, welchen Pricing-Hebel du zuerst ziehen sollst. Prognostiziere 10-30x ROI durch ARPU-Steigerung und Margin-Verbesserung." |
| primaryCtaEn | Request Review | More About Pricing Review |
| primaryCtaDe | Review anfragen | Mehr über Pricing Review |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/pricing-packaging-review |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const PricingPackagingReview = lazy(() => import("./pages/PricingPackagingReview"));

// Route (nach GTM Effectiveness Review):
<Route path="/solutions/pricing-packaging-review" element={<PricingPackagingReview />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/PricingPackagingReview.tsx`

### Section 1: Hero
- **Breadcrumb:** `Solutions > Pricing & Packaging Review`
- **Badge:** `Decision Support · 3-5 Days · €3.9K-€5.9K`
- **Headline:** `Expert Pricing Review—In 3-5 Days`
- **Subheadline:** Get expert analysis of your pricing & packaging in 3-5 days...
- **Stats:** Pricing Clarity +90% | ARPU Roadmap +30-50% | Margin Roadmap +10-15pp
- **Trust Badges:** Fast Turnaround (3-5 Days), Board-Ready Report (20-30 Pages), Expert Analysis (McKinsey-Level)

### Section 2: Problem
- **Headline:** `Your Pricing Is Broken—But You Don't Know Why`
- **Symptome:**
  - Low ARPU: €5K (benchmark: €15K-€25K for AI-native)
  - Low margin: 60% (benchmark: 75-85% for AI-native)
  - Unclear packaging: Customers don't see the value
  - High discounting: 20-30% (benchmark: 0-10% for AI-native)
  - No pricing clarity: Don't know if problem is value metric, packaging, or positioning
- **Real Cost:** Destroys unit economics, limits growth, weakens board confidence, increases down-round risk

### Section 3: Solution
- **Headline:** `How Pricing & Packaging Review Works`
- **5 Pricing Dimensions:**
  1. Value Metric Analysis (current metric, alternatives, benchmarks, recommendation)
  2. Pricing Model Analysis (flat-rate, per-user, usage-based effectiveness)
  3. Packaging Analysis (tiers, value perception, benchmarks)
  4. Price Positioning Analysis (premium, mid-market, value positioning)
  5. Monetization Strategy (value capture, optimization)
- **Day 1-2:** Data Collection & Analysis (5 dimensions analyzed)
- **Day 3-5 (Optional +€2K):** 90-Day Monetization Roadmap

### Section 4: Impact/Outcome
- **Metrics:**
  - Pricing Clarity +90% (low → high)
  - ARPU Roadmap +30-50% (€5K → €6.5K-€7.5K target)
  - Margin Roadmap +10-15pp (60% → 70-75% target)
- **Real Example:** Series A SaaS, €10M ARR, Pricing Clarity +95%, ARPU Roadmap +45%, Margin Roadmap +12pp, Discounting Roadmap -60%

### Section 5: Process (How We Work)
- Day-by-Day Breakdown (3-5 Days)
- Time Commitment (2-4 hours)
- **Pricing:**
  - Base Package: €3.9K (Pricing & Packaging Report, 20-30 pages)
  - + Execution Bridge: +€2K (90-Day Monetization Roadmap)
  - Total: €5.9K (Base + Execution)
- Quality Guarantee (Expert-Grade, McKinsey-Level)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Pricing problems but don't know what to fix first
  - ARPU €5K-€10K, Gross Margin 60-70%, High Discounting 20-30%
  - Series A-B, €5M-€30M ARR, 30-150 people
  - Budget: €3.9K-€5.9K
- **Not a Fit:**
  - Need hands-on pricing implementation → Power Up: Pricing Power (€23.6K)
  - Need full pricing transformation → Boost: Pricing Dominance (€60K-€78K)

### Section 7: Final CTA
- **Headline:** `Ready to Get Pricing Clarity?`
- **Primary CTA:** Request Review (€3.9K)
- **Secondary:** Book Free Inflection Call (30 min)
- **FAQ:** Duration (3-5 days), Investment (€3.9K-€5.9K), Data needed, References, ROI, Difference to consultants

---

## Technische Details

### Komponenten-Wiederverwendung
- `TwinklingStars` für Hero-Hintergrund
- `useParallaxLayers` für Parallax-Effekte
- `useScrollAnimation` für Scroll-basierte Animationen
- `Accordion` für FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Spezifische Icons für Pricing Review
- `DollarSign` - Pricing / ARPU
- `TrendingUp` - Margin / Growth Metrics
- `Target` - Pricing Clarity / Positioning
- `Layers` - Packaging / Tiers
- `BarChart3` - Value Metric / Metrics
- `Settings` - Monetization Strategy
- `Clock` - Fast Turnaround (3-5 Days)
- `FileText` - Board-Ready Report
- `Shield` - Quality Guarantee (McKinsey-Level)
- `Percent` - Discounting

### 5 Pricing Dimensions Framework
Diese Seite verwendet 5 Dimensionen als strukturierenden Rahmen:

```text
+-----------------------------------------------------------+
|                   5 PRICING DIMENSIONS                     |
+------------------+------------------+----------------------+
| 1. Value Metric  | 2. Pricing Model | 3. Packaging         |
| 4. Positioning   | 5. Monetization  |                      |
+------------------+------------------+----------------------+
```

### Unterschied zu anderen Decision Support Pages
| Aspekt | GTM Review | VC DD Simulation | Pricing Review |
|--------|------------|------------------|----------------|
| Dimensionen | 6 GTM Dimensions | 8 DD Dimensions | 5 Pricing Dimensions |
| Fokus | GTM Performance | Fundraising Readiness | Monetization |
| Preis | €3.9K-€5.9K | €5.9K-€9.8K | €3.9K-€5.9K |
| Metriken | GTM Clarity, Decision Velocity, CAC Roadmap | DD Readiness, Red Flags Fixed, Fundraising Rate | Pricing Clarity, ARPU Roadmap, Margin Roadmap |

### URL-Pattern
Top-Level Decision Support Page: `/solutions/pricing-packaging-review`

---

## Zusammenfassung der Änderungen

| Datei | Änderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 4: Slug (pricing-review → pricing-packaging-review) + Metriken (outcome-fokussiert mit AI-native benchmarks) + CTA (learn-more) aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import (dritte Decision Support Landing Page) |
| `src/pages/PricingPackagingReview.tsx` | Neue Datei (7 Sektionen) mit 5 Pricing Dimensions und Execution Bridge Upsell |

