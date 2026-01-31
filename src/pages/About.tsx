import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, Linkedin, Mail, Target, Users, Code2, 
  BookOpen, Rocket, TrendingUp, CheckCircle2, ExternalLink,
  Zap, Handshake, PiggyBank
} from 'lucide-react';
import SharedHero from '@/components/shared/SharedHero';

// =============================================================================
// INTERFACES
// =============================================================================

interface TeamMember {
  name: string;
  role: { de: string; en: string };
  tagline: { de: string; en: string };
  bio: { de: string; en: string };
  highlight: { de: string; en: string };
  expertise: string[];
  image: string;
  linkedin?: string;
  profileLink?: string;
}

interface Value {
  icon: React.ElementType;
  title: { de: string; en: string };
  description: { de: string; en: string };
}

interface Approach {
  icon: React.ElementType;
  title: { de: string; en: string };
  description: { de: string; en: string };
  link: { de: string; en: string };
  href: string;
}

// =============================================================================
// DATA
// =============================================================================

const teamMembers: TeamMember[] = [
  {
    name: 'Michel Lason',
    role: { de: 'Gründer & CEO', en: 'Founder & CEO' },
    tagline: { de: 'Strategy. Scaling. Impact.', en: 'Strategy. Scaling. Impact.' },
    bio: {
      de: '18 Jahre Startups aufbauen, skalieren und reparieren. Ex-Berater (Microsoft, XING), SaaS Executive (€1,3M → €13,7M ARR in 2 Jahren). Autor "Fix Growth. Scale Faster."',
      en: '18 years building, scaling, and fixing startups. Ex-consultant (Microsoft, XING), SaaS executive (€1.3M → €13.7M ARR in 2 years). Author "Fix Growth. Scale Faster."'
    },
    highlight: { 
      de: 'Rule of 40 +10 Pkt, EBITDA –€300k → +€150k', 
      en: 'Rule of 40 +10 pts, EBITDA –€300k → +€150k' 
    },
    expertise: ['Revenue Architecture', 'AI/LCNC', 'GTM Motions', 'Investor Readiness'],
    image: '/images/team-michel.png',
    linkedin: 'https://www.linkedin.com/in/michellason/',
    profileLink: '/ml'
  },
  {
    name: 'Alban Halili',
    role: { de: 'Partner', en: 'Partner' },
    tagline: { de: 'Growth. AI Solutions. Automation.', en: 'Growth. AI Solutions. Automation.' },
    bio: {
      de: '10+ Jahre B2B Sales skalieren. Ex-CSO bei Elba (€8,5M ARR, RPA/AI), Enterprise Sales bei Telefónica (€7,7Mrd).',
      en: '10+ years scaling B2B sales. Ex-CSO at Elba (€8.5M ARR, RPA/AI), Enterprise Sales at Telefónica (€7.7B).'
    },
    highlight: { 
      de: '3,8% Conversion, €14,5K Durchschnitts-Deals', 
      en: '3.8% conversion, €14.5K avg. deals' 
    },
    expertise: ['B2B Sales', 'AI Agents', 'Automation', 'Performance Analytics'],
    image: '/images/team-alban.png',
    linkedin: 'https://www.linkedin.com/in/alban-halili/',
    profileLink: '/ah'
  },
  {
    name: 'Florian Metzger',
    role: { de: 'Partner', en: 'Partner' },
    tagline: { de: 'RevOps. GTM. Venture Architect.', en: 'RevOps. GTM. Venture Architect.' },
    bio: {
      de: '4+ Jahre SaaS-Businesses aufbauen. Design Thinking (HPI), lasr.io Architekt. Co-Founder Mindset.',
      en: '4+ years building SaaS businesses. Design Thinking (HPI), lasr.io architect. Co-founder mindset.'
    },
    highlight: { 
      de: 'Sales Cycle –30%, Lead Throughput optimiert', 
      en: 'Sales cycle –30%, improved lead throughput' 
    },
    expertise: ['RevOps', 'GTM Engineering', 'Marketing Automation'],
    image: '/images/team-florian.png',
    linkedin: 'https://www.linkedin.com/in/florianmetzger/',
    profileLink: '/fm'
  }
];

