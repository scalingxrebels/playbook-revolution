

# Plan: Workshop - Landing Page + Kachel-Update

## Briefing Review

### Wichtige Feststellungen

**1. URL-Format:**
- **Aktueller Slug (ID 34):** `workshop`
- **Briefing URL:** `/solutions/workshop`
- **Status:** Bereits korrekt - keine Aenderung erforderlich

**2. Duration:**
- **Aktuell:** 1-day (6-8 hours)
- **Briefing:** 1-2 Days
- **Empfehlung:** Briefing uebernehmen (erweitert auf 1-2 Tage Option)

**3. Pricing:**
| Quelle | Preis |
|--------|-------|
| Aktuelle Kachel | €2.5K-€5K |
| Briefing | €9.6K-€12.9K |

**Kritische Diskrepanz:** Briefing hat signifikant hoehere Preise. Briefing-Preis uebernehmen, da konsistent mit challenge-spezifischen Workshop-Preisen in challenges.ts.

**4. Neue Metriken (Outcome-fokussiert):**
- **Team Alignment:** +80%
- **Playbook Delivered:** 30-40 Pages
- **Execution Ready:** Day 1 (Immediate)

**5. Framework-Struktur:**
| Aktuell | Briefing |
|---------|----------|
| 9 Workshop Types erwaehnt | 9 Workshop Types + Bespoke Workshop (Custom) |

**Workshop Types:**
1. GTM Strategy Workshop
2. Growth Strategy Workshop
3. Pricing Strategy Workshop
4. Customer Success Workshop
5. Operations Excellence Workshop
6. Scaling Workshop
7. AI Transformation Workshop
8. Board Governance Workshop
9. Portfolio Excellence Workshop
+ Bespoke Workshop (Custom Topic)

**6. solutionType:**
- **Aktuell:** `keynote` (Workshops & Keynotes)
- **Briefing:** Badge zeigt "Training & Enablement"
- **Empfehlung:** Aktuellen solutionType `keynote` beibehalten (konsistent mit Filter-Kategorien), aber Badge-Text auf "Training & Enablement" aendern

**7. Workshop Format:**
- **Pre-Workshop:** 1-2 Wochen vorher (Questionnaire, Materials, Call)
- **Workshop Day:** 6-16 Stunden total (Morning + Afternoon)
- **Post-Workshop:** 1-2 Wochen danach (Finalize playbook, Recording, Follow-up call)

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 34, Zeilen 1252-1284)

| Feld | Aktuell | Neu |
|------|---------|-----|
| price | €2.5K-€5K | €9.6K-€12.9K |
| Duration | 1-day (6-8 hours) | 1-2 Days (6-16 hours) |
| problemEn | "Your team needs tactical training on a specific challenge—GTM, pricing, scaling, AI—but doesn't have the frameworks or playbooks to execute." | "Your team isn't aligned—and you're losing velocity. Marketing says one thing, Sales says another, Product is building the wrong features. Your team doesn't have the frameworks to execute. You need team alignment. Fast." |
| problemDe | (entsprechend) | "Dein Team ist nicht aligned—und ihr verliert Velocity. Marketing sagt das Eine, Sales das Andere, Product baut die falschen Features. Dein Team hat keine Frameworks zur Umsetzung. Du brauchst Team Alignment. Schnell." |
| solutionEn | "We deliver a 1-day tactical workshop (6-8 hours) for 10-30 participants..." | "We deliver tactical workshops in 1-2 days (6-16 hours) for 10-30 participants. Choose from 9 workshop types: GTM Strategy, Growth Strategy, Pricing Strategy, Customer Success, Operations Excellence, Scaling, AI Transformation, Board Governance, Portfolio Excellence. You get: Team Alignment +80%, Playbook (30-40 pages), Execution Ready Day 1." |
| solutionDe | (entsprechend) | "Wir liefern taktische Workshops in 1-2 Tagen (6-16 Stunden) fuer 10-30 Teilnehmer. Waehle aus 9 Workshop-Typen: GTM Strategy, Growth Strategy, Pricing Strategy, Customer Success, Operations Excellence, Scaling, AI Transformation, Board Governance, Portfolio Excellence. Du erhaeltst: Team Alignment +80%, Playbook (30-40 Seiten), Execution Ready Tag 1." |
| deliverablesEn | [1-day workshop, Workshop playbook, Recording] | [Team Alignment: +80%, Playbook: 30-40 Pages, Execution Ready: Day 1] |
| deliverablesDe | (entsprechend) | [Team Alignment: +80%, Playbook: 30-40 Seiten, Execution Ready: Tag 1] |
| impactEn | "Train 10-30 participants in 1 day..." | "Align 10-30 participants in 1-2 days. Get tactical frameworks and playbooks to execute immediately. Predict 5-10x ROI from team alignment and execution velocity." |
| impactDe | (entsprechend) | "Aligniere 10-30 Teilnehmer in 1-2 Tagen. Erhalte taktische Frameworks und Playbooks zur sofortigen Umsetzung. Prognostiziere 5-10x ROI durch Team Alignment und Execution Velocity." |
| primaryCtaEn | Book Workshop | More About Workshop |
| primaryCtaDe | Workshop buchen | Mehr ueber Workshop |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/workshop |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const Workshop = lazy(() => import("./pages/Workshop"));

