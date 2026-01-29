
# Plan: Schwarzen Balken über Heroes entfernen

## Problem

**Playbooks.tsx & Expertise.tsx:**
```tsx
<Navigation />
<main className="pt-20">     ← 80px schwarzes Padding
  <PlaybookLibrary />
</main>
```

**Cases.tsx & Solutions.tsx:**
```tsx
<Navigation />
<SharedHero ... />           ← Direkt nach Navigation, kein Extra-Padding
<main ...>
```

## Lösung

Das `pt-20` vom `<main>` Tag entfernen und die Struktur an Cases/Solutions angleichen.

---

## Änderungen

### 1. `src/pages/Playbooks.tsx`

```tsx
// Vorher:
<main className="pt-20">
  <PlaybookLibrary />
</main>

// Nachher:
<PlaybookLibrary />
<Footer />
```

Kein `<main>` Wrapper nötig, da PlaybookLibrary bereits aus mehreren Sections besteht.

---

### 2. `src/pages/Expertise.tsx`

```tsx
// Vorher:
<main className="pt-20">
  <ResearchHub />
</main>

// Nachher:
<ResearchHub />
<Footer />
```

Gleiche Änderung wie bei Playbooks.

---

## Datei-Übersicht

| Datei | Aktion | Beschreibung |
|-------|--------|--------------|
| `src/pages/Playbooks.tsx` | Bearbeiten | `pt-20` main-Wrapper entfernen |
| `src/pages/Expertise.tsx` | Bearbeiten | `pt-20` main-Wrapper entfernen |

---

## Erwartetes Ergebnis

Alle vier Seiten (Solutions, Cases, Playbooks, Expertise) haben identische Strukturen:
- Navigation → Hero → Content → Footer
- Kein schwarzer Balken zwischen Navigation und Hero
