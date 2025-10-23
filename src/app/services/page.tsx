'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedButton from '@/components/ui/AnimatedButton';
import AnimatedText from '@/components/ui/AnimatedText';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { 
  FaSearchDollar, 
  FaGlobe, 
  FaEnvelope, 
  FaUserCheck, 
  FaDatabase, 
  FaStar, 
  FaHashtag,
  FaChevronRight,
  FaNetworkWired,
  FaCogs,
  FaTools,
  FaServer,
  FaLaptopCode
} from 'react-icons/fa';

const services = [
  {
    id: 'seo',
    title: 'SEO Services',
    icon: FaSearchDollar,
    description: 'Boost your online visibility and drive organic traffic with our comprehensive SEO strategies.',
    benefits: [
      'On-Page SEO Optimization',
      'Off-Page SEO Strategies',
      'Technical SEO Audits',
      'Local SEO for Regional Targeting',
      'Content Optimization',
      'Keyword Research & Strategy'
    ],
    image: '/images/photos/SEO_Services.png',
    color: 'from-blue-600 to-purple-600',
    link: '/services/seo-services'
  },
  {
    id: 'website-creation',
    title: 'Website Creation',
    icon: FaGlobe,
    description: 'Get a professionally designed, SEO-optimized website tailored to your business needs.',
    benefits: [
      'Custom Web Design & Development',
      'SEO-Optimized Architecture',
      'eCommerce Website Development',
      'User Experience (UX) Optimization',
      'Mobile-Responsive Design',
      'Ongoing Maintenance Plans'
    ],
    image: '/images/photos/Abstract_laptop.png',
    color: 'from-green-600 to-teal-600',
    link: '/services/website-creation'
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    icon: FaEnvelope,
    description: 'Engage your audience with personalized email campaigns and automated workflows.',
    benefits: [
      'Campaign Strategy & Design',
      'Audience Segmentation',
      'Automated Email Sequences',
      'A/B Testing & Optimization',
      'Performance Analytics',
      'Lead Nurturing Workflows'
    ],
    image: '/images/photos/Static_tech_image.png',
    color: 'from-orange-500 to-red-500',
    link: '/services/email-marketing'
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    icon: FaUserCheck,
    description: 'Acquire quality leads with our integrated solutions and AI-powered targeting systems.',
    benefits: [
      'API-Integrated Lead Capture Systems',
      'Supabase Backend for Data Storage',
      'Lead Qualification & Scoring',
      'Custom Lead Capture Forms',
      'Multi-Channel Lead Generation',
      'Lead Conversion Optimization'
    ],
    image: '/images/photos/illustrations/Arrows_segments_marketing.png',
    color: 'from-purple-600 to-pink-500',
    link: '/services/lead-generation'
  },
  {
    id: 'crm',
    title: 'CRM & Automation',
    icon: FaDatabase,
    description: 'Streamline your business with custom CRM solutions and powerful automation tools.',
    benefits: [
      'White-Labeled GoHighLevel Instances',
      'Text-Back Automation Systems',
      'AI-Powered Chatbots',
      'Customer Lifecycle Management',
      'Workflow Automation',
      'Sales Pipeline Optimization'
    ],
    image: '/images/photos/Laptop_CRM_dashboard.png',
    color: 'from-blue-500 to-cyan-500',
    link: '/services/crm'
  },
  {
    id: 'reputation-management',
    title: 'Reputation Management',
    icon: FaStar,
    description: 'Protect and enhance your brand reputation with automated monitoring and response systems.',
    benefits: [
      'Automated Review Management',
      'Sentiment Analysis',
      'Crisis Response Planning',
      'Brand Monitoring',
      'Review Generation Campaigns',
      'Reputation Recovery Strategies'
    ],
    image: '/images/photos/Two_People_looking_at_screen1.png',
    color: 'from-yellow-500 to-amber-600',
    link: '/services/reputation-management'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    icon: FaHashtag,
    description: 'Maximize your social presence across all major platforms with content strategy and analytics.',
    benefits: [
      'Multi-Platform Content Strategy',
      'Social Media Content Calendar',
      'Engagement Management',
      'Performance Analytics',
      'Social Advertising Campaigns',
      'Platform-Specific Optimization'
    ],
    image: '/images/photos/Two_People_looking_at_screen1.png',
    color: 'from-pink-500 to-rose-500',
    link: '/services/social-media-management'
  },
  {
    id: 'technology-integration',
    title: 'Technology Integration',
    icon: FaNetworkWired,
    description: 'Seamlessly connect your business systems with advanced integration solutions for improved workflow.',
    benefits: [
      'Cross-Platform System Integration',
      'API Development & Management',
      'Data Migration & Synchronization',
      'Legacy System Integration',
      'Custom Integration Workflows',
      'Third-Party Software Integration'
    ],
    image: '/images/photos/System_optimization.png',
    color: 'from-indigo-600 to-blue-500',
    link: '/services/technology-integration'
  },
  {
    id: 'marketing-automation',
    title: 'Marketing Automation',
    icon: FaCogs,
    description: 'Implement intelligent automation to streamline your marketing processes and improve campaign results.',
    benefits: [
      'Automated Campaign Management',
      'Lead Scoring & Nurturing Workflows',
      'Trigger-Based Marketing Actions',
      'Personalized Customer Journeys',
      'Integrated Analytics & Reporting',
      'Multi-Channel Marketing Automation'
    ],
    image: '/images/photos/MArketingAtuomationPlatforms.png',
    color: 'from-red-500 to-orange-400',
    link: '/services/marketing-automation'
  },
  {
    id: 'custom-solutions',
    title: 'Custom Solutions',
    icon: FaTools,
    description: 'Get tailored software and integration solutions designed specifically for your unique business challenges.',
    benefits: [
      'Bespoke Software Development',
      'Custom API Integrations',
      'Specialized Workflow Automation',
      'Industry-Specific Solutions',
      'Scalable Architecture Design',
      'Ongoing Support & Maintenance'
    ],
    image: '/images/photos/StandOutFRomCompetition.png',
    color: 'from-emerald-600 to-teal-500',
    link: '/services/custom-solutions'
  },
  {
    id: 'system-optimization',
    title: 'System Optimization',
    icon: FaServer,
    description: 'Improve performance and efficiency with our expert system optimization and enhancement services.',
    benefits: [
      'System Performance Analysis',
      'Process Automation & Streamlining',
      'Database Optimization',
      'Workflow Efficiency Improvements',
      'System Architecture Enhancements',
      'Scalability & Future-Proofing'
    ],
    image: '/images/photos/System_optimization.png',
    color: 'from-cyan-500 to-sky-600',
    link: '/services/system-optimization'
  },
  {
    id: 'technology-consulting',
    title: 'Technology Consulting',
    icon: FaLaptopCode,
    description: 'Get expert guidance on technology strategy, implementation, and optimization for your business.',
    benefits: [
      'Technology Stack Assessment',
      'Digital Transformation Strategy',
      'Software Selection & Implementation',
      'IT Roadmap Development',
      'Technology Vendor Evaluation',
      'Implementation Planning & Support'
    ],
    image: '/images/photos/Table_with_laptops.png',
    color: 'from-violet-600 to-purple-500',
    link: '/services/technologies'
  }
];

