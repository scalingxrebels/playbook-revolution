

# Implementierungskonzept: NRR Machine Breakthrough - Related Content ergänzen

## Ist-Analyse

Die Case Study `nrr-machine-breakthrough` (Zeilen 349-564) ist die **einzige** Case Study ohne Related Content. Sie endet bei:

```typescript
playbooks: ['customer-success', 'growth-engines'],
downloadUrl: '/downloads/cases/nrr-machine-breakthrough.pdf'
```

Es fehlen:
- `relatedSolutions` (Verlinkung zu passenden Solutions)
- `relatedCaseStudies` (Verlinkung zu verwandten Cases)
- `relatedPlaybooks` (Verlinkung zu relevanten Playbooks)

---

## Case Study Metriken (für Solution-Mapping)

| Metrik | Vorher | Nachher | Impact |
|--------|--------|---------|--------|
| NRR | 105% | 142% | +37pp |
| Churn | 8% | 3% | -62% |
| Expansion Revenue | €1.2M | €3.4M | +180% |
| Investment | €95K | - | - |
| ROI | 8x | - | - |
| Dauer | 12 Wochen | - | - |

---

## Korrektes Solution-Mapping

| Rolle | Solution | URL | Begründung |
|-------|----------|-----|------------|
| **Primary** | Boost: NRR Machine | `/solutions/boost/nrr-machine` | Exakte Übereinstimmung: 90 Tage, NRR-fokus, €55K-€71.5K |
| **Alternative** | Power Up: NRR Engine | `/solutions/power-up/nrr-engine` | Kürzerer Sprint (4-6 Wochen), NRR +15-25pp |
| **Related** | Pricing & Packaging Review | `/solutions/pricing-packaging-review` | Expansion-Pricing als Hebel identifizieren |

---

## Technische Änderung

### Datei: `src/data/cases/caseStudies.ts`

**Position:** Nach Zeile 563 (vor `playbooks: ['customer-success', 'growth-engines']`)

**Einfügen:**

```typescript
relatedSolutions: [
  {
    name: { en: 'Boost: NRR Machine', de: 'Boost: NRR Machine' },
    url: '/solutions/boost/nrr-machine',
    duration: '90 Days',
    investment: '€55K-€71.5K',
    focus: { 
      en: 'Complete NRR Engine Build - Expansion Signals, CS Playbooks, Usage Analytics', 
      de: 'Kompletter NRR-Engine Aufbau - Expansion Signale, CS Playbooks, Usage Analytics' 
    },
    outcome: { 
      en: 'NRR +25-40pp, Churn -40-60%, Expansion Revenue +100-200%', 
      de: 'NRR +25-40pp, Churn -40-60%, Expansion Revenue +100-200%' 
    },
    type: 'primary'
  },
  {
    name: { en: 'Power Up: NRR Engine', de: 'Power Up: NRR Engine' },
    url: '/solutions/power-up/nrr-engine',
    duration: '4-6 Weeks',
    investment: '€23.6K',
    focus: { 
      en: 'Quick NRR Fix - Expansion Triggers, QBR Redesign, Health Scores', 
      de: 'Schnelle NRR-Korrektur - Expansion Trigger, QBR-Redesign, Health Scores' 
    },
    outcome: { 
      en: 'NRR +15-25pp, Churn -20-30%, First Expansion Wins in 4 Weeks', 
      de: 'NRR +15-25pp, Churn -20-30%, Erste Expansion-Wins in 4 Wochen' 
    },
    type: 'alternative'
  },
  {
    name: { en: 'Pricing & Packaging Review', de: 'Pricing & Packaging Review' },
    url: '/solutions/pricing-packaging-review',
    duration: '2-4 Weeks',
    investment: '€3.9K-€5.9K',
    focus: { 
      en: 'Identify Expansion Pricing Opportunities - Tier Structure, Usage-Based Models', 
      de: 'Expansion-Pricing-Möglichkeiten identifizieren - Tier-Struktur, Usage-basierte Modelle' 
    },
    outcome: { 
      en: 'Clear expansion pricing strategy, ARPU uplift roadmap', 
      de: 'Klare Expansion-Pricing-Strategie, ARPU-Uplift-Roadmap' 
    },
    type: 'related'
  }
],
relatedCaseStudies: [
  { 
    slug: 'cac-crisis-turnaround', 
    teaser: { 
      en: 'How a Series B SaaS cut CAC by 58% in 12 weeks', 
      de: 'Wie ein Series B SaaS den CAC in 12 Wochen um 58% senkte' 
    } 
  },
  { 
    slug: 'stage-transition-series-b-ready', 
    teaser: { 
      en: 'How a MarTech company scaled from €5M to €25M ARR for Series B', 
      de: 'Wie ein MarTech-Unternehmen von €5M auf €25M ARR für Series B skalierte' 
    } 
  }
],
relatedPlaybooks: [
  { 
    slug: 'customer-success', 
    teaser: { 
      en: 'The complete Customer Success playbook for building NRR machines', 
      de: 'Das komplette Customer Success Playbook für den Aufbau von NRR-Maschinen' 
    } 
  },
  { 
    slug: 'growth-engines', 
    teaser: { 
      en: 'Build scalable growth engines that compound over time', 
      de: 'Baue skalierbare Growth Engines, die sich über Zeit multiplizieren' 
    } 
  }
],
```

---

## Zusammenfassung

| Datei | Änderung | Zeilen |
|-------|----------|--------|
| `src/data/cases/caseStudies.ts` | relatedSolutions, relatedCaseStudies, relatedPlaybooks vor Zeile 562 einfügen | +45 |

---

## Validierung nach Implementation

1. `/cases/nrr-machine-breakthrough` öffnen
2. Scroll zur "Related Solutions" Section
3. Prüfen ob alle 3 Solution-Karten korrekt angezeigt werden
4. Links testen (Primary, Alternative, Related)
5. Related Case Studies und Playbooks prüfen

