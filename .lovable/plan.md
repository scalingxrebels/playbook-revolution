
# Fix: Explizite Farbklassen für Hero-Texte in CaseDetail.tsx

## Problem-Analyse

Das Screenshot zeigt, dass trotz `dark-section` einige Texte im Light Mode nicht lesbar sind:
1. **Headline** (Zeile 58): Keine explizite Farbklasse definiert
2. **Investment-Wert** (Zeile 84): `font-semibold` ohne Farbklasse
3. **Timeline-Wert** (Zeile 93): `font-semibold` ohne Farbklasse

Die `.dark-section` CSS-Variablen werden zwar überschrieben, aber diese Elemente erben nicht automatisch `text-foreground` weil sie keine Farbklasse haben.

## Lösung

Explizite Tailwind-Klasse `text-foreground` zu den betroffenen Elementen hinzufügen:

### Datei: `src/pages/CaseDetail.tsx`

| Zeile | Element | Aktuell | Neu |
|-------|---------|---------|-----|
| 58 | Headline h1 | `font-bold mb-4` | `font-bold mb-4 text-foreground` |
| 84 | Investment-Wert | `font-semibold` | `font-semibold text-foreground` |
| 93 | Timeline-Wert | `font-semibold` | `font-semibold text-foreground` |

## Code-Änderungen

```tsx
// Zeile 58: Headline
<h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">

// Zeile 84: Investment-Wert  
<span className="font-semibold text-foreground">{caseStudy.investment}</span>

// Zeile 93: Timeline-Wert
<span className="font-semibold text-foreground">{caseStudy.timeline}</span>
```

## Erwartetes Ergebnis

Nach dieser Änderung werden alle Texte im Hero-Bereich korrekt angezeigt:
- Headline: Heller Text auf dunklem Hintergrund
- Investment & Timeline Werte: Heller Text, gut lesbar
- ROI bleibt unverändert (nutzt bereits `text-emerald-500`)

## Präventive Maßnahme

Diese Lösung ist lokal für CaseDetail.tsx. Für eine systematischere Lösung könnte man:
1. Ein Audit aller Deep Space Hero Sektionen durchführen
2. Sicherstellen, dass alle Text-Elemente explizite Farbklassen haben
