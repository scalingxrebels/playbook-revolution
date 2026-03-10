import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://playbook-revolution.lovable.app';

const OrganizationSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ScalingX',
    url: BASE_URL,
    logo: `${BASE_URL}/images/scalingx-logo.png`,
    description: 'AI-Native Scaling Advisory für Series A-D SaaS-Unternehmen. 3-5x schneller skalieren mit forschungsbasierten Systemen.',
    foundingDate: '2024',
    founders: [
      {
        '@type': 'Person',
        name: 'Michel Lason',
        jobTitle: 'Founder & CEO',
        url: `${BASE_URL}/ml`,
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/scalingx/',
      'https://www.linkedin.com/in/michellason/',
    ],
    areaServed: [
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Austria' },
      { '@type': 'Country', name: 'Switzerland' },
    ],
    knowsAbout: [
      'AI-Native Scaling',
      'SaaS Growth',
      'Revenue Architecture',
      'GTM Strategy',
      'Series A-D Scaling',
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default OrganizationSchema;
