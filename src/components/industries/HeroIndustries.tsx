'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function HeroIndustries() {
  return (
    <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image-industry-page.png"
          alt="Industries hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay - from-[#0b2e6e]/70 via-[#0b2e6e]/40 to-transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b2e6e]/70 via-[#0b2e6e]/40 to-transparent z-10"></div>

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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0b2e6e] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Schedule a Consultation
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
