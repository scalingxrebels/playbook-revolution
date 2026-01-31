

# Avg. ROI mit Dezimalstelle

## Änderung

**Datei:** `src/pages/Cases.tsx` (Zeile 48)

**Aktuell:**
```typescript
return `${Math.round(median)}x`;
```

**Neu:**
```typescript
return `${median % 1 === 0 ? median : median.toFixed(1)}x`;
```

## Ergebnis

- Wenn Median eine ganze Zahl ist (z.B. 8) → "8x"
- Wenn Median eine Dezimalzahl ist (z.B. 8.6) → "8.6x"

Mit den aktuellen Daten wird der Median **8.6x** angezeigt statt gerundet **9x**.

