

## Plan: Sektionsüberschriften der Home an AI-Native angleichen

### Analyse

AI-Native Sektionen (Problem, Formula) nutzen:
- **Zentriert**: `text-center`
- **Grössere Schrift**: `text-display-md` = `clamp(2rem, 5vw, 4rem)`
- **Overline als `<span>` mit `block`**, dann `<h2>` darunter

Home-only Sektionen (Shift, Mechanisms, Comparison, Cases, WorkWithUs, Team) nutzen:
- **Linksbündig**: kein `text-center`
- **Kleinere Schrift**: `text-3xl md:text-4xl lg:text-5xl`

```text
SEKTION              ALIGNMENT    FONT-SIZE              AI-NATIVE STIL?
────────────────────────────────────────────────────────────────────────
HomeShift            links        text-3xl/4xl/5xl       ❌
HomeMechanisms       links        text-3xl/4xl/5xl       ❌
HomeComparison       links        text-3xl/4xl/5xl       ❌
FormulaOptimized     zentriert    text-display-md        ✅
HomeCases            links        text-3xl/4xl/5xl       ❌
HomeWorkWithUs       links        text-3xl/4xl/5xl       ❌
HomeTeam             links        text-3xl/4xl/5xl       ❌
```

### Änderungen in 6 Dateien

Alle Section-Header auf den AI-Native Stil umstellen:
- `text-center` hinzufügen (auf den Container-`div` oder direkt auf Overline + h2)
- `text-3xl md:text-4xl lg:text-5xl` → `text-display-md`
- `mb-3` / `mb-14` nach h2 → `mb-6` (wie bei AI-Native)

| Datei | Overline | h2 Font | Alignment |
|---|---|---|---|
| `HomeShift.tsx` | Fehlt — hinzufügen: "Der Kontext" / "The Context" | `text-display-md` | zentriert |
| `HomeMechanisms.tsx` | Vorhanden ✅ | `text-display-md` | zentriert |
| `HomeComparison.tsx` | Vorhanden ✅ | `text-display-md` | zentriert |
| `HomeCases.tsx` | Vorhanden ✅ | `text-display-md` | zentriert |
| `HomeWorkWithUs.tsx` | Vorhanden ✅ | `text-display-md` | zentriert |
| `HomeTeam.tsx` | Vorhanden ✅ | `text-display-md` | zentriert |

### Keine inhaltlichen Änderungen
Alle Texte, Links, CTAs bleiben identisch. Nur CSS-Klassen (Alignment, Font-Size, Spacing).

