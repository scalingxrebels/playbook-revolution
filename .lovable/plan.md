

# Plan: Expertise Pages Formula Update (M × E × C₁-C₄ × θ)

## Ziel
Integration der vollständigen Formel mit Market Factor (M) gemäß Briefing v1.2.

## Übersicht der Änderungen

| Datei | Änderung | Aufwand |
|-------|----------|---------|
| `src/data/research/anst.ts` | Formula + M Component + Why Focus Section | 2h |
| `src/components/research/sections/ResearchFormulaSection.tsx` | M in Formel-Visual integrieren | 30min |
| `src/data/research/unified-framework.ts` | ANST Card aktualisieren | 1h |
| `src/components/ResearchHub.tsx` | Minor Text Update (optional) | 15min |

## Detaillierte Änderungen

### 1. ANST Data File (`src/data/research/anst.ts`)

#### 1.1 Formula Section Update (Zeile 284-341)

**Aktuelle Headline:**
```text
"The Formula (Illustrative)"
```

**Neue Headline:**
```text
"The Complete Scaling Formula"
```

**Aktuelle formulaDisplay (Zeile 293):**
```text
S = E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ_index
```

**Neue formulaDisplay:**
```text
S = M × E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ
```

#### 1.2 Neuer Component: M (Market Factor)

Füge als **ersten** Eintrag in `formula.components` hinzu:

```typescript
{
  symbol: 'M',
  name: { en: 'Market Factor', de: 'Marktfaktor' },
  description: { 
    en: 'TAM × Growth Rate × Competition. Same company scales differently in different markets.', 
    de: 'TAM × Wachstumsrate × Wettbewerb. Dasselbe Unternehmen skaliert unterschiedlich in verschiedenen Märkten.' 
  }
}
```

#### 1.3 Neuer Abschnitt: "Why We Focus on C₁-C₄"

Füge neues Feld `whyFocusOnCapabilities` zur FormulaSectionData hinzu:

```typescript
whyFocusOnCapabilities: {
  headline: { en: 'Why We Focus on Capabilities (C₁-C₄)', de: 'Warum wir uns auf Capabilities (C₁-C₄) fokussieren' },
  reasons: [
    {
      title: { en: 'Market (M) is constant within your segment', de: 'Markt (M) ist konstant in deinem Segment' },
      content: { en: 'Changing M requires 12-24 months. C₁-C₄ can be improved in 8-12 weeks.', de: 'M zu ändern erfordert 12-24 Monate. C₁-C₄ können in 8-12 Wochen verbessert werden.' }
    },
    {
      title: { en: 'Enablers (E) are an outcome of C₁-C₄', de: 'Enablers (E) sind ein Ergebnis von C₁-C₄' },
      content: { en: 'Better capabilities → better metrics → more capital and talent.', de: 'Bessere Capabilities → bessere Metriken → mehr Kapital und Talent.' }
    },
    {
      title: { en: 'Capabilities (C₁-C₄) are directly controllable', de: 'Capabilities (C₁-C₄) sind direkt kontrollierbar' },
      content: { en: 'Highest ROI (2-5x) in 8-12 weeks because of the bottleneck principle.', de: 'Höchster ROI (2-5x) in 8-12 Wochen durch das Engpass-Prinzip.' }
    }
  ],
  causalChain: {
    en: 'C₁-C₄ (Capabilities) → E (Enablers) → S (Scaling Success)',
    de: 'C₁-C₄ (Capabilities) → E (Enablers) → S (Skalierungserfolg)'
  }
}
```

### 2. Formula Section Component (`ResearchFormulaSection.tsx`)

#### 2.1 Farben-Mapping erweitern (Zeile 12-19)

```typescript
const componentColors: Record<string, string> = {
  'M': 'text-blue-400',        // NEU
  'E': 'text-green-400',       // Aktualisiert (war muted)
  'C₁': 'text-violet-500',
  'C₂': 'text-blue-500',
  'C₃': 'text-emerald-500',
  'C₄': 'text-amber-500',
  'θ_index': 'text-primary',
  'θ': 'text-primary',         // NEU (Kurzform)
};
```

#### 2.2 Formel-Visual aktualisieren (Zeile 56-74)

Aktuelles Visual:
```jsx
S = E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ_index
```

Neues Visual:
```jsx
S = M × E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ
```

