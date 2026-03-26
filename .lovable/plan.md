

## Plan: About Page v1.0 — Konsistent mit Home Design System

### Problem
Die About-Seite nutzt `SharedHero` + helle `Card`-basierte Sections ohne Parallax, scroll-reveal, oder die Home-Typografie (`text-display-md`, uppercase overlines). Das Briefing definiert 6 Sections mit neuen Inhalten. Pigtie bleibt drin (entgegen Briefing), lasr.io wird entfernt.

### Architektur-Entscheidung
Statt SharedHero + leichtem Container wird die About-Seite — wie Home — aus dedizierten Section-Blöcken gebaut, jeder mit eigenem Parallax-Background, scroll-reveal Animationen und Home-Typografie. Alles inline in `About.tsx` (wie ML.tsx), da die Sections About-spezifisch sind.

### Die 6 Sections (+ Pigtie als Bonus)

**Section 1 — Hero** (Home-identisch: Deep Space, 3-Layer Parallax, min-h-screen)
- Overline: `FÜR CEOS VON FINANZIERTEN STARTUPS · SERIES A–B · DACH`
- H1: "Deine Strategie funktioniert auf dem Slide Deck. / Wir sorgen dafür, dass sie in der Realität funktioniert."
- Subline: "Nicht mit Slides. Mit Systemen, die funktionieren. Fucking schnell."
- Badge: `EXPERTISE × SPEED = IMPACT`
- Kein CTA im Hero (laut Briefing)
- Scroll-Chevron bottom-8

**Section 2 — Die drei Menschen** (Layout wie HomeCases: 3-col grid, border-2 cards)
- Overline uppercase: `DAS TEAM`
- H2 `text-display-md`: "Drei Menschen. Ein System."
- 3 Kacheln mit: rundem 80px Foto, Name, Rolle (uppercase muted), Kernsatz (bold), Body (3 Sätze), Ergebnis-Badge (accent pill), Tags (kommagetrennt muted), Ghost-Link
- Michel: "Hat €1,3M auf €13,7M ARR gebracht — in 2 Jahren." + Rule of 40 Badge + → /about/ml
- Alban: "Hat B2B Sales von 0 auf €8,5M ARR skaliert." + Conversion Badge + → /about/ah  
- Florian: "Baut die Systeme die Strategie in operative Realität übersetzen." + Sales Cycle Badge + → /about/fm
- Parallax bg-mesh + bg-gradient + grid-pattern (wie HomeMechanisms)

**Section 3 — Warum wir anders sind / M1–M4** (Layout wie HomeMechanisms: 2x2 grid)
- Overline: `WARUM ES FUNKTIONIERT`
- H2: "Andere beraten. Wir bauen."
- 4 Kacheln im 2x2-Grid, p-8, border-2, hover:border-primary/50
- M1–M3: accent color, M4: amber (#F59E0B) als Multiplier
- Jede Kachel: Icon, Label (M1–M4), H3 Headline, Body, Link → /expertise/...
- Scroll-reveal mit staggered delays

**Section 4 — Beweis** (Stats + Case Snippets wie HomeCases)
- Overline: `EVIDENZ`
- H2: "Zahlen die für sich sprechen."
- 4 Stats: 80+ (mit Erklärung), 140+, €2.5B+, 90 Tage
- Stats als grid-cols-4 mit accent-Zahlen + Erklärungstext darunter
- 3 Case Snippets (horizontal cards wie HomeCases aber kompakter)
- Link: → Alle Cases ansehen

**Section 5 — Was uns antreibt / Mission**
- Overline: `WARUM WIR EXISTIEREN`
- H2: "Die Lücke zwischen Strategie und Realität kostet Startups ihre Zukunft."
- Body: 4 Sätze
- Grosses Quote zentriert (italic, text-xl, accent)
- 3 Werte horizontal: Execution-First, Speed Matters, Partnership
- Viel Whitespace, kein Card-Layout

**Section 5.5 — Pigtie** (bleibt drin, als kompakte Venture-Erwähnung)
- Einzelne Card mit Pigtie-Info (wie aktuell, aber im Home-Card-Style: border-2 border-border)

**Section 6 — Final CTA** (wie Home WorkWithUs Pattern)
- Overline: `NÄCHSTER SCHRITT`
- H2: "30 Minuten. Kein Pitch. Direkt mit Michel."
- Body + Primary CTA Button (gradient-accent, shadow-accent-glow)
- Micro-Copy + Secondary Link → /solutions
- FilloutBookingModal

### Design-Tokens (konsistent mit Home)

| Token | Wert |
|---|---|
| Section padding | `py-24 md:py-32` |
| Max-width | `max-w-5xl` (Text), `max-w-6xl` (Cards) |
| Header typography | `text-display-md` |
| Overline | `text-sm font-semibold uppercase tracking-widest text-accent` |
| Card style | `border-2 border-border bg-card hover:border-primary/50 hover:shadow-glow` |
| Corners | Sharp (rounded-none, kein rounded) |
| Backgrounds | Alternating parallax: bg-mesh + bg-gradient + bg-grid-pattern |
| Animations | `useScrollAnimation` + staggered `transitionDelay` |
| CTA Button | `bg-gradient-accent shadow-accent-glow whitespace-nowrap` |

### Was entfernt wird
- SharedHero → eigener Deep Space Hero inline
- "Approach" Section (Research-basiert/Hands-On/Messbar) → ersetzt durch M1–M4
- "Values" Section (Non-Negotiables) → integriert in Mission als 3 Werte
- lasr.io Venture Card → entfernt
- Stats im Hero → verschoben nach Section 4

### Betroffene Datei

| Datei | Änderung |
|---|---|
| `src/pages/About.tsx` | Komplett-Rewrite (~500 Zeilen): 6 Sections mit Home Design System |

1 Datei. Keine Routing-Änderungen.

