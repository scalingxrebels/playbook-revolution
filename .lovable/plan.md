

## Plan: USP-Vergleichstabelle korrigieren

### Änderungen in `src/components/homepage/HomeComparison.tsx`

**1. Interface erweitern** — neue Spalte `diy` hinzufügen:
```typescript
interface Row {
  labelDe: string;
  labelEn: string;
  mckinsey: Status;
  freelancer: Status;
  intern: Status;
  diy: Status;      // NEU
  wir: Status;
}
```

**2. Rows-Daten komplett ersetzen** (Zeilen 25–31):

| Label DE | Label EN | McKinsey | Freelancer | Intern | DIY | Wir |
|---|---|---|---|---|---|---|
| Market Insights | Market Insights | ✅ | ⚠️ | ❌ | ❌ | ✅ |
| Winning Mechanisms | Winning Mechanisms | ✅ | ⚠️ | ⚠️ | ❌ | ✅ |
| Operative Umsetzung | Operational Execution | ❌ | ⚠️ | ✅ | ⚠️ | ✅ |
| AI als Multiplier | AI as Multiplier | ❌ | ❌ | ❌ | ❌ | ✅ |
| Speed (30 Tage) | Speed (30 Days) | ❌ | ⚠️ | ❌ | ❌ | ✅ |
| Startup-Kultur | Startup Culture | ❌ | ✅ | ✅ | ✅ | ✅ |

**3. Header-Spalten anpassen** (Zeilen 106–115):
- "McKinsey" → "McKinsey / BCG"
- Neue Spalte "DIY / Intern lösen" (DE) / "DIY / Solve Internally" (EN) zwischen "Intern" und "Wir"

**4. TableBody** — zusätzliche `<TableCell>` für `row.diy` einfügen (zwischen intern und wir).

### Keine sonstigen Änderungen
Nur Daten und eine Spalte hinzufügen. Layout, Styling und alle anderen Sektionen bleiben unverändert.