Konkret: Nach `<span className="text-muted-foreground">S</span>` und dem `=` Zeichen:

```jsx
<span className="text-blue-400">M</span>
<span className="text-white/50 mx-2">×</span>
<span className="text-green-400">E</span>
<span className="text-white/50 mx-2">×</span>
// ... Rest der Formel
```

### 3. Unified Framework Data (`src/data/research/unified-framework.ts`)

#### 3.1 ANST Formula Card aktualisieren (Zeile 128-147)

**Aktuell:**
```typescript
{
  id: 'anst',
  name: { en: 'ANST', de: 'ANST' },
  input: { en: 'E × C × θ', de: 'E × C × θ' },
  inputDetails: [
    { en: 'Enablers (Capital, Talent, Culture)', de: 'Enablers (Kapital, Talent, Kultur)' },
    { en: 'Capabilities (C₁, C₂, C₃, C₄)', de: 'Capabilities (C₁, C₂, C₃, C₄)' },
    { en: 'AI Maturity (θ_index)', de: 'AI-Reife (θ_index)' }
  ],
  // ...
}
```

**Neu:**
```typescript
{
  id: 'anst',
  name: { en: 'ANST', de: 'ANST' },
  fullName: { en: 'AI-Native Scaling Theory', de: 'AI-Native Scaling Theory' },
  question: { en: 'WHY scale faster?', de: 'WARUM schneller skalieren?' },
  input: { en: 'M × E × C × θ', de: 'M × E × C × θ' },
  inputDetails: [
    { en: 'Market Factor (TAM, growth, competition)', de: 'Marktfaktor (TAM, Wachstum, Wettbewerb)' },
    { en: 'Enablers (Capital, Talent, Culture)', de: 'Enablers (Kapital, Talent, Kultur)' },
    { en: 'Capabilities (C₁, C₂, C₃, C₄)', de: 'Capabilities (C₁, C₂, C₃, C₄)' },
    { en: 'AI Maturity (θ)', de: 'AI-Reife (θ)' }
  ],
  output: { en: 'Scaling Velocity (S)', de: 'Skalierungsgeschwindigkeit (S)' },
  outputDetails: [
    { en: 'S = M × E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ', de: 'S = M × E × (C₁^1.5 × C₂ × C₃^1.5 × C₄) × θ' },
    { en: 'Superlinear vs. Linear', de: 'Superlinear vs. Linear' }
  ],
  validation: { en: 'n=22, R²=0.76', de: 'n=22, R²=0.76' },
  href: '/expertise/anst',
  color: 'blue'
}
```

### 4. Research Hub (OPTIONAL) (`src/components/ResearchHub.tsx`)

#### 4.1 ANST Card Description (Zeile 56-57)

**Aktuell:**
```typescript
description: 'We studied 22 AI-native companies to understand why they reach €100M ARR in 8-18 months (vs. 60-84 months for traditional startups). The answer: Strategy × Setup × Execution × Operationalization × AI Maturity.',
```

**Neu:**
```typescript
description: 'We developed a complete formula that explains 76% of variance in scaling velocity: Scaling Success = Market × Enablers × Capabilities × AI Maturity. Validated with n=22 AI-native companies.',
```

## Technische Details

### Type-Erweiterung (`src/data/research/types.ts`)

Füge zu `FormulaSectionData` hinzu:

```typescript
export interface FormulaSectionData {
  // ... bestehende Felder
  whyFocusOnCapabilities?: {
    headline: BilingualText;
    reasons: Array<{
      title: BilingualText;
      content: BilingualText;
    }>;
    causalChain: BilingualText;
  };
}
```

## Implementierungsreihenfolge

1. **Types erweitern** (`types.ts`) - Neue Felder definieren
2. **ANST Data aktualisieren** (`anst.ts`) - Formula + M + Why Focus
3. **Formula Component** (`ResearchFormulaSection.tsx`) - M in Visual
4. **Unified Framework** (`unified-framework.ts`) - ANST Card
5. **Research Hub** (`ResearchHub.tsx`) - Optional

## Ergebnis

Nach der Implementierung:
- Vollständige Formel `M × E × (C₁-C₄) × θ` auf allen relevanten Seiten
- Erklärung, warum M und E wichtig sind
- Erklärung, warum der Fokus auf C₁-C₄ liegt (ROI, Kontrollierbarkeit)
- Konsistenz zwischen Research Papers und Website

