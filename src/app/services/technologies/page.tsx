&apos;use client';

import { useState } from &apos;react';
import Link from &apos;next/link';
import Image from &apos;next/image';
import { motion } from &apos;framer-motion';
import { FaChartLine, FaLaptop, FaRocket } from &apos;react-icons/fa';
import { technologies } from &apos;@/data/technologiesData';
import PageLayout from &apos;@/components/layout/PageLayout';
import AnimatedSection from &apos;@/components/ui/AnimatedSection';
import AnimatedButton from &apos;@/components/ui/AnimatedButton';

// Convert technologies object to array for iteration
const technologyItems = Object.values(technologies);

// Category definitions for filtering
const categories = [
  { id: &apos;all', name: &apos;All Technologies' },
  { id: &apos;crm', name: &apos;CRM Platforms' },
  { id: &apos;marketing', name: &apos;Marketing Platforms' },
  { id: &apos;integration', name: &apos;Integration Tools' }
];

// Assign categories to technologies
const getCategoryFor = (tech: typeof technologyItems[0]) => {
  // This is a simple categorization - in a real app you might want to have
  // explicit category assignments in your data model
  if (tech.title.toLowerCase().includes(&apos;crm') || 
      tech.title.includes(&apos;Dynamics') || 
      tech.title.includes(&apos;Salesforce') ||
      tech.title.includes(&apos;Zendesk') ||
      tech.title.includes(&apos;Pipedrive') ||
      tech.title.includes(&apos;Sugar')) {
    return &apos;crm';
  } else if (tech.title.includes(&apos;Marketo') || 
             tech.title.includes(&apos;Pardot') || 
             tech.title.includes(&apos;MailChimp') ||
             tech.title.includes(&apos;ActiveCampaign') ||
             tech.title.includes(&apos;ClickDimensions')) {
    return &apos;marketing';
  } else if (tech.title.includes(&apos;Integration') || 
             tech.title.includes(&apos;Connect')) {
    return &apos;integration';
  }
  // If no specific category is found, show in all
  return &apos;all';
};

export default function TechnologiesPage() {
  const [selectedCategory, setSelectedCategory] = useState(&apos;all');
  
  // Filter technologies based on selected category
  const filteredTechnologies = technologyItems.filter(tech => 
    selectedCategory === &apos;all' || getCategoryFor(tech) === selectedCategory
  );

  return (
    <PageLayout>
      <main className=&quot;flex-1">
        {/* Hero Section */}
        <section className=&quot;relative bg-gradient-to-r from-primary-navy to-primary-blue py-20 md:py-28">
          <div className=&quot;absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
            <div className=&quot;md:flex items-center justify-between">
              <div className=&quot;md:w-1/2 mb-10 md:mb-0">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className=&quot;text-4xl md:text-5xl font-bold text-white mb-6"
                >
                  Technology Expertise & Consulting
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className=&quot;text-xl text-white/90 mb-8 max-w-lg"
                >
                  We provide expert guidance on selecting, implementing, and optimizing the right technology solutions for your business needs.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className=&quot;flex flex-wrap gap-4"
                >
                  <Link href=&quot;/contact">
                    <AnimatedButton className=&quot;bg-white text-primary-navy hover:bg-white/90 border-transparent">
                      Request a Consultation
                    </AnimatedButton>
                  </Link>
                  <Link href=&quot;/services/technologies/compare">
                    <AnimatedButton className=&quot;bg-transparent hover:bg-white/10 text-white border-white">
                      Compare Technologies
                    </AnimatedButton>
                  </Link>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className=&quot;md:w-2/5"
              >
                <div className=&quot;relative h-80 w-full rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src=&quot;/images/photos/Laptop_CRM_dashboard.png&quot;
                    alt=&quot;Technology Dashboard&quot;
                    fill
                    className=&quot;object-cover&quot;
                    sizes=&quot;(max-width: 768px) 100vw, 40vw&quot;
                  />
                  <div className=&quot;absolute inset-0 bg-gradient-to-tr from-primary-blue/40 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-navy">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4"
              >
                Technology Platforms We Specialize In
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                Explore our expertise across various technology platforms and find the perfect solution for your business needs.
              </motion.p>
            </div>

            {/* Category Filter Tabs */}
            <div className=&quot;flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === category.id
                      ? &apos;bg-primary-blue text-white shadow-md'
                      : &apos;bg-gray-100 dark:bg-primary-slate/60 text-primary-navy dark:text-white/80 hover:bg-gray-200 dark:hover:bg-primary-slate'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Technology Cards */}
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: &apos;0 10px 25px -5px rgba(0, 0, 0, 0.1)&apos; }}
                  className=&quot;bg-white dark:bg-primary-slate/40 rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-200 dark:border-primary-navy"
                >
                  <div className=&quot;relative h-48 bg-gray-100 dark:bg-primary-slate">
                    {tech.imageUrl && (
                      <Image
                        src={tech.imageUrl}
                        alt={tech.title}
                        fill
                        className=&quot;object-cover transition-transform duration-300 hover:scale-105&quot;
                        sizes=&quot;(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw&quot;
                      />
                    )}
                    <div className=&quot;absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className=&quot;absolute bottom-4 left-4 right-4">
                      <h3 className=&quot;text-xl font-bold text-white">{tech.title}</h3>
                    </div>
                  </div>
                  
                  <div className=&quot;flex-1 p-5">
                    <p className=&quot;text-sm text-primary-slate dark:text-white/80 mb-4 line-clamp-3">
                      {tech.description}
                    </p>
                    
                    <div className=&quot;mb-4">
                      <div className=&quot;text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Key Features</div>
                      <div className=&quot;flex flex-wrap gap-2">
                        {tech.feature_contactManagement && (
                          <span className=&quot;bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded">
                            Contact Management
                          </span>
                        )}
                        {tech.feature_marketingAutomationWorkflows && (
                          <span className=&quot;bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded">
                            Marketing Automation
                          </span>
                        )}
                        {tech.feature_salesAutomation && (
                          <span className=&quot;bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs px-2 py-1 rounded">
                            Sales Automation
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className=&quot;flex justify-end items-center mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Link href={`/services/technologies/${tech.slug}`}>
                        <span className=&quot;text-primary-blue hover:text-primary-blue/80 text-sm font-medium flex items-center">
                          Learn more
                          <svg className=&quot;ml-1 w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg">
                            <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 5l7 7-7 7&quot; />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Compare CTA */}
            <div className=&quot;mt-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-r from-primary-light to-blue-50 dark:from-primary-slate/50 dark:to-primary-blue/20 p-8 rounded-xl shadow-md"
              >
                <h3 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mb-4">Need Help Deciding?</h3>
                <p className=&quot;text-primary-slate dark:text-white/80 mb-6 max-w-2xl mx-auto">
                  Compare features, pricing, and benefits of different platforms or schedule a consultation with our technology experts.
                </p>
                <div className=&quot;flex flex-wrap justify-center gap-4">
                  <Link href=&quot;/services/technologies/compare">
                    <AnimatedButton className=&quot;bg-primary-blue text-white hover:bg-primary-blue/90 border-transparent">
                      Compare Technologies
                    </AnimatedButton>
                  </Link>
                  <Link href=&quot;/contact">
                    <AnimatedButton className=&quot;bg-white text-primary-navy hover:bg-gray-100 border-gray-300 dark:bg-transparent dark:text-white dark:border-white/30 dark:hover:bg-white/10">
                      Schedule Consultation
                    </AnimatedButton>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection className=&quot;py-16 bg-primary-light dark:bg-primary-slate">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4"
              >
                Our Technology Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                We provide comprehensive services to help you select, implement, and optimize the right technology solutions.
              </motion.p>
            </div>

            <div className=&quot;grid md:grid-cols-3 gap-8">
              {[
                {
                  title: &apos;Technology Consulting',
                  description: &apos;Expert guidance on selecting the right technologies for your unique business needs.&apos;,
                  icon: FaLaptop,
                  link: &apos;/services/technologies/compare'
                },
                {
                  title: &apos;Implementation & Integration',
                  description: &apos;Seamless deployment and integration of technologies with your existing systems.&apos;,
                  icon: FaRocket,
                  link: &apos;/services/technology-integration'
                },
                {
                  title: &apos;Optimization & Support',
                  description: &apos;Ongoing optimization and support to maximize your technology investments.&apos;,
                  icon: FaChartLine,
                  link: &apos;/services/technologies'
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className=&quot;bg-white dark:bg-primary-navy/50 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className=&quot;w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                    <service.icon className=&quot;text-blue-600 dark:text-blue-400 text-xl&quot; />
                  </div>
                  <h3 className=&quot;text-xl font-semibold text-primary-navy dark:text-white mb-3">{service.title}</h3>
                  <p className=&quot;text-primary-slate dark:text-white/80 mb-4">{service.description}</p>
                  <Link href={service.link} className=&quot;text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center">
                    Learn more
                    <svg className=&quot;ml-1 w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg">
                      <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 5l7 7-7 7&quot; />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className=&quot;py-16 bg-white dark:bg-primary-navy">
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=&quot;bg-gradient-to-r from-primary-blue to-blue-600 rounded-xl overflow-hidden shadow-lg">
              <div className=&quot;px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className=&quot;text-3xl font-bold mb-4"
                >
                  Ready to Transform Your Business with the Right Technology?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;text-lg text-white/90 mb-8 max-w-3xl mx-auto"
                >
                  Our technology experts are ready to help you select, implement, and optimize the perfect technology solutions for your business.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link href=&quot;/contact">
                    <AnimatedButton className=&quot;bg-white text-primary-blue hover:bg-white/90 border-transparent">
                      Schedule Your Consultation
                    </AnimatedButton>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
