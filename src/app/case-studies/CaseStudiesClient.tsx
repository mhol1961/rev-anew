'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaBuilding, FaLaptopCode, FaUsers } from 'react-icons/fa';

export function IndustryResultsSection() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          industry: 'Manufacturing',
          metrics: [
            { label: 'Productivity Increase', value: '42%' },
            { label: 'Process Automation', value: '68%' },
            { label: 'Data Accuracy', value: '99.7%' }
          ],
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          iconColor: 'text-blue-600 dark:text-blue-400',
          icon: FaBuilding
        },
        {
          industry: 'Technology',
          metrics: [
            { label: 'Lead Generation', value: '189%' },
            { label: 'Sales Cycle Reduction', value: '36%' },
            { label: 'Customer Retention', value: '28%' }
          ],
          bgColor: 'bg-purple-100 dark:bg-purple-900/30',
          iconColor: 'text-purple-600 dark:text-purple-400',
          icon: FaLaptopCode
        },
        {
          industry: 'Healthcare',
          metrics: [
            { label: 'Patient Satisfaction', value: '47%' },
            { label: 'Administrative Time', value: '-62%' },
            { label: 'Reporting Compliance', value: '100%' }
          ],
          bgColor: 'bg-green-100 dark:bg-green-900/30',
          iconColor: 'text-green-600 dark:text-green-400',
          icon: FaUsers
        }
      ].map((industry, index) => (
        <motion.div
          key={industry.industry}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          viewport={{ once: true }}
          className="bg-white dark:bg-primary-navy/50 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
        >
          <div className={`w-12 h-12 rounded-full ${industry.bgColor} flex items-center justify-center mb-4`}>
            <industry.icon className={`${industry.iconColor} text-xl`} />
          </div>
          <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-5">{industry.industry}</h3>
          
          <ul className="space-y-4">
            {industry.metrics.map((metric) => (
              <li key={metric.label} className="flex justify-between">
                <span className="text-primary-slate dark:text-white/80">{metric.label}</span>
                <span className="font-bold text-primary-blue dark:text-blue-400">{metric.value}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Link href={`/contact?industry=${industry.industry.toLowerCase()}`} className="text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center">
              See more case studies
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function CTASection() {
  return (
    <div className="bg-gradient-to-r from-primary-blue to-blue-600 rounded-xl overflow-hidden shadow-lg">
      <div className="px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Be Our Next Success Story?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-white/90 mb-8 max-w-3xl mx-auto"
        >
          Let us help you transform your business with the right technology solutions tailored to your specific needs and goals.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/contact">
            <AnimatedButton className="bg-white text-primary-blue hover:bg-white/90 border-transparent">
              Start Your Transformation
            </AnimatedButton>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}