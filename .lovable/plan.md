
# Plan: Research-Seite an Playbook-Design anpassen

## Identifizierte Design-Unterschiede

### Hero Section

| Aspekt | Playbook (Richtig) | Research (Falsch) |
|--------|-------------------|-------------------|
| Background | `#0A0A0F`, `#0F0F1A`, `#1A1A2E` (Deep Space) | `from-background via-background/95` (zu hell) |
| Mesh Overlay | `bg-mesh opacity-60` | Fehlt komplett |
| Grid Pattern | `bg-grid-pattern bg-grid-lg opacity-20` | Inline CSS mit `opacity-[0.03]` (zu schwach) |
| Layout | `max-w-5xl text-center` | Linksbündig, keine max-width |
| Breadcrumb | Shadcn `<Breadcrumb>` Komponente | Manuelles `<nav>` mit Icons |
| Badge | `variant="gradient"` mit Icon | `variant="outline"` ohne Icon |
| Headline | `font-display text-hero-lg text-gradient animate-gradient` | `text-4xl font-bold` (langweilig) |
| CTAs | `size="xl"` + `shadow-accent-glow` | `size="lg"` ohne Glow |
| Scroll Indicator | Vorhanden (ChevronDown bounce) | Fehlt |
| min-height | `min-h-screen` | `min-h-[90vh]` |

### Content Sections

| Aspekt | Playbook (Richtig) | Research (Falsch) |
|--------|-------------------|-------------------|
| Section Background | `bg-gradient-to-b from-background via-muted/30 to-background` | Einfaches `py-20` |
| Header-Badge | Inline-badge mit Icon + `bg-primary/10` | Fehlt |
| Headline | `font-display` | Standard `font-bold` |

### Final CTA Section

| Aspekt | Playbook (Richtig) | Research (Falsch) |
|--------|-------------------|-------------------|
| Background | Deep Space + `bg-mesh` + radial Glow | Einfacher Gradient |
| Trust Signals | `bg-white/10 backdrop-blur border border-white/20` | Standard Badges |
| Stats Row | Am Ende mit `border-t border-white/10` | Fehlt |

---

## Zu ändernde Dateien

### 1. `ResearchHeroSection.tsx` (Komplett überarbeiten)

**Änderungen:**
```tsx
// Background: Deep Space statt CSS-Variablen
- from-background via-background/95 to-muted/30
+ from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]

// Mesh Overlay hinzufügen
+ <div className="absolute inset-0 bg-mesh opacity-60" />

// Grid Pattern: bg-grid-pattern statt inline CSS
- backgroundImage: linear-gradient(...)
+ bg-grid-pattern bg-grid-lg opacity-20

// Layout zentrieren
- <div className="container mx-auto px-4 py-20">
+ <div className="container max-w-5xl mx-auto px-6 py-24 text-center">

// Breadcrumb: Shadcn-Komponente verwenden
- <nav className="flex items-center gap-2">
+ <Breadcrumb className="justify-center mb-6">

// Badge: variant="gradient" + Icon
- <Badge variant="outline" className="border-primary/50">
+ <Badge variant="gradient" className="mb-8">
+   <BookOpen className="w-4 h-4 mr-2" />

// Headline: Design-System Klassen
- text-4xl md:text-5xl lg:text-6xl font-bold
+ font-display text-hero-lg
+ <span className="text-gradient animate-gradient bg-gradient-primary">

// CTAs: Größer + Glow
- <Button size="lg">
+ <Button size="xl" className="shadow-accent-glow">

// Scroll Indicator hinzufügen
+ <button onClick={scrollToSection} className="absolute bottom-12 ...">
```

### 2. `ResearchWhyItMattersSection.tsx`

**Änderungen:**
```tsx
// Section Background-Gradient
- py-20 bg-muted/30
+ py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background

// Header-Badge hinzufügen (wie Playbook)
+ <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
+   <TrendingUp className="w-4 h-4" />
+   <span className="text-sm font-medium uppercase tracking-wide">Why It Matters</span>
+ </div>

// Headline
- text-3xl md:text-4xl font-bold
+ font-display text-3xl md:text-4xl font-bold
```

### 3. `ResearchThreeLevelsSection.tsx`

