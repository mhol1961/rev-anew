import { Metadata } from 'next';
import IndustryDetailLayout from '@/components/industries/IndustryDetailLayout';
import PageLayout from '@/components/layout/PageLayout';

export const metadata: Metadata = {
  title: 'Financial Services Solutions | Technology Alliance Solutions',
  description: 'Transform customer relationships, ensure regulatory compliance, and drive digital innovation with secure CRM, ERP, and automation solutions built for banking, insurance, and fintech organizations.',
};

export default function FinancialServicesPage() {
  return (
    <PageLayout>
      <IndustryDetailLayout
        title="Financial Services"
        description="Transform customer relationships, ensure regulatory compliance, and drive digital innovation with secure CRM, ERP, and automation solutions built for banking, insurance, and fintech organizations."
        iconName="FaUniversity"
        challenges={[
          'Stringent regulatory compliance (SOX, GDPR, FINRA)',
          'Complex customer onboarding and KYC processes',
          'Legacy systems and digital transformation needs',
          'Customer experience across multiple channels',
          'Data security and fraud prevention'
        ]}
        solutions={[
          'Financial Services CRM platforms (Salesforce FSC, Microsoft Dynamics 365)',
          'Secure customer portals and digital banking experiences',
          'Compliance and risk management automation',
          'Marketing automation for personalized campaigns (Marketo, HubSpot, Pardot)',
          'Advanced analytics and fraud detection with AI',
          'Multi-channel customer engagement solutions'
        ]}
        benefits={[
          'Enhanced customer experience and loyalty',
          'Full regulatory compliance and audit readiness',
          'Streamlined customer onboarding and service',
          'Improved operational efficiency and cost reduction',
          'Real-time risk monitoring and fraud detection',
          'Secure, scalable digital infrastructure'
        ]}
      />
    </PageLayout>
  );
}
