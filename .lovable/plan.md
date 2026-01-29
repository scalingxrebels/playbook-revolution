

# Plan: Fördermittel-Navigator Solution Tile hinzufügen

## Übersicht

| Element | Details |
|---------|---------|
| Tile ID | 45 (nach Fix Growth Book mit ID 44) |
| Solution Type | `tools` (AI-Powered Tools) |
| Challenges | `board-pressure`, `portfolio-performance`, `orientation` |
| Preis | Free |

---

## Änderung in `src/data/solutionTiles.ts`

### Neue Tile-Konfiguration (nach Zeile 1610)

```typescript
// ============================================
// AI-POWERED TOOLS - FUNDING NAVIGATOR (ID 45)
// ============================================
{
  id: 45,
  slug: 'funding-navigator',
  solutionType: 'tools',
  challenges: ['board-pressure', 'portfolio-performance', 'orientation'],
  price: 'Free',
  priceTag: 'free',
  
  headlineEn: 'Funding Navigator',
  headlineDe: 'Fördermittel-Navigator',
  
  problemEn: "German startups waste 4-8 weeks researching funding programs (EXIST, ZIM, KfW)—and still miss opportunities. 70% miss relevant funding, leaving €150k-€350k on the table.",
  problemDe: "Deutsche Startups verschwenden 4-8 Wochen mit der Recherche von Förderprogrammen (EXIST, ZIM, KfW)—und verpassen trotzdem Chancen. 70% verpassen relevante Förderungen und lassen €150k-€350k liegen.",
  
  solutionEn: "AI-native funding matching platform that automates the entire funding process in 10 minutes. Get AI-powered matching to specialized consultants.",
  solutionDe: "AI-native Fördermittel-Matching-Plattform, die den gesamten Förderprozess in 10 Minuten automatisiert. Erhalte AI-gestütztes Matching zu spezialisierten Beratern.",
  
  deliverablesEn: [
    'Intelligent questionnaire (10 min)',
    'AI-powered matching (A/B/C scoring)',
    'Personal consultation (24h)',
    'All programs (EXIST, ZIM, KfW, etc.)'
  ],
  deliverablesDe: [
    'Intelligenter Fragebogen (10 Min)',
    'AI-gestütztes Matching (A/B/C Scoring)',
    'Persönliche Beratung (24h)',
    'Alle Programme (EXIST, ZIM, KfW, etc.)'
  ],
  
  impactEn: "-99% research time (10 min vs. 4-8 weeks), +400-600% programs identified, +200-400% funding volume. Free.",
  impactDe: "-99% Recherchezeit (10 Min statt 4-8 Wochen), +400-600% identifizierte Programme, +200-400% Fördervolumen. Kostenlos.",
  
  primaryCtaEn: 'Start Funding Check',
  primaryCtaDe: 'Förder-Check starten',
  primaryCtaAction: 'external',
  primaryCtaUrl: 'https://foerdermittelnavigator.com/',
  
  secondaryCtaEn: 'Learn more',
  secondaryCtaDe: 'Mehr erfahren',
  secondaryCtaUrl: '/about'
}
```

---

## Tile-Verhalten

### Visuelles Design (automatisch durch `solutionType: 'tools'`)
- Orange Rahmen (`border-accent/50`)
- Gradient-Button für Primary CTA
- Wrench-Icon (🔧) als Kategorie-Icon

### CTAs
| CTA | Aktion | URL |
|-----|--------|-----|
| Primary: "Start Funding Check" | Externes Tool öffnen | `https://foerdermittelnavigator.com/` |
| Secondary: "Learn more" | Interne Navigation | `/about` |

### Filter-Sichtbarkeit
Die Kachel erscheint bei:
- **Alle Challenges** (All)
- **Board Pressure**
- **Portfolio Performance**  
- **Need Orientation**
- **Alle Tools** (AI-Powered Tools Filter)

---

## Technische Details

- `primaryCtaAction: 'external'` öffnet URL in neuem Tab
- `priceTag: 'free'` aktiviert grünen "Free" Badge
- Kein `partnerBadge` (wie gewünscht)
- Array-Challenges (kein `'universal'`)

