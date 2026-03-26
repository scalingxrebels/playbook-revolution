

## Expertise Page v1.0 — Refactoring Plan

### Was sich ändert

Die aktuelle Expertise-Seite ist eine Research-Hub-Seite (AMF/ANST/SST/Unified Framework). Das Briefing ersetzt das komplett durch eine Mechanismus-Architektur (M1-M4) mit Hub + 4 Spoke-Seiten.

Die bestehenden Research-Spoke-Seiten (`/expertise/amf`, `/expertise/anst`, `/expertise/sst`, `/expertise/unified-framework`) werden durch die neuen M1-M4 Spokes ersetzt. Die alten Seiten und Komponenten bleiben erstmal im Code (können später entfernt werden), aber die Routes werden umgemappt.

---

### Architektur-Übersicht

```text
NEU                                   ALT (wird ersetzt)
/expertise (Hub, 6 Sektionen)         /expertise (ResearchHub)
/expertise/hypothesen-maschine (M1)   /expertise/amf
/expertise/uebersetzungskompetenz     /expertise/anst
/expertise/funktionierende-synthese   /expertise/sst
/expertise/ai-orchestration (M4)      /expertise/unified-framework
```

---

### Schritt 1: Daten-Datei `src/data/expertise.ts`

Zentrale Datendatei mit:
- `mechanismCards` (M1-M4): Alle Texte (DE/EN), Badges, Farben, Links
- `comparisonRows`: Vergleichstabelle (Berater / McKinsey / Intern / ScalingX)
- `casePreviews`: 2 Case-Kacheln mit M-Badges
- Hub-Stats, Section-Copy

### Schritt 2: Hub-Seite `/expertise` — 6 Sektionen

Komplett neuer `ExpertiseHub.tsx` (ersetzt `ResearchHub`):

| Section | Inhalt |
|---|---|
| 1. Hero | SharedHero, Overline "WIE WIR DENKEN", H1 "Expertise ist kein Titel. Es ist ein System.", Badge "EXPERTISE × SPEED = IMPACT", keine CTAs |
| 2. Das System | M1-M3 Flow-Diagramm + M4 als Multiplier (Amber), Caption |
| 3. Die 4 Mechanismen | 2x2 Grid, M1-M3 Electric Blue, M4 Amber Border, Links zu Spokes |
| 4. Warum das funktioniert | Vergleichstabelle (Berater/McKinsey/Intern/ScalingX), analog HomeComparison |
| 5. Beweis | 2 Case-Kacheln mit M-Badges |
| 6. CTA | Primär + Sekundär (Gespräch buchen / Insights lesen) |

Design: Identisch wie Home/AI-Native — SharedHero, bg-mesh, opacity-20 grids, rounded-none cards, text-display-md headers, mb-12 spacing.

### Schritt 3: Spoke-Template `ExpertiseSpoke.tsx`

Ein wiederverwendbares Template für alle 4 Spoke-Seiten (7 Sektionen):

| Section | Inhalt |
|---|---|
| 1. Hero | SharedHero mit Breadcrumb, Overline "M[X] · MECHANISMUS X VON 3" (bzw. "MULTIPLIER" für M4), Stats |
| 2. Was es ist | H2 + Body-Text (aus Magic Sauce) |
| 3. Was es NICHT ist | 3 Kontrast-Kacheln |
| 4. Wie es funktioniert | 3-4 Ebenen/Prinzipien (vertikale Timeline oder Grid) |
| 5. Warum andere es nicht haben | Competitive Moat Text |
| 6. In der Praxis | 1 Case-Kachel mit M-Badge |
| 7. Verbindung | Mini-Diagramm (M1→M2→M3 mit M4 darunter), 2 CTAs |

Datengetrieben: Jede Spoke-Seite übergibt ein Data-Objekt an das Template.

### Schritt 4: Spoke-Daten `src/data/expertise/` 

4 Dateien:
- `m1-hypothesen-maschine.ts`
- `m2-uebersetzungskompetenz.ts`
- `m3-funktionierende-synthese.ts`
- `m4-ai-orchestration.ts`

Alle Texte aus dem Briefing, DE + EN.

### Schritt 5: 4 Spoke-Pages

Dünne Wrapper-Pages analog ExpertiseAMF/ANST/SST:
- `src/pages/ExpertiseM1.tsx`
- `src/pages/ExpertiseM2.tsx`
- `src/pages/ExpertiseM3.tsx`
- `src/pages/ExpertiseM4.tsx`

### Schritt 6: Routing (App.tsx)

- `/expertise` → neuer ExpertiseHub
- `/expertise/hypothesen-maschine` → ExpertiseM1
- `/expertise/uebersetzungskompetenz` → ExpertiseM2
- `/expertise/funktionierende-synthese` → ExpertiseM3
- `/expertise/ai-orchestration` → ExpertiseM4
- Alte Routes (`/expertise/amf` etc.) bleiben als Redirects oder werden entfernt

### Schritt 7: Updates in bestehenden Dateien

- **`HomeMechanisms.tsx`**: Links von `/expertise` → `/expertise/hypothesen-maschine` etc. (pro M)
- **`breadcrumbRegistry.ts`**: Alte Expertise-Einträge ersetzen durch neue M1-M4 Pfade
- **`seoRegistry.ts`**: Neue Einträge für Hub + 4 Spokes

### Schritt 8: Mini-Diagramm-Komponente

Kleine `MechanismFlowDiagram.tsx` Komponente:
- M1→M2→M3 als Kreise mit Pfeilen
- M4 als doppelte Linie (Amber) darunter
- Prop `activeM` hebt den aktuellen Mechanismus hervor
- Wiederverwendbar in Hub (Section 2) und allen Spokes (Section 7)

---

### Design-Regeln (konsistent mit Home/AI-Native)

- SharedHero für alle Heroes
- `text-display-md` für Section-Headlines, `mb-12` Spacing
- `rounded-none` Cards, `border-border` Borders
- `bg-mesh` + `opacity-20` Grid-Patterns
- M1-M3: Electric Blue (`text-primary`), M4: Amber (`text-amber-500`)
- M4-Kachel im 2x2 Grid: Amber Border statt Blue

### Farb-Logik

```text
M1–M3: Electric Blue (primary) — gleichwertige Mechanismen
M4:    Amber (#F59E0B)         — visuell als Multiplier abgesetzt
```

---

### Was NICHT geändert wird

- Alte Research-Komponenten (`ResearchHub`, `ResearchLandingPage`, etc.) bleiben im Code
- Alte Expertise-Spoke-Pages bleiben als Dateien (können in Phase 2 entfernt werden)
- Keine DB-Änderungen nötig
- Navigation bleibt (Expertise-Link zeigt weiter auf `/expertise`)

### Implementierungsreihenfolge

1. Daten-Dateien erstellen (expertise.ts + 4 Spoke-Daten)
2. MechanismFlowDiagram-Komponente
3. ExpertiseHub-Komponente (6 Sektionen)
4. ExpertiseSpoke-Template (7 Sektionen)
5. 4 Spoke-Pages + Routing
6. breadcrumbRegistry + seoRegistry + HomeMechanisms Links
7. Design-Pass

~12 neue/geänderte Dateien, rein Frontend.

