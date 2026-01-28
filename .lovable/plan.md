
# Plan: Kachel "Power Up: CAC Crisis Averted" umbenennen und verlinken

## Übersicht

Aktualisierung der Solution Tile ID 11 mit neuem Namen, Button-Text und Link zur Landing Page.

---

## Änderungen

| Element | Aktuell | Neu |
|---------|---------|-----|
| Headline (EN) | "Power Up: CAC Crisis Averted" | "Power Up: Predictable Acquisition" |
| Headline (DE) | "Power Up: CAC-Krise abgewendet" | "Power Up: Predictable Acquisition" |
| Button (EN) | "Start Transformation" | "Learn More About Predictable Acquisition" |
| Button (DE) | "Transformation starten" | "Mehr über Predictable Acquisition" |
| Button Action | `book-call` | `learn-more` |
| Button URL | `https://calendly.com/michel-scalingx/transformation` | `/solutions/power-up/cac-crisis` |

---

## Betroffene Datei

**`src/data/solutionTiles.ts`** – Zeilen 482-503

### Zeilen 482-483 (Headlines)
```tsx
// Aktuell:
headlineEn: 'Power Up: CAC Crisis Averted',
headlineDe: 'Power Up: CAC-Krise abgewendet',

// Neu:
headlineEn: 'Power Up: Predictable Acquisition',
headlineDe: 'Power Up: Predictable Acquisition',
```

### Zeilen 500-503 (Primary CTA)
```tsx
// Aktuell:
primaryCtaEn: 'Start Transformation',
primaryCtaDe: 'Transformation starten',
primaryCtaAction: 'book-call',
primaryCtaUrl: 'https://calendly.com/michel-scalingx/transformation',

// Neu:
primaryCtaEn: 'Learn More About Predictable Acquisition',
primaryCtaDe: 'Mehr über Predictable Acquisition',
primaryCtaAction: 'learn-more',
primaryCtaUrl: '/solutions/power-up/cac-crisis',
```

---

## Technische Details

### SolutionTileCard Verhalten

Die Komponente `SolutionTileCard.tsx` (Zeile 50-56) behandelt den `primaryCtaAction` Typ bereits korrekt:

```tsx
const handlePrimaryClick = () => {
  if (tile.primaryCtaAction === 'external' || tile.primaryCtaAction === 'book-call' || tile.primaryCtaAction === 'open-tool') {
    window.open(tile.primaryCtaUrl, '_blank');
  } else if (tile.primaryCtaUrl) {
    window.location.href = tile.primaryCtaUrl;  // ← wird für 'learn-more' verwendet
  }
};
```

Mit `primaryCtaAction: 'learn-more'` wird die URL intern navigiert (kein neues Tab), was für die Landing Page korrekt ist.

---

## Vorschau der Kachel nach Änderung

```text
┌────────────────────────────────────────┐
│  [Rocket Icon]                         │
│                                        │
│  Power Up  €23.6K                      │
│                                        │
│  Power Up: Predictable Acquisition     │
│                                        │
│  Problem: Your CAC is exploding...     │
│  Solution: We fix your CAC crisis...   │
│                                        │
│  ✓ CAC reduction: -20-30%              │
│  ✓ Win rate increase: +10-15pp         │
│  ✓ Pipeline predictability: ±10%       │
│                                        │
│  [Learn More About Predictable        ]│
│  [         Acquisition →              ]│
│                                        │
│  See case study                        │
└────────────────────────────────────────┘
```
