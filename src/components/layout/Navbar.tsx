'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react'; // Import useRef
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import FinalDarkModeToggle from '../FinalDarkModeToggle';
import AnimatedButton from '../ui/AnimatedButton';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services', 
    submenu: [
      { name: 'SEO Services', href: '/services/seo-services' },
      { name: 'Website Creation', href: '/services/website-creation' },
      { name: 'Email Marketing', href: '/services/email-marketing' },
      { name: 'Lead Generation', href: '/services/lead-generation' },
      { name: 'CRM & Automation', href: '/services/crm' },
      { name: 'Reputation Management', href: '/services/reputation-management' },
      { name: 'Social Media Management', href: '/services/social-media-management' },
      { name: 'Technology Integration', href: '/services/technology-integration' },
      { name: 'Marketing Automation', href: '/services/marketing-automation' },
      { name: 'Custom Solutions', href: '/services/custom-solutions' },
      { name: 'System Optimization', href: '/services/system-optimization' }
    ]
  },
  { 
    name: 'About Us', 
    href: '/about'
  },
  { name: 'Why Choose Us', href: '/why-choose-us' },
  { 
    name: 'Technologies', 
    href: '/services/technologies',
    submenu: [
      { name: 'CRM Platforms', href: '/services/technologies/crm' },
      { name: 'Integration Tools', href: '/services/technologies/integration' },
      { name: 'Marketing Platforms', href: '/services/technologies/marketing' },
      { name: 'Compare Solutions', href: '/services/technologies/compare' }
    ]
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
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

    // Apply initial style directly if dark mode is detected on mount
    if (initialDarkMode && navRef.current) {
      navRef.current.style.backgroundColor = '#1e3d8f';
    }
    // Note: Mobile menu style applied when it renders/updates below

    // Set up mutation observer to watch for class changes on <html> element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const currentDarkMode = checkDarkMode();
          setIsDarkMode(currentDarkMode);
          // Apply/remove style directly when dark mode changes
          if (navRef.current) {
            navRef.current.style.backgroundColor = currentDarkMode ? '#1e3d8f' : '';
          }
          // Apply/remove style for mobile menu if it exists
          if (mobileMenuRef.current) {
             mobileMenuRef.current.style.backgroundColor = currentDarkMode ? '#1e3d8f' : '';
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

  // Avoid rendering logo based on theme until mounted to prevent hydration mismatch
  const logoSrc = mounted && isDarkMode ? "/images/TAS_logo.png" : "/images/TAS_LOGO3.png";

  // Effect to apply style to mobile menu when it appears/dark mode changes
  useEffect(() => {
    if (mounted && isMobileMenuOpen && mobileMenuRef.current) {
      mobileMenuRef.current.style.backgroundColor = isDarkMode ? '#1e3d8f' : '';
    }
  }, [isMobileMenuOpen, isDarkMode, mounted]);

  return (
    <nav 
      ref={navRef} // Assign ref to nav element
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-colors duration-300" 
      // Removed inline style, now controlled by useEffect
    >
      {/* Gradient background for light mode only */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-light/30 to-primary-blue/10 dark:hidden"></div> {/* Hide gradient in dark mode */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main container: Use justify-between to push left and right groups apart */}
        <div className="flex justify-between items-center h-20">
          {/* Left Group: Logo Only */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 py-2">
              <div className="relative h-14 w-40"> {/* Reduced logo size to prevent wrapping */}
                {/* Conditionally render logo based on dark mode state, only after mounting */}
                {mounted && (
                  <Image
                    key={logoSrc} // Add key to force re-render on src change if needed
                    src={logoSrc} 
                    alt="Technology Alliance Solutions Logo" 
                    fill
                    sizes="(max-width: 768px) 9rem, 9rem"
                    style={{ objectFit: 'contain' }}
                    priority 
                  />
                )}
                {/* Optional: Render a placeholder or the light logo initially to prevent layout shift */}
                {!mounted && (
                   <Image 
                    src="/images/TAS_LOGO3.png" // Default to light logo before mount
                    alt="Technology Alliance Solutions Logo"
                    fill
                    sizes="(max-width: 768px) 9rem, 9rem"
                    style={{ objectFit: 'contain' }} // Corrected indentation and ensured props are aligned
                    priority
                  />
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
                    if (item.submenu) {
                      if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current); // Clear any pending close timeout
                        timeoutRef.current = null;
                      }
                      setActiveDropdown(item.name); // Open dropdown immediately
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.submenu) {
                      // Set a timeout to close the dropdown after a short delay
                      timeoutRef.current = setTimeout(() => {
                        setActiveDropdown(null);
                      }, 150); // 150ms delay
                    }
                  }}
                >
                  {item.submenu ? (
                    <div className="flex items-center">
                      <Link href={item.href} className="text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-red px-3 py-2 text-sm font-bold rounded-full transition-all duration-150 hover:bg-primary-light/50 hover:scale-105">
                        {item.name}
                      </Link>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-red px-3 py-2 text-sm font-bold rounded-full transition-all duration-150 hover:bg-primary-light/50 hover:scale-105" // Updated dark text/hover
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.submenu && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 -ml-4 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-primary-slate ring-1 ring-black ring-opacity-5"
                      // Add mouse enter/leave to the dropdown itself to cancel/restart the close timer
                      onMouseEnter={() => {
                        if (timeoutRef.current) {
                          clearTimeout(timeoutRef.current); // Cancel close timeout if mouse enters dropdown
                          timeoutRef.current = null;
                        }
                      }}
                      onMouseLeave={() => {
                        // Restart close timeout if mouse leaves dropdown
                        timeoutRef.current = setTimeout(() => {
                          setActiveDropdown(null);
                        }, 150); // 150ms delay
                      }}
                    >
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-primary-navy dark:text-white hover:bg-primary-blue/10 dark:hover:text-primary-red dark:hover:bg-primary-accentblue/20" // Updated dropdown dark text/hover
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
            <FinalDarkModeToggle />
            {/* Styled CTA Button */}
            {/* Wrap AnimatedButton in Link for navigation */}
            <Link href="/contact" passHref>
              <AnimatedButton
                className="bg-red-600 hover:bg-red-700 text-white border-transparent"
              >
                Get Started
              </AnimatedButton>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <FinalDarkModeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-red hover:bg-primary-light/50 focus:outline-none transition-all duration-150 hover:scale-105 touch-manipulation" 
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <HiX className="block h-7 w-7" />
              ) : (
                <HiMenu className="block h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef} // Assign ref to mobile menu div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-200 dark:border-gray-700" 
            // Removed inline style, now controlled by useEffect
          >
            <div className="px-4 pt-3 pb-4 space-y-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <div className="flex flex-col">
                    <Link 
                      href={item.href} 
                      className="text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-red block px-3 py-3 text-base font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="text-gray-500 dark:text-gray-400 text-sm font-medium px-3 py-2 flex items-center justify-between w-full"
                        >
                          Show submenu {activeDropdown === item.name ? '▲' : '▼'}
                        </button>
                      </div>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="pl-4"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-red block px-3 py-3 text-sm touch-manipulation" // Updated mobile dropdown dark text/hover
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-red block px-3 py-3 text-base font-medium touch-manipulation" // Updated mobile menu dark text/hover
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* CTA Button for Mobile Menu */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                {/* Wrap AnimatedButton in Link for navigation */}
                <Link href="/contact" passHref onClick={() => setIsMobileMenuOpen(false)}>
                  <AnimatedButton
                    className="w-full justify-center bg-red-600 hover:bg-red-700 text-white border-transparent"
                  >
                    Get Started
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
