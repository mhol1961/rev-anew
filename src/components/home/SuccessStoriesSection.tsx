'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/ui/AnimatedButton';
import AnimatedText from '@/components/ui/AnimatedText';
import AnimatedSection from '@/components/ui/AnimatedSection';
import type { CMSSectionWithFields } from '@/types/cms';
import { getFieldValue } from '@/lib/cms';

interface SuccessStoriesSectionProps {
  cmsContent?: CMSSectionWithFields | null;
}

const successStories = [
  {
    client: 'Major U.S. Municipality',
    challenge: 'Needed to modernize CRM and case management systems to improve citizen services, transparency, and cross-department collaboration.',
    solution: 'TAS designed and implemented Dynamics 365 Customer Service with Power Platform components, including secure public portals, real-time Power BI dashboards, and Azure-based integrations.',
    outcome: 'Enabled faster, more responsive citizen engagement, improved internal collaboration, and reduced reliance on third-party analytics vendors.'
  },
  {
    client: 'National Construction & Engineering Firm',
    challenge: 'Required stabilization of Power BI reporting environment and preparation for transition from Sage 300 to CMiC ERP.',
    solution: 'TAS conducted a comprehensive Power BI audit, identified system dependencies, and created a long-term modernization and ERP readiness plan.',
    outcome: 'Delivered a roadmap and governance framework that stabilized reporting, improved data quality, and positioned the client for a smooth ERP migration.'
  },
  {
    client: 'Global Professional Services Organization',
    challenge: 'Sought to unify sales and marketing operations through Dynamics 365 and accelerate adoption of Microsoft Fabric for advanced analytics.',
    solution: 'TAS served as Subject Matter Experts, providing leadership to align Dynamics 365 Sales and Marketing with Fabric integration.',
    outcome: 'Enabled real-time marketing execution, unified reporting, and a scalable CRM and analytics framework supporting the organization\'s global initiatives.'
  },
  {
    client: 'Regional Healthcare Network',
    challenge: 'Needed to transform CRM and marketing automation to support patient engagement, referral management, and provider outreach.',
    solution: 'TAS implemented Dynamics 365 Sales and Marketing with Customer Insights – Journeys, developed a consent center, and aligned systems with predictive analytics goals.',
    outcome: 'Enhanced patient engagement, ensured HIPAA-compliant communications, and provided marketing and clinical teams with tools to improve outreach and care coordination.'
  },
  {
    client: 'National Accounting & Advisory Firm',
    challenge: 'Required better alignment between Dynamics 365 and Marketo to strengthen marketing operations, campaign analytics, and sales enablement.',
    solution: 'TAS optimized system governance, developed custom integrations, and enhanced reporting through Marketo-D365 synchronization and Power BI dashboards.',
    outcome: 'Improved campaign execution, enhanced data quality, and provided marketing and sales teams with greater visibility into performance and attribution.'
  },
  {
    client: 'Global Technology Manufacturer',
    challenge: 'Wanted to strengthen global sales, marketing, and customer service using Dynamics 365 and Marketo.',
    solution: 'TAS acted as Subject Matter Experts across multiple workstreams, leading a transition to real-time marketing, implementing a consent center, and aligning CRM with service workflows.',
    outcome: 'Achieved more personalized marketing, improved compliance, and delivered scalable CRM and customer service solutions across global teams.'
  }
];

export default function SuccessStoriesSection({ cmsContent }: SuccessStoriesSectionProps) {
  // Get content from CMS or use fallback defaults
  const heading = cmsContent
    ? getFieldValue(cmsContent, 'heading') || 'Success Stories'
    : 'Success Stories';

  const subtext = cmsContent
    ? getFieldValue(cmsContent, 'subtext') || 'See how TAS has helped leading organizations modernize technology, improve operations, and drive measurable outcomes.'
    : 'See how TAS has helped leading organizations modernize technology, improve operations, and drive measurable outcomes.';

  // Background image is hardcoded as it requires specific styling (opacity, gradient overlay)
  const backgroundImage = '/images/photos/Two_People_looking_at_screen1.png';

  const buttonPrimaryText = cmsContent
    ? getFieldValue(cmsContent, 'button_primary_text') || 'Become Our Next Success Story'
    : 'Become Our Next Success Story';

  const buttonPrimaryUrl = cmsContent
    ? getFieldValue(cmsContent, 'button_primary_url') || '/contact'
    : '/contact';

  const buttonSecondaryText = cmsContent
    ? getFieldValue(cmsContent, 'button_secondary_text') || 'Read More Case Studies →'
    : 'Read More Case Studies →';

  const buttonSecondaryUrl = cmsContent
    ? getFieldValue(cmsContent, 'button_secondary_url') || '/case-studies'
    : '/case-studies';

  const badge1Icon = cmsContent
    ? getFieldValue(cmsContent, 'badge_1_icon') || '📅'
    : '📅';

  const badge1Text = cmsContent
    ? getFieldValue(cmsContent, 'badge_1_text') || 'In Business Since 2016'
    : 'In Business Since 2016';

  const badge2Icon = cmsContent
    ? getFieldValue(cmsContent, 'badge_2_icon') || '🌍'
    : '🌍';

  const badge2Text = cmsContent
    ? getFieldValue(cmsContent, 'badge_2_text') || 'Trusted by Industry Leaders Worldwide'
    : 'Trusted by Industry Leaders Worldwide';

  const badge3Icon = cmsContent
    ? getFieldValue(cmsContent, 'badge_3_icon') || '🏅'
    : '🏅';

  const badge3Text = cmsContent
    ? getFieldValue(cmsContent, 'badge_3_text') || 'Certified Multi Platform Partner'
    : 'Certified Multi Platform Partner';

  return (
    <AnimatedSection className="section-padding bg-primary-light/50 dark:bg-dark-card text-text-primary dark:text-dark-text relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Technology Collaboration"
          fill
          className="object-cover object-center opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] dark:opacity-[0.05] pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 -translate-x-20 z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20 z-10"></div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="content-header max-w-3xl mx-auto">
          <AnimatedText
            text={heading}
            className="heading-2 text-center !text-white"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="body-large text-center px-4 xs:px-0 mt-3 xs:mt-4 !text-white"
          >
            {subtext}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <motion.div
              key={story.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-3">
                  {story.client}
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {story.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">Solution:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {story.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">Outcome:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {story.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTAs and Trust indicators section */}
        <div className="mt-12 text-center">
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href={buttonPrimaryUrl}>
              <AnimatedButton className="bg-primary-blue hover:bg-primary-blue/90 text-white border-transparent shadow-lg px-8 py-4">
                {buttonPrimaryText}
              </AnimatedButton>
            </Link>
            <Link href={buttonSecondaryUrl}>
              <AnimatedButton className="bg-white hover:bg-white/90 text-primary-navy border-white border-2 shadow-lg px-8 py-4">
                {buttonSecondaryText}
              </AnimatedButton>
            </Link>
          </div>

          {/* Icon row */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm border border-white/30">
              <span className="text-blue-400 text-xl">{badge1Icon}</span>
              <span className="text-sm font-medium text-white">{badge1Text}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm border border-white/30">
              <span className="text-green-400 text-xl">{badge2Icon}</span>
              <span className="text-sm font-medium text-white">{badge2Text}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm border border-white/30">
              <span className="text-purple-400 text-xl">{badge3Icon}</span>
              <span className="text-sm font-medium text-white">{badge3Text}</span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