export default function ServicesPage() {

  return (
    <PageLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-navy to-primary-blue/70 z-0"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none z-10"></div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                AI-Powered Services for Business Growth
              </h1>
              
              <p className="text-lg text-white/90 mb-10">
                From SEO and website creation to lead generation and CRM automation, we offer a comprehensive suite of solutions to help your business thrive in the digital landscape.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#service-list">
                  <AnimatedButton className="bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                    Explore Services
                  </AnimatedButton>
                </Link>
                <Link href="/contact">
                  <AnimatedButton className="bg-transparent hover:bg-white/10 text-white border-white">
                    Request a Quote
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Services Section */}
        <section id="service-list" className="py-16 md:py-24 bg-white dark:bg-primary-slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <AnimatedText
                text="Our Services"
                className="text-3xl font-bold text-primary-navy dark:text-white sm:text-4xl"
                highlight={false}
              />
              <p className="mt-4 text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                We offer a comprehensive range of AI-powered marketing and automation services designed to help your business grow, attract more leads, and improve customer engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group bg-primary-light dark:bg-primary-navy/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className={`h-48 relative overflow-hidden bg-gradient-to-r ${service.color}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="text-white text-5xl drop-shadow-lg" />
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-2">{service.title}</h3>
                    <p className="text-primary-slate dark:text-gray-300 mb-4 flex-grow">{service.description}</p>
                    <Link href={service.link} className="mt-auto">
                      <span className="inline-flex items-center text-primary-blue hover:text-primary-blue/80 font-semibold group-hover:underline">
                        Learn more
                        <FaChevronRight className="ml-2 text-sm" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Service Section */}
        <AnimatedSection className="py-20 bg-primary-light dark:bg-primary-navy border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-base text-primary-blue font-semibold tracking-wide uppercase mb-3 inline-block px-4 py-1 bg-primary-blue/10 rounded-full"
              >
                Why Choose REV-ANEW
              </motion.span>
              <AnimatedText
                text="Comprehensive Business Solutions"
                className="text-3xl font-bold text-primary-navy dark:text-white sm:text-4xl"
                highlight={false}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-4 text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                Our AI-powered tools and automation systems help you scale your business efficiently while delivering exceptional results.
              </motion.p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white dark:bg-primary-slate/50 rounded-xl shadow-xl overflow-hidden">
                  <div className="relative h-80">
                    <Image
                      src="/images/photos/Two_People_looking_at_screen1.png"
                      alt="REV-ANEW Services"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/60 to-transparent"></div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-6">
                  Full-Service Digital Solutions
                </h3>
                  <p className="text-primary-slate dark:text-white/80 mb-8">
                  At REV-ANEW, we understand that modern businesses need integrated solutions. That&apos;s why we offer a complete range of services that work together seamlessly to maximize your marketing efforts and drive tangible results.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {['AI-Powered Automation', 'Data-Driven Strategies', 'Scalable Solutions', 'Measurable Results', 'Expert Support', 'Cutting-Edge Technology'].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                      </div>
                      <span className="text-primary-navy dark:text-white/90">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <Link href="/contact">
                    <AnimatedButton className="bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                      Schedule a Consultation
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Service Packages Section */}
        <section className="py-20 bg-white dark:bg-primary-slate border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-base text-primary-blue font-semibold tracking-wide uppercase mb-3 inline-block px-4 py-1 bg-primary-blue/10 rounded-full"
              >
                Customized For Your Business
              </motion.span>
              <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Tailored Service Solutions
              </h2>
              <p className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                We believe that every business has unique challenges and goals. Our service packages are meticulously crafted to address your specific needs rather than offering one-size-fits-all solutions.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-navy/5 to-primary-blue/5 dark:from-primary-navy/30 dark:to-primary-blue/30 rounded-2xl overflow-hidden shadow-xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-6">
                    Strategic, Results-Driven Approach
                  </h3>
                  <p className="text-primary-slate dark:text-white/80 mb-6">
                    Each solution we design begins with a thorough assessment of your business objectives, industry landscape, and growth targets. This collaborative approach ensures our services deliver maximum ROI and sustainable growth.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      'Flexible service components that scale with your business',
                      'Transparent delivery process with regular reporting',
                      'Continuous optimization based on performance analytics',
                      'Dedicated support from industry specialists',
                      'Integration with your existing technology stack'
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                        </div>
                        <span className="text-primary-navy dark:text-white/90 ml-3">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <Link href="/contact">
                      <AnimatedButton className="bg-primary-blue hover:bg-primary-blue/90 text-white border-transparent shadow-lg">
                        Request Custom Solution
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
                
                <div className="relative">
                  <Image
                    src="/images/photos/Marketing_growth_success.jpg"
                    alt="Tailored business solutions"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white dark:bg-primary-navy p-4 rounded-lg shadow-xl">
                    <div className="flex items-center space-x-2">
                      <FaStar className="text-yellow-500" />
                      <span className="text-primary-navy dark:text-white font-bold">Custom Solutions</span>
                    </div>
                    <p className="text-sm text-primary-slate dark:text-white/80 mt-1">
                      Designed for your specific business goals
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="text-center mt-16">
              <p className="text-primary-slate dark:text-white/80 mb-6">
                Ready to discover how our services can be tailored to your specific needs? 
                Our consultants will craft a solution that aligns perfectly with your business goals and budget.
              </p>
              <Link href="/contact">
                <AnimatedButton className="bg-transparent hover:bg-primary-blue/10 text-primary-blue border-primary-blue">
                  Schedule a Free Consultation
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection className="py-20 bg-primary-slate text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedText
              text="Ready to Supercharge Your Business?"
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              highlight={false}
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-10 max-w-3xl mx-auto"
            >
              Join hundreds of businesses that have transformed their operations with our AI-powered solutions. Schedule a call today and let&apos;s discuss how we can help you grow.
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <AnimatedButton className="bg-green-600 hover:bg-green-700 text-white border-transparent shadow-lg">
                  Schedule a Call
                </AnimatedButton>
              </Link>
              
              <Link href="/resources/document-creation">
                <AnimatedButton className="bg-white text-primary-navy hover:bg-primary-light border-transparent shadow-lg">
                  Try Document Creation
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
