
# Fix: ROI Calculation für "SaaS-Transition Accelerated" Case Study

## Problem
Die Case Study "SaaS-Transition Accelerated → €10M Roadmap Executed" zeigt falsches Investment:
- **Aktuell**: Investment €156K-€216K
- **Korrekt**: Investment €132K

## ROI-Berechnung
Der Return bleibt unverändert: €780K-€1.1M

Neuer ROI: €780K-€1.1M / €132K = **6-8x**

## Änderungen

### Datei: `src/data/cases/caseStudies.ts`

| Zeile | Feld | Aktuell | Neu |
|-------|------|---------|-----|
| 5469 | `investment` | `'€156K-€216K'` | `'€132K'` |
| 5470 | `roi` | `'5-10x'` | `'6-8x'` |
| 5781 | `roiCalculation.investment` | `'€156K-€216K'` | `'€132K'` |
| 5783 | `roiCalculation.roi` | `'5-10x'` | `'6-8x'` |

## Betroffene Ansichten
- **Case Card** auf `/cases` Übersicht (zeigt `investment` und `roi`)
- **Case Detail Page** `/cases/saas-transition-accelerated` (zeigt `roiCalculation`)

## Keine weiteren Änderungen nötig
- `returnValue` bleibt unverändert: `'€780K-€1.1M'`
- `cardSummary` enthält keine Investment-Werte
- `breakdown` Array bleibt unverändert
