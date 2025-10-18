'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/ui/AnimatedButton';
import AnimatedText from '@/components/ui/AnimatedText';
import AnimatedIcon from '@/components/ui/AnimatedIcon';
import AnimatedSection from '@/components/ui/AnimatedSection';
import type { CMSSectionWithFields } from '@/types/cms';
import { getFieldValue } from '@/lib/cms';
import {
  FaNetworkWired,
  FaChartLine,
  FaUserFriends,
  FaLaptopCode,
  FaCogs,
  FaDatabase,
  FaExchangeAlt
} from 'react-icons/fa';

interface SolutionsSectionProps {
  cmsContent?: CMSSectionWithFields | null;
}

const features = [
  {
    title: 'CRM Solutions',
    shortDescription: 'Streamline sales, marketing, and service with tailored CRM implementations.',
    description: 'Deploy and optimize Microsoft Dynamics 365, Salesforce, and HubSpot CRM. From data migration to user adoption, TAS ensures CRM success tailored to your business.',
    icon: FaUserFriends,
    link: '/services/crm'
  },
  {
    title: 'ERP Solutions',
    shortDescription: 'Modernize financials, operations, and supply chain with leading ERP platforms.',
    description: 'TAS supports Microsoft Dynamics 365 Finance & Operations, Sage, and NetSuite. We also provide integration and optimization across ERP systems such as SAP and Oracle, ensuring seamless connectivity with CRM, marketing, and analytics platforms.',
    icon: FaCogs,
    link: '/services/erp'
  },
  {
    title: 'Marketing Automation',
    shortDescription: 'Drive smarter campaigns with enterprise-grade marketing automation platforms.',
    description: 'Implement and optimize Marketo, Dynamics 365 Customer Insights, HubSpot, and Salesforce Marketing Cloud. TAS helps you orchestrate campaigns, personalize journeys, and measure ROI.',
    icon: FaChartLine,
    link: '/services/marketing-automation'
  },
  {
    title: 'Power Platform Solutions',
    shortDescription: 'Unlock innovation with Power BI, Power Apps, and Power Automate.',
    description: 'From dashboards to custom apps, TAS leverages Microsoft Power Platform to empower productivity, streamline processes, and deliver scalable business solutions.',
    icon: FaLaptopCode,
    link: '/services/power-platform'
  },
  {
    title: 'Systems Integration',
    shortDescription: 'Eliminate silos by connecting CRM, ERP, and marketing platforms.',
    description: 'TAS designs secure APIs and middleware that unify systems, automate workflows, and ensure seamless data flow across your business.',
    icon: FaExchangeAlt,
    link: '/services/systems-integration'
  },
  {
    title: 'Cloud Architecture',
    shortDescription: 'Build secure, scalable, and cloud-native environments.',
    description: 'TAS architects cloud solutions using AWS, Azure, and Kubernetes. We deliver secure, scalable infrastructures that support long-term growth and innovation.',
    icon: FaNetworkWired,
    link: '/services/cloud-architecture'
  },
  {
    title: 'Data & Analytics',
    shortDescription: 'Transform raw data into actionable insights.',
    description: 'TAS provides data migration, cleansing, and analytics solutions. Our dashboards and reporting empower smarter, faster, and more confident decision-making.',
    icon: FaDatabase,
    link: '/services/data-analytics'
  },
  {
    title: 'Technology Consulting & Advisory',
    shortDescription: 'Align technology investments with business strategy.',
    description: 'TAS subject matter experts deliver strategic guidance, solution architecture, and advisory services. From CRM and ERP roadmaps to marketing transformation and cloud adoption, we help you achieve measurable outcomes.',
    icon: FaUserFriends,
    link: '/services/technology-consulting'
  },
  {
    title: 'Change Management & Adoption',
    shortDescription: 'Ensure long-term success with effective adoption programs.',
    description: 'TAS builds structured adoption strategies with user training and organizational change management. We maximize the value of your technology investments by ensuring successful adoption.',
    icon: FaUserFriends,
    link: '/services/change-management'
  },
  {
    title: 'Customer Experience (CX) Design',
    shortDescription: 'Create seamless customer experiences across every touchpoint.',
    description: 'TAS enhances customer engagement by aligning CRM, marketing automation, and service strategies to deliver meaningful and consistent experiences.',
    icon: FaUserFriends,
    link: '/services/customer-experience'
  },
  {
    title: 'Governance & Compliance',
    shortDescription: 'Protect your business with tailored governance frameworks.',
    description: 'TAS ensures data security and regulatory compliance with governance models designed for healthcare, financial services, and government organizations.',
    icon: FaCogs,
    link: '/services/governance-compliance'
  },
  {
    title: 'Managed Services & Support',
    shortDescription: 'Extend your team with ongoing platform support and monitoring.',
    description: 'TAS provides continuous support, optimization, and administration for CRM, ERP, marketing, and cloud platforms, ensuring your systems perform at their best.',
    icon: FaCogs,
    link: '/services/managed-services'
  }
];

