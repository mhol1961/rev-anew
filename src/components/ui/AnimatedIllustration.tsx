'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface AnimatedIllustrationProps {
  src: string;
  alt: string;
  delay?: number;
  className?: string;
  width?: number;
  height?: number;
}

const AnimatedIllustration: React.FC<AnimatedIllustrationProps> = ({ 
  src, 
  alt, 
  delay = 0,
  className = '',
  width = 400,
  height = 300
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative ${className}`}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
      />
    </motion.div>
  );
};

export default AnimatedIllustration;
