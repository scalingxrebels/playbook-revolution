

# Playbook-Architektur Refactoring - Detaillierter Plan

## Problem-Analyse

Die aktuelle `PlaybookGtmRevenue.tsx` ist eine **1164-Zeilen monolithische Datei** mit 9 inline Sektionen. Jede Sektion enthält:
- UI-Logik (React Components)
- Inhalts-Daten (hardcoded strings)
- Styling (Tailwind classes)

Dies macht neue Playbooks wie "Product Playbook" schwer zu implementieren und führt zu Implementierungsfehlern.

---

## Architektur-Lösung

```
src/
├── data/playbooks/
│   ├── types.ts           # Shared TypeScript interfaces
│   ├── gtm-revenue.ts     # GTM-Playbook Daten (~250 Zeilen)
│   └── product.ts         # Product-Playbook Daten (~250 Zeilen)
│
├── components/playbooks/sections/
│   ├── PlaybookHeroSection.tsx        # ~120 Zeilen
│   ├── PlaybookSummarySection.tsx     # ~60 Zeilen
│   ├── PlaybookFrameworkSection.tsx   # ~150 Zeilen
│   ├── PlaybookBestPracticesSection.tsx  # ~100 Zeilen
│   ├── PlaybookRoadmapSection.tsx     # ~120 Zeilen
│   ├── PlaybookCaseStudiesSection.tsx # ~100 Zeilen
│   ├── PlaybookPersonasSection.tsx    # ~80 Zeilen
│   ├── PlaybookSolutionsSection.tsx   # ~100 Zeilen
│   └── PlaybookCTASection.tsx         # ~80 Zeilen
│
└── pages/
    ├── PlaybookGtmRevenue.tsx   # ~50 Zeilen (Composition)
    └── PlaybookProduct.tsx      # ~50 Zeilen (Composition)
```

---

## Phase 1: Type Definitions

**Datei:** `src/data/playbooks/types.ts`

```typescript
import { LucideIcon } from 'lucide-react';

export interface BilingualText {
  en: string;
  de: string;
}

export interface PlaybookHeroData {
  breadcrumbTitle: BilingualText;
  badge: BilingualText;
  badgeIcon: LucideIcon;
  title: string;
  subtitle: BilingualText;
  description: BilingualText;
  trustBadges: BilingualText[];
  bookingUrl: string;
  downloadUrl: string;
  gradient: string;
}

export interface PlaybookSummaryData {
  problem: BilingualText;
  whyItMatters: BilingualText;
  solution: BilingualText;
}

export interface FrameworkItem {
  id: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  title: BilingualText;
  subtitle: BilingualText;
  description: BilingualText;
  metrics: BilingualText[];
  actions: BilingualText[];
}

export interface BestPractice {
  category: BilingualText;
  dos: BilingualText[];
  donts: BilingualText[];
}

export interface RoadmapPhase {
  phase: number;
  title: BilingualText;
  timeline: BilingualText;
  focus: BilingualText;
  deliverables: BilingualText[];
  gradient: string;
}

export interface CaseStudyResult {
  metric: string;
  before: string;
  after: string;
  change: string;
}

export interface CaseStudy {
  company: string;
  problem: BilingualText;
  solution: BilingualText;
  results: CaseStudyResult[];
  timeline: string;
}

export interface Persona {
  icon: LucideIcon;
  role: BilingualText;
  pain: BilingualText;
  outcome: BilingualText;
  color: string;
}

export interface RelatedSolution {
  title: BilingualText;
  desc: BilingualText;
  timeline: BilingualText;
  investment: string;
  impact: BilingualText;
  href: string;
  icon: LucideIcon;
  color: string;
}

export interface PlaybookPageData {
  hero: PlaybookHeroData;
  summary: PlaybookSummaryData;
  framework: FrameworkItem[];
  bestPractices: BestPractice[];
  roadmap: RoadmapPhase[];
  caseStudies: CaseStudy[];
  personas: Persona[];
  relatedSolutions: RelatedSolution[];
  finalCta: {
    headline: BilingualText;
    subline: BilingualText;
    trustSignals: BilingualText[];
  };
}
```

---

## Phase 2: GTM-Revenue Daten extrahieren

