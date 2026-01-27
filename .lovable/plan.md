
# Plan: Harmonisierung des Hero-zu-Sektion-Abstands

## Analyse

Der optimale Abstand bei **Solutions** ergibt sich aus:
- `SharedHero` endet mit `pb-16`
- Erste Sektion startet mit `py-6 md:py-8`
- **Gesamtabstand: ~6-8 Einheiten (24-32px)**

Bei den anderen Seiten fehlt dieser konsistente Abstand:

| Seite | Aktueller Zustand | Problem |
|-------|-------------------|---------|
| Playbooks | Direkt `<div>` ohne Padding | Inkonsistenter Abstand |
| Expertise | Direkt `<div>` ohne Padding | Inkonsistenter Abstand |
| Cases | `<main className="pb-20">` | Kein `py-X` nach Hero |
| About | `<main className="pb-20">` | Kein `py-X` nach Hero |

---

## Technische Änderungen

### 1. Playbooks-Seite: `src/components/PlaybookLibrary.tsx`

**Zeile 666** - Container nach SharedHero erhält top-padding:

```tsx
// VORHER:
<div className="max-w-7xl mx-auto px-6 relative z-10">

// NACHHER:
<div className="max-w-7xl mx-auto px-6 relative z-10 pt-6 md:pt-8">
```

### 2. Expertise-Seite: `src/components/ResearchHub.tsx`

**Zeile 200** - Container nach SharedHero erhält top-padding:

```tsx
// VORHER:
<div className="container max-w-7xl mx-auto px-4">

// NACHHER:
<div className="container max-w-7xl mx-auto px-4 pt-6 md:pt-8">
```

### 3. Cases-Seite: `src/pages/Cases.tsx`

**Zeile 146** - Main-Element erhält top-padding:

```tsx
// VORHER:
<main className="pb-20">

// NACHHER:
<main className="py-6 md:py-8 pb-20">
```

Alternativ (sauberer):
```tsx
<main className="pt-6 md:pt-8 pb-20">
```

### 4. About-Seite: `src/pages/About.tsx`

**Zeile 108** - Main-Element erhält top-padding:

```tsx
// VORHER:
<main className="pb-20">

// NACHHER:
<main className="pt-6 md:pt-8 pb-20">
```

---

## Betroffene Dateien

| Datei | Zeile | Änderung |
|-------|-------|----------|
| `src/components/PlaybookLibrary.tsx` | 666 | `pt-6 md:pt-8` zu Container hinzufügen |
| `src/components/ResearchHub.tsx` | 200 | `pt-6 md:pt-8` zu Container hinzufügen |
| `src/pages/Cases.tsx` | 146 | `pt-6 md:pt-8` zu main hinzufügen |
| `src/pages/About.tsx` | 108 | `pt-6 md:pt-8` zu main hinzufügen |

---

## Ergebnis

Nach der Implementierung haben alle Seiten einen konsistenten Abstand von `py-6 md:py-8` (24px / 32px auf md+) zwischen Hero und erster Sektion - identisch mit der Solutions-Seite.
