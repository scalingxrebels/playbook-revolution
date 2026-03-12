

## Plan: Content Registry + Hidden-Flag System

### Was gebaut wird
Eine geschützte Admin-Seite `/content-registry` mit einer tabellarischen Übersicht aller Inhalts-Kacheln aus 4 Kategorien (Solutions, Playbooks, Cases, Insights). Jede Zeile zeigt: Titel, Kategorie, Typ, Status (live/hidden), Landing-Page-URL und Quick-Links zum Ansehen. Der `hidden`-Flag steuert gleichzeitig die Sichtbarkeit auf den öffentlichen Seiten.

### Betroffene Dateien und Änderungen

**1. Daten-Interfaces erweitern** (4 Dateien)
- `src/data/solutionTiles.ts`: `hidden?: boolean` zum `SolutionTile`-Interface + `visibleSolutionTiles` Export + Helper-Funktionen filtern hidden raus
- `src/data/playbooks.ts`: `hidden?: boolean` zum `Playbook`-Interface + `visiblePlaybooks` Export
- `src/data/insights.ts`: `hidden?: boolean` zu allen Insight-Interfaces + `visibleInsights` Export
- `src/data/cases/types.ts`: `hidden?: boolean` zum `ClientCaseStudy`-Interface

**2. Öffentliche Seiten aktualisieren** (4 Dateien)
- `src/pages/Solutions.tsx`: `solutionTiles` durch `visibleSolutionTiles` ersetzen (Import + Zähler)
- `src/pages/Playbooks.tsx`: `playbooks` durch `visiblePlaybooks` ersetzen
- `src/pages/Insights.tsx`: gefilterte Insights verwenden
- `src/pages/Cases.tsx`: gefilterte Cases verwenden

**3. Registry-Seite erstellen** (1 neue Datei)
- `src/pages/ContentRegistry.tsx`:
  - Admin-geschützt (nutzt bestehenden `useAuth` Hook mit `isAdmin`-Check)
  - Tab-Navigation: Solutions | Playbooks | Cases | Insights
  - Tabelle pro Kategorie mit Spalten: Titel (DE), Typ/Tier, Status-Badge (live/hidden), Landing-Page-URL, Links (Kachel ansehen, Landing Page öffnen)
  - Rein lesend — kein Schreibzugriff, nur Übersicht
  - Daten kommen direkt aus den statischen Arrays (kein Backend nötig)

**4. Route registrieren**
- `src/App.tsx`: Route `/content-registry` mit lazy-loaded `ContentRegistry`

### Technische Details
- Kein Datenbank-Change nötig — alles bleibt in den statischen TS-Dateien
- Auth-Schutz über bestehenden `useAuth().isAdmin`-Check (Redirect zu `/auth` wenn nicht eingeloggt)
- Landing-Page-URLs werden aus `primaryCtaUrl` (Solutions), `slug` (Playbooks/Cases), bzw. fest definierten Pfaden abgeleitet
- Die Registry zeigt die vollständige Liste inkl. hidden Items; öffentliche Seiten zeigen nur `!hidden`

