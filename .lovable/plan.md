
# Plan: AGB/Terms Update nach neuem Briefing

## Überblick

Die AGB-Seite wird vollständig überarbeitet gemäß dem detaillierten Briefing. Das Design orientiert sich am Glossar-Layout mit strukturierten Cards, Tables, Icons und Badges. Die Seite wird zweisprachig (DE/EN) implementiert.

## Aktueller Status vs. Briefing

| Aspekt | Aktuell | Neu (Briefing) |
|--------|---------|----------------|
| Sektionen | 11 (§1-§11) | 10 (§1-§10) strukturiert |
| Design | Prose-Layout, border-left | Card-basiert (Glossar-Stil) |
| Preistabellen | Keine | 6 Service-Kategorien mit Preisen |
| Zahlungspläne | Keine | Detaillierte Payment Schedules |
| Laufzeiten | Einfach | Tabelle mit allen Produkten |
| Icons | Nur ArrowLeft | 15+ Lucide-Icons |
| Container | max-w-4xl | max-w-5xl |
| Outcome-Garantie | Nicht erwähnt | Detailliert dokumentiert |

## Neue Struktur (aus Briefing)

```text
Struktur nach Update:
├── Header mit Back-Button + Badges (v1.0, BGB-konform)
├── Inhaltsverzeichnis (Clickable)
│
├── § 1 GELTUNGSBEREICH & VERTRAGSSCHLUSS
│   ├── 1.1 Geltungsbereich (mit Firmendetails)
│   ├── 1.2 Ausschluss abweichender Bedingungen
│   ├── 1.3 Vertragsschluss
│   └── 1.4 Vertragssprache
│
├── § 2 LEISTUNGEN & LEISTUNGSUMFANG
│   ├── 2.1 Leistungskategorien (Cards)
│   │   ├── Transformation Programs (Power Up, Boost, Accelerate)
│   │   ├── Decision Support
│   │   ├── AI Tools & Training
│   │   ├── Bespoke Services
│   │   ├── Retainer Advisory
│   │   └── Portfolio Solutions
│   ├── 2.2 Leistungsbeschreibung
│   └── 2.3 Leistungsänderungen
│
├── § 3 MITWIRKUNGSPFLICHTEN DES KUNDEN
│   ├── 3.1 Allgemeine Mitwirkungspflichten
│   ├── 3.2 Spezifische Mitwirkungspflichten (Tabelle)
│   └── 3.3 Folgen fehlender Mitwirkung
│
├── § 4 VERGÜTUNG & ZAHLUNGSBEDINGUNGEN
│   ├── 4.1 Vergütung
│   ├── 4.2 Zahlungsbedingungen (6 Tabellen)
│   ├── 4.3 Zahlungsfrist & Verzug
│   ├── 4.4 Aufrechnung & Zurückbehaltung
│   └── 4.5 Reisekosten & Auslagen
│
├── § 5 VERTRAGSLAUFZEIT & KÜNDIGUNG
│   ├── 5.1 Vertragslaufzeit (Tabelle)
│   ├── 5.2 Ordentliche Kündigung
│   ├── 5.3 Außerordentliche Kündigung
│   └── 5.4 Folgen der Kündigung
│
├── § 6 GEISTIGES EIGENTUM & NUTZUNGSRECHTE
│   ├── 6.1 Geistiges Eigentum von ScalingX (Liste)
│   ├── 6.2 Nutzungsrechte des Kunden
│   ├── 6.3 Nutzungsrechte von ScalingX
│   └── 6.4 Kundendaten
│
├── § 7 VERTRAULICHKEIT & DATENSCHUTZ
│   ├── 7.1 Vertraulichkeit
│   ├── 7.2 Datenschutz
│   └── 7.3 Subunternehmer
│
├── § 8 HAFTUNG & GEWÄHRLEISTUNG
│   ├── 8.1 Haftung
│   ├── 8.2 Gewährleistung
│   ├── 8.3 Outcome-Garantie (Card)
│   └── 8.4 Verjährung
│
├── § 9 HÖHERE GEWALT
│   ├── 9.1 Definition
│   └── 9.2 Folgen
│
├── § 10 SCHLUSSBESTIMMUNGEN
│   ├── 10.1 Änderungen & Ergänzungen
│   ├── 10.2 Salvatorische Klausel
│   ├── 10.3 Anwendbares Recht
│   ├── 10.4 Gerichtsstand
│   ├── 10.5 Streitbeilegung
│   ├── 10.6 Übertragung
│   └── 10.7 Vertragssprache
│
├── Kontakt-Sektion (Card)
└── Compliance Footer (Badges)
```

## Design-Pattern (Glossar-Vorlage)

**Datei:** `src/pages/AGB.tsx`

### Imports

