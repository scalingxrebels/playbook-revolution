

# Plan: Investor-Readiness Pitch Deck Check - Landing Page + Kachel-Update

## Briefing Review

### Wichtige Feststellungen

**1. URL-Format:**
- **Aktueller Slug (ID 7):** `pitch-deck-check`
- **Briefing URL:** `/solutions/investor-readiness-pitch-deck-check`
- **Empfehlung:** Briefing uebernehmen (vollstaendiger, konsistenter Name)

**2. Duration:**
3-5 Days - bereits korrekt im Briefing

**3. Pricing:**
| Quelle | Preis |
|--------|-------|
| Aktuelle Kachel | €1.9K-€2.5K |
| Briefing | €1.9K-€2.5K |

**Status:** Bereits korrekt - keine Aenderung erforderlich

**4. Neue Metriken (Outcome-fokussiert):**
- **Deck Quality:** +80%
- **Investor Q&A Prepared:** 20-30 Questions
- **Fundraising Success Rate:** +30-50pp

**5. Framework-Struktur:**
| Aktuell | Briefing |
|---------|----------|
| Keine klaren Dimensionen | 10 Dimensionen: Story & Narrative, Traction & Metrics, Market & Opportunity, Product & Technology, Business Model, Team, Financials, Ask & Use of Funds, Design & Visual, Investor Readiness |

**Empfehlung:** Briefing-Framework mit 10 Dimensionen uebernehmen

**6. Report-Laenge:**
| Quelle | Report |
|--------|--------|
| Aktuelle Kachel | Keine Angabe |
| Briefing | 10-15 pages (investor-grade) |

**7. Add-On Pricing:**
- **Aktuell:** +€600 Investor Questions Simulation, +€2K Revised Deck
- **Briefing:** +€600 Investor Q&A Simulation

**Unterschied:** Briefing entfernt "+€2K Revised Deck" Option und fokussiert auf Q&A Simulation. Briefing uebernehmen.

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 7, Zeilen 307-343)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | pitch-deck-check | investor-readiness-pitch-deck-check |
| problemEn | "Your pitch deck isn't landing. Investors are asking tough questions, and you're not getting to the next round." | "Your pitch deck isn't investor-ready—and you don't know it. Deck quality is 30% (benchmark: 90%+ for Series B+). Meeting rate is 10-20% (benchmark: 40-60%). You don't know what's broken." |
| problemDe | (entsprechend) | "Dein Pitch Deck ist nicht investor-ready—und du weisst es nicht. Deck Quality ist 30% (Benchmark: 90%+ fuer Series B+). Meeting Rate ist 10-20% (Benchmark: 40-60%). Du weisst nicht, was kaputt ist." |
| solutionEn | "We review your pitch deck in 3-5 days: story, traction, financials..." | "We review your pitch deck in 3-5 days (10 dimensions: Story, Traction, Market, Product, Business Model, Team, Financials, Ask, Design, Investor Readiness). You get: Deck Quality +80%, Investor Q&A Prepared 20-30, Fundraising Success Rate +30-50pp—with investor-grade report." |
| solutionDe | (entsprechend) | "Wir reviewen dein Pitch Deck in 3-5 Tagen (10 Dimensionen: Story, Traction, Market, Product, Business Model, Team, Financials, Ask, Design, Investor Readiness). Du erhaeltst: Deck Quality +80%, Investor Q&A Prepared 20-30, Fundraising Success Rate +30-50pp—mit Investor-Grade Report." |
| deliverablesEn | [Pitch deck review (slide-by-slide), Investor Q&A prep (20-30 questions), Revised deck (optional, +€2K), Optional: Investor Questions Simulation (+€600)] | [Deck Quality: +80%, Investor Q&A: 20-30 Prepared, Fundraising Rate: +30-50pp] |
| deliverablesDe | (entsprechend) | [Deck Quality: +80%, Investor Q&A: 20-30 Prepared, Fundraising Rate: +30-50pp] |
| impactEn | "Predict 20-40% higher investor confidence. Get to the next round faster." | "Know exactly what to fix in your deck. Predict 10-30x ROI from fundraising success rate and valuation increase." |
| impactDe | (entsprechend) | "Wisse genau, was du in deinem Deck fixen sollst. Prognostiziere 10-30x ROI durch Fundraising-Erfolgsrate und Bewertungssteigerung." |
| primaryCtaEn | Request Check | More About Pitch Deck Check |
| primaryCtaDe | Check anfragen | Mehr ueber Pitch Deck Check |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/investor-readiness-pitch-deck-check |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const InvestorReadinessPitchDeckCheck = lazy(() => import("./pages/InvestorReadinessPitchDeckCheck"));

