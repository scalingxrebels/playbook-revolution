

# Konsistenz-Check: GrowthCurveOptimized vs. andere Homepage-Sektionen

## Gefundene Abweichungen

### 1. Fehlende Parallax-Background-Layer
**Alle anderen Sektionen** (Problem, Solution, Proof, HowItWorks, Formula) haben:
```
- useParallax() mit parallax.ref auf einem Hintergrund-div
- Hintergrund: bg-gradient-to-b, bg-mesh, oder bg-grid-pattern
- transform: translateY(parallax.offset) scale(1.1)
```
**GrowthCurveOptimized** hat: Kein Parallax, nur flaches `bg-background`. Kein Hintergrund-Gradient, keine Mesh/Grid-Textur.

### 2. Section-Klassen abweichend
**Alle anderen Sektionen:**
```
className="relative min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700
  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}"
```
**GrowthCurveOptimized:**
```
className="relative py-20 md:py-28 bg-background"
```
Unterschiede: Kein `min-h-[50vh]`, anderes Padding (`py-20 md:py-28` statt `py-24 lg:py-32`), kein `overflow-hidden`, keine `transition-all` auf der Section selbst (stattdessen auf innere Elemente).

### 3. Header-Pattern abweichend
**Alle anderen Sektionen:**
```
<span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
  Badge Text
</span>
<h2 className="font-display text-display-md text-foreground mb-6">
```
**GrowthCurveOptimized:**
```
<div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
  <TrendingUp /> Badge Text
</div>
<h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
```
Unterschiede: Pill-Badge mit Icon statt einfacher `<span>`. Headline nutzt `text-3xl md:text-4xl font-bold` statt `text-display-md`. Spacing `mb-3` statt `mb-6`.

### 4. Fehlende animate-slide-up auf Header
Andere Sektionen: `<div className="text-center mb-16 animate-slide-up">`
GrowthCurve: `<div className="text-center mb-12 transition-all ...">`  (eigene Transition statt `animate-slide-up`, `mb-12` statt `mb-16`)

### 5. HeroWithChart -- konsistent
`HeroWithChart.tsx` ist konsistent mit `HeroOptimized.tsx` (gleiche Deep Space Layers, Parallax, TwinklingStars, `dark-section`).

---

## Umsetzungsplan

**1 Datei editieren:** `src/components/homepage/GrowthCurveOptimized.tsx`

### Aenderungen:
1. **Parallax hinzufuegen:** `useParallax({ speed: 0.2 })` importieren und Hintergrund-div mit `bg-mesh` + transform
2. **Section-Klassen angleichen:** `min-h-[50vh] py-24 lg:py-32 overflow-hidden transition-all duration-700 ${isVisible ? ... translate-y-10}` statt der aktuellen Klassen
3. **Header-Badge angleichen:** Einfacher `<span>` mit `text-sm font-semibold uppercase tracking-widest text-primary mb-4 block` statt Pill-Badge (das Icon kann bleiben, aber als inline-Element)
4. **Headline-Klassen angleichen:** `text-display-md` statt `text-3xl md:text-4xl font-bold`, `mb-6` statt `mb-3`
5. **Header-Wrapper angleichen:** `mb-16 animate-slide-up` statt `mb-12 transition-all`

