'use client';

import React from 'react';
import Link from 'next/link';
import { Industry } from '@/data/industries';
import { FaArrowRight } from 'react-icons/fa';

interface IndustryCardProps {
  industry: Industry;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  const Icon = industry.icon;

  return (
    <Link
      href={industry.link}
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-[#0b2e6e] dark:hover:border-[#60a5fa]"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b2e6e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 p-6 sm:p-8">
        {/* Icon */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0b2e6e] to-[#1e4b9e] rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-white text-2xl sm:text-3xl" />
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#0b2e6e] dark:group-hover:text-[#60a5fa] transition-colors">
          {industry.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6 line-clamp-4">
          {industry.description}
        </p>

        {/* Stats */}
        {industry.stats && industry.stats.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            {industry.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#0b2e6e] dark:text-[#60a5fa] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Learn more link */}
        <div className="flex items-center gap-2 text-[#0b2e6e] dark:text-[#60a5fa] font-semibold group-hover:gap-3 transition-all">
          <span>Learn More</span>
          <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
