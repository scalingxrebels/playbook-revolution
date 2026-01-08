import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building, Building2, HelpCircle } from 'lucide-react';

interface Branch {
  id: string;
  labelEn: string;
  labelDe: string;
  descriptionEn: string;
  descriptionDe: string;
  icon: React.ElementType;
  options: { id: string; labelEn: string; labelDe: string }[];
}

const branches: Branch[] = [
  {
    id: 'single',
    labelEn: 'Transform 1 Company',
    labelDe: '1 Unternehmen transformieren',
    descriptionEn: 'Individual solutions for your company',
    descriptionDe: 'Individuelle Lösungen für dein Unternehmen',
    icon: Building,
    options: [
      { id: 'advisory', labelEn: 'Advisory', labelDe: 'Advisory' },
      { id: 'decision-reports', labelEn: 'Decision Reports', labelDe: 'Decision Reports' },
      { id: 'transformation', labelEn: 'Transformation', labelDe: 'Transformation' },
      { id: 'training', labelEn: 'Training', labelDe: 'Training' },
      { id: 'bespoke-strategy', labelEn: 'Bespoke Strategy', labelDe: 'Bespoke Strategy' },
    ]
  },
  {
    id: 'portfolio',
    labelEn: 'Transform 5-30 Companies',
    labelDe: '5-30 Unternehmen transformieren',
    descriptionEn: 'Portfolio-wide transformation',
    descriptionDe: 'Portfolio-weite Transformation',
    icon: Building2,
    options: [
      { id: 'portfolio-solutions', labelEn: 'Portfolio Solutions', labelDe: 'Portfolio Solutions' },
    ]
  }
];

const SolutionDecisionTree: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 noise opacity-20" />
      
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              {language === 'de' ? 'Nicht sicher?' : 'Not Sure?'}
            </span>
          </div>
          <h2 className="font-display text-display-sm text-foreground mb-4">
            {language === 'de' ? 'Wo soll ich starten?' : 'Where to Start?'}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {language === 'de' 
              ? 'Zwei Fragen helfen dir, die richtige Kategorie zu finden.'
              : 'Two questions to find the right category.'
            }
          </p>
        </div>

        {/* Decision Branches */}
        <div className="grid md:grid-cols-2 gap-8">
          {branches.map((branch) => {
            const Icon = branch.icon;
            const isHovered = hoveredBranch === branch.id;
            
            return (
              <div 
                key={branch.id}
                onMouseEnter={() => setHoveredBranch(branch.id)}
                onMouseLeave={() => setHoveredBranch(null)}
                className={`p-8 bg-card/50 backdrop-blur-sm border-2 rounded-lg
                           transition-all duration-300 cursor-pointer
                           ${isHovered 
                             ? 'border-accent shadow-brutal -translate-x-0.5 -translate-y-0.5' 
                             : 'border-border hover:border-accent/50'
                           }`}
              >
                {/* Arrow Animation */}
                <div className={`text-2xl mb-4 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}>
                  <ArrowRight className="w-6 h-6 text-accent" />
                </div>

                {/* Icon + Label */}
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-lg text-foreground">
                    {language === 'de' ? branch.labelDe : branch.labelEn}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">
                  {language === 'de' ? branch.descriptionDe : branch.descriptionEn}
                </p>

                {/* Options */}
                <div className="flex flex-wrap gap-2">
                  {branch.options.map((option) => (
                    <Badge 
                      key={option.id}
                      className="bg-accent/10 border border-accent/20 hover:bg-accent/20 
                                 hover:border-accent cursor-pointer transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/solutions/${option.id}`);
                      }}
                    >
                      {language === 'de' ? option.labelDe : option.labelEn}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionDecisionTree;
