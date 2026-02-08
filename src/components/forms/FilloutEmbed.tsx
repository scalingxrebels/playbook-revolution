import React, { useEffect, useRef } from 'react';

const STORAGE_KEY = 'scalingx_utm_params';

type FilloutFormType = 'inflection-call' | 'expert-session' | 'download' | 'inquiry';

interface FilloutEmbedProps {
  /**
   * The Fillout form ID to embed
   */
  formId: string;
  
  /**
   * Form type for tracking purposes
   */
  formType: FilloutFormType;
  
  /**
   * Source parameter for tracking (e.g., 'website', 'playbook', 'solutions')
   */
  source?: string;
  
  /**
   * Optional asset ID for download forms
   */
  assetId?: string;
  
  /**
   * Height of the embed (default: 500px)
   */
  height?: number;
  
  /**
   * Additional CSS class names
   */
  className?: string;
  
  /**
   * Whether to inherit URL parameters automatically
   */
  inheritParams?: boolean;
  
  /**
   * Additional custom parameters to pass to the form
   */
  customParams?: Record<string, string>;
}

/**
 * Get UTM params from sessionStorage
 */
function getStoredUTMParams(): Record<string, string> {
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

/**
 * Build query string from parameters object
 */
function buildQueryString(params: Record<string, string | undefined>): string {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, value);
    }
  });
  return searchParams.toString();
}

/**
 * FilloutEmbed - Embeds a Fillout form with automatic UTM + source parameter passing
 * 
 * This component:
 * 1. Dynamically loads the Fillout embed script
 * 2. Automatically passes UTM parameters from sessionStorage to the form
 * 3. Supports custom source parameter for tracking form location
 */
const FilloutEmbed: React.FC<FilloutEmbedProps> = ({
  formId,
  formType,
  source,
  assetId,
  height = 500,
  className = '',
  inheritParams = true,
  customParams = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Dynamically load Fillout script if not already present
    if (!document.querySelector('script[src*="fillout.com/embed"]')) {
      const script = document.createElement('script');
      script.src = 'https://server.fillout.com/embed/v1/';
      script.async = true;
      document.body.appendChild(script);
    }
    
    // Re-initialize Fillout embeds after script loads
    const handleScriptLoad = () => {
      // Fillout script auto-initializes data-fillout-id elements
      if ((window as any).Fillout) {
        (window as any).Fillout.initializeEmbeds();
      }
    };
    
    // Check if script already loaded
    if ((window as any).Fillout) {
      handleScriptLoad();
    } else {
      window.addEventListener('load', handleScriptLoad);
    }
    
    return () => {
      window.removeEventListener('load', handleScriptLoad);
    };
  }, [formId]);
  
  // Build parameters object with UTM from sessionStorage + source + custom params
  const allParams: Record<string, string | undefined> = {
    ...getStoredUTMParams(),
    ...customParams,
    form_type: formType,
  };
  
  // Add source if provided
  if (source) {
    allParams.source = source;
  }
  
  // Add asset_id if provided
  if (assetId) {
    allParams.asset_id = assetId;
  }
  
  // Build the query string for Fillout
  const paramString = buildQueryString(allParams);
  
  return (
    <div 
      ref={containerRef}
      className={`fillout-embed-container ${className}`}
      style={{ minHeight: height }}
    >
      <div
        data-fillout-id={formId}
        data-fillout-embed-type="standard"
        data-fillout-inherit-parameters={inheritParams}
        data-fillout-dynamic-resize
        data-fillout-parameters={paramString}
        style={{ 
          width: '100%', 
          height: height,
        }}
      />
    </div>
  );
};

export default FilloutEmbed;
