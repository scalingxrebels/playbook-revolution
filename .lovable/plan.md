
# Cases Hub Refactoring - Implementierungskonzept

## 1. Konzeptübersicht

Das Cases Hub wird zum zentralen Showcase für echte (anonymisierte) Kundenprojekte mit Story-First-Ansatz und CEO-freundlicher Sprache.

```text
┌─────────────────────────────────────────────────────────────────┐
│                    CASES HUB ARCHITEKTUR                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────┐     ┌─────────────────────┐            │
│  │   /cases (Hub)      │     │ /cases/:slug        │            │
│  │   Landing Page      │     │ Detail Page         │            │
│  └──────────┬──────────┘     └──────────┬──────────┘            │
│             │                           │                        │
│             ▼                           ▼                        │
│  ┌─────────────────────┐     ┌─────────────────────┐            │
│  │ - SharedHero        │     │ - Hero Section      │            │
│  │ - Client Ticker     │     │ - Situation         │            │
│  │ - Filter Section    │     │ - What We Did       │            │
│  │ - Case Card Grid    │     │ - Results           │            │
│  │ - CTA Section       │     │ - Key Lessons       │            │
│  └─────────────────────┘     │ - Next Steps        │            │
│                              │ - PDF Download      │            │
│                              └─────────────────────┘            │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Neue Datenstruktur

### 2.1 Erweitertes ClientCase Interface

```typescript
// src/data/cases/types.ts - ERWEITERT

interface CaseStudyMetric {
  label: string;
  before: string;
  after: string;
  impact: string;
}

interface CaseStudyPhase {
  name: BilingualText;
  timeline: string;
  actions: {
    name: BilingualText;
    description: BilingualText;
    deliverables: BilingualText[];
    whyItMattered: BilingualText;
  }[];
}

interface CaseStudyLesson {
  title: BilingualText;
  whatWeLearned: BilingualText;
  keyInsight: BilingualText;
  whatWedDoDifferently: BilingualText;
}

interface ClientCase {
  // Basis (existing)
  id: string;
  slug: string;                    // NEU: URL-Slug
  company: string;
  industry: string;
  stage: string;
  gradient: string;
  confidential: true;

  // HERO Section
  headline: BilingualText;         // "CAC Crisis Averted → Back to Growth"
  challenge: BilingualText;
  result: BilingualText;
  investment: string;              // "€120k"
  roi: string;                     // "5x"
  heroMetrics: CaseStudyMetric[];  // 3 Key Metrics

  // SITUATION Section
  companyDescription: BilingualText;
  crisisStory: BilingualText;      // Story-First: "The board meeting..."
  problemDescription: BilingualText;
  brokenAreas: {
    area: BilingualText;
    symptoms: BilingualText[];
  }[];
  situationMetrics: CaseStudyMetric[];

  // WHAT WE DID Section
  approach: BilingualText;
  phases: CaseStudyPhase[];

  // RESULTS Section
  timeline: string;
  resultMetrics: CaseStudyMetric[];
  roiCalculation: {
    investment: string;
    returnValue: string;
    roi: string;
    breakdown: BilingualText[];
  };
  ceoQuote: BilingualText;
  quoteContext: BilingualText;

  // KEY LESSONS Section
  lessons: CaseStudyLesson[];

