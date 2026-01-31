
# Mobile Navigation Lesbarkeit Fix

## Problem-Analyse

### 1. Ghost Button Variant
```tsx
// button.tsx - ghost hat keine Standard-Textfarbe
ghost: "hover:bg-muted/50 hover:text-foreground",
```
Ohne explizite `text-foreground` Klasse erbt das Hamburger-Icon keine lesbare Farbe.

### 2. Mobile Menu Overlay
```tsx
// Navigation.tsx - Zeile 131
<div className="md:hidden fixed inset-0 top-16 bg-white dark:bg-background z-40">
```
Problem: `bg-white` ist hardcoded, aber im Dark Mode wird `dark:bg-background` verwendet. Das `text-foreground` auf den Links funktioniert nicht konsistent.

### 3. Fehlende Farb-Isolation
Die Navigation schwebt über `.dark-section` Hero-Bereichen und kann Farbvariablen erben.

## Lösung

### Änderung 1: Ghost Button Variant mit expliziter Textfarbe

| Datei | Zeile | Aktuell | Neu |
|-------|-------|---------|-----|
| `src/components/ui/button.tsx` | 15 | `ghost: "hover:bg-muted/50 hover:text-foreground"` | `ghost: "text-foreground hover:bg-muted/50 hover:text-foreground"` |

### Änderung 2: Mobile Menu Overlay mit korrekten Hintergrund- und Textfarben

| Datei | Zeile | Änderung |
|-------|-------|----------|
| `src/components/Navigation.tsx` | 131 | `bg-white dark:bg-background` → `bg-background` |

Dies verwendet die CSS-Variable, die im Light Mode `hsl(40 20% 98%)` (warm off-white) ist.

### Änderung 3: Navigation Bar isoliert von dark-section

Die Nav-Bar selbst braucht eine explizite Farbumgebung:

```tsx
// Zeile 25 - Nav wrapper
<nav className="fixed top-0 left-0 right-0 z-50 transition-colors 
  bg-white/95 dark:bg-background/80 
  text-foreground  // NEU: Explizite Textfarbe hinzufügen
  ...">
```

Allerdings - da `.dark-section` CSS-Variablen setzt und die Nav ÜBER der Section schwebt (fixed positioning), werden die Variablen nicht vererbt. Das Problem liegt eher bei den Button-Varianten.

## Zusammenfassung der Änderungen

| Datei | Änderung |
|-------|----------|
| `src/components/ui/button.tsx` | `text-foreground` zur `ghost` Variante hinzufügen |
| `src/components/Navigation.tsx` | Mobile Menu Overlay: `bg-white` → `bg-background` ersetzen |

## Erwartetes Ergebnis

- Hamburger-Menu-Icon ist in Light und Dark Mode sichtbar
- Mobile Navigation Links sind auf allen Seiten lesbar
- Konsistente Farbdarstellung unabhängig vom aktuellen Theme
