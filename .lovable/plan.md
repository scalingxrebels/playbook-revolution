

## Plan: Homepage Design konsistent mit AI-Native machen

### 3 Bereiche

---

### 1. Section Labels (Overlines) vereinheitlichen

AI-Native nutzt `text-sm font-semibold uppercase tracking-widest text-accent`. Home nutzt `text-xs font-medium uppercase tracking-[0.3em] text-accent`.

**Änderung in 5 Dateien** — alle Overline-`<p>`/`<span>` auf AI-Native-Stil:

| Datei | Zeile | Alt | Neu |
|---|---|---|---|
| `HomeMechanisms.tsx` | 74 | `text-xs font-medium uppercase tracking-[0.3em]` | `text-sm font-semibold uppercase tracking-widest` |
| `HomeComparison.tsx` | 60 | `text-xs font-medium uppercase tracking-[0.3em]` | `text-sm font-semibold uppercase tracking-widest` |
| `HomeCases.tsx` | 98 | `text-xs font-medium uppercase tracking-[0.3em]` | `text-sm font-semibold uppercase tracking-widest` |
| `HomeTeam.tsx` | 35 | `text-xs font-medium uppercase tracking-[0.3em]` | `text-sm font-semibold uppercase tracking-widest` |
| `HomeWorkWithUs.tsx` | — | Overline fehlt komplett | Overline hinzufügen vor `<h2>`: `text-sm font-semibold uppercase tracking-widest text-accent mb-4` mit Text "Zusammenarbeit" / "Working together" |

---

### 2. Hero-Button auf AI-Native Gradient-Stil

AI-Native Hero-Button: `bg-gradient-accent text-accent-foreground font-bold px-10 py-7 text-cta uppercase tracking-wide shadow-accent-glow hover:shadow-glow`

Home Hero-Button aktuell: `bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base shadow-accent-glow`

**Änderung in `HomeHero.tsx` Zeile 102:**
Ersetze Button-Classes durch den AI-Native Gradient-Stil. Text bleibt gleich ("Kostenloses Gespräch buchen").

---

### 3. Cards konsistent mit AI-Native

AI-Native Cards haben: scharfe Ecken (kein `rounded-xl`), `border-border` (nicht `border-border/50`), Icon-Boxen (`w-14 h-14 rounded-lg bg-accent/10`), und Hover-Glow (`shadow-glow`).

Home Cards haben aktuell: `rounded-xl`, `border-border/50`.

**Änderung in 3 Dateien** — Cards auf AI-Native Stil:

| Datei | Element | Änderungen |
|---|---|---|
| `HomeMechanisms.tsx` | M1–M4 Cards | `rounded-xl` entfernen, `border-border/50` → `border-border` |
| `HomeCases.tsx` | Case-Cards | `rounded-xl` entfernen, `border-border/50` → `border-border` |
| `HomeWorkWithUs.tsx` | Path-Cards | `rounded-xl` entfernen, `border-border/50` → `border-border` |

---

### Zusammenfassung
- 6 Dateien, rein CSS-Änderungen + 1 Overline-Text hinzufügen
- Keine inhaltlichen Änderungen an Texten, Links oder Daten

