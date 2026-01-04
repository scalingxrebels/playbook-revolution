import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Rocket, 
  Layers, 
  BarChart3, 
  Bot, 
  Settings, 
  Users,
  ArrowRight,
  Zap,
  Clock
} from 'lucide-react';

const HypergrowthSystem: React.FC = () => {
  const { language } = useLanguage();

  const pillars = [
    {
      icon: Rocket,
      title: { en: 'Growth Engines Drive', de: 'Growth Engines treiben' },
      description: {
        en: 'Revenue systems that actually scale. Sales velocity, pipeline coverage, conversion optimization.',
        de: 'Umsatzsysteme, die wirklich skalieren. Sales Velocity, Pipeline-Coverage, Conversion-Optimierung.'
      },
      color: 'text-accent'
    },
    {
      icon: Layers,
      title: { en: 'Operating Layers Support', de: 'Operating Layers tragen' },
      description: {
        en: 'Processes that enable scaling. Clear structures, efficient workflows, measurable outputs.',
        de: 'Prozesse, die Skalierung ermöglichen. Klare Strukturen, effiziente Workflows, messbare Outputs.'
      },
      color: 'text-primary'
    },
    {
      icon: BarChart3,
      title: { en: 'KPI & Data Steer', de: 'KPI & Data steuern' },
      description: {
        en: 'Data-driven decisions. Real-time insights, predictive analytics, actionable metrics.',
        de: 'Datengetriebene Entscheidungen. Echtzeit-Insights, Predictive Analytics, umsetzbare Metriken.'
      },
      color: 'text-chart-3'
    }
  ];

  const activators = [
    {
      icon: Bot,
      label: { en: 'AI-Agents', de: 'AI-Agents' },
      description: { en: 'Automated intelligence', de: 'Automatisierte Intelligenz' }
    },
    {
      icon: Settings,
      label: { en: 'RevOps', de: 'RevOps' },
      description: { en: 'Revenue operations', de: 'Revenue Operations' }
    },
    {
      icon: Users,
      label: { en: 'Advisory', de: 'Advisory' },
      description: { en: 'Strategic guidance', de: 'Strategische Führung' }
    }
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-diagonal-lines opacity-10" />
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-accent/10 text-accent border-accent">
            <Zap className="w-3 h-3 mr-1" />
            HYPERGROWTH SYSTEM
          </Badge>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl italic">
            {language === 'de' 
              ? 'Scaling Systems:' 
              : 'Scaling Systems:'
            }
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground">
            {language === 'de'
              ? 'Wachstumsmotoren, die brummen.'
              : 'Growth engines that roar.'
            }
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            {language === 'de'
              ? 'Das eine, das zählt: ein Scaling System, das wirkt.'
              : 'The one thing that matters: a Scaling System that works.'
            }
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="border-2 border-border bg-background/50 p-8 hover:border-accent transition-colors group"
            >
              <pillar.icon className={`w-12 h-12 ${pillar.color} mb-6 group-hover:scale-110 transition-transform`} />
              <h3 className="font-display text-2xl font-bold mb-4">
                {pillar.title[language as 'en' | 'de']}
              </h3>
              <p className="text-muted-foreground">
                {pillar.description[language as 'en' | 'de']}
              </p>
            </div>
          ))}
        </div>

        {/* Activators Section */}
        <div className="border-2 border-accent bg-accent/5 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-display text-2xl md:text-3xl">
                {language === 'de' ? 'Aktiviert durch:' : 'Activated by:'}
              </h3>
              
              <div className="space-y-4">
                {activators.map((activator, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border border-border bg-background/50 hover:border-accent transition-colors">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center">
                      <activator.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">{activator.label[language as 'en' | 'de']}</div>
                      <div className="text-sm text-muted-foreground">{activator.description[language as 'en' | 'de']}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent text-accent">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Time-to-Impact</span>
              </div>
              
              <div className="space-y-2">
                <div className="text-6xl md:text-7xl font-bold text-accent">
                  4-6
                </div>
                <div className="text-2xl text-muted-foreground">
                  {language === 'de' ? 'Wochen' : 'Weeks'}
                </div>
                <p className="text-muted-foreground">
                  {language === 'de'
                    ? 'Erste Deltas sichtbar'
                    : 'First deltas visible'
                  }
                </p>
              </div>
              
              <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-brutal"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {language === 'de' ? 'Jetzt starten' : 'Start Now'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HypergrowthSystem;
