
# Implementierungsplan: Glossar mit AI-Native Scaling Zusammenfassung erweitern

## Übersicht

Erweiterung der Glossar-Seite um eine Zusammenfassung der Grundidee aus dem AI-Native Scaling Playbook.

---

## Zu ergänzende Inhalte

### Die Grundidee (DE/EN)

**Das Problem:**
- Traditionelles Skalieren = Linear (Revenue ≈ People)
- 8-12 Jahre bis €100M ARR
- 60-80% der Unternehmen stagnieren bei €10-30M ARR

**Die Lösung - 4 Kern-Capabilities:**

| Capability | Bedeutung | Beschreibung |
|------------|-----------|--------------|
| **Strategy** | Wo spielen, Wie gewinnen | Klares ICP, differenzierte Positionierung, AI-native Strategie |
| **Setup** | Fundament bauen | Org-Struktur, AI-gestützte Systeme, automatisierte Prozesse |
| **Execution** | Ergebnisse liefern | GTM, Product, Customer Success - alles AI-gestützt |
| **Operationalization** | Skalieren | AI-Dashboards, automatisierte Playbooks, AI-gesteuerte Automation |

**Das Kernprinzip:**
> "Ist eine Capability schwach, begrenzt sie dein gesamtes Skalierungspotenzial—egal wie stark die anderen sind."

**Das Ergebnis:**
- 10-30x schnellere Skalierung
- 8-18 Monate bis €100M ARR (statt 8-12 Jahre)
- 2-5x ARR/Mitarbeiter

---

## Technische Änderungen

### Datei: `src/pages/Glossar.tsx`

**Neue Sektion vor der Glossar-Tabelle hinzufügen:**

```text
1. Neuer Abschnitt "Die Grundidee: AI-Native Scaling"
2. Card-basiertes Layout für die 4 Capabilities
3. Highlight-Box für das Kernprinzip (Bottleneck-Logik)
4. Metriken-Badges für die Ergebnisse
5. Zweisprachig (DE/EN) via LanguageContext
```

**Struktur der neuen Sektion:**

```text
┌─────────────────────────────────────────────────┐
│ Die Grundidee: AI-Native Scaling                │
│ ─────────────────────────────────────────────── │
│ [Einleitungstext zum Problem/Lösung]            │
│                                                 │
│ ┌─────────────┐ ┌─────────────┐                │
│ │ Strategy    │ │ Setup       │                │
│ │ Wo spielen  │ │ Fundament   │                │
│ └─────────────┘ └─────────────┘                │
│ ┌─────────────┐ ┌─────────────┐                │
│ │ Execution   │ │ Operational.│                │
│ │ Liefern     │ │ Skalieren   │                │
│ └─────────────┘ └─────────────┘                │
│                                                 │
│ ⚠️ Kernprinzip: Schwächste Capability begrenzt │
│    das gesamte Skalierungspotenzial            │
│                                                 │
│ 📊 10-30x | 8-18 Mo. | 2-5x ARR/MA             │
└─────────────────────────────────────────────────┘
```

---

## Design-Details

- Verwendet bestehende Card-Komponenten
- Farbcodierung für die 4 Capabilities:
  - Strategy: `purple-500`
  - Setup: `blue-500`
  - Execution: `green-500`
  - Operationalization: `amber-500`
- Alert-Box für das Kernprinzip
- Badge-Komponenten für Metriken
- Responsive: 2x2 Grid auf Desktop, Stack auf Mobile

---

## Dateien

| Aktion | Datei |
|--------|-------|
| **Bearbeiten** | `src/pages/Glossar.tsx` |

