
# Plan: Keynote Landing Page Design-Harmonisierung

## Problem-Analyse

Die Keynote Landing Page verwendet das veraltete Design-Pattern wie Workshop vorher:

| Aspekt | Keynote (aktuell) | Standard (andere Pages) |
|--------|-------------------|-------------------------|
| Layout | Linksbündig | Zentriert (`text-center`) |
| Background | Einfaches TwinklingStars | Deep Space Gradient + Mesh + Parallax |
| Breadcrumb | Manuell (`nav` + `ChevronRight`) | `Breadcrumb`-Komponente |
| Badge | Einfaches `div` mit `bg-primary/10` | `Badge variant="gradient"` |
| Typography | `text-4xl md:text-6xl lg:text-7xl` | `font-display text-hero-lg` |
| Animations | Keine | `animate-blur-in`, `animate-slide-up`, `animate-fade-in` |
| Stats Cards | `border border-border` | `border-2 border-border` |
| Scroll Indicator | Keine | `ChevronDown` mit `animate-bounce` |

---

## Änderungen an `src/pages/Keynote.tsx`

### 1. Neue Imports hinzufügen

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

### 2. useParallaxLayers Hook aufrufen

Nach Zeile 36 (nach `isEnglish`):
```tsx
const { containerRef, offsets } = useParallaxLayers({ speeds: [0.1, 0.3, 0.5] });
```

### 3. Hero Section komplett überarbeiten (Zeilen 312-392)

**Neu:**
```tsx
{/* SECTION 1: HERO */}
<section ref={containerRef as React.RefObject<HTMLElement>} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden noise pt-20">
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
    {/* Breadcrumb */}
    <Breadcrumb className="justify-center mb-6 animate-fade-in">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/solutions" className="text-muted-foreground hover:text-foreground">Solutions</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <span className="text-foreground font-medium">Keynote</span>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    {/* Badge */}
    <Badge variant="gradient" className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <Mic className="w-4 h-4 mr-2" />
      Training & Enablement · 60-90 Min · €4.9K
    </Badge>

    {/* Headline */}
    <h1 className="font-display text-hero-lg mb-6 animate-blur-in">
      <span className="block text-foreground">{isEnglish ? 'Inspirational Keynote' : 'Inspirational Keynote'}</span>
      <span className="block text-gradient animate-gradient bg-gradient-primary">
        {isEnglish ? 'In 60-90 Minutes' : 'In 60-90 Minuten'}
      </span>
    </h1>

    {/* Subheadline */}
    <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
      {isEnglish 
        ? 'Inspire your team or event audience in 60-90 minutes. Choose from 5 keynote topics: AI-Native Scaling, Efficient Hypergrowth, Pricing Strategy, Customer Success Excellence, Board Governance—with actionable takeaways and Q&A.'
        : 'Inspiriere dein Team oder Event-Publikum in 60-90 Minuten. Wähle aus 5 Keynote-Themen: AI-Native Scaling, Efficient Hypergrowth, Pricing Strategy, Customer Success Excellence, Board Governance—mit umsetzbaren Takeaways und Q&A.'}
    </p>

    {/* Hero Stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <div className="bg-card/50 backdrop-blur-sm border-2 border-border p-6 text-center">
        <Users className="w-8 h-8 text-primary mx-auto mb-2" />
        <div className="text-3xl font-bold text-primary mb-1">50-500</div>
        <div className="text-sm text-muted-foreground">{isEnglish ? 'Audience (Scalable)' : 'Audience (Skalierbar)'}</div>
      </div>
      <div className="bg-card/50 backdrop-blur-sm border-2 border-border p-6 text-center">
        <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
        <div className="text-3xl font-bold text-primary mb-1">{isEnglish ? 'High' : 'High'}</div>
        <div className="text-sm text-muted-foreground">{isEnglish ? 'Impact Inspiration' : 'Impact Inspiration'}</div>
      </div>
      <div className="bg-card/50 backdrop-blur-sm border-2 border-border p-6 text-center">
        <Target className="w-8 h-8 text-primary mx-auto mb-2" />
        <div className="text-3xl font-bold text-primary mb-1">3-5</div>
        <div className="text-sm text-muted-foreground">{isEnglish ? 'Actionable Takeaways' : 'Umsetzbare Takeaways'}</div>
      </div>
    </div>

    {/* CTAs */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
      <Button size="lg" className="text-lg px-8" asChild>
        <a href="https://calendly.com/michel-scalingx/keynote" target="_blank" rel="noopener noreferrer">
          {isEnglish ? 'Book Keynote (€4.9K)' : 'Keynote buchen (€4.9K)'}
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </Button>
      <Button size="lg" variant="outline" className="text-lg px-8" asChild>
        <a href="#keynote-topics">
          {isEnglish ? 'See Keynote Topics' : 'Keynote-Themen ansehen'}
        </a>
      </Button>
    </div>

    {/* Trust Badges */}
    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-primary" />
        <span>{isEnglish ? '60-90 Minutes (Fast Impact)' : '60-90 Minuten (Schneller Impact)'}</span>
      </div>
      <div className="flex items-center gap-2">
        <Users className="w-4 h-4 text-primary" />
        <span>{isEnglish ? '50-500 Participants (Scalable)' : '50-500 Teilnehmer (Skalierbar)'}</span>
      </div>
      <div className="flex items-center gap-2">
        <Target className="w-4 h-4 text-primary" />
        <span>{isEnglish ? 'Actionable Takeaways (Not Just Theory)' : 'Umsetzbare Takeaways (Nicht nur Theorie)'}</span>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <ChevronDown className="w-6 h-6 text-muted-foreground" />
  </div>
</section>
```

---

## Zusammenfassung der Änderungen

| Datei | Änderung |
|-------|----------|
| `src/pages/Keynote.tsx` | Hero Section komplett überarbeiten: Layout zentrieren, Deep Space Background + Parallax hinzufügen, Breadcrumb-Komponente verwenden, Badge variant="gradient", Typography mit text-hero-lg, Animations (animate-blur-in, animate-slide-up, animate-fade-in), Stats Cards mit border-2, Scroll Indicator hinzufügen |

## Betroffene Bereiche

- **Imports**: Zeilen 1-32 (erweitern um useParallaxLayers, Badge, Breadcrumb, ChevronDown)
- **Component Anfang**: Nach Zeile 36 (useParallaxLayers Hook)
- **Hero Section**: Zeilen 312-392 (komplett neu schreiben)
