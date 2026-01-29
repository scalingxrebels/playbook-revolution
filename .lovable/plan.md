
# Plan: Persistente Sprachauswahl mit localStorage

## Das Problem

Die aktuelle Implementierung in `src/contexts/LanguageContext.tsx` speichert die Sprachauswahl nur im React-State:

```typescript
const [language, setLanguage] = useState<Language>('en');
```

Bei jedem Seitenwechsel oder Neuladen wird die Sprache auf Englisch zurückgesetzt.

---

## Die Lösung

Die Sprachpräferenz wird in `localStorage` gespeichert und beim Start geladen.

---

## Änderungen

### `src/contexts/LanguageContext.tsx`

**1. Initialisierung aus localStorage (Zeile 300-301)**

Vorher:
```typescript
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
```

Nachher:
```typescript
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('preferred-language');
    return (stored === 'de' || stored === 'en') ? stored : 'en';
  });
```

**2. Persistierung bei Änderung (nach Zeile 314)**

Nachher:
```typescript
const toggleLanguage = useCallback(() => {
  setLanguage(prev => {
    const next = prev === 'en' ? 'de' : 'en';
    localStorage.setItem('preferred-language', next);
    return next;
  });
}, []);

// Auch bei direktem setLanguage persistieren
const handleSetLanguage = useCallback((lang: Language) => {
  localStorage.setItem('preferred-language', lang);
  setLanguage(lang);
}, []);
```

**3. Provider anpassen (Zeile 316-320)**

```typescript
return (
  <LanguageContext.Provider value={{ 
    language, 
    setLanguage: handleSetLanguage, 
    t, 
    toggleLanguage 
  }}>
    {children}
  </LanguageContext.Provider>
);
```

---

## Verhalten nach der Änderung

| Aktion | Ergebnis |
|--------|----------|
| Sprache auf Deutsch stellen | Wird in localStorage gespeichert |
| Seite wechseln | Deutsch bleibt aktiv |
| Browser schließen & öffnen | Deutsch bleibt aktiv |
| localStorage löschen | Fallback auf Englisch |

---

## Technische Details

- **localStorage-Key**: `preferred-language`
- **Gültige Werte**: `'en'` oder `'de'`
- **Fallback**: Englisch (`'en'`)
- **Keine zusätzlichen Dependencies** erforderlich

---

## Dateien

| Datei | Aktion |
|-------|--------|
| `src/contexts/LanguageContext.tsx` | Zeilen 300-320 anpassen |

