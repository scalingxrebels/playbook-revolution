
# Plan: ScrollToTop für Seitennavigation

## Problem
Bei der Navigation über Footer-Links (Impressum, Glossar) bleibt die Scroll-Position am Footer, statt zum Seitenanfang zu springen. React Router (SPA) verwaltet keine automatische Scroll-Restaurierung.

## Lösung
Eine `ScrollToTop`-Komponente erstellen, die bei jedem Routenwechsel automatisch nach oben scrollt.

## Technische Umsetzung

### 1. Neue Datei erstellen: `src/components/ScrollToTop.tsx`

```typescript
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};
```

### 2. In `src/App.tsx` einbinden

**Import hinzufügen:**
```typescript
import { ScrollToTop } from "@/components/ScrollToTop";
```

**Komponente einfügen (innerhalb BrowserRouter, vor Routes):**
```typescript
<BrowserRouter>
  <ScrollToTop />  {/* NEU */}
  <Suspense fallback={<PageLoader />}>
    <Routes>
      ...
    </Routes>
  </Suspense>
  <CookieBanner />
</BrowserRouter>
```

## Ergebnis
- Jede Navigation (Footer, Navigation, Links) scrollt automatisch zum Seitenanfang
- Betrifft alle Routen der gesamten Website
- Keine manuellen Anpassungen an einzelnen Seiten nötig
