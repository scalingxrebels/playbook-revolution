

# Expertise zurück in die Navigation

## Problem
Bei der Insights-Umstellung wurde "Expertise" durch "Insights" ersetzt — sowohl in Navigation als auch Footer. Die Expertise-Seiten existieren noch, sind aber nicht mehr erreichbar über die Navigation.

## Loesung
Expertise als eigenen Nav-Punkt wieder einfuegen. Die Navigation wird:

```
Home | Solutions | Playbooks | Insights | Cases | Expertise | About
```

## Aenderungen

| Datei | Aenderung |
|---|---|
| `Navigation.tsx` | `{ key: 'nav.expertise', href: '/expertise', label: 'Expertise', isRoute: true }` nach Cases einfuegen |
| `Footer.tsx` | `{ label: 'Expertise', href: '/expertise' }` in sitemapLinks nach Cases einfuegen |

Zwei Zeilen, zwei Dateien. Keine weiteren Aenderungen noetig.

