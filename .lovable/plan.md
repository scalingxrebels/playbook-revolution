

## Plan: Research-Teaser auf /expertise + Research Hub Route + Detail-Routes

### Überblick

3 Schritte: (1) Neue Research-Teaser-Sektion auf der bestehenden /expertise-Seite, (2) Neue Route `/expertise/research` als Research Hub mit den Briefing-Eingriffen, (3) Detail-Routes für AMF/ANST/SST/Unified registrieren.

---

### Schritt 1 — Research-Teaser-Sektion auf /expertise (ExpertiseHub.tsx)

Neue Section zwischen Cases (Section 5) und CTA (Section 6) einfügen:

- **Overline**: "AI-NATIVE SCALING RESEARCH" / "AI-NATIVE SCALING RESEARCH"
- **Headline**: DE: `Die wissenschaftliche Basis.` / EN: `The scientific foundation.`  
  Mit `italic text-gradient` auf "Basis" / "foundation"
- **Subline**: DE: "Drei Frameworks. 62+ Unternehmen. Eine klare Antwort." / EN: "Three frameworks. 62+ companies. One clear answer."
- **3 kompakte Kacheln** (3-spaltig Desktop, 1-spaltig Mobile):
  - AMF — "Wie reif ist ein Unternehmen im Umgang mit AI?" → `/expertise/amf`
  - ANST — "Warum skalieren AI-native Unternehmen superlinear?" → `/expertise/anst`
  - SST — "Welche Schichten müssen zusammenspielen?" → `/expertise/sst`
- **CTA-Link**: "Zum Research Hub →" → `/expertise/research`
- Design: Gleicher `Section`-Wrapper + `SectionHeader` wie die anderen Sektionen

---

### Schritt 2 — Research Hub Page (`/expertise/research`)

Neue Seite `src/pages/ExpertiseResearch.tsx` mit den 5 Eingriffen aus dem Briefing:

| Eingriff | Inhalt |
|---|---|
| 1 | Positioning-Header: Breadcrumb, Overline "AI-NATIVE SCALING RESEARCH · 2024–2026", H1, Subline, Navigation-Pills (AMF/ANST/SST/Fallstudien) |
| 2 | Stat-Zeile: 3 Frameworks · 62+ Unternehmen · R²=0.76 · 2024–2026 |
| 3 | Mapping-Section: 3 Zeilen (AMF/ANST/SST) mit Framework-Name, Frage, Beschreibung |
| 4 | Framework-Kacheln: 3×1 Grid mit Overline, Headline, Subline, Body, Key Stats, Link — gemäß Briefing-Spezifikation |
| 5 | Cross-Link-Section: "Vom Verstehen zum Handeln." mit Links zu /playbooks, /cases, Booking-Modal |

Bilingual (DE/EN). Nutzt bestehende Komponenten (SharedHero, Button, FilloutBookingModal). Styling folgt dem bestehenden Dark-Theme der Seite.

---

### Schritt 3 — Routes in App.tsx

5 neue Routes registrieren (vor den Mechanism-Routes, da spezifischere Pfade Vorrang haben):

```
/expertise/research → ExpertiseResearch (neu)
/expertise/amf → ExpertiseAMF (existiert, ungeroutet)
/expertise/anst → ExpertiseANST (existiert, ungeroutet)
/expertise/sst → ExpertiseSST (existiert, ungeroutet)
/expertise/unified-framework → ExpertiseUnifiedFramework (existiert, ungeroutet)
```

---

### Dateien

| Datei | Änderung |
|---|---|
| `src/pages/ExpertiseResearch.tsx` | **Neu** — Research Hub Page mit 5 Sections |
| `src/components/expertise/ExpertiseHub.tsx` | Research-Teaser-Section einfügen (zwischen Cases und CTA) |
| `src/App.tsx` | 5 neue Routes + lazy imports für ExpertiseResearch, ExpertiseAMF, ExpertiseANST, ExpertiseSST, ExpertiseUnifiedFramework |

3 Dateien (1 neu, 2 geändert).