  // META
  playbooks: string[];
  downloadUrl?: string;            // PDF Case Study
  tags: string[];                  // Filter Tags
}
```

---

## 3. Filter-System (konsistent mit Solutions/Playbooks)

### 3.1 Filter-Dimensionen

| Filter | Optionen | Beispiel |
|--------|----------|----------|
| **Challenge** | CAC Crisis, NRR Stuck, Growth Stalled, Ops Chaos, Exit Prep | `challenge=cac-crisis` |
| **Industry** | B2B SaaS, FinTech, MarTech, Enterprise, Data & Analytics | `industry=fintech` |
| **Stage** | Seed, Series A, Series B, Series C, PE-Backed | `stage=series-b` |
| **Timeline** | Sprint (4-12 Wochen), Project (3-6 Mo), Transformation (6-18 Mo) | `duration=sprint` |

### 3.2 URL-Parameter

```
/cases                                    # Alle Cases
/cases?challenge=cac-crisis               # Gefiltert nach Challenge
/cases?industry=fintech&stage=series-a    # Multi-Filter
/cases?q=sales                            # Suche
```

---

## 4. Seiten-Struktur

### 4.1 Cases Hub (`/cases`)

```text
┌─────────────────────────────────────────────────────────────────┐
│  NAVIGATION                                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                    SHARED HERO                             │  │
│  │  "Real Transformations, Real Results"                      │  │
│  │  [22+ Cases] [5x Avg ROI] [€2.1B Value] [92% Success]     │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  CLIENT TICKER (bestehend)                                 │  │
│  │  • Pigtie • Microsoft • XING • Lexware • ... →→→           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  FILTER SECTION (bg-muted/30 border-y)                     │  │
│  │                                                             │  │
│  │  [🔍 Search cases...                               ]       │  │
│  │                                                             │  │
│  │  Challenge: [All] [CAC Crisis] [NRR Stuck] [Growth]        │  │
│  │  Industry:  [All] [B2B SaaS] [FinTech] [MarTech] [...]     │  │
│  │  Stage:     [All] [Series A] [Series B] [Series C]         │  │
│  │                                                             │  │
│  │  Showing 12 of 22 cases                                    │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  CASE CARD GRID (3 Spalten)                                │  │
│  │                                                             │  │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐                    │  │
│  │  │ Case 1  │  │ Case 2  │  │ Case 3  │                    │  │
│  │  │ CAC →   │  │ NRR →   │  │ Ops →   │                    │  │
│  │  │ Growth  │  │ 142%    │  │ -67%    │                    │  │
│  │  └─────────┘  └─────────┘  └─────────┘                    │  │
│  │                                                             │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  CTA SECTION                                               │  │
│  │  "Want similar results? Book Inflection Call"              │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                          │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Case Detail Page (`/cases/:slug`)

