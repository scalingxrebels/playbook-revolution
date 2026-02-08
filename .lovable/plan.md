
# Plan: Forschungsmethodik-Abgleich Website ↔ PDFs

## Zusammenfassung
Korrektur der Stichprobengrößen, Forschungszeiträume und Paper-Anzahl auf der Website basierend auf den Executive Summaries der PDFs.

---

## 1. Änderungen im Überblick

| Bereich | Aktuell | Korrektur |
|---------|---------|-----------|
| **AMF Stichprobe** | 47 Unternehmen | 150+ Unternehmen, 30+ CEO-Interviews |
| **SST Stichprobe** | n=22 | n=62 (22 AI-native, 25 AI-enabled, 15 traditional) |
| **Unified Framework "3 Jahre"** | "3 yrs Research" | "10/25–01/26" |
| **ProofSection Papers** | 3 | 4 |
| **Velocity Gap (8.2x)** | — | Bleibt (wie gewünscht) |
| **Zeit bis €100M (8-18 Mo)** | — | Bleibt (wie gewünscht) |

---

## 2. Detaillierte Code-Änderungen

### 2.1 `src/data/research/amf.ts`

**Zeile 53-62 (Hero Description):**
```
Aktuell: "We analyzed 47 high-growth companies..."
Neu: "We analyzed 150+ high-growth companies (with 30+ CEO interviews and 22 in-depth case analyses)..."
```

**Zeile 65 (Stats):**
```
Aktuell: { value: '47', label: { en: 'Companies Analyzed', de: 'Unternehmen analysiert' } }
Neu: { value: '150+', label: { en: 'Companies Studied', de: 'Unternehmen untersucht' } }
```

**Neuer Stats-Eintrag hinzufügen:**
```
{ value: '30+', label: { en: 'CEO Interviews', de: 'CEO-Interviews' } }
```

**Forschungsmethodik hinzufügen (nach Stats):**
```typescript
methodology: {
  researchPeriod: { en: 'Fall/Winter 2025', de: 'Herbst/Winter 2025' },
  observationPeriod: { en: '2021-2025', de: '2021-2025' },
  methods: {
    en: 'Public data analysis, explorative C-level & Board interviews, job posting analysis',
    de: 'Öffentliche Datenanalyse, explorative C-Level- & Board-Interviews, Stellenanzeigen-Analyse'
  }
}
```

---

### 2.2 `src/data/research/anst.ts`

**Forschungsmethodik hinzufügen (analog zu AMF):**
```typescript
methodology: {
  researchPeriod: { en: 'Fall/Winter 2025', de: 'Herbst/Winter 2025' },
  observationPeriod: { en: '2021-2025', de: '2021-2025' },
  methods: {
    en: 'Public data analysis, explorative C-level & Board interviews, job posting analysis',
    de: 'Öffentliche Datenanalyse, explorative C-Level- & Board-Interviews, Stellenanzeigen-Analyse'
  }
}
```

*Keine Änderung an "8.2x" oder "8-18 Monate" (bleibt wie gewünscht)*

---

### 2.3 `src/data/research/sst.ts`

**Zeile 19 (Hero Description):**
```
Aktuell: "We analyzed 22 high-growth companies..."
Neu: "We analyzed 62 companies (22 AI-native, 25 AI-enabled, 15 traditional)..."
```

**Zeile 23 (Stats):**
```
Aktuell: { value: '22', label: { en: 'companies analyzed', de: 'Unternehmen analysiert' } }
Neu: { value: '62', label: { en: 'companies analyzed', de: 'Unternehmen analysiert' } }
```

**Zeile 43-44 (Bottleneck Distribution Content):**
```
Aktuell: "We analyzed 22 AI-native companies (2021-2025)..."
Neu: "We analyzed 62 companies (22 AI-native, 25 AI-enabled, 15 traditional) from 2021-2025..."
```

