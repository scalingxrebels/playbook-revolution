
# Plan: Fillout-Pattern auf alle verbleibenden Seiten anwenden

## Übersicht

Basierend auf der Analyse müssen noch **28 Stellen** in **21 Dateien** aktualisiert werden, um das einheitliche Fillout-Pattern mit UTM + Source Tracking zu verwenden.

---

## Aktuelle Situation

### Bereits migriert (FilloutBookingModal)
- `ML.tsx`, `AH.tsx`, `FM.tsx` → Team-Seiten ✅
- `PlaybookHeroSection.tsx` → Playbook Hero ✅
- `PlaybookFinalCTASection.tsx` → Playbook CTA ✅

### Noch mit Calendly-Links (müssen migriert werden)

| Datei | Anzahl CTAs | Form-Typ(en) | Source |
|-------|-------------|--------------|--------|
| `ExpertSession.tsx` | 6 | `expert-session`, `inflection-call` | `expert-session` |
| `Keynote.tsx` | 4 | `inflection-call` | `keynote` |
| `Workshop.tsx` | 4 | `inflection-call` | `workshop` |
| `StrategicAdvisory.tsx` | 2 | `inflection-call`, `expert-session` | `strategic-advisory` |
| `VCDueDiligenceSimulation.tsx` | 1 | `inflection-call` | `vc-dd-simulation` |
| `CustomAnalysisReport.tsx` | 1 | `inflection-call` | `custom-analysis` |
| `BoostBoardExcellence.tsx` | 2 | `inflection-call` | `solutions` |
| `CaseCTA.tsx` | 1 | `inflection-call` | `case_study` |
| `PlaybookLibrary.tsx` | 1 | `inflection-call` | `playbooks` |
| `PortfolioAssessment.tsx` | 4 | `inflection-call` | `portfolio-assessment` |

### Accelerate-Seiten (4 Seiten)
- `AccelerateHypergrowth.tsx`
- `AccelerateSustainableGrowth.tsx`
- `AccelerateExitReadiness.tsx`
- `AcceleratePortfolioTransformation.tsx`
- `AccelerateAINativeScaling.tsx`

### Assessment/Review-Seiten (5 Seiten)
- `ScalingReadinessAssessment.tsx`
- `AIMaturityAssessment.tsx`
- `GTMEffectivenessReview.tsx`
- `PricingPackagingReview.tsx`
- `InvestorReadinessPitchDeckCheck.tsx`

### PowerUp-Seiten mit `data-fillout-id` (bereits teilweise aktualisiert, aber noch mit alten Embeds)
- `PowerUpPricingPower.tsx`
- `PowerUpNRREngine.tsx`
- `PowerUpPortfolioPerformance.tsx`
- `PowerUpBoardReadiness.tsx`
- `PowerUpScalingVelocity.tsx`
- `PowerUpGrowthMomentum.tsx`
- `PowerUpCACCrisis.tsx`
- `PowerUpCustomSprint.tsx`

---

## Implementierung

### Phase 1: Core CTA-Komponenten (6 Dateien)

#### 1. `src/components/cases/CaseCTA.tsx`
- Import: `FilloutBookingModal`, `useState`
- State: `isBookingModalOpen`
- Button: `onClick={() => setIsBookingModalOpen(true)}`
- Modal: `formSlug="inflection-call"`, `source="case_study"`

#### 2. `src/components/PlaybookLibrary.tsx`
- Import: `FilloutBookingModal`, `useState`
- State: `isBookingModalOpen`
- Button (Zeile 232): `onClick={() => setIsBookingModalOpen(true)}`
- Modal: `formSlug="inflection-call"`, `source="playbooks"`

### Phase 2: Product-Seiten (6 Dateien)

#### 3. `src/pages/ExpertSession.tsx`
- Import: `FilloutBookingModal`, `useState`
- States: `isExpertSessionModalOpen`, `isInflectionCallModalOpen`
- 5× Expert Session Buttons → `formSlug="expert-session"`, `source="expert-session"`
- 1× Inflection Call Button → `formSlug="inflection-call"`, `source="expert-session"`

#### 4. `src/pages/Keynote.tsx`
- Import: `FilloutBookingModal`, `useState`
- State: `isBookingModalOpen`
- 3× Keynote Buttons → extern lassen (spezifisches Calendly)
- 1× Inflection Call Button → `formSlug="inflection-call"`, `source="keynote"`

#### 5. `src/pages/Workshop.tsx`
- Import: `FilloutBookingModal`, `useState`
- State: `isBookingModalOpen`
- 3× Workshop Buttons → extern lassen (spezifisches Calendly)
- 1× Inflection Call Button → `formSlug="inflection-call"`, `source="workshop"`

#### 6. `src/pages/StrategicAdvisory.tsx`
- Import: `FilloutBookingModal`, `useState`
- States: `isInflectionModalOpen`, `isExpertSessionModalOpen`
- Inflection Call → `formSlug="inflection-call"`, `source="strategic-advisory"`
- Expert Session → `formSlug="expert-session"`, `source="strategic-advisory"`

