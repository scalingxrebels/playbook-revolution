
# Systematische Lösung: Deep Space Hero Kontrast-Problem

## Problem-Diagnose

Das Screenshot zeigt, dass im Light Mode der Text auf dunklen "Deep Space" Hero-Sektionen fast unsichtbar ist. 

**Ursache:** Die CSS-Klasse `.dark-section` (definiert in `index.css` Zeilen 133-161) überschreibt die Theme-Variablen korrekt auf dunkle Werte. **Aber diese Klasse fehlt auf einigen Seiten.**

### Aktuelle Situation

| Seite | Hat `dark-section` | Status |
|-------|-------------------|--------|
| Workshop.tsx | Ja (Zeile 345) | OK |
| Keynote.tsx | Ja (Zeile 322) | OK |
| **CaseDetail.tsx** | **NEIN** (Zeile 36) | **PROBLEM** |
| Boost*.tsx Pages | Ja | OK |
| PowerUp*.tsx Pages | Ja | OK |
| Accelerate*.tsx Pages | Ja | OK |

## Lösung

**Einzeilige Änderung** in `CaseDetail.tsx`:

### Datei: `src/pages/CaseDetail.tsx`

**Zeile 36 - Aktuell:**
```tsx
<section className="relative pt-24 pb-16 overflow-hidden">
```

**Zeile 36 - Neu:**
```tsx
<section className="dark-section relative pt-24 pb-16 overflow-hidden noise">
```

## Technische Details

Die `.dark-section` Klasse in `index.css` überschreibt automatisch alle relevanten CSS-Variablen:

| Variable | Light Mode (ohne dark-section) | Mit dark-section |
|----------|-------------------------------|------------------|
| `--foreground` | `240 10% 8%` (dunkel) | `40 20% 95%` (hell) |
| `--muted-foreground` | `240 5% 45%` (dunkel) | `40 10% 55%` (hell) |
| `--background` | `40 20% 98%` (hell) | `240 15% 6%` (dunkel) |
| `--card` | `0 0% 100%` (weiß) | `240 12% 9%` (dunkel) |
| `--border` | `40 15% 82%` (hell) | `240 10% 18%` (dunkel) |

## Erwartetes Ergebnis

Nach der Änderung werden alle Texte, Badges, Cards und Links im Hero-Bereich der Case Detail Seiten korrekt angezeigt - sowohl im Light als auch im Dark Mode.

## Präventive Maßnahme (Optional)

Für zukünftige Konsistenz könnte ein `SharedCaseHero` Component erstellt werden, der den `dark-section` Standard garantiert - ähnlich wie `SharedHero.tsx` es bereits für andere Seiten tut.
