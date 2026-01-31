

# Implementierungskonzept: Anonymisierung der Kundennamen

## Übersicht

Entfernung der spezifischen Firmennamen und Ersetzung durch beschreibende Formulierungen.

## Betroffene Dateien & Ersetzungen

### 1. `src/data/cases/caseStudies.ts` (Case Study 9)

| Original | Ersetzung |
|----------|-----------|
| STRAPAG | "The Wireless Engineering Company" / "the established company" |
| LifiMAX | "the LiFi startup" / "the deep-tech startup" |
| (STRAPAG) | entfernen |
| LifiMAX, a deep-tech startup | "a deep-tech LiFi startup" |

**Beispiele:**

```
VORHER: "A leading wireless engineering company (STRAPAG), technologically excellent..."
NACHHER: "A leading wireless engineering company, technologically excellent..."

VORHER: "Should they integrate LifiMAX, a deep-tech startup..."
NACHHER: "Should they integrate the LiFi startup, a deep-tech venture..."

VORHER: "❌ STRAPAG: Engineer-mindset, no GTM system"
NACHHER: "❌ The established company: Engineer-mindset, no GTM system"

VORHER: "❌ LifiMAX: Unclear future (shut down/sold/integrated?)"
NACHHER: "❌ The LiFi startup: Unclear future (shut down/sold/integrated?)"

VORHER: "STRAPAG ARR"
NACHHER: "Company ARR"

VORHER: "Option 1: STRAPAG Pure (No LiFi Integration)"
NACHHER: "Option 1: Standalone (No LiFi Integration)"

VORHER: "STRAPAG sells LiFi to existing wireless customers"
NACHHER: "The company sells LiFi to existing wireless customers"
```

### 2. `src/pages/Cases.tsx` (Client Ticker)

```typescript
// VORHER
const clientNames = [
  'Pigtie', 'the beautiful unleashed truth', 'KODE®', ...
];

// NACHHER
const clientNames = [
  'the beautiful unleashed truth', 'KODE®', ...  // Pigtie entfernt
];
```

### 3. `src/components/homepage/FinalCTAOptimized.tsx` (Client Showcase)

```typescript
// VORHER
const clients = [
  'Pigtie', 'the beautiful unleashed truth', 'KODE®', ...
];

// NACHHER
const clients = [
  'the beautiful unleashed truth', 'KODE®', ...  // Pigtie entfernt
];
```

## Nicht betroffen (absichtlich)

- `src/pages/About.tsx`: Pigtie als Portfolio Company bleibt erhalten (kein Case Study)

## Technische Details

### Ersetzungsregeln für Case Study 9

| Kontext | STRAPAG wird zu | LifiMAX wird zu |
|---------|-----------------|-----------------|
| In Klammern `(STRAPAG)` | Entfernen | Entfernen |
| Als Subjekt | "The company" / "The established company" | "The LiFi startup" / "The deep-tech venture" |
| In Metriken `STRAPAG ARR` | "Company ARR" | "Startup Revenue" |
| In Optionen `Option 1: STRAPAG Pure` | "Option 1: Standalone" | - |
| Possessiv `STRAPAG's` | "The company's" | "The startup's" |

### Deutsche Übersetzungen

| Englisch | Deutsch |
|----------|---------|
| The established company | Das etablierte Unternehmen |
| The LiFi startup | Das LiFi-Startup |
| The deep-tech venture | Das Deep-Tech-Venture |
| The company | Das Unternehmen |
| Standalone | Standalone |

## Zusammenfassung der Änderungen

| Datei | Änderung |
|-------|----------|
| `src/data/cases/caseStudies.ts` | ~166 Ersetzungen (STRAPAG, LifiMAX) |
| `src/pages/Cases.tsx` | 1 Entfernung (Pigtie aus clientNames) |
| `src/components/homepage/FinalCTAOptimized.tsx` | 1 Entfernung (Pigtie aus clients) |

## Ergebnis

Alle Case Studies verwenden dann konsistent beschreibende Formulierungen statt echter Firmennamen, was die Vertraulichkeit wahrt und dem Muster der anderen anonymisierten Cases entspricht.

