

## Plan: Research-Seite wiederherstellen + Headline-Fix auf Expertise

### 2 Änderungen

---

### 1. Headline in Research-Teaser auf /expertise ändern

`src/components/expertise/ExpertiseHub.tsx` Z.274:

```tsx
// Alt:
headline={language === 'de' ? <>Die wissenschaftliche <span className="italic text-gradient">Basis.</span></> : <>The scientific <span className="italic text-gradient">foundation.</span></>}

// Neu:
headline={language === 'de' ? <>AI-Native Scaling <span className="italic text-gradient">wissenschaftlich</span> untersucht.</> : <>AI-Native Scaling <span className="italic text-gradient">scientifically</span> investigated.</>}
```

---

### 2. `/expertise/research` → alte ResearchHub wiederherstellen

Die alte `src/components/ResearchHub.tsx` (692 Zeilen, 2×2 Grid mit 4 Frameworks inkl. Unified, Team-Section, Download-Section) existiert noch, wird aber nicht mehr genutzt. Die neue `ExpertiseResearch.tsx` (301 Zeilen) hat sie ersetzt.

**Lösung:** `ExpertiseResearch.tsx` umschreiben, sodass sie die alte `ResearchHub` Komponente wieder einbindet (mit Navigation + Footer Wrapper), statt der aktuellen 5-Sections-Struktur.

Kleine Anpassungen gemäß Briefing (kein "250.000+ Wörter" als Beweis-Argument):
- Stat "250,000+ Words of research" → ersetzen durch "62+ Companies analyzed" (in `ResearchHub.tsx` Z.100-105)
- Stat "OPEN SOURCE · not-peer-reviewed (yet)" → ersetzen durch "2024–2026 · Zeitraum/Period"

| Datei | Änderung |
|---|---|
| `src/components/expertise/ExpertiseHub.tsx` | Z.274: Headline ändern |
| `src/pages/ExpertiseResearch.tsx` | Zurück auf `ResearchHub`-Import + Nav/Footer wrapper |
| `src/components/ResearchHub.tsx` | 2 Stats aktualisieren (250K Wörter raus, 62+ Unternehmen rein; Open Source → 2024-2026) |

3 Dateien.

