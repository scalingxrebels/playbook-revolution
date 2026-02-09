

# Migration: Verbleibende Booking-Anchors auf Fillout-Modal umstellen

## Übersicht der betroffenen Komponenten

Ich habe **10 Komponenten** mit insgesamt **11 CTAs** identifiziert, die noch zu `#booking` scrollen statt das Modal zu öffnen:

| Datei | Aktuelle Aktion | CTA-Text |
|-------|-----------------|----------|
| `AIBoardGovernancePillars.tsx` | `href="#booking"` | "Board Assessment starten" |
| `InterventionModels.tsx` | `href="#booking"` | "Passende Intervention finden" |
| `GrowthEngines.tsx` | `href="#booking"` | "Engine-Analyse starten" |
| `ThetaIndexAssessment.tsx` | `href="#booking"` | "Diagnose-Gespräch" |
| `ThetaSelfTest.tsx` | `href="#booking"` | "Diagnose-Gespräch buchen" |
| `OfferingsSection.tsx` | `getElementById('booking')` | Dynamic CTA |
| `BottleneckWizard.tsx` | `getElementById('booking')` | "Kostenloses Diagnose-Gespräch" |
| `HypergrowthSystem.tsx` | `getElementById('booking')` | "Jetzt starten" |
| `ScalingXCaseStudies.tsx` | `getElementById('booking')` | "Diese Muster anwenden" |
| `ROICalculatorOptimized.tsx` | `getElementById('booking-form')` | "Start Transformation" |
| `NotFound.tsx` | `Link to="/#booking-form"` | "Book a Call" |
| `CaseStudy.tsx` | `navigate('/#booking')` | Noch zu prüfen |

---

## Änderungen pro Datei

### 1. AIBoardGovernancePillars.tsx (`source="board-governance"`)

**Aktuell (Zeile 253-259):**
```tsx
<a href="#booking" className="...">
  <ArrowRight className="w-5 h-5" />
  {language === 'de' ? 'Board Assessment starten' : 'Start Board Assessment'}
</a>
```

**Neu:**
- State hinzufügen
- `<a>` zu `<button>` umwandeln, Modal öffnen
- FilloutBookingModal am Ende einfügen

---

### 2. InterventionModels.tsx (`source="intervention-models"`)

**Aktuell (Zeile 267-273):**
```tsx
<a href="#booking" className="...">
  <Zap className="w-5 h-5" />
  {language === 'de' ? 'Passende Intervention finden' : 'Find Your Intervention'}
</a>
```

**Neu:** State + Button + Modal

---

### 3. GrowthEngines.tsx (`source="growth-engines"`)

**Aktuell (Zeile 236-242):**
```tsx
<a href="#booking" className="...">
  <Zap className="w-5 h-5" />
  {language === 'de' ? 'Engine-Analyse starten' : 'Start Engine Analysis'}
</a>
```

**Neu:** State + Button + Modal

---

### 4. ThetaIndexAssessment.tsx (`source="theta-assessment"`)

**Aktuell (Zeile 361-368):**
```tsx
<a href="#booking" className="...">
  <Sparkles className="w-4 h-4" />
  Diagnose-Gespräch
  <ArrowRight className="w-4 h-4" />
</a>
```

**Neu:** State + Button + Modal

---

### 5. ThetaSelfTest.tsx (`source="theta-self-test"`)

**Aktuell (Zeile 468-475):**
```tsx
<a href="#booking" className="...">
  <Sparkles className="w-5 h-5" />
  {language === 'de' ? 'Diagnose-Gespräch buchen' : 'Book Diagnostic Call'}
  <ArrowRight className="w-5 h-5" />
</a>
```

**Neu:** State + Button + Modal

---

### 6. OfferingsSection.tsx (`source="offerings"`)

**Aktuell (Zeile 207):**
```tsx
onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
```

**Neu:** State + onClick öffnet Modal + Modal am Ende

---

### 7. BottleneckWizard.tsx (`source="bottleneck-wizard"`)

**Aktuell (Zeile 839):**
```tsx
onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
```

**Neu:** State + onClick öffnet Modal + Modal am Ende

---

### 8. HypergrowthSystem.tsx (`source="hypergrowth-system"`)

**Aktuell (Zeile 168):**
```tsx
onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
```

**Neu:** State + onClick öffnet Modal + Modal am Ende

---

### 9. ScalingXCaseStudies.tsx (`source="case-studies"`)

**Aktuell (Zeile 415-417):**
```tsx
const scrollToBooking = () => {
  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  setSelectedStudy(null);
};
```

**Neu:** scrollToBooking durch Modal-Öffnung ersetzen

---

### 10. ROICalculatorOptimized.tsx (`source="roi-calculator"`)

**Aktuell (Zeile 221-223):**
```tsx
const scrollToBooking = () => {
  document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
};
```

**Neu:** scrollToBooking durch Modal-Öffnung ersetzen

---

### 11. NotFound.tsx (`source="404"`)

**Aktuell (Zeile 90-93):**
```tsx
<Link to="/#booking-form">
  <Calendar className="w-5 h-5 mr-2" />
  Book a Call
</Link>
```

**Neu:** State + Button statt Link + Modal am Ende

---

### 12. CaseStudy.tsx (`source="case-study"`)

**Aktuell (Zeile 45-50):**
```tsx
const scrollToBooking = () => {
  navigate('/#booking');
  setTimeout(() => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
};
```

**Neu:** scrollToBooking durch Modal-Öffnung ersetzen

---

## Standard-Pattern

```tsx
import { useState } from 'react';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';

// State
const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

// Button (statt <a href="#booking">)
<button 
  onClick={() => setIsBookingModalOpen(true)}
  className="..." // bestehende Klassen beibehalten
>
  {/* Icon + Text */}
</button>

// Modal am Ende der Komponente
<FilloutBookingModal
  formSlug="inflection-call"
  source="[spezifische-source]"
  isOpen={isBookingModalOpen}
  onClose={() => setIsBookingModalOpen(false)}
/>
```

---

## Source-Werte Mapping

| Datei | source-Wert |
|-------|-------------|
| AIBoardGovernancePillars.tsx | `board-governance` |
| InterventionModels.tsx | `intervention-models` |
| GrowthEngines.tsx | `growth-engines` |
| ThetaIndexAssessment.tsx | `theta-assessment` |
| ThetaSelfTest.tsx | `theta-self-test` |
| OfferingsSection.tsx | `offerings` |
| BottleneckWizard.tsx | `bottleneck-wizard` |
| HypergrowthSystem.tsx | `hypergrowth-system` |
| ScalingXCaseStudies.tsx | `case-studies` |
| ROICalculatorOptimized.tsx | `roi-calculator` |
| NotFound.tsx | `404` |
| CaseStudy.tsx | `case-study` |

---

## Zusammenfassung

| Kategorie | Anzahl |
|-----------|--------|
| Anchor-Links (`href="#booking"`) | 5 |
| getElementById-Aufrufe | 5 |
| Navigation mit Anchor | 2 |
| **Gesamt** | **12 CTAs in 12 Dateien** |

Nach dieser Migration werden alle "Book Call" CTAs auf der gesamten Website konsistent das Fillout-Modal öffnen.

