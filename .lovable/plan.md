
# Playbook-Architektur Refactoring - Micro-Batch Plan

## Status
- `src/data/playbooks/` - LEER (nicht erstellt)
- `src/components/playbooks/sections/` - LEER (nicht erstellt)  
- `PlaybookGtmRevenue.tsx` - 1164 Zeilen (unverändert)

## Neue Strategie: Micro-Batches

Statt 3-4 Dateien pro Batch werden nur 1-2 Dateien erstellt.

---

## Micro-Batch 1: Types Only
Erstelle NUR eine Datei:
- `src/data/playbooks/types.ts`

---

## Micro-Batch 2: GTM Data Only
Erstelle NUR eine Datei:
- `src/data/playbooks/gtm-revenue.ts`

---

## Micro-Batch 3: Hero Section Only
Erstelle NUR eine Datei:
- `src/components/playbooks/sections/PlaybookHeroSection.tsx`

---

## Micro-Batch 4-9: Remaining Sections
Je eine Datei pro Batch:
- `PlaybookSummarySection.tsx`
- `PlaybookFrameworkSection.tsx`
- `PlaybookBestPracticesSection.tsx`
- `PlaybookRoadmapSection.tsx`
- `PlaybookCaseStudiesSection.tsx`
- `PlaybookCTASection.tsx` (kombiniert Personas + Solutions + CTA)

---

## Micro-Batch 10: Refactor GTM Page
- `src/pages/PlaybookGtmRevenue.tsx` auf ~80 Zeilen reduzieren

---

## Micro-Batch 11: Product Playbook
- `src/data/playbooks/product.ts`
- `src/pages/PlaybookProduct.tsx`
- Route in `App.tsx`
- Entry in `playbooks.ts`

---

## Technische Details

### types.ts (~80 Zeilen)
```text
BilingualText { en: string; de: string }
PlaybookHeroData { breadcrumb, badge, title, subtitle, description, trustBadges, bookingUrl, downloadUrl, gradient }
PlaybookSummaryData { problem, whyItMatters, solution }
FrameworkItem { id, icon, color, bgColor, title, subtitle, description, metrics, actions }
BestPractice { category, dos, donts }
RoadmapPhase { phase, title, timeline, focus, deliverables, gradient }
CaseStudy { company, problem, solution, results, timeline }
Persona { icon, role, pain, outcome, color }
RelatedSolution { title, desc, timeline, investment, impact, href, icon, color }
PlaybookPageData { hero, summary, framework, bestPractices, roadmap, caseStudies, personas, relatedSolutions, finalCta }
```

### Section Component Pattern (~60-150 Zeilen je)
```text
interface Props { data: SectionData }
const Section: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  // render UI with data[language]
}
export default Section;
```

### Page Composition (~80 Zeilen)
```text
import data from '@/data/playbooks/gtm-revenue';
import sections from '@/components/playbooks/sections';

<Navigation />
<HeroSection data={data.hero} />
<SummarySection data={data.summary} />
<FrameworkSection data={data.framework} />
... weitere sections
<Footer />
```

---

## Erwartetes Ergebnis
- 11 kleine, fokussierte Implementierungsschritte
- Jeder Schritt erstellt maximal 2 Dateien
- Nach Schritt 10: GTM Playbook funktioniert mit neuer Architektur
- Nach Schritt 11: Product Playbook ist live
