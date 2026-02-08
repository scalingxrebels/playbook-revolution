

# Plan: Fillout URL-Parameter erweitern

## Zusammenfassung

Ergänzung von zwei zusätzlichen URL-Parametern für die Fillout-Automatisierung:

| Parameter | Aktuell | Neu |
|-----------|---------|-----|
| `Asset_ID` | ✅ Vorhanden | - |
| `download_type` | ✅ Vorhanden | Umbenennen zu `Asset_Type` |
| `Asset_Name` | ❌ Fehlt | Hinzufügen |
| `Download_URL` | ❌ Fehlt | Hinzufügen |

---

## Änderung: FilloutDownloadModal.tsx

**Datei:** `src/components/forms/FilloutDownloadModal.tsx`

### Aktuelle buildIframeUrl Funktion (Zeilen 33-51)

```typescript
const buildIframeUrl = useCallback(() => {
  if (!asset) return '';
  const params = new URLSearchParams();
  
  // UTM parameters
  if (utmParams.utm_source) params.set('utm_source', utmParams.utm_source);
  if (utmParams.utm_medium) params.set('utm_medium', utmParams.utm_medium);
  if (utmParams.utm_campaign) params.set('utm_campaign', utmParams.utm_campaign);
  if (utmParams.utm_content) params.set('utm_content', utmParams.utm_content);
  if (utmParams.utm_term) params.set('utm_term', utmParams.utm_term);
  
  // Asset parameters
  params.set('Asset_ID', asset.id);
  params.set('download_type', asset.type);  // ← Umbenennen
  
  const url = `${FILLOUT_BASE_URL}?${params.toString()}`;
  console.log('🔗 Fillout iframe URL:', url);
  return url;
}, [asset, utmParams]);
```

### Neue buildIframeUrl Funktion

```typescript
const buildIframeUrl = useCallback(() => {
  if (!asset) return '';
  const params = new URLSearchParams();
  
  // ✅ ASSET DATEN
  params.set('Asset_ID', asset.id);
  params.set('Asset_Name', language === 'en' ? asset.titleEn : asset.titleDe);
  params.set('Download_URL', `https://scalingx.com${asset.filePath}`);
  params.set('Asset_Type', asset.type);
  
  // ✅ UTM PARAMETERS
  if (utmParams.utm_source) params.set('utm_source', utmParams.utm_source);
  if (utmParams.utm_medium) params.set('utm_medium', utmParams.utm_medium);
  if (utmParams.utm_campaign) params.set('utm_campaign', utmParams.utm_campaign);
  if (utmParams.utm_content) params.set('utm_content', utmParams.utm_content);
  if (utmParams.utm_term) params.set('utm_term', utmParams.utm_term);
  
  console.log('🔗 Fillout iframe URL:', params.toString());
  return `${FILLOUT_BASE_URL}?${params.toString()}`;
}, [asset, utmParams, language]);
```

### Änderungen im Detail

| Zeile | Alt | Neu |
|-------|-----|-----|
| 45 | `params.set('Asset_ID', asset.id);` | Bleibt gleich |
| 46 | `params.set('download_type', asset.type);` | `params.set('Asset_Type', asset.type);` |
| - | - | `params.set('Asset_Name', language === 'en' ? asset.titleEn : asset.titleDe);` |
| - | - | `params.set('Download_URL', \`https://scalingx.com${asset.filePath}\`);` |

### Dependency-Array anpassen

Da `language` jetzt verwendet wird, muss es zum Dependency-Array hinzugefügt werden:

```typescript
// Alt:
}, [asset, utmParams]);

// Neu:
}, [asset, utmParams, language]);
```

---

## Resultierende Fillout URL

**Vorher:**
```
https://scalingx.fillout.com/download?
  Asset_ID=playbook-ai-native-scaling
  &download_type=playbook
  &utm_source=linkedin
  &utm_campaign=growth-q1
```

**Nachher:**
```
https://scalingx.fillout.com/download?
  Asset_ID=playbook-ai-native-scaling
  &Asset_Name=AI-Native%20Scaling%20Playbook
  &Download_URL=https%3A%2F%2Fscalingx.com%2Fdownloads%2Fai-native-scaling-playbook.pdf
  &Asset_Type=playbook
  &utm_source=linkedin
  &utm_campaign=growth-q1
```

---

## Hinweis: Domain-Konfiguration

Der Plan nutzt `https://scalingx.com` als Basis-URL. Falls die Production-Domain anders lautet, kann dies angepasst werden:

```typescript
// Option 1: Hardcoded (wie im Plan)
const DOWNLOAD_BASE_URL = 'https://scalingx.com';

// Option 2: Dynamisch aus window.location
const DOWNLOAD_BASE_URL = window.location.origin;
```

Empfehlung: Hardcoded nutzen, da Fillout die absolute URL für externe Automatisierungen braucht.

---

## Zusammenfassung der Änderungen

| Datei | Änderung |
|-------|----------|
| `src/components/forms/FilloutDownloadModal.tsx` | `buildIframeUrl` erweitern um Asset_Name, Download_URL, Asset_Type umbenennen |

---

## Test nach Implementierung

1. Öffne DevTools → Network Tab
2. Klicke auf einen Download-Button (z.B. Playbook-Kachel)
3. Prüfe die Fillout-iframe-URL auf alle 4 Asset-Parameter:
   - `Asset_ID`
   - `Asset_Name`
   - `Download_URL`
   - `Asset_Type`
4. Prüfe, ob UTM-Parameter ebenfalls korrekt übergeben werden

