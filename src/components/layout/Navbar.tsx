'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react'; // Import useRef
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import FinalDarkModeToggle from '../FinalDarkModeToggle';
import AnimatedButton from '../ui/AnimatedButton';
import SearchButton from '@/components/search/SearchButton';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Solutions',
    href: '/services',
    megaMenu: {
      services: [
        { name: 'CRM & Pipeline Management', href: '/services/crm' },
        { name: 'Reputation Management', href: '/services/reputation-management' },
        { name: 'Marketing Automation', href: '/services/marketing-automation' },
        { name: 'Funnel & Website Builder', href: '/services/website-creation' },
        { name: 'SMS & Email Marketing', href: '/services/email-marketing' },
        { name: 'Lead Generation', href: '/services/lead-generation' },
        { name: 'Social Media Management', href: '/services/social-media-management' },
        { name: 'Workflow Automation', href: '/services/integration' },
        { name: 'Analytics & Reporting', href: '/services/data-analytics' }
      ]
    }
  },
  {
    name: 'About Us',
    href: '/about'
  },
  {
    name: 'Insights',
    href: '/blog'
  },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null); // Ref for the main nav element
  const mobileMenuRef = useRef<HTMLDivElement>(null); // Ref for the mobile menu div
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the timeout ID

  // Check for dark mode on mount and watch for changes
  useEffect(() => {
    setMounted(true);

    // Function to check if dark mode is active
    const checkDarkMode = () => {
      // Ensure this runs only on the client
      if (typeof window !== 'undefined') {
        return document.documentElement.classList.contains('dark');
      }
      return false;
    };

    const initialDarkMode = checkDarkMode();
    setIsDarkMode(initialDarkMode);

    // ALWAYS apply dark background - #252A30
    if (navRef.current) {
      navRef.current.style.backgroundColor = '#252A30';
    }

    // Set up mutation observer to watch for class changes on <html> element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const currentDarkMode = checkDarkMode();
          setIsDarkMode(currentDarkMode);
          // ALWAYS keep navbar background as #252A30
          if (navRef.current) {
            navRef.current.style.backgroundColor = '#252A30';
          }
          // ALWAYS keep mobile menu background as #252A30
          if (mobileMenuRef.current) {
             mobileMenuRef.current.style.backgroundColor = '#252A30';
          }
        }
      });
    });

    // Start observing the document's root element
    if (typeof window !== 'undefined') {
      observer.observe(document.documentElement, { attributes: true });
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Handle scroll detection for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      
      // Check initial scroll position
      handleScroll();
      
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Use REV-ANEW logo for both light and dark modes
  const logoSrc = "/images/ra-logo.png";

  // Effect to apply style to mobile menu when it appears/dark mode changes
  useEffect(() => {
    if (mounted && isMobileMenuOpen && mobileMenuRef.current) {
      mobileMenuRef.current.style.backgroundColor = isDarkMode ? '#374151' : '';
    }
  }, [isMobileMenuOpen, isDarkMode, mounted]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'shadow-lg backdrop-blur-sm'
          : 'shadow-md'
      }`}
      style={{
        backgroundColor: '#374151'
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main container: Use justify-between to push left and right groups apart */}
        <div className="flex justify-between items-center h-20">
          {/* Left Group: Logo Only */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 py-2">
              <div className="relative h-16 w-44 logo-container"> {/* Increased size to match white logo better */}
                {/* Conditionally render logo based on dark mode state, only after mounting */}
                {mounted && (
                  <div className="relative h-full w-full">
                    <Image
                      key={logoSrc} // Add key to force re-render on src change if needed
                      src={logoSrc}
                      alt="REV-ANEW Logo"
                      fill
                      sizes="(max-width: 768px) 11rem, 11rem"
                      style={{ objectFit: 'contain', objectPosition: 'left center' }}
                      className="logo-enhance"
                      priority
                    />
                  </div>
                )}
                {/* Optional: Render a placeholder or the light logo initially to prevent layout shift */}
                {!mounted && (
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/logo_transparent_version.png" // Default to light logo before mount
                      alt="REV-ANEW Logo"
                      fill
                      sizes="(max-width: 768px) 11rem, 11rem"
                      style={{ objectFit: 'contain', objectPosition: 'left center' }}
                      priority
                    />
                  </div>
                )}
              </div>
            </Link>
          </div>

          {/* Right Group: Nav Links Dark Mode Toggle and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Desktop Menu Links */}
            <div className="flex items-center space-x-1 flex-nowrap">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => {
                    if (item.megaMenu) {
                      if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current); // Clear any pending close timeout
                        timeoutRef.current = null;
                      }
                      setActiveDropdown(item.name); // Open dropdown immediately
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.megaMenu) {
                      // Set a timeout to close the dropdown after a short delay
                      timeoutRef.current = setTimeout(() => {
                        setActiveDropdown(null);
                      }, 150); // 150ms delay
                    }
                  }}
                >
                  {item.megaMenu ? (
                    <div className="flex items-center">
                      <Link href={item.href} style={{ color: '#FBBF24' }} className="hover:text-primary-orange px-3 py-2 text-sm font-semibold rounded-full transition-all duration-150 hover:bg-primary-darkGray/80 hover:scale-105">
                        {item.name}
                      </Link>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      style={{ color: '#FBBF24' }}
                      className="hover:text-primary-orange px-3 py-2 text-sm font-semibold rounded-full transition-all duration-150 hover:bg-primary-darkGray/80 hover:scale-105"
                    >
                      {item.name}
                    </Link>
                  )}


                  {/* Mega Menu */}
                  {item.megaMenu && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 -ml-4 mt-2 w-[600px] max-h-[500px] overflow-y-auto rounded-md shadow-lg bg-white dark:bg-primary-slate ring-1 ring-black ring-opacity-5"
                      onMouseEnter={() => {
                        if (timeoutRef.current) {
                          clearTimeout(timeoutRef.current);
                          timeoutRef.current = null;
                        }
                      }}
                      onMouseLeave={() => {
                        timeoutRef.current = setTimeout(() => {
                          setActiveDropdown(null);
                        }, 150);
                      }}
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1">
                          {/* Services Grid */}
                          <div>
                            <h3 className="text-sm font-semibold text-primary-navy dark:text-white mb-4">Our Solutions</h3>
                            <div className="grid grid-cols-3 gap-4">
                              {item.megaMenu.services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="block p-3 text-sm font-medium text-primary-navy dark:text-white hover:text-primary-teal dark:hover:text-primary-orange hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
            <SearchButton />
            <FinalDarkModeToggle />
            {/* Get Started CTA Button */}
            <Link href="/contact" passHref>
              <AnimatedButton
                className="bg-primary-orange hover:bg-primary-orangeDark text-white border-transparent"
              >
                Get Started
              </AnimatedButton>
            </Link>
          </div>

          {/* Mobile menu button - Enhanced for better touch targets */}
          <div className="md:hidden flex items-center space-x-2">
            <SearchButton />
            <FinalDarkModeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-lg text-primary-orangeLight hover:text-primary-orange hover:bg-primary-darkGray/80 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 transition-all duration-200 active:scale-95 min-w-[44px] min-h-[44px]" 
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <HiX className="block h-6 w-6" />
                ) : (
                  <HiMenu className="block h-6 w-6" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black bg-opacity-20 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Enhanced Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-primary-slate shadow-lg border-t border-gray-200 dark:border-gray-700 max-h-[calc(100vh-80px)] overflow-y-auto relative"
            style={{ zIndex: 40 }}
          >
            <div className="px-4 pt-3 pb-4 space-y-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.megaMenu ? (
                    <>
                      <div className="flex flex-col">
                        <Link
                          href={item.href}
                          className="text-primary-orangeLight hover:text-primary-orange block px-3 py-3 text-base font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="text-gray-500 dark:text-gray-400 text-sm font-medium px-3 py-3 flex items-center justify-between w-full touch-manipulation bg-gray-50 dark:bg-gray-700 rounded-md mx-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors min-h-[44px]"
                        >
                          <span>Show {item.name} menu</span>
                          <motion.span
                            initial={false}
                            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            ▼
                          </motion.span>
                        </button>
                      </div>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="mx-3 mt-3 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden"
                        >
                          {/* Services Section */}
                          <div>
                            <h4 className="text-sm font-semibold text-primary-navy dark:text-white px-4 py-3 bg-gray-100 dark:bg-gray-700">
                              🔧 Our Solutions
                            </h4>
                            <div className="px-2 py-2 space-y-1">
                              {item.megaMenu.services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="block px-3 py-2 text-sm font-medium text-primary-teal dark:text-primary-orange rounded-md hover:bg-white dark:hover:bg-gray-700 transition-colors touch-manipulation min-h-[44px] flex items-center"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-primary-navy dark:text-white hover:text-primary-teal dark:hover:text-primary-orange block px-4 py-4 text-base font-medium touch-manipulation rounded-lg hover:bg-primary-light/20 dark:hover:bg-gray-700 transition-colors min-h-[52px] flex items-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* Enhanced CTA Button for Mobile Menu */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 px-2">
                {/* Get Started Button */}
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <AnimatedButton
                    className="w-full justify-center bg-red-600 hover:bg-red-700 text-white border-transparent py-4 text-lg font-medium rounded-lg shadow-md min-h-[56px]"
                  >
                    🚀 Get Started
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
