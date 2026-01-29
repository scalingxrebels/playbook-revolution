

# Plan: GTM/Revenue Playbook Kachel + Landing Page

## Briefing-Analyse: Abweichungen und Anpassungen

### Wichtige Erkenntnisse aus dem Briefing

| Briefing-Element | Status | Anpassung |
|------------------|--------|-----------|
| URL: `/playbooks/growth-engines/gtm-revenue` | Abweichung | Nutze flache URL: `/playbooks/gtm-revenue` (konsistent mit Power Up Pattern) |
| Kachel-Design im Briefing (eigenes Layout) | Abweichung | Nutze bestehendes `PlaybookCard.tsx` Design-Pattern |
| Badge-Struktur: Area + Bottleneck + Role | Passt | Datenmodell `playbooks.ts` unterstützt dies bereits |
| Landing Page: 8 Sektionen | Passt | Folgt Power Up Landing Page Muster (7-8 Sektionen) |
| Sticky Footer CTA | Abweichung | Nutze Standard-CTA-Sektion am Ende (konsistent mit Power Up) |

---

## Teil 1: Playbook-Kachel (Daten)

### Änderung in `src/data/playbooks.ts`

Erstes Playbook hinzufügen:

```typescript
import { TrendingUp } from 'lucide-react';
import React from 'react';
import type { ImpactTag, BottleneckTag, RoleTag } from './playbookFilters';

export interface Playbook {
  id: string;
  slug: string;  // NEU: für URL-Routing
  title: { en: string; de: string };
  description: { en: string; de: string };
  outcomes: { en: string[]; de: string[] };
  caseStudies: string[];
  icon: React.ReactNode;
  gradient: string;
  impact: ImpactTag[];
  bottleneck: BottleneckTag[];
  role: RoleTag[];
}

export const playbooks: Playbook[] = [
  {
    id: 'gtm-revenue',
    slug: 'gtm-revenue',
    title: {
      en: 'GTM/Revenue Playbook',
      de: 'GTM/Revenue Playbook',
    },
    description: {
      en: 'How to build a revenue engine that scales with AI. Learn the 3-component framework (ICP Clarity + Sales Motion + RevOps) used by AI-native companies to reduce CAC by 50% and increase win rates by 100%.',
      de: 'Wie du eine Revenue Engine aufbaust, die mit AI skaliert. Lerne das 3-Komponenten-Framework (ICP Clarity + Sales Motion + RevOps), das AI-native Unternehmen nutzen, um CAC um 50% zu senken und Win Rates um 100% zu steigern.',
    },
    outcomes: {
      en: [
        'CAC reduction of 40-60% through ICP clarity',
        'Win rate improvement of 50-100% through sales motion optimization',
        'Sales cycle reduction of 30-50% through RevOps automation',
        'Clear 90-day implementation roadmap',
      ],
      de: [
        'CAC-Reduktion von 40-60% durch ICP-Klarheit',
        'Win Rate Verbesserung von 50-100% durch Sales Motion Optimierung',
        'Sales Cycle Reduktion von 30-50% durch RevOps Automation',
        'Klare 90-Tage-Implementierungs-Roadmap',
      ],
    },
    caseStudies: ['Series B SaaS (€15M ARR)', 'Series C Fintech (€40M ARR)', 'Series A Healthtech (€5M ARR)'],
    icon: React.createElement(TrendingUp, { className: 'w-6 h-6' }),
    gradient: 'from-orange-500 to-amber-500',
    impact: ['growth-engines'],
    bottleneck: ['strategy', 'execution-focus'],
    role: ['ceo', 'cmo-cro'],
  },
];
```

---

## Teil 2: Playbook-Kachel (UI-Anpassung)

### Änderung in `src/components/playbooks/PlaybookCard.tsx`

CTAs anpassen:
- Primärer Button: "Learn More" → navigiert zu `/playbooks/{slug}`
- Template-Button: Bleibt für Download-Funktion

```typescript
// Statt onOpen → Navigation zur Landing Page
const handleLearnMore = () => {
  window.location.href = `/playbooks/${playbook.slug}`;
};
```

---

## Teil 3: Routing

### Änderung in `src/App.tsx`

Neue Route hinzufügen:

```typescript
const PlaybookGtmRevenue = lazy(() => import("./pages/PlaybookGtmRevenue"));

// In Routes:
<Route path="/playbooks/gtm-revenue" element={<PlaybookGtmRevenue />} />
```

---

## Teil 4: Landing Page

