

# Plan: Tool-Kacheln aktualisieren (KeyPitchs, lasr.io, ROI Calculator, Scaling Calculator)

## Übersicht der Änderungen

| Tool | Änderung |
|------|----------|
| KeyPitchs (ID 41) | Link korrigieren, Pricing anpassen |
| lasr.io (ID 38) | Link korrigieren, Beschreibung komplett überarbeiten |
| ROI Calculator (ID 39) | Link zu Homepage-Sektion ändern |
| Scaling Calculator (ID 40) | CTA von "Try Now" auf "Coming soon" ändern |

---

## 1. KeyPitchs (ID 41)

**Datei:** `src/data/solutionTiles.ts` (Zeilen 1468, 1491)

| Feld | Aktuell | Neu |
|------|---------|-----|
| `price` | `'Free'` | `'Trial Free, from €25'` |
| `priceTag` | `'free'` | `'free'` (bleibt, da Trial kostenlos) |
| `primaryCtaUrl` | `'https://keypitchs.com'` | `'https://keypitchs.com/'` |

---

## 2. lasr.io (ID 38)

**Datei:** `src/data/solutionTiles.ts` (Zeilen 1364-1396)

### Änderungen:

| Feld | Neu |
|------|-----|
| `primaryCtaUrl` | `'https://www.lasr.io/'` |
| `solutionEn` | Basierend auf neuem Briefing |
| `solutionDe` | Deutsche Übersetzung |
| `deliverablesEn` | Neue 3 Punkte aus Briefing |
| `deliverablesDe` | Deutsche Übersetzung |
| `impactEn` | Neuer Impact-Text |
| `impactDe` | Deutsche Übersetzung |

### Neue Texte:

**solutionEn:**
```
Assessment & Diagnosis: 12-minute analysis across 4 dimensions. Solo or team-based with multiple perspectives. Get Score 0-100, Peer Benchmarks, and Board-Ready Decks—100% free.
```

**solutionDe:**
```
Assessment & Diagnose: 12-Minuten-Analyse über 4 Dimensionen. Allein oder im Team mit mehreren Perspektiven. Erhalte Score 0-100, Peer-Benchmarks und Board-Ready Decks—100% kostenlos.
```

**deliverablesEn:**
```typescript
[
  '12 Minutes, 4 Dimensions, Team-capable',
  'Score 0-100, Benchmarks, Board Decks',
  'AI Ops Copilot with Issues, Recipes & Chat'
]
```

**deliverablesDe:**
```typescript
[
  '12 Minuten, 4 Dimensionen, Team-fähig',
  'Score 0-100, Benchmarks, Board Decks',
  'AI Ops Copilot mit Issues, Recipes & Chat'
]
```

**impactEn:**
```
Identifies execution problems and generates concrete recipes with workstreams, steps, and milestones—structured across 30/90/180 days.
```

**impactDe:**
```
Identifiziert Ausführungsprobleme und generiert konkrete Rezepte mit Workstreams, Schritten und Meilensteinen—strukturiert über 30/90/180 Tage.
```

---

## 3. ROI Calculator (ID 39)

**Datei:** `src/data/solutionTiles.ts` (Zeile 1424-1425)

| Feld | Aktuell | Neu |
|------|---------|-----|
| `primaryCtaUrl` | `'/roi-calculator'` | `'/#calculator'` |

Dies führt zur Homepage mit Anker zur ROI-Rechner-Sektion.

---

## 4. Scaling Calculator (ID 40)

**Datei:** `src/data/solutionTiles.ts` (Zeilen 1455-1458)

| Feld | Aktuell | Neu |
|------|---------|-----|
| `primaryCtaEn` | `'Try Now'` | `'Coming soon'` |
| `primaryCtaDe` | `'Jetzt ausprobieren'` | `'Coming soon'` |
| `primaryCtaAction` | `'open-tool'` | `'disabled'` (oder Button disabled machen) |
| `primaryCtaUrl` | `'/scaling-calculator'` | `''` (leer oder entfernen) |

**Hinweis:** Da es keine "disabled" Action gibt, könnte der Button auch einfach keinen Link haben und visuell als "Coming soon" Text angezeigt werden.

---

## Zusammenfassung

| Datei | Änderungen |
|-------|-----------|
| `src/data/solutionTiles.ts` | 4 Tool-Kacheln aktualisieren (IDs 38, 39, 40, 41) |

## Technische Details

### SolutionTileCard.tsx Anpassung

Falls `primaryCtaAction: 'disabled'` nicht existiert, muss ggf. die Komponente erweitert werden um den "Coming soon" Button zu deaktivieren. Alternative: CTA-Text auf "Coming soon" setzen und URL leeren—dann öffnet sich nichts beim Klick.

