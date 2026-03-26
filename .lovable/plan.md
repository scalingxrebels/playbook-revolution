## Plan: FM Hero-Layout für ML übernehmen

### Was FM besser macht


| Element    | ML (aktuell)                                               | FM (Vorbild)                                                     |
| ---------- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| Layout     | `grid md:grid-cols-[2fr_3fr]` — Foto klein, Text dominiert | `grid lg:grid-cols-2` — gleichwertig                             |
| Foto       | `w-64 h-64 md:w-80 md:h-80` (max 320px quadratisch)        | `aspect-[3/4] max-w-md` (gross, Portrait-Format)                 |
| Foto-Style | `rounded-2xl border-primary/30 shadow-glow`                | `rounded-3xl border-accent/30 shadow-accent-glow` + Glow-Element |
| Overline   | Nur Kleintext-Label                                        | Dekorative Linien + farbiger Text                                |
| Struktur   | Badges + Formula + CTA dicht gestapelt                     | Klar getrennte Blöcke, mehr Breathing Room                       |


### Änderung in `src/pages/ML.tsx` (Hero-Section, Z.217-295)

1. **Grid**: `grid md:grid-cols-[2fr_3fr]` → `grid lg:grid-cols-2 gap-12`
2. **Foto-Container**: Quadratisch mit fester Grösse → `aspect-[3/4] max-w-md w-full` mit `rounded-3xl border-2 border-accent/30 shadow-accent-glow` + Glow-Blur-Element dahinter
3. **Text-Seite**: `space-y-8` für mehr Luft zwischen H1, Subline, Badges, CTA
4. **Inhalt bleibt identisch** — nur Layout/Styling ändert sich

### Betroffene Datei


| Datei              | Änderung                                                     |
| ------------------ | ------------------------------------------------------------ |
| `src/pages/ML.tsx` | Hero-Section Z.217-295: Grid, Foto-Container, Overline-Style |


1 Datei. Nur Layout-Änderungen, keine inhaltlichen Änderungen.