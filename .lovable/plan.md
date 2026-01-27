

# Plan: Team-Fotos individuell anpassen

## Anforderung

Die drei Team-Fotos sollen individuell angepasst werden:
- **Michel Lason**: Bleibt unverändert
- **Florian Metzger**: Reinzoomen (Kopf größer darstellen)
- **Alban Halili**: Bild nach unten schieben (mehr vom Kopf sichtbar)

---

## Technische Umsetzung

### Änderung in `src/pages/About.tsx` (Zeilen 238-241)

Die `img`-Klasse wird dynamisch basierend auf dem Team-Mitglied gesetzt:

**Vorher:**
```tsx
<img 
  src={member.image} 
  alt={member.name}
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
/>
```

**Nachher:**
```tsx
<img 
  src={member.image} 
  alt={member.name}
  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
    member.name === 'Florian Metzger' 
      ? 'scale-125' 
      : member.name === 'Alban Halili' 
        ? 'object-bottom' 
        : ''
  }`}
/>
```

---

## Erklärung der CSS-Klassen

| Team-Mitglied | Klasse | Effekt |
|---------------|--------|--------|
| Michel Lason | (keine) | Bleibt wie bisher |
| Florian Metzger | `scale-125` | Bild wird auf 125% gezoomt → Kopf erscheint größer |
| Alban Halili | `object-bottom` | Bild wird am unteren Rand ausgerichtet → oberer Bereich (Kopf) wird mehr sichtbar |

---

## Betroffene Datei

| Datei | Änderung |
|-------|----------|
| `src/pages/About.tsx` | Zeilen 238-241: Dynamische Bildklasse pro Team-Mitglied |

---

## Ergebnis

Nach der Änderung:
- Michel Lason bleibt unverändert
- Florian Metzger erscheint näher/größer
- Alban Halili zeigt mehr vom oberen Bildbereich (Kopf)

