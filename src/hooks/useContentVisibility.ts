import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface VisibilityOverride {
  content_type: string;
  content_id: string;
  hidden: boolean;
  featured: boolean;
}

const QUERY_KEY = ['content-visibility'];

export function useContentVisibility() {
  const queryClient = useQueryClient();

  const { data: overrides = [], isLoading } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      const { data, error } = await supabase
        .from('content_visibility' as any)
        .select('content_type, content_id, hidden, featured');
      if (error) throw error;
      return (data ?? []) as unknown as VisibilityOverride[];
    },
    staleTime: 30_000,
  });

  const toggleMutation = useMutation({
    mutationFn: async ({ contentType, contentId, hidden, featured }: { contentType: string; contentId: string; hidden?: boolean; featured?: boolean }) => {
      const existing = overrides.find(o => o.content_type === contentType && o.content_id === contentId);
      const upsertData: any = {
        content_type: contentType,
        content_id: contentId,
        updated_at: new Date().toISOString(),
      };
      if (hidden !== undefined) upsertData.hidden = hidden;
      else upsertData.hidden = existing?.hidden ?? false;
      if (featured !== undefined) upsertData.featured = featured;
      else upsertData.featured = existing?.featured ?? false;

      const { error } = await (supabase as any)
        .from('content_visibility')
        .upsert(upsertData, { onConflict: 'content_type,content_id' });
      if (error) throw error;
    },
    onMutate: async ({ contentType, contentId, hidden, featured }) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY });
      const prev = queryClient.getQueryData<VisibilityOverride[]>(QUERY_KEY);
      queryClient.setQueryData<VisibilityOverride[]>(QUERY_KEY, (old = []) => {
        const existing = old.find(o => o.content_type === contentType && o.content_id === contentId);
        const filtered = old.filter(o => !(o.content_type === contentType && o.content_id === contentId));
        return [...filtered, {
          content_type: contentType,
          content_id: contentId,
          hidden: hidden !== undefined ? hidden : (existing?.hidden ?? false),
          featured: featured !== undefined ? featured : (existing?.featured ?? false),
        }];
      });
      return { prev };
    },
    onError: (_err, _vars, ctx) => {
      if (ctx?.prev) queryClient.setQueryData(QUERY_KEY, ctx.prev);
      toast.error('Fehler beim Speichern');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: ['content-visibility-public'] });
    },
  });

  const isHidden = (contentType: string, contentId: string, staticHidden?: boolean): boolean => {
    const override = overrides.find(o => o.content_type === contentType && o.content_id === contentId);
    return override ? override.hidden : (staticHidden ?? false);
  };

  const isFeatured = (contentType: string, contentId: string, staticFeatured?: boolean): boolean => {
    const override = overrides.find(o => o.content_type === contentType && o.content_id === contentId);
    return override ? override.featured : (staticFeatured ?? false);
  };

  const mergeVisibility = <T extends { hidden?: boolean; featured?: boolean }>(
    items: T[],
    contentType: string,
    getId: (item: T) => string
  ): (T & { hidden: boolean; featured: boolean })[] => {
    return items.map(item => ({
      ...item,
      hidden: isHidden(contentType, getId(item), item.hidden),
      featured: isFeatured(contentType, getId(item), item.featured),
    }));
  };

  const toggleVisibility = (contentType: string, contentId: string, hidden: boolean) => {
    toggleMutation.mutate({ contentType, contentId, hidden });
  };

  const toggleFeatured = (contentType: string, contentId: string, featured: boolean) => {
    toggleMutation.mutate({ contentType, contentId, featured });
  };

  return { overrides, isLoading, isHidden, isFeatured, mergeVisibility, toggleVisibility, toggleFeatured };
}
