

# Hybrides Case Study System - Implementierungsplan

## Konzept

| Bereich | Zweck | Datentyp |
|---------|-------|----------|
| **Expertise Hub** | Wissenschaftliche Validierung der Frameworks | Echte AI-Native Unternehmen (7) |
| **Cases Hub** | Vertrauliche Kundenprojekte präsentieren | Anonymisierte ScalingX-Projekte |
| **Homepage** | Social Proof durch bekannte Namen | Echte AI-Native Unternehmen (3) |

---

## Architektur-Übersicht

```text
┌─────────────────────────────────────────────────────────────────┐
│                        CASE STUDY SYSTEM                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────┐     ┌─────────────────────┐            │
│  │   RESEARCH CASES    │     │   CLIENT CASES      │            │
│  │   (Echte Companies) │     │   (Anonymisiert)    │            │
│  └──────────┬──────────┘     └──────────┬──────────┘            │
│             │                           │                        │
│             ▼                           ▼                        │
│  ┌─────────────────────┐     ┌─────────────────────┐            │
│  │ src/data/cases/     │     │ src/data/cases/     │            │
│  │   research.ts       │     │   clients.ts        │            │
│  │                     │     │                     │            │
│  │ - Midjourney        │     │ - B2B SaaS €15M    │            │
│  │ - Cursor            │     │ - Enterprise SW    │            │
│  │ - Perplexity        │     │ - FinTech Scale    │            │
│  │ - OpenAI            │     │ - MarTech Growth   │            │
│  │ - Stripe            │     │ - Analytics NRR    │            │
│  │ - Figma             │     │                     │            │
│  │ - Notion            │     │                     │            │
│  └──────────┬──────────┘     └──────────┬──────────┘            │
│             │                           │                        │
│             ▼                           ▼                        │
│  ┌─────────────────────┐     ┌─────────────────────┐            │
│  │ /expertise          │     │ /cases              │            │
│  │ /case-study/:id     │     │ Modal oder Inline   │            │
│  │ (Detail Pages)      │     │ (kein Deep Link)    │            │
│  └─────────────────────┘     └─────────────────────┘            │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Dateien und Änderungen

### Neue Dateien erstellen

| Datei | Beschreibung |
|-------|--------------|
| `src/data/cases/types.ts` | Gemeinsame TypeScript Interfaces |
| `src/data/cases/research.ts` | 7 echte AI-Native Unternehmen (aus CaseStudy.tsx extrahiert) |
| `src/data/cases/clients.ts` | 5+ anonymisierte Kundenprojekte |
| `src/data/cases/index.ts` | Export und Utility-Funktionen |

### Zu bearbeitende Dateien

| Datei | Änderung |
|-------|----------|
| `src/pages/Cases.tsx` | Daten aus `clients.ts` importieren, Modal statt Link |
| `src/pages/CaseStudy.tsx` | Daten aus `research.ts` importieren |
| `src/components/ResearchHub.tsx` | Optional: Research Cases referenzieren |

---

## Datenmodell

### Research Case (Echte Unternehmen)

```typescript
interface ResearchCase {
  id: string;                    // 'midjourney', 'cursor', etc.
  name: string;
  icon: React.ElementType;
  color: string;
  darkColor?: string;
  founded: string;
  founder: string;
  focus: BilingualText;
  headline: { metric: string; label: BilingualText };
  secondaryMetrics: MetricItem[];
  thetaIndex: ThetaScores;
  growthTimeline: TimelineItem[];
  learnings: BilingualList;
  keyMetrics: MetricItem[];
  strategicInsights: BilingualList;
  dataSource: string;            // 'ANST v4.5.3', 'AMF v4.1', etc.
}
```

### Client Case (Anonymisiert)

```typescript
interface ClientCase {
  id: string;                    // 'b2b-saas-gtm', etc.
  industry: string;              // 'B2B SaaS', 'FinTech', etc.
  stage: string;                 // 'Series A', 'Series B', etc.
  challenge: BilingualText;
  solution: BilingualText;
  result: BilingualText;
  metrics: MetricItem[];
  playbooks: string[];           // Verlinkte Playbooks
  timeline: string;              // '18 Monate', '12 Wochen', etc.
  gradient: string;
  confidential: true;            // Flag für anonymisierte Cases
}
```

---

## UI-Verhalten

### Cases Landing Page (`/cases`)

| Element | Aktuell | Neu |
|---------|---------|-----|
| Card-Klick | Link zu `/case-study/:id` (broken) | Modal mit Details |
| CTA-Button | "Case Study lesen" | "Details ansehen" |
| Datenquelle | Inline in Komponente | Import aus `clients.ts` |

### Modal-Inhalt für Client Cases

- Challenge-Beschreibung (erweitert)
- Lösung mit Playbook-Referenzen
- Metriken-Grid (Before/After)
- "Ähnliches Projekt besprechen" CTA
- Keine Verlinkung zu externen Detail-Pages

---

## Implementierungsschritte

### Phase 1: Datenstruktur

1. `src/data/cases/types.ts` erstellen mit Interfaces
2. `src/data/cases/research.ts` mit 7 echten Companies aus CaseStudy.tsx extrahieren
3. `src/data/cases/clients.ts` mit 5 anonymisierten Cases erstellen
4. `src/data/cases/index.ts` als Barrel-Export

### Phase 2: Cases Hub Refactoring

5. `src/pages/Cases.tsx` refactoren:
   - Import von `clientCases` aus Datendatei
   - Button-Link durch Modal-Trigger ersetzen
   - Modal-Komponente für Case-Details hinzufügen

### Phase 3: CaseStudy Refactoring

6. `src/pages/CaseStudy.tsx` refactoren:
   - Import von `researchCases` aus Datendatei
   - Bestehende Logik beibehalten

### Phase 4: Konsistenz prüfen

7. Expertise-Komponenten überprüfen (ScalingXCaseStudies, CaseStudyComparisonTable)
8. Homepage ProofOptimized überprüfen

---

## Ergebnis

| Route | Inhalt | Interaktion |
|-------|--------|-------------|
| `/` (Homepage) | Midjourney, Cursor, Perplexity | Statistiken |
| `/cases` | 5+ anonymisierte Kundenprojekte | Modal mit Details |
| `/expertise` | 7 echte AI-Native Companies | Grid + Modals + Table |
| `/case-study/:id` | Detail-Pages für Research Cases | Deep-Links funktionieren |

---

## Vorteile des hybriden Systems

1. **Vertraulichkeit**: Echte Kundenprojekte bleiben anonym
2. **Wissenschaftliche Integrität**: Research Cases mit Quellenangaben
3. **SEO**: Echte Firmennamen für `/case-study/` Detail-Pages
4. **Konsistenz**: Klare Trennung der Datenquellen
5. **Wartbarkeit**: Zentrale Datendateien statt Inline-Daten

