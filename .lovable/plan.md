

## Plan: Homepage v2.1 umbauen + alte Home als /ai-native archivieren

### Übersicht

1. Aktuelle `Index.tsx` (9-Sektionen, AI-Native Focus) als neue Seite `/ai-native` speichern
2. Neue Homepage (`Index.tsx`) mit 7 Sektionen gemäss Briefing v2.1 bauen
3. Navigation und Footer bleiben unverändert

### Schritt 1: Alte Homepage als /ai-native archivieren

**Datei: `src/pages/AINativeHome.tsx`** (neu)
- Kopie der aktuellen `Index.tsx` — alle 9 Sektionen (HeroOptimized, ProblemOptimized, SolutionOptimized, HowItWorksOptimized, FormulaOptimized, ProofOptimized, GrowthCurveOptimized, ROICalculatorOptimized, FinalCTAOptimized)

**Datei: `src/App.tsx`**
- Neue Route: `<Route path="/ai-native" element={<AINativeHome />} />`

### Schritt 2: Neue Homepage — 7 Sektionen

**Datei: `src/pages/Index.tsx`** (komplett neu)

Importiert 7 neue Komponenten + Navigation/Footer:

```text
Section 1: HomeHero
Section 2: HomeShift
Section 3: HomeMechanisms (2×2 Grid)
Section 4: FormulaOptimized (BESTEHEND — bleibt)
Section 5: HomeCases (3 ausgewählte Cases)
Section 6: HomeWorkWithUs
Section 7: HomeTeam
```

### Schritt 3: Neue Komponenten

**`src/components/homepage/HomeHero.tsx`**
- Deep Space Background (bestehende Parallax-Layer)
- Overline: "FÜR CEOS VON FINANZIERTEN STARTUPS · SERIES A–B · DACH"
- H1: "Deine Strategie funktioniert auf dem Slide Deck. In der Realität nicht."
- Subline: "Wir finden den Hebel der wirklich zieht — und setzen ihn um. Fucking fast."
- Badge: "EXPERTISE × SPEED = IMPACT"
- CTA → Booking Modal: "Kostenloses Gespräch buchen"
- Micro-Copy: "30 Minuten · Kein Pitch · Direkt mit Michel"

**`src/components/homepage/HomeShift.tsx`**
- H2: "Die Welt hat sich verändert. Deine Strategie noch nicht."
- 4 Absätze wie im Briefing (Andy Raskin Strategic Narrative)
- Minimaler Design, Text-fokussiert

**`src/components/homepage/HomeMechanisms.tsx`**
- Overline: "WIE WIR ARBEITEN"
- H2: "Vier Mechanismen. Einer fehlt immer."
- Subline: "Wir finden welcher — und bauen ihn."
- 2×2 Grid: Insights & Levers, Growth Engines, Scaling Systems, AI Orchestration
- "→ Mehr lesen" Links (vorerst /solutions oder /insights)

**Section 4: `FormulaOptimized`** — bleibt unverändert

**`src/components/homepage/HomeCases.tsx`**
- Overline: "ERGEBNISSE AUS DER PRAXIS"
- H2: "Was passiert wenn der Hebel stimmt."
- 3 Cards mit echten Case-Daten:
  - Case 1: Board Readiness → slug `vc-due-diligence-passed-investment-secured`
  - Case 2: Stage Transition → slug `stage-transition-series-b-ready`
  - Case 3: Strategische Transformation → slug `strategic-transformation-market-leadership`
- Je Card: Tag, Titel, 2 Sätze, 3 Metriken, Investment + ROI, CTA Link
- Footer-Link: "→ Alle Cases ansehen" (/cases)

**`src/components/homepage/HomeWorkWithUs.tsx`**
- H2: "Drei Wege. Du wählst den richtigen."
- 3 Kacheln: Insights lesen → /insights, Solutions ansehen → /solutions, Gespräch buchen → Booking Modal
- Weg 3 visuell prominent (Electric Blue/Accent)

**`src/components/homepage/HomeTeam.tsx`**
- Overline: "DAS TEAM"
- H2: "Die Menschen hinter ScalingX."
- Michel Lason: Prominentes Foto (`/images/team-michel.png`), Name, Rolle, 3-Satz-Bio, Micro-Copy ("n=22 · DACH B2B SaaS · Series A–C")
- Alban + Florian: Kompakte Zeilen darunter mit Name, Rolle, LinkedIn-Link
- Klare Hierarchie: Michel = gross, Alban + Florian = klein
- Link: "→ Mehr über das Team" (/about)

### Styling

Alle neuen Komponenten folgen dem bestehenden Design-System:
- Deep Space Backgrounds (dark sections mit Parallax)
- `font-display`, `text-gradient`, `bg-gradient-primary`
- Cards: `bg-card/10 border border-border/50 backdrop-blur-sm`
- Scroll-Animations via `useScrollAnimation`
- Responsive: Grid → 1-Spalte auf Mobile

### Case-Slugs Mapping (Briefing → tatsächlich)

| Briefing-Slug | Echter Slug |
|---|---|
| `/cases/board-readiness-series-b` | `/cases/vc-due-diligence-passed-investment-secured` |
| `/cases/stage-transition-series-b-ready` | `/cases/stage-transition-series-b-ready` ✓ |
| `/cases/strategische-transformation-marktfuehrerschaft` | `/cases/strategic-transformation-market-leadership` |

### Nicht geändert
- Navigation (hat bereits Playbooks + Expertise)
- Footer (hat bereits Playbooks + Expertise)
- FormulaOptimized (bleibt als Section 4)

