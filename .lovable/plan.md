

# Plan: Kachel 44 "Fix Growth. Scale Faster." + Landing Page

## Übersicht

| Element | Details |
|---------|---------|
| Kachel ID | 44 |
| Slug | `fix-growth-scale-faster` |
| solutionType | `insights` (existiert bereits) |
| challenges | `'universal'` (erscheint bei allen Challenges) |
| Route | `/book/fix-growth` |
| Amazon Link | https://www.amazon.de/dp/B0FN7C71VN |

---

## Teil 1: Buchcover-Bild kopieren

Das hochgeladene Buchcover wird in den `public/images/` Ordner kopiert:

```
user-uploads://Book_Cover.png → public/images/book-fix-growth-cover.png
```

---

## Teil 2: Neue Kachel in `src/data/solutionTiles.ts`

Am Ende des `solutionTiles` Arrays (nach ID 43 Maxxeed) wird die neue Kachel eingefügt:

```typescript
// ============================================
// INSIGHTS & CLARITY - BOOK (ID 44)
// ============================================
{
  id: 44,
  slug: 'fix-growth-scale-faster',
  solutionType: 'insights',
  challenges: 'universal',
  price: '€8.90-€44.90',
  priceTag: 'paid',
  headlineEn: 'Fix Growth. Scale Faster.',
  headlineDe: 'Fix Growth. Scale Faster.',
  problemEn: "You have a good product, strong investors, ambitious goals—but something's stuck. Revenue stagnates, complexity grows, decisions come too late, investors lose confidence. What's missing? A clear system for execution.",
  problemDe: 'Du hast ein gutes Produkt, starke Investoren, ambitionierte Ziele—aber etwas hakt. Umsatz stagniert, Komplexität wächst, Entscheidungen kommen zu spät, Investoren verlieren Vertrauen. Was fehlt? Ein klares System für Execution.',
  solutionEn: '"Fix Growth. Scale Faster." is the first book that takes execution seriously—and offers a system to deliver exactly that: Impact. Clarity. Growth. Based on 140+ projects with startups, scale-ups, and mid-market ventures.',
  solutionDe: '"Fix Growth. Scale Faster." ist das erste Buch, das Execution ernst nimmt—und ein System bietet, um genau das zu liefern: Impact. Klarheit. Wachstum. Basierend auf 140+ Projekten mit Startups, Scale-ups und Mittelständlern.',
  deliverablesEn: [
    'The complete ScalingX Hypergrowth System (32 interventions, 4 levers, 3 modes)',
    'Detailed checklists, tools, and real-world examples',
    'The Scaling Scorecard for assessment and strategy',
    'Access to ScalingX Hypergrowth GPT (with exclusive prompt guide)'
  ],
  deliverablesDe: [
    'Das komplette ScalingX Hypergrowth System (32 Interventionen, 4 Hebel, 3 Modi)',
    'Detaillierte Checklisten, Tools und Real-World Beispiele',
    'Die Scaling Scorecard für Assessment und Strategie',
    'Zugang zum ScalingX Hypergrowth GPT (mit exklusivem Prompt Guide)'
  ],
  impactEn: 'The execution playbook for VC/PE-backed ventures that want to win. Built for capital efficiency, time-to-impact, and investor confidence.',
  impactDe: 'Das Execution-Playbook für VC/PE-finanzierte Unternehmen, die gewinnen wollen. Gebaut für Kapitaleffizienz, Time-to-Impact und Investor Confidence.',
  primaryCtaEn: 'Buy on Amazon',
  primaryCtaDe: 'Auf Amazon kaufen',
  primaryCtaAction: 'external',
  primaryCtaUrl: 'https://www.amazon.de/dp/B0FN7C71VN',
  secondaryCtaEn: 'Learn more',
  secondaryCtaDe: 'Mehr erfahren',
  secondaryCtaUrl: '/book/fix-growth',
  partnerBadge: {
    labelEn: 'Kindle · Paperback · Hardcover',
    labelDe: 'Kindle · Paperback · Hardcover',
    color: 'book'
  }
}
```