**Änderungen:**
```tsx
// Section Background
+ bg-gradient-to-b from-muted/30 via-background to-muted/30

// Header-Badge hinzufügen
+ <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
+   <Layers className="w-4 h-4" />
+   <span>The Framework</span>
+ </div>

// Card-Design verbessern
- border-2 ${colors.border}
+ border-2 border-l-4 ${colors.border} hover:bg-${colors.bg}/5
```

### 4. `ResearchMeasurementSection.tsx`

**Änderungen:**
```tsx
// Section Background + Header-Badge
+ bg-gradient-to-b from-background via-muted/30 to-background

+ <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
+   <Target className="w-4 h-4" />
+   <span>Measurement</span>
+ </div>
```

### 5. `ResearchFindingsSection.tsx`

**Änderungen:**
```tsx
// Section Background
+ bg-gradient-to-b from-muted/30 via-background to-muted/30

// Header-Badge
+ <div className="inline-flex ...">
+   <Lightbulb className="w-4 h-4" />
+   <span>Key Findings</span>
+ </div>
```

### 6. `ResearchCaseStudiesSection.tsx`

**Änderungen:**
```tsx
// Section Background
+ bg-gradient-to-b from-background via-muted/30 to-background

// Header-Badge
+ <Building className="w-4 h-4" />
```

### 7. `ResearchImplicationsSection.tsx`

**Änderungen:**
```tsx
// Section Background
+ bg-gradient-to-b from-muted/30 via-background to-muted/30

// Header-Badge
+ <Compass className="w-4 h-4" />
```

### 8. `ResearchDownloadSection.tsx`

**Änderungen:**
```tsx
// Section Background
+ bg-gradient-to-b from-background via-muted/30 to-background

// Download-Card mit Glow-Effekt
+ hover:shadow-glow
```

### 9. `ResearchFinalCTASection.tsx` (Komplett überarbeiten)

**Änderungen:**
```tsx
// Background: Deep Space wie Playbook
- from-muted/30 via-background to-background
+ from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]

// Mesh + Radial Glow hinzufügen
+ <div className="bg-mesh opacity-40" />
+ <div className="bg-[radial-gradient(ellipse_at_center,...)] from-primary/20" />

// Badge: variant="gradient"
- <Badge variant="outline">
+ <Badge variant="gradient">
+   <Sparkles className="w-4 h-4 mr-2" />

// Headline: Weiß statt foreground
- text-foreground
+ text-white

// Benefits: Glass-Effekt wie Playbook Trust Signals
- bg-card/50 border border-border/50
+ bg-white/10 backdrop-blur-sm border border-white/20 text-white/90

// CTAs mit Glow
+ shadow-accent-glow hover:shadow-glow

// Stats Row am Ende hinzufügen
+ <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10">
```

---

## Zusammenfassung

| Datei | Änderungsumfang |
|-------|-----------------|
| `ResearchHeroSection.tsx` | Komplett überarbeiten (Deep Space, Mesh, Grid, Breadcrumb, Badge, Headline, CTAs, Scroll) |
| `ResearchWhyItMattersSection.tsx` | Header-Badge + Section-Gradient |
| `ResearchThreeLevelsSection.tsx` | Header-Badge + Section-Gradient + Card-Border |
| `ResearchMeasurementSection.tsx` | Header-Badge + Section-Gradient |
| `ResearchFindingsSection.tsx` | Header-Badge + Section-Gradient |
| `ResearchCaseStudiesSection.tsx` | Header-Badge + Section-Gradient |
| `ResearchImplicationsSection.tsx` | Header-Badge + Section-Gradient |
| `ResearchDownloadSection.tsx` | Section-Gradient + Card-Glow |
| `ResearchFinalCTASection.tsx` | Komplett überarbeiten (Deep Space, Mesh, Glow, Stats Row) |

---

## Erwartetes Ergebnis

Nach der Implementierung wird die AMF Research-Seite visuell identisch sein mit den Playbook Landing Pages:

- Deep Space Background mit Mesh und Grid
- Zentriertes Layout mit `max-w-5xl`
- Gradient Badges mit Icons
- Animierte Headlines (`text-gradient animate-gradient`)
- Glowing CTAs (`shadow-accent-glow`)
- Konsistente Section-Gradients
- Header-Badges für jeden Abschnitt
- Scroll-Indicator im Hero
- Stats Row im Final CTA

