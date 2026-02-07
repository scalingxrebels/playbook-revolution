import { useMemo } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

/**
 * UTM Parameters interface
 */
export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

/**
 * Extended tracking parameters including asset and page info
 */
export interface TrackingParams extends UTMParams {
  asset_id?: string;
  page_url?: string;
  referrer?: string;
}

/**
 * Hook to extract UTM parameters from the current URL
 * 
 * @returns UTM parameters object with any found values
 */
export function useUTMParams(): UTMParams {
  const [searchParams] = useSearchParams();
  
  return useMemo(() => {
    const params: UTMParams = {};
    
    const utmSource = searchParams.get('utm_source');
    const utmMedium = searchParams.get('utm_medium');
    const utmCampaign = searchParams.get('utm_campaign');
    const utmContent = searchParams.get('utm_content');
    const utmTerm = searchParams.get('utm_term');
    
    if (utmSource) params.utm_source = utmSource;
    if (utmMedium) params.utm_medium = utmMedium;
    if (utmCampaign) params.utm_campaign = utmCampaign;
    if (utmContent) params.utm_content = utmContent;
    if (utmTerm) params.utm_term = utmTerm;
    
    return params;
  }, [searchParams]);
}

/**
 * Hook to get full tracking parameters including page context
 * 
 * @param assetId - Optional asset ID to include in tracking
 * @returns Full tracking parameters object
 */
export function useTrackingParams(assetId?: string): TrackingParams {
  const utmParams = useUTMParams();
  const location = useLocation();
  
  return useMemo(() => {
    const params: TrackingParams = {
      ...utmParams,
    };
    
    if (assetId) {
      params.asset_id = assetId;
    }
    
    // Add page context
    if (typeof window !== 'undefined') {
      params.page_url = window.location.href;
      params.referrer = document.referrer || undefined;
    }
    
    return params;
  }, [utmParams, assetId, location.pathname]);
}

/**
 * Build a URL with UTM parameters appended
 * 
 * @param baseUrl - The base URL to append parameters to
 * @param params - UTM parameters to append
 * @returns URL with UTM parameters
 */
export function buildUrlWithUTM(baseUrl: string, params: UTMParams): string {
  const url = new URL(baseUrl, window.location.origin);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });
  
  return url.toString();
}

/**
 * Build query string from tracking parameters
 * 
 * @param params - Tracking parameters
 * @returns Query string (without leading ?)
 */
export function buildQueryString(params: TrackingParams): string {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, value);
    }
  });
  
  return searchParams.toString();
}

/**
 * Parse UTM parameters from a URL string
 * 
 * @param url - URL string to parse
 * @returns UTM parameters found in the URL
 */
export function parseUTMFromUrl(url: string): UTMParams {
  try {
    const urlObj = new URL(url);
    const params: UTMParams = {};
    
    const utmSource = urlObj.searchParams.get('utm_source');
    const utmMedium = urlObj.searchParams.get('utm_medium');
    const utmCampaign = urlObj.searchParams.get('utm_campaign');
    const utmContent = urlObj.searchParams.get('utm_content');
    const utmTerm = urlObj.searchParams.get('utm_term');
    
    if (utmSource) params.utm_source = utmSource;
    if (utmMedium) params.utm_medium = utmMedium;
    if (utmCampaign) params.utm_campaign = utmCampaign;
    if (utmContent) params.utm_content = utmContent;
    if (utmTerm) params.utm_term = utmTerm;
    
    return params;
  } catch {
    return {};
  }
}
