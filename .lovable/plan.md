

# Plan: Florians Bild feinjustieren

## Problem

Aktuell:
- **Zoom zu stark**: `scale-150` ist deutlich stärker als bei Michel und Alban
- **Bild noch etwas zu hoch**: Muss 5% weiter nach unten

---

## Lösung

| Eigenschaft | Aktuell | Neu | Effekt |
|-------------|---------|-----|--------|
| Zoom | `scale-150` | `scale-130` | Reduzierter Zoom, harmonischer mit den anderen |
| Position | `translate-y-[15%]` | `translate-y-[20%]` | 5% weiter nach unten |

---

## Änderung in `src/pages/About.tsx` (Zeile 243)

**Aktuell:**
```tsx
member.name === 'Florian Metzger' 
  ? 'scale-150 translate-y-[15%]'
```

**Neu:**
```tsx
member.name === 'Florian Metzger' 
  ? 'scale-[1.3] translate-y-[20%]'
```

---

## Technische Details

- `scale-[1.3]`: Tailwind-Notation für 130% Zoom (zwischen scale-125 und scale-150)
- `translate-y-[20%]`: Verschiebt das Bild um 20% nach unten (5% mehr als vorher)

---

## Betroffene Datei

| Datei | Zeile | Änderung |
|-------|-------|----------|
| `src/pages/About.tsx` | 243 | `scale-[1.3] translate-y-[20%]` statt `scale-150 translate-y-[15%]` |

---

## Ergebnis

Nach der Änderung:
- Florians Zoom ist weniger extrem und passt besser zu Michel und Alban
- Das Bild sitzt 5% tiefer im Rahmen

