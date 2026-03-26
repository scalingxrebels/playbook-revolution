

## Plan: Home Light/Dark Mode an AI-Native angleichen

### Problem
Die gesamte Homepage ist permanent dunkel — alle 7 Sektionen nutzen `dark-section`. Auf der AI-Native Seite ist nur der Hero dunkel, alle anderen Sektionen reagieren korrekt auf den Light/Dark-Mode Toggle.

### Analyse: Welche Sektionen brauchen was?

```text
SEKTION              HOME (IST)        AI-NATIVE (SOLL)
─────────────────────────────────────────────────────────
Hero                 dark-section ✅    dark-section ✅  (bleibt)
Shift                dark-section ❌    theme-responsive
Mechanisms           dark-section ❌    theme-responsive
Comparison           dark-section ❌    theme-responsive
Formula (shared)     theme-responsive ✅ (bereits korrekt)
Cases                dark-section ❌    theme-responsive
WorkWithUs           dark-section ❌    theme-responsive
Team                 dark-section ❌    theme-responsive
```

### Änderungen in 6 Dateien

Für jede der 6 Sektionen (nicht Hero, nicht FormulaOptimized):

**1. `dark-section` und `noise` Klasse entfernen** von der `<section>`

**2. Deep-Space-Hintergrundlayer ersetzen** durch theme-responsive Backgrounds nach AI-Native Muster:
- Statt `bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]`
- Verwende alternierende Patterns wie auf AI-Native:
  - `bg-gradient-to-b from-background to-secondary/30` (wie ProblemOptimized)
  - `bg-mesh` (wie SolutionOptimized / FormulaOptimized)
  - `bg-gradient-to-b from-secondary/30 to-background` (wie HowItWorksOptimized)

**3. Feste Farbwerte entfernen** — alle `from-[#0A0A0F]` etc. raus, nur CSS-Variablen nutzen

### Mapping pro Sektion

| Datei | Background-Stil (wie AI-Native) |
|---|---|
| `HomeShift.tsx` | `from-background to-secondary/30` + `bg-mesh` |
| `HomeMechanisms.tsx` | `bg-mesh` + `bg-grid-pattern` |
| `HomeComparison.tsx` | `from-secondary/30 to-background` |
| `HomeCases.tsx` | `bg-mesh` + `bg-grid-pattern` |
| `HomeWorkWithUs.tsx` | `from-background to-secondary/30` |
| `HomeTeam.tsx` | `bg-mesh` + `bg-grid-pattern` |

### Was sich nicht ändert
- **HomeHero.tsx** — bleibt `dark-section` (wie AI-Native Hero)
- **FormulaOptimized.tsx** — ist bereits theme-responsive (shared component)
- Alle Texte, Daten, Links, CTAs bleiben identisch
- Card-Styling bleibt identisch (wird automatisch theme-responsive ohne `dark-section` Wrapper)

