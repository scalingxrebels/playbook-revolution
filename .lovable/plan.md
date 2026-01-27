

# Plan: About-Seite Redesign mit 8 Sektionen

## Übersicht

Komplette Überarbeitung der About-Seite basierend auf dem vorgeschlagenen "TeamPagePerfect"-Design. Integration der korrekten Team-Daten, neuer Sektionen und konsistenter Design-Sprache mit dem bestehenden Design-System.

---

## Sektionen-Struktur (Neu)

| Nr | Sektion | Status | Beschreibung |
|----|---------|--------|--------------|
| 1 | Hero | Anpassen | Neue Headline + Stats im Hero |
| 2 | Team | Erweitern | Korrekte Namen + erweiterte Bios + Expertise + LinkedIn |
| 3 | Approach | Neu | Research-Backed, Hands-On, Measurable |
| 4 | Values | Überarbeiten | Impact First, Empowerment, Clean Code Growth |
| 5 | Proof | Neu | Metriken + Case Study Teaser |
| 6 | Portfolio | Neu | lasr.io + Pigtie Ventures |
| 7 | Mission | Überarbeiten | 100 Unternehmen zu €100M ARR bis 2030 |
| 8 | CTA | Anpassen | Inflection Call buchen |

---

## Technische Änderungen

### Datei: `src/pages/About.tsx`

#### 1. Team-Daten korrigieren (Zeilen 20-53)

**Vorher:**
```tsx
const teamMembers: TeamMember[] = [
  { name: 'Florian Heinrichs', role: { de: 'Managing Partner' }, ... },
  { name: 'Alban Cortes', role: { de: 'Partner' }, ... },
  { name: 'Michel Weis', role: { de: 'Partner' }, ... }
];
```

**Nachher:**
```tsx
const teamMembers: TeamMember[] = [
  {
    name: 'Michel Lason',
    role: { de: 'Gründer & CEO', en: 'Founder & CEO' },
    tagline: { de: 'Strategy. Scaling. Impact.', en: 'Strategy. Scaling. Impact.' },
    bio: {
      de: '18 Jahre Startups aufbauen, skalieren und reparieren. Ex-Berater (Microsoft, XING), SaaS Executive (smapOne: €1,3M → €13,7M ARR). Autor "Fix Growth. Scale Faster."',
      en: '18 years building, scaling, and fixing startups. Ex-consultant (Microsoft, XING), SaaS executive (smapOne: €1.3M → €13.7M ARR). Author "Fix Growth. Scale Faster."'
    },
    highlight: { de: 'Rule of 40 +10 Pkt, EBITDA –€300k → +€150k', en: 'Rule of 40 +10 pts, EBITDA –€300k → +€150k' },
    expertise: ['Revenue Architecture', 'AI/LCNC', 'GTM Motions', 'Investor Readiness'],
    image: '/images/team-michel.png',
    linkedin: 'https://www.linkedin.com/in/michellason/'
  },
  {
    name: 'Alban Halili',
    role: { de: 'Partner', en: 'Partner' },
    tagline: { de: 'Growth. AI Solutions. Automation.', en: 'Growth. AI Solutions. Automation.' },
    bio: {
      de: '10+ Jahre B2B Sales skalieren. Ex-CSO bei Elba (€8,5M ARR), Enterprise Sales bei Telefónica (€7,7Mrd).',
      en: '10+ years scaling B2B sales. Ex-CSO at Elba (€8.5M ARR), Enterprise Sales at Telefónica (€7.7B).'
    },
    highlight: { de: '3,8% Conversion, €14,5K Durchschnitts-Deals', en: '3.8% conversion, €14.5K avg. deals' },
    expertise: ['B2B Sales', 'AI Agents', 'Automation', 'Performance Analytics'],
    image: '/images/team-alban.png',
    linkedin: 'https://www.linkedin.com/in/alban-halili/'
  },
  {
    name: 'Florian Metzger',
    role: { de: 'Venture Architect', en: 'Venture Architect' },
    tagline: { de: 'RevOps. GTM. Venture Architect.', en: 'RevOps. GTM. Venture Architect.' },
    bio: {
      de: '4+ Jahre SaaS-Businesses aufbauen. Design Thinking (HPI), lasr.io Architekt. Co-Founder Mindset.',
      en: '4+ years building SaaS businesses. Design Thinking (HPI), lasr.io architect. Co-founder mindset.'
    },
    highlight: { de: 'Sales Cycle –30%, Lead Throughput optimiert', en: 'Sales cycle –30%, improved lead throughput' },
    expertise: ['RevOps', 'GTM Engineering', 'Marketing Automation'],
    image: '/images/team-florian.png',
    linkedin: 'https://www.linkedin.com/in/florianmetzger/'
  }
];
```

#### 2. Hero mit Stats erweitern (Zeilen 97-106)

**Nachher:**
```tsx
<SharedHero
  overlineEn="About ScalingX"
  overlineDe="Über ScalingX"
  headlineLine1En="Expertise × Speed"
  headlineLine1De="Expertise × Speed"
  headlineLine2En="= Impact"
  headlineLine2De="= Impact"
  subheadlineEn="We help Series A-D startups scale 3-5x faster. Not with slides. With systems that ship."
  subheadlineDe="Wir helfen Series A-D Startups 3-5x schneller zu skalieren. Nicht mit Slides. Mit Systemen, die funktionieren."
  stats={[
    { value: '80+', label: { en: 'Companies Scaled', de: 'Unternehmen skaliert' } },
    { value: '140+', label: { en: 'Engagements', de: 'Mandate' } },
    { value: '€2.5B+', label: { en: 'Valuation Managed', de: 'Bewertung verwaltet' }, color: 'accent' },
    { value: '90 Days', label: { en: 'Time to Results', de: 'Bis zu Ergebnissen' } }
  ]}
/>
```

