'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
// Icons removed - no longer using social media or contact icons

const Footer = () => {
  // Animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
            {/* Company Info - Column 1 */}
            <div>
              <motion.div className="space-y-4" variants={itemVariants}>
                <h3 className="text-base font-bold text-primary-teal">
                  REV-ANEW
                </h3>
                <p className="text-sm text-gray-400 italic mb-2">
                  Revenue Reimagined.
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  White-label GoHighLevel solutions including reputation management, CRM, marketing automation, funnel building, and business growth tools to help you reimagine your revenue.
                </p>
              </motion.div>
            </div>

            {/* Our Solutions - Column 2 */}
            <div>
              <motion.div className="space-y-4" variants={itemVariants}>
                <h3 className="text-base font-bold text-primary-teal">Our Solutions</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/services/crm" className="text-gray-300 hover:text-primary-teal transition-colors">CRM & Pipeline Management</Link></li>
                  <li><Link href="/services/reputation-management" className="text-gray-300 hover:text-primary-teal transition-colors">Reputation Management</Link></li>
                  <li><Link href="/services/marketing-automation" className="text-gray-300 hover:text-primary-teal transition-colors">Marketing Automation</Link></li>
                  <li><Link href="/services/website-creation" className="text-gray-300 hover:text-primary-teal transition-colors">Funnel & Website Builder</Link></li>
                  <li><Link href="/services/email-marketing" className="text-gray-300 hover:text-primary-teal transition-colors">SMS & Email Marketing</Link></li>
                  <li><Link href="/services/lead-generation" className="text-gray-300 hover:text-primary-teal transition-colors">Lead Generation</Link></li>
                  <li><Link href="/services/social-media-management" className="text-gray-300 hover:text-primary-teal transition-colors">Social Media Management</Link></li>
                  <li><Link href="/services/integration" className="text-gray-300 hover:text-primary-teal transition-colors">Workflow Automation</Link></li>
                  <li><Link href="/services/data-analytics" className="text-gray-300 hover:text-primary-teal transition-colors">Analytics & Reporting</Link></li>
                </ul>
              </motion.div>
            </div>

            {/* Company & Subscribe - Column 3 (spans 2 columns) */}
            <div className="lg:col-span-2">
              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Company & Resources */}
                  <div>
                    <h3 className="text-base font-bold text-primary-teal mb-4">Company & Resources</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="/" className="text-gray-300 hover:text-primary-teal transition-colors">Home</Link></li>
                      <li><Link href="/about" className="text-gray-300 hover:text-primary-teal transition-colors">About Us</Link></li>
                      <li><Link href="/services" className="text-gray-300 hover:text-primary-teal transition-colors">Services</Link></li>
                      <li><Link href="/case-studies" className="text-gray-300 hover:text-primary-teal transition-colors">Case Studies</Link></li>
                      <li><Link href="/blog" className="text-gray-300 hover:text-primary-teal transition-colors">Blog & Insights</Link></li>
                      <li><Link href="/careers" className="text-gray-300 hover:text-primary-teal transition-colors">Careers</Link></li>
                      <li><Link href="/contact" className="text-gray-300 hover:text-primary-teal transition-colors">Contact</Link></li>
                    </ul>
                  </div>

                  {/* Empty column for spacing */}
                  <div></div>
                </div>

                {/* Subscribe Section - Below Technologies and Company */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <h3 className="text-base font-bold text-primary-teal mb-2">Subscribe</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Subscribe to our newsletter for the latest insights on reputation management, marketing automation, and business growth strategies.
                  </p>
                  <form className="flex flex-col sm:flex-row gap-3 max-w-xl">
                    <div className="flex-1">
                      <label htmlFor="subscribe-email" className="text-sm font-medium text-gray-300 mb-2 block">
                        Email Address:
                      </label>
                      <input
                        id="subscribe-email"
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-2.5 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 text-sm"
                        required
                      />
                      <p className="text-xs text-gray-400 mt-2">
                        Get the latest updates on reputation management, marketing automation, and revenue growth strategies.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        We respect your privacy; unsubscribe anytime.
                      </p>
                    </div>
                    <div className="flex items-end">
                      <motion.button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-6 rounded-md transition-all duration-200 text-sm whitespace-nowrap"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Subscribe
                      </motion.button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-gray-950 dark:bg-black py-5 relative z-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © 2025 REV-ANEW. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 mt-4 sm:mt-0">
              <Link href="/privacy" className="hover:text-primary-teal transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-teal transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-primary-teal transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
