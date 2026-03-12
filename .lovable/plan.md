

## Plan: Sektionen umstellen und neue Struktur

Alle Aenderungen in `src/pages/RevenueArchitectureSystem.tsx`.

### Neue Reihenfolge nach CredibilitySection

Die bisherigen Sektionen `FoundingFrameSection` (S10) und `PricingSection` (S11 mit Pricing, Process, Risk Reversal, FAQ, Lead-CTA) werden in neue Sektionen aufgeteilt:

**1. "Dein Platz in Cohort 1"** (neue Sektionsueberschrift fuer FoundingFrameSection)
- Bisheriger FoundingFrame-Inhalt bleibt, aber Titel aendert sich von "Founding Cohort — was das bedeutet" zu **"Dein Platz in Cohort 1"** / "Your Seat in Cohort 1"

**2. "Wie die Bewerbung funktioniert"** (Process Steps)
- Wird aus PricingSection herausgeloest und direkt nach FoundingFrame als eigene Sektion platziert

**3. Neue Card: "Start Ende April"**
- Prominente Card zwischen Process und Lead-CTA:
- DE: "Start Ende April — erfahre als Erste/r, wenn die Cohort 1 öffnet"
- EN: "Starting end of April — be the first to know when Cohort 1 opens"

**4. "Bereit, mehr zu erfahren?"** (Lead-Capture CTA)
- Email-Formular + PDF-Download, wie bisher

**5. FAQ** (Haeufige Fragen)
- Wie bisher, eigene Sektion

**6. "Angebot für Cohort 1"** (Pricing)
- Bisherige Pricing-Tiers, aber mit neuem Titel "Angebot für Cohort 1" / "Offer for Cohort 1" statt "Dein Platz in Cohort 1" (der Titel wandert zur Founding-Sektion)
- Risk Reversal bleibt unter Pricing

### Technische Umsetzung

Die monolithische `PricingSection` wird in mehrere Komponenten aufgeteilt:
- `FoundingFrameSection` — Titel aendern
- `ApplicationProcessSection` — Process Steps (aus PricingSection extrahiert)
- `CohortStartCard` — neue Card-Komponente
- `LeadCaptureSection` — Lead-CTA (aus PricingSection extrahiert, behaelt State-Logik)
- `FAQSection` — FAQ (aus PricingSection extrahiert)
- `PricingSection` — nur noch Tiers + Risk Reversal, neuer Titel

Main-Komponente neue Reihenfolge:
```
<HeroSection />
<VSLSection />
<DeliverablesSection />
<ProgramSection />
<PreCohortProofSection />
<CredibilitySection />
<FoundingFrameSection />        // Titel: "Dein Platz in Cohort 1"
<ApplicationProcessSection />   // "Wie die Bewerbung funktioniert"
<CohortStartCard />             // "Start Ende April..."
<LeadCaptureSection />          // "Bereit, mehr zu erfahren?"
<FAQSection />                  // "Häufige Fragen"
<PricingSection />              // "Angebot für Cohort 1" + Risk Reversal
```

### Umfang
- 1 Datei editiert: `src/pages/RevenueArchitectureSystem.tsx`

