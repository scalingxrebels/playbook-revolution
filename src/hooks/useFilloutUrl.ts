import { useMemo } from 'react';

const STORAGE_KEY = 'scalingx_utm_params';

/**
 * Build a Fillout form URL with UTM parameters from sessionStorage and a source parameter
 * 
 * @param formSlug - The Fillout form URL slug (e.g., 'inflection-call', 'inquiry')
 * @param source - The source parameter for tracking (e.g., 'website', 'solutions', 'playbook')
 * @returns The complete Fillout URL with parameters
 */
export function buildFilloutUrl(formSlug: string, source: string): string {
  const baseUrl = `https://www.cal.scalingx.io/${formSlug}`;
  const params = new URLSearchParams();
  
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const utmParams = JSON.parse(stored);
      if (utmParams.utm_source) params.set('utm_source', utmParams.utm_source);
      if (utmParams.utm_medium) params.set('utm_medium', utmParams.utm_medium);
      if (utmParams.utm_campaign) params.set('utm_campaign', utmParams.utm_campaign);
      if (utmParams.utm_content) params.set('utm_content', utmParams.utm_content);
      if (utmParams.utm_term) params.set('utm_term', utmParams.utm_term);
    }
  } catch (e) {
    console.warn('Failed to read UTM params from sessionStorage:', e);
  }
  
  // Always add source
  params.set('source', source);
  
  const queryString = params.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

/**
 * Hook to generate a memoized Fillout form URL with UTM + source parameters
 * 
 * @param formSlug - The Fillout form URL slug
 * @param source - The source parameter for tracking
 * @returns The complete Fillout URL with parameters
 */
export function useFilloutUrl(formSlug: string, source: string): string {
  return useMemo(() => buildFilloutUrl(formSlug, source), [formSlug, source]);
}

/**
 * Get stored UTM parameters from sessionStorage
 */
export function getStoredUTMParams(): Record<string, string> {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const params = JSON.parse(stored);
      const result: Record<string, string> = {};
      if (params.utm_source) result.utm_source = params.utm_source;
      if (params.utm_medium) result.utm_medium = params.utm_medium;
      if (params.utm_campaign) result.utm_campaign = params.utm_campaign;
      if (params.utm_content) result.utm_content = params.utm_content;
      if (params.utm_term) result.utm_term = params.utm_term;
      return result;
    }
  } catch (e) {
    console.warn('Failed to read UTM params from sessionStorage:', e);
  }
  return {};
}
