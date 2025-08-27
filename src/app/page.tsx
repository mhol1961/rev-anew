'use client';

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

const testimonials = [
  {
    name: 'David Reynolds',
    title: 'CIO, Enterprise Solutions Inc.',
    quote: 'TAS delivered exactly what they promised. 40% efficiency improvement, zero downtime during migration, and our sales team adopted the new CRM in just 2 weeks. Outstanding ROI.',
    result: '40% efficiency boost',
    company: 'Fortune 500 Manufacturing'
  },
  {
    name: 'Rebecca Chen',  
    title: 'Marketing Director, GrowthTech',
    quote: 'Our lead generation increased 300% in the first quarter after TAS implemented our marketing automation. The ROI was immediate and continues to grow month over month.',
    result: '300% more leads',
    company: 'SaaS Startup'
  },
  {
    name: 'Michael Torres',
    title: 'VP of Operations, Global Innovations',
    quote: 'Best technology investment we ever made. TAS connected our entire tech stack - CRM, ERP, accounting - saving us 25 hours per week in manual work. The integration was flawless.',
    result: '25 hours saved weekly',
    company: 'Mid-Market Services'
  }
];

const features = [
  {
    title: 'CRM Implementation',
    description: 'Boost sales conversion by 35% with expert CRM implementation. We ensure 100% data migration accuracy, zero downtime deployment, and full team adoption within 30 days.',
    icon: FaUserFriends,
    link: '/services/crm'
  },
  {
    title: 'Technology Integration',
    description: 'Eliminate manual data entry and reduce errors by 90%. Connect all your business systems for seamless data flow and automated workflows that save 20+ hours per week.',
    icon: FaExchangeAlt,
    link: '/services/technology-integration'
  },
  {
    title: 'Marketing Automation',
    description: 'Generate 300% more qualified leads with smart automation. Personalize customer journeys, automate follow-ups, and increase conversion rates by up to 50%.',
    icon: FaChartLine,
    link: '/services/marketing-automation'
  },
  {
    title: 'Custom Solutions',
    description: 'Cut operational costs by 25% with tailored solutions. Custom integrations and applications built to solve your specific challenges and streamline unique processes.',
    icon: FaLaptopCode,
    link: '/services/custom-solutions'
  },
  {
    title: 'System Optimization',
    description: 'Improve system performance by 60% and reduce downtime by 80%. Expert analysis and optimization of your existing technology investments for maximum efficiency.',
    icon: FaCogs,
    link: '/services/system-optimization'
  },
  {
    title: 'Data Management',
    description: 'Make data-driven decisions 5x faster. Comprehensive data migration, cleansing, and analytics solutions that turn your business information into competitive advantage.',
    icon: FaDatabase,
    link: '/services/data-management'
  }
];

const businessServices = [
  { name: 'CRM Strategy', description: 'Increase sales team productivity by 40% with proven CRM strategies', link: '/services/crm' },
  { name: 'System Integration', description: 'Save 20+ hours weekly by connecting all your business systems', link: '/services/technology-integration' },
  { name: 'Technology Consulting', description: 'ROI-focused technology roadmaps that reduce costs by 30%', link: '/services/system-optimization' },
  { name: 'Automation Solutions', description: 'Generate 3x more leads with intelligent process automation', link: '/services/marketing-automation' }
];

