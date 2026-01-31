
# Mobile Navigation Fix - Solider Hintergrund + Maximaler Kontrast

## Problem-Diagnose

Der aktuelle Code:
```tsx
<div className="md:hidden fixed inset-0 top-16 bg-background z-40 animate-fade-in">
```

**Kernproblem**: `bg-background` verwendet `hsl(var(--background))` was theoretisch funktionieren sollte, aber:
1. Die CSS-Variable könnte nicht korrekt aufgelöst werden in diesem Kontext
2. Es fehlt `opacity: 1` Garantie
3. Kein Fallback für Edge-Cases

## Lösung: Explizite, hardcoded Hintergrundfarben mit Theme-Switcher

### Änderung 1: Navigation.tsx - Mobile Menu Overlay

**Aktuell (Zeile 131):**
```tsx
<div className="md:hidden fixed inset-0 top-16 bg-background z-40 animate-fade-in">
```

**Neu:**
```tsx
<div className="md:hidden fixed inset-0 top-16 z-40 animate-fade-in bg-[#FAF9F7] dark:bg-[#0F0F14]">
```

- `bg-[#FAF9F7]` = Light Mode warm off-white (entspricht `hsl(40 20% 98%)`)
- `dark:bg-[#0F0F14]` = Dark Mode deep noir (entspricht `hsl(240 15% 6%)`)

### Änderung 2: Explizite Textfarben für Links

**Aktuell (Zeile 140):**
```tsx
className="flex items-center justify-between px-4 py-4 text-2xl font-display italic text-foreground hover:bg-muted/50 transition-colors border-b border-border"
```

**Neu:**
```tsx
className="flex items-center justify-between px-4 py-4 text-2xl font-display italic text-[#1A1A1A] dark:text-[#F5F5F0] hover:bg-black/5 dark:hover:bg-white/10 transition-colors border-b border-[#E5E5E0] dark:border-[#2A2A35]"
```

### Änderung 3: Arrow Icons ebenfalls explizit

**Aktuell (Zeile 145):**
```tsx
<ArrowUpRight className="w-5 h-5 text-muted-foreground" />
```

**Neu:**
```tsx
<ArrowUpRight className="w-5 h-5 text-[#666666] dark:text-[#888888]" />
```

### Änderung 4: Mobile CTA Button

**Aktuell (Zeile 169):**
```tsx
className="w-full bg-foreground text-background font-semibold shadow-brutal hover-brutal"
```

**Neu:**
```tsx
className="w-full bg-[#1A1A1A] dark:bg-[#F5F5F0] text-[#FAFAF9] dark:text-[#0F0F14] font-semibold shadow-brutal hover-brutal"
```

## Zusammenfassung der Änderungen

| Element | Aktuell | Neu (Light) | Neu (Dark) |
|---------|---------|-------------|------------|
| Overlay BG | `bg-background` | `bg-[#FAF9F7]` | `dark:bg-[#0F0F14]` |
| Link Text | `text-foreground` | `text-[#1A1A1A]` | `dark:text-[#F5F5F0]` |
| Link Border | `border-border` | `border-[#E5E5E0]` | `dark:border-[#2A2A35]` |
| Hover BG | `hover:bg-muted/50` | `hover:bg-black/5` | `dark:hover:bg-white/10` |
| Arrow Icon | `text-muted-foreground` | `text-[#666666]` | `dark:text-[#888888]` |
| CTA Button BG | `bg-foreground` | `bg-[#1A1A1A]` | `dark:bg-[#F5F5F0]` |
| CTA Button Text | `text-background` | `text-[#FAFAF9]` | `dark:text-[#0F0F14]` |

## Betroffene Datei

| Datei | Änderung |
|-------|----------|
| `src/components/Navigation.tsx` | Mobile Menu Overlay komplett mit hardcoded Farben |

## Erwartetes Ergebnis

- **100% solider Hintergrund** - kein Durchscheinen mehr
- **Maximaler Kontrast** in Light und Dark Mode
- **Konsistente Darstellung** auf allen Seiten
- **Keine CSS-Variable-Abhängigkeiten** für kritische UI-Elemente
