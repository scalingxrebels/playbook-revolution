import React, { useEffect, useRef } from 'react';
import { useTrackingParams, buildQueryString } from '@/hooks/useUTMParams';

type FilloutFormType = 'inflection-call' | 'expert-session' | 'download';

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
 * FilloutEmbed - Embeds a Fillout form with automatic UTM parameter passing
 * 
 * This component:
 * 1. Dynamically loads the Fillout embed script
 * 2. Automatically passes UTM parameters from the URL to the form
 * 3. Supports custom parameters for asset tracking
 */
const FilloutEmbed: React.FC<FilloutEmbedProps> = ({
  formId,
  formType,
  assetId,
  height = 500,
  className = '',
  inheritParams = true,
  customParams = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackingParams = useTrackingParams(assetId);
  
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
  
  // Build parameters object
  const allParams = {
    ...trackingParams,
    ...customParams,
    form_type: formType,
  };
  
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
