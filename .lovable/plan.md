

# Plan: Fix Growth - Preise anpassen und Kachel-Änderungen

## Übersicht der Änderungen

| Datei | Änderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Preise, Deliverables kürzen, CTAs anpassen, partnerBadge entfernen |
| `src/pages/FixGrowthBook.tsx` | Preise in Hero Badge und FinalCTASection korrigieren |

---

## Teil 1: Solution Tile (ID 44) in `solutionTiles.ts`

### Aktuelle Werte vs. Neue Werte

| Feld | Aktuell | Neu |
|------|---------|-----|
| `price` | `€8.90-€44.90` | `€4.29-€44.90` |
| `deliverablesEn` | 4 Items (lang) | 2 Items (gekürzt) |
| `deliverablesDe` | 4 Items (lang) | 2 Items (gekürzt) |
| `primaryCtaAction` | `external` | `learn-more` |
| `primaryCtaUrl` | Amazon Link | `/book/fix-growth` |
| `secondaryCtaEn` | `Learn more` | `Buy on Amazon` |
| `secondaryCtaDe` | `Mehr erfahren` | `Auf Amazon kaufen` |
| `secondaryCtaUrl` | `/book/fix-growth` | Amazon Link |
| `partnerBadge` | Vorhanden | Entfernen |

### Gekürzte Deliverables

**Englisch:**
```typescript
deliverablesEn: [
  'The ScalingX Hypergrowth System (32 interventions, 4 levers)',
  'Checklists, tools, Scaling Scorecard & GPT access'
]
```

**Deutsch:**
```typescript
deliverablesDe: [
  'Das ScalingX Hypergrowth System (32 Interventionen, 4 Hebel)',
  'Checklisten, Tools, Scaling Scorecard & GPT-Zugang'
]
```

### CTA-Logik invertiert

| CTA | Aktion | URL |
|-----|--------|-----|
| Primary "Learn more" | Navigation | `/book/fix-growth` |
| Secondary "Buy on Amazon" | External | https://www.amazon.de/dp/B0FN7C71VN |

---

## Teil 2: Landing Page Preise in `FixGrowthBook.tsx`

### Hero Section (Zeile 105)

```typescript
// Aktuell:
<Badge variant="outline">€8.90-€44.90</Badge>

// Neu:
<Badge variant="outline">€4.29-€44.90</Badge>
```

### FinalCTASection Format Cards (Zeilen 638-642)

```typescript
// Aktuell:
const formats = [
  { name: 'Kindle', price: '€8.90', icon: Lightbulb },
  { name: 'Paperback', price: '€29.90', icon: BookOpen },
  { name: 'Hardcover', price: '€44.90', icon: Award },
];

// Neu (korrekte Preise):
const formats = [
  { name: 'Kindle', price: '€4.29', icon: Lightbulb },
  { name: 'Paperback', price: '€14.95', icon: BookOpen },
  { name: 'Hardcover', price: '€44.90', icon: Award },
];
```

---

## Erwartetes Ergebnis

### Solution Tile im Hub

- Preis: "€4.29-€44.90"
- 2 kurze Deliverables statt 4 lange
- Kein "Kindle · Paperback · Hardcover" Sticker
- Primary CTA: "Learn more" → Landing Page
- Secondary CTA: "Buy on Amazon" → Amazon

### Landing Page

- Hero Badge: "€4.29-€44.90"
- Format Cards: Kindle €4.29, Paperback €14.95, Hardcover €44.90