export default function SolutionsSection({ cmsContent }: SolutionsSectionProps) {
  const [expandedTile, setExpandedTile] = useState<string | null>(null);

  // Get content from CMS or use fallback defaults
  const tagText = cmsContent
    ? getFieldValue(cmsContent, 'tag_text') || 'Our Services'
    : 'Our Services';

  const heading = cmsContent
    ? getFieldValue(cmsContent, 'heading') || 'Proven Solutions That Deliver Results'
    : 'Proven Solutions That Deliver Results';

  const subtext = cmsContent
    ? getFieldValue(cmsContent, 'subtext') || 'TAS delivers CRM, ERP, Marketing Automation, and Cloud Solutions designed to optimize operations, empower teams, and drive measurable growth across industries.'
    : 'TAS delivers CRM, ERP, Marketing Automation, and Cloud Solutions designed to optimize operations, empower teams, and drive measurable growth across industries.';

  const buttonText = cmsContent
    ? getFieldValue(cmsContent, 'button_text') || 'View All Solutions'
    : 'View All Solutions';

  const buttonUrl = cmsContent
    ? getFieldValue(cmsContent, 'button_url') || '/services'
    : '/services';

  const toggleTile = (title: string) => {
    setExpandedTile(expandedTile === title ? null : title);
  };

  return (
    <AnimatedSection className="section-padding bg-primary-light dark:bg-dark-bg text-text-primary dark:text-dark-text relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="content-header">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm xs:text-base text-primary-blue font-semibold tracking-wide uppercase mb-3 inline-block px-3 xs:px-4 py-1 bg-primary-blue/10 rounded-full"
          >
            {tagText}
          </motion.h2>
          <AnimatedText
            text={heading}
            className="heading-2 text-center"
            highlight={false}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="body-large text-center max-w-3xl mx-auto px-4 xs:px-0 mt-4"
          >
            {subtext}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const variants = ['primary', 'secondary', 'gradient', 'outline'];
            const variant = variants[index % variants.length] as 'primary' | 'secondary' | 'gradient' | 'outline';
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(35, 41, 70, 0.08), 0 10px 10px -5px rgba(35, 41, 70, 0.04)' }}
                className="card-service hover:border-primary-blue/40"
              >
                <div className="absolute inset-0 gradient-brand-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4 xs:mb-6 flex justify-center">
                    <AnimatedIcon
                      icon={feature.icon}
                      delay={0.1 + index * 0.1}
                      variant={variant}
                      size="lg"
                      className={index === 1 ? "dark:text-white dark:border-sky-400 dark:border-2 dark:bg-white/10" : "dark:text-white"}
                    />
                  </div>
                  <h3 className="heading-5 text-center mt-3 xs:mt-4 group-hover:text-primary-blue transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="body-base mt-2 xs:mt-3">
                    {feature.shortDescription}
                  </p>
                  {expandedTile === feature.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700"
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </motion.div>
                  )}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="mt-4 xs:mt-5"
                  >
                    <button
                      onClick={() => toggleTile(feature.title)}
                      className="link-primary inline-flex items-center font-medium text-sm xs:text-base"
                    >
                      {expandedTile === feature.title ? 'Show less' : 'Learn more'}
                      <svg
                        className={`ml-2 w-3 h-3 xs:w-4 xs:h-4 transition-transform ${expandedTile === feature.title ? 'rotate-90' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href={buttonUrl}>
            <AnimatedButton className="bg-primary-blue text-white hover:bg-primary-blue/90 border-none shadow-md">
              {buttonText}
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
