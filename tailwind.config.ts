import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms'; // Import the plugin

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.15' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      animation: {
        pulse: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite'
      },
      colors: {
        primary: {
          navy: '#2C3E50',
          blue: '#3498DB',
          slate: '#34495E',
          light: '#EDF2F7',
          white: '#FFFFFF',
          darkblue: '#1e3d8f', // Dark blue for navbar
          red: '#e31937',      // Red from logo dot
          accentblue: '#2f68ce', // Accent blue for active/hover states
        },
        dark: {
          bg: '#1a202c',
          card: '#2d3748',
          text: '#e2e8f0',
          muted: '#a0aec0',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      fontFamily: {
        sans: ['Roobert', 'sans-serif'], // Use Roobert as the primary sans-serif font
        avenir: ['Avenir Next LT Pro Demi', 'sans-serif'], // Add Avenir utility
      },
    },
  },
  plugins: [
    forms, // Use the imported plugin
  ],
}

export default config