#### 3. Neue Sektionen hinzufügen

**Approach-Sektion** (nach Team):
```tsx
{/* Approach Section */}
<section className="mb-20">
  <div className="text-center mb-12">
    <Badge variant="outline" className="border-accent text-accent mb-4">
      {language === 'de' ? 'Wie wir arbeiten' : 'How We Work'}
    </Badge>
    <h2 className="text-3xl font-display font-bold">
      {language === 'de' ? 'Research-basiert. Hands-On. Messbar.' : 'Research-Backed. Hands-On. Measurable.'}
    </h2>
  </div>
  <div className="grid md:grid-cols-3 gap-6">
    {/* 3 Principle Cards: Research-Backed, Hands-On, Measurable */}
  </div>
</section>
```

**Portfolio-Sektion** (nach Proof):
```tsx
{/* Portfolio Section */}
<section className="mb-20">
  <h2>...</h2>
  <div className="grid md:grid-cols-2 gap-8">
    {/* lasr.io Card */}
    <Card>
      <div className="flex items-center gap-4 mb-4">
        <Rocket className="w-8 h-8 text-accent" />
        <div>
          <h3>lasr.io</h3>
          <p>AI-Native Execution Platform</p>
        </div>
      </div>
      <p>12-Minuten-Assessment, AI-Playbooks, Echtzeit-Dashboards.</p>
      <Badge>Live (€149/Mo)</Badge>
    </Card>
    {/* Pigtie Card */}
    <Card>
      <h3>Pigtie</h3>
      <p>AI-Powered Sales Intelligence</p>
      <Badge>Portfolio Company</Badge>
    </Card>
  </div>
</section>
```

#### 4. Stats aktualisieren (Zeilen 193-221)

**Vorher:**
```tsx
<p className="text-primary">50+</p>
<p>Jahre kombinierte Erfahrung</p>
<p className="text-primary">€500M+</p>
<p className="text-primary">7</p>
<p className="text-primary">3</p>
```

**Nachher:**
```tsx
<p className="text-primary">80+</p>
<p>Unternehmen skaliert</p>
<p className="text-primary">140+</p>
<p>Mandate</p>
<p className="text-primary">€2.5B+</p>
<p>Bewertung verwaltet</p>
<p className="text-primary">80%</p>
<p>Erfolgsrate (2 von 3 Outcomes)</p>
```

#### 5. Values überarbeiten (Zeilen 55-88)

**Nachher:**
```tsx
const values = [
  {
    icon: Target,
    title: { de: 'Wirkung zuerst', en: 'Impact First' },
    description: {
      de: 'Integrierte Strategie + Playbooks + AI-Agents in einem Wirkungssystem.',
      en: 'Integrated Strategy + Playbooks + AI-Agents in one impact system.'
    }
  },
  {
    icon: Users,
    title: { de: 'Empowerment by Design', en: 'Empowerment by Design' },
    description: {
      de: 'Wir bauen Fähigkeiten in Ihrem Team auf, damit die Wirkung bleibt.',
      en: 'We build capabilities in your team so impact remains.'
    }
  },
  {
    icon: Code2,
    title: { de: 'Clean Code Growth', en: 'Clean Code Growth' },
    description: {
      de: 'Wiederholbare Systeme statt Quick Fixes. Nachhaltiges Skalieren.',
      en: 'Repeatable systems instead of quick fixes. Sustainable scaling.'
    }
  }
];
```

#### 6. Mission-Sektion erweitern

**Nachher:**
```tsx
<Card className="p-8 md:p-12 mb-20 bg-gradient-to-br from-primary/5 to-primary/10">
  <h2>{language === 'de' ? 'Unsere Mission' : 'Our Mission'}</h2>
  <p className="text-2xl font-display font-bold mb-6">
    {language === 'de' 
      ? '100 Unternehmen bis 2030 zu €100M ARR durch AI-Native Transformation verhelfen'
      : 'Help 100 companies reach €100M ARR by 2030 through AI-Native Transformation'
    }
  </p>
  <div className="grid md:grid-cols-3 gap-6">
    {/* Execution-First, Speed Matters, Partnership */}
  </div>
</Card>
```

---

## Interface-Erweiterung

```tsx
interface TeamMember {
  name: string;
  role: { de: string; en: string };
  tagline: { de: string; en: string };  // NEU
  bio: { de: string; en: string };
  highlight: { de: string; en: string }; // NEU
  expertise: string[];                   // NEU
  image: string;
  linkedin?: string;
}
```

---

## Neue Icons importieren

```tsx
import { 
  ArrowRight, Linkedin, Mail, Target, Users, 
  Code2, BookOpen, Rocket, TrendingUp, CheckCircle2, ExternalLink 
} from 'lucide-react';
```

---

## Betroffene Dateien

| Datei | Änderung |
|-------|----------|
| `src/pages/About.tsx` | Komplette Überarbeitung |

---

## Ergebnis

- **Korrekte Team-Daten**: Michel Lason (CEO), Alban Halili (Partner), Florian Metzger (Venture Architect)
- **8 Sektionen**: Hero → Team → Approach → Values → Proof → Portfolio → Mission → CTA
- **Aktualisierte Metriken**: 80+ Companies, 140+ Engagements, €2.5B+ Valuation
- **Neue Portfolio-Sektion**: lasr.io + Pigtie
- **Konsistentes Design**: SharedHero, Card, Badge, useLanguage

