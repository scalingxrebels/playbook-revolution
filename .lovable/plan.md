
# Implementierungsplan: AI as Multiplier Card + Zurück-Button

## Übersicht

Erweiterung der Glossar-Seite um:
1. Fünfte Capability-Karte "AI as Multiplier"
2. Zurück-Button für Navigation

---

## Änderungen

### 1. Neue Capability-Karte: "AI as Multiplier"

**Position:** Als fünfte Karte nach den 4 Capabilities (full-width, zentriert)

| Eigenschaft | Wert |
|-------------|------|
| **Icon** | `Sparkles` (lucide-react) |
| **Name** | AI as Multiplier |
| **Label DE** | Der Verstärker |
| **Label EN** | The Force Multiplier |
| **Beschreibung DE** | AI multipliziert die Wirkung aller 4 Capabilities - nicht additiv, sondern exponentiell |
| **Beschreibung EN** | AI multiplies the impact of all 4 capabilities - not additive, but exponential |
| **Farbe** | `cyan-500` (differenziert von den anderen 4) |

**Layout:** Die 4 Capabilities bleiben im 2x2 Grid, der AI-Multiplier erscheint darunter als full-width Karte mit zentriertem Inhalt.

### 2. Zurück-Button

**Position:** Unter dem Titel, vor der Einleitung

**Komponenten:**
- `Button` mit `variant="ghost"`
- `ArrowLeft` Icon (lucide-react)
- `useNavigate` für Navigation (`navigate(-1)`)

**Text:** "Zurück" / "Back" (zweisprachig)

---

## Technische Details

### Datei: `src/pages/Glossar.tsx`

**Neue Imports:**
```typescript
import { Sparkles, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
```

**Capabilities Array erweitern:**
```typescript
{
  icon: Sparkles,
  name: 'AI as Multiplier',
  label: language === 'de' ? 'Der Verstärker' : 'The Force Multiplier',
  description: language === 'de'
    ? 'AI multipliziert die Wirkung aller 4 Capabilities – nicht additiv, sondern exponentiell'
    : 'AI multiplies the impact of all 4 capabilities – not additive, but exponential',
  color: 'text-cyan-500',
  bgColor: 'bg-cyan-500/10',
  borderColor: 'border-cyan-500/30',
  isMultiplier: true,  // Flag für spezielles Layout
}
```

**Grid-Layout anpassen:**
- Erste 4 Karten: 2x2 Grid
- 5. Karte (Multiplier): Full-width darunter

---

## Visuelles Layout

```text
┌─────────────────────────────────────────────────┐
│ ← Zurück                                        │
│                                                 │
│ Glossar                                         │
│ [Einleitungstext]                               │
│                                                 │
│ Die Lösung: 4 Kern-Capabilities                 │
│ ┌─────────────┐ ┌─────────────┐                 │
│ │ Strategy    │ │ Setup       │                 │
│ └─────────────┘ └─────────────┘                 │
│ ┌─────────────┐ ┌─────────────┐                 │
│ │ Execution   │ │ Operational.│                 │
│ └─────────────┘ └─────────────┘                 │
│                                                 │
│ ┌───────────────────────────────────────────┐   │
│ │     ✨ AI as Multiplier                   │   │
│ │     AI multipliziert die Wirkung...       │   │
│ └───────────────────────────────────────────┘   │
│                                                 │
│ ⚠️ Kernprinzip...                              │
└─────────────────────────────────────────────────┘
```

---

## Dateien

| Aktion | Datei |
|--------|-------|
| **Bearbeiten** | `src/pages/Glossar.tsx` |
