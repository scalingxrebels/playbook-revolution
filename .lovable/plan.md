
# Fix: ROI Calculation für "Vision 2030 Strategy Workshop" Case Study

## Problem
Die Case Study "Vision 2030 Defined → 3-Year Roadmap Created" zeigt falsche Investment-Daten:
- **Aktuell**: Investment €3K-€5K, Return €30K-€50K, ROI 10x+
- **Korrekt**: Investment €12.9K, Return €150K

## Berechneter ROI
€150,000 / €12,900 = **11.6x** (gerundet)

## Änderungen

### Datei: `src/data/cases/caseStudies.ts`

| Zeile | Feld | Aktuell | Neu |
|-------|------|---------|-----|
| 5085 | `investment` | `'€3K-€5K'` | `'€12.9K'` |
| 5086 | `roi` | `'10x+'` | `'11.6x'` |
| 5277 | `roiCalculation.investment` | `'€3K-€5K'` | `'€12.9K'` |
| 5278 | `roiCalculation.returnValue` | `'€30K-€50K'` | `'€150K'` |
| 5279 | `roiCalculation.roi` | `'10x+'` | `'11.6x'` |

## Betroffene Ansichten
- **Case Card** auf `/cases` Übersicht (zeigt `investment` und `roi`)
- **Case Detail Page** `/cases/vision-2030-strategy-workshop` (zeigt `roiCalculation`)

## Keine weiteren Änderungen nötig
Die `cardSummary` enthält keine Investment-Werte und bleibt unverändert.
