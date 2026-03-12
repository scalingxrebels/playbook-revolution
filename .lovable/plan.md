

## Plan: Content Registry perfektionieren (3 offene Punkte)

### 1. Insights-Tab: Landing-Page-Spalte ergaenzen
Der Insights-Tab hat aktuell keine "Landing Page"-Spalte -- im Gegensatz zu Solutions, Playbooks und Cases. Fix: Spalte `Landing Page` mit `code`-Block (`/insights/{slug}`) einfuegen, analog zu den anderen Tabs.

**Datei:** `src/pages/ContentRegistry.tsx` (Insights-Tabelle, Zeilen 242-269)
- Neue `<TableHeader>Landing Page</TableHeader>` nach "Status"
- Neue `<td>` mit `<code>/insights/{item.slug}</code>` pro Zeile

### 2. Status-Filter in der Registry
Einfacher Filter oberhalb der Tabellen: "Alle | Live | Hidden" als Toggle-Group oder Chip-Leiste. Filtert die angezeigte Liste innerhalb des aktiven Tabs.

**Datei:** `src/pages/ContentRegistry.tsx`
- State `statusFilter: 'all' | 'live' | 'hidden'` hinzufuegen
- Drei Filter-Buttons ueber den Tabs (oder innerhalb jedes Tabs)
- Jede Tabelle filtert ihr Array via `useMemo` basierend auf `statusFilter`
- Summary Cards bleiben ungefiltert (zeigen immer Gesamtzahlen)

### 3. Kein Toggle zum Umschalten
Da die Daten in statischen TS-Dateien liegen, ist ein UI-Toggle ohne Backend nicht persistent. **Empfehlung:** Diesen Punkt bewusst auslassen -- ein Toggle wuerde eine Datenbank-Tabelle erfordern, was den Scope deutlich vergroessert. Stattdessen im aktuellen Scope nur die zwei obigen Punkte umsetzen.

### Zusammenfassung der Aenderungen
- **1 Datei** wird editiert: `src/pages/ContentRegistry.tsx`
- Keine neuen Dateien, kein Backend-Change
- Aenderungen: ~30 Zeilen (Filter-State + Filter-UI + Insights-Spalte)

