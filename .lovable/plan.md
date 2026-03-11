

# /insights Hub — Implementierungsplan

## Zusammenfassung

Die bestehende `/community`-Seite (CommunityHub.tsx, 923 Zeilen) wird durch einen neuen `/insights` Hub ersetzt. Das Design folgt exakt dem etablierten Muster von Solutions, Playbooks und Cases: SharedHero + Filter-Section (`bg-muted/30 border-y`) + Content-Grid + CTA.

Phase 1 fokussiert auf die Seitenstruktur mit statischen Sample-Daten. Artikel-Content und Events werden zunächst als Daten-Registry angelegt — die Anbindung an ein CMS/Datenbank kommt in Phase 2.

---

## Architektur

```text
src/
├── pages/
│   └── Insights.tsx                    (Hauptseite, ersetzt Community.tsx)
├── components/insights/
│   ├── InsightsHero.tsx               (SharedHero-Wrapper, wie SolutionHero)
│   ├── InsightsFilterSection.tsx      (Tabs + Kategorie-Chips)
│   ├── InsightsGrid.tsx               (Featured + Event Slot + Cards)
│   ├── InsightArticleCard.tsx         (Artikel-Card mit Reactions-Anzeige)
│   ├── InsightEventCard.tsx           (Event-Card, visuell differenziert)
│   ├── InsightCaseStudyCard.tsx       (Case Study Card, Premium-Optik)
│   ├── InsightNewsletterCTA.tsx       (Inline Newsletter-Block)
│   ├── InsightReactions.tsx           (🔥💡🤔 Reaction-Komponente)
│   └── InsightsCTA.tsx               (Final CTA, wie SolutionCTA/CaseCTA)
├── data/
│   └── insights.ts                    (Content-Registry: Artikel, Events, Kategorien)
```

---

## Aenderungen an bestehenden Dateien

| Datei | Aenderung |
|---|---|
| `Navigation.tsx` | `Expertise` durch `Insights` ersetzen (`/insights`) |
| `Footer.tsx` | `sitemapLinks`: `Expertise` durch `Insights` ersetzen |
| `App.tsx` | Route `/community` → `/insights` umleiten, neue `Insights` Page importieren |
| `seoRegistry.ts` | Eintrag fuer `/insights` hinzufuegen |
| `breadcrumbRegistry.ts` | Eintraege fuer `/insights` hinzufuegen |
| `sitemap.xml` | `/community` durch `/insights` ersetzen |

**Wichtig:** `/expertise` bleibt als Route bestehen (AMF, ANST, SST Seiten). Nur in der Navigation wird `Expertise` durch `Insights` ersetzt. Die Expertise-Unterseiten bleiben erreichbar.

---

## Design-Konsistenz mit bestehenden Hubs

### Hero (wie Cases/Solutions/Playbooks)
- SharedHero-Komponente mit Deep Space Hintergrund
- Overline: `Insights · Articles · Events · Case Studies`
- Stats: 3 qualitative Signale (Operator-led, Live Events, Free Access) — keine Fake-Zahlen
- Zwei CTA-Buttons: Browse Articles / See Upcoming Events

### Filter-Section (wie Solutions)
- `bg-muted/30 border-y border-border` Wrapper
- Ebene 1: Tab-Navigation (All / Articles / Events) — sticky
- Ebene 2: Kategorie-Chips (8 Stueck, Single-Select)
- Ergebnis-Zaehler unten
- Mobile: Chips horizontal scrollbar

### Content-Grid (wie Cases)
- `max-w-7xl`, `grid md:grid-cols-2 lg:grid-cols-3 gap-6`
- Featured Slot: volle Breite oder 2/3
- Event Slot: nur wenn Event vorhanden
- Newsletter-CTA inline nach 6 Cards
- Load More Button (kein Infinite Scroll)

### Cards
- Artikel-Card: Kategorie-Badge (farbcodiert), Titel, Lesezeit, Reactions-Counter
- Event-Card: Accent-Border (Orange), Kalender-Icon, Datum/Uhrzeit, Anmeldezahl
- Case Study-Card: Premium-Border, Outcome im Titel

### Reactions (Phase 1)
- 🔥 Fire, 💡 Insight, 🤔 Thinking
- Cookie-basiert, kein Login
- Nur anzeigen wenn > 0
- Auf Card-Ebene nur Zaehler (kein Klick)

### Final CTA (wie SolutionCTA/CaseCTA)
- Gradient/Deep Space Pattern
- Italicized text-gradient Headline
- Trust Signals + Booking Button

---

## Daten-Struktur (`src/data/insights.ts`)

```text
InsightCategory: 8 Kategorien mit Label (de/en), Slug, Farbe
InsightArticle: Titel, Slug, Kategorie, Lesezeit, Autor, Datum, Teaser, Reactions
InsightEvent: Titel, Slug, Typ, Datum, Uhrzeit, Speaker, Kapazitaet, Anmeldungen
```

Startet mit 3-4 Beispiel-Artikeln und 1 Beispiel-Event als Platzhalter-Daten, die spaeter durch echte Inhalte ersetzt werden.

---

## Was NICHT in Phase 1 ist

- Einzelartikel-Seite (`/insights/[kategorie]/[slug]`) — kommt als naechster Schritt
- Event-Detailseite
- Newsletter-Integration (ActiveCampaign)
- Recording-Gate
- Kommentare / Forum
- Reactions-Backend (vorerst nur UI mit localStorage)

---

## Reihenfolge der Implementierung

1. Daten-Registry (`src/data/insights.ts`)
2. Komponenten erstellen (Hero, Filter, Cards, Grid, CTA, Reactions, Newsletter)
3. Insights-Page zusammenbauen
4. Navigation + Footer + Routing aktualisieren
5. SEO-Registry + Sitemap aktualisieren

