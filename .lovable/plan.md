
# Playbook-Architektur: Ultra-Minimal Implementation

## Analyse
Die bisherigen Versuche sind fehlgeschlagen, weil zu viele Dateien gleichzeitig erstellt wurden. Dieser Plan erstellt **nur 1 Datei pro Schritt**.

## Aktueller Stand
- `src/data/playbooks/` - Verzeichnis existiert NICHT
- `src/components/playbooks/sections/` - Verzeichnis existiert NICHT
- `PlaybookGtmRevenue.tsx` - 1164 Zeilen, monolithisch

## Schritt-für-Schritt Implementation

### Schritt 1: Types (1 Datei)
**Erstellen:** `src/data/playbooks/types.ts`

Interfaces:
- BilingualText: `{ en: string; de: string }`
- PlaybookHeroData: breadcrumb, badge, title, subtitle, description, trustBadges, bookingUrl, downloadUrl, gradient
- PlaybookSummaryData: problem, whyItMatters, solution
- FrameworkItem: id, icon, color, bgColor, title, subtitle, description, metrics, actions
- BestPracticeItem: do, dont (beide BilingualText)
- BestPractice: category, items
- RoadmapPhase: phase, timeline, focus, deliverables, color
- CaseStudyResult: metric, before, after, change
- CaseStudy: company, problem, solution, results, timeline
- Persona: icon, role, pain, outcome, color
- RelatedSolution: title, desc, timeline, investment, impact, href, icon, color
- FinalCTAData: headline, subline, trustSignals, bookingUrl, downloadUrl
- PlaybookPageData: kombiniert alle oben

### Schritt 2: GTM Data (1 Datei)
**Erstellen:** `src/data/playbooks/gtm-revenue.ts`

Extrahierte Inhalte aus PlaybookGtmRevenue.tsx:
- Hero: TrendingUp Icon, orange gradient, Trust Badges (~2400 words, 3 Case Studies, 12-Week Roadmap)
- Summary: Problem (CAC inflation), Why (strategic bottleneck), Solution (3-component framework)
- Framework: 7 Levers (ICP, Outbound, Inbound, Partners, Pricing, Sales, PLG)
- Best Practices: 3 Kategorien (ICP Clarity, Sales Motion, RevOps)
- Roadmap: 3 Phasen (Foundation/Optimization/Scale)
- Case Studies: 3 anonyme Cases (SaaS Scale-Up, Enterprise Tech, Growth-Stage B2B)
- Personas: 4 Rollen (CEO, CMO/CRO, COO, VC)
- Related Solutions: 3 (Power Up, Boost, Expert Session)
- Final CTA: Revenue Engine + Trust Signals

### Schritt 3: Hero Section (1 Datei)
**Erstellen:** `src/components/playbooks/sections/PlaybookHeroSection.tsx`

Enthält:
- Deep Space Background mit Parallax
- TwinklingStars
- Breadcrumb Navigation
- Badge mit dynamischem Icon
- H1/H2 Headlines (bilingual)
- 2 CTAs (Book Call, Download PDF)
- Trust Badges
- Scroll Indicator

### Schritt 4: Summary Section (1 Datei)
**Erstellen:** `src/components/playbooks/sections/PlaybookSummarySection.tsx`

Enthält:
- Problem Card (AlertTriangle Icon, destructive color)
- Why It Matters Card (Target Icon, primary color)
- Solution Card (Zap Icon, accent highlight)

### Schritt 5: Framework Section (1 Datei)
**Erstellen:** `src/components/playbooks/sections/PlaybookFrameworkSection.tsx`

Enthält:
- Section Header mit bilingualen Props
- Accordion mit dynamischer Anzahl Items
- Pro Item: Icon, Title, Subtitle, Description, Metrics Grid, Actions Checklist

### Schritt 6: Best Practices Section (1 Datei)
**Erstellen:** `src/components/playbooks/sections/PlaybookBestPracticesSection.tsx`

Enthält:
- Section Header
- Kategorien mit Do's (Check, gruene Karten) und Don'ts (X, rote Karten)

### Schritt 7: Roadmap Section (1 Datei)
**Erstellen:** `src/components/playbooks/sections/PlaybookRoadmapSection.tsx`

