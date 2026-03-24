

## Problem: Route-Kollision

Die Route `/solutions/:category` (Zeile 127) fängt `/solutions/revenue-architecture-system` ab, **bevor** die spezifische Route (Zeile 205) erreicht wird. React Router matcht Routen in der definierten Reihenfolge — der `:category`-Wildcard greift zuerst.

Das Ergebnis: Die `SolutionCategory`-Seite sucht nach `revenue-architecture-system` in `solutionCategories`, findet es nicht, und zeigt "Category not found".

---

### Fix

**Datei:** `src/App.tsx`

Die spezifische Route `/solutions/revenue-architecture-system` (Zeile 205) muss **vor** die generische Route `/solutions/:category` (Zeile 127) verschoben werden.

Konkret: Zeile 205 löschen und stattdessen vor Zeile 127 einfügen:

```text
<Route path="/solutions/revenue-architecture-system" element={<RevenueArchitectureSystem />} />
<Route path="/solutions/:category" element={<SolutionCategory />} />
```

Das ist ein Einzeiler-Fix — nur die Reihenfolge ändern.

