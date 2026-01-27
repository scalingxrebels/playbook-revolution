

# Plan: Responsive Zwei-Zeilen-Navigation für Challenges

## Problem
Die 10 Challenge-Tabs passen auf Desktop nicht in eine Zeile (ca. 1100px benötigt), aber `md:flex-nowrap` erzwingt eine einzeilige Darstellung mit horizontalem Scrollen.

## Lösung
Einfach `flex-wrap` auf allen Bildschirmgrößen erlauben. Die Tabs verteilen sich automatisch auf 2 Zeilen, wenn nötig.

## Änderung

### Datei: `src/components/solutions/ChallengeTabNavigation.tsx`

**Zeile 122 ändern:**

```tsx
// VORHER:
<div className="flex items-center gap-2 min-w-max px-6 md:px-0 md:justify-center py-1 flex-wrap md:flex-nowrap">

// NACHHER:
<div className="flex items-center gap-2 px-6 md:px-0 justify-center py-1 flex-wrap">
```

**Zusätzlich entfernen:**
- `min-w-max` (verhindert Umbruch)
- `md:flex-nowrap` (erzwingt einzeilige Darstellung)
- Scroll-Buttons und Fade-Indikatoren (werden nicht mehr benötigt auf Desktop)

**Aufräumen (optional aber empfohlen):**
- Scroll-Logik (`showLeftFade`, `showRightFade`, `scroll()`) kann vereinfacht werden
- Fade-Indikatoren nur noch für Mobile behalten

## Vereinfachte Version

```tsx
// Container - zentriert, wrap erlaubt
<div className="flex items-center gap-2 justify-center flex-wrap py-2">
  {challenges.map(...)}
</div>
```

## Visuelles Ergebnis

**Desktop (1920px):**
```
┌─────────────────────────────────────────────────────────────┐
│  [All] [CAC Crisis] [Growth Stalled] [Pricing] [CS Broken] │
│        [Scaling Chaos] [AI Transform] [Board] [Portfolio]  │
│                        [Orientation]                        │
└─────────────────────────────────────────────────────────────┘
```

Oder bei breiterem Container (2 Zeilen):
```
┌─────────────────────────────────────────────────────────────┐
│  [All] [CAC Crisis] [Growth Stalled] [Pricing] [CS Broken] │
│  [Scaling Chaos] [AI Transform] [Board] [Portfolio] [Orient]│
└─────────────────────────────────────────────────────────────┘
```

**Mobile:** Bleibt horizontal scrollbar (wie bisher)

## Betroffene Dateien

| Datei | Änderung |
|-------|----------|
| `src/components/solutions/ChallengeTabNavigation.tsx` | `flex-wrap` auf Desktop, `min-w-max` entfernen |

## Vorteile

- **Minimal-invasiv**: Eine Zeile Code ändern
- **Automatisch responsive**: Browser entscheidet, wann umgebrochen wird
- **Sofort sichtbar**: Alle Challenges above the fold
- **Kein JavaScript**: Rein CSS-basierte Lösung

