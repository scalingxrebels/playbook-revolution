import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import FilloutDownloadModal from './FilloutDownloadModal';
import { getAssetById, type DownloadAsset } from '@/data/downloadRegistry';

interface DownloadButtonProps {
  assetId: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'xl';
  className?: string;
  children?: React.ReactNode;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  assetId,
  variant = 'outline',
  size = 'lg',
  className = '',
  children,
}) => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const asset = getAssetById(assetId);

  if (!asset) {
    console.warn(`DownloadButton: Asset "${assetId}" not found`);
    return null;
  }

  if (!asset.isAvailable) {
    console.warn(`DownloadButton: Asset "${assetId}" is not available`);
    return null;
  }

  const defaultLabel = language === 'en' ? 'Download' : 'Herunterladen';

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => {
          console.log('🖱️ Download button clicked:', assetId);
          setIsModalOpen(true);
        }}
      >
        <Download className="w-4 h-4 mr-2" />
        {children || defaultLabel}
      </Button>

      <FilloutDownloadModal
        asset={asset}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default DownloadButton;
