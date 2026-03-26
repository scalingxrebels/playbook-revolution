

## Plan: Button-Overflow + Scroll-Grafik-Fehler beheben

### Problem 1: Button-Text "Kostenloses Gespräch buchen" überläuft

Der Button in `HomeHero.tsx` (Zeile 100–107) hat `px-8 py-6` aber keinen `whitespace-nowrap`. Auf bestimmten Viewports bricht der Text um oder überläuft.

**Fix in `HomeHero.tsx` Zeile 102:**
- `whitespace-nowrap` zum Button hinzufügen
- Gleicher Fix in `HomeWorkWithUs.tsx` Zeile 108 (gleicher CTA-Text)

### Problem 2: Grafik-Fehler beim Scrollen

`backdrop-blur-sm` ist auf 6 Komponenten angewandt — direkt über animierten Parallax-Hintergründen. `backdrop-blur` re-sampelt alle darunterliegenden Pixel pro Frame, was bei animierten Backgrounds zu visuellen Artefakten und Rucklern führt.

**Fix: `backdrop-blur-sm` entfernen aus allen Homepage-Cards:**

| Datei | Zeile | Element |
|---|---|---|
| `HomeMechanisms.tsx` | 113 | Mechanism-Cards |
| `HomeComparison.tsx` | 99 | Vergleichstabelle |
| `HomeCases.tsx` | 133 | Case-Cards |
| `HomeWorkWithUs.tsx` | 86 | Path-Cards (nicht-prominent) |
| `HomeTeam.tsx` | 88, 103 | Partner-Cards |

Ersetze `bg-card/5 backdrop-blur-sm` durch `bg-card/10` (leicht höhere Opacity kompensiert den fehlenden Blur visuell). Kein sichtbarer Qualitätsverlust, aber deutlich bessere Scroll-Performance.

### Zusammenfassung
- 7 Dateien, rein CSS-Änderungen
- Keine inhaltlichen Änderungen
- Keine neuen Dependencies

