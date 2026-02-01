

# Plan: 8 Business Dimensions (D₁-D₈) Integration

## Ziel
Integration der "8 Business Dimensions (D₁-D₈)" Section auf 3 Expertise-Seiten, um zu erklären WO das Framework angewendet wird.

## Übersicht der Änderungen

| Datei | Änderung | Position |
|-------|----------|----------|
| `src/data/research/types.ts` | Neues Interface `BusinessDimensionsSectionData` | Nach bestehenden Interfaces |
| `src/components/research/sections/ResearchBusinessDimensionsSection.tsx` | Neue Section-Komponente | NEU |
| `src/components/research/sections/index.ts` | Export hinzufügen | NEU |
| `src/data/research/anst.ts` | `businessDimensions` Daten hinzufügen | NEU |
| `src/data/research/sst.ts` | `businessDimensions` Daten hinzufügen | NEU |
| `src/data/research/unified-framework.ts` | `businessDimensions` Daten hinzufügen | NEU |
| `src/components/research/ANSTLandingPage.tsx` | Section nach FormulaSection einfügen | Zeile 26-27 |
| `src/components/research/SSTLandingPage.tsx` | Section nach BottleneckPrincipleSection einfügen | Zeile 26-27 |
| `src/components/research/UnifiedFrameworkLandingPage.tsx` | Section nach PracticalApplicationSection einfügen | Zeile 25-26 |

## Detaillierte Implementierung

### 1. Types erweitern (`src/data/research/types.ts`)

Neues Interface nach bestehenden Interfaces hinzufügen:

```typescript
// Business Dimensions Section (D₁-D₈)
export interface BusinessDimension {
  id: string; // D₁, D₂, etc.
  name: BilingualText;
  icon: string; // Lucide icon name
  description: BilingualText;
  metric: BilingualText;
  exampleBottleneck?: BilingualText; // Nur für SST
}

export interface BusinessDimensionsSectionData {
  headline: BilingualText;
  subheadline: BilingualText;
  intro: BilingualText[];
  dimensions: BusinessDimension[];
  matrixExample?: {
    capability: string;
    dimension: string;
    questions: BilingualText[];
    implication: BilingualText;
  };
  callout: {
    title: BilingualText;
    content: BilingualText;
  };
  crossLink?: {
    text: BilingualText;
    href: string;
  };
}
```

Außerdem die Page Data Interfaces erweitern:

```typescript
// ANSTPageData erweitern
export interface ANSTPageData {
  // ... bestehende Felder
  businessDimensions?: BusinessDimensionsSectionData;
}

// SSTPageData erweitern
export interface SSTPageData {
  // ... bestehende Felder
  businessDimensions?: BusinessDimensionsSectionData;
}

// UnifiedFrameworkPageData erweitern
export interface UnifiedFrameworkPageData {
  // ... bestehende Felder
  businessDimensions?: BusinessDimensionsSectionData;
}
```

### 2. Neue Section-Komponente erstellen

Datei: `src/components/research/sections/ResearchBusinessDimensionsSection.tsx`

**Struktur:**
- Badge: "Framework" mit Grid Icon
- H2: Headline
- Subheadline
- Intro-Paragraphen (2-3)
- 8 Dimensions in 2x4 Grid (responsive: 1 col mobile, 2 col tablet, 4 col desktop)
- Optional: 4x8 Matrix Beispiel
- Callout Box
- Optional: Cross-Link zu SST

**Styling:**
- Folgt dem Pattern von `ResearchSSTCapabilitiesSection.tsx`
- Dark background mit gradient
- Cards mit farbigen Icons
- Scroll-Animation

### 3. Index Export hinzufügen

```typescript
// Shared Section Components
export { default as ResearchBusinessDimensionsSection } from './ResearchBusinessDimensionsSection';
```

### 4. ANST Data (`src/data/research/anst.ts`)

Neues `businessDimensions` Objekt nach `formula` hinzufügen:

