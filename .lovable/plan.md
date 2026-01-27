

# Plan: CTAs aus SolutionHero entfernen

## Ziel
Die Solutions-Seite an die Playbooks-Seite angleichen, indem die beiden CTA-Buttons ("Solutions erkunden" / "Kostenloses Gespräch") unter der Hero-Subheadline entfernt werden.

## Aenderung

### Datei: `src/components/solutions/SolutionHero.tsx`

**Zu entfernen:**
- Zeilen 33-51: Der komplette `<div>` Block mit den zwei Buttons
- Zeilen 4: Der Import `Button` (wird nicht mehr benoetigt)
- Zeilen 4: Die Imports `ArrowRight, Phone` (werden nicht mehr benoetigt)
- Zeilen 10-12: Die Funktion `scrollToChallenges` (wird nicht mehr benoetigt)

**Vorher:**
```tsx
<SharedHero ...props stats={stats}>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Button ...>Solutions erkunden</Button>
    <Button ...>Kostenloses Gespraech</Button>
  </div>
</SharedHero>
```

**Nachher:**
```tsx
<SharedHero ...props stats={stats} />
```

## Ergebnis

| Seite | Vorher | Nachher |
|-------|--------|---------|
| /solutions | 2 CTAs unter Hero-Subheadline | Keine CTAs - direkt Stats |
| /playbooks | Keine CTAs | Keine CTAs (unveraendert) |

Die Hero-Sections beider Seiten sind dann visuell konsistent.