```text
┌─────────────────────────────────────────────────────────────────┐
│  NAVIGATION                                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ← Back to Cases                                                 │
│                                                                   │
│  ╔═══════════════════════════════════════════════════════════╗  │
│  ║  SECTION 1: HERO                                           ║  │
│  ║                                                             ║  │
│  ║  [B2B SaaS]  [Series B]                                    ║  │
│  ║                                                             ║  │
│  ║  # CAC Crisis Averted → Back to Growth                     ║  │
│  ║                                                             ║  │
│  ║  Challenge: CAC exploded from €5k to €12k...               ║  │
│  ║                                                             ║  │
│  ║  ┌─────────┬─────────┬─────────┐                          ║  │
│  ║  │ CAC     │ Win Rate│ ARR     │                          ║  │
│  ║  │ -58%    │ +122%   │ +87%    │                          ║  │
│  ║  └─────────┴─────────┴─────────┘                          ║  │
│  ║                                                             ║  │
│  ║  Investment: €120k  |  ROI: 5x  |  Timeline: 12 weeks     ║  │
│  ║                                                             ║  │
│  ║  [📥 Download Case Study PDF]                              ║  │
│  ╚═══════════════════════════════════════════════════════════╝  │
│                                                                   │
│  ╔═══════════════════════════════════════════════════════════╗  │
│  ║  SECTION 2: THE SITUATION                                  ║  │
│  ║                                                             ║  │
│  ║  THE COMPANY                                               ║  │
│  ║  A sales tech platform for mid-market...                   ║  │
│  ║                                                             ║  │
│  ║  THE CRISIS                                                ║  │
│  ║  "The CEO walked into the quarterly board meeting..."      ║  │
│  ║                                                             ║  │
│  ║  THE PROBLEM                                               ║  │
│  ║  ┌─────────────────────────────────────────────────────┐  ║  │
│  ║  │ 1. Sales Process: No repeatable process             │  ║  │
│  ║  │    • Every rep reinventing the wheel                │  ║  │
│  ║  │    • No lead prioritization                         │  ║  │
│  ║  │    • Salesforce purchased but never used            │  ║  │
│  ║  │                                                      │  ║  │
│  ║  │ 2. Marketing: No lead qualification                 │  ║  │
│  ║  │    • 200+ leads/month, only 10% qualified           │  ║  │
│  ║  │    • Sales wasting time on bad leads                │  ║  │
│  ║  └─────────────────────────────────────────────────────┘  ║  │
│  ╚═══════════════════════════════════════════════════════════╝  │
│                                                                   │
│  ╔═══════════════════════════════════════════════════════════╗  │
│  ║  SECTION 3: WHAT WE DID                                    ║  │
│  ║                                                             ║  │
│  ║  THE APPROACH                                              ║  │
│  ║  "We ran a 12-week sprint to fix..."                       ║  │
│  ║                                                             ║  │
│  ║  ┌─────────────────────────────────────────────────────┐  ║  │
│  ║  │  WEEK 1-4        WEEK 5-8        WEEK 9-12          │  ║  │
│  ║  │  ●───────────────●───────────────●                  │  ║  │
│  ║  │  Diagnose        Fix             Prove              │  ║  │
│  ║  └─────────────────────────────────────────────────────┘  ║  │
│  ║                                                             ║  │
│  ║  [Phase 1: Diagnose - collapsed accordion]                 ║  │
│  ║  [Phase 2: Fix - collapsed accordion]                      ║  │
│  ║  [Phase 3: Prove - collapsed accordion]                    ║  │
│  ╚═══════════════════════════════════════════════════════════╝  │
│                                                                   │
│  ╔═══════════════════════════════════════════════════════════╗  │
│  ║  SECTION 4: THE RESULTS                                    ║  │
│  ║                                                             ║  │
│  ║  12 WEEKS LATER                                            ║  │
│  ║                                                             ║  │
│  ║  ┌───────────┬───────────┬───────────┬───────────┐        ║  │
│  ║  │    CAC    │ Win Rate  │Sales Cycle│    ARR    │        ║  │
│  ║  │ €12k→€5k │  18%→40%  │ 14→4 wks  │ €15M→€28M │        ║  │
│  ║  │   -58%   │   +122%   │   -71%    │   +87%    │        ║  │
│  ║  └───────────┴───────────┴───────────┴───────────┘        ║  │
│  ║                                                             ║  │
│  ║  THE ROI                                                   ║  │
│  ║  ┌─────────────────────────────────────────────────────┐  ║  │
│  ║  │  Investment: €120k                                  │  ║  │
│  ║  │  Return: €600k (12-month value)                     │  ║  │
│  ║  │  ═══════════════════════════════════════════        │  ║  │
│  ║  │  ROI: 5x                                            │  ║  │
│  ║  └─────────────────────────────────────────────────────┘  ║  │
│  ║                                                             ║  │
│  ║  💬 "We went from board pressure to board confidence..."  ║  │
│  ║     — CEO, Series B SaaS, €15M ARR (anonymized)           ║  │
│  ╚═══════════════════════════════════════════════════════════╝  │
│                                                                   │
│  ╔═══════════════════════════════════════════════════════════╗  │
│  ║  SECTION 5: KEY LESSONS                                    ║  │
│  ║                                                             ║  │
│  ║  ┌─────────────────────────────────────────────────────┐  ║  │
│  ║  │  LESSON 1: Fix the process before scaling           │  ║  │
│  ║  │  What we learned: ...                               │  ║  │
│  ║  │  Key insight: Scaling a broken process breaks faster│  ║  │
│  ║  └─────────────────────────────────────────────────────┘  ║  │
│  ║                                                             ║  │
│  ║  [Lesson 2] [Lesson 3]                                     ║  │
│  ╚═══════════════════════════════════════════════════════════╝  │
│                                                                   │
│  ╔═══════════════════════════════════════════════════════════╗  │
│  ║  SECTION 6: NEXT STEPS                                     ║  │
│  ║                                                             ║  │
│  ║  Want similar results?                                     ║  │
│  ║                                                             ║  │
│  ║  ┌─────────┐  ┌─────────┐  ┌─────────┐                    ║  │
│  ║  │ Step 1  │→ │ Step 2  │→ │ Step 3  │                    ║  │
│  ║  │Inflect. │  │ Sprint  │  │ Results │                    ║  │
│  ║  │ Call    │  │         │  │ 12 wks  │                    ║  │
│  ║  └─────────┘  └─────────┘  └─────────┘                    ║  │
│  ║                                                             ║  │
│  ║  [🗓️ Book Inflection Call]  [📥 Download PDF]             ║  │
│  ╚═══════════════════════════════════════════════════════════╝  │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                          │
└─────────────────────────────────────────────────────────────────┘
```