#### 7. `src/pages/VCDueDiligenceSimulation.tsx`
- Import: `FilloutBookingModal`, `useState`
- State: `isBookingModalOpen`
- Inflection Call → `formSlug="inflection-call"`, `source="vc-dd-simulation"`

#### 8. `src/pages/CustomAnalysisReport.tsx`
- Import: `FilloutBookingModal`, `useState`
- State: `isBookingModalOpen`
- Inflection Call → `formSlug="inflection-call"`, `source="custom-analysis"`

### Phase 3: Boost-Seiten (1 Datei)

#### 9. `src/pages/BoostBoardExcellence.tsx`
- Import: `FilloutBookingModal`, `useState`
- State: `isBookingModalOpen`
- 2× Inflection Call → `formSlug="inflection-call"`, `source="solutions"`

### Phase 4: PowerUp-Seiten Inquiry Embeds (8 Dateien)

Die PowerUp-Seiten verwenden noch das alte `data-fillout-id` Pattern. Umstellung auf `FilloutEmbed` mit explizitem `source`-Parameter:

| Datei | Form-ID | Source |
|-------|---------|--------|
| `PowerUpPricingPower.tsx` | `bE8Mpbmb4mus` | `solutions` |
| `PowerUpNRREngine.tsx` | `bE8Mpbmb4mus` | `solutions` |
| `PowerUpScalingVelocity.tsx` | `bE8Mpbmb4mus` | `solutions` |
| `PowerUpGrowthMomentum.tsx` | `bE8Mpbmb4mus` | `solutions` |
| `PowerUpCACCrisis.tsx` | `bE8Mpbmb4mus` | `solutions` |
| `PowerUpPortfolioPerformance.tsx` | `wX5LjCi8eQus` | `solutions` |
| `PowerUpBoardReadiness.tsx` | `wX5LjCi8eQus` | `solutions` |
| `PowerUpCustomSprint.tsx` | `wX5LjCi8eQus` | `solutions` |

Diese verwenden bereits iframes, also nur Parameter-Logik hinzufügen.

### Phase 5: Assessment/Accelerate-Seiten (10+ Dateien)

Jede Seite mit Calendly-Links prüfen und auf `FilloutBookingModal` umstellen:
- `PortfolioAssessment.tsx` → `source="portfolio-assessment"`
- `ScalingReadinessAssessment.tsx` → `source="scaling-assessment"`
- `AIMaturityAssessment.tsx` → `source="ai-assessment"`
- `AccelerateHypergrowth.tsx` → `source="accelerate"`
- etc.

---

## Technische Details

### Import-Block für alle Dateien
```typescript
import { useState } from 'react';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
```

### Button-Pattern
```typescript
// Alt (Calendly)
onClick={() => window.open('https://calendly.com/...', '_blank')}

// Neu (FilloutBookingModal)
onClick={() => setIsBookingModalOpen(true)}
```

### Modal-Pattern
```tsx
<FilloutBookingModal
  formSlug="inflection-call"
  source="case_study"
  isOpen={isBookingModalOpen}
  onClose={() => setIsBookingModalOpen(false)}
  title={language === 'de' ? 'Inflection Call buchen' : 'Book Inflection Call'}
/>
```

---

## Source-Werte Übersicht

| Kontext | source-Wert |
|---------|-------------|
| Homepage | `website` |
| Playbooks Hub | `playbooks` |
| Playbook Landing Page | `playbook` |
| Solutions Hub | `solutions` |
| Case Study Seiten | `case_study` |
| Expert Session | `expert-session` |
| Keynote | `keynote` |
| Workshop | `workshop` |
| Strategic Advisory | `strategic-advisory` |
| VC DD Simulation | `vc-dd-simulation` |
| Custom Analysis | `custom-analysis` |
| Portfolio Assessment | `portfolio-assessment` |
| Accelerate-Seiten | `accelerate` |
| Team ML | `team-ml` |
| Team AH | `team-ah` |
| Team FM | `team-fm` |
| Partner (Maxxeed) | `partner` |

---

## Zusammenfassung der Änderungen

| Phase | Dateien | Beschreibung |
|-------|---------|--------------|
| 1 | 2 | Core CTA-Komponenten (CaseCTA, PlaybookLibrary) |
| 2 | 6 | Product-Seiten (ExpertSession, Keynote, Workshop, etc.) |
| 3 | 1 | Boost-Seiten (BoostBoardExcellence) |
| 4 | 8 | PowerUp Inquiry Embeds (Source-Parameter) |
| 5 | ~10 | Assessment/Accelerate-Seiten |
| **Total** | **~27** | Vollständige UTM + Source Integration |

---

## Ergebnis

Nach der Implementierung werden alle Booking-CTAs konsistent:
- Öffnen ein 900px Fillout Modal (statt externem Tab)
- Übergeben automatisch UTM-Parameter aus sessionStorage
- Tracken den `source`-Wert für Analytics
