

# Plan: Framework Section mit Beispielen ergänzen

## Änderungen in `src/data/playbooks/content/ai-native-scaling.ts`

### FrameworkItem Interface erweitern (in types.ts)

Neues optionales Feld `examples` hinzufügen:

```typescript
export interface FrameworkItem {
  // ... existing fields
  examples?: BilingualText[]; // NEU: Company examples
}
```

### Framework Items aktualisieren

**1. STRATEGY (Zeilen 76-96)**

```typescript
examples: [
  { en: "Midjourney: AI-native image generation (not 'Photoshop + AI')", de: "Midjourney: AI-native Bildgenerierung (nicht 'Photoshop + AI')" },
  { en: "Cursor: AI-native code editor (not 'VS Code + AI')", de: "Cursor: AI-nativer Code-Editor (nicht 'VS Code + AI')" }
]
```

**2. SETUP (Zeilen 97-117)**

```typescript
examples: [
  { en: "Perplexity: 40 people, €100M ARR (€2.5M/Employee)", de: "Perplexity: 40 Mitarbeiter, €100M ARR (€2.5M/Mitarbeiter)" },
  { en: "Harvey: 50 people, €300M valuation (AI-native legal)", de: "Harvey: 50 Mitarbeiter, €300M Bewertung (AI-native Legal)" }
]
```

**3. EXECUTION (Zeilen 118-138)**

```typescript
examples: [
  { en: "Notion: AI-native product (AI writes, organizes, searches)", de: "Notion: AI-natives Produkt (AI schreibt, organisiert, sucht)" },
  { en: "Figma: AI-native design (AI generates, suggests, automates)", de: "Figma: AI-natives Design (AI generiert, schlägt vor, automatisiert)" }
]
```

**4. OPERATIONALIZATION (Zeilen 139-159)**

```typescript
examples: [
  { en: "Ramp: AI-powered finance (automated expense management)", de: "Ramp: AI-gestützte Finanzen (automatisiertes Expense Management)" },
  { en: "Brex: AI-native banking (automated credit decisions)", de: "Brex: AI-natives Banking (automatisierte Kreditentscheidungen)" }
]
```

---

## UI-Anpassung in PlaybookFrameworkSection.tsx

Beispiele im AccordionContent anzeigen:

```tsx
{/* Examples (wenn vorhanden) */}
{item.examples && item.examples.length > 0 && (
  <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
    <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wide">
      {language === 'de' ? 'Beispiele' : 'Examples'}
    </p>
    <ul className="space-y-1">
      {item.examples.map((ex, i) => (
        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
          <span className="text-primary mt-0.5">→</span>
          {t(ex)}
        </li>
      ))}
    </ul>
  </div>
)}
```

---

## Zusammenfassung

| Datei | Änderung |
|-------|----------|
| `src/data/playbooks/types.ts` | `examples?: BilingualText[]` zu FrameworkItem hinzufügen |
| `src/data/playbooks/content/ai-native-scaling.ts` | 4× examples Arrays hinzufügen (Zeilen 76-159) |
| `src/components/playbooks/sections/PlaybookFrameworkSection.tsx` | Examples-Block im AccordionContent rendern |

