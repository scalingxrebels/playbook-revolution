

# Implementierungskonzept: Strategic Advisory Case Study

## 1. Übersicht

### 1.1 Anonymisierung
| Original (Briefing) | Anonymisiert |
|---------------------|--------------|
| KODE | Leadership Development Company |
| KODE IGNITE | (entfernt) |
| SRH | Enterprise Customer |
| Wertemodell | New Product Line |
| MetK | Strategic Partner |
| Cloud-Produkte | SaaS Products |

### 1.2 Korrigiertes Solution Mapping

**Briefing hatte falsche URLs** - hier die korrigierten:

| Rolle | Briefing (FALSCH) | Korrekt (REAL) |
|-------|-------------------|----------------|
| Primary | `/solutions/advisory/strategic-advisory` | `/solutions/strategic-advisory` (ID 35) |
| Alternative | `/solutions/accelerate/strategic-transformation` | `/solutions/accelerate/sustainable-growth` (ID 30) |
| Related 1 | `/solutions/workshops/strategy-workshop` | `/solutions/workshop` (ID 34) |
| Related 2 | `/solutions/power-up/growth-momentum` | `/solutions/power-up/growth-momentum` (OK) |

---

## 2. Dateiänderungen

### 2.1 Neue Case Study Daten

**Datei:** `src/data/cases/caseStudies.ts`

**Neuer Eintrag am Ende des Arrays:**

```typescript
{
  id: 'strategic-advisory-saas-transition',
  slug: 'saas-transition-accelerated',
  company: 'Leadership Development Company',
  industry: 'B2B Services',
  stage: 'Established',
  gradient: 'from-purple-500 to-indigo-600',
  confidential: true,
  
  tags: ['saas-transition', 'strategic-advisory', 'customer-development', 'okrs', 'b2b-services'],
  challengeType: 'growth-stalled',
  
  // HERO
  headline: {
    en: 'SaaS-Transition Accelerated → €10M Roadmap Executed',
    de: 'SaaS-Transition beschleunigt → €10M Roadmap umgesetzt'
  },
  challenge: {
    en: 'Vision 2030 defined but execution uncertain—needed ongoing strategic support to accelerate SaaS-transition and develop customers systematically.',
    de: 'Vision 2030 definiert aber Umsetzung unsicher—brauchte laufende strategische Unterstützung zur Beschleunigung der SaaS-Transition und systematischen Kundenentwicklung.'
  },
  result: {
    en: 'Revenue +40-70%, ARR +200-300% (€420K), 11 model customers, Sales Cycle -33%',
    de: 'Umsatz +40-70%, ARR +200-300% (€420K), 11 Modell-Kunden, Sales Cycle -33%'
  },
  investment: '€156K-€216K',
  roi: '5-10x',
  heroMetrics: [
    { label: 'Revenue', before: '€1.8M', after: '€2.8M', impact: '+56%' },
    { label: 'ARR', before: '€120K', after: '€420K', impact: '+250%' },
    { label: 'Customers', before: '1', after: '11', impact: '+10' },
    { label: 'Sales Cycle', before: '9 Mo', after: '6 Mo', impact: '-33%' }
  ],
  // ... (vollständige Daten gemäß Briefing-Struktur)
}
```

### 2.2 Solution Tiles aktualisieren

**Datei:** `src/data/solutionTiles.ts`

**Änderung: Strategic Advisory (ID 35) - secondaryCtaUrl ändern**

```typescript
// Zeile ~1323-1325 (aktuelle Version)
secondaryCtaEn: 'See case study',
secondaryCtaDe: 'Case Study ansehen',
secondaryCtaUrl: '/cases/vision-2030-strategy-workshop' // ALT

// NEU:
secondaryCtaUrl: '/cases/saas-transition-accelerated'
```

**Begründung:** Strategic Advisory Tile sollte auf Strategic Advisory Case verlinken (nicht Workshop Case).

---

## 3. Datenstruktur im Detail

### 3.1 Case Study Metrics

