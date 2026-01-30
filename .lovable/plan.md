

# Plan: Dynamische Stats im Playbook Hero

## Analyse

**Aktueller Stand (Zeilen 42-47 in PlaybookLibrary.tsx):**
```typescript
const playbookStats = [
  { value: '1', label: { en: 'Playbooks', de: 'Playbooks' }, color: 'primary' },
  { value: '5', label: { en: 'Areas', de: 'Bereiche' }, color: 'accent' },
  { value: '3', label: { en: 'Filters', de: 'Filter' }, color: 'primary' },
  { value: '7', label: { en: 'Roles', de: 'Rollen' }, color: 'accent' },
];
```

**Problem:** 
- Stats hardcoded
- Nur einzeiliges Label unterstützt
- Aktuelles Design zeigt nicht die gewünschten zweizeiligen Labels

**Gewünschtes Design:**
```text
┌──────────────────┬──────────────────┬──────────────────┬──────────────────┐
│   17 Playbooks   │   5 Areas        │   10-30x ROI     │   FREE           │
│   Complete       │   Growth, Ops,   │   Proven         │   Download       │
│   Framework      │   Board, More    │   Results        │   All PDFs       │
└──────────────────┴──────────────────┴──────────────────┴──────────────────┘
```

---

## Implementierung

### 1. SharedHero Interface erweitern (`src/components/shared/SharedHero.tsx`)

**Änderung:** `sublabel` Property hinzufügen für zweite Zeile

```typescript
interface StatItem {
  value: string;
  label: { en: string; de: string };
  sublabel?: { en: string; de: string };  // NEU
  color?: 'primary' | 'accent';
}
```

### 2. SharedHero Rendering erweitern (Zeilen 96-104)

**Vorher:**
```typescript
<span className="block text-xs text-muted-foreground uppercase tracking-wide">
  {language === 'de' ? stat.label.de : stat.label.en}
</span>
```

**Nachher:**
```typescript
<span className="block text-xs text-muted-foreground uppercase tracking-wide">
  {language === 'de' ? stat.label.de : stat.label.en}
</span>
{stat.sublabel && (
  <span className="block text-[10px] text-muted-foreground/70 mt-0.5">
    {language === 'de' ? stat.sublabel.de : stat.sublabel.en}
  </span>
)}
```

### 3. PlaybookLibrary Stats dynamisch generieren (`src/components/PlaybookLibrary.tsx`)

**Änderung (Zeilen 42-47):**

```typescript
const playbookStats = [
  { 
    value: String(totalPlaybooks),  // DYNAMISCH!
    label: { en: 'Playbooks', de: 'Playbooks' }, 
    sublabel: { en: 'Complete Framework', de: 'Komplettes Framework' },
    color: 'primary' as const 
  },
  { 
    value: '5', 
    label: { en: 'Areas', de: 'Bereiche' }, 
    sublabel: { en: 'Growth, Ops, Board...', de: 'Growth, Ops, Board...' },
    color: 'accent' as const 
  },
  { 
    value: '10-30x', 
    label: { en: 'ROI', de: 'ROI' }, 
    sublabel: { en: 'Proven Results', de: 'Bewiesene Ergebnisse' },
    color: 'primary' as const 
  },
  { 
    value: 'FREE', 
    label: { en: 'Download', de: 'Download' }, 
    sublabel: { en: 'All PDFs', de: 'Alle PDFs' },
    color: 'accent' as const 
  },
];
```

---

## Zusammenfassung der Änderungen

| Datei | Änderung | Zeilen |
|-------|----------|--------|
| `src/components/shared/SharedHero.tsx` | Interface + Rendering erweitern | ~10 Zeilen |
| `src/components/PlaybookLibrary.tsx` | Stats dynamisch + neue Texte | ~20 Zeilen |

---

## Ergebnis

- **STAT 1:** `{totalPlaybooks} Playbooks` - dynamisch generiert aus der Playbook-Registry
- **STAT 2:** `5 Areas` - Coverage der 5 Domains
- **STAT 3:** `10-30x ROI` - bewiesene Ergebnisse
- **STAT 4:** `FREE Download` - Value Proposition

Die Playbook-Anzahl aktualisiert sich automatisch, wenn neue Playbooks hinzugefügt werden.

