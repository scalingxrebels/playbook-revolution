

# Fix: Alle "Book Call" CTAs direkt das Modal oeffnen lassen (kein Scroll zum Seitenende)

## Problem

Auf 28 Landing Pages scrollt der primaere CTA-Button (z.B. "Kostenloses Inflection Call buchen") zum `#final-cta` Abschnitt am Seitenende, wo der User dann **erneut** klicken muss, um das Booking-Modal zu oeffnen. Das ist ein unnötiger Doppelklick, der die Conversion reduziert.

## Loesung

Alle `scrollToSection('final-cta')` Aufrufe durch `window.dispatchEvent(new CustomEvent('openBookingModal'))` ersetzen. Das bestehende Event-Listener-Pattern (CustomEvent `openBookingModal`) ist bereits in jeder dieser Seiten implementiert -- es wird nur nicht genutzt.

## Betroffene Dateien (28)

**Power Up Seiten (9):**
1. `PowerUpGrowthMomentum.tsx` -- 3 Stellen (Hero, Qualification "Decision Help", ggf. weitere)
2. `PowerUpCACCrisis.tsx` -- ca. 3 Stellen
3. `PowerUpPricingPower.tsx` -- 3 Stellen
4. `PowerUpScalingVelocity.tsx` -- 3 Stellen
5. `PowerUpNRREngine.tsx` -- 3 Stellen
6. `PowerUpBoardReadiness.tsx` -- 3 Stellen
7. `PowerUpPortfolioPerformance.tsx` -- 3 Stellen
8. `PowerUpAIQuickWins.tsx` -- 3 Stellen
9. `PowerUpCustomSprint.tsx` -- 3 Stellen

**Boost Seiten (9):**
10. `BoostGrowthEngine.tsx` -- 3 Stellen
11. `BoostEfficientHypergrowth.tsx` -- 3 Stellen
12. `BoostScalingOS.tsx` -- 3 Stellen
13. `BoostNRRMachine.tsx` -- 3 Stellen
14. `BoostPricingDominance.tsx` -- 3 Stellen
15. `BoostBoardExcellence.tsx` -- 1 Stelle
16. `BoostPortfolioValue.tsx` -- 1 Stelle
17. `BoostAIMaturity.tsx` -- 1 Stelle
18. `BoostCustomProgram.tsx` -- 1 Stelle

**Accelerate Seiten (5):**
19. `AccelerateHypergrowth.tsx` -- ca. 3 Stellen
20. `AccelerateSustainableGrowth.tsx` -- 1 Stelle
21. `AccelerateExitReadiness.tsx` -- 1 Stelle
22. `AcceleratePortfolioTransformation.tsx` -- 1 Stelle
23. `AccelerateAINativeScaling.tsx` -- 1 Stelle

**Decision Support / Assessments (4):**
24. `GTMEffectivenessReview.tsx` -- 1 Stelle
25. `PricingPackagingReview.tsx` -- 1 Stelle
26. `ScalingReadinessAssessment.tsx` -- 1 Stelle
27. `VCDueDiligenceSimulation.tsx` -- 1 Stelle

**Andere (1):**
28. `Maxxeed.tsx` -- 2 Stellen

**Sonderfaelle (kein scrollToSection('final-cta'), aber aehnliches Pattern):**
- `StrategicAdvisory.tsx` -- 1 Stelle

## Aenderung

Identisch in jeder Datei -- reiner String-Replace:

```text
Vorher:  onClick={() => scrollToSection('final-cta')}
Nachher: onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
```

Die `scrollToSection`-Funktion und der `#final-cta` Abschnitt bleiben bestehen (der Abschnitt enthaelt FAQs und Trust Badges, die weiterhin per Scroll erreichbar sein sollen). Nur die **Booking-Buttons** oeffnen jetzt direkt das Modal.

## Technische Details

- Jede dieser Seiten hat bereits den Event-Listener registriert:
  ```tsx
  const handleOpenModal = () => setIsBookingModalOpen(true);
  window.addEventListener('openBookingModal', handleOpenModal);
  ```
- Der FinalCTA-Button am Seitenende nutzt bereits `window.dispatchEvent(new CustomEvent('openBookingModal'))` -- die anderen Buttons auf der gleichen Seite tun es nur noch nicht
- Keine neuen Imports, Props oder Komponenten noetig
- Ca. 80 einzelne Ersetzungen ueber 28 Dateien

