
# Analyse: AI-Native Growth Engines Playbook (Ebene 2) v2.0 vs. Aktueller Stand

## Zusammenfassung

Das Briefing v2.0 spezifiziert das **EBENE 2 DOMAIN PLAYBOOK: AI-Native Growth Engines** mit **3 Sub-Playbooks Connection**. Der aktuelle Code-Stand zeigt:

1. **Kachel FEHLT komplett** - Growth Engines Domain Playbook ist NICHT in `src/data/playbooks.ts` (nur die 3 Sub-Playbooks existieren)
2. **Kachel-Metadaten vorhanden** in `src/data/playbooks/index.ts` (ID 2) - Description generisch, sollte Framework erwähnen
3. **Content-Skelett leer** in `src/data/playbooks/content/growth-engines.ts` (nur Platzhalter "...")
4. **Route FEHLT** - Keine Route für `/playbooks/growth-engines` in `App.tsx`
5. **Page-Komponente FEHLT** - Keine `PlaybookGrowthEngines.tsx` Datei vorhanden

---

## Teil 1: KACHEL (Overview Page)

### Aktueller Stand vs. Briefing

| Element | Briefing | Aktuell (Legacy) | Aktuell (index.ts ID 2) | Status |
|---------|----------|------------------|-------------------------|--------|
| **Icon** | `TrendingUp` (32px) | FEHLT | `TrendingUp` | OK (aber Legacy FEHLT) |
| **Headline** | "AI-Native Growth Engines Playbook" | FEHLT | OK | Legacy FEHLT |
| **Badges Area** | Growth Engines | FEHLT | `['growth-engines']` | OK |
| **Badges Bottleneck** | Strategy, Execution | FEHLT | `['strategy', 'execution-focus']` | OK |
| **Badges Role** | CEO, CMO/CRO, CPO | FEHLT | `['ceo', 'cmo-cro']` | **CPO fehlt** |
| **Teaser** | 52 Wörter, 3 Sub-Playbooks Framework | FEHLT | Generic (old) | MUSS AKTUALISIERT |

---

## Teil 2: Änderungen

### 2.1 Neuer Eintrag für playbooks.ts (Legacy Tile Grid)

```typescript
// Import erweitern (TrendingUp bereits vorhanden)

// Neuer Eintrag (Position: Ebene 2 vor den Sub-Playbooks):
{
  id: 'growth-engines',
  slug: 'growth-engines',
  title: {
    en: 'AI-Native Growth Engines Playbook',
    de: 'AI-Native Growth Engines Playbook',
  },
  description: {
    en: 'How to transform revenue generation with AI-native growth engines. Learn the complete framework (GTM/Revenue, Product, Customer Success) used by AI-native companies to achieve 3-5x faster growth, reduce CAC by 60-75%, and increase LTV/CAC by 50-100%. Includes 3 detailed sub-playbooks, implementation guides, and real-world case studies from Series A-C companies.',
    de: 'Wie du Revenue-Generierung mit AI-native Growth Engines transformierst. Lerne das komplette Framework (GTM/Revenue, Product, Customer Success), das AI-native Unternehmen nutzen, um 3-5x schnelleres Wachstum zu erzielen, CAC um 60-75% zu senken und LTV/CAC um 50-100% zu steigern. Inklusive 3 detaillierter Sub-Playbooks, Implementierungsguides und echten Case Studies von Series A-C Unternehmen.',
  },
  outcomes: {
    en: [
      '3-5x faster growth rate',
      'CAC reduction of 60-75%',
      'LTV/CAC improvement of 50-100%',
      '3 detailed sub-playbooks included',
    ],
    de: [
      '3-5x schnellere Wachstumsrate',
      'CAC-Reduktion von 60-75%',
      'LTV/CAC Verbesserung von 50-100%',
      '3 detaillierte Sub-Playbooks inklusive',
    ],
  },
  caseStudies: ['Series A SaaS (CAC -70%)', 'Series B SaaS (LTV/CAC 15x)', 'Series C (€100M ARR in 18mo)'],
  icon: React.createElement(TrendingUp, { className: 'w-6 h-6' }),
  gradient: 'from-green-500 to-emerald-500',
  impact: ['growth-engines'],
  bottleneck: ['strategy', 'execution-focus'],
  role: ['ceo', 'cmo-cro', 'cpo'],
}
```

### 2.2 Update für index.ts (ID 2)

