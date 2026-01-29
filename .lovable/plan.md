

# Playbook Hub Refactoring: Skeleton-First für 18 Playbooks

## Analyse des Briefings

### Struktur (18 Playbooks, 3 Ebenen)

```text
EBENE 1: Mutter-Playbook (1)
└── AI-Native Scaling Playbook

EBENE 2: Domain Playbooks (5)
├── AI-Native Growth Engines
├── AI-Native Operating Systems
├── AI-Native Board & Governance
├── AI-Native Portfolio Transformation
└── Strategic Capabilities (C1-C4)

EBENE 3: Sub-Playbooks (12)
├── Growth Engines: GTM/Revenue, Product, Customer Success
├── Operating Systems: Operations, Finance, Talent, Data/Tech
├── Board & Governance: Strategic Governance, Operational Governance, Exit & M&A
├── Portfolio: Portfolio Excellence
└── Strategic Capabilities: Strategic Capabilities
```

### Filter-System (3 Filter)

| Filter | Typ | Optionen |
|--------|-----|----------|
| Area | Multi-Select | All, Growth Engines, Operating Systems, Board & Governance, Portfolio, Strategic Capabilities |
| Bottleneck | Multi-Select | None, Strategy, Setup, Execution, Operationalization |
| Role | Single-Select | All, CEO, CMO/CRO, COO, CFO, CTO, CPO, VC/Board |

### Landing Page Struktur (8-9 Sections)

1. Hero (Icon, Headline, Teaser, Badges, CTAs)
2. The Problem (Why Traditional X is Broken)
3. The Solution (Framework + Components)
4. Implementation (30d, 90d, 12mo Roadmap)
5. Case Studies (2-3 anonymisierte Cases)
6. Solutions Connection (Power Up, Boost, Accelerate)
7. Who This Is For (ICP, Roles, Pain Points)
8. Next Steps (CTAs)
9. Sub-Playbooks (nur Ebene 2 - Links zu Kindern)

---

## Neuer Plan: 4 Phasen

### Phase 1: Datenstruktur (Types + Skeletons)

**Schritt 1.1:** Types erweitern (anpassen an neues Briefing)

Aenderungen an `src/data/playbooks/types.ts`:
- Hinzufuegen: `ebene`, `parent`, `children`, `slug`
- Hinzufuegen: `ProblemSection`, `WhoThisIsForSection`
- Hinzufuegen: `SolutionsConnection` (Power Up, Boost, Accelerate)
- Hinzufuegen: `SubPlaybooksSection` (nur Ebene 2)

**Schritt 1.2:** Playbook-Index erstellen

Erstellen: `src/data/playbooks/index.ts`
- Array mit allen 18 Playbooks (nur Metadaten fuer Kacheln)
- Jedes Playbook: id, slug, title, description, icon, color, area, bottleneck, role, ebene, parent, children

**Schritt 1.3:** Skeleton-Daten fuer jedes Playbook

Erstellen: `src/data/playbooks/[slug].ts` (18 Dateien)
- Jede Datei: Skeleton-Daten mit Platzhaltern
- User fuellt Content spaeter ein (1 Playbook nach dem anderen)

### Phase 2: UI-Components (Overview Page)

**Schritt 2.1:** Filter-Panel anpassen

Anpassen: `src/components/playbooks/PlaybookFilterPanel.tsx`
- Filter 1: Area (Multi-Select) - bereits vorhanden, Optionen pruefen
- Filter 2: Bottleneck (Multi-Select) - "Setup" hinzufuegen
- Filter 3: Role (Single-Select) - bereits vorhanden

**Schritt 2.2:** Playbook-Kachel erstellen

Erstellen: `src/components/playbooks/PlaybookTileCard.tsx`
- Icon (32px, Lucide)
- Badges (Area, Bottleneck, Role)
- Headline (H3)
- Teaser (50-80 Woerter)
- CTA ("Learn More")

**Schritt 2.3:** Playbook-Grid erstellen

Erstellen: `src/components/playbooks/PlaybookTileGrid.tsx`
- 3 Columns (Desktop), 1 Column (Mobile)
- Filter-Logik (Match-Score Algorithmus)
- Sortierung nach Match

### Phase 3: UI-Components (Landing Page)

**Schritt 3.1:** Section-Components erstellen (9 Dateien)

```text
src/components/playbooks/sections/
├── PlaybookHeroSection.tsx
├── PlaybookProblemSection.tsx
├── PlaybookSolutionSection.tsx
├── PlaybookRoadmapSection.tsx
├── PlaybookCaseStudiesSection.tsx
├── PlaybookSolutionsConnectionSection.tsx
├── PlaybookWhoThisIsForSection.tsx
├── PlaybookNextStepsSection.tsx
└── PlaybookSubPlaybooksSection.tsx (nur Ebene 2)
```

