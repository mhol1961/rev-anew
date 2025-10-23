'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

export default function CTASection({
  title = "Ready to Transform Your Industry?",
  description = "Partner with REV-ANEW to leverage cutting-edge CRM, ERP, and automation technologies tailored to your industry needs.",
  primaryButtonText = "Schedule a Consultation",
  primaryButtonLink = "/contact",
  secondaryButtonText = "View Our Services",
  secondaryButtonLink = "/services",
  className = ""
}: CTASectionProps) {
  return (
    <section className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden ${className}`}>
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b2e6e] via-[#1e4b9e] to-[#0b2e6e]"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto mb-8 sm:mb-10">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={primaryButtonLink}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0b2e6e] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            {primaryButtonText}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href={secondaryButtonLink}
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-300"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
