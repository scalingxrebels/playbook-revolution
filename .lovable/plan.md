
# Fix: UI-Komponenten in kleinen Batches erstellen

## Problem
Der Versuch, 8 Section-Komponenten parallel zu erstellen, ist fehlgeschlagen. Das Verzeichnis `src/components/playbooks/sections/` ist leer.

## Loesung: 2-3 Komponenten pro Durchgang

### Batch 1 (3 Komponenten)
- `PlaybookHeroSection.tsx` (~80 Zeilen)
- `PlaybookSummarySection.tsx` (~50 Zeilen)
- `PlaybookProblemSection.tsx` (~60 Zeilen)

### Batch 2 (3 Komponenten)
- `PlaybookFrameworkSection.tsx` (~80 Zeilen)
- `PlaybookRoadmapSection.tsx` (~70 Zeilen)
- `PlaybookCaseStudiesSection.tsx` (~80 Zeilen)

### Batch 3 (3 Komponenten)
- `PlaybookSolutionsSection.tsx` (~70 Zeilen)
- `PlaybookPersonasSection.tsx` (~60 Zeilen)
- `PlaybookFinalCTASection.tsx` (~50 Zeilen)

### Batch 4 (2 Komponenten)
- `PlaybookSubPlaybooksSection.tsx` (~50 Zeilen) - nur fuer Ebene 2
- `index.ts` - Exportiert alle Sections

### Batch 5: Wrapper
- `PlaybookLandingPage.tsx` - Orchestriert alle Sections basierend auf `PlaybookPageData`

## Komponenten-Struktur

Jede Section-Komponente folgt diesem Muster:

```typescript
import { useLanguage } from '@/contexts/LanguageContext';
import type { BilingualText } from '@/data/playbooks/types';

interface Props {
  data: SectionSpecificData;
}

const Section: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];
  
  return (
    <section className="py-16 md:py-24">
      {/* Section content */}
    </section>
  );
};

export default Section;
```

## Naechster Schritt

Erstelle Batch 1: `PlaybookHeroSection`, `PlaybookSummarySection`, `PlaybookProblemSection`
