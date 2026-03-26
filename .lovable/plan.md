

## Analyse & Bewertung: Expertise Hub + 4 Spoke-Seiten

### Design-Bewertung

**Was funktioniert:**
- SharedHero mit min-h-[85vh], GrowthTrails, TwinklingStars, Parallax — konsistent mit Home
- Section-Wrapper mit alternierenden Gradients, Parallax-Transforms, mesh/grid Layers
- Staggered scroll-reveal Animationen auf Cards
- MechanismFlowDiagram mit architektonischem Layout (M1-M3 horizontal + M4 Multiplier-Bar)
- Comparison Table auf Hub — saubere Umsetzung

**Keine kritischen Design-Probleme.** Die letzte Überarbeitung hat die Konsistenz mit Home/AI-Native hergestellt.

---

### Problem: Case-Verlinkung

Aktuell linken **alle** Cases (Hub + 4 Spokes) generisch auf `/cases` statt auf spezifische Case-Detailseiten. Das ist verschenktes Potenzial.

#### Vorhandene Case Studies mit passendem Mechanismus-Mapping:

| Mechanismus | Passender Case | Slug |
|---|---|---|
| **M1** (Hypothesen-Maschine) | CAC Crisis Turnaround — "Wir fanden den echten Hebel (ICP-Problem, nicht Sales)" | `cac-crisis-turnaround` |
| **M2** (Übersetzungskompetenz) | Stage Transition Series B — "Strategie übersetzt in GTM-Engine + Ops" | `stage-transition-series-b-ready` |
| **M3** (Funktionierende Synthese) | Exit Readiness Achieved — "Ops, Board, Team in einem System" | `exit-readiness-achieved` |
| **M4** (AI Orchestration) | Strategic Transformation Market Leadership — "AI-native Execution auf allen Ebenen" | `strategic-transformation-market-leadership` |
| **Hub Case 1** (M1+M4) | CAC Crisis Turnaround | `cac-crisis-turnaround` |
| **Hub Case 2** (M2+M3) | Stage Transition Series B | `stage-transition-series-b-ready` |

### Plan

**1. `src/data/expertise/hub.ts`** — Hub-Cases mit echten Slugs:
- Case 1 `href`: `/cases` → `/cases/cac-crisis-turnaround`
- Case 2 `href`: `/cases` → `/cases/stage-transition-series-b-ready`

**2. `src/data/expertise/m1-hypothesen-maschine.ts`** — Case Study:
- `href`: `/cases` → `/cases/cac-crisis-turnaround`
- Tag/Result aus echtem Case übernehmen (CAC €12k → €5k)

**3. `src/data/expertise/m2-uebersetzungskompetenz.ts`** — Case Study:
- `href`: `/cases` → `/cases/stage-transition-series-b-ready`
- Tag/Result aus echtem Case (€5M → €25M ARR)

**4. `src/data/expertise/m3-funktionierende-synthese.ts`** — Case Study:
- `href`: `/cases` → `/cases/exit-readiness-achieved`
- Tag/Result aus echtem Case (Exit erfolgreich, ARR per FTE +48%)

**5. `src/data/expertise/m4-ai-orchestration.ts`** — Case Study:
- `href`: `/cases` → `/cases/strategic-transformation-market-leadership`
- Tag/Result aus echtem Case (Market Leadership, AI-native Execution)

### Umfang
5 Daten-Dateien, reine `href`-Änderungen + ggf. leichte Copy-Anpassung der Tags/Results an die echten Cases. Keine strukturellen Änderungen.

