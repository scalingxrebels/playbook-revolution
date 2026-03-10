import { useLanguage } from '@/contexts/LanguageContext';
import { seoRegistry, type SEOData } from '@/data/seoRegistry';

/**
 * Hook that returns SEO data for the current page based on path and language.
 */
export function useSEO(path: string): { title: string; description: string; ogImage?: string } {
  const { language } = useLanguage();
  const entry: SEOData | undefined = seoRegistry[path];

  if (!entry) {
    return {
      title: 'ScalingX — AI-Native Scaling Advisory',
      description: 'Scale 3-5x faster with research-backed AI-Native systems.',
    };
  }

  return {
    title: entry.title[language],
    description: entry.description[language],
    ogImage: entry.ogImage,
  };
}