export default function Home() {
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
                  <h5 className="text-blue-300 font-medium tracking-wider mb-3 uppercase text-xs sm:text-sm inline-flex items-center">
                    <span className="w-5 h-[2px] bg-blue-400 mr-2"></span>
                    BOOST EFFICIENCY • ACCELERATE GROWTH
                  </h5>
                  <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 font-heading">
                    <span className="block text-white">Increase Revenue by</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400 block mt-1 xs:mt-2">40% with Smart CRM</span>
                  </h1>
                  
                  <p className="text-sm xs:text-base sm:text-lg text-white/95 mb-6 sm:mb-8 max-w-xl leading-relaxed font-normal">
                    Join 200+ businesses that transformed their operations with our proven CRM implementations, system integrations, and marketing automation. <strong className="text-white">Average ROI: 300% in first year.</strong>
                  </p>

                  <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                    <Link href="/contact" className="flex-1 xs:flex-none">
                      <AnimatedButton className="bg-blue-600 hover:bg-blue-700 text-white border-white border-2 shadow-lg w-full xs:w-auto px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-medium">
                        🚀 Get Free CRM Assessment
                      </AnimatedButton>
                    </Link>
                    <Link href="/case-studies" className="flex-1 xs:flex-none">
                      <AnimatedButton className="bg-white/20 hover:bg-white/30 text-white border-white border-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full xs:w-auto px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-medium">
                        📈 See Success Stories
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
                <strong>95% client satisfaction.</strong> Our enterprise-grade implementations increase productivity by 40%, reduce operational costs by 25%, and deliver measurable ROI within 90 days.
              </motion.p>
            </div>

            <div className="grid-services">
              {features.slice(0, 6).map((feature, index) => {
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
                        {feature.description}
                      </p>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="mt-4 xs:mt-5"
                      >
                        <Link href={feature.link} className="link-primary inline-flex items-center font-medium text-sm xs:text-base">
                          Learn more
                          <svg className="ml-2 w-3 h-3 xs:w-4 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link href="/services">
                <AnimatedButton className="bg-primary-blue text-white hover:bg-primary-blue/90 border-none shadow-md">
                  View All Services
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Technology Integration Section */}
        <AnimatedSection className="section-padding bg-primary-slate text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto container-padding relative z-10">
            <div className="grid-integration">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-2 text-white mb-4 xs:mb-6">
                  Stop Losing Revenue to Data Silos
                </h2>
                <p className="text-base xs:text-lg text-white/95 mb-6 xs:mb-8 leading-relaxed font-normal">
                  <strong className="text-blue-200">Disconnected systems cost businesses $12M annually.</strong> Our integration experts eliminate data silos, automate workflows, and create a unified ecosystem that increases operational efficiency by 40%.
                </p>
                <ul className="space-y-3 xs:space-y-4 mb-6 xs:mb-8">
                  {[
                    'Save 20+ hours weekly eliminating manual data entry',
                    'Reduce errors by 90% with automated data sync',
                    'Increase team productivity by 45% with unified systems',
                    'Get 360° customer view across all platforms'
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      <span className="text-blue-400 mr-2">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <Link href="/services/technology-integration">
                  <AnimatedButton className="bg-blue-600 hover:bg-blue-700 text-white border-transparent shadow-md">
                    Explore Integration Services
                  </AnimatedButton>
                </Link>
              </motion.div>
              
              <motion.div
                className="relative rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="aspect-w-4 aspect-h-3 bg-primary-navy relative rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/photos/Table_with_laptops.png"
                    alt="Technology Integration"
                    fill
                    className="object-cover rounded-xl opacity-70"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/40 to-transparent"></div>
                  
                  {/* Integration Mockup */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-lg rounded-lg w-[80%] h-[80%] p-5 border border-white/20 shadow-xl">
                      <div className="border-b border-white/20 pb-2 mb-4">
                        <h3 className="text-xl font-bold">Systems Integration</h3>
                      </div>
                      
                      <div className="flex justify-center items-center h-[80%]">
                        <div className="relative w-full h-full">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary-blue/30 rounded-full flex items-center justify-center">
                            <FaExchangeAlt className="text-white text-2xl" />
                          </div>
                          
                          {/* Connected systems */}
                          {['CRM', 'ERP', 'Marketing', 'Analytics'].map((system, index) => {
                            const angle = (index * Math.PI / 2);
                            const x = Math.cos(angle) * 120;
                            const y = Math.sin(angle) * 120;
                            return (
                              <div 
                                key={system}
                                className="absolute w-24 h-16 bg-white/10 rounded-lg flex items-center justify-center border border-white/20"
                                style={{ 
                                  left: `calc(50% + ${x}px - 48px)`, 
                                  top: `calc(50% + ${y}px - 32px)`
                                }}
                              >
                                <span className="text-white font-medium">{system}</span>
                              </div>
                            );
                          })}
                          
                          {/* Connection lines */}
                          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            {['CRM', 'ERP', 'Marketing', 'Analytics'].map((_, index) => {
                              const angle = (index * Math.PI / 2);
                              const x = Math.cos(angle) * 120;
                              const y = Math.sin(angle) * 120;
                              return (
                                <line 
                                  key={index}
                                  x1="50%" 
                                  y1="50%" 
                                  x2={`calc(50% + ${x}px)`}
                                  y2={`calc(50% + ${y}px)`}
                                  stroke="rgba(255,255,255,0.3)" 
                                  strokeWidth="2"
                                  strokeDasharray="5,5"
                                />
                              );
                            })}
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Business Services */}
        <section className="section-padding-sm bg-white dark:bg-dark-bg">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="content-header">
              <h2 className="heading-3 text-center mb-3 xs:mb-4">Technology Services</h2>
              <p className="body-large text-center max-w-2xl mx-auto px-4 xs:px-0">
                Comprehensive suite of technology consulting and implementation services to optimize your business operations.
              </p>
            </div>
            
            <div className="grid-features">
              {businessServices.map((service, index) => (
                <Link href={service.link} key={service.name}>
                  <motion.div
                    className="card-feature hover:border-primary-blue/20"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                      <FaNetworkWired className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="heading-6 mb-2">{service.name}</h3>
                    <p className="body-base mb-4 flex-grow">{service.description}</p>
                    <span className="link-primary font-medium flex items-center">
                      Learn more
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
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
                text="Client Success Stories"
                className="heading-2 text-center"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="body-large text-center px-4 xs:px-0 mt-3 xs:mt-4"
              >
                See how our clients have transformed their businesses with our technology solutions.
              </motion.p>
            </div>

            <div className="grid-testimonials">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="card-testimonial hover:border-primary-blue/40 dark:hover:border-white/20"
                >
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 text-primary-blue/20 dark:text-white/20 text-4xl font-serif group-hover:text-primary-blue/30 dark:group-hover:text-white/30 transition-colors duration-300">&ldquo;</div>

                  {/* Background gradient that appears on hover */}
                  <div className="absolute inset-0 gradient-brand-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    {/* Result badge */}
                    <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {testimonial.result}
                    </div>
                    
                    <p className="body-base italic mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/40 to-primary-blue/40 mr-4 flex items-center justify-center border-2 border-primary-gray-200 dark:border-dark-border overflow-hidden">
                          {/* Client initial or avatar */}
                          <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="heading-6 mb-1 group-hover:text-primary-blue dark:group-hover:text-primary-blue/90 transition-colors duration-300">{testimonial.name}</h4>
                          <p className="body-small">{testimonial.title}</p>
                        </div>
                      </div>
                      
                      {/* Company type */}
                      <div className="text-right">
                        <div className="text-xs text-text-muted dark:text-dark-muted uppercase tracking-wide">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust indicators section */}
            <div className="mt-12 text-center">
              {/* Client satisfaction metrics */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
                <div className="flex items-center space-x-2 bg-white/10 dark:bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <span className="text-green-500 text-xl">⭐</span>
                  <span className="text-sm font-medium">4.9/5 Client Rating</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 dark:bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <span className="text-blue-500 text-xl">🏆</span>
                  <span className="text-sm font-medium">Microsoft Gold Partner</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 dark:bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <span className="text-purple-500 text-xl">🔒</span>
                  <span className="text-sm font-medium">ISO 27001 Certified</span>
                </div>
              </div>
              
              <Link href="/contact">
                <AnimatedButton className="bg-blue-600 hover:bg-blue-700 text-white border-transparent shadow-lg">
                  Become Our Next Success Story
                </AnimatedButton>
              </Link>
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
              className="body-large text-center max-w-2xl mx-auto mb-6 xs:mb-8 sm:mb-10 px-4 xs:px-0"
            >
              Let our team of experts help you implement, integrate, and optimize your technology solutions for maximum business impact.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 justify-center w-full sm:w-auto px-4 xs:px-0">
              <Link href="/contact" className="w-full sm:w-auto">
                <AnimatedButton className="bg-blue-600 text-white hover:bg-blue-700 border-none shadow-md w-full sm:w-auto px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-medium">
                  📞 Book a Consultation
                </AnimatedButton>
              </Link>

              <Link href="/services" className="w-full sm:w-auto">
                <AnimatedButton className="bg-primary-navy text-white hover:bg-primary-navy/90 border-2 border-primary-blue shadow-md w-full sm:w-auto px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-medium">
                  🔍 Browse Services
                </AnimatedButton>
              </Link>
            </div>

            {/* Stats section */}
            <div className="content-grid grid-stats">
              {[
                { value: '200+', label: 'Clients Served' },
                { value: '95%', label: 'Client Satisfaction' },
                { value: '40%', label: 'Average Efficiency Gains' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
                  viewport={{ once: true }}
                  className="card-stat"
                >
                  <div className="text-3xl xs:text-4xl font-bold mb-2 text-blue-600 dark:text-blue-400">{stat.value}</div>
                  <div className="body-base font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
