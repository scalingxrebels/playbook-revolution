

# Florian Metzger Bild auf Expertise-Seite anpassen

## Aktuelle Situation

**Datei:** `src/components/ResearchHub.tsx` (Zeilen 186-187)

```tsx
image: '/images/team-florian.png',
imageStyle: 'scale-150 translate-y-[20%]',
```

Das Portrait-Bild wird mit Scaling und Verschiebung angepasst, um in den Container zu passen.

## Option A: Quadratisches Bild verwenden (empfohlen)

Wie auf der About-Seite das quadratische Bild verwenden und die speziellen Transformationen entfernen:

```tsx
// Vorher:
image: '/images/team-florian.png',
imageStyle: 'scale-150 translate-y-[20%]',

// Nachher:
image: '/images/team-florian-square.png',
imageStyle: '',
```

## Option B: Portrait-Bild beibehalten

Das aktuelle Setup beibehalten - das Portrait-Bild mit den CSS-Transformationen sollte funktionieren.

## Empfehlung

**Option A** für Konsistenz mit der About-Seite. Das quadratische Bild passt besser in die Team-Karten.

## Änderung

| Datei | Zeile | Änderung |
|-------|-------|----------|
| `src/components/ResearchHub.tsx` | 186 | `image: '/images/team-florian-square.png'` |
| `src/components/ResearchHub.tsx` | 187 | `imageStyle: ''` |

