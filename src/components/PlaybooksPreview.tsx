import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, Target, Zap, Users, TrendingUp, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlaybooksPreview: React.FC = () => {
  const { language } = useLanguage();

  const featuredPlaybooks = [
    {
      id: 1,
      title: { en: 'AI-Native GTM: Product-Led', de: 'AI-Native GTM: Product-Led' },
      description: { 
        en: 'Build viral loops and self-serve funnels powered by AI. From first touch to conversion in minutes.',
        de: 'Erstelle virale Loops und Self-Serve Funnels mit KI. Vom Erstkontakt zur Conversion in Minuten.'
      },
      dimension: 'GTM',
      capability: 'C₂',
      stage: 'Series A',
      timeline: '8 weeks',
      icon: TrendingUp,
      gradient: 'from-primary to-accent',
    },
    {
      id: 2,
      title: { en: 'AI-Native Operations', de: 'AI-Native Operations' },
      description: { 
        en: 'Automate 80% of repetitive operations tasks. Scale without linear headcount growth.',
        de: 'Automatisiere 80% der repetitiven Ops-Aufgaben. Skaliere ohne lineares Headcount-Wachstum.'
      },
      dimension: 'Operations',
      capability: 'C₃',
      stage: 'Series B',
      timeline: '12 weeks',
      icon: Cog,
      gradient: 'from-accent to-primary',
    },
    {
      id: 3,
      title: { en: 'AI-Native Talent Acquisition', de: 'AI-Native Recruiting' },
      description: { 
        en: 'Reduce time-to-hire by 70% with AI-powered sourcing, screening, and scheduling.',
        de: 'Reduziere Time-to-Hire um 70% mit KI-gestütztem Sourcing, Screening und Scheduling.'
      },
      dimension: 'Talent',
      capability: 'C₂',
      stage: 'Seed',
      timeline: '6 weeks',
      icon: Users,
      gradient: 'from-neon-green to-primary',
    },
    {
      id: 4,
      title: { en: 'AI-Native Revenue Ops', de: 'AI-Native Revenue Ops' },
      description: { 
        en: 'Unified revenue intelligence across sales, marketing, and CS. Real-time insights at scale.',
        de: 'Unified Revenue Intelligence über Sales, Marketing und CS. Echtzeit-Insights at Scale.'
      },
      dimension: 'Finance',
      capability: 'C₃',
      stage: 'Series A',
      timeline: '10 weeks',
      icon: Zap,
      gradient: 'from-primary to-neon-green',
    },
    {
      id: 5,
      title: { en: 'AI-Native Customer Success', de: 'AI-Native Customer Success' },
      description: { 
        en: 'Predict churn before it happens. Proactive engagement that scales with your customer base.',
        de: 'Sage Churn vorher, bevor es passiert. Proaktives Engagement, das mit deiner Kundenbasis skaliert.'
      },
      dimension: 'Customer Success',
      capability: 'C₂',
      stage: 'Series B',
      timeline: '8 weeks',
      icon: Target,
      gradient: 'from-accent to-neon-green',
    },
    {
      id: 6,
      title: { en: 'AI-Native Tech Architecture', de: 'AI-Native Tech-Architektur' },
      description: { 
        en: 'Design AI-first systems from day one. Avoid costly rewrites and technical debt.',
        de: 'Designe AI-First Systeme von Tag 1. Vermeide kostspielige Rewrites und Technical Debt.'
      },
      dimension: 'Tech',
      capability: 'C₁',
      stage: 'Seed',
      timeline: '4 weeks',
      icon: Clock,
      gradient: 'from-neon-green to-accent',
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            {language === 'en' ? '20+ Battle-Tested Playbooks' : '20+ Bewährte Playbooks'}
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-serif italic mb-6">
            {language === 'en' ? 'Scaling' : 'Scaling'}{' '}
            <span className="text-gradient">Playbooks</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Step-by-step blueprints from companies that scaled to €100M+ ARR in record time.'
              : 'Schritt-für-Schritt Blueprints von Unternehmen, die in Rekordzeit auf €100M+ ARR skaliert haben.'
            }
          </p>
        </div>

        {/* Playbook Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredPlaybooks.map((playbook, index) => {
            const Icon = playbook.icon;
            
            return (
              <div
                key={playbook.id}
                className="group relative bg-card border-2 border-border hover:border-primary/50 shadow-brutal-sm hover:shadow-brutal transition-all duration-300 p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${playbook.gradient}`} />
                
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-primary rounded flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">{playbook.dimension}</Badge>
                  <Badge variant="outline" className="text-xs">{playbook.capability}</Badge>
                  <Badge variant="outline" className="text-xs border-accent/50 text-accent">{playbook.stage}</Badge>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {playbook.title[language as 'en' | 'de']}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {playbook.description[language as 'en' | 'de']}
                </p>
                
                {/* Timeline */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{playbook.timeline}</span>
                </div>
                
                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/playbooks">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground font-bold shadow-brutal hover-brutal gap-2"
            >
              {language === 'en' ? 'View All Playbooks' : 'Alle Playbooks ansehen'}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlaybooksPreview;
