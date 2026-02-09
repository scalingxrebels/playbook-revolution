
# Vollständige Fillout-Migration: Alle verbleibenden Seiten

## Übersicht

Basierend auf der Code-Analyse müssen noch **31 Dateien** mit **365+ Calendly-Links** auf das einheitliche `FilloutBookingModal`-Pattern migriert werden.

---

## Kategorien der verbleibenden Migrationen

### Kategorie 1: Accelerate-Seiten (5 Dateien, ~20 CTAs)

| Datei | Source | Anzahl CTAs |
|-------|--------|-------------|
| `AccelerateHypergrowth.tsx` | `accelerate` | 4 |
| `AccelerateExitReadiness.tsx` | `accelerate` | 4 |
| `AccelerateAINativeScaling.tsx` | `accelerate` | 4 |
| `AccelerateSustainableGrowth.tsx` | `accelerate` | 4 |
| `AcceleratePortfolioTransformation.tsx` | `accelerate` | 4 |

**Pattern in jeder Datei:**
- Hero CTA: `scrollToSection('final-cta')` → bleibt (scrollt zum Formular)
- FinalCTA Section: `window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank')` → `FilloutBookingModal`
- Alternative CTA: `window.open('https://calendly.com/michel-scalingx/assessment', '_blank')` → `FilloutBookingModal`

---

### Kategorie 2: PowerUp-Seiten (8 Dateien, ~24 CTAs)

| Datei | Source | Anzahl CTAs |
|-------|--------|-------------|
| `PowerUpBoardReadiness.tsx` | `solutions` | 3 |
| `PowerUpPortfolioPerformance.tsx` | `solutions` | 3 |
| `PowerUpPricingPower.tsx` | `solutions` | 3 |
| `PowerUpNRREngine.tsx` | `solutions` | 3 |
| `PowerUpScalingVelocity.tsx` | `solutions` | 3 |
| `PowerUpGrowthMomentum.tsx` | `solutions` | 3 |
| `PowerUpCACCrisis.tsx` | `solutions` | 3 |
| `PowerUpCustomSprint.tsx` | `solutions` | 3 |

**Pattern:** Alle haben CTA-Buttons mit `onClick={() => window.open('calendly...')}` die durch Modals ersetzt werden.

---

### Kategorie 3: Assessment/Review-Seiten (5 Dateien, ~20 CTAs)

| Datei | Source | Form-Slug |
|-------|--------|-----------|
| `AIMaturityAssessment.tsx` | `ai-assessment` | `inflection-call` |
| `ScalingReadinessAssessment.tsx` | `scaling-assessment` | `inflection-call` |
| `GTMEffectivenessReview.tsx` | `gtm-review` | `inflection-call` |
| `PricingPackagingReview.tsx` | `pricing-review` | `inflection-call` |
| `InvestorReadinessPitchDeckCheck.tsx` | `investor-readiness` | `inflection-call` |

---

### Kategorie 4: Boost-Seiten (6 Dateien, ~12 CTAs)

| Datei | Source |
|-------|--------|
| `BoostAIMaturity.tsx` | `solutions` |
| `BoostCustomProgram.tsx` | `solutions` |
| `BoostEfficientHypergrowth.tsx` | `solutions` |
| `BoostGrowthEngine.tsx` | `solutions` |
| `BoostNRRMachine.tsx` | `solutions` |
| `BoostPricingDominance.tsx` | `solutions` |
| `BoostPortfolioValue.tsx` | `solutions` |
| `BoostScalingOS.tsx` | `solutions` |

---

### Kategorie 5: Spezial-Seiten (4 Dateien)

| Datei | Source | Besonderheit |
|-------|--------|--------------|
| `About.tsx` | `about` | Team CTA Button |
| `SolutionCategory.tsx` | `solutions` | Generischer CTA |
| `Workshop.tsx` | `workshop` | Hat 3 Workshop-Buttons (bleiben extern) + 1 Inflection |
| `FixGrowthBook.tsx` | `book` | Book CTA |

