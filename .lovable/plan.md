
# Plan: Team-Section in ResearchHub angleichen

## Übersicht

Die "Who's Behind This Research?" Section soll die gleichen Zwei-Zeiler-Beschreibungen und Team-Bilder wie die About-Page (TeamSection.tsx) verwenden.

---

## Änderungen in `src/components/ResearchHub.tsx`

### 1. Team-Daten aktualisieren (Zeilen 148-170)

**ALT:**
```typescript
const teamMembers = [
  {
    name: 'Michel Lason',
    role: { en: 'Lead Researcher', de: 'Lead Researcher' },
    description: { en: '18+ years scaling experience\nEx-Haufe, Ex-smapOne', ... },
    linkedIn: '...',
    link: '/ml'
  },
  // ...
];
```

**NEU:**
```typescript
const teamMembers = [
  {
    name: 'Michel Lason',
    role: { en: 'Lead Researcher', de: 'Lead Researcher' },
    tagline: { en: 'Strategy. Scaling. Impact.', de: 'Strategy. Scaling. Impact.' },
    description: { 
      en: 'Ex-Management Consultant, SaaS-VP, Scaling Executive, Investor & Captain.', 
      de: 'Ex-Managementberater, SaaS-VP, Scaling Executive, Investor & Captain.' 
    },
    image: '/images/team-michel.png',
    linkedIn: 'https://linkedin.com/in/michel-lason',
    link: '/ml'
  },
  {
    name: 'Alban Halili',
    role: { en: 'Empirical Analysis', de: 'Empirische Analyse' },
    tagline: { en: 'Growth. AI Solutions. Automation.', de: 'Growth. AI Solutions. Automation.' },
    description: { 
      en: 'Sales- & Marketing-Guru, Innovator, King of Agents & Automations.', 
      de: 'Sales- & Marketing-Guru, Innovator, King of Agents & Automations.' 
    },
    image: '/images/team-alban.png',
    linkedIn: 'https://linkedin.com/in/alban-halili',
    link: '/ah'
  },
  {
    name: 'Florian Metzger',
    role: { en: 'Theoretical Framework', de: 'Theoretisches Framework' },
    tagline: { en: 'RevOps. GTM. Venture Architect.', de: 'RevOps. GTM. Venture Architect.' },
    description: { 
      en: 'Growth-Hacker and GTM-Architect for SaaS & B2C with Co-Founder-Mindset.', 
      de: 'Growth-Hacker und GTM-Architekt für SaaS & B2C mit Co-Founder-Mindset.' 
    },
    image: '/images/team-florian.png',
    linkedIn: 'https://linkedin.com/in/florian-metzger',
    link: '/fm'
  }
];
```

---

### 2. UI-Anpassung: Bild statt Icon (Zeilen 467-486)

**ALT (Icon-Placeholder):**
```tsx
<div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center">
  <Users className="w-10 h-10 text-accent-foreground" />
</div>
```

**NEU (Echtes Bild + Tagline):**
```tsx
{/* Team Image */}
<div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-foreground/10">
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover"
  />
</div>
<h3 className="font-bold text-xl mb-1">{member.name}</h3>
<p className="text-primary font-medium mb-1">{member.role[language]}</p>
{/* Tagline (Zwei-Zeiler #1) */}
<p className="text-accent font-medium italic text-sm mb-2">
  {member.tagline[language]}
</p>
{/* Description (Zwei-Zeiler #2) */}
<p className="text-sm text-muted-foreground mb-4">
  {member.description[language]}
</p>
```

---

## Erwartetes Ergebnis

| Element | Alt | Neu |
|---------|-----|-----|
| Bild | Icon-Placeholder (Users) | Echte Team-Fotos |
| Tagline | Fehlend | "Strategy. Scaling. Impact." etc. |
| Description | Zwei-Zeiler (Erfahrung) | Zwei-Zeiler (About-Style) |
| Konsistenz | Unterschiedlich zu About | Identisch mit About |

---

## Datei-Änderungen

| Datei | Aktion |
|-------|--------|
| `src/components/ResearchHub.tsx` | teamMembers erweitern (image, tagline), UI-Rendering anpassen |
