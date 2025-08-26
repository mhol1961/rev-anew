'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
// Import relevant icons - FaCogs, FaPlug, FaSyncAlt might be good
import { FaCogs, FaPlug, FaSyncAlt } from 'react-icons/fa';
import { getTechnologies, type Technology } from '@/lib/supabase';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';

// Helper function to determine if a technology is an Integration Tool
const isIntegrationTool = (tech: Technology): boolean => {
  const titleLower = tech.title.toLowerCase();
  // Keywords indicating Integration Tools (adjust as needed based on data)
  const integrationKeywords = ['integration', 'connect', 'api', 'middleware', 'zapier', 'mulesoft', 'boomi'];
  // Also check specific feature flags if available and relevant
  return integrationKeywords.some(keyword => titleLower.includes(keyword)) || tech.feature_api_access;
};

export default function IntegrationTechnologiesPage() {
  const [integrationTechnologies, setIntegrationTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTechnologies() {
      const allTechnologies = await getTechnologies();
      const filtered = allTechnologies.filter(isIntegrationTool);
      setIntegrationTechnologies(filtered);
      setLoading(false);
    }
    loadTechnologies();
  }, []);

  return (
    <PageLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-700 to-purple-700 py-20 md:py-28"> {/* Different gradient */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
            <div className="md:flex items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                  Integration Tools & Platforms
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl text-white/90 mb-8 max-w-lg"
                >
                  Connect your disparate systems seamlessly. Explore the integration platforms and tools we leverage to build cohesive digital ecosystems.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link href="/contact">
                    <AnimatedButton className="bg-white text-indigo-700 hover:bg-white/90 border-transparent">
                      Discuss Integration Needs
                    </AnimatedButton>
                  </Link>
                  <Link href="/services/technology-integration">
                    <AnimatedButton className="bg-transparent hover:bg-white/10 text-white border-white">
                      Our Integration Services
                    </AnimatedButton>
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="md:w-2/5"
              >
                 {/* Consider an integration-themed image */}
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/photos/illustrations/Arrows_segments_marketing.png" // Placeholder - replace if better image exists
                    alt="Integration Concept"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/40 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Integration Technologies Section */}
        <AnimatedSection className="py-16 bg-white dark:bg-primary-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-primary-navy dark:text-white mb-4"
              >
                Featured Integration Platforms
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                We utilize powerful integration tools to connect your applications, automate workflows, and ensure data flows smoothly across your organization.
              </motion.p>
            </div>

            {/* Technology Cards - Filtered for Integration */}
            {integrationTechnologies.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {integrationTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                    className="bg-white dark:bg-primary-slate/40 rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-200 dark:border-primary-navy"
                  >
                    <div className="relative h-48 bg-gray-100 dark:bg-primary-slate">
                      {tech.image_url ? (
                        <Image
                          src={tech.image_url}
                          alt={tech.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        // Placeholder if no image
                        <div className="flex items-center justify-center h-full">
                          <FaPlug className="text-gray-400 text-6xl" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                      </div>
                    </div>

                    <div className="flex-1 p-5">
                      <p className="text-sm text-primary-slate dark:text-white/80 mb-4 line-clamp-3">
                        {tech.description}
                      </p>

                      <div className="mb-4">
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Key Aspects</div>
                        <div className="flex flex-wrap gap-2">
                          {tech.feature_api_access && (
                            <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs px-2 py-1 rounded">
                              API Access
                            </span>
                          )}
                          {tech.feature_workflow_automation && (
                            <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs px-2 py-1 rounded">
                              Workflow Automation
                            </span>
                          )}
                           {tech.feature_app_marketplace && (
                            <span className="bg-gray-100 dark:bg-gray-700/30 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded">
                              App Marketplace
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-end items-center mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                        <Link href={`/services/technologies/${tech.slug}`}>
                          <span className="text-primary-blue hover:text-primary-blue/80 text-sm font-medium flex items-center">
                            Learn more
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-primary-slate dark:text-white/80">No specific integration platforms listed yet. Check back soon or contact us for details!</p>
                 <Link href="/contact" className="mt-4 inline-block">
                    <AnimatedButton className="bg-primary-blue text-white hover:bg-primary-blue/90 border-transparent">
                      Inquire About Integration Tools
                    </AnimatedButton>
                  </Link>
              </div>
            )}


            {/* Compare CTA (Optional for Integration, could link back to main compare) */}
            <div className="mt-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Need to Connect Your Systems?</h3>
                <p className="text-primary-slate dark:text-white/80 mb-6 max-w-2xl mx-auto">
                  Our integration specialists can help design and implement the right connections to streamline your operations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                   <Link href="/services/technology-integration">
                    <AnimatedButton className="bg-indigo-600 text-white hover:bg-indigo-700 border-transparent">
                      Explore Integration Services
                    </AnimatedButton>
                  </Link>
                  <Link href="/contact">
                    <AnimatedButton className="bg-white text-primary-navy hover:bg-gray-100 border-gray-300 dark:bg-transparent dark:text-white dark:border-white/30 dark:hover:bg-white/10">
                      Schedule Consultation
                    </AnimatedButton>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Related Services Section */}
        <AnimatedSection className="py-16 bg-primary-light dark:bg-primary-slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-primary-navy dark:text-white mb-4"
              >
                Our Integration Expertise
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                We offer end-to-end services for connecting your business applications.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'API Integration',
                  description: 'Custom API development and integration between various platforms.',
                  icon: FaPlug,
                  link: '/services/technology-integration'
                },
                {
                  title: 'Workflow Automation',
                  description: 'Automate processes across multiple systems using integration tools.',
                  icon: FaSyncAlt,
                  link: '/services/marketing-automation' // Or a dedicated automation page
                },
                {
                  title: 'Data Synchronization',
                  description: 'Ensure consistent and up-to-date data across all connected applications.',
                  icon: FaCogs, // Reusing Cogs
                  link: '/services/technology-integration'
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-primary-navy/50 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                    <service.icon className="text-indigo-600 dark:text-indigo-400 text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-3">{service.title}</h3>
                  <p className="text-primary-slate dark:text-white/80 mb-4">{service.description}</p>
                  <Link href={service.link} className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center">
                    Learn more
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-16 bg-white dark:bg-primary-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-800 rounded-xl overflow-hidden shadow-lg"> {/* Adjusted gradient */}
              <div className="px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-4"
                >
                  Ready to Unify Your Technology Stack?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg text-white/90 mb-8 max-w-3xl mx-auto"
                >
                  Contact us today to discuss your integration challenges and discover how we can build a connected future for your business.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link href="/contact">
                    <AnimatedButton className="bg-white text-purple-700 hover:bg-white/90 border-transparent">
                      Get Your Integration Quote
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
