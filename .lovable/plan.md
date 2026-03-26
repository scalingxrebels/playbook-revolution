

## Plan: Solutions + Expertise auf Home/AI-Native Niveau bringen

### Kernprobleme

```text
ELEMENT                  HOME/AI-NATIVE              SOLUTIONS/EXPERTISE
────────────────────────────────────────────────────────────────────────
Hero Höhe                min-h-screen                pt-32 pb-16 (zu kurz!)
Hero H1 Grösse           text-hero-lg                text-4xl/5xl/6xl (viel kleiner!)
Hero Hintergrund         3 Parallax-Layer + Stars    Statisch, kein Parallax
Hero GrowthTrails        ✅                           ❌
Hero Scroll-Chevron      ✅                           ❌
Section Parallax         useParallaxLayers + transforms  Statische Hintergründe
Section Container        max-w-5xl                   max-w-7xl (Solutions)
Section Bg Layers        Transform + scale(1.05)     Keine Transforms
```

### Änderungen

**1. `SharedHero.tsx` — auf Home-Niveau heben**

Das ist der grösste Hebel — SharedHero wird von Solutions UND Expertise (Hub + 4 Spokes) verwendet.

- `pt-32 pb-16` → `min-h-[85vh] flex flex-col justify-center` (Above-the-fold, fast fullscreen)
- H1: `text-4xl md:text-5xl lg:text-6xl` → `text-hero-lg` (gleiche Grösse wie Home)
- `enableParallax` Default von `false` → `true` (alle Heroes bekommen Parallax)
- GrowthTrails + TwinklingStars einbauen (wie HomeHero)
- Scroll-Chevron am unteren Rand hinzufügen
- `mb-6` auf Overline → `mb-8` (wie Home)
- Subheadline: `text-xl` → `text-body-lg` (wie Home)
- Stats-Cards: `rounded-lg` → entfernen (rounded-none, wie überall)

**2. `SolutionFeatured.tsx` — Parallax + Spacing**

- Container: `max-w-7xl` → `max-w-5xl` (konsistent mit Home)
- Parallax-Layer hinzufügen (wie HomeShift)
- Section: `py-16 md:py-24` → `py-24 md:py-32` (wie Home-Sections)
- Cards: Scroll-reveal mit staggered Delays

**3. `SolutionCategoryNav.tsx` — Parallax + Spacing**

- Container: `max-w-7xl` → `max-w-5xl`
- Parallax-Layer hinzufügen
- Section: `py-16 md:py-24` → `py-24 md:py-32`
- Cards: Staggered scroll-reveal

**4. `Solutions.tsx` Section 4 (Filter Grid)**

- Container: `max-w-7xl` → `max-w-6xl` (etwas breiter als 5xl wegen Grid, aber nicht 7xl)
- Section: `py-16 md:py-24` → `py-24 md:py-32`
- Parallax-Layer + mesh opacity-40 hinzufügen

**5. `SolutionCTA.tsx` — Parallax + mesh**

- Parallax-Layer hinzufügen wie Home-Sections
- `max-w-4xl` → `max-w-5xl` (konsistent)

**6. `ExpertiseHub.tsx` — Section-Wrapper mit Parallax**

- Section-Wrapper bekommt `useParallaxLayers` mit transforms (wie HomeShift/HomeMechanisms)
- Aktuell hat es nur statische bg-mesh/grid — braucht animierte Transforms

**7. `ExpertiseSpoke.tsx` — gleich wie Hub**

- Section-Wrapper bekommt Parallax-Transforms

### Betroffene Dateien

| Datei | Änderung |
|---|---|
| `SharedHero.tsx` | min-h-[85vh], text-hero-lg, GrowthTrails, Stars, Parallax default true, Scroll-Chevron |
| `SolutionFeatured.tsx` | max-w-5xl, py-24 md:py-32, Parallax, staggered reveal |
| `SolutionCategoryNav.tsx` | max-w-5xl, py-24 md:py-32, Parallax, staggered reveal |
| `Solutions.tsx` | max-w-6xl, py-24 md:py-32, Parallax + mesh |
| `SolutionCTA.tsx` | max-w-5xl, Parallax |
| `ExpertiseHub.tsx` | Section-Wrapper Parallax-Transforms |
| `ExpertiseSpoke.tsx` | Section-Wrapper Parallax-Transforms |

7 Dateien. Rein CSS + Import-Änderungen. Keine inhaltlichen oder strukturellen Änderungen.

