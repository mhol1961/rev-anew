import { FaHospital, FaIndustry, FaLandmark, FaLaptopCode, FaBriefcase } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  link: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export const industries: Industry[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Streamline patient care, optimize operations, and enhance compliance with integrated CRM and ERP solutions tailored for healthcare providers and medical organizations.',
    icon: FaHospital,
    link: '/industries/healthcare',
    stats: [
      { label: 'Patient Satisfaction', value: '95%' },
      { label: 'Efficiency Gain', value: '40%' }
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Drive operational excellence with supply chain optimization, production tracking, and quality management through powerful ERP and automation solutions.',
    icon: FaIndustry,
    link: '/industries/manufacturing',
    stats: [
      { label: 'Production Efficiency', value: '35%' },
      { label: 'Cost Reduction', value: '25%' }
    ]
  },
  {
    id: 'government',
    title: 'Government',
    description: 'Modernize public services, improve citizen engagement, and ensure transparency with secure, compliant technology solutions designed for government agencies.',
    icon: FaLandmark,
    link: '/industries/government',
    stats: [
      { label: 'Service Delivery', value: '50%' },
      { label: 'Citizen Satisfaction', value: '92%' }
    ]
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'Accelerate growth and innovation with scalable CRM, marketing automation, and integration solutions built for fast-moving technology companies.',
    icon: FaLaptopCode,
    link: '/industries/technology',
    stats: [
      { label: 'Sales Cycle Reduction', value: '45%' },
      { label: 'Lead Conversion', value: '60%' }
    ]
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    description: 'Optimize client relationships, project delivery, and resource management with integrated solutions designed for consulting, legal, and professional service firms.',
    icon: FaBriefcase,
    link: '/industries/professional-services',
    stats: [
      { label: 'Project Delivery', value: '98%' },
      { label: 'Client Retention', value: '94%' }
    ]
  }
];
