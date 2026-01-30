import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScalingXCaseStudies from '@/components/ScalingXCaseStudies';
import SharedHero from '@/components/shared/SharedHero';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Dna, Rocket, Target, Building2, 
  Lightbulb, BarChart3, ChevronRight, XCircle, CheckCircle2,
  BookOpen, Users, Download, ArrowRight, Linkedin
} from 'lucide-react';

interface ResearchCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  titleDe: string;
  tagline: string;
  taglineDe: string;
  description: string;
  descriptionDe: string;
  keyInsight: string;
  keyInsightDe: string;
  stats: string;
  ctaText: string;
  ctaTextDe: string;
  link: string;
}

const researchCards: ResearchCard[] = [
  {
    id: 'amf',
    icon: <Dna className="w-6 h-6" />,
    title: 'AI Maturity Framework',
    titleDe: 'AI Maturity Framework',
    tagline: 'The Three Levels of AI Maturity',
    taglineDe: 'Die drei Stufen der AI-Reife',
    description: 'We analyzed how 22 companies use AI and found 3 distinct levels: AI-Powered (tools), AI-Enabled (workflows), AI-Native (architecture). Companies at Level 3 scale 8.2x faster.',
    descriptionDe: 'Wir haben analysiert, wie 22 Unternehmen AI nutzen und 3 verschiedene Stufen gefunden: AI-Powered (Tools), AI-Enabled (Workflows), AI-Native (Architektur). Unternehmen auf Level 3 skalieren 8.2x schneller.',
    keyInsight: 'AI Maturity predicts Time to €100M ARR',
    keyInsightDe: 'AI-Reife sagt Zeit bis €100M ARR voraus',
    stats: 'n=22 companies | 3 levels | 6 dimensions',
    ctaText: 'Read Research',
    ctaTextDe: 'Forschung lesen',
    link: '/expertise/amf'
  },
  {
    id: 'anst',
    icon: <Rocket className="w-6 h-6" />,
    title: 'AI-Native Scaling Theory',
    titleDe: 'AI-Native Scaling Theory',
    tagline: 'Why AI-Native Companies Scale 8.2x Faster',
    taglineDe: 'Warum AI-Native Unternehmen 8.2x schneller skalieren',
    description: 'We studied 22 AI-native companies to understand why they reach €100M ARR in 8-18 months (vs. 60-84 months for traditional startups). The answer: Strategy × Setup × Execution × Operationalization × AI Maturity.',
    descriptionDe: 'Wir haben 22 AI-native Unternehmen untersucht, um zu verstehen, warum sie €100M ARR in 8-18 Monaten erreichen (vs. 60-84 Monate für traditionelle Startups). Die Antwort: Strategy × Setup × Execution × Operationalization × AI Maturity.',
    keyInsight: 'Scaling success = 4 Capabilities × AI Multiplier',
    keyInsightDe: 'Scaling-Erfolg = 4 Capabilities × AI Multiplier',
    stats: 'n=22 companies | 8-18 months to €100M | 4 capabilities',
    ctaText: 'Read Research',
    ctaTextDe: 'Forschung lesen',
    link: '/expertise/anst'
  },
  {
    id: 'bottleneck',
    icon: <Target className="w-6 h-6" />,
    title: 'Bottleneck Framework',
    titleDe: 'Bottleneck Framework',
    tagline: "What's Blocking Your Growth?",
    taglineDe: 'Was blockiert dein Wachstum?',
    description: 'We found that 36% of scaling bottlenecks are in Setup (org structure, systems), 23% in Strategy, 18% in Execution, 23% in Operationalization. Fix the bottleneck, unlock growth.',
    descriptionDe: 'Wir haben festgestellt, dass 36% der Scaling-Engpässe im Setup (Org-Struktur, Systeme) liegen, 23% in Strategy, 18% in Execution, 23% in Operationalization. Behebe den Engpass, entfessle Wachstum.',
    keyInsight: 'Your weakest capability determines your growth',
    keyInsightDe: 'Deine schwächste Capability bestimmt dein Wachstum',
    stats: '4 capabilities | 8 dimensions | 0-1 scoring',
    ctaText: 'Diagnose Your Bottleneck',
    ctaTextDe: 'Diagnose deinen Engpass',
    link: '/tools/bottleneck-diagnosis'
  },
  {
    id: 'architecture',
    icon: <Building2 className="w-6 h-6" />,
    title: 'The Unified Framework',
    titleDe: 'Das Unified Framework',
    tagline: 'How It All Fits Together',
    taglineDe: 'Wie alles zusammenpasst',
    description: 'We integrated AI Maturity, Scaling Theory, and Bottleneck Framework into one unified system. Use it to diagnose your current state, identify bottlenecks, and plan your transformation.',
    descriptionDe: 'Wir haben AI Maturity, Scaling Theory und Bottleneck Framework in ein einheitliches System integriert. Nutze es, um deinen aktuellen Stand zu diagnostizieren, Engpässe zu identifizieren und deine Transformation zu planen.',
    keyInsight: 'One framework, three perspectives',
    keyInsightDe: 'Ein Framework, drei Perspektiven',
    stats: '3 frameworks unified | 250,000+ words',
    ctaText: 'Explore Framework',
    ctaTextDe: 'Framework erkunden',
    link: '/expertise/architecture'
  }
];

