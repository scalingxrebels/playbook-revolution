import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  TrendingUp, Users, Clock, DollarSign, Zap, Search, 
  Filter, Download, ChevronDown, ChevronUp
} from 'lucide-react';

interface CaseStudy {
  name: string;
  logo: string;
  industry: string;
  arr: string;
  arrValue: number;
  employees: number;
  arrPerEmployee: string;
  timeToMilestone: string;
  founded: string;
  level: 'Level 3' | 'Level 2' | 'Level 1';
  thetaIndex: number;
  highlight: boolean;
  keyCapabilities: string[];
  learnings: string;
  learningsDe: string;
  metrics: {
    growth: string;
    coordination: string;
    efficiency: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    name: 'Midjourney',
    logo: 'MJ',
    industry: 'AI Tools',
    arr: '€492M',
    arrValue: 492,
    employees: 107,
    arrPerEmployee: '€4.6M',
    timeToMilestone: '18 months',
    founded: '2021',
    level: 'Level 3',
    thetaIndex: 0.94,
    highlight: true,
    keyCapabilities: ['C₃', 'C₄'],
    learnings: 'Community-led growth with minimal team scales 70:1',
    learningsDe: 'Community-geführtes Wachstum mit minimalem Team skaliert 70:1',
    metrics: { growth: 'Superlinear (70:1)', coordination: 'O(n log n)', efficiency: '+2,200%' }
  },
  {
    name: 'Cursor',
    logo: 'CR',
    industry: 'AI Tools',
    arr: '€100M',
    arrValue: 100,
    employees: 60,
    arrPerEmployee: '€1.67M',
    timeToMilestone: '12 months',
    founded: '2023',
    level: 'Level 3',
    thetaIndex: 0.91,
    highlight: true,
    keyCapabilities: ['C₁', 'C₃'],
    learnings: 'Product-led with AI-native architecture from day one',
    learningsDe: 'Product-Led mit AI-native Architektur von Tag eins',
    metrics: { growth: 'Superlinear (13:1)', coordination: 'O(n log n)', efficiency: '+735%' }
  },
  {
    name: 'Perplexity',
    logo: 'PX',
    industry: 'AI Tools',
    arr: '€200M',
    arrValue: 200,
    employees: 80,
    arrPerEmployee: '€2.5M',
    timeToMilestone: '24 months',
    founded: '2022',
    level: 'Level 3',
    thetaIndex: 0.89,
    highlight: true,
    keyCapabilities: ['C₂', 'C₃'],
    learnings: 'AI-first product with aggressive experimentation velocity',
    learningsDe: 'AI-first Produkt mit aggressiver Experimentier-Geschwindigkeit',
    metrics: { growth: 'Superlinear (5:1)', coordination: 'O(n log n)', efficiency: '+1,150%' }
  },
  {
    name: 'Harvey',
    logo: 'HV',
    industry: 'AI Tools',
    arr: '€100M',
    arrValue: 100,
    employees: 120,
    arrPerEmployee: '€833K',
    timeToMilestone: '24 months',
    founded: '2022',
    level: 'Level 3',
    thetaIndex: 0.85,
    highlight: false,
    keyCapabilities: ['C₁', 'C₂'],
    learnings: 'Enterprise AI with deep vertical specialization',
    learningsDe: 'Enterprise AI mit tiefer vertikaler Spezialisierung',
    metrics: { growth: 'Superlinear (4:1)', coordination: 'O(n log n)', efficiency: '+316%' }
  },
  {
    name: 'Jasper',
    logo: 'JP',
    industry: 'AI Tools',
    arr: '€130M',
    arrValue: 130,
    employees: 250,
    arrPerEmployee: '€520K',
    timeToMilestone: '30 months',
    founded: '2021',
    level: 'Level 2',
    thetaIndex: 0.72,
    highlight: false,
    keyCapabilities: ['C₁', 'C₂'],
    learnings: 'First mover in AI content, now transitioning to enterprise',
    learningsDe: 'First Mover in AI Content, jetzt Transition zu Enterprise',
    metrics: { growth: 'Linear (2:1)', coordination: 'O(n)', efficiency: '+160%' }
  },
  {
    name: 'Notion',
    logo: 'NT',
    industry: 'B2B SaaS',
    arr: '€250M',
    arrValue: 250,
    employees: 400,
    arrPerEmployee: '€625K',
    timeToMilestone: '48 months',
    founded: '2016',
    level: 'Level 2',
    thetaIndex: 0.78,
    highlight: false,
    keyCapabilities: ['C₂', 'C₃'],
    learnings: 'Product-led with strong community and AI integration',
    learningsDe: 'Product-Led mit starker Community und AI-Integration',
    metrics: { growth: 'Sublinear (1.5:1)', coordination: 'O(n)', efficiency: '+212%' }
  },
  {
    name: 'Linear',
    logo: 'LN',
    industry: 'B2B SaaS',
    arr: '€50M',
    arrValue: 50,
    employees: 50,
    arrPerEmployee: '€1M',
    timeToMilestone: '36 months',
    founded: '2019',
    level: 'Level 3',
    thetaIndex: 0.86,
    highlight: false,
    keyCapabilities: ['C₃', 'C₄'],
    learnings: 'Opinionated product with extreme focus on craft',
    learningsDe: 'Opinioniertes Produkt mit extremem Fokus auf Handwerk',
    metrics: { growth: 'Superlinear (4:1)', coordination: 'O(n log n)', efficiency: '+400%' }
  },
  {
    name: 'Figma',
    logo: 'FG',
    industry: 'B2B SaaS',
    arr: '€600M',
    arrValue: 600,
    employees: 850,
    arrPerEmployee: '€706K',
    timeToMilestone: '60 months',
    founded: '2012',
    level: 'Level 2',
    thetaIndex: 0.76,
    highlight: false,
    keyCapabilities: ['C₂', 'C₃'],
    learnings: 'Collaborative design tool with network effects',
    learningsDe: 'Kollaboratives Design-Tool mit Netzwerkeffekten',
    metrics: { growth: 'Sublinear (1.4:1)', coordination: 'O(n)', efficiency: '+253%' }
  },
  {
    name: 'Slack',
    logo: 'SL',
    industry: 'B2B SaaS',
    arr: '€1.5B',
    arrValue: 1500,
    employees: 2500,
    arrPerEmployee: '€600K',
    timeToMilestone: '48 months',
    founded: '2013',
    level: 'Level 2',
    thetaIndex: 0.74,
    highlight: false,
    keyCapabilities: ['C₁', 'C₂'],
    learnings: 'Viral B2B with freemium model and integrations',
    learningsDe: 'Virales B2B mit Freemium-Modell und Integrationen',
    metrics: { growth: 'Sublinear (1.2:1)', coordination: 'O(n)', efficiency: '+200%' }
  },
  {
    name: 'Stripe',
    logo: 'ST',
    industry: 'B2B SaaS',
    arr: '€2.5B',
    arrValue: 2500,
    employees: 8000,
    arrPerEmployee: '€312K',
    timeToMilestone: '72 months',
    founded: '2010',
    level: 'Level 2',
    thetaIndex: 0.71,
    highlight: false,
    keyCapabilities: ['C₁', 'C₄'],
    learnings: 'Developer-first with exceptional documentation',
    learningsDe: 'Developer-first mit herausragender Dokumentation',
    metrics: { growth: 'Linear (1:1)', coordination: 'O(n)', efficiency: '+56%' }
  },
  {
    name: 'Airbnb',
    logo: 'AB',
    industry: 'Marketplaces',
    arr: '€8.4B',
    arrValue: 8400,
    employees: 6900,
    arrPerEmployee: '€1.2M',
    timeToMilestone: '84 months',
    founded: '2008',
    level: 'Level 2',
    thetaIndex: 0.69,
    highlight: false,
    keyCapabilities: ['C₂', 'C₃'],
    learnings: 'Two-sided marketplace with trust and experience focus',
    learningsDe: 'Zweiseitiger Marktplatz mit Trust und Experience-Fokus',
    metrics: { growth: 'Sublinear (1.2:1)', coordination: 'O(n)', efficiency: '+500%' }
  },
  {
    name: 'Uber',
    logo: 'UB',
    industry: 'Marketplaces',
    arr: '€37B',
    arrValue: 37000,
    employees: 32800,
    arrPerEmployee: '€1.1M',
    timeToMilestone: '96 months',
    founded: '2009',
    level: 'Level 2',
    thetaIndex: 0.67,
    highlight: false,
    keyCapabilities: ['C₂', 'C₄'],
    learnings: 'Aggressive scaling with AI-driven operations',
    learningsDe: 'Aggressives Scaling mit AI-gesteuerten Operations',
    metrics: { growth: 'Sublinear (1.1:1)', coordination: 'O(n)', efficiency: '+450%' }
  },
  {
    name: 'Spotify',
    logo: 'SP',
    industry: 'Other',
    arr: '€13.2B',
    arrValue: 13200,
    employees: 9800,
    arrPerEmployee: '€1.3M',
    timeToMilestone: '120 months',
    founded: '2006',
    level: 'Level 2',
    thetaIndex: 0.73,
    highlight: false,
    keyCapabilities: ['C₃', 'C₄'],
    learnings: 'Personalization engine with squad model at scale',
    learningsDe: 'Personalisierungs-Engine mit Squad-Modell at Scale',
    metrics: { growth: 'Sublinear (1.3:1)', coordination: 'O(n)', efficiency: '+550%' }
  },
  {
    name: 'Netflix',
    logo: 'NF',
    industry: 'Other',
    arr: '€33.7B',
    arrValue: 33700,
    employees: 13000,
    arrPerEmployee: '€2.6M',
    timeToMilestone: '180 months',
    founded: '1997',
    level: 'Level 2',
    thetaIndex: 0.75,
    highlight: false,
    keyCapabilities: ['C₃', 'C₄'],
    learnings: 'Data-driven content with recommendation engine',
    learningsDe: 'Datengetriebener Content mit Empfehlungs-Engine',
    metrics: { growth: 'Sublinear (1.4:1)', coordination: 'O(n)', efficiency: '+1,200%' }
  },
  {
    name: 'Canva',
    logo: 'CV',
    industry: 'B2B SaaS',
    arr: '€2.1B',
    arrValue: 2100,
    employees: 3500,
    arrPerEmployee: '€600K',
    timeToMilestone: '84 months',
    founded: '2012',
    level: 'Level 2',
    thetaIndex: 0.77,
    highlight: false,
    keyCapabilities: ['C₁', 'C₃'],
    learnings: 'Freemium design tool with AI-powered features',
    learningsDe: 'Freemium Design-Tool mit AI-gestützten Features',
    metrics: { growth: 'Sublinear (1.5:1)', coordination: 'O(n)', efficiency: '+200%' }
  },
  {
    name: 'Loom',
    logo: 'LM',
    industry: 'B2B SaaS',
    arr: '€80M',
    arrValue: 80,
    employees: 200,
    arrPerEmployee: '€400K',
    timeToMilestone: '48 months',
    founded: '2015',
    level: 'Level 2',
    thetaIndex: 0.70,
    highlight: false,
    keyCapabilities: ['C₂', 'C₃'],
    learnings: 'Async video with PLG motion',
    learningsDe: 'Async Video mit PLG-Motion',
    metrics: { growth: 'Linear (1:1)', coordination: 'O(n)', efficiency: '+100%' }
  },
  {
    name: 'Intercom',
    logo: 'IC',
    industry: 'B2B SaaS',
    arr: '€300M',
    arrValue: 300,
    employees: 800,
    arrPerEmployee: '€375K',
    timeToMilestone: '72 months',
    founded: '2011',
    level: 'Level 2',
    thetaIndex: 0.72,
    highlight: false,
    keyCapabilities: ['C₁', 'C₂'],
    learnings: 'Customer messaging with AI-first transformation',
    learningsDe: 'Customer Messaging mit AI-first Transformation',
    metrics: { growth: 'Linear (1:1)', coordination: 'O(n)', efficiency: '+88%' }
  },
  {
    name: 'Calendly',
    logo: 'CL',
    industry: 'B2B SaaS',
    arr: '€230M',
    arrValue: 230,
    employees: 500,
    arrPerEmployee: '€460K',
    timeToMilestone: '72 months',
    founded: '2013',
    level: 'Level 2',
    thetaIndex: 0.68,
    highlight: false,
    keyCapabilities: ['C₁', 'C₃'],
    learnings: 'Simple product with viral loops',
    learningsDe: 'Einfaches Produkt mit viralen Loops',
    metrics: { growth: 'Linear (1:1)', coordination: 'O(n)', efficiency: '+130%' }
  },
  {
    name: 'Airtable',
    logo: 'AT',
    industry: 'B2B SaaS',
    arr: '€150M',
    arrValue: 150,
    employees: 700,
    arrPerEmployee: '€214K',
    timeToMilestone: '60 months',
    founded: '2012',
    level: 'Level 2',
    thetaIndex: 0.66,
    highlight: false,
    keyCapabilities: ['C₂', 'C₃'],
    learnings: 'Flexible database with template marketplace',
    learningsDe: 'Flexible Datenbank mit Template-Marktplatz',
    metrics: { growth: 'Linear (0.8:1)', coordination: 'O(n)', efficiency: '+7%' }
  },
  {
    name: 'Zapier',
    logo: 'ZP',
    industry: 'B2B SaaS',
    arr: '€230M',
    arrValue: 230,
    employees: 700,
    arrPerEmployee: '€329K',
    timeToMilestone: '96 months',
    founded: '2011',
    level: 'Level 2',
    thetaIndex: 0.71,
    highlight: false,
    keyCapabilities: ['C₃', 'C₄'],
    learnings: 'Integration platform with remote-first culture',
    learningsDe: 'Integrations-Plattform mit Remote-first Kultur',
    metrics: { growth: 'Linear (1:1)', coordination: 'O(n)', efficiency: '+65%' }
  },
  {
    name: 'Typeform',
    logo: 'TF',
    industry: 'B2B SaaS',
    arr: '€80M',
    arrValue: 80,
    employees: 400,
    arrPerEmployee: '€200K',
    timeToMilestone: '72 months',
    founded: '2012',
    level: 'Level 1',
    thetaIndex: 0.58,
    highlight: false,
    keyCapabilities: ['C₁'],
    learnings: 'Beautiful forms with limited AI integration',
    learningsDe: 'Schöne Formulare mit limitierter AI-Integration',
    metrics: { growth: 'Linear (0.8:1)', coordination: 'O(n²)', efficiency: 'Baseline' }
  },
  {
    name: 'Webflow',
    logo: 'WF',
    industry: 'B2B SaaS',
    arr: '€180M',
    arrValue: 180,
    employees: 700,
    arrPerEmployee: '€257K',
    timeToMilestone: '84 months',
    founded: '2013',
    level: 'Level 2',
    thetaIndex: 0.69,
    highlight: false,
    keyCapabilities: ['C₂', 'C₃'],
    learnings: 'No-code web builder with designer focus',
    learningsDe: 'No-Code Web-Builder mit Designer-Fokus',
    metrics: { growth: 'Linear (1:1)', coordination: 'O(n)', efficiency: '+29%' }
  }
];

