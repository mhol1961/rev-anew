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
        {
          category: 'CRM',
          href: '/services/crm',
          items: [
            { name: 'Dynamics', href: '/services/crm/dynamics' },
            { name: 'Salesforce', href: '/services/crm/salesforce' },
            { name: 'HubSpot CRM', href: '/services/crm/hubspot' }
          ]
        },
        {
          category: 'Marketing',
          href: '/services/marketing',
          items: [
            { name: 'Dynamics', href: '/services/marketing/dynamics' },
            { name: 'HubSpot', href: '/services/marketing/hubspot' },
            { name: 'Marketo', href: '/services/marketing/marketo' }
          ]
        },
        {
          category: 'Finance',
          href: '/services/finance',
          items: [
            { name: 'F&O', href: '/services/finance/fo' },
            { name: 'Sage', href: '/services/finance/sage' }
          ]
        },
        {
          category: 'Projects',
          href: '/services/projects',
          items: [
            { name: 'Project Operations', href: '/services/projects/operations' }
          ]
        },
        {
          category: 'Azure',
          href: '/services/azure',
          items: [
            { name: 'Entra ID', href: '/services/azure/entra-id' },
            { name: 'DevOps', href: '/services/azure/devops' }
          ]
        },
        {
          category: 'Power Platform',
          href: '/services/power-platform',
          items: [
            { name: 'Power Apps', href: '/services/power-platform/power-apps' },
            { name: 'Power Automate', href: '/services/power-platform/power-automate' },
            { name: 'Power BI', href: '/services/power-platform/power-bi' },
            { name: 'Power Pages', href: '/services/power-platform/power-pages' },
            { name: 'Copilot Studio', href: '/services/power-platform/copilot-studio' }
          ]
        },
        {
          category: 'M365',
          href: '/services/m365',
          items: [
            { name: 'Office', href: '/services/m365/office' },
            { name: 'SharePoint', href: '/services/m365/sharepoint' }
          ]
        },
        {
          category: 'AI',
          href: '/services/ai',
          items: [
            { name: 'Microsoft Copilot', href: '/services/ai/microsoft-copilot' },
            { name: 'Microsoft 365 Copilot', href: '/services/ai/m365-copilot' },
            { name: 'Copilot Studio', href: '/services/ai/copilot-studio' },
            { name: 'Copilot for Sales', href: '/services/ai/copilot-sales' },
            { name: 'Copilot for Service', href: '/services/ai/copilot-service' },
            { name: 'Security Copilot', href: '/services/ai/security-copilot' },
            { name: 'Dynamics 365 Copilot', href: '/services/ai/dynamics-copilot' }
          ]
        }
      ],
      industries: [
        { name: 'Enterprise', href: '/industries/enterprise' },
        { name: 'Government', href: '/industries/government' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Non-profits', href: '/industries/nonprofits' }
      ]
    }
  },
  { 
    name: 'About Us', 
    href: '/about'
  },
  { 
    name: 'Resources', 
    href: '/resources',
    submenu: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Events', href: '/resources/events' },
      { name: 'Support Articles', href: '/resources/support/articles' },
      { name: 'Knowledge Base', href: '/resources/support/knowledge-base' },
      { name: 'Social Media', href: '/resources/social-media' },
      { name: 'Partnerships', href: '/resources/partnerships' }
    ]
  },
  { name: 'Careers', href: '/careers' }
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
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled 
          ? 'shadow-lg backdrop-blur-sm bg-white/95 dark:bg-primary-darkblue/95' 
          : 'shadow-md'
      }`}
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
              <div className="relative h-14 w-40 logo-container"> {/* Reduced logo size to prevent wrapping */}
                {/* Conditionally render logo based on dark mode state, only after mounting */}
                {mounted && (
                  <div className="relative h-full w-full">
                    <Image
                      key={logoSrc} // Add key to force re-render on src change if needed
                      src={logoSrc} 
                      alt="Technology Alliance Solutions Logo" 
                      fill
                      sizes="(max-width: 768px) 9rem, 9rem"
                      style={{ objectFit: 'contain' }}
                      className="logo-enhance"
                      priority 
                    />
                  </div>
                )}
                {/* Optional: Render a placeholder or the light logo initially to prevent layout shift */}
                {!mounted && (
                  <div className="relative h-full w-full">
                    <Image 
                      src="/images/TAS_LOGO3.png" // Default to light logo before mount
                      alt="Technology Alliance Solutions Logo"
                      fill
                      sizes="(max-width: 768px) 9rem, 9rem"
                      style={{ objectFit: 'contain' }} // Corrected indentation and ensured props are aligned
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
                    if (item.submenu || item.megaMenu) {
                      if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current); // Clear any pending close timeout
                        timeoutRef.current = null;
                      }
                      setActiveDropdown(item.name); // Open dropdown immediately
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.submenu || item.megaMenu) {
                      // Set a timeout to close the dropdown after a short delay
                      timeoutRef.current = setTimeout(() => {
                        setActiveDropdown(null);
                      }, 150); // 150ms delay
                    }
                  }}
                >
                  {item.submenu || item.megaMenu ? (
                    <div className="flex items-center">
                      <Link href={item.href} className="text-text-primary dark:text-dark-text hover:text-primary-blue dark:hover:text-primary-red px-3 py-2 text-sm font-semibold rounded-full transition-all duration-150 hover:bg-primary-light/50 hover:scale-105">
                        {item.name}
                      </Link>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-text-primary dark:text-dark-text hover:text-primary-blue dark:hover:text-primary-red px-3 py-2 text-sm font-semibold rounded-full transition-all duration-150 hover:bg-primary-light/50 hover:scale-105"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Regular Submenu */}
                  {item.submenu && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 -ml-4 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-primary-slate ring-1 ring-black ring-opacity-5"
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
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-primary-navy dark:text-white hover:bg-primary-blue/10 dark:hover:text-primary-red dark:hover:bg-primary-accentblue/20"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Mega Menu */}
                  {item.megaMenu && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 -ml-4 mt-2 w-96 rounded-md shadow-lg bg-white dark:bg-primary-slate ring-1 ring-black ring-opacity-5"
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
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-6">
                          {/* Services Column */}
                          <div>
                            <h3 className="text-sm font-semibold text-primary-navy dark:text-white mb-3">Services</h3>
                            <div className="space-y-2">
                              {item.megaMenu.services.map((service) => (
                                <div key={service.category} className="space-y-1">
                                  <Link
                                    href={service.href}
                                    className="block text-sm font-medium text-primary-blue dark:text-primary-red hover:text-primary-accentblue dark:hover:text-primary-red/80"
                                  >
                                    {service.category}
                                  </Link>
                                  {service.items.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block pl-3 text-xs text-gray-600 dark:text-gray-300 hover:text-primary-blue dark:hover:text-primary-red"
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Industries Column */}
                          <div>
                            <h3 className="text-sm font-semibold text-primary-navy dark:text-white mb-3">Industries</h3>
                            <div className="space-y-1">
                              {item.megaMenu.industries.map((industry) => (
                                <Link
                                  key={industry.name}
                                  href={industry.href}
                                  className="block text-sm text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-red"
                                >
                                  {industry.name}
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
            {/* Contact Button */}
            <Link href="/contact" passHref>
              <AnimatedButton
                className="bg-primary-blue hover:bg-primary-accentblue text-white border-transparent"
              >
                Contact Us
              </AnimatedButton>
            </Link>
            {/* Get Started CTA Button */}
            <Link href="/contact" passHref>
              <AnimatedButton
                className="bg-red-600 hover:bg-red-700 text-white border-transparent"
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
              className="inline-flex items-center justify-center p-3 rounded-lg text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-red hover:bg-primary-light/50 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 transition-all duration-200 active:scale-95 min-w-[44px] min-h-[44px]" 
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
                              className="text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-red block px-3 py-3 text-sm touch-manipulation"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : item.megaMenu ? (
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
                          <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                            <h4 className="text-sm font-semibold text-primary-navy dark:text-white px-4 py-3 bg-gray-100 dark:bg-gray-700">
                              🔧 Services
                            </h4>
                            <div className="px-2 py-2 space-y-1">
                              {item.megaMenu.services.map((service) => (
                                <div key={service.category} className="space-y-1">
                                  <Link
                                    href={service.href}
                                    className="block px-3 py-2 text-sm font-medium text-primary-blue dark:text-primary-red rounded-md hover:bg-white dark:hover:bg-gray-700 transition-colors touch-manipulation min-h-[44px] flex items-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {service.category}
                                  </Link>
                                  <div className="ml-4 space-y-1">
                                    {service.items.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="block px-3 py-2 text-xs text-gray-600 dark:text-gray-300 rounded-md hover:bg-white dark:hover:bg-gray-700 transition-colors touch-manipulation min-h-[40px] flex items-center"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        • {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Industries Section */}
                          <div>
                            <h4 className="text-sm font-semibold text-primary-navy dark:text-white px-4 py-3 bg-gray-100 dark:bg-gray-700">
                              🏢 Industries
                            </h4>
                            <div className="px-2 py-2 space-y-1">
                              {item.megaMenu.industries.map((industry) => (
                                <Link
                                  key={industry.name}
                                  href={industry.href}
                                  className="block px-3 py-2 text-sm text-primary-navy dark:text-white rounded-md hover:bg-white dark:hover:bg-gray-700 transition-colors touch-manipulation min-h-[44px] flex items-center"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {industry.name}
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
                      className="text-primary-navy dark:text-white hover:text-primary-blue dark:hover:text-primary-red block px-4 py-4 text-base font-medium touch-manipulation rounded-lg hover:bg-primary-light/20 dark:hover:bg-gray-700 transition-colors min-h-[52px] flex items-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* Enhanced CTA Buttons for Mobile Menu */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4 px-2">
                {/* Contact Button */}
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <AnimatedButton
                    className="w-full justify-center bg-primary-blue hover:bg-blue-700 text-white border-transparent py-4 text-lg font-medium rounded-lg shadow-md min-h-[56px]"
                  >
                    💬 Contact Us
                  </AnimatedButton>
                </Link>
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
