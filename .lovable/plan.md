

# Plan: Download-System Erweiterung - 4 Bereiche

## Zusammenfassung

Verknüpfung des Fillout-Download-Systems mit 4 Bereichen:

| Bereich | Aktueller Status | Änderung |
|---------|------------------|----------|
| 1. Playbook-Kacheln Template Button | Toast-Nachricht | FilloutDownloadModal öffnen |
| 2. Expertise Final CTA | Direkter Link zu `#download` | FilloutDownloadModal öffnen |
| 3. Case Detail PDF Download | Direkter `<a href>` Download | FilloutDownloadModal öffnen |
| 4. Case-Kacheln im Grid | Nur "Read Case" Button | Secondary CTA "Download PDF" hinzufügen |

---

## Fix 1: Playbook-Kacheln Template Button

### Problem
Der `onDownload` Handler in `PlaybookCard.tsx` zeigt aktuell nur einen Toast:

```typescript
// PlaybookLibrary.tsx (Zeile 33-39)
const handleDownloadTemplate = (playbook: Playbook) => {
  toast({
    title: language === 'en' ? 'Template Download' : 'Vorlage Download',
    description: language === 'en' 
      ? `"${playbook.title.en}" template will be available soon.`
      : `"${playbook.title.de}" Vorlage wird bald verfügbar sein.`,
  });
};
```

### Lösung

**Datei: `src/components/PlaybookLibrary.tsx`**

1. Import `FilloutDownloadModal` und `getAssetById` hinzufügen
2. State für Modal und ausgewähltes Asset hinzufügen
3. `handleDownloadTemplate` Funktion ändern, um Modal zu öffnen

```typescript
import { useState } from 'react';
import FilloutDownloadModal from '@/components/forms/FilloutDownloadModal';
import { getAssetById, DownloadAsset } from '@/data/downloadRegistry';

// In der Komponente:
const [downloadAsset, setDownloadAsset] = useState<DownloadAsset | null>(null);
const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

const handleDownloadTemplate = (playbook: Playbook) => {
  // Asset-ID aus Playbook-Slug generieren
  const assetId = `playbook-${playbook.slug.replace('/', '-').replace('growth-engines/', '').replace('operating-systems/', '').replace('board-governance/', '')}`;
  const asset = getAssetById(assetId);
  
  if (asset && asset.isAvailable) {
    setDownloadAsset(asset);
    setIsDownloadModalOpen(true);
  } else {
    // Fallback: Toast zeigen wenn Asset nicht verfügbar
    toast({
      title: language === 'en' ? 'Coming Soon' : 'Bald verfügbar',
      description: language === 'en' 
        ? `"${playbook.title.en}" template will be available soon.`
        : `"${playbook.title.de}" Vorlage wird bald verfügbar sein.`,
    });
  }
};

// Am Ende der Komponente:
<FilloutDownloadModal
  asset={downloadAsset}
  isOpen={isDownloadModalOpen}
  onClose={() => setIsDownloadModalOpen(false)}
/>
```

### Mapping Playbook-Slug zu Asset-ID

| Playbook Slug | Asset ID |
|---------------|----------|
| `ai-native-scaling` | `playbook-ai-native-scaling` |
| `growth-engines` | `playbook-growth-engines` |
| `growth-engines/gtm-revenue` | `playbook-gtm-revenue` |
| `operating-systems` | `playbook-operating-systems` |
| `board-governance` | `playbook-board-governance` |
| etc. | etc. |

---

## Fix 2: Expertise CTA "Research herunterladen"

### Problem
Der Secondary CTA in `ResearchFinalCTASection.tsx` ist ein direkter Link:

```typescript
// Zeile 102-112
<Button size="lg" variant="outline" asChild>
  <a href={data.secondaryCta.href} target="_blank" rel="noopener noreferrer">
    <Download className="w-4 h-4 mr-2" />
    {data.secondaryCta.text[language]}
  </a>
</Button>
```

Aktuell zeigt `secondaryCta.href` auf `#download` (siehe anst.ts Zeile 84).

### Lösung

**Datei: `src/components/research/sections/ResearchFinalCTASection.tsx`**

