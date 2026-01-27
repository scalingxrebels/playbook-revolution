
# Plan: Stats-Reihenfolge und Icon-Korrektur

## Änderung 1: Stats-Reihenfolge im Hero

### Datei: `src/components/solutions/SolutionHero.tsx`

**Zeilen 8-13 ändern:**

```tsx
// VORHER:
const stats = [
  { value: '40', label: { en: 'Solutions', de: 'Lösungen' }, color: 'primary' as const },
  { value: '9', label: { en: 'Challenges', de: 'Challenges' }, color: 'accent' as const },
  { value: '15-80x', label: { en: 'Avg ROI', de: 'Ø ROI' }, color: 'primary' as const },
  { value: '92%', label: { en: 'Success Rate', de: 'Erfolgsrate' }, color: 'accent' as const },
];

// NACHHER:
const stats = [
  { value: '9', label: { en: 'Challenges', de: 'Challenges' }, color: 'accent' as const },
  { value: '40', label: { en: 'Solutions', de: 'Lösungen' }, color: 'primary' as const },
  { value: '15-80x', label: { en: 'Avg ROI', de: 'Ø ROI' }, color: 'primary' as const },
  { value: '92%', label: { en: 'Success Rate', de: 'Erfolgsrate' }, color: 'accent' as const },
];
```

**Logik:** Challenges → Solutions → ROI → Erfolgsrate (Problem → Lösung → Ergebnis)

---

## Änderung 2: Icons für CAC Crisis und Growth Stalled tauschen

### Datei: `src/components/solutions/ChallengeTabNavigation.tsx`

**Zeilen 15-16 ändern:**

```tsx
// VORHER:
const challengeIcons: Record<ChallengeId, React.ElementType> = {
  'all': Layers,
  'cac-crisis': TrendingDown,      // FALSCH
  'growth-stalled': TrendingUp,    // FALSCH
  // ...
};

// NACHHER:
const challengeIcons: Record<ChallengeId, React.ElementType> = {
  'all': Layers,
  'cac-crisis': TrendingUp,        // RICHTIG: CAC steigt
  'growth-stalled': TrendingDown,  // RICHTIG: Wachstum sinkt
  // ...
};
```

**Logik:**
- **CAC Crisis** = Customer Acquisition Cost steigt → `TrendingUp` (Pfeil nach oben = Kosten steigen)
- **Growth Stalled** = Wachstumsrate sinkt → `TrendingDown` (Pfeil nach unten = Wachstum sinkt)

---

## Betroffene Dateien

| Datei | Änderung |
|-------|----------|
| `src/components/solutions/SolutionHero.tsx` | Stats-Reihenfolge: Challenges vor Solutions |
| `src/components/solutions/ChallengeTabNavigation.tsx` | Icons tauschen: CAC → TrendingUp, Growth → TrendingDown |

## Visuelles Ergebnis

**Hero Stats (vorher):**
```
[40 Solutions] [9 Challenges] [15-80x ROI] [92% Erfolg]
```

**Hero Stats (nachher):**
```
[9 Challenges] [40 Solutions] [15-80x ROI] [92% Erfolg]
```

**Challenge Icons (nachher):**
```
[CAC Crisis ↗] [Growth Stalled ↘]
```
