

# Migration der verbleibenden Calendly-Links auf Homepage und globalen Komponenten

## Übersicht

Es wurden 4 Dateien identifiziert, die noch Calendly-Links oder fehlerhafte `#booking` Scroll-Verweise haben:

| Datei | Problem | Lösung |
|-------|---------|--------|
| `Navigation.tsx` | 2× scrollt zu `#booking` (existiert nicht) | Modal öffnen |
| `Footer.tsx` | Link zu `#booking` | Modal öffnen |
| `ResearchHub.tsx` | Calendly-Link | Modal öffnen |
| `SolutionCTA.tsx` | Calendly-Link | Modal öffnen |

---

## Änderungen pro Datei

### 1. Navigation.tsx (`source="navigation"`)

**Aktuell (Zeile 84):**
```tsx
onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
```

**Neu:**
- State `isBookingModalOpen` hinzufügen
- Button öffnet Modal statt zu scrollen
- `FilloutBookingModal` mit `source="navigation"` am Ende einfügen

**Betroffen:**
- Desktop CTA (Zeile 81-88)
- Mobile CTA (Zeile 177-188)

---

### 2. Footer.tsx (`source="footer"`)

**Aktuell (Zeile 167):**
```tsx
<a href="#booking" className="...">Book a Call</a>
```

**Neu:**
- State `isBookingModalOpen` hinzufügen
- Link wird zu Button umgewandelt, der Modal öffnet
- `FilloutBookingModal` mit `source="footer"` am Ende einfügen

---

### 3. ResearchHub.tsx (`source="research"`)

**Aktuell (Zeile 653):**
```tsx
onClick={() => window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank')}
```

**Neu:**
- State `isBookingModalOpen` hinzufügen
- Button öffnet Modal
- `FilloutBookingModal` mit `source="research"` am Ende einfügen

---

### 4. SolutionCTA.tsx (`source="solutions"`)

**Aktuell (Zeile 48):**
```tsx
onClick={() => window.open('https://calendly.com/michel-scalingx/inflection-call', '_blank')}
```

**Neu:**
- State `isBookingModalOpen` hinzufügen
- Button öffnet Modal
- `FilloutBookingModal` mit `source="solutions"` am Ende einfügen

---

## Technische Details

### Standard-Import für alle Dateien

```typescript
import { useState } from 'react';
import FilloutBookingModal from '@/components/forms/FilloutBookingModal';
```

### Standard-Pattern

```tsx
const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

// Button
<Button onClick={() => setIsBookingModalOpen(true)}>Book Call</Button>

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
| Navigation.tsx | `navigation` |
| Footer.tsx | `footer` |
| ResearchHub.tsx | `research` |
| SolutionCTA.tsx | `solutions` |

---

## Zusammenfassung

| Datei | Anzahl CTAs | Status |
|-------|-------------|--------|
| Navigation.tsx | 2 (Desktop + Mobile) | Migrieren |
| Footer.tsx | 1 | Migrieren |
| ResearchHub.tsx | 1 | Migrieren |
| SolutionCTA.tsx | 1 | Migrieren |
| **Total** | **5** | |

---

## Ergebnis nach Implementierung

Nach dieser finalen Migration werden:
1. Alle "Book Call" CTAs auf der gesamten Website das einheitliche Fillout-Modal öffnen
2. Keine externen Calendly-Links mehr vorhanden sein
3. Alle Booking-Interaktionen korrekt mit UTM-Parametern und Source-Tracking versehen sein
4. Die Navigation und der Footer konsistent mit dem Rest der Website funktionieren

