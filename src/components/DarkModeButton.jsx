'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function DarkModeButton() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize on client-side only
  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
    
    // Listen for changes to the dark mode class
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Don't render during SSR
  if (!mounted) return null;

  return (
    <button
      onClick={() => window.toggleDarkMode?.()}
      className="p-2 rounded-full bg-white dark:bg-primary-slate hover:bg-gray-100 dark:hover:bg-primary-navy transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <FaSun className="text-yellow-400" size={18} />
      ) : (
        <FaMoon className="text-primary-blue" size={18} />
      )}
    </button>
  );
}
