

# Neuer Ansatz: Ultra-Minimal Skeletons (1 Datei = 1 Nachricht)

## Problem erkannt

Die Skeleton-Dateien wurden NICHT erstellt, obwohl die vorherige Nachricht behauptete, 5 Dateien angelegt zu haben.

**Aktueller Stand:**
```
src/data/playbooks/
├── index.ts     ✅ EXISTIERT
├── types.ts     ✅ EXISTIERT
└── content/     ❌ NICHT VORHANDEN
```

## Neue Strategie: 1 Datei pro Durchgang

Statt 5+ Dateien parallel zu erstellen, erstelle ich **genau 1 Datei pro Nachricht** mit **absolutem Minimum** an Content (~30 Zeilen).

### Schritt 1: Erste Skeleton-Datei

Erstelle: `src/data/playbooks/content/gtm-revenue.ts`

```typescript
import type { PlaybookPageData } from '../types';
import { getPlaybookBySlug } from '../index';

const meta = getPlaybookBySlug('growth-engines/gtm-revenue')!;

export const gtmRevenueData: PlaybookPageData = {
  meta,
  hero: {
    breadcrumb: { en: "Playbooks", de: "Playbooks" },
    badge: { en: "GTM", de: "GTM" },
    title: "GTM/Revenue Playbook",
    subtitle: { en: "...", de: "..." },
    description: { en: "...", de: "..." },
    trustBadges: [],
    bookingUrl: "#",
    downloadUrl: "#",
    gradient: "from-orange-500 to-amber-500"
  },
  summary: {
    problem: { title: { en: "Problem", de: "Problem" }, text: { en: "...", de: "..." } },
    whyItMatters: { title: { en: "Why", de: "Warum" }, text: { en: "...", de: "..." } },
    solution: { title: { en: "Solution", de: "Loesung" }, text: { en: "...", de: "..." } }
  },
  problem: { title: { en: "...", de: "..." }, subtitle: { en: "...", de: "..." }, bullets: [], metrics: [] },
  framework: { title: { en: "...", de: "..." }, subtitle: { en: "...", de: "..." }, items: [] },
  bestPractices: { title: { en: "...", de: "..." }, categories: [] },
  roadmap: { title: { en: "...", de: "..." }, subtitle: { en: "...", de: "..." }, phases: [] },
  caseStudies: { title: { en: "...", de: "..." }, subtitle: { en: "...", de: "..." }, cases: [] },
  solutionsConnection: { title: { en: "...", de: "..." }, subtitle: { en: "...", de: "..." }, items: [] },
  whoThisIsFor: { title: { en: "...", de: "..." }, subtitle: { en: "...", de: "..." }, icp: { en: "...", de: "..." }, personas: [] },
  finalCta: { headline: { en: "...", de: "..." }, subline: { en: "...", de: "..." }, trustSignals: [], bookingUrl: "#", downloadUrl: "#" }
};
```

**Warum das funktionieren sollte:**
- Nur ~35 Zeilen
- Keine verschachtelten Arrays mit Content
- Alle Felder vorhanden aber leer/minimal
- Nutzt `meta` aus dem bestehenden Index

### Schritt 2-18: Weitere Skeletons

Nach erfolgreichem Test von Schritt 1:
- Erstelle naechste Skeleton-Datei
- Wiederhole fuer alle 18 Playbooks
- Jede Datei ~30-40 Zeilen

### Schritt 19: Content-Index

Erstelle: `src/data/playbooks/content/index.ts`

```typescript
export { gtmRevenueData } from './gtm-revenue';
// ... weitere exports
```

## Unterschied zu vorher

| Vorher | Jetzt |
|--------|-------|
| 5 Dateien parallel | 1 Datei pro Nachricht |
| ~80 Zeilen pro Datei | ~35 Zeilen pro Datei |
| Komplexe Struktur | Flache Platzhalter |

## Naechster Schritt

Erstelle NUR `src/data/playbooks/content/gtm-revenue.ts` mit Ultra-Minimal Skeleton (~35 Zeilen).

Wenn das funktioniert, machen wir die naechsten 17 Dateien einzeln.

