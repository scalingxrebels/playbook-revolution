

## Plan: Revenue Architecture System — Kachel + Landing Page (v9.1)

### Aenderungen gegenueber v9.0-Plan

Das v9.1-Briefing bringt folgende inhaltliche Aenderungen:

1. **Kategorie**: "AI-native Execution Consulting" → "Revenue Architecture Build Program / Guided Build"
2. **Claims auditiert**: Kein "einziges Programm", kein "22-58% CAC-Reduktion" — stattdessen qualifizierte Aussagen
3. **Pricing-Hierarchie**: Plus = Sweet Spot (visuell hervorgehoben), VIP = Anchor, Standard = Entry
4. **S5 komprimiert** in Variante A (3 Kernpunkte statt 22er-Grid)
5. **Sektions-Nummern verschoben**: S8=Michel (war S10), S9b=Pre-Cohort Proof, S10=Founding Frame (war S11a), S11a-e=Pricing+CTA
6. **Ton**: Souveraener, weniger Superlative, keine Countdown-Timer/Urgency-Banner
7. **Wiederholungen reduziert**: "22 Deliverables / Max. 12 / Founding" nur je einmal prominent

### Implementierung

**1. Neue Solution Tile (ID 47) in `src/data/solutionTiles.ts`**
- slug: `revenue-architecture-system`
- solutionType: `transformation`, transformationTier: `accelerate`
- challenges: `['cac-crisis', 'growth-stalled', 'scaling-chaos', 'ai-transformation']`
- price: `ab €6.900`, priceTag: `paid`
- Content aus v9.1 Briefing (DE+EN), auditierte Claims
- primaryCtaAction: `learn-more`, primaryCtaUrl: `/solutions/revenue-architecture-system`

**2. Neue Landing Page: `src/pages/RevenueArchitectureSystem.tsx`**

Folgt dem Accelerate-Muster (monolithische Sektionen, Deep Space Hero, `openBookingModal` CustomEvent, FilloutBookingModal). Implementiert **Variante A** (warm-heiss):

| Sektion | Inhalt |
|---|---|
| S1 Hero | Deep Space BG, Problem-Led Headline, "Jetzt bewerben" CTA, Social Proof Strip, kein Urgency-Banner |
| S2 VSL | Video-Platzhalter (16:9) + Text-Safety-Net |
| S5 komprimiert | 3 Kernpunkte (ICP+Value Stack, Entry+Conversion, Revenue OS) |
| S7 Programm | 6 Session-Kacheln + Format-Box |
| S9b Pre-Cohort | 3 Saeulen (Practitioner, Methoden, Session-1-Guarantee) |
| S8 Michel | Foto + Bio + LinkedIn + anonyme Zitate |
| S10 Founding | Amber-Box mit Founding-Frame-Erklaerung |
| S11a-b Pricing | 3 Tiers, Plus hervorgehoben mit Badge, Ratenzahlung |
| S11c Prozess | 4 Schritte |
| S11d Risk Reversal | Session-1-Guarantee |
| S11e CTA | Finaler CTA + sekundaerer Kontakt-Link |

Design: Projekt-eigenes Design-System (League Spartan + DM Sans, HSL-Farben, brutalist borders), nicht das Briefing-Farbschema. Deep Space Parallax + TwinklingStars konsistent mit anderen Accelerate-Seiten.

**3. Route in `src/App.tsx`**
- Lazy import + Route `/solutions/revenue-architecture-system`

### Umfang
- 1 neue Datei (~900-1100 Zeilen)
- 2 bestehende Dateien editieren (`solutionTiles.ts`, `App.tsx`)
- Keine DB-Aenderungen

