'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

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
                <h3 className="text-base font-bold text-primary-blue">
                  Technology Alliance Solutions, INC.
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Trusted experts in CRM, ERP, marketing automation, and integration. Delivering enterprise technology solutions and consulting services across Microsoft, Salesforce, HubSpot, and Adobe ecosystems.
                </p>
                <div className="pt-2">
                  <div className="flex items-start space-x-2 text-sm mb-2">
                    <FaMapMarkerAlt className="text-primary-blue mt-1 flex-shrink-0" />
                    <span className="text-gray-300">3355 Lenox Rd NE, Suite 1000, Atlanta, GA 30326</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm mb-2">
                    <FaPhone className="text-primary-blue" />
                    <span className="text-gray-300">(404) 205-8405</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <motion.a
                    href="https://linkedin.com/company/technology-alliance-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-white transition-colors touch-manipulation"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/tech_alliance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-white transition-colors touch-manipulation"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Twitter"
                  >
                    <FaTwitter size={20} />
                  </motion.a>
                  <motion.a
                    href="https://facebook.com/technologyalliancesolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Facebook"
                  >
                    <FaFacebook size={20} />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/tech_alliance_solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                  </motion.a>
                  <motion.a
                    href="https://youtube.com/c/technologyalliancesolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-blue hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="YouTube"
                  >
                    <FaYoutube size={20} />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Our Services - Column 2 */}
            <div>
              <motion.div className="space-y-4" variants={itemVariants}>
                <h3 className="text-base font-bold text-primary-blue">Our Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/services" className="text-gray-300 hover:text-primary-blue transition-colors">All Services</Link></li>
                  <li><Link href="/services/seo" className="text-gray-300 hover:text-primary-blue transition-colors">SEO Services</Link></li>
                  <li><Link href="/services/website-creation" className="text-gray-300 hover:text-primary-blue transition-colors">Website Creation</Link></li>
                  <li><Link href="/services/email-marketing" className="text-gray-300 hover:text-primary-blue transition-colors">Email Marketing</Link></li>
                  <li><Link href="/services/lead-generation" className="text-gray-300 hover:text-primary-blue transition-colors">Lead Generation</Link></li>
                  <li><Link href="/services/crm" className="text-gray-300 hover:text-primary-blue transition-colors">CRM & Automation</Link></li>
                  <li><Link href="/services/reputation" className="text-gray-300 hover:text-primary-blue transition-colors">Reputation Management</Link></li>
                  <li><Link href="/services/social-media" className="text-gray-300 hover:text-primary-blue transition-colors">Social Media Management</Link></li>
                  <li><Link href="/services/technology-integration" className="text-gray-300 hover:text-primary-blue transition-colors">Technology Integration</Link></li>
                  <li><Link href="/services/marketing-automation" className="text-gray-300 hover:text-primary-blue transition-colors">Marketing Automation</Link></li>
                  <li><Link href="/services/custom-solutions" className="text-gray-300 hover:text-primary-blue transition-colors">Custom Solutions</Link></li>
                  <li><Link href="/services/systems-optimization" className="text-gray-300 hover:text-primary-blue transition-colors">System Optimization</Link></li>
                  <li><Link href="/services/data-management" className="text-gray-300 hover:text-primary-blue transition-colors">Data Management</Link></li>
                </ul>
              </motion.div>
            </div>

            {/* Technologies & Subscribe - Column 3 (spans 2 columns) */}
            <div className="lg:col-span-2">
              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Technologies */}
                  <div>
                    <h3 className="text-base font-bold text-primary-blue mb-4">Technologies</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="/services/technologies" className="text-gray-300 hover:text-primary-blue transition-colors">All Technologies</Link></li>
                      <li className="text-gray-300">CRM Platforms</li>
                      <li className="text-gray-300">Integration Tools</li>
                      <li className="text-gray-300">Marketing Platforms</li>
                      <li className="text-gray-300">Compare Solutions</li>
                    </ul>
                  </div>

                  {/* Company & Resources */}
                  <div>
                    <h3 className="text-base font-bold text-primary-blue mb-4">Company & Resources</h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="/" className="text-gray-300 hover:text-primary-blue transition-colors">Home</Link></li>
                      <li><Link href="/about" className="text-gray-300 hover:text-primary-blue transition-colors">About Us</Link></li>
                      <li><Link href="/why-choose-us" className="text-gray-300 hover:text-primary-blue transition-colors">Why Choose Us</Link></li>
                      <li><Link href="/case-studies" className="text-gray-300 hover:text-primary-blue transition-colors">Case Studies</Link></li>
                      <li><Link href="/blog" className="text-gray-300 hover:text-primary-blue transition-colors">Blog & Articles</Link></li>
                      <li><Link href="/contact" className="text-gray-300 hover:text-primary-blue transition-colors">Contact</Link></li>
                    </ul>
                  </div>
                </div>

                {/* Subscribe Section - Below Technologies and Company */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <h3 className="text-base font-bold text-primary-blue mb-2">Subscribe to Updates</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Stay informed about our latest AI tools, marketing strategies, and industry insights.
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
                        Get the latest updates on our services and industry insights
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
              © 2025 Technology Alliance Solutions, INC. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 mt-4 sm:mt-0">
              <Link href="/privacy" className="hover:text-primary-blue transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-blue transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-primary-blue transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
