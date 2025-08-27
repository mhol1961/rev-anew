'use client';

import { getTechnologies, type Technology } from '@/lib/supabase';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CompareTechnologiesPage = () => {
  const [techArray, setTechArray] = useState<Technology[]>([]);
  const [, setLoading] = useState(true);

  useEffect(() => {
    async function loadTechnologies() {
      const technologies = await getTechnologies();
      setTechArray(technologies);
      setLoading(false);
    }
    loadTechnologies();
  }, []);

  // Define the features we want to compare
  const featureMap: { key: keyof Technology; label: string }[] = [
    { key: 'feature_email_marketing', label: 'Email Marketing' },
    { key: 'feature_lead_scoring', label: 'Lead Scoring' },
    { key: 'feature_sales_automation', label: 'Sales Automation' },
    { key: 'feature_custom_reporting', label: 'Custom Reporting' },
    { key: 'feature_api_access', label: 'API Access' },
    { key: 'feature_mobile_app', label: 'Mobile App' },
    { key: 'feature_free_tier', label: 'Free Tier Available' },
  ];

  return (
    <>
      {/* Technology background overlay */}
      <div className="fixed inset-0 -z-10 opacity-5 dark:opacity-10">
        <Image
          src="/images/hero/Tech_abstract_cityScape_hero.png"
          alt="Technology Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <section className="py-12 md:py-20 bg-gray-50 dark:bg-dark-bg relative overflow-hidden">
        {/* Tech gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-primary-navy/10 
          dark:from-primary-blue/20 dark:to-primary-accentblue/20 z-0"></div>

        {/* Grid pattern overlay - more visible in dark mode */}
        <div className="absolute inset-0 opacity-10 dark:opacity-30 z-0 bg-grid-pattern"></div>
        
        {/* Content with relative positioning to appear above overlays */}
        <div className="container mx-auto px-4 relative z-10">
          {/* Page Title and Description */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-navy dark:text-primary-light">
              Technology Comparison
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-dark-text max-w-3xl mx-auto">
              Compare key features and capabilities of the technologies we work with.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-center mb-8 text-primary-navy dark:text-primary-light">
            Technology Overview
          </h2>
          
          {/* First table with dark mode support */}
          <div className="overflow-x-auto shadow-md rounded-lg backdrop-blur-sm bg-white/90 dark:bg-dark-card/90 border border-gray-200 dark:border-gray-700">
            <table className="min-w-full">
              <thead className="bg-blue-800 dark:bg-primary-darkblue text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Technology</th>
                  <th className="py-3 px-4 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {techArray.map((tech) => (
                  <tr key={tech.slug} className="hover:bg-gray-100 dark:hover:bg-gray-800/50 transition duration-150">
                    <td className="py-3 px-4 font-medium text-gray-900 dark:text-dark-text whitespace-nowrap">{tech.title}</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-dark-muted">{tech.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-center mt-16 mb-8 text-primary-navy dark:text-primary-light">
            Feature Comparison
          </h2>
          
          {/* Second table with dark mode support */}
          <div className="overflow-x-auto shadow-md rounded-lg backdrop-blur-sm bg-white/90 dark:bg-dark-card/90 border border-gray-200 dark:border-gray-700">
            <table className="min-w-full">
              <thead className="bg-blue-800 dark:bg-primary-darkblue text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Feature</th>
                  {techArray.map((tech) => (
                    <th key={tech.slug} className="py-3 px-4 text-center font-semibold whitespace-nowrap">{tech.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {featureMap.map((feature) => (
                  <tr key={feature.key} className="hover:bg-gray-100 dark:hover:bg-gray-800/50 transition duration-150">
                    <td className="py-3 px-4 font-medium text-gray-900 dark:text-dark-text whitespace-nowrap">{feature.label}</td>
                    {techArray.map((tech) => (
                      <td key={`${tech.slug}-${feature.key}`} className="py-3 px-4 text-center">
                        {tech[feature.key] ? (
                          <span className="text-green-600 dark:text-green-400 font-bold text-xl">✅</span>
                        ) : (
                          <span className="text-red-600 dark:text-red-400 font-bold text-xl">❌</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tech decorative element */}
          <div className="w-full flex justify-center mt-16">
            <div className="relative w-20 h-20 opacity-70 dark:opacity-90">
              <Image 
                src="/images/Techy_looking_image.png" 
                alt="Technology Icon"
                fill
                sizes="80px"
                className="object-contain dark:hue-rotate-30 dark:brightness-110 animate-pulse"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompareTechnologiesPage;
