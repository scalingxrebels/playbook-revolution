

## Plan: Abstände zwischen Sektions-Header und Content vereinheitlichen

### Analyse

Die FormulaOptimized-Sektion (Referenz) nutzt `mb-16` (4rem) zwischen Header-Block und Content-Grid. Alle anderen 6 Sektionen nutzen `mb-6` (1.5rem) auf dem letzten Header-Element — das ist zu eng, besonders bei WorkWithUs und Team, wo kein Subtitle-Paragraph existiert und der h2 direkt am Content klebt.

```text
SEKTION          LETZTES HEADER-ELEMENT    AKTUELL    SOLL
──────────────────────────────────────────────────────────
HomeShift        h2 (kein Subtitle)        mb-6       mb-12
HomeMechanisms   Subtitle <p>              mb-6       mb-12
HomeComparison   Badge <div>               mb-10      mb-12
HomeCases        Subtitle <p>              mb-6       mb-12
HomeWorkWithUs   h2 (kein Subtitle)        mb-6       mb-12
HomeTeam         h2 (kein Subtitle)        mb-6       mb-12
```

### Änderungen in 6 Dateien

Jeweils das **letzte Element im Header-Bereich** (h2 oder Subtitle-p oder Badge) von `mb-6` auf `mb-12` ändern:

| Datei | Element | Zeile ca. | Änderung |
|---|---|---|---|
| `HomeShift.tsx` | h2 | 56 | `mb-6` → `mb-12` |
| `HomeMechanisms.tsx` | Subtitle p | 95 | `mb-6` → `mb-12` |
| `HomeComparison.tsx` | Badge div | 91 | `mb-10` → `mb-12` |
| `HomeCases.tsx` | Subtitle p | 117 | `mb-6` → `mb-12` |
| `HomeWorkWithUs.tsx` | h2 | 72 | `mb-6` → `mb-12` |
| `HomeTeam.tsx` | h2 | 42 | `mb-6` → `mb-12` |

### Warum mb-12?
`mb-16` (FormulaOptimized) ist etwas grosszügiger weil dort ein 3-Column-Grid mit grossen Cards folgt. `mb-12` (3rem) ist der goldene Mittelweg — genug Luft für visuelle Hierarchie, ohne zu viel Leerraum bei kompakteren Sektionen.

### Keine inhaltlichen Änderungen
Nur Spacing-Klassen auf je einem Element pro Datei.

