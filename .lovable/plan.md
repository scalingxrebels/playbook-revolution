
# Plan: Playbook Landing Pages an das "Deep Space" Design-System anpassen

## Ziel
Alle Playbook Section-Komponenten werden an das visuelle Design der Solution Landing Pages (wie `PowerUpCACCrisis.tsx`) angepasst, um eine konsistente User Experience zu gewaehrleisten.

---

## Detaillierte Aenderungen pro Komponente

### 1. PlaybookHeroSection.tsx (Groesste Aenderung)

**Aktuell:**
- Einfacher Gradient-Hintergrund (`${data.gradient}`)
- Statisches Grid-Pattern
- `Badge variant="outline"`
- Keine Animationen

**Neu:**
- Deep Space Background mit 3 Parallax-Layern (`useParallaxLayers`)
- TwinklingStars Animation
- Mesh Gradient Overlay
- `Badge variant="gradient"` mit Icon
- Entry-Animationen (`animate-blur-in`, `animate-slide-up`, `animate-fade-in`)
- Animierter Scroll-Indikator (Bounce-Chevron)
- Hero Stats Grid (wie Solution Pages)
- Breadcrumb-Komponente (statt einfachem Text)

**Technische Aenderungen:**
```text
+import { useParallaxLayers } from '@/hooks/useParallax';
+import TwinklingStars from '@/components/TwinklingStars';
+import { Breadcrumb, BreadcrumbList, ... } from '@/components/ui/breadcrumb';
+import { ChevronDown } from 'lucide-react';

- className="relative min-h-[70vh] flex items-center py-24"
+ className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise pt-20"
```

---

### 2. PlaybookProblemSection.tsx

**Aktuell:**
- Weisser Hintergrund
- Keine Scroll-Animation
- Pain Points als Liste

**Neu:**
- `useScrollAnimation` fuer Reveal-Effekt
- Gradient-Hintergrund (`from-background to-secondary/30`)
- Staggered Entry-Animationen fuer Symptom-Liste
- Before/After Visual Cards (wie Solution Pages)

---

### 3. PlaybookFrameworkSection.tsx

**Aktuell:**
- Standard Accordion ohne Animation
- `bg-muted/30` Hintergrund

**Neu:**
- Scroll-Animation-Wrapper
- Phase-Cards mit farbigen Borders (violet, blue, emerald)
- Collapsible mit animiertem Chevron

---

### 4. PlaybookRoadmapSection.tsx

**Aktuell:**
- Einfache Timeline-Darstellung
- Keine visuellen Effekte

**Neu:**
- 3-Spalten Phase-Cards mit Gradient-Headers
- Deliverable-Badges
- Staggered Animations

---

### 5. PlaybookCaseStudiesSection.tsx

**Aktuell:**
- Standard Card Layout
- Keine Animation

**Neu:**
- Scroll-Animation
- Logo/Avatar Placeholder
- Metric Changes mit Trend-Pfeilen
- Testimonial Quotes

---

### 6. PlaybookSolutionsSection.tsx

**Aktuell:**
- Grid mit Cards
- Statisch

**Neu:**
- Scroll-Animation
- Hover-Glow-Effekte auf Cards
- Gradient-Badges fuer Solution-Types
- Arrow-Animation on Hover

---

### 7. PlaybookPersonasSection.tsx

**Aktuell:**
- Standard Grid
- Check/X Icons

**Neu:**
- Zwei-Spalten "Good Fit / Not For" Layout (wie Solution Pages)
- Accent/Destructive Color Coding
- Animated Checkmarks

---

### 8. PlaybookFinalCTASection.tsx

**Aktuell:**
- Einfacher CTA-Block
- Gradient-Hintergrund

**Neu:**
- Deep Space Background mit TwinklingStars
- Parallax-Effekte
- `shadow-accent-glow` auf Primary Button
- Trust Badges Row
- Stats Counter (wie Solution Pages Footer-Stats)

---

### 9. PlaybookSubPlaybooksSection.tsx

**Aktuell:**
- Einfache Card-Liste
- Keine Animation

**Neu:**
- Scroll-Animation
- Hover-Scale-Effekt
- Arrow-Indikator

---

## Implementierungs-Reihenfolge

| Batch | Komponenten | Zeilen (geschaetzt) |
|-------|-------------|---------------------|
| 1 | `PlaybookHeroSection` (komplett neu) | ~150 |
| 2 | `PlaybookProblemSection`, `PlaybookFrameworkSection` | ~80 + ~90 |
| 3 | `PlaybookRoadmapSection`, `PlaybookCaseStudiesSection` | ~70 + ~90 |
| 4 | `PlaybookSolutionsSection`, `PlaybookPersonasSection` | ~80 + ~70 |
| 5 | `PlaybookFinalCTASection`, `PlaybookSubPlaybooksSection` | ~100 + ~60 |

---

## Zusammenfassung der Design-Tokens

| Element | Solution Pages | Playbook Pages (Neu) |
|---------|----------------|----------------------|
| Background | Deep Space + Parallax | Deep Space + Parallax |
| Stars | TwinklingStars | TwinklingStars |
| Badge | `variant="gradient"` | `variant="gradient"` |
| Animations | `animate-blur-in`, `animate-slide-up` | `animate-blur-in`, `animate-slide-up` |
| Scroll | `useScrollAnimation` | `useScrollAnimation` |
| Parallax | `useParallaxLayers` | `useParallaxLayers` |
| Buttons | `shadow-accent-glow` | `shadow-accent-glow` |

---

## Naechster Schritt

Starte mit Batch 1: **PlaybookHeroSection komplett ueberarbeiten** mit Deep Space Background, TwinklingStars, Parallax, Animationen und korrekter Breadcrumb-Komponente.
