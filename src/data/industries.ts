import { FaHospital, FaIndustry, FaLandmark, FaLaptopCode, FaBriefcase, FaUniversity } from 'react-icons/fa';
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
    link: '/industries/healthcare'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Drive operational excellence with supply chain optimization, production tracking, and quality management through powerful ERP and automation solutions.',
    icon: FaIndustry,
    link: '/industries/manufacturing'
  },
  {
    id: 'government',
    title: 'Government',
    description: 'Modernize public services, improve citizen engagement, and ensure transparency with secure, compliant technology solutions designed for government agencies.',
    icon: FaLandmark,
    link: '/industries/government'
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'Accelerate growth and innovation with scalable CRM, marketing automation, and integration solutions built for fast-moving technology companies.',
    icon: FaLaptopCode,
    link: '/industries/technology'
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    description: 'Optimize client relationships, project delivery, and resource management with integrated solutions designed for consulting, legal, and professional service firms.',
    icon: FaBriefcase,
    link: '/industries/professional-services'
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    description: 'Transform customer relationships, ensure regulatory compliance, and drive digital innovation with secure CRM, ERP, and automation solutions built for banking, insurance, and fintech organizations.',
    icon: FaUniversity,
    link: '/industries/financial-services'
  }
];
