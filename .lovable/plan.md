
# Plan: Maxxeed Solution Tile und Landing Page erstellen

## Ubersicht

Das Briefing ist vollstandig und gut strukturiert. Es werden **2 Dateien** erstellt und **2 Dateien** aktualisiert:

| Datei | Aktion |
|-------|--------|
| `src/data/solutionTiles.ts` | Neue Kachel hinzufugen (ID 42) |
| `src/pages/Maxxeed.tsx` | Neue Landing Page erstellen |
| `src/App.tsx` | Route `/tools/maxxeed` hinzufugen |
| `src/components/solutions/SolutionTileCard.tsx` | Partnership Badge Support hinzufugen |

---

## Teil 1: Neue Solution Tile (solutionTiles.ts)

### Neue Eigenschaften fur Maxxeed

Das Briefing erfordert ein **neues Feature**: Partnership Badge. Dies muss im `SolutionTile` Interface ergänzt werden:

```typescript
// Neue optionale Eigenschaft im Interface:
partnerBadge?: {
  labelEn: string;
  labelDe: string;
  color: string; // Tailwind class oder hex
};
```

### Kachel-Daten (ID 42)

```typescript
{
  id: 42,
  slug: 'maxxeed',
  solutionType: 'tools',
  challenges: ['cac-crisis', 'growth-stalled'],
  price: '€135/User/Mo',
  priceTag: 'paid',
  headlineEn: 'Maxxeed Digital Showrooms',
  headlineDe: 'Maxxeed Digital Showrooms',
  problemEn: "Your sales team relies on email and PowerPoint—unpersonal, inefficient. 78% of buyers demand better experiences, but get boring presentations. 30% win rate.",
  problemDe: 'Dein Sales-Team nutzt E-Mail und PowerPoint—unpersonlich, ineffizient. 78% der Kaufer fordern bessere Erfahrungen, bekommen aber langweilige Prasentationen. 30% Win Rate.',
  solutionEn: 'Maxxeed automates creation of hyper-personalized Digital Showrooms in 30 seconds. AI transforms meeting notes into stunning presentations.',
  solutionDe: 'Maxxeed automatisiert die Erstellung hyper-personalisierter Digital Showrooms in 30 Sekunden. KI verwandelt Gesprachsnotizen in beeindruckende Prasentationen.',
  deliverablesEn: [
    'Automatic showroom creation (30s)',
    'Buyer value cycle (stakeholder maps)',
    'Deal health score & analytics'
  ],
  deliverablesDe: [
    'Automatische Showroom-Erstellung (30s)',
    'Buyer Value Cycle (Stakeholder Maps)',
    'Deal Health Score & Analytics'
  ],
  impactEn: '+31% close rate, +24% deal size, 98% email open rate. €50M ARR: +€12M ARR.',
  impactDe: '+31% Close Rate, +24% Deal Size, 98% E-Mail-Offnungsrate. €50M ARR: +€12M ARR.',
  primaryCtaEn: 'Book Demo',
  primaryCtaDe: 'Demo buchen',
  primaryCtaAction: 'learn-more',
  primaryCtaUrl: '/tools/maxxeed',
  secondaryCtaEn: 'Visit Maxxeed',
  secondaryCtaDe: 'Maxxeed besuchen',
  secondaryCtaUrl: 'https://www.maxxeed.com/de/',
  partnerBadge: {
    labelEn: 'Black Belt Partner',
    labelDe: 'Black Belt Partner',
    color: 'gold' // #FFD700
  }
}
```

---

## Teil 2: SolutionTileCard.tsx anpassen

Fur den Partnership Badge muss die Card-Komponente erweitert werden:

```tsx
// Nach den bestehenden Badges (Zeile ~126):
{tile.partnerBadge && (
  <Badge 
    className="text-xs font-medium bg-yellow-500/20 text-yellow-600 border-yellow-500/30"
  >
    <Star className="w-3 h-3 mr-1" />
    {lang === 'de' ? tile.partnerBadge.labelDe : tile.partnerBadge.labelEn}
  </Badge>
)}
```

---

## Teil 3: Landing Page erstellen (Maxxeed.tsx)

Die Landing Page folgt dem bestehenden 7-Section-Pattern (wie PowerUpCACCrisis.tsx):

