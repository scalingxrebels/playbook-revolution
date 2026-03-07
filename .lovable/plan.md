
Ziel: Die vier verbleibenden Decision-Support-Seiten auf denselben Standard wie `GTMEffectivenessReview.tsx` und `PricingPackagingReview.tsx` bringen.

Befund nach Code-Review:
- Betroffen sind:
  - `src/pages/AIMaturityAssessment.tsx`
  - `src/pages/InvestorReadinessPitchDeckCheck.tsx`
  - `src/pages/PortfolioAssessment.tsx`
  - `src/pages/CustomAnalysisReport.tsx`
- Alle vier sind noch monolithisch gebaut, ohne modulare Section-Komponenten.
- Alle vier weichen in denselben Punkten ab:
  - kein `<main>`
  - kein `useParallaxLayers`
  - kein `useScrollAnimation`
  - kein UI-`Breadcrumb`, sondern nur Text
  - einfache Badge statt `Badge variant="gradient"`
  - Hero/CTA-Styling nicht auf Premium-Standard
  - lokale `setIsBookingModalOpen(true)`-Trigger statt standardisiertem Pattern
  - `FilloutBookingModal` steht vor dem Footer
  - Abschnitts-Spacings/Typografie sind einfacher als bei GTM/Pricing

Umsetzungsplan:
1. Jede der 4 Seiten auf die gleiche Grundarchitektur wie GTM/Pricing umbauen:
   - `HeroSection`
   - `ProblemSection`
   - `SolutionSection`
   - `OutcomeSection`
   - `ProcessSection`
   - `QualificationSection`
   - `FinalCTASection`
   - schlanke Page-Komponente mit `Navigation`, `<main>`, Modal-State, `Footer`

2. Hero jeder Seite an das GTM/Pricing-Muster angleichen:
   - Deep-Space-Hintergrund mit `useParallaxLayers`
   - Mesh + Grid + `TwinklingStars`
   - echtes `Breadcrumb`-UI
   - `Badge variant="gradient"`
   - Premium Primary CTA (`bg-gradient-accent`, `shadow-accent-glow`, `size="xl"`)
   - Secondary CTA zum Scrollen in die Solution-Section
   - gleiche Stats-/Trust-Badge-Struktur

3. Inhaltssektionen visuell standardisieren:
   - `useScrollAnimation` für jede Hauptsektion
   - konsistente Abstände wie GTM/Pricing
   - gleiche Header-Hierarchie, Card-Styling und Alternating Backgrounds
   - gleiche Final-CTA-Struktur inkl. FAQ und Alternative CTA

4. Booking-/Modal-Pattern vereinheitlichen:
   - Page-Level `isBookingModalOpen`
   - Hero CTA direkt wie in GTM/Pricing auf Öffnen des Modals
   - Final CTA bekommt `onOpenBooking` als Prop
   - `FilloutBookingModal` hinter den Content und konsistent platzieren
   - bestehende `source`-Werte pro Seite beibehalten:
     - `ai-assessment`
     - `investor-readiness`
     - `portfolio-assessment`
     - `custom-analysis`

5. Inhaltlich nur Struktur harmonisieren, nicht die Offer-Logik ändern:
   - AI Assessment behält 8-Dimensionen-Framework
   - Pitch Deck Review behält 10-Dimensionen-Framework
   - Portfolio Assessment behält 6-Dimensionen-Framework
   - Custom Analysis & Report behält 7 Analyse-Typen
   - Bei `CustomAnalysisReport` bleibt das Accordion sinnvoll, wird aber in das gleiche SolutionSection-Design eingebettet statt als visuelle Sonderlösung

Technische Leitlinie:
- GTM/Pricing dienen als Referenz für Architektur, Hero, CTA, Section-Styling und Component-Schnittstellen.
- Scaling Readiness ist zusätzlich nützlich als Referenz für die jüngere Standardisierung mit klarer modularer Struktur.
- Es sind keine Backend-Änderungen nötig; das ist ein reiner Frontend-/Struktur-Refactor.

Erwartetes Ergebnis:
- Alle Decision Support Solutions wirken wie eine einzige konsistente Familie.
- Gleiche UX für Hero, Scroll, CTA, FAQ und Booking.
- Deutlich bessere Wartbarkeit, weil die vier monolithischen Seiten auf denselben modularen Standard gebracht werden.