1. Import `FilloutDownloadModal` und `getAssetById` hinzufügen
2. State für Modal hinzufügen
3. Button-Klick auf Modal-Öffnung ändern
4. Asset-ID aus Props oder URL-Slug ableiten

```typescript
import { useState } from 'react';
import FilloutDownloadModal from '@/components/forms/FilloutDownloadModal';
import { getAssetById, DownloadAsset } from '@/data/downloadRegistry';

// Props erweitern:
interface ResearchFinalCTASectionProps {
  data: FinalCTAData;
  researchType?: 'amf' | 'anst' | 'sst' | 'unified'; // NEU
}

// In der Komponente:
const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

// Asset-ID mapping
const assetIdMap: Record<string, string> = {
  'amf': 'research-amf',
  'anst': 'research-anst',
  'sst': 'research-sst',
  'unified': 'research-unified',
};
const assetId = researchType ? assetIdMap[researchType] : null;
const downloadAsset = assetId ? getAssetById(assetId) : null;

// Secondary CTA Button ändern:
<Button
  size="lg"
  variant="outline"
  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
  onClick={() => setIsDownloadModalOpen(true)}
>
  <Download className="w-4 h-4 mr-2" />
  {data.secondaryCta.text[language]}
</Button>

// Am Ende:
<FilloutDownloadModal
  asset={downloadAsset}
  isOpen={isDownloadModalOpen}
  onClose={() => setIsDownloadModalOpen(false)}
/>
```

**Zusätzlich: Research-Seiten anpassen**

Jede Research-Seite muss den `researchType` Prop übergeben:
- `ExpertiseAMF.tsx` → `researchType="amf"`
- `ExpertiseANST.tsx` → `researchType="anst"`
- `ExpertiseSST.tsx` → `researchType="sst"`
- `ExpertiseUnifiedFramework.tsx` → `researchType="unified"`

---

## Fix 3: Case Detail PDF Download Button

### Problem
Der Download-Button in `CaseDetail.tsx` ist ein direkter Link:

```typescript
// Zeile 97-107
{caseStudy.downloadUrl && (
  <div className="flex justify-center">
    <Button asChild variant="outline" size="lg">
      <a href={caseStudy.downloadUrl} download>
        <Download className="w-5 h-5 mr-2" />
        {language === 'de' ? 'Case Study PDF herunterladen' : 'Download Case Study PDF'}
      </a>
    </Button>
  </div>
)}
```

### Lösung

**Datei: `src/pages/CaseDetail.tsx`**

1. Import `FilloutDownloadModal` und `getAssetById`
2. State für Modal hinzufügen
3. Button onClick-Handler statt `<a href>`

```typescript
import { useState } from 'react';
import FilloutDownloadModal from '@/components/forms/FilloutDownloadModal';
import { getAssetById, DownloadAsset } from '@/data/downloadRegistry';

// In der Komponente:
const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

// Asset-ID aus Case-Slug
const assetId = `case-${caseStudy.slug}`;
const downloadAsset = getAssetById(assetId);

// Button ändern (Zeile 97-107):
{caseStudy.downloadUrl && downloadAsset && (
  <div className="flex justify-center">
    <Button 
      variant="outline" 
      size="lg"
      onClick={() => setIsDownloadModalOpen(true)}
    >
      <Download className="w-5 h-5 mr-2" />
      {language === 'de' ? 'Case Study PDF herunterladen' : 'Download Case Study PDF'}
    </Button>
  </div>
)}

// Am Ende der Komponente (vor </div>):
<FilloutDownloadModal
  asset={downloadAsset}
  isOpen={isDownloadModalOpen}
  onClose={() => setIsDownloadModalOpen(false)}
/>
```

---

## Fix 4: Case-Kacheln im Grid - Secondary CTA hinzufügen

### Problem
`CaseCard.tsx` hat aktuell nur einen "Read Case" Button:

```typescript
// Zeile 77-87
<Button asChild variant="default" size="sm" className="w-full bg-primary text-primary-foreground">
  <Link to={`/cases/${caseStudy.slug}`}>
    {language === 'de' ? 'Case lesen' : 'Read Case'}
    <ArrowRight className="w-4 h-4 ml-2" />
  </Link>
</Button>
```

### Lösung

**Datei: `src/components/cases/CaseCard.tsx`**

