import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { RoadmapPhase, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: {
    title: BilingualText;
    subtitle: BilingualText;
    phases: RoadmapPhase[];
  };
}

const PlaybookRoadmapSection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Phase-specific gradient colors
  const phaseGradients = [
    { header: 'from-violet-500 to-purple-600', bg: 'bg-violet-500/5', border: 'border-violet-500/30' },
    { header: 'from-blue-500 to-cyan-500', bg: 'bg-blue-500/5', border: 'border-blue-500/30' },
    { header: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-500/5', border: 'border-emerald-500/30' },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wide">
              {language === 'de' ? '90-Tage Roadmap' : '90-Day Roadmap'}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t(data.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(data.subtitle)}
          </p>
        </div>

        {/* Timeline connector (desktop only) */}
        <div className="hidden md:block relative mb-8">
          <div className={`absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500 rounded-full transition-all duration-1000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} 
               style={{ transformOrigin: 'left' }} />
        </div>

        {/* Phase Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.phases.map((phase, index) => {
            const colors = phaseGradients[index % phaseGradients.length];
            
            return (
              <Card 
                key={phase.phase} 
                className={`border-2 ${colors.border} ${colors.bg} relative overflow-hidden backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Gradient Header Bar */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${colors.header}`} />
                
                <CardContent className="p-6 pt-8">
                  {/* Phase Number & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.header} text-white flex items-center justify-center font-bold text-lg shadow-lg`}>
                      {phase.phase}
                    </span>
                    <div>
                      <h3 className="font-bold text-lg">{t(phase.title)}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {t(phase.timeline)}
                      </div>
                    </div>
                  </div>

                  {/* Focus Description */}
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {t(phase.focus)}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-3">
                    <Badge variant="outline" className="text-xs">
                      {language === 'de' ? 'Ergebnisse' : 'Deliverables'}
                    </Badge>
                    <ul className="space-y-2">
                      {phase.deliverables.map((del, i) => (
                        <li 
                          key={i} 
                          className={`flex items-start gap-2 text-sm transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                          style={{ transitionDelay: `${400 + index * 150 + i * 80}ms` }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{t(del)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlaybookRoadmapSection;
