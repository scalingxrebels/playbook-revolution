import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTrackingParams } from '@/hooks/useUTMParams';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Download, Loader2, CheckCircle } from 'lucide-react';
import { z } from 'zod';

// Validation schema
const leadSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  name: z.string().trim().max(100).optional(),
  company: z.string().trim().max(100).optional(),
});

interface DownloadLeadFormProps {
  assetId: string;
  assetTitle: string;
  downloadUrl: string;
  onSuccess?: () => void;
  className?: string;
}

const DownloadLeadForm: React.FC<DownloadLeadFormProps> = ({
  assetId,
  assetTitle,
  downloadUrl,
  onSuccess,
  className = '',
}) => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const trackingParams = useTrackingParams(assetId);
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; name?: string; company?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate input
    const validation = leadSchema.safeParse({ email, name: name || undefined, company: company || undefined });
    
    if (!validation.success) {
      const fieldErrors: typeof errors = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof typeof errors] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Save lead to database with UTM tracking
      const { error } = await supabase.from('download_leads').insert({
        email: validation.data.email,
        name: validation.data.name || null,
        company: validation.data.company || null,
        asset_id: assetId,
        asset_type: assetId.split('-')[0], // Extract type from ID (e.g., 'playbook' from 'playbook-gtm-revenue')
        utm_source: trackingParams.utm_source || null,
        utm_medium: trackingParams.utm_medium || null,
        utm_campaign: trackingParams.utm_campaign || null,
        utm_content: trackingParams.utm_content || null,
        utm_term: trackingParams.utm_term || null,
        page_url: trackingParams.page_url || null,
        referrer: trackingParams.referrer || null,
      });
      
      if (error) {
        throw error;
      }
      
      setIsSuccess(true);
      
      toast({
        title: language === 'en' ? 'Download ready!' : 'Download bereit!',
        description: language === 'en' 
          ? `Your ${assetTitle} download will start shortly.`
          : `Ihr ${assetTitle} Download startet in Kürze.`,
      });
      
      // Trigger download
      setTimeout(() => {
        window.open(downloadUrl, '_blank');
        onSuccess?.();
      }, 500);
      
    } catch (error) {
      console.error('Error saving lead:', error);
      toast({
        variant: 'destructive',
        title: language === 'en' ? 'Error' : 'Fehler',
        description: language === 'en' 
          ? 'Something went wrong. Please try again.'
          : 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`text-center p-6 ${className}`}>
        <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">
          {language === 'en' ? 'Download Started!' : 'Download gestartet!'}
        </h3>
        <p className="text-muted-foreground">
          {language === 'en' 
            ? 'Check your downloads folder.'
            : 'Überprüfen Sie Ihren Downloads-Ordner.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="space-y-2">
        <Label htmlFor="email">
          {language === 'en' ? 'Email *' : 'E-Mail *'}
        </Label>
        <Input
          id="email"
          type="email"
          placeholder={language === 'en' ? 'your@email.com' : 'ihre@email.de'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
          className={errors.email ? 'border-destructive' : ''}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="name">
          {language === 'en' ? 'Name (optional)' : 'Name (optional)'}
        </Label>
        <Input
          id="name"
          type="text"
          placeholder={language === 'en' ? 'Your name' : 'Ihr Name'}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isSubmitting}
          className={errors.name ? 'border-destructive' : ''}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="company">
          {language === 'en' ? 'Company (optional)' : 'Unternehmen (optional)'}
        </Label>
        <Input
          id="company"
          type="text"
          placeholder={language === 'en' ? 'Your company' : 'Ihr Unternehmen'}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          disabled={isSubmitting}
          className={errors.company ? 'border-destructive' : ''}
        />
        {errors.company && (
          <p className="text-sm text-destructive">{errors.company}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        className="w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            {language === 'en' ? 'Processing...' : 'Verarbeite...'}
          </>
        ) : (
          <>
            <Download className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Download Now' : 'Jetzt herunterladen'}
          </>
        )}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        {language === 'en' 
          ? 'By downloading, you agree to receive occasional updates. Unsubscribe anytime.'
          : 'Mit dem Download stimmen Sie gelegentlichen Updates zu. Abmeldung jederzeit möglich.'}
      </p>
    </form>
  );
};

export default DownloadLeadForm;
