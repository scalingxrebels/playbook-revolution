

## Plan: Kachel- und Landing-Page-Preview-Modals in der Content Registry

### Anforderung
Pro Eintrag in der Registry-Tabelle zwei Buttons: **"Kachel"** und **"Landing Page"**. Jeder oeffnet ein Modal mit einer Live-Vorschau der jeweiligen Komponente.

### Ansatz
Die existierenden Card-Komponenten (`SolutionTileCard`, `PlaybookCard`, `CaseCard`, `InsightArticleCard`) werden direkt im Modal gerendert. Fuer die Landing Page wird ein `<iframe>` verwendet, das die jeweilige Route laedt -- das ist der einzige praktikable Weg, eine vollstaendige Seite in einem Modal zu zeigen, ohne alle Seiten-Komponenten einzeln einzubinden.

### Aenderungen

**1. Neue Datei: `src/components/registry/ContentPreviewModal.tsx`**
- Generisches Modal mit zwei Varianten: `mode: 'card' | 'landing'`
- **Card-Mode**: Rendert die passende Card-Komponente basierend auf `contentType` (solution/playbook/case/insight) in einem zentrierten Container
- **Landing-Mode**: Rendert ein `<iframe src={landingUrl}>` mit voller Hoehe (~80vh)
- Nutzt die bestehende `Dialog`-Komponente aus `src/components/ui/dialog.tsx`

**2. Editieren: `src/pages/ContentRegistry.tsx`**
- "Links"-Spalte ersetzen durch **"Vorschau"**-Spalte mit zwei kompakten Buttons: `Kachel` und `Landing Page`
- State fuer Modal: `previewModal: { open: boolean, mode: 'card' | 'landing', contentType: string, item: any }`
- Buttons setzen den State, Modal rendert entsprechend
- Gilt fuer alle vier Tabs (Solutions, Playbooks, Cases, Insights)

### Technische Details

```text
Tabelle pro Tab:
  # | Titel | ... | Sichtbar | Vorschau
                                 [Kachel] [Landing Page]
                                   ↓           ↓
                              Modal mit      Modal mit
                              Card-Komp.     iframe auf
                              (400px breit)  Landing-URL
```

- Card-Rendering: Jede Card-Komponente hat leicht unterschiedliche Props -- das Modal mappt `contentType` auf die richtige Komponente und uebergibt die korrekten Props
- Landing-URLs: `/solutions` fuer Solutions (kein eigene Detailseite pro Tile), `/playbooks/{slug}` fuer Playbooks, `/cases/{slug}` fuer Cases, `/insights/{slug}` fuer Insights
- Solutions haben teils eigene Landing Pages via `primaryCtaUrl` -- diese werden bevorzugt

### Umfang
- 1 neue Datei, 1 editierte Datei
- Keine DB-Aenderungen

