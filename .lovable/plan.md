

# Plan: Team-Fotos Kopfgrößen angleichen

## Problem

Auf der About-Seite haben die drei Team-Fotos unterschiedliche Kopfgrößen:
- **Michel Lason** (links): Kopf erscheint kleiner, da das Foto weiter entfernt aufgenommen wurde
- **Alban Halili** und **Florian Metzger**: Köpfe erscheinen größer, da die Portraits näher zugeschnitten sind

## Lösungsansatz

Da die Original-Fotos unterschiedliche Zoom-Level haben, passen wir das Rendering individuell an:
- Michel Lasons Bild wird etwas **vergrößert** (gezoomt), damit sein Kopf größer erscheint
- Die anderen Bilder behalten ihre Standardgröße oder werden leicht angepasst

## Technische Umsetzung

### Änderung in `src/pages/About.tsx`

**Zeilen 237-242** anpassen: Die img-Klasse wird dynamisch basierend auf dem Team-Mitglied gesetzt:

```tsx
{/* Vorher: */}
<div className="aspect-square bg-muted relative overflow-hidden">
  <img 
    src={member.image} 
    alt={member.name}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />

{/* Nachher: */}
<div className="aspect-square bg-muted relative overflow-hidden">
  <img 
    src={member.image} 
    alt={member.name}
    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
      member.name === 'Michel Lason' 
        ? 'scale-125 object-top' 
        : ''
    }`}
  />
```

### Erklärung

| Team-Mitglied | Anpassung | Effekt |
|---------------|-----------|--------|
| Michel Lason | `scale-125 object-top` | Bild wird 125% gezoomt, fokussiert auf den oberen Bereich → Kopf erscheint größer |
| Alban Halili | Keine | Bleibt wie ist |
| Florian Metzger | Keine | Bleibt wie ist |

## Betroffene Dateien

| Datei | Änderung |
|-------|----------|
| `src/pages/About.tsx` | Zeilen 238-241: Dynamische Bildklasse für Michel Lason |

## Ergebnis

Nach der Änderung erscheinen alle drei Köpfe in ähnlicher Größe, was ein harmonischeres Team-Grid erzeugt.