1. Import `FilloutDownloadModal` und `getAssetById`
2. Import `Download` Icon
3. State für Modal hinzufügen
4. Zweiten Button hinzufügen (analog zu Playbook-Kacheln)
5. Layout auf `flex gap-2` ändern

```typescript
import { useState } from 'react';
import { ArrowRight, TrendingUp, Download } from 'lucide-react';
import FilloutDownloadModal from '@/components/forms/FilloutDownloadModal';
import { getAssetById, DownloadAsset } from '@/data/downloadRegistry';

// In der Komponente:
const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

// Asset-ID aus Case-Slug
const assetId = `case-${caseStudy.slug}`;
const downloadAsset = getAssetById(assetId);

// Neues CTA-Layout (ersetzt Zeilen 76-88):
<div className="flex gap-2">
  {/* Primary: Read Case */}
  <Button 
    asChild
    variant="outline" 
    size="sm" 
    className="flex-1"
  >
    <Link to={`/cases/${caseStudy.slug}`}>
      {language === 'de' ? 'Case lesen' : 'Read Case'}
    </Link>
  </Button>
  
  {/* Secondary: Download PDF (nur wenn Asset verfügbar) */}
  {downloadAsset && downloadAsset.isAvailable && (
    <Button
      size="sm"
      className="flex-1 bg-gradient-to-r from-primary to-primary/80"
      onClick={() => setIsDownloadModalOpen(true)}
    >
      {language === 'de' ? 'PDF' : 'PDF'}
      <Download className="w-3 h-3 ml-1" />
    </Button>
  )}
</div>

// Am Ende der Card-Komponente:
<FilloutDownloadModal
  asset={downloadAsset}
  isOpen={isDownloadModalOpen}
  onClose={() => setIsDownloadModalOpen(false)}
/>
```

### Visuelles Ergebnis

**Vorher:**
```
┌─────────────────────────────────┐
│          Case lesen →           │
└─────────────────────────────────┘
```

**Nachher (analog zu Playbook-Kacheln):**
```
┌───────────────┬─────────────────┐
│  Case lesen   │   PDF ⬇        │
└───────────────┴─────────────────┘
```

---

## Zusammenfassung der Änderungen

| Datei | Änderung |
|-------|----------|
| `src/components/PlaybookLibrary.tsx` | Modal-State + FilloutDownloadModal + Asset-Lookup |
| `src/components/research/sections/ResearchFinalCTASection.tsx` | Props erweitern + Modal-State + FilloutDownloadModal |
| `src/components/research/ANSTLandingPage.tsx` (und andere) | `researchType` Prop übergeben |
| `src/pages/CaseDetail.tsx` | Modal-State + Button onClick statt a href |
| `src/components/cases/CaseCard.tsx` | Zweiter Button + Modal-State + FilloutDownloadModal |

---

## Datenfluss

```text
User klickt Download-Button (an 4 Stellen)
         │
         ▼
┌─────────────────────────────────┐
│ getAssetById(assetId) aufrufen  │
│ → Holt Asset aus downloadRegistry│
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│ FilloutDownloadModal öffnet     │
│ → Asset wird übergeben          │
│ → Fillout-Form mit UTMs lädt    │
└────────────┬────────────────────┘
             │
             ▼
User füllt Form aus & submitted
         │
         ▼
┌─────────────────────────────────┐
│ postMessage empfangen           │
│ → PDF startet automatisch       │
│ → Modal schließt nach 2.5s      │
└─────────────────────────────────┘
```

---

## Test-Plan nach Implementierung

| Test | Aktion | Erwartetes Ergebnis |
|------|--------|---------------------|
| Playbook Template | Klick auf "Template" Button auf Playbook-Kachel | FilloutDownloadModal öffnet |
| Expertise Research | Klick auf "Research herunterladen" auf ANST-Seite | FilloutDownloadModal öffnet mit research-anst Asset |
| Case Detail | Klick auf "Download Case Study PDF" auf Case-Seite | FilloutDownloadModal öffnet |
| Case Card | Klick auf "PDF" Button auf Case-Kachel | FilloutDownloadModal öffnet |
| Form Submit | Form ausfüllen und absenden | PDF startet automatisch, Modal schließt |

