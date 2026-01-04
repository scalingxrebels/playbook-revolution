import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

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
  specialties: string[];
}

const teamMembers: TeamMember[] = [
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
    specialties: ['AI Agents', 'Automation', 'Growth']
  },
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
            <div key={member.id} className="relative group">
              <div className="border-2 bg-card p-6 h-full transition-all duration-300 border-border hover:border-foreground/30 shadow-brutal-sm hover:-translate-y-1">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="aspect-square rounded-full overflow-hidden border-4 border-foreground/10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 text-center">
                  <h3 className="font-display text-2xl font-bold">{member.name}</h3>
                  <Badge variant="secondary">
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
