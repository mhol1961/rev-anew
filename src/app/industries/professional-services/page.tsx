import { Metadata } from 'next';
import IndustryDetailLayout from '@/components/industries/IndustryDetailLayout';
import PageLayout from '@/components/layout/PageLayout';

export const metadata: Metadata = {
  title: 'Professional Services Solutions | Technology Alliance Solutions',
  description: 'Optimize client relationships, project delivery, and resource management with integrated solutions designed for consulting, legal, and professional service firms.',
};

export default function ProfessionalServicesPage() {
  return (
    <PageLayout>
      <IndustryDetailLayout
        title="Professional Services"
        description="Optimize client relationships, project delivery, and resource management with integrated solutions designed for consulting, legal, and professional service firms."
        iconName="FaBriefcase"
        challenges={[
          'Client relationship management and retention',
          'Project profitability and resource allocation',
          'Time tracking and billing accuracy',
          'Business development and proposal management',
          'Knowledge management and collaboration'
        ]}
        solutions={[
          'Professional Services Automation (PSA) platforms',
          'CRM solutions for client relationship management (Salesforce, Dynamics 365, HubSpot)',
          'Project management and engagement tracking',
          'Resource planning and utilization analytics',
          'Time and expense management integration',
          'Proposal automation and document generation'
        ]}
        benefits={[
          'Improved client satisfaction and retention',
          'Enhanced project profitability and visibility',
          'Optimized resource utilization',
          'Streamlined billing and invoicing',
          'Better business development outcomes',
          'Improved team collaboration and knowledge sharing'
        ]}
      />
    </PageLayout>
  );
}
