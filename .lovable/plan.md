

# Plan: Strategic Advisory - Landing Page + Kachel-Update (Korrigiert)

## Pricing-Korrektur

Das korrekte Pricing gemaess CheatSheet und User-Bild:

| Tier | Tage/Monat | Preis/Monat |
|------|------------|-------------|
| Catalyst | 1-2 Tage/Monat | €3.900 |
| Accelerator | 3-4 Tage/Monat | €8.400 |
| Transformator | 4-6 Tage/Woche | €11.000 |

**Preisspanne:** €3.9K–€11K/Mo (bereits korrekt im CheatSheet)
**Mindestlaufzeit:** 12 Monate

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (ID 35, Zeilen 1305-1337)

| Feld | Aktuell | Neu |
|------|---------|-----|
| price | €8K–€40K | €3.9K–€11K/Mo |
| solutionEn | "We design custom strategy in 4-24 weeks. Choose intensity: Catalyst (4-6 weeks, €8K-€15K)..." | "We become your ongoing strategic sparring partner (min. 12 months). Choose intensity: Catalyst (1-2 days/month, €3.9K/Mo), Accelerator (3-4 days/month, €8.4K/Mo), Transformator (4-6 days/week, €11K/Mo)." |
| solutionDe | (entsprechend) | "Wir werden dein laufender strategischer Sparringspartner (mind. 12 Monate). Waehle Intensitaet: Catalyst (1-2 Tage/Monat, €3.9K/Mo), Accelerator (3-4 Tage/Monat, €8.4K/Mo), Transformator (4-6 Tage/Woche, €11K/Mo)." |
| problemEn | "You have a unique challenge..." | "You're making critical decisions without strategic guidance. Decision velocity is 7-14 days. Strategic clarity is low. Board confidence is 40-60%." |
| problemDe | (entsprechend) | "Du triffst kritische Entscheidungen ohne strategische Fuehrung. Decision Velocity ist 7-14 Tage. Strategische Klarheit ist gering. Board Confidence liegt bei 40-60%." |
| deliverablesEn | [Custom strategy design, Implementation roadmap, Team enablement] | [Decision Velocity: +50-100%, Strategic Clarity: +80%, Board Confidence: +30-50pp] |
| deliverablesDe | (entsprechend) | (entsprechend) |
| impactEn | "Get custom strategy tailored..." | "Get ongoing strategic guidance that accelerates your decision-making and increases board confidence. Predict 5-10x ROI in 12+ months." |
| impactDe | (entsprechend) | (entsprechend) |
| primaryCtaEn | Request Advisory | More About Strategic Advisory |
| primaryCtaDe | Advisory anfragen | Mehr ueber Strategic Advisory |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/strategic-advisory |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const StrategicAdvisory = lazy(() => import("./pages/StrategicAdvisory"));

