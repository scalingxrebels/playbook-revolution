

# Plan: Stats-Texte im Expertise Hero korrigieren

## Gewünschte Änderungen

### Stat 2 (Zeilen 180-184)
| Feld | Aktuell | Neu |
|------|---------|-----|
| value | `22+` | `22+` |
| label | `Companies` | `AI-Native Companies` |
| sublabel | `AI-native analyzed` | `analyzed` |

### Stat 4 (Zeilen 192-196)
| Feld | Aktuell | Neu |
|------|---------|-----|
| value | `OPEN` | `OPEN SOURCE` |
| label | `Shared` | `Collaborative` |
| sublabel | `not peer-reviewed yet` | `not-peer-reviewed (yet)` |

## Code-Änderungen

**Datei:** `src/components/ResearchHub.tsx`

```typescript
// Stat 2 (Zeilen 180-185)
{ 
  value: '22+', 
  label: { en: 'AI-Native Companies', de: 'AI-Native Unternehmen' }, 
  sublabel: { en: 'analyzed', de: 'analysiert' },
  color: 'accent' as const 
},

// Stat 4 (Zeilen 192-197)
{ 
  value: 'OPEN SOURCE', 
  label: { en: 'Collaborative', de: 'Kollaborativ' }, 
  sublabel: { en: 'not-peer-reviewed (yet)', de: 'noch nicht peer-reviewed' },
  color: 'accent' as const 
},
```

## Ergebnis

Die Stats werden wie folgt angezeigt:

```
┌──────────────────┬──────────────────┬──────────────────┬──────────────────┐
│   250,000+       │   22+            │   3              │   OPEN SOURCE    │
│   Words          │   AI-Native      │   Frameworks     │   Collaborative  │
│   of research    │   Companies      │   developed      │   not-peer-      │
│                  │   analyzed       │                  │   reviewed (yet) │
└──────────────────┴──────────────────┴──────────────────┴──────────────────┘
```

