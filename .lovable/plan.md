

## Plan: ROI-Calculator als Modal auf Home

### Ansatz

Den `ROICalculatorOptimized` (590 Zeilen, vollständiger interaktiver Kalkulator) in ein Modal wrappen, das vom Formula-CTA-Button geöffnet wird.

### Änderungen

| Datei | Änderung |
|---|---|
| `src/components/homepage/ROICalculatorModal.tsx` | **Neue Datei**: Dialog-Wrapper um den ROI-Calculator-Content. Extrahiert die innere Logik aus `ROICalculatorOptimized` als eigene Render-Funktion oder importiert die Komponente direkt in ein `Dialog`/`Sheet`-Overlay. Nutzt `Sheet` (side="bottom", fullscreen) oder `Dialog` (max-w-5xl) für genug Platz. |
| `src/components/homepage/FormulaOptimized.tsx` | Z.55-57: `scrollToCalculator` → State `roiModalOpen` + setter. Z.140: `onClick={() => setRoiModalOpen(true)}`. Am Ende der Section: `<ROICalculatorModal open={roiModalOpen} onClose={() => setRoiModalOpen(false)} />` |

### Technisches Detail

- **Dialog vs Sheet**: Der ROI-Calculator braucht viel Platz (Slider, Cards, Ergebnisse). Ein `Dialog` mit `max-w-5xl max-h-[90vh] overflow-y-auto` passt am besten.
- `ROICalculatorOptimized` wird direkt im Modal gerendert, aber ohne das `<section>`-Wrapper und Background — nur der innere Content.
- Dafür wird `ROICalculatorOptimized` refactored: der innere Content wird als exportierte Unterkomponente (`ROICalculatorContent`) extrahiert, die sowohl standalone (auf /ai-native) als auch im Modal (auf Home) nutzbar ist.

### Dateien

| Datei | Art |
|---|---|
| `src/components/homepage/ROICalculatorOptimized.tsx` | Refactor: Content in `ROICalculatorContent` extrahieren, Section-Wrapper bleibt als Default-Export |
| `src/components/homepage/FormulaOptimized.tsx` | State + Modal-Trigger + Dialog mit `ROICalculatorContent` |

2 Dateien.

