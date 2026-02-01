
# Fix: Mobile Menu Overlay Lesbarkeit

## Problem-Analyse

Auf den Screenshots ist zu sehen, dass das Mobile-Menü-Overlay (im Dark Mode) den Hero-Content durchscheinen lässt. Die Menü-Einträge "Home", "Solutions", "Playbooks" etc. überlagern sich mit dem Hero-Text "From €2M to €100M ARR".

## Ursache

Das Overlay hat `z-40`, während andere Elemente möglicherweise einen höheren Z-Index haben. Zusätzlich könnte das `animate-fade-in` während der Animation Probleme verursachen.

## Lösung

1. **Z-Index erhöhen**: Von `z-40` auf `z-50` um über allen anderen Elementen zu liegen
2. **Opacity verstärken**: `bg-opacity-100` explizit setzen
3. **Backup-Farbe**: Falls die Tailwind-Klasse nicht greift, inline style als Fallback

## Code-Änderung

**Datei:** `src/components/Navigation.tsx` (Zeile 131)

**Aktuell:**
```tsx
<div className="md:hidden fixed inset-0 top-16 z-40 animate-fade-in bg-[#FAF9F7] dark:bg-[#0F0F14]">
```

**Neu:**
```tsx
<div 
  className="md:hidden fixed inset-0 top-16 z-50 animate-fade-in"
  style={{ backgroundColor: 'var(--mobile-menu-bg, #FAF9F7)' }}
>
```

Mit CSS-Variable in `index.css`:
```css
:root {
  --mobile-menu-bg: #FAF9F7;
}
.dark {
  --mobile-menu-bg: #0F0F14;
}
```

**Alternative (einfacher):**
```tsx
<div className="md:hidden fixed inset-0 top-16 z-50 bg-[#FAF9F7] dark:bg-[#0F0F14]" style={{ opacity: 1 }}>
```

## Technische Details

| Änderung | Wert |
|----------|------|
| Z-Index | `z-40` → `z-50` |
| Animation | `animate-fade-in` entfernen (optional) |
| Opacity | Explizit auf 100% setzen |

## Betroffene Datei

- `src/components/Navigation.tsx` - Zeile 131
