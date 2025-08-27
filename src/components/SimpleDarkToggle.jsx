'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function SimpleDarkToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Function to check if dark mode is currently active
  const checkDarkMode = () => {
    return document.documentElement.classList.contains('dark');
  };

  // Initialize on client-side only
  useEffect(() => {
    setMounted(true);
    // Set initial state based on the actual class on HTML element
    setIsDark(checkDarkMode());
    
    // Create a function to handle theme changes
    const handleThemeChange = () => {
      setIsDark(checkDarkMode());
    };
    
    // Set up an observer to monitor class changes on the HTML element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          handleThemeChange();
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Function to toggle dark mode using the global toggle function
  const handleToggle = () => {
    if (typeof window !== 'undefined' && window.toggleDarkMode) {
      try {
        console.log('Toggling dark mode from button click');
        const newDarkState = window.toggleDarkMode();
        console.log('New dark state:', newDarkState);
        setIsDark(newDarkState);
      } catch (e) {
        console.error('Error toggling dark mode:', e);
      }
    } else {
      console.error('toggleDarkMode function not available');
    }
  };

  // Wait until mounted to render to prevent hydration issues
  if (!mounted) return null;

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-primary-slate dark:hover:bg-primary-navy transition-colors"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{color: isDark ? '#FFFFFF' : '#3498DB', border: '1px solid #3498DB'}}
    >
      {isDark ? (
        <FaSun size={18} style={{color: '#F6E05E'}} />
      ) : (
        <FaMoon size={18} style={{color: '#3498DB'}} />
      )}
    </button>
  );
}