```typescript
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow
} from '@/components/ui/table';
import { 
  ArrowLeft, Building2, FileText, Users, CreditCard, Clock, 
  Lightbulb, Lock, Shield, AlertTriangle, Scale, Phone, Mail,
  Rocket, Target, Zap, BarChart3, BookOpen, Bot, Briefcase,
  Calendar, CheckCircle, ExternalLink
} from 'lucide-react';
```

### Struktur-Elemente

1. **Header mit Back-Button und Badges:**
```typescript
<Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 -ml-2">
  <ArrowLeft className="h-4 w-4 mr-2" />
  {language === 'de' ? 'Zurück' : 'Back'}
</Button>

<div className="flex flex-wrap items-center gap-3 mb-4">
  <Badge variant="outline">BGB §§ 305-310</Badge>
  <Badge variant="outline">B2B</Badge>
  <Badge variant="gradient">v1.0</Badge>
</div>

<h1 className="font-display text-4xl md:text-5xl italic mb-4">
  {language === 'de' ? 'Allgemeine Geschäftsbedingungen' : 'Terms and Conditions'}
</h1>
```

2. **Inhaltsverzeichnis (Clickable):**
```typescript
<Card className="mb-8">
  <CardHeader className="pb-3">
    <CardTitle className="flex items-center gap-3 text-lg">
      <FileText className="h-5 w-5 text-primary" />
      {language === 'de' ? 'Inhaltsverzeichnis' : 'Table of Contents'}
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
      {sections.map((section, index) => (
        <li key={index}>
          <a href={`#section-${index + 1}`} className="hover:text-primary">
            § {index + 1} {section.title}
          </a>
        </li>
      ))}
    </ol>
  </CardContent>
</Card>
```

3. **Leistungskategorien (Card-Grid):**
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Transformation Programs */}
  <Card className="border-purple-500/30 bg-purple-500/5">
    <CardHeader className="pb-2">
      <CardTitle className="flex items-center gap-2 text-base">
        <Rocket className="h-4 w-4 text-purple-500" />
        Transformation Programs
      </CardTitle>
    </CardHeader>
    <CardContent className="text-sm space-y-2">
      <div><strong>Power Up:</strong> €23.600 (30 Tage)</div>
      <div><strong>Boost:</strong> €60K-€78K (90 Tage)</div>
      <div><strong>Accelerate:</strong> €153K (12 Monate)</div>
    </CardContent>
  </Card>
  {/* ... weitere Cards ... */}
</div>
```

4. **Zahlungspläne (Tabellen):**
```typescript
<Table>
  <TableHeader>
    <TableRow className="bg-muted/50">
      <TableHead>Produkt</TableHead>
      <TableHead>{language === 'de' ? 'Bei Vertragsschluss' : 'At Contract'}</TableHead>
      <TableHead>{language === 'de' ? 'Milestone 1' : 'Milestone 1'}</TableHead>
      <TableHead>{language === 'de' ? 'Milestone 2' : 'Milestone 2'}</TableHead>
      <TableHead>{language === 'de' ? 'Abschluss' : 'Completion'}</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Power Up (€23.600)</TableCell>
      <TableCell>50% (€11.800)</TableCell>
      <TableCell>-</TableCell>
      <TableCell>-</TableCell>
      <TableCell>50% (€11.800)</TableCell>
    </TableRow>
    {/* ... weitere Rows ... */}
  </TableBody>
</Table>
```

5. **Outcome-Garantie (Highlight Card):**
```typescript
<Card className="border-green-500/30 bg-green-500/5 mb-6">
  <CardHeader className="pb-2">
    <CardTitle className="flex items-center gap-2 text-lg text-green-700">
      <CheckCircle className="h-5 w-5 text-green-500" />
      {language === 'de' ? 'Outcome-Garantie' : 'Outcome Guarantee'}
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-sm mb-4">
      {language === 'de' 
        ? 'Bei Transformation Programs gilt: 2 von 3 Outcomes oder 50% Refund'
        : 'For Transformation Programs: 2 of 3 outcomes or 50% refund'}
    </p>
    <Table>
      {/* Garantie-Details */}
    </Table>
  </CardContent>
</Card>
```

6. **Compliance Footer:**
```typescript
<div className="mt-16 text-center border-t border-border pt-8">
  <p className="text-sm text-muted-foreground mb-4">
    {language === 'de' ? 'Stand: 1. Februar 2026 | Version 1.0' : 'As of: February 1, 2026 | Version 1.0'}
  </p>
  <p className="text-sm text-muted-foreground mb-4">
    © 2026 ScalingX Hypergrowth GmbH. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
  </p>
  <div className="flex flex-wrap justify-center gap-2">
    <Badge variant="outline">BGB-konform</Badge>
    <Badge variant="outline">AGB-Kontrolle</Badge>
    <Badge variant="outline">DSGVO-konform</Badge>
  </div>
</div>
```

