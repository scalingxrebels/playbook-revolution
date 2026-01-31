
# Dark Hero Pattern: Theme-Scope für alle Hero-Sektionen

## Das Problem

Im Light Mode passiert folgendes:
- Der dunkle Hintergrund (`#0A0A0F`) bleibt
- Aber `text-foreground` wird dunkel (fast schwarz)
- `text-muted-foreground` wird grau
- → Schlechter Kontrast, kaum lesbar

## Die Lösung: Scoped Dark Theme

Wir erstellen eine CSS-Utility-Klasse `.dark-section`, die lokal die Dark-Mode CSS-Variablen erzwingt. So bleibt der Hero immer im "Dark Mode", unabhängig vom globalen Theme.

### Technischer Ansatz

**1. Neue CSS-Klasse in `src/index.css`:**

```css
/* Scoped Dark Theme für Hero Sections */
.dark-section {
  --background: 240 15% 6%;
  --foreground: 40 20% 95%;
  --card: 240 12% 9%;
  --card-foreground: 40 20% 95%;
  --muted: 240 10% 16%;
  --muted-foreground: 40 10% 55%;
  --border: 240 10% 18%;
  /* Alle Dark-Mode Variablen hier */
}
```

**2. Anwendung auf Hero-Komponenten:**

| Komponente | Änderung |
|------------|----------|
| `HeroOptimized.tsx` | `className="... dark-section"` |
| `SharedHero.tsx` | `className="... dark-section"` (bei variant='dark') |
| `PlaybookHeroSection.tsx` | `className="... dark-section"` |
| `ResearchHeroSection.tsx` | `className="... dark-section"` |
| Boost/PowerUp Hero Sections | `className="... dark-section"` |

## Betroffene Dateien

| Datei | Änderung |
|-------|----------|
| `src/index.css` | Neue `.dark-section` Utility-Klasse |
| `src/components/homepage/HeroOptimized.tsx` | Klasse hinzufügen |
| `src/components/shared/SharedHero.tsx` | Klasse hinzufügen |
| `src/components/playbooks/sections/PlaybookHeroSection.tsx` | Klasse hinzufügen |
| `src/components/research/sections/ResearchHeroSection.tsx` | Klasse hinzufügen |
| ~15 weitere Hero-Sektionen in Boost/PowerUp/Solution Pages | Klasse hinzufügen |

## Ergebnis

- **Light Mode**: Hero bleibt dunkel mit korrektem Kontrast (heller Text)
- **Dark Mode**: Keine Änderung (funktioniert bereits)
- **Konsistenz**: Alle Heroes folgen dem gleichen Pattern
- **Wartbarkeit**: Eine CSS-Klasse statt manuelle Farb-Overrides

## Vorteile dieses Ansatzes

1. **CSS-native Lösung** - Keine React-Props oder Konditionale
2. **Kaskadierend** - Alle Child-Elemente erben automatisch die korrekten Farben
3. **Erweiterbar** - Andere Sektionen können dieselbe Klasse nutzen
4. **Performance** - Keine JS-Berechnungen zur Laufzeit
