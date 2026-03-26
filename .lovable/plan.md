

## Analyse des Briefings 2/2 v2.0 — /playbooks/ai-native-scaling

### Machbarkeit: Ja, mit Korrekturen

Das Briefing ist grundsätzlich umsetzbar. Die Seite nutzt die generische `PlaybookLandingPage` Komponente mit Daten aus `ai-native-scaling.ts`. Es gibt aber mehrere Konflikte:

---

### Problem 1: `/tools/roi-calculator` existiert nicht

Das Briefing verlinkt auf `/tools/roi-calculator`. Diese Route existiert nicht. Der ROI-Calculator existiert als `ROICalculatorOptimized` Komponente und wurde kürzlich als Modal in `FormulaOptimized.tsx` auf Home eingebaut.

**Optionen:**
- (A) Neue Route `/tools/roi-calculator` anlegen (eigenständige Seite)
- (B) Auf `/ai-native` verlinken (wo der Calculator als Section existiert)
- (C) Den Calculator auch hier als Modal öffnen (wie auf Home)

---

### Problem 2: Shared Components betroffen

Die Hero-CTAs und die Final-CTA-Section (mit Stats) sind **shared Components** (`PlaybookHeroSection.tsx`, `PlaybookFinalCTASection.tsx`), die von **allen 18 Playbooks** genutzt werden. Die Briefing-Änderungen (Ghost-Buttons statt Primary-CTA, Stats entfernen) würden alle Playbooks brechen — oder erfordern eine Sonderbehandlung nur für den Master Playbook.

**Optionen:**
- (A) Nur für `ai-native-scaling` eine eigene Page-Komponente statt `PlaybookLandingPage` verwenden
- (B) Conditional Logic in den Shared Components (z.B. `if ebene === 1`)
- (C) Die Shared Components lassen und nur die Daten-Datei anpassen (begrenzterer Eingriff)

---

### Problem 3: "Pricing-Tabelle entfernen" = Section 11

Die "Pricing-Tabelle" ist die `PlaybookSolutionsSection` (Section 11 in `PlaybookLandingPage.tsx`). Diese zeigt Assessment/Power Up/Boost/Accelerate Engagement-Modelle mit Preisen. Sie zu entfernen ist möglich durch Conditional Rendering (`ebene !== 1`), aber das ändert das Verhalten für den Master Playbook.

---

### Problem 4: Wachstumskurven-Grafik Position

Das Briefing will die Grafik "nach den 4 Phasen" in der Framework-Section. Die `PlaybookFrameworkSection` ist aber eine Shared Component. Die Grafik müsste entweder:
- Als separate Section zwischen Framework und Dimensions eingefügt werden (in `PlaybookLandingPage.tsx`, nur für `ebene === 1`)
- Oder in die Framework-Section selbst eingebettet werden (bricht Shared Component)

---

### Empfehlung: Entscheidung nötig

Bevor umgesetzt werden kann, brauche ich eine Entscheidung zu den 4 Punkten oben — insbesondere ob `/tools/roi-calculator` als eigene Route angelegt werden soll und ob die Änderungen nur den Master Playbook betreffen sollen (via Conditional Logic) oder ob eine eigene Page-Komponente gebaut wird.

