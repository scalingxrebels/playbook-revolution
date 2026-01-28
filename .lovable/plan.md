

# Plan: Custom Analysis & Report - Landing Page + Kachel-Update

## Briefing Review

### Wichtige Feststellungen

**1. URL-Format:**
- **Aktueller Slug (ID 10):** `custom-analysis`
- **Briefing URL:** `/solutions/custom-analysis-report`
- **Empfehlung:** Briefing uebernehmen (vollstaendiger Name mit "report")

**2. Duration:**
- **Aktuell:** 5-7 days
- **Briefing:** 3-5 days
- **Empfehlung:** Briefing uebernehmen (schnellere Lieferung, konsistent mit anderen Decision Support Pages)

**3. Pricing:**
| Quelle | Preis |
|--------|-------|
| Aktuelle Kachel | €3.9K-€5.9K |
| Briefing | €3.9K-€5.9K |

**Status:** Bereits korrekt - keine Aenderung erforderlich

**4. Neue Metriken (Outcome-fokussiert):**
- **Analysis Clarity:** +85%
- **Strategic Roadmap:** +30-60%
- **Decision Velocity:** +50%

**5. Framework-Struktur:**
| Aktuell | Briefing |
|---------|----------|
| 6 Analysis Types (Growth Strategy Review, PMF Audit, CS Audit, Operations Audit, AI Strategy Design, Portfolio Synergy Playbook) | 7 Analysis Types (+Board Decision Memo hinzugefuegt) |

**Empfehlung:** Briefing-Framework mit 7 Analysis Types uebernehmen

**6. Report-Laenge:**
| Quelle | Report |
|--------|--------|
| Aktuelle Kachel | 15-25 pages |
| Briefing | 15-25 pages (board-ready) |

**Status:** Bereits korrekt

**7. Besonderheit dieser Page:**
Diese Seite ist einzigartig im Decision Support Bereich, da sie **7 verschiedene Analyse-Typen** anbietet statt eines einzelnen Fokus. Die Section 3 wird entsprechend als "7 Analysis Types - Choose Your Focus" strukturiert.

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 10, Zeilen 417-455)

| Feld | Aktuell | Neu |
|------|---------|-----|
| slug | custom-analysis | custom-analysis-report |
| Duration | 5-7 days | 3-5 days |
| Analysis Types | 6 Types | 7 Types (+Board Decision Memo) |
| problemEn | "You have a unique challenge that doesn't fit a standard offering..." | "You have a specific challenge—but no clear answer. Your challenge is unique: growth strategy unclear, PMF eroding, customer success broken, operations chaotic, AI strategy missing, portfolio lacks synergy, or board needs a decision. You need expert analysis. Fast." |
| problemDe | (entsprechend) | "Du hast eine spezifische Herausforderung—aber keine klare Antwort. Deine Challenge ist einzigartig: Growth Strategy unklar, PMF erodiert, Customer Success kaputt, Operations chaotisch, AI Strategy fehlt, Portfolio hat keine Synergy, oder Board braucht eine Entscheidung. Du brauchst Experten-Analyse. Schnell." |
| solutionEn | "We create a custom analysis in 5-7 days..." | "We conduct expert analysis in 3-5 days. Choose from 7 analysis types: Growth Strategy Review, PMF Audit, Customer Success Audit, Operations Audit, AI Strategy Design, Portfolio Synergy Playbook, Board Decision Memo. You get: Analysis Clarity +85%, Strategic Roadmap +30-60%, Decision Velocity +50%—with board-ready report." |
| solutionDe | (entsprechend) | "Wir fuehren Experten-Analyse in 3-5 Tagen durch. Waehle aus 7 Analyse-Typen: Growth Strategy Review, PMF Audit, Customer Success Audit, Operations Audit, AI Strategy Design, Portfolio Synergy Playbook, Board Decision Memo. Du erhaeltst: Analysis Clarity +85%, Strategic Roadmap +30-60%, Decision Velocity +50%—mit Board-Ready Report." |
| deliverablesEn | [Custom analysis report, Decision-grade recommendations, Implementation roadmap, Optional: Transformation Roadmap] | [Analysis Clarity: +85%, Strategic Roadmap: +30-60%, Decision Velocity: +50%] |
| deliverablesDe | (entsprechend) | [Analysis Clarity: +85%, Strategic Roadmap: +30-60%, Decision Velocity: +50%] |
| impactEn | "Get decision-ready analysis tailored to your unique challenge..." | "Know exactly what to do next. Predict 10-30x ROI from strategic clarity and decision velocity." |
| impactDe | (entsprechend) | "Wisse genau, was als naechstes zu tun ist. Prognostiziere 10-30x ROI durch strategische Klarheit und Decision Velocity." |
| primaryCtaEn | Discuss Scope | More About Custom Analysis |
| primaryCtaDe | Scope besprechen | Mehr ueber Custom Analysis |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/custom-analysis-report |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const CustomAnalysisReport = lazy(() => import("./pages/CustomAnalysisReport"));

