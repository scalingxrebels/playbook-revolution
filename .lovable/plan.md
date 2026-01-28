
# Plan: Keynote - Landing Page + Kachel-Update

## Briefing Review

### Wichtige Feststellungen

**1. URL-Format:**
- **Aktueller Slug (ID 37):** `keynote`
- **Briefing URL:** `/solutions/keynote`
- **Status:** Slug korrekt, Route fehlt noch

**2. Duration:**
- **Aktuell:** 60-90 min keynote + 30 min Q&A
- **Briefing:** 60-90 min keynote + 15-30 min Q&A
- **Empfehlung:** Briefing uebernehmen (15-30 min Q&A)

**3. Pricing:**
| Quelle | Preis |
|--------|-------|
| Aktuelle Kachel | €5K–€15K |
| Briefing | €4.9K (+€500 Recording) |

**Kritische Diskrepanz:** Briefing hat festen Preis statt Range. Briefing-Preis uebernehmen.

**4. Neue Metriken (Outcome-fokussiert):**
- **Audience:** 50-500 People (Scalable)
- **Inspiration:** High Impact (Memorable)
- **Takeaways:** 3-5 Actions (Actionable)

**5. Keynote Topics:**
| Aktuell (7 Topics) | Briefing (5 Topics) |
|-------------------|---------------------|
| AI-Native Scaling | AI-Native Scaling |
| Growth Momentum | Efficient Hypergrowth |
| Pricing Optimization | Pricing Strategy |
| Retention Excellence | Customer Success Excellence |
| Operational Excellence | (entfernt) |
| Board Excellence | Board Governance |
| Portfolio Excellence | (entfernt) |

**Empfehlung:** Briefing-Topics uebernehmen (5 Topics + Bespoke)

**6. Deliverables im Briefing:**
- 60-90 Min Keynote (on-site or remote)
- Q&A Session (15-30 min)
- Keynote Slides (40-60 slides, PDF)
- Recording (optional, +€500)
- Post-Keynote Resources (frameworks, templates)

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 37, Zeilen 1327-1359)

| Feld | Aktuell | Neu |
|------|---------|-----|
| price | €5K–€15K | €4.9K |
| Topics | 7 Topics | 5 Topics + Bespoke |
| problemEn | "You need to inspire your team or event with a high-impact keynote—but generic motivational talks don't cut it..." | "Your event needs inspiration—not generic motivation. Generic speakers don't understand your business. You need tactical inspiration with frameworks, stories, and actionable takeaways. You need expert keynote. Fast." |
| problemDe | (entsprechend) | "Dein Event braucht Inspiration—keine generische Motivation. Generische Speaker verstehen dein Business nicht. Du brauchst taktische Inspiration mit Frameworks, Stories und umsetzbaren Takeaways. Du brauchst eine Experten-Keynote. Schnell." |
| solutionEn | "We deliver a 60-90 min keynote + Q&A. Choose topic: AI-Native Scaling, Growth Momentum, Pricing Optimization, Retention Excellence, Operational Excellence, Board Excellence, Portfolio Excellence." | "We deliver tactical keynotes in 60-90 minutes for 50-500 participants. Choose from 5 topics: AI-Native Scaling, Efficient Hypergrowth, Pricing Strategy, Customer Success Excellence, Board Governance. You get: High Impact Inspiration, 3-5 Actionable Takeaways, Keynote Slides (40-60 pages)." |
| solutionDe | (entsprechend) | "Wir liefern taktische Keynotes in 60-90 Minuten fuer 50-500 Teilnehmer. Waehle aus 5 Themen: AI-Native Scaling, Efficient Hypergrowth, Pricing Strategy, Customer Success Excellence, Board Governance. Du erhaeltst: High Impact Inspiration, 3-5 umsetzbare Takeaways, Keynote Slides (40-60 Seiten)." |
| deliverablesEn | [Keynote (60-90 min), Q&A session (30 min), Recording (optional)] | [Audience: 50-500 People, Inspiration: High Impact, Takeaways: 3-5 Actions] |
| deliverablesDe | (entsprechend) | [Audience: 50-500 Personen, Inspiration: High Impact, Takeaways: 3-5 Aktionen] |
| impactEn | "Inspire 50-500 participants with tactical insights and frameworks. Get 20-30% higher team alignment." | "Inspire 50-500 participants in 60-90 minutes. Get tactical frameworks and 3-5 actionable takeaways. Predict 5-10x ROI from audience inspiration and event momentum." |
| impactDe | (entsprechend) | "Inspiriere 50-500 Teilnehmer in 60-90 Minuten. Erhalte taktische Frameworks und 3-5 umsetzbare Takeaways. Prognostiziere 5-10x ROI durch Audience Inspiration und Event Momentum." |
| primaryCtaEn | Book Keynote | More About Keynote |
| primaryCtaDe | Keynote buchen | Mehr ueber Keynote |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/keynote |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const Keynote = lazy(() => import("./pages/Keynote"));