```typescript
businessDimensions: {
  headline: {
    en: 'The 8 Business Dimensions: Where to Apply the Framework',
    de: 'Die 8 Business-Dimensionen: Wo du das Framework anwendest'
  },
  subheadline: {
    en: 'The 4 capabilities apply across 8 business dimensions. This creates 32 capability areas—and your #1 bottleneck is hiding in one of them.',
    de: 'Die 4 Capabilities gelten für 8 Business-Dimensionen. Das ergibt 32 Capability-Bereiche—und dein #1 Engpass versteckt sich in einem davon.'
  },
  intro: [
    { 
      en: 'You now understand the 4 capabilities (Strategy, Setup, Execution, Operationalization). But where do you apply them? The answer: Across 8 business dimensions.',
      de: 'Du verstehst jetzt die 4 Capabilities (Strategy, Setup, Execution, Operationalization). Aber wo wendest du sie an? Die Antwort: Über 8 Business-Dimensionen.'
    },
    {
      en: 'Think of it like a matrix: 4 Capabilities (HOW you scale) × 8 Dimensions (WHERE you apply them) = 32 Capability Areas. Your #1 bottleneck is hiding in one of these 32 areas.',
      de: 'Denk es dir wie eine Matrix: 4 Capabilities (WIE du skalierst) × 8 Dimensionen (WO du sie anwendest) = 32 Capability-Bereiche. Dein #1 Engpass versteckt sich in einem dieser 32 Bereiche.'
    },
    {
      en: 'The 8 dimensions are MECE (Mutually Exclusive, Collectively Exhaustive)—covering every aspect of your business without overlap.',
      de: 'Die 8 Dimensionen sind MECE (Mutually Exclusive, Collectively Exhaustive)—sie decken jeden Aspekt deines Business ab, ohne Überlappung.'
    }
  ],
  dimensions: [
    { id: 'D₁', name: { en: 'GTM/Revenue', de: 'GTM/Revenue' }, icon: 'ShoppingCart', description: { en: 'Sales, Marketing, Pricing, Customer Acquisition', de: 'Sales, Marketing, Pricing, Kundenakquise' }, metric: { en: 'CAC, LTV/CAC, Growth Rate', de: 'CAC, LTV/CAC, Growth Rate' } },
    { id: 'D₂', name: { en: 'Product', de: 'Product' }, icon: 'Package', description: { en: 'Product Development, Roadmap, Quality, Innovation', de: 'Produktentwicklung, Roadmap, Qualität, Innovation' }, metric: { en: 'PMF, Retention', de: 'PMF, Retention' } },
    { id: 'D₃', name: { en: 'Customer Success', de: 'Customer Success' }, icon: 'HeartHandshake', description: { en: 'Onboarding, Retention, Expansion, Support', de: 'Onboarding, Retention, Expansion, Support' }, metric: { en: 'NRR, Churn, Expansion', de: 'NRR, Churn, Expansion' } },
    { id: 'D₄', name: { en: 'Operations', de: 'Operations' }, icon: 'Cog', description: { en: 'Processes, Workflows, Efficiency, Delivery', de: 'Prozesse, Workflows, Effizienz, Delivery' }, metric: { en: 'Efficiency, Coordination Cost', de: 'Effizienz, Koordinationskosten' } },
    { id: 'D₅', name: { en: 'Finance', de: 'Finance' }, icon: 'Landmark', description: { en: 'Planning, Forecasting, Unit Economics, Reporting', de: 'Planung, Forecasting, Unit Economics, Reporting' }, metric: { en: 'Unit Economics, Burn Rate', de: 'Unit Economics, Burn Rate' } },
    { id: 'D₆', name: { en: 'Talent', de: 'Talent' }, icon: 'UserCog', description: { en: 'Hiring, Development, Retention, Culture', de: 'Hiring, Entwicklung, Retention, Kultur' }, metric: { en: 'Team Quality, Turnover', de: 'Team-Qualität, Turnover' } },
    { id: 'D₇', name: { en: 'Data/Tech', de: 'Data/Tech' }, icon: 'Server', description: { en: 'Infrastructure, Data, Security, AI Integration', de: 'Infrastruktur, Daten, Security, AI-Integration' }, metric: { en: 'AI Maturity, Tech Debt', de: 'AI Maturity, Tech Debt' } },
    { id: 'D₈', name: { en: 'Governance', de: 'Governance' }, icon: 'Scale', description: { en: 'Board, Legal, Compliance, Risk Management', de: 'Board, Legal, Compliance, Risikomanagement' }, metric: { en: 'Board Confidence, Investor Readiness', de: 'Board Confidence, Investor Readiness' } }
  ],
  matrixExample: {
    capability: 'C₂ (Setup)',
    dimension: 'D₁ (GTM/Revenue)',
    questions: [
      { en: 'Do you have clear ICP definition?', de: 'Hast du eine klare ICP-Definition?' },
      { en: 'Do you have repeatable sales playbooks?', de: 'Hast du wiederholbare Sales Playbooks?' },
      { en: 'Do you have predictable lead generation?', de: 'Hast du vorhersagbare Lead-Generierung?' }
    ],
    implication: { en: 'If the answer is "No" → This is a bottleneck.', de: 'Wenn die Antwort "Nein" ist → Das ist ein Engpass.' }
  },
  callout: {
    title: { en: 'Why This Matters', de: 'Warum das wichtig ist' },
    content: {
      en: 'Most companies focus on 1-2 dimensions (e.g., "We need better sales" or "We need better product"). But your #1 bottleneck might be hiding in a different dimension. The 8-dimensional framework ensures you diagnose ALL 32 capability areas—not just the obvious ones.',
      de: 'Die meisten Unternehmen fokussieren auf 1-2 Dimensionen (z.B. "Wir brauchen besseren Sales" oder "Wir brauchen besseres Produkt"). Aber dein #1 Engpass könnte sich in einer anderen Dimension verstecken. Das 8-dimensionale Framework stellt sicher, dass du ALLE 32 Capability-Bereiche diagnostizierst—nicht nur die offensichtlichen.'
    }
  },
  crossLink: {
    text: { en: 'Want to see how this works in practice? Read about the Scaling Stack Theory (SST).', de: 'Willst du sehen, wie das in der Praxis funktioniert? Lies über die Scaling Stack Theory (SST).' },
    href: '/expertise/sst'
  }
}
```

