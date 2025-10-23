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
    title: 'CRM & Pipeline Management',
    shortDescription: 'Manage leads, contacts, and deals with an intuitive all-in-one CRM.',
    description: 'Track every customer interaction, visualize your sales pipeline, and close more deals with GoHighLevel\'s powerful CRM. Custom fields, stages, and automation keep your team aligned and productive.',
    icon: FaUserFriends,
    link: '/services/crm'
  },
  {
    title: 'Reputation Management',
    shortDescription: 'Build trust and credibility with automated review generation and monitoring.',
    description: 'Request, collect, and showcase customer reviews automatically. Monitor your online reputation across Google, Facebook, and other platforms. Respond to feedback and turn happy customers into brand advocates.',
    icon: FaChartLine,
    link: '/services/reputation-management'
  },
  {
    title: 'Marketing Automation',
    shortDescription: 'Nurture leads and automate campaigns with smart workflows.',
    description: 'Create sophisticated marketing campaigns with drag-and-drop automation. Send targeted messages based on behavior, segment your audience, and nurture leads from first contact to conversion.',
    icon: FaChartLine,
    link: '/services/marketing-automation'
  },
  {
    title: 'Funnel & Website Builder',
    shortDescription: 'Build high-converting funnels and websites without code.',
    description: 'Create stunning landing pages, sales funnels, and complete websites with an intuitive drag-and-drop builder. Mobile-responsive templates, A/B testing, and conversion tracking included.',
    icon: FaLaptopCode,
    link: '/services/website-creation'
  },
  {
    title: 'SMS & Email Marketing',
    shortDescription: 'Reach customers instantly with multi-channel messaging.',
    description: 'Send personalized SMS and email campaigns that drive engagement. Schedule messages, automate follow-ups, and track opens, clicks, and conversions in real-time.',
    icon: FaExchangeAlt,
    link: '/services/email-marketing'
  },
  {
    title: 'Lead Generation',
    shortDescription: 'Capture and qualify leads across multiple channels.',
    description: 'Deploy custom forms, chatbots, and landing pages to capture leads 24/7. Automatically score and route leads to the right team members with intelligent workflows.',
    icon: FaNetworkWired,
    link: '/services/lead-generation'
  },
  {
    title: 'Social Media Management',
    shortDescription: 'Schedule posts and engage audiences across all platforms.',
    description: 'Plan, schedule, and publish content to Facebook, Instagram, LinkedIn, and more from one dashboard. Monitor engagement, respond to comments, and grow your social presence.',
    icon: FaDatabase,
    link: '/services/social-media-management'
  },
  {
    title: 'Workflow Automation',
    shortDescription: 'Automate repetitive tasks and save hours every week.',
    description: 'Build custom workflows that trigger actions based on customer behavior. Automate follow-ups, task assignments, notifications, and data updates without writing code.',
    icon: FaCogs,
    link: '/services/integration'
  },
  {
    title: 'Analytics & Reporting',
    shortDescription: 'Make data-driven decisions with real-time insights.',
    description: 'Track campaign performance, conversion rates, and ROI with comprehensive dashboards. Custom reports show exactly what\'s working and where to optimize for better results.',
    icon: FaDatabase,
    link: '/services/data-analytics'
  }
];

export default function SolutionsSection({ cmsContent }: SolutionsSectionProps) {
  const [expandedTile, setExpandedTile] = useState<string | null>(null);

  // Get content from CMS or use fallback defaults
  const tagText = cmsContent
    ? getFieldValue(cmsContent, 'tag_text') || 'Our Services'
    : 'Our Services';

  const heading = cmsContent
    ? getFieldValue(cmsContent, 'heading') || 'All-In-One GoHighLevel Solutions'
    : 'All-In-One GoHighLevel Solutions';

  const subtext = cmsContent
    ? getFieldValue(cmsContent, 'subtext') || 'REV-ANEW delivers white-label GoHighLevel solutions including CRM, reputation management, marketing automation, and workflow tools designed to help agencies and businesses grow faster and work smarter.'
    : 'REV-ANEW delivers white-label GoHighLevel solutions including CRM, reputation management, marketing automation, and workflow tools designed to help agencies and businesses grow faster and work smarter.';

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
            className="text-sm xs:text-base text-primary-teal font-semibold tracking-wide uppercase mb-3 inline-block px-3 xs:px-4 py-1 bg-primary-teal/10 rounded-full"
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
            <AnimatedButton className="bg-primary-teal text-white hover:bg-primary-tealDark border-none shadow-md">
              {buttonText}
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
