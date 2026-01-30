

# Plan: AI-Native Scaling Playbook v2.0 Überarbeitung

## Übersicht der Änderungen

Das Briefing erfordert eine **komplette Überarbeitung** des AI-Native Scaling Playbooks mit folgenden kritischen Änderungen:

### Kritische Tone-Shift Änderungen

| Alt (zu entfernen) | Neu (ersetzen mit) |
|---|---|
| C₁, C₂, C₃, C₄ | Strategy, Setup, Execution, Operationalization |
| θ_index, θ-Score | AI Maturity Level (Level 1-3) |
| Formeln wie "S = E × (C₁^1.5 × ...)" | Praktische Erklärungen |
| HBR/wissenschaftlicher Ton | Praktisch/CEO-friendly |
| 5 Domain Playbooks | 4 Domain Playbooks (Strategic Capabilities entfernt) |

---

## Teil 1: Kachel-Änderungen (Overview Page)

### Datei: `src/data/playbooks.ts`

**Zeilen 23-60** - AI-Native Scaling Playbook Entry:

| Feld | Aktuell | Neu |
|------|---------|-----|
| `description.en` | "...4 Capabilities × 8 Dimensions × θ_index..." | Briefing-Text: "Your complete guide to AI-native scaling. Learn how AI-native companies scale 10-30x faster..." |
| `outcomes.en[3]` | "5 domain playbooks + 12 sub-playbooks" | "4 domain playbooks, 12 sub-playbooks" |
| `caseStudies` | "θ_index 0.88" | Ohne θ_index Referenzen |
| `impact` | 5 Areas (inkl. strategic-capabilities) | 4 Areas (ohne strategic-capabilities) |

**Neuer Teaser (aus Briefing):**
```
Your complete guide to AI-native scaling.

Learn how AI-native companies scale 10-30x faster, reach €100M ARR 
in 8-18 months (vs. 8-12 years traditional), and achieve 2-5x ARR/Employee.

Includes practical guides for Strategy, Setup, Execution, and 
Operationalization—plus 4 domain playbooks, 12 sub-playbooks, and 
real-world case studies from 22 companies.
```

---

## Teil 2: Landing Page Struktur Änderungen

### Briefing-Struktur vs. Aktuell

| # | Briefing Section | Aktuelle Section | Änderung |
|---|---|---|---|
| 1 | Hero | Hero | Update Content |
| 2 | The Problem | Summary + Problem | Merge/Update |
| 3 | The Solution (4 Capabilities) | Framework | Update ohne C₁-C₄ |
| 4 | The 8 Dimensions | **NEU** | Neue Section hinzufügen |
| 5 | AI Maturity Levels | **NEU** | Neue Section hinzufügen |
| 6 | Domain Playbooks (4) | SubPlaybooks | Update auf 4 |
| 7 | Implementation Guide | Roadmap | Update Timeline |
| 8 | Case Studies | Case Studies | Anonymisieren, θ entfernen |
| 9 | Who This Is For | Personas | Update |
| 10 | Next Steps | Final CTA | Update |

---

## Teil 3: Datei-Änderungen

### 3.1 `src/data/playbooks.ts` (Kachel-Daten)

**Änderungen:**
- Zeilen 35-36: Neue Description ohne C×D×AI Formel
- Zeilen 43-50: Outcomes auf 4 Playbooks ändern
- Zeile 52: Case Studies ohne θ_index
- Zeile 55: Impact auf 4 Areas reduzieren

### 3.2 `src/data/playbooks/types.ts` (Type Extensions)

**Neue Interfaces hinzufügen:**
```typescript
// 8 Dimensions Section
export interface DimensionItem {
  id: string;
  icon: string;
  title: BilingualText;
  description: BilingualText;
  aiPowered: BilingualText;
  aiNative: BilingualText;
  impact: BilingualText;
}

export interface PlaybookDimensionsSection {
  title: BilingualText;
  subtitle: BilingualText;
  items: DimensionItem[];
}

// AI Maturity Levels Section
export interface MaturityLevel {
  level: 1 | 2 | 3;
  name: BilingualText;
  definition: BilingualText;
  examples: BilingualText;
  impact: BilingualText;
  scaling: BilingualText;
  timeline: BilingualText;
}

export interface PlaybookMaturitySection {
  title: BilingualText;
  subtitle: BilingualText;
  levels: MaturityLevel[];
}
```

**PlaybookPageData erweitern:**
```typescript
export interface PlaybookPageData {
  // ... existing fields
  dimensions?: PlaybookDimensionsSection;  // NEU
  maturityLevels?: PlaybookMaturitySection; // NEU
}
```

