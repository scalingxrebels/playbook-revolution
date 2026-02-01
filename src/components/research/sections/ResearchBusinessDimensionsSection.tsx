import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BusinessDimensionsSectionData } from '@/data/research/types';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { 
  Grid3X3, 
  ShoppingCart, 
  Package, 
  HeartHandshake, 
  Cog, 
  Landmark, 
  UserCog, 
  Server, 
  Scale,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

interface ResearchBusinessDimensionsSectionProps {
  data: BusinessDimensionsSectionData;
}

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  Package,
  HeartHandshake,
  Cog,
  Landmark,
  UserCog,
  Server,
  Scale,
};

const colorClasses: Record<number, { border: string; bg: string; text: string; icon: string }> = {
  0: { border: 'border-violet-500/30', bg: 'bg-violet-500/10', text: 'text-violet-400', icon: 'text-violet-400' },
  1: { border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-400', icon: 'text-blue-400' },
  2: { border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400', icon: 'text-emerald-400' },
  3: { border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-400', icon: 'text-amber-400' },
  4: { border: 'border-pink-500/30', bg: 'bg-pink-500/10', text: 'text-pink-400', icon: 'text-pink-400' },
  5: { border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-400', icon: 'text-cyan-400' },
  6: { border: 'border-indigo-500/30', bg: 'bg-indigo-500/10', text: 'text-indigo-400', icon: 'text-indigo-400' },
  7: { border: 'border-orange-500/30', bg: 'bg-orange-500/10', text: 'text-orange-400', icon: 'text-orange-400' },
};

const ResearchBusinessDimensionsSection: React.FC<ResearchBusinessDimensionsSectionProps> = ({ data }) => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10 text-primary">
            <Grid3X3 className="w-4 h-4 mr-2" />
            Framework
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {data.headline[language]}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {data.subheadline[language]}
          </p>
        </div>

        {/* Intro Paragraphs */}
        <div className={`max-w-3xl mx-auto mb-12 space-y-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {data.intro.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed">
              {paragraph[language]}
            </p>
          ))}
        </div>

        {/* 8 Dimensions Grid - 2x4 on desktop, 2x2 on tablet, 1 col on mobile */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {data.dimensions.map((dimension, index) => {
            const IconComponent = iconMap[dimension.icon] || Package;
            const colors = colorClasses[index % 8];
            
            return (
              <Card 
                key={dimension.id}
                className={`p-5 bg-card/50 backdrop-blur-sm border ${colors.border} hover:shadow-lg transition-all duration-300`}
                style={{ transitionDelay: `${index * 50 + 200}ms` }}
              >
                {/* Header with ID and Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${colors.bg}`}>
                    <IconComponent className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <div>
                    <span className={`text-sm font-bold ${colors.text}`}>{dimension.id}</span>
                    <h3 className="font-semibold text-foreground text-sm">
                      {dimension.name[language]}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-2">
                  {dimension.description[language]}
                </p>

                {/* Metric */}
                <p className="text-xs text-muted-foreground/70">
                  <span className="font-medium">{language === 'en' ? 'Metrics:' : 'Metriken:'}</span> {dimension.metric[language]}
                </p>

                {/* Example Bottleneck (only for SST) */}
                {dimension.exampleBottleneck && (
                  <div className={`mt-3 pt-3 border-t border-border/50`}>
                    <p className="text-xs text-muted-foreground italic">
                      {dimension.exampleBottleneck[language]}
                    </p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Matrix Example (Optional) */}
        {data.matrixExample && (
          <div className={`max-w-2xl mx-auto mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20">
              <h3 className="font-semibold text-foreground mb-3">
                {language === 'en' ? 'Example:' : 'Beispiel:'} {data.matrixExample.capability} × {data.matrixExample.dimension}
              </h3>
              <ul className="space-y-2 mb-4">
                {data.matrixExample.questions.map((question, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {question[language]}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-primary">
                {data.matrixExample.implication[language]}
              </p>
            </Card>
          </div>
        )}

        {/* Callout Box */}
        <div className={`max-w-3xl mx-auto mb-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="p-6 bg-primary/5 border-primary/30 border-l-4 border-l-primary">
            <div className="flex gap-4">
              <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  {data.callout.title[language]}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {data.callout.content[language]}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Cross-Link (Optional) */}
        {data.crossLink && (
          <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-muted-foreground mb-4">
              {data.crossLink.text[language]}
            </p>
            <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Link to={data.crossLink.href}>
                {language === 'en' ? 'Learn More' : 'Mehr erfahren'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResearchBusinessDimensionsSection;
