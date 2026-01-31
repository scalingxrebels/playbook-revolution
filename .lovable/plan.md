
# Plan: Case Study Daten mit Briefing synchronisieren

## Übersicht

Die Detail-Seite (`CaseStudy.tsx`) muss mit den Briefing-Benchmark-Daten synchronisiert werden. Das Modal (`ScalingXCaseStudies.tsx`) ist bereits größtenteils korrekt.

---

## 1. Inkonsistenzen im Detail

### Midjourney (CaseStudy.tsx)

| Feld | Aktuell | Briefing-Benchmark | Aktion |
|------|---------|-------------------|--------|
| Revenue | $500M | **$492M** | Korrigieren |
| θ_index overall | 0.85 | **0.88** | Korrigieren |
| C1 (Strategy) | 0.9 | 0.9 | OK |
| C2 (Setup) | 0.8 | **0.85** | Korrigieren |
| C3 (Execution) | 0.8 | **0.85** | Korrigieren |
| C4 (Ops) | 0.7 | **0.8** | Korrigieren |
| Growth 2025 | $500M | **$492M** | Korrigieren |

### Cursor (CaseStudy.tsx)

| Feld | Aktuell | Briefing-Benchmark | Aktion |
|------|---------|-------------------|--------|
| Headline Metric | $29.3B | **$400M** | Korrigieren |
| Headline Label | "Valuation Nov 2025" | **"Valuation Aug 2024"** | Korrigieren |
| ARR | $1B+ | **$100M** | Korrigieren |
| θ_index overall | 0.92 | **0.90** | Korrigieren |
| C4 | 0.9 | **0.85** | Korrigieren |
| Growth Timeline | Nov 2025: $29.3B | **Aug 2024: $400M** | Korrigieren |
| Employees | 2M+ MAU | **60 Employees** | Korrigieren |

### Perplexity (CaseStudy.tsx)

| Feld | Aktuell | Briefing-Benchmark | Aktion |
|------|---------|-------------------|--------|
| θ_index overall | 0.88 | **0.85** | Korrigieren |
| C3 (Execution) | 0.8 | OK |
| C4 (Ops) | 0.8 | OK |

---

## 2. Zu ändernde Datei

**`src/pages/CaseStudy.tsx`**

### 2.1 Midjourney-Daten (Zeilen 40-111)

```typescript
{
  id: 'midjourney',
  // ...
  headline: { metric: '$492M', label: { en: 'Revenue 2025', de: 'Umsatz 2025' } }, // $500M → $492M
  thetaIndex: { overall: 0.88, c1: 0.9, c2: 0.85, c3: 0.85, c4: 0.8 }, // 0.85 → 0.88, c2/c3 angepasst
  growthTimeline: [
    { year: '2022', value: '$50M' },
    { year: '2023', value: '$200M', label: '+300%' },
    { year: '2024', value: '$300M', label: '+50%' },
    { year: '2025', value: '$492M', label: '+64%' }, // $500M → $492M
  ],
  keyMetrics: [
    { label: { en: 'Annual Revenue', de: 'Jahresumsatz' }, value: '$492M', icon: TrendingUp }, // $500M → $492M
    // ...
  ],
  // description aktualisieren: $500M → $492M
}
```

### 2.2 Cursor-Daten (Zeilen 112-181)

