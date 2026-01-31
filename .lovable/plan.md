

# Korrektur: Pigtie und LifiMax im Client-Ticker wiederherstellen

## Übersicht

Die Anonymisierung war nur für die Case Study 9 gedacht. **Pigtie** und **LifiMax** müssen in den Client-Tickern wiederhergestellt werden.

## Änderungen

### 1. `src/pages/Cases.tsx` (Zeilen 20-25)

**Vorher (aktuell falsch):**
```typescript
const clientNames = [
  'the beautiful unleashed truth', 'KODE®', 'FILADOS', '2p Team',
  'Microsoft Surface', 'XING e-Recruiting', 'Lexware', 'Haufe Group', 'smapOne',
  'SBB E-Business', 'Swarovski', 'local.ch', 'BWK Group', 'DBA', 'Burda Media',
  'START', 'Elba', 'Semigator', 'Umantis', 'Sage', 'BeQueen', 'BonGusto'
];
```

**Nachher (korrigiert):**
```typescript
const clientNames = [
  'Pigtie', 'the beautiful unleashed truth', 'KODE®', 'FILADOS', '2p Team',
  'Microsoft Surface', 'XING e-Recruiting', 'Lexware', 'Haufe Group', 'smapOne',
  'SBB E-Business', 'Swarovski', 'local.ch', 'BWK Group', 'DBA', 'Burda Media',
  'START', 'Elba', 'Semigator', 'Umantis', 'Sage', 'LifiMax', 'BeQueen', 'BonGusto'
];
```

### 2. `src/components/homepage/FinalCTAOptimized.tsx` (Zeilen 56-62)

**Vorher (aktuell falsch):**
```typescript
const clients = [
  'the beautiful unleashed truth', 'KODE®', 'FILADOS', 
  '2p Team', 'Microsoft', 'XING e-Recruiting', 'Lexware', 
  'Haufe Group', 'smapOne', 'SBB E-Business', 'Swarovski', 
  'local.ch', 'BWK Group', 'DBA', 'Burda Media', 
  'START', 'Elba', 'Semigator', 'Umantis', 'Sage'
];
```

**Nachher (korrigiert):**
```typescript
const clients = [
  'Pigtie', 'the beautiful unleashed truth', 'KODE®', 'FILADOS', 
  '2p Team', 'Microsoft', 'XING e-Recruiting', 'Lexware', 
  'Haufe Group', 'smapOne', 'SBB E-Business', 'Swarovski', 
  'local.ch', 'BWK Group', 'DBA', 'Burda Media', 
  'START', 'Elba', 'Semigator', 'Umantis', 'Sage', 'LifiMax'
];
```

## Zusammenfassung

| Datei | Änderung |
|-------|----------|
| `src/pages/Cases.tsx` | `'Pigtie'` und `'LifiMax'` wieder hinzufügen |
| `src/components/homepage/FinalCTAOptimized.tsx` | `'Pigtie'` und `'LifiMax'` wieder hinzufügen |

## Was bleibt unverändert

- Case Study 9 in `caseStudies.ts` bleibt anonymisiert (STRAPAG → "the established company", LifiMAX → "the LiFi startup")