```text
HERO METRICS (4 Karten):
+------------------+------------------+------------------+------------------+
| Revenue          | ARR              | Model            | Sales Cycle      |
|                  | (SaaS)           | Customers        |                  |
| €1.8M → €2.8M    | €120K → €420K    | 1 → 11           | 9 → 6 Monate     |
| "+56%"           | "+250%"          | "+10 Kunden"     | "-33%"           |
+------------------+------------------+------------------+------------------+

RESULT METRICS (12-Monats-Ergebnisse):
| Metric              | Before              | After                  |
|---------------------|---------------------|------------------------|
| Revenue             | €1.7-1.8M           | €2.5-3M (+40-70%)      |
| ARR                 | €80K-150K (10-20%)  | €420K (40-50%)         |
| Model Customers     | 1                   | 11                     |
| Sales Cycle         | 9 months            | 6 months (-33%)        |
| New Product ARR     | €0                  | €280K                  |
| SQLs per Month      | 8                   | 14 (+75%)              |
```

### 3.2 Phasen-Struktur (12 Monate Strategic Advisory)

```text
ONGOING STRUCTURE:
├── Monthly Strategy Sessions (1 day/month)
├── Quarterly OKR Reviews (half-day/quarter)
├── Board Prep (quarterly)
└── Ad-hoc Strategic Support (as needed)

Q1 2025: FOUNDATION
├── OKR 1: Cloud-ARR €100K → €120K achieved
├── OKR 2: Customer Showcase completed
└── OKR 3: Sales Velocity Tracking established

Q2 2025: ACCELERATION
├── OKR 4: Cloud-ARR €180K (+50% vs target)
├── OKR 5: 3 model customers (+50% vs target)
└── OKR 6: Sales Cycle 7 months (-22%)

Q3 2025: SCALING
├── OKR 7: Cloud-ARR €280K (+12% vs target)
├── OKR 8: 6 model customers (Total: 9)
└── OKR 9: SQLs 14/month (+75%)

Q4 2025: MOMENTUM
├── OKR 10: Cloud-ARR €420K (+50% vs Q3)
├── OKR 11: 11 model customers
└── OKR 12: New Product €280K ARR
```

### 3.3 Related Solutions (korrigiert)

```typescript
relatedSolutions: [
  {
    name: { en: 'Strategic Advisory', de: 'Strategic Advisory' },
    url: '/solutions/strategic-advisory',
    duration: '12+ months',
    investment: '€3.9K-€11K/Mo',
    focus: { 
      en: 'Ongoing Strategic Guidance, OKR Reviews, Board Prep', 
      de: 'Laufende strategische Begleitung, OKR Reviews, Board Prep' 
    },
    outcome: { 
      en: 'Revenue +40-70%, ARR +200-300%, Sales Cycle -33%', 
      de: 'Umsatz +40-70%, ARR +200-300%, Sales Cycle -33%' 
    },
    type: 'primary'
  },
  {
    name: { en: 'Workshop', de: 'Workshop' },
    url: '/solutions/workshop',
    duration: '1-2 Days',
    investment: '€9.6K-€12.9K',
    focus: { 
      en: 'Foundation: Vision 2030, Strategy, OKRs', 
      de: 'Foundation: Vision 2030, Strategie, OKRs' 
    },
    outcome: { 
      en: 'Strategic Clarity, Team Alignment, Actionable Roadmap', 
      de: 'Strategische Klarheit, Team-Alignment, Actionable Roadmap' 
    },
    type: 'related'
  },
  {
    name: { en: 'Accelerate: Sustainable Growth', de: 'Accelerate: Nachhaltiges Wachstum' },
    url: '/solutions/accelerate/sustainable-growth',
    duration: '12 Months',
    investment: '€153K',
    focus: { 
      en: 'Comprehensive Transformation (GTM, Operations, AI)', 
      de: 'Umfassende Transformation (GTM, Operations, AI)' 
    },
    outcome: { 
      en: 'Revenue +50-100%, Rule of 40 +20-40pp', 
      de: 'Umsatz +50-100%, Rule of 40 +20-40pp' 
    },
    type: 'alternative'
  },
  {
    name: { en: 'Power Up: Growth Momentum', de: 'Power Up: Growth Momentum' },
    url: '/solutions/power-up/growth-momentum',
    duration: '4-6 Weeks',
    investment: '€23.6K',
    focus: { 
      en: '90-Day Execution Sprints', 
      de: '90-Tage Execution Sprints' 
    },
    outcome: { 
      en: 'ARR Growth +30-60pp, Win Rate +30-50%', 
      de: 'ARR Growth +30-60pp, Win Rate +30-50%' 
    },
    type: 'related'
  }
]
```

---

## 4. Bidirektionale Verlinkung

