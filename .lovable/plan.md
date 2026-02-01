
# Plan: Datenschutzerklärung/Privacy Policy Update

## Überblick

Die Datenschutzseite wird vollständig überarbeitet gemäß dem neuen Briefing. Das Design orientiert sich am Glossar-Layout mit strukturierten Cards, Icons und Badges. Die Seite wird zweisprachig (DE/EN) implementiert.

## Aktueller Status vs. Briefing

| Aspekt | Aktuell | Neu (Briefing) |
|--------|---------|----------------|
| Sektionen | ~14 | ~35 |
| Design | Prose-Layout | Card-basiert (Glossar-Stil) |
| Sprache | Nur Deutsch | DE + EN |
| Container | max-w-4xl | max-w-5xl |
| Icons | Keine | Lucide-Icons |
| Drittanbieter | Keine | 15+ Services dokumentiert |

## Neue Sektionen (aus Briefing)

```text
Struktur nach Update:
├── Header mit Back-Button + Badges
├── Preamble / Einführung
├── Controller (Verantwortlicher)
├── Data Protection Contact (Ansprechpartner)
├── Types of Data Processed (erweitert)
├── Categories of Data Subjects (erweitert)
├── Purposes of Processing (erweitert)
├── Legal Basis (mit DSGVO-Artikeln)
├── Security Measures (mit Liste)
│
├── TECHNICAL INFRASTRUCTURE
│   ├── Hosting (Lovable/Vercel)
│   ├── Forms (Fillout.com)
│   └── Booking System (Microsoft 365)
│
├── COMMUNICATION & MARKETING
│   ├── Newsletter (ActiveCampaign)
│   └── Email Communication
│
├── ANALYTICS & TRACKING
│   ├── Google Analytics 4
│   ├── Hotjar
│   ├── Google Ads Conversion
│   └── LinkedIn Insight Tag / Facebook Pixel
│
├── COOKIES
│   ├── Cookie-Kategorien
│   ├── Consent Management
│   └── Browser-Einstellungen
│
├── BUSINESS TOOLS
│   ├── CRM (Attio)
│   ├── Cloud Storage (Microsoft 365)
│   └── AI Tools (interne Nutzung)
│
├── ACCOUNTING
│   ├── Tax Advisor (Ziegler & Heidorn)
│   ├── DATEV
│   └── Finom (Business Account)
│
├── Social Media
├── Contractual Services
├── Contact Requests
├── Application Process
├── Log Files
├── Third Country Transfers
├── Retention Periods (mit Tabelle)
│
├── RIGHTS (8 Rechte)
│   ├── Access (Art. 15)
│   ├── Rectification (Art. 16)
│   ├── Erasure (Art. 17)
│   ├── Restriction (Art. 18)
│   ├── Data Portability (Art. 20)
│   ├── Withdraw Consent (Art. 7)
│   ├── Object (Art. 21)
│   └── Complaint (Art. 77)
│
├── Exercising Rights (Kontakt)
├── Changes to Privacy Policy
├── Final Contact
└── Compliance Footer (Badges)
```

## Design-Pattern (Glossar-Vorlage)

**Datei:** `src/pages/Datenschutz.tsx`

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
  ArrowLeft, Building2, User, Database, Users, Target,
  Scale, Shield, Server, FileText, Calendar, Mail,
  BarChart3, Cookie, Briefcase, Cloud, Bot, Calculator,
  Share2, FileCheck, UserPlus, HardDrive, Globe, Clock,
  CheckCircle, Lock, Phone, ExternalLink, AlertTriangle
} from 'lucide-react';
```

### Struktur-Elemente

1. **Header mit Back-Button:**
```typescript
<Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 -ml-2">
  <ArrowLeft className="h-4 w-4 mr-2" />
  {language === 'de' ? 'Zurück' : 'Back'}
</Button>

<div className="flex flex-wrap items-center gap-3 mb-4">
  <Badge variant="outline">GDPR</Badge>
  <Badge variant="outline">BDSG</Badge>
  <Badge variant="gradient">v1.0</Badge>
</div>

