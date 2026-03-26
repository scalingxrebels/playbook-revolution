

## Audit: Headline-Konsistenz über alle Seiten

### Ergebnis der Analyse

Alle Section-Headlines nutzen `font-display text-display-md` (clamp 2rem–4rem) — das ist konsistent. Das Problem ist die **`<br />`-Logik**: Manche mehrteilige Headlines werden mit `<br />` getrennt, andere nicht — ohne erkennbare Regel.

### Die Regel (abgeleitet von Home als Referenz)

Home nutzt `<br />` bei Headlines mit **zwei klar abgrenzbaren Sätzen/Phrasen** (Setup → Payoff). Einzeilige oder kurze Headlines bleiben ohne Break. Diese Logik wird nicht überall eingehalten.

### Vollständige Übersicht aller H2 Section-Headlines

```text
SEITE / SECTION         HEADLINE (DE)                                                    <br />?   SOLLTE?
─────────────────────── ──────────────────────────────────────────────────────────────── ───────── ─────────
HOME
  Shift                 Die Welt hat sich verändert. / Deine Strategie noch nicht.       ✅         ✅
  Mechanisms            Vier Mechanismen. / Einer fehlt immer.                           ✅         ✅
  Comparison            Warum wir.                                                       ❌         ❌ (kurz)
  Formula               Growth Engines × Scaling Systems × AI / = Hypergrowth            ✅ (span)  ✅
  Cases                 Was passiert wenn / der Hebel stimmt.                            ✅         ✅
  WorkWithUs            Drei Wege. / Du wählst den richtigen.                            ✅         ✅
  Team                  Die Menschen hinter ScalingX.                                    ❌         ❌ (kurz)

SOLUTIONS
  Featured              Die häufigsten ersten Schritte.                                  ❌         ❌ (kurz)
  Categories            Sechs Situationen. Sechs Wege. Eine ist deine.                   ❌         ✅ ⚠️
  All Solutions         Growth Engines × Scaling Systems × AI = Hypergrowth              ❌         ✅ ⚠️

ABOUT
  S2 Team               Drei Menschen. Ein System.                                       ❌         ✅ ⚠️
  S3 Mechanisms         Andere beraten. Wir bauen.                                       ❌         ✅ ⚠️
  S4 Proof              Zahlen die für sich sprechen.                                    ❌         ❌ (kurz)
  S5 Mission            Die Lücke zwischen Strategie und Realität kostet...              ❌         ❌ (lang = natürlicher Umbruch)
  S6 CTA                30 Minuten. Kein Pitch. Direkt mit Michel.                      ❌         ✅ ⚠️

EXPERTISE HUB
  S2 System             Vier Mechanismen. Ein Multiplier. Fucking fast.                  ❌         ✅ ⚠️
  S3 Mechanisms         Vier Mechanismen. Einer davon erklärt die Lücke.                ❌         ✅ ⚠️
  S4 Comparison         Viele haben Expertise. Wenige haben ein System.                  ❌         ✅ ⚠️
  S5 Cases              Was möglich ist.                                                 ❌         ❌ (kurz)
  S6 CTA                Bereit den richtigen Hebel zu finden?                           ❌         ❌ (kurz)

EXPERTISE SPOKES (M1-M4) — nutzen SectionHeader, der nur Strings annimmt (kein JSX)
  → Hier können keine <br /> gesetzt werden ohne den SectionHeader zu refactoren

ML
  S2 Formula            Expertise × Speed = Impact. / Nicht als Slogan. Als Arbeitsweise. ✅         ✅
  S3 Story              Nicht Biographie. / Fähigkeit.                                   ✅         ✅
  S4 Voices             Was andere sagen.                                                ❌         ❌ (kurz)
  S5 Clarity            Womit ich nicht arbeite.                                         ❌         ❌ (kurz)
  S6 Drive              Drei Momente. / Das ist warum ich tue, was ich tue.              ✅         ✅
  S7 CTA                30 Minuten. Kein Pitch. / Direkt mit mir.                        ✅         ✅

INSIGHTS / PLAYBOOKS / CASES — nutzen nur SharedHero (H1), keine eigenen Section-H2s mit Inkonsistenz
```

### Fixes (⚠️ markierte Stellen)

| # | Datei | Zeile | Ist | Soll |
|---|---|---|---|---|
| 1 | `SolutionCategoryNav.tsx` | Z.28 | `Sechs Situationen. Sechs Wege. <span>` | `Sechs Situationen. Sechs Wege.<br /><span>` |
| 2 | `Solutions.tsx` | Z.114-116 | `Growth Engines × ... × AI = <span>Hypergrowth</span>` kein Break | `Growth Engines × Scaling Systems × AI<br />= <span>Hypergrowth</span>` |
| 3 | `About.tsx` | Z.271 | `Drei Menschen. Ein System.` | `Drei Menschen.<br />Ein System.` |
| 4 | `About.tsx` | Z.349 | `Andere beraten. Wir bauen.` | `Andere beraten.<br />Wir bauen.` |
| 5 | `About.tsx` | Z.552 | `30 Minuten. Kein Pitch. Direkt mit Michel.` | `30 Minuten. Kein Pitch.<br />Direkt mit Michel.` |
| 6 | `ExpertiseHub.tsx` | Z.106 | `Vier Mechanismen. Ein Multiplier. Fucking fast.` | `Vier Mechanismen. Ein Multiplier.<br />Fucking fast.` |
| 7 | `ExpertiseHub.tsx` | Z.119 | `Vier Mechanismen. Einer davon erklärt die Lücke.` | `Vier Mechanismen.<br />Einer davon erklärt die Lücke.` |
| 8 | `ExpertiseHub.tsx` | Z.171 | `Viele haben Expertise. Wenige haben ein System.` | `Viele haben Expertise.<br />Wenige haben ein System.` |

### Technisches Detail: ExpertiseHub/Spokes SectionHeader

Der `SectionHeader` in ExpertiseHub nimmt `headline` als `string`, nicht als `ReactNode`. Für `<br />` muss der Typ auf `ReactNode` erweitert werden:

```tsx
// ExpertiseHub.tsx SectionHeader
headline: string;  →  headline: React.ReactNode;
```

Dasselbe gilt für `ExpertiseSpoke.tsx` SectionHeader (Z.31-43).

### EN-Versionen

Alle Fixes betreffen auch die englischen Übersetzungen (gleicher Break-Punkt).

### Betroffene Dateien

| Datei | Änderung |
|---|---|
| `src/components/solutions/SolutionCategoryNav.tsx` | Z.28: `<br />` vor `<span>` |
| `src/pages/Solutions.tsx` | Z.114-116: Break in Headline |
| `src/pages/About.tsx` | Z.271, Z.349, Z.552: Breaks einfügen |
| `src/components/expertise/ExpertiseHub.tsx` | SectionHeader: `headline` Type → `ReactNode`, Z.106/119/171: JSX mit `<br />` |
| `src/components/expertise/ExpertiseSpoke.tsx` | SectionHeader: `headline` Type → `ReactNode` (für Konsistenz, auch wenn Spokes aktuell kurze Headlines haben) |

5 Dateien. 8 Headline-Fixes + 2 Type-Änderungen.

