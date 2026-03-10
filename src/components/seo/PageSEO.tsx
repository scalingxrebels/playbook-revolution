import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { seoRegistry } from '@/data/seoRegistry';
import { faqRegistry } from '@/data/faqRegistry';
import { breadcrumbRegistry } from '@/data/breadcrumbRegistry';
import FAQSchema from './FAQSchema';
import BreadcrumbSchema from './BreadcrumbSchema';

const BASE_URL = 'https://playbook-revolution.lovable.app';

/**
 * Auto-SEO component that reads SEO data from the registry based on current route.
 * Also auto-injects FAQSchema and BreadcrumbSchema when data exists for the route.
 */
const PageSEO: React.FC<{ path?: string }> = ({ path: overridePath }) => {
  const location = useLocation();
  const { language } = useLanguage();
  const path = overridePath || location.pathname;

  // Try exact match first, then strip trailing slash
  const entry = seoRegistry[path] || seoRegistry[path.replace(/\/$/, '')] || seoRegistry[path + '/'];
  const faqData = faqRegistry[path] || faqRegistry[path.replace(/\/$/, '')];
  const breadcrumbData = breadcrumbRegistry[path] || breadcrumbRegistry[path.replace(/\/$/, '')];

  if (!entry) return null;

  const title = entry.title[language];
  const description = entry.description[language];
  const canonicalUrl = `${BASE_URL}${path}`;
  const ogImage = entry.ogImage
    ? (entry.ogImage.startsWith('http') ? entry.ogImage : `${BASE_URL}${entry.ogImage}`)
    : `${BASE_URL}/images/scalingx-logo.png`;

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        <link rel="alternate" hrefLang="de" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="ScalingX" />
        <meta property="og:locale" content={language === 'de' ? 'de_DE' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      {faqData && faqData.length > 0 && <FAQSchema questions={faqData} />}
      {breadcrumbData && breadcrumbData.length > 0 && <BreadcrumbSchema items={breadcrumbData} />}
    </>
  );
};

export default PageSEO;
