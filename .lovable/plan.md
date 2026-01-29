
# Plan: Onboarding-Hint für Solutions-Navigation

## Übersicht

Ein einmaliger, ausblend­barer Hinweis erklärt beim ersten Besuch die Filterlogik. Nach dem Schließen wird der Status in `localStorage` gespeichert.

---

## Neue Komponente

### `src/components/solutions/FilterOnboardingHint.tsx`

```typescript
// Eigenständige Komponente für den Onboarding-Hint
// - Prüft localStorage auf 'solutions-filter-hint-dismissed'
// - Zeigt Hinweis nur wenn nicht dismissed
// - Schließen-Button setzt localStorage und blendet aus
```

**Features:**
- Dezentes Design mit Info-Icon und Schließen-Button
- Bilingual (DE/EN) basierend auf LanguageContext
- Fade-out Animation beim Schließen
- localStorage-Key: `solutions-filter-hint-dismissed`

---

## Design des Hints

| Element | Beschreibung |
|---------|--------------|
| Position | Direkt unter der Suchleiste, vor den Filtern |
| Stil | Dezenter Banner mit `bg-primary/5` und `border-primary/20` |
| Icon | Lightbulb (💡) für Tipp-Charakter |
| Schließen | X-Button rechts, setzt localStorage |

### Text (bilingual)

**Deutsch:**
> **Tipp:** Filtere nach Challenge (dein Problem) oder Typ (Lösungsformat) – oder kombiniere beide für präzise Ergebnisse.

**English:**
> **Tip:** Filter by Challenge (your problem) or Type (solution format) – or combine both for precise results.

---

## Integration in Solutions.tsx

```typescript
// Zeile 6: Import hinzufügen
import FilterOnboardingHint from '@/components/solutions/FilterOnboardingHint';

// Zeile 129: Nach Suchleiste, vor Challenge-Tabs einfügen
<FilterOnboardingHint />
```

---

## Technische Details

### localStorage Logik
```typescript
const [isDismissed, setIsDismissed] = useState(() => {
  return localStorage.getItem('solutions-filter-hint-dismissed') === 'true';
});

const handleDismiss = () => {
  localStorage.setItem('solutions-filter-hint-dismissed', 'true');
  setIsDismissed(true);
};
```

### Styling
- Responsive: Volle Breite auf Mobile, max-width auf Desktop
- Konsistent mit dem bestehenden Design-System
- Sanfte Übergangsanimation beim Ausblenden

---

## Dateien

| Datei | Aktion |
|-------|--------|
| `src/components/solutions/FilterOnboardingHint.tsx` | Neu erstellen |
| `src/pages/Solutions.tsx` | Import + Komponente einfügen |

