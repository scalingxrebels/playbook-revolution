

# Fix: Mobile Navigation mit 80% Opazität

## Ziel

- Mobile Hamburger-Menü mit **80% Hintergrund-Opazität** + Backdrop-Blur für Glaseffekt
- Desktop Navigation bleibt **unverändert** (beide Modes)
- Text im Mobile-Menü bleibt **100% opak** für Lesbarkeit

## Änderungen

### Datei: `src/components/Navigation.tsx`

**Zeile 131 - Mobile Overlay Container:**

```tsx
// Aktuell:
<div className="md:hidden fixed inset-0 top-16 z-40 animate-fade-in bg-[#FAF9F7] dark:bg-[#0F0F14]">

// Neu - 80% Opazität mit Backdrop-Blur:
<div className="md:hidden fixed inset-0 top-16 z-40 animate-fade-in bg-[#FAF9F7]/80 dark:bg-[#0F0F14]/80 backdrop-blur-xl">
```

## Was passiert

| Element | Änderung |
|---------|----------|
| Mobile Overlay | `bg-[#FAF9F7]/80` (Light) / `bg-[#0F0F14]/80` (Dark) + `backdrop-blur-xl` |
| Desktop Navigation | Keine Änderung |
| Mobile Texte | Bleiben 100% opak (keine Änderung nötig) |

## Visueller Effekt

- **Light Mode:** Heller, semi-transparenter Hintergrund mit Blur → Hero-Elemente schimmern subtil durch
- **Dark Mode:** Dunkler, semi-transparenter Hintergrund mit Blur → Ähnlich wie Desktop-Navigation

Das `backdrop-blur-xl` sorgt für einen eleganten Glaseffekt, der die Lesbarkeit trotz Transparenz gewährleistet.

