

# Plan: Scaling Readiness Assessment - Landing Page + Kachel-Update

## Briefing Review

### Wichtige Feststellungen

**1. URL-Format:**
- **Aktueller Slug (ID 5):** `scaling-assessment`
- **Briefing URL:** `/solutions/scaling-readiness-assessment`
- **Empfehlung:** Briefing uebernehmen (vollstaendiger, konsistenter Name)

**2. Duration:**
3-5 Days - bereits korrekt im Briefing

**3. Report-Laenge:**
| Quelle | Report |
|--------|--------|
| Aktuelle Kachel | 10-15 pages |
| Briefing | 20-30 pages |

**Empfehlung:** Briefing uebernehmen (20-30 pages = Board-Ready Quality)

**4. Neue Metriken (Outcome-fokussiert):**
- **Scaling Clarity:** +85%
- **Capability Roadmap (C1-C4):** +30-50%
- **Decision Velocity:** +50-100%

**5. AI-Native Benchmarks (neu im Briefing):**
- Meetings/week: 10-15 (vs. 40-60 bei Traditional)
- Decision Latency: 1-3 days (vs. 7-14 days bei Traditional)

**6. Framework-Anpassung:**
| Aktuell | Briefing |
|---------|----------|
| C1 Strategy, C2 Setup, C3 Execution, C4 Scale | C1 Execution, C2 Setup, C3 Coordination, C4 Culture |

**Empfehlung:** Briefing-Framework uebernehmen (Execution, Setup, Coordination, Culture) - besser fuer Ops-fokussiertes Assessment

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 5, Zeilen 231-270)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | scaling-assessment | scaling-readiness-assessment |
| Duration | 3-5 days | 3-5 days (behalten) |
| Report | 10-15 pages | 20-30 pages |
| problemEn | "You're growing fast, but chaos is creeping in..." | "You're growing fast—but scaling is broken. Meetings +300% (40-60/week, benchmark: 10-15). Decision velocity -50% (7-14 days, benchmark: 1-3 days). You don't know if problem is execution, setup, coordination, or culture." |
| problemDe | (entsprechend) | "Du waechst schnell—aber das Skalieren ist kaputt. Meetings +300% (40-60/Woche, Benchmark: 10-15). Decision Velocity -50% (7-14 Tage, Benchmark: 1-3 Tage). Du weisst nicht, ob das Problem bei Execution, Setup, Coordination oder Culture liegt." |
| solutionEn | "We assess your scaling readiness in 3-5 days: 4 capabilities (Strategy, Setup, Execution, Scale)..." | "We analyze your scaling readiness in 3-5 days (4 capabilities: Execution, Setup, Coordination, Culture). You get: Scaling Clarity +85%, Capability Roadmap +30-50%, Decision Velocity +50-100%—with board-ready report." |
| solutionDe | (entsprechend) | "Wir analysieren deine Scaling Readiness in 3-5 Tagen (4 Capabilities: Execution, Setup, Coordination, Culture). Du erhaeltst: Scaling Clarity +85%, Capability Roadmap +30-50%, Decision Velocity +50-100%—mit Board-Ready Report." |
| deliverablesEn | [Report 10-15 pages, C1-C4 scores, Roadmap 90 days, Optional +2K] | [Scaling Clarity: +85%, Capability Roadmap: +30-50%, Decision Velocity: +50-100%] |
| deliverablesDe | (entsprechend) | [Scaling Clarity: +85%, Capability Roadmap: +30-50%, Decision Velocity: +50-100%] |
| impactEn | "Increase ARR/Employee by 20-40%..." | "Know exactly which capability to fix first. Predict 10-30x ROI from productivity improvement and growth acceleration." |
| impactDe | (entsprechend) | "Wisse genau, welche Capability du zuerst fixen sollst. Prognostiziere 10-30x ROI durch Produktivitaetssteigerung und Wachstumsbeschleunigung." |
| primaryCtaEn | Request Assessment | More About Scaling Assessment |
| primaryCtaDe | Assessment anfragen | Mehr ueber Scaling Assessment |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/scaling-readiness-assessment |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const ScalingReadinessAssessment = lazy(() => import("./pages/ScalingReadinessAssessment"));

