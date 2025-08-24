'use client';

import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';
import { useEffect, useState } from 'react';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the toggle after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until after hydration to prevent mismatch
  if (!mounted) {
    return <div className="w-9 h-9"></div>; // Empty placeholder with same dimensions
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white dark:bg-primary-slate text-primary-blue dark:text-white hover:bg-primary-light dark:hover:bg-primary-navy transition-colors border border-primary-blue dark:border-white"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      type="button"
    >
      {theme === 'dark' ? (
        <FaSun size={18} className="text-yellow-400" />
      ) : (
        <FaMoon size={18} className="text-primary-blue" />
      )}
    </button>
  );
}
