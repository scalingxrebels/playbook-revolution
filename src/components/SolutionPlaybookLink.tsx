import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface SolutionPlaybookLinkProps {
  playbooks: string[];
  maxVisible?: number;
  className?: string;
}

// Map playbook IDs to display names
const playbookDisplayNames: Record<string, { en: string; de: string }> = {
  'board-governance-ai': { en: 'Board Governance', de: 'Board Governance' },
  'ai-capital-strategy': { en: 'Capital Strategy', de: 'Capital Strategy' },
  'ai-native-gtm-sales-led': { en: 'AI-Native GTM', de: 'AI-Native GTM' },
  'ops-automation-foundation': { en: 'Ops Automation', de: 'Ops Automation' },
  'ai-dev-velocity': { en: 'Dev Velocity', de: 'Dev Velocity' },
};

const SolutionPlaybookLink: React.FC<SolutionPlaybookLinkProps> = ({
  playbooks,
  maxVisible = 3,
  className = ''
}) => {
  const { language } = useLanguage();
  const visiblePlaybooks = playbooks.slice(0, maxVisible);
  const remainingCount = playbooks.length - maxVisible;

  if (playbooks.length === 0) return null;

  return (
    <div className={`flex gap-2 flex-wrap ${className}`}>
      <span className="text-xs text-muted-foreground self-center">
        {language === 'de' ? 'Playbooks:' : 'Playbooks:'}
      </span>
      {visiblePlaybooks.map((pb) => {
        const displayName = playbookDisplayNames[pb]?.[language] || pb;
        return (
          <Link 
            key={pb} 
            to={`/playbooks?highlight=${pb}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Badge 
              variant="outline"
              className="bg-primary/5 border-primary/20 hover:bg-primary/10 hover:border-primary/40 text-xs transition-colors cursor-pointer"
            >
              {displayName}
            </Badge>
          </Link>
        );
      })}
      {remainingCount > 0 && (
        <Link to="/playbooks">
          <Badge 
            variant="outline" 
            className="bg-muted/50 hover:bg-muted text-xs cursor-pointer"
          >
            +{remainingCount}
          </Badge>
        </Link>
      )}
    </div>
  );
};

export default SolutionPlaybookLink;
