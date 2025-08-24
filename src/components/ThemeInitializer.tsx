'use client';

import { useEffect } from 'react';
import { initializeTheme } from '@/utils/theme';

export default function ThemeInitializer() {
  // Script to run immediately before React hydration to prevent flickering
  const themeScript = `
    (function() {
      try {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.style.colorScheme = 'dark';
        } else if (storedTheme === 'light') {
          document.documentElement.classList.remove('dark');
          document.documentElement.style.colorScheme = 'light';
        } else {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (prefersDark) {
            document.documentElement.classList.add('dark');
            document.documentElement.style.colorScheme = 'dark';
          }
        }
      } catch (e) {}
    })();
  `;

  useEffect(() => {
    // Initialize theme on client side
    initializeTheme();
    
    // Add event listener for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      const currentTheme = localStorage.getItem('theme');
      
      // Only change theme if user hasn't manually set a preference
      if (!currentTheme) {
        if (e.matches) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  );
}