// Route (Top-Level Solution Page):
<Route path="/solutions/strategic-advisory" element={<StrategicAdvisory />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/StrategicAdvisory.tsx`

### Section 1: Hero
- **Breadcrumb:** `Solutions > Strategic Advisory`
- **Badge:** `Advisory . 12+ Months . €3.9K–€11K/Mo`
- **Headline:** `Your Strategic Sparring Partner—On Demand`
- **Subheadline:** Get ongoing strategic guidance for 12+ months...
- **Stats:** Decision Velocity +50-100% | Strategic Clarity +80% | Board Confidence +30-50pp
- **Trust Badges:** Ongoing Support (12+ Months), Measurable Impact, Reference Calls Available

### Section 2: Problem
- **Headline:** `You're Making Critical Decisions—Without Strategic Guidance`
- **Symptome:** Slow decision-making (7-14 days), Low strategic clarity, Low board confidence (40-60%), Isolated decision-making, Strategic mistakes

### Section 3: Solution
- **Headline:** `How Strategic Advisory Works`
- **3 Engagement Tiers:**
  1. **Catalyst** (1-2 Tage/Monat, €3.900/Mo) - Light-touch strategic guidance
  2. **Accelerator** (3-4 Tage/Monat, €8.400/Mo) - Regular strategic sessions
  3. **Transformator** (4-6 Tage/Woche, €11.000/Mo) - Intensive strategic partnership
- **4 Leistungskomponenten:**
  1. Monthly Strategy Sessions
  2. Quarterly Board Prep
  3. Ad-Hoc Support (Slack/Email)
  4. AI-Powered Strategic Intelligence

### Section 4: Impact/Outcome
- **Metrics:**
  - Decision Velocity +50-100% (7-14d -> 3-7d)
  - Strategic Clarity +80% (low -> high)
  - Board Confidence +30-50pp (40-60% -> 70-95%)
- **Real Example:** Series B SaaS, €18M ARR, Decision Velocity +80%, Strategic Clarity +90%, Board Confidence +50pp

### Section 5: Process (How We Work)
- Monat-fuer-Monat Breakdown (12+ Monate)
- **Mindestlaufzeit: 12 Monate**
- 3 Tier-Optionen mit unterschiedlicher Intensitaet
- ROI: 5-10x

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - Making critical decisions without strategic guidance
  - Need ongoing strategic support (12+ months)
  - Series B-C, €10M-€50M ARR, 50-200 people
  - Budget: €3.9K-€11K/month
- **Not a Fit:**
  - Only need one-time advice (-> Expert Session €490-€890)
  - Need hands-on implementation (-> Boost/Accelerate)
  - Not ready for 12-month commitment

### Section 7: Final CTA
- **Headline:** `Ready to Get Your Strategic Sparring Partner?`
- **Primary CTA:** Book Free Inflection Call (30 min)
- **Secondary:** Expert Session (90-180 min, €490-€890)
- **Pricing Cards:** 3 Tiers (Catalyst, Accelerator, Transformator)
- **FAQ:** Duration (12+ months), Investment (€3.9K-€11K/Mo), Tiers, References, ROI

---

## Technische Details

### Komponenten-Wiederverwendung
- `TwinklingStars` fuer Hero-Hintergrund
- `useParallaxLayers` fuer Parallax-Effekte
- `useScrollAnimation` fuer Scroll-basierte Animationen
- `Accordion` fuer FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Spezifische Icons
- `Compass` - Advisory / Strategic Direction
- `Zap` - Decision Velocity
- `Target` - Strategic Clarity / Outcomes
- `Users` - Board Confidence / Sparring
- `Shield` - 12-Month Commitment
- `MessageCircle` - Ad-hoc Support

### Pricing Cards (Unterschied zu Transformation Pages)
Diese Seite zeigt 3 Tier-Karten mit monatlichen Preisen:

```text
┌─────────────────┬─────────────────┬─────────────────┐
│    CATALYST     │   ACCELERATOR   │  TRANSFORMATOR  │
│  1-2 Tage/Mo    │   3-4 Tage/Mo   │  4-6 Tage/Wo    │
│   €3.900/Mo     │    €8.400/Mo    │   €11.000/Mo    │
│                 │                 │                 │
│  Light-touch    │  Regular        │  Intensive      │
│  guidance       │  sessions       │  partnership    │
└─────────────────┴─────────────────┴─────────────────┘
```

### URL-Pattern
Top-Level Solution Page: `/solutions/strategic-advisory`

### Breadcrumb-Pattern
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">Strategic Advisory</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Besonderheiten dieser Seite

### Retainer-Modell mit 3 Tiers
- **Catalyst (€3.9K/Mo):** Entry-Level, 1-2 Tage/Monat
- **Accelerator (€8.4K/Mo):** Mid-Level, 3-4 Tage/Monat
- **Transformator (€11K/Mo):** High-Level, 4-6 Tage/Woche

### 12-Monate Mindestlaufzeit
Klar kommuniziert in Badge, Solution Description und Qualification Section

### Kein "2 of 3 Outcomes Guaranteed"
Advisory ist Retainer-basiert, nicht projekt-basiert - daher anderes Garantie-Modell

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 35: Price (€8K-€40K -> €3.9K-€11K/Mo) + Tiers + Metriken + CTA aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/StrategicAdvisory.tsx` | Neue Datei (7 Sektionen) mit 3-Tier Pricing Cards |

