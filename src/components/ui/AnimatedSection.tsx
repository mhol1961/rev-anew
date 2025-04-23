&apos;use client';

import { motion } from &apos;framer-motion';
import React from &apos;react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  delay = 0,
  className = &apos;&apos;
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: &quot;-100px&quot; }}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
