
# Outline Button Textfarbe in dark-section Fix

## Problem-Analyse

Der `outline` Button-Variant in `button.tsx` hat keine explizite Textfarbe:

```tsx
outline: "border-2 border-foreground/20 bg-background hover:border-foreground/40 hover:bg-muted/50",
```

Ohne `text-foreground` Klasse erbt der Button die Textfarbe nicht korrekt von `.dark-section`. Die CSS-Variable `--foreground` ist zwar richtig gesetzt, aber ohne explizite Tailwind-Klasse wird sie nicht angewendet.

## Lösung

Die `outline` Variante in `src/components/ui/button.tsx` um `text-foreground` erweitern.

### Änderung in button.tsx

| Variante | Aktuell | Neu |
|----------|---------|-----|
| `outline` | `border-2 border-foreground/20 bg-background hover:border-foreground/40 hover:bg-muted/50` | `border-2 border-foreground/20 bg-background text-foreground hover:border-foreground/40 hover:bg-muted/50` |

### Code-Änderung

```tsx
// Zeile 14 in buttonVariants
outline: "border-2 border-foreground/20 bg-background text-foreground hover:border-foreground/40 hover:bg-muted/50",
```

## Warum das funktioniert

Mit `text-foreground` wird explizit `color: hsl(var(--foreground))` angewendet. Da `.dark-section` die Variable `--foreground: 40 20% 95%` (hell) setzt, wird der Text im Hero automatisch hell dargestellt.

## Betroffene Dateien

| Datei | Änderung |
|-------|----------|
| `src/components/ui/button.tsx` | `text-foreground` zur outline-Variante hinzufügen |

## Ergebnis

- Outline Buttons in allen `.dark-section` Bereichen zeigen hellen Text
- Konsistente Darstellung auf allen Landing Pages
- Keine individuellen Fixes in einzelnen Seiten nötig