// Route (nach PortfolioAssessment):
<Route path="/solutions/investor-readiness-pitch-deck-check" element={<InvestorReadinessPitchDeckCheck />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/InvestorReadinessPitchDeckCheck.tsx`

### Section 1: Hero
- **Breadcrumb:** `Solutions > Investor-Readiness Pitch Deck Check`
- **Badge:** `Decision Support · 3-5 Days · €1.9K-€2.5K`
- **Headline:** `Expert Pitch Deck Review—In 3-5 Days`
- **Subheadline:** Get your pitch deck investor-ready in 3-5 days...
- **Stats:** Deck Quality +80% | Investor Q&A 20-30 Prepared | Fundraising Rate +30-50pp
- **Trust Badges:** Fast Turnaround (3-5 Days), Investor-Grade Report (10-15 Pages), Investor Perspective (What VCs Actually Check)

### Section 2: Problem
- **Headline:** `Your Pitch Deck Isn't Investor-Ready—And You Don't Know It`
- **Symptome:**
  - Weak deck: No story, unclear traction, missing metrics (deck quality 30%)
  - Low meeting rate: 10-20% (benchmark: 40-60% for strong deck)
  - No investor perspective: Don't know what VCs actually check
  - Unclear positioning: Not clear why you're better than competitors
  - Fundraising risk: Can't raise next round with weak deck
- **Real Cost:** Destroys fundraising ability, limits valuation, extends deal timeline, increases down-round risk

### Section 3: Solution
- **Headline:** `How Investor-Readiness Pitch Deck Check Works`
- **10 Dimensions:**
  1. Story & Narrative (structure, problem-solution fit, emotional connection, flow)
  2. Traction & Metrics (traction clarity, metrics quality, growth story, unit economics)
  3. Market & Opportunity (TAM/SAM/SOM, timing, competitive positioning, category leadership)
  4. Product & Technology (product clarity, technology moat, roadmap, AI integration)
  5. Business Model (revenue model, pricing, GTM, unit economics)
  6. Team (strength, completeness, credibility, advisors)
  7. Financials (clarity, projections, capital efficiency, path to profitability)
  8. Ask & Use of Funds (ask clarity, use clarity, milestones, next round)
  9. Design & Visual (design quality, visual clarity, consistency, readability)
  10. Investor Readiness (investor perspective, red flags, missing elements, overall quality)
- **Day 1-2:** Deck Review & Analysis (10 dimensions reviewed)
- **Day 3-5 (Optional +€600):** Investor Q&A Simulation
- **Unique:** Deck Quality Score (0-100%)

### Section 4: Impact/Outcome
- **Metrics:**
  - Deck Quality +80% (30% to 90%+)
  - Investor Q&A Prepared (20-30 questions)
  - Fundraising Success Rate +30-50pp (10% to 40-60%)
- **Real Example:** Series A SaaS, €8M ARR, 60 employees. Deck Quality +85%, Investor Q&A Prepared (25 questions), Fundraising Success Rate +45pp, Valuation +20% (€30M to €36M)

### Section 5: Process (How We Work)
- Day-by-Day Breakdown (3-5 Days)
- Time Commitment (1-2 hours)
- **Pricing:**
  - Base Package: €1.9K (Pitch Deck Review Report, 10-15 pages)
  - + Investor Q&A Simulation: +€600 (20-30 questions, answers, red flags)
  - Total: €2.5K (Base + Q&A Simulation)
- Quality Guarantee (Investor-Grade, VC-Level Feedback)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Pitch deck but don't know if investor-ready
  - Deck quality 30-50%, meeting rate 10-20%
  - Series A-B, €5M-€30M ARR, fundraising
  - Budget: €1.9K-€2.5K
- **Not a Fit:**
  - Need hands-on deck creation: Power Up: Investor-Readiness (€23.6K)
  - Already have investor-ready deck: Expert Session (€490-€890)
  - Need full fundraising support: Boost: Board Excellence (€60K-€78K)
  - Don't have a deck yet: Power Up: Investor-Readiness (€23.6K)

### Section 7: Final CTA
- **Headline:** `Ready to Get Investor-Ready Deck?`
- **Primary CTA:** Request Deck Check (€1.9K)
- **Secondary:** Book Free Inflection Call (30 min)
- **FAQ:** Duration (3-5 days), Investment (€1.9K-€2.5K), Format (PDF/PowerPoint), References, ROI, Difference to consultants, Deck redesign clarification

---

## Technische Details

### Komponenten-Wiederverwendung
- `TwinklingStars` fuer Hero-Hintergrund
- `useParallaxLayers` fuer Parallax-Effekte
- `useScrollAnimation` fuer Scroll-basierte Animationen
- `Accordion` fuer FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Spezifische Icons fuer Pitch Deck Check
- `Presentation` - Pitch Deck / Story
- `TrendingUp` - Traction / Metrics / Growth
- `Target` - Market / Opportunity
- `Code` - Product / Technology
- `DollarSign` - Business Model / Pricing
- `Users` - Team
- `Calculator` - Financials
- `HandCoins` - Ask / Use of Funds
- `Palette` - Design / Visual
- `CheckCircle` - Investor Readiness
- `Clock` - Fast Turnaround (3-5 Days)
- `FileText` - Investor-Grade Report
- `Eye` - Investor Perspective

### 10 Pitch Deck Dimensions Framework
Diese Seite verwendet 10 Dimensionen als strukturierenden Rahmen:

```text
+-----------------------------------------------------------+
|                 10 PITCH DECK DIMENSIONS                   |
+------------------+------------------+----------------------+
| 1. Story         | 2. Traction      | 3. Market           |
| 4. Product       | 5. Business      | 6. Team             |
| 7. Financials    | 8. Ask           | 9. Design           |
| 10. Investor     |                  |                      |
|     Readiness    |                  |                      |
+------------------+------------------+----------------------+
```

### Unterschied zu anderen Decision Support Pages
| Aspekt | GTM Review | VC DD Simulation | Pricing Review | Scaling Assessment | AI Assessment | Portfolio Assessment | Pitch Deck Check |
|--------|------------|------------------|----------------|-------------------|---------------|---------------------|------------------|
| Dimensionen | 6 GTM | 8 DD | 5 Pricing | 4 Capabilities | 8 AI Dimensions | 6 Portfolio Dimensions | 10 Deck Dimensions |
| Fokus | GTM Performance | Fundraising | Monetization | Operations | AI Maturity | Portfolio Performance | Pitch Deck Quality |
| ICP | Series A-B | Series A-B | Series A-B | Series A-B | Series A-B | VC/PE (10-50 Companies) | Series A-B (Fundraising) |
| Preis | €3.9K-€5.9K | €5.9K-€9.8K | €3.9K-€5.9K | €3.9K-€5.9K | €3.9K-€5.9K | €3.9K-€5.9K | €1.9K-€2.5K |
| Unique | CAC Benchmarks | Investor-grade | ARPU Benchmarks | C1-C4 Framework | theta_index Score | Portfolio Heatmap | Deck Quality Score |
| Metriken | GTM Clarity, Decision Velocity, CAC Roadmap | DD Readiness, Red Flags Fixed, Fundraising Rate | Pricing Clarity, ARPU Roadmap, Margin Roadmap | Scaling Clarity, Capability Roadmap, Decision Velocity | AI Clarity, theta_index Roadmap, Efficiency Roadmap | Portfolio Clarity, Value Roadmap, LP Confidence | Deck Quality, Investor Q&A, Fundraising Rate |

### URL-Pattern
Top-Level Decision Support Page: `/solutions/investor-readiness-pitch-deck-check`

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 7: Slug (pitch-deck-check zu investor-readiness-pitch-deck-check) + Metriken (outcome-fokussiert mit 10 Dimensionen) + CTA (learn-more) aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import (siebte Decision Support Landing Page) |
| `src/pages/InvestorReadinessPitchDeckCheck.tsx` | Neue Datei (7 Sektionen) mit 10 Deck Dimensions Framework, Deck Quality Score, und Investor Q&A Simulation Upsell |

