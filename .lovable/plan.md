
# Implementierungsplan: AI-Native Scaling Theory (ANST) Research Page

## Übersicht

Die ANST-Seite (`/expertise/anst`) erklärt **warum** AI-native Companies schneller skalieren. Sie unterscheidet sich von AMF (das **wie man misst** erklärt) durch den Fokus auf:
- Das **Problem** traditioneller linearer Skalierung
- Die **Lösung** mit 4 Capabilities × AI Multiplier
- Die **Formel** als illustratives Konzept

---

## 1. Architektur-Analyse

### Bestehende wiederverwendbare Components

| AMF Component | Für ANST nutzbar? | Anpassung |
|---------------|-------------------|-----------|
| `ResearchHeroSection` | ✅ Ja | Gleiche Datenstruktur |
| `ResearchCaseStudiesSection` | ✅ Ja | Gleiche 3 Companies |
| `ResearchImplicationsSection` | ✅ Ja | 3 Cards-Struktur |
| `ResearchDownloadSection` | ✅ Ja | Gleiche Struktur |
| `ResearchFinalCTASection` | ✅ Ja | Gleiche Struktur |
| `ResearchWhyItMattersSection` | ⚠️ Teilweise | Anderer Fokus |
| `ResearchThreeLevelsSection` | ❌ Nein | ANST hat keine 3 Levels |
| `ResearchMeasurementSection` | ❌ Nein | ANST misst nicht |
| `ResearchFindingsSection` | ⚠️ Teilweise | Kann adaptiert werden |

### Neue Components für ANST

| Neue Section | Beschreibung |
|--------------|--------------|
| `ResearchProblemSection` | "Traditional Scaling is Linear" + Chart |
| `ResearchCapabilitiesSection` | 4 Capability Cards (C₁-C₄) |
| `ResearchFormulaSection` | Illustrative Formel-Visualisierung |
| `ResearchEvidenceSection` | n=22 Companies, Chart, Findings |

---

## 2. Zu erstellende Dateien

### 2.1 Type Extensions (`src/data/research/types.ts`)

Neue Interfaces hinzufügen:

```typescript
// Problem Section (Traditional Scaling)
export interface ProblemSectionData {
  headline: BilingualText;
  content: BilingualText;
  pattern: BilingualText[];
  problem: BilingualText[];
  result: BilingualText;
  bottleneck: BilingualText;
  chartTitle: BilingualText;
  chartAnnotation: BilingualText;
  callout: { title: BilingualText; content: BilingualText };
}

// Solution Section (4 Capabilities)
export interface CapabilityItem {
  id: 'strategy' | 'setup' | 'execution' | 'operationalization';
  name: BilingualText;
  tagline: BilingualText;
  whatItIs: BilingualText[];
  whyItMatters: BilingualText;
  exponent?: number; // 1.5 for Strategy & Execution
  color: 'violet' | 'blue' | 'emerald' | 'amber';
}

export interface SolutionSectionData {
  headline: BilingualText;
  content: BilingualText;
  pattern: BilingualText[];
  secret: BilingualText;
  result: BilingualText;
  formula: BilingualText;
  capabilities: CapabilityItem[];
}

// Formula Section (Illustrative)
export interface FormulaSectionData {
  headline: BilingualText;
  subheadline: BilingualText;
  formulaDisplay: string; // "S = E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ_index"
  components: Array<{
    symbol: string;
    name: BilingualText;
    description: BilingualText;
  }>;
  explanation: BilingualText;
  exponentInsight: {
    title: BilingualText;
    content: BilingualText;
    example: BilingualText;
  };
}

// Evidence Section (n=22 Companies)
export interface EvidenceSectionData {
  headline: BilingualText;
  subheadline: BilingualText;
  intro: BilingualText;
  findings: Array<{
    number: number;
    title: BilingualText;
    content: BilingualText;
  }>;
  caveat: { title: BilingualText; content: BilingualText };
  chartTitle: BilingualText;
  chartAnnotation: BilingualText;
  chartData: Array<{
    maturity: number;
    timeToRevenue: number;
    level: 1 | 2 | 3;
  }>;
}

// Complete ANST Page Data
export interface ANSTPageData {
  hero: AMFHeroData; // Reuse existing type
  problem: ProblemSectionData;
  solution: SolutionSectionData;
  evidence: EvidenceSectionData;
  formula: FormulaSectionData;
  caseStudies: CaseStudiesData; // Reuse existing type
  implications: ImplicationsData; // Reuse existing type
  download: DownloadData; // Reuse existing type
  finalCta: FinalCTAData; // Reuse existing type
}
```

---

### 2.2 ANST Data File (`src/data/research/anst.ts`)