const researchStats = [
  { 
    value: '250,000+', 
    label: { en: 'Words', de: 'Wörter' }, 
    sublabel: { en: 'of research', de: 'Forschung' },
    color: 'primary' as const 
  },
  { 
    value: '22+', 
    label: { en: 'AI-Native Companies', de: 'AI-Native Unternehmen' }, 
    sublabel: { en: 'analyzed', de: 'analysiert' },
    color: 'accent' as const 
  },
  { 
    value: '3', 
    label: { en: 'Frameworks', de: 'Frameworks' }, 
    sublabel: { en: 'developed', de: 'entwickelt' },
    color: 'primary' as const 
  },
  { 
    value: 'OPEN SOURCE', 
    label: { en: 'Collaborative', de: 'Kollaborativ' }, 
    sublabel: { en: 'not-peer-reviewed (yet)', de: 'noch nicht peer-reviewed' },
    color: 'accent' as const 
  },
];

const playbookCards = [
  {
    title: { en: 'AI-Native Growth Engines', de: 'AI-Native Growth Engines' },
    description: { en: 'How to grow with AI', de: 'Wie man mit AI wächst' },
    link: '/playbooks/growth-engines'
  },
  {
    title: { en: 'AI-Native Operating Systems', de: 'AI-Native Operating Systems' },
    description: { en: 'How to operate at scale', de: 'Wie man in Skala operiert' },
    link: '/playbooks/operating-systems'
  },
  {
    title: { en: 'AI-Native Governance', de: 'AI-Native Governance' },
    description: { en: 'How Boards govern AI-native companies', de: 'Wie Boards AI-native Unternehmen führen' },
    link: '/playbooks/board-governance'
  },
  {
    title: { en: 'Portfolio Transformation', de: 'Portfolio Transformation' },
    description: { en: 'How to transform your portfolio', de: 'Wie man das Portfolio transformiert' },
    link: '/playbooks/portfolio-transformation'
  }
];

const teamMembers = [
  {
    name: 'Michel Lason',
    credentials: 'M.A. HSG',
    role: { en: 'Lead Researcher', de: 'Lead Researcher' },
    tagline: { en: 'Strategy. Scaling. Impact.', de: 'Strategy. Scaling. Impact.' },
    description: { 
      en: 'Ex-Management Consultant, SaaS-VP, Scaling Executive, Investor & Captain.', 
      de: 'Ex-Managementberater, SaaS-VP, Scaling Executive, Investor & Captain.' 
    },
    image: '/images/team-michel.png',
    linkedIn: 'https://linkedin.com/in/michel-lason',
    link: '/ml'
  },
  {
    name: 'Alban Halili',
    role: { en: 'Empirical Analysis', de: 'Empirische Analyse' },
    tagline: { en: 'Growth. AI Solutions. Automation.', de: 'Growth. AI Solutions. Automation.' },
    description: { 
      en: 'Sales- & Marketing-Guru, Innovator, King of Agents & Automations.', 
      de: 'Sales- & Marketing-Guru, Innovator, King of Agents & Automations.' 
    },
    image: '/images/team-alban.png',
    imageStyle: 'object-[center_10%]',
    linkedIn: 'https://linkedin.com/in/alban-halili',
    link: '/ah'
  },
  {
    name: 'Florian Metzger',
    credentials: 'M.Sc. Bocconi, M.Sc. Lisboa',
    role: { en: 'Theoretical Framework', de: 'Theoretisches Framework' },
    tagline: { en: 'RevOps. GTM. Venture Architect.', de: 'RevOps. GTM. Venture Architect.' },
    description: { 
      en: 'Growth-Hacker and GTM-Architect for SaaS & B2C with Co-Founder-Mindset.', 
      de: 'Growth-Hacker und GTM-Architekt für SaaS & B2C mit Co-Founder-Mindset.' 
    },
    image: '/images/team-florian.png',
    imageStyle: 'scale-150 translate-y-[20%]',
    linkedIn: 'https://linkedin.com/in/florian-metzger',
    link: '/fm'
  }
];

