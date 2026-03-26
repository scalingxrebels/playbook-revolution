

## Plan: Hero-Stat "Solutions" → "6 Solution Portfolios"

### Änderung in `src/components/solutions/SolutionHero.tsx`

**Z.5**: `visibleSolutionCount` Prop entfernen (wird nicht mehr gebraucht)

**Z.11**: Stat ändern von:
```
{ value: visibleSolutionCount.toString(), label: { en: 'Solutions', de: 'Solutions' }, ... }
```
zu:
```
{ value: '6', label: { en: 'Solution Portfolios', de: 'Solution Portfolios' }, color: 'primary' as const }
```

### Änderung in `src/pages/Solutions.tsx`

Die Prop `visibleSolutionCount={visibleTilesTotal.length}` aus dem `<SolutionHero>`-Aufruf entfernen.

### 1 Datei primär, 1 Datei Cleanup. Keine strukturellen Änderungen.

