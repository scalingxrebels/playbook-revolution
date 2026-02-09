

# Fix: FilloutBookingModal - Breite erhöhen und doppeltes X entfernen

## Problem-Analyse

Aus dem Screenshot sind zwei Probleme ersichtlich:

| Problem | Ursache |
|---------|---------|
| Modal zu schmal | `sm:max-w-[900px]` - Calendly-Kalender wird abgeschnitten |
| Doppeltes X | Manueller X-Button in DialogHeader + automatischer X-Button aus DialogContent |

---

## Lösung

### 1. Modal-Breite erhöhen

Änderung von `900px` auf `1100px` für optimale Calendly-Darstellung:

```tsx
// Vorher (Zeile 96)
className="sm:max-w-[900px] max-h-[90vh] p-0 overflow-hidden"

// Nachher
className="sm:max-w-[1100px] max-h-[90vh] p-0 overflow-hidden"
```

### 2. Manuellen X-Button entfernen

Der manuelle X-Button im `DialogHeader` (Zeilen 103-109) wird entfernt, da `DialogContent` bereits einen eingebauten Close-Button hat:

```tsx
// Vorher
<DialogHeader className="p-4 pb-0 flex flex-row items-center justify-between">
  <DialogTitle className="text-lg font-semibold">
    {title || defaultTitle}
  </DialogTitle>
  <button 
    onClick={onClose}
    className="rounded-full p-1 hover:bg-muted transition-colors"
    aria-label="Close"
  >
    <X className="w-5 h-5" />
  </button>
</DialogHeader>

// Nachher (manueller Button entfernt)
<DialogHeader className="p-4 pb-0">
  <DialogTitle className="text-lg font-semibold">
    {title || defaultTitle}
  </DialogTitle>
</DialogHeader>
```

### 3. Unnötigen Import entfernen

Da der manuelle X-Button entfernt wird, ist der `X`-Import von lucide-react nicht mehr nötig:

```tsx
// Vorher
import { X } from 'lucide-react';

// Nachher: Diese Zeile entfernen
```

---

## Datei-Änderungen

| Datei | Änderung |
|-------|----------|
| `src/components/forms/FilloutBookingModal.tsx` | Breite auf 1100px, manuellen X-Button entfernen, X-Import entfernen |

---

## Ergebnis

Nach der Änderung:
- Modal ist 1100px breit (ausreichend für Calendly-Kalender)
- Nur ein einziger X-Button zum Schließen (von DialogContent)
- Cleaner Code ohne redundante Elemente

