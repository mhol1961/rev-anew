import { Metadata } from 'next';
import IndustryDetailLayout from '@/components/industries/IndustryDetailLayout';
import PageLayout from '@/components/layout/PageLayout';

export const metadata: Metadata = {
  title: 'Government Solutions | Technology Alliance Solutions',
  description: 'Modernize public services, improve citizen engagement, and ensure transparency with secure, compliant technology solutions designed for government agencies.',
};

export default function GovernmentPage() {
  return (
    <PageLayout>
      <IndustryDetailLayout
        title="Government"
        description="Modernize public services, improve citizen engagement, and ensure transparency with secure, compliant technology solutions designed for government agencies."
        iconName="FaLandmark"
        challenges={[
          'Legacy systems and outdated technology infrastructure',
          'Siloed data across departments and agencies',
          'Limited citizen self-service capabilities',
          'Transparency and accountability requirements',
          'Budget constraints and resource limitations'
        ]}
        solutions={[
          'Government-compliant CRM and case management platforms',
          'Secure citizen portals and case management',
          'Cross-department collaboration and data sharing',
          'Cloud infrastructure for security and compliance (Azure, AWS GovCloud)',
          'Low-code platforms for rapid application development',
          'Real-time dashboards for performance tracking'
        ]}
        benefits={[
          'Improved citizen satisfaction and engagement',
          'Enhanced transparency and accountability',
          'Streamlined cross-department collaboration',
          'Faster service delivery and response times',
          'Reduced operational costs',
          'Full security and compliance with government standards'
        ]}
      />
    </PageLayout>
  );
}
