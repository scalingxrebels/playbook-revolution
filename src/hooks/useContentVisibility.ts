import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface VisibilityOverride {
  content_type: string;
  content_id: string;
  hidden: boolean;
}

const QUERY_KEY = ['content-visibility'];

export function useContentVisibility() {
  const queryClient = useQueryClient();

  const { data: overrides = [], isLoading } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      const { data, error } = await supabase
        .from('content_visibility' as any)
        .select('content_type, content_id, hidden');
      if (error) throw error;
      return (data ?? []) as VisibilityOverride[];
    },
    staleTime: 30_000,
  });

  const toggleMutation = useMutation({
    mutationFn: async ({ contentType, contentId, hidden }: { contentType: string; contentId: string; hidden: boolean }) => {
      const { error } = await (supabase as any)
        .from('content_visibility')
        .upsert(
          { content_type: contentType, content_id: contentId, hidden, updated_at: new Date().toISOString() },
          { onConflict: 'content_type,content_id' }
        );
      if (error) throw error;
    },
    onMutate: async ({ contentType, contentId, hidden }) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY });
      const prev = queryClient.getQueryData<VisibilityOverride[]>(QUERY_KEY);
      queryClient.setQueryData<VisibilityOverride[]>(QUERY_KEY, (old = []) => {
        const filtered = old.filter(o => !(o.content_type === contentType && o.content_id === contentId));
        return [...filtered, { content_type: contentType, content_id: contentId, hidden }];
      });
      return { prev };
    },
    onError: (_err, _vars, ctx) => {
      if (ctx?.prev) queryClient.setQueryData(QUERY_KEY, ctx.prev);
      toast.error('Fehler beim Speichern der Sichtbarkeit');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });

  /** Returns the effective hidden state: DB override wins over static default */
  const isHidden = (contentType: string, contentId: string, staticHidden?: boolean): boolean => {
    const override = overrides.find(o => o.content_type === contentType && o.content_id === contentId);
    return override ? override.hidden : (staticHidden ?? false);
  };

  /** Merge hidden flag into an array of items */
  const mergeVisibility = <T extends { hidden?: boolean }>(
    items: T[],
    contentType: string,
    getId: (item: T) => string
  ): (T & { hidden: boolean })[] => {
    return items.map(item => ({
      ...item,
      hidden: isHidden(contentType, getId(item), item.hidden),
    }));
  };

  const toggleVisibility = (contentType: string, contentId: string, hidden: boolean) => {
    toggleMutation.mutate({ contentType, contentId, hidden });
  };

  return { overrides, isLoading, isHidden, mergeVisibility, toggleVisibility };
}
