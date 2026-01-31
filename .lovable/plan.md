

# Implementierungskonzept: Case Study 1 - CAC Crisis Averted (Update)

## Ist-Analyse

Case Study 1 (`cac-crisis-turnaround`) existiert bereits vollstaendig in `caseStudies.ts`. Das Problem: 

1. **Fehlende relatedSolutions** - Die Case Study hat keine Verlinkung zu Solutions
2. **Falsche bidirektionale Links** - Die Solution Tiles zeigen auf nicht-existierende Case Studies

### Aktuelle fehlerhafte Links in solutionTiles.ts

| Solution | ID | Aktueller Link | Status |
|----------|-----|----------------|--------|
| Power Up: Predictable Acquisition | 11 | `/cases/cac-transformation` | EXISTIERT NICHT |
| Boost: Efficient Hypergrowth | 20 | `/cases/hypergrowth-boost` | EXISTIERT NICHT |

---

## Korrektes Solution Mapping

Case Study 1 Metriken:
- **Investment:** €120K
- **Dauer:** 12 Wochen
- **CAC:** €12k → €5k (-58%)
- **Win Rate:** 18% → 40% (+122%)
- **LTV/CAC:** 2.5x → 5.2x (+108%)
- **ROI:** 5x

| Rolle | Solution | URL | ID | Begruendung |
|-------|----------|-----|----|----|
| **Primary** | Boost: Efficient Hypergrowth | `/solutions/boost/efficient-hypergrowth` | 20 | Perfekte Uebereinstimmung: 90 Tage, CAC -40-60%, LTV/CAC +100-200%, Investment €60K-€78K |
| **Alternative** | Power Up: Predictable Acquisition | `/solutions/power-up/cac-crisis` | 11 | Fuer kuerzere Sprints (30 Tage), CAC -20-30% |
| **Related** | GTM Effectiveness Review | `/solutions/gtm-effectiveness-review` | 3 | Decision Support fuer GTM-Diagnose vor Intervention |

---

## Aenderung 1: caseStudies.ts - relatedSolutions hinzufuegen

Die Case Study 1 endet aktuell bei Zeile ~290 mit:

```typescript
playbooks: ['gtm-revenue', 'growth-engines'],
downloadUrl: '/downloads/cases/cac-crisis-turnaround.pdf'
```

**Hinzufuegen vor `playbooks`:**

```typescript
relatedSolutions: [
  {
    name: { en: 'Boost: Efficient Hypergrowth', de: 'Boost: Effizientes Hypergrowth' },
    url: '/solutions/boost/efficient-hypergrowth',
    duration: '90 Days',
    investment: '€60K-€78K',
    focus: { 
      en: 'Complete GTM Engine Rebuild - CAC, LTV/CAC, Rule of 40', 
      de: 'Kompletter GTM-Engine Neuaufbau - CAC, LTV/CAC, Rule of 40' 
    },
    outcome: { 
      en: 'CAC -40-60%, LTV/CAC +100-200%, Rule of 40 +20-40pp', 
      de: 'CAC -40-60%, LTV/CAC +100-200%, Rule of 40 +20-40pp' 
    },
    type: 'primary'
  },
  {
    name: { en: 'Power Up: Predictable Acquisition', de: 'Power Up: Predictable Acquisition' },
    url: '/solutions/power-up/cac-crisis',
    duration: '4-6 Weeks',
    investment: '€23.6K',
    focus: { 
      en: 'Quick CAC Fix - ICP, Positioning, Sales Process', 
      de: 'Schnelle CAC-Korrektur - ICP, Positionierung, Sales-Prozess' 
    },
    outcome: { 
      en: 'CAC -20-30%, Win Rate +10-15pp, Pipeline Predictability ±10%', 
      de: 'CAC -20-30%, Win Rate +10-15pp, Pipeline-Vorhersagbarkeit ±10%' 
    },
    type: 'alternative'
  },
  {
    name: { en: 'GTM Effectiveness Review', de: 'GTM Effectiveness Review' },
    url: '/solutions/gtm-effectiveness-review',
    duration: '2-4 Weeks',
    investment: '€3.9K-€5.9K',
    focus: { 
      en: 'Diagnose GTM Bottlenecks - ICP, Funnel, Sales Process', 
      de: 'GTM-Engpaesse diagnostizieren - ICP, Funnel, Sales-Prozess' 
    },
    outcome: { 
      en: 'Clear diagnosis of CAC drivers, prioritized action plan', 
      de: 'Klare Diagnose der CAC-Treiber, priorisierter Aktionsplan' 
    },
    type: 'related'
  }
],
relatedCaseStudies: [
  { slug: 'nrr-machine-breakthrough', teaser: { en: 'How an Analytics Platform broke through NRR 105% to 142%', de: 'Wie eine Analytics-Plattform NRR von 105% auf 142% steigerte' } },
  { slug: 'stage-transition-series-b-ready', teaser: { en: 'How a Series A MarTech company scaled from €5M to €25M ARR', de: 'Wie ein Series A MarTech-Unternehmen von €5M auf €25M ARR skalierte' } }
],
relatedPlaybooks: [
  { slug: 'gtm-revenue', teaser: { en: 'The complete GTM/Revenue playbook for fixing broken sales processes', de: 'Das komplette GTM/Revenue Playbook fuer defekte Sales-Prozesse' } },
  { slug: 'growth-engines', teaser: { en: 'Build scalable growth engines that compound over time', de: 'Baue skalierbare Growth Engines, die sich ueber Zeit multiplizieren' } }
],
```

---

## Aenderung 2: solutionTiles.ts - Bidirektionale Links korrigieren

### Power Up: Predictable Acquisition (ID 11, Zeile ~495)

```typescript
// ALT
secondaryCtaUrl: '/cases/cac-transformation'

// NEU
secondaryCtaUrl: '/cases/cac-crisis-turnaround'
```

### Boost: Efficient Hypergrowth (ID 20, Zeile ~805)

```typescript
// ALT
secondaryCtaUrl: '/cases/hypergrowth-boost'

// NEU
secondaryCtaUrl: '/cases/cac-crisis-turnaround'
```

---

## Zusammenfassung der Aenderungen

| Datei | Aenderung | Zeilen |
|-------|-----------|--------|
| `src/data/cases/caseStudies.ts` | relatedSolutions, relatedCaseStudies, relatedPlaybooks hinzufuegen | +35 |
| `src/data/solutionTiles.ts` | secondaryCtaUrl bei ID 11 korrigieren | 1 |
| `src/data/solutionTiles.ts` | secondaryCtaUrl bei ID 20 korrigieren | 1 |

---

## Technische Hinweise

### Bestehende Komponenten

- Case Study 1 nutzt bereits die vollstaendige Datenstruktur
- Die CaseDetail.tsx Komponente unterstuetzt relatedSolutions bereits
- Keine neuen Routes erforderlich

### Routing

- `/cases/cac-crisis-turnaround` existiert bereits
- Keine Aenderungen am Router noetig

### Validierung nach Implementation

1. `/cases/cac-crisis-turnaround` - Pruefen ob Related Solutions Section erscheint
2. `/solutions` - Power Up: Predictable Acquisition "See case study" Button pruefen
3. `/solutions` - Boost: Efficient Hypergrowth "See case study" Button pruefen

