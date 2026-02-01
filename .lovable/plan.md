
# Plan: Impressum-Update nach neuem Briefing

## Überblick
Das Impressum wird vollständig überarbeitet und um alle neuen rechtlichen Abschnitte aus dem Briefing ergänzt. Das Design orientiert sich am Glossar-Layout mit Cards und strukturierten Sektionen.

## Änderungen

### 1. Aktualisierte Inhalte
| Aktuell | Neu |
|---------|-----|
| USt-IdNr.: in Arbeit | USt-IdNr.: DE452811403 |

### 2. Neue Sektionen (aus Briefing)

```text
Struktur nach Update:
├── Angaben gemäß § 5 TMG (existiert)
├── Vertreten durch (existiert)
├── Kontakt (existiert)
├── Registereintrag (existiert)
├── USt-IdNr. (aktualisiert)
├── Verantwortlich für Inhalt (existiert)
├── EU-Streitschlichtung (existiert)
├── Verbraucherstreitbeilegung (NEU)
├── Haftung für Inhalte (existiert)
├── Haftung für Links (existiert)
├── Urheberrecht (existiert)
├── Bildnachweise (NEU)
├── Datenschutz (NEU)
├── Kontakt für rechtliche Anfragen (NEU)
├── Erreichbarkeit (NEU)
├── Sprachen (NEU)
├── Rechtliche Hinweise (NEU)
│   ├── Anwendbares Recht
│   ├── Gerichtsstand
│   └── Salvatorische Klausel
├── Stand der Informationen (NEU)
├── Weitere Informationen (NEU)
├── Schnellkontakt (NEU)
├── Wichtige Hinweise (NEU)
│   ├── Keine Rechtsberatung
│   ├── Keine Anlageberatung
│   └── Aktualität
├── Sicherheit (NEU)
└── Copyright Footer (NEU)
```

### 3. Design-Anpassungen (inspiriert vom Glossar)

**Datei:** `src/pages/Impressum.tsx`

- **Back-Button:** Navigation zurück (wie im Glossar)
- **Sektionen:** Strukturierte Cards statt prose-divs
- **Icons:** Lucide-Icons für visuelle Hierarchie
- **Badges:** Für Status/Compliance-Hinweise
- **Container:** `max-w-5xl` wie Glossar (statt `max-w-4xl`)

### 4. Technische Änderungen

**Imports hinzufügen:**
```typescript
import { ArrowLeft, Building2, Phone, Mail, Globe, Scale, 
         FileText, Link2, Copyright, Shield, Clock, Languages,
         AlertTriangle, Gavel, Info, Users, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
```

**Neue Struktur:**
- Header mit Back-Button und Titel
- Cards für jeden Hauptabschnitt
- Unterabschnitte innerhalb der Cards
- Footer mit Copyright und Compliance-Badges

### 5. Inhalt pro Sektion

**Verbraucherstreitbeilegung (NEU):**
> "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."

**Bildnachweise (NEU):**
- Eigentum ScalingX
- Lizenziert
- Mit Quellenangaben

**Erreichbarkeit (NEU):**
- Mo-Fr: 09:00-18:00 Uhr (MEZ/MESZ)
- Hinweis auf Bearbeitung am nächsten Werktag

**Sprachen (NEU):**
- Primär: Deutsch
- Englisch als Service
- Deutsche Version maßgeblich

**Rechtliche Hinweise (NEU):**
- Deutsches Recht, UN-Kaufrecht ausgeschlossen
- Gerichtsstand: Berlin
- Salvatorische Klausel

**Weitere Informationen (NEU):**
- Unternehmensgegenstand: AI-Native Execution Consulting
- Gründungsjahr: 2025
- Gesellschaftsform: GmbH

**Schnellkontakt (NEU):**
- info@scalingx.io (Allgemein)
- team@scalingx.io (Vertrieb)
- LinkedIn-Link
- Telefon

**Wichtige Hinweise (NEU):**
- Keine Rechtsberatung
- Keine Anlageberatung
- Aktualitätshinweis

**Sicherheit (NEU):**
- Technische/organisatorische Maßnahmen

### 6. Footer-Element
```typescript
<div className="mt-16 text-center border-t pt-8">
  <p className="text-sm text-muted-foreground">
    © 2026 ScalingX Hypergrowth GmbH. Alle Rechte vorbehalten.
  </p>
  <div className="flex flex-wrap justify-center gap-2 mt-4">
    <Badge variant="outline">TMG-konform</Badge>
    <Badge variant="outline">DSGVO-konform</Badge>
    <Badge variant="outline">RStV-konform</Badge>
  </div>
</div>
```

## Ergebnis
- Vollständiges, rechtssicheres Impressum nach deutschem Recht
- Konsistentes Design mit dem Rest der Website (Glossar-Stil)
- Alle neuen Sektionen aus dem Briefing integriert
- Korrekte USt-IdNr.: DE452811403
- Professionelle Darstellung mit Cards und Icons
