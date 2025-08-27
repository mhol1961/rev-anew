'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

// Simple dark mode switch component
export default function DarkModeSwitch() {
  const [isDark, setIsDark] = useState(false);
  
  // Initialize on mount
  useEffect(() => {
    // Get initial state from localStorage
    const savedMode = localStorage.getItem('tas-dark-mode');
    const initialState = savedMode === 'true' || 
      (savedMode === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    // Apply initial state
    setIsDark(initialState);
    applyDarkMode(initialState);
    
    // Listen for system changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('tas-dark-mode') === null) {
        setIsDark(e.matches);
        applyDarkMode(e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    const newState = !isDark;
    setIsDark(newState);
    applyDarkMode(newState);
    localStorage.setItem('tas-dark-mode', newState.toString());
  };
  
  // Apply dark mode to the document
  const applyDarkMode = (dark: boolean) => {
    if (dark) {
      document.documentElement.style.setProperty('--bg-color', '#2C3E50');
      document.documentElement.style.setProperty('--text-color', '#FFFFFF');
      document.documentElement.style.setProperty('--nav-bg', '#34495E');
      document.documentElement.style.setProperty('--card-bg', '#34495E');
      document.documentElement.style.setProperty('--border-color', '#4A5568');
      document.body.style.backgroundColor = '#2C3E50';
      document.body.style.color = '#FFFFFF';
    } else {
      document.documentElement.style.setProperty('--bg-color', '#FFFFFF');
      document.documentElement.style.setProperty('--text-color', '#2C3E50');
      document.documentElement.style.setProperty('--nav-bg', '#FFFFFF');
      document.documentElement.style.setProperty('--card-bg', '#F7FAFC');
      document.documentElement.style.setProperty('--border-color', '#E2E8F0');
      document.body.style.backgroundColor = '#FFFFFF';
      document.body.style.color = '#2C3E50';
    }
    
    // Force all sections to use the correct background
    document.querySelectorAll('section').forEach(section => {
      section.style.backgroundColor = dark ? '#2C3E50' : '#FFFFFF';
      section.style.color = dark ? '#FFFFFF' : '#2C3E50';
    });
    
    // Force navbar to use correct background
    document.querySelectorAll('nav').forEach(nav => {
      nav.style.backgroundColor = dark ? '#34495E' : '#FFFFFF';
      nav.style.color = dark ? '#FFFFFF' : '#2C3E50';
    });
  };
  
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors border border-gray-300"
      style={{
        backgroundColor: isDark ? '#34495E' : '#FFFFFF',
        color: isDark ? '#FFFFFF' : '#2C3E50',
        border: `1px solid ${isDark ? '#4A5568' : '#E2E8F0'}`
      }}
    >
      {isDark ? (
        <FaSun size={18} style={{ color: '#F6E05E' }} />
      ) : (
        <FaMoon size={18} style={{ color: '#3498DB' }} />
      )}
    </button>
  );
}
