

# Plan: Product Playbook v2.0 - Komplette Neuerstellung

## Problem-Zusammenfassung
Die bisherigen Implementierungsversuche wurden nicht abgeschlossen. Es fehlen:
- `src/pages/PlaybookProduct.tsx` (Landing Page)
- Route in `src/App.tsx`
- Eintrag in `src/data/playbooks.ts` (Kachel)

---

## Phase 1: Playbook-Kachel hinzufuegen

### Datei: `src/data/playbooks.ts`

Import erweitern:
```typescript
import { TrendingUp, Rocket } from 'lucide-react';
```

Neuen Eintrag nach gtm-revenue hinzufuegen:
```typescript
{
  id: 'product',
  slug: 'growth-engines/product',
  title: { en: 'Product Playbook', de: 'Product Playbook' },
  description: {
    en: 'How to build products that scale with AI. Learn the 5-component framework (PLG, Shipping Velocity, Feature Quality, Product Analytics, AI-Powered Development) used by AI-native companies to ship 10x faster.',
    de: 'Wie du Produkte baust, die mit AI skalieren. Lerne das 5-Komponenten-Framework, das AI-native Unternehmen nutzen, um 10x schneller zu shippen.'
  },
  outcomes: {
    en: [
      'Time to PMF reduced by 50-75%',
      'Shipping velocity increased 300-500%',
      'Feature success rate improved 100-200%',
      'Technical debt reduced 30-50%'
    ],
    de: [
      'Time to PMF um 50-75% reduziert',
      'Shipping Velocity um 300-500% gesteigert',
      'Feature Success Rate um 100-200% verbessert',
      'Technical Debt um 30-50% reduziert'
    ]
  },
  caseStudies: ['Series A SaaS (3 Months to PMF)', 'Series B Dev Tool (10x Velocity)', 'Series C (1M Users PLG)'],
  icon: React.createElement(Rocket, { className: 'w-6 h-6' }),
  gradient: 'from-violet-500 to-purple-600',
  impact: ['growth-engines'],
  bottleneck: ['strategy', 'execution-focus'],
  role: ['ceo', 'cpo', 'cto']
}
```

---

## Phase 2: Route hinzufuegen

### Datei: `src/App.tsx`

Lazy Import hinzufuegen (nach Zeile 67):
```typescript
const PlaybookProduct = lazy(() => import("./pages/PlaybookProduct"));
```

Route hinzufuegen (nach Zeile 145):
```typescript
<Route path="/playbooks/growth-engines/product" element={<PlaybookProduct />} />
```

---

## Phase 3: Landing Page erstellen

### Datei: `src/pages/PlaybookProduct.tsx` (neue Datei)

Struktur mit 8 Sektionen:

| # | Sektion | Inhalt |
|---|---------|--------|
| 1 | HeroSection | Breadcrumb, Badge, H1, H2, Description, 2 CTAs |
| 2 | ProblemSection | 4 Pain Points mit X-Icons |
| 3 | FrameworkSection | 5-Komponenten Accordion |
| 4 | CaseStudiesSection | 3 anonymisierte Cases |
| 5 | ImplementationSection | 90-Day Roadmap (3 Phasen) |
| 6 | WhoItsForSection | 4 Personas |
| 7 | SolutionsSection | Power Up + Boost CTAs |
| 8 | FinalCTASection | Download + Book Call |

### Hero Section
- Breadcrumb: Playbooks > Product Playbook
- Badge: Playbook - Growth Engines (Rocket Icon)
- H1: Product Playbook
- H2: How to build products that scale with AI
- CTAs: Download PDF + Book Call

### Problem Section (NEU)
4 Pain Points:
- Shipping Too Slow: Quarterly vs. Weekly
- Building Wrong Features: 70% rarely/never used
- PMF Takes Too Long: 12-24 months vs. 3-6 months
- Technical Debt Growing: 30-50% vs. 10-20%

### Framework Section (5 Komponenten)

| # | Komponente | Icon | Farbe |
|---|-----------|------|-------|
| 1 | PLG Architecture | Sparkles | violet |
| 2 | Shipping Velocity | Rocket | blue |
| 3 | Feature Quality | Shield | emerald |
| 4 | Product Analytics | BarChart3 | amber |
| 5 | AI-Powered Dev | Brain | purple |

### Case Studies Section
- Series A SaaS: PMF in 3 months, Velocity +12x
- Series B Dev Tool: Velocity +12x, Debt 40% to 15%
- Series C Marketing: Users 50k to 1M, CAC -90%

### Implementation Section
- Phase 1 STRATEGY (Week 1-2): Vision, Roadmap, PLG Strategy
- Phase 2 SETUP (Week 3-4): Analytics, CI/CD, AI Copilots
- Phase 3 EXECUTION (Week 5-8): Weekly Releases, A/B Tests

### Who Its For Section
- CEO: Need a product that scales
- CPO: Responsible for velocity + PMF
- CTO: Ship faster without sacrificing quality
- VP Engineering: Reduce debt, increase velocity

### Solutions Section
- Power Up: 30 Days, 23.6K EUR, Velocity +200-400%
- Boost: 90 Days, 60K-78K EUR, PMF in 3-6 months
- Not Sure: Book Free Inflection Call

### Final CTA Section
- H2: Ready to build products that scale?
- CTAs: Book Call + Download PDF
- Trust Signals: No commitment, 30 minutes, Concrete next steps

---

## Phase 4: Ref-Warnungen beheben (optional)

### PlaybookModal.tsx
Wrap mit forwardRef (funktional, nicht kritisch)

### Footer.tsx
Wrap mit forwardRef (funktional, nicht kritisch)

---

## Technische Details

### Imports fuer PlaybookProduct.tsx
```typescript
import { Rocket, Sparkles, Shield, BarChart3, Brain, X, Check, 
         Download, Calendar, ArrowRight, Briefcase, Target, 
         Settings, Users, ChevronLeft } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
```

### Hooks
- useLanguage() - Bilingual DE/EN
- useScrollAnimation() - Section Animations

### Design
- Gradient: from-violet-500 to-purple-600 (unterscheidet sich von GTM orange)
- TwinklingStars Background (wie GTM)
- Gleiche Card/Badge Komponenten

---

## Implementierungsreihenfolge

1. playbooks.ts - Rocket Import + Product Eintrag
2. App.tsx - PlaybookProduct Import + Route
3. PlaybookProduct.tsx - Komplette Landing Page

---

## Erwartetes Ergebnis

Nach der Implementierung:
- /playbooks zeigt 2 Kacheln (GTM/Revenue + Product)
- /playbooks/growth-engines/product zeigt vollstaendige Landing Page
- Download-Button verweist auf /downloads/product-playbook.pdf
- Book-Button verweist auf Fillout Inflection Call

