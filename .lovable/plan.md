

## Plan: Hero-Headline von 3 auf 2 Zeilen reduzieren

`src/components/homepage/HomeHero.tsx` Z.64-80:

Die ersten beiden `<span className="block">` werden zu einem zusammengefasst:

| Zeilen | Alt | Neu |
|---|---|---|
| Z.65-74 | 2 separate spans: `Deine Strategie funktioniert` + `auf Slides.` | 1 span: `Deine Strategie funktioniert auf Slides.` / `Your strategy works on the slide deck.` |
| Z.75-79 | Bleibt | `Aber nicht in der Realität.` / `Not in reality.` |

1 Datei, Headline-Block vereinfachen.

