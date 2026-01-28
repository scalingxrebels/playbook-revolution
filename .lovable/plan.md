

# Plan: Power Up Pricing Power – Landing Page + Kachel-Update

## Übersicht

Umsetzung analog zu den bestehenden Power Up Landing Pages:
1. Kachel-Update in solutionTiles.ts (ID 13)
2. Neue Route in App.tsx
3. Neue Landing Page erstellen

---

## 1. Kachel-Update in solutionTiles.ts

**Datei:** `src/data/solutionTiles.ts` (Zeilen 542-575)

| Feld | Aktuell | Neu |
|------|---------|-----|
| solutionEn | "...in 30 days..." | "...in 4-6 weeks..." |
| solutionDe | "...in 30 Tagen..." | "...in 4-6 Wochen..." |
| primaryCtaEn | Start Transformation | More About Pricing Power |
| primaryCtaDe | Transformation starten | Mehr über Pricing Power |
| primaryCtaAction | book-call | learn-more |
| primaryCtaUrl | Calendly-Link | /solutions/power-up/pricing-power |

---

## 2. Neue Route in App.tsx

**Datei:** `src/App.tsx`

```tsx
const PowerUpPricingPower = lazy(() => import("./pages/PowerUpPricingPower"));

// Route:
<Route path="/solutions/power-up/pricing-power" element={<PowerUpPricingPower />} />
```

---

## 3. Neue Landing Page erstellen

**Datei:** `src/pages/PowerUpPricingPower.tsx`

Struktur analog zu `PowerUpGrowthMomentum.tsx` mit 7 Sektionen:

### Section 1: Hero
- **Breadcrumb:** `Solutions > Power Up Pricing Power`
- **Badge:** `Power Up · 4-6 Weeks · From €23.6K`
- **Headline:** `Pricing Breakdown → Pricing Power Restored`
- **Subheadline:** Fix your pricing strategy in 4-6 weeks...
- **Stats:** ARPU +30-50% | Gross Margin +10-15pp | Pricing System Implemented
- **Trust Badges:** Outcome-Based Risk Sharing, 4-6 Week Sprint, Reference Calls Available

### Section 2: Problem
- **Headline:** `Your Pricing Is Broken`
- **Symptome:**
  - ARPU stagnation: €150 (benchmark: €300+)
  - Heavy discounting: 30-50% just to close
  - Gross margin decline: 25% (target: 40%)
  - Value metric confusion
  - Packaging chaos

### Section 3: Solution
- **Headline:** `How We Restore Your Pricing Power`
- **3-Phasen-Ansatz:**
  - Week 1-2: Diagnose (Value Metric, Packaging, Willingness-to-Pay, Competitive Analysis)
  - Week 2-4: Fix (Value Metric Redesign, Packaging Optimization, or WTP Validation)
  - Week 4-6: Validate & Scale

### Section 4: Impact/Outcome
- **Metrics:**
  - ARPU +30-50% (Beispiel: €150 → €210)
  - Gross Margin +10-15pp (Beispiel: 25% → 38%)
  - Pricing System Implemented (Calculator, Dynamic Pricing, Discount Policy)
- **Real Example:** Series B SaaS, €20M ARR, ARPU +42%

### Section 5: Process (How We Work)
- Week-by-Week Breakdown
- Time Commitment (8-12h, 12-16h, 6-8h)
- Outcome-Based Risk Sharing Details
- Primary Metrics: ARPU, Gross Margin, Discount Rate

### Section 6: Qualification (Who It's For)
- **Good Fit:**
  - ARPU stagnant/declining for 12+ months
  - Gross margins <30%
  - Series A-D, €10M-€50M ARR
  - Budget: €23.6K
- **Not a Fit:**
  - Pre-revenue/pre-Series A
  - Needs full pricing transformation (→ Boost/Accelerate)
  - Just wants strategy deck

### Section 7: Final CTA
- **Headline:** `Ready to Restore Your Pricing Power?`
- **Primary CTA:** Book Free Inflection Call (30 min)
- **Secondary:** Expert Session: Pricing & Packaging Level Up (€490-€890)
- **FAQ:** Duration, Investment, Risk Sharing, References, ROI, Billing System Integration

---

## Technische Details

### Komponenten-Wiederverwendung
Die neue Landing Page verwendet die gleichen Patterns wie `PowerUpGrowthMomentum.tsx`:
- `TwinklingStars` für Hero-Hintergrund
- `useParallaxLayers` für Parallax-Effekte
- `useScrollAnimation` für Scroll-basierte Animationen
- `Accordion` für FAQ-Bereich
- Bilingual (DE/EN) mit `useLanguage`

### Dateistruktur
```text
src/
├── App.tsx                          # Neue Route hinzufügen
├── data/
│   └── solutionTiles.ts             # Kachel-CTA aktualisieren
└── pages/
    ├── PowerUpCACCrisis.tsx         # Referenz
    ├── PowerUpGrowthMomentum.tsx    # Referenz
    └── PowerUpPricingPower.tsx      # NEU
```

### URL-Pattern
Gemäß etablierter Logik: `/solutions/power-up/pricing-power` (nicht `/solutions/power-up-pricing-power`)

### Breadcrumb-Pattern
```tsx
<BreadcrumbList>
  <BreadcrumbItem>
    <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <span className="text-foreground font-medium">Power Up Pricing Power</span>
  </BreadcrumbItem>
</BreadcrumbList>
```

---

## Zusammenfassung der Änderungen

| Datei | Änderung |
|-------|----------|
| `src/data/solutionTiles.ts` | Kachel ID 13: CTA + Duration aktualisieren |
| `src/App.tsx` | Neue Route + Lazy Import |
| `src/pages/PowerUpPricingPower.tsx` | Neue Datei (7 Sektionen) |