Vollständiger bilingualer Content für alle 9 Sections:

| Section | Key Content |
|---------|-------------|
| **Hero** | "Why AI-Native Companies Scale 8.2x Faster", Stats: 22 companies, 8-18 months |
| **Problem** | Linear scaling, O(n²) coordination costs, 60-84 months |
| **Solution** | 4 Capabilities (C₁-C₄) + AI Multiplier Cards |
| **Evidence** | 4 Findings, r=0.89 correlation, Chart (22 companies) |
| **Formula** | S = E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ_index |
| **Case Studies** | Midjourney, Cursor, Perplexity (mit θ_index Werten) |
| **Implications** | Assess Capabilities, Improve AI Maturity, Build Plan |
| **Download** | ANST v4.5.3 Executive Summary |
| **Final CTA** | "Book Strategy Call", "Calculate Your Score" |

---

### 2.3 Neue Section Components

#### A) `ResearchProblemSection.tsx`

**Layout:** 2-Column (Text links, Chart rechts)

**Design-Elemente:**
- Header-Badge: `<AlertTriangle />` + "The Problem"
- Deep Space gradient background
- Line Chart: Lineare Skalierung (Headcount → Revenue)
- Callout Box: "The Coordination Cost Problem"
- Farben: Rot/Orange für Problem-Highlighting

**Content:**
- Pattern: "Add 10 people → Grow 10%"
- Problem: "Coordination costs grow O(n²)"
- Result: "60-84 months to €100M"
- Bottleneck: "Human coordination"

#### B) `ResearchCapabilitiesSection.tsx`

**Layout:** Text oben + 2×2 Grid (4 Capability Cards)

**Design-Elemente:**
- Header-Badge: `<Zap />` + "The Solution"
- 4 Capability Cards mit Farbkodierung:
  - C₁ Strategy: Violet + Exponent Badge "^1.5"
  - C₂ Setup: Blue
  - C₃ Execution: Emerald + Exponent Badge "^1.5"
  - C₄ Operationalization: Amber
- Center Visual: "4 Capabilities × θ_index = Superlinear"
- Hover-Effekte wie bei Playbook-Framework Cards

**Card Structure:**
```
┌─────────────────────────────────┐
│ C₁: Strategy       [^1.5]      │
│                                 │
│ What it is:                     │
│ • Market positioning            │
│ • Product-market fit            │
│ • Go-to-market strategy         │
│                                 │
│ Why it matters:                 │
│ AI-first strategies scale       │
└─────────────────────────────────┘
```

#### C) `ResearchFormulaSection.tsx`

**Layout:** Centered, Dark Background (Deep Space)

**Design-Elemente:**
- Header-Badge: `<Calculator />` + "The Formula"
- Große Formel-Visualisierung (monospace font, gradient highlights)
- Component-Grid: E, C₁-C₄, θ_index erklärt
- Callout Box: "Why Exponents Matter" mit Beispiel
- Subtle Animation: Formelelemente highlighten bei Scroll

**Formel-Display:**
```
S = E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ_index
```

Mit Hover-Tooltips für jede Komponente.

#### D) `ResearchEvidenceSection.tsx`

**Layout:** 2-Column (Text links, Chart rechts)

**Design-Elemente:**
- Header-Badge: `<BarChart />` + "Empirical Evidence"
- Scatter Chart: 22 Companies (AI Maturity vs. Time to €100M)
- 4 Finding Cards
- Stats Grid: "22 companies | 8.2x faster | r=0.89 | 10x fewer people"
- Caveat Box: "Correlation ≠ Causation"

**Kann Teile von ResearchFindingsSection wiederverwenden.**

---

### 2.4 Master Component Update

`ResearchLandingPage.tsx` erweitern oder `ANSTLandingPage.tsx` erstellen:

```tsx
// Option A: Generisches Component mit Typ-Check
interface ResearchLandingPageProps {
  data: AMFPageData | ANSTPageData;
  type: 'amf' | 'anst';
}

// Option B: Separates ANST Landing Page (Empfohlen für Klarheit)
const ANSTLandingPage: React.FC<ANSTLandingPageProps> = ({ data }) => (
  <main>
    <ResearchHeroSection data={data.hero} />
    <ResearchProblemSection data={data.problem} />
    <ResearchCapabilitiesSection data={data.solution} />
    <ResearchEvidenceSection data={data.evidence} />
    <ResearchFormulaSection data={data.formula} />
    <ResearchCaseStudiesSection data={data.caseStudies} />
    <ResearchImplicationsSection data={data.implications} />
    <ResearchDownloadSection data={data.download} />
    <ResearchFinalCTASection data={data.finalCta} />
  </main>
);
```

