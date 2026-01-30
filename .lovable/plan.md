
# Implementierungsplan: AI Maturity Framework (AMF) Research Detail Page

## Übersicht

Die neue Seite `/expertise/amf` ist eine **Research Detail Page** im HBR-Stil, die das AI Maturity Framework wissenschaftlich aber zugänglich erklärt. Sie unterscheidet sich von Playbooks (praktisch) und Tools (self-service) durch ihren Fokus auf "What we discovered".

---

## 1. Architektur-Entscheidung

### Neues Komponenten-System für Research Pages

Da die bestehenden Playbook-Sections nicht 1:1 passen (andere Struktur, anderer Ton), erstellen wir ein eigenes Section-System:

```
src/
├── components/
│   └── research/                        # NEU
│       ├── ResearchLandingPage.tsx      # Master-Component
│       ├── types.ts                     # TypeScript Interfaces
│       └── sections/
│           ├── ResearchHeroSection.tsx
│           ├── ResearchWhyItMattersSection.tsx
│           ├── ResearchThreeLevelsSection.tsx
│           ├── ResearchMeasurementSection.tsx
│           ├── ResearchFindingsSection.tsx
│           ├── ResearchCaseStudiesSection.tsx
│           ├── ResearchImplicationsSection.tsx
│           ├── ResearchDownloadSection.tsx
│           └── ResearchFinalCTASection.tsx
├── data/
│   └── research/                        # NEU
│       ├── types.ts
│       └── amf.ts                       # Vollständiger Content
└── pages/
    └── ExpertiseAMF.tsx                 # NEU - Page Component
```

---

## 2. Zu erstellende Dateien

### 2.1 Types (`src/data/research/types.ts`)

```typescript
export interface BilingualText {
  en: string;
  de: string;
}

export interface AMFHeroData {
  breadcrumb: { parent: BilingualText; current: BilingualText };
  headline: BilingualText;
  subheadline: BilingualText;
  description: BilingualText;
  stats: { value: string; label: BilingualText }[];
  primaryCta: { text: BilingualText; href: string };
  secondaryCta: { text: BilingualText; href: string };
}

export interface MaturityLevel {
  level: 1 | 2 | 3;
  name: BilingualText;
  tagline: BilingualText;
  whatItLooksLike: BilingualText[];
  whatWeObserved: {
    productivity: string;
    timeToRevenue: string;
    revenuePerEmployee: string;
  };
  example: BilingualText;
  description: BilingualText;
}

export interface MeasurementDimension {
  id: string;
  icon: string;
  title: BilingualText;
  question: BilingualText;
  levels: {
    low: BilingualText;
    medium: BilingualText;
    high: BilingualText;
  };
  example: { level: 'high'; company: string; description: BilingualText };
  whyItMatters: BilingualText;
}

export interface CaseStudyAMF {
  id: string;
  company: string;
  logo?: string;
  level: 3;
  revenue: string;
  employees: string;
  revenuePerEmployee: string;
  valuation?: string;
  whatMakesThemLevel3: BilingualText[];
  keyInsights: BilingualText[];
  pattern: BilingualText;
}

export interface ImplicationItem {
  number: number;
  title: BilingualText;
  question: BilingualText;
  bullets: BilingualText[];
  action: BilingualText;
  cta: { text: BilingualText; href: string };
}

export interface AMFPageData {
  hero: AMFHeroData;
  whyItMatters: { ... };
  threeLevels: { levels: MaturityLevel[] };
  measurement: { dimensions: MeasurementDimension[] };
  findings: { ... };
  caseStudies: { cases: CaseStudyAMF[] };
  implications: { items: ImplicationItem[] };
  download: { ... };
  finalCta: { ... };
}
```

---

### 2.2 Content-Daten (`src/data/research/amf.ts`)

Vollständiger Content aus dem Briefing für alle 9 Sections, inklusive:

