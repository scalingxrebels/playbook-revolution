

## Plan: Overline und Badge tauschen auf Expertise Hub

### Änderung in `src/components/expertise/ExpertiseHub.tsx`

| Element | Aktuell | Neu |
|---|---|---|
| **Overline** (SharedHero Prop) | `WIE WIR DENKEN · NICHT WAS WIR WISSEN` / `HOW WE THINK · NOT WHAT WE KNOW` | `EXPERTISE × SPEED = IMPACT` |
| **Badge** (children im SharedHero) | `EXPERTISE × SPEED = IMPACT` | `WIE WIR DENKEN · NICHT WAS WIR WISSEN` / `HOW WE THINK · NOT WHAT WE KNOW` |

Konkret:
- Z.82-83: Overline-Props auf `"EXPERTISE × SPEED = IMPACT"` (beide Sprachen gleich)
- Z.93: Badge-Text von `EXPERTISE × SPEED = IMPACT` → sprachabhängig `WIE WIR DENKEN · NICHT WAS WIR WISSEN` / `HOW WE THINK · NOT WHAT WE KNOW`

1 Datei, 3 Zeilen.

