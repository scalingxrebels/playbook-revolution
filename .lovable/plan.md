
# Plan: Maxxeed Solution Tile aktualisieren

## Übersicht

Die Maxxeed-Kachel (ID 43) in `src/data/solutionTiles.ts` muss mit dem neuen Briefing-Content aktualisiert werden.

---

## Aktuelle vs. Neue Inhalte

### Headline
| Aktuell | Neu |
|---------|-----|
| Maxxeed Digital Showrooms | **Maxxeed – Digital Buyer Experience** |

### Problem
| Aktuell | Neu |
|---------|-----|
| "Your sales team relies on email and PowerPoint—unpersonal, inefficient. 78% of buyers demand better experiences, but get boring presentations. 30% win rate." | **"B2B Sales is a 'black box.' Sales teams are unable to provide customer-specific value and are absent when 90% of internal buying decisions happen. Only a 30% win rate as 78% of buyers demand better experiences."** |

### Solution
| Aktuell | Neu |
|---------|-----|
| "Maxxeed automates creation of hyper-personalized Digital Showrooms in 30 seconds. AI transforms meeting notes into stunning showrooms you can share with your prospects." | **"Maxxeed digitizes the entire Buyer Value Cycle. It automates personalized insights and creates a collaborative workspace that empowers your champion to sell internally. Map the buying center and stay present even when you're not in the room."** |

### Deliverables
| Aktuell | Neu |
|---------|-----|
| Automatic showroom creation (30s) | **Instant Buyer Value Cycle Creation (30s)** |
| Buyer value cycle (stakeholder maps) | **Stakeholder Alignment & Guidance** |
| Deal health score & analytics | **Deal Health Intelligence & Analytics** |

### Impact
| Aktuell | Neu |
|---------|-----|
| "+31% close rate, +24% deal size, 98% email open rate. €50M ARR: +€12M ARR." | **"+31% close rate, +24% deal size, +56% faster team onboarding. €50M ARR company: +€12M ARR/year."** |

---

## Zu ändernde Datei

**`src/data/solutionTiles.ts`** (Zeilen 1538-1575)

```typescript
{
  id: 43,
  slug: 'maxxeed',
  solutionType: 'tools',
  challenges: ['cac-crisis', 'growth-stalled'],
  price: '€135/User/Mo',
  priceTag: 'paid',
  headlineEn: 'Maxxeed – Digital Buyer Experience',
  headlineDe: 'Maxxeed – Digital Buyer Experience',
  problemEn: "B2B Sales is a 'black box.' Sales teams are unable to provide customer-specific value and are absent when 90% of internal buying decisions happen. Only a 30% win rate as 78% of buyers demand better experiences.",
  problemDe: "B2B-Vertrieb ist eine 'Black Box'. Sales-Teams können keinen kundenspezifischen Mehrwert bieten und sind abwesend, wenn 90% der internen Kaufentscheidungen getroffen werden. Nur 30% Win Rate, da 78% der Käufer bessere Experiences fordern.",
  solutionEn: 'Maxxeed digitizes the entire Buyer Value Cycle. It automates personalized insights and creates a collaborative workspace that empowers your champion to sell internally. Map the buying center and stay present even when you're not in the room.',
  solutionDe: 'Maxxeed digitalisiert den gesamten Buyer Value Cycle. Es automatisiert personalisierte Insights und schafft einen kollaborativen Workspace, der deinen Champion befähigt, intern zu verkaufen. Mappe das Buying Center und bleibe präsent, auch wenn du nicht im Raum bist.',
  deliverablesEn: [
    'Instant Buyer Value Cycle Creation (30s)',
    'Stakeholder Alignment & Guidance',
    'Deal Health Intelligence & Analytics'
  ],
  deliverablesDe: [
    'Instant Buyer Value Cycle Erstellung (30s)',
    'Stakeholder Alignment & Guidance',
    'Deal Health Intelligence & Analytics'
  ],
  impactEn: '+31% close rate, +24% deal size, +56% faster team onboarding. €50M ARR company: +€12M ARR/year.',
  impactDe: '+31% Close Rate, +24% Deal Size, +56% schnelleres Team-Onboarding. €50M ARR Unternehmen: +€12M ARR/Jahr.',
  primaryCtaEn: 'More about Buyer Excitement',
  primaryCtaDe: 'Mehr über Buyer Excitement',
  primaryCtaAction: 'learn-more',
  primaryCtaUrl: '/tools/maxxeed',
  secondaryCtaEn: 'Visit Maxxeed',
  secondaryCtaDe: 'Maxxeed besuchen',
  secondaryCtaUrl: 'https://www.maxxeed.com/de/',
  partnerBadge: {
    labelEn: 'Black Belt Partner',
    labelDe: 'Black Belt Partner',
    color: 'gold'
  }
}
```

---

## Änderungsübersicht

| Feld | Änderung |
|------|----------|
| `headlineEn/De` | "Digital Showrooms" → "Digital Buyer Experience" |
| `problemEn/De` | Neuer "Black Box" Fokus + 90% interne Entscheidungen |
| `solutionEn/De` | Buyer Value Cycle Digitalisierung + Champion-Enablement |
| `deliverablesEn/De` | Aktualisierte Feature-Namen |
| `impactEn/De` | +56% Team Onboarding hinzugefügt, "€50M ARR company" |

---

## Technische Details

- **Datei**: `src/data/solutionTiles.ts`
- **Zeilen**: 1545-1562
- **Beibehaltene Felder**: `id`, `slug`, `solutionType`, `challenges`, `price`, `priceTag`, `primaryCta*`, `secondaryCta*`, `partnerBadge`
