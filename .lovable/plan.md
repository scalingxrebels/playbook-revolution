

## Export: Aktuelle Struktur und Inhalt der RAS Landing Page

Ich erstelle eine Excel-Datei mit der vollstandigen Struktur und dem Inhalt der aktuellen Landing Page (`src/pages/RevenueArchitectureSystem.tsx`), basierend auf dem Code — ohne Abgleich mit dem D08-Briefing.

### Inhalt der Excel-Datei

**Sheet 1: Sektionsübersicht**
Alle 12 Sektionen in Reihenfolge mit ID, Name, Typ (dark/light), Headline DE/EN, Subheadline DE/EN.

**Sheet 2: Hero (S1)**
Breadcrumb, Badge, Headline, Subheadline, Urgency-Text, CTAs, Trust Signals.

**Sheet 3: VSL (S2)**
Headline, Video-Placeholder-Details, Text-Fallback (3 Zeilen DE/EN).

**Sheet 4: What You Build (Deliverables)**
3 Core Points mit Icon, Titel DE/EN, Beschreibung DE/EN, Closing-Text.

**Sheet 5: Programm (6 Sessions)**
Woche, Titel DE/EN, Outcome DE/EN, Deliverable-Tags DE/EN, Format-Punkte.

**Sheet 6: Pre-Cohort Proof**
3 Proof Pillars mit Icon, Titel DE/EN, Text DE/EN, Closing-Statement.

**Sheet 7: Credibility (Michel)**
Bio-Text DE/EN (4 Absätze), 3 Zitate mit Rolle, LinkedIn-Link, Disclaimer.

**Sheet 8: Founding Frame**
Headline, Founding-Preise, Cohort-2-Preise, Plätze, Begründung, Beirats-Hinweis.

**Sheet 9: Application Process**
4 Schritte mit Titel DE/EN, Zeitangabe, Beschreibung DE/EN.

**Sheet 10: Cohort Start Card**
Headline, Subtext.

**Sheet 11: Lead Capture**
Headline, Body-Text, Formular-Felder, PDF-Asset-ID, CTA, Success-State, Kontakt-Email.

**Sheet 12: FAQ**
7 Fragen mit Frage DE/EN, Antwort DE/EN.

**Sheet 13: Pricing**
3 Tiers (Standard/Plus/VIP) mit Preis, Cohort-2-Preis, Features DE/EN, Zielgruppe DE/EN, Recommended-Flag, Ratenzahlung, Risk Reversal.

**Sheet 14: Page-Level Config**
Booking-Modal (formSlug, source), Sektions-Reihenfolge im Main-Component, Navigation/Footer.

### Technisch
- Python-Script mit openpyxl
- Output: `/mnt/documents/RAS-Landing-Page-Struktur.xlsx`

