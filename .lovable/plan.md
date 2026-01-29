
## Diagnose (warum der Plan aktuell “nicht umsetzbar” wirkt)

Ich habe den aktuellen Stand im Code überprüft. Es gibt aktuell einen **Inkonsistenz-Cluster** zwischen:
1) **Playbook-Link-Ziel aus der Library**  
   - `PlaybookCard` navigiert immer zu: `to={`/playbooks/${playbook.slug}`}`
   - In `src/data/playbooks.ts` ist der `slug` derzeit noch **`gtm-revenue`** (nicht `growth-engines/gtm-revenue`)
   - Ergebnis: Die Library führt auf **/playbooks/gtm-revenue**.

2) **Routing in `App.tsx`**  
   - In `src/App.tsx` existiert derzeit noch **`/playbooks/gtm-revenue`** als Route.
   - Die geplante neue Route **`/playbooks/growth-engines/gtm-revenue`** ist aktuell **nicht** registriert.

3) **Landing Page-Inhalt ist noch v1 (3-Komponenten-Framework + Calendly)**  
   - `src/pages/PlaybookGtmRevenue.tsx` ist sehr umfangreich (1084 Zeilen) und enthält weiterhin:
     - 3-Komponenten-Framework (ICP Clarity + Sales Motion + RevOps)
     - CTA “Book Free Inflection Call” mit **Calendly** statt Fillout
     - Download CTA scrollt aktuell auf “executive-summary” statt PDF zu öffnen
   - Das entspricht nicht der freigegebenen v2-Konfiguration (PDF lokal + Fillout Link + 7 Hebel).

Zusammengefasst: **Der Plan scheitert im Ist-Zustand nicht an “Unmöglichkeit”, sondern an nicht konsistent angewendeten Änderungen.** Die App zeigt dadurch weiterhin die alte URL/alte Seite.

---

## Zielzustand (gemäß deiner finalen Vorgaben)

- **Neue Detail-URL:** `/playbooks/growth-engines/gtm-revenue`
- **Alte URL:** `/playbooks/gtm-revenue` soll **nicht** unterstützt werden (404)
- **PDF Download:** lokale Datei `/downloads/gtm-revenue-playbook.pdf`
- **Booking:** `https://scalingx.fillout.com/inflection-call`
- **Inhalt:** v2 Seite mit 8 Sektionen inkl. 7-Hebel-Accordion

---

## Umsetzungsplan (konkret, mit Reihenfolge)

### Phase 0 — Minimal-Fix (damit Navigation sofort stimmt)
1) **`src/data/playbooks.ts`**
   - `playbooks[gtm-revenue].slug` ändern von `gtm-revenue` → `growth-engines/gtm-revenue`
   - (Optional) Beschreibung/Outcomes/CaseStudies wie im Plan aktualisieren (wenn noch nicht passiert)

2) **`src/App.tsx`**
   - Route **neu hinzufügen/ändern**:
     - Entfernen/ersetzen: `"/playbooks/gtm-revenue"`
     - Hinzufügen: `"/playbooks/growth-engines/gtm-revenue"`
   - Wichtig: Da “Alte URL: Kein Support (404)” gewünscht ist, gibt es **keinen Redirect** und **keinen Alias**. Die alte Route wird entfernt, sodass sie in `NotFound` läuft.

Erwartetes Ergebnis nach Phase 0:
- Klick auf “Learn More” in der Library führt auf `/playbooks/growth-engines/gtm-revenue`
- `/playbooks/gtm-revenue` ergibt 404 (NotFound) wie gewünscht

---

### Phase 1 — Asset-Fix (PDF lokal verfügbar machen)
3) **Public Asset hinzufügen**
   - Prüfen, ob `public/downloads/gtm-revenue-playbook.pdf` bereits existiert.
   - Falls nicht: Datei hinzufügen (genau dieser Pfad/Name), damit `/downloads/gtm-revenue-playbook.pdf` zuverlässig lädt.

Erwartetes Ergebnis:
- CTA “Download Playbook (PDF)” öffnet die Datei ohne 404.

---

