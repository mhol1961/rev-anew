'use client';

import { motion } from 'framer-motion';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Spline to avoid SSR issues
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">Loading 3D model...</div>
});

interface SplineModelProps {
  sceneUrl: string;
  className?: string;
}

const SplineModel: React.FC<SplineModelProps> = ({ sceneUrl, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className={`w-full h-[400px] ${className}`}
    >
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading 3D model...</div>}>
        <Spline scene={sceneUrl} />
      </Suspense>
    </motion.div>
  );
};

export default SplineModel;