### 5. SST Data (`src/data/research/sst.ts`)

Ähnliche Struktur, aber mit **Example Bottleneck** pro Dimension:

```typescript
businessDimensions: {
  headline: {
    en: 'The 8 Business Dimensions: Where to Apply the 4 Capabilities',
    de: 'Die 8 Business-Dimensionen: Wo du die 4 Capabilities anwendest'
  },
  subheadline: {
    en: 'The Scaling Stack diagnoses 4 capabilities × 8 dimensions = 32 capability areas. Your #1 bottleneck is hiding in one of them.',
    de: 'Der Scaling Stack diagnostiziert 4 Capabilities × 8 Dimensionen = 32 Capability-Bereiche. Dein #1 Engpass versteckt sich in einem davon.'
  },
  // ... dimensions mit exampleBottleneck
  dimensions: [
    { 
      id: 'D₁', 
      name: { en: 'GTM/Revenue', de: 'GTM/Revenue' }, 
      icon: 'ShoppingCart', 
      description: { en: 'Sales, Marketing, Pricing, CAC', de: 'Sales, Marketing, Pricing, CAC' }, 
      metric: { en: 'CAC, LTV/CAC, Growth Rate', de: 'CAC, LTV/CAC, Growth Rate' },
      exampleBottleneck: { en: '"We don\'t have repeatable sales playbooks" (C₂ × D₁)', de: '"Wir haben keine wiederholbaren Sales Playbooks" (C₂ × D₁)' }
    },
    // ... weitere 7 Dimensionen mit Beispiel-Bottlenecks
  ]
}
```

### 6. Unified Framework Data (`src/data/research/unified-framework.ts`)

