
# Fix: Richtiges Inquiry-Formular einbetten

## Problem

Ich habe versehentlich die falsche Fillout-Form-ID (`fzeJtLouULus`) verwendet - das ist die **Download**-Form, nicht die **Inquiry**-Form.

## Lösung

Da das Inquiry-Formular über den URL-Slug `scalingx.fillout.com/inquiry` erreichbar ist, verwende ich einen iframe mit dynamischer Größenanpassung statt des data-fillout-id Ansatzes. Das ist zuverlässiger, da wir so direkt die URL nutzen können.

---

## Änderungen

| Datei | Änderung |
|-------|----------|
| `src/components/homepage/FinalCTAOptimized.tsx` | Form-ID `fzeJtLouULus` durch iframe mit URL `scalingx.fillout.com/inquiry` ersetzen |

---

## Code-Änderung

### Aktuell (falsch - Download-Form)
```tsx
<div
  data-fillout-id="fzeJtLouULus"  // ← Das ist die Download-Form!
  data-fillout-embed-type="standard"
  data-fillout-dynamic-resize
  data-fillout-inherit-parameters
  data-fillout-parameters={buildFilloutParams()}
  style={{ 
    width: '100%', 
    minHeight: '600px',
  }}
/>
```

### Neu (richtig - Inquiry-Form via iframe)
```tsx
<iframe
  src={`https://scalingx.fillout.com/inquiry?${buildFilloutParams()}`}
  style={{ 
    width: '100%', 
    height: '600px', 
    border: 'none' 
  }}
  title="Inquiry Form"
/>
```

---

## Technische Details

- Die Inquiry-Form URL ist `https://scalingx.fillout.com/inquiry`
- Die `buildFilloutParams()` Funktion fügt UTM-Parameter und `source=website` hinzu
- Der iframe erlaubt eine feste Höhe von 600px, was für das Inquiry-Formular ausreichend sein sollte

---

## Ergebnis

Nach dieser Korrektur:
- Das richtige **Inquiry**-Formular (Anfrage) wird angezeigt
- UTM-Parameter werden weiterhin korrekt übergeben
- `source=website` wird für das Tracking hinzugefügt
