

# Plan: Accelerate Hypergrowth Challenge-Zuordnung erweitern

## Problem

Die Kachel **"Accelerate: Hypergrowth"** (ID 29) in `src/data/solutionTiles.ts` ist aktuell nur den Challenges `ai-transformation` und `growth-stalled` zugeordnet.

Fehlende Zuordnungen:
- `cac-crisis`
- `pricing-breakdown`
- `customer-success-broken`

## Lösung

**Datei:** `src/data/solutionTiles.ts` (Zeile 1083)

| Feld | Aktuell | Neu |
|------|---------|-----|
| `challenges` | `['ai-transformation', 'growth-stalled']` | `['cac-crisis', 'growth-stalled', 'pricing-breakdown', 'customer-success-broken', 'ai-transformation']` |

## Technische Details

```typescript
// Zeile 1083
// Aktuell:
challenges: ['ai-transformation', 'growth-stalled'],

// Neu:
challenges: ['cac-crisis', 'growth-stalled', 'pricing-breakdown', 'customer-success-broken', 'ai-transformation'],
```

## Auswirkung

Nach der Änderung erscheint **Accelerate: Hypergrowth** unter:
- CAC Crisis (neu)
- Growth Stalled (bestehend)
- Pricing Breakdown (neu)
- Customer Success Broken (neu)
- AI Transformation (bestehend)

## Zusammenfassung

| Datei | Änderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Zeile 1083: `challenges` Array um 3 weitere Challenges erweitern |

