

# Plan: Solutions-Anzahl dynamisch machen

## Ubersicht

Die Zahlen in der SolutionHero-Komponente sollen dynamisch aus den Daten berechnet werden, anstatt hardcoded zu sein. Das ist **nicht komplex** und eine Best Practice!

## Aktuelle Situation

Die Zahl "40" ist an 3 Stellen hardcoded:
1. Stats-Array: `value: '40'`
2. Subheadline EN: `"40 solutions across 9 challenges..."`
3. Subheadline DE: `"40 Losungen fur 9 Challenges..."`

## Losung

### Aenderung in `src/components/solutions/SolutionHero.tsx`

1. **Imports hinzufugen**: `solutionTiles` und `challenges` aus den Daten importieren
2. **Dynamische Berechnung**:
   - `solutionTiles.length` = Anzahl Solutions (aktuell 41)
   - `challenges.length - 1` = Anzahl Challenges (9, ohne "all")
3. **Template Strings** fur die Subheadlines verwenden

### Vorher:

```tsx
const stats = [
  { value: '9', label: { en: 'Challenges', de: 'Challenges' }, color: 'accent' as const },
  { value: '40', label: { en: 'Solutions', de: 'Losungen' }, color: 'primary' as const },
  ...
];

subheadlineEn="40 solutions across 9 challenges..."
```

### Nachher:

```tsx
import { solutionTiles, challenges } from '@/data/solutionTiles';

const solutionCount = solutionTiles.length;
const challengeCount = challenges.length - 1; // Minus "all"

const stats = [
  { value: String(challengeCount), label: { en: 'Challenges', de: 'Challenges' }, color: 'accent' as const },
  { value: String(solutionCount), label: { en: 'Solutions', de: 'Losungen' }, color: 'primary' as const },
  ...
];

subheadlineEn={`${solutionCount} solutions across ${challengeCount} challenges. Filter by challenge or solution type to find what you need.`}
```

## Vorteile

| Aspekt | Beschreibung |
|--------|--------------|
| Automatisch | Zahlen passen sich bei neuen Solutions/Challenges automatisch an |
| Wartungsarm | Kein manuelles Update mehr notig |
| Fehlersicher | Keine Diskrepanz zwischen angezeigten und echten Zahlen |

## Technische Details

Die SharedHero-Komponente muss nicht geaendert werden, da sie bereits String-Props akzeptiert. Wir muessen nur die Props dynamisch generieren statt sie hardcoded zu ubergeben.

## Zusammenfassung

| Datei | Aenderung |
|-------|-----------|
| `src/components/solutions/SolutionHero.tsx` | Import hinzufugen, Zahlen dynamisch berechnen |

