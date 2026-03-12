import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import type { InsightReactionCounts } from '@/data/insights';

type ReactionType = 'fire' | 'lightbulb' | 'thinking';

interface InsightReactionsProps {
  insightId: string;
  reactions: InsightReactionCounts;
  interactive?: boolean;
  size?: 'sm' | 'md';
}

const reactionConfig: { type: ReactionType; emoji: string; label: string }[] = [
  { type: 'fire', emoji: '🔥', label: 'Fire' },
  { type: 'lightbulb', emoji: '💡', label: 'Insight' },
  { type: 'thinking', emoji: '🤔', label: 'Thinking' },
];

const STORAGE_KEY = 'scalingx-reactions';

const getStoredReaction = (insightId: string): ReactionType | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const data = JSON.parse(stored);
    return data[insightId] || null;
  } catch {
    return null;
  }
};

const setStoredReaction = (insightId: string, type: ReactionType) => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const data = stored ? JSON.parse(stored) : {};
    data[insightId] = type;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // silently fail
  }
};

const InsightReactions: React.FC<InsightReactionsProps> = ({
  insightId,
  reactions,
  interactive = false,
  size = 'md',
}) => {
  const [localReactions, setLocalReactions] = useState(reactions);
  const [userReaction, setUserReaction] = useState<ReactionType | null>(null);

  useEffect(() => {
    setUserReaction(getStoredReaction(insightId));
  }, [insightId]);

  const handleReaction = (type: ReactionType) => {
    if (!interactive) return;

    const prev = userReaction;
    if (prev === type) return; // already selected

    setLocalReactions((r) => {
      const updated = { ...r };
      if (prev) updated[prev] = Math.max(0, updated[prev] - 1);
      updated[type] = updated[type] + 1;
      return updated;
    });

    setUserReaction(type);
    setStoredReaction(insightId, type);
  };

  const hasAnyReactions = localReactions.fire > 0 || localReactions.lightbulb > 0 || localReactions.thinking > 0;

  // On card level (non-interactive), only show if there are reactions
  if (!interactive && !hasAnyReactions) return null;

  return (
    <div className={cn(
      'flex items-center gap-3',
      interactive && 'flex-col items-stretch'
    )}>
      {interactive && (
        <p className="text-sm text-muted-foreground mb-1">
          Was this article helpful?
        </p>
      )}
      <div className="flex items-center gap-3">
        {reactionConfig.map(({ type, emoji, label }) => {
          const count = localReactions[type];
          if (!interactive && count === 0) return null;
          const isSelected = userReaction === type;

          return (
            <button
              key={type}
              onClick={() => handleReaction(type)}
              disabled={!interactive}
              className={cn(
                'flex items-center gap-1 transition-all duration-200',
                size === 'sm' ? 'text-xs' : 'text-sm',
                interactive && 'px-3 py-2 rounded-lg border hover:bg-muted/50',
                interactive && isSelected && 'bg-primary/10 border-primary/30',
                interactive && !isSelected && 'border-border',
                !interactive && 'cursor-default'
              )}
              title={label}
            >
              <span className={size === 'sm' ? 'text-sm' : 'text-base'}>{emoji}</span>
              {count > 0 && (
                <span className="text-muted-foreground font-medium">{count}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default InsightReactions;
