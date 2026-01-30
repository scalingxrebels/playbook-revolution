

# Plan: Research Hub Kacheln mit Research Pages verbinden

## Übersicht

Die Research-Kacheln im ResearchHub müssen aktualisiert werden:
1. **Einheitliche CTAs**: Alle Kacheln bekommen "Discover the [Framework Name]" CTAs
2. **Korrekte Links**: Alle Kacheln verlinken auf die implementierten Research Pages

---

## Aktuelle vs. Neue Konfiguration

| Framework | Aktueller CTA | Neuer CTA (EN) | Neuer CTA (DE) |
|-----------|---------------|----------------|----------------|
| AMF | "Read Research" | "Discover the AI Maturity Framework" | "Entdecke das AI Maturity Framework" |
| ANST | "Read Research" | "Discover the AI-Native Scaling Theory" | "Entdecke die AI-Native Scaling Theory" |
| Bottleneck/SST | "Diagnose Your Bottleneck" | "Discover the Scaling Stack Theory" | "Entdecke die Scaling Stack Theory" |
| Unified | "Explore Framework" | "Discover the Unified Framework" | "Entdecke das Unified Framework" |

---

## Link-Korrekturen

| Framework | Aktueller Link | Korrigierter Link |
|-----------|----------------|-------------------|
| AMF | `/expertise/amf` | `/expertise/amf` (korrekt) |
| ANST | `/expertise/anst` | `/expertise/anst` (korrekt) |
| Bottleneck | `/tools/bottleneck-diagnosis` | `/expertise/sst` |
| Unified | `/expertise/architecture` | `/expertise/unified-framework` |

---

## Titel-Anpassung für SST

Die Kachel "Bottleneck Framework" sollte zu "Scaling Stack Theory" umbenannt werden, um Konsistenz mit der Research Page zu gewährleisten:

| Feld | Aktuell | Neu |
|------|---------|-----|
| `title` | "Bottleneck Framework" | "Scaling Stack Theory" |
| `titleDe` | "Bottleneck Framework" | "Scaling Stack Theory" |

---

## Zu ändernde Datei

**`src/components/ResearchHub.tsx`**

Änderungen in der `researchCards` Array (Zeilen 32-97):

```typescript
const researchCards: ResearchCard[] = [
  {
    id: 'amf',
    // ... andere Felder bleiben gleich
    ctaText: 'Discover the AI Maturity Framework',
    ctaTextDe: 'Entdecke das AI Maturity Framework',
    link: '/expertise/amf'  // bleibt gleich
  },
  {
    id: 'anst',
    // ... andere Felder bleiben gleich
    ctaText: 'Discover the AI-Native Scaling Theory',
    ctaTextDe: 'Entdecke die AI-Native Scaling Theory',
    link: '/expertise/anst'  // bleibt gleich
  },
  {
    id: 'sst',  // id ändern von 'bottleneck' zu 'sst'
    title: 'Scaling Stack Theory',
    titleDe: 'Scaling Stack Theory',
    // ... andere Felder bleiben gleich
    ctaText: 'Discover the Scaling Stack Theory',
    ctaTextDe: 'Entdecke die Scaling Stack Theory',
    link: '/expertise/sst'  // NEU: Link korrigiert
  },
  {
    id: 'unified',  // id ändern von 'architecture' zu 'unified'
    // ... andere Felder bleiben gleich
    ctaText: 'Discover the Unified Framework',
    ctaTextDe: 'Entdecke das Unified Framework',
    link: '/expertise/unified-framework'  // NEU: Link korrigiert
  }
];
```

---

## Zusammenfassung

| Aspekt | Details |
|--------|---------|
| **Geänderte Datei** | `src/components/ResearchHub.tsx` |
| **Änderungsumfang** | 4 Kacheln-Definitionen in `researchCards` Array |
| **CTA-Pattern** | "Discover the [Framework Name]" (EN) / "Entdecke das/die [Framework Name]" (DE) |
| **Link-Fixes** | 2 (SST + Unified Framework) |
| **Titel-Updates** | 1 (Bottleneck → Scaling Stack Theory) |

