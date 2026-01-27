

# Plan: Community aus der Navigation entfernen

## Übersicht

Der "Community"-Link wird aus der Haupt- und Mobil-Navigation entfernt. Die Community-Seite bleibt bestehen und kann später wieder integriert werden.

---

## Änderung

### Datei: `src/components/Navigation.tsx`

**Zeilen 19-20 entfernen:**

```tsx
// ENTFERNEN:
{ key: 'nav.community', href: '/community', label: 'Community', isRoute: true },
```

**Vorher (navItems Array):**
```tsx
const navItems = [
  { key: 'nav.home', href: '/', label: 'Home', isRoute: true },
  { key: 'nav.solutions', href: '/solutions', label: 'Solutions', isRoute: true },
  { key: 'nav.playbooks', href: '/playbooks', label: 'Playbooks', isRoute: true },
  { key: 'nav.expertise', href: '/expertise', label: 'Expertise', isRoute: true },
  { key: 'nav.community', href: '/community', label: 'Community', isRoute: true },  // ← ENTFERNEN
  { key: 'nav.cases', href: '/cases', label: 'Cases', isRoute: true },
  { key: 'nav.about', href: '/about', label: 'About', isRoute: true },
];
```

**Nachher (navItems Array):**
```tsx
const navItems = [
  { key: 'nav.home', href: '/', label: 'Home', isRoute: true },
  { key: 'nav.solutions', href: '/solutions', label: 'Solutions', isRoute: true },
  { key: 'nav.playbooks', href: '/playbooks', label: 'Playbooks', isRoute: true },
  { key: 'nav.expertise', href: '/expertise', label: 'Expertise', isRoute: true },
  { key: 'nav.cases', href: '/cases', label: 'Cases', isRoute: true },
  { key: 'nav.about', href: '/about', label: 'About', isRoute: true },
];
```

---

## Hinweis

- Die Route `/community` in `App.tsx` bleibt erhalten
- Die Seite `src/pages/Community.tsx` bleibt erhalten
- Der Link kann später einfach wieder zum navItems-Array hinzugefügt werden

---

## Betroffene Datei

| Datei | Änderung |
|-------|----------|
| `src/components/Navigation.tsx` | Community-Eintrag aus navItems entfernen (Zeile 19) |

