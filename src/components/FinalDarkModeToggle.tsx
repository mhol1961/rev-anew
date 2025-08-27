'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

// Self-contained dark mode toggle that relies on Tailwind's class strategy
export default function FinalDarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Function to apply dark mode by toggling the class on the HTML element
  const applyDarkMode = (dark: boolean) => {
    if (typeof document === 'undefined') return;

    // Update the HTML class for Tailwind dark mode
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save the user's preference
    try {
      localStorage.setItem('tas-theme', dark ? 'dark' : 'light');
    } catch (e) {
      console.error('Error saving theme preference:', e);
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (!mounted) return;

    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    applyDarkMode(newDarkMode); // Use the simplified function
  };

  // Initialize on client-side only
  useEffect(() => {
    setMounted(true);

    let darkModeEnabled = false;
    try {
      const savedTheme = localStorage.getItem('tas-theme');
      if (savedTheme === 'dark') {
        darkModeEnabled = true;
      } else if (savedTheme === 'light') {
        darkModeEnabled = false;
      } else {
        darkModeEnabled = window.matchMedia?.('(prefers-color-scheme: dark)').matches || false;
      }
    } catch (e) {
      console.error('Error reading theme preference:', e);
    }

    setIsDark(darkModeEnabled);
    applyDarkMode(darkModeEnabled); // Apply initial theme based on detection

    // Listen for system changes
    try {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        // Only update if no user preference is saved
        if (!localStorage.getItem('tas-theme')) {
          setIsDark(e.matches);
          applyDarkMode(e.matches);
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } catch (e) {
      console.error('Error setting up media query listener:', e);
    }
  }, []);

  // Don't render during SSR
  if (!mounted) return null;

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full transition-colors duration-200 border 
                bg-white dark:bg-primary-slate 
                text-primary-blue dark:text-white 
                border-primary-blue dark:border-white 
                hover:bg-gray-100 dark:hover:bg-primary-navy"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <FaSun size={18} style={{ color: '#F6E05E' }} /> // Keeping specific color for sun icon
      ) : (
        <FaMoon size={18} className="text-primary-blue" /> // Use Tailwind class for moon icon
      )}
    </button>
  );
}
