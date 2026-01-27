
# Umsetzungsplan: Portfolio-Zuordnung und Kachel-Entfernung

## Zusammenfassung

Einfache Aenderungen in einer Datei:
1. **Kacheln 9, 18, 27, 33** → `solutionType` von aktuell zu `'portfolio'` aendern
2. **Kachel 36** → komplett entfernen

---

## Aenderungen im Detail

### Datei: `src/data/solutionTiles.ts`

| Kachel | Zeile | Aktuelle Zuordnung | Neue Zuordnung |
|--------|-------|-------------------|----------------|
| ID 9 | ~396 | `solutionType: 'decision-support'` | `solutionType: 'portfolio'` |
| ID 18 | ~716 | `solutionType: 'transformation'` | `solutionType: 'portfolio'` |
| ID 27 | ~1026 | `solutionType: 'transformation'` | `solutionType: 'portfolio'` |
| ID 33 | ~1234 | `solutionType: 'transformation'` | `solutionType: 'portfolio'` |
| ID 36 | 1343-1375 | Komplett loeschen | - |

---

## Ergebnis nach Umsetzung

### Kachel-Verteilung:

| Solution Type | Vorher | Nachher |
|---------------|--------|---------|
| Insights & Clarity | 2 | 2 |
| Decision Support | 8 | **7** (-1) |
| AI-Powered Tools | 4 | 4 |
| Transformation | 23 | **20** (-3) |
| Strategic Advisory | 2 | **1** (-1) |
| Workshops & Keynotes | 2 | 2 |
| Portfolio & Investment | 0 | **4** (+4) |
| **Total** | **41** | **40** |

### Portfolio-Kategorie wird gefuellt mit:

| ID | Headline | Ursprung |
|----|----------|----------|
| 9 | Portfolio Assessment | war Decision Support |
| 18 | Power Up: Portfolio Value-Up | war Transformation |
| 27 | Boost: Portfolio Acceleration | war Transformation |
| 33 | Accelerate: Portfolio Dominance | war Transformation |

---

## Technische Details

### Betroffene Dateien:
- `src/data/solutionTiles.ts` (4 Zeilen aendern + 36 Zeilen loeschen)

### Keine Aenderungen erforderlich an:
- `SolutionTileCard.tsx` (Portfolio-Gradient und Icon bereits definiert)
- `SolutionTypeChips.tsx` (liest dynamisch aus solutionTypes)
- `Solutions.tsx` (Filter-Logik bleibt gleich)

### Kommentar-Anpassung:
Der Kommentar "// RETAINER (1 Kachel)" (Zeilen 1340-1342) wird ebenfalls entfernt.
