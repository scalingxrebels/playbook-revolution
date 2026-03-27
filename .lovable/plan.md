

## Analyse: Name-Zeile "unruhig"

Das Problem: Drei visuell konkurrierende Elemente in einer Zeile — fetter Name (text-2xl), farbiges "M.A. HSG" (text-lg, accent-orange), LinkedIn-Icon. Unterschiedliche Größen, Farben und Gewichte erzeugen visuelle Unruhe.

### Vorschlag: Hierarchie beruhigen

`src/components/homepage/HomeTeam.tsx` Z.68-73:

| Element | Aktuell | Neu |
|---|---|---|
| M.A. HSG | `text-accent text-lg font-normal` | `text-muted-foreground text-base font-normal` — dezenter, gleiche Farbfamilie wie Fließtext |
| LinkedIn-Icon | `text-muted-foreground` h-4 w-4 | `text-muted-foreground/50` h-3.5 w-3.5 — etwas kleiner und blasser |
| Gap | `gap-2` | `gap-1.5` — etwas enger zusammen |

Ergebnis: Name dominiert klar, "M.A. HSG" ist lesbar aber untergeordnet, LinkedIn-Icon ist dezent vorhanden. Eine ruhige Leserichtung statt drei gleichwertige Akzente.

1 Datei, 1 Stelle.

