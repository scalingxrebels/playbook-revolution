
# Implementierungsplan: Alban Halili Credentials hinzufügen

## Übersicht

Ergänzung von "Certified Google AI Expert" als Credentials bei Alban Halili auf der Expertise-Seite.

---

## Änderung

### Datei: `src/components/ResearchHub.tsx`

**Zeile 164-174 (teamMembers Array):**

```typescript
// Vorher
{
  name: 'Alban Halili',
  role: { en: 'Empirical Analysis', de: 'Empirische Analyse' },
  // ...
}

// Nachher
{
  name: 'Alban Halili',
  credentials: 'Certified Google AI Expert',  // NEU
  role: { en: 'Empirical Analysis', de: 'Empirische Analyse' },
  // ...
}
```

---

## Ergebnis

Alban Halili wird wie die anderen Team-Mitglieder mit Credentials angezeigt:
- **Michel Lason** M.A. HSG
- **Alban Halili** Certified Google AI Expert ← NEU
- **Florian Metzger** M.Sc. Bocconi, M.Sc. Lisboa

---

## Dateien

| Aktion | Datei |
|--------|-------|
| **Bearbeiten** | `src/components/ResearchHub.tsx` |
