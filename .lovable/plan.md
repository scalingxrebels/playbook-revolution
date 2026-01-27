

# Plan: Team-Fotos Korrekturen

## Problem

Die vorherige Änderung hat nicht das gewünschte Ergebnis erzielt:
- **Alban Halili**: `object-bottom` hat das Bild nach oben geschoben statt nach unten
- **Florian Metzger**: Fehlt die Verschiebung nach unten (nur Zoom war angewendet)

---

## Korrigierte Umsetzung

### Änderung in `src/pages/About.tsx` (Zeilen 241-247)

**Aktuell (falsch):**
```tsx
className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
  member.name === 'Florian Metzger' 
    ? 'scale-125' 
    : member.name === 'Alban Halili' 
      ? 'object-bottom' 
      : ''
}`}
```

**Korrigiert:**
```tsx
className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
  member.name === 'Florian Metzger' 
    ? 'scale-125 translate-y-[15%]' 
    : member.name === 'Alban Halili' 
      ? 'object-top' 
      : ''
}`}
```

---

## Erklärung der Korrekturen

| Team-Mitglied | Vorher | Nachher | Effekt |
|---------------|--------|---------|--------|
| Michel Lason | (keine) | (keine) | Bleibt unverändert |
| Florian Metzger | `scale-125` | `scale-125 translate-y-[15%]` | Zoom + Bild 15% nach unten verschieben |
| Alban Halili | `object-bottom` | `object-top` | Bild fokussiert auf den oberen Bereich → Kopf wird nach unten in den sichtbaren Bereich geschoben |

---

## Betroffene Datei

| Datei | Änderung |
|-------|----------|
| `src/pages/About.tsx` | Zeilen 241-247: Korrigierte CSS-Klassen |

---

## Ergebnis

Nach der Korrektur:
- Michel Lason: Unverändert
- Florian Metzger: Gezoomt (125%) + 15% nach unten verschoben
- Alban Halili: Fokus auf oberen Bildbereich (Kopf rutscht nach unten in den sichtbaren Bereich)