```typescript
{
  id: 2,
  slug: 'growth-engines',
  title: {
    en: 'AI-Native Growth Engines Playbook',
    de: 'AI-Native Growth Engines Playbook',
  },
  description: {
    en: 'How to transform revenue generation with AI-native growth engines. Learn the complete framework (GTM/Revenue, Product, Customer Success) used by AI-native companies to achieve 3-5x faster growth, reduce CAC by 60-75%, and increase LTV/CAC by 50-100%. Includes 3 detailed sub-playbooks, implementation guides, and real-world case studies from Series A-C companies.',
    de: 'Wie du Revenue-Generierung mit AI-native Growth Engines transformierst. Lerne das komplette Framework (GTM/Revenue, Product, Customer Success), das AI-native Unternehmen nutzen, um 3-5x schnelleres Wachstum zu erzielen, CAC um 60-75% zu senken und LTV/CAC um 50-100% zu steigern. Inklusive 3 detaillierter Sub-Playbooks, Implementierungsguides und echten Case Studies von Series A-C Unternehmen.',
  },
  icon: 'TrendingUp', // Bereits korrekt
  color: 'green',
  gradient: 'from-green-500 to-emerald-500',
  area: ['growth-engines'],
  bottleneck: ['strategy', 'execution-focus'],
  role: ['ceo', 'cmo-cro', 'cpo'], // CPO hinzugefügt
  ebene: 2,
  parent: 1,
  children: [7, 8, 9],
}
```

### 2.3 Vollständiger Content für growth-engines.ts (~500 Zeilen)

**Hero Section:**
- Badge: "Growth Engines · Domain Playbook"
- Title: "AI-Native Growth Engines Playbook"
- Subtitle: "How to transform revenue generation with AI-native growth engines"
- Description: 110 Wörter (Briefing-Text)
- Trust Badges: ~3,000 Words, 3 Sub-Playbooks, 3 Case Studies, 90-Day Roadmap
- Gradient: from-green-500 to-emerald-500

**Summary Section:**
- Problem: High CAC (€10k-€50k), low LTV/CAC (2-3x), slow growth (30-50% YoY), linear scaling
- Why It Matters: Growth Engines are MULTIPLICATIVE (not additive)
- Solution: Growth Engines Framework (GTM × Product × CS × AI)

**Problem Section (4 Bullets):**
- High CAC: €10k-€50k per customer (vs. €2k-€10k AI-native)
- Low LTV/CAC: 2-3x (vs. 5-20x AI-native)
- Slow Growth: 30-50% YoY (vs. 100-300% AI-native)
- Linear Scaling: Revenue ≈ People (vs. Revenue >>> People AI-native)

**Framework Section (Growth Engines Overview):**

```text
THE GROWTH ENGINES FORMULA:
Hypergrowth = GTM/Revenue × Product × Customer Success × AI

KEY INSIGHT: Growth Engines are MULTIPLICATIVE (not additive)
- Weak GTM × Strong Product × Strong CS = Bottleneck
- Strong GTM × Strong Product × Strong CS = Hypergrowth
```

1. **GTM/Revenue Engine (Dimension 1)**
   - Icon: TrendingUp, Color: orange
   - Impact: CAC -60-75%, Win Rate +50-100%, Sales Cycle -40-60%
   - Sub-Playbook: GTM/Revenue Playbook (7 Hebel)

2. **Product Engine (Dimension 2)**
   - Icon: Package, Color: green
   - Impact: Feature Velocity +3-5x, Time to PMF -50-70%, User Engagement +50-100%
   - Sub-Playbook: Product Playbook (5 Komponenten)

3. **Customer Success Engine (Dimension 6)**
   - Icon: Users, Color: pink
   - Impact: Churn -40-60%, NRR +20-50%, Expansion Rate +50-100%
   - Sub-Playbook: Customer Success Playbook (5 Komponenten)

**Case Studies (3 anonymisiert):**

1. **Series A SaaS Company** (CAC -70%, Growth 3x)
   - Challenge: High CAC (€40k), low growth (35% YoY)
   - Results: CAC €40k → €12k (-70%), LTV/CAC 2.5x → 8x, ARR €10M → €35M
   - Timeline: 18 months | Boost + Accelerate

2. **Series B SaaS Company** (LTV/CAC 15x, Hypergrowth)
   - Challenge: Need hypergrowth (100%+ YoY) for Series C
   - Results: CAC €25k → €8k (-68%), LTV/CAC 3x → 15x, ARR €30M → €100M
   - Timeline: 24 months | Accelerate × 2

3. **Series C Company** (€100M ARR in 18 Months)
   - Challenge: Need €100M ARR in 18 months for IPO readiness
   - Results: CAC €30k → €10k (-67%), LTV/CAC 3.5x → 18x, ARR €40M → €100M
   - Timeline: 18 months | Accelerate + Extension

**Roadmap (90-Day):**
- Phase 1: Assessment (Week 1-2) - Growth Engines Assessment, Bottleneck Analysis, Roadmap
- Phase 2: Build (Week 3-8) - Fix bottleneck engine, improve all 3 engines, AI integration
- Phase 3: Scale (Week 9-12) - Scale all engines, optimize, continuous improvement

**Solutions Connection:**
1. Power Up: Growth Momentum (30 Days, €23.6K)
   - Link: /solutions/power-up/growth-momentum