**Empfehlung:** Option B - Separates Component für maximale Klarheit und Flexibilität.

---

### 2.5 Page Component (`src/pages/ExpertiseANST.tsx`)

```tsx
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ANSTLandingPage from '@/components/research/ANSTLandingPage';
import { anstPageData } from '@/data/research/anst';

const ExpertiseANST: React.FC = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />
    <ANSTLandingPage data={anstPageData} />
    <Footer />
  </div>
);

export default ExpertiseANST;
```

---

### 2.6 Routing (`src/App.tsx`)

```tsx
// Neue Lazy-Load Definition
const ExpertiseANST = lazy(() => import("./pages/ExpertiseANST"));

// Neue Route
<Route path="/expertise/anst" element={<ExpertiseANST />} />
```

---

## 3. Design-Spezifikationen

### Visuelles Theming (konsistent mit AMF)

| Element | Spezifikation |
|---------|---------------|
| Hero Background | Deep Space (`#0A0A0F` → `#0F0F1A` → `#1A1A2E`) |
| Section Gradients | `bg-gradient-to-b from-background via-muted/30 to-background` |
| Header Badges | `bg-primary/10 text-primary` + Icon |
| Problem Section | Warme Töne (Amber/Orange) für "Problem" |
| Solution Section | Kühle Töne (Violet/Blue/Emerald) für "Solution" |
| Formula Section | Deep Space + Monospace + Gradient Highlights |
| Capability Cards | Farbkodierte Borders wie Playbook Framework Cards |

### Charts (Recharts)

| Chart | Typ | Daten |
|-------|-----|-------|
| Problem Section | Line Chart | Lineare Skalierung (Headcount vs. Revenue) |
| Evidence Section | Scatter Plot | 22 Companies (AI Maturity vs. Time to €100M) |

---

## 4. Content-Highlights

### Unterschiede zu AMF

| Aspekt | AMF | ANST |
|--------|-----|------|
| Fokus | "How to measure" | "Why it works" |
| Kernkonzept | 3 Levels | 4 Capabilities |
| Formel | θ_index allein | S = E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ_index |
| Sample Size | n=47 | n=22 |
| Primary CTA | "Calculate θ_index" | "Book Strategy Call" |
| Problem Framing | Keine explizite Problem-Section | Dedicated Problem Section |

### HBR-Stil Sprache

| ❌ Vermeiden | ✅ Verwenden |
|--------------|--------------|
| "S = E × (C₁^1.5 × ...)" als Text | Formel nur als Visual mit Erklärung |
| "O(n²) complexity" | "Coordination costs explode" |
| "Determiniert" | "Correlates with", "We observed" |

---

## 5. Implementierungs-Reihenfolge

| Phase | Tasks | Dateien |
|-------|-------|---------|
| 1 | Types erweitern | `src/data/research/types.ts` |
| 2 | Content-Daten erstellen | `src/data/research/anst.ts` |
| 3 | Problem Section | `ResearchProblemSection.tsx` |
| 4 | Capabilities Section | `ResearchCapabilitiesSection.tsx` |
| 5 | Formula Section | `ResearchFormulaSection.tsx` |
| 6 | Evidence Section | `ResearchEvidenceSection.tsx` |
| 7 | ANST Landing Page | `ANSTLandingPage.tsx` |
| 8 | Page Component | `ExpertiseANST.tsx` |
| 9 | Routing | `App.tsx` |
| 10 | Section Index Export | `sections/index.ts` |

---

## 6. Zusammenfassung

| Aspekt | Details |
|--------|---------|
| **Neue Dateien** | ~8 (4 Sections, 1 Landing Page, 1 Page, Data, Types) |
| **Wiederverwendet** | 5 Sections (Hero, CaseStudies, Implications, Download, FinalCTA) |
| **Tone** | HBR-Style: "Why AI-native companies scale faster" |
| **Sprache** | Bilingual DE/EN |
| **Key Visual** | Formel + 4 Capability Cards |
| **CTAs** | Book Strategy Call, Calculate Score, Download Research |

---

## 7. Verknüpfung mit ResearchHub

Update in `src/components/ResearchHub.tsx`:
- Card "AI-Native Scaling Theory" verlinkt bereits auf `/expertise/anst`
- Keine Änderung nötig - Route muss nur implementiert werden

---

## 8. Nächste Schritte nach Implementierung

1. **Bottleneck Framework Page** (`/expertise/bottleneck`)
2. **Unified Framework Page** (`/expertise/architecture`)
3. **θ_index Calculator Tool** (`/tools/calculate-theta`)
4. **Bottleneck Diagnose Tool** (`/tools/bottleneck-diagnosis`)
