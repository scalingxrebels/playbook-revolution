

# SEO & GEO Optimierung — Von 3/10 auf 10/10

## Aktueller Stand: 3/10

| Bereich | Status | Score |
|---|---|---|
| Technisches SEO | Kritische Luecken | 2/10 |
| On-Page SEO | Nicht vorhanden | 1/10 |
| Strukturierte Daten (GEO) | Null | 0/10 |
| Content-Struktur (GEO) | Gut (FAQ, Pillar-Cluster) | 7/10 |
| robots.txt | Exzellent | 10/10 |

---

## Was fehlt (nach Playbook-Checkliste)

### Kritisch — Betrifft alle 80+ Seiten
1. **Kein `react-helmet-async`** — Alle Seiten teilen sich denselben Title Tag und dieselbe Meta Description aus `index.html`
2. **Keine Canonical Tags** — Duplicate Content Risiko
3. **Keine XML Sitemap** — Google kennt die Seitenstruktur nicht
4. **Kein Schema.org JSON-LD** — Null strukturierte Daten (FAQPage, Organization, BreadcrumbList, HowTo, Article)
5. **`<html lang="en">` hardcoded** — Obwohl Content bilingual DE/EN ist
6. **Keine Hreflang Tags** — DACH-Maerkte werden nicht differenziert
7. **Keine per-Page OG Tags** — Alle Social Shares zeigen denselben generischen Titel

---

## Umsetzungsplan

### Phase 1: SEO-Fundament (react-helmet-async + SEO-Komponente)

**1.1 — SEO-Infrastruktur schaffen**
- `react-helmet-async` installieren
- `HelmetProvider` in `App.tsx` wrappen
- Eine zentrale `<SEOHead>` Komponente erstellen, die pro Seite aufgerufen wird:

```text
<SEOHead
  title="GTM Effectiveness Review — ScalingX"
  description="Dein GTM-Funnel verliert Geld..."
  path="/solutions/gtm-effectiveness-review"
  lang={language}
  type="website"
/>
```

Die Komponente rendert automatisch:
- `<title>` (50-60 Zeichen, Keyword vorne)
- `<meta name="description">` (150-160 Zeichen)
- `<link rel="canonical">` (absolute URL)
- `<meta property="og:*">` (Title, Description, Image, URL, Type)
- `<meta name="twitter:*">`
- `<html lang>` dynamisch (de/en)

**1.2 — SEO-Daten-Registry**
Eine zentrale Datei `src/data/seoRegistry.ts` mit SEO-Daten fuer alle 80+ Seiten:

```text
'/': {
  title: { de: 'ScalingX — AI-Native Scaling von €2M auf €100M ARR', en: '...' },
  description: { de: '3-5x schneller wachsen...', en: '...' },
  ogImage: '/images/og/homepage.png'
},
'/solutions': { ... },
'/playbooks': { ... },
...
```

**1.3 — Alle Pages aktualisieren**
Jede Page-Komponente bekommt `<SEOHead>` als erstes Element. Die bestehende `index.html` behaelt nur Fallback-Meta-Tags.

### Phase 2: Strukturierte Daten (Schema.org JSON-LD)

**2.1 — Schema-Komponenten erstellen**

Vier JSON-LD Komponenten in `src/components/seo/`:

- **`OrganizationSchema`** — Global in App.tsx, einmalig:
  ```text
  Organization: ScalingX, logo, URL, sameAs (LinkedIn, YouTube)
  ```

- **`BreadcrumbSchema`** — Auf jeder Seite mit Breadcrumbs (Solutions, Playbooks, Cases):
  ```text
  BreadcrumbList aus dem aktuellen Breadcrumb-Pfad generiert
  ```

- **`FAQSchema`** — Auf allen Solutions-Seiten mit Qualification-Sections:
  ```text
  FAQPage mit Frage-Antwort-Paaren aus den bestehenden "Good Fit / Not Fit" Sektionen
  ```

- **`HowToSchema`** — Auf Solutions-Seiten mit Process-Sections:
  ```text
  HowTo mit Steps aus den Wochen-Ablauf-Sektionen
  ```

- **`PersonSchema`** — Auf Team-/About-Seiten:
  ```text
  Person: Michel Lason, Alban Halili, Florian Metzger
  ```

**2.2 — Schema in Pages integrieren**
Jede Page bekommt die relevanten Schema-Komponenten. Beispiel Solutions-Seite:
```text
<SEOHead ... />
<BreadcrumbSchema items={[...]} />
<FAQSchema questions={[...]} />
<HowToSchema steps={[...]} />
```

### Phase 3: Sitemap + Hreflang + html lang

**3.1 — Statische XML Sitemap**
`public/sitemap.xml` mit allen indexierbaren Seiten generieren. Prioritaeten:
- Homepage: 1.0
- Solutions, Playbooks, Cases: 0.8
- Einzelne Solutions/Playbooks: 0.7
- Legal: 0.3

**3.2 — Hreflang Tags**
Da die Seite nicht separate DE/EN URLs hat (gleiche URL, Toggle), setzen wir:
- `<html lang="de">` wenn Sprache Deutsch
- `<html lang="en">` wenn Sprache Englisch
- `x-default` hreflang auf die aktuelle URL

**3.3 — index.html Fallback-Meta bereinigen**
- OG Image auf eigenes Bild statt Lovable-Platzhalter aendern

### Phase 4: GEO-Optimierung (Content-Struktur)

**4.1 — Answer-First Meta Descriptions**
Alle Meta Descriptions nach dem GEO-Playbook: Direkte Antwort, keine Marketing-Floskeln. Konkrete Zahlen wo moeglich.

**4.2 — Semantisches HTML verbessern**
- `<article>`, `<section>`, `<aside>` korrekt einsetzen
- Alle `<section>` mit `aria-label` oder `aria-labelledby` versehen
- `<h1>` pro Seite genau 1x (bereits weitgehend korrekt)

---

## Dateien und Aenderungen

| Aktion | Dateien |
|---|---|
| Neu: SEO-Infrastruktur | `src/components/seo/SEOHead.tsx`, `src/components/seo/OrganizationSchema.tsx`, `src/components/seo/BreadcrumbSchema.tsx`, `src/components/seo/FAQSchema.tsx`, `src/components/seo/HowToSchema.tsx`, `src/components/seo/PersonSchema.tsx` |
| Neu: SEO-Daten | `src/data/seoRegistry.ts` |
| Neu: Sitemap | `public/sitemap.xml` |
| Edit: App-Level | `App.tsx` (HelmetProvider, OrganizationSchema), `index.html` (OG-Image Fix) |
| Edit: Alle 80+ Pages | `<SEOHead>` + relevante Schema-Komponenten einfuegen |
| Edit: LanguageContext | `html lang` Attribut dynamisch setzen |

### Abhaengigkeit
- NPM-Paket: `react-helmet-async`

### Was NICHT in Scope ist (Off-Page / extern)
- Backlink-Aufbau (t3n, Gruenderszene etc.)
- Google Search Console Setup
- Crunchbase / Google My Business Profile
- Content-Erstellung neuer Artikel
- Analytics-Integration (Plausible)

Diese sind laut Playbook wichtig, aber nicht im Code implementierbar.

