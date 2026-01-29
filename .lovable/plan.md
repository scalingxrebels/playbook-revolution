
# Plan: Maxxeed ID korrigieren

## Problem

Zwei Tiles haben dieselbe ID 42:
- DealDeskr.io (Zeile 1503)
- Maxxeed (Zeile 1539)

## Loesung

Maxxeed bekommt die naechste freie ID: **43**

## Aenderung in `src/data/solutionTiles.ts`

| Zeile | Aktuell | Neu |
|-------|---------|-----|
| 1539 | `id: 42,` | `id: 43,` |

## Technische Details

```typescript
// Zeile 1539
id: 43,  // War: 42 (Konflikt mit DealDeskr)
```

## Ergebnis

- DealDeskr.io: ID 42
- Maxxeed: ID 43
- Total Solutions: 43 (wird automatisch im Hero aktualisiert)
