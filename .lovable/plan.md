

## Plan: Pre-Cohort Proof Closing + Neuer Finaler CTA mit Lead-Capture

### 1. Pre-Cohort Proof Closing-Statement wiederherstellen (S9b)

Das originale Verknappungs-Statement wurde versehentlich ersetzt. Es muss wiederhergestellt und durch "Impact First" ergaenzt werden:

**Zeile 522-526** aendern zu:
- DE: `'Cohort 1 ist bewusst klein gehalten. Impact First — Fokus für jede/n Teilnehmer:in.'`
- EN: `'Cohort 1 is deliberately kept small. Impact First — Focus for every participant.'`

### 2. Finaler CTA komplett umbauen (S11e)

Statt des bisherigen "Early Access sichern"-Buttons wird der finale CTA zu einer Lead-Capture-Sektion mit E-Mail-Feld und PDF-Download-Versprechen:

**Headline:** "Bereit, mehr zu erfahren?" / "Ready to learn more?"

**Subtext:** "Trag dich ein. Du erhaeltst sofort 'Das Revenue System' als PDF — und erfaehrst als Erste/r, wenn die naechste Kohorte oeffnet. Kostenlos. Kein Commitment. Kein Verkaufsdruck."

**Card darunter:** "Sofort-Download: 'Das Revenue System'" mit Erklaerung: "Das PDF erklaert, wie du aufhoerst, Taktiken zu stapeln — und anfaengst, systematisch zu wachsen."

**Technisch:** Inline-Email-Eingabe + Button, das bei Submit den Lead in `download_leads` speichert (asset_id: `revenue-system-whitepaper`) und den PDF-Download triggert. Nutzt die bestehende Supabase-Integration aus `DownloadLeadForm`. Die Trust-Signale (Session-1-Guarantee, etc.) bleiben darunter.

### Umfang
- 1 Datei editiert: `src/pages/RevenueArchitectureSystem.tsx`
- 2 Stellen: Closing-Statement (Zeile 522-526) + Finaler CTA (Zeile 1016-1053)