// Route (nach CustomAnalysisReport):
<Route path="/solutions/workshop" element={<Workshop />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/Workshop.tsx`

### Section 1: Hero
- **Breadcrumb:** `Solutions > Workshop`
- **Badge:** `Training & Enablement · 1-2 Days · €9.6K-€12.9K`
- **Headline:** `Tactical Workshop—In 1-2 Days`
- **Subheadline:** Get your team aligned and trained in 1-2 days. Choose from 9 workshop types...
- **Stats:** Team Alignment +80% | Playbook 30-40 Pages | Execution Ready Day 1
- **Trust Badges:** Fast Alignment (1-2 Days), Scalable (10-30 Participants), Actionable Playbook (30-40 Pages)

### Section 2: Problem
- **Headline:** `Your Team Isn't Aligned—And You're Losing Velocity`
- **Symptome:**
  - Team misalignment: Marketing, Sales, Product not aligned (different priorities)
  - No frameworks: Team lacks playbooks (no standardized approach)
  - Low execution velocity: Decisions take 7-14 days (no clarity)
  - Strategic confusion: Team doesn't understand strategy (no shared language)
  - Training gap: Team needs tactical training (not just theory)
- **Real Cost:** Destroys execution velocity, limits growth potential, weakens team confidence, increases competitive risk

### Section 3: Solution (9 Workshop Types)
- **Headline:** `9 Workshop Types—Choose Your Focus`
- **9 Workshop Types (Accordion):**
  1. **GTM Strategy Workshop**
     - When to choose: GTM strategy unclear, team misaligned, need GTM frameworks
     - What we cover: ICP Definition, Value Proposition, GTM Channels, GTM Playbooks
     - What you get: 1-2 Day Workshop, GTM Strategy Playbook (30-40 pages), Recording
     - Typical outcome: Team Alignment +85%, GTM Clarity +80%
  2. **Growth Strategy Workshop**
     - When to choose: growth strategy unclear, team doesn't know which lever
     - What we cover: Growth Engines, Growth Drivers, Growth Bottlenecks, Growth Playbooks
     - Typical outcome: Team Alignment +85%, Growth Clarity +80%
  3. **Pricing Strategy Workshop**
     - When to choose: pricing broken, ARPU stagnant, discounting high
     - What we cover: Pricing Strategy, Pricing Models, Packaging, Pricing Playbooks
     - Typical outcome: Team Alignment +85%, Pricing Clarity +80%
  4. **Customer Success Workshop**
     - When to choose: churn >5%, NRR <100%
     - What we cover: CS Strategy, Retention Drivers, Churn Drivers, CS Playbooks
     - Typical outcome: Team Alignment +85%, CS Clarity +80%
  5. **Operations Excellence Workshop**
     - When to choose: operations chaotic, meetings 50/week
     - What we cover: Operational Efficiency, Operational Debt, Scaling Readiness, Operations Playbooks
     - Typical outcome: Team Alignment +85%, Operations Clarity +80%
  6. **Scaling Workshop**
     - When to choose: scaling broken, operational debt high
     - What we cover: Scaling Readiness, Scaling Bottlenecks, Scaling Playbooks, Organizational Design
     - Typical outcome: Team Alignment +85%, Scaling Clarity +80%
  7. **AI Transformation Workshop**
     - When to choose: AI strategy missing, theta_index 0.2-0.4
     - What we cover: AI Maturity, AI Use Cases, AI ROI, AI Playbooks
     - Typical outcome: Team Alignment +85%, AI Clarity +90%
  8. **Board Governance Workshop**
     - When to choose: board governance broken, meetings unproductive
     - What we cover: Board Strategy, Board Meetings, Board Reporting, Board Playbooks
     - Typical outcome: Team Alignment +85%, Board Clarity +80%
  9. **Portfolio Excellence Workshop**
     - When to choose: portfolio lacks synergy, operating partners overwhelmed
     - What we cover: Portfolio Strategy, Portfolio Synergies, Portfolio Playbooks, Operating Partner Enablement
     - Typical outcome: Team Alignment +85%, Portfolio Clarity +80%
  + **Bespoke Workshop (Custom Topic)**
     - When to choose: challenge not covered by standard workshops
     - Custom pricing

### Section 4: Impact/Outcome
- **Metrics:**
  - Team Alignment +80% (misaligned to aligned)
  - Playbook Delivered (30-40 pages, actionable)
  - Execution Ready Day 1 (immediate)
- **Real Examples:**
  - Example 1: Series B SaaS (GTM Strategy Workshop) - Team Alignment +85%, CAC Reduction Plan -40%
  - Example 2: Series A SaaS (AI Transformation Workshop) - Team Alignment +90%, theta_index Roadmap +114%
  - Example 3: Series A-B VC (Portfolio Excellence Workshop) - Team Alignment +85%, Operating Partner Efficiency +80%

### Section 5: Process (How We Work)
- **Pre-Workshop (1-2 Weeks Before):** Questionnaire, Materials, Call
- **Workshop Day (1-2 Days):** Facilitation, Hands-on exercises, Framework training, Playbook creation
- **Post-Workshop (1-2 Weeks After):** Finalize playbook, Recording, Follow-up call
- **Pricing:**
  - 1-Day Workshop: €9.6K (6-8 hours, 10-30 participants)
  - 2-Day Workshop: €12.9K (12-16 hours, 10-30 participants)
  - Bespoke Workshop: Custom pricing
- Quality Guarantee (Hands-on, Actionable Playbook, Execution Ready)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Need team alignment on specific challenge
  - Have 10-30 participants
  - Series A-B or VC/PE with portfolio
  - Budget: €9.6K-€12.9K
- **Not a Fit:**
  - Need hands-on implementation: Power Up (€23.6K) or Boost (€60K-€78K)
  - Have <10 participants: Expert Session (€490-€890)
  - Have >30 participants: Custom pricing

### Section 7: Final CTA
- **Headline:** `Ready to Align Your Team?`
- **Primary CTA:** Book Workshop (€9.6K)
- **Step 2:** Choose Your Workshop Type (9 types listed)
- **Step 3:** Prepare Your Team (pre-work)
- **Secondary:** Book Free Inflection Call (30 min)
- **FAQ:** Duration, Investment, Participants, References, ROI, Remote/On-site, Custom topic, Recording

---

## Technische Details

### Komponenten-Wiederverwendung
- `TwinklingStars` fuer Hero-Hintergrund
- `useParallaxLayers` fuer Parallax-Effekte
- `useScrollAnimation` fuer Scroll-basierte Animationen
- `Accordion` fuer 9 Workshop Types und FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Spezifische Icons fuer Workshop
- `GraduationCap` - Workshop / Training
- `TrendingUp` - GTM Strategy / Growth Strategy
- `DollarSign` - Pricing Strategy
- `HeartHandshake` - Customer Success
- `Settings` - Operations Excellence
- `Rocket` - Scaling
- `Brain` - AI Transformation
- `Users` - Board Governance
- `Briefcase` - Portfolio Excellence
- `Sparkles` - Bespoke Workshop
- `Clock` - Fast Alignment (1-2 Days)
- `FileText` - Playbook (30-40 Pages)
- `Zap` - Execution Ready Day 1
- `UserCheck` - Participants (10-30)
- `Video` - Recording (90 days access)

### 9 Workshop Types Framework
Diese Seite verwendet 9 Workshop-Typen als strukturierendes Element (Section 3):

```text
+-----------------------------------------------------------+
|                   9 WORKSHOP TYPES                         |
+------------------+------------------+----------------------+
| 1. GTM           | 2. Growth        | 3. Pricing          |
|    Strategy      |    Strategy      |    Strategy         |
+------------------+------------------+----------------------+
| 4. Customer      | 5. Operations    | 6. Scaling          |
|    Success       |    Excellence    |                     |
+------------------+------------------+----------------------+
| 7. AI            | 8. Board         | 9. Portfolio        |
|    Transformation|    Governance    |    Excellence       |
+------------------+------------------+----------------------+
| + Bespoke (Custom Topic)                                   |
+-----------------------------------------------------------+
```

### Unterschied zu anderen Workshops & Keynotes Pages

Diese Seite ist die zentrale Workshop-Landing-Page, die alle 9 Workshop-Typen zusammenfasst. Sie unterscheidet sich von:
- **Keynote Landing Page:** Fokussiert auf 90-min Keynotes (€3.9K-€7.6K)
- **Challenge-spezifische Workshops:** In challenges.ts referenziert, aber nicht als separate Pages

### Workshop Format Details

| Aspekt | 1-Day Workshop | 2-Day Workshop |
|--------|----------------|----------------|
| Dauer | 6-8 Stunden | 12-16 Stunden |
| Preis | €9.6K | €12.9K |
| Format | Morning (3-4h) + Afternoon (3-4h) | 2x (Morning + Afternoon) |
| Playbook | 30-40 Seiten | 30-40 Seiten |
| Teilnehmer | 10-30 | 10-30 |
| Recording | 90 Tage Zugang | 90 Tage Zugang |
| Follow-up | 1x 60-min Call | 1x 60-min Call |

### URL-Pattern
Top-Level Workshops & Keynotes Page: `/solutions/workshop`

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 34: Price (€2.5K-€5K zu €9.6K-€12.9K) + Duration (1-day zu 1-2 days) + Metriken (outcome-fokussiert) + CTA (learn-more) aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import (erste Workshops & Keynotes Landing Page) |
| `src/pages/Workshop.tsx` | Neue Datei (7 Sektionen) mit 9 Workshop Types Framework, Workshop Selector UI (Accordion), Pre/During/Post Workshop Process, und Bespoke Workshop Option |

