'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function HeroIndustries() {
  return (
    <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center overflow-hidden">
      {/* Modern gradient background with inline styles */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #374151 0%, #10B981 50%, #374151 100%)'
        }}
      >
        {/* Layered gradients for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, rgba(245, 158, 11, 0.2) 0%, transparent 50%, rgba(52, 211, 153, 0.3) 100%)'
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(225deg, transparent 0%, rgba(55, 65, 81, 0.4) 50%, rgba(16, 185, 129, 0.2) 100%)'
          }}
        ></div>
      </div>

      {/* Enhanced overlay for text contrast */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(90deg, rgba(55, 65, 81, 0.8) 0%, rgba(55, 65, 81, 0.5) 50%, transparent 100%)'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[680px]">
          {/* Breadcrumb */}
          <nav className="mb-4 sm:mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-white font-semibold">Industries</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Industry-Specific Solutions
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-100 mb-6 sm:mb-8 leading-relaxed">
            Empowering organizations across diverse sectors with tailored CRM, ERP, and automation solutions. From healthcare to manufacturing, we deliver proven expertise and measurable results.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-teal text-white font-semibold rounded-lg hover:bg-primary-tealDark transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Schedule a Consultation
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-orange text-white font-semibold rounded-lg hover:bg-primary-orangeDark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
