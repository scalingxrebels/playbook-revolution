

# Filterlogik-Harmonisierung: Cases-Seite

## Problem-Analyse

### 1. Challenge-Filter inkonsistent
| Cases-Seite (aktuell) | Solutions-Seite | Daten vorhanden |
|-----------------------|-----------------|-----------------|
| ops-chaos | scaling-chaos | scaling-chaos |
| - | board-pressure | board-pressure |
| - | pricing-breakdown | pricing-breakdown |
| - | orientation | orientation |
| nrr-stuck | customer-success-broken | nrr-stuck |

### 2. Industry-Filter fehlerhaft
Aktuelle Filter vs. tatsächliche Daten:
- `martech` ist **dupliziert**
- `fintech`, `enterprise` **nicht in Daten**
- Fehlen: `B2B Services`, `B2B Technology`, `B2B Leadership`

### 3. Stage-Filter gemischte Logik
Tatsächliche Werte in den Case Studies:
- Series A, Series B (Funding-Runden)
- Growth Stage, Early-Stage (Phasen)
- Established, Established Consultancy, Established (€10-12M ARR)
- Post-IPO

## Lösung

### A. Challenge-Filter: 1:1 mit Solutions synchronisieren

**Datei:** `src/data/cases/caseFilters.ts`

Neue Challenge-Liste (identisch mit Solutions):
```typescript
export const challengeFilters: CaseFilterOption[] = [
  { id: 'all', label: { en: 'All Cases', de: 'Alle Cases' } },
  { id: 'cac-crisis', label: { en: 'CAC Crisis', de: 'CAC-Krise' } },
  { id: 'growth-stalled', label: { en: 'Growth Stalled', de: 'Wachstum stagniert' } },
  { id: 'pricing-breakdown', label: { en: 'Pricing Breakdown', de: 'Pricing-Problem' } },
  { id: 'nrr-stuck', label: { en: 'NRR Stuck', de: 'NRR festgefahren' } },
  { id: 'scaling-chaos', label: { en: 'Scaling Chaos', de: 'Skalierungs-Chaos' } },
  { id: 'ai-transformation', label: { en: 'AI Transformation', de: 'AI-Transformation' } },
  { id: 'board-pressure', label: { en: 'Board Pressure', de: 'Board-Druck' } },
  { id: 'exit-prep', label: { en: 'Exit Prep', de: 'Exit-Vorbereitung' } },
  { id: 'partner-channel', label: { en: 'Partner Channel', de: 'Partner Channel' } },
  { id: 'market-entry', label: { en: 'Market Entry', de: 'Markteintritt' } },
  { id: 'orientation', label: { en: 'Need Orientation', de: 'Orientierung' } },
];
```

### B. Challenge-Icons: Aus Solutions übernehmen

**Datei:** `src/components/cases/CaseFilterSection.tsx`

Icon-Mapping hinzufügen (identisch mit `ChallengeTabNavigation`):
```typescript
import { Layers, TrendingDown, TrendingUp, DollarSign, Users, Zap, Bot, Briefcase, PieChart, HelpCircle, Handshake, Globe, LogOut } from 'lucide-react';

const challengeIcons: Record<string, React.ElementType> = {
  'all': Layers,
  'cac-crisis': TrendingUp,
  'growth-stalled': TrendingDown,
  'pricing-breakdown': DollarSign,
  'nrr-stuck': Users,
  'scaling-chaos': Zap,
  'ai-transformation': Bot,
  'board-pressure': Briefcase,
  'exit-prep': LogOut,
  'partner-channel': Handshake,
  'market-entry': Globe,
  'orientation': HelpCircle,
};
```

### C. Industry-Filter: Auf tatsächliche Daten abbilden

**Datei:** `src/data/cases/caseFilters.ts`

Bereinigte Industry-Liste:
```typescript
export const industryFilters: CaseFilterOption[] = [
  { id: 'all', label: { en: 'All Industries', de: 'Alle Branchen' } },
  { id: 'b2b-saas', label: { en: 'B2B SaaS', de: 'B2B SaaS' } },
  { id: 'b2b-services', label: { en: 'B2B Services', de: 'B2B Services' } },
  { id: 'b2b-software', label: { en: 'B2B Software', de: 'B2B Software' } },
  { id: 'martech', label: { en: 'MarTech', de: 'MarTech' } },
  { id: 'analytics', label: { en: 'Data & Analytics', de: 'Daten & Analytics' } },
  { id: 'professional-services', label: { en: 'Professional Services', de: 'Professional Services' } },
];
```

### D. Stage-Filter: Einheitliche Phasen-Logik

**Empfehlung:** Business-Phase-Logik (nicht Funding-Runden), da es konsistenter für alle Unternehmenstypen ist.

**Datei:** `src/data/cases/caseFilters.ts`

```typescript
export const stageFilters: CaseFilterOption[] = [
  { id: 'all', label: { en: 'All Stages', de: 'Alle Phasen' } },
  { id: 'early-stage', label: { en: 'Early Stage', de: 'Frühphase' } },
  { id: 'growth-stage', label: { en: 'Growth Stage', de: 'Wachstumsphase' } },
  { id: 'established', label: { en: 'Established', de: 'Etabliert' } },
  { id: 'post-ipo', label: { en: 'Post-IPO / Public', de: 'Post-IPO / Börsennotiert' } },
];
```

### E. Case Study Daten normalisieren

**Datei:** `src/data/cases/caseStudies.ts`

Stages vereinheitlichen:
| Aktuell | Neu |
|---------|-----|
| Series A | growth-stage |
| Series B | growth-stage |
| Series A → Series B | growth-stage |
| Early-Stage | early-stage |
| Growth Stage | growth-stage |
| Established | established |
| Established Consultancy | established |
| Established (€10-12M ARR) | established |
| Post-IPO | post-ipo |

### F. Filter-Matching-Logik anpassen

**Datei:** `src/components/cases/useCaseFilters.ts`

Die Stage-Filterlogik vereinfachen für exakte Matches nach Normalisierung.

## Änderungen

| Datei | Änderung |
|-------|----------|
| `src/data/cases/caseFilters.ts` | Challenges, Industries, Stages bereinigen |
| `src/components/cases/CaseFilterSection.tsx` | Challenge-Icons hinzufügen |
| `src/data/cases/caseStudies.ts` | Stage-Werte normalisieren |
| `src/components/cases/useCaseFilters.ts` | Filter-Matching vereinfachen |