const approaches: Approach[] = [
  {
    icon: BookOpen,
    title: { de: 'Research-basiert', en: 'Research-Backed' },
    description: {
      de: 'Unsere Methodik basiert auf 4 Peer-Review-Papers und der Analyse von 22 Series A-D Unternehmen (Midjourney, Cursor, Perplexity). Keine Meinungen. Daten.',
      en: 'Our methodology is based on 4 peer-reviewed papers and analysis of 22 Series A-D companies (Midjourney, Cursor, Perplexity). Not opinions. Data.'
    },
    link: { de: 'Research lesen', en: 'Read the Research' },
    href: '/expertise'
  },
  {
    icon: Rocket,
    title: { de: 'Hands-On', en: 'Hands-On' },
    description: {
      de: 'Wir beraten nicht – wir bauen. 90-Tage-Sprints mit Ihrem Team. Tools, Playbooks und Systeme, die funktionieren.',
      en: "We don't advise—we build. 90-day sprints with your team. Tools, playbooks, and systems that ship."
    },
    link: { de: 'Lösungen ansehen', en: 'See Our Solutions' },
    href: '/solutions'
  },
  {
    icon: TrendingUp,
    title: { de: 'Messbar', en: 'Measurable' },
    description: {
      de: 'Jedes Engagement hat klare KPIs: CAC -20-40%, Win Rate +50-100%, Rule of 40 +20-50pp. 80% Erfolgsrate.',
      en: 'Every engagement has clear KPIs: CAC -20-40%, Win Rate +50-100%, Rule of 40 +20-50pp. 80% success rate.'
    },
    link: { de: 'Case Studies ansehen', en: 'View Case Studies' },
    href: '/cases'
  }
];

const values: Value[] = [
  {
    icon: Target,
    title: { de: 'Wirkung zuerst', en: 'Impact First' },
    description: {
      de: 'Integrierte Strategie + Playbooks + AI-Agents in einem kohärenten Wirkungssystem. Geschwindigkeit mit Präzision.',
      en: 'Integrated Strategy + Playbooks + AI-Agents in one cohesive impact system. Speed with precision.'
    }
  },
  {
    icon: Users,
    title: { de: 'Empowerment by Design', en: 'Empowerment by Design' },
    description: {
      de: 'Wir bauen Fähigkeiten in Ihrem Team auf (Methoden, Playbooks, AI-Stacks), damit die Wirkung bleibt.',
      en: "We build capabilities in your team (methods, playbooks, AI-stacks) so impact remains when we're gone."
    }
  },
  {
    icon: Code2,
    title: { de: 'Clean Code Growth', en: 'Clean Code Growth' },
    description: {
      de: 'Wiederholbare Systeme statt Quick Fixes. Nachhaltiges Skalieren, keine Growth Hacks.',
      en: 'Repeatable systems instead of quick fixes. Sustainable scaling, not growth hacks.'
    }
  }
];

const caseStudies = [
  {
    title: { de: 'Series B SaaS (€15M ARR)', en: 'Series B SaaS (€15M ARR)' },
    result: { de: 'CAC €12k → €5k (-58%) in 30 Tagen', en: 'CAC €12k → €5k (-58%) in 30 days' }
  },
  {
    title: { de: 'Series C SaaS (€50M ARR)', en: 'Series C SaaS (€50M ARR)' },
    result: { de: 'Rule of 40: 25 → 55 (+30pp) in 90 Tagen', en: 'Rule of 40: 25 → 55 (+30pp) in 90 days' }
  },
  {
    title: { de: 'VC Portfolio (15 Unternehmen)', en: 'VC Portfolio (15 Companies)' },
    result: { de: 'Bewertung +€150M (+30%) in 12 Monaten', en: 'Valuation +€150M (+30%) in 12 months' }
  }
];

// =============================================================================
// COMPONENT
// =============================================================================