---

## 5. Komponentenstruktur

### 5.1 Neue Dateien

| Datei | Beschreibung |
|-------|--------------|
| `src/components/cases/CaseHero.tsx` | Hero für Hub (nutzt SharedHero) |
| `src/components/cases/CaseFilterSection.tsx` | Filter UI (Challenge, Industry, Stage) |
| `src/components/cases/CaseCard.tsx` | Kachel-Komponente |
| `src/components/cases/CaseCardGrid.tsx` | Grid mit Animation |
| `src/components/cases/CaseCTA.tsx` | Final CTA Section |
| `src/components/cases/useCaseFilters.ts` | Filter Hook (URL-Sync) |
| `src/components/cases/detail/CaseDetailHero.tsx` | Detail Hero Section |
| `src/components/cases/detail/CaseSituation.tsx` | Section 2: Situation |
| `src/components/cases/detail/CaseWhatWeDid.tsx` | Section 3: What We Did |
| `src/components/cases/detail/CaseResults.tsx` | Section 4: Results |
| `src/components/cases/detail/CaseLessons.tsx` | Section 5: Lessons |
| `src/components/cases/detail/CaseNextSteps.tsx` | Section 6: Next Steps |
| `src/pages/CaseDetail.tsx` | Detail Page Router |
| `src/data/cases/caseStudies.ts` | Full Case Study Data |
| `src/data/cases/caseFilters.ts` | Filter Definitions |

---

## 6. Case Card Design

```typescript
// CaseCard.tsx - Konsistent mit SolutionTileCard & PlaybookCard

interface CaseCardProps {
  caseStudy: ClientCase;
  index: number;
}

// Visual Structure:
// ┌─────────────────────────────────────────┐
// │ [Gradient Bar]                          │
// │                                         │
// │ [Icon] ←─ Gradient bg                   │
// │                                         │
// │ [Series B]  [B2B SaaS]  ←─ Badges       │
// │                                         │
// │ CAC Crisis Averted →                    │
// │ Back to Growth         ←─ Headline      │
// │                                         │
// │ "The sales process was broken. CAC      │
// │ exploded from €5k to €12k..."  ←─ Story │
// │                                         │
// │ ┌─────────┬─────────┬─────────┐        │
// │ │ CAC     │Win Rate │ ARR     │        │
// │ │ -58%    │ +122%   │ +87%    │        │
// │ └─────────┴─────────┴─────────┘        │
// │                                         │
// │ [Read Case Study]  [📥 Download]        │
// │                         ↗ Arrow         │
// └─────────────────────────────────────────┘
```

---

## 7. Implementierungsschritte

### Phase 1: Datenstruktur (Tag 1)
1. `src/data/cases/types.ts` erweitern mit neuem Interface
2. `src/data/cases/caseStudies.ts` mit erstem vollständigen Case erstellen
3. `src/data/cases/caseFilters.ts` mit Filter-Definitionen

