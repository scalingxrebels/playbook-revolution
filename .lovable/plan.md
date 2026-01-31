
# Implementierungsplan: AI-Native Scaling unter Team im Footer

## Übersicht

Die neue Sektion "AI-Native Scaling" mit dem Glossar-Link wird **innerhalb der Team-Spalte** hinzugefügt, direkt unter den Team-Mitgliedern. Das 3-Spalten-Grid bleibt unverändert.

---

## Änderungen

### Datei: `src/components/Footer.tsx`

**1. Glossar aus legalLinks entfernen (Zeile 13):**
```typescript
// Vorher
{ label: language === 'de' ? 'Glossar' : 'Glossary', href: '/glossar' },

// Entfernen - bleibt nur AGB, Datenschutz, Impressum
```

**2. Neue Sektion in der Team-Spalte (nach Zeile 145):**

Innerhalb des bestehenden Team-Divs wird eine zweite Überschrift + Link-Liste hinzugefügt:

```typescript
{/* Team */}
<div className="py-8 sm:px-8">
  {/* Team - existierend */}
  <h4>Team</h4>
  <ul>...</ul>

  {/* NEU: AI-Native Scaling */}
  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 mt-8">
    AI-Native Scaling
  </h4>
  <ul className="space-y-3">
    <li>
      <Link to="/glossar" className="group flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
        <span>{language === 'de' ? 'Glossar' : 'Glossary'}</span>
        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    </li>
  </ul>
</div>
```

---

## Layout-Struktur

```text
┌──────────────┬──────────────────────┬──────────────┐
│   Sitemap    │        Team          │   Contact    │
│              │  Michel Lason        │              │
│   Home       │  Alban Halili        │  Book a Call │
│   Solutions  │  Florian Metzger     │  Email       │
│   Playbooks  │                      │  lasr.io     │
│   ...        │  AI-Native Scaling   │              │
│              │  → Glossar           │              │
└──────────────┴──────────────────────┴──────────────┘
```

---

## Dateien

| Aktion | Datei |
|--------|-------|
| **Bearbeiten** | `src/components/Footer.tsx` |