const About: React.FC = () => {
  const { language } = useLanguage();
  const lang = language as 'de' | 'en';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* ================================================================= */}
      {/* SECTION 1: HERO */}
      {/* ================================================================= */}
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
          { value: '€2.5B+', label: { en: 'Valuation', de: 'Bewertung' }, color: 'accent' },
          { value: '90 Days', label: { en: 'Time to Results', de: 'Bis zu Ergebnissen' } }
        ]}
      />
      
      <main className="pt-6 md:pt-8 pb-20">
        <div className="container max-w-7xl mx-auto px-4">

          {/* ================================================================= */}
          {/* SECTION 2: TEAM */}
          {/* ================================================================= */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <Badge variant="outline" className="border-accent text-accent mb-4">
                {lang === 'de' ? 'Die Menschen hinter ScalingX' : 'The Humans Behind ScalingX'}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {lang === 'de' ? 'Expertise × Speed = Impact' : 'Expertise × Speed = Impact'}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {lang === 'de' 
                  ? 'Lernen Sie das Team kennen, das 80+ Unternehmen über 140+ Mandate skaliert hat—mit messbaren Ergebnissen in 90 Tagen.'
                  : 'Meet the team that has scaled 80+ companies across 140+ engagements—with measurable results in 90 days.'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.name} className="overflow-hidden group">
                  {/* Image */}
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        member.name === 'Florian Metzger' 
                          ? 'scale-150 translate-y-[20%]' 
                          : member.name === 'Alban Halili' 
                            ? 'object-top' 
                            : ''
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-3">
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-background/80 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-1">{member.role[lang]}</p>
                    <p className="text-xs text-accent mb-4 italic">{member.tagline[lang]}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio[lang]}</p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} variant="muted" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Highlight */}
                    <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground">{member.highlight[lang]}</p>
                    </div>
                    
                    {/* Learn More Button */}
                    {member.profileLink ? (
                      <Link to={member.profileLink}>
                        <Button variant="ghost" size="sm" className="w-full mt-4 group">
                          {lang === 'de' ? 'Mehr erfahren' : 'Learn more'}
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="ghost" size="sm" className="w-full mt-4 opacity-50 cursor-not-allowed" disabled>
                        {lang === 'de' ? 'Bald verfügbar' : 'Coming soon'}
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 3: APPROACH */}
          {/* ================================================================= */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <Badge variant="outline" className="border-accent text-accent mb-4">
                {lang === 'de' ? 'Wie wir arbeiten' : 'How We Work'}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {lang === 'de' ? 'Research-basiert. Hands-On. Messbar.' : 'Research-Backed. Hands-On. Measurable.'}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {lang === 'de' 
                  ? 'Unsere Methodik basiert auf der Analyse von 22 AI-nativen Unternehmen. Keine Meinungen. Daten.'
                  : 'Our methodology is based on analysis of 22 AI-native companies. Not opinions. Data.'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {approaches.map((approach, idx) => (
                <Card key={idx} className="p-6 hover:shadow-brutal transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <approach.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{approach.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{approach.description[lang]}</p>
                  <a 
                    href={approach.href} 
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    {approach.link[lang]}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Card>
              ))}
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 4: VALUES */}
          {/* ================================================================= */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <Badge variant="outline" className="border-primary text-primary mb-4">
                {lang === 'de' ? 'Unsere Non-Negotiables' : 'Our Non-Negotiables'}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                {lang === 'de' 
                  ? 'Was uns in einer Welt endloser Beratungszyklen unterscheidet'
                  : 'What makes us different in a world of endless consulting cycles'
                }
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, idx) => (
                <Card key={idx} className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground">{value.description[lang]}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 5: PROOF */}
          {/* ================================================================= */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <Badge variant="outline" className="border-accent text-accent mb-4">
                {lang === 'de' ? 'Bewährte Erfolgsbilanz' : 'Proven Track Record'}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {lang === 'de' ? 'Evidenz-basierte Ergebnisse' : 'Evidence-Based Results'}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {lang === 'de' 
                  ? 'Wir haben 80+ Unternehmen über 140+ Mandate skaliert und €2,5Mrd+ Bewertung verwaltet.'
                  : "We've scaled 80+ companies across 140+ engagements, managing €2.5B+ in valuation."
                }
              </p>
            </div>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <Card className="p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">80+</p>
                <p className="text-sm text-muted-foreground">
                  {lang === 'de' ? 'Unternehmen skaliert' : 'Companies Scaled'}
                </p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">140+</p>
                <p className="text-sm text-muted-foreground">
                  {lang === 'de' ? 'Mandate' : 'Engagements'}
                </p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent">€2.5B+</p>
                <p className="text-sm text-muted-foreground">
                  {lang === 'de' ? 'Bewertung verwaltet' : 'Valuation Managed'}
                </p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">92%</p>
                <p className="text-sm text-muted-foreground">
                  {lang === 'de' ? 'Erfolgsrate' : 'Success Rate'}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {lang === 'de' ? '(2 von 3 Outcomes)' : '(2 of 3 outcomes)'}
                </p>
              </Card>
            </div>
            
            {/* Case Studies Teaser */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {caseStudies.map((cs, idx) => (
                <Card key={idx} className="p-4 bg-muted/30">
                  <p className="text-sm font-medium mb-1">{cs.title[lang]}</p>
                  <p className="text-sm text-primary font-semibold">{cs.result[lang]}</p>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <a href="/cases" className="inline-flex items-center text-primary hover:underline">
                {lang === 'de' ? 'Alle Case Studies ansehen' : 'View All Case Studies'}
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 6: PORTFOLIO */}
          {/* ================================================================= */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <Badge variant="outline" className="border-accent text-accent mb-4">
                {lang === 'de' ? 'Was wir bauen' : 'What We Build'}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {lang === 'de' ? 'Wir investieren in das, was wir skalieren helfen' : 'We invest in what we help scale'}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {lang === 'de' 
                  ? 'Zwei Ventures, die unsere AI-Native Philosophie verkörpern.'
                  : 'Two ventures that embody our AI-Native philosophy.'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* lasr.io */}
              <Card className="p-6 hover:shadow-brutal transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">lasr.io</h3>
                    <p className="text-sm text-muted-foreground">AI-Native Execution Platform</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {lang === 'de' 
                    ? '12-Minuten-Assessment, KI-gestützte Playbooks, Echtzeit-Dashboards. Gebaut für Series A-D Startups.'
                    : '12-minute assessment, AI-powered playbooks, real-time dashboards. Built for Series A-D startups.'
                  }
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="accent">Free</Badge>
                  <a 
                    href="https://lasr.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Visit lasr.io
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </Card>
              
              {/* Pigtie */}
              <Card className="p-6 hover:shadow-brutal transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
                    <PiggyBank className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Pigtie</h3>
                    <p className="text-sm text-muted-foreground">The Agentic OS for Personal Finance.</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {lang === 'de' 
                    ? 'Unterstützt Menschen mit KI-gesteuerter Finanzberatung und ermöglicht Banken, ihre Kunden besser zu bedienen.'
                    : 'Empowering individuals with AI-driven financial guidance, and enabling banks to better serve their customers.'
                  }
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="muted">Portfolio Company</Badge>
                  <a 
                    href="https://www.pigtie.de/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Visit Pigtie
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </Card>
            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 7: MISSION */}
          {/* ================================================================= */}
          <Card className="p-8 md:p-12 mb-20 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="text-center mb-8">
              <Badge variant="outline" className="border-primary text-primary mb-4">
                {lang === 'de' ? 'Warum wir existieren' : 'Why We Exist'}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                {lang === 'de' ? 'Unsere Mission' : 'Our Mission'}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                {lang === 'de' 
                  ? 'Wir glauben, die nächste Generation europäischer Unicorns wird AI-native sein. Unser Ziel ist es, bestehenden Scale-ups bei dieser Transformation zu helfen – bevor es ihre Wettbewerber tun.'
                  : 'We believe the next generation of European unicorns will be AI-native. Our goal is to help existing scale-ups make this transition – before their competitors do.'
                }
              </p>
              <p className="text-xl md:text-2xl font-display font-bold text-primary max-w-3xl mx-auto italic">
                "{lang === 'de' 
                  ? 'Die Frage ist nicht, ob KI Ihr Unternehmen transformieren wird, sondern wer diese Transformation anführen wird.'
                  : 'The question is not if AI will transform your business, but who will lead that transformation.'
                }"
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2 mx-auto">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Execution-First</h4>
                <p className="text-sm text-muted-foreground">
                  {lang === 'de' ? 'Wir liefern Systeme, keine Slides.' : 'We ship systems, not slides.'}
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2 mx-auto">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Speed Matters</h4>
                <p className="text-sm text-muted-foreground">
                  {lang === 'de' ? '90 Tage, nicht 12 Monate.' : '90 days, not 12 months.'}
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2 mx-auto">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Partnership</h4>
                <p className="text-sm text-muted-foreground">
                  {lang === 'de' ? 'Wir sind Co-Pilots, keine Consultants.' : "We're co-pilots, not consultants."}
                </p>
              </div>
            </div>
          </Card>

          {/* ================================================================= */}
          {/* SECTION 8: CTA */}
          {/* ================================================================= */}
          <section className="text-center">
            <Card className="p-8 md:p-12 bg-card border-border">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                {lang === 'de' ? "Let's Talk" : "Let's Talk"}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                {lang === 'de'
                  ? 'Buche einen kostenlosen 30-minütigen Inflection Call. Wir identifizieren deinen Bottleneck und geben dir 3 nächste Schritte.'
                  : "Book a free 30-minute Inflection Call. We'll identify your bottleneck and give you 3 next steps."
                }
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground shadow-brutal-sm hover-brutal"
                  onClick={() => window.open('https://calendly.com/scalingx', '_blank')}
                >
                  {lang === 'de' ? 'Kostenlosen Call buchen' : 'Book Free Call'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/solutions">
                    {lang === 'de' ? 'Lösungen erkunden' : 'Explore Solutions'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
