

# Plan: Team-Namen im Footer verlinken

## Uebersicht

Die Team-Mitglieder im Footer sollen zu ihren jeweiligen Profilseiten verlinkt werden.

## Aenderungen

**Datei:** `src/components/Footer.tsx`

### 1. Team-Array erweitern (Zeilen 30-34)

```typescript
// Aktuell:
const team = [
  { name: 'Michel Lason', role: 'Strategy. Scaling. Impact.' },
  { name: 'Alban Halili', role: 'Growth. AI Solutions. Automation.' },
  { name: 'Florian Metzger', role: 'RevOps. GTM. Venture Architect.' },
];

// Neu:
const team = [
  { name: 'Michel Lason', role: 'Strategy. Scaling. Impact.', href: '/ml' },
  { name: 'Alban Halili', role: 'Growth. AI Solutions. Automation.', href: '/ah' },
  { name: 'Florian Metzger', role: 'RevOps. GTM. Venture Architect.', href: '/fm' },
];
```

### 2. Rendering anpassen (Zeilen 133-138)

```tsx
// Aktuell:
{team.map((member) => (
  <li key={member.name} className="text-sm">
    <span className="text-foreground font-medium">{member.name}</span>
    <span className="text-muted-foreground ml-2 text-xs">/ {member.role}</span>
  </li>
))}

// Neu:
{team.map((member) => (
  <li key={member.name} className="text-sm">
    <Link 
      to={member.href} 
      className="text-foreground font-medium hover:text-primary transition-colors"
    >
      {member.name}
    </Link>
    <span className="text-muted-foreground ml-2 text-xs">/ {member.role}</span>
  </li>
))}
```

## Ergebnis

| Name | Link |
|------|------|
| Michel Lason | /ml |
| Alban Halili | /ah |
| Florian Metzger | /fm |

