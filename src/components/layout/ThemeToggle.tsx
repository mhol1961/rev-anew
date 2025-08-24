'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize on client-side only
  useEffect(() => {
    setMounted(true);
    // Check if dark mode is currently active
    setDarkMode(document.body.classList.contains('dark-mode'));

    // Add a mutation observer to detect changes to the body class
    const observer = new MutationObserver(() => {
      setDarkMode(document.body.classList.contains('dark-mode'));
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Use the global toggle function from our script
  const handleToggle = () => {
    if (typeof window !== 'undefined' && window.toggleDarkMode) {
      window.toggleDarkMode();
    }
  };

  // Don't render during SSR to prevent hydration issues
  if (!mounted) return null;

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full bg-white text-primary-blue hover:bg-primary-light transition-colors border border-primary-blue"
      aria-label="Toggle dark mode"
      type="button"
    >
      {darkMode ? 
        <FaSun size={18} className="text-yellow-400" /> : 
        <FaMoon size={18} className="text-primary-blue" />
      }
    </button>
  );
}
