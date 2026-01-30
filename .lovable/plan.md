
# Fix: Product Playbook zur Kachel-Ansicht hinzufügen

## Problem

Die `/playbooks` Übersichtsseite zeigt nur **1 Playbook** (GTM/Revenue), obwohl 18 Playbooks in der neuen Datenstruktur existieren. Der Grund:

- `usePlaybookFilters.ts` importiert von `@/data/playbooks` (Legacy-Datei mit nur 1 Eintrag)
- Die neue modulare Datenstruktur `@/data/playbooks/index.ts` mit allen 18 Playbooks wird nicht verwendet

## Lösung: Zwei Optionen

### Option A: Legacy-Datei erweitern (Schnell)
Das Product Playbook zur Legacy-Datei `src/data/playbooks.ts` hinzufügen.

**Vorteil:** Minimaler Aufwand
**Nachteil:** Duplizierung der Daten (Teaser in 2 Dateien pflegen)

### Option B: Import umstellen (Sauberer) - EMPFOHLEN
Den `usePlaybookFilters.ts` Hook auf die neue modulare Datenquelle umstellen.

**Vorteil:** Single Source of Truth, alle 18 Playbooks sofort sichtbar
**Nachteil:** Erfordert Interface-Anpassung (unterschiedliche Feldnamen)

---

## Empfohlene Umsetzung: Option A (für sofortige Sichtbarkeit)

Da die Interfaces unterschiedlich sind (Legacy: `icon` als ReactNode, Neu: `icon` als String), fügen wir das Product Playbook vorerst zur Legacy-Datei hinzu.

### Änderungen

**Datei:** `src/data/playbooks.ts`

```typescript
import { TrendingUp, Rocket } from 'lucide-react';
import React from 'react';
import type { ImpactTag, BottleneckTag, RoleTag } from './playbookFilters';

export interface Playbook {
  // ... existing interface
}

export const playbooks: Playbook[] = [
  {
    // GTM/Revenue Playbook (existing)
    id: 'gtm-revenue',
    // ...
  },
  {
    id: 'product',
    slug: 'growth-engines/product',
    title: {
      en: 'Product Playbook',
      de: 'Product Playbook',
    },
    description: {
      en: 'How to build products that scale with AI. Learn the 5-component framework (Product-Led Growth, Shipping Velocity, Feature Quality, Product Analytics, AI-Powered Development) used by AI-native companies to ship 10x faster and achieve product-market fit in weeks, not years. Includes best practices, implementation guide, and real-world case studies from Series A-C companies.',
      de: 'Wie du Produkte baust, die mit AI skalieren. Lerne das 5-Komponenten-Framework (Product-Led Growth, Shipping Velocity, Feature Quality, Product Analytics, AI-Powered Development), das AI-native Unternehmen nutzen, um 10x schneller zu shippen und Product-Market Fit in Wochen statt Jahren zu erreichen. Inklusive Best Practices, Implementierungsguide und echten Case Studies von Series A-C Unternehmen.',
    },
    outcomes: {
      en: [
        'Shipping velocity increase of 300-500%',
        'Time to PMF reduction of 50-70%',
        'Feature success rate improvement of 100-200%',
        'Clear 90-day implementation roadmap',
      ],
      de: [
        'Shipping Velocity Steigerung von 300-500%',
        'Zeit bis PMF Reduktion von 50-70%',
        'Feature Success Rate Verbesserung von 100-200%',
        'Klare 90-Tage-Implementierungs-Roadmap',
      ],
    },
    caseStudies: ['Series A SaaS (3 months to PMF)', 'Series B DevTool (10x velocity)', 'Series C (1M users with PLG)'],
    icon: React.createElement(Rocket, { className: 'w-6 h-6' }),
    gradient: 'from-green-500 to-teal-500',
    impact: ['growth-engines'],
    bottleneck: ['strategy', 'execution-focus'],
    role: ['ceo', 'cpo', 'cto'],
  },
];
```

---

## Erwartetes Ergebnis

Nach der Änderung:
- `/playbooks` Übersichtsseite zeigt **2 Kacheln** (GTM + Product)
- Product Playbook Kachel zeigt den **5-Komponenten-Framework Teaser**
- "Learn More" Link führt zu `/playbooks/growth-engines/product`

---

## Technische Notizen

1. **Icon-Import**: `Rocket` von lucide-react hinzufügen
2. **Bottleneck-Tags**: `['strategy', 'execution-focus']` für korrekte Filterung
3. **Role-Tags**: `['ceo', 'cpo', 'cto']` gemäß Briefing

## Zukünftige Migration

Langfristig sollte der `usePlaybookFilters.ts` Hook auf die modulare Datenquelle umgestellt werden, um alle 18 Playbooks ohne Duplikation anzuzeigen. Dies erfordert:
1. Anpassung des Playbook-Interfaces (String-Icon statt ReactNode)
2. Dynamisches Icon-Rendering im PlaybookCard-Component
