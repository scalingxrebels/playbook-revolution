
# Fix: Navigation Glass-Effekt mit 20% Opacity

## Aktuelle Situation

**Zeile 25 in `src/components/Navigation.tsx`:**
```tsx
className="fixed top-0 left-0 right-0 z-50 transition-colors bg-white/95 shadow-sm backdrop-blur-md dark:bg-background/80 dark:backdrop-blur-xl dark:border-b dark:border-border dark:shadow-none"
```

## Problem

Die Navigation ist zu undurchsichtig und der Glas-Effekt kommt nicht zur Geltung.

## Lösung

Opacity auf ca. 20% reduzieren für beide Modi:

| Modus | Aktuell | Neu |
|-------|---------|-----|
| Light Mode | `bg-white/95` | `bg-white/20` |
| Dark Mode | `bg-background/80` | `bg-black/20` |

## Code-Änderung

**Zeile 25 - Neu:**
```tsx
className="fixed top-0 left-0 right-0 z-50 transition-colors bg-white/20 shadow-sm backdrop-blur-md dark:bg-black/20 dark:backdrop-blur-xl dark:border-b dark:border-border dark:shadow-none"
```

## Technische Details

- `bg-white/20`: Weißer Hintergrund mit 20% Deckkraft
- `bg-black/20`: Schwarzer Hintergrund mit 20% Deckkraft  
- `backdrop-blur-md/xl`: Der Blur-Effekt bleibt erhalten und wird durch die reduzierte Opacity besser sichtbar

## Datei

`src/components/Navigation.tsx` - Zeile 25
