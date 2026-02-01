

# Fix: Mobile Navigation Opacity (Inline Styles)

## Problem-Analyse

Die Tailwind-Klasse `bg-[#FAF9F7]/80` wird nicht korrekt interpretiert. Die Opazitäts-Modifikation (`/80`) funktioniert nicht zuverlässig mit arbiträren Hex-Werten in manchen Build-Konfigurationen.

## Lösung

Wir verwenden inline styles mit RGBA-Werten, um die 80% Opazität garantiert anzuwenden.

## Änderungen

### Datei: `src/components/Navigation.tsx`

**Zeile 131 - Mobile Overlay Container:**

```tsx
// Aktuell (funktioniert nicht):
<div className="md:hidden fixed inset-0 top-16 z-40 animate-fade-in bg-[#FAF9F7]/80 dark:bg-[#0F0F14]/80 backdrop-blur-xl">

// Neu - mit inline styles:
<div 
  className="md:hidden fixed inset-0 top-16 z-40 animate-fade-in backdrop-blur-xl"
  style={{ 
    backgroundColor: theme === 'dark' ? 'rgba(15, 15, 20, 0.8)' : 'rgba(250, 249, 247, 0.8)'
  }}
>
```

## Was passiert

| Element | Änderung |
|---------|----------|
| Mobile Overlay | Inline `style` mit RGBA-Werten für 80% Opazität |
| `backdrop-blur-xl` | Bleibt als Tailwind-Klasse (funktioniert) |
| Desktop Navigation | Keine Änderung |

## Technische Details

- **Light Mode:** `rgba(250, 249, 247, 0.8)` = `#FAF9F7` mit 80% Opazität
- **Dark Mode:** `rgba(15, 15, 20, 0.8)` = `#0F0F14` mit 80% Opazität
- Der `theme` Wert kommt aus dem bestehenden `useTheme()` Hook (bereits importiert)

## Erwartetes Ergebnis

Das Mobile-Menü wird mit 80% Opazität und Backdrop-Blur angezeigt, sodass der Hero-Bereich subtil durchschimmert, während die Navigation-Links gut lesbar bleiben.

