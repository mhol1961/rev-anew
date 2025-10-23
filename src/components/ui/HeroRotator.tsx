import React, { useEffect, useState } from 'react';
import AnimatedButton from './AnimatedButton';

// Service slides data with modern gradient themes using inline styles
const heroSlides = [
  {
    gradient: 'linear-gradient(135deg, #374151 0%, #10B981 50%, #374151 100%)',
    overlay: 'linear-gradient(45deg, rgba(245, 158, 11, 0.2) 0%, transparent 50%, rgba(52, 211, 153, 0.3) 100%)',
    headline: 'Reputation Management Powered by GoHighLevel',
    subheadline: 'Transform your online presence with automated review generation and reputation monitoring',
    cta: 'Request a Consultation',
  },
  {
    gradient: 'linear-gradient(135deg, #059669 0%, #374151 50%, #10B981 100%)',
    overlay: 'linear-gradient(45deg, rgba(16, 185, 129, 0.3) 0%, transparent 50%, rgba(245, 158, 11, 0.2) 100%)',
    headline: 'CRM & Marketing Automation Made Simple',
    subheadline: 'White-label GoHighLevel solutions for agencies and businesses',
    cta: 'Request a Consultation',
  },
  {
    gradient: 'linear-gradient(135deg, #374151 0%, rgba(245, 158, 11, 0.4) 50%, #374151 100%)',
    overlay: 'linear-gradient(45deg, rgba(52, 211, 153, 0.2) 0%, transparent 50%, rgba(245, 158, 11, 0.3) 100%)',
    headline: 'Lead Generation & Funnel Building',
    subheadline: 'Build high-converting funnels and capture more qualified leads',
    cta: 'Request a Consultation',
  },
  {
    gradient: 'linear-gradient(135deg, #10B981 0%, #374151 50%, rgba(245, 158, 11, 0.4) 100%)',
    overlay: 'linear-gradient(45deg, rgba(245, 158, 11, 0.2) 0%, transparent 50%, rgba(16, 185, 129, 0.3) 100%)',
    headline: 'Workflow Automation for Business Growth',
    subheadline: 'Streamline operations with intelligent automation and SMS/Email marketing',
    cta: 'Request a Consultation',
  },
];

const ROTATE_INTERVAL = 6000; // 6 seconds

const HeroRotator: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden mt-[-80px] pt-[80px]">
      {/* Modern gradient background */}
      <div
        className="absolute inset-0 z-0 transition-all duration-1000"
        style={{ background: slide.gradient }}
      >
        {/* Layered gradient overlay */}
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{ background: slide.overlay }}
        />
        {/* Dark overlay for text contrast */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(55, 65, 81, 0.3)' }}
        />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 py-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 font-heading drop-shadow-lg">
          {slide.headline}
        </h1>
        <p className="text-lg md:text-xl text-white/95 mb-8 font-medium drop-shadow">
          {slide.subheadline}
        </p>
        <AnimatedButton className="bg-primary-teal text-white hover:bg-primary-tealDark font-semibold text-lg px-10 py-4 shadow-lg">
          {slide.cta}
        </AnimatedButton>
      </div>
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, idx) => (
          <span
            key={idx}
            className={`inline-block w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-primary-orange' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroRotator;
