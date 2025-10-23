'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedButton from '@/components/ui/AnimatedButton';
import type { CMSSectionWithFields } from '@/types/cms';
import { getFieldValue } from '@/lib/cms';

interface HeroSectionProps {
  cmsContent?: CMSSectionWithFields | null;
}

export default function HeroSection({ cmsContent }: HeroSectionProps) {
  // Get content from CMS or use fallback defaults
  const heading = cmsContent
    ? getFieldValue(cmsContent, 'heading') || 'Reputation Management & Marketing Automation Powered by GoHighLevel'
    : 'Reputation Management & Marketing Automation Powered by GoHighLevel';

  const subtext = cmsContent
    ? getFieldValue(cmsContent, 'subtext') || 'Transform your revenue with white-label CRM, reputation management, marketing automation, and business growth tools. Revenue Reimagined.'
    : 'Transform your revenue with white-label CRM, reputation management, marketing automation, and business growth tools. Revenue Reimagined.';

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

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Modern gradient background with inline styles */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #374151 0%, #059669 50%, #374151 100%)'
        }}
      >
        {/* Layered gradients for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.2) 0%, transparent 50%, rgba(245, 158, 11, 0.2) 100%)'
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(225deg, transparent 0%, rgba(55, 65, 81, 0.5) 50%, rgba(5, 150, 105, 0.3) 100%)'
          }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none z-[1]"></div>

      {/* Animated elements */}
      <motion.div
        className="absolute top-1/3 left-[10%] w-64 h-64 rounded-full bg-primary-teal/40 filter blur-3xl z-[1]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-1/4 right-[15%] w-80 h-80 rounded-full bg-primary-orange/30 filter blur-3xl z-[1]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Digital particles effect */}
      <div className="absolute inset-0 z-[2] opacity-30 bg-gradient-to-b from-primary-teal/5 to-transparent
        [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_70%)]
        [background-size:20px_20px] [background-position:0_0,10px_10px]"></div>

      {/* Content Container */}
      <div className="relative h-full z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left column: Text content */}
            <motion.div
              className="text-white md:pr-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[56px] font-bold leading-[1.1] mb-6 font-heading">
                <span className="block text-white">{heading}</span>
              </h1>

              <p className="text-sm xs:text-base sm:text-lg text-white/95 mb-6 sm:mb-8 max-w-xl leading-relaxed font-normal">
                {subtext}
              </p>

              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                <Link href={buttonPrimaryUrl} className="flex-1 xs:flex-none">
                  <AnimatedButton className="bg-primary-teal hover:bg-primary-tealDark text-white border-transparent shadow-lg w-full xs:w-auto px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-medium">
                    {buttonPrimaryText}
                  </AnimatedButton>
                </Link>
                <Link href={buttonSecondaryUrl} className="flex-1 xs:flex-none">
                  <AnimatedButton className="bg-transparent hover:bg-primary-teal/10 text-white border-primary-teal border-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full xs:w-auto px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-medium">
                    {buttonSecondaryText}
                  </AnimatedButton>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-6 xs:mt-8 sm:mt-12">
                <span className="text-white/70 text-xs xs:text-sm block text-center xs:text-left mb-3 xs:mb-2">Powered by GoHighLevel</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <motion.div
            className="w-1 h-3 bg-primary-teal rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
