

# Fix: Inquiry-Formular Höhe weiter erhöhen

## Problem

Aus dem Screenshot ersichtlich:
- Das Formular zeigt einen Scrollbalken auf der rechten Seite
- 750px Höhe reicht nicht aus, um das komplette Formular ohne Scrollen anzuzeigen
- Der "Absenden"-Button ist zwar sichtbar, aber es gibt noch Inhalte die gescrollt werden müssen

## Lösung

Die iframe-Höhe von 750px auf **900px** erhöhen, damit das Formular vollständig ohne Scrollen angezeigt wird.

---

## Änderungen

| Datei | Änderung |
|-------|----------|
| `src/components/homepage/FinalCTAOptimized.tsx` | iframe-Höhe von 750px auf 900px erhöhen |

---

## Code-Änderung

### Aktuell (Zeile 223-231)
```tsx
<iframe
  src={`https://scalingx.fillout.com/inquiry?${buildFilloutParams()}`}
  style={{ 
    width: '100%', 
    height: '750px',   // ← Immer noch zu klein
    border: 'none' 
  }}
  title="Inquiry Form"
/>
```

### Neu
```tsx
<iframe
  src={`https://scalingx.fillout.com/inquiry?${buildFilloutParams()}`}
  style={{ 
    width: '100%', 
    height: '900px',   // ← Größer für vollständige Anzeige
    border: 'none' 
  }}
  title="Inquiry Form"
/>
```

---

## Ergebnis

- Der schöne Rahmen bleibt unverändert
- Das Formular wird vollständig ohne Scrollbalken angezeigt
- Alle Formularfelder sind sichtbar ohne zu scrollen

