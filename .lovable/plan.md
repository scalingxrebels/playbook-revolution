

# Plan: Product Playbook v2.0 - Komplette Implementierung + Ref-Fix

## Problem-Analyse
Die vorherige Implementierung wurde nicht vollständig ausgeführt. Zusätzlich gibt es React-Warnungen wegen fehlender `forwardRef`.

---

## Phase 1: Ref-Warnungen beheben (optional, nicht kritisch)

### 1.1 PlaybookModal.tsx - forwardRef hinzufügen
```typescript
const PlaybookModal = React.forwardRef<HTMLDivElement, PlaybookModalProps>(...)
```

### 1.2 Footer.tsx - forwardRef hinzufügen
```typescript
const Footer = React.forwardRef<HTMLElement, Record<string, never>>(...)
```

---

## Phase 2: Product Playbook Kachel & Route

### 2.1 playbooks.ts - Product Playbook Eintrag hinzufügen
```typescript
import { TrendingUp, Rocket } from 'lucide-react';

// Neuer Eintrag nach gtm-revenue:
{
  id: 'product',
  slug: 'growth-engines/product',
  title: { en: 'Product Playbook', de: 'Product Playbook' },
  description: {
    en: 'How to build products that scale with AI. Learn the 5-component framework...',
    de: 'Wie du Produkte baust, die mit AI skalieren...'
  },
  outcomes: { en: [...], de: [...] },
  caseStudies: ['Series A SaaS (3 Months to PMF)', ...],
  icon: React.createElement(Rocket, { className: 'w-6 h-6' }),
  gradient: 'from-violet-500 to-purple-600',
  impact: ['growth-engines'],
  bottleneck: ['strategy', 'execution-focus'],
  role: ['ceo', 'cpo', 'cto']
}
```

### 2.2 App.tsx - Route hinzufügen
```typescript
const PlaybookProduct = lazy(() => import("./pages/PlaybookProduct"));
// ...
<Route path="/playbooks/growth-engines/product" element={<PlaybookProduct />} />
```

---

## Phase 3: PlaybookProduct.tsx Landing Page

Erstelle neue Datei `src/pages/PlaybookProduct.tsx` mit 8 Sektionen:

| # | Sektion | Inhalt |
|---|---------|--------|
| 1 | Hero | "Product Playbook", CTAs: Download PDF + Book Call |
| 2 | Problem | 4 Pain Points (Shipping Slow, Wrong Features, PMF Too Long, Tech Debt) |
| 3 | Framework | 5-Komponenten Accordion (PLG, Velocity, Quality, Analytics, AI-Dev) |
| 4 | Case Studies | 3 anonymisierte Cases (Series A/B/C) |
| 5 | Implementation | 90-Day Roadmap (Strategy, Setup, Execution) |
| 6 | Who It's For | 4 Personas (CEO, CPO, CTO, VP Engineering) |
| 7 | Solutions | Power Up (€23.6K) + Boost (€60K-78K) |
| 8 | Final CTA | Download + Book Call |

### Technische Details:
- Basiert auf GTM/Revenue Template (PlaybookGtmRevenue.tsx)
- Imports: Accordion, Lucide Icons (Rocket, Sparkles, Shield, BarChart3, Brain)
- Hooks: useLanguage(), useScrollAnimation()
- Design: Violet/Purple Gradient (unterscheidet sich von GTM Orange)

---

## Implementierungsreihenfolge

1. **Schritt A**: `playbooks.ts` - Rocket Import + Product Eintrag
2. **Schritt B**: `App.tsx` - PlaybookProduct Import + Route
3. **Schritt C**: `PlaybookProduct.tsx` - Vollständige Landing Page erstellen
4. **Schritt D** (optional): Ref-Warnungen in PlaybookModal und Footer beheben

---

## Erwartetes Ergebnis

- `/playbooks` zeigt 2 Kacheln (GTM/Revenue + Product)
- `/playbooks/growth-engines/product` -> Vollständige Landing Page
- Download-Button -> `/downloads/product-playbook.pdf`
- Booking-Button -> `https://scalingx.fillout.com/inflection-call`
- Keine React Ref-Warnungen mehr in Console

