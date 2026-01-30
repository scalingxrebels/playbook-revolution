

# Plan: Expertise Hero Anpassung

## Aktueller Stand

Die `ResearchHub.tsx` verwendet bereits `SharedHero` mit einfachen Stats ohne Sublabels (Zeilen 173-178, 189-199).

## Gewünschte Änderungen

### 1. Hero Content aktualisieren (Zeilen 189-199)

**Neu:**
- **Overline:** "Expertise × Speed = Impact" (behalten)
- **Headline Line 1:** "The Science Behind"
- **Headline Line 2:** "AI-Native Scaling"
- **Subheadline:** "We analyzed 22 AI-native companies (Midjourney, Perplexity, Cursor, etc.) to understand why they scale 8.2x faster than traditional startups. Here's what we found."

### 2. Stats mit Sublabels erweitern (Zeilen 173-178)

| Value | Label | Sublabel |
|-------|-------|----------|
| 250,000+ | Words | of research |
| 22+ | Companies | AI-native analyzed |
| 3 | Frameworks | developed |
| OPEN | Shared | not peer-reviewed yet |

## Code-Änderungen

```typescript
// Zeilen 173-178 ersetzen
const researchStats = [
  { 
    value: '250,000+', 
    label: { en: 'Words', de: 'Wörter' }, 
    sublabel: { en: 'of research', de: 'Forschung' },
    color: 'primary' as const 
  },
  { 
    value: '22+', 
    label: { en: 'Companies', de: 'Unternehmen' }, 
    sublabel: { en: 'AI-native analyzed', de: 'AI-native analysiert' },
    color: 'accent' as const 
  },
  { 
    value: '3', 
    label: { en: 'Frameworks', de: 'Frameworks' }, 
    sublabel: { en: 'developed', de: 'entwickelt' },
    color: 'primary' as const 
  },
  { 
    value: 'OPEN', 
    label: { en: 'Shared', de: 'Geteilt' }, 
    sublabel: { en: 'not peer-reviewed yet', de: 'noch nicht peer-reviewed' },
    color: 'accent' as const 
  },
];
```

```typescript
// Zeilen 189-199 ersetzen
<SharedHero
  overlineEn="Expertise × Speed = Impact"
  overlineDe="Expertise × Speed = Impact"
  headlineLine1En="The Science Behind"
  headlineLine1De="Die Wissenschaft hinter"
  headlineLine2En="AI-Native Scaling"
  headlineLine2De="AI-Native Scaling"
  subheadlineEn="We analyzed 22 AI-native companies (Midjourney, Perplexity, Cursor, etc.) to understand why they scale 8.2x faster than traditional startups. Here's what we found."
  subheadlineDe="Wir haben 22 AI-native Unternehmen (Midjourney, Perplexity, Cursor, etc.) analysiert, um zu verstehen, warum sie 8.2x schneller skalieren als traditionelle Startups. Das haben wir herausgefunden."
  stats={researchStats}
/>
```

## Datei

| Datei | Änderung |
|-------|----------|
| `src/components/ResearchHub.tsx` | Stats + Hero Content aktualisieren |

## Ergebnis

Der Expertise Hero zeigt nun:
- Neue Headline: "The Science Behind AI-Native Scaling"
- Neue Subheadline mit konkreten Unternehmensnamen und 8.2x-Metrik
- 4 Stats im Playbook-Style mit zweizeiligen Labels

