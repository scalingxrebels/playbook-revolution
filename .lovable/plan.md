
# Plan: Download Registry & Forms System

## Zusammenfassung
Implementierung eines zentralisierten Download-Registrys mit 45 Assets und 3 standardisierten Formularen mit vollständigem UTM-Tracking.

---

## 1. Download Registry - Vollständige Bestandsaufnahme

### 1.1 Playbooks (18 Dateien)

| Nr | Playbook | Slug | Dateiname | Status |
|----|----------|------|-----------|--------|
| 1 | AI-Native Scaling (Master) | ai-native-scaling | `ai-native-scaling-playbook.pdf` | Existiert |
| 2 | Growth Engines | growth-engines | `growth-engines-playbook.pdf` | Fehlt |
| 3 | Operating Systems | operating-systems | `operating-systems-playbook.pdf` | Fehlt |
| 4 | Board & Governance | board-governance | `board-governance-playbook.pdf` | Fehlt |
| 5 | Portfolio Transformation | portfolio-transformation | `portfolio-transformation-playbook.pdf` | Fehlt |
| 6 | Strategic Capabilities | strategic-capabilities | `strategic-capabilities-playbook.pdf` | Fehlt |
| 7 | GTM & Revenue | gtm-revenue | `gtm-revenue-playbook.pdf` | Fehlt |
| 8 | Product | product | `product-playbook.pdf` | Fehlt |
| 9 | Customer Success | customer-success | `customer-success-playbook.pdf` | Fehlt |
| 10 | Operations | operations | `operations-playbook.pdf` | Fehlt |
| 11 | Finance | finance | `finance-playbook.pdf` | Fehlt |
| 12 | Talent | talent | `talent-playbook.pdf` | Fehlt |
| 13 | Data & Tech | data-tech | `data-tech-playbook.pdf` | Fehlt |
| 14 | Strategic Governance | strategic-governance | `strategic-governance-playbook.pdf` | Fehlt |
| 15 | Operational Governance | operational-governance | `operational-governance-playbook.pdf` | Fehlt |
| 16 | Exit & M&A | exit-ma | `exit-ma-playbook.pdf` | Fehlt |
| 17 | Portfolio Excellence | portfolio-excellence | `portfolio-excellence-playbook.pdf` | Fehlt |

**Zielordner:** `public/downloads/playbooks/`

---

### 1.2 Case Studies (14 Dateien)

| Nr | Case Study | Slug | Dateiname |
|----|------------|------|-----------|
| 1 | CAC Crisis Turnaround | cac-crisis-turnaround | `cac-crisis-turnaround.pdf` |
| 2 | NRR Machine Breakthrough | nrr-machine-breakthrough | `nrr-machine-breakthrough.pdf` |
| 3 | Partner Channel Transformed | partner-channel-transformed | `partner-channel-transformed.pdf` |
| 4 | Pricing Redesigned | pricing-redesigned | `pricing-redesigned.pdf` |
| 5 | Strategic Transformation Market Leadership | strategic-transformation-market-leadership | `strategic-transformation-market-leadership.pdf` |
| 6 | Stage Transition Series B Ready | stage-transition-series-b-ready | `stage-transition-series-b-ready.pdf` |
| 7 | Exit Readiness Achieved | exit-readiness-achieved | `exit-readiness-achieved.pdf` |
| 8 | Vision 2030 Strategy Workshop | vision-2030-strategy-workshop | `vision-2030-strategy-workshop.pdf` |
| 9 | SaaS Transition Accelerated | saas-transition-accelerated | `saas-transition-accelerated.pdf` |
| 10 | Strategic Transformation M&A Integration | strategic-transformation-ma-integration | `strategic-transformation-ma-integration.pdf` |
| 11 | Diagnostic-Led Acquisition Scaled | diagnostic-led-acquisition-scaled | `diagnostic-led-acquisition-scaled.pdf` |
| 12 | Board Readiness Series B Secured | board-readiness-series-b-secured | `board-readiness-series-b-secured.pdf` |
| 13 | Leadership Program Scaled | leadership-program-scaled | `leadership-program-scaled.pdf` |
| 14 | New Market Segment Entry | new-market-segment-entry | `new-market-segment-entry.pdf` |

