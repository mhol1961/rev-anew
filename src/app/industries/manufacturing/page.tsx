import { Metadata } from 'next';
import IndustryDetailLayout from '@/components/industries/IndustryDetailLayout';
import PageLayout from '@/components/layout/PageLayout';

export const metadata: Metadata = {
  title: 'Manufacturing Solutions | Technology Alliance Solutions',
  description: 'Drive operational excellence with supply chain optimization, production tracking, and quality management through powerful ERP and automation solutions.',
};

export default function ManufacturingPage() {
  return (
    <PageLayout>
      <IndustryDetailLayout
        title="Manufacturing"
        description="Drive operational excellence with supply chain optimization, production tracking, and quality management through powerful ERP and automation solutions."
        iconName="FaIndustry"
        challenges={[
          'Complex supply chain management and visibility',
          'Production planning and inventory optimization',
          'Quality control and compliance tracking',
          'Disconnected systems across facilities',
          'Limited real-time operational insights'
        ]}
        solutions={[
          'Enterprise ERP platforms (SAP, Microsoft Dynamics 365, Oracle NetSuite)',
          'Supply chain management and demand forecasting',
          'Production scheduling and capacity planning',
          'Quality management and compliance tracking',
          'IoT integration and predictive maintenance',
          'Real-time manufacturing analytics and business intelligence'
        ]}
        benefits={[
          'Optimized production efficiency and throughput',
          'Reduced inventory costs and waste',
          'Improved supply chain visibility',
          'Enhanced quality control and compliance',
          'Data-driven decision making',
          'Seamless integration across operations'
        ]}
      />
    </PageLayout>
  );
}