const downloadCards = [
  {
    title: 'AI Maturity Framework',
    wordCount: '3,000',
    tagline: { en: 'The Three Levels of AI Maturity', de: 'Die drei Stufen der AI-Reife' },
  },
  {
    title: 'AI-Native Scaling Theory',
    wordCount: '3,000',
    tagline: { en: 'Why AI-Native Companies Scale 8.2x Faster', de: 'Warum AI-Native Unternehmen 8.2x schneller skalieren' },
  },
  {
    title: 'Bottleneck Framework',
    wordCount: '3,000',
    tagline: { en: "What's Blocking Your Growth?", de: 'Was blockiert dein Wachstum?' },
  },
  {
    title: 'The Unified Framework',
    wordCount: '3,000',
    tagline: { en: 'How It All Fits Together', de: 'Wie alles zusammenpasst' },
  }
];

const ResearchHub: React.FC = () => {
  const { language } = useLanguage();
  
  // Scroll animations for all sections
  const { ref: whyMattersRef, isVisible: whyMattersVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: researchRef, isVisible: researchVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: playbooksRef, isVisible: playbooksVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: downloadRef, isVisible: downloadVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      {/* Hero - Standalone with Parallax */}
      <SharedHero
        overlineEn="Growth Engines × Scaling Systems × AI = Hypergrowth"
        overlineDe="Growth Engines × Scaling Systems × AI = Hypergrowth"
        headlineLine1En="The Science Behind"
        headlineLine1De="Die Wissenschaft hinter"
        headlineLine2En="AI-Native Scaling"
        headlineLine2De="AI-Native Scaling"
        subheadlineEn="We analyzed 22 AI-native companies (Midjourney, Perplexity, Cursor, etc.) to understand why they scale 8.2x faster than traditional startups. Here's what we found."
        subheadlineDe="Wir haben 22 AI-native Unternehmen (Midjourney, Perplexity, Cursor, etc.) analysiert, um zu verstehen, warum sie 8.2x schneller skalieren als traditionelle Startups. Das haben wir herausgefunden."
        stats={researchStats}
        enableParallax={true}
      />

      {/* Section 2: Why This Matters */}
      <section 
        ref={whyMattersRef as React.RefObject<HTMLElement>}
        className={`py-16 md:py-24 bg-muted/30 transition-all duration-700 ${whyMattersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {language === 'de' 
                  ? 'Die meisten Scaling-Ratschläge sind anekdotisch. Unsere sind systematisch.'
                  : 'Most Scaling Advice is Anecdotal. Ours is Systematic.'}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <p className="font-medium text-muted-foreground mb-3">
                    {language === 'de' ? 'Traditionelle Scaling-Ratschläge kommen von:' : 'Traditional scaling advice comes from:'}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        {language === 'de' ? 'War Stories (was für ein Unternehmen funktioniert hat)' : 'War stories (what worked for one company)'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        {language === 'de' ? 'Best Practices (von erfolgreichen Unternehmen kopiert)' : 'Best practices (copied from successful companies)'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        {language === 'de' ? 'Berater-Meinungen (basierend auf Erfahrung, nicht Daten)' : 'Consultant opinions (based on experience, not data)'}
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium mb-3">
                    {language === 'de' ? 'Unser Ansatz:' : 'Our approach:'}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        {language === 'de' ? 'Systematische Analyse (n=22 AI-native Unternehmen)' : 'Systematic analysis (n=22 AI-native companies)'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        {language === 'de' ? 'Mustererkennung (was über Unternehmen hinweg funktioniert)' : 'Pattern recognition (what works across companies)'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        {language === 'de' ? 'Frameworks (Strategy, Setup, Execution, Operationalization)' : 'Frameworks (Strategy, Setup, Execution, Operationalization)'}
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg font-medium text-primary">
                  {language === 'de' 
                    ? 'Das Ergebnis: Eine einheitliche Theorie des AI-nativen Scaling.'
                    : 'The result: A unified theory of AI-native scaling.'}
                </p>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center border-border/50">
                <p className="text-4xl font-bold text-primary mb-2">22</p>
                <p className="font-medium mb-1">{language === 'de' ? 'Unternehmen analysiert' : 'companies analyzed'}</p>
                <p className="text-sm text-muted-foreground">Midjourney, Perplexity, Cursor, Harvey, Lovable, etc.</p>
              </Card>
              <Card className="p-6 text-center border-border/50">
                <p className="text-4xl font-bold text-primary mb-2">3</p>
                <p className="font-medium mb-1">{language === 'de' ? 'Frameworks entwickelt' : 'frameworks developed'}</p>
                <p className="text-sm text-muted-foreground">AI Maturity, Scaling Theory, Bottleneck Framework</p>
              </Card>
              <Card className="p-6 text-center border-border/50">
                <p className="text-4xl font-bold text-primary mb-2">250K+</p>
                <p className="font-medium mb-1">{language === 'de' ? 'Wörter dokumentiert' : 'words documented'}</p>
                <p className="text-sm text-muted-foreground">{language === 'de' ? '3 Research Papers, peer-review ready' : '3 research papers, peer-review ready'}</p>
              </Card>
              <Card className="p-6 text-center border-border/50">
                <p className="text-4xl font-bold text-primary mb-2">∞</p>
                <p className="font-medium mb-1">{language === 'de' ? 'Offen geteilt' : 'Openly shared'}</p>
                <p className="text-sm text-muted-foreground">{language === 'de' ? 'Wir glauben an Transparenz' : 'We believe in transparency'}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Research */}
      <section 
        id="research" 
        ref={researchRef as React.RefObject<HTMLElement>}
        className={`py-16 md:py-24 bg-background transition-all duration-700 ${researchVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container max-w-7xl mx-auto px-6">
          
          {/* Section Headline */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {language === 'de' ? 'Unsere Forschung' : 'Our Research'}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === 'de' 
                ? 'Vier Frameworks, die AI-native Scaling erklären'
                : 'Four frameworks that explain AI-native scaling'}
            </p>
          </div>

          {/* 2x2 Grid with staggered animation */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {researchCards.map((card, idx) => (
              <Card 
                key={card.id}
                className="p-6 glass border-border/50 hover:border-accent/50 hover:shadow-[0_0_30px_hsl(var(--accent)/0.15)] transition-all duration-300"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center text-accent-foreground flex-shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">
                        {language === 'de' ? card.titleDe : card.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'de' ? card.taglineDe : card.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {language === 'de' ? card.descriptionDe : card.description}
                  </p>

                  {/* Key Insight */}
                  <div className="flex items-start gap-2 mb-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <Lightbulb className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">
                      {language === 'de' ? card.keyInsightDe : card.keyInsight}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>{card.stats}</span>
                  </div>

                  {/* CTA */}
                  <Link to={card.link}>
                    <Button className="w-full bg-gradient-accent hover:opacity-90 group">
                      {language === 'de' ? card.ctaTextDe : card.ctaText}
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3A: Case Studies */}
      <section id="case-studies" className="scroll-mt-24">
        <ScalingXCaseStudies />
      </section>

      {/* Section 4: Applied Research */}
      <section 
        id="playbooks" 
        ref={playbooksRef as React.RefObject<HTMLElement>}
        className={`py-16 md:py-24 bg-muted/30 transition-all duration-700 ${playbooksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === 'de' ? 'Möchtest du diese Forschung anwenden?' : 'Want to Apply This Research?'}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {language === 'de' 
                  ? 'Unsere Forschung ist die Grundlage. Unsere Playbooks zeigen dir, wie du sie ausführst.'
                  : 'Our research is the foundation. Our playbooks show you how to execute.'}
              </p>
              <p className="text-muted-foreground mb-8">
                {language === 'de' ? 'Entdecke unsere Playbooks:' : 'Explore our playbooks:'}
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span>{language === 'de' ? 'AI-Native Growth Engines (Wie man mit AI wächst)' : 'AI-Native Growth Engines (How to grow with AI)'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span>{language === 'de' ? 'AI-Native Operating Systems (Wie man in Skala operiert)' : 'AI-Native Operating Systems (How to operate at scale)'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span>{language === 'de' ? 'AI-Native Governance (Wie Boards AI-native Unternehmen führen)' : 'AI-Native Governance (How Boards govern AI-native companies)'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span>{language === 'de' ? 'Strategic Capabilities (Wie man alle 4 Fähigkeiten aufbaut)' : 'Strategic Capabilities (How to build all 4 capabilities)'}</span>
                </li>
              </ul>
              <Link to="/playbooks">
                <Button size="lg" className="bg-gradient-accent hover:opacity-90 group">
                  {language === 'de' ? 'Alle Playbooks erkunden' : 'Explore All Playbooks'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Right Column - Playbook Cards */}
            <div className="grid grid-cols-2 gap-4">
              {playbookCards.map((card, i) => (
                <Link key={i} to={card.link}>
                  <Card className="p-5 h-full border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                    <BookOpen className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-bold mb-2">{card.title[language]}</h4>
                    <p className="text-sm text-muted-foreground">{card.description[language]}</p>
                    <span className="mt-3 inline-flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      {language === 'de' ? 'Playbook erkunden' : 'Explore Playbook'}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Expertise (Team) */}
      <section 
        ref={teamRef as React.RefObject<HTMLElement>}
        className={`py-16 md:py-24 bg-background transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'de' ? 'Wer steckt hinter dieser Forschung?' : "Who's Behind This Research?"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === 'de'
                ? 'Diese Forschung wurde vom ScalingX Hypergrowth Team durchgeführt. Wir sind Operatoren, die zu Forschern wurden. Wir haben dieses Framework gebaut, weil wir es selbst brauchten.'
                : "This research was conducted by the ScalingX Hypergrowth team. We're operators who became researchers. We built this framework because we needed it ourselves."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, i) => (
              <Card 
                key={i} 
                className="p-6 text-center border-border/50 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-300 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Team Image */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-foreground/10 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.imageStyle || ''}`}
                  />
                </div>
                <h3 className="font-bold text-xl mb-1">
                  {member.name}
                  {member.credentials && (
                    <span className="text-muted-foreground font-normal text-base ml-2">
                      {member.credentials}
                    </span>
                  )}
                </h3>
                <p className="text-primary font-medium mb-1">{member.role[language]}</p>
                {/* Tagline */}
                <p className="text-accent font-medium italic text-sm mb-2">
                  {member.tagline[language]}
                </p>
                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {member.description[language]}
                </p>
                <a 
                  href={member.linkedIn} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  <Linkedin className="w-4 h-4 mr-1" />
                  LinkedIn
                </a>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/about">
              <Button variant="outline" size="lg" className="group">
                {language === 'de' ? 'Das komplette Team kennenlernen' : 'Meet the Full Team'}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Download Research */}
      <section 
        id="download" 
        ref={downloadRef as React.RefObject<HTMLElement>}
        className={`py-16 md:py-24 bg-muted/30 transition-all duration-700 ${downloadVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'de' ? 'Hol dir die komplette Forschung' : 'Get the Complete Research'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'de' ? 'Lade unsere Research Papers herunter (Executive Summaries)' : 'Download our research papers (Executive Summaries)'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {downloadCards.map((card, i) => (
              <Card key={i} className="p-6 border-border/50 hover:border-primary/50 transition-all">
                <Download className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-lg mb-1">{card.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">Executive Summary ({card.wordCount} words)</p>
                <p className="text-xs text-muted-foreground mb-4">{card.tagline[language]}</p>
                <Button variant="outline" size="sm" className="w-full">
                  {language === 'de' ? 'PDF herunterladen' : 'Download PDF'}
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              {language === 'de' ? '~12.000 Wörter Research Insights' : '~12,000 words of research insights'}
            </p>
            <Button size="lg" className="bg-gradient-accent hover:opacity-90">
              {language === 'de' ? 'Alle Papers herunterladen' : 'Download All Research'}
              <Download className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 7: Final CTA */}
      <section 
        ref={ctaRef as React.RefObject<HTMLElement>}
        className={`py-16 md:py-24 bg-background transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'de' ? 'Möchtest du AI-Native werden?' : 'Want to Become AI-Native?'}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {language === 'de' 
              ? 'Wir helfen Unternehmen bei der Transformation in 90 Tagen.'
              : 'We help companies transform in 90 days.'}
          </p>
          
          <ul className="text-left max-w-md mx-auto mb-10 space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">
                {language === 'de' 
                  ? 'Diagnose deines aktuellen Stands (AI Maturity Level, Bottleneck)'
                  : 'Diagnose your current state (AI Maturity Level, Bottleneck)'}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">
                {language === 'de' 
                  ? 'Aufbau deines Transformationsplans (Strategy, Setup, Execution)'
                  : 'Build your transformation plan (Strategy, Setup, Execution)'}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">
                {language === 'de' 
                  ? 'Umsetzung mit unserem Team (Hands-on, nicht nur Slides)'
                  : 'Execute with our team (Hands-on, not just slides)'}
              </span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-accent hover:opacity-90">
              {language === 'de' ? 'Strategy Call buchen' : 'Book Strategy Call'}
            </Button>
            <Link to="/tools/ai-maturity-assessment">
              <Button size="lg" variant="outline">
                {language === 'de' ? 'AI Maturity berechnen' : 'Calculate Your AI Maturity'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchHub;
