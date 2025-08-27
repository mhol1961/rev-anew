'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  highlight?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '',
  highlight = false
}) => {
  // Split text into words for animation
  const words = text.split(' ');
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <motion.span
            variants={child}
            className={`inline-block ${
              highlight ? 'text-gradient-primary' : ''
            }`}
          >
            {word}
          </motion.span>
          {/* Add space between spans, except after the last word */}
          {index < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
