import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const leadSchema = z.object({
  email: z.string().trim().email({ message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein' }).max(255),
  name: z.string().trim().max(100).optional(),
  company: z.string().trim().max(100).optional(),
});

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate input
    const result = leadSchema.safeParse({ email, name: name || undefined, company: company || undefined });
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.from('playbook_leads').insert({
        email: result.data.email,
        name: result.data.name || null,
        company: result.data.company || null,
        source: 'playbook_download'
      });

      if (error) throw error;

      setIsSuccess(true);
      toast.success(
        language === 'de' 
          ? 'Vielen Dank! Der Download startet gleich.' 
          : 'Thank you! Your download will start shortly.'
      );

      // Trigger download after short delay
      setTimeout(() => {
        onSuccess();
        // Reset form after closing
        setTimeout(() => {
          setEmail('');
          setName('');
          setCompany('');
          setIsSuccess(false);
        }, 500);
      }, 1500);

    } catch (error) {
      console.error('Error saving lead:', error);
      toast.error(
        language === 'de'
          ? 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
          : 'An error occurred. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      onClose();
      // Reset form
      setTimeout(() => {
        setEmail('');
        setName('');
        setCompany('');
        setErrors({});
        setIsSuccess(false);
      }, 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-center mb-2">
              {language === 'de' ? 'Vielen Dank!' : 'Thank you!'}
            </DialogTitle>
            <DialogDescription className="text-center">
              {language === 'de' 
                ? 'Der Download startet in wenigen Sekunden...' 
                : 'Your download will start in a few seconds...'}
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Download className="w-5 h-5 text-primary" />
                {language === 'de' ? 'Playbook herunterladen' : 'Download Playbook'}
              </DialogTitle>
              <DialogDescription>
                {language === 'de'
                  ? 'Geben Sie Ihre E-Mail-Adresse ein, um das AI-Native Scaling Playbook herunterzuladen.'
                  : 'Enter your email address to download the AI-Native Scaling Playbook.'}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="email">
                  {language === 'de' ? 'E-Mail-Adresse' : 'Email Address'} *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={language === 'de' ? 'ihre@email.de' : 'your@email.com'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">
                  {language === 'de' ? 'Name' : 'Name'} ({language === 'de' ? 'optional' : 'optional'})
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={language === 'de' ? 'Ihr Name' : 'Your name'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">
                  {language === 'de' ? 'Unternehmen' : 'Company'} ({language === 'de' ? 'optional' : 'optional'})
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder={language === 'de' ? 'Ihr Unternehmen' : 'Your company'}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  disabled={isLoading}
                  className="flex-1"
                >
                  {language === 'de' ? 'Abbrechen' : 'Cancel'}
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading || !email}
                  className="flex-1"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {language === 'de' ? 'Wird gesendet...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      {language === 'de' ? 'Herunterladen' : 'Download'}
                    </>
                  )}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center pt-2">
                {language === 'de'
                  ? 'Mit dem Download stimmen Sie unserer Datenschutzerklärung zu.'
                  : 'By downloading, you agree to our privacy policy.'}
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
