

# Korrektur: Florian Metzger Bild nur auf About-Seite

## Problem

Das Bild `team-florian.png` wurde überschrieben und betrifft nun alle Seiten. Die FM-Detailseite verwendet ein Portrait-Format (3/4), das mit dem neuen quadratischen Bild nicht optimal aussieht.

## Lösung

Zwei separate Bilder verwenden:
- **Quadratisches Bild** für About-Seite: `team-florian-square.png`
- **Portrait-Bild** für FM-Detailseite: `team-florian.png` (wiederherstellen)

## Änderungen

### 1. Neues Bild umbenennen

Das hochgeladene quadratische Bild unter neuem Namen speichern:
```
user-uploads://Flo_Square.png → public/images/team-florian-square.png
```

### 2. Altes Bild wiederherstellen

Das ursprüngliche Portrait-Bild wiederherstellen:
```
public/images/team-florian.png → (vorherige Version aus Git/History)
```

### 3. About.tsx anpassen

**Datei:** `src/pages/About.tsx` (Zeile 98)

```tsx
// Vorher:
image: '/images/team-florian.png',

// Nachher:
image: '/images/team-florian-square.png',
```

## Ergebnis

| Seite | Bild | Format |
|-------|------|--------|
| /about | team-florian-square.png | Quadratisch (neu) |
| /fm | team-florian.png | Portrait 3:4 (original) |
| /expertise | team-florian.png | Portrait (original) |

## Zusammenfassung

| Datei | Änderung |
|-------|----------|
| `public/images/team-florian-square.png` | Neues quadratisches Bild hinzufügen |
| `public/images/team-florian.png` | Altes Portrait-Bild wiederherstellen |
| `src/pages/About.tsx` | Zeile 98: Bildpfad auf `-square.png` ändern |

