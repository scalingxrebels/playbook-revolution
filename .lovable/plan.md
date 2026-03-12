

## Problem

Die Auth-Seite (`Auth.tsx`, Zeile 29) leitet nach dem Login **immer** hart auf `/leads-dashboard` weiter -- egal woher man kam. Wenn man `/content-registry` aufruft, wird man zu `/auth` geschickt (weil nicht eingeloggt), und nach dem Login landet man auf `/leads-dashboard` statt zurück auf `/content-registry`.

## Loesung

**`src/pages/Auth.tsx`** anpassen:
- Einen `returnTo`-Parameter aus der URL auslesen (z.B. `/auth?returnTo=/content-registry`)
- Nach erfolgreichem Login auf `returnTo` weiterleiten, Fallback bleibt `/leads-dashboard`

**`src/pages/ContentRegistry.tsx`** anpassen:
- Statt `<Navigate to="/auth" />` auf `/auth?returnTo=/content-registry` weiterleiten

### Konkrete Aenderungen

**Auth.tsx, Zeile 27-31:**
```tsx
useEffect(() => {
  if (!loading && user) {
    const params = new URLSearchParams(window.location.search);
    const returnTo = params.get('returnTo') || '/leads-dashboard';
    navigate(returnTo);
  }
}, [user, loading, navigate]);
```

**ContentRegistry.tsx, Zeile 39-41:**
```tsx
if (!user || !isAdmin) {
  return <Navigate to="/auth?returnTo=/content-registry" replace />;
}
```

Zwei kleine Edits, kein Backend-Change noetig.

