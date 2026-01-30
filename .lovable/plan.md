
# Implementierungsplan: The Unified Framework Research Page

## Übersicht

Die Unified Framework-Seite (`/expertise/unified-framework`) ist die **Meta-Seite**, die erklärt, wie alle 4 Formeln (AMF, ANST, SST, META) als ein System zusammenarbeiten. Sie unterscheidet sich von den anderen Research-Seiten durch:
- Fokus auf **Systemverständnis** statt Einzelformeln
- **Flow-Visualisierung** (AMF → ANST → SST → META)
- **Einzelne detaillierte Case Study** (Midjourney mit allen 4 Formeln)
- **Praktische Anwendungsfälle** (Diagnose, Transformation, Tracking)

---

## 1. Architektur-Analyse

### Wiederverwendbare Components

| Component | Für Unified nutzbar? | Anpassung |
|-----------|---------------------|-----------|
| `ResearchHeroSection` | Ja | Gleiche Datenstruktur (`AMFHeroData`) |
| `ResearchImplicationsSection` | Ja | Gleiche 3-Cards-Struktur |
| `ResearchDownloadSection` | Ja | Gleiche Struktur |
| `ResearchFinalCTASection` | Ja | Gleiche Struktur |

### Neue Components für Unified Framework

| Neue Section | Beschreibung | Layout |
|--------------|--------------|--------|
| `ResearchWhyFourFormulasSection` | "Why We Need 4 Formulas" | 2-Column (Text + Visual) |
| `ResearchFourFormulasSection` | 4 Formula Cards (AMF, ANST, SST, META) | 4-Column Grid |
| `ResearchFrameworkFlowSection` | "How They Work Together" Flow | Centered, Step-by-Step |
| `ResearchPracticalApplicationSection` | 3 Use Case Cards | 3-Column Grid |
| `ResearchUnifiedCaseStudySection` | Midjourney Complete Analysis | 2-Column (Analysis + Metrics) |

---

## 2. Zu erstellende Dateien

### 2.1 Type Extensions (`src/data/research/types.ts`)

Neue Interfaces hinzufügen:

```typescript
// Why Four Formulas Section
export interface WhyFourFormulasData {
  headline: BilingualText;
  questions: Array<{
    question: BilingualText;
    formula: string; // 'AMF' | 'ANST' | 'SST' | 'META'
    explanation: BilingualText;
  }>;
  insight: BilingualText;
  callout: { title: BilingualText; content: BilingualText };
}

// Four Formulas Section
export interface FormulaCard {
  id: 'amf' | 'anst' | 'sst' | 'meta';
  name: BilingualText;
  fullName: BilingualText;
  question: BilingualText; // WHAT, WHY, WHAT, WHEN
  input: BilingualText;
  inputDetails: BilingualText[];
  output: BilingualText;
  outputDetails: BilingualText[];
  validation: BilingualText;
  href: string;
  color: 'violet' | 'blue' | 'emerald' | 'amber';
}

export interface FourFormulasData {
  headline: BilingualText;
  subheadline: BilingualText;
  formulas: FormulaCard[];
}

// Framework Flow Section
export interface FlowStep {
  number: number;
  name: BilingualText;
  formula: string;
  description: BilingualText;
  output: BilingualText;
  outputValue: string;
  color: 'violet' | 'blue' | 'emerald' | 'amber';
}

export interface FrameworkFlowData {
  headline: BilingualText;
  subheadline: BilingualText;
  steps: FlowStep[];
  result: BilingualText;
  callout: { title: BilingualText; content: BilingualText };
}

// Practical Application Section
export interface ApplicationCard {
  number: number;
  title: BilingualText;
  useFormulas: string[]; // ['AMF', 'SST']
  steps: BilingualText[];
  output: BilingualText[];
  cta: { text: BilingualText; href: string };
  color: 'violet' | 'blue' | 'emerald';
}

export interface PracticalApplicationData {
  headline: BilingualText;
  subheadline: BilingualText;
  applications: ApplicationCard[];
}

// Unified Case Study Section (Midjourney with all 4 formulas)
export interface UnifiedCaseStudyData {
  headline: BilingualText;
  subheadline: BilingualText;
  company: {
    name: string;
    founded: string;
    revenue: string;
    employees: string;
    timeToRevenue: string;
  };
  analysis: {
    amf: {
      headline: BilingualText;
      thetaIndex: string;
      level: string;
      dimensions: Array<{ name: BilingualText; score: string }>;
    };
    anst: {
      headline: BilingualText;
      result: BilingualText;
      enablers: BilingualText;
      capabilities: string;
    };
    sst: {
      headline: BilingualText;
      cMin: string;
      bottleneck: BilingualText;
      scores: Array<{ capability: string; score: string }>;
    };
    meta: {
      headline: BilingualText;
      prediction: string;
      actual: string;
      validated: boolean;
    };
  };
  insight: BilingualText;
  callout: { title: BilingualText; content: BilingualText };
}

// Complete Unified Framework Page Data
export interface UnifiedFrameworkPageData {
  hero: AMFHeroData;
  whyFourFormulas: WhyFourFormulasData;
  fourFormulas: FourFormulasData;
  frameworkFlow: FrameworkFlowData;
  practicalApplication: PracticalApplicationData;
  unifiedCaseStudy: UnifiedCaseStudyData;
  implications: ImplicationsData;
  download: DownloadData;
  finalCta: FinalCTAData;
}
```

