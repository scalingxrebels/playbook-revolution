

## Plan: Revenue Architecture Kachel als "featured" markieren

### 1. `featured`-Flag zum Interface hinzufügen
**Datei:** `src/data/solutionTiles.ts`
- `SolutionTile`-Interface um `featured?: boolean` erweitern
- Bei Tile ID 47 `featured: true` setzen

### 2. Sortierung im Grid: Featured immer oben
**Datei:** `src/pages/Solutions.tsx`
- Nach dem Filtern die Tiles sortieren: `featured: true` zuerst, Rest in bestehender Reihenfolge

### 3. Visuelle Hervorhebung der Featured-Kachel
**Datei:** `src/components/solutions/SolutionTileCard.tsx`
- Wenn `tile.featured`: dezenter Akzent-Rahmen oder Badge ("Featured" / "Neu") zur Unterscheidung

### Umfang
- 3 Dateien, kleine Änderungen

