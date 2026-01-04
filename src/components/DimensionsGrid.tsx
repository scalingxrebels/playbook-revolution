import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Target, Package, Settings, DollarSign, Users, Compass, Heart, Building,
  Brain, Zap, Network, TrendingUp, ChevronDown, ChevronUp
} from 'lucide-react';

const DimensionsGrid = () => {
  const { t } = useLanguage();
  const [selectedCapability, setSelectedCapability] = useState<number | null>(null);
  const [expandedDimension, setExpandedDimension] = useState<string | null>(null);

  const capabilities = [
    { id: 1, name: 'C₁', label: t('capability1'), icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 2, name: 'C₂', label: t('capability2'), icon: Zap, color: 'from-purple-500 to-pink-500' },
    { id: 3, name: 'C₃', label: t('capability3'), icon: Network, color: 'from-orange-500 to-amber-500' },
    { id: 4, name: 'C₄', label: t('capability4'), icon: TrendingUp, color: 'from-emerald-500 to-teal-500' },
  ];

  const dimensions = [
    {
      id: 'gtm',
      name: 'GTM/Revenue',
      fullName: 'Go-to-Market & Revenue',
      icon: Target,
      color: 'bg-blue-500/20 border-blue-500/30',
      applications: {
        1: { 
          title: 'AI-Demand-Sensing', 
          desc: 'Real-time Signale erkennen bevor Wettbewerb reagiert',
          metric: '3x schnellere Marktreaktion'
        },
        2: { 
          title: 'Autonomous Lead Scoring', 
          desc: 'Self-improving ML-Modelle für Qualifizierung',
          metric: '70% höhere Conversion'
        },
        3: { 
          title: 'Cross-Channel Orchestration', 
          desc: 'AI koordiniert alle Touchpoints autonom',
          metric: '50% weniger CAC'
        },
        4: { 
          title: 'Dynamic Pricing Engine', 
          desc: 'Echtzeit-Preisoptimierung basierend auf Marktsignalen',
          metric: '25% Margin-Steigerung'
        },
      }
    },
    {
      id: 'product',
      name: 'Product',
      fullName: 'Product Development',
      icon: Package,
      color: 'bg-purple-500/20 border-purple-500/30',
      applications: {
        1: { 
          title: 'User Behavior Intelligence', 
          desc: 'Pattern-Erkennung für Feature-Priorisierung',
          metric: '2x schnellere Roadmap-Decisions'
        },
        2: { 
          title: 'AI-Pair Programming', 
          desc: 'Codex/Copilot Integration für 10x Output',
          metric: '400% Dev-Produktivität'
        },
        3: { 
          title: 'Cross-Team Sync', 
          desc: 'Automatische Dependency-Erkennung',
          metric: '60% weniger Blocking'
        },
        4: { 
          title: 'Predictive Roadmapping', 
          desc: 'AI simuliert Feature-Impact vor Launch',
          metric: '80% bessere Feature-Adoption'
        },
      }
    },
    {
      id: 'operations',
      name: 'Operations',
      fullName: 'Business Operations',
      icon: Settings,
      color: 'bg-orange-500/20 border-orange-500/30',
      applications: {
        1: { 
          title: 'Process Mining AI', 
          desc: 'Automatische Bottleneck-Identifikation',
          metric: '40% Effizienzsteigerung'
        },
        2: { 
          title: 'Intelligent Automation', 
          desc: 'Self-healing Workflows mit AI-Agents',
          metric: '90% weniger manuelle Tasks'
        },
        3: { 
          title: 'Unified Data Platform', 
          desc: 'Single Source of Truth für alle Teams',
          metric: '75% schnellere Decisions'
        },
        4: { 
          title: 'Predictive Maintenance', 
          desc: 'AI-basierte Ressourcen-Planung',
          metric: '50% weniger Ausfälle'
        },
      }
    },
    {
      id: 'finance',
      name: 'Finance',
      fullName: 'Finance & Controlling',
      icon: DollarSign,
      color: 'bg-emerald-500/20 border-emerald-500/30',
      applications: {
        1: { 
          title: 'Revenue Intelligence', 
          desc: 'Echtzeit-Umsatz-Prognosen mit ML',
          metric: '95% Forecast-Accuracy'
        },
        2: { 
          title: 'Autonomous Bookkeeping', 
          desc: 'AI-gesteuerte Buchung & Reconciliation',
          metric: '80% weniger Zeitaufwand'
        },
        3: { 
          title: 'Cross-Entity Consolidation', 
          desc: 'Automatische Multi-Company-Reports',
          metric: 'Real-time Reporting'
        },
        4: { 
          title: 'Scenario Simulation', 
          desc: 'Monte-Carlo für Finanzplanung',
          metric: '3x bessere Kapitalallokation'
        },
      }
    },
    {
      id: 'talent',
      name: 'Talent',
      fullName: 'Talent & People',
      icon: Users,
      color: 'bg-pink-500/20 border-pink-500/30',
      applications: {
        1: { 
          title: 'Skills Intelligence', 
          desc: 'AI-basierte Kompetenz-Gaps erkennen',
          metric: '50% bessere Hiring-Decisions'
        },
        2: { 
          title: 'AI-Recruiting Pipeline', 
          desc: 'Autonomes Sourcing & Screening',
          metric: '60% schnellere Time-to-Hire'
        },
        3: { 
          title: 'Cross-Functional Matching', 
          desc: 'Optimale Team-Zusammenstellung per AI',
          metric: '40% höhere Team-Performance'
        },
        4: { 
          title: 'Retention Predictor', 
          desc: 'Frühwarnsystem für Fluktuation',
          metric: '70% Churn-Reduktion'
        },
      }
    },
    {
      id: 'customer-success',
      name: 'Customer Success',
      fullName: 'Customer Success & Retention',
      icon: Heart,
      color: 'bg-red-500/20 border-red-500/30',
      applications: {
        1: { 
          title: 'Health Score Intelligence', 
          desc: 'Predictive Customer Health Monitoring',
          metric: '-40% Churn Risk'
        },
        2: { 
          title: 'Automated Onboarding', 
          desc: 'AI-gesteuerte Onboarding-Journeys',
          metric: '2x Onboarding Speed'
        },
        3: { 
          title: 'Proactive Intervention', 
          desc: 'AI erkennt At-Risk Accounts automatisch',
          metric: '+15-30pp NRR'
        },
        4: { 
          title: 'Expansion Intelligence', 
          desc: 'AI identifiziert Upsell-Opportunitäten',
          metric: '3x Expansion Revenue'
        },
      }
    },
    {
      id: 'strategy',
      name: 'Strategy',
      fullName: 'Strategy & Planning',
      icon: Compass,
      color: 'bg-cyan-500/20 border-cyan-500/30',
      applications: {
        1: { 
          title: 'Competitive Intelligence', 
          desc: 'Real-time Wettbewerbsanalyse',
          metric: '24/7 Market Monitoring'
        },
        2: { 
          title: 'AI Strategy Co-Pilot', 
          desc: 'Decision Support für C-Level',
          metric: '5x schnellere Strategiezyklen'
        },
        3: { 
          title: 'Cross-Unit Alignment', 
          desc: 'Automatische OKR-Kaskadierung',
          metric: '90% Strategy Execution'
        },
        4: { 
          title: 'Future Scenario Modeling', 
          desc: 'Multi-Path Zukunftsszenarien',
          metric: 'Antifragile Strategien'
        },
      }
    },
    {
      id: 'governance',
      name: 'Governance',
      fullName: 'Board & Governance',
      icon: Building,
      color: 'bg-slate-500/20 border-slate-500/30',
      applications: {
        1: { 
          title: 'Board Intelligence', 
          desc: 'AI-powered Board Dashboards',
          metric: '2x Strategic Agility'
        },
        2: { 
          title: 'Risk Detection', 
          desc: 'Predictive Risk Scoring',
          metric: '50% Risk Reduction'
        },
        3: { 
          title: 'Compliance Automation', 
          desc: 'Regulatory Monitoring & Reporting',
          metric: '-60% Compliance Overhead'
        },
        4: { 
          title: 'Investor Intelligence', 
          desc: 'AI-gesteuerte Investor Relations',
          metric: '+20% Investor Confidence'
        },
      }
    },
  ];

  const getApplicationForDimension = (dimension: typeof dimensions[0], capId: number) => {
    return dimension.applications[capId as keyof typeof dimension.applications];
  };

  return (
    <section id="dimensions" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Network className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">8 Dimensions × 4 Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Das AI-Native Transformation Grid
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wie die 4 Capabilities auf alle 8 Unternehmensdimensionen angewendet werden – 
            für systematische, messbare Transformation
          </p>
        </div>

        {/* Capability Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCapability(null)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              selectedCapability === null
                ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25'
                : 'bg-card/50 border border-border hover:border-primary/50 text-foreground'
            }`}
          >
            Alle Capabilities
          </button>
          {capabilities.map((cap) => (
            <button
              key={cap.id}
              onClick={() => setSelectedCapability(cap.id === selectedCapability ? null : cap.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCapability === cap.id
                  ? `bg-gradient-to-r ${cap.color} text-white shadow-lg`
                  : 'bg-card/50 border border-border hover:border-primary/50 text-foreground'
              }`}
            >
              <cap.icon className="w-4 h-4" />
              <span>{cap.name}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dimensions.map((dimension) => {
            const DimensionIcon = dimension.icon;
            const isExpanded = expandedDimension === dimension.id;
            
            return (
              <div
                key={dimension.id}
                className={`group relative rounded-2xl border ${dimension.color} backdrop-blur-sm transition-all duration-500 ${
                  isExpanded ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Dimension Header */}
                <button
                  onClick={() => setExpandedDimension(isExpanded ? null : dimension.id)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl ${dimension.color.replace('/20', '/30').replace('/30', '/40')}`}>
                        <DimensionIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{dimension.name}</h3>
                        <p className="text-xs text-muted-foreground">{dimension.fullName}</p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>

                  {/* Mini Preview (when collapsed) */}
                  {!isExpanded && (
                    <div className="space-y-2">
                      {capabilities
                        .filter(cap => selectedCapability === null || cap.id === selectedCapability)
                        .slice(0, selectedCapability ? 1 : 2)
                        .map((cap) => {
                          const app = getApplicationForDimension(dimension, cap.id);
                          return (
                            <div key={cap.id} className="flex items-center gap-2 text-sm">
                              <span className={`w-6 h-6 rounded-full bg-gradient-to-r ${cap.color} flex items-center justify-center text-white text-xs font-bold`}>
                                {cap.id}
                              </span>
                              <span className="text-muted-foreground truncate">{app.title}</span>
                            </div>
                          );
                        })}
                      {selectedCapability === null && (
                        <p className="text-xs text-muted-foreground">+2 mehr...</p>
                      )}
                    </div>
                  )}
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 space-y-4 animate-fade-in">
                    {capabilities
                      .filter(cap => selectedCapability === null || cap.id === selectedCapability)
                      .map((cap) => {
                        const app = getApplicationForDimension(dimension, cap.id);
                        return (
                          <div
                            key={cap.id}
                            className={`p-4 rounded-xl bg-gradient-to-r ${cap.color} bg-opacity-10 border border-white/10`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`p-2 rounded-lg bg-gradient-to-r ${cap.color} text-white`}>
                                <cap.icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h4 className="font-bold text-sm">{cap.name}: {app.title}</h4>
                                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-primary font-medium">
                                    {app.metric}
                                  </span>
                                </div>
                                <p className="text-xs text-muted-foreground">{app.desc}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Matrix Summary */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-card/80 to-card/40 border border-border/50 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                32
              </div>
              <p className="text-muted-foreground">Konkrete AI-Anwendungen</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                8×4
              </div>
              <p className="text-muted-foreground">Dimensionen × Capabilities</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-muted-foreground">Unternehmensabdeckung</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Welche Dimensionen haben bei Ihnen die größten Bottlenecks?
          </p>
          <a
            href="#capabilities"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            <Brain className="w-5 h-5" />
            Jetzt Bottleneck-Diagnose starten
          </a>
        </div>
      </div>
    </section>
  );
};

export default DimensionsGrid;
