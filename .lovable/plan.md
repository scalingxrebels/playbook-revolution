
# Plan: "Learn more"-Buttons für Team-Mitglieder

## Übersicht

Ergänzung eines "Learn more"-Buttons für jeden Team-Member in der About-Seite. Der Button für Michel Lason führt zur `/ml`-Route.

---

## Technische Änderungen

### Datei: `src/pages/About.tsx`

#### 1. Interface erweitern (Zeile 18-27)

Das `TeamMember`-Interface erhält ein optionales `profileLink`-Feld:

```tsx
interface TeamMember {
  name: string;
  role: { de: string; en: string };
  tagline: { de: string; en: string };
  bio: { de: string; en: string };
  highlight: { de: string; en: string };
  expertise: string[];
  image: string;
  linkedin?: string;
  profileLink?: string;  // NEU
}
```

#### 2. Team-Daten erweitern (Zeilen 47-95)

Für jeden Team-Member wird `profileLink` hinzugefügt:

| Name | profileLink |
|------|-------------|
| Michel Lason | `/ml` |
| Alban Halili | `undefined` (oder später eine Route) |
| Florian Metzger | `undefined` (oder später eine Route) |

```tsx
{
  name: 'Michel Lason',
  // ... existing fields
  profileLink: '/ml'
},
{
  name: 'Alban Halili',
  // ... existing fields
  // profileLink: undefined (optional)
},
{
  name: 'Florian Metzger',
  // ... existing fields
  // profileLink: undefined (optional)
}
```

#### 3. Button zur Team-Card hinzufügen (nach Zeile 271)

Nach dem Highlight-Block wird ein "Learn more"-Button eingefügt:

```tsx
{/* Highlight */}
<div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg">
  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
  <p className="text-xs text-muted-foreground">{member.highlight[lang]}</p>
</div>

{/* Learn More Button - NEU */}
{member.profileLink ? (
  <Link to={member.profileLink}>
    <Button variant="ghost" size="sm" className="w-full mt-4 group">
      {lang === 'de' ? 'Mehr erfahren' : 'Learn more'}
      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
    </Button>
  </Link>
) : (
  <Button variant="ghost" size="sm" className="w-full mt-4 opacity-50 cursor-not-allowed" disabled>
    {lang === 'de' ? 'Bald verfügbar' : 'Coming soon'}
  </Button>
)}
```

#### 4. Link Import hinzufügen (Zeile 1-12)

```tsx
import { Link } from 'react-router-dom';
```

---

## Design-Konsistenz

Der Button verwendet:
- `variant="ghost"` für subtilen Look (passt zum Card-Design)
- `size="sm"` für passende Größe
- `ArrowRight`-Icon mit Hover-Animation
- Volle Breite (`w-full`) für konsistenten Look in allen Cards
- "Coming soon" für Team-Member ohne eigene Seite (disabled state)

---

## Betroffene Dateien

| Datei | Änderung |
|-------|----------|
| `src/pages/About.tsx` | Interface + Daten + Card-Rendering |

---

## Ergebnis

- Jede Team-Card erhält einen "Learn more" / "Mehr erfahren"-Button
- Michel Lason's Button verlinkt zu `/ml`
- Alban und Florian haben einen deaktivierten "Coming soon"-Button (kann später aktualisiert werden)
