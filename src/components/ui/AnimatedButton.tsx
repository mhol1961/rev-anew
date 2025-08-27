'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = ''
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${className}`}
      onClick={onClick}
    >
      {/* Animated background effect */}
      <motion.span
        className="absolute inset-0 bg-transparent" // Make overlay transparent
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.8 }}
      />

      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default AnimatedButton;
