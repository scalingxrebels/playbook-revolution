

# Plan: Fehlende Secondary CTAs mit Fillout-Modal verbinden

## Zusammenfassung

Es fehlt noch **eine wichtige Stelle**, wo der Secondary Download-CTA nicht das Fillout-Modal öffnet:

| Datei | Aktueller Status | Änderung |
|-------|------------------|----------|
| `PlaybookFinalCTASection.tsx` | Direkter `<a href>` Link | FilloutDownloadModal öffnen |
| `ResearchDownloadSection.tsx` | Disabled, "Coming Soon" | Optional: FilloutDownloadModal aktivieren |
| `CaseCTA.tsx` | Nur Primary CTA (Book Call) | Kein Download-Button vorhanden - OK |

---

## Fix 1: PlaybookFinalCTASection - Download Button

### Problem

Der "Playbook herunterladen" Button ist ein direkter Link:

```typescript
// Zeile 102-112
<Button size="lg" variant="outline" asChild>
  <a href={data.downloadUrl} target="_blank" rel="noopener noreferrer">
    <Download className="w-4 h-4 mr-2" />
    {language === 'de' ? 'Playbook herunterladen' : 'Download Playbook'}
  </a>
</Button>
```

### Lösung

**Datei: `src/components/playbooks/sections/PlaybookFinalCTASection.tsx`**

1. Import `FilloutDownloadModal`, `getAssetById`, `useState`
2. Props erweitern um `playbookSlug`
3. Modal-State hinzufügen
4. Button onClick statt `<a href>`

```typescript
import { useState } from 'react';
import FilloutDownloadModal from '@/components/forms/FilloutDownloadModal';
import { getAssetById } from '@/data/downloadRegistry';

interface Props {
  data: FinalCTAData;
  playbookSlug?: string; // NEU
}

// In der Komponente:
const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

// Asset-ID aus Playbook-Slug
const assetId = playbookSlug ? `playbook-${playbookSlug}` : null;
const downloadAsset = assetId ? getAssetById(assetId) : null;

// Secondary CTA Button ändern (Zeile 102-112):
<Button
  size="lg"
  variant="outline"
  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
  onClick={() => setIsDownloadModalOpen(true)}
>
  <Download className="w-4 h-4 mr-2" />
  {language === 'de' ? 'Playbook herunterladen' : 'Download Playbook'}
</Button>

// Am Ende der Section (vor </section>):
<FilloutDownloadModal
  asset={downloadAsset}
  isOpen={isDownloadModalOpen}
  onClose={() => setIsDownloadModalOpen(false)}
/>
```

---

## Fix 2: PlaybookLandingPage - Slug übergeben

**Datei: `src/components/playbooks/PlaybookLandingPage.tsx`**

Die `PlaybookFinalCTASection` muss den `playbookSlug` erhalten:

```typescript
// Zeile 69
<PlaybookFinalCTASection 
  data={data.finalCta} 
  playbookSlug={data.meta.slug}  // NEU
/>
```

**Hinweis:** `data.meta.slug` muss im PlaybookPageData vorhanden sein. Falls nicht, prüfe ich das noch.

---

## Fix 3: Prüfen ob meta.slug existiert

Ich prüfe die Playbook-Datenstruktur, um sicherzustellen, dass `slug` verfügbar ist.

Falls nicht vorhanden, kann der Slug aus der URL extrahiert werden mit `useLocation()`.

---

## Zusammenfassung der Änderungen

| Datei | Änderung |
|-------|----------|
| `src/components/playbooks/sections/PlaybookFinalCTASection.tsx` | Props erweitern + Modal-State + FilloutDownloadModal |
| `src/components/playbooks/PlaybookLandingPage.tsx` | `playbookSlug` Prop übergeben |

---

## Optional: ResearchDownloadSection aktivieren

Die `ResearchDownloadSection.tsx` ist aktuell komplett disabled ("Coming Soon"). Soll ich diese auch aktivieren und mit dem Fillout-Modal verbinden?

- Button ist `disabled`
- Zeigt "Coming Soon" Badge
- Kein Asset-Mapping vorhanden

Falls ja, kann ich das im gleichen Update machen.

---

## Test nach Implementierung

| Seite | Aktion | Erwartetes Ergebnis |
|-------|--------|---------------------|
| `/playbooks/ai-native-scaling` | Scroll zu Final CTA, klick "Playbook herunterladen" | FilloutDownloadModal öffnet |
| `/playbooks/gtm-revenue` | Scroll zu Final CTA, klick "Playbook herunterladen" | FilloutDownloadModal öffnet |
| Alle 17 Playbook-Seiten | Download Button in Final CTA | FilloutDownloadModal öffnet |

