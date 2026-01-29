

# Plan: "Learn More"-Button Navigation reparieren

## Problem-Diagnose

Der "Learn More"-Button registriert Klicks, aber die Navigation zu `/playbooks/gtm-revenue` findet nicht statt. Die URL bleibt auf `/playbooks`.

## Analyse

| Komponente | Status | Problem |
|------------|--------|---------|
| Route in App.tsx | OK | `/playbooks/gtm-revenue` ist korrekt registriert |
| Daten in playbooks.ts | OK | `slug: 'gtm-revenue'` ist vorhanden |
| handleLearnMore() | Verdächtig | `navigate()` wird aufgerufen, aber Navigation passiert nicht |
| useNavigate Hook | Möglich | Hook könnte im falschen Kontext sein |

## Lösung

Die Navigation von `navigate()` auf direkte Link-Navigation umstellen. Dies ist robuster und vermeidet potenzielle Probleme mit dem React Router Hook.

### Änderung in `src/components/playbooks/PlaybookCard.tsx`

**Option 1: Link-Komponente statt Button (empfohlen)**

Den "Learn More"-Button durch einen Link ersetzen, der wie ein Button gestylt ist:

```typescript
import { Link } from 'react-router-dom';

// Statt:
<Button
  size="sm"
  variant="outline"
  className="flex-1"
  onClick={(e) => {
    e.stopPropagation();
    handleLearnMore();
  }}
>
  {language === 'en' ? 'Learn More' : 'Mehr erfahren'}
</Button>

// Neu:
<Button
  size="sm"
  variant="outline"
  className="flex-1"
  asChild
>
  <Link to={`/playbooks/${playbook.slug}`}>
    {language === 'en' ? 'Learn More' : 'Mehr erfahren'}
  </Link>
</Button>
```

**Vorteile:**
- Link-Komponente ist nativ für Navigation ausgelegt
- `asChild` überträgt Button-Styles auf den Link
- Kein JavaScript-Handler nötig - reine HTML-Navigation
- SEO-freundlicher (echte `<a>`-Tags)
- Funktioniert garantiert mit React Router

### Entfernen von ungenutztem Code

- `useNavigate` Import kann entfernt werden
- `handleLearnMore` Funktion kann entfernt werden

---

## Dateien

| Datei | Aktion | Beschreibung |
|-------|--------|--------------|
| `src/components/playbooks/PlaybookCard.tsx` | Bearbeiten | Button durch Link mit `asChild` ersetzen |

