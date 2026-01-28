
# Plan: Workshop Landing Page Harmonisierung + Participants-Anpassung

## Problem-Analyse

Die Workshop Landing Page verwendet ein veraltetes Design-Pattern, das sich von den anderen Landing Pages (PowerUp, CustomAnalysisReport, Keynote) unterscheidet:

| Aspekt | Workshop (aktuell) | Standard (andere Pages) |
|--------|-------------------|-------------------------|
| Layout | Linksbündig | Zentriert (`text-center`) |
| Background | Einfaches TwinklingStars | Deep Space Gradient + Mesh + Parallax |
| Breadcrumb | Manuell (`nav` + `ChevronRight`) | `Breadcrumb`-Komponente |
| Badge | Einfaches `div` mit `bg-primary/10` | `Badge variant="gradient"` |
| Typography | `text-4xl md:text-6xl lg:text-7xl` | `text-hero-lg`, `text-body-lg` |
| Animations | Keine | `animate-blur-in`, `animate-slide-up`, `animate-fade-in` |
| Stats Cards | `bg-card/50 backdrop-blur border border-border rounded-xl` | `bg-card/50 backdrop-blur-sm border-2 border-border` |
| Scroll Indicator | Keine | `ChevronDown` mit `animate-bounce` |

## Änderungen

### 1. Hero Section - Layout & Background (Zeilen 334-418)

**Aktuell:**
```tsx
<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
  <TwinklingStars />
  <div className="container mx-auto px-4 relative z-10">
```

**Neu (wie PowerUpCACCrisis):**
```tsx
<section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise pt-20">
  {/* Deep Space Background */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]" style={{ transform: `translateY(${offsets[0]}px)` }} />
  {/* Mesh Gradient Overlay */}
  <div className="absolute inset-0 bg-mesh opacity-60" style={{ transform: `translateY(${offsets[0]}px)` }} />
  {/* Twinkling Stars */}
  <div className="absolute inset-0" style={{ transform: `translateY(${offsets[1]}px)` }}>
    <TwinklingStars />
  </div>
  {/* Grid Pattern */}
  <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-20" style={{ transform: `translateY(${offsets[2]}px)` }} />
  
  <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
```

### 2. Breadcrumb - Komponente verwenden

**Aktuell (Zeilen 343-348):**
```tsx
<nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
  <a href="/solutions" className="hover:text-foreground transition-colors">Solutions</a>
  <ChevronRight className="w-4 h-4" />
  <span className="text-foreground">Workshop</span>
</nav>
```

**Neu:**
```tsx
<Breadcrumb className="justify-center mb-6 animate-fade-in">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/solutions" className="text-muted-foreground hover:text-foreground">Solutions</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <span className="text-foreground font-medium">Workshop</span>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### 3. Badge - Gradient Variant verwenden

**Aktuell (Zeilen 350-354):**
```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
  <GraduationCap className="w-4 h-4 text-primary" />
  <span className="text-sm font-medium">Training & Enablement · 1-2 Days · €9.6K-€12.9K</span>
</div>
```

**Neu:**
```tsx
<Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
  <GraduationCap className="w-4 h-4 mr-2" />
  Training & Enablement · 1-2 {isEnglish ? 'Days' : 'Tage'} · €9.6K-€12.9K
</Badge>
```

### 4. Headline - Typography & Animation

**Aktuell (Zeilen 356-359):**
```tsx
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl">
  {isEnglish ? 'Tactical Workshop—In 1-2 Days' : 'Tactical Workshop—In 1-2 Tagen'}
</h1>
```

**Neu:**
```tsx
<h1 className="font-display text-hero-lg mb-6 animate-blur-in">
  <span className="block text-foreground">{isEnglish ? 'Tactical Workshop' : 'Taktischer Workshop'}</span>
  <span className="block text-gradient animate-gradient bg-gradient-primary">
    {isEnglish ? 'In 1-2 Days' : 'In 1-2 Tagen'}
  </span>
</h1>
```

### 5. Subheadline - Typography & Animation

**Aktuell (Zeilen 361-366):**
```tsx
<p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl">
```

**Neu:**
```tsx
<p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
```

### 6. Hero Stats - Animation & Styling + PARTICIPANTS ÄNDERN

**Aktuell (Zeilen 368-385):**
- Stats Grid ohne Animation
- Participants: "10-30" (implizit in Trust Badge)

**Neu:**
- Animation hinzufügen (`animate-slide-up`, `animationDelay: '0.3s'`)
- Stats Cards Styling anpassen (`border-2` statt `border`)
- **Wichtig: Keine Participants in Hero Stats (nur Team Alignment, Playbook Pages, Execution Ready)**

### 7. Trust Badges - PARTICIPANTS ÄNDERN

**Aktuell (Zeilen 408-411):**
```tsx
<span>{isEnglish ? '10-30 Participants (Scalable)' : '10-30 Teilnehmer (Skalierbar)'}</span>
```

**Neu:**
```tsx
<span>{isEnglish ? '3+ Participants' : '3+ Teilnehmer'}</span>
```

### 8. Scroll Indicator hinzufügen

**Am Ende der Hero Section (vor `</section>`):**
```tsx
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
  <ChevronDown className="w-6 h-6 text-muted-foreground" />
</div>
```

### 9. Imports hinzufügen

```tsx
import { useParallaxLayers } from '@/hooks/useParallax';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ChevronDown } from 'lucide-react';
```

### 10. useParallaxLayers Hook aufrufen

```tsx
const Workshop = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });
```

### 11. Weitere Stellen mit Participants-Angabe

**goodFit Array (Zeilen 289-294):**
```tsx
titleEn: 'You have 10-30 participants'  →  'You have 3+ participants'
titleDe: 'Du hast 10-30 Teilnehmer'     →  'Du hast 3+ Teilnehmer'
```

**notFit Array (Zeilen 321-324):**
```tsx
titleEn: 'You have <10 participants'    →  'You have <3 participants'
titleDe: 'Du hast <10 Teilnehmer'       →  'Du hast <3 Teilnehmer'
```

**notFit Array (Zeilen 326-329):**
```tsx
titleEn: 'You have >30 participants'    →  ENTFERNEN (keine Obergrenze mehr)
```

---

## Zusammenfassung der Änderungen

| Datei | Änderung |
|-------|----------|
| `src/pages/Workshop.tsx` | Hero Section komplett überarbeiten (Layout zentrieren, Parallax hinzufügen, Breadcrumb/Badge Komponenten, Animations, Scroll Indicator) + Participants von "10-30" auf "3+" ändern an allen Stellen |

## Betroffene Zeilen

- **Imports**: Zeilen 1-34 (erweitern)
- **Component Anfang**: Nach Zeile 36 (useParallaxLayers hinzufügen)
- **Hero Section**: Zeilen 334-418 (komplett überarbeiten)
- **goodFit Array**: Zeilen 289-294 (Participants ändern)
- **notFit Array**: Zeilen 321-329 (Participants ändern, >30 entfernen)
