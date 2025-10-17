import { Metadata } from 'next';
import IndustryDetailLayout from '@/components/industries/IndustryDetailLayout';
import PageLayout from '@/components/layout/PageLayout';

export const metadata: Metadata = {
  title: 'Technology Solutions | Technology Alliance Solutions',
  description: 'Accelerate growth and innovation with scalable CRM, marketing automation, and integration solutions built for fast-moving technology companies.',
};

export default function TechnologyPage() {
  return (
    <PageLayout>
      <IndustryDetailLayout
        title="Technology"
        description="Accelerate growth and innovation with scalable CRM, marketing automation, and integration solutions built for fast-moving technology companies."
        iconName="FaLaptopCode"
        challenges={[
          'Rapid growth and scaling requirements',
          'Complex sales cycles and lengthy buyer journeys',
          'Managing high-volume lead generation',
          'Product-led growth and user adoption tracking',
          'Integration across multiple tech stacks'
        ]}
        solutions={[
          'Salesforce or HubSpot CRM for technology companies',
          'Marketing automation with Marketo or HubSpot',
          'Product analytics and usage tracking integration',
          'Multi-touch attribution and revenue analytics',
          'API integrations and custom middleware',
          'Scalable cloud architecture on Azure or AWS'
        ]}
        benefits={[
          'Accelerated sales cycles and higher conversion rates',
          'Improved lead quality and nurturing',
          'Data-driven product and marketing decisions',
          'Seamless integration across your tech stack',
          'Scalable infrastructure for rapid growth',
          'Enhanced customer onboarding and adoption'
        ]}
      />
    </PageLayout>
  );
}
