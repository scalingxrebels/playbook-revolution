import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { icons, CheckCircle2, XCircle, Users, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { PlaybookWhoThisIsFor, BilingualText } from '@/data/playbooks/types';

interface Props {
  data: PlaybookWhoThisIsFor;
}

const PlaybookPersonasSection: React.FC<Props> = ({ data }) => {
  const { language } = useLanguage();
  const t = (text: BilingualText) => text[language];
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getIcon = (name: string) => {
    const Icon = icons[name as keyof typeof icons];
    return Icon || icons.User;
  };

  // Split personas into "Good Fit" and "Not For" based on index (first half vs second half)
  // Or we can show all as "Good Fit" personas
  const goodFitPersonas = data.personas.slice(0, Math.ceil(data.personas.length / 2));
  const notForPersonas = data.personas.slice(Math.ceil(data.personas.length / 2));

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wide">
              {language === 'de' ? 'Zielgruppe' : 'Target Audience'}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t(data.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(data.subtitle)}
          </p>
        </div>

        {/* ICP Statement */}
        <div className={`text-center mb-12 p-6 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 rounded-xl transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Target className="w-6 h-6 text-primary mx-auto mb-3" />
          <p className="text-lg font-medium">{t(data.icp)}</p>
        </div>

        {/* Two-Column Good Fit / Not For Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Good Fit Column */}
          <Card className={`border-2 border-green-500/30 bg-gradient-to-br from-green-500/5 to-emerald-500/5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-green-700 dark:text-green-400">
                    {language === 'de' ? 'Ideal für' : 'Perfect For'}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {language === 'de' ? 'Beste Ergebnisse mit' : 'Best results with'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {goodFitPersonas.map((persona, idx) => {
                  const Icon = getIcon(persona.icon);
                  return (
                    <div 
                      key={idx} 
                      className={`flex items-start gap-3 p-4 rounded-lg bg-background/80 border border-border/50 transition-all duration-500 hover:border-green-500/30 hover:shadow-md ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: `${300 + idx * 100}ms` }}
                    >
                      <div className={`w-10 h-10 rounded-lg ${persona.color} flex items-center justify-center shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-sm">{t(persona.role)}</h4>
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{t(persona.pain)}</p>
                        <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-700 dark:text-green-400">
                          {t(persona.outcome)}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Not For Column */}
          <Card className={`border-2 border-red-500/30 bg-gradient-to-br from-red-500/5 to-rose-500/5 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-red-700 dark:text-red-400">
                    {language === 'de' ? 'Nicht geeignet für' : 'Not For'}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {language === 'de' ? 'Andere Ansätze empfohlen' : 'Other approaches recommended'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {notForPersonas.length > 0 ? notForPersonas.map((persona, idx) => {
                  const Icon = getIcon(persona.icon);
                  return (
                    <div 
                      key={idx} 
                      className={`flex items-start gap-3 p-4 rounded-lg bg-background/80 border border-border/50 transition-all duration-500 hover:border-red-500/30 hover:shadow-md ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                      style={{ transitionDelay: `${400 + idx * 100}ms` }}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0`}>
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-sm text-muted-foreground">{t(persona.role)}</h4>
                          <XCircle className="w-4 h-4 text-red-500" />
                        </div>
                        <p className="text-xs text-muted-foreground">{t(persona.pain)}</p>
                      </div>
                    </div>
                  );
                }) : (
                  // Fallback if no "not for" personas defined
                  <div className="space-y-3">
                    {[
                      { de: 'Frühe Startups ohne Product-Market-Fit', en: 'Early startups without product-market fit' },
                      { de: 'Unternehmen ohne Veränderungsbereitschaft', en: 'Organizations resistant to change' },
                      { de: 'Teams ohne dedizierte Ressourcen', en: 'Teams without dedicated resources' },
                    ].map((item, idx) => (
                      <div 
                        key={idx}
                        className={`flex items-center gap-3 p-3 rounded-lg bg-background/80 border border-border/50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                        style={{ transitionDelay: `${400 + idx * 100}ms` }}
                      >
                        <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                        <span className="text-sm text-muted-foreground">{language === 'de' ? item.de : item.en}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlaybookPersonasSection;
