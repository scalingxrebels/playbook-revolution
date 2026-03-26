

## Plan: Footer-Text, Insights-Stats, About-Texte, lasr.io entfernen

### 4 Änderungen

**1. Footer-Text aktualisieren + lasr.io entfernen** (`src/components/Footer.tsx`)

- **Z.49-61**: Tagline + Beschreibung ersetzen:
  - `GROWTH ENGINES × SCALING SYSTEMS × AI = HYPERGROWTH` → `EXPERTISE × SPEED = IMPACT`
  - DE-Text → "Für CEOs von finanzierten Startups, deren Strategie auf dem Slide Deck funktioniert — aber nicht in der Realität."
  - EN-Text → "For CEOs of funded startups whose strategy works on the slide deck — but not in reality."
  - Zweiter Absatz DE → "Wir finden den Hebel. Wir bauen den Mechanismus. Fucking fast."
  - Zweiter Absatz EN → "We find the lever. We build the mechanism. Fucking fast."
- **Z.184-189**: lasr.io Link-Block komplett entfernen

**2. Insights-Stats entfernen** (`src/components/insights/InsightsHero.tsx`)

- **Z.29-49**: Das 3-Spalten-Grid mit "Operator-led / Live Events / Free Access" Stats komplett entfernen

**3. About-Seite: Overline ↔ Badge tauschen** (`src/pages/About.tsx`)

- **Z.213-214**: Overline-Text ändern von `FÜR CEOS VON FINANZIERTEN STARTUPS · SERIES A–B · DACH` → `EXPERTISE × SPEED = IMPACT`
- **Z.236-238**: Badge-Text ändern von `EXPERTISE × SPEED = IMPACT` → `FÜR CEOS VON FINANZIERTEN STARTUPS · SERIES A–B · DACH` (DE) / `FOR CEOS OF FUNDED STARTUPS · SERIES A–B · DACH` (EN)

**4. Solutions-Sprungmarke** — Der Footer-Link zeigt auf `/solutions` (korrekt). Falls damit ein anderer Link gemeint ist, bitte spezifizieren welcher Link falsch gesetzt ist.

### Dateien

| Datei | Änderung |
|---|---|
| `src/components/Footer.tsx` | Tagline + Beschreibung neu, lasr.io entfernen |
| `src/components/insights/InsightsHero.tsx` | Stats-Grid (Z.29-49) entfernen |
| `src/pages/About.tsx` | Overline ↔ Badge Text tauschen |

3 Dateien, reine Text-/Lösch-Änderungen.

