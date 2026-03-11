

# GTM Stack Map 2026 — Landing Page + Solution Tile

## Zusammenfassung

Neue Landing Page `/solutions/gtm-stack-map` fuer den GTM Stack Map 2026 Lead Magnet (TOFU, Free). Dazu eine neue Kachel (ID 46) im Solutions Hub. Die LP weicht bewusst vom Standard-7-Section-Muster ab — sie ist ein **Utility-First Lead Magnet** mit Inline-Form statt Booking-Modal.

---

## Architektur

```text
src/
├── pages/
│   └── GTMStackMap.tsx              (Landing Page, ~400 Zeilen)
├── data/
│   └── solutionTiles.ts             (neue Kachel ID 46)
├── App.tsx                          (neue Route)
├── data/seoRegistry.ts              (SEO-Eintrag)
├── data/breadcrumbRegistry.ts       (Breadcrumb-Eintrag)
```

---

## Landing Page Struktur (5 Sections)

Die Seite folgt dem Briefing exakt, adaptiert in das bestehende Deep Space Design-System:

### Section 1: Hero (Above the Fold)
- Deep Space Hintergrund (wie alle Solution LPs)
- Breadcrumb: Home > Solutions > GTM Stack Map 2026
- Badge: `Free · Lead Magnet · TOFU`
- Headline: "Der GTM Stack 2026."
- Subline: "Alle Tools. Alle Layer. Eine Uebersicht — fuer B2B SaaS Teams, die aufhoeren wollen zu raten."
- **Inline Lead Form**: Vorname + Email (2 Felder) + CTA Button
- Trust Signal: "Bereits von 200+ GTM-Teams genutzt"
- Kein Booking-Modal — stattdessen direkte Form-Submission die Lead in die DB schreibt und Download-Link zeigt

### Section 2: Was du bekommst (Benefits)
- `bg-muted/30` Hintergrund (light section)
- 5 Benefit-Bullets mit Check-Icons
- Zentriertes Layout

### Section 3: Fuer wen (ICP-Qualifizierung)
- Weisser Hintergrund
- 3 Kacheln horizontal (responsive: vertikal auf Mobile)
- Persona-basierte Qualifizierung

### Section 4: Social Proof
- `bg-muted/30` Hintergrund
- 2 Testimonial-Kacheln
- Anonymisierte Quotes

### Section 5: CTA Repeat
- Deep Space Hintergrund
- Zweite Inline-Form (Vorname + Email)
- "Kein Spam. Kein Pitch. Nur die Map."

---

## Lead-Capture Logik

- Inline-Form (kein Modal, kein Fillout)
- Schreibt in die bestehende `leads` Tabelle via Supabase
- Nach Submission: Zeigt Download-Link / oeffnet PDF
- Download-Asset: `public/downloads/gtm-stack-map-2026.pdf` (Placeholder — muss spaeter mit echtem PDF ersetzt werden)
- source: `gtm-stack-map`
- Validierung via Zod (email required, name optional)

---

## Solution Tile (ID 46)

```text
id: 46
slug: gtm-stack-map
solutionType: tools (orange border, gradient button)
challenges: [cac-crisis, growth-stalled, scaling-chaos, ai-transformation, orientation]
price: Free
priceTag: free
headlineEn: GTM Stack Map 2026
headlineDe: GTM Stack Map 2026
primaryCtaAction: learn-more
primaryCtaUrl: /solutions/gtm-stack-map
```

---

## Aenderungen an bestehenden Dateien

| Datei | Aenderung |
|---|---|
| `solutionTiles.ts` | Neue Kachel ID 46 am Ende einfuegen |
| `App.tsx` | Lazy import + Route `/solutions/gtm-stack-map` |
| `seoRegistry.ts` | SEO-Eintrag fuer `/solutions/gtm-stack-map` |
| `breadcrumbRegistry.ts` | Breadcrumb-Pfad einfuegen |

---

## Bilinguale Inhalte

Die LP ist primaer Deutsch (wie im Briefing), aber alle Texte werden bilingual (DE/EN) angelegt fuer Konsistenz mit dem Rest der Site.

---

## Was NICHT enthalten ist

- Echtes PDF (wird als Placeholder-Datei angelegt)
- Unscharfes Preview-Visual der Map (kein Bild vorhanden — Text-only Hero)
- ActiveCampaign/Newsletter-Anbindung
- A/B Testing der Form

