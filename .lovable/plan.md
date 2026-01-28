

# Plan: DealDeskr.io Kachel visuell harmonisieren

## Problem

DealDeskr.io (kostenpflichtig) hat eine andere Umrandung und Button-Farbe als KeyPitchs (kostenlos), obwohl beide zur Kategorie "AI-Powered Tools" gehoeren.

| Element | KeyPitchs (Free) | DealDeskr.io (Paid) |
|---------|------------------|---------------------|
| Umrandung | Orange (`border-accent/50`) | Standard (grau) |
| Button | Farbiger Gradient | Outline (grau) |

## Ursache

In `SolutionTileCard.tsx` wird das Styling an `priceTag === 'free'` gekoppelt:
- Zeile 81: `tile.priceTag === 'free' && "border-accent/50"`
- Zeile 189-193: Button-Gradient nur fuer Free-Kacheln

## Loesung

Die Styling-Logik erweitern, sodass **alle Tools-Kacheln** (`solutionType === 'tools'`) das Akzent-Styling erhalten - unabhaengig vom Preis.

**Datei:** `src/components/solutions/SolutionTileCard.tsx`

### Aenderung 1: Umrandung (Zeile 78-82)

```typescript
// Aktuell:
<Card 
  className={cn(
    "group relative h-full flex flex-col overflow-hidden transition-all duration-300",
    "hover:shadow-lg hover:shadow-accent/10 hover:border-accent/30",
    tile.priceTag === 'free' && "border-accent/50"
  )}

// Neu:
<Card 
  className={cn(
    "group relative h-full flex flex-col overflow-hidden transition-all duration-300",
    "hover:shadow-lg hover:shadow-accent/10 hover:border-accent/30",
    (tile.priceTag === 'free' || tile.solutionType === 'tools') && "border-accent/50"
  )}
```

### Aenderung 2: Button-Styling (Zeile 185-201)

```typescript
// Aktuell:
<Button 
  onClick={handlePrimaryClick}
  className={cn(
    "w-full",
    tile.priceTag === 'free' 
      ? "bg-gradient-to-r from-primary to-primary/80" 
      : ""
  )}
  variant={tile.priceTag === 'free' ? 'default' : 'outline'}
>

// Neu:
const useAccentStyle = tile.priceTag === 'free' || tile.solutionType === 'tools';

<Button 
  onClick={handlePrimaryClick}
  className={cn(
    "w-full",
    useAccentStyle && "bg-gradient-to-r from-primary to-primary/80"
  )}
  variant={useAccentStyle ? 'default' : 'outline'}
>
```

## Auswirkung

Nach der Aenderung haben **alle Tools-Kacheln** (lasr.io, ROI Calculator, Scaling Calculator, KeyPitchs, DealDeskr.io) das gleiche visuelle Styling:
- Orange Umrandung
- Farbiger Gradient-Button

## Zusammenfassung

| Datei | Aenderung |
|-------|----------|
| `src/components/solutions/SolutionTileCard.tsx` | Styling-Logik um `solutionType === 'tools'` Bedingung erweitern (Zeilen 81 und 185-201) |