```typescript
{
  id: 'cursor',
  // ...
  headline: { metric: '$400M', label: { en: 'Valuation Aug 2024', de: 'Bewertung Aug 2024' } }, // $29.3B → $400M
  secondaryMetrics: [
    { value: '$100M', label: { en: 'ARR 2024', de: 'ARR 2024' } }, // $1B+ → $100M
    { value: '60', label: { en: 'Employees', de: 'Mitarbeiter' } }, // 2M+ MAU → 60 Employees
    { value: '$1.67M', label: { en: 'ARR/Employee', de: 'ARR/Mitarbeiter' } }, // NEU
  ],
  thetaIndex: { overall: 0.90, c1: 0.9, c2: 0.9, c3: 0.9, c4: 0.85 }, // 0.92 → 0.90, c4: 0.9 → 0.85
  growthTimeline: [
    { year: '2022', value: '$0', label: 'Founded' },
    { year: '2024', value: '$400M', label: 'Series B' }, // Vereinfachte Timeline
  ],
  keyMetrics: [
    { label: { en: 'Valuation', de: 'Bewertung' }, value: '$400M', icon: TrendingUp }, // $29.3B → $400M
    { label: { en: 'ARR', de: 'ARR' }, value: '$100M', icon: Zap }, // $1B+ → $100M
    { label: { en: 'Employees', de: 'Mitarbeiter' }, value: '60', icon: Users }, // 2M+ → 60
    { label: { en: 'ARR/Employee', de: 'ARR/Mitarbeiter' }, value: '$1.67M', icon: Target }, // NEU
  ],
  highlight: { en: 'AI-Native Code Editor', de: 'AI-Nativer Code Editor' }, // Geändert
  description: {
    en: 'Cursor built an AI-native code editor achieving $100M ARR with just 60 employees—the most capital-efficient AI company. Their $400M valuation (Aug 2024) showcases the power of developer-first products.',
    de: 'Cursor baute einen KI-nativen Code-Editor und erreichte $100M ARR mit nur 60 Mitarbeitern—das kapitaleffizienteste KI-Unternehmen. Ihre $400M Bewertung (Aug 2024) zeigt die Kraft von Developer-First-Produkten.',
  },
  learnings anpassen: "Capital Efficiency - $100M ARR with 60 employees"
}
```

### 2.3 Perplexity-Daten (Zeilen 183-253)

```typescript
{
  id: 'perplexity',
  // ...
  thetaIndex: { overall: 0.85, c1: 0.9, c2: 0.85, c3: 0.8, c4: 0.8 }, // 0.88 → 0.85, c2: 0.9 → 0.85
}
```

---

## 3. Änderungsübersicht

| Datei | Änderungen | Betrifft |
|-------|------------|----------|
| `src/pages/CaseStudy.tsx` | Midjourney: Revenue, θ_index, C-Scores | Zeilen 40-111 |
| `src/pages/CaseStudy.tsx` | Cursor: Valuation, ARR, θ_index, C-Scores, Timeline | Zeilen 112-181 |
| `src/pages/CaseStudy.tsx` | Perplexity: θ_index, C2-Score | Zeilen 183-253 |

---

## 4. Verifizierte Benchmark-Werte

Nach der Synchronisierung werden beide Komponenten diese Werte haben:

| Company | Revenue/Valuation | θ_index | C1 | C2 | C3 | C4 |
|---------|------------------|---------|----|----|----|----|
| **Midjourney** | $492M Revenue | 0.88 | 0.9 | 0.85 | 0.85 | 0.8 |
| **Cursor** | $400M Val / $100M ARR | 0.90 | 0.9 | 0.9 | 0.9 | 0.85 |
| **Perplexity** | $200M+ Rev / $9B Val | 0.85 | 0.9 | 0.85 | 0.8 | 0.8 |

---

## 5. Source-Zitationen hinzufügen

Zusätzlich wird ein `dataSource`-Feld zu jedem Case Study in `CaseStudy.tsx` hinzugefügt:

```typescript
dataSource: 'ANST v4.5.3, AMF v4.5.1' // Midjourney
dataSource: 'AMF v4.1, ANST v4.1, TechCrunch (Aug 2024)' // Cursor
dataSource: 'AMF v4.1, ANST v4.1' // Perplexity
```

---

## 6. Zusammenfassung

| Aspekt | Details |
|--------|---------|
| **Geänderte Datei** | `src/pages/CaseStudy.tsx` |
| **Änderungen** | 3 Case Studies (Midjourney, Cursor, Perplexity) |
| **Kritische Fixes** | Cursor: $29.3B → $400M, $1B ARR → $100M |
| **θ_index Korrekturen** | Midjourney: 0.85→0.88, Cursor: 0.92→0.90, Perplexity: 0.88→0.85 |
| **Neue Felder** | `dataSource` für wissenschaftliche Zitation |