**Schritt 3.2:** Landing Page Template erstellen

Erstellen: `src/components/playbooks/PlaybookLandingPage.tsx`
- Nimmt `PlaybookPageData` als Props
- Rendert alle 8-9 Sections
- Responsive Design

### Phase 4: Routing & Integration

**Schritt 4.1:** Routes hinzufuegen

Anpassen: `src/App.tsx`
- Dynamische Route: `/playbooks/:slug`
- Lazy Loading fuer Landing Pages

**Schritt 4.2:** Overview Page anpassen

Anpassen: `src/pages/Playbooks.tsx`
- Filter-Panel einbinden
- Playbook-Grid einbinden
- Filter-State Management

---

## Dateistruktur (nach Abschluss)

```text
src/data/playbooks/
├── types.ts (erweitert)
├── index.ts (18 Playbooks Metadaten)
├── filters.ts (Filter-Definitionen)
├── ai-native-scaling.ts (Ebene 1)
├── growth-engines.ts (Ebene 2)
├── operating-systems.ts (Ebene 2)
├── board-governance.ts (Ebene 2)
├── portfolio-transformation.ts (Ebene 2)
├── strategic-capabilities.ts (Ebene 2)
├── gtm-revenue.ts (Ebene 3)
├── product.ts (Ebene 3)
├── customer-success.ts (Ebene 3)
├── operations.ts (Ebene 3)
├── finance.ts (Ebene 3)
├── talent.ts (Ebene 3)
├── data-tech.ts (Ebene 3)
├── strategic-governance.ts (Ebene 3)
├── operational-governance.ts (Ebene 3)
├── exit-ma.ts (Ebene 3)
├── portfolio-excellence.ts (Ebene 3)
└── strategic-capabilities-sub.ts (Ebene 3)

src/components/playbooks/
├── PlaybookFilterPanel.tsx (angepasst)
├── PlaybookFilterRowCentered.tsx (bestehend)
├── PlaybookFilterRowCompact.tsx (bestehend)
├── PlaybookTileCard.tsx (neu)
├── PlaybookTileGrid.tsx (neu)
├── PlaybookLandingPage.tsx (neu)
├── PlaybookModal.tsx (bestehend)
├── PlaybookOnboardingHint.tsx (bestehend)
└── sections/
    ├── PlaybookHeroSection.tsx
    ├── PlaybookProblemSection.tsx
    ├── PlaybookSolutionSection.tsx
    ├── PlaybookRoadmapSection.tsx
    ├── PlaybookCaseStudiesSection.tsx
    ├── PlaybookSolutionsConnectionSection.tsx
    ├── PlaybookWhoThisIsForSection.tsx
    ├── PlaybookNextStepsSection.tsx
    └── PlaybookSubPlaybooksSection.tsx
```

---

## Implementierungsreihenfolge

### Woche 1: Datenstruktur

| Tag | Aufgabe | Dateien |
|-----|---------|---------|
| 1 | Types erweitern | types.ts |
| 2 | Playbook-Index erstellen | index.ts |
| 3-5 | Skeleton-Daten (18 Dateien) | [slug].ts |

### Woche 2: UI-Components (Overview)

| Tag | Aufgabe | Dateien |
|-----|---------|---------|
| 1 | Filter-Panel anpassen | PlaybookFilterPanel.tsx, filters.ts |
| 2 | Playbook-Kachel | PlaybookTileCard.tsx |
| 3 | Playbook-Grid | PlaybookTileGrid.tsx |
| 4-5 | Integration + Test | Playbooks.tsx |

### Woche 3: UI-Components (Landing Page)

| Tag | Aufgabe | Dateien |
|-----|---------|---------|
| 1-3 | Section-Components | sections/*.tsx |
| 4 | Landing Page Template | PlaybookLandingPage.tsx |
| 5 | Routing | App.tsx |

### Woche 4+: Content-Befuellung

- User gibt Content fuer 1 Playbook
- Ich fuege Content in entsprechende Datei ein
- Wiederhole fuer alle 18 Playbooks

---

## Naechster Schritt

Ich beginne mit **Schritt 1.1: Types erweitern**

Erweitere `src/data/playbooks/types.ts` um:
- `PlaybookMeta` (fuer Kacheln/Index)
- `ProblemSection`, `WhoThisIsForSection`
- `SolutionsConnection`
- `SubPlaybooksSection`

Soll ich starten?

