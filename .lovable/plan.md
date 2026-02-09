

# Fix: Inquiry-Formular füllt Container nicht aus

## Problem-Analyse

Aus dem Screenshot ist ersichtlich:
- Das Inquiry-Formular zeigt nur den oberen Teil und darunter ist viel leerer Raum
- Der Container hat eine feste Höhe von 500px (Zeile 222 in FinalCTAOptimized.tsx)
- Es wird ein einfacher `<iframe>` verwendet statt der Fillout Embed-Methode mit dynamischer Größenanpassung

## Ursache

```tsx
// Aktuell (Zeile 220-224)
<iframe
  src={inquiryUrl}
  style={{ width: '100%', height: '500px', border: 'none' }}
  title="Contact Form"
/>
```

Der iframe kann sich nicht dynamisch an den Inhalt anpassen. Der Fillout-Standard-Embed mit `data-fillout-dynamic-resize` wird nicht genutzt.

---

## Lösung

### Option A: Fillout Standard-Embed verwenden (Empfohlen)

Ersetze den `<iframe>` durch die Fillout-Embed-Methode, die das offizielle Fillout-Script mit dynamischer Größenanpassung nutzt:

```tsx
// Neu
<div
  data-fillout-id="fzeJtLouULus"
  data-fillout-embed-type="standard"
  data-fillout-dynamic-resize
  data-fillout-inherit-parameters
  data-fillout-parameters={new URLSearchParams({
    source: 'website',
    ...getStoredUTMParams()
  }).toString()}
  style={{ 
    width: '100%', 
    minHeight: '600px',
  }}
/>
```

### Änderungen

| Datei | Änderung |
|-------|----------|
| `src/components/homepage/FinalCTAOptimized.tsx` | iframe durch Fillout-Embed mit `data-fillout-dynamic-resize` ersetzen |

---

## Code-Änderungen im Detail

### 1. Neue Helper-Funktion für UTM-Parameter (für data-fillout-parameters)

```tsx
// Neue Funktion (vor der Komponente)
function getStoredUTMParams(): Record<string, string> {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const params = JSON.parse(stored);
      const result: Record<string, string> = {};
      if (params.utm_source) result.utm_source = params.utm_source;
      if (params.utm_medium) result.utm_medium = params.utm_medium;
      if (params.utm_campaign) result.utm_campaign = params.utm_campaign;
      if (params.utm_content) result.utm_content = params.utm_content;
      if (params.utm_term) result.utm_term = params.utm_term;
      return result;
    }
  } catch (e) {
    console.warn('Failed to read UTM params:', e);
  }
  return {};
}

function buildFilloutParams(): string {
  const params = new URLSearchParams();
  const utmParams = getStoredUTMParams();
  
  Object.entries(utmParams).forEach(([key, value]) => {
    if (value) params.set(key, value);
  });
  params.set('source', 'website');
  
  return params.toString();
}
```

### 2. Iframe durch Fillout-Embed ersetzen

```tsx
// Vorher (Zeile 215-225)
{/* Right Column: Fillout Form - Use iframe with explicit URL */}
<div 
  className="rounded-3xl bg-card/50 border-2 border-border backdrop-blur-sm overflow-hidden animate-slide-up"
  style={{ animationDelay: '0.2s' }}
>
  <iframe
    src={inquiryUrl}
    style={{ width: '100%', height: '500px', border: 'none' }}
    title="Contact Form"
  />
</div>

// Nachher
{/* Right Column: Fillout Form - Use Fillout Embed with dynamic resize */}
<div 
  className="rounded-3xl bg-card/50 border-2 border-border backdrop-blur-sm overflow-hidden animate-slide-up"
  style={{ animationDelay: '0.2s' }}
>
  <div
    data-fillout-id="fzeJtLouULus"
    data-fillout-embed-type="standard"
    data-fillout-dynamic-resize
    data-fillout-inherit-parameters
    data-fillout-parameters={buildFilloutParams()}
    style={{ 
      width: '100%', 
      minHeight: '600px',
    }}
  />
</div>
```

### 3. inquiryUrl Variable kann entfernt werden

Die `inquiryUrl` useMemo-Variable und die `buildInquiryUrl`-Funktion werden nicht mehr benötigt.

---

## Ergebnis

Nach dieser Änderung:
- Das Formular passt sich dynamisch an seine Inhaltshöhe an (`data-fillout-dynamic-resize`)
- Kein leerer Raum mehr unter dem Formular
- UTM-Parameter werden weiterhin korrekt übergeben
- Das Fillout-Script (bereits im useEffect geladen) initialisiert das Embed automatisch

---

## Technische Details

Das Fillout-Embed-System funktioniert folgendermaßen:
1. Das Script `https://server.fillout.com/embed/v1/` wird geladen (bereits in useEffect vorhanden)
2. Es sucht nach allen Elementen mit `data-fillout-id` Attribut
3. `data-fillout-dynamic-resize` ermöglicht automatische Höhenanpassung via postMessage
4. Das Formular sendet seine tatsächliche Höhe an das Parent-Window und das Embed passt sich an

