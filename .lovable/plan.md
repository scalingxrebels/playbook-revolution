

## Plan: `bg-card` Hintergrund auf 5 Bereiche übertragen

Die Formula-Cards nutzen `bg-card` (volle Opacity). Alle anderen Sektionen nutzen `bg-card/10` (fast transparent). Änderung: überall `bg-card` statt `bg-card/10` bzw. `bg-accent/5`.

### 5 Änderungen

| # | Datei | Element | Alt | Neu |
|---|---|---|---|---|
| 1 | `HomeHero.tsx` Z.91 | Badge | `bg-accent/5` | `bg-card` |
| 2 | `HomeMechanisms.tsx` Z.113 | M1–M4 Cards | `bg-card/10` | `bg-card` |
| 3 | `HomeComparison.tsx` Z.99 | Tabelle | `bg-card/10` | `bg-card` |
| 4 | `HomeCases.tsx` Z.133 | Case-Cards | `bg-card/10` | `bg-card` |
| 5 | `HomeWorkWithUs.tsx` Z.86 | Nicht-prominente Cards | `bg-card/10` | `bg-card` |

Nur CSS-Klassen-Änderungen, keine inhaltlichen Änderungen.

