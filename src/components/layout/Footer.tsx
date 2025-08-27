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
    <footer className="bg-primary-navy dark:bg-primary-slate text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      {/* Main Footer Content */}
      <motion.div
        className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
          {/* Company Info - Column 1 */}
          <div className="lg:row-span-1">
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-xl font-bold text-primary-blue">
                Technology Alliance Solutions, INC.
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Enterprise technology solutions and consulting services specializing in CRM, integration, and marketing automation.
              </p>
              <div className="pt-2">
                <div className="flex items-center space-x-2 text-sm mb-2">
                  <FaMapMarkerAlt className="text-primary-blue" />
                  <span>3355 Lenox Rd NE, Suite 1000, Atlanta, GA 30326</span>
                </div>
                <div className="flex items-center space-x-2 text-sm mb-2">
                  <FaPhone className="text-primary-blue" />
                  <span>(404) 205-8405</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <motion.a
                  href="https://linkedin.com/company/technology-alliance-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-blue hover:text-white transition-colors touch-manipulation"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
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
                  <FaTwitter size={24} />
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
                  <FaFacebook size={24} />
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
                  <FaInstagram size={24} />
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
                  <FaYoutube size={24} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Services Links - Column 2 */}
          <div className="lg:row-span-2">
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-xl font-bold text-primary-blue">Our Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200 font-semibold">All Services</Link></li>
                <li><Link href="/services/seo-services" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">SEO Services</Link></li>
                <li><Link href="/services/website-creation" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">Website Creation</Link></li>
                <li><Link href="/services/email-marketing" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">Email Marketing</Link></li>
                <li><Link href="/services/lead-generation" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">Lead Generation</Link></li>
                <li><Link href="/services/crm" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">CRM & Automation</Link></li>
                <li><Link href="/services/reputation-management" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">Reputation Management</Link></li>
                <li><Link href="/services/social-media-management" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">Social Media Management</Link></li>
                <li><Link href="/services/technology-integration" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">Technology Integration</Link></li>
                <li><Link href="/services/marketing-automation" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">Marketing Automation</Link></li>
                <li><Link href="/services/custom-solutions" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">Custom Solutions</Link></li>
                <li><Link href="/services/system-optimization" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">System Optimization</Link></li>
                <li><Link href="/services/data-management" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">Data Management</Link></li>
              </ul>
            </motion.div>
          </div>

          {/* Technologies - Column 3 */}
          <div>
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-xl font-bold text-primary-blue">Technologies</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/technologies" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200 font-semibold">
                    All Technologies
                  </Link>
                </li>
                <li>
                  <Link href="/services/technologies/crm" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                    CRM Platforms
                  </Link>
                </li>
                <li>
                  <Link href="/services/technologies/integration" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                    Integration Tools
                  </Link>
                </li>
                <li>
                  <Link href="/services/technologies/marketing" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                    Marketing Platforms
                  </Link>
                </li>
                <li>
                  <Link href="/services/technologies/compare" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                    Compare Solutions
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Company & Resources - Column 4 */}
          <div>
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-xl font-bold text-primary-blue mt-2 sm:mt-0">Company & Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/why-choose-us" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                    Blog & Articles
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-primary-blue transition-colors inline-block hover:translate-x-1 duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Signup - Below Technologies and Company in columns 3-4 */}
          <div className="lg:col-span-2">
            <motion.div className="space-y-4 mt-8 lg:mt-0" variants={itemVariants}>
              <h3 className="text-xl font-bold text-primary-blue">Subscribe to Updates</h3>
              <p className="text-sm text-gray-300 mt-2">
                Stay informed about our latest AI tools, marketing strategies, and industry insights.
              </p>
              <form className="space-y-4 mt-4">
                <div className="space-y-2">
                  <label htmlFor="subscribe-email" className="text-sm font-medium text-white mb-1 block">
                    Email Address:
                  </label>
                  <div className="relative group">
                    <input
                      id="subscribe-email"
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-md 
                      bg-slate-700/90 dark:bg-slate-700 
                      border-2 border-blue-400/30 dark:border-blue-400/50 
                      focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                      text-white placeholder-gray-400
                      shadow-md dark:shadow-lg dark:shadow-blue-500/20
                      transition-all duration-200
                      text-base"
                      required
                    />
                    {/* Subtle highlight effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-400/10 dark:from-blue-500/10 dark:to-blue-400/20 
                    rounded-md pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  {/* Helper text */}
                  <p className="text-xs text-gray-400 dark:text-gray-300">
                    Get the latest updates on our services and industry insights
                  </p>
                </div>
                <motion.button
                  type="submit"
                  className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-md 
                  transition-all duration-200 shadow-md hover:shadow-lg border border-green-500/30
                  touch-manipulation text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="bg-primary-slate py-5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} Technology Alliance Solutions, INC. All rights reserved.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 mt-4 sm:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Link href="/privacy" className="hover:text-primary-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-blue transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-primary-blue transition-colors">
              Sitemap
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
