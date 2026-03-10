import { Helmet } from 'react-helmet-async';

interface HowToStep {
  name: string;
  text: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration, e.g. "P90D" for 90 days
}

const HowToSchema: React.FC<HowToSchemaProps> = ({ name, description, steps, totalTime }) => {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  if (totalTime) {
    schema.totalTime = totalTime;
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default HowToSchema;
