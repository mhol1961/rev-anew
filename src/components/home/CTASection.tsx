'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/ui/AnimatedButton';
import AnimatedText from '@/components/ui/AnimatedText';
import AnimatedSection from '@/components/ui/AnimatedSection';
import type { CMSSectionWithFields } from '@/types/cms';
import { getFieldValue } from '@/lib/cms';

interface CTASectionProps {
  cmsContent?: CMSSectionWithFields | null;
}

export default function CTASection({ cmsContent }: CTASectionProps) {
  // Get content from CMS or use fallback defaults
  const heading = cmsContent
    ? getFieldValue(cmsContent, 'heading') || 'Ready to Transform Your Business?'
    : 'Ready to Transform Your Business?';

  const subtext = cmsContent
    ? getFieldValue(cmsContent, 'subtext') || 'Partner with REV-ANEW to unlock the full potential of your CRM, ERP, marketing automation, and cloud platforms. As Certified Partners with Microsoft, Salesforce, HubSpot, Adobe, and ClickDimensions, our team combines deep technical expertise with proven consulting experience to modernize systems, connect data, and deliver measurable business outcomes across ecosystems.'
    : 'Partner with REV-ANEW to unlock the full potential of your CRM, ERP, marketing automation, and cloud platforms. As Certified Partners with Microsoft, Salesforce, HubSpot, Adobe, and ClickDimensions, our team combines deep technical expertise with proven consulting experience to modernize systems, connect data, and deliver measurable business outcomes across ecosystems.';

  const buttonPrimaryText = cmsContent
    ? getFieldValue(cmsContent, 'button_primary_text') || 'Request a Consultation'
    : 'Request a Consultation';

  const buttonPrimaryUrl = cmsContent
    ? getFieldValue(cmsContent, 'button_primary_url') || '/contact'
    : '/contact';

  const buttonSecondaryText = cmsContent
    ? getFieldValue(cmsContent, 'button_secondary_text') || 'Explore Solutions'
    : 'Explore Solutions';

  const buttonSecondaryUrl = cmsContent
    ? getFieldValue(cmsContent, 'button_secondary_url') || '/services'
    : '/services';

  const stat1Value = cmsContent
    ? getFieldValue(cmsContent, 'stat_1_value') || '50+ Years'
    : '50+ Years';

  const stat1Label = cmsContent
    ? getFieldValue(cmsContent, 'stat_1_label') || 'of Combined Consulting Experience'
    : 'of Combined Consulting Experience';

  const stat1Subtext = cmsContent
    ? getFieldValue(cmsContent, 'stat_1_subtext') || 'Deep expertise in CRM, ERP, marketing automation, and cloud solutions.'
    : 'Deep expertise in CRM, ERP, marketing automation, and cloud solutions.';

  const stat2Value = cmsContent
    ? getFieldValue(cmsContent, 'stat_2_value') || 'Dozens of Clients'
    : 'Dozens of Clients';

  const stat2Label = cmsContent
    ? getFieldValue(cmsContent, 'stat_2_label') || 'Served Across Multiple Industries'
    : 'Served Across Multiple Industries';

  const stat2Subtext = cmsContent
    ? getFieldValue(cmsContent, 'stat_2_subtext') || 'Trusted by organizations across healthcare, government, finance, technology, and more.'
    : 'Trusted by organizations across healthcare, government, finance, technology, and more.';

  const stat3Value = cmsContent
    ? getFieldValue(cmsContent, 'stat_3_value') || 'Exceptional Client Satisfaction'
    : 'Exceptional Client Satisfaction';

  const stat3Label = cmsContent
    ? getFieldValue(cmsContent, 'stat_3_label') || 'Trusted by Clients Worldwide'
    : 'Trusted by Clients Worldwide';

  const stat3Subtext = cmsContent
    ? getFieldValue(cmsContent, 'stat_3_subtext') || 'Dedicated to delivering measurable value, partnership, and long term success across every engagement.'
    : 'Dedicated to delivering measurable value, partnership, and long term success across every engagement.';

  const stats = [
    {
      value: stat1Value,
      label: stat1Label,
      subtext: stat1Subtext
    },
    {
      value: stat2Value,
      label: stat2Label,
      subtext: stat2Subtext
    },
    {
      value: stat3Value,
      label: stat3Label,
      subtext: stat3Subtext
    }
  ];

  return (
    <AnimatedSection className="section-padding bg-primary-light dark:bg-dark-bg text-text-primary dark:text-dark-text relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-blue/5 skew-x-12 -translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-primary-blue/5 skew-x-12 translate-x-20"></div>

      <div className="max-w-7xl mx-auto container-padding text-center relative z-10">
        <AnimatedText
          text={heading}
          className="heading-1 text-center px-4 xs:px-0 mb-4 xs:mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="body-large text-center max-w-3xl mx-auto mb-6 xs:mb-8 sm:mb-10 px-4 xs:px-0"
        >
          {subtext}
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 justify-center w-full sm:w-auto px-4 xs:px-0">
          <Link href={buttonPrimaryUrl} className="w-full sm:w-auto">
            <AnimatedButton className="bg-primary-blue text-white hover:bg-primary-blue/90 border-none shadow-md w-full sm:w-auto px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-medium">
              {buttonPrimaryText}
            </AnimatedButton>
          </Link>

          <Link href={buttonSecondaryUrl} className="w-full sm:w-auto">
            <AnimatedButton className="bg-transparent hover:bg-primary-blue/10 text-text-primary dark:text-dark-text border-primary-blue border-2 shadow-md w-full sm:w-auto px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-medium">
              {buttonSecondaryText}
            </AnimatedButton>
          </Link>
        </div>

        {/* Credibility Tiles */}
        <div className="content-grid grid-stats">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
              viewport={{ once: true }}
              className="card-stat text-center"
            >
              <div className="text-2xl xs:text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">{stat.value}</div>
              <div className="body-base font-medium mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.subtext}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