| Section | Key Content |
|---------|-------------|
| Hero | H1: "The Three Levels of AI Maturity", Stats: 47 companies, 8.2x faster |
| Why It Matters | Korrelation r=0.89, Chart-Daten, Callout "Correlation ≠ Causation" |
| Three Levels | Level 1-3 Cards mit Metriken (qualitativ, keine deterministischen Formeln) |
| Measurement | 6 Dimensionen: Strategy, Architecture, Workflow, Data, Talent, Adoption |
| Findings | 4 empirische Erkenntnisse mit Stats |
| Case Studies | Midjourney ($4.6M/emp), Cursor ($1.67M/emp), Perplexity ($9B) |
| Implications | 3 Cards: Assess, Decide, Build Roadmap |
| Download | PDF-Download Card (optional email-gated) |
| Final CTA | "Calculate Your AI Maturity" + "Book Strategy Call" |

---

### 2.3 Section Components

#### A) `ResearchHeroSection.tsx`

**Pattern:** Basiert auf `PlaybookHeroSection` mit 3-Layer Parallax
- Deep Space Background + TwinklingStars + Grid
- Breadcrumb: "Home > Expertise > AI Maturity Framework"
- Stats Bar: "47 companies | 3 levels | 8.2x faster | r=0.89"
- 2 CTAs: Primary (Calculate AI Maturity) + Secondary (Download Research)

#### B) `ResearchWhyItMattersSection.tsx`

**Layout:** 2-Column (Text links, Chart rechts)
- HBR-Style Fließtext zu linearem vs. exponentiellen Wachstum
- Scatter-Chart mit Trendlinie (Recharts)
- Callout-Box "Correlation, Not Causation"

#### C) `ResearchThreeLevelsSection.tsx`

**Layout:** 3-Column Cards
- Level 1: AI-Powered (Tool) - Amber
- Level 2: AI-Enabled (Capability) - Blue  
- Level 3: AI-Native (Architecture) - Emerald + "Target" Badge
- Vergleichstabelle darunter

**WICHTIG:** Sprache wie im Briefing
- "What we observed" statt "θ_index = 0.8 → ARR/Employee $2M"
- Korrelationssprache: "correlates with" statt "determines"

#### D) `ResearchMeasurementSection.tsx`

**Layout:** 2×3 Grid mit 6 Dimension-Cards
- Strategy, Architecture, Workflow, Data, Talent, Adoption
- Jede Card zeigt: Question, Low/Medium/High, Example, Why It Matters
- Keine Formeln, keine technischen Details

#### E) `ResearchFindingsSection.tsx`

**Layout:** 2-Column (Text links, Stats rechts)
- 4 Findings mit HBR-Style Paragraphen
- Stats Panel: 47 companies, r=0.89, 8.2x, 10x
- Caveat prominent: "Correlation ≠ Causation"

#### F) `ResearchCaseStudiesSection.tsx`

**Layout:** 3-Column Cards
- Midjourney: $492M, 107 emp, $4.6M/emp
- Cursor: $100M ARR, 60 emp, $1.67M/emp
- Perplexity: $200M+, 80-100 emp, $9B valuation
- "What makes them Level 3" Bulletpoints
- CTA: "View Full Case Study →"

#### G) `ResearchImplicationsSection.tsx`

**Layout:** 3-Column Cards
1. "Assess Your Current State" → Calculate θ_index
2. "Decide Your Ambition" → Book Strategy Call
3. "Build Your Roadmap" → View Playbooks

#### H) `ResearchDownloadSection.tsx`

**Layout:** Centered Download Card
- "AI Maturity Framework v4.5.1 Executive Summary"
- 3,000 words, HBR-style
- What's Inside Checklist
- Download CTA (optional: email-gated via LeadCapture)

#### I) `ResearchFinalCTASection.tsx`

**Pattern:** Basiert auf `PlaybookFinalCTASection`
- Deep Space Parallax Background
- "What's Your AI Maturity?"
- Primary CTA: "Calculate Your AI Maturity →"
- Secondary CTA: "Book Strategy Call →"

---

