
# Florian Metzger Bild Update auf About-Seite

## Übersicht

Ersetzt das aktuelle Bild von Florian Metzger durch das neue quadratische Bild und entfernt die speziellen CSS-Transformationen, sodass es sich wie Michel Lasons Bild verhält.

## Änderungen

### 1. Bild kopieren

Das hochgeladene Bild in den public-Ordner kopieren und das bestehende Bild überschreiben:

```
user-uploads://Flo_Square.png → public/images/team-florian.png
```

### 2. CSS-Anpassung in About.tsx

**Datei:** `src/pages/About.tsx`  
**Zeilen:** 241-247

Aktuelle Logik entfernt die spezielle Behandlung für Florian:

| Vorher | Nachher |
|--------|---------|
| `member.name === 'Florian Metzger' ? 'scale-150 translate-y-[20%]'` | Keine spezielle Behandlung |

**Änderung:**
```tsx
// Vorher (Zeile 241-247):
className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
  member.name === 'Florian Metzger' 
    ? 'scale-150 translate-y-[20%]' 
    : member.name === 'Alban Halili' 
      ? 'object-top' 
      : ''
}`}

// Nachher:
className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
  member.name === 'Alban Halili' ? 'object-top' : ''
}`}
```

## Ergebnis

- Florian Metzgers Bild wird wie Michel Lasons Bild behandelt (keine speziellen Transformationen)
- Das quadratische Format des neuen Bildes passt perfekt in den `aspect-square` Container
- Alban Halilis Bild behält weiterhin `object-top` für korrekte Positionierung

## Zusammenfassung

| Datei | Änderung |
|-------|----------|
| `public/images/team-florian.png` | Neues Bild überschreiben |
| `src/pages/About.tsx` | CSS-Logik vereinfachen (Zeile 241-247) |
