
# Implementierungsplan: Broken Links Fix

## Übersicht

Dieser Plan behebt alle identifizierten broken Links und Routing-Inkonsistenzen in der gesamten Website.

---

## Phase 1: Playbook-Slug Synchronisation

### Problem
Die Slugs in `src/data/playbooks/index.ts` stimmen nicht mit den Routen in `App.tsx` überein.

### Änderungen in `src/data/playbooks/index.ts`

| Playbook | Aktueller Slug | Korrekter Slug |
|----------|----------------|----------------|
| Strategic Governance | `board-governance/strategic-governance` | `board-governance/strategic` |
| Operational Governance | `board-governance/operational-governance` | `board-governance/operational` |
| Portfolio Excellence | `portfolio/portfolio-excellence` | `portfolio/excellence` |

### Betroffene Dateien
- `src/data/playbooks/index.ts` (Zeilen mit falschen Slugs)
- Möglicherweise die einzelnen Content-Dateien in `src/data/playbooks/content/`

---

## Phase 2: Fehlende Route hinzufügen oder entfernen

### Problem
Der Slug `strategic-capabilities/deep-dive` existiert in den Daten, aber keine Route in `App.tsx`.

### Optionen

**Option A: Route hinzufügen** (empfohlen wenn Content geplant)
```tsx
// In App.tsx
const PlaybookStrategicCapabilitiesDeepDive = lazy(() => import("./pages/PlaybookStrategicCapabilitiesDeepDive"));

<Route path="/playbooks/strategic-capabilities/deep-dive" element={<PlaybookStrategicCapabilitiesDeepDive />} />
```

**Option B: Daten-Eintrag entfernen** (empfohlen wenn kein Content geplant)
- Entferne `strategic-capabilities/deep-dive` aus `src/data/playbooks/index.ts`
- Entferne `strategicCapabilitiesDeepDiveData` Export aus `src/data/playbooks/content/index.ts`
- Lösche `src/data/playbooks/content/strategic-capabilities-deep-dive.ts`

### Empfehlung
Option B, da die Datei nur Platzhalter enthält und laut Memory "Strategic Capabilities is a unique Level 2 meta-playbook that does not have child playbooks".

---

## Phase 3: Legacy Case Study Routing

### Problem
`ScalingXCaseStudies.tsx` verwendet `/case-study/:id` statt `/cases/:slug`.

### Änderung in `src/components/ScalingXCaseStudies.tsx`

```tsx
// Aktuell (ca. Zeile mit Link)
<Link to={`/case-study/${case.id}`}>

// Neu
<Link to={`/cases/${case.slug}`}>
```

### Zusätzliche Prüfung
- Verifizieren dass die Case Study Daten in `research.ts` auch `slug` Felder haben
- Falls nicht: Migration zu `caseStudies.ts` oder Hinzufügen von `slug` Feldern

---

## Phase 4: relatedPlaybooks Format-Korrektur

### Problem
Die `relatedPlaybooks` Arrays in `caseStudies.ts` verwenden falsche Slug-Formate.

### Beispiel-Korrekturen

| Aktuell | Korrekt |
|---------|---------|
| `exit-ma` | `board-governance/exit-ma` |
| `gtm-revenue` | `growth-engines/gtm-revenue` |
| `operations` | `operating-systems/operations` |
| `finance` | `operating-systems/finance` |
| `product` | `growth-engines/product` |
| `customer-success` | `growth-engines/customer-success` |
| `talent` | `operating-systems/talent` |
| `data-tech` | `operating-systems/data-tech` |

### Betroffene Case Studies
Alle Einträge in `src/data/cases/caseStudies.ts` mit `relatedPlaybooks` Arrays.

---

## Phase 5: Komponenten-Audit

### Zu prüfende Komponenten

| Komponente | Prüfung |
|------------|---------|
| `SolutionPlaybookLink.tsx` | Verwendet `playbookDisplayNames` Map - muss mit korrekten Slugs übereinstimmen |
| `PlaybookCard.tsx` | Link-Generierung prüfen |
| `CaseCard.tsx` | relatedPlaybooks Rendering prüfen |

---

## Zusammenfassung der Änderungen

| Datei | Änderungstyp |
|-------|--------------|
| `src/data/playbooks/index.ts` | Slug-Korrekturen (3 Einträge) |
| `src/data/playbooks/content/index.ts` | Export entfernen |
| `src/data/playbooks/content/strategic-capabilities-deep-dive.ts` | Datei löschen |
| `src/components/ScalingXCaseStudies.tsx` | Link-Pfad aktualisieren |
| `src/data/cases/caseStudies.ts` | relatedPlaybooks Slugs korrigieren |
| `src/components/SolutionPlaybookLink.tsx` | playbookDisplayNames Map aktualisieren |

---

## Technische Notizen

### Reihenfolge wichtig
1. Erst Daten korrigieren (Phase 1, 2, 4)
2. Dann Komponenten anpassen (Phase 3, 5)
3. Zuletzt End-to-End testen

### Keine Breaking Changes
- Alle Routen in `App.tsx` bleiben unverändert
- Nur die Daten werden an die bestehenden Routen angepasst

### Test-Strategie
Nach Implementation:
- Alle Playbook-Links im Hub testen
- Case Detail Seiten → Related Playbooks Links testen
- ScalingX Case Studies Section testen