**Datei:** `src/data/playbooks/gtm-revenue.ts`

Alle hardcoded Inhalte aus `PlaybookGtmRevenue.tsx` extrahieren:

- Hero: Badge "Playbook · Growth Engines", TrendingUp Icon, orange gradient
- Summary: Problem/Why/Solution Texte
- Framework: 7 Levers (ICP, Outbound, Inbound, Partners, Pricing, Sales, RevOps)
- Best Practices: 3 Kategorien mit Do's/Don'ts
- Roadmap: 3 Phasen (Week 1-4, 5-8, 9-12)
- Case Studies: 3 anonymisierte Cases
- Personas: 4 Rollen (CEO, CMO/CRO, COO, VC)
- Solutions: Power Up, Boost, Expert Session
- Final CTA: "Ready to build your revenue engine?"

---

## Phase 3: Product-Playbook Daten erstellen

**Datei:** `src/data/playbooks/product.ts`

Neue Inhalte basierend auf dem genehmigten Plan:

- Hero: Badge "Playbook · Growth Engines", Rocket Icon, violet gradient
- Summary: Problem (shipping too slow), Why (survival problem), Solution (5-component framework)
- Framework: 5 Komponenten (PLG, Velocity, Quality, Analytics, AI-Dev)
- Best Practices: PLG/Velocity/Quality Do's und Don'ts
- Roadmap: 3 Phasen (Week 1-2, 3-4, 5-8)
- Case Studies: Series A SaaS, Series B Dev Tool, Series C Marketing
- Personas: CEO, CPO, CTO, VP Engineering
- Solutions: Power Up Product Velocity, Boost Product Transformation, Expert Session
- Final CTA: "Ready to build products that scale?"

---

## Phase 4: Wiederverwendbare Section Components

### 4.1 PlaybookHeroSection.tsx

Props:
```typescript
interface Props {
  data: PlaybookHeroData;
}
```

Enthält:
- Deep Space Background mit Parallax
- TwinklingStars
- Breadcrumb Navigation
- Badge mit Icon
- H1/H2 Headlines
- 2 CTAs (Book Call, Download PDF)
- Trust Badges
- Scroll Indicator

### 4.2 PlaybookSummarySection.tsx

Props:
```typescript
interface Props {
  data: PlaybookSummaryData;
}
```

Enthält:
- Problem (mit AlertTriangle Icon)
- Why It Matters (mit Target Icon)
- Solution (mit Zap Icon, highlighted Card)

### 4.3 PlaybookFrameworkSection.tsx

Props:
```typescript
interface Props {
  title: BilingualText;
  subtitle: BilingualText;
  items: FrameworkItem[];
}
```

Enthält:
- Section Header
- Accordion mit beliebig vielen Items
- Jedes Item: Icon, Title, Subtitle, Description, Metrics, Actions

### 4.4 PlaybookBestPracticesSection.tsx

Props:
```typescript
interface Props {
  title: BilingualText;
  practices: BestPractice[];
}
```

Enthält:
- Grid mit Do's (Check Icon, grün) und Don'ts (X Icon, rot)

### 4.5 PlaybookRoadmapSection.tsx

Props:
```typescript
interface Props {
  title: BilingualText;
  subtitle: BilingualText;
  phases: RoadmapPhase[];
}
```

Enthält:
- Timeline Visualisierung
- Phase Cards mit Gradient Borders
- Deliverables Checkliste

### 4.6 PlaybookCaseStudiesSection.tsx

Props:
```typescript
interface Props {
  title: BilingualText;
  subtitle: BilingualText;
  cases: CaseStudy[];
}
```

Enthält:
- 3-Column Grid
- Problem/Solution/Results Cards
- Before/After Metrics mit Badges

### 4.7 PlaybookPersonasSection.tsx

Props:
```typescript
interface Props {
  title: BilingualText;
  subtitle: BilingualText;
  personas: Persona[];
}
```

Enthält:
- 4-Column Grid
- Icon mit Gradient
- Role, Pain Point, Outcome

### 4.8 PlaybookSolutionsSection.tsx

Props:
```typescript
interface Props {
  title: BilingualText;
  subtitle: BilingualText;
  solutions: RelatedSolution[];
}
```

