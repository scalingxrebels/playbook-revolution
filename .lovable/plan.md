

## Plan: Team-Sektion erweitern

### Änderungen in `src/components/homepage/HomeTeam.tsx`

**1. Michel — LinkedIn-Link hinzufügen**
Nach dem `text-xs` Absatz (Zeile 75–77) einen LinkedIn-Link einfügen, gleicher Stil wie bei Alban/Florian:
- URL: `https://www.linkedin.com/in/michellason/`

**2. Alban — Bild + neuer Titel**
- Kleines rundes Bild (w-10 h-10) mit `src="/images/team-alban.png"` vor dem Text einfügen
- Titel ändern zu: `Partner · Growth · Operations · AI Solutions`

**3. Florian — Bild + neuer Titel**
- Kleines rundes Bild (w-10 h-10) mit `src="/images/team-florian.png"` vor dem Text einfügen
- Titel ändern zu: `Partner · GTM · Venture Architect · RevOps`

### Visuelles Ergebnis der Partner-Cards

```text
┌──────────────────────────────────────────┐
│ [IMG] Alban Halili                  [in] │
│       Partner · Growth · Operations ·    │
│       AI Solutions                       │
└──────────────────────────────────────────┘
```

Bilder als kleine Kreise (`rounded-full border border-accent/20`), konsistent mit dem bestehenden Card-Layout.

