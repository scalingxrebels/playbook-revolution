
# Plan: Case Study PDF Downloads einrichten

## Zusammenfassung
Die Case Study PDFs werden nicht korrekt heruntergeladen, weil der Ordner `public/downloads/cases/` nicht existiert und die 14 PDF-Dateien noch nicht im Projekt gespeichert sind. Dieser Plan löst das Problem durch Erstellung der Ordnerstruktur und Zuordnung der PDFs zu den korrekten Download-URLs.

---

## Diagnose

### Aktueller Zustand
- **Vorhandene Downloads:** `public/downloads/` enthält nur 2 Dateien:
  - `ai-native-scaling-playbook.pdf`
  - `fix-growth-sample.pdf`
- **Fehlender Ordner:** `public/downloads/cases/` existiert nicht
- **Konsequenz:** Browser erhält 404-Fehlerseite und speichert diese als `.txt`-Datei

### Betroffene Case Studies
Die `downloadUrl`-Pfade in `caseStudies.ts` verweisen auf nicht existierende Dateien.

---

## Mapping: PDF-Dateien zu Download-URLs

| PDF (Original) | Ziel-Dateiname | Download-URL |
|---|---|---|
| C01_CAC-Krise | cac-crisis-turnaround.pdf | `/downloads/cases/cac-crisis-turnaround.pdf` |
| C02_NRR_Machine_Breakthrough | nrr-machine-breakthrough.pdf | `/downloads/cases/nrr-machine-breakthrough.pdf` |
| C03_Partner_Channel_Transformed | partner-channel-transformed.pdf | `/downloads/cases/partner-channel-transformed.pdf` |
| C04_Pricing_Transformation | pricing-redesigned.pdf | `/downloads/cases/pricing-redesigned.pdf` |
| C05_Strategic_Transformation_Market_Leadership | strategic-transformation-market-leadership.pdf | `/downloads/cases/strategic-transformation-market-leadership.pdf` |
| C06_Stage_Transition_Series_B_Ready | stage-transition-series-b-ready.pdf | `/downloads/cases/stage-transition-series-b-ready.pdf` |
| C07_Exit_Readiness_Achieved | exit-readiness-achieved.pdf | `/downloads/cases/exit-readiness-achieved.pdf` |
| C08_Vision_2030_Strategy_Workshop | vision-2030-strategy-workshop.pdf | `/downloads/cases/vision-2030-strategy-workshop.pdf` |
| C09_SaaS_Transition_Accelerated | saas-transition-accelerated.pdf | `/downloads/cases/saas-transition-accelerated.pdf` |
| C10_Strategic_Transformation_M_A_Integration | strategic-transformation-ma-integration.pdf | `/downloads/cases/strategic-transformation-ma-integration.pdf` |
| C11_Diagnostic_Led_Acquisition_Scaled | diagnostic-led-acquisition-scaled.pdf | `/downloads/cases/diagnostic-led-acquisition-scaled.pdf` |
| C12_Board_Readiness_Series_B_Secured | board-readiness-series-b-secured.pdf | `/downloads/cases/board-readiness-series-b-secured.pdf` |
| C13_Leadership_Program_Scaled | leadership-program-scaled.pdf | `/downloads/cases/leadership-program-scaled.pdf` |
| C14_New_Market_Segment_Entry | new-market-segment-entry.pdf | `/downloads/cases/new-market-segment-entry.pdf` |

---

## Umsetzungsschritte

### Schritt 1: PDF-Dateien hochladen
Da Lovable keine Möglichkeit hat, bestehende Dateien direkt zu verschieben oder umzubenennen, müssen die 14 PDFs mit den korrekten Dateinamen erneut hochgeladen werden.

**Erforderliche Aktion (durch dich):**
Lade die 14 PDFs erneut hoch und benenne sie dabei gemäß der obigen Tabelle um:
- `C01_CAC-Krise_2026-02-03.pdf` → `cac-crisis-turnaround.pdf`
- `C02_NRR_Machine_Breakthrough_2026-02-03.pdf` → `nrr-machine-breakthrough.pdf`
- usw.

### Schritt 2: Ordnerstruktur erstellen
Sobald die umbenannten PDFs hochgeladen werden, erstellt das System automatisch den Ordner `public/downloads/cases/`.

### Schritt 3: caseStudies.ts aktualisieren
Einige Case Studies haben `downloadUrl: undefined` und müssen aktualisiert werden:
- `vision-2030-strategy-workshop` (Zeile ~5433)
- `saas-transition-accelerated` (Zeile ~5983)
- Weitere Cases prüfen und ggf. korrigieren

**Code-Änderungen:**
```typescript
// Beispiel: vision-2030-strategy-workshop
downloadUrl: '/downloads/cases/vision-2030-strategy-workshop.pdf'

// Beispiel: saas-transition-accelerated  
downloadUrl: '/downloads/cases/saas-transition-accelerated.pdf'
```

---

## Technische Details

### Dateistruktur nach Umsetzung
```text
public/
├── downloads/
│   ├── ai-native-scaling-playbook.pdf (existiert)
│   ├── fix-growth-sample.pdf (existiert)
│   └── cases/                         (NEU)
│       ├── cac-crisis-turnaround.pdf
│       ├── nrr-machine-breakthrough.pdf
│       ├── partner-channel-transformed.pdf
│       ├── pricing-redesigned.pdf
│       ├── strategic-transformation-market-leadership.pdf
│       ├── stage-transition-series-b-ready.pdf
│       ├── exit-readiness-achieved.pdf
│       ├── vision-2030-strategy-workshop.pdf
│       ├── saas-transition-accelerated.pdf
│       ├── strategic-transformation-ma-integration.pdf
│       ├── diagnostic-led-acquisition-scaled.pdf
│       ├── board-readiness-series-b-secured.pdf
│       ├── leadership-program-scaled.pdf
│       └── new-market-segment-entry.pdf
```

### Zu aktualisierende Code-Zeilen in caseStudies.ts
- Zeile ~5433: `downloadUrl: undefined` → `downloadUrl: '/downloads/cases/vision-2030-strategy-workshop.pdf'`
- Zeile ~5983: `downloadUrl: undefined` → `downloadUrl: '/downloads/cases/saas-transition-accelerated.pdf'`
- Weitere Cases mit `undefined` identifizieren und korrigieren

---

## Nächste Schritte

1. **Du:** Benenne die 14 PDFs lokal um (gemäß Mapping-Tabelle)
2. **Du:** Lade die umbenannten PDFs in den `public/downloads/cases/` Ordner hoch
3. ✅ **Erledigt:** `caseStudies.ts` mit den korrekten `downloadUrl`-Pfaden aktualisiert
   - `strategic-transformation-ma-integration` → `/downloads/cases/strategic-transformation-ma-integration.pdf`
   - `vision-2030-strategy-workshop` → `/downloads/cases/vision-2030-strategy-workshop.pdf`
   - `saas-transition-accelerated` → `/downloads/cases/saas-transition-accelerated.pdf`
4. **Test:** Download-Funktion auf einer Case Study Detail-Seite verifizieren
