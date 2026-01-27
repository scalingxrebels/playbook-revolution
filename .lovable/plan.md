

# Plan: Challenge-Mappings für 4 Kacheln korrigieren

## Übersicht

Korrektur der Challenge-Zuordnungen für 4 Solution Tiles gemäß Briefing.

---

## Änderungen

### Datei: `src/data/solutionTiles.ts`

#### 1. ID 8: VC Due Diligence Simulation (Zeile 357)

| Element | Vorher | Nachher |
|---------|--------|---------|
| challenges | `['board-pressure']` | `['board-pressure', 'portfolio-performance']` |

**Code:**
```tsx
challenges: ['board-pressure', 'portfolio-performance'],
```

#### 2. ID 38: lasr.io (Zeile 1384)

| Element | Vorher | Nachher |
|---------|--------|---------|
| challenges | `['orientation', 'scaling-chaos']` | `'universal'` |

**Code:**
```tsx
challenges: 'universal',
```

#### 3. ID 39: ROI Calculator (Zeile 1417)

| Element | Vorher | Nachher |
|---------|--------|---------|
| challenges | `['orientation']` | `'universal'` |

**Code:**
```tsx
challenges: 'universal',
```

#### 4. ID 41: KeyPitchs (Zeile 1483)

| Element | Vorher | Nachher |
|---------|--------|---------|
| challenges | `['board-pressure', 'orientation']` | `['cac-crisis']` |

**Code:**
```tsx
challenges: ['cac-crisis'],
```

---

## Auswirkungen

- **VC Due Diligence Simulation** erscheint nun bei "Board Pressure" UND "Portfolio Performance"
- **lasr.io** und **ROI Calculator** erscheinen bei ALLEN Challenge-Kategorien
- **KeyPitchs** erscheint nur noch bei "CAC Crisis" (nicht mehr bei Board Pressure)

---

## Betroffene Datei

| Datei | Zeilen | Änderung |
|-------|--------|----------|
| `src/data/solutionTiles.ts` | 357 | VC DD Simulation → + portfolio-performance |
| `src/data/solutionTiles.ts` | 1384 | lasr.io → universal |
| `src/data/solutionTiles.ts` | 1417 | ROI Calculator → universal |
| `src/data/solutionTiles.ts` | 1483 | KeyPitchs → cac-crisis |

