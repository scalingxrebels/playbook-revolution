import React, { useEffect, useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const STORAGE_KEY = 'scalingx_utm_params';

type FormSlug = 
  | 'inflection-call' 
  | 'expert-session' 
  | 'ml-sync' 
  | 'ml-deep-dive' 
  | 'ah-sync' 
  | 'ah-deep-dive' 
  | 'fm-sync' 
  | 'fm-deep-dive';

interface FilloutBookingModalProps {
  /** The Fillout form URL slug */
  formSlug: FormSlug;
  /** Source parameter for tracking (e.g., 'playbook', 'team-ml', 'solutions') */
  source: string;
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback to close the modal */
  onClose: () => void;
  /** Optional custom title */
  title?: string;
}

/**
 * Build the Fillout URL with UTM and source parameters
 */
function buildFilloutUrl(formSlug: string, source: string): string {
  const baseUrl = `https://scalingx.fillout.com/${formSlug}`;
  const params = new URLSearchParams();
  
  // Get UTM params from sessionStorage
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
 * FilloutBookingModal - A 900px-wide modal for booking forms
 * 
 * Features:
 * - Automatically passes UTM parameters from sessionStorage
 * - Includes a configurable source parameter for tracking
 * - Standard 900px width as per requirements
 */
const FilloutBookingModal: React.FC<FilloutBookingModalProps> = ({
  formSlug,
  source,
  isOpen,
  onClose,
  title,
}) => {
  const filloutUrl = useMemo(() => {
    if (!isOpen) return '';
    return buildFilloutUrl(formSlug, source);
  }, [isOpen, formSlug, source]);

  // Log the URL for debugging
  useEffect(() => {
    if (isOpen && filloutUrl) {
      console.log('📅 FilloutBookingModal opened:', { formSlug, source, url: filloutUrl });
    }
  }, [isOpen, filloutUrl, formSlug, source]);

  const defaultTitle = getDefaultTitle(formSlug);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="sm:max-w-[1100px] max-h-[90vh] p-0 overflow-hidden"
        aria-describedby={undefined}
      >
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="text-lg font-semibold">
            {title || defaultTitle}
          </DialogTitle>
        </DialogHeader>
        
        <div className="w-full h-[700px]">
          {isOpen && filloutUrl && (
            <iframe
              src={filloutUrl}
              className="w-full h-full border-0"
              title={title || defaultTitle}
              allow="camera; microphone"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

/**
 * Get default title based on form slug
 */
function getDefaultTitle(formSlug: FormSlug): string {
  const titles: Record<FormSlug, string> = {
    'inflection-call': 'Book Your Inflection Call',
    'expert-session': 'Book Expert Session',
    'ml-sync': 'Book 30-Min Call with Michel',
    'ml-deep-dive': 'Book 60-Min Deep Dive with Michel',
    'ah-sync': 'Book 30-Min Call with Alban',
    'ah-deep-dive': 'Book 60-Min Deep Dive with Alban',
    'fm-sync': 'Book 30-Min Call with Florian',
    'fm-deep-dive': 'Book 60-Min Deep Dive with Florian',
  };
  return titles[formSlug] || 'Book a Call';
}

export default FilloutBookingModal;
