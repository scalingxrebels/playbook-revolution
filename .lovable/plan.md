
# Fix: Download-URL dynamisch statt hardcoded

## Problem

In `src/components/forms/FilloutDownloadModal.tsx` (Zeile 40) ist die Domain hardcoded:

```typescript
params.set('Download_URL', `https://scalingx.com${asset.filePath}`);
```

Die Seite läuft aber aktuell auf `scalingx.net` und wird bald auf `scalingx.io` wechseln.

---

## Lösung

Statt der hardcoded Domain `window.location.origin` verwenden:

**Datei:** `src/components/forms/FilloutDownloadModal.tsx`

**Zeile 40 ändern:**

| Alt | Neu |
|-----|-----|
| `params.set('Download_URL', \`https://scalingx.com${asset.filePath}\`);` | `params.set('Download_URL', \`${window.location.origin}${asset.filePath}\`);` |

---

## Resultat

Die Download-URL passt sich automatisch an die aktuelle Domain an:

| Umgebung | Download_URL |
|----------|--------------|
| Preview (Lovable) | `https://id-preview--e5261949-8413-41bb-94df-f65b04b3ef39.lovable.app/downloads/playbooks/...` |
| Aktuell (Production) | `https://scalingx.net/downloads/playbooks/...` |
| Zukünftig (Production) | `https://scalingx.io/downloads/playbooks/...` |

---

## Zusammenfassung

| Datei | Änderung |
|-------|----------|
| `src/components/forms/FilloutDownloadModal.tsx` | Zeile 40: `https://scalingx.com` → `${window.location.origin}` |
