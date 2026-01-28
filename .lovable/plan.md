
# Plan: Button-Text korrigieren

## Übersicht

Korrektur des Button-Texts - "Solving" entfernen.

---

## Änderungen

| Element | Aktuell | Neu |
|---------|---------|-----|
| Button (EN) | "More About Solving Predictable Acquisition" | "More About Predictable Acquisition" |
| Button (DE) | "Mehr über Solving Predictable Acquisition" | "Mehr über Predictable Acquisition" |

---

## Betroffene Datei

**`src/data/solutionTiles.ts`** – Zeilen 500-501

```tsx
// Aktuell:
primaryCtaEn: 'More About Solving Predictable Acquisition',
primaryCtaDe: 'Mehr über Solving Predictable Acquisition',

// Neu:
primaryCtaEn: 'More About Predictable Acquisition',
primaryCtaDe: 'Mehr über Predictable Acquisition',
```
