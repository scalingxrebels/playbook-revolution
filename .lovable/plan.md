
# Cases Hero Stats: Dynamische Berechnung & Konsistenz

## Anforderungen

| # | Aktuell | Neu |
|---|---------|-----|
| 1 | `${caseStudies.length}+` Case Studies | `${caseStudies.length}` (ohne "+") |
| 2 | `5x` Avg ROI (hardcoded) | Dynamisch berechnet aus Case Studies |
| 3 | `€2.1B` Value Created | `140+` Engagements |
| 4 | `92%` Success Rate | `€2.5B` Value Created |

## ROI-Werte in den Case Studies

Aus den Daten:
- 5x, 8x, 5x+, 180x, 10x+, 30x, 8.6x, 12x, 2x, 1,224x, 3.5-5.3x

**Problem:** Extreme Ausreißer (180x, 1,224x) würden einen einfachen Durchschnitt verzerren.

**Lösung:** Helper-Funktion die:
1. ROI-Strings parst (z.B. "5x" → 5, "3.5-5.3x" → 4.4)
2. Median berechnet (robuster gegen Ausreißer)
3. Auf ganze Zahl rundet

## Implementierung

### Datei: `src/pages/Cases.tsx`

```typescript
import { caseStudies } from '@/data/cases';

// Helper: Parse ROI string to number
const parseRoi = (roi: string): number | null => {
  // Handle ranges like "3.5-5.3x" → take average
  if (roi.includes('-') && roi.includes('x')) {
    const parts = roi.replace('x', '').replace('+', '').split('-');
    if (parts.length === 2) {
      const low = parseFloat(parts[0]);
      const high = parseFloat(parts[1]);
      if (!isNaN(low) && !isNaN(high)) return (low + high) / 2;
    }
  }
  // Handle simple values like "5x", "8.6x", "10x+"
  const num = parseFloat(roi.replace('x', '').replace('+', '').replace(',', ''));
  return isNaN(num) ? null : num;
};

// Calculate median ROI
const calculateMedianRoi = (): string => {
  const roiValues = caseStudies
    .map(c => parseRoi(c.roi))
    .filter((v): v is number => v !== null)
    .sort((a, b) => a - b);
  
  if (roiValues.length === 0) return '5x';
  
  const mid = Math.floor(roiValues.length / 2);
  const median = roiValues.length % 2 === 0
    ? (roiValues[mid - 1] + roiValues[mid]) / 2
    : roiValues[mid];
  
  return `${Math.round(median)}x`;
};

const casesStats = [
  { 
    value: String(caseStudies.length), // Exakte Zahl ohne "+"
    label: { en: 'Case Studies', de: 'Case Studies' }, 
    color: 'primary' as const 
  },
  { 
    value: calculateMedianRoi(), // Dynamisch berechnet
    label: { en: 'Avg ROI', de: 'Ø ROI' }, 
    color: 'accent' as const 
  },
  { 
    value: '140+', 
    label: { en: 'Engagements', de: 'Engagements' }, 
    color: 'primary' as const 
  },
  { 
    value: '€2.5B', 
    label: { en: 'Value Created', de: 'Wert geschaffen' }, 
    color: 'accent' as const 
  },
];
```

## Ergebnis

Mit den aktuellen ROI-Werten (5, 8, 5, 180, 10, 30, 8.6, 12, 2, 1224, 4.4):
- Sortiert: 2, 4.4, 5, 5, 8, 8.6, 10, 12, 30, 180, 1224
- Median (11 Werte, Index 5): **8.6 → gerundet 9x**

Die Stats werden dann:
| Stat | Wert |
|------|------|
| Case Studies | 14 (dynamisch) |
| Avg ROI | 9x (dynamisch berechnet) |
| Engagements | 140+ |
| Value Created | €2.5B |

## Änderungen

| Datei | Änderung |
|-------|----------|
| `src/pages/Cases.tsx` | ROI-Parser + Median-Berechnung, Stats-Array aktualisiert |