<h1 className="font-display text-4xl md:text-5xl italic mb-4">
  {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
</h1>
```

2. **Card-basierte Sektionen:**
```typescript
<Card className="mb-6">
  <CardHeader className="pb-3">
    <CardTitle className="flex items-center gap-3 text-xl">
      <Building2 className="h-5 w-5 text-primary" />
      {language === 'de' ? 'Verantwortlicher' : 'Controller'}
    </CardTitle>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

3. **Drittanbieter-Tabellen:**
```typescript
<Table>
  <TableHeader>
    <TableRow className="bg-muted/50">
      <TableHead>Service</TableHead>
      <TableHead>{language === 'de' ? 'Anbieter' : 'Provider'}</TableHead>
      <TableHead>{language === 'de' ? 'Zweck' : 'Purpose'}</TableHead>
      <TableHead>{language === 'de' ? 'Rechtsgrundlage' : 'Legal Basis'}</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {/* Rows for each service */}
  </TableBody>
</Table>
```

4. **Rechte-Sektion (nummerierte Cards):**
```typescript
{rights.map((right, index) => (
  <Card key={right.article} className="border-l-4 border-l-primary">
    <CardContent className="pt-4">
      <div className="flex items-start gap-3">
        <span className="font-bold text-primary">{index + 1}.</span>
        <div>
          <h4 className="font-semibold">{right.title}</h4>
          <p className="text-sm text-muted-foreground">
            {right.article} - {right.description}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
))}
```

5. **Compliance Footer:**
```typescript
<div className="mt-16 text-center border-t border-border pt-8">
  <p className="text-sm text-muted-foreground mb-4">
    © 2026 ScalingX Hypergrowth GmbH. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
  </p>
  <div className="flex flex-wrap justify-center gap-2">
    <Badge variant="outline">GDPR-compliant</Badge>
    <Badge variant="outline">BDSG-compliant</Badge>
    <Badge variant="outline">TMG-compliant</Badge>
    <Badge variant="outline">TTDSG-compliant</Badge>
  </div>
</div>
```

## Inhalt pro Hauptsektion

### Controller (Verantwortlicher)
- ScalingX Hypergrowth GmbH
- Michel Lason (Geschäftsführer)
- Markgrafendamm 4, 10245 Berlin
- HRB 271376 B, USt-IdNr: DE452811403
- info@scalingx.io, +49 172 735 58 91

### Drittanbieter-Services (Tabelle)

| Service | Provider | Purpose | Legal Basis |
|---------|----------|---------|-------------|
| Hosting | Lovable/Vercel | Website Hosting | Art. 6(1)(f) |
| Forms | Fillout.com | Contact Forms | Art. 6(1)(b) |
| Newsletter | ActiveCampaign | Email Marketing | Art. 6(1)(a) |
| Analytics | Google Analytics 4 | Usage Analysis | Art. 6(1)(a) |
| Heatmaps | Hotjar | UX Optimization | Art. 6(1)(a) |
| Ads | Google Ads | Conversion Tracking | Art. 6(1)(a) |
| Remarketing | LinkedIn/Facebook | Targeting | Art. 6(1)(a) |
| CRM | Attio | Customer Management | Art. 6(1)(b) |
| Cloud | Microsoft 365 | Storage | Art. 6(1)(b) |
| Accounting | DATEV/Finom | Finance | Art. 6(1)(c) |

### Aufbewahrungsfristen (Tabelle)

| Datenart | Frist | Grundlage |
|----------|-------|-----------|
| Kundendaten | 10 Jahre | § 147 AO |
| Bewerberdaten | 6 Monate | § 26 BDSG |
| Newsletter | Bis Abmeldung | Art. 7(3) |
| Log Files | 7 Tage | Art. 6(1)(f) |
| Analytics | 14 Monate | GA4 Standard |

### Betroffenenrechte (8 Rechte)

1. Auskunftsrecht (Art. 15 DSGVO)
2. Berichtigungsrecht (Art. 16 DSGVO)
3. Löschungsrecht (Art. 17 DSGVO)
4. Einschränkungsrecht (Art. 18 DSGVO)
5. Datenübertragbarkeit (Art. 20 DSGVO)
6. Widerrufsrecht (Art. 7 Abs. 3 DSGVO)
7. Widerspruchsrecht (Art. 21 DSGVO)
8. Beschwerderecht (Art. 77 DSGVO)

### Aufsichtsbehörde

Berliner Beauftragte für Datenschutz und Informationsfreiheit
Friedrichstraße 219, 10969 Berlin
mailbox@datenschutz-berlin.de

## Technische Umsetzung

**Datei:** `src/pages/Datenschutz.tsx`

- Kompletter Rewrite mit ~800-1000 Zeilen
- Bilingual (DE/EN) mit `useLanguage` Hook
- Container: `max-w-5xl` (wie Glossar)
- Card-Komponenten für alle Sektionen
- Tables für Drittanbieter und Fristen
- Icons für visuelle Hierarchie
- Links zu externen Datenschutzrichtlinien

## Ergebnis

- Vollständige DSGVO-konforme Datenschutzerklärung
- Alle 15+ Drittanbieter dokumentiert
- Konsistentes Design mit Glossar/Impressum
- Zweisprachig (DE/EN)
- Professionelle Darstellung mit Cards und Icons
- Compliance-Badges im Footer
