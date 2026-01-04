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
  'nav.playbooks': { en: 'Playbooks', de: 'Playbooks' },
  'nav.community': { en: 'Community', de: 'Community' },
  'nav.research': { en: 'Research', de: 'Forschung' },
  
  // Hero - ScalingX
  'hero.tagline': { en: 'EXPERTISE × SPEED = IMPACT', de: 'EXPERTISE × SPEED = IMPACT' },
  'hero.headline': { 
    en: 'Scaling fails at the system.', 
    de: 'Skalierung scheitert am System.' 
  },
  'hero.subheadline': { 
    en: "We deliver systems and create impact. Growth shouldn't be a struggle, it should have a system.", 
    de: 'Wir liefern Systeme und schaffen Impact. Wachstum sollte kein Kampf sein, es sollte System haben.' 
  },
  'hero.cta': { en: 'Book Inflection Call', de: 'Inflection Call buchen' },
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

  // Capabilities (DimensionsGrid)
  'capability1': { en: 'Strategy', de: 'Strategie' },
  'capability2': { en: 'Setup', de: 'Setup' },
  'capability3': { en: 'Execution', de: 'Execution' },
  'capability4': { en: 'Operationalization', de: 'Operationalisierung' },
  
  // Team Section
  'team.title': { en: 'The Team', de: 'Das Team' },
  'team.subtitle': { en: "We're not consultants.", de: 'Wir sind keine Berater.' },
  'team.description': { en: "We're walking Inflection Points.", de: 'Wir sind wandelnde Inflection Points.' },
  
  // Hypergrowth System
  'hypergrowth.title': { en: 'Scaling Systems:', de: 'Scaling Systems:' },
  'hypergrowth.subtitle': { en: 'Growth engines that roar.', de: 'Wachstumsmotoren, die brummen.' },
  
  // Offerings
  'offerings.title': { en: 'Strategies', de: 'Strategies' },
  'offerings.subtitle': { en: 'Three paths to measurable impact', de: 'Drei Wege zu messbarem Impact' },
  
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
  'general.readMore': { en: 'Read More', de: 'Mehr erfahren' },
  'general.bookCall': { en: 'Book Call', de: 'Call buchen' },
  'general.download': { en: 'Download', de: 'Herunterladen' },
  'general.filter': { en: 'Filter', de: 'Filtern' },
  'general.search': { en: 'Search', de: 'Suchen' },
  'general.all': { en: 'All', de: 'Alle' },
  
  // Playbooks
  'playbooks.title': { en: 'Playbook Library', de: 'Playbook-Bibliothek' },
  'playbooks.subtitle': { en: 'Battle-tested frameworks for AI-Native scaling', de: 'Praxiserprobte Frameworks für AI-Native Scaling' },
  
  // Community
  'community.title': { en: 'Community Hub', de: 'Community Hub' },
  'community.subtitle': { en: 'Connect with scaling experts', de: 'Vernetze dich mit Scaling-Experten' },
  
  // Research
  'research.title': { en: 'Research Foundation', de: 'Research Foundation' },
  'research.subtitle': { en: 'Academic foundations of AI-Native Scaling', de: 'Akademische Grundlagen des AI-Native Scaling' },
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