### Phase 2: Cases Hub Refactoring (Tag 1-2)
4. `src/components/cases/CaseFilterSection.tsx` (konsistent mit Solutions)
5. `src/components/cases/useCaseFilters.ts` (URL-Sync Hook)
6. `src/components/cases/CaseCard.tsx` (neues Design)
7. `src/pages/Cases.tsx` refactoren (Filter + Grid)

### Phase 3: Detail Page (Tag 2-3)
8. `src/components/cases/detail/*.tsx` Sections erstellen
9. `src/pages/CaseDetail.tsx` mit Routing
10. App.tsx Route hinzufügen: `/cases/:slug`

### Phase 4: Content Migration (Tag 3-4)
11. Bestehende 5 Client Cases in neues Format konvertieren
12. Story-First Content schreiben (CEO-Sprache)
13. PDF Download-Links vorbereiten

---

## 8. Konsistenz-Checklist

| Element | Solutions | Playbooks | Cases (neu) |
|---------|-----------|-----------|-------------|
| Hero | SharedHero | SharedHero | SharedHero |
| Filter BG | `bg-muted/30 border-y` | `bg-muted/30 border-y` | `bg-muted/30 border-y` |
| Search | Zentriert, xl | Zentriert, xl | Zentriert, xl |
| Grid | `max-w-7xl` | `max-w-7xl` | `max-w-7xl` |
| Card Hover | `hover:border-accent/30` | `hover:border-primary/50` | `hover:border-primary/50` |
| CTA Section | `SolutionCTA` | Inline CTA | `CaseCTA` |
| URL Params | `?challenge=&type=` | - | `?challenge=&industry=&stage=` |

---

## 9. Beispiel: Erster vollständiger Case

```typescript
// caseStudies.ts - Erster Case nach Briefing

const cacCrisisCase: ClientCase = {
  id: 'cac-crisis-series-b-saas',
  slug: 'cac-crisis-turnaround',
  company: 'Sales Tech Platform',
  industry: 'B2B SaaS',
  stage: 'Series B',
  gradient: 'from-red-500 to-orange-500',
  confidential: true,

  headline: {
    en: 'CAC Crisis Averted → Back to Growth',
    de: 'CAC-Krise abgewendet → Zurück auf Wachstumskurs'
  },
  
  challenge: {
    en: 'CAC exploded from €5k to €12k in 6 months. The board demanded a fix—or a new CEO.',
    de: 'CAC explodierte von €5k auf €12k in 6 Monaten. Der Board forderte eine Lösung—oder einen neuen CEO.'
  },

  // ... weitere Felder nach Briefing
  
  crisisStory: {
    en: `The CEO walked into the quarterly board meeting feeling confident. ARR was growing (+30% YoY), the team was executing, customers were happy. 

But the lead investor opened with a question that changed everything:

"Your CAC has doubled in 6 months. From €5k to €12k. If this continues, you'll run out of money in 9 months. What's your plan?"

The CEO had no answer.`,
    de: `Der CEO betrat das Board Meeting selbstbewusst. ARR wuchs (+30% YoY), das Team lieferte, Kunden waren zufrieden.

Aber der Lead Investor eröffnete mit einer Frage, die alles veränderte:

"Euer CAC hat sich in 6 Monaten verdoppelt. Von €5k auf €12k. Wenn das so weitergeht, ist in 9 Monaten das Geld alle. Was ist euer Plan?"

Der CEO hatte keine Antwort.`
  },

  // ... weitere Sections
};
```

---

## 10. Technische Hinweise

- **Keine technischen Begriffe**: C₁, C₂, θ_index, SST werden NICHT verwendet
- **Story-First**: Jeder Case beginnt mit einer "The board meeting..." Story
- **Before/After**: Alle Metriken immer mit Before/After Format
- **CEO-Quote**: Echtes anonymisiertes Zitat in jeder Case Study
- **PDF Download**: Vorbereitet für `/public/downloads/cases/[slug].pdf`
