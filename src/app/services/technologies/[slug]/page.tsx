'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { technologies } from '@/data/technologiesData';
import PageLayout from '@/components/layout/PageLayout'; 
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';

// Helper component for list items
const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-green-500 mr-2 mt-1">✓</span>
    <span>{children}</span>
  </li>
);

const TechnologyDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const technology = technologies[slug];

  // --- DEBUGGING START ---
  console.log('--- Technology Detail Page Debug ---');
  console.log('Slug:', slug);
  console.log('Technology Object:', technology);
  if (technology) {
    console.log('Image URL:', technology.imageUrl);
  }
  console.log('----------------------------------');
  // --- DEBUGGING END ---

  if (!technology) {
    notFound(); 
  }

  return (
    <PageLayout>
      <AnimatedSection className="bg-gradient-to-b from-blue-50 to-white dark:from-primary-dark dark:to-primary-slate py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-navy dark:text-blue-800 mb-4">{technology.title}</h1>
             {/* Breadcrumbs - Simple Version */}
             <div className="text-sm text-gray-500 dark:text-gray-400">
              <Link href="/" className="hover:text-blue-600">Home</Link> / 
              <Link href="/services" className="hover:text-blue-600">Services</Link> / 
              <span className="font-medium">{technology.title}</span>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Left Column: Image and Description */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-1 space-y-6"
            >
              {technology.imageUrl && (
                <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={technology.imageUrl}
                    alt={`${technology.title} illustrative image`}
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {technology.description}
              </p>
            </motion.div>

            {/* Right Column: Pros, Cons, Cost */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-2 space-y-8"
            >
              {/* Pros Card */}
              <div className="bg-white dark:bg-primary-navy p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">Pros</h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {technology.pros.map((pro, index) => (
                    <ListItem key={`pro-${index}`}>{pro}</ListItem>
                  ))}
                </ul>
              </div>

              {/* Cons Card */}
              <div className="bg-white dark:bg-primary-navy p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-4">Cons</h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {technology.cons.map((con, index) => (
                     <li key={`con-${index}`} className="flex items-start">
                       <span className="text-red-500 mr-2 mt-1">✗</span>
                       <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cost Factors Card */}
              <div className="bg-white dark:bg-primary-navy p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Cost Factors</h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                  {technology.costFactors.map((factor, index) => (
                    <li key={`cost-${index}`}>{factor}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

        </div>
      </AnimatedSection>
    </PageLayout>
  );
};

export default TechnologyDetailPage;
