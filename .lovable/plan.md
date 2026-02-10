
# Research Download-Buttons mit Lead-Gate verbinden

## Zusammenfassung

Zwei Komponenten muessen mit dem bestehenden `FilloutDownloadModal` verbunden werden, damit auf allen 4 Expertise-Seiten (AMF, ANST, SST, Unified) die Download-Buttons das Lead-Gate-Formular oeffnen.

---

## Aenderung 1: ResearchDownloadSection aktivieren

**Datei:** `src/components/research/sections/ResearchDownloadSection.tsx`

- Neuen Prop `researchType` hinzufuegen (gleich wie bei `ResearchFinalCTASection`)
- `FilloutDownloadModal` importieren + `useState` fuer Modal-State
- Den aktuell `disabled` Button aktivieren und mit `onClick={() => setIsDownloadModalOpen(true)}` versehen
- "Coming Soon" Badge und `disabled`-Attribut entfernen
- Asset-Lookup ueber `getAssetById('research-{researchType}')` aus der Registry

## Aenderung 2: ResearchHeroSection Download-Button

**Datei:** `src/components/research/sections/ResearchHeroSection.tsx`

- Neuen Prop `researchType` hinzufuegen
- `FilloutDownloadModal` importieren + `useState`
- Den `secondaryCta`-Button (aktuell `<a href="..." target="_blank">`) nur dann als Modal-Trigger rendern, wenn der `href` auf `#download` zeigt (das ist der Fall bei AMF, ANST, SST)
- Fuer andere `href`-Werte (z.B. externe Links) bleibt der Button ein normaler Link
- Asset-Lookup gleich wie oben

## Aenderung 3: Props durchreichen in allen 4 Landing Pages

Die `researchType`-Prop muss von den Landing-Page-Komponenten an die Hero- und Download-Sections weitergereicht werden:

| Datei | researchType |
|---|---|
| `ResearchLandingPage.tsx` (AMF) | `'amf'` |
| `ANSTLandingPage.tsx` | `'anst'` |
| `SSTLandingPage.tsx` | `'sst'` |
| `UnifiedFrameworkLandingPage.tsx` | `'unified'` |

Jede dieser Dateien reicht `researchType` an `<ResearchHeroSection>` und `<ResearchDownloadSection>` weiter.

---

## Technische Details

```text
Asset-ID Mapping (identisch zu ResearchFinalCTASection):
  amf     → research-amf     → /downloads/research/amf-executive-summary.pdf
  anst    → research-anst    → /downloads/research/anst-executive-summary.pdf
  sst     → research-sst     → /downloads/research/sst-executive-summary.pdf
  unified → research-unified → /downloads/research/architecture-v4.5.1.pdf
```

Alle 4 Assets sind in der `downloadRegistry.ts` bereits als `isAvailable: true` und `requiresEmail: true` konfiguriert -- keine Aenderungen an der Registry noetig.

---

## Betroffene Dateien (6)

1. `src/components/research/sections/ResearchDownloadSection.tsx` -- Modal-Integration + Button aktivieren
2. `src/components/research/sections/ResearchHeroSection.tsx` -- Modal-Integration fuer secondaryCta
3. `src/components/research/ResearchLandingPage.tsx` -- researchType an Hero + Download weiterreichen
4. `src/components/research/ANSTLandingPage.tsx` -- researchType weiterreichen
5. `src/components/research/SSTLandingPage.tsx` -- researchType weiterreichen
6. `src/components/research/UnifiedFrameworkLandingPage.tsx` -- researchType weiterreichen