### Neue Datei: `src/pages/PlaybookGtmRevenue.tsx`

**Struktur: 8 Sektionen (analog zu Power Up Landing Pages)**

| Sektion | Inhalt |
|---------|--------|
| 1. Hero | Icon, Titel, Tagline, 2 CTAs (Inflection Call + Download PDF) |
| 2. Executive Summary | Problem, Why It Matters, Solution (150 Wörter) |
| 3. The Framework | 3 Komponenten: ICP Clarity, Sales Motion, RevOps (600 Wörter) |
| 4. Best Practices | What Works (5), What Doesn't (3), Common Pitfalls (3) |
| 5. Implementation Guide | 4 Phasen: Strategy, Setup, Execution, Operationalization |
| 6. Case Studies | 3 Beispiele: Series B SaaS, Series C Fintech, Series A Healthtech |
| 7. Related Solutions | Power Up CAC Crisis, Boost GTM Transformation, Expert Session |
| 8. Final CTA | Inflection Call buchen |

**Design-Elemente (aus Power Up Landing Pages übernommen):**
- Deep Space Background mit TwinklingStars
- Parallax-Effekte via `useParallaxLayers`
- Breadcrumb: `Playbooks > GTM/Revenue Playbook`
- Badge: `Playbook · Growth Engines`
- Scroll-Animationen via `useScrollAnimation`

---

## Teil 5: Hero-Statistiken anpassen

### Änderung in `src/components/PlaybookLibrary.tsx`

Statistik von `0` auf `1` aktualisieren:

```typescript
const playbookStats = [
  { value: '1', label: { en: 'Playbooks', de: 'Playbooks' }, color: 'primary' as const },
  // ...
];
```

---

## Datei-Übersicht

| Datei | Aktion | Beschreibung |
|-------|--------|--------------|
| `src/data/playbooks.ts` | Bearbeiten | Interface erweitern (slug), GTM Playbook hinzufügen |
| `src/components/playbooks/PlaybookCard.tsx` | Bearbeiten | CTA zu Landing Page verlinken |
| `src/components/PlaybookLibrary.tsx` | Bearbeiten | Stats aktualisieren (1 Playbook) |
| `src/App.tsx` | Bearbeiten | Route `/playbooks/gtm-revenue` hinzufügen |
| `src/pages/PlaybookGtmRevenue.tsx` | **NEU** | 8-Sektionen Landing Page (analog Power Up) |

---

## Landing Page Content (Zusammenfassung)

### Sektion 1: Hero
- Badge: "Playbook · Growth Engines"
- Headline: "GTM/Revenue Playbook"
- Tagline: "How to build a revenue engine that scales with AI"
- CTAs: [Book Inflection Call] [Download Playbook PDF]

### Sektion 2: Executive Summary
- The Problem: CAC inflation, declining win rates
- Why It Matters: Strategic bottleneck
- The Solution: 3-Component GTM Framework

### Sektion 3: The Framework
- ICP Clarity (Strategy) → 5 Dimensionen
- Sales Motion (Execution) → 7-Stage Playbook
- Revenue Operations (Operationalization) → 5-Tool Stack
- Feedback Loop Visualisierung

### Sektion 4: Best Practices
- 5 What Works (mit Beispielen)
- 3 What Doesn't Work (mit Beispielen)
- 3 Common Pitfalls (mit Lösungen)

### Sektion 5: Implementation Guide
- Phase 1: Strategy (Week 1-2)
- Phase 2: Setup (Week 3-4)
- Phase 3: Execution (Week 5-8)
- Phase 4: Operationalization (Week 9-12)

### Sektion 6: Case Studies
- Series B SaaS: CAC -50%, Win Rate +100%
- Series C Fintech: Win Rate +100%, Revenue +€8M
- Series A Healthtech: 15 Reps scaled, Velocity +40%

### Sektion 7: Related Solutions
- Power Up: CAC Crisis (€23.6K)
- Boost: GTM Transformation (€45.9K)
- Expert Session: GTM Strategy (€890)

### Sektion 8: Final CTA
- "Ready to build your revenue engine?"
- [Book Inflection Call] [Download Full Playbook]

---

## Geschätzte Wortanzahl

| Sektion | Wörter (EN) |
|---------|-------------|
| Executive Summary | ~150 |
| Framework | ~600 |
| Best Practices | ~500 |
| Implementation | ~500 |
| Case Studies | ~400 |
| Related Solutions | ~250 |
| **Gesamt** | **~2,400** |

