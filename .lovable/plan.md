

# Plan: Footer komplett überarbeiten

## Übersicht

Der Footer wird umfassend überarbeitet mit neuen Stats, Social Icons, Sitemap-Navigation und bereinigter Struktur.

---

## Aktuelle Struktur vs. Neue Struktur

### Sektion 1: Top Section (Links unter Logo)

| Element | Aktuell | Neu |
|---------|---------|-----|
| Tagline | "EXPERTISE × SPEED = IMPACT" | "GROWTH ENGINES × SCALING SYSTEMS × AI = SCALING SUCCESS" |
| Social Icons | Keine | LinkedIn, YouTube, Mail (mit Lucide Icons) |

### Sektion 2: Top Section (Rechts - Stats)

| Aktuell | Neu |
|---------|-----|
| 250K+ Words Research | 80+ Companies Scaled |
| n=22 Validated Cases | 140+ Engagements |
| 16 Documents | €2.5B+ Valuation |
| – | 92% Success Rate |

### Sektion 3: Middle Section (4-Spalten-Grid → 3-Spalten-Grid)

| Spalte | Aktuell | Neu |
|--------|---------|-----|
| 1 | Resources (ROI Calculator, Frameworks, Case Studies, θ_index Test) | Sitemap (Home, Solutions, Playbooks, Expertise, Cases, About) |
| 2 | Authors (Michel, Alban, Florian) | Team (Michel, Alban, Florian) – nur Label-Änderung |
| 3 | Contact (hello@scalingx.io, scalingx.io, lasr.io) | Contact (Book a Call, team@scalingx.io, lasr.io) |
| 4 | Social (LinkedIn) | **ENTFERNEN** (Social Icons wandern nach oben) |

---

## Technische Umsetzung

### Datei: `src/components/Footer.tsx`

#### 1. Imports erweitern (Zeile 3)
Neue Lucide Icons hinzufügen:
- `Linkedin` 
- `Youtube`
- `Mail`

#### 2. Tagline aktualisieren (Zeile 35-37)
```text
Vorher: "EXPERTISE × SPEED = IMPACT"
Nachher: "GROWTH ENGINES × SCALING SYSTEMS × AI = SCALING SUCCESS"
```

#### 3. Social Icons unter Tagline hinzufügen (nach Zeile 42)
Neue Icon-Leiste mit:
- LinkedIn Icon → https://www.linkedin.com/company/scalingxhypergrowth/
- YouTube Icon → https://www.youtube.com/@ScalingXRebels
- Mail Icon → mailto:info@scalingx.io

#### 4. Stats komplett ersetzen (Zeilen 46-65)
Neue Stats (4 statt 3):
- 80+ / Companies Scaled
- 140+ / Engagements
- €2.5B+ / Valuation
- 92% / Success Rate

#### 5. Middle Section: Grid von 4 auf 3 Spalten ändern (Zeile 72)
```text
Vorher: lg:grid-cols-4
Nachher: lg:grid-cols-3
```

#### 6. Resources → Sitemap (Zeilen 73-93)
Label: "Sitemap" statt "Resources"
Links: Home, Solutions, Playbooks, Expertise, Cases, About (als React Router `<Link>`)

#### 7. Authors → Team (Zeile 97-98)
Label: "Team" statt "Authors"/"Autoren"

#### 8. Contact aktualisieren (Zeilen 115-134)
- "Book a Call" → scrollt zu #booking
- team@scalingx.io → mailto:team@scalingx.io
- lasr.io → https://lasr.io

#### 9. Social-Spalte entfernen (Zeilen 137-157)
Die vierte Spalte wird komplett entfernt.

---

## Vorschau der neuen Struktur

```text
┌─────────────────────────────────────────────────────────────────────────┐
│  TOP SECTION                                                            │
│                                                                         │
│  [Logo]                                    80+        140+      €2.5B+  │
│  GROWTH ENGINES × SCALING                  Companies  Engagements  Val. │
│  SYSTEMS × AI = SCALING SUCCESS            Scaled                       │
│  [Beschreibungstext]                                           92%      │
│  [LinkedIn] [YouTube] [Mail]                                   Success  │
│                                                                Rate     │
├─────────────────────────────────────────────────────────────────────────┤
│  MIDDLE SECTION (3 Spalten)                                             │
│                                                                         │
│  SITEMAP          │  TEAM              │  CONTACT                       │
│  Home             │  Michel Lason      │  Book a Call                   │
│  Solutions        │  Alban Halili      │  team@scalingx.io              │
│  Playbooks        │  Florian Metzger   │  lasr.io                       │
│  Expertise        │                    │                                │
│  Cases            │                    │                                │
│  About            │                    │                                │
├─────────────────────────────────────────────────────────────────────────┤
│  BOTTOM BAR                                                             │
│  © 2026 ScalingX. All rights reserved.    Terms | Privacy | Impressum  │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Betroffene Datei

| Datei | Änderungen |
|-------|------------|
| `src/components/Footer.tsx` | Komplette Überarbeitung: Icons, Stats, Sitemap, Team-Label, Contact, Social-Spalte entfernen |

---

## Auswirkung

Da der Footer als zentrale Komponente in allen Seiten eingebunden ist (Index, About, Solutions, Playbooks, etc.), werden die Änderungen automatisch auf der gesamten Website wirksam.

