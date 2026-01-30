
# Implementierungsplan: Scaling Stack Theory (SST) Research Page

## Übersicht

Die SST-Seite (`/expertise/sst`) erklärt **warum Bottlenecks wichtig sind** und wie die schwächste Capability (C_min) die Skalierungsgeschwindigkeit bestimmt. Sie fokussiert auf Diagnose statt Messung oder Wachstumstheorie.

---

## 1. Architektur-Analyse

### Wiederverwendbare Components von AMF/ANST

| Component | Für SST nutzbar? | Anpassung |
|-----------|------------------|-----------|
| `ResearchHeroSection` | ✅ Ja | Gleiche Datenstruktur |
| `ResearchImplicationsSection` | ✅ Ja | Gleiche 3-Cards-Struktur |
| `ResearchDownloadSection` | ✅ Ja | Gleiche Struktur |
| `ResearchFinalCTASection` | ✅ Ja | Gleiche Struktur |
| `ResearchCapabilitiesSection` | ⚠️ Teilweise | Braucht "Common bottleneck %" statt Exponents |
| `ResearchProblemSection` | ❌ Nein | SST braucht Bar Chart statt Line Chart |
| `ResearchEvidenceSection` | ⚠️ Teilweise | Andere X-Achse (C_min statt AI Maturity) |
| `ResearchFormulaSection` | ❌ Nein | Andere Formel (C_min statt Scaling Velocity) |
| `ResearchCaseStudiesSection` | ❌ Nein | SST braucht anonymisierte Before/After Case Studies |

### Neue Components für SST

| Neue Section | Beschreibung |
|--------------|--------------|
| `ResearchBottleneckDistributionSection` | Bar Chart: Bottleneck-Verteilung (36% Setup, etc.) |
| `ResearchBottleneckPrincipleSection` | C_min = min(C₁, C₂, C₃, C₄) + Multiplicative Explanation |
| `ResearchBottleneckCaseStudiesSection` | 3 anonymisierte Companies mit Before/After |

---

## 2. Zu erstellende/ändernde Dateien

### 2.1 Type Extensions (`src/data/research/types.ts`)

Neue Interfaces hinzufügen:

```typescript
// SST Problem Section (Bottleneck Distribution)
export interface SSTBottleneckDistributionData {
  headline: BilingualText;
  content: BilingualText;
  findings: Array<{
    number: number;
    title: BilingualText;
    content: BilingualText;
  }>;
  chartTitle: BilingualText;
  chartData: Array<{
    capability: 'C₁' | 'C₂' | 'C₃' | 'C₄';
    name: BilingualText;
    percentage: number;
    color: string;
  }>;
  callout: { title: BilingualText; content: BilingualText };
}

// SST Capabilities Section (with bottleneck percentage)
export interface SSTCapabilityItem {
  id: 'strategy' | 'setup' | 'execution' | 'operationalization';
  symbol: string; // 'C₁', 'C₂', etc.
  name: BilingualText;
  tagline: BilingualText;
  whatItIs: BilingualText[];
  whyItMatters: BilingualText;
  bottleneckPercentage: number; // 23%, 36%, etc.
  color: 'violet' | 'blue' | 'emerald' | 'amber';
}

export interface SSTCapabilitiesData {
  headline: BilingualText;
  subheadline: BilingualText;
  capabilities: SSTCapabilityItem[];
}

// SST Evidence Section (C_min vs Time)
export interface SSTEvidenceData {
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
    cMin: number; // 0-1 (weakest capability score)
    timeToRevenue: number; // months
    hasBottleneck: boolean;
  }>;
}

// SST Bottleneck Principle Section
export interface SSTBottleneckPrincipleData {
  headline: BilingualText;
  subheadline: BilingualText;
  formulaDisplay: string; // "C_min = min(C₁, C₂, C₃, C₄)"
  principle: BilingualText;
  whyMultiplicative: BilingualText;
  example: {
    companyA: { scores: string; product: string; label: BilingualText };
    companyB: { scores: string; product: string; label: BilingualText };
  };
  implication: BilingualText;
  callout: { title: BilingualText; content: BilingualText };
}

// SST Case Study (Anonymized with Before/After)
export interface SSTCaseStudy {
  id: string;
  name: BilingualText; // "Company A (Anonymized)"
  bottleneck: 'strategy' | 'setup' | 'execution' | 'operationalization';
  bottleneckName: BilingualText;
  before: {
    scores: string; // "C₁=0.4, C₂=0.7, C₃=0.8, C₄=0.7"
    cMin: string;
    timeToRevenue: string;
  };
  after: {
    fixedScore: string;
    timeToRevenue: string;
    improvement: string; // "40% faster"
  };
  problem: BilingualText;
  observations: BilingualText[];
  fix: BilingualText[];
  result: BilingualText;
  roi: string;
  color: 'violet' | 'blue' | 'emerald' | 'amber';
}

export interface SSTCaseStudiesData {
  headline: BilingualText;
  subheadline: BilingualText;
  cases: SSTCaseStudy[];
}

// Complete SST Page Data
export interface SSTPageData {
  hero: AMFHeroData;
  bottleneckDistribution: SSTBottleneckDistributionData;
  capabilities: SSTCapabilitiesData;
  evidence: SSTEvidenceData;
  bottleneckPrinciple: SSTBottleneckPrincipleData;
  caseStudies: SSTCaseStudiesData;
  implications: ImplicationsData;
  download: DownloadData;
  finalCta: FinalCTAData;
}
```

