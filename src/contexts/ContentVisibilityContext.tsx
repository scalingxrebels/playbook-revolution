import React, { createContext, useContext, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface VisibilityOverride {
  content_type: string;
  content_id: string;
  hidden: boolean;
}

interface ContentVisibilityContextValue {
  overrides: VisibilityOverride[];
  isLoading: boolean;
  isHidden: (contentType: string, contentId: string, staticHidden?: boolean) => boolean;
}

const ContentVisibilityContext = createContext<ContentVisibilityContextValue>({
  overrides: [],
  isLoading: true,
  isHidden: (_t, _id, staticHidden) => staticHidden ?? false,
});

export const useContentVisibilityContext = () => useContext(ContentVisibilityContext);

export const ContentVisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: overrides = [], isLoading } = useQuery({
    queryKey: ['content-visibility-public'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('content_visibility' as any)
        .select('content_type, content_id, hidden');
      if (error) throw error;
      return (data ?? []) as unknown as VisibilityOverride[];
    },
    staleTime: 60_000,
  });

  const value = useMemo<ContentVisibilityContextValue>(() => ({
    overrides,
    isLoading,
    isHidden: (contentType: string, contentId: string, staticHidden?: boolean) => {
      const override = overrides.find(o => o.content_type === contentType && o.content_id === contentId);
      return override ? override.hidden : (staticHidden ?? false);
    },
  }), [overrides, isLoading]);

  return (
    <ContentVisibilityContext.Provider value={value}>
      {children}
    </ContentVisibilityContext.Provider>
  );
};
