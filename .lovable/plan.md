

## Plan: Featured-Toggle in Content Registry

### Ansatz

Die `content_visibility`-Tabelle hat bereits `content_type` + `content_id` + `hidden`. Statt eine neue Tabelle zu bauen, fügen wir eine `featured`-Spalte zur bestehenden `content_visibility`-Tabelle hinzu. Das gleiche Upsert-Pattern wie für `hidden` wird für `featured` verwendet.

### Änderungen

**1. DB-Migration** — `featured` Spalte hinzufügen:
```sql
ALTER TABLE public.content_visibility 
ADD COLUMN featured boolean NOT NULL DEFAULT false;
```

**2. `useContentVisibility.ts`** — erweitern:
- Interface `VisibilityOverride` bekommt `featured: boolean`
- Neue Funktion `toggleFeatured(contentType, contentId, featured)` analog zu `toggleVisibility`
- Neue Hilfsfunktion `isFeatured(contentType, contentId, staticFeatured?)` — DB-Override gewinnt über statischen Wert

**3. `ContentVisibilityContext.tsx`** — erweitern:
- `isFeatured()` Funktion ins Context-Interface aufnehmen
- Provider liest `featured` mit aus der DB-Query

**4. `ContentRegistry.tsx` — Solutions-Tab** erweitern:
- Neue Spalte "Featured" mit `Switch`-Toggle (zwischen "Sichtbar" und "Vorschau")
- `toggleFeatured('solution', tile.slug, newValue)` beim Umschalten
- Visuell: Star-Icon oder Badge zur Kennzeichnung

**5. `SolutionFeatured.tsx`** — anpassen:
- Statt `t.featured` (statisch aus `solutionTiles.ts`) die neue `isFeatured('solution', t.slug, t.featured)` Funktion nutzen
- So überschreibt der Admin-Toggle die statischen Defaults

### Was sich nicht ändert
- RLS-Policies bleiben (Admins full access, Public read)
- Alle anderen Tabs (Playbooks, Cases, Insights) bleiben unverändert
- Die statischen `featured`-Flags in `solutionTiles.ts` bleiben als Fallback

