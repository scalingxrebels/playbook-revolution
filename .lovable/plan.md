

# Bewertung: Alternative Homepage mit Growth Curve im Hero

## Inhaltliche Bewertung v2.1

Das Briefing v2.1 ist jetzt **konsistent mit dem ROI Calculator** -- die 4 kritischen Fixes sind korrekt umgesetzt. Ein verbleibendes Datenproblem:

**Kurvenspruenge sind unrealistisch:**
- AI-Powered: Monat 48 = €44M → Monat 54 = €100M (Sprung von 56M in 6 Monaten)
- Traditional: Monat 66 = €46M → Monat 72 = €100M (Sprung von 54M in 6 Monaten)

Die Kurven sollten glaetter ansteigen, um visuell glaubwuerdig zu wirken. Ich wuerde die Zwischenwerte interpolieren, damit jede Kurve eine realistische S-Kurve bildet.

## Konzept: Chart im Hero

**Vorteile:**
- Sofortiger visueller Proof -- der staerkste Conversion-Trigger direkt above-the-fold
- Die Headline "Von €2M auf €100M ARR" wird durch die Grafik unmittelbar bewiesen
- Kein zusaetzlicher Scroll noetig, um den Kern der Value Proposition zu verstehen

**Risiken:**
- Hero wird visuell komplex (Deep Space + Chart + Toggle Buttons)
- Auf Mobile wird es eng (Chart + 4 Buttons + Headline + CTA = viel Content)
- Recharts auf dunklem Hintergrund braucht sorgfaeltiges Styling (Achsen, Grid, Tooltip)

**Empfehlung:** Machbar, aber die Toggle-Buttons gehoeren **nicht** in den Hero. Stattdessen: Chart mit allen 4 Kurven (ohne Toggle), kompakt, als visueller Beweis unter der Headline. Die volle interaktive Version mit Toggles bleibt als eigene Section.

## Umsetzungsplan

### Ansatz: Neue alternative Homepage (`/home-v2`)

1. **Erstellen** `src/pages/IndexV2.tsx` -- Alternative Homepage mit Chart-Hero
2. **Erstellen** `src/components/homepage/HeroWithChart.tsx` -- Neuer Hero:
   - Obere Haelfte: Headline + Subheadline (kompakter als jetzt)
   - Untere Haelfte: Inline-Chart (4 Kurven, alle sichtbar, kein Toggle)
   - CTA-Button unter dem Chart
   - Deep Space Background bleibt
   - Chart-Styling: transparenter Hintergrund, helle Achsen/Labels, Glow-Effekte auf Linien
3. **Erstellen** `src/components/homepage/GrowthCurveOptimized.tsx` -- Vollstaendige interaktive Version (mit Toggles) fuer die Section unterhalb
4. **Editieren** `src/App.tsx` -- Route `/home-v2` hinzufuegen
5. **Korrektur** der `growthData` mit glatten S-Kurven

### Chart im Hero -- Technische Details
- Hoehe: 250px Desktop, 200px Mobile (kompakt)
- Keine Toggle-Buttons, alle 4 Kurven sichtbar
- Transparenter Hintergrund (kein weisser/grauer Container)
- Achsen und Grid in `hsl(var(--muted-foreground))` mit niedriger Opazitaet
- Linien mit `strokeWidth: 3` und subtilen Glow-Filtern
- Legende als kleine Chips unter dem Chart
- `overflow-hidden` auf Container

### Korrigierte Kurvendaten (glatte S-Kurven)
Alle Zwischenwerte so interpoliert, dass jede Kurve bei ihrem `time_to_100m` organisch 100 erreicht statt abrupt zu springen.

### Betroffene Dateien
1. **Neu:** `src/pages/IndexV2.tsx`
2. **Neu:** `src/components/homepage/HeroWithChart.tsx`
3. **Neu:** `src/components/homepage/GrowthCurveOptimized.tsx`
4. **Edit:** `src/App.tsx` (1 Route hinzufuegen)

