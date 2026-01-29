

# Plan: Product Playbook v2.0 - Vollständige Implementierung

## Problem-Diagnose
Die vorherigen Implementierungsversuche wurden nie tatsächlich committet. Die Suche bestätigt:
- Keine Datei `PlaybookProduct.tsx` existiert
- Keine Route `/playbooks/growth-engines/product` in App.tsx
- Nur das GTM/Revenue Playbook existiert in playbooks.ts

---

## Phase 1: Playbook-Daten erweitern

**Datei:** `src/data/playbooks.ts`

Rocket Icon importieren und Product Playbook Eintrag hinzufügen:

```typescript
import { TrendingUp, Rocket } from 'lucide-react';

// Nach dem gtm-revenue Eintrag:
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

---

## Phase 2: Route hinzufügen

**Datei:** `src/App.tsx`

Lazy Import (nach Zeile 67):
```typescript
const PlaybookProduct = lazy(() => import("./pages/PlaybookProduct"));
```

Route (nach Zeile 145):
```typescript
<Route path="/playbooks/growth-engines/product" element={<PlaybookProduct />} />
```

---

## Phase 3: Landing Page erstellen

**Neue Datei:** `src/pages/PlaybookProduct.tsx`

Basiert auf dem GTM/Revenue Template (`PlaybookGtmRevenue.tsx`) mit folgenden Anpassungen:

### 8 Sektionen

| # | Sektion | Inhalt |
|---|---------|--------|
| 1 | HeroSection | Breadcrumb, Badge (Rocket Icon), H1/H2, 2 CTAs |
| 2 | ProblemSection | 4 Pain Points mit X-Icons |
| 3 | FrameworkSection | 5-Komponenten Accordion |
| 4 | CaseStudiesSection | 3 anonymisierte Cases |
| 5 | ImplementationSection | 90-Day Roadmap (3 Phasen) |
| 6 | WhoItsForSection | 4 Personas |
| 7 | SolutionsSection | Power Up + Boost CTAs |
| 8 | FinalCTASection | Download + Book Call |

### Hero Section
- Breadcrumb: Playbooks > Product Playbook
- Badge: Playbook · Growth Engines (Rocket Icon)
- H1: Product Playbook
- H2: How to build products that scale with AI
- CTAs: 
  - Book Call → https://scalingx.fillout.com/inflection-call
  - Download PDF → (User wählt Dateinamen)

### Problem Section (NEU - nicht im GTM Template)
4 Pain Points:
- Shipping Too Slow: Quarterly vs. Weekly releases
- Building Wrong Features: 70% rarely/never used
- PMF Takes Too Long: 12-24 months vs. 3-6 months
- Technical Debt Growing: 30-50% vs. 10-20% engineering time

### Framework Section (5 Komponenten Accordion)

| # | Komponente | Icon | Farbe |
|---|-----------|------|-------|
| 1 | PLG Architecture | Sparkles | violet |
| 2 | Shipping Velocity | Rocket | blue |
| 3 | Feature Quality | Shield | emerald |
| 4 | Product Analytics | BarChart3 | amber |
| 5 | AI-Powered Dev | Brain | purple |

Jedes Accordion-Item enthält:
- Subtitle (What it is)
- Description (Why it matters)
- Key Metrics (3-5 Bullets)
- Action Items (3-5 Bullets)

### Case Studies Section
3 anonymisierte Cases:
- Series A SaaS: PMF in 3 months, Velocity +12x, Activation +160%
- Series B Dev Tool: Velocity +12x, Debt 40%→15%, Bug Rate -90%
- Series C Marketing: Users 50k→1M, CAC -90%, ARR €40M→€120M

### Implementation Section (90-Day Roadmap)
- Phase 1 STRATEGY (Week 1-2): Vision, Roadmap, PLG Strategy
- Phase 2 SETUP (Week 3-4): Analytics, CI/CD, AI Copilots
- Phase 3 EXECUTION (Week 5-8): Weekly Releases, A/B Tests

### Who It's For Section
4 Personas:
- CEO: "Need a product that scales"
- CPO: "Responsible for velocity + PMF"
- CTO: "Ship faster without sacrificing quality"
- VP Engineering: "Reduce debt, increase velocity"

### Solutions Section
- Power Up: 30 Days, €23.6K, Velocity +200-400%
- Boost: 90 Days, €60K-78K, PMF in 3-6 months
- Not Sure: Book Free Inflection Call

### Final CTA Section
- H2: Ready to build products that scale?
- CTAs: Book Call + Download PDF
- Trust Signals: No commitment, 30 minutes, Concrete next steps

---

## Technische Details

### Design-System
- Gradient: `from-violet-500 to-purple-600` (unterscheidet sich vom GTM orange)
- TwinklingStars, Deep Space Background (wie GTM)
- Gleiche UI-Komponenten (Card, Badge, Accordion, Button)

### Hooks
- `useLanguage()` - Bilingual DE/EN
- `useScrollAnimation()` - Section Animations
- `useParallaxLayers()` - Hero Background

### CTAs
- Booking: https://scalingx.fillout.com/inflection-call
- Download: Pfad wird noch vom User definiert

---

## Implementierungsreihenfolge

1. `src/data/playbooks.ts` - Rocket Import + Product Eintrag
2. `src/App.tsx` - PlaybookProduct Import + Route
3. `src/pages/PlaybookProduct.tsx` - Vollständige Landing Page

---

## Erwartetes Ergebnis

- `/playbooks` zeigt 2 Kacheln (GTM/Revenue + Product)
- Klick auf "Learn More" → `/playbooks/growth-engines/product`
- Landing Page mit 8 Sektionen, violet/purple Design
- Download-Button verweist auf konfigurierten PDF-Pfad
- Book-Button verweist auf Fillout Inflection Call

