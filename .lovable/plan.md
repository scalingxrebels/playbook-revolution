
# Plan: About-Seite Links aktualisieren

## Übersicht

Zwei Änderungen an der About-Seite:
1. "Learn more" Button für Alban Halili aktivieren → verlinkt zu `/ah`
2. Pigtie Link in "What we build" Sektion hinzufügen → `https://www.pigtie.de/`

---

## Änderung 1: Alban Halili Profile Link

### Aktuelle Situation (Zeile 69-83)
```tsx
{
  name: 'Alban Halili',
  role: { de: 'Partner', en: 'Partner' },
  // ... weitere Properties
  linkedin: 'https://www.linkedin.com/in/alban-halili/'
  // profileLink fehlt → Button zeigt "Coming soon"
}
```

### Neue Situation
```tsx
{
  name: 'Alban Halili',
  role: { de: 'Partner', en: 'Partner' },
  // ... weitere Properties
  linkedin: 'https://www.linkedin.com/in/alban-halili/',
  profileLink: '/ah'  // NEU
}
```

**Ergebnis:** Der "Bald verfügbar" / "Coming soon" Button wird zu einem aktiven "Mehr erfahren" / "Learn more" Link zu `/ah`.

---

## Änderung 2: Pigtie Link hinzufügen

### Aktuelle Situation (Zeilen 500-503)
```tsx
<div className="flex items-center justify-between">
  <Badge variant="muted">Portfolio Company</Badge>
  <span className="text-sm text-muted-foreground">Coming Soon</span>
</div>
```

### Neue Situation
```tsx
<div className="flex items-center justify-between">
  <Badge variant="muted">Portfolio Company</Badge>
  <a 
    href="https://www.pigtie.de/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center text-sm text-primary hover:underline"
  >
    Visit Pigtie
    <ExternalLink className="w-3 h-3 ml-1" />
  </a>
</div>
```

**Ergebnis:** Der "Coming Soon" Text wird durch einen klickbaren Link zu `https://www.pigtie.de/` ersetzt (analog zum lasr.io Link).

---

## Betroffene Datei

| Datei | Änderungen |
|-------|------------|
| `src/pages/About.tsx` | Zeile 82: `profileLink: '/ah'` hinzufügen |
| `src/pages/About.tsx` | Zeilen 500-503: "Coming Soon" → Link zu pigtie.de |

---

## Ergebnis

| Element | Vorher | Nachher |
|---------|--------|---------|
| Alban "Learn more" Button | Grau, disabled, "Coming soon" | Aktiv, verlinkt zu `/ah` |
| Pigtie in "What we build" | "Coming Soon" Text | Klickbarer Link zu `https://www.pigtie.de/` |
