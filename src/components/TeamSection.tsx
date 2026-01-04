import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Sparkles, Zap, Target, Bot, Rocket } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: {
    en: string;
    de: string;
  };
  tagline: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  image: string;
  isHighlighted?: boolean;
  specialties: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 'michel',
    name: 'Michel Lason',
    role: { en: 'Founder & CEO', de: 'Gründer & CEO' },
    tagline: { en: 'Strategy. Scaling. Impact.', de: 'Strategy. Scaling. Impact.' },
    description: {
      en: 'Ex-Management Consultant, SaaS-VP, Scaling Executive, Investor & Captain.',
      de: 'Ex-Managementberater, SaaS-VP, Scaling Executive, Investor & Captain.'
    },
    image: '/images/team-michel.png',
    specialties: ['Strategy', 'Scaling', 'Leadership']
  },
  {
    id: 'alban',
    name: 'Alban Halili',
    role: { en: 'AI Expert', de: 'AI Expert' },
    tagline: { en: 'Growth. AI Solutions. Automation.', de: 'Growth. AI Solutions. Automation.' },
    description: {
      en: 'Sales- & Marketing-Guru, Innovator, King of Agents & Automations.',
      de: 'Sales- & Marketing-Guru, Innovator, King of Agents & Automations.'
    },
    image: '/images/team-alban.png',
    isHighlighted: true,
    specialties: ['AI Agents', 'Automation', 'Multi-Agent Systems']
  },
  {
    id: 'florian',
    name: 'Florian Metzger',
    role: { en: 'RevOps Lead', de: 'RevOps Lead' },
    tagline: { en: 'RevOps. GTM. Venture Architect.', de: 'RevOps. GTM. Venture Architect.' },
    description: {
      en: 'Growth-Hacker and GTM-Architect for SaaS & B2C with Co-Founder-Mindset.',
      de: 'Growth-Hacker und GTM-Architekt für SaaS & B2C mit Co-Founder-Mindset.'
    },
    image: '/images/team-florian.png',
    specialties: ['RevOps', 'GTM', 'Growth']
  }
];

const TeamSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-accent text-accent">
            {language === 'de' ? 'Das Team' : 'The Team'}
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl italic">
            {language === 'de' 
              ? 'Wir sind keine Berater.' 
              : "We're not consultants."
            }
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'de'
              ? 'Wir sind wandelnde Inflection Points.'
              : "We're walking Inflection Points."
            }
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`relative group ${
                member.isHighlighted 
                  ? 'md:-mt-8 md:mb-8' 
                  : ''
              }`}
            >
              {/* Highlighted Badge for Alban */}
              {member.isHighlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <Badge className="bg-accent text-accent-foreground shadow-lg animate-pulse flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    AI EXPERT
                    <Sparkles className="w-3 h-3" />
                  </Badge>
                </div>
              )}
              
              <div className={`
                border-2 bg-card p-6 h-full transition-all duration-300
                ${member.isHighlighted 
                  ? 'border-accent shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_50px_rgba(234,179,8,0.5)]' 
                  : 'border-border hover:border-foreground/30 shadow-brutal-sm hover:-translate-y-1'
                }
              `}>
                {/* Image */}
                <div className="relative mb-6">
                  <div className={`
                    aspect-square rounded-full overflow-hidden border-4
                    ${member.isHighlighted ? 'border-accent' : 'border-foreground/10'}
                  `}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Icon for Alban */}
                  {member.isHighlighted && (
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <Bot className="w-6 h-6 text-accent-foreground" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3 text-center">
                  <h3 className="font-display text-2xl font-bold">{member.name}</h3>
                  <Badge variant={member.isHighlighted ? 'default' : 'secondary'}>
                    {member.role[language as 'en' | 'de']}
                  </Badge>
                  <p className="text-accent font-medium italic">
                    {member.tagline[language as 'en' | 'de']}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.description[language as 'en' | 'de']}
                  </p>
                  
                  {/* Specialties */}
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {member.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alban Highlight Section */}
        <div className="border-2 border-accent bg-gradient-to-br from-accent/10 to-accent/5 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent text-accent-foreground">
                <Sparkles className="w-3 h-3 mr-1" />
                {language === 'de' ? 'AI-Spezialist im Fokus' : 'Spotlight: AI Specialist'}
              </Badge>
              
              <h3 className="font-display text-3xl md:text-4xl italic">
                Alban Halili
              </h3>
              
              <p className="text-xl text-accent font-semibold">
                King of Agents & Automations
              </p>
              
              <p className="text-muted-foreground">
                {language === 'de'
                  ? 'Alban ist unser AI-Experte und bringt Sales, Marketing und Operations mit AI-Agents auf das nächste Level. Seine Multi-Agentic Systems automatisieren komplexe Workflows und schaffen messbaren Impact ab Tag 1.'
                  : 'Alban is our AI expert who elevates Sales, Marketing, and Operations with AI-Agents to the next level. His Multi-Agentic Systems automate complex workflows and deliver measurable impact from day 1.'
                }
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-accent" />
                  <span className="text-sm">AI Agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="text-sm">Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  <span className="text-sm">Growth Hacking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-accent" />
                  <span className="text-sm">Multi-Agent Systems</span>
                </div>
              </div>
              
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-brutal-sm"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {language === 'de' ? 'AI-Session buchen' : 'Book AI Session'}
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                <img
                  src="/images/team-alban.png"
                  alt="Alban Halili - AI Expert"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-accent shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scaling Rebels Network */}
        <div className="mt-16 text-center space-y-8">
          <div className="space-y-4">
            <h3 className="font-display text-2xl md:text-3xl italic">
              Scaling Rebels Network
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'de'
                ? 'Unser Expert:innen-Netzwerk mit Expertise in SaaS, Deep Tech, Sales, Marketing und mehr.'
                : 'Our expert network with expertise in SaaS, Deep Tech, Sales, Marketing, and more.'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent">+80</div>
              <div className="text-sm text-muted-foreground mt-1">
                {language === 'de' ? 'Unternehmen' : 'Companies'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent">140+</div>
              <div className="text-sm text-muted-foreground mt-1">
                {language === 'de' ? 'Mandate' : 'Mandates'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground mt-1">
                {language === 'de' ? 'Fokus auf Impact' : 'Focus on Impact'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