---

### 2.2 SST Data File (`src/data/research/sst.ts`)

Vollständiger bilingualer Content für alle 9 Sections:

| Section | Key Content |
|---------|-------------|
| **Hero** | "What's Blocking Your Growth?", Stats: 22 companies, 36% Setup bottleneck, r=0.72 |
| **Bottleneck Distribution** | Bar Chart (C₂: 36%, C₁: 23%, C₄: 23%, C₃: 18%), 3 Findings |
| **4 Capabilities** | Strategy/Setup/Execution/Ops mit "Common bottleneck: XX%" |
| **Evidence** | Scatter Chart (C_min vs Time), r=0.72, 50% slower |
| **Bottleneck Principle** | C_min = min(C₁, C₂, C₃, C₄), Multiplicative Example |
| **Case Studies** | Company A (Strategy), Company B (Setup), Company C (Execution) - Before/After |
| **Implications** | Diagnose Bottleneck, Fix Bottleneck, Measure Progress |
| **Download** | SST v4.5.1 Executive Summary |
| **Final CTA** | "What's Your Bottleneck?", "Diagnose Your Bottleneck →" |

---

### 2.3 Neue Section Components

#### A) `ResearchBottleneckDistributionSection.tsx`

**Layout:** 2-Column (Text links, Bar Chart rechts)

**Design-Elemente:**
- Header-Badge: `<AlertTriangle />` + "The Problem" (Amber)
- Horizontal Bar Chart: 4 Balken (C₂=36%, C₁=23%, C₄=23%, C₃=18%)
- 3 Finding Cards mit nummerierten Badges
- Callout Box: "The Bottleneck Principle"

**Unterschied zu ANST ResearchProblemSection:**
- Bar Chart statt Line Chart
- Zeigt Distribution statt lineares Wachstum

---

#### B) `ResearchSSTCapabilitiesSection.tsx`

**Layout:** Header + 4-Column Grid (responsive: 2×2 auf Tablet, 1 Column Mobile)

**Design-Elemente:**
- Header-Badge: `<Layers />` + "The 4 Capabilities"
- 4 Capability Cards mit:
  - Symbol (C₁, C₂, C₃, C₄) + Name
  - Tagline ("WHERE you play", "HOW you operate", etc.)
  - What it is (Bullet List)
  - Why it matters
  - **NEU:** "Common bottleneck: 23%" Badge (statt Exponent)
- Farbkodierung: Violet, Blue, Emerald, Amber

**Unterschied zu ANST ResearchCapabilitiesSection:**
- Zeigt `bottleneckPercentage` statt `exponent`
- Keine Pattern/Secret/Result Cards oben
- Fokus auf "Which capability is YOUR bottleneck?"

---

#### C) `ResearchSSTEvidenceSection.tsx`

**Layout:** 2-Column (Findings links, Scatter Chart rechts)