---

### Kategorie 6: Komponenten und Data-Files (3 Dateien)

| Datei | Änderung |
|-------|----------|
| `ChallengeDetailModal.tsx` | CTA Links auf Modal umstellen |
| `FinalCTAOptimized.tsx` | Hat noch einen Fallback-Calendly-Link |
| `solutionTiles.ts` | `primaryCtaUrl` von Calendly auf Fillout-Slug ändern |

---

## Implementierungs-Batches

### Batch 1: Accelerate-Seiten (5 Dateien)

Jede Datei erhält:
```typescript
import { useState } from 'react';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';

// Am Anfang der Hauptkomponente:
const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

// Button ändern:
onClick={() => setIsBookingModalOpen(true)}

// Modal am Ende hinzufügen:
<FilloutBookingModal
  formSlug="inflection-call"
  source="accelerate"
  isOpen={isBookingModalOpen}
  onClose={() => setIsBookingModalOpen(false)}
/>
```

### Batch 2: PowerUp-Seiten (8 Dateien)

Gleiches Pattern, `source="solutions"`

### Batch 3: Assessment-Seiten (5 Dateien)

Gleiches Pattern mit individuellen Source-Werten

### Batch 4: Boost-Seiten (6 Dateien)

Gleiches Pattern, `source="solutions"`

### Batch 5: Spezialseiten + Komponenten (7 Dateien)

- `About.tsx`: Modal für Team-CTA
- `SolutionCategory.tsx`: Modal für generischen CTA
- `ChallengeDetailModal.tsx`: Alle Booking-Buttons
- `FinalCTAOptimized.tsx`: Fallback-Button
- `solutionTiles.ts`: URL-Werte anpassen

---

## Technische Details

### Standard-Import für alle Dateien

```typescript
import { useState } from 'react';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
```

### Ersetzungs-Pattern

**Alt:**
```typescript
onClick={() => window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank')}
```

**Neu:**
```typescript
onClick={() => setIsBookingModalOpen(true)}
```

### Modal-Platzierung

Immer am Ende der Komponente, vor dem schließenden Fragment/div:

```tsx
<FilloutBookingModal
  formSlug="inflection-call"
  source="accelerate"
  isOpen={isBookingModalOpen}
  onClose={() => setIsBookingModalOpen(false)}
  title={language === 'de' ? 'Inflection Call buchen' : 'Book Inflection Call'}
/>
```

---

## Source-Werte Mapping

| Seitentyp | source-Wert |
|-----------|-------------|
| Accelerate-Seiten | `accelerate` |
| Boost-Seiten | `solutions` |
| PowerUp-Seiten | `solutions` |
| Assessment-Seiten | `{assessment-type}` (z.B. `ai-assessment`) |
| About | `about` |
| Workshop | `workshop` |
| Book | `book` |

---

## Form-Slugs Übersicht

| Formular | Slug | Verwendung |
|----------|------|------------|
| Inflection Call | `inflection-call` | Standard für alle "Book Call" CTAs |
| Expert Session | `expert-session` | Expert Session Seite |
| Inquiry | `inquiry` | Homepage Embed |

---

## Zusammenfassung

| Batch | Dateien | Geschätzte CTAs |
|-------|---------|-----------------|
| 1: Accelerate | 5 | ~20 |
| 2: PowerUp | 8 | ~24 |
| 3: Assessment | 5 | ~20 |
| 4: Boost | 6 | ~18 |
| 5: Spezial | 7 | ~15 |
| **Total** | **31** | **~97** |

---

## Ergebnis nach Implementierung

Alle Booking-CTAs im gesamten Projekt werden:
1. Ein 900px Fillout Modal öffnen (konsistente UX)
2. Automatisch UTM-Parameter aus sessionStorage übergeben
3. Den passenden `source`-Wert für Analytics tracken
4. Keine externen Tab-Öffnungen mehr haben (außer Workshop-spezifische Calendly)
