'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/ui/AnimatedButton';
import type { CMSSectionWithFields } from '@/types/cms';
import { getFieldValue } from '@/lib/cms';

interface HeroSectionProps {
  cmsContent?: CMSSectionWithFields | null;
}

export default function HeroSection({ cmsContent }: HeroSectionProps) {
  // Get content from CMS or use fallback defaults
  const heading = cmsContent
    ? getFieldValue(cmsContent, 'heading') || 'Your Trusted CRM, ERP, Marketing Automation & Cloud Solutions Provider'
    : 'Your Trusted CRM, ERP, Marketing Automation & Cloud Solutions Provider';

  const subtext = cmsContent
    ? getFieldValue(cmsContent, 'subtext') || 'Empowering organizations to modernize CRM, ERP, marketing, and cloud platforms to achieve greater efficiency, innovation, and measurable ROI through trusted expertise.'
    : 'Empowering organizations to modernize CRM, ERP, marketing, and cloud platforms to achieve greater efficiency, innovation, and measurable ROI through trusted expertise.';

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
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/Techy_abstract_hero3.jpg"
          alt="Technology abstract background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/90 to-primary-blue/70"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none z-[1]"></div>

      {/* Animated elements */}
      <motion.div
        className="absolute top-1/3 left-[10%] w-64 h-64 rounded-full bg-blue-500/30 filter blur-3xl z-[1]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-1/4 right-[15%] w-80 h-80 rounded-full bg-indigo-500/20 filter blur-3xl z-[1]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.25, 0.15, 0.25]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Digital particles effect */}
      <div className="absolute inset-0 z-[2] opacity-30 bg-gradient-to-b from-blue-500/5 to-transparent
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
                  <AnimatedButton className="bg-primary-blue hover:bg-primary-blue/90 text-white border-transparent shadow-lg w-full xs:w-auto px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-medium">
                    {buttonPrimaryText}
                  </AnimatedButton>
                </Link>
                <Link href={buttonSecondaryUrl} className="flex-1 xs:flex-none">
                  <AnimatedButton className="bg-transparent hover:bg-primary-blue/10 text-white border-primary-blue border-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full xs:w-auto px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-medium">
                    {buttonSecondaryText}
                  </AnimatedButton>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-6 xs:mt-8 sm:mt-12">
                <span className="text-white/70 text-xs xs:text-sm block text-center xs:text-left mb-3 xs:mb-2">Trusted by leading platforms:</span>
                <div className="flex items-center justify-center xs:justify-start space-x-4 xs:space-x-6 flex-wrap gap-y-2">
                  <Image src="/images/photos/Microsoft_logo.png" alt="Microsoft" width={80} height={28} className="opacity-70 hover:opacity-100 transition-opacity h-5 xs:h-6 sm:h-7 w-auto object-contain" />
                  <Image src="/images/photos/Salesforce_logo.png" alt="Salesforce" width={80} height={28} className="opacity-70 hover:opacity-100 transition-opacity h-5 xs:h-6 sm:h-7 w-auto object-contain" />
                  <Image src="/images/photos/Hubspot_logo.png" alt="HubSpot" width={80} height={28} className="opacity-70 hover:opacity-100 transition-opacity h-5 xs:h-6 sm:h-7 w-auto object-contain" />
                  <Image src="/images/photos/Adobe_marketo_engage.png" alt="Adobe Marketo" width={80} height={28} className="opacity-70 hover:opacity-100 transition-opacity h-5 xs:h-6 sm:h-7 w-auto object-contain" />
                </div>
              </div>
            </motion.div>

            {/* Right column: Visual element */}
            <motion.div
              className="hidden md:block relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-[450px] w-full">
                {/* Decorative elements */}
                <div className="absolute top-[10%] right-[15%] w-32 h-32 rounded-full border-4 border-blue-300/30 z-10"></div>
                <div className="absolute bottom-[15%] left-[10%] w-20 h-20 rounded-full border-2 border-blue-400/40 z-10"></div>

                {/* Floating dashboard mockup */}
                <motion.div
                  className="absolute top-[5%] right-[5%] w-[65%] h-[65%] rounded-xl overflow-hidden shadow-2xl z-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/photos/Laptop_CRM_dashboard.png"
                    alt="CRM Dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/10 to-transparent"></div>
                </motion.div>

                {/* Secondary floating element */}
                <motion.div
                  className="absolute bottom-[5%] left-[5%] w-[65%] h-[50%] rounded-xl overflow-hidden shadow-2xl z-20"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Image
                    src="/images/hero/OutOfTheBox_hero_photo.png"
                    alt="Abstract Technology Cityscape"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-bl from-primary-blue/20 to-transparent"></div>
                </motion.div>

                {/* Glowing orb */}
                <div className="absolute left-[40%] top-[40%] w-24 h-24 rounded-full bg-blue-500/40 filter blur-xl z-0"></div>
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
            className="w-1 h-3 bg-blue-400 rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
