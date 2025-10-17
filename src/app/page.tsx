'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedButton from '@/components/ui/AnimatedButton';
import AnimatedText from '@/components/ui/AnimatedText';
import AnimatedIcon from '@/components/ui/AnimatedIcon';
import AnimatedSection from '@/components/ui/AnimatedSection';
import {
  FaNetworkWired,
  FaChartLine,
  FaUserFriends,
  FaLaptopCode,
  FaCogs,
  FaDatabase,
  FaExchangeAlt
} from 'react-icons/fa';

const successStories = [
  {
    client: 'City of Atlanta',
    challenge: 'Needed to modernize CRM and case management systems to improve citizen services, transparency, and cross-department collaboration.',
    solution: 'TAS designed and implemented Dynamics 365 Customer Service with Power Platform components, including secure public portals, real-time Power BI dashboards, and Azure-based integrations.',
    outcome: 'Enabled faster, more responsive citizen engagement, improved internal collaboration, and reduced reliance on third-party analytics vendors.'
  },
  {
    client: 'Hodess Cleanrooms',
    challenge: 'Required stabilization of Power BI reporting environment and preparation for transition from Sage 300 to CMiC ERP.',
    solution: 'TAS conducted a comprehensive Power BI audit, identified system dependencies, and created a long-term modernization and ERP readiness plan.',
    outcome: 'Delivered a roadmap and governance framework that stabilized reporting, improved data quality, and positioned the client for a smooth ERP migration.'
  },
  {
    client: 'Ernst & Young (EY)',
    challenge: 'Sought to unify sales and marketing operations through Dynamics 365 and accelerate adoption of Microsoft Fabric for advanced analytics.',
    solution: 'TAS served as Subject Matter Experts, providing leadership to align Dynamics 365 Sales and Marketing with Fabric integration.',
    outcome: 'Enabled real-time marketing execution, unified reporting, and a scalable CRM and analytics framework supporting EY\'s global initiatives.'
  },
  {
    client: 'Southcoast Health',
    challenge: 'Needed to transform CRM and marketing automation to support patient engagement, referral management, and provider outreach.',
    solution: 'TAS implemented Dynamics 365 Sales and Marketing with Customer Insights – Journeys, developed a consent center, and aligned systems with predictive analytics goals.',
    outcome: 'Enhanced patient engagement, ensured HIPAA-compliant communications, and provided marketing and clinical teams with tools to improve outreach and care coordination.'
  },
  {
    client: 'CohnReznick',
    challenge: 'Required better alignment between Dynamics 365 and Marketo to strengthen marketing operations, campaign analytics, and sales enablement.',
    solution: 'TAS optimized system governance, developed custom integrations, and enhanced reporting through Marketo-D365 synchronization and Power BI dashboards.',
    outcome: 'Improved campaign execution, enhanced data quality, and provided marketing and sales teams with greater visibility into performance and attribution.'
  },
  {
    client: 'StarTech.com',
    challenge: 'Wanted to strengthen global sales, marketing, and customer service using Dynamics 365 and Marketo.',
    solution: 'TAS acted as Subject Matter Experts across multiple workstreams, leading a transition to real-time marketing, implementing a consent center, and aligning CRM with service workflows.',
    outcome: 'Achieved more personalized marketing, improved compliance, and delivered scalable CRM and customer service solutions across global teams.'
  }
];

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


