import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, FileText, X } from 'lucide-react';
import DownloadLeadForm from './DownloadLeadForm';
import type { DownloadAsset } from '@/data/downloadRegistry';

interface DownloadModalProps {
  asset: DownloadAsset | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * DownloadModal - Modal for gated content downloads
 * 
 * Shows either:
 * 1. Direct download button (for ungated content)
 * 2. Lead capture form (for gated content)
 */
const DownloadModal: React.FC<DownloadModalProps> = ({
  asset,
  isOpen,
  onClose,
}) => {
  const { language } = useLanguage();

  if (!asset) return null;

  const handleDirectDownload = () => {
    window.open(asset.filePath, '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            {language === 'en' ? asset.titleEn : asset.titleDe}
          </DialogTitle>
          <DialogDescription>
            {asset.requiresEmail ? (
              language === 'en' 
                ? 'Enter your email to download this resource.'
                : 'Geben Sie Ihre E-Mail ein, um diese Ressource herunterzuladen.'
            ) : (
              language === 'en'
                ? 'Click the button below to download.'
                : 'Klicken Sie auf den Button, um herunterzuladen.'
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          {asset.requiresEmail ? (
            <DownloadLeadForm
              assetId={asset.id}
              assetTitle={language === 'en' ? asset.titleEn : asset.titleDe}
              downloadUrl={asset.filePath}
              onSuccess={onClose}
            />
          ) : (
            <div className="space-y-4">
              <Button 
                onClick={handleDirectDownload}
                className="w-full"
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Download Now' : 'Jetzt herunterladen'}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                {language === 'en' 
                  ? 'Free download - no email required.'
                  : 'Kostenloser Download - keine E-Mail erforderlich.'}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadModal;