### 2.4 Page Component (`src/pages/ExpertiseAMF.tsx`)

```tsx
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ResearchLandingPage from '@/components/research/ResearchLandingPage';
import { amfPageData } from '@/data/research/amf';

const ExpertiseAMF: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <ResearchLandingPage data={amfPageData} />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default ExpertiseAMF;
```

---

### 2.5 Routing (`src/App.tsx`)

```tsx
// Neue Lazy-Load Definition
const ExpertiseAMF = lazy(() => import("./pages/ExpertiseAMF"));

// Neue Route
<Route path="/expertise/amf" element={<ExpertiseAMF />} />
```

---

## 3. Design-Spezifikationen

### Visuelles Theming

| Element | Spezifikation |
|---------|---------------|
| Background | Deep Space Gradient (Hero, Final CTA) |
| Sections | Alternierend: `bg-muted/30` ↔ `bg-background` |
| Cards | `glass`, `border-border/50`, `hover:shadow-glow` |
| Level Colors | L1: Amber, L2: Blue, L3: Emerald |
| Parallax | 3-Layer System (0.1, 0.3, 0.5) |
| Animations | `useScrollAnimation`, staggered entry |

### Chart (Why It Matters)

```
Scatter Plot via Recharts:
- X-Axis: AI Maturity (Low → High)
- Y-Axis: Time to €100M ARR (months)
- 47 Datenpunkte (simuliert, da keine echten Daten)
- Trendlinie mit r=0.89 Annotation
- Responsive: 1 Column auf Mobile
```

---

## 4. Content-Highlights (aus Briefing)

### HBR-Stil Sprache

| ❌ Vermeiden | ✅ Verwenden |
|--------------|--------------|
| "θ_index = Σ(w_i × d_i)" | "We measure across six dimensions" |
| "p<0.001" | "Strong correlation (r=0.89)" |
| "determiniert" | "correlates with" |
| "AI Maturity causes" | "We observed that..." |

### Korrelation-Caveat (durchgehend)

```
💡 Strong Correlation, Not Causation

We observed that companies with higher AI maturity scale faster. 
But correlation doesn't prove causation. Other factors (market, 
timing, team) also matter.

What we can say: AI maturity is a strong predictor of scaling speed.
```

---

## 5. Implementierungs-Reihenfolge

| Phase | Tasks | Dateien |
|-------|-------|---------|
| 1 | Types + Interfaces | `src/data/research/types.ts` |
| 2 | Content-Daten | `src/data/research/amf.ts` |
| 3 | Hero + Final CTA Sections | 2 Components |
| 4 | Core Sections (Levels, Measurement, Findings) | 4 Components |
| 5 | Case Studies + Implications | 2 Components |
| 6 | Master Component + Page | 2 Dateien |
| 7 | Routing | `App.tsx` |
| 8 | Testing + Feinschliff | - |

---

## 6. Verknüpfung mit ResearchHub

Update in `src/components/ResearchHub.tsx`:
- Card "AI Maturity Framework" verlinkt bereits auf `/expertise/amf` (Zeile 47)
- Keine Änderung nötig - Route existiert nur noch nicht

---

## 7. Zusammenfassung

| Aspekt | Details |
|--------|---------|
| Neue Dateien | ~15 (Types, Data, 9 Sections, Page, Master) |
| Wiederverwendbar | Parallax, ScrollAnimation, Card, Badge, Button |
| Tone | HBR-Style: wissenschaftlich, aber zugänglich |
| Sprache | Bilingual DE/EN |
| Key Differentiator | "Correlation, not causation" durchgehend |
| CTAs | Calculate θ_index Tool, Book Strategy Call, Download PDF |

---

## Nächste Schritte nach Implementierung

1. **ANST Detail Page** (`/expertise/anst`) - gleiche Architektur
2. **Bottleneck Framework Page** (`/expertise/bottleneck`)
3. **Unified Framework Page** (`/expertise/architecture`)
4. **θ_index Calculator Tool** (`/tools/calculate-theta`)