### Seitenstruktur

```text
1. HeroSection
   - Breadcrumb: Home > Tools > Maxxeed
   - Badge: AI-Powered Sales Enablement · €135/User/Mo · Black Belt Partner
   - Headline: "Begeistere deine Kaufer in 30 Sekunden"
   - 4 Stats: +31% Close Rate, +24% Deal Size, 98% Open Rate, +422% ABM Rate
   - CTAs: Book Demo (Primary) + Visit Maxxeed (Secondary, external)
   - Trust Badges + Partnership Note

2. ProblemSection
   - 3 Kernprobleme: Inefficient Communication, No Differentiation, Buyer Frustration
   - Result-Metriken (Baseline vs. Maxxeed)
   - Cost-Kalkulation (€12M lost ARR)

3. SolutionSection
   - 3 Core Features: Showroom Creation, Buyer Value Cycle, Deal Health Score
   - Maxxeed Difference (6 Punkte)

4. OutcomeSection
   - Metrics Table (8 Metriken)
   - ROI Calculation (57x ROI bei €135/User/Mo)
   - 3 Testimonials (Ralf H. KOMOR, Siegfried Lettmann, Felix Stegmann)

5. ICPSection
   - 4 Personas: Sales Reps, Sales Leaders, Marketing Teams, Enterprise Sales
   - Good Fit / Not Fit Checkliste

6. BuyerJourneySection
   - 9 Use Cases (Lead Generation bis Knowledge Base)
   - 3-Step Process

7. PricingSection
   - Pricing: €135/User/Month
   - Team Sizes (5/10/20 users)
   - ROI Guarantee
   - FAQ (7 Fragen)
   - Final CTAs
```

### Design-Elemente

- TwinklingStars, Parallax-Layers, Scroll-Animationen (wie PowerUpCACCrisis)
- Bilingual: DE/EN Support
- Partnership Badge (Gold Star) prominent im Hero
- External Links fur "Visit Maxxeed" (https://www.maxxeed.com/de/)

---

## Teil 4: Route in App.tsx hinzufugen

```tsx
// Import
const Maxxeed = lazy(() => import("./pages/Maxxeed"));

// Route (vor dem Catch-All)
<Route path="/tools/maxxeed" element={<Maxxeed />} />
```

---

## Technische Details

### Besonderheiten gegenuber anderen Landing Pages

1. **Partnership Badge**: Neues Feature, muss im Interface und Card unterstutzt werden
2. **Route-Pattern**: `/tools/maxxeed` statt `/solutions/power-up/...`
3. **Externe Secondary CTA**: "Visit Maxxeed" geht zu maxxeed.com
4. **Bilingual Content**: Alle Texte aus dem Briefing in DE + EN

### Dateigrose

- `Maxxeed.tsx`: ~1,200 Zeilen (ahnlich wie PowerUpCACCrisis.tsx mit 1,147 Zeilen)
- Interface-Erweiterung: ~5 Zeilen
- Tile-Daten: ~35 Zeilen
- Card-Badge: ~8 Zeilen

### Zu beachtende Briefing-Details

| Aspekt | Wert |
|--------|------|
| URL | `/tools/maxxeed` |
| Pricing | €135/User/Mo |
| Challenges | CAC Crisis, Growth Stalled |
| Solution Type | AI-Powered Tools |
| Primary CTA | "Book Demo with ScalingX" |
| Secondary CTA | "Visit Maxxeed" (external) |
| ROI | 57x (€1.86M/year at €32.4k/year) |
| Partnership | Black Belt Partner (Gold) |

---

## Zusammenfassung

| Schritt | Beschreibung |
|---------|--------------|
| 1 | `SolutionTile` Interface um `partnerBadge` erweitern |
| 2 | Neue Kachel (ID 42) in `solutionTiles.ts` hinzufugen |
| 3 | `SolutionTileCard.tsx` um Partnership Badge erweitern |
| 4 | `Maxxeed.tsx` Landing Page mit 7 Sections erstellen |
| 5 | Route `/tools/maxxeed` in `App.tsx` registrieren |

Nach Umsetzung: **42 Solutions** im Solutions Hub (dynamisch aktualisiert dank vorheriger Anderung).
