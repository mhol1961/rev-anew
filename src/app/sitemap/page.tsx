'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaTools, FaInfoCircle, FaLaptopCode, FaBookOpen } from 'react-icons/fa';

const Sitemap = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto bg-white dark:bg-primary-slate p-6 rounded-lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary-navy dark:text-white">
            Sitemap
          </h1>
          <p className="text-primary-slate dark:text-white/80 mb-4">
            Find everything on our website with this comprehensive sitemap.
          </p>
          <div className="w-20 h-1 bg-primary-blue mb-8"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Main Navigation */}
          <motion.div variants={fadeIn} className="bg-white dark:bg-primary-navy/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FaHome className="text-primary-blue mr-3 text-xl" />
              <h2 className="text-xl font-bold text-primary-navy dark:text-white">Main Navigation</h2>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeIn} className="bg-white dark:bg-primary-navy/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FaTools className="text-primary-blue mr-3 text-xl" />
              <h2 className="text-xl font-bold text-primary-navy dark:text-white">Our Services</h2>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/services/crm" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  CRM Implementation
                </Link>
              </li>
              <li>
                <Link href="/services/technology-integration" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Technology Integration
                </Link>
              </li>
              <li>
                <Link href="/services/marketing-automation" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Marketing Automation
                </Link>
              </li>
              <li>
                <Link href="/services/integration" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Custom Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/technologies/compare" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  System Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/technologies" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Technology Consulting
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={fadeIn} className="bg-white dark:bg-primary-navy/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FaLaptopCode className="text-primary-blue mr-3 text-xl" />
              <h2 className="text-xl font-bold text-primary-navy dark:text-white">Technologies</h2>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/services/technologies/crm" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  CRM Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/technologies/integration" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Integration Tools
                </Link>
              </li>
              <li>
                <Link href="/services/technologies/marketing" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Marketing Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/technologies/compare" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Compare Solutions
                </Link>
              </li>
            </ul>
          </motion.div>


          {/* Blog & Case Studies */}
          <motion.div variants={fadeIn} className="bg-white dark:bg-primary-navy/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FaBookOpen className="text-primary-blue mr-3 text-xl" />
              <h2 className="text-xl font-bold text-primary-navy dark:text-white">Blog & Case Studies</h2>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  All Blog Articles
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  All Case Studies
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company & Legal */}
          <motion.div variants={fadeIn} className="bg-white dark:bg-primary-navy/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FaInfoCircle className="text-primary-blue mr-3 text-xl" />
              <h2 className="text-xl font-bold text-primary-navy dark:text-white">Company & Legal</h2>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-slate dark:text-white/80 hover:text-primary-blue dark:hover:text-primary-blue transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mt-12 text-center"
        >
          <p className="text-primary-slate dark:text-white/80 mb-6">
            Can&apos;t find what you&apos;re looking for? Feel free to contact us directly.
          </p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-primary-blue text-white font-medium rounded-lg hover:bg-primary-blue/90 transition-colors">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Sitemap;