Kompaktere Version, fokussiert auf das 4×8 = 32 Konzept:

```typescript
businessDimensions: {
  headline: {
    en: 'The 8 Business Dimensions',
    de: 'Die 8 Business-Dimensionen'
  },
  subheadline: {
    en: '4 capabilities × 8 dimensions = 32 capability areas to diagnose',
    de: '4 Capabilities × 8 Dimensionen = 32 Capability-Bereiche zur Diagnose'
  },
  // ... kompaktere intro und dimensions
}
```

### 7. Landing Page Updates

**ANSTLandingPage.tsx** - Nach ResearchFormulaSection:
```typescript
import { ResearchBusinessDimensionsSection } from './sections';
// ...
<ResearchFormulaSection data={data.formula} />
{data.businessDimensions && <ResearchBusinessDimensionsSection data={data.businessDimensions} />}
<ResearchCaseStudiesSection data={data.caseStudies} />
```

**SSTLandingPage.tsx** - Nach ResearchBottleneckPrincipleSection:
```typescript
import { ResearchBusinessDimensionsSection } from './sections';
// ...
<ResearchBottleneckPrincipleSection data={data.bottleneckPrinciple} />
{data.businessDimensions && <ResearchBusinessDimensionsSection data={data.businessDimensions} />}
<ResearchBottleneckCaseStudiesSection data={data.caseStudies} />
```

**UnifiedFrameworkLandingPage.tsx** - Nach ResearchPracticalApplicationSection:
```typescript
import ResearchBusinessDimensionsSection from './sections/ResearchBusinessDimensionsSection';
// ...
<ResearchPracticalApplicationSection data={data.practicalApplication} />
{data.businessDimensions && <ResearchBusinessDimensionsSection data={data.businessDimensions} />}
<ResearchUnifiedCaseStudySection data={data.unifiedCaseStudy} />
```

## Section-Komponente Design

**Layout:**
```text
┌─────────────────────────────────────────────────────────────┐
│  [Badge: Framework]                                         │
│                                                             │
│  The 8 Business Dimensions                                  │
│  Subheadline explaining the 4×8 matrix concept              │
│                                                             │
│  [Intro paragraphs]                                         │
│                                                             │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                       │
│  │ D₁   │ │ D₂   │ │ D₃   │ │ D₄   │                       │
│  │ GTM  │ │Prod. │ │ CS   │ │ Ops  │                       │
│  └──────┘ └──────┘ └──────┘ └──────┘                       │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                       │
│  │ D₅   │ │ D₆   │ │ D₇   │ │ D₈   │                       │
│  │Finance││Talent │ │Data  │ │ Gov  │                       │
│  └──────┘ └──────┘ └──────┘ └──────┘                       │
│                                                             │
│  [Optional: 4×8 Matrix Example]                             │
│                                                             │
│  ┌─────────────────────────────────────────┐               │
│  │ 💡 Why This Matters                      │               │
│  │ [Callout content]                        │               │
│  └─────────────────────────────────────────┘               │
│                                                             │
│  [Optional: Cross-link to SST]                              │
└─────────────────────────────────────────────────────────────┘
```

## Implementierungsreihenfolge

1. **Types** - `types.ts` mit neuem Interface erweitern
2. **Komponente** - `ResearchBusinessDimensionsSection.tsx` erstellen
3. **Index** - Export in `index.ts` hinzufügen
4. **ANST Data** - `businessDimensions` Objekt hinzufügen
5. **SST Data** - `businessDimensions` Objekt mit Beispiel-Bottlenecks
6. **Unified Data** - `businessDimensions` Objekt (kompakt)
7. **Landing Pages** - Alle 3 Seiten aktualisieren

## Ergebnis

Nach der Implementierung:
- Alle 3 Expertise-Seiten erklären die 8 Business Dimensions (D₁-D₈)
- CEOs verstehen: "4 Capabilities × 8 Dimensions = 32 Capability Areas"
- Konsistenz zwischen allen Research-Seiten
- Cross-Links verbinden ANST ↔ SST für tiefere Exploration

