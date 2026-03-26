

## Plan: FilloutEmbed Initialisierung fixen

### Problem
Die `FilloutEmbed`-Komponente hat ein Timing-Problem bei SPA-Navigation: Der `window.load` Event feuert nur einmal beim ersten Seitenaufruf. Bei späterer Navigation (z.B. zu `/solutions/revenue-architecture-system` oder `/go`) wird `initializeEmbeds()` nie aufgerufen, wenn das Fillout-Script noch nicht geladen war.

### Datei: `src/components/forms/FilloutEmbed.tsx` — useEffect (Zeilen 110–137)

**Fix:** Statt auf `window.load` zu hören, direkt den `onload`-Callback des Script-Elements nutzen und bei bereits geladenem Script einen Polling-Fallback einbauen:

1. Wenn Script neu eingefügt wird → `script.onload = initializeEmbeds`
2. Wenn Script bereits im DOM aber `Fillout` noch nicht verfügbar → kurzes Polling (alle 100ms, max 5s)
3. Wenn `Fillout` bereits verfügbar → sofort `initializeEmbeds()` aufrufen

Das stellt sicher, dass Embeds bei jeder SPA-Navigation korrekt initialisiert werden — sowohl auf der RAS-Seite als auch auf `/go`.

