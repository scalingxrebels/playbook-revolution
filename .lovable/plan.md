

# Plan: Neues Florian-Foto ersetzen und anpassen

## Zusammenfassung

Das Bild von Michel und Alban ist perfekt. Jetzt wird das neue Foto von Florian hinzugefügt und mit Zoom + Object-Top-Ausrichtung angepasst.

---

## Schritt 1: Neues Bild kopieren

Das hochgeladene Bild wird in den public-Ordner kopiert und ersetzt das bestehende Florian-Foto:

| Quelle | Ziel |
|--------|------|
| `user-uploads://Bild_Flo.jpg` | `public/images/team-florian.png` |

---

## Schritt 2: CSS-Klassen anpassen

### Änderung in `src/pages/About.tsx` (Zeilen 241-247)

**Aktuell:**
```tsx
className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
  member.name === 'Florian Metzger' 
    ? 'scale-125 translate-y-[15%]' 
    : member.name === 'Alban Halili' 
      ? 'object-top' 
      : ''
}`}
```

**Neu:**
```tsx
className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
  member.name === 'Florian Metzger' 
    ? 'scale-125 object-top' 
    : member.name === 'Alban Halili' 
      ? 'object-top' 
      : ''
}`}
```

---

## Erklärung der Änderungen

| Aktion | Beschreibung |
|--------|--------------|
| Neues Bild | Das hochgeladene professionelle Foto ersetzt das alte |
| `scale-125` | Bild auf 125% gezoomt (reinzoomen) |
| `object-top` | Bild am oberen Rand ausgerichtet (Kopf im Fokus) |
| `translate-y-[15%]` entfernt | Nicht mehr nötig mit dem neuen Bild |

---

## Betroffene Dateien

| Datei | Änderung |
|-------|----------|
| `public/images/team-florian.png` | Neues Bild ersetzen |
| `src/pages/About.tsx` | Zeile 243: `scale-125 object-top` statt `scale-125 translate-y-[15%]` |

---

## Ergebnis

Nach der Änderung:
- Michel Lason: Unverändert (perfekt)
- Alban Halili: Unverändert (perfekt)
- Florian Metzger: Neues Foto mit Zoom (125%) und Top-Ausrichtung

