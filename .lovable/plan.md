
# Plan: Playbooks & Expertise Heroes an Solutions angleichen

## Ziel

Die Hero-Sektionen von Playbooks und Expertise (Research Hub) strukturell an Solutions angleichen:
- Hero als eigenständige Komponente (nicht in extra Section gewrappt)
- Filter/Search in separater Section mit `bg-muted/30 border-y border-border` Styling
- Klare visuelle Trennung zwischen Hero und Content

---

## Teil 1: PlaybookLibrary.tsx anpassen

### Aktuelle Struktur (problematisch)
```
<section className="pb-20 bg-background relative overflow-hidden">
  <SharedHero ... />        ← Hero drin
  <div>Search</div>         ← Filter drin
  <div>Filters</div>        ← Filter drin
  <div>Grid</div>           ← Content drin
</section>
```

### Neue Struktur (wie Solutions)
```
<SharedHero ... />                                           ← Standalone
<section className="py-6 md:py-8 bg-muted/30 border-y border-border">
  <div>Search</div>
  <div>Onboarding Hint</div>
  <div>Filters</div>
  <div>Results Count</div>
</section>
<section className="py-12 md:py-16">
  <div>Grid</div>
</section>
```

### Änderungen
1. `SharedHero` aus der Section herausnehmen - eigenständig rendern
2. Neue Section für Filter mit `bg-muted/30 border-y border-border`
3. Grid in eigene Section verschieben
4. Empty State in Grid-Section belassen

---

## Teil 2: ResearchHub.tsx anpassen

### Aktuelle Struktur
```
<section className="pb-16">
  <SharedHero ... />        ← Hero drin
  <div>Content Cards</div>  ← Content drin
</section>
```

### Neue Struktur
```
<SharedHero ... />                                           ← Standalone
<section className="py-12 md:py-16">
  <div>Content Cards</div>
</section>
```

### Änderungen
1. `SharedHero` aus der Section herausnehmen - eigenständig rendern
2. Content in eigene Section mit `py-12 md:py-16` verschieben
3. Konsistente Container-Größe (`max-w-7xl`) verwenden

---

## Datei-Übersicht

| Datei | Aktion | Beschreibung |
|-------|--------|--------------|
| `src/components/PlaybookLibrary.tsx` | Bearbeiten | Hero separieren, Filter-Section mit Solutions-Styling |
| `src/components/ResearchHub.tsx` | Bearbeiten | Hero separieren, Content in eigene Section |

---

## Erwartetes Ergebnis

Nach der Anpassung haben alle drei Seiten dieselbe visuelle Struktur:

```
┌─────────────────────────────────────┐
│         SharedHero (Dark Space)     │  ← Eigenständig
├─────────────────────────────────────┤
│    Filter Section (bg-muted/30)     │  ← Separate Section mit Border
├─────────────────────────────────────┤
│         Content Grid/Cards          │  ← Eigene Section
└─────────────────────────────────────┘
```

Visuell: Klare horizontale Trennung zwischen Hero, Filtern und Content durch die `border-y` und `bg-muted/30` Styling.