---

### 2.2 Unified Framework Data File (`src/data/research/unified-framework.ts`)

Vollständiger bilingualer Content für alle 9 Sections:

| Section | Key Content |
|---------|-------------|
| **Hero** | "How It All Fits Together", Stats: 4 formulas, 1 system, 22 companies, 3 years |
| **Why Four Formulas** | 4 Questions (WHAT, WHY, WHAT, WHEN) → 4 Formulas, Callout: "Why Not 1 Formula?" |
| **Four Formulas** | AMF (WHAT level), ANST (WHY faster), SST (WHAT blocking), META (WHEN €100M) |
| **Framework Flow** | Step 1-4 Flow: Measure → Explain → Diagnose → Predict |
| **Practical Application** | Diagnose State, Plan Transformation, Track Progress |
| **Case Study** | Midjourney: All 4 formulas applied, θ_index=0.88, C_min=0.80, 18 months |
| **Implications** | Use Complete System, Start with Diagnosis, Track Quarterly |
| **Download** | Architecture Document v4.5.1 (15,000 words) |
| **Final CTA** | "Ready to Use the Framework?", Book Strategy Call |

---

### 2.3 Neue Section Components

#### A) `ResearchWhyFourFormulasSection.tsx`

**Layout:** 2-Column (Text links, Visual rechts)

**Design-Elemente:**
- Header-Badge: `<HelpCircle />` + "The Challenge"
- 4 Questions mit farbigen Formula-Tags (WHAT→AMF, WHY→ANST, WHAT→SST, WHEN→META)
- Rechte Seite: Visual "4 Questions = 4 Formulas"
- Callout Box: "Why Not 1 Formula?"

**Farbschema:**
- AMF (WHAT level): Violet
- ANST (WHY): Blue  
- SST (WHAT blocking): Emerald
- META (WHEN): Amber

---

#### B) `ResearchFourFormulasSection.tsx`

**Layout:** Header + 4-Column Grid (responsive: 2×2 Tablet, 1 Column Mobile)

**Design-Elemente:**
- Header-Badge: `<Layers />` + "The 4 Formulas"
- 4 Formula Cards mit:
  - Formula Name Badge (AMF, ANST, SST, META)
  - Full Name
  - Question (WHAT, WHY, WHAT, WHEN)
  - Input (was wird gemessen)
  - Output (was kommt raus)
  - Validation (n=XX, r=XX)
  - "Learn More →" Link zu Detail-Seite
- Farbkodierte Borders (Violet, Blue, Emerald, Amber)

---

#### C) `ResearchFrameworkFlowSection.tsx`

**Layout:** Centered, Dark Background (Deep Space), Vertikaler Flow