Besonderheiten:
- `challenges: 'universal'` - erscheint bei allen Challenge-Filtern
- `primaryCtaAction: 'external'` - öffnet Amazon-Link in neuem Tab
- `secondaryCtaUrl: '/book/fix-growth'` - Link zur Landing Page

---

## Teil 3: Neue Landing Page `src/pages/FixGrowthBook.tsx`

Die Landing Page folgt dem Maxxeed-Pattern mit angepassten Sektionen:

### Sektionen-Struktur

```
1. HeroSection
   - Breadcrumb: Solutions > Fix Growth. Scale Faster.
   - Badge: Book · €8.90-€44.90 · Kindle/Paperback/Hardcover
   - Buchcover-Bild
   - Headline + Subheadline
   - CTAs: "Buy on Amazon" (primary) + "Read Sample" (secondary)

2. ProblemSection
   - 4 Symptome (Revenue stagniert, Komplexität wächst, etc.)
   - Kostenrechnung: Was passiert ohne klares Execution-System

3. SolutionSection
   - Das Hypergrowth System (4 Hebel, 32 Interventionen, 3 Modi)
   - Visuelle Darstellung der Struktur

4. WhatsInsideSection
   - 4 Deliverables als Cards
   - Exklusiver GPT-Zugang hervorheben

5. AuthorSection
   - Michel Laleye Portrait (existierendes Bild)
   - Kurzbio und Credentials

6. ReviewsSection (optional)
   - Amazon Reviews/Zitate falls vorhanden
   - "Based on 140+ projects"

7. FinalCTASection
   - Alle 3 Formate mit Preisen
   - Direct Amazon Links
```

### Komponenten-Imports

```typescript
// Verwendet bestehende UI-Komponenten
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumb, ... } from '@/components/ui/breadcrumb';
import TwinklingStars from '@/components/TwinklingStars';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallaxLayers } from '@/hooks/useParallax';

// Icons
import { BookOpen, Check, ArrowRight, ExternalLink, Target, Zap, Settings, BarChart3, Brain, Users } from 'lucide-react';
```

---

## Teil 4: Route in `src/App.tsx`

Neue lazy-loaded Komponente und Route:

```typescript
// Import (Zeile ~65)
const FixGrowthBook = lazy(() => import("./pages/FixGrowthBook"));

// Route (vor Zeile 142)
<Route path="/book/fix-growth" element={<FixGrowthBook />} />
```

---

## Technische Details

### Dateien die erstellt/geändert werden

| Datei | Aktion |
|-------|--------|
| `public/images/book-fix-growth-cover.png` | Erstellen (Kopie vom Upload) |
| `src/data/solutionTiles.ts` | Kachel ID 44 hinzufügen |
| `src/pages/FixGrowthBook.tsx` | Neue Datei erstellen |
| `src/App.tsx` | Import + Route hinzufügen |

### Design-System Konsistenz

- Folgt dem Maxxeed-Pattern (7 Sektionen, TwinklingStars, Parallax)
- Breadcrumb: "Solutions > Fix Growth. Scale Faster."
- Farben: Blau-Akzent (passend zum Buchcover)
- Bilingual: Vollständig DE/EN

### CTA-Logik

| CTA | Aktion | URL |
|-----|--------|-----|
| "Buy on Amazon" (Primary) | `window.open(...)` | https://www.amazon.de/dp/B0FN7C71VN |
| "Read Sample" | `window.open(...)` | https://www.amazon.de/dp/B0FN7C71VN#reader |
| "Learn more" (Secondary auf Kachel) | Navigation | /book/fix-growth |

---

## Erwartetes Ergebnis

1. **Solutions Hub**: Neue Kachel "Fix Growth. Scale Faster." erscheint bei allen Challenge-Filtern und unter "Insights & Clarity"
2. **Kachel-CTA**: "Auf Amazon kaufen" → öffnet Amazon, "Mehr erfahren" → öffnet Landing Page
3. **Landing Page**: Vollständige Buchpräsentation unter `/book/fix-growth` mit direkten Amazon-Links