### 4.1 Case Study → Solutions (via relatedSolutions)
- Primary: Strategic Advisory (`/solutions/strategic-advisory`)
- Alternative: Accelerate: Sustainable Growth (`/solutions/accelerate/sustainable-growth`)
- Related: Workshop (`/solutions/workshop`)
- Related: Power Up: Growth Momentum (`/solutions/power-up/growth-momentum`)

### 4.2 Solutions → Case Study (via secondaryCtaUrl)

| Solution ID | Name | Aktueller Link | Neuer Link |
|-------------|------|----------------|------------|
| 34 | Workshop | `/cases/vision-2030-strategy-workshop` | (bleibt) |
| 35 | Strategic Advisory | `/cases/vision-2030-strategy-workshop` | `/cases/saas-transition-accelerated` |

**Logik:** Jede Solution verlinkt auf ihre "eigene" Case Study:
- Workshop → Workshop Case (Vision 2030)
- Strategic Advisory → Strategic Advisory Case (SaaS-Transition)

---

## 5. Card Design für Cases Hub

```text
+------------------------------------------+
| [Established] [B2B Services]             |
|                                          |
| SaaS-Transition Accelerated →            |
| €10M Roadmap Executed                    |
|                                          |
| Umsatz +56%, ARR +250%, 11 Modell-Kunden |
+------------------------------------------+
| Revenue  | ARR      | Customers | Cycle  |
| +56%     | +250%    | +10       | -33%   |
+------------------------------------------+
| Investment: €156K-€216K  |  ROI: 5-10x   |
+------------------------------------------+
|           [ Case lesen → ]               |
+------------------------------------------+
```

---

## 6. Lessons (7 Key Learnings)

| # | Lesson | Key Insight |
|---|--------|-------------|
| 1 | Strategic Advisory accelerates execution | Monthly sessions + OKR reviews = execution velocity |
| 2 | SaaS-Transition can be accelerated | 10-20% → 40-50% ARR in 12 months (vs. 3-4 years without support) |
| 3 | Customer model is replicable at scale | 1 → 11 customers in 12 months |
| 4 | Sales Velocity optimization drives growth | Focus on quality, not quantity: -33% Sales Cycle |
| 5 | Product Innovation drives Cross-Selling | €280K new product ARR in 9 months |
| 6 | Team Growth enables scaling | +2 specialists enabled 10x customer growth |
| 7 | €10M roadmap is now credible | Execution confidence through ongoing support |

---

## 7. Related Case Studies (Cross-Links)

```typescript
relatedCaseStudies: [
  { 
    slug: 'vision-2030-strategy-workshop', 
    teaser: { 
      en: 'The foundation: How we defined Vision 2030 in 2 days', 
      de: 'Das Fundament: Wie wir Vision 2030 in 2 Tagen definierten' 
    } 
  },
  { 
    slug: 'strategic-transformation-market-leadership', 
    teaser: { 
      en: 'Similar journey: Series B SaaS achieved €7.7M ARR', 
      de: 'Ähnliche Reise: Series B SaaS erreichte €7,7M ARR' 
    } 
  }
]
```

---

## 8. Zusammenfassung der Änderungen

| Datei | Änderung | Zeilen |
|-------|----------|--------|
| `src/data/cases/caseStudies.ts` | Neuen Case Study Eintrag hinzufügen | ~400 neue Zeilen |
| `src/data/solutionTiles.ts` | Strategic Advisory (ID 35): secondaryCtaUrl ändern | 1 Zeile |

---

## 9. Verknüpfung mit Workshop Case

Diese Case Study ist die **Fortsetzung** der Workshop Case Study:
- Workshop Case: Vision 2030 definiert (2 Tage)
- Strategic Advisory Case: Vision 2030 umgesetzt (12 Monate)

**Cross-Reference im Text:**
- Strategic Advisory Case verweist auf Workshop Case als "Foundation"
- Workshop Case verweist auf Strategic Advisory Case als "Next Step"

---

## 10. Challenge Type Filter

Der Case verwendet `challengeType: 'growth-stalled'` da:
- Es um Wachstumsbeschleunigung geht
- SaaS-Transition = Geschäftsmodell-Transformation
- Passt zu Filter "Growth Stalled" auf Cases Hub

**Alternativ möglich:** Neuen Filter `orientation` hinzufügen (falls gewünscht für beide Cases).

