

# Plan: Neue Solution-Kachel DealDeskr.io erstellen

## Briefing-Analyse

### Anforderungen
| Aspekt | Wert |
|--------|------|
| Name | DealDeskr.io - AI Deal Intelligence |
| Solution Type | `tools` (AI-Powered Tools) |
| Challenges | `cac-crisis`, `growth-stalled`, `pricing-breakdown`, `board-pressure` |
| Pricing | From €79/user/mo (Solo €79 bis Pro 51+ €99) |
| Primary CTA | "Try Now" → https://dealdeskr.io/ |
| Secondary CTA | "Learn More" → /about |

### Bestehende Tools-Kacheln (IDs 38-41)
- lasr.io (ID 38) - universal, free
- ROI Calculator (ID 39) - universal, free
- Scaling Calculator (ID 40) - specific challenges, free
- KeyPitchs (ID 41) - cac-crisis, free

**DealDeskr.io wird die erste kostenpflichtige Tool-Kachel sein (ID 42).**

---

## Aenderung in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (nach Zeile 1495, vor dem schliessenden Array-Bracket)

### Neue Kachel (ID 42)

```typescript
{
  id: 42,
  slug: 'dealdeskr-io',
  solutionType: 'tools',
  challenges: ['cac-crisis', 'growth-stalled', 'pricing-breakdown', 'board-pressure'],
  price: 'From €79/user/mo',
  priceTag: 'paid',
  headlineEn: 'DealDeskr.io',
  headlineDe: 'DealDeskr.io',
  problemEn: "Your sales team makes bad pricing decisions—no data foundation, 40-60% deal leakage, inconsistent playbooks.",
  problemDe: 'Dein Sales-Team trifft schlechte Pricing-Entscheidungen—keine Datengrundlage, 40-60% Deal-Leakage, inkonsistente Playbooks.',
  solutionEn: 'Real-time deal intelligence & AI-powered pricing recommendations in your sales workflow. Deal scoring, pricing intelligence, playbook recommendations, forecast accuracy.',
  solutionDe: 'Echtzeit-Deal-Intelligence & AI-gestützte Pricing-Empfehlungen in deinem Sales-Workflow. Deal Scoring, Pricing Intelligence, Playbook-Empfehlungen, Forecast-Genauigkeit.',
  deliverablesEn: [
    'Deal scoring (+30-50% pricing intelligence)',
    'Playbook recommendations (+20-40% conversion)',
    'Forecast accuracy (-60% errors)'
  ],
  deliverablesDe: [
    'Deal Scoring (+30-50% Pricing Intelligence)',
    'Playbook-Empfehlungen (+20-40% Conversion)',
    'Forecast-Genauigkeit (-60% Fehler)'
  ],
  impactEn: '+50-100% higher deals, +40-60% win rate, -25-33% sales cycle. €50M ARR company: +€15M ARR/year.',
  impactDe: '+50-100% höhere Deals, +40-60% Win Rate, -25-33% Sales Cycle. €50M ARR Unternehmen: +€15M ARR/Jahr.',
  primaryCtaEn: 'Try Now',
  primaryCtaDe: 'Jetzt ausprobieren',
  primaryCtaAction: 'external',
  primaryCtaUrl: 'https://dealdeskr.io/',
  secondaryCtaEn: 'Learn More',
  secondaryCtaDe: 'Mehr erfahren',
  secondaryCtaUrl: '/about'
}
```

---

## Technische Details

### CTA-Action Entscheidung
- `primaryCtaAction: 'external'` statt `'open-tool'` da DealDeskr.io eine externe SaaS-Plattform ist (nicht internes Tool)
- Beide Actions oeffnen externen Link, aber `'external'` zeigt ein ExternalLink-Icon im Button

### Pricing-Darstellung
- Format: "From €79/user/mo" (kurz und konsistent mit anderen paid tiles)
- Alternative waere "€79-€149/user/mo" aber "From" ist klarer fuer per-seat pricing

### Challenge-Mapping (4 Challenges)
| Challenge | Begruendung |
|-----------|-------------|
| cac-crisis | Deal intelligence reduziert CAC durch bessere Conversion |
| growth-stalled | Höhere Deals und Win Rate reaktivieren Wachstum |
| pricing-breakdown | AI-Pricing Recommendations loesen Pricing-Probleme |
| board-pressure | Forecast Accuracy (-60% Fehler) liefert Board-Visibility |

---

## Zusammenfassung

| Datei | Aenderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Neue Kachel ID 42 (DealDeskr.io) nach ID 41 (KeyPitchs) einfuegen |

## Auswirkung

Nach der Aenderung erscheint **DealDeskr.io** unter:
- CAC Crisis (Filter)
- Growth Stalled (Filter)
- Pricing Breakdown (Filter)
- Board Pressure (Filter)
- AI-Powered Tools (Solution Type Filter)

