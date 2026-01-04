import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Brain, Zap, RefreshCw, Network, Shield,
  ArrowRight, CheckCircle, TrendingUp
} from 'lucide-react';
import { Card } from '@/components/ui/card';

interface OSDimension {
  id: string;
  title: { en: string; de: string };
  description: { en: string; de: string };
  icon: React.ElementType;
  color: string;
  traditional: { en: string; de: string };
  aiNative: { en: string; de: string };
  metrics: {
    label: { en: string; de: string };
    traditional: string;
    aiNative: string;
    improvement: string;
  };
}

const OperatingSystem: React.FC = () => {
  const { language } = useLanguage();

  const dimensions: OSDimension[] = [
    {
      id: 'decision',
      title: { en: 'Decision-Making', de: 'Entscheidungsfindung' },
      description: { 
        en: 'How decisions are made and distributed across the organization', 
        de: 'Wie Entscheidungen getroffen und im Unternehmen verteilt werden' 
      },
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      traditional: { en: 'Hierarchical, slow, based on experience', de: 'Hierarchisch, langsam, erfahrungsbasiert' },
      aiNative: { en: 'Distributed, real-time, data-driven with AI recommendations', de: 'Verteilt, Echtzeit, datengetrieben mit AI-Empfehlungen' },
      metrics: {
        label: { en: 'Decision Speed', de: 'Entscheidungsgeschwindigkeit' },
        traditional: 'Days-Weeks',
        aiNative: 'Minutes-Hours',
        improvement: '10-100x faster',
      },
    },
    {
      id: 'execution',
      title: { en: 'Execution', de: 'Ausführung' },
      description: { 
        en: 'How work gets done and tasks are completed', 
        de: 'Wie Arbeit erledigt und Aufgaben abgeschlossen werden' 
      },
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      traditional: { en: 'Manual, sequential, resource-constrained', de: 'Manuell, sequentiell, ressourcenbeschränkt' },
      aiNative: { en: 'AI-augmented, parallel, automatically scaled', de: 'AI-unterstützt, parallel, automatisch skaliert' },
      metrics: {
        label: { en: 'Output per Person', de: 'Output pro Person' },
        traditional: '1x',
        aiNative: '5-10x',
        improvement: '5-10x more',
      },
    },
    {
      id: 'learning',
      title: { en: 'Learning', de: 'Lernen' },
      description: { 
        en: 'How the organization learns and improves', 
        de: 'Wie die Organisation lernt und sich verbessert' 
      },
      icon: RefreshCw,
      color: 'from-emerald-500 to-teal-500',
      traditional: { en: 'Periodic reviews, siloed knowledge', de: 'Periodische Reviews, isoliertes Wissen' },
      aiNative: { en: 'Continuous, AI-synthesized, instantly distributed', de: 'Kontinuierlich, AI-synthetisiert, sofort verteilt' },
      metrics: {
        label: { en: 'Learning Cycle', de: 'Lernzyklus' },
        traditional: 'Quarterly',
        aiNative: 'Real-time',
        improvement: 'Continuous',
      },
    },
    {
      id: 'coordination',
      title: { en: 'Coordination', de: 'Koordination' },
      description: { 
        en: 'How teams and individuals work together', 
        de: 'Wie Teams und Individuen zusammenarbeiten' 
      },
      icon: Network,
      color: 'from-orange-500 to-amber-500',
      traditional: { en: 'Meetings, emails, manual handoffs', de: 'Meetings, E-Mails, manuelle Übergaben' },
      aiNative: { en: 'AI-orchestrated, async-first, automated routing', de: 'AI-orchestriert, async-first, automatisches Routing' },
      metrics: {
        label: { en: 'Coordination Cost', de: 'Koordinationskosten' },
        traditional: 'O(n²)',
        aiNative: 'O(n log n)',
        improvement: '-70% overhead',
      },
    },
    {
      id: 'adaptive',
      title: { en: 'Adaptive Capacity', de: 'Anpassungsfähigkeit' },
      description: { 
        en: 'How quickly the organization can adapt to change', 
        de: 'Wie schnell die Organisation sich an Veränderungen anpassen kann' 
      },
      icon: Shield,
      color: 'from-red-500 to-rose-500',
      traditional: { en: 'Reactive, change projects, resistance', de: 'Reaktiv, Change-Projekte, Widerstand' },
      aiNative: { en: 'Proactive, continuous adaptation, antifragile', de: 'Proaktiv, kontinuierliche Anpassung, antifragil' },
      metrics: {
        label: { en: 'Adaptation Speed', de: 'Anpassungsgeschwindigkeit' },
        traditional: 'Months',
        aiNative: 'Days',
        improvement: '10-30x faster',
      },
    },
  ];

  return (
    <section id="operating-system" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {language === 'de' ? 'AI-Native Operating System' : 'AI-Native Operating System'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {language === 'de' ? '5 Dimensionen des AI-Native OS' : '5 Dimensions of AI-Native OS'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {language === 'de' 
              ? 'So unterscheidet sich ein AI-Native Unternehmen fundamental von traditionellen Organisationen'
              : 'How AI-Native companies fundamentally differ from traditional organizations'}
          </p>
        </div>

        {/* Dimensions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {dimensions.map((dim, index) => (
            <Card 
              key={dim.id} 
              className={`p-6 bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-r ${dim.color}`}>
                  <dim.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">{dim.title[language]}</h3>
                  <p className="text-xs text-muted-foreground">{dim.description[language]}</p>
                </div>
              </div>

              {/* Comparison */}
              <div className="space-y-3 mb-4">
                <div className="p-3 rounded-lg bg-muted/30">
                  <div className="text-xs text-muted-foreground mb-1">Traditional</div>
                  <p className="text-sm">{dim.traditional[language]}</p>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${dim.color} bg-opacity-10 border border-white/10`}>
                  <div className="text-xs text-primary mb-1">AI-Native</div>
                  <p className="text-sm">{dim.aiNative[language]}</p>
                </div>
              </div>

              {/* Metric */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                <div>
                  <div className="text-xs text-muted-foreground">{dim.metrics.label[language]}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm line-through text-muted-foreground">{dim.metrics.traditional}</span>
                    <span className="text-sm">→</span>
                    <span className="font-bold text-primary">{dim.metrics.aiNative}</span>
                  </div>
                </div>
                <div className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                  {dim.metrics.improvement}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                {language === 'de' ? 'Das AI-Native Operating System' : 'The AI-Native Operating System'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'de' 
                  ? 'Wenn alle 5 Dimensionen AI-nativ operieren, entsteht ein Unternehmen, das fundamental anders funktioniert: schneller lernt, besser koordiniert, schneller entscheidet und sich kontinuierlich anpasst.'
                  : 'When all 5 dimensions operate AI-natively, you get a company that works fundamentally differently: learns faster, coordinates better, decides quicker, and adapts continuously.'}
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-background/50 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'de' ? '10x schnellere Entscheidungen' : '10x faster decisions'}</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-background/50 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'de' ? '5-10x mehr Output pro Person' : '5-10x more output per person'}</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-background/50 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'de' ? '70% weniger Koordinationskosten' : '70% less coordination costs'}</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a
                href="#scorecard"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <Brain className="w-5 h-5" />
                {language === 'de' ? 'Ihr OS bewerten' : 'Assess Your OS'}
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default OperatingSystem;
