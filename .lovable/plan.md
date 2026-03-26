

## Plan: Homepage v1.0 — Kompletter Rebuild nach Briefing

### Briefing-Check

Das Briefing ist klar, konsistent und umsetzbar. Hier die Analyse:

**Was sich ändert:**
- 9 Sektionen → 6 Sektionen
- Hero: Outcome-Claim ("€2M auf €100M") → CEO-Zustand als Headline ("Deine Strategie funktioniert auf dem Slide Deck. In der Realität nicht.")
- Problem-Cards → "The Shift" (narrative Absätze statt Cards)
- Solution + HowItWorks + Formula → "Winning Mechanisms Grid" (2×2)
- Proof: Midjourney/Cursor/Perplexity → eigene anonymisierte Cases
- GrowthCurve + ROI Calculator → entfernt (ausgelagert)
- Final CTA: Fillout-Embed → vereinfachter CTA-Block (kein iFrame)
- Neue Sektion: "Work With Us" (3 Wege)
- Neue Sektion: "Michel" (Founder-Profil)

**Navigation-Änderung:**
- Aktuell: Home · Solutions · Playbooks · Insights · Cases · Expertise · About (7 Items)
- Briefing: Home · Insights · Solutions · Cases · About (5 Items)
- Playbooks und Expertise entfallen aus der Nav

**Design-Kompatibilität:**
- Deep Space Hero ✅ (bleibt, reduziert)
- Dark-Section Pattern ✅
- Parallax + Stars ✅ (reduziert)
- Typography (League Spartan + DM Sans) ✅
- Brutalist Shadows, 4px Border Radius ✅
- "EXPERTISE × SPEED = IMPACT" als Badge statt "GROWTH ENGINES × SCALING SYSTEMS × AI"

### Implementierung

#### Datei 1: `src/pages/Index.tsx`
- 6 Sektionen statt 9: Hero, Shift, Mechanisms, Cases, WorkWithUs, Michel
- Alte Imports (GrowthCurveOptimized, ROICalculatorOptimized, HowItWorksOptimized, FormulaOptimized, ProofOptimized, SolutionOptimized, ProblemOptimized) entfernen
- Neue Imports für 6 neue Komponenten

#### Datei 2: `src/components/homepage/HeroV2.tsx` (neu)
- Deep Space Background (reduziert — weniger Animationen, kein GrowthTrails)
- Overline: "FÜR CEOS VON FINANZIERTEN STARTUPS · SERIES A–B · DACH"
- H1: "Deine Strategie funktioniert / auf dem Slide Deck. / In der Realität nicht."
- Subline: "Wir finden den Hebel der wirklich zieht — und setzen ihn um. Fucking fast."
- Badge: "EXPERTISE × SPEED = IMPACT"
- CTA → öffnet Booking Modal (kein iFrame)
- Micro-Copy: "30 Minuten · Kein Pitch · Direkt mit Michel"

#### Datei 3: `src/components/homepage/ShiftSection.tsx` (neu)
- Narrative Absätze (kein Grid, keine Cards)
- H2: "Die Welt hat sich verändert. Deine Strategie noch nicht."
- 4 Absätze prose-style, max-w-3xl zentriert
- Styling: editorial, muted-foreground Body, foreground Headline

#### Datei 4: `src/components/homepage/MechanismsGrid.tsx` (neu)
- Overline: "WIE WIR ARBEITEN"
- H2: "Vier Mechanismen. Einer fehlt immer."
- 2×2 Grid (1-col auf Mobile)
- Cards: Insights & Levers, Growth Engines, Scaling Systems, AI Orchestration
- Jede Card mit Icon, Titel, kurzer Beschreibung, "→ Mehr lesen" Link
- Styling: `bg-card/10 border border-border/50 hover:border-primary/30`

#### Datei 5: `src/components/homepage/CasesTeaser.tsx` (neu)
- H2: "Was passiert wenn der Hebel stimmt."
- 3 anonymisierte Case-Cards (Series B SaaS, Series A B2B, Series B Pre-Exit)
- Jede Card: Kontext, Metric, Insight
- Link: "→ Alle Cases ansehen" nach /cases
- Styling: Cards wie Mechanisms Grid

#### Datei 6: `src/components/homepage/WorkWithUs.tsx` (neu)
- H2: "Drei Wege. Du wählst den richtigen."
- 3 Optionen: Insights lesen → /insights, Solutions ansehen → /solutions, Gespräch buchen → Modal
- Weg 3 prominent (Electric Blue / primary CTA)

#### Datei 7: `src/components/homepage/MichelSection.tsx` (neu)
- Foto (bestehendes `/images/ml-hero-new.png`)
- H2: "Michel Lason"
- 3 Sätze Bio
- Micro-Copy: "n=22 · DACH B2B SaaS · Series A–C"
- Link: "→ Mehr über Michel und das Team" → /about

#### Datei 8: `src/components/Navigation.tsx`
- navItems reduzieren auf: Home, Insights, Solutions, Cases, About
- Playbooks und Expertise entfernen

#### Datei 9: `src/components/Footer.tsx`
- sitemapLinks anpassen (Playbooks/Expertise entfernen)
- Stats-Zeile sicherstellen (80+ Companies etc.) — ist bereits vorhanden

### Nicht geändert
- Alte Komponenten bleiben im Repo (nicht löschen — archiviert)
- Footer-Struktur bleibt weitgehend gleich
- Theme/Language Toggle bleiben
- Alle anderen Routen bleiben erreichbar (Playbooks, Expertise etc. — nur aus Nav entfernt)