### Phase 2 — Landing Page v2 (Inhalt + CTAs + 8 Sektionen)
4) **`src/pages/PlaybookGtmRevenue.tsx` komplett auf v2 umbauen**
   - Aktuell ist es eine v1-Seite mit 3-Komponenten, Best Practices, Implementation Guide etc.
   - Umsetzung v2 gemäß Plan:
     1. Hero (Deep Space) mit zwei CTAs:
        - Download: `window.open('/downloads/gtm-revenue-playbook.pdf', '_blank')`
        - Booking: `window.open('https://scalingx.fillout.com/inflection-call', '_blank')`
     2. Problem: 4 KPI-Kacheln (CAC, Win Rate, Sales Cycle, Revenue/Employee)
     3. Solution: **7-Hebel-Framework als Accordion** (Radix Accordion via bestehende `src/components/ui/accordion.tsx`)
     4. Case Studies: 3 anonymisierte Cases (Series A/B/C) mit ARR & Ergebnis-Metriken
     5. Implementation: 90-Tage-Roadmap (Diagnose → Design → Deploy)
     6. Solutions Connection: Cards zu
        - `/solutions/power-up/cac-crisis`
        - passenden Boost Link(s) (z.B. `/solutions/boost/growth-engine`)
     7. Who it’s for: 4 Personas
     8. Next Steps: 3 CTAs (z.B. Call buchen, PDF laden, Solutions ansehen)

   - Bilingual (EN/DE):
     - Weiterhin `useLanguage()` nutzen, aber Content auf v2 umstellen.
   - Bestehende Layout-/Designsystem-Komponenten wiederverwenden:
     - `Navigation`, `Footer`, `Card`, `Badge`, `Button`, `TwinklingStars`
     - Optional: statt eigener Hero-Implementation könnte `SharedHero` genutzt werden (ist bereits vorhanden), aber falls v2 “Deep Space” stärker custom sein soll, bleiben wir bei der aktuellen Hero-Pattern-Struktur.

Erwartetes Ergebnis:
- Die Seite entspricht in Struktur und CTAs der v2 Vorgaben und ist konsistent zweisprachig.

---

### Phase 3 — Regression Checks (damit nichts “still” kaputt geht)
5) **Manuelle Checks im Preview**
   - Von `/playbooks` aus:
     - “Learn More” beim GTM/Revenue Playbook öffnet `/playbooks/growth-engines/gtm-revenue`
   - Direktaufruf:
     - `/playbooks/gtm-revenue` zeigt NotFound (404)
   - Buttons:
     - Download öffnet `/downloads/gtm-revenue-playbook.pdf` in neuem Tab
     - Booking öffnet Fillout-Link
   - DE/EN Umschalten:
     - Alle 8 Sektionen wechseln sauber die Sprache

---

## Risiken / häufige Stolpersteine (und wie wir sie vermeiden)
- **PDF 404 trotz korrekt gesetztem Link**: Datei fehlt oder falscher Pfad/Name. Daher Phase 1 explizit.
- **Alte Route existiert noch**: Wenn `/playbooks/gtm-revenue` in `App.tsx` stehen bleibt, ist “Kein Support” nicht erfüllt.
- **Link-Generierung in Library**: Da `PlaybookCard` streng `playbook.slug` verwendet, muss der `slug` in den Daten wirklich exakt stimmen.
- **Sehr große Page-Datei**: Um “Rewrite-Failures” zu vermeiden, bauen wir v2 in klaren Sektionen/Komponentenblöcken und halten Imports sauber (Accordion, Cards etc.).

---

## Was ich als Nächstes umsetzen werde (nach Freigabe dieses Plans)
1) `playbooks.ts` slug auf `growth-engines/gtm-revenue` setzen  
2) `App.tsx` Route auf `/playbooks/growth-engines/gtm-revenue` umstellen und alte Route entfernen  
3) PDF unter `public/downloads/gtm-revenue-playbook.pdf` sicherstellen  
4) `PlaybookGtmRevenue.tsx` auf v2 (8 Sektionen + 7 Hebel Accordion + Fillout + PDF) umbauen  
5) End-to-end Checks im Preview (Routing + CTAs + Sprache)
