import React, { useEffect, useState, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CheckCircle2, FileText, Loader2, AlertCircle } from 'lucide-react';
import { usePersistentUTMParams } from '@/hooks/usePersistentUTMParams';
import type { DownloadAsset } from '@/data/downloadRegistry';

interface FilloutDownloadModalProps {
  asset: DownloadAsset | null;
  isOpen: boolean;
  onClose: () => void;
}

const FILLOUT_BASE_URL = 'https://scalingx.fillout.com/download';

const FilloutDownloadModal: React.FC<FilloutDownloadModalProps> = ({
  asset,
  isOpen,
  onClose,
}) => {
  const { language } = useLanguage();
  const utmParams = usePersistentUTMParams();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Build full iframe URL with all parameters
  const buildIframeUrl = useCallback(() => {
    if (!asset) return '';
    const params = new URLSearchParams();
    
    // UTM parameters
    if (utmParams.utm_source) params.set('utm_source', utmParams.utm_source);
    if (utmParams.utm_medium) params.set('utm_medium', utmParams.utm_medium);
    if (utmParams.utm_campaign) params.set('utm_campaign', utmParams.utm_campaign);
    if (utmParams.utm_content) params.set('utm_content', utmParams.utm_content);
    if (utmParams.utm_term) params.set('utm_term', utmParams.utm_term);
    
    // Asset parameters
    params.set('Asset_ID', asset.id);
    params.set('download_type', asset.type);
    
    const url = `${FILLOUT_BASE_URL}?${params.toString()}`;
    console.log('🔗 Fillout iframe URL:', url);
    return url;
  }, [asset, utmParams]);

  // Trigger automatic PDF download
  const handleDownload = useCallback(() => {
    if (!asset) return;
    
    try {
      console.log('⬇️ Starting download:', asset.fileName);
      
      const link = document.createElement('a');
      link.href = asset.filePath;
      link.download = asset.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('✅ Download triggered successfully');
      setSubmitted(true);
      
      // Close modal after 2.5 seconds
      setTimeout(() => {
        onClose();
      }, 2500);
    } catch (err) {
      console.error('❌ Download failed:', err);
      setError(language === 'en' 
        ? 'Download failed. Please try again.' 
        : 'Download fehlgeschlagen. Bitte versuchen Sie es erneut.');
    }
  }, [asset, onClose, language]);

  // Listen for Fillout submission via postMessage
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Log ALL messages from fillout for debugging
      if (event.origin.includes('fillout.com')) {
        console.log('📨 Fillout message received:', {
          origin: event.origin,
          data: event.data,
          dataType: typeof event.data,
          dataKeys: typeof event.data === 'object' && event.data !== null ? Object.keys(event.data) : 'N/A'
        });
        
        // Check for form submission - multiple possible formats
        const isSubmitted = 
          // Object with type property
          event.data?.type === 'fillout-form-submitted' ||
          event.data?.type === 'form-submitted' ||
          event.data?.type === 'formSubmitted' ||
          event.data?.type === 'submit' ||
          event.data?.event === 'submit' ||
          event.data?.event === 'formSubmitted' ||
          // String message
          event.data === 'fillout-form-submitted' ||
          event.data === 'form-submitted' ||
          event.data === 'formSubmitted' ||
          // Check for submission in any property
          (typeof event.data === 'object' && event.data !== null && 
           JSON.stringify(event.data).toLowerCase().includes('submit'));
        
        if (isSubmitted) {
          console.log('🎉 Form submitted! Triggering download...');
          handleDownload();
        }
      }
    };

    if (isOpen) {
      console.log('👂 Listening for Fillout messages...');
      window.addEventListener('message', handleMessage);
    }

    return () => window.removeEventListener('message', handleMessage);
  }, [isOpen, handleDownload]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setLoading(true);
        setError(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!asset) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-hidden">
        {error ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <AlertCircle className="w-16 h-16 text-destructive" />
            <h3 className="text-xl font-bold text-center">{error}</h3>
          </div>
        ) : !submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                {language === 'en' ? asset.titleEn : asset.titleDe}
              </DialogTitle>
            </DialogHeader>

            <div className="relative" style={{ minHeight: '500px' }}>
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              )}
              
              <iframe
                src={buildIframeUrl()}
                onLoad={() => {
                  console.log('✅ Fillout iframe loaded');
                  setLoading(false);
                }}
                style={{ 
                  width: '100%', 
                  height: '500px',
                  border: 'none',
                  opacity: loading ? 0 : 1,
                  transition: 'opacity 0.3s ease'
                }}
                title="Download Form"
              />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 space-y-4">
            <CheckCircle2 className="w-20 h-20 text-green-500 animate-in zoom-in duration-300" />
            <h3 className="text-2xl font-bold">
              {language === 'en' ? 'Download Started!' : 'Download gestartet!'}
            </h3>
            <p className="text-muted-foreground text-center">
              {language === 'en' 
                ? 'Check your downloads folder.' 
                : 'Prüfen Sie Ihren Download-Ordner.'}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FilloutDownloadModal;
