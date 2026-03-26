

## Plan: Dynamische Zähler für Solutions

### Probleme

1. **SolutionFeatured.tsx Z.41**: "Aktuell: 7 Solutions" ist hardcoded
2. **SolutionHero.tsx Z.7**: "6 Solutions" ist hardcoded
3. **Solutions.tsx Z.120**: `solutionTiles.length` zählt ALLE Tiles (inkl. hidden) — sollte nur sichtbare zählen
4. **Solutions.tsx Z.181**: "von X Solutions" — gleicher Fehler
5. **SolutionCategoryLanding.tsx Z.122**: `categoryTiles.length` ist bereits dynamisch und filtert hidden ✅ — kein Fix nötig

### Änderungen

**1. `SolutionFeatured.tsx`** — Z.41 dynamisch machen:
```
`Händisch kuratiert. Aktuell: ${featuredTiles.length} Solutions.`
```

**2. `SolutionHero.tsx`** — braucht Zugriff auf sichtbare Tiles. Entweder Props von Solutions.tsx durchreichen oder die Zählung hier berechnen. Sauberer: `visibleCount` als Prop.
- SolutionHero bekommt `visibleSolutionCount: number` Prop
- Solutions.tsx berechnet `visibleTiles = solutionTiles.filter(t => !isHidden('solution', t.slug, t.hidden))` und übergibt `.length`

**3. `Solutions.tsx`** — Z.119-120 und Z.181:
- Neue Variable `visibleTilesTotal` = alle sichtbaren Tiles (ohne Filter)
- Stats und "von X" nutzen `visibleTilesTotal.length` statt `solutionTiles.length`

### Dateien
| Datei | Änderung |
|---|---|
| `SolutionHero.tsx` | Neuer Prop `visibleSolutionCount`, Stats dynamisch |
| `SolutionFeatured.tsx` | Z.41: `featuredTiles.length` statt hardcoded "7" |
| `Solutions.tsx` | `visibleTilesTotal` berechnen, an Hero + Stats übergeben |

