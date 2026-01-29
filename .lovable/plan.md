
# Playbook-Architektur Refactoring - Kompakter Umsetzungsplan

## Aktuelles Problem
Der genehmigte Plan wurde nie umgesetzt. Die Codebase zeigt:
- `src/data/playbooks/` existiert nicht
- `src/components/playbooks/sections/` ist leer
- `PlaybookGtmRevenue.tsx` ist noch 1164 Zeilen monolithisch

## Umsetzungsstrategie: Kleinere Batches

Statt alles auf einmal zu erstellen, wird in 4 kleinen Batches implementiert:

### Batch 1: Foundation (3 Dateien)
1. `src/data/playbooks/types.ts` - TypeScript Interfaces
2. `src/data/playbooks/gtm-revenue.ts` - GTM Daten extrahiert
3. `src/data/playbooks/product.ts` - Product Daten neu

### Batch 2: Core Sections (3 Dateien)
4. `src/components/playbooks/sections/PlaybookHeroSection.tsx`
5. `src/components/playbooks/sections/PlaybookSummarySection.tsx`
6. `src/components/playbooks/sections/PlaybookFrameworkSection.tsx`

### Batch 3: Remaining Sections (6 Dateien)
7. `PlaybookBestPracticesSection.tsx`
8. `PlaybookRoadmapSection.tsx`
9. `PlaybookCaseStudiesSection.tsx`
10. `PlaybookPersonasSection.tsx`
11. `PlaybookSolutionsSection.tsx`
12. `PlaybookCTASection.tsx`

### Batch 4: Pages + Routes (3 Dateien)
13. `src/pages/PlaybookGtmRevenue.tsx` - Refactored zu ~50 Zeilen
14. `src/pages/PlaybookProduct.tsx` - Neue Page ~50 Zeilen
15. `src/App.tsx` - Route hinzufuegen
16. `src/data/playbooks.ts` - Product Entry hinzufuegen

## Technische Details

### types.ts Interfaces
- BilingualText: { en: string; de: string; }
- PlaybookHeroData: breadcrumb, badge, title, CTAs, gradient
- FrameworkItem: icon, color, title, metrics, actions
- RoadmapPhase: phase, timeline, deliverables
- CaseStudy: company, problem, solution, results
- Persona: icon, role, pain, outcome
- RelatedSolution: title, timeline, investment, href

### Section Components (Props-basiert)
Jede Section erhaelt Daten via Props und rendert UI.
Design-System bleibt identisch (Deep Space, TwinklingStars, Gradients).

### Page Composition Pattern
```
<Navigation />
<PlaybookHeroSection data={playbookData.hero} />
<PlaybookSummarySection data={playbookData.summary} />
<PlaybookFrameworkSection items={playbookData.framework} />
... weitere Sections
<Footer />
```

## Erwartetes Ergebnis
- `/playbooks` zeigt 2 Kacheln (GTM + Product)
- Beide Landing Pages mit identischem Design
- Neue Playbooks in 30 Min erstellbar (nur Daten-Datei + 50-Zeilen Page)
