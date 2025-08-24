'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Updated services data with provided text
const services = [
  {
    heading: 'CRM Relationships',
    description: 'From sales, marketing and client care services to project automation, and field service management CRM provides breakthrough client experiences.',
  },
  {
    heading: 'Flexible Data Fabric',
    description: 'Businesses collect more data than ever. With the right data strategy, companies make better decisions with BI, Analytics, AI and more.',
  },
  {
    heading: 'Productivity Tools',
    description: 'Licensing, development, training and support for productivity apps like Microsoft Office 365 and the Power Platform to boost efficiency, collaboration and innovation.',
  },
  {
    heading: 'Analytics & Automation',
    description: 'Automation, integration, analytics, BI and generative AI help midmarket clients to operate more efficiently, build client relationships and create competitive market advantage.',
  },
  {
    heading: 'Industry Solutions and Advisory',
    description: 'Velosio consultants are more than technologists. They\'re businesspeople, just like you. Their insights tune our IP and help our team to drive the best possible outcomes.',
  },
  {
    heading: 'Cloud ERP',
    description: 'Microsoft and NetSuite Cloud ERP solutions tailored for midmarket and emerging enterprise companies.',
  },
];

const CircularServices: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemPositions, setItemPositions] = useState<{ x: number; y: number }[]>([]);
  const centerImageSrc = "/images/photos/Two_people_looking_at_screen.png"; // Corrected case
  const circleSize = 240; // Slightly reduced size (md:w-60 -> 15rem -> 240px)
  const itemWidth = 224; // Approx width of text blocks (md:w-56 -> 14rem -> 224px)

  useEffect(() => {
    const calculatePositions = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      // Increased base radius slightly before applying manual offsets
      const radius = (containerWidth / 2) * 0.6; 
      const centerX = containerWidth / 2;
      const centerY = containerRef.current.offsetHeight / 2;
      const angleStep = (2 * Math.PI) / services.length; // Angle in radians

      const positions = services.map((_, index) => {
        // Reverted starting angle to 12 o'clock
        const angle = index * angleStep - Math.PI / 2;

        // Base position calculation
        let x = centerX + radius * Math.cos(angle);
        let y = centerY + radius * Math.sin(angle);

        // Apply manual offsets based on index and user feedback
        // [CRM, Data Fabric, Productivity, Analytics, Industry, Cloud ERP]
        const offsets = [
          { x: 0, y: 22 },   // 0: CRM - Down +15px
          { x: 48, y: 27 },  // 1: Data Fabric - Right +10px
          { x: 62, y: -19 }, // 2: Productivity - Right +10px, Up 7px
          { x: 29, y: 83 },  // 3: Analytics - Down +20px again
          { x: -35, y: -22 }, // 4: Industry - Left +10px
          { x: -25, y: 30 },  // 5: Cloud ERP - Down +10px
        ];

        x += offsets[index]?.x ?? 0;
        y += offsets[index]?.y ?? 0;

        return { x, y };
      });

      setItemPositions(positions);
    };

    calculatePositions(); // Initial calculation

    // Recalculate on resize
    window.addEventListener('resize', calculatePositions);
    return () => window.removeEventListener('resize', calculatePositions);
  }, []); // Empty dependency array means run once on mount and cleanup on unmount

  // Removed unused variable itemBaseClasses

  return (
    // Explicitly setting original top/bottom padding
    <section className="pt-24 pb-24 sm:pt-28 sm:pb-28 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"> 
      {/* Two Column Layout Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-12">
        
        {/* Left Column: Heading & Paragraph */}
        <div className="md:w-1/3 text-center md:text-left mb-12 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy dark:text-white mb-4">
            Unlock Your Business&apos;s Full{' '}
            <span className="text-primary-blue">Potential</span>
          </h2>
          <p className="text-base md:text-lg text-primary-slate dark:text-gray-300">
            Leverage our expertise in CRM implementation, marketing automation, and AI-driven analytics to streamline your operations and accelerate growth. We tailor solutions to your unique needs.
          </p>
        </div>

        {/* Right Column: Circular Graphic */}
        <div className="md:w-2/3 flex justify-center items-center"> 
          {/* Container needs relative positioning and defined size */}
          <div 
            ref={containerRef} 
            // Removed fixed w/h, using padding and aspect ratio to define space
            // Reduced internal padding, maintain bottom margin
            className={`relative w-full aspect-square max-w-[680px] p-8 sm:p-10 flex items-center justify-center`} /* Removed mb-16 sm:mb-20 here as parent handles spacing */
          >
            {/* Central Circle Image - Use JS variable for size */}
            <motion.div 
              className={`absolute rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-700`}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              // Center the image absolutely & nudge up slightly
              style={{ 
                width: `${circleSize}px`, 
                height: `${circleSize}px`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -94%)' // Final nudge up (~20px)
              }}
            >
              <Image
                src={centerImageSrc}
                alt="Collaborative team working on laptop"
                fill
                className="object-cover z-0"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            </motion.div>

            {/* Central Text Block - Paragraph Removed */}
            <div className="absolute inset-0 flex items-center justify-center text-center p-6 md:p-10">
              <div className='max-w-xl'>
              </div>
            </div>

            {/* Surrounding Service Text Blocks */}
            {itemPositions.length > 0 &&
              services.map((service, index) => (
                <motion.div
                  key={service.heading}
                  className="absolute text-center"
                  // Added y: 50 for slide-up effect
                  initial={{ opacity: 0, scale: 0.8, y: 50 }} 
                  whileInView={{ opacity: 1, scale: 1, y: 0 }} 
                  viewport={{ once: true, amount: 0.3 }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    width: `${itemWidth}px`,
                    left: itemPositions[index] ? `${itemPositions[index].x}px` : '50%',
                    top: itemPositions[index] ? `${itemPositions[index].y}px` : '50%',
                    transform: 'translate(-50%, -50%)',
                  }} 
                >
                  {/* Text Block Content */}
                  <h4 className="text-sm sm:text-base font-semibold text-primary-navy dark:text-white mb-1">
                    {service.heading}
                  </h4>
                  <p className="text-xs sm:text-sm text-primary-slate dark:text-gray-300">
                    {service.description}
                  </p>
                </motion.div>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CircularServices;
