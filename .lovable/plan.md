

# GTM Stack Map: Inline-Form → FilloutDownloadModal

## Problem
Die GTM Stack Map nutzt ein eigenes Inline-Formular mit direktem Supabase-Insert. Alle anderen Download-Flows (Playbooks, Research, Cases) nutzen die `FilloutDownloadModal`-Komponente mit Fillout-Iframe und URL-Parametern. Das ist inkonsistent.

## Aenderungen

### 1. Download Registry (`src/data/downloadRegistry.ts`)

Neuen Lead-Magnet-Asset-Eintrag hinzufuegen (vor den Book-Assets, Zeile 551):

```typescript
export const leadMagnetAssets: DownloadAsset[] = [
  {
    id: 'lead-magnet-gtm-stack-map',
    type: 'sample',
    slug: 'gtm-stack-map',
    titleEn: 'GTM Stack Map 2026',
    titleDe: 'GTM Stack Map 2026',
    fileName: 'gtm-stack-map-2026.pdf',
    filePath: '/downloads/gtm-stack-map-2026.pdf',
    requiresEmail: true,
    isAvailable: true,
    category: 'lead-magnet',
  },
];
```

Combined registry (Zeile 573) erweitern: `...leadMagnetAssets,` einfuegen.

### 2. GTM Stack Map Page (`src/pages/GTMStackMap.tsx`)

- **Entfernen**: Komplettes `InlineLeadForm` (Zeilen 41-153), `Input`-Import, `supabase`-Import, `toast`-Import
- **Hinzufuegen**: `FilloutDownloadModal`-Import + `getAssetById`-Import
- **Hero Section**: Form ersetzen durch einen CTA-Button der `setIsDownloadModalOpen(true)` aufruft (analog `PlaybookFinalCTASection`)
- **CTA Repeat Section**: Gleicher Button statt Form
- **Page-Komponente**: `FilloutDownloadModal` mit `asset={getAssetById('lead-magnet-gtm-stack-map')}` einbinden

Die URL-Parameter werden automatisch vom `FilloutDownloadModal` gesetzt:
- `Asset_ID=lead-magnet-gtm-stack-map`
- `Asset_Name=GTM Stack Map 2026`
- `Download_URL=https://...scalingx.io/downloads/gtm-stack-map-2026.pdf`
- `Asset_Type=sample`
- Plus alle UTM-Parameter aus sessionStorage

### Dateien

| Datei | Aenderung |
|---|---|
| `src/data/downloadRegistry.ts` | Neuer `leadMagnetAssets` Array + Registry erweitern |
| `src/pages/GTMStackMap.tsx` | InlineLeadForm entfernen, FilloutDownloadModal + CTA-Buttons einbauen |

