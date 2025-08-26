'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChartLine, FaLaptop, FaRocket } from 'react-icons/fa';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import type { Technology } from '@/lib/supabase';

interface TechnologiesClientPageProps {
  technologies: Technology[];
}

// Category definitions for filtering
const categories = [
  { id: 'all', name: 'All Technologies' },
  { id: 'crm', name: 'CRM Platforms' },
  { id: 'marketing', name: 'Marketing Platforms' },
  { id: 'integration', name: 'Integration Tools' }
];

// Assign categories to technologies
const getCategoryFor = (tech: Technology) => {
  if (tech.title.toLowerCase().includes('crm') || 
      tech.title.includes('Dynamics') || 
      tech.title.includes('Salesforce') ||
      tech.title.includes('Zendesk') ||
      tech.title.includes('Pipedrive') ||
      tech.title.includes('Sugar')) {
    return 'crm';
  } else if (tech.title.includes('Marketo') || 
             tech.title.includes('Pardot') || 
             tech.title.includes('MailChimp') ||
             tech.title.includes('ActiveCampaign') ||
             tech.title.includes('ClickDimensions')) {
    return 'marketing';
  } else if (tech.title.includes('Integration') || 
             tech.title.includes('Connect')) {
    return 'integration';
  }
  return 'all';
};

export default function TechnologiesClientPage({ technologies }: TechnologiesClientPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter technologies based on selected category
  const filteredTechnologies = selectedCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => getCategoryFor(tech) === selectedCategory);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-navy to-primary-blue py-20 md:py-28">
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
                Technology Platforms
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-white/90 mb-8 max-w-lg"
              >
                Explore our comprehensive suite of technology solutions designed to transform your business processes and drive growth.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact">
                  <AnimatedButton className="bg-white text-primary-navy hover:bg-white/90 border-transparent">
                    Get Consultation
                  </AnimatedButton>
                </Link>
                <Link href="/services/technologies/compare">
                  <AnimatedButton className="bg-transparent hover:bg-white/10 text-white border-white">
                    Compare Solutions
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
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/photos/technology-platforms.png"
                  alt="Technology Platforms"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <AnimatedSection className="py-8 bg-primary-light/50 dark:bg-primary-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === category.id
                    ? 'bg-primary-blue text-white shadow-lg'
                    : 'bg-white dark:bg-primary-navy text-primary-navy dark:text-white hover:bg-primary-blue/10 dark:hover:bg-primary-blue/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Technologies Grid */}
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
              {selectedCategory === 'all' 
                ? 'All Technology Solutions' 
                : categories.find(c => c.id === selectedCategory)?.name || 'Technology Solutions'
              }
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
            >
              Discover the platforms and tools we specialize in to help transform your business operations.
            </motion.p>
          </div>

          {filteredTechnologies.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTechnologies.map((technology, index) => (
                <motion.div
                  key={technology.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-primary-slate/40 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Technology Image */}
                  <div className="relative h-48 overflow-hidden">
                    {technology.image_url ? (
                      <Image
                        src={technology.image_url}
                        alt={technology.title}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary-light/20 dark:bg-primary-blue/20 flex items-center justify-center">
                        <FaLaptop className="text-4xl text-primary-blue/50" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Technology Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-3 group-hover:text-primary-blue transition-colors">
                      {technology.title}
                    </h3>
                    <p className="text-primary-slate dark:text-white/80 mb-4 line-clamp-3">
                      {technology.description}
                    </p>
                    
                    {/* Cost Summary */}
                    {technology.cost_summary && (
                      <div className="mb-4 p-3 bg-primary-light/10 dark:bg-primary-blue/10 rounded-lg">
                        <p className="text-sm font-medium text-primary-blue dark:text-blue-400">
                          {technology.cost_summary}
                        </p>
                      </div>
                    )}

                    {/* Features Preview */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {technology.feature_contact_management && (
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded">
                            Contact Management
                          </span>
                        )}
                        {technology.feature_email_marketing && (
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded">
                            Email Marketing
                          </span>
                        )}
                        {technology.feature_free_tier && (
                          <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs rounded">
                            Free Tier
                          </span>
                        )}
                      </div>
                    </div>

                    <Link href={`/services/technologies/${technology.slug}`}>
                      <AnimatedButton className="w-full bg-primary-blue hover:bg-primary-navy text-white">
                        Learn More
                      </AnimatedButton>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FaRocket className="mx-auto text-6xl text-primary-blue/30 mb-4" />
              <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-2">
                No Technologies Found
              </h3>
              <p className="text-primary-slate dark:text-white/80 mb-6">
                No technologies match the selected category. Try selecting a different category.
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="text-primary-blue hover:text-primary-navy font-medium"
              >
                Show All Technologies →
              </button>
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-light dark:bg-primary-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-blue to-blue-600 rounded-xl overflow-hidden shadow-lg">
            <div className="px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-4"
              >
                Ready to Transform Your Business?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-white/90 mb-8 max-w-3xl mx-auto"
              >
                Let our experts help you choose and implement the right technology solutions for your business needs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link href="/contact">
                  <AnimatedButton className="bg-white text-primary-blue hover:bg-white/90 border-transparent">
                    Get Started Today
                  </AnimatedButton>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}