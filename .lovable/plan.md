

# Plan: AI Maturity Assessment - Landing Page + Kachel-Update

## Briefing Review

### Wichtige Feststellungen

**1. URL-Format:**
- **Aktueller Slug (ID 6):** `ai-assessment`
- **Briefing URL:** `/solutions/ai-maturity-assessment`
- **Empfehlung:** Briefing übernehmen (vollständiger, konsistenter Name)

**2. Duration:**
3-5 Days - bereits korrekt im Briefing

**3. Report-Länge:**
| Quelle | Report |
|--------|--------|
| Aktuelle Kachel | 10-15 pages |
| Briefing | 20-30 pages |

**Empfehlung:** Briefing übernehmen (20-30 pages = Board-Ready Quality)

**4. Neue Metriken (Outcome-fokussiert):**
- **AI Clarity:** +90%
- **θ_index Roadmap:** +50-150%
- **Efficiency Roadmap:** +30-80%

**5. θ_index Benchmarks (neu im Briefing):**
- θ_index 0.0-0.2 = Traditional
- θ_index 0.2-0.5 = AI-Powered (Level 1)
- θ_index 0.5-0.8 = AI-Enabled (Level 2)
- θ_index 0.8-1.0 = AI-Native (Level 3)

**6. Framework-Struktur:**
| Aktuell | Briefing |
|---------|----------|
| Keine klaren Dimensionen | 8 AI Dimensions: Strategy, Infrastructure, Capabilities, Use Cases, Operations, Decision-Making, CX, Innovation |

**Empfehlung:** Briefing-Framework mit 8 Dimensionen übernehmen - detaillierteste Decision Support Page

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 6, Zeilen 270-307)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | ai-assessment | ai-maturity-assessment |
| Duration | 3-5 days | 3-5 days (behalten) |
| Report | 10-15 pages | 20-30 pages |
| problemEn | "AI is everywhere, but you don't know where to start..." | "You're using AI—but not becoming AI-Native. Your θ_index is 0.3 (Level 1: AI-Powered). Competitors are at θ_index 0.7-0.8 (Level 2-3: AI-Native). You don't know which AI lever to pull first." |
| problemDe | (entsprechend) | "Du nutzt AI—aber wirst nicht AI-Native. Dein θ_index ist 0.3 (Level 1: AI-Powered). Wettbewerber sind bei θ_index 0.7-0.8 (Level 2-3: AI-Native). Du weißt nicht, welchen AI-Hebel du zuerst ziehen sollst." |
| solutionEn | "We assess your AI maturity in 3-5 days..." | "We analyze your AI maturity in 3-5 days (8 dimensions: Strategy, Infrastructure, Capabilities, Use Cases, Operations, Decision-Making, CX, Innovation). You get: AI Clarity +90%, θ_index Roadmap +50-150%, Efficiency Roadmap +30-80%—with board-ready report." |
| solutionDe | (entsprechend) | "Wir analysieren deine AI-Reife in 3-5 Tagen (8 Dimensionen: Strategy, Infrastructure, Capabilities, Use Cases, Operations, Decision-Making, CX, Innovation). Du erhältst: AI Clarity +90%, θ_index Roadmap +50-150%, Efficiency Roadmap +30-80%—mit Board-Ready Report." |
| deliverablesEn | [AI maturity report 10-15 pages, θ_index score, AI roadmap 6-12 months, Optional +€2K] | [AI Clarity: +90%, θ_index Roadmap: +50-150%, Efficiency Roadmap: +30-80%] |
| deliverablesDe | (entsprechend) | [AI Clarity: +90%, θ_index Roadmap: +50-150%, Efficiency Roadmap: +30-80%] |
| impactEn | "Increase θ_index by 0.2-0.3..." | "Know exactly which AI lever to pull first. Predict 10-30x ROI from AI efficiency and competitive advantage." |
| impactDe | (entsprechend) | "Wisse genau, welchen AI-Hebel du zuerst ziehen sollst. Prognostiziere 10-30x ROI durch AI-Effizienz und Wettbewerbsvorteil." |
| primaryCtaEn | Request Assessment | More About AI Assessment |
| primaryCtaDe | Assessment anfragen | Mehr über AI Assessment |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/ai-maturity-assessment |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const AIMaturityAssessment = lazy(() => import("./pages/AIMaturityAssessment"));

// Route (nach ScalingReadinessAssessment):
<Route path="/solutions/ai-maturity-assessment" element={<AIMaturityAssessment />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/AIMaturityAssessment.tsx`

### Section 1: Hero
- **Breadcrumb:** `Solutions > AI Maturity Assessment`
- **Badge:** `Decision Support · 3-5 Days · €3.9K-€5.9K`
- **Headline:** `Expert AI Assessment—In 3-5 Days`
- **Subheadline:** Get expert analysis of your AI maturity in 3-5 days...
- **Stats:** AI Clarity +90% | θ_index Roadmap +50-150% | Efficiency Roadmap +30-80%
- **Trust Badges:** Fast Turnaround (3-5 Days), Board-Ready Report (20-30 Pages), Expert Analysis (McKinsey-Level)

### Section 2: Problem
- **Headline:** `You're Using AI—But Not Becoming AI-Native`
- **Symptome:**
  - Low θ_index: 0.2-0.4 (Level 1: AI-Powered, benchmark: 0.7-0.8 for AI-Native)
  - AI chaos: 10+ AI tools, no strategy, no integration
  - No AI ROI: €50K-€200K AI spend, unclear impact
  - Competitor gap: Competitors 2-3x faster (AI-Native vs. AI-Powered)
  - No AI clarity: Don't know which AI lever to pull first
- **Real Cost:** Destroys competitive position, limits growth, weakens board confidence, increases down-round risk

### Section 3: Solution
- **Headline:** `How AI Maturity Assessment Works`
- **8 AI Dimensions (AMF Framework):**
  1. AI Strategy (vision, roadmap, governance, investment)
  2. AI Infrastructure (tools, stack, data, platforms)
  3. AI Capabilities (skills, team, training, culture)
  4. AI Use Cases (adoption, integration, impact, scale)
  5. AI Operations (workflows, automation, monitoring, optimization)
  6. AI Decision-Making (AI-driven decisions, insights, recommendations, autonomy)
  7. AI Customer Experience (product, support, sales, marketing)
  8. AI Innovation (experimentation, R&D, partnerships, competitive advantage)
- **Day 1-2:** Data Collection & Maturity Analysis (8 dimensions analyzed)
- **Day 3-5 (Optional +€2K):** 90-Day AI Transformation Roadmap
- **Unique:** θ_index Score (0-1 scale)

### Section 4: Impact/Outcome
- **Metrics:**
  - AI Clarity +90% (low → high)
  - θ_index Roadmap +50-150% (0.3 → 0.45-0.75 target)
  - Efficiency Roadmap +30-80% (baseline → AI-powered)
- **Real Example:** Series A SaaS, €12M ARR, 80 employees. AI Clarity +95%, θ_index Roadmap +114% (0.35 → 0.75 target), Efficiency Roadmap +60%, AI ROI Roadmap +300%

### Section 5: Process (How We Work)
- Day-by-Day Breakdown (3-5 Days)
- Time Commitment (2-4 hours)
- **Pricing:**
  - Base Package: €3.9K (AI Maturity Report, 20-30 pages)
  - + Execution Bridge: +€2K (90-Day AI Transformation Roadmap)
  - Total: €5.9K (Base + Execution)
- Quality Guarantee (Expert-Grade, McKinsey-Level)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - AI problems but don't know what to fix first
  - θ_index 0.2-0.4, 10+ AI tools no strategy, €50K-€200K AI spend unclear ROI
  - Series A-B, €5M-€30M ARR, 30-150 people
  - Budget: €3.9K-€5.9K
- **Not a Fit:**
  - Need hands-on AI implementation → Power Up: AI Transformation (€23.6K)
  - Need full AI transformation → Boost: AI Maturity (€60K-€78K)

### Section 7: Final CTA
- **Headline:** `Ready to Get AI Clarity?`
- **Primary CTA:** Request Assessment (€3.9K)
- **Secondary:** Book Free Inflection Call (30 min)
- **FAQ:** Duration (3-5 days), Investment (€3.9K-€5.9K), Data needed, References, ROI, Difference to consultants, θ_index explanation

---

## Technische Details

### Komponenten-Wiederverwendung
- `TwinklingStars` für Hero-Hintergrund
- `useParallaxLayers` für Parallax-Effekte
- `useScrollAnimation` für Scroll-basierte Animationen
- `Accordion` für FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Spezifische Icons für AI Maturity Assessment
- `Brain` - AI / θ_index
- `Target` - AI Strategy / Clarity
- `Server` - AI Infrastructure
- `GraduationCap` - AI Capabilities / Training
- `Layers` - AI Use Cases
- `Workflow` - AI Operations
- `LineChart` - AI Decision-Making
- `Users` - AI Customer Experience
- `Lightbulb` - AI Innovation
- `TrendingUp` - Efficiency / Growth
- `Clock` - Fast Turnaround (3-5 Days)
- `FileText` - Board-Ready Report
- `Shield` - Quality Guarantee (McKinsey-Level)

### 8 AI Dimensions Framework (AMF)
Diese Seite verwendet 8 Dimensionen als strukturierenden Rahmen:

```text
+-----------------------------------------------------------+
|                    8 AI DIMENSIONS (AMF)                   |
+------------------+------------------+----------------------+
| 1. Strategy      | 2. Infrastructure| 3. Capabilities      |
| 4. Use Cases     | 5. Operations    | 6. Decision-Making   |
| 7. CX            | 8. Innovation    |                      |
+------------------+------------------+----------------------+
```

### Unterschied zu anderen Decision Support Pages
| Aspekt | GTM Review | VC DD Simulation | Pricing Review | Scaling Assessment | AI Assessment |
|--------|------------|------------------|----------------|-------------------|---------------|
| Dimensionen | 6 GTM | 8 DD | 5 Pricing | 4 Capabilities | 8 AI Dimensions |
| Fokus | GTM Performance | Fundraising | Monetization | Operations | AI Maturity |
| Preis | €3.9K-€5.9K | €5.9K-€9.8K | €3.9K-€5.9K | €3.9K-€5.9K | €3.9K-€5.9K |
| Unique | CAC Benchmarks | Investor-grade | ARPU Benchmarks | C₁-C₄ Framework | θ_index Score |
| Metriken | GTM Clarity, Decision Velocity, CAC Roadmap | DD Readiness, Red Flags Fixed, Fundraising Rate | Pricing Clarity, ARPU Roadmap, Margin Roadmap | Scaling Clarity, Capability Roadmap, Decision Velocity | AI Clarity, θ_index Roadmap, Efficiency Roadmap |

### θ_index Erklärung im FAQ
```text
θ_index = AI Maturity Index (0-1 scale)
- 0.0-0.2 = Traditional (keine AI-Nutzung)
- 0.2-0.5 = AI-Powered (Level 1: Tools, keine Integration)
- 0.5-0.8 = AI-Enabled (Level 2: Integration, keine Transformation)
- 0.8-1.0 = AI-Native (Level 3: AI in DNA)
```

### URL-Pattern
Top-Level Decision Support Page: `/solutions/ai-maturity-assessment`

---

## Zusammenfassung der Änderungen

| Datei | Änderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 6: Slug (ai-assessment → ai-maturity-assessment) + Metriken (outcome-fokussiert mit θ_index benchmarks) + CTA (learn-more) + 8 Dimensions Framework aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import (fünfte Decision Support Landing Page) |
| `src/pages/AIMaturityAssessment.tsx` | Neue Datei (7 Sektionen) mit 8 AI Dimensions Framework, θ_index Score, und Execution Bridge Upsell |

