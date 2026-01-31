
# Implementierungskonzept: Case Study 6 - Pricing Redesigned

## Problem-Analyse: Solution Mapping Korrektur

Das Briefing referenziert 2 Solutions, die **nicht existieren**:

| Im Briefing | URL | Status |
|-------------|-----|--------|
| Boost: Pricing & Packaging Optimized | `/solutions/boost/pricing-packaging-optimized` | EXISTIERT NICHT |
| Power Up: Pricing Power Unlocked | `/solutions/power-up/pricing-power` | NAME FALSCH, URL KORREKT |
| Accelerate: Sustainable Growth | `/solutions/accelerate/sustainable-growth` | EXISTIERT |

---

## Existierende Pricing Solutions (Real)

| Solution | URL | ID | Aktueller Case Link |
|----------|-----|----|--------------------|
| Power Up: Pricing Power | `/solutions/power-up/pricing-power` | 13 | `/cases/pricing-transformation` (existiert nicht) |
| Boost: Pricing Dominance | `/solutions/boost/pricing-dominance` | 22 | `/cases/pricing-boost` (existiert nicht) |
| Accelerate: Sustainable Growth | `/solutions/accelerate/sustainable-growth` | - | - |

---

## Korrigiertes Mapping

| Rolle | Briefing (Falsch) | Korrekte Solution | Korrekte URL |
|-------|-------------------|-------------------|--------------|
| **Primary** | Boost: Pricing & Packaging Optimized | Boost: Pricing Dominance | `/solutions/boost/pricing-dominance` |
| **Alternative** | Power Up: Pricing Power Unlocked | Power Up: Pricing Power | `/solutions/power-up/pricing-power` |
| **Related** | Accelerate: Sustainable Growth | Accelerate: Sustainable Growth | `/solutions/accelerate/sustainable-growth` |

---

## Teil 1: Neue Case Study Daten

### 1.1 Case Study Identifikation

```typescript
{
  id: 'pricing-redesigned-tecdax',
  slug: 'pricing-redesigned-scalable-growth',
  company: 'Post-IPO TecDAX Company',
  industry: 'Social Network / Job Ads',
  stage: 'Post-IPO',
  gradient: 'from-purple-500 to-pink-500',
  confidential: true,
  tags: ['pricing', 'recurring-revenue', 'portfolio', 'post-ipo', 'tecdax'],
  challengeType: 'pricing-breakdown',
}
```

### 1.2 Hero Metrics (4 Cards)

| Metrik | Before | After | Impact |
|--------|--------|-------|--------|
| Revenue | €31M | €44.6M | +33% (+€13.6M) |
| EBITDA | 61% Margin | +€5.2M | Margin reinforced |
| Rule of 40 | 85% | 99% | +14pp |
| Product Portfolio | 27 Products | 10 Core + 6 Services | -63% complexity |

### 1.3 Phasen-Struktur (3 Steps)

1. **Strategic Pricing Diagnostics** (Weeks 1-4): WTP Analysis, Competitive Benchmarking
2. **Product Portfolio Streamlining** (Weeks 5-6): 27→10 Products, Company Slots Innovation
3. **New Pricing Model & GTM** (Weeks 7-8+): Recurring Revenue, Sales Training

### 1.4 Key Lessons (6 Lessons)

1. Great pricing unlocks growth—even in mature businesses
2. Don't just change the price—change what you're selling
3. Complexity kills growth
4. Recurring revenue isn't just a metric—it's a mindset
5. Market standards can be reset—if you execute with conviction
6. A strong starting point is no excuse to stand still

---

## Teil 2: Filter-Erweiterung

### caseFilters.ts - Neue Einträge

**Industry Filter:**
```typescript
{ id: 'social-network', label: { en: 'Social Network / Job Ads', de: 'Social Network / Job Ads' } }
```

**Stage Filter:**
```typescript
{ id: 'post-ipo', label: { en: 'Post-IPO', de: 'Post-IPO' } }
```

---

## Teil 3: Related Solutions mit korrekten URLs

