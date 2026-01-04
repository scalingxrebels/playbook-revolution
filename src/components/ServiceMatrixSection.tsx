import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Rocket, TrendingUp, Wrench, Phone, Clock, Calendar, Shield } from 'lucide-react';

const ServiceMatrixSection = () => {
  const { language } = useLanguage();

  const streams = [
    {
      id: 1,
      name: 'Growth Engines',
      focus: 'CMO/CRO Focus',
      color: 'primary',
      problem: language === 'de' ? 'CAC Crisis' : 'CAC Crisis',
    },
    {
      id: 2,
      name: 'Scaling Systems',
      focus: 'CEO/COO Focus',
      color: 'accent',
      problem: language === 'de' ? 'Scaling Chaos' : 'Scaling Chaos',
    },
    {
      id: 3,
      name: 'Governance',
      focus: 'VC/Investor Focus',
      color: 'purple',
      problem: language === 'de' ? 'Board Pressure' : 'Board Pressure',
    },
  ];

  const hebel = [
    {
      level: 0,
      name: 'Entry Point',
      icon: Phone,
      duration: 'FREE',
      price: '€0',
      items: [
        { stream: 1, name: 'Inflection Point Call', description: '30-45 min' },
        { stream: 2, name: 'Inflection Point Call', description: '30-45 min' },
        { stream: 3, name: 'Inflection Point Call', description: '30-45 min' },
      ],
    },
    {
      level: 1,
      name: 'Power Up',
      icon: Zap,
      duration: '30 Tage',
      price: '€23.6K',
      items: [
        { stream: 1, name: 'CAC Crisis Sprint', description: '+ Guarantee' },
        { stream: 2, name: 'Scaling Chaos Sprint', description: '+ Guarantee' },
        { stream: 3, name: 'Board Pressure Sprint', description: '+ Guarantee' },
      ],
    },
    {
      level: 2,
      name: 'Boost',
      icon: Rocket,
      duration: '90 Tage',
      price: '€45.9K',
      priceDetail: '€15.3K/mo',
      items: [
        { stream: 1, name: 'Efficient Hypergrowth', description: '+ Guarantee' },
        { stream: 2, name: 'AI-Native Operating Sys', description: '+ Guarantee' },
        { stream: 3, name: 'Portfolio AI Transformation', description: '+ Guarantee' },
      ],
    },
    {
      level: 3,
      name: 'Accelerate',
      icon: TrendingUp,
      duration: '12 Monate',
      price: '€153K',
      priceDetail: '€12.75K/mo',
      items: [
        { stream: 1, name: 'Rule of 40 Transformation', description: '2-3 days/week' },
        { stream: 2, name: '10x Scale Infrastructure', description: '2-3 days/week' },
        { stream: 3, name: 'Portfolio Transformation', description: '2-3 days/week' },
      ],
    },
  ];

  const tools = [
    { stream: 1, name: 'GTM Pro', features: ['Lead Intel', 'Pipeline Opt', 'Revenue Fcst', 'Comp Intel'], price: '€47/user/mo' },
    { stream: 2, name: 'LASR.io', features: ['AI Maturity Scorecard', 'Command Center', 'Process Intel', 'AI Copilot'], price: '€149/mo base' },
    { stream: 3, name: 'Governance Pro', features: ['Portfolio Health', 'DD Accelerator', 'Board Gen', 'Value Creation'], price: '€47/user/mo' },
  ];

  const getStreamColor = (stream: number) => {
    switch (stream) {
      case 1: return 'primary';
      case 2: return 'accent';
      case 3: return 'purple';
      default: return 'primary';
    }
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            3×3 SERVICE MATRIX
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'de' ? '3 Streams × 4 Hebel' : '3 Streams × 4 Levers'}
            <span className="text-gradient block mt-2">
              {language === 'de' ? 'Ein System für jeden Bedarf' : 'One System for Every Need'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de'
              ? 'Problem-First Pricing: Jedes Programm löst ein spezifisches Problem mit garantierten Outcomes.'
              : 'Problem-First Pricing: Each program solves a specific problem with guaranteed outcomes.'}
          </p>
        </div>

        {/* Stream Headers */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-muted-foreground" />
              <span className="font-semibold text-muted-foreground">HEBEL</span>
            </div>
          </div>
          {streams.map((stream) => (
            <div 
              key={stream.id}
              className={`p-4 rounded-xl ${
                stream.color === 'primary' ? 'bg-primary/10 border-primary/30' : 
                stream.color === 'accent' ? 'bg-accent/10 border-accent/30' : 
                'bg-purple-500/10 border-purple-500/30'
              } border`}
            >
              <p className="font-bold">{stream.name}</p>
              <p className="text-sm text-muted-foreground">{stream.focus}</p>
              <p className={`text-xs mt-1 ${
                stream.color === 'primary' ? 'text-primary' : 
                stream.color === 'accent' ? 'text-accent' : 
                'text-purple-500'
              }`}>
                {stream.problem}
              </p>
            </div>
          ))}
        </div>

        {/* Matrix Grid */}
        <div className="space-y-3 mb-12">
          {hebel.map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.level} className="grid grid-cols-4 gap-4">
                {/* Hebel Label */}
                <div className="bg-card p-4 rounded-xl border border-border flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{h.name}</p>
                    <p className="text-xs text-muted-foreground">{h.duration}</p>
                    <p className={`text-sm font-bold ${h.level === 0 ? 'text-accent' : 'text-primary'}`}>
                      {h.price}
                      {h.priceDetail && <span className="text-xs font-normal text-muted-foreground ml-1">({h.priceDetail})</span>}
                    </p>
                  </div>
                </div>
                
                {/* Stream Items */}
                {h.items.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 rounded-xl border transition-all hover:shadow-lg cursor-pointer ${
                      h.level === 0 
                        ? 'bg-card border-border hover:border-accent' 
                        : idx === 0 ? 'bg-primary/5 border-primary/20 hover:border-primary'
                        : idx === 1 ? 'bg-accent/5 border-accent/20 hover:border-accent'
                        : 'bg-purple-500/5 border-purple-500/20 hover:border-purple-500'
                    }`}
                  >
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Tools (HEBEL 2) */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Wrench className="w-5 h-5 text-primary" />
            {language === 'de' ? 'HEBEL 2: Tools/SaaS' : 'LEVER 2: Tools/SaaS'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool, idx) => (
              <div 
                key={tool.name}
                className={`bg-card p-6 rounded-2xl border-2 ${
                  idx === 0 ? 'border-primary/30 hover:border-primary' : 
                  idx === 1 ? 'border-accent/30 hover:border-accent' : 
                  'border-purple-500/30 hover:border-purple-500'
                } transition-all`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold">{tool.name}</h4>
                  <span className={`text-sm font-medium ${
                    idx === 0 ? 'text-primary' : idx === 1 ? 'text-accent' : 'text-purple-500'
                  }`}>{tool.price}</span>
                </div>
                <ul className="space-y-2">
                  {tool.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        idx === 0 ? 'bg-primary' : idx === 1 ? 'bg-accent' : 'bg-purple-500'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome Guarantee */}
        <div className="bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 p-8 rounded-2xl border border-accent/20">
          <div className="text-center">
            <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              {language === 'de' ? 'Outcome Guarantee bei ALLEN Programmen' : 'Outcome Guarantee on ALL Programs'}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'de'
                ? '2 von 3 Outcomes erreicht oder 50% Refund. Kein Risiko für dich.'
                : '2 of 3 Outcomes achieved or 50% Refund. No risk for you.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMatrixSection;