**Zielordner:** `public/downloads/cases/`

---

### 1.3 Expertise/Research (4 Dateien)

| Nr | Framework | Slug | Dateiname |
|----|-----------|------|-----------|
| 1 | AI Maturity Framework | amf | `amf-executive-summary.pdf` |
| 2 | AI-Native Scaling Theory | anst | `anst-executive-summary.pdf` |
| 3 | Scaling Stack Theory | sst | `sst-executive-summary.pdf` |
| 4 | Unified Framework | unified | `architecture-v4.5.1.pdf` |

**Zielordner:** `public/downloads/research/`

---

### 1.4 Decision Support Samples (8 Dateien)

| Nr | Solution | Slug | Dateiname |
|----|----------|------|-----------|
| 1 | GTM Effectiveness Review | gtm-effectiveness | `gtm-effectiveness-sample.pdf` |
| 2 | Pricing & Packaging Review | pricing-packaging | `pricing-packaging-sample.pdf` |
| 3 | Scaling Readiness Assessment | scaling-readiness | `scaling-readiness-sample.pdf` |
| 4 | AI Maturity Assessment | ai-maturity | `ai-maturity-sample.pdf` |
| 5 | Investor-Readiness Pitch Deck Check | pitch-deck-check | `pitch-deck-check-sample.pdf` |
| 6 | VC Due Diligence Simulation | vc-dd-simulation | `vc-dd-simulation-sample.pdf` |
| 7 | Portfolio Assessment | portfolio-assessment | `portfolio-assessment-sample.pdf` |
| 8 | Custom Analysis & Report | custom-analysis | `custom-analysis-sample.pdf` |

**Zielordner:** `public/downloads/samples/`

---

### 1.5 Buch (1 Datei)

| Nr | Asset | Dateiname | Status |
|----|-------|-----------|--------|
| 1 | Fix Growth Sample (29 Seiten) | `fix-growth-sample.pdf` | Existiert |

**Zielordner:** `public/downloads/` (bereits vorhanden)

---

## 2. Ordnerstruktur nach Implementierung

```text
public/downloads/
├── ai-native-scaling-playbook.pdf    (existiert)
├── fix-growth-sample.pdf             (existiert)
├── playbooks/                        (NEU - 17 PDFs)
│   ├── growth-engines-playbook.pdf
│   ├── operating-systems-playbook.pdf
│   ├── board-governance-playbook.pdf
│   ├── portfolio-transformation-playbook.pdf
│   ├── strategic-capabilities-playbook.pdf
│   ├── gtm-revenue-playbook.pdf
│   ├── product-playbook.pdf
│   ├── customer-success-playbook.pdf
│   ├── operations-playbook.pdf
│   ├── finance-playbook.pdf
│   ├── talent-playbook.pdf
│   ├── data-tech-playbook.pdf
│   ├── strategic-governance-playbook.pdf
│   ├── operational-governance-playbook.pdf
│   ├── exit-ma-playbook.pdf
│   └── portfolio-excellence-playbook.pdf
├── cases/                            (NEU - 14 PDFs)
│   └── [14 Case Study PDFs]
├── research/                         (NEU - 4 PDFs)
│   ├── amf-executive-summary.pdf
│   ├── anst-executive-summary.pdf
│   ├── sst-executive-summary.pdf
│   └── architecture-v4.5.1.pdf
└── samples/                          (NEU - 8 PDFs)
    ├── gtm-effectiveness-sample.pdf
    ├── pricing-packaging-sample.pdf
    ├── scaling-readiness-sample.pdf
    ├── ai-maturity-sample.pdf
    ├── pitch-deck-check-sample.pdf
    ├── vc-dd-simulation-sample.pdf
    ├── portfolio-assessment-sample.pdf
    └── custom-analysis-sample.pdf
```

---

## 3. Forms System mit UTM-Tracking

### 3.1 Formular-Typen

