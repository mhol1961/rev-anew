import { Metadata } from 'next';
import IndustryDetailLayout from '@/components/industries/IndustryDetailLayout';
import PageLayout from '@/components/layout/PageLayout';

export const metadata: Metadata = {
  title: 'Healthcare Solutions | Technology Alliance Solutions',
  description: 'Streamline patient care, optimize operations, and enhance compliance with integrated CRM and ERP solutions tailored for healthcare providers and medical organizations.',
};

export default function HealthcarePage() {
  return (
    <PageLayout>
      <IndustryDetailLayout
        title="Healthcare"
        description="Streamline patient care, optimize operations, and enhance compliance with integrated CRM and ERP solutions tailored for healthcare providers and medical organizations."
        iconName="FaHospital"
        challenges={[
          'Complex regulatory compliance requirements (HIPAA, HITECH)',
          'Fragmented patient data across multiple systems',
          'Inefficient care coordination and referral management',
          'Limited visibility into operational performance',
          'Difficulty tracking patient engagement and satisfaction'
        ]}
        solutions={[
          'Enterprise CRM platforms (Salesforce, Microsoft Dynamics 365, HubSpot)',
          'Secure patient portals and HIPAA-compliant communications',
          'Integrated EHR/EMR system connections',
          'Marketing automation for patient engagement and outreach',
          'Advanced analytics dashboards for clinical and operational insights',
          'Referral management and provider relationship tools'
        ]}
        benefits={[
          'Enhanced patient experience and satisfaction',
          'Improved care coordination across departments',
          'Full regulatory compliance and data security',
          'Real-time operational insights and reporting',
          'Increased patient retention and engagement',
          'Streamlined administrative processes'
        ]}
      />
    </PageLayout>
  );
}
