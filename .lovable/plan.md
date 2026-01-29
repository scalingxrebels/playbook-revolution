

# Plan: ROI Calculator Anchor korrigieren

## Problem

| Element | Aktuell | Korrekt |
|---------|---------|---------|
| Tile CTA URL | `/#calculator` | `/#roi-calculator` |
| Section ID | `id="roi-calculator"` | ✅ bereits korrekt |

Der "Try Now" / "Jetzt ausprobieren" Button der ROI Calculator Kachel führt zu einem nicht existierenden Anchor.

---

## Änderung

### `src/data/solutionTiles.ts` (Zeile 1430)

**Vorher:**
```typescript
primaryCtaUrl: '/#calculator',
```

**Nachher:**
```typescript
primaryCtaUrl: '/#roi-calculator',
```

---

## Technische Details

- Die Section-ID in `ROICalculatorOptimized.tsx` ist `id="roi-calculator"` (Zeile 227)
- Der Anchor-Link muss exakt übereinstimmen
- Nach der Korrektur scrollt der Button direkt zum ROI Calculator auf der Homepage