### 3.3 `src/data/playbooks/content/ai-native-scaling.ts` (Komplette Überarbeitung)

**HERO Section (Zeilen 8-30):**
```typescript
hero: {
  badge: { en: "AI-Native Scaling · Master Playbook", de: "AI-Native Scaling · Master Playbook" },
  title: "AI-Native Scaling Playbook",
  subtitle: { 
    en: "Your complete guide to AI-native scaling", 
    de: "Dein kompletter Guide für AI-native Skalierung" 
  },
  description: {
    en: "Learn how AI-native companies scale 10-30x faster, reach €100M ARR in 8-18 months (vs. 8-12 years traditional), and achieve 2-5x ARR/Employee.\n\nThis playbook covers the complete framework: Strategy, Setup, Execution, and Operationalization—plus 4 domain playbooks, 12 sub-playbooks, and real-world case studies from 22 companies.",
    de: "..."
  },
  trustBadges: [
    { en: "10-30x Faster Scaling", de: "10-30x schnellere Skalierung" },
    { en: "8-18 Months to €100M ARR", de: "8-18 Monate bis €100M ARR" },
    { en: "2-5x ARR/Employee", de: "2-5x ARR/Mitarbeiter" }
  ]
}
```

**PROBLEM Section (Zeilen 54-72):**
Entfernen aller θ_index Referenzen, praktischere Pain Points:
- "Linear Scaling: Revenue ≈ People"
- "Slow Growth: 8-12 years to €100M ARR"
- "High CAC, Low LTV"

**FRAMEWORK Section (Zeilen 73-181):**
Umbenennung von "C₁: Strategy Capability" zu "Strategy: Where to play, How to win":

| Alt | Neu |
|-----|-----|
| "C₁: Strategy Capability" | "1. STRATEGY" |
| "C₂: Setup Capability" | "2. SETUP" |
| "C₃: Execution Capability" | "3. EXECUTION" |
| "C₄: Operationalization Capability" | "4. OPERATIONALIZATION" |
| "θ_index: AI Multiplier" | **ENTFERNEN** |

**NEUE DIMENSIONS Section:**
```typescript
dimensions: {
  title: { en: "The 8 Dimensions of AI-Native Scaling", de: "Die 8 Dimensionen des AI-Native Scaling" },
  subtitle: { en: "Apply the 4 core capabilities across 8 business dimensions", de: "..." },
  items: [
    { id: "gtm", title: { en: "GTM/Revenue", de: "GTM/Revenue" }, impact: "CAC -30-50%, LTV/CAC +100-300%" },
    { id: "product", title: { en: "Product", de: "Product" }, impact: "Development Speed +200-500%" },
    { id: "operations", title: { en: "Operations", de: "Operations" }, impact: "Efficiency +200-400%" },
    { id: "finance", title: { en: "Finance", de: "Finance" }, impact: "Forecast Accuracy +30-50%" },
    { id: "talent", title: { en: "Talent", de: "Talent" }, impact: "Time-to-Hire -50-70%" },
    { id: "cs", title: { en: "Customer Success", de: "Customer Success" }, impact: "NRR +15-30pp" },
    { id: "data-tech", title: { en: "Data/Tech", de: "Data/Tech" }, impact: "Data Quality +40-60%" },
    { id: "governance", title: { en: "Governance", de: "Governance" }, impact: "Decision Speed +50-100%" }
  ]
}
```

**NEUE MATURITY Section:**
```typescript
maturityLevels: {
  title: { en: "The 3 AI Maturity Levels", de: "Die 3 AI Maturity Levels" },
  subtitle: { en: "From AI-Powered (Level 1) to AI-Native (Level 3)", de: "..." },
  levels: [
    { 
      level: 1, 
      name: { en: "AI-Powered", de: "AI-Powered" },
      definition: { en: "AI as tool (bolt-on)", de: "..." },
      timeline: { en: "8-12 years to €100M ARR", de: "..." }
    },
    { 
      level: 2, 
      name: { en: "AI-Enabled", de: "AI-Enabled" },
      definition: { en: "AI as feature (integrated)", de: "..." },
      timeline: { en: "3-5 years to €100M ARR", de: "..." }
    },
    { 
      level: 3, 
      name: { en: "AI-Native", de: "AI-Native" },
      definition: { en: "AI as core architecture", de: "..." },
      timeline: { en: "8-18 months to €100M ARR", de: "..." }
    }
  ]
}
```