**Design-Elemente:**
- Header-Badge: `<ArrowRight />` + "The Flow"
- 4 verbundene Step-Cards mit Pfeilen:
  ```
  Step 1: Measure (AMF) → θ_index = 0.88
        ↓
  Step 2: Explain (ANST) → S = High
        ↓
  Step 3: Diagnose (SST) → C_min = 0.80
        ↓
  Step 4: Predict (META) → 8-18 months
  ```
- Jeder Step zeigt: Name, Formula, Output, Value
- Callout: "Why This Order Matters"

---

#### D) `ResearchPracticalApplicationSection.tsx`

**Layout:** Header + 3-Column Grid

**Design-Elemente:**
- Header-Badge: `<Wrench />` + "How to Use"
- 3 Use Case Cards:
  1. "Diagnose Your Current State" (AMF + SST)
  2. "Plan Your Transformation" (AMF + SST + META)
  3. "Track Progress" (AMF + SST quarterly)
- Jede Card zeigt:
  - Nummer + Titel
  - "Use: AMF + SST" Badges
  - Steps (1, 2, 3)
  - Output
  - CTA Button

---

#### E) `ResearchUnifiedCaseStudySection.tsx`

**Layout:** 2-Column (Analysis links, Metrics rechts)

**Design-Elemente:**
- Header-Badge: `<Building />` + "Case Study: Midjourney"
- Linke Spalte: 4 Sub-Sections (AMF, ANST, SST, META Analyse)
  - Jede Sub-Section mit farbigem Border
  - Zeigt Formel-Anwendung auf Midjourney
- Rechte Spalte: Metrics Card
  - Company Profile
  - θ_index, C_min, Time to €100M
  - Validation: Predicted vs. Actual ✅
- Insight Callout: "Why Midjourney Succeeded"

---

### 2.4 Master Component (`src/components/research/UnifiedFrameworkLandingPage.tsx`)

```tsx
const UnifiedFrameworkLandingPage: React.FC<UnifiedFrameworkLandingPageProps> = ({ data }) => (
  <main>
    <ResearchHeroSection data={data.hero} />
    <ResearchWhyFourFormulasSection data={data.whyFourFormulas} />
    <ResearchFourFormulasSection data={data.fourFormulas} />
    <ResearchFrameworkFlowSection data={data.frameworkFlow} />
    <ResearchPracticalApplicationSection data={data.practicalApplication} />
    <ResearchUnifiedCaseStudySection data={data.unifiedCaseStudy} />
    <ResearchImplicationsSection data={data.implications} />
    <ResearchDownloadSection data={data.download} />
    <ResearchFinalCTASection data={data.finalCta} />
  </main>
);
```

---

### 2.5 Page Component (`src/pages/ExpertiseUnifiedFramework.tsx`)

```tsx
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UnifiedFrameworkLandingPage from '@/components/research/UnifiedFrameworkLandingPage';
import { unifiedFrameworkPageData } from '@/data/research/unified-framework';

const ExpertiseUnifiedFramework: React.FC = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />
    <UnifiedFrameworkLandingPage data={unifiedFrameworkPageData} />
    <Footer />
  </div>
);

export default ExpertiseUnifiedFramework;
```

---

### 2.6 Routing (`src/App.tsx`)

```tsx
const ExpertiseUnifiedFramework = lazy(() => import("./pages/ExpertiseUnifiedFramework"));

<Route path="/expertise/unified-framework" element={<ExpertiseUnifiedFramework />} />
```

---

## 3. Design-Spezifikationen

### Visuelles Theming (konsistent mit AMF/ANST/SST)

| Element | Spezifikation |
|---------|---------------|
| Hero Background | Deep Space (`#0A0A0F` → `#0F0F1A` → `#1A1A2E`) |
| Section Gradients | `bg-gradient-to-b from-background via-muted/30 to-background` |
| Header Badges | `bg-primary/10 text-primary` + Icon |
| Formula Cards | Farbkodierte Borders (Violet=AMF, Blue=ANST, Emerald=SST, Amber=META) |
| Flow Section | Deep Space + Vertikale Pfeil-Verbindungen |
| Case Study | Split-Layout mit Metrics-Sidebar |

### Farbschema für 4 Formulas

