

# Plan: Florians Foto anpassen - Größerer Kopf + nach unten verschieben

## Problem

Im Screenshot ist sichtbar:
- **Michel Lason**: Kopf groß und gut positioniert ✓
- **Alban Halili**: Kopf groß und gut positioniert ✓
- **Florian Metzger**: Kopf zu klein, Bild zu weit oben ✗

---

## Lösung

Die CSS-Klassen für Florian anpassen:

| Eigenschaft | Aktuell | Neu | Effekt |
|-------------|---------|-----|--------|
| Zoom | `scale-125` | `scale-150` | Stärkerer Zoom (150%) für größeren Kopf |
| Positionierung | `object-top` | `translate-y-[15%]` | Bild nach unten verschieben |

---

## Änderung in `src/pages/About.tsx` (Zeile 243)

**Aktuell:**
```tsx
member.name === 'Florian Metzger' 
  ? 'scale-125 object-top'
```

**Neu:**
```tsx
member.name === 'Florian Metzger' 
  ? 'scale-150 translate-y-[15%]'
```

---

## Technische Erklärung

- `scale-150`: Zoomt das Bild auf 150% (statt 125%), wodurch der Kopf größer erscheint
- `translate-y-[15%]`: Verschiebt das gezoomte Bild um 15% nach unten, sodass der Kopf in den sichtbaren Bereich rückt
- `object-top` wird entfernt, da `translate-y` eine präzisere Kontrolle bietet

---

## Betroffene Datei

| Datei | Zeile | Änderung |
|-------|-------|----------|
| `src/pages/About.tsx` | 243 | `scale-150 translate-y-[15%]` statt `scale-125 object-top` |

---

## Ergebnis

Nach der Änderung sollten alle drei Team-Mitglieder harmonische Kopfgrößen und Positionierungen haben.

