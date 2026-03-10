import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://playbook-revolution.lovable.app';

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  url?: string;
  sameAs?: string[];
  worksFor?: string;
}

const PersonSchema: React.FC<PersonSchemaProps> = ({
  name,
  jobTitle,
  description,
  image,
  url,
  sameAs = [],
  worksFor = 'ScalingX',
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    ...(image && { image: image.startsWith('http') ? image : `${BASE_URL}${image}` }),
    ...(url && { url: `${BASE_URL}${url}` }),
    ...(sameAs.length > 0 && { sameAs }),
    worksFor: {
      '@type': 'Organization',
      name: worksFor,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default PersonSchema;
