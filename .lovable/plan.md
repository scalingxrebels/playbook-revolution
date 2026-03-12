

## Plan: Revenue Architecture Kachel — TM entfernen + Link fixen

### 1. TM-Symbol entfernen
**Datei:** `src/data/solutionTiles.ts`, Zeilen 1699-1700
- `'The Revenue Architecture System™'` → `'The Revenue Architecture System'` (beide Sprachen)

### 2. Link-Navigation fixen
**Datei:** `src/components/solutions/SolutionTileCard.tsx`
- `useNavigate` von react-router-dom importieren
- Im `handlePrimaryClick` den `learn-more`-Fall explizit mit `navigate(tile.primaryCtaUrl)` behandeln statt `window.location.href` (was einen vollen Page-Reload verursacht und in der SPA-Navigation Probleme machen kann)

### Umfang
- 2 Dateien, je 2-3 Zeilen