const industries = ['All', 'AI Tools', 'B2B SaaS', 'Marketplaces', 'Other'];
const arrRanges = ['All', '<€100M', '€100M-€500M', '€500M-€1B', '>€1B'];
const thetaRanges = ['All', '>0.85', '0.70-0.85', '<0.70'];
const capabilityFocus = ['All', 'C₁', 'C₂', 'C₃', 'C₄'];

const CaseStudiesSection: React.FC = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedARR, setSelectedARR] = useState('All');
  const [selectedTheta, setSelectedTheta] = useState('All');
  const [selectedCapability, setSelectedCapability] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const filteredStudies = useMemo(() => {
    return caseStudies.filter(study => {
      const matchesSearch = searchQuery === '' || 
        study.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesIndustry = selectedIndustry === 'All' || 
        study.industry === selectedIndustry;
      
      const matchesARR = selectedARR === 'All' || 
        (selectedARR === '<€100M' && study.arrValue < 100) ||
        (selectedARR === '€100M-€500M' && study.arrValue >= 100 && study.arrValue < 500) ||
        (selectedARR === '€500M-€1B' && study.arrValue >= 500 && study.arrValue < 1000) ||
        (selectedARR === '>€1B' && study.arrValue >= 1000);
      
      const matchesTheta = selectedTheta === 'All' || 
        (selectedTheta === '>0.85' && study.thetaIndex > 0.85) ||
        (selectedTheta === '0.70-0.85' && study.thetaIndex >= 0.70 && study.thetaIndex <= 0.85) ||
        (selectedTheta === '<0.70' && study.thetaIndex < 0.70);
      
      const matchesCapability = selectedCapability === 'All' || 
        study.keyCapabilities.includes(selectedCapability);

      return matchesSearch && matchesIndustry && matchesARR && matchesTheta && matchesCapability;
    });
  }, [searchQuery, selectedIndustry, selectedARR, selectedTheta, selectedCapability]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Level 3': return 'bg-accent/20 text-accent border-accent/30';
      case 'Level 2': return 'bg-primary/20 text-primary border-primary/30';
      default: return 'bg-muted text-muted-foreground border-muted';
    }
  };

  const clearFilters = () => {
    setSelectedIndustry('All');
    setSelectedARR('All');
    setSelectedTheta('All');
    setSelectedCapability('All');
    setSearchQuery('');
  };

  const hasActiveFilters = selectedIndustry !== 'All' || selectedARR !== 'All' || 
    selectedTheta !== 'All' || selectedCapability !== 'All' || searchQuery !== '';

  return (
    <section id="cases" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
            n=22 Companies, R²=0.76
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {language === 'de' ? 'Empirisch validierte Ergebnisse' : 'Empirically Validated Results'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Warum skalieren Midjourney, Cursor und Perplexity 10-30x schneller?' 
              : 'Why do Midjourney, Cursor, and Perplexity scale 10-30x faster?'}
          </p>
        </div>

        {/* Main Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard 
            icon={<TrendingUp className="w-5 h-5" />}
            value="4-10x"
            label={language === 'de' ? 'Schnelleres Scaling' : 'Faster Scaling'}
            sublabel="Level 3 vs Level 1"
          />
          <StatCard 
            icon={<Clock className="w-5 h-5" />}
            value="8-18"
            label={language === 'de' ? 'Monate zu €100M' : 'Months to €100M'}
            sublabel={language === 'de' ? 'vs. 60-84 Monate' : 'vs. 60-84 months'}
          />
          <StatCard 
            icon={<Users className="w-5 h-5" />}
            value="-95%"
            label={language === 'de' ? 'Koordinationskosten' : 'Coordination Cost'}
            sublabel="O(n²) → O(n log n)"
          />
          <StatCard 
            icon={<DollarSign className="w-5 h-5" />}
            value="€750K-5M"
            label="ARR/Employee"
            sublabel={language === 'de' ? 'vs. €150-200K' : 'vs. €150-200K'}
          />
        </div>

        {/* Search & Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder={language === 'de' ? 'Unternehmen suchen...' : 'Search companies...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border/50"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              {language === 'de' ? 'Filter' : 'Filters'}
              {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
            {hasActiveFilters && (
              <Button variant="ghost" onClick={clearFilters}>
                {language === 'de' ? 'Filter löschen' : 'Clear'}
              </Button>
            )}
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              {language === 'de' ? 'Exportieren' : 'Export'}
            </Button>
          </div>

          {showFilters && (
            <Card className="p-6 glass border-border/50">
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-sm font-medium mb-3 text-muted-foreground">INDUSTRY</h3>
                  <div className="flex flex-wrap gap-2">
                    {industries.map(ind => (
                      <Badge
                        key={ind}
                        variant="outline"
                        className={`cursor-pointer ${selectedIndustry === ind ? 'bg-primary text-primary-foreground' : ''}`}
                        onClick={() => setSelectedIndustry(ind)}
                      >
                        {ind}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-3 text-muted-foreground">ARR RANGE</h3>
                  <div className="flex flex-wrap gap-2">
                    {arrRanges.map(range => (
                      <Badge
                        key={range}
                        variant="outline"
                        className={`cursor-pointer ${selectedARR === range ? 'bg-accent text-accent-foreground' : ''}`}
                        onClick={() => setSelectedARR(range)}
                      >
                        {range}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-3 text-muted-foreground">θ_INDEX</h3>
                  <div className="flex flex-wrap gap-2">
                    {thetaRanges.map(range => (
                      <Badge
                        key={range}
                        variant="outline"
                        className={`cursor-pointer ${selectedTheta === range ? 'bg-primary text-primary-foreground' : ''}`}
                        onClick={() => setSelectedTheta(range)}
                      >
                        {range}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-3 text-muted-foreground">CAPABILITY</h3>
                  <div className="flex flex-wrap gap-2">
                    {capabilityFocus.map(cap => (
                      <Badge
                        key={cap}
                        variant="outline"
                        className={`cursor-pointer ${selectedCapability === cap ? 'bg-accent text-accent-foreground' : ''}`}
                        onClick={() => setSelectedCapability(cap)}
                      >
                        {cap}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Results Count */}
        <p className="text-muted-foreground mb-6">
          {filteredStudies.length} {language === 'de' ? 'Unternehmen' : 'companies'}
        </p>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredStudies.slice(0, 9).map((study) => (
            <Card 
              key={study.name}
              className={`p-6 glass border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-accent-glow group cursor-pointer ${
                expandedCard === study.name ? 'border-accent ring-2 ring-accent/20' : ''
              }`}
              onClick={() => setExpandedCard(expandedCard === study.name ? null : study.name)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center text-accent-foreground font-bold">
                    {study.logo}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{study.name}</h3>
                    <span className="text-sm text-muted-foreground">{study.industry}</span>
                  </div>
                </div>
                <Badge className={getLevelColor(study.level)}>{study.level}</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <MetricBox label="ARR" value={study.arr} icon={<DollarSign className="w-4 h-4" />} />
                <MetricBox label="θ_index" value={study.thetaIndex.toFixed(2)} icon={<Zap className="w-4 h-4" />} />
                <MetricBox label="ARR/Employee" value={study.arrPerEmployee} icon={<Users className="w-4 h-4" />} />
                <MetricBox label={language === 'de' ? 'Zeit zu €100M' : 'Time to €100M'} value={study.timeToMilestone} icon={<Clock className="w-4 h-4" />} />
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {study.keyCapabilities.map(cap => (
                  <Badge key={cap} variant="outline" className="text-xs border-accent/30 text-accent">{cap}</Badge>
                ))}
              </div>

              {expandedCard === study.name && (
                <div className="pt-4 border-t border-border/50 space-y-3 animate-in fade-in duration-300">
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground mb-1">KEY LEARNING</h4>
                    <p className="text-sm">{language === 'de' ? study.learningsDe : study.learnings}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-muted-foreground">Growth</span>
                      <p className="font-medium text-accent">{study.metrics.growth}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Coordination</span>
                      <p className="font-medium">{study.metrics.coordination}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Efficiency</span>
                      <p className="font-medium text-accent">{study.metrics.efficiency}</p>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Full Comparison Table */}
        <Card className="p-6 glass overflow-x-auto">
          <h3 className="font-bold text-lg mb-4">
            {language === 'de' ? 'Vollständiger Vergleich aller 22 Companies' : 'Full Comparison of All 22 Companies'}
          </h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-3 px-2">{language === 'de' ? 'Unternehmen' : 'Company'}</th>
                <th className="text-left py-3 px-2">Industry</th>
                <th className="text-right py-3 px-2">ARR</th>
                <th className="text-right py-3 px-2">θ_index</th>
                <th className="text-right py-3 px-2">ARR/Employee</th>
                <th className="text-right py-3 px-2">{language === 'de' ? 'Zeit zu €100M' : 'Time to €100M'}</th>
                <th className="text-center py-3 px-2">Level</th>
                <th className="text-center py-3 px-2">Capabilities</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudies.map((study) => (
                <tr key={study.name} className={`border-b border-border/30 hover:bg-muted/50 ${study.level === 'Level 1' ? 'opacity-60' : ''}`}>
                  <td className="py-3 px-2 font-medium">{study.name}</td>
                  <td className="py-3 px-2 text-muted-foreground">{study.industry}</td>
                  <td className="py-3 px-2 text-right">{study.arr}</td>
                  <td className="py-3 px-2 text-right font-medium text-accent">{study.thetaIndex.toFixed(2)}</td>
                  <td className="py-3 px-2 text-right">{study.arrPerEmployee}</td>
                  <td className="py-3 px-2 text-right">{study.timeToMilestone}</td>
                  <td className="py-3 px-2 text-center">
                    <Badge className={`${getLevelColor(study.level)} text-xs`}>{study.level}</Badge>
                  </td>
                  <td className="py-3 px-2 text-center">
                    <div className="flex justify-center gap-1">
                      {study.keyCapabilities.map(cap => (
                        <Badge key={cap} variant="outline" className="text-xs">{cap}</Badge>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* Statistical Validation */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Statistical Validation:</span> θ_index → log(Time to €100M): r = 0.89, p ≈ 3×10⁻⁸ (n=22)
          </p>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  sublabel: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, sublabel }) => (
  <div className="p-4 rounded-xl bg-card border border-border/50 text-center">
    <div className="flex items-center justify-center gap-2 text-accent mb-1">
      {icon}
      <span className="text-2xl font-bold">{value}</span>
    </div>
    <p className="text-sm font-medium">{label}</p>
    <p className="text-xs text-muted-foreground">{sublabel}</p>
  </div>
);

interface MetricBoxProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const MetricBox: React.FC<MetricBoxProps> = ({ label, value, icon }) => (
  <div className="p-3 rounded-lg bg-background/50">
    <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-1">
      {icon}
      <span>{label}</span>
    </div>
    <p className="font-bold">{value}</p>
  </div>
);

export default CaseStudiesSection;