| Formula | Farbe | Hex | Verwendung |
|---------|-------|-----|------------|
| AMF | Violet | `#8B5CF6` | Level, θ_index |
| ANST | Blue | `#3B82F6` | Scaling Velocity |
| SST | Emerald | `#10B981` | Bottleneck, C_min |
| META | Amber | `#F59E0B` | Time Prediction |

---

## 4. Content-Highlights

### Unterschiede zu AMF, ANST, SST

| Aspekt | AMF | ANST | SST | **Unified** |
|--------|-----|------|-----|-------------|
| **Fokus** | Messung | Mechanismus | Diagnose | **System-Verständnis** |
| **Kernkonzept** | 3 Levels | 4 Capabilities × θ | C_min | **4 Formeln = 1 System** |
| **Chart Typ** | Scatter | Scatter | Bar + Scatter | **Flow-Diagram** |
| **Case Studies** | 3 Named | 3 Named | 3 Anonymized | **1 Detailed (Midjourney)** |
| **Primary CTA** | Calculate θ | Book Call | Diagnose | **Download Framework** |

### HBR-Stil Sprache

| ❌ Vermeiden | ✅ Verwenden |
|--------------|--------------|
| "META = f(θ_index, C_min)" | "META predicts WHEN you'll reach €100M" |
| Technische Formeldetails | "4 questions, 4 formulas, 1 system" |
| Akademische Statistik | "We tested on 22 companies" |

---

## 5. Implementierungs-Reihenfolge

| Phase | Tasks | Dateien |
|-------|-------|---------|
| 1 | Types erweitern | `src/data/research/types.ts` |
| 2 | Content-Daten erstellen | `src/data/research/unified-framework.ts` |
| 3 | Why Four Formulas Section | `ResearchWhyFourFormulasSection.tsx` |
| 4 | Four Formulas Section | `ResearchFourFormulasSection.tsx` |
| 5 | Framework Flow Section | `ResearchFrameworkFlowSection.tsx` |
| 6 | Practical Application Section | `ResearchPracticalApplicationSection.tsx` |
| 7 | Unified Case Study Section | `ResearchUnifiedCaseStudySection.tsx` |
| 8 | Unified Landing Page | `UnifiedFrameworkLandingPage.tsx` |
| 9 | Page Component | `ExpertiseUnifiedFramework.tsx` |
| 10 | Routing | `App.tsx` |
| 11 | Section Index Export | `sections/index.ts` |

---

## 6. Zusammenfassung

| Aspekt | Details |
|--------|---------|
| **Neue Dateien** | ~9 (5 neue Sections, 1 Landing Page, 1 Page, Data, Types) |
| **Wiederverwendet** | 4 Sections (Hero, Implications, Download, FinalCTA) |
| **Tone** | HBR-Style: "How it all fits together" |
| **Sprache** | Bilingual DE/EN |
| **Key Visual** | Flow-Diagram (AMF → ANST → SST → META) |
| **CTAs** | Download Framework, Book Strategy Call, Calculate Now |

---

## 7. Cross-Linking nach Implementierung

Nach Abschluss aller 4 Research-Seiten sollten Cross-Links hinzugefügt werden:

| Von | Nach | Link-Text |
|-----|------|-----------|
| Unified → AMF | `/expertise/amf` | "Learn More about AI Maturity" |
| Unified → ANST | `/expertise/anst` | "Learn More about Scaling Velocity" |
| Unified → SST | `/expertise/sst` | "Learn More about Bottlenecks" |
| AMF → Unified | `/expertise/unified-framework` | "See the Complete Framework" |
| ANST → Unified | `/expertise/unified-framework` | "See the Complete Framework" |
| SST → Unified | `/expertise/unified-framework` | "See the Complete Framework" |

---

## 8. Nächste Schritte nach Implementierung

1. **Cross-Linking** zwischen allen 4 Research-Seiten
2. **ResearchHub Update** - Links zu allen 4 Seiten prüfen/aktualisieren
3. **θ_index Calculator Tool** (`/tools/calculate-theta`)
4. **Bottleneck Diagnose Tool** (`/tools/bottleneck-diagnosis`)
