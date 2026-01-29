import React, { useRef, useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Layers, Download, ArrowRight } from 'lucide-react';
import type { Playbook } from '@/data/playbooks';

interface PlaybookCardProps {
  playbook: Playbook;
  index: number;
  language: 'en' | 'de';
  matchScore?: number;
  onOpen: (playbook: Playbook) => void;
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

const PlaybookCard: React.FC<PlaybookCardProps> = ({ 
  playbook, 
  index, 
  language, 
  matchScore,
  onOpen, 
  onDownload 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const delay = (index % 6) * 100;
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Gradient Accent */}
      <div className={`absolute inset-0 bg-gradient-to-br ${playbook.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
      
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${playbook.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {playbook.icon}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="outline" className="text-xs">
          {playbook.dimension}
        </Badge>
        {playbook.capabilities.map(cap => (
          <Badge key={cap} variant="outline" className="text-xs bg-primary/5">
            {cap}
          </Badge>
        ))}
        <Badge className={`text-xs ${getDifficultyColor(playbook.difficulty)}`}>
          {playbook.difficulty}
        </Badge>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {playbook.title[language]}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {playbook.description[language]}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {playbook.duration}
        </span>
        <span className="flex items-center gap-1">
          <Layers className="w-3 h-3" />
          {playbook.stage}
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          className="flex-1"
          onClick={(e) => {
            e.stopPropagation();
            onOpen(playbook);
          }}
        >
          {language === 'en' ? 'Read' : 'Lesen'}
        </Button>
        <Button
          size="sm"
          className="flex-1 bg-gradient-to-r from-primary to-primary/80"
          onClick={(e) => {
            e.stopPropagation();
            onDownload(playbook);
          }}
        >
          {language === 'en' ? 'Template' : 'Vorlage'}
          <Download className="w-3 h-3 ml-1" />
        </Button>
      </div>

      {/* Arrow */}
      <ArrowRight className="absolute top-6 right-6 w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
    </div>
  );
};

export default PlaybookCard;
