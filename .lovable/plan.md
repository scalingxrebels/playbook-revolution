

# Plan: Zusammenlegung der "Next Step" und "Book a Call" Sections

## Übersicht

Die beiden separaten Sections werden zu einer einzigen finalen Conversion-Section zusammengelegt. Das Ergebnis kombiniert das beste aus beiden Welten mit einem eingebetteten Fillout-Formular.

---

## Neue Struktur

```text
┌─────────────────────────────────────────────────────────────┐
│  OVERLINE: "Nächster Schritt" / "Next Step"                 │
│  HEADLINE: "Bereit für systematisches Wachstum?"            │
│  SUBHEADLINE: "Erhalte eine personalisierte Roadmap..."     │
├─────────────────────────────────────────────────────────────┤
│  LEFT COLUMN                    │  RIGHT COLUMN             │
│  ┌───────────────────────────┐  │  ┌──────────────────────┐ │
│  │ "Was du bekommst:"        │  │  │ FILLOUT EMBED        │ │
│  │ • Schwachstelle ident.    │  │  │ (500px Höhe)         │ │
│  │ • Reifegrad bestimmen     │  │  │                      │ │
│  │ • Konkreter Aktionsplan   │  │  │                      │ │
│  ├───────────────────────────┤  │  │                      │ │
│  │ NEUE STATS (5 Stück)      │  │  │                      │ │
│  │ 80+ | 140+ | 1,53x        │  │  │                      │ │
│  │ +20pp | +15pp             │  │  └──────────────────────┘ │
│  └───────────────────────────┘  │                           │
└─────────────────────────────────────────────────────────────┘
```

---

## Beizubehaltende Elemente

### Von "Next Step" (FinalCTAOptimized):
| Element | Deutsch | Englisch |
|---------|---------|----------|
| Overline | Nächster Schritt | Next Step |
| Headline | Bereit für systematisches Wachstum? | Ready for Systematic Growth? |
| Subheadline | Erhalte eine personalisierte Roadmap in 30 Minuten | Get a personalized roadmap in 30 minutes |

### Von "Book a Call" (BookingCTA):
| Element | Inhalt |
|---------|--------|
| Benefits-Titel | "Was du bekommst:" / "What you'll get:" |
| Benefit 1 | Schwachstelle identifizieren (Target Icon) |
| Benefit 2 | Reifegrad bestimmen (Zap Icon) |
| Benefit 3 | Konkreter Aktionsplan (Users Icon) |

---

## Neue Stats (ersetzen alte)

| Stat | Label DE | Label EN |
|------|----------|----------|
| 80+ | Companies Scaled | Companies Scaled |
| 140+ | Erfolgreiche Projekte | Successful Projects |
| 1,53x | Valuation Growth | Valuation Growth |
| +20pp | Rule of 40 | Rule of 40 |
| +15pp | ARR Growth | ARR Growth |

---

## Fillout-Formular Einbettung

Das Fillout-Formular wird per `useEffect` dynamisch geladen:

```tsx
useEffect(() => {
  // Fillout Script dynamisch laden
  const script = document.createElement('script');
  script.src = 'https://server.fillout.com/embed/v1/';
  script.async = true;
  document.body.appendChild(script);
  
  return () => {
    document.body.removeChild(script);
  };
}, []);
```

```tsx
// Formular-Container
<div 
  style={{ width: '100%', height: '500px' }}
  data-fillout-id="bE8Mpbmb4mus"
  data-fillout-embed-type="standard"
  data-fillout-inherit-parameters
  data-fillout-dynamic-resize
/>
```

---

## Technische Umsetzung

### 1. Datei komplett überarbeiten: `src/components/homepage/FinalCTAOptimized.tsx`

Die Datei wird zur einzigen Conversion-Section umgebaut mit:
- Zwei-Spalten-Layout (Benefits links, Formular rechts)
- Benefits-Karten von BookingCTA übernommen
- Neue Stats-Metriken
- Fillout-Formular-Einbettung mit dynamischem Script-Loading

### 2. Datei löschen: `src/components/BookingCTA.tsx`

Diese Komponente wird nicht mehr benötigt.

### 3. Datei bearbeiten: `src/pages/Index.tsx`

```tsx
// ENTFERNEN:
import BookingCTA from '@/components/BookingCTA';

// ENTFERNEN (Zeilen 43-46):
{/* BOOKING FORM */}
<div id="booking-form">
  <BookingCTA />
</div>
```

Die `id="booking-form"` wird in FinalCTAOptimized integriert.

---

## Design-Details

| Element | Wert |
|---------|------|
| Section Höhe | `min-h-[60vh]` (erhöht für Formular) |
| Padding | `py-24 lg:py-32` |
| Container | `max-w-6xl mx-auto px-6` |
| Layout | `grid lg:grid-cols-2 gap-12` |
| Benefits-Cards | `border-2 border-border hover:border-primary/50` |
| Stats-Grid | `grid grid-cols-5 gap-4` |
| Formular-Container | `rounded-3xl bg-card/50 border-2 border-border` |

---

## Betroffene Dateien

| Datei | Aktion |
|-------|--------|
| `src/components/homepage/FinalCTAOptimized.tsx` | Komplett überarbeiten |
| `src/components/BookingCTA.tsx` | Löschen |
| `src/pages/Index.tsx` | BookingCTA-Import und -Verwendung entfernen |

