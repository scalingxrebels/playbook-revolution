

## Plan: Scroll-to-Top Fix für alle Seiten

### Problem
Der Browser hat ein eingebautes "Scroll Restoration" Feature, das bei Navigation die vorherige Scroll-Position wiederherstellt — und damit den `ScrollToTop`-Effekt überschreibt. Besonders bei lazy-geladenen Seiten (alle Seiten nutzen `lazy()`) kann das Timing kollidieren.

### Fix in `src/components/ScrollToTop.tsx`

Eine Zeile hinzufügen: `window.history.scrollRestoration = 'manual'` — damit wird die Browser-eigene Scroll-Wiederherstellung deaktiviert und `ScrollToTop` hat volle Kontrolle.

```typescript
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'manual'; // NEU
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};
```

### Betroffene Seiten
Dieser Fix gilt global für alle Routen — Solutions, Category-Landings, und alle anderen Seiten. Keine weiteren Dateien betroffen.