**Design-Elemente:**
- Header-Badge: `<BarChart3 />` + "Empirical Evidence"
- Scatter Chart: X = C_min (0-1), Y = Time to €100M (months)
- Color-coded: Rot (C_min < 0.6), Grün (C_min > 0.8)
- Trendlinie mit r=0.72
- 3 Findings + Caveat Box

**Unterschied zu ANST ResearchEvidenceSection:**
- X-Achse: C_min (0-1) statt AI Maturity (0-100)
- Einfachere Farbcodierung (hasBottleneck vs. Level 1/2/3)

---

#### D) `ResearchBottleneckPrincipleSection.tsx`

**Layout:** Centered, Dark Background (Deep Space)

**Design-Elemente:**
- Header-Badge: `<Calculator />` + "The Bottleneck Principle"
- Große Formel: `C_min = min(C₁, C₂, C₃, C₄)`
- Side-by-Side Comparison:
  - Company A: C₁=0.9, C₂=0.9, C₃=0.9, C₄=0.9 → Product = 0.66 ✅
  - Company B: C₁=0.9, C₂=0.5, C₃=0.9, C₄=0.9 → Product = 0.36 ❌
- "Why Multiplicative, Not Additive?" Callout

**Unterschied zu ANST ResearchFormulaSection:**
- Einfachere Formel (keine Exponenten)
- Fokus auf Multiplicative vs. Additive Erklärung
- Before/After Beispiel statt Component Grid

---

#### E) `ResearchBottleneckCaseStudiesSection.tsx`

**Layout:** 3-Column Grid (responsive: 1 Column Mobile)

**Design-Elemente:**
- Header-Badge: `<Building />` + "Bottlenecks in Action"
- 3 anonymisierte Case Study Cards:
  - Company A (Strategy Bottleneck) - Violet
  - Company B (Setup Bottleneck) - Blue
  - Company C (Execution Bottleneck) - Emerald
- Jede Card zeigt:
  - Before: Scores, C_min, Time to €100M
  - After: Fixed Score, Time to €100M, Improvement %
  - Problem, Fix, Result
  - ROI Badge

**Unterschied zu ANST/AMF ResearchCaseStudiesSection:**
- Anonymisierte Companies (nicht Midjourney/Cursor/Perplexity)
- Before/After Format statt "What makes them Level 3"
- Fokus auf Bottleneck-Fixing Journey

---

### 2.4 Master Component (`src/components/research/SSTLandingPage.tsx`)

```tsx
const SSTLandingPage: React.FC<SSTLandingPageProps> = ({ data }) => (
  <main>
    <ResearchHeroSection data={data.hero} />
    <ResearchBottleneckDistributionSection data={data.bottleneckDistribution} />
    <ResearchSSTCapabilitiesSection data={data.capabilities} />
    <ResearchSSTEvidenceSection data={data.evidence} />
    <ResearchBottleneckPrincipleSection data={data.bottleneckPrinciple} />
    <ResearchBottleneckCaseStudiesSection data={data.caseStudies} />
    <ResearchImplicationsSection data={data.implications} />
    <ResearchDownloadSection data={data.download} />
    <ResearchFinalCTASection data={data.finalCta} />
  </main>
);
```

---

### 2.5 Page Component (`src/pages/ExpertiseSST.tsx`)

```tsx
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SSTLandingPage from '@/components/research/SSTLandingPage';
import { sstPageData } from '@/data/research/sst';

const ExpertiseSST: React.FC = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />
    <SSTLandingPage data={sstPageData} />
    <Footer />
  </div>
);

export default ExpertiseSST;
```

---

### 2.6 Routing (`src/App.tsx`)

```tsx
const ExpertiseSST = lazy(() => import("./pages/ExpertiseSST"));

<Route path="/expertise/sst" element={<ExpertiseSST />} />
```

---

## 3. Design-Spezifikationen

### Visuelles Theming (konsistent mit AMF/ANST)

