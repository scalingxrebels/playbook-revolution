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
import { Clock, CheckCircle2, BookOpen, ArrowRight } from 'lucide-react';
import type { Playbook } from '@/data/playbooks';

interface PlaybookModalProps {
  playbook: Playbook | null;
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'de';
  onDownload: (playbook: Playbook) => void;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
    default: return 'bg-muted text-muted-foreground';
  }
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
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{playbook.dimension}</Badge>
            {playbook.capabilities.map(cap => (
              <Badge key={cap} variant="outline" className="bg-primary/5">{cap}</Badge>
            ))}
            <Badge className={getDifficultyColor(playbook.difficulty)}>
              {playbook.difficulty}
            </Badge>
            <Badge variant="outline">
              <Clock className="w-3 h-3 mr-1" />
              {playbook.duration}
            </Badge>
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
