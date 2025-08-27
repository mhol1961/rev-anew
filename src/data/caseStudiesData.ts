export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  industry: string;
  services: string[];
  results: {
    metric: string;
    improvement: string;
  }[];
  overview: string;
  challenge: string;
  solution: string;
  implementation: string;
  outcome: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  technologies: string[];
  duration: string;
  teamSize: string;
  publishDate: string;
  featured: boolean;
  featured_image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'global-manufacturing-crm-transformation',
    title: 'Global Manufacturing CRM Transformation',
    subtitle: 'Streamlining operations across 15 countries with unified CRM solution',
    company: 'Global Manufacturing Solutions Inc.',
    industry: 'Manufacturing',
    services: ['CRM Implementation', 'System Integration', 'Training'],
    results: [
      { metric: 'Sales Efficiency', improvement: '40% increase' },
      { metric: 'Lead Processing Time', improvement: '60% reduction' },
      { metric: 'Customer Satisfaction', improvement: '95% rating' }
    ],
    overview: 'A comprehensive CRM transformation for a global manufacturing company operating across 15 countries, unifying their sales processes and customer data management.',
    challenge: 'Disconnected systems across multiple regions led to inconsistent customer experiences, duplicate data entry, and missed sales opportunities. The company was using 8 different CRM systems with no central visibility.',
    solution: 'Implemented Microsoft Dynamics 365 as a unified global CRM platform with custom integrations to existing ERP systems and manufacturing tools.',
    implementation: 'Phased rollout across regions with comprehensive training programs, data migration, and change management support.',
    outcome: 'Achieved 40% improvement in sales efficiency, 60% reduction in lead processing time, and 95% customer satisfaction rating.',
    testimonial: {
      quote: "TAS transformed how we manage customer relationships globally. The unified system has given us unprecedented visibility into our sales pipeline.",
      author: "Sarah Johnson",
      position: "VP of Sales Operations"
    },
    technologies: ['Microsoft Dynamics 365', 'Power Platform', 'Azure Integration Services'],
    duration: '8 months',
    teamSize: '12 specialists',
    publishDate: '2024-01-15',
    featured: true,
    featured_image: '/images/case-studies/manufacturing-crm.jpg'
  },
  {
    id: '2',
    slug: 'healthcare-marketing-automation',
    title: 'Healthcare Marketing Automation Success',
    subtitle: 'Transforming patient engagement through intelligent automation',
    company: 'Regional Healthcare Network',
    industry: 'Healthcare',
    services: ['Marketing Automation', 'CRM Integration', 'Compliance'],
    results: [
      { metric: 'Patient Engagement', improvement: '300% increase' },
      { metric: 'Appointment Scheduling', improvement: '50% improvement' },
      { metric: 'Campaign ROI', improvement: '250% increase' }
    ],
    overview: 'Implemented comprehensive marketing automation solution for a regional healthcare network to improve patient engagement and streamline communications.',
    challenge: 'Manual patient communication processes, low engagement rates, and compliance concerns with healthcare regulations were hindering patient retention and acquisition.',
    solution: 'Deployed HubSpot with healthcare-compliant automation workflows, integrated with existing patient management systems.',
    implementation: 'HIPAA-compliant setup with automated patient journey workflows, appointment reminders, and educational content delivery.',
    outcome: 'Achieved 300% increase in patient engagement, 50% improvement in appointment scheduling efficiency, and 250% increase in campaign ROI.',
    technologies: ['HubSpot', 'Healthcare APIs', 'HIPAA Compliance Tools'],
    duration: '6 months',
    teamSize: '8 specialists',
    publishDate: '2023-11-20',
    featured: true,
    featured_image: '/images/case-studies/healthcare-automation.jpg'
  }
];

export default caseStudies;