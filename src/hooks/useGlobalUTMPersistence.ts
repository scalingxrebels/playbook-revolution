import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const STORAGE_KEY = 'scalingx_utm_params';

/**
 * Hook to persist UTM parameters globally on app mount
 * Must be used inside BrowserRouter (App.tsx level)
 * 
 * This ensures UTM params are captured immediately when user lands on the site,
 * before any other components mount (like modals that need these params).
 */
export function useGlobalUTMPersistence(): void {
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    const utmSource = searchParams.get('utm_source');
    const utmMedium = searchParams.get('utm_medium');
    const utmCampaign = searchParams.get('utm_campaign');
    const utmContent = searchParams.get('utm_content');
    const utmTerm = searchParams.get('utm_term');
    
    const hasUtm = utmSource || utmMedium || utmCampaign || utmContent || utmTerm;
    
    if (hasUtm) {
      const params = {
        utm_source: utmSource || undefined,
        utm_medium: utmMedium || undefined,
        utm_campaign: utmCampaign || undefined,
        utm_content: utmContent || undefined,
        utm_term: utmTerm || undefined,
      };
      
      console.log('💾 Storing UTM params globally:', params);
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
    }
  }, [searchParams]);
}