Enthält:
- 3-Column Grid
- Solution Cards mit Icon, Timeline, Investment, Impact
- CTA Buttons

### 4.9 PlaybookCTASection.tsx

Props:
```typescript
interface Props {
  headline: BilingualText;
  subline: BilingualText;
  trustSignals: BilingualText[];
  bookingUrl: string;
  downloadUrl: string;
}
```

Enthält:
- Gradient Background
- H2 Headline
- 2 CTAs
- Trust Signals (No commitment, 30 min, etc.)

---

## Phase 5: Page Compositions

### PlaybookGtmRevenue.tsx (~50 Zeilen)

```typescript
import { gtmRevenueData } from '@/data/playbooks/gtm-revenue';
import { PlaybookHeroSection } from '@/components/playbooks/sections/PlaybookHeroSection';
// ... weitere imports

const PlaybookGtmRevenue: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PlaybookHeroSection data={gtmRevenueData.hero} />
      <PlaybookSummarySection data={gtmRevenueData.summary} />
      <PlaybookFrameworkSection 
        title={{ en: 'The 7-Lever GTM Framework', de: 'Das 7-Hebel GTM Framework' }}
        items={gtmRevenueData.framework} 
      />
      <PlaybookBestPracticesSection practices={gtmRevenueData.bestPractices} />
      <PlaybookRoadmapSection phases={gtmRevenueData.roadmap} />
      <PlaybookCaseStudiesSection cases={gtmRevenueData.caseStudies} />
      <PlaybookPersonasSection personas={gtmRevenueData.personas} />
      <PlaybookSolutionsSection solutions={gtmRevenueData.relatedSolutions} />
      <PlaybookCTASection {...gtmRevenueData.finalCta} />
      <Footer />
    </div>
  );
};
```

### PlaybookProduct.tsx (~50 Zeilen)

```typescript
import { productData } from '@/data/playbooks/product';
// ... gleiche Struktur wie GTM, nur mit productData
```

---

## Implementierungsreihenfolge

| Schritt | Datei | Abhängigkeiten |
|---------|-------|----------------|
| 1 | `types.ts` | Keine |
| 2 | `gtm-revenue.ts` | types.ts |
| 3 | `product.ts` | types.ts |
| 4 | `PlaybookHeroSection.tsx` | types.ts |
| 5 | `PlaybookSummarySection.tsx` | types.ts |
| 6 | `PlaybookFrameworkSection.tsx` | types.ts |
| 7 | `PlaybookBestPracticesSection.tsx` | types.ts |
| 8 | `PlaybookRoadmapSection.tsx` | types.ts |
| 9 | `PlaybookCaseStudiesSection.tsx` | types.ts |
| 10 | `PlaybookPersonasSection.tsx` | types.ts |
| 11 | `PlaybookSolutionsSection.tsx` | types.ts |
| 12 | `PlaybookCTASection.tsx` | types.ts |
| 13 | `PlaybookGtmRevenue.tsx` refactoren | Alle Sections |
| 14 | `PlaybookProduct.tsx` erstellen | Alle Sections + product.ts |
| 15 | `playbooks.ts` updaten | Keine |
| 16 | `App.tsx` Route hinzufügen | PlaybookProduct.tsx |

---

## Vorteile

| Aspekt | Vorher | Nachher |
|--------|--------|---------|
| Dateigröße pro Playbook | 1164 Zeilen | ~50 Zeilen |
| Neues Playbook erstellen | 1000+ Zeilen kopieren/anpassen | Daten-Datei + 50-Zeilen Page |
| Design-Änderung | 9 Stellen pro Playbook | 1 Section Component |
| Typsicherheit | Keine | Vollständig typisiert |
| Testbarkeit | Monolithisch | Isolierte Components |

---

## Erwartetes Ergebnis

Nach dem Refactoring:

1. `/playbooks` zeigt beide Kacheln (GTM/Revenue + Product)
2. Beide Landing Pages haben identisches Design-System
3. Neue Playbooks können in 30 Minuten erstellt werden (nur Daten-Datei + Page Composition)
4. Alle Änderungen an einer Sektion wirken automatisch auf alle Playbooks

