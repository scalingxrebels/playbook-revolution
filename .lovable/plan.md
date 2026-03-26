

## Plan: Homepage visuell auf AI-Native Niveau heben

### Analyse: Was AI-Native besser macht

Die `/ai-native` Seite hat deutlich mehr visuelle Tiefe als die aktuelle Home:

```text
ELEMENT                    AI-NATIVE          HOME (AKTUELL)
─────────────────────────────────────────────────────────────
Hero Background            GrowthTrails ✅     Fehlt ❌
Deep Space Colors          #0A0A0F hardcoded   HSL vars (flacher)
Section Backgrounds        Dark mesh + grid    Plain bg-background
Card Style                 border-2 + glow     border thin, kein glow
Stat Badges                shadow-brutal-sm    Fehlen
Parallax Layers            Durchgängig         Nur Hero + Formel
Hover Effects              shadow-glow          Keine
Visual Density             Hoch (Icons, Badges) Niedrig (nur Text)
```

### 8 Änderungen

---

### 1. `HomeHero.tsx` — GrowthTrails hinzufügen
- `GrowthTrails` Import + Render (die animierten S-Kurven aus AI-Native)
- Deep Space Farben von `hsl(var(--background))` auf `#0A0A0F` / `#0F0F1A` / `#1A1A2E` (wie HeroOptimized)

### 2. `HomeShift.tsx` — Dark Section mit visueller Tiefe
- Von `bg-background` zu dark section mit mesh gradient + grid pattern + parallax
- Subtile Akzentlinie links neben den Absätzen (editorial-border Stil)
- Übergang mit `bg-gradient-to-b` für Tiefe

### 3. `HomeMechanisms.tsx` — Cards upgraden
- `bg-muted/30` → dark section mit mesh background
- Cards: `border` → `border-2`, glow effect on hover (`shadow-glow`)
- Icon-Container mit farbigem Background (`bg-accent/10`)
- M-Nummer als Badge oben rechts (wie HowItWorksOptimized Nummern)

### 4. `HomeComparison.tsx` — Visuell aufwerten
- Dark section mit mesh + grid pattern
- Tabelle: stärkerer Kontrast, "Wir"-Spalte mit accent glow
- Formula Badge prominenter gestaltet

### 5. `HomeCases.tsx` — AI-Native Card-Stil
- Dark section mit parallax mesh
- Cards: `border-2`, hover glow (`shadow-accent-glow`)
- Metriken-Werte in `text-accent` statt `text-foreground`
- Tag als farbiger Badge (wie ProofOptimized)

### 6. `HomeWorkWithUs.tsx` — Mehr visuelles Gewicht
- Cards: `border-2`, glow effects
- Weg 3 (prominent): `shadow-accent-glow` permanent subtle
- Grid pattern im Hintergrund

### 7. `HomeTeam.tsx` — Dark Section + visuelle Elemente
- Dark section mit mesh gradient
- Michel-Foto: größerer Rahmen mit accent border glow
- Partner-Karten: `border-2` + subtiles hover
- Dekorative Akzentlinien

### 8. `Index.tsx` — Keine Änderung
Sektionsreihenfolge bleibt identisch. Alle Änderungen sind rein visuell in den Komponenten.

### Design-Konsistenz mit AI-Native

Durchgängig angewandt:
- **Deep Space Backgrounds**: Alternierende dark sections mit `#0A0A0F`-Palette, mesh overlays, grid patterns
- **Parallax**: `useParallax` / `useParallaxLayers` in allen Sektionen
- **Cards**: `border-2 border-border hover:border-accent/50` + `shadow-glow` / `shadow-accent-glow`
- **Badges**: `shadow-brutal-sm` Stat-Badges auf Cards
- **Scroll Animations**: `useScrollAnimation` mit staggered delays (bereits vorhanden)
- **Noise Texture**: `noise` class auf dark sections

### Keine inhaltlichen Änderungen
Alle Texte, Links, CTAs, Daten bleiben exakt gleich. Nur visuelle Upgrades.

