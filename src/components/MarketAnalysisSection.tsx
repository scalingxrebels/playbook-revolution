import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, Target, Users, DollarSign, AlertTriangle, Zap, Building, Briefcase } from 'lucide-react';

const MarketAnalysisSection = () => {
  const { language } = useLanguage();

  const marketSize = [
    {
      label: 'TAM',
      title: language === 'de' ? 'Total Addressable Market' : 'Total Addressable Market',
      value2025: '€150M',
      value2030: '€1.4B',
      cagr: '80%',
      description: language === 'de' ? 'DACH B2B SaaS Scaleups' : 'DACH B2B SaaS Scaleups',
    },
    {
      label: 'SAM',
      title: language === 'de' ? 'Serviceable Addressable Market' : 'Serviceable Addressable Market',
      value2025: '€55-74M',
      value2030: '€500M+',
      cagr: '60%',
      description: language === 'de' ? 'Series A-C + VCs/PE Firms' : 'Series A-C + VCs/PE Firms',
    },
    {
      label: 'SOM',
      title: language === 'de' ? 'Serviceable Obtainable Market' : 'Serviceable Obtainable Market',
      value2025: '€300K-950K',
      value2030: '€3.4M-10.7M',
      cagr: '50%',
      description: language === 'de' ? 'Year 1 → Year 5 Target' : 'Year 1 → Year 5 Target',
    },
  ];

  const icpSegments = [
    {
      icon: Building,
      segment: 'Series A-D Startups',
      arrRange: '€2M-€100M ARR',
      teamSize: '10-200 Personen',
      funding: '€5M-€100M raised',
      budget: '€80k-€180k/year',
      decisionMaker: 'CEO + CFO',
      color: 'primary',
    },
    {
      icon: Briefcase,
      segment: 'VCs/PE Firms',
      arrRange: '10-100 Portfolio Companies',
      teamSize: 'Operating Partners',
      funding: 'AUM €100M+',
      budget: '€100k-€500k/year',
      decisionMaker: 'Partner/Operating Partner',
      color: 'accent',
    },
  ];

  const painPoints = [
    {
      icon: AlertTriangle,
      title: language === 'de' ? 'Veraltetes Playbook' : 'Outdated Playbook',
      quote: language === 'de' 
        ? '"Dein Scaling Playbook ist veraltet. Dein Wettbewerber ist AI-native. Du nicht. Er skaliert 5x schneller."'
        : '"Your Scaling Playbook is outdated. Your competitor is AI-native. You\'re not. They scale 5x faster."',
      isPrimary: true,
    },
    {
      icon: TrendingUp,
      title: language === 'de' ? 'Lineares Wachstum' : 'Linear Growth',
      quote: language === 'de'
        ? '"Revenue ≈ People. Jeder neue €1M ARR kostet uns 5-7 neue Mitarbeiter."'
        : '"Revenue ≈ People. Every new €1M ARR costs us 5-7 new employees."',
      isPrimary: false,
    },
    {
      icon: DollarSign,
      title: language === 'de' ? 'Schlechte Unit Economics' : 'Poor Unit Economics',
      quote: language === 'de'
        ? '"LTV/CAC von 2-3x. Wir verbrennen Cash, um zu wachsen."'
        : '"LTV/CAC of 2-3x. We\'re burning cash to grow."',
      isPrimary: false,
    },
    {
      icon: Zap,
      title: language === 'de' ? 'Langsame Execution' : 'Slow Execution',
      quote: language === 'de'
        ? '"Feature Velocity: Quarterly statt Weekly. Decisions: 2-4 Wochen statt 2-3 Tage."'
        : '"Feature Velocity: Quarterly instead of Weekly. Decisions: 2-4 weeks instead of 2-3 days."',
      isPrimary: false,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            MARKTANALYSE v2.1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'de' ? 'Der €1.4B Markt für' : 'The €1.4B Market for'}
            <span className="text-gradient block mt-2">AI-Native Execution Consulting</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Eine neue Kategorie professioneller Dienstleistungen: Strategy Consulting × Implementation × AI-Native Transformation'
              : 'A new category of professional services: Strategy Consulting × Implementation × AI-Native Transformation'}
          </p>
        </div>

        {/* TAM/SAM/SOM */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {marketSize.map((market, index) => (
            <div 
              key={market.label}
              className="relative bg-card p-8 rounded-2xl border border-border overflow-hidden group hover:border-primary/50 transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              
              <div className="relative">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-bold rounded-full mb-4">
                  {market.label}
                </span>
                <p className="text-sm text-muted-foreground mb-2">{market.title}</p>
                
                <div className="flex items-end gap-4 mb-4">
                  <div>
                    <p className="text-3xl font-bold text-foreground">{market.value2025}</p>
                    <p className="text-xs text-muted-foreground">2025</p>
                  </div>
                  <div className="text-2xl text-accent">→</div>
                  <div>
                    <p className="text-3xl font-bold text-accent">{market.value2030}</p>
                    <p className="text-xs text-muted-foreground">2030</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">{market.cagr} CAGR</span>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">{market.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ICP Segments */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'de' ? 'Ideal Customer Profile (ICP)' : 'Ideal Customer Profile (ICP)'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {icpSegments.map((icp) => {
              const Icon = icp.icon;
              return (
                <div 
                  key={icp.segment}
                  className={`bg-card p-8 rounded-2xl border-2 ${
                    icp.color === 'primary' ? 'border-primary/30 hover:border-primary' : 'border-accent/30 hover:border-accent'
                  } transition-all`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-xl ${icp.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                      <Icon className={`w-8 h-8 ${icp.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{icp.segment}</h4>
                      <p className={`text-sm ${icp.color === 'primary' ? 'text-primary' : 'text-accent'}`}>{icp.arrRange}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground">{language === 'de' ? 'Team Größe' : 'Team Size'}</p>
                      <p className="font-medium">{icp.teamSize}</p>
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground">Funding</p>
                      <p className="font-medium">{icp.funding}</p>
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground">Budget</p>
                      <p className="font-medium">{icp.budget}</p>
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground">Decision Maker</p>
                      <p className="font-medium">{icp.decisionMaker}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pain Points */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'de' ? 'Die Pain Points deiner Kunden' : 'Your Customer Pain Points'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((pain, index) => {
              const Icon = pain.icon;
              return (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl border ${
                    pain.isPrimary 
                      ? 'bg-destructive/5 border-destructive/30 md:col-span-2' 
                      : 'bg-card border-border'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${pain.isPrimary ? 'bg-destructive/10' : 'bg-primary/10'}`}>
                      <Icon className={`w-6 h-6 ${pain.isPrimary ? 'text-destructive' : 'text-primary'}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-lg">{pain.title}</h4>
                        {pain.isPrimary && (
                          <span className="px-2 py-0.5 bg-destructive/20 text-destructive text-xs rounded-full">
                            PRIMARY
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground italic">{pain.quote}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysisSection;
