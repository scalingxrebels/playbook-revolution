
# Plan: Button-Text aktualisieren

## Übersicht

Einfache Textänderung für den Primary CTA Button der "Power Up: Predictable Acquisition" Kachel.

---

## Änderungen

| Element | Aktuell | Neu |
|---------|---------|-----|
| Button (EN) | "Learn More About Predictable Acquisition" | "More About Solving Predictable Acquisition" |
| Button (DE) | "Mehr über Predictable Acquisition" | "Mehr über Solving Predictable Acquisition" |

---

## Betroffene Datei

**`src/data/solutionTiles.ts`** – Zeilen 500-501

```tsx
// Aktuell:
primaryCtaEn: 'Learn More About Predictable Acquisition',
primaryCtaDe: 'Mehr über Predictable Acquisition',

// Neu:
primaryCtaEn: 'More About Solving Predictable Acquisition',
primaryCtaDe: 'Mehr über Solving Predictable Acquisition',
```

---

## Hinweis

Die deutsche Übersetzung behält "Solving" bei (statt einer deutschen Übersetzung), um konsistent mit dem englischen Branding zu bleiben.