// Route (nach InvestorReadinessPitchDeckCheck):
<Route path="/solutions/custom-analysis-report" element={<CustomAnalysisReport />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/CustomAnalysisReport.tsx`

### Section 1: Hero
- **Breadcrumb:** `Solutions > Custom Analysis & Report`
- **Badge:** `Decision Support · 3-5 Days · €3.9K-€5.9K`
- **Headline:** `Custom Expert Analysis—In 3-5 Days`
- **Subheadline:** Get expert analysis tailored to your challenge in 3-5 days. Choose from 7 analysis types...
- **Stats:** Analysis Clarity +85% | Strategic Roadmap +30-60% | Decision Velocity +50%
- **Trust Badges:** Fast Turnaround (3-5 Days), Board-Ready Report (15-25 Pages), Expert Analysis (McKinsey-Level)

### Section 2: Problem
- **Headline:** `You Have a Specific Challenge—But No Clear Answer`
- **Symptome:**
  - Strategic uncertainty: Don't know which direction to take
  - No expert perspective: Internal team lacks expertise
  - Board pressure: Board asking questions, no clear answers
  - Decision paralysis: Can't decide without data
  - Time pressure: Need answers fast (3-5 days, not 2-4 weeks)
- **Real Cost:** Destroys strategic momentum, limits growth potential, weakens board confidence, increases competitive risk

### Section 3: Solution (7 Analysis Types)
- **Headline:** `7 Custom Analysis Types—Choose Your Focus`
- **7 Analysis Types (Cards/Accordion):**
  1. **Growth Strategy Review**
     - When to choose: growth strategy unclear, growth stalling, board asking
     - What we analyze: growth engines, drivers, bottlenecks, opportunities
     - What you get: Growth Strategy Report (15-25 pages), Growth Roadmap (90-day)
     - Typical outcome: Growth Clarity +85%, Growth Roadmap +30-50%
  2. **Product-Market Fit (PMF) Audit**
     - When to choose: PMF eroding, PMF Score <0.6, board asking about PMF
     - What we analyze: PMF Score, customer feedback, product usage, market positioning
     - What you get: PMF Audit Report (15-25 pages), PMF Roadmap (90-day)
     - Typical outcome: PMF Clarity +90%, PMF Roadmap +40-60%
  3. **Customer Success Audit**
     - When to choose: churn >5%, NRR <100%, board asking about churn
     - What we analyze: CS operations, retention drivers, churn drivers, expansion
     - What you get: CS Audit Report (15-25 pages), Retention Roadmap (90-day)
     - Typical outcome: CS Clarity +85%, Retention Roadmap +30-50%
  4. **Operations Audit**
     - When to choose: operations chaotic, scaling broken, board asking about operations
     - What we analyze: operational efficiency, operational debt, scaling readiness, org design
     - What you get: Operations Audit Report (15-25 pages), Operations Roadmap (90-day)
     - Typical outcome: Operations Clarity +85%, Efficiency Roadmap +30-60%
  5. **AI Strategy Design**
     - When to choose: AI strategy missing, theta_index 0.2-0.4, board asking about AI
     - What we analyze: AI maturity, AI use cases, AI ROI, AI roadmap
     - What you get: AI Strategy Report (15-25 pages), AI Roadmap (90-day)
     - Typical outcome: AI Clarity +90%, theta_index Roadmap +50-150%
  6. **Portfolio Synergy Playbook**
     - When to choose: portfolio lacks synergy, no cross-portfolio value, LPs asking
     - What we analyze: portfolio synergies, gaps, value creation, strategy
     - What you get: Portfolio Synergy Playbook (20-30 pages), Synergy Roadmap (90-day)
     - Typical outcome: Portfolio Clarity +85%, Synergy Roadmap +30-60%
  7. **Board Decision Memo**
     - When to choose: board needs decision (M&A, Market Expansion, Pricing Reset)
     - What we analyze: decision options, trade-offs, recommendations, roadmap
     - What you get: Board Decision Memo (10-15 pages), Decision Framework
     - Typical outcome: Decision Clarity +90%, Board Confidence +50-70%

### Section 4: Impact/Outcome
- **Metrics:**
  - Analysis Clarity +85% (unclear to clear roadmap)
  - Strategic Roadmap +30-60% (no path to clear path)
  - Decision Velocity +50% (7-14 days to 3-7 days)
- **Real Examples:**
  - Example 1: Series B SaaS (Growth Strategy Review)
  - Example 2: Series A SaaS (PMF Audit)
  - Example 3: Series A-B VC (Portfolio Synergy Playbook)

### Section 5: Process (How We Work)
- Day-by-Day Breakdown (3-5 Days)
- Time Commitment (2-4 hours)
- **Pricing:**
  - Base Package: €3.9K (Custom Analysis Report, 15-25 pages)
  - + Execution Bridge: +€2K (90-Day Roadmap)
  - Total: €5.9K (Base + Execution)
- **7 Analysis Types Available** (Liste)
- Quality Guarantee (Expert-Grade, McKinsey-Level)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Specific challenge that needs expert analysis
  - Series A-B or VC/PE with portfolio
  - Budget: €3.9K-€5.9K
- **Not a Fit:**
  - Need hands-on implementation: Power Up (€23.6K) or Boost (€60K-€78K)
  - Challenge covered by standard assessment: GTM Review, Scaling Assessment, AI Assessment, Portfolio Assessment

### Section 7: Final CTA
- **Headline:** `Ready to Get Expert Analysis?`
- **Primary CTA:** Request Custom Analysis (€3.9K)
- **Step 2:** Choose Your Analysis Type (7 types listed)
- **Step 3:** Decide if you need Execution Bridge (+€2K)
- **Secondary:** Book Free Inflection Call (30 min)
- **FAQ:** Duration, Investment, Which analysis type, References, ROI, Difference to consultants, Custom challenge

---

## Technische Details

### Komponenten-Wiederverwendung
- `TwinklingStars` fuer Hero-Hintergrund
- `useParallaxLayers` fuer Parallax-Effekte
- `useScrollAnimation` fuer Scroll-basierte Animationen
- `Accordion` fuer 7 Analysis Types und FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Spezifische Icons fuer Custom Analysis & Report
- `FileSearch` - Custom Analysis
- `TrendingUp` - Growth Strategy Review
- `Target` - PMF Audit
- `HeartHandshake` - Customer Success Audit
- `Settings` - Operations Audit
- `Brain` - AI Strategy Design
- `Briefcase` - Portfolio Synergy Playbook
- `FileText` - Board Decision Memo
- `Clock` - Fast Turnaround (3-5 Days)
- `FileText` - Board-Ready Report
- `Shield` - Quality Guarantee (McKinsey-Level)
- `Lightbulb` - Analysis Clarity
- `Map` - Strategic Roadmap
- `Zap` - Decision Velocity

### 7 Analysis Types Framework
Diese Seite verwendet 7 Analyse-Typen als strukturierendes Element (Section 3):

```text
+-----------------------------------------------------------+
|                   7 ANALYSIS TYPES                         |
+------------------+------------------+----------------------+
| 1. Growth        | 2. PMF Audit     | 3. CS Audit         |
|    Strategy      |                  |                     |
+------------------+------------------+----------------------+
| 4. Operations    | 5. AI Strategy   | 6. Portfolio        |
|    Audit         |    Design        |    Synergy          |
+------------------+------------------+----------------------+
| 7. Board         |                  |                     |
|    Decision Memo |                  |                     |
+------------------+------------------+----------------------+
```

### Unterschied zu anderen Decision Support Pages
| Aspekt | Standard Assessments | Custom Analysis & Report |
|--------|---------------------|--------------------------|
| Fokus | Single Challenge (GTM, Scaling, AI, Portfolio, Pitch Deck) | Any Challenge (7 Types) |
| Dimensionen | 4-10 Dimensionen pro Typ | Flexibel je nach Analyse-Typ |
| ICP | Series A-B | Series A-B ODER VC/PE |
| Preis | €1.9K-€5.9K | €3.9K-€5.9K |
| Unique | Spezialisiert | Flexibel (7 Analyse-Typen zur Auswahl) |

### UI-Besonderheit: Analysis Type Selector
Die Section 3 benoetigt eine besondere UI-Komponente:
- 7 Analysis Types als Accordion oder Tab-basierte Cards
- Jeder Type zeigt: When to choose, What we analyze, What you get, Typical outcome
- Mobile: Accordion-Ansicht
- Desktop: Eventuell Grid mit expandierbaren Cards

### URL-Pattern
Top-Level Decision Support Page: `/solutions/custom-analysis-report`

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 10: Slug (custom-analysis zu custom-analysis-report) + Duration (5-7 zu 3-5 days) + 7 Analysis Types + Metriken (outcome-fokussiert) + CTA (learn-more) aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import (achte Decision Support Landing Page) |
| `src/pages/CustomAnalysisReport.tsx` | Neue Datei (7 Sektionen) mit 7 Analysis Types Framework, Analysis Type Selector UI, und Execution Bridge Upsell |

