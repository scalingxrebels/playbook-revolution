
Ich gehe mit hoher Wahrscheinlichkeit von `/solutions/scaling-readiness-assessment` aus, weil genau diese Route in deiner Session geöffnet wurde und der Hero dort mit „Expert Scaling Assessment” betitelt ist.

## Befund

Die Seite ist aktuell nicht auf dem gleichen Standard wie die anderen Decision-Support-/Solutions-Seiten wie `GTMEffectivenessReview` oder `PricingPackagingReview`.

## Hauptabweichungen

1. **Andere Seitenarchitektur**
   - `ScalingReadinessAssessment.tsx` ist als großer Monolith gebaut.
   - Die konsistenten Vergleichsseiten sind in klar getrennte Section-Komponenten gegliedert:
     `HeroSection`, `ProblemSection`, `SolutionSection`, `OutcomeSection`, `ProcessSection`, `QualificationSection`, `FinalCTASection`.

2. **Fehlender Standard-Wrapper**
   - Es gibt **kein `<main>`** um die Sections.
   - Die Standardseiten nutzen:
     ```text
     <div className="min-h-screen bg-background text-foreground">
       <Navigation />
       <main>...</main>
       <FilloutBookingModal ... />
       <Footer />
     </div>
     ```

3. **Hero visuell nicht konsistent**
   - Aktuell: einfacher Hero mit `TwinklingStars` + flachem Gradient.
   - Standard: Deep-space Hero mit `useParallaxLayers`, Mesh/Grid-Overlay, Breadcrumb-Komponente, Badge-Komponente, animierten Stats, Premium-CTA.

4. **Sections folgen nicht dem standardisierten Design-System**
   - Aktuell: einfache `py-20`-Blöcke mit Basis-Typografie.
   - Standard: animierte Sections mit
     - `useScrollAnimation`
     - `min-h-[50vh] py-24 lg:py-32`
     - Gradient-Hintergründen
     - `font-display text-display-md`
     - konsistenten Header-Spacings

5. **CTA-/Modal-Pattern inkonsistent**
   - Aktuell: direkte lokale `setIsBookingModalOpen(true)`-Aufrufe im Hero und in der Final CTA.
   - Standard: Hero-CTA feuert `window.dispatchEvent(new CustomEvent('openBookingModal'))`, Final CTA bekommt `onOpenBooking` vom Parent.

6. **Modal-Reihenfolge inkonsistent**
   - Aktuell steht `FilloutBookingModal` **vor** dem Footer.
   - Standard in den vereinheitlichten Solutions-Seiten: Modal **nach** dem Footer.

7. **Button-Styling nicht auf Premium-Standard**
   - Aktuell: mehrere generische Buttons mit `className="group"` oder einfachem Outline.
   - Standard: primäre CTA mit
     ```text
     bg-gradient-accent
     shadow-accent-glow
     text-cta
     uppercase tracking-wide
     ```

## Umsetzungsplan

### 1. Seite auf Standardstruktur umbauen
`src/pages/ScalingReadinessAssessment.tsx` auf dieselbe Seitenarchitektur wie die anderen Decision-Support-Seiten refaktorieren:
- `HeroSection`
- `ProblemSection`
- `SolutionSection`
- `OutcomeSection`
- `ProcessSection`
- `QualificationSection`
- `FinalCTASection`
- schlanke Main-Page-Komponente mit `<main>`

### 2. Hero auf Decision-Support-Standard bringen
Hero an `GTMEffectivenessReview.tsx` ausrichten:
- `useParallaxLayers` ergänzen
- Deep-space Background + Mesh + Grid + Stars
- Breadcrumb mit UI-Komponente statt einfachem `nav`
- Badge auf konsistente Variante umstellen
- Headline-/Subheadline-/Stats-Typografie angleichen
- Primäre CTA auf Premium-Gradient standardisieren

### 3. Alle Inhaltssektionen visuell harmonisieren
Die bestehenden Inhalte beibehalten, aber in das standardisierte Section-Layout überführen:
- `useScrollAnimation`
- `min-h-[50vh] py-24 lg:py-32`
- einheitliche Header-Struktur
- konsistente Karten, Spacings, Hintergrundwechsel und Animationen

### 4. CTA- und Booking-Logik vereinheitlichen
- Hero-CTA auf `openBookingModal`-Event umstellen
- Final CTA als Section-Komponente mit `onOpenBooking`-Prop
- lokale Direktaufrufe im Content entfernen, wo das Pattern abweicht

### 5. Footer-/Modal-Reihenfolge angleichen
Seitenende auf den konsistenten Aufbau umstellen:
```text
<main>...</main>
<Footer />
<FilloutBookingModal ... />
```

## Technische Details

**Datei mit Hauptbedarf:**
- `src/pages/ScalingReadinessAssessment.tsx`

**Referenz-Dateien für den Zielstandard:**
- `src/pages/GTMEffectivenessReview.tsx`
- `src/pages/PricingPackagingReview.tsx`

**Wichtig bei der Umsetzung:**
- Inhalte, Copy und Angebotslogik bleiben erhalten
- geändert wird vor allem:
  - Seitenstruktur
  - Hero-System
  - Section-Layout
  - CTA-/Modal-Pattern
  - Typography/spacing/button styling

## Erwartetes Ergebnis

Nach der Umsetzung wirkt das Expert Scaling Assessment:
- wie Teil derselben Solutions-Familie,
- visuell und strukturell konsistent mit den anderen Decision-Support-Seiten,
- sauberer wartbar,
- und im CTA-/Modal-Verhalten identisch zu den bereits standardisierten Pages.