// Route (nach PricingPackagingReview):
<Route path="/solutions/scaling-readiness-assessment" element={<ScalingReadinessAssessment />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/ScalingReadinessAssessment.tsx`

### Section 1: Hero
- **Breadcrumb:** `Solutions > Scaling Readiness Assessment`
- **Badge:** `Decision Support · 3-5 Days · EUR3.9K-EUR5.9K`
- **Headline:** `Expert Scaling Assessment—In 3-5 Days`
- **Subheadline:** Get expert analysis of your scaling readiness in 3-5 days...
- **Stats:** Scaling Clarity +85% | Capability Roadmap +30-50% | Decision Velocity +50-100%
- **Trust Badges:** Fast Turnaround (3-5 Days), Board-Ready Report (20-30 Pages), Expert Analysis (McKinsey-Level)

### Section 2: Problem
- **Headline:** `You're Growing Fast—But Scaling Is Broken`
- **Symptome:**
  - Meetings explosion: 40-60/week (benchmark: 10-15 for AI-native)
  - Decision paralysis: 7-14 days latency (benchmark: 1-3 days for AI-native)
  - Operational debt: Manual processes, broken systems, no automation
  - No scaling clarity: Don't know if problem is execution, setup, coordination, or culture
  - Growth stalled: 150% to 80% YoY growth
- **Real Cost:** Destroys productivity, limits growth, weakens board confidence, increases down-round risk

### Section 3: Solution
- **Headline:** `How Scaling Readiness Assessment Works`
- **4 Capabilities (C1-C4):**
  1. Execution (C1): Velocity, quality, consistency, bottlenecks
  2. Setup (C2): Systems, processes, data, infrastructure
  3. Coordination (C3): Meetings, decisions, alignment, communication
  4. Culture (C4): Values, talent density, learning velocity, change readiness
- **Day 1-2:** Data Collection & Capability Analysis (4 capabilities analyzed)
- **Day 3-5 (Optional +EUR2K):** 90-Day Scaling Roadmap

### Section 4: Impact/Outcome
- **Metrics:**
  - Scaling Clarity +85% (low to high)
  - Capability Roadmap +30-50% (C1-C4: 40-60% to 70-90% target)
  - Decision Velocity +50-100% (7-14d to 3-7d target)
- **Real Example:** Series A SaaS, EUR15M ARR, 120 employees. Scaling Clarity +90%, Capability Roadmap +40%, Decision Velocity Roadmap +70%, Meetings Roadmap -60%

### Section 5: Process (How We Work)
- Day-by-Day Breakdown (3-5 Days)
- Time Commitment (2-4 hours)
- **Pricing:**
  - Base Package: EUR3.9K (Scaling Readiness Report, 20-30 pages)
  - + Execution Bridge: +EUR2K (90-Day Scaling Roadmap)
  - Total: EUR5.9K (Base + Execution)
- Quality Guarantee (Expert-Grade, McKinsey-Level)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Scaling problems but don't know what to fix first
  - Meetings +300%, Decision Velocity -50%, High Operational Debt
  - Series A-B, EUR5M-EUR30M ARR, 50-200 people
  - Budget: EUR3.9K-EUR5.9K
- **Not a Fit:**
  - Need hands-on scaling implementation --> Power Up: Scaling Velocity (EUR23.6K)
  - Need full scaling transformation --> Boost: Scaling OS (EUR60K-EUR78K)

### Section 7: Final CTA
- **Headline:** `Ready to Get Scaling Clarity?`
- **Primary CTA:** Request Assessment (EUR3.9K)
- **Secondary:** Book Free Inflection Call (30 min)
- **FAQ:** Duration (3-5 days), Investment (EUR3.9K-EUR5.9K), Data needed, References, ROI, Difference to consultants

---

## Technische Details

### Komponenten-Wiederverwendung
- `TwinklingStars` fuer Hero-Hintergrund
- `useParallaxLayers` fuer Parallax-Effekte
- `useScrollAnimation` fuer Scroll-basierte Animationen
- `Accordion` fuer FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Spezifische Icons fuer Scaling Assessment
- `Zap` - Execution / Decision Velocity
- `Settings` - Setup / Systems
- `Users` - Coordination / Teams
- `Lightbulb` - Culture / Values
- `TrendingUp` - Scaling Clarity / Growth
- `BarChart3` - Capability Scores / Metrics
- `Clock` - Fast Turnaround (3-5 Days)
- `FileText` - Board-Ready Report
- `Shield` - Quality Guarantee (McKinsey-Level)
- `Calendar` - Meetings

### 4 Capabilities Framework (C1-C4)
Diese Seite verwendet 4 Capabilities als strukturierenden Rahmen:

```text
+-----------------------------------------------------------+
|                   4 SCALING CAPABILITIES                   |
+------------------+------------------+----------------------+
| C1 Execution     | C2 Setup         | C3 Coordination      |
| C4 Culture       |                  |                      |
+------------------+------------------+----------------------+
```

### Unterschied zu anderen Decision Support Pages
| Aspekt | GTM Review | VC DD Simulation | Pricing Review | Scaling Assessment |
|--------|------------|------------------|----------------|-------------------|
| Dimensionen | 6 GTM | 8 DD | 5 Pricing | 4 Capabilities |
| Fokus | GTM Performance | Fundraising | Monetization | Operations |
| Preis | EUR3.9K-EUR5.9K | EUR5.9K-EUR9.8K | EUR3.9K-EUR5.9K | EUR3.9K-EUR5.9K |
| Metriken | GTM Clarity, Decision Velocity, CAC Roadmap | DD Readiness, Red Flags Fixed, Fundraising Rate | Pricing Clarity, ARPU Roadmap, Margin Roadmap | Scaling Clarity, Capability Roadmap, Decision Velocity |

### URL-Pattern
Top-Level Decision Support Page: `/solutions/scaling-readiness-assessment`

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 5: Slug (scaling-assessment zu scaling-readiness-assessment) + Metriken (outcome-fokussiert mit AI-native benchmarks) + CTA (learn-more) + Framework (Execution, Setup, Coordination, Culture) aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import (vierte Decision Support Landing Page) |
| `src/pages/ScalingReadinessAssessment.tsx` | Neue Datei (7 Sektionen) mit 4 Capabilities Framework und Execution Bridge Upsell |

