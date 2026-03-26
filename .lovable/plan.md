

## Plan: `italic text-gradient` Akzente auf alle Seiten anwenden

### Das Muster (von Solutions)

Solutions nutzt `<span className="italic text-gradient">payoff</span>` um den "Payoff"-Teil einer Headline farbig hervorzuheben. Das ist der emotionale/wirkungsvolle Teil nach dem Setup.

### Vollständige Übersicht — was bekommt den Akzent

Die Regel: Bei mehrteiligen Headlines bekommt der **Payoff** (zweite Phrase) den Gradient. Bei kurzen einzeiligen Headlines bleibt alles plain.

```text
SEITE / SECTION          IST                                                    WIRD (Gradient-Teil kursiv markiert)
────────────────────────  ─────────────────────────────────────────────────────  ─────────────────────────────────────────────────
HOME
  Shift                  Die Welt hat sich verändert. / Deine Strategie nicht.  ...Deine Strategie *noch nicht.*
  Mechanisms             Vier Mechanismen. / Einer fehlt immer.                 ...Einer *fehlt immer.*
  Comparison             Warum wir.                                             ❌ kurz, bleibt plain
  Formula                = Hypergrowth                                          ✅ bereits text-primary, → italic text-gradient
  Cases                  Was passiert wenn / der Hebel stimmt.                  ...*der Hebel stimmt.*
  WorkWithUs             Drei Wege. / Du wählst den richtigen.                  ...Du wählst *den richtigen.*
  Team                   Die Menschen hinter ScalingX.                          ❌ kurz, bleibt plain

ABOUT
  S2 Team                Drei Menschen. / Ein System.                           ...*Ein System.*
  S3 Mechanisms          Andere beraten. / Wir bauen.                           ...*Wir bauen.*
  S4 Proof               Zahlen die für sich sprechen.                          ❌ kurz, bleibt plain
  S5 Mission             Die Lücke zwischen... kostet Startups ihre Zukunft.    ...*ihre Zukunft.*
  S6 CTA                 30 Min. Kein Pitch. / Direkt mit Michel.              ...*Direkt mit Michel.*

EXPERTISE HUB
  S2 System              Vier Mechanismen. Ein Multiplier. / Fucking fast.      ...*Fucking fast.*
  S3 Mechanisms          Vier Mechanismen. / Einer erklärt die Lücke.           ...Einer davon *erklärt die Lücke.*
  S4 Comparison          Viele haben Expertise. / Wenige haben ein System.      ...Wenige haben *ein System.*

ML
  S2 Formula             Expertise × Speed = Impact. / Nicht als Slogan...      ...Nicht als Slogan. *Als Arbeitsweise.*
  S3 Story               Nicht Biographie. / Fähigkeit.                         ...*Fähigkeit.*
  S6 Drive               Drei Momente. / Das ist warum ich tue, was ich tue.    ...*was ich tue.*
  S7 CTA                 30 Min. Kein Pitch. / Direkt mit mir.                 ...*Direkt mit mir.*
```

### Technisches Detail

Jede betroffene Zeile wird so geändert:
```tsx
// Vorher:
<>Die Welt hat sich verändert.<br />Deine Strategie noch nicht.</>

// Nachher:
<>Die Welt hat sich verändert.<br />Deine Strategie <span className="italic text-gradient">noch nicht.</span></>
```

### Betroffene Dateien

| Datei | Anzahl Änderungen |
|---|---|
| `src/components/homepage/HomeShift.tsx` | 2 (DE + EN) |
| `src/components/homepage/HomeMechanisms.tsx` | 2 |
| `src/components/homepage/FormulaOptimized.tsx` | 2 (text-primary → italic text-gradient) |
| `src/components/homepage/HomeCases.tsx` | 2 |
| `src/components/homepage/HomeWorkWithUs.tsx` | 2 |
| `src/pages/About.tsx` | 8 (4 Sections × DE+EN) |
| `src/components/expertise/ExpertiseHub.tsx` | 6 (3 Sections × DE+EN) |
| `src/pages/ML.tsx` | 8 (4 Sections × DE+EN) |

8 Dateien. Reine Inline-Styling-Änderungen an bestehenden Headlines.

