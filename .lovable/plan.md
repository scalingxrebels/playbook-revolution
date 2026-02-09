

# Fix: FilloutBookingModal Höhe erhöhen

## Problem

Das Booking Modal für Expert Sessions (und andere Buchungsformulare) zeigt das Formular nicht vollständig an:
- Ca. 50px fehlen oben
- Ca. 50px fehlen unten
- Aktuelle iframe-Höhe: 700px

## Lösung

Die iframe-Höhe von 700px auf **800px** erhöhen, damit das Formular vollständig angezeigt wird.

---

## Änderungen

| Datei | Änderung |
|-------|----------|
| `src/components/forms/FilloutBookingModal.tsx` | iframe-Höhe von 700px auf 800px erhöhen |

---

## Code-Änderung

### Aktuell (Zeile 104)
```tsx
<div className="w-full h-[700px]">
```

### Neu
```tsx
<div className="w-full h-[800px]">
```

---

## Ergebnis

- Das Booking Modal zeigt alle Formularinhalte vollständig an
- Keine abgeschnittenen Inhalte mehr oben oder unten
- Betrifft alle Buchungsformulare: Inflection Call, Expert Session, Team-Calls