## Inhalt pro Hauptsektion

### § 1 Geltungsbereich & Vertragsschluss
- Firmendetails: ScalingX Hypergrowth GmbH, HRB 271376 B
- Adresse: Markgrafendamm 4, 10245 Berlin
- Geschäftsführer: Michel Lason
- Kontakt: info@scalingx.io, +49 172 735 58 91
- Vertragssprache: Deutsch (maßgeblich)

### § 2 Leistungen (6 Kategorien mit Preisen)

| Kategorie | Produkte | Preisspanne |
|-----------|----------|-------------|
| Transformation Programs | Power Up, Boost, Accelerate | €23.600 - €153.000 |
| Decision Support | Inflection Call, Expert Sessions, Reports | €0 - €5.900 |
| AI Tools & Training | Copilots, Playbooks, Workshops | €99/mo - €12.900 |
| Bespoke Services | Strategy, Transformation | €8.000 - Custom |
| Retainer Advisory | Fractional COO, Board Advisory | €2.000 - €11.000/mo |
| Portfolio Solutions | Assessment, Transformation | €50.000 - €720.000 |

### § 3 Mitwirkungspflichten (Stundentabelle)

| Programm | Wöchentliche Mitwirkung |
|----------|------------------------|
| Power Up | 10-20 Stunden/Woche |
| Boost | 15-25 Stunden/Woche |
| Accelerate | 20-30 Stunden/Woche |

### § 4 Zahlungsbedingungen (6 Schedules)

**Transformation Programs:**
- Power Up: 50% / 50%
- Boost: 40% / 30% / 30%
- Accelerate: 25% / 25% / 25% / 25%

**Weitere:**
- Expert Sessions: 100% im Voraus
- Workshops: 50% bei Buchung, 50% 7 Tage vorher
- Retainer: Monatlich im Voraus

### § 5 Vertragslaufzeiten (Tabelle)

| Produkt | Laufzeit | Kündigungsfrist |
|---------|----------|-----------------|
| Power Up | 30 Tage (fest) | - |
| Boost | 90 Tage (fest) | - |
| Accelerate | 12 Monate (fest) | - |
| AI Copilots | Monatlich | 30 Tage |
| Fractional COO | Min. 3 Monate | 30 Tage |
| Board Advisory | Min. 12 Monate | 60 Tage |

### § 6 Geistiges Eigentum

**Geschützte IP von ScalingX:**
- AI-Native Scaling Framework (v4.5.3)
- AI Maturity Framework (AMF v4.5.1)
- AI-Native Scaling Theory (ANST v4.5.3)
- Scaling Stack Theory (SST v4.5.1)
- θ_index Scoring Methodology
- Alle Playbooks, Templates, Tools

**Kundenrechte:**
- Nicht-exklusiv, nicht übertragbar, zeitlich unbegrenzt
- Nur für interne Zwecke
- Weitergabe an Investoren/Board erlaubt

### § 8 Outcome-Garantie

| Programm | Garantie | Bei Nichterreichung |
|----------|----------|---------------------|
| Power Up | 2 von 3 Outcomes | 50% Refund |
| Boost | 2 von 3 Outcomes | 50% Refund |
| Accelerate | 2 von 3 Metrics | 50% Refund |

**Voraussetzungen:**
- Volle Mitwirkung des Kunden
- Messung nach vereinbarter Methodik
- Geltendmachung innerhalb 30 Tagen

### § 10 Schlussbestimmungen
- Gerichtsstand: Berlin
- Anwendbares Recht: Deutsches Recht, CISG ausgeschlossen
- EU-Streitschlichtung: ec.europa.eu/consumers/odr
- Keine Teilnahme an Verbraucherschlichtung

## Technische Umsetzung

**Datei:** `src/pages/AGB.tsx`

- Kompletter Rewrite mit ~900-1100 Zeilen
- Bilingual (DE/EN) mit `useLanguage` Hook
- Container: `max-w-5xl` (wie Glossar)
- ~8 Tabellen für Preise, Zahlungspläne, Laufzeiten
- ~6 Service-Kategorie Cards
- Icons für visuelle Hierarchie
- Anchor-Links für Inhaltsverzeichnis
- ID-Attribute für Scroll-Navigation

## Ergebnis

- Vollständige, BGB-konforme AGB nach deutschem Recht
- Alle 6 Service-Kategorien mit Preisen dokumentiert
- Detaillierte Zahlungspläne für jedes Produkt
- Outcome-Garantie klar definiert
- Konsistentes Design mit Glossar/Impressum/Datenschutz
- Zweisprachig (DE/EN)
- Professionelle Darstellung mit Cards, Tables und Icons
- Compliance-Badges im Footer
