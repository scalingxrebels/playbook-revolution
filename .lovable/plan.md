
# Plan: Decision Support Secondary CTAs anpassen

## Aktuelle Situation (8 Kacheln)

| ID | Solution | Aktueller secondaryCtaUrl | Neuer Ziel | Änderung |
|----|----------|---------------------------|------------|----------|
| 3 | GTM Effectiveness Review | `/cases/growth-engine-activated-leadership-program-scaled` | `/playbooks/growth-engines/gtm-revenue` | **→ Playbook** |
| 4 | Pricing & Packaging Review | `/cases/pricing-redesigned-scalable-growth` | Bleibt | ✓ |
| 5 | Scaling Readiness Assessment | `/cases/strategic-transformation-market-leadership` | Bleibt | ✓ |
| 6 | AI Maturity Assessment | `/cases/strategic-transformation-market-leadership` | `/playbooks/ai-native-scaling` | **→ Playbook** |
| 7 | Investor-Readiness Pitch Deck Check | `/cases/vc-due-diligence-passed-investment-secured` | Bleibt | ✓ |
| 8 | VC Due Diligence Simulation | `/cases/vc-due-diligence-passed-investment-secured` | Bleibt | ✓ |
| 9 | Portfolio Assessment | `/cases/exit-readiness-achieved` | `/playbooks/portfolio-transformation` | **→ Playbook** |
| 10 | Custom Analysis & Report | `/cases/strategic-transformation-ma-integration` | Bleibt | ✓ |

---

## Code-Änderungen

### `src/data/solutionTiles.ts`

**1. GTM Effectiveness Review (ID 3, Zeile 192-194)**
```
Aktuell:
  secondaryCtaEn: 'See sample',
  secondaryCtaDe: 'Beispiel ansehen',
  secondaryCtaUrl: '/cases/growth-engine-activated-leadership-program-scaled',

Neu:
  secondaryCtaEn: 'View GTM Playbook',
  secondaryCtaDe: 'GTM Playbook ansehen',
  secondaryCtaUrl: '/playbooks/growth-engines/gtm-revenue',
```

**2. AI Maturity Assessment (ID 6, Zeile 303-305)**
```
Aktuell:
  secondaryCtaEn: 'See sample',
  secondaryCtaDe: 'Beispiel ansehen',
  secondaryCtaUrl: '/cases/strategic-transformation-market-leadership',

Neu:
  secondaryCtaEn: 'View AI-Native Playbook',
  secondaryCtaDe: 'AI-Native Playbook ansehen',
  secondaryCtaUrl: '/playbooks/ai-native-scaling',
```

**3. Portfolio Assessment (ID 9, Zeile 414-416)**
```
Aktuell:
  secondaryCtaEn: 'See sample',
  secondaryCtaDe: 'Beispiel ansehen',
  secondaryCtaUrl: '/cases/exit-readiness-achieved',

Neu:
  secondaryCtaEn: 'View Portfolio Playbook',
  secondaryCtaDe: 'Portfolio Playbook ansehen',
  secondaryCtaUrl: '/playbooks/portfolio-transformation',
```

---

## Zusammenfassung

| Metrik | Wert |
|--------|------|
| Gesamte Decision Support Kacheln | 8 |
| Änderungen (→ Playbook) | 3 |
| Unverändert (→ Case) | 5 |

Nach Implementierung:
- 3 Kacheln verlinken auf passende Playbooks (GTM, AI-Native, Portfolio)
- 5 Kacheln verlinken weiterhin auf Case Studies (Pricing, Scaling, Pitch Deck, VC DD, Custom)

Die CTA-Texte werden von "See sample"/"Beispiel ansehen" zu "View X Playbook"/"X Playbook ansehen" geändert, um die Erwartung korrekt zu setzen.
