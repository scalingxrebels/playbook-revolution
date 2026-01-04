import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Language = 'en' | 'de';

interface Translations {
  [key: string]: {
    en: string;
    de: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', de: 'Start' },
  'nav.calculator': { en: 'ROI Calculator', de: 'ROI-Rechner' },
  'nav.frameworks': { en: 'Frameworks', de: 'Frameworks' },
  'nav.caseStudies': { en: 'Case Studies', de: 'Fallstudien' },
  'nav.knowledge': { en: 'Knowledge Base', de: 'Wissensdatenbank' },
  
  // Hero
  'hero.headline': { 
    en: 'Your Scaling Playbook is obsolete', 
    de: 'Dein Scaling Playbook ist veraltet' 
  },
  'hero.subheadline': { 
    en: 'Discover how AI-Powered and AI-Native Scaling revolutionizes your growth', 
    de: 'Entdecke wie AI-Powered und AI-Native Scaling dein Wachstum revolutioniert' 
  },
  'hero.cta': { en: 'Start ROI Calculator', de: 'ROI-Rechner starten' },
  'hero.learnMore': { en: 'Learn More', de: 'Mehr erfahren' },
  
  // Stats
  'stats.faster': { en: 'faster scaling', de: 'schnelleres Scaling' },
  'stats.efficiency': { en: 'efficiency gain', de: 'Effizienzgewinn' },
  'stats.costReduction': { en: 'cost reduction', de: 'Kostenreduktion' },
  'stats.timeTo100m': { en: 'time to €100M', de: 'Zeit zu €100M' },
  
  // ROI Calculator
  'calc.title': { en: 'ROI Calculator', de: 'ROI-Rechner' },
  'calc.subtitle': { 
    en: 'Compare your potential across different scaling approaches', 
    de: 'Vergleiche dein Potenzial über verschiedene Scaling-Ansätze' 
  },
  'calc.employees': { en: 'Number of Employees', de: 'Anzahl Mitarbeiter' },
  'calc.revenue': { en: 'Annual Revenue (€)', de: 'Jahresumsatz (€)' },
  'calc.growthRate': { en: 'Current Growth Rate (%)', de: 'Aktuelle Wachstumsrate (%)' },
  'calc.cac': { en: 'Customer Acquisition Cost (€)', de: 'Kundenakquisitionskosten (€)' },
  
  'calc.traditional': { en: 'Traditional', de: 'Traditionell' },
  'calc.aiPowered': { en: 'AI-Powered', de: 'AI-Unterstützt' },
  'calc.aiNative': { en: 'AI-Native', de: 'AI-Nativ' },
  
  'calc.revenuePerEmployee': { en: 'Revenue/Employee', de: 'Umsatz/Mitarbeiter' },
  'calc.projectedGrowth': { en: 'Projected Growth', de: 'Prognostiziertes Wachstum' },
  'calc.timeTo100M': { en: 'Time to €100M', de: 'Zeit zu €100M' },
  'calc.coordinationCost': { en: 'Coordination Cost', de: 'Koordinationskosten' },
  'calc.years': { en: 'years', de: 'Jahre' },
  'calc.months': { en: 'months', de: 'Monate' },
  
  'calc.baseline': { en: 'Baseline', de: 'Ausgangswert' },
  'calc.improvement': { en: 'improvement', de: 'Verbesserung' },
  'calc.reduction': { en: 'reduction', de: 'Reduktion' },
  
  // Comparison
  'comparison.title': { en: 'Why Traditional Scaling Fails', de: 'Warum traditionelles Scaling versagt' },
  'comparison.traditional.title': { en: 'Traditional Scaling', de: 'Traditionelles Scaling' },
  'comparison.traditional.desc': { 
    en: 'Linear growth with exponential coordination costs', 
    de: 'Lineares Wachstum mit exponentiellen Koordinationskosten' 
  },
  'comparison.aiPowered.title': { en: 'AI-Powered Scaling', de: 'AI-unterstütztes Scaling' },
  'comparison.aiPowered.desc': { 
    en: 'Accelerated growth with optimized processes', 
    de: 'Beschleunigtes Wachstum mit optimierten Prozessen' 
  },
  'comparison.aiNative.title': { en: 'AI-Native Scaling', de: 'AI-natives Scaling' },
  'comparison.aiNative.desc': { 
    en: 'Superlinear growth with near-zero coordination costs', 
    de: 'Superlineares Wachstum mit nahezu null Koordinationskosten' 
  },
  
  // Footer
  'footer.rights': { en: 'All rights reserved', de: 'Alle Rechte vorbehalten' },
  'footer.privacy': { en: 'Privacy', de: 'Datenschutz' },
  'footer.terms': { en: 'Terms', de: 'AGB' },
  
  // Theme
  'theme.light': { en: 'Light', de: 'Hell' },
  'theme.dark': { en: 'Dark', de: 'Dunkel' },
  
  // General
  'general.loading': { en: 'Loading...', de: 'Laden...' },
  'general.error': { en: 'Error', de: 'Fehler' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'de' : 'en');
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