**Forschungsmethodik hinzufügen:**
```typescript
methodology: {
  researchPeriod: { en: 'Fall/Winter 2025', de: 'Herbst/Winter 2025' },
  observationPeriod: { en: '2021-2025', de: '2021-2025' },
  methods: {
    en: 'Public data analysis, explorative C-level & Board interviews, job posting analysis',
    de: 'Öffentliche Datenanalyse, explorative C-Level- & Board-Interviews, Stellenanzeigen-Analyse'
  }
}
```

---

### 2.4 `src/data/research/unified-framework.ts`

**Zeile 22-24 (Hero Description):**
```
Aktuell: "We spent 3 years researching..."
Neu: "From October 2025 to January 2026, we researched..."
```

**Zeile 30 (Stats):**
```
Aktuell: { value: '3 yrs', label: { en: 'Research', de: 'Forschung' } }
Neu: { value: '4 mo', label: { en: 'Research (10/25–01/26)', de: 'Forschung (10/25–01/26)' } }
```

**Zeile 88-89 (Why Not 1 Formula Callout):**
```
Aktuell: "We spent 2 years trying to build 1 formula..."
Neu: "We spent months trying to build 1 formula..."
```

**Forschungsmethodik hinzufügen:**
```typescript
methodology: {
  researchPeriod: { en: 'October 2025 – January 2026', de: 'Oktober 2025 – Januar 2026' },
  observationPeriod: { en: '2021-2025', de: '2021-2025' },
  methods: {
    en: 'Public data analysis, explorative C-level & Board interviews, job posting analysis',
    de: 'Öffentliche Datenanalyse, explorative C-Level- & Board-Interviews, Stellenanzeigen-Analyse'
  }
}
```

---

### 2.5 `src/components/ProofSection.tsx`

**Zeile 108:**
```
Aktuell: <div className="text-3xl font-bold text-primary mb-2">3</div>
Neu: <div className="text-3xl font-bold text-primary mb-2">4</div>
```

---

## 3. Optionale Erweiterung: Methodologie-Anzeige

Um die Forschungsmethodik auf den Research-Seiten anzuzeigen, können wir einen neuen Section-Typ erstellen:

**Neue Komponente:** `src/components/research/sections/ResearchMethodologyBadge.tsx`

Diese zeigt unter dem Hero:
- Forschungszeitraum: Herbst/Winter 2025
- Betrachtungszeitraum: 2021-2025
- Methoden: Öffentliche Daten, CEO-Interviews, Stellenanzeigen-Analyse

---

## 4. Type-Erweiterung

**`src/data/research/types.ts`** - Neuen Methodologie-Typ hinzufügen:

```typescript
export interface ResearchMethodology {
  researchPeriod: BilingualText;
  observationPeriod: BilingualText;
  methods: BilingualText;
}

// In AMFHeroData, ANSTPageData, SSTPageData, UnifiedFrameworkPageData:
methodology?: ResearchMethodology;
```

---

## 5. Zusammenfassung der Dateien

| Datei | Änderungen |
|-------|------------|
| `src/data/research/amf.ts` | Stichprobe 47→150+, +CEO-Interviews, +Methodologie |
| `src/data/research/anst.ts` | +Methodologie (Werte bleiben) |
| `src/data/research/sst.ts` | Stichprobe 22→62, +Methodologie |
| `src/data/research/unified-framework.ts` | "3 Jahre"→"10/25–01/26", +Methodologie |
| `src/data/research/types.ts` | +ResearchMethodology Interface |
| `src/components/ProofSection.tsx` | Papers 3→4 |
| `src/components/research/sections/ResearchMethodologyBadge.tsx` | Neue Komponente (optional) |

---

## 6. Betroffene Seiten nach Implementierung

- `/expertise/amf` - AMF Research Page
- `/expertise/anst` - ANST Research Page
- `/expertise/sst` - SST Research Page
- `/expertise/unified-framework` - Unified Framework Page
- `/` (Homepage) - ProofSection
