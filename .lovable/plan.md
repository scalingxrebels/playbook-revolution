

# Plan: Florians Bild leicht nach unten verschieben

## Änderung

Nur die Y-Position anpassen – kein Zoom-Änderung:

| Eigenschaft | Aktuell | Neu |
|-------------|---------|-----|
| Position | `translate-y-[15%]` | `translate-y-[20%]` |
| Zoom | `scale-150` | `scale-150` (unverändert) |

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
  ? 'scale-150 translate-y-[20%]'
```

---

## Betroffene Datei

| Datei | Zeile | Änderung |
|-------|-------|----------|
| `src/pages/About.tsx` | 243 | `translate-y-[20%]` statt `translate-y-[15%]` |

