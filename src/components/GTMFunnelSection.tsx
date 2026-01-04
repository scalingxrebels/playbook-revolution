import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Phone, Wrench, FileText, CreditCard, TrendingUp, X, Check, Zap, Target, Users } from 'lucide-react';

const GTMFunnelSection = () => {
  const { language } = useLanguage();

  const traditionalFunnel = [
    { step: 1, name: language === 'de' ? 'Ansprache' : 'Outreach', icon: Phone },
    { step: 2, name: 'Persuasion #1', icon: FileText },
    { step: 3, name: 'Content Download (PDF)', icon: FileText },
    { step: 4, name: 'Email Follow-up', icon: FileText },
    { step: 5, name: 'Persuasion #2', icon: FileText },
    { step: 6, name: 'Demo Call', icon: Phone },
    { step: 7, name: 'Persuasion #3', icon: FileText },
    { step: 8, name: 'Proposal', icon: FileText },
    { step: 9, name: language === 'de' ? 'Verhandlung' : 'Negotiation', icon: Users },
    { step: 10, name: 'Deal', icon: CreditCard },
  ];

  const toolFirstFunnel = [
    { step: 1, name: language === 'de' ? 'Ansprache' : 'Outreach', icon: Phone, color: 'primary' },
    { step: 2, name: 'Persuasion #1 (Free Tool)', icon: Zap, color: 'accent' },
    { step: 3, name: language === 'de' ? 'Tool Nutzung' : 'Tool Usage', icon: Wrench, color: 'accent' },
    { step: 4, name: 'Content (gated in Tool)', icon: FileText, color: 'primary' },
    { step: 5, name: 'Paid Conversion', icon: CreditCard, color: 'green' },
    { step: 6, name: 'Upsell', icon: TrendingUp, color: 'green' },
  ];

  const gtmMotions = [
    {
      name: 'Partnership Motion',
      percentage: '50%',
      description: language === 'de' ? 'VCs, Accelerators, Multiplikatoren' : 'VCs, Accelerators, Multipliers',
      color: 'primary',
      icon: Users,
      activities: [
        language === 'de' ? 'VC Portfolio Support Partnerships' : 'VC Portfolio Support Partnerships',
        language === 'de' ? 'Accelerator Program Integration' : 'Accelerator Program Integration',
        language === 'de' ? 'Strategic Alliances' : 'Strategic Alliances',
      ],
    },
    {
      name: 'Outbound Motion',
      percentage: '30%',
      description: language === 'de' ? 'Gezielte ABM-Kampagnen' : 'Targeted ABM Campaigns',
      color: 'accent',
      icon: Target,
      activities: [
        language === 'de' ? 'ICP-basierte Account Lists' : 'ICP-based Account Lists',
        language === 'de' ? 'Multi-channel Sequenzen' : 'Multi-channel Sequences',
        language === 'de' ? 'Personalisierte Outreach' : 'Personalized Outreach',
      ],
    },
    {
      name: 'Inbound Motion',
      percentage: '20%',
      description: language === 'de' ? 'Content & Tool-driven' : 'Content & Tool-driven',
      color: 'green',
      icon: FileText,
      activities: [
        language === 'de' ? 'LASR.io Free Scorecard' : 'LASR.io Free Scorecard',
        language === 'de' ? 'Thought Leadership Content' : 'Thought Leadership Content',
        language === 'de' ? 'SEO & LinkedIn Organic' : 'SEO & LinkedIn Organic',
      ],
    },
  ];

  const revenueTarget = {
    target: '€480K-€600K',
    year: '2026',
    breakdown: [
      { program: 'Accelerate (12mo)', price: '€153K', deals: '2-3', revenue: '€306K-€459K' },
      { program: 'Boost (90d)', price: '€45.9K', deals: '3-4', revenue: '€137K-€184K' },
      { program: 'Power Up (30d)', price: '€23.6K', deals: '2-3', revenue: '€47K-€71K' },
    ],
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            GTM STRATEGY v1.0
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'de' ? 'Tool-First Funnel' : 'Tool-First Funnel'}
            <span className="text-gradient block mt-2">
              {language === 'de' ? '6 Steps statt 10. Show, don\'t tell.' : '6 Steps instead of 10. Show, don\'t tell.'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? '"Content als Feature, nicht als Lead Magnet." Der neue Standard für B2B SaaS Consulting.'
              : '"Content as Feature, not as Lead Magnet." The new standard for B2B SaaS Consulting.'}
          </p>
        </div>

        {/* Funnel Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Traditional Funnel */}
          <div className="bg-card p-6 rounded-2xl border border-destructive/30">
            <div className="flex items-center gap-3 mb-6">
              <X className="w-6 h-6 text-destructive" />
              <h3 className="text-xl font-bold">
                {language === 'de' ? 'Traditional Consulting Funnel' : 'Traditional Consulting Funnel'}
              </h3>
            </div>
            <div className="space-y-2">
              {traditionalFunnel.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={step.step}
                    className="flex items-center gap-3 p-2 rounded-lg bg-destructive/5 border border-destructive/10"
                  >
                    <span className="w-6 h-6 rounded-full bg-destructive/20 text-destructive text-xs flex items-center justify-center">
                      {step.step}
                    </span>
                    <Icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{step.name}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 p-4 bg-destructive/10 rounded-xl">
              <p className="text-sm text-destructive font-medium">
                {language === 'de' ? 'Probleme:' : 'Problems:'}
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>❌ {language === 'de' ? '10 Steps, 3x Persuasion' : '10 Steps, 3x Persuasion'}</li>
                <li>❌ {language === 'de' ? '3-6 Monate Sales Cycle' : '3-6 months Sales Cycle'}</li>
                <li>❌ {language === 'de' ? 'PDF = passiv (keine Demonstration)' : 'PDF = passive (no demonstration)'}</li>
                <li>❌ {language === 'de' ? 'Demo = Slides (nicht die echte Lösung)' : 'Demo = Slides (not the real solution)'}</li>
              </ul>
            </div>
          </div>

          {/* Tool-First Funnel */}
          <div className="bg-card p-6 rounded-2xl border border-accent/30">
            <div className="flex items-center gap-3 mb-6">
              <Check className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">
                {language === 'de' ? 'Tool-First Funnel (NEU)' : 'Tool-First Funnel (NEW)'}
              </h3>
            </div>
            <div className="space-y-3">
              {toolFirstFunnel.map((step, idx) => {
                const Icon = step.icon;
                const colorClasses = {
                  primary: 'bg-primary/10 border-primary/30 text-primary',
                  accent: 'bg-accent/10 border-accent/30 text-accent',
                  green: 'bg-green-500/10 border-green-500/30 text-green-500',
                };
                return (
                  <div 
                    key={step.step}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${colorClasses[step.color as keyof typeof colorClasses]}`}
                  >
                    <span className={`w-8 h-8 rounded-full ${step.color === 'primary' ? 'bg-primary/20 text-primary' : step.color === 'accent' ? 'bg-accent/20 text-accent' : 'bg-green-500/20 text-green-500'} font-bold flex items-center justify-center`}>
                      {step.step}
                    </span>
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{step.name}</span>
                    {idx < toolFirstFunnel.length - 1 && (
                      <ArrowRight className="w-4 h-4 ml-auto opacity-50" />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-4 p-4 bg-accent/10 rounded-xl">
              <p className="text-sm text-accent font-medium">
                {language === 'de' ? 'Vorteile:' : 'Benefits:'}
              </p>
              <ul className="mt-2 space-y-1 text-sm text-foreground">
                <li>✅ {language === 'de' ? '6 Steps (40% weniger Friction)' : '6 Steps (40% less Friction)'}</li>
                <li>✅ {language === 'de' ? '2-4 Wochen Sales Cycle' : '2-4 weeks Sales Cycle'}</li>
                <li>✅ {language === 'de' ? 'Tool = Demonstration der Expertise' : 'Tool = Demonstration of Expertise'}</li>
                <li>✅ {language === 'de' ? 'Value First, Pitch Later' : 'Value First, Pitch Later'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 GTM Motions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'de' ? 'Die 3 GTM-Motions' : 'The 3 GTM Motions'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {gtmMotions.map((motion) => {
              const Icon = motion.icon;
              const colorClasses = {
                primary: { bg: 'bg-primary/10', border: 'border-primary/30', text: 'text-primary' },
                accent: { bg: 'bg-accent/10', border: 'border-accent/30', text: 'text-accent' },
                green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-500' },
              };
              const colors = colorClasses[motion.color as keyof typeof colorClasses];
              
              return (
                <div 
                  key={motion.name}
                  className={`bg-card p-6 rounded-2xl border-2 ${colors.border} hover:shadow-lg transition-all`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${colors.bg}`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <span className={`text-3xl font-bold ${colors.text}`}>{motion.percentage}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{motion.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{motion.description}</p>
                  <ul className="space-y-2">
                    {motion.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('/10', '')}`} />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Revenue Target */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 rounded-2xl border border-primary/20">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-primary mb-2">REVENUE TARGET {revenueTarget.year}</p>
            <p className="text-5xl font-bold text-gradient">{revenueTarget.target}</p>
            <p className="text-muted-foreground mt-2">
              {language === 'de' ? '80% Confidence Level' : '80% Confidence Level'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {revenueTarget.breakdown.map((item) => (
              <div key={item.program} className="bg-card p-4 rounded-xl border border-border text-center">
                <p className="font-bold">{item.program}</p>
                <p className="text-sm text-muted-foreground">{item.price}/deal</p>
                <p className="text-lg font-bold text-accent mt-2">{item.deals} deals</p>
                <p className="text-sm text-primary">{item.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GTMFunnelSection;
