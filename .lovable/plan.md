

## Plan: Toggle zum Umschalten des Hidden-Status in der Content Registry

### Ansatz

Da die `hidden`-Flags aktuell in statischen TS-Dateien liegen, brauchen wir eine **Datenbank-Tabelle als Override-Layer**. Die statischen Daten bleiben die Quelle, aber eine neue Tabelle `content_visibility` speichert Overrides. Wenn ein Eintrag in der DB existiert, ueberschreibt dessen `hidden`-Wert den statischen Default.

### Technische Umsetzung

**1. Neue DB-Tabelle `content_visibility`**
```sql
CREATE TABLE public.content_visibility (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content_type text NOT NULL,        -- 'solution' | 'playbook' | 'case' | 'insight'
  content_id text NOT NULL,          -- slug oder id des Items
  hidden boolean NOT NULL DEFAULT false,
  updated_at timestamptz DEFAULT now(),
  updated_by uuid REFERENCES auth.users(id),
  UNIQUE(content_type, content_id)
);

ALTER TABLE public.content_visibility ENABLE ROW LEVEL SECURITY;

-- Nur Admins koennen lesen und schreiben
CREATE POLICY "Admins full access" ON public.content_visibility
  FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'))
  WITH CHECK (has_role(auth.uid(), 'admin'));

-- Oeffentliches Lesen fuer alle (damit die public-facing Seiten filtern koennen)
CREATE POLICY "Public can read visibility" ON public.content_visibility
  FOR SELECT TO anon, authenticated
  USING (true);
```

**2. Custom Hook `useContentVisibility`**
- Laedt alle Overrides aus `content_visibility` via Supabase
- Bietet eine `mergeVisibility(items, contentType)` Funktion: nimmt statische Items, merged DB-Overrides
- Bietet `toggleVisibility(contentType, contentId, hidden)` zum Upserten
- Verwendet React Query fuer Caching und Refetch nach Toggle

**3. ContentRegistry.tsx anpassen**
- Toggle-Switch (Switch-Komponente) pro Zeile in der Status-Spalte statt nur StatusBadge
- Beim Klick: `toggleVisibility` aufrufen, optimistic update
- Summary Cards nutzen gemergte Daten

**4. Oeffentliche Seiten anpassen**
- `visibleSolutionTiles`, `visiblePlaybooks`, `visibleCaseStudies`, `visibleInsights` durch den Hook ersetzen -- ODER einen zentralen Helper der beim App-Start die Overrides laedt und die statischen Filter-Arrays ueberschreibt
- Einfachster Ansatz: Ein `ContentVisibilityProvider` im App-Root, der einmalig die DB-Overrides laedt und die `hidden`-Flags in den statischen Arrays merged. Oeffentliche Komponenten nutzen weiterhin `visibleX`-Arrays ueber den Provider.

### Aenderungen im Ueberblick

| Was | Datei(en) |
|---|---|
| DB-Migration | `content_visibility` Tabelle + RLS |
| Neuer Hook | `src/hooks/useContentVisibility.ts` |
| Provider | `src/contexts/ContentVisibilityContext.tsx` |
| Registry UI | `src/pages/ContentRegistry.tsx` -- Switch statt Badge |
| App Root | `src/App.tsx` -- Provider einbinden |
| Oeffentliche Exports | `src/data/solutionTiles.ts`, `playbooks.ts`, `cases/caseStudies.ts`, `insights.ts` -- `visibleX` durch Context-basierte Variante ersetzen |

### Scope
- 1 DB-Migration, 2 neue Dateien, ~5 bestehende Dateien editieren
- Kein Edge Function noetig, alles ueber Supabase Client SDK