```typescript
relatedSolutions: [
  {
    name: { en: 'Boost: Pricing Dominance', de: 'Boost: Pricing-Dominanz' },
    url: '/solutions/boost/pricing-dominance',
    duration: '90 Days',
    investment: '€60K-€78K',
    focus: { 
      en: 'Pricing Architecture Rebuild - ARPU, Margin, Discounting', 
      de: 'Pricing-Architektur Neuaufbau - ARPU, Marge, Rabattierung' 
    },
    outcome: { 
      en: 'ARPU +50-100%, Gross Margin +15-20pp, Discounting -30-50%', 
      de: 'ARPU +50-100%, Bruttomarge +15-20pp, Rabattierung -30-50%' 
    },
    type: 'primary'
  },
  {
    name: { en: 'Power Up: Pricing Power', de: 'Power Up: Pricing Power' },
    url: '/solutions/power-up/pricing-power',
    duration: '4-6 Weeks',
    investment: '€23.6K',
    focus: { 
      en: 'Quick Pricing Audit + Value Metric Redesign', 
      de: 'Schnelles Pricing-Audit + Value Metric Redesign' 
    },
    outcome: { 
      en: 'Revenue +10-20%, ARPU +15-30%, Discounting -20-40%', 
      de: 'Revenue +10-20%, ARPU +15-30%, Rabattierung -20-40%' 
    },
    type: 'alternative'
  },
  {
    name: { en: 'Accelerate: Sustainable Growth', de: 'Accelerate: Nachhaltiges Wachstum' },
    url: '/solutions/accelerate/sustainable-growth',
    duration: '12 Months',
    investment: '€153K',
    focus: { 
      en: 'Long-term Growth Infrastructure - Rule of 40 Focus', 
      de: 'Langfristige Growth-Infrastruktur - Rule of 40 Fokus' 
    },
    outcome: { 
      en: 'Rule of 40 +30-50pp, ARR Growth +100-200%, Burn Multiple -60-80%', 
      de: 'Rule of 40 +30-50pp, ARR-Wachstum +100-200%, Burn Multiple -60-80%' 
    },
    type: 'related'
  }
]
```

---

## Teil 4: Bidirektionale Verlinkung (Solution Tiles)

### solutionTiles.ts Updates

**Power Up: Pricing Power (ID 13, Zeile ~563):**
```typescript
// ALT
secondaryCtaUrl: '/cases/pricing-transformation'

// NEU
secondaryCtaUrl: '/cases/pricing-redesigned-scalable-growth'
```

**Boost: Pricing Dominance (ID 22, Zeile ~873):**
```typescript
// ALT
secondaryCtaUrl: '/cases/pricing-boost'

// NEU
secondaryCtaUrl: '/cases/pricing-redesigned-scalable-growth'
```

---

## Teil 5: Related Content (Cross-Links)

### Related Case Studies

| Case Study | Slug | Teaser |
|------------|------|--------|
| CAC Crisis Averted | `cac-crisis-turnaround` | How a Series B SaaS company cut CAC by 58% in 12 weeks |
| Partner Channel Transformed | `partner-channel-transformed-scalable-growth` | How an SME software provider achieved +45.6% revenue growth with 11 partners |

### Related Playbooks

| Playbook | URL |
|----------|-----|
| GTM/Revenue Playbook | `/playbooks/growth-engines/gtm-revenue` |
| Strategic Governance | `/playbooks/board-governance/strategic` |
| AI-Native Scaling | `/playbooks/ai-native-scaling` |

---

## Implementierungsreihenfolge

```text
1. caseFilters.ts - Neue Filter hinzufügen
   - Industry: social-network
   - Stage: post-ipo

2. caseStudies.ts - Case Study 6 Daten einfügen
   - Vollständige Datenstruktur (~220 Zeilen)
   - Korrigierte relatedSolutions URLs

3. solutionTiles.ts - Bidirektionale Links
   - ID 13: secondaryCtaUrl aktualisieren
   - ID 22: secondaryCtaUrl aktualisieren

4. Testen
   - /cases/pricing-redesigned-scalable-growth
   - Filter auf /cases prüfen
   - Solution Tiles → Case Study Links prüfen
```

---

## Dateien und Änderungen

| Datei | Änderung | Zeilen |
|-------|----------|--------|
| `src/data/cases/caseFilters.ts` | +2 Filter-Einträge | +4 |
| `src/data/cases/caseStudies.ts` | +Case Study 6 komplett | +220 |
| `src/data/solutionTiles.ts` | 2x secondaryCtaUrl | 2 |

---

## Technische Hinweise

### Bestehende Komponenten nutzen

Die CaseDetail.tsx unterstützt bereits:
- Related Solutions Section (aus Case Study 7 implementiert)
- Hero Metrics Cards
- 6-Section Layout (Hero, Situation, Solution, Results, Lessons, Related)

### Routing

Keine neuen Routes erforderlich - `/cases/:slug` existiert bereits.

### Bilingualer Content

Alle Texte aus dem Briefing werden bilingual (EN/DE) angelegt. Die deutschen Übersetzungen basieren auf dem englischen Briefing-Content.
