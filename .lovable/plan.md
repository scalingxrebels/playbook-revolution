

## Plan: Fix — Solutions-Seite scrollt nicht nach oben bei Navigation

### Problem

`ScrollToTop` feuert `window.scrollTo(0,0)` beim Pathname-Wechsel, aber die Solutions-Seite wird per `lazy()` geladen. Bis der Content gerendert ist, hat der Scroll-Befehl bereits gefeuert — auf einer noch leeren/kurzen Seite. Nach dem Render landet der User mitten auf der Seite.

### Fix

`ScrollToTop.tsx` um einen `requestAnimationFrame`-Wrapper erweitern, der den Scroll nach dem nächsten Paint ausführt. Zusätzlich als Fallback einen zweiten Scroll nach kurzem Timeout (50ms), um Lazy-Loading-Delays abzufangen.

### Änderung

| Datei | Änderung |
|---|---|
| `src/components/ScrollToTop.tsx` | `window.scrollTo` in `requestAnimationFrame` + 50ms Fallback-Timeout wrappen |

```typescript
useEffect(() => {
  window.history.scrollRestoration = 'manual';
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  });
  const timeout = setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, 50);
  return () => clearTimeout(timeout);
}, [pathname]);
```

1 Datei, 1 Stelle.