| Element | Spezifikation |
|---------|---------------|
| Hero Background | Deep Space (`#0A0A0F` → `#0F0F1A` → `#1A1A2E`) |
| Section Gradients | `bg-gradient-to-b from-background via-muted/30 to-background` |
| Header Badges | `bg-primary/10 text-primary` + Icon |
| Problem Section | Amber Töne (wie ANST) |
| Capabilities | Farbkodiert: Violet (Strategy), Blue (Setup), Emerald (Execution), Amber (Ops) |
| Bottleneck Principle | Deep Space + Monospace Formel |
| Case Studies | Before/After Cards mit farbigen Borders |

### Charts (Recharts)

| Chart | Typ | Daten |
|-------|-----|-------|
| Bottleneck Distribution | **Bar Chart (Horizontal)** | C₂=36%, C₁=23%, C₄=23%, C₃=18% |
| Evidence | Scatter Plot | 22 Companies (C_min vs. Time to €100M) |

---

## 4. Content-Highlights

### Unterschiede zu AMF und ANST

| Aspekt | AMF | ANST | SST |
|--------|-----|------|-----|
| **Fokus** | "How to measure" | "Why AI-native scales faster" | "What's blocking growth" |
| **Kernkonzept** | 3 Levels | 4 Capabilities × θ_index | C_min (weakest capability) |
| **Formel** | θ_index | S = E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ | C_min = min(C₁, C₂, C₃, C₄) |
| **Sample Size** | n=47 | n=22 | n=22 |
| **Chart Typ** | Scatter (Maturity vs. Time) | Scatter (Maturity vs. Time) | **Bar (Distribution) + Scatter (C_min vs. Time)** |
| **Case Studies** | Named (Midjourney, etc.) | Named | **Anonymized (Company A, B, C)** |
| **Primary CTA** | "Calculate θ_index" | "Book Strategy Call" | **"Diagnose Your Bottleneck"** |

### HBR-Stil Sprache

| ❌ Vermeiden | ✅ Verwenden |
|--------------|--------------|
| "C_min = min(C₁, C₂, C₃, C₄)" als Fließtext | Formel nur als Visual |
| "O(n²)" | "Coordination costs explode" |
| "Determiniert" | "Correlates with", "We observed" |

---

## 5. Implementierungs-Reihenfolge

| Phase | Tasks | Dateien |
|-------|-------|---------|
| 1 | Types erweitern | `src/data/research/types.ts` |
| 2 | Content-Daten erstellen | `src/data/research/sst.ts` |
| 3 | Bottleneck Distribution Section | `ResearchBottleneckDistributionSection.tsx` |
| 4 | SST Capabilities Section | `ResearchSSTCapabilitiesSection.tsx` |
| 5 | SST Evidence Section | `ResearchSSTEvidenceSection.tsx` |
| 6 | Bottleneck Principle Section | `ResearchBottleneckPrincipleSection.tsx` |
| 7 | Bottleneck Case Studies Section | `ResearchBottleneckCaseStudiesSection.tsx` |
| 8 | SST Landing Page | `SSTLandingPage.tsx` |
| 9 | Page Component | `ExpertiseSST.tsx` |
| 10 | Routing | `App.tsx` |
| 11 | Section Index Export | `sections/index.ts` |

---

## 6. Zusammenfassung

| Aspekt | Details |
|--------|---------|
| **Neue Dateien** | ~9 (5 neue Sections, 1 Landing Page, 1 Page, Data, Types) |
| **Wiederverwendet** | 4 Sections (Hero, Implications, Download, FinalCTA) |
| **Tone** | HBR-Style: "Why bottlenecks matter" |
| **Sprache** | Bilingual DE/EN |
| **Key Visual** | Bar Chart (Distribution) + C_min Formel + Before/After Case Studies |
| **CTAs** | Diagnose Bottleneck, View Playbooks, Book Strategy Call |

---

## 7. Verknüpfung mit ResearchHub

Update in `src/components/ResearchHub.tsx`:
- Card "Scaling Stack Theory" sollte auf `/expertise/sst` verlinken
- Prüfen ob Link bereits existiert

---

## 8. Nächste Schritte nach Implementierung

1. **Bottleneck Diagnose Tool** (`/tools/bottleneck-diagnosis`)
2. **Unified Framework Page** (`/expertise/architecture`)
3. **Cross-Linking** zwischen AMF ↔ ANST ↔ SST