Enthält:
- Section Header
- 3-Column Grid mit Phase Cards
- Gradient Numbers, Timeline Badges, Deliverables Checkliste

### Schritt 8: Case Studies Section (1 Datei)
**Erstellen:** `src/components/playbooks/sections/PlaybookCaseStudiesSection.tsx`

Enthält:
- Section Header
- 3-Column Grid
- Cards mit Problem/Solution/Results
- Before/After Metrics mit Change Badges

### Schritt 9: Personas Section (1 Datei)
**Erstellen:** `src/components/playbooks/sections/PlaybookPersonasSection.tsx`

Enthält:
- Section Header
- 4-Column Grid
- Cards mit Icon, Role, Pain Point (italic), Outcome

### Schritt 10: Solutions Section (1 Datei)
**Erstellen:** `src/components/playbooks/sections/PlaybookSolutionsSection.tsx`

Enthält:
- Section Header
- 3-Column Grid
- Cards mit Icon, Title, Description, Timeline/Investment/Impact, CTA Button

### Schritt 11: CTA Section (1 Datei)
**Erstellen:** `src/components/playbooks/sections/PlaybookCTASection.tsx`

Enthält:
- Gradient Background
- H2 Headline (bilingual mit italic span)
- Subline
- 2 CTAs
- Trust Signals Row

### Schritt 12: Index Export (1 Datei)
**Erstellen:** `src/components/playbooks/sections/index.ts`

Exportiert alle 9 Section Components

### Schritt 13: Refactor GTM Page (1 Datei editieren)
**Bearbeiten:** `src/pages/PlaybookGtmRevenue.tsx`

Von 1164 Zeilen auf ~60 Zeilen:
- Import gtmRevenueData from data
- Import alle Sections
- Composition mit Props

### Schritt 14: Product Data (1 Datei)
**Erstellen:** `src/data/playbooks/product.ts`

Neue Inhalte:
- Hero: Rocket Icon, violet gradient
- Framework: 5 Komponenten (PLG, Velocity, Quality, Analytics, AI-Dev)
- Best Practices: PLG/Velocity/Quality
- Roadmap: 3 Phasen (Week 1-2, 3-4, 5-8)
- Case Studies: 3 Cases (Series A/B/C)
- Personas: CEO, CPO, CTO, VP Engineering

### Schritt 15: Product Page (1 Datei)
**Erstellen:** `src/pages/PlaybookProduct.tsx`

~60 Zeilen - gleiche Struktur wie GTM

### Schritt 16: Routes + Catalog (2 Dateien editieren)
**Bearbeiten:** 
- `src/App.tsx` - Route hinzufuegen
- `src/data/playbooks.ts` - Product Entry hinzufuegen

## Technische Details

### Component Props Pattern
```text
interface PlaybookHeroSectionProps {
  data: PlaybookHeroData;
}

const PlaybookHeroSection: React.FC<PlaybookHeroSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  return (
    <section>
      <h1>{data.title}</h1>
      <p>{data.subtitle[language]}</p>
      ...
    </section>
  );
};
```

### Page Composition Pattern
```text
import { gtmRevenueData } from '@/data/playbooks/gtm-revenue';
import {
  PlaybookHeroSection,
  PlaybookSummarySection,
  PlaybookFrameworkSection,
  ...
} from '@/components/playbooks/sections';

const PlaybookGtmRevenue = () => (
  <div>
    <Navigation />
    <PlaybookHeroSection data={gtmRevenueData.hero} />
    <PlaybookSummarySection data={gtmRevenueData.summary} />
    ...
    <Footer />
  </div>
);
```

## Erwartetes Ergebnis

| Metrik | Vorher | Nachher |
|--------|--------|---------|
| Zeilen pro Playbook-Page | 1164 | ~60 |
| Zeit fuer neues Playbook | Stunden | Minuten |
| Design-Konsistenz | Manuell | Automatisch |
| Typsicherheit | Keine | Vollstaendig |

Nach Abschluss:
- `/playbooks/gtm-revenue` - funktioniert mit modularer Architektur
- `/playbooks/product` - neue Page mit Product Playbook
- Neue Playbooks in <30 Minuten erstellbar
