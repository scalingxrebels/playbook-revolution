

## Plan: Client-Ticker von Cases auf Home übernehmen

### Ansatz

Den Ticker-Code aus `Cases.tsx` (Z.98-127) als eigenständige Komponente extrahieren und auf der Home-Seite direkt unter `HomeHero` einfügen.

### Dateien

| Datei | Änderung |
|---|---|
| `src/components/ClientTicker.tsx` | Neue Komponente: Ticker-Markup aus Cases extrahiert (clientNames-Array, Label, Marquee-Animation) |
| `src/pages/Index.tsx` | Nach `<HomeHero />` einfügen: `<ClientTicker />` |
| `src/pages/Cases.tsx` | Import + Nutzung von `<ClientTicker />` statt Inline-Code (optional, Refactor) |

### Komponente `ClientTicker.tsx`

- Übernimmt 1:1 das Layout aus Cases: statisches Label links ("Mit wem wir gearbeitet haben"), Marquee-Scroll rechts mit Fade-Mask
- `clientNames`-Array wird in die Komponente verschoben
- Styling: `border-y border-border py-4 bg-background/50`
- Animation: `animate-marquee` (bereits in Tailwind config definiert)

3 Dateien. 1 neue Komponente, 2 Imports.

