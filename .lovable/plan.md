
# Plan: Playbook-Seite mit Solutions Hub harmonisieren

## Übersicht der Änderungen

| Aufgabe | Beschreibung |
|---------|--------------|
| 1a | Navigation-Styling an Solutions anpassen (Farbe, Formatierung) |
| 1b | CTA-Sektion am Ende durch `SolutionCTA`-Stil ersetzen |
| 2 | Alle 13 Playbook-Kacheln aus `playbooks.ts` löschen |
| 3 | Quick Tip Text an 3-Filter-Logik anpassen |

---

## 1a. Navigation-Styling harmonisieren

### Unterschiede zwischen Solutions und Playbooks

| Aspekt | Solutions Hub | Playbooks (aktuell) |
|--------|---------------|---------------------|
| Aktiver Button | `bg-primary text-primary-foreground` (solide) | `bg-primary/20 text-primary border-primary/30` (semi-transparent) |
| Inaktiver Button | `bg-card border-border text-muted-foreground` | `bg-card border-border` |
| Hover-Effekt | `hover:border-primary/50 hover:text-foreground` | `hover:border-primary/50` |
| Icon im aktiven State | Keine spezielle Behandlung | Gleich |

### Änderungen

**PlaybookFilterRowCentered.tsx** (Zeile 48-57):

```typescript
// VORHER (aktuell):
isActive
  ? 'bg-primary/20 text-primary border-primary/30'
  : 'bg-card border-border hover:border-primary/50'

// NACHHER (wie Solutions):
isActive
  ? 'bg-primary text-primary-foreground shadow-sm'
  : 'bg-card border border-border text-muted-foreground hover:bg-muted hover:text-foreground hover:border-primary/50'
```

**PlaybookFilterRowCompact.tsx** (Zeile 48-55):

```typescript
// Gleiche Anpassung für kleinere Pills
isActive
  ? 'bg-primary text-primary-foreground shadow-sm'
  : 'bg-card border border-border text-muted-foreground hover:bg-muted hover:text-foreground hover:border-primary/50'
```

---

## 1b. CTA-Sektion am Ende ersetzen

### Aktueller Playbook-CTA (Zeile 130-150 in PlaybookLibrary.tsx)

```text
┌─────────────────────────────────────────────────────────────┐
│        [Calendar] Need help choosing the right playbook?     │
│                                                              │
│              [ Take Assessment → ]                           │
└─────────────────────────────────────────────────────────────┘
```

### Neuer CTA (wie SolutionCTA.tsx)

```text
┌─────────────────────────────────────────────────────────────┐
│                      Still not sure which                    │
│                    playbook is right?                        │
│                                                              │
│  Book a free Inflection Call. We'll identify your bottleneck │
│  in 30 minutes and recommend the right path.                │
│                                                              │
│          [ 📞 Book Free Inflection Call → ]                  │
│                                                              │
│      ✓ No commitment   ✓ 30 minutes   ✓ Concrete steps      │
└─────────────────────────────────────────────────────────────┘
```

### Änderungen in PlaybookLibrary.tsx

Ersetze den CTA-Block (Zeile 130-150) mit dem SolutionCTA-Stil:
- Gradient-Hintergrund: `bg-gradient-to-br from-primary/10 via-background to-accent/10`
- Headline: "Still not sure which playbook is right?"
- Subline: Inflection Call Beschreibung
- Button: `size="xl"` mit Phone-Icon
- Trust Signals: 3 Checkmarks

---

## 2. Alle Playbook-Kacheln löschen

**Datei:** `src/data/playbooks.ts`

Das Array `playbooks` wird geleert (leeres Array):

```typescript
export const playbooks: Playbook[] = [];
```

**Auswirkung:**
- Die Seite zeigt den Empty State: "No playbooks found"
- Filter bleiben funktionsfähig
- Stats in SharedHero müssen angepasst werden (0 Playbooks)

---

## 3. Quick Tip Text anpassen

**Datei:** `src/components/playbooks/PlaybookOnboardingHint.tsx`

### Aktueller Text (veraltet):

```typescript
de: {
  label: 'Tipp:',
  message: 'Beantworte 3-5 Fragen, um dein passendes Playbook zu finden.',
},
en: {
  label: 'Quick Tip:',
  message: 'Answer 3-5 questions to find your perfect playbook.',
}
```

### Neuer Text (passend zur 3-Filter-Logik):

```typescript
de: {
  label: 'Tipp:',
  message: 'Filtere nach Bereich, Engpass oder Rolle – oder kombiniere alle drei für präzise Ergebnisse.',
},
en: {
  label: 'Tip:',
  message: 'Filter by Area, Bottleneck or Role – or combine all three for precise results.',
}
```

---

## Datei-Übersicht

| Datei | Änderung |
|-------|----------|
| `src/components/playbooks/PlaybookFilterRowCentered.tsx` | Button-Styling auf Solutions-Pattern |
| `src/components/playbooks/PlaybookFilterRowCompact.tsx` | Button-Styling auf Solutions-Pattern |
| `src/components/PlaybookLibrary.tsx` | CTA-Sektion ersetzen, Stats anpassen |
| `src/data/playbooks.ts` | Alle Playbooks löschen (leeres Array) |
| `src/components/playbooks/PlaybookOnboardingHint.tsx` | Text an 3-Filter-Logik anpassen |

---

## Visueller Vergleich: Navigation-Buttons

### Solutions Hub (Referenz)

```css
/* Aktiv */
bg-primary text-primary-foreground shadow-sm

/* Inaktiv */
bg-card border border-border text-muted-foreground
hover:bg-muted hover:text-foreground hover:border-primary/50
```

### Playbooks (nach Änderung)

```css
/* Identisch zu Solutions */
```

---

## Hinweis zu den Playbooks

Da alle 13 Playbooks gelöscht werden:

1. **Empty State** wird angezeigt ("Keine Playbooks gefunden")
2. **SharedHero Stats** werden angepasst auf `'0'` Playbooks
3. **Filter bleiben** funktionsfähig für zukünftige Playbooks
4. **CTA bleibt** sichtbar (Inflection Call buchen)