// Route (nach Workshop):
<Route path="/solutions/keynote" element={<Keynote />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/Keynote.tsx`

### Section 1: Hero
- **Breadcrumb:** `Solutions > Keynote`
- **Badge:** `Training & Enablement · 60-90 Min · €4.9K`
- **Headline:** `Inspirational Keynote—In 60-90 Minutes`
- **Subheadline:** Inspire your team or event audience in 60-90 minutes. Choose from 5 keynote topics...
- **Stats:** Audience 50-500 People | Inspiration High Impact | Takeaways 3-5 Actions
- **Trust Badges:** Fast Impact (60-90 Min), Scalable (50-500 Participants), Actionable Takeaways (Not Just Theory)

### Section 2: Problem
- **Headline:** `Your Event Needs Inspiration—Not Generic Motivation`
- **Symptome:**
  - Generic speakers: Motivational speakers who don't understand your business
  - No tactical value: Just inspiration, no frameworks
  - Audience disengagement: People checking phones during talk
  - No takeaways: Audience leaves without actionable insights
  - Wasted budget: €5K-€10K spent on generic motivation
- **Real Cost:** Destroys momentum, limits team engagement, weakens culture, wastes opportunity

### Section 3: Solution (5 Keynote Topics)
- **Headline:** `5 Keynote Topics—Choose Your Focus`
- **5 Topics (Accordion):**
  1. **AI-Native Scaling**
     - Title: "How AI-Native Companies Scale 10x Faster"
     - When to choose: audience needs AI inspiration, team skeptical about AI
     - What we cover: θ_index, 4 levels, tactical roadmap, real examples
     - Typical outcome: High Inspiration, 3-5 Takeaways (AI roadmap, θ_index assessment)
  2. **Efficient Hypergrowth**
     - Title: "The New Playbook for Efficient Hypergrowth"
     - When to choose: audience needs growth inspiration, CAC vs. Growth trade-off
     - What we cover: CAC Payback, LTV/CAC, Rule of 40, tactical roadmap
     - Typical outcome: High Inspiration, 3-5 Takeaways (CAC optimization, LTV improvement)
  3. **Pricing Strategy**
     - Title: "The New Math of SaaS Pricing"
     - When to choose: audience needs pricing inspiration, value-based vs. cost-based
     - What we cover: value-based pricing, packaging, expansion, tactical roadmap
     - Typical outcome: High Inspiration, 3-5 Takeaways (pricing audit, packaging redesign)
  4. **Customer Success Excellence**
     - Title: "How to Build a Net Retention Machine"
     - When to choose: audience needs retention inspiration, churn high
     - What we cover: onboarding, expansion, retention loops, tactical roadmap
     - Typical outcome: High Inspiration, 3-5 Takeaways (retention audit, expansion playbook)
  5. **Board Governance**
     - Title: "How to Work with Your Board (Not Against It)"
     - When to choose: audience needs board inspiration, board relationship broken
     - What we cover: board strategy, meetings, reporting, tactical roadmap
     - Typical outcome: High Inspiration, 3-5 Takeaways (board meeting redesign, reporting framework)
  + **Bespoke Keynote (Custom Topic)**
     - When to choose: topic not covered by standard keynotes
     - Custom pricing

### Section 4: Impact/Outcome
- **Metrics:**
  - Audience Inspiration: High Impact (memorable stories + frameworks)
  - Actionable Takeaways: 3-5 Actions (frameworks, templates, roadmaps)
  - Event Momentum: Lasting Impact (team uses frameworks)
- **Real Examples:**
  - Example 1: Series B SaaS Company Offsite (AI-Native Scaling)
  - Example 2: VC Portfolio Conference (Efficient Hypergrowth)
  - Example 3: CEO Peer Group Event (Board Governance)

### Section 5: Process (How We Work)
- **Pre-Keynote (2-3 Weeks Before):** Questionnaire, Audience research, Topic alignment, Slide customization
- **Keynote Day (60-90 Min):** Keynote delivery, Q&A session, Audience engagement
- **Post-Keynote (1-2 Days After):** Send slides, resources, recording
- **Pricing:**
  - Standard Keynote: €4.9K (60-90 min, 50-500 participants)
  - + Recording: +€500 (professional recording)
  - + Travel: Billed separately (if on-site)
  - Bespoke Keynote: Custom pricing
- Quality Guarantee (High-impact, Actionable takeaways, Audience engagement)

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Need tactical inspiration (not generic motivation)
  - Have 50-500 participants
  - Series A-B or VC/PE organizing event
  - Budget: €4.9K + travel
- **Not a Fit:**
  - Need generic motivation: Hire motivational speaker (€2K-€5K)
  - Need hands-on training: Workshop (€9.6K-€12.9K)
  - Have <50 participants: Workshop (€9.6K-€12.9K)
  - Have >500 participants: Custom pricing

### Section 7: Final CTA
- **Headline:** `Ready to Inspire Your Audience?`
- **Primary CTA:** Book Keynote (€4.9K)
- **Step 2:** Choose Your Keynote Topic (5 topics listed)
- **Step 3:** Prepare Your Event (pre-work)
- **Secondary:** Book Free Inflection Call (30 min)
- **FAQ:** Duration, Investment, Participants, References, ROI, Remote/On-site, Custom topic, Recording, Booking notice

---

## Technische Details

### Komponenten-Wiederverwendung
- `TwinklingStars` fuer Hero-Hintergrund
- `useParallaxLayers` fuer Parallax-Effekte
- `useScrollAnimation` fuer Scroll-basierte Animationen
- `Accordion` fuer 5 Keynote Topics und FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Spezifische Icons fuer Keynote
- `Mic` - Keynote / Speaking
- `Brain` - AI-Native Scaling
- `TrendingUp` - Efficient Hypergrowth
- `DollarSign` - Pricing Strategy
- `HeartHandshake` - Customer Success Excellence
- `Users` - Board Governance
- `Sparkles` - Bespoke Keynote
- `Clock` - Fast Impact (60-90 Min)
- `Users` - Audience (50-500)
- `Lightbulb` - Inspiration
- `Target` - Takeaways (3-5 Actions)
- `Video` - Recording (+€500)
- `Plane` - Travel (if on-site)

### 5 Keynote Topics Framework

```text
+-----------------------------------------------------------+
|                   5 KEYNOTE TOPICS                         |
+------------------+------------------+----------------------+
| 1. AI-Native     | 2. Efficient     | 3. Pricing          |
|    Scaling       |    Hypergrowth   |    Strategy         |
+------------------+------------------+----------------------+
| 4. Customer      | 5. Board         |                     |
|    Success       |    Governance    |                     |
+------------------+------------------+----------------------+
| + Bespoke (Custom Topic)                                   |
+-----------------------------------------------------------+
```

### Unterschied zu Workshop

| Aspekt | Workshop | Keynote |
|--------|----------|---------|
| Dauer | 1-2 Tage (6-16 Stunden) | 60-90 Minuten |
| Preis | €9.6K-€12.9K | €4.9K |
| Teilnehmer | 10-30 | 50-500 |
| Format | Hands-on Training | Inspirational Talk |
| Deliverable | Playbook (30-40 Seiten) | Slides (40-60 Seiten) |
| Output | Team Alignment +80% | High Impact Inspiration |
| Topics | 9 Workshop Types | 5 Keynote Topics |

### Keynote Format

| Segment | Dauer | Inhalt |
|---------|-------|--------|
| Opening | 5-10 min | Hook + Context |
| Main Content | 40-60 min | Frameworks + Stories + Takeaways |
| Closing | 5-10 min | Summary + Call to Action |
| Q&A | 15-30 min | Audience Questions |

### URL-Pattern
Top-Level Workshops & Keynotes Page: `/solutions/keynote`

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 37: Price (€5K–€15K zu €4.9K) + Topics (7 zu 5) + Metriken (outcome-fokussiert) + CTA (learn-more) aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import (zweite Workshops & Keynotes Landing Page) |
| `src/pages/Keynote.tsx` | Neue Datei (7 Sektionen) mit 5 Keynote Topics Framework, Topic Selector UI (Accordion), Pre/During/Post Keynote Process, und Recording Upsell (+€500) |
