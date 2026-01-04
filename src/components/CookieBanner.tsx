import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'scalingx_cookie_consent';

interface CookieConsent {
  accepted: boolean;
  timestamp: number;
}

const CookieBanner: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    const consent: CookieConsent = {
      accepted: true,
      timestamp: Date.now(),
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleReject = () => {
    const consent: CookieConsent = {
      accepted: false,
      timestamp: Date.now(),
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const content = {
    de: {
      title: 'Cookie-Einstellungen',
      description: 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Einige Cookies sind für den Betrieb der Website erforderlich, während andere uns helfen, die Website zu verbessern.',
      moreInfo: 'Mehr Informationen',
      accept: 'Alle akzeptieren',
      reject: 'Nur notwendige',
    },
    en: {
      title: 'Cookie Settings',
      description: 'We use cookies to enhance your experience on our website. Some cookies are necessary for the operation of the website, while others help us improve the site.',
      moreInfo: 'More Information',
      accept: 'Accept All',
      reject: 'Essential Only',
    },
  };

  const t = content[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5 duration-500">
      <div className="container max-w-4xl mx-auto">
        <div className="bg-card border-2 border-border rounded-xl shadow-2xl p-6 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {t.title}
                </h3>
                <button 
                  onClick={handleReject}
                  className="sm:hidden text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {t.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button 
                  onClick={handleAccept}
                  className="order-1"
                >
                  {t.accept}
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={handleReject}
                  className="order-2"
                >
                  {t.reject}
                </Button>
                
                <Link 
                  to="/datenschutz" 
                  className="order-3 text-sm text-primary hover:text-primary/80 underline underline-offset-4 transition-colors text-center sm:text-left sm:ml-2"
                >
                  {t.moreInfo}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;