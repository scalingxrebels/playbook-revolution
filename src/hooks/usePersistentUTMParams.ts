import { useEffect, useMemo } from 'react';
import { useUTMParams, type UTMParams } from './useUTMParams';

const STORAGE_KEY = 'scalingx_utm_params';

/**
 * Hook to persist UTM parameters across internal navigation
 * 
 * Problem: When user navigates from /?utm_source=linkedin to /playbooks,
 * the UTM parameters are lost from the URL.
 * 
 * Solution: Store UTM params in sessionStorage on first visit,
 * then merge with any new URL params on subsequent pages.
 */
export function usePersistentUTMParams(): UTMParams {
  const urlParams = useUTMParams();
  
  // Store UTM params when they appear in URL
  useEffect(() => {
    const hasUrlParams = Object.values(urlParams).some(v => v);
    if (hasUrlParams) {
      console.log('💾 Storing UTM params:', urlParams);
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(urlParams));
    }
  }, [urlParams]);
  
  // Combine stored params with URL params (URL takes priority)
  return useMemo(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      const storedParams: UTMParams = stored ? JSON.parse(stored) : {};
      const merged = { ...storedParams, ...urlParams };
      
      if (Object.keys(merged).length > 0) {
        console.log('📊 UTM params (merged):', merged);
      }
      
      return merged;
    } catch {
      return urlParams;
    }
  }, [urlParams]);
}