| Nr | Formular | Zweck | Fillout-ID |
|----|----------|-------|------------|
| 1 | Inflection Call | Kostenlose 30-Min. Beratung | `inflection-call` |
| 2 | Expert Session | Bezahlte 45-90 Min. Session | `expert-session` |
| 3 | Download Form | Asset-Download mit Lead-Capture | `download` |

### 3.2 URL-Parameter Schema

Alle Formulare erhalten folgende Parameter:

| Parameter | Beschreibung | Beispiel |
|-----------|--------------|----------|
| `asset_id` | Eindeutige Asset-ID | `playbook-gtm-revenue`, `case-cac-crisis` |
| `utm_source` | Traffic-Quelle | `linkedin`, `google`, `direct` |
| `utm_medium` | Marketing-Medium | `cpc`, `email`, `organic` |
| `utm_campaign` | Kampagnen-Name | `q1-2026-playbook-launch` |
| `utm_content` | Content-Variante | `hero-cta`, `footer-cta` |
| `utm_term` | Keywords | `scaling`, `ai-native` |

### 3.3 Asset-ID Namenskonvention

```text
Format: {type}-{slug}

Beispiele:
- playbook-ai-native-scaling
- playbook-gtm-revenue
- case-cac-crisis-turnaround
- research-amf
- sample-gtm-effectiveness
- book-fix-growth
```

---

## 4. Technische Implementierung

### 4.1 Download Registry Data File

Neue Datei: `src/data/downloadRegistry.ts`

```typescript
export interface DownloadAsset {
  id: string;           // z.B. "playbook-gtm-revenue"
  type: 'playbook' | 'case' | 'research' | 'sample' | 'book';
  slug: string;
  titleEn: string;
  titleDe: string;
  fileName: string;
  filePath: string;
  requiresEmail: boolean;
  isAvailable: boolean;
}

export const downloadRegistry: DownloadAsset[] = [
  // 18 Playbooks
  // 14 Case Studies  
  // 4 Research Documents
  // 8 Decision Support Samples
  // 1 Book
];
```

### 4.2 UTM-Aware Form Component

Neue Komponente: `src/components/forms/UTMAwareForm.tsx`

- Liest UTM-Parameter aus URL
- Übergibt Parameter an Fillout-Embed
- Speichert in Datenbank mit Asset-ID

### 4.3 Datenbank-Schema Erweiterung

Neue Tabelle: `download_leads`

```sql
CREATE TABLE download_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  name TEXT,
  company TEXT,
  asset_id TEXT NOT NULL,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

---

## 5. Umsetzungsschritte

### Phase 1: PDF-Upload (durch dich)
1. Benenne alle PDFs nach dem Schema um
2. Lade in die entsprechenden Ordner hoch:
   - 17 Playbooks → `public/downloads/playbooks/`
   - 14 Case Studies → `public/downloads/cases/`
   - 4 Research → `public/downloads/research/`
   - 8 Samples → `public/downloads/samples/`

### Phase 2: Code-Implementierung (durch mich)
1. Erstelle `src/data/downloadRegistry.ts`
2. Aktualisiere alle `downloadUrl` Pfade in:
   - 18 Playbook-Dateien
   - `caseStudies.ts`
   - Research-Dateien (amf.ts, anst.ts, sst.ts, unified-framework.ts)
   - `solutionTiles.ts` (Sample-Links)
3. Erstelle UTM-aware Form-Komponenten
4. Erstelle Datenbank-Migration für `download_leads`

### Phase 3: Fillout-Integration
1. Konfiguriere 3 Fillout-Formulare mit Parameter-Durchreichung
2. Implementiere `data-fillout-inherit-parameters` auf allen Embeds

---

## 6. Gesamtübersicht: 45 Assets

| Kategorie | Anzahl | Ordner |
|-----------|--------|--------|
| Playbooks | 18 | `/downloads/playbooks/` + 1 root |
| Case Studies | 14 | `/downloads/cases/` |
| Research | 4 | `/downloads/research/` |
| Samples | 8 | `/downloads/samples/` |
| Buch | 1 | `/downloads/` (root) |
| **Gesamt** | **45** | |
