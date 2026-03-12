import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import SolutionTileCard from '@/components/solutions/SolutionTileCard';
import CaseCard from '@/components/cases/CaseCard';
import InsightArticleCard from '@/components/insights/InsightArticleCard';
import { cn } from '@/lib/utils';

export type PreviewMode = 'card' | 'landing';

interface ContentPreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: PreviewMode;
  contentType: 'solution' | 'playbook' | 'case' | 'insight';
  item: any;
}

function getLandingUrl(contentType: string, item: any): string {
  switch (contentType) {
    case 'solution':
      return item.primaryCtaUrl || `/${item.slug}`;
    case 'playbook':
      return `/playbooks/${item.slug}`;
    case 'case':
      return `/cases/${item.slug}`;
    case 'insight':
      return `/insights/${item.slug}`;
    default:
      return '/';
  }
}

function getTitle(contentType: string, item: any): string {
  switch (contentType) {
    case 'solution':
      return item.headlineDe || item.headlineEn || '';
    case 'playbook':
      return item.title?.de || item.title?.en || '';
    case 'case':
      return item.headline?.de || item.headline?.en || '';
    case 'insight':
      return item.title?.de || item.title?.en || '';
    default:
      return '';
  }
}

const CardPreview: React.FC<{ contentType: string; item: any }> = ({ contentType, item }) => {
  switch (contentType) {
    case 'solution':
      return (
        <div className="max-w-sm mx-auto pointer-events-none">
          <SolutionTileCard tile={item} index={0} />
        </div>
      );
    case 'case':
      return (
        <div className="max-w-sm mx-auto pointer-events-none">
          <CaseCard caseStudy={item} index={0} />
        </div>
      );
    case 'insight':
      return (
        <div className="max-w-sm mx-auto pointer-events-none">
          <InsightArticleCard article={item} index={0} />
        </div>
      );
    case 'playbook':
      // PlaybookCard needs onOpen/onDownload callbacks — render a simplified preview
      return (
        <div className="max-w-sm mx-auto rounded-lg border border-border bg-card p-6">
          <p className="text-xs font-medium text-muted-foreground mb-1">Ebene {item.ebene}</p>
          <h3 className="text-lg font-bold text-foreground mb-2">{item.title?.de || item.title?.en}</h3>
          <p className="text-sm text-muted-foreground">{item.subtitle?.de || item.subtitle?.en}</p>
        </div>
      );
    default:
      return null;
  }
};

const ContentPreviewModal: React.FC<ContentPreviewModalProps> = ({
  open,
  onOpenChange,
  mode,
  contentType,
  item,
}) => {
  if (!item) return null;

  const title = getTitle(contentType, item);
  const isLanding = mode === 'landing';
  const landingUrl = isLanding ? getLandingUrl(contentType, item) : '';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          'p-0 gap-0',
          isLanding ? 'max-w-5xl h-[85vh]' : 'max-w-md'
        )}
      >
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-base">
            {isLanding ? 'Landing Page' : 'Kachel'}: {title}
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            {isLanding ? 'Live-Vorschau der Landing Page' : 'Vorschau der Kachel-Komponente'}
          </DialogDescription>
        </DialogHeader>

        {isLanding ? (
          <div className="flex-1 px-2 pb-2 min-h-0">
            <iframe
              src={landingUrl}
              className="w-full h-full rounded-md border border-border"
              title={`Landing Page: ${title}`}
            />
          </div>
        ) : (
          <div className="px-6 pb-6 pt-2 overflow-y-auto max-h-[70vh]">
            <CardPreview contentType={contentType} item={item} />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContentPreviewModal;
