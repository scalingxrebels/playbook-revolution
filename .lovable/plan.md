

# Fix: Inquiry-Formular füllt den Rahmen perfekt aus

## Problem

- Der Container-Rahmen (rounded-3xl border) sieht super aus und soll bleiben
- Das Formular füllt den Rahmen aber nicht vollständig aus - es ist zu klein
- Die aktuelle Höhe von 600px ist nicht ausreichend für das komplette Formular

## Lösung

Die iframe-Höhe von 600px auf **750px** erhöhen, damit das Formular den schönen Rahmen besser ausfüllt. Der Container bleibt exakt wie er ist.

---

## Änderungen

| Datei | Änderung |
|-------|----------|
| `src/components/homepage/FinalCTAOptimized.tsx` | iframe-Höhe von 600px auf 750px erhöhen |

---

## Code-Änderung

### Aktuell (Zeile 223-231)
```tsx
<iframe
  src={`https://scalingx.fillout.com/inquiry?${buildFilloutParams()}`}
  style={{ 
    width: '100%', 
    height: '600px',   // ← Zu klein
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
    height: '750px',   // ← Größer, füllt den Rahmen
    border: 'none' 
  }}
  title="Inquiry Form"
/>
```

---

## Ergebnis

- Der schöne Rahmen (rounded-3xl, border, backdrop-blur) bleibt unverändert
- Das Formular ist größer und füllt den Rahmen besser aus
- Alle Formularfelder sind vollständig sichtbar

