'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaLaptopCode, FaHospital, FaUniversity, FaIndustry, FaBriefcase, FaLandmark } from 'react-icons/fa';
import CTASection from '@/components/CTASection';

interface IndustryDetailLayoutProps {
  title: string;
  description: string;
  iconName: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'FaLaptopCode': FaLaptopCode,
  'FaHospital': FaHospital,
  'FaUniversity': FaUniversity,
  'FaIndustry': FaIndustry,
  'FaBriefcase': FaBriefcase,
  'FaLandmark': FaLandmark,
};

export default function IndustryDetailLayout({
  title,
  description,
  iconName,
  challenges,
  solutions,
  benefits
}: IndustryDetailLayoutProps) {
  const Icon = iconMap[iconName] || FaLaptopCode;
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b2e6e] to-[#1e4b9e] text-white py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft className="text-sm" />
            <span>Back to Industries</span>
          </Link>

          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon className="text-3xl sm:text-4xl text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                {title}
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Challenges */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Industry Challenges
              </h2>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">●</span>
                    <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Our Solutions
              </h2>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Benefits
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">★</span>
                    <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Ready to Transform Your ${title} Organization?`}
        description="Contact us to learn how TAS can help you achieve your technology goals with proven solutions and expert guidance."
        primaryButtonText="Schedule a Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Industries"
        secondaryButtonLink="/industries"
      />
    </main>
  );
}