export default function Home() {
  const [expandedTile, setExpandedTile] = useState<string | null>(null);

  const toggleTile = (title: string) => {
    setExpandedTile(expandedTile === title ? null : title);
  };

  return (
    <PageLayout>
      <main className="flex-1">
        {/* Hero Section */}
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
          
          {/* Digital particles effect - using gradient dots instead of image */}
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
                    <span className="block text-white">Your Trusted CRM, ERP, Marketing Automation & Cloud Solutions Provider</span>
                  </h1>

                  <p className="text-sm xs:text-base sm:text-lg text-white/95 mb-6 sm:mb-8 max-w-xl leading-relaxed font-normal">
                    Empowering businesses to unlock growth, optimize processes, and deliver measurable ROI through modern technology and proven expertise.
                  </p>

                  <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                    <Link href="/contact" className="flex-1 xs:flex-none">
                      <AnimatedButton className="bg-primary-blue hover:bg-primary-blue/90 text-white border-transparent shadow-lg w-full xs:w-auto px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-medium">
                        Request a Consultation
                      </AnimatedButton>
                    </Link>
                    <Link href="/services" className="flex-1 xs:flex-none">
                      <AnimatedButton className="bg-transparent hover:bg-primary-blue/10 text-white border-primary-blue border-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full xs:w-auto px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-medium">
                        Explore Solutions
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

        {/* Services Overview */}
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
                Our Services
              </motion.h2>
              <AnimatedText
                text="Proven Solutions That Deliver Results"
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
                TAS delivers CRM, ERP, Marketing Automation, Cloud, and Integration solutions designed to optimize operations, empower teams, and drive measurable growth across industries.
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
              <Link href="/services">
                <AnimatedButton className="bg-primary-blue text-white hover:bg-primary-blue/90 border-none shadow-md">
                  View All Solutions
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Success Stories Section */}
        <AnimatedSection className="section-padding bg-primary-light/50 dark:bg-dark-card text-text-primary dark:text-dark-text relative overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/photos/Two_People_looking_at_screen1.png"
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
                text="Success Stories"
                className="heading-2 text-center !text-white"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="body-large text-center px-4 xs:px-0 mt-3 xs:mt-4 text-white"
              >
                See how TAS has helped leading organizations modernize technology, improve operations, and drive measurable outcomes.
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
                <Link href="/contact">
                  <AnimatedButton className="bg-primary-blue hover:bg-primary-blue/90 text-white border-transparent shadow-lg px-8 py-4">
                    Become Our Next Success Story
                  </AnimatedButton>
                </Link>
                <Link href="/case-studies">
                  <AnimatedButton className="bg-white hover:bg-white/90 text-primary-navy border-white border-2 shadow-lg px-8 py-4">
                    Read More Case Studies →
                  </AnimatedButton>
                </Link>
              </div>

              {/* Icon row */}
              <div className="flex flex-wrap justify-center items-center gap-6">
                <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm border border-white/30">
                  <span className="text-blue-400 text-xl">📅</span>
                  <span className="text-sm font-medium text-white">In Business Since 2016</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm border border-white/30">
                  <span className="text-green-400 text-xl">🌍</span>
                  <span className="text-sm font-medium text-white">Trusted by Industry Leaders Worldwide</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm border border-white/30">
                  <span className="text-purple-400 text-xl">🏅</span>
                  <span className="text-sm font-medium text-white">Certified Multi Platform Partner</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="section-padding bg-primary-light dark:bg-dark-bg text-text-primary dark:text-dark-text relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-blue/5 skew-x-12 -translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-primary-blue/5 skew-x-12 translate-x-20"></div>

          <div className="max-w-7xl mx-auto container-padding text-center relative z-10">
            <AnimatedText
              text="Ready to Transform Your Business?"
              className="heading-1 text-center px-4 xs:px-0 mb-4 xs:mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="body-large text-center max-w-3xl mx-auto mb-6 xs:mb-8 sm:mb-10 px-4 xs:px-0"
            >
              Partner with TAS to unlock the full potential of your CRM, ERP, marketing automation, and cloud platforms. As Certified Partners with Microsoft, Salesforce, HubSpot, Adobe, and ClickDimensions, our team combines deep technical expertise with proven consulting experience to modernize systems, connect data, and deliver measurable business outcomes across ecosystems.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 justify-center w-full sm:w-auto px-4 xs:px-0">
              <Link href="/contact" className="w-full sm:w-auto">
                <AnimatedButton className="bg-primary-blue text-white hover:bg-primary-blue/90 border-none shadow-md w-full sm:w-auto px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-medium">
                  Request a Consultation
                </AnimatedButton>
              </Link>

              <Link href="/services" className="w-full sm:w-auto">
                <AnimatedButton className="bg-transparent hover:bg-primary-blue/10 text-text-primary dark:text-dark-text border-primary-blue border-2 shadow-md w-full sm:w-auto px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-medium">
                  Explore Solutions
                </AnimatedButton>
              </Link>
            </div>

            {/* Credibility Tiles */}
            <div className="content-grid grid-stats">
              {[
                {
                  value: '30+ Years',
                  label: 'of Combined Consulting Experience',
                  subtext: 'Deep expertise in CRM, ERP, marketing automation, and cloud solutions.'
                },
                {
                  value: 'Dozens of Clients',
                  label: 'Served Across Multiple Industries',
                  subtext: 'Trusted by organizations across healthcare, government, finance, technology, and more.'
                },
                {
                  value: 'Exceptional Client Satisfaction',
                  label: 'Trusted by Clients Worldwide',
                  subtext: 'Dedicated to delivering measurable value, partnership, and long term success across every engagement.'
                }
              ].map((stat, index) => (
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
      </main>
    </PageLayout>
  );
}
