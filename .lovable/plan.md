

## Konsistenz-Prüfung: RAS Landing Page vs. andere Landing Pages

Ich habe die RAS-Seite gegen die Power Up, Boost und Research Landing Pages abgeglichen. Hier die Ergebnisse:

---

### Was konsistent ist (kein Handlungsbedarf)

- Page wrapper: `min-h-screen bg-background text-foreground` mit `<main>` Tag
- Navigation + Footer Einbindung
- Deep Space Hero: identische 4-Layer-Parallax-Struktur (Gradient, Mesh, Stars, Grid)
- Breadcrumb-Platzierung und Styling
- Scroll-Indicator am Hero-Ende
- `useScrollAnimation` für Section-Einblendungen
- `FilloutBookingModal` nach Footer platziert
- `openBookingModal` CustomEvent Pattern
- Button-Styling: `bg-gradient-accent` für primäre CTAs
- FAQ: Accordion-Pattern konsistent

---

### Abweichungen (Handlungsbedarf)

#### 1. Hero Badge: Amber statt Gradient
- **RAS:** `bg-amber-500/20 text-amber-400 border-amber-500/30` (custom Amber Pill)
- **Alle anderen LPs:** `variant="gradient"` (Standard-Gradient-Badge)
- **Bewertung:** Intentional lt. v10.9-Briefing (Amber Pill = Urgency). Kein Fix nötig.

#### 2. Fehlende Hero Stats
- **PowerUp/Boost:** 3-Grid Hero Stats (z.B. "+30-60pp ARR Growth") + Trust Badges (Shield, Clock, MessageCircle)
- **RAS:** Keine Stats, keine Trust Badges im Hero — nur Micro-Copy "Kostenlos bewerben · 2 Minuten"
- **Bewertung:** Intentional lt. v10.9. RAS ist ein anderer Funnel-Typ (Application vs. Booking).

#### 3. Fehlender `window.scrollTo(0, 0)` im useEffect
- **PowerUp:** Hat `window.scrollTo(0, 0)` im useEffect
- **RAS:** Fehlt
- **Bewertung:** Bug — sollte ergänzt werden, damit die Seite beim Laden oben startet.

#### 4. Section-Label-Inkonsistenz
- **PowerUp/Boost:** Verwenden `<span className="text-sm font-semibold uppercase tracking-widest text-accent/destructive/primary">` als Section-Labels über jeder Headline
- **RAS:** Manche Sektionen haben Labels (VSL: "Video", Was du baust: "Was du baust"), andere nicht (Problem-Reframe, Sessions, Format, ICP-Filter, Pricing, Trust, Michel, FAQ, Apply, Waitlist)
- **Bewertung:** Inkonsistent. Jede Sektion sollte ein Section-Label haben (wie im Briefing auch definiert).

#### 5. FAQ-Accordion-Styling
- **PowerUp/Boost:** `className="border-2 border-border bg-card px-6"` auf AccordionItems + `space-y-4` wrapper
- **RAS:** Kein zusätzliches Styling auf AccordionItems, kein spacing
- **Bewertung:** Visuell inkonsistent. Sollte angeglichen werden.

#### 6. Section Background-Alternierung
- **PowerUp/Boost:** Konsequentes Wechsel-Pattern: Light (`bg-gradient-to-b from-background to-secondary/30`) → Dark (mesh/gradient) → Light → Dark
- **RAS:** Pattern ist vorhanden aber nicht immer konsistent — z.B. Problem-Reframe ist Dark, Layer ist Light, Deliverables ist Dark, Sessions ist Light, Format ist Dark, ICP ist Light, Pricing ist Dark → drei Dark-Sektionen hintereinander möglich
- **Bewertung:** Kein kritisches Problem, aber visuelle Monotonie möglich. Leichte Anpassung empfohlen.

#### 7. max-w Inkonsistenzen
- Einige Sektionen nutzen `max-w-5xl`, andere `max-w-6xl`, `max-w-4xl`, `max-w-3xl`, `max-w-2xl`
- **PowerUp/Boost:** Konsistenter `max-w-6xl` für Content-Sektionen, `max-w-5xl` für Hero
- **RAS:** Variiert stark (5xl Hero, 4xl VSL, 3xl Problem, 5xl Layers, 5xl Deliverables, 6xl Pricing, 3xl FAQ, 2xl Apply)
- **Bewertung:** Teilweise intentional (schmalere Sektionen für Text-fokussierte Inhalte), aber `max-w-4xl` für VSL und `max-w-3xl` für Problem fühlen sich eng an.

---

### Empfohlene Fixes (nach Priorität)

1. **`scrollTo(0,0)`** im useEffect des Hauptkomponents ergänzen
2. **FAQ AccordionItem-Styling** angleichen: `border-2 border-border bg-card px-6` + `space-y-4`
3. **Section-Labels** ergänzen für: Problem-Reframe, Sessions, Format, ICP-Filter, Pricing, Trust, Michel, FAQ, Apply, Waitlist — konsistent mit dem `<span>` uppercase tracking-widest Pattern
4. **max-w** für VSL von `4xl` auf `5xl` angleichen (andere behalten wegen Content-Typ)

Alle 4 Fixes betreffen nur `src/pages/RevenueArchitectureSystem.tsx`.

