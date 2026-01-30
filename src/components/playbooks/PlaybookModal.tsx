import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, BookOpen, ArrowRight, Target, Users } from 'lucide-react';
import type { Playbook } from '@/data/playbooks';

interface PlaybookModalProps {
  playbook: Playbook | null;
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'de';
  onDownload: (playbook: Playbook) => void;
}

// Map impact to user-friendly labels
const impactLabels: Record<string, { en: string; de: string }> = {
  'growth-engines': { en: 'Growth Engines', de: 'Wachstumsmotoren' },
  'operating-systems': { en: 'Operating Systems', de: 'Betriebssysteme' },
  'board-governance': { en: 'Board & Governance', de: 'Board & Governance' },
  'portfolio': { en: 'Portfolio', de: 'Portfolio' },
  'strategic-capabilities': { en: 'Strategic Capabilities', de: 'Strategische Fähigkeiten' },
};

// Map bottleneck to user-friendly labels
const bottleneckLabels: Record<string, { en: string; de: string }> = {
  'strategy': { en: 'Strategy', de: 'Strategie' },
  'setup': { en: 'Setup', de: 'Setup' },
  'execution-focus': { en: 'Execution Focus', de: 'Umsetzungsfokus' },
  'operationalization': { en: 'Operationalization', de: 'Operationalisierung' },
};

// Map role to display labels
const roleLabels: Record<string, string> = {
  'ceo': 'CEO',
  'cmo-cro': 'CMO/CRO',
  'coo': 'COO',
  'cfo': 'CFO',
  'cto': 'CTO',
  'cpo': 'CPO',
  'vc-board': 'VC/Board',
};

const PlaybookModal: React.FC<PlaybookModalProps> = ({ 
  playbook, 
  isOpen, 
  onClose, 
  language,
  onDownload 
}) => {
  if (!playbook) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${playbook.gradient} flex items-center justify-center text-white mb-4`}>
            {playbook.icon}
          </div>
          <DialogTitle className="text-2xl">
            {playbook.title[language]}
          </DialogTitle>
          <DialogDescription className="text-base">
            {playbook.description[language]}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Impact Areas */}
          <div className="flex flex-wrap gap-2">
            {playbook.impact.map(imp => (
              <Badge key={imp} variant="outline">
                {impactLabels[imp]?.[language] || imp}
              </Badge>
            ))}
          </div>

          {/* Bottlenecks */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              {language === 'en' ? 'Addresses Bottlenecks' : 'Behandelt Engpässe'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {playbook.bottleneck.map(b => (
                <Badge key={b} variant="outline" className="bg-primary/5">
                  {bottleneckLabels[b]?.[language] || b}
                </Badge>
              ))}
            </div>
          </div>

          {/* Roles */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              {language === 'en' ? 'Recommended For' : 'Empfohlen für'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {playbook.role.map(r => (
                <Badge key={r} variant="outline" className="bg-muted/50">
                  {roleLabels[r] || r}
                </Badge>
              ))}
            </div>
          </div>

          {/* Expected Outcomes */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              {language === 'en' ? 'Expected Outcomes' : 'Erwartete Ergebnisse'}
            </h4>
            <ul className="space-y-2">
              {playbook.outcomes[language].map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies */}
          {playbook.caseStudies.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                {language === 'en' ? 'Referenced Case Studies' : 'Referenzierte Fallstudien'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {playbook.caseStudies.map((study, idx) => (
                  <Badge key={idx} variant="outline" className="bg-muted/50">
                    {study}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="flex gap-3 pt-4 border-t border-border">
            <Button 
              className="flex-1 bg-gradient-to-r from-primary to-primary/80"
              onClick={() => onDownload(playbook)}
            >
              {language === 'en' ? 'Get Template' : 'Vorlage erhalten'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/#assessment'}
            >
              {language === 'en' ? 'Take Assessment' : 'Assessment starten'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlaybookModal;