**SUB-PLAYBOOKS Section (Zeilen 406-468):**
Reduzieren von 5 auf 4 Domain Playbooks:
1. AI-Native Growth Engines
2. AI-Native Operating Systems
3. AI-Native Board & Governance
4. AI-Native Portfolio Transformation

**ENTFERNEN:** Strategic Capabilities Playbook (Item 5)

**CASE STUDIES (Zeilen 260-321):**
Anonymisieren und θ_index Referenzen entfernen:
```typescript
cases: [
  {
    company: { en: "Series A SaaS", de: "Series A SaaS" },
    problem: { en: "CAC too high (€12k), LTV/CAC 2.5x", de: "..." },
    solution: { en: "AI-powered GTM (AI SDRs, AI lead scoring)", de: "..." },
    results: [
      { metric: { en: "CAC", de: "CAC" }, before: "€12k", after: "€4.8k", change: "-60%" },
      { metric: { en: "LTV/CAC", de: "LTV/CAC" }, before: "2.5x", after: "7x", change: "+180%" }
    ],
    timeline: { en: "90 days", de: "90 Tage" }
  },
  // ... 2 weitere anonymisierte Cases
]
```

---

### 3.4 Neue UI-Komponenten

**`src/components/playbooks/sections/PlaybookDimensionsSection.tsx`** (NEU)

2×4 Grid Layout für die 8 Dimensionen:
```typescript
// 8 Kacheln mit Icon, Title, AI-Powered, AI-Native, Impact
// Responsive: 2×4 Desktop, 1×8 Mobile
// Hover-Glow Effekt
```

**`src/components/playbooks/sections/PlaybookMaturitySection.tsx`** (NEU)

Comparison Table für 3 AI Maturity Levels:
```typescript
// 3 Columns: Level 1, Level 2, Level 3
// Rows: Definition, Examples, Impact, Scaling, Timeline
// Visual Progress Bar oder Pyramid
```

**`src/components/playbooks/sections/index.ts`**
```typescript
export { default as PlaybookDimensionsSection } from './PlaybookDimensionsSection';
export { default as PlaybookMaturitySection } from './PlaybookMaturitySection';
```

---

### 3.5 `src/components/playbooks/PlaybookLandingPage.tsx`

**Neue Section-Reihenfolge:**
```typescript
<PlaybookHeroSection data={data.hero} />
<PlaybookProblemSection data={data.problem} />
<PlaybookFrameworkSection data={data.framework} />

{/* NEU: Nur für Master Playbook (Ebene 1) */}
{data.dimensions && data.meta.ebene === 1 && (
  <PlaybookDimensionsSection data={data.dimensions} />
)}

{/* NEU: Nur für Master Playbook (Ebene 1) */}
{data.maturityLevels && data.meta.ebene === 1 && (
  <PlaybookMaturitySection data={data.maturityLevels} />
)}

{/* Domain Playbooks statt Sub-Playbooks für Ebene 1 */}
{data.subPlaybooks && (data.meta.ebene === 1 || data.meta.ebene === 2) && (
  <PlaybookSubPlaybooksSection data={data.subPlaybooks} />
)}

<PlaybookRoadmapSection data={data.roadmap} />
<PlaybookCaseStudiesSection data={data.caseStudies} />
<PlaybookPersonasSection data={data.whoThisIsFor} />
<PlaybookSolutionsSection data={data.solutionsConnection} />
<PlaybookFinalCTASection data={data.finalCta} />
```

---

## Teil 4: Zusammenfassung der Dateien

| Datei | Aktion |
|-------|--------|
| `src/data/playbooks.ts` | Zeilen 27-60 aktualisieren |
| `src/data/playbooks/types.ts` | Neue Interfaces hinzufügen |
| `src/data/playbooks/content/ai-native-scaling.ts` | Komplette Überarbeitung |
| `src/components/playbooks/sections/PlaybookDimensionsSection.tsx` | NEU erstellen |
| `src/components/playbooks/sections/PlaybookMaturitySection.tsx` | NEU erstellen |
| `src/components/playbooks/sections/index.ts` | Neue Exports hinzufügen |
| `src/components/playbooks/PlaybookLandingPage.tsx` | Section-Reihenfolge anpassen |

---

## Erwartetes Ergebnis

Nach der Implementierung:

1. **Kachel (Playbooks Overview):** CEO-freundlicher Teaser ohne technische Formeln
2. **Landing Page:** 10 Sections gemäß Briefing-Struktur
3. **Tone:** Praktisch/Helpful statt wissenschaftlich/HBR
4. **Domain Playbooks:** 4 statt 5 (ohne Strategic Capabilities)
5. **Keine C₁-C₄, θ_index Referenzen** in der gesamten Page