2. Boost: Growth Engine (90 Days, €60K-€78K)
   - Link: /solutions/boost/growth-engine

**Sub-Playbooks Section (EBENE 2 SPEZIFISCH):**
Da dies ein Ebene 2 Playbook ist, wird Section 9 (Sub-Playbooks) angezeigt:

```text
3 Sub-Playbooks:
├── GTM/Revenue Playbook (7 Hebel)
│   ├── Icon: TrendingUp
│   ├── Link: /playbooks/growth-engines/gtm-revenue
│   └── Teaser: How to build repeatable customer acquisition that scales
├── Product Playbook (5 Komponenten)
│   ├── Icon: Rocket
│   ├── Link: /playbooks/growth-engines/product
│   └── Teaser: How to build products that customers love and scale fast
└── Customer Success Playbook (5 Komponenten)
    ├── Icon: Heart
    ├── Link: /playbooks/growth-engines/customer-success
    └── Teaser: How to retain and expand customers with AI-native CS
```

**Personas:**
- CEOs: Need to achieve hypergrowth and scale 3-5x faster
- CMOs/CROs: Responsible for GTM and revenue growth
- CPOs: Responsible for product development and PMF
- VP Customer Success: Responsible for retention and expansion

**Final CTA:**
- Headline: "Get Started Today"
- Trust Signals: 50-page playbook, 3 sub-playbooks, 3 case studies, 90-day roadmap
- Booking URL: https://scalingx.fillout.com/inflection-call

### 2.4 Neue Page-Komponente

**Datei:** `src/pages/PlaybookGrowthEngines.tsx`
```typescript
import React from 'react';
import PlaybookLandingPage from '@/components/playbooks/PlaybookLandingPage';
import { growthEnginesData } from '@/data/playbooks/content/growth-engines';

const PlaybookGrowthEngines: React.FC = () => {
  return <PlaybookLandingPage data={growthEnginesData} />;
};

export default PlaybookGrowthEngines;
```

### 2.5 Route in App.tsx

```typescript
// Lazy Import hinzufügen
const PlaybookGrowthEngines = lazy(() => import("./pages/PlaybookGrowthEngines"));

// Route hinzufügen (vor den Sub-Playbook Routes)
<Route path="/playbooks/growth-engines" element={<PlaybookGrowthEngines />} />
```

---

## Zusammenfassung der Änderungen

| Datei | Aktion | Geschätzte Zeilen |
|-------|--------|-------------------|
| `src/data/playbooks.ts` | Growth Engines Domain Eintrag hinzufügen | ~35 Zeilen |
| `src/data/playbooks/index.ts` | Description + Role Update für ID 2 | ~10 Zeilen |
| `src/data/playbooks/content/growth-engines.ts` | Vollständiger Content | ~500 Zeilen |
| `src/pages/PlaybookGrowthEngines.tsx` | Neue Datei erstellen | ~10 Zeilen |
| `src/App.tsx` | Route + Import hinzufügen | ~2 Zeilen |

---

## Technische Notizen

1. **ERSTES Ebene 2 Domain Playbook** (Growth Engines)
2. **Growth Engines Framework**:
   - Multiplicative Formula: `Hypergrowth = GTM × Product × CS × AI`
   - 3 Growth Engines (D1: GTM, D2: Product, D6: Customer Success)
   - Interdependencies: GTM enables Product, Product enables CS, CS enables GTM
3. **3 Sub-Playbooks verlinkt**:
   - GTM/Revenue Playbook (ID 7, slug: growth-engines/gtm-revenue)
   - Product Playbook (ID 8, slug: growth-engines/product)
   - Customer Success Playbook (ID 9, slug: growth-engines/customer-success)
4. **Bilingual Content** (EN/DE) in allen Sections
5. **Solutions Connection** verlinkt auf Growth Momentum (Power Up) und Growth Engine (Boost)
6. **Icon-Palette**: TrendingUp (GTM), Package/Rocket (Product), Users/Heart (CS)
7. **Gradient**: from-green-500 to-emerald-500 (Growth Engines-Theme)
8. **Role erweitert**: ceo, cmo-cro, cpo (CPO hinzugefügt gemäß Briefing)

---

## Erwartetes Ergebnis

Nach Implementierung:
- `/playbooks` Übersichtsseite zeigt **13 Kacheln** (Growth Engines Domain + 3 Sub-Playbooks + Operating Systems + Board & Governance + Portfolio + Strategic Capabilities)
- Growth Engines Kachel zeigt **Growth Framework Teaser mit 3 Sub-Playbooks**
- "Learn More" Link führt zu `/playbooks/growth-engines`
- Landing Page zeigt alle 9 Sections mit vollständigem bilingualen Content
- **Section 9 (Sub-Playbooks)** zeigt Cards für GTM, Product, Customer Success
- **ERSTES Ebene 2 Playbook komplett** (1/5 Domain Playbooks)
