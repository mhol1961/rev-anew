import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AnimatedButton from './AnimatedButton';

// Service slides data
const heroSlides = [
  {
    image: '/images/hero/Blue_abstract_hero1.png',
    headline: 'Empowering Growth with Tailored CRM Solutions',
    subheadline: 'Dynamics 365, Salesforce, HubSpot — Expert Implementation & Optimization',
    cta: 'Request a Consultation',
  },
  {
    image: '/images/hero/Tech_abstract_cityScape_hero.png',
    headline: 'Accelerate Engagement with Intelligent Marketing Automation',
    subheadline: 'Marketo, D365, ClickDimensions, HubSpot — Omnichannel Campaigns & ROI',
    cta: 'Request a Consultation',
  },
  {
    image: '/images/hero/Techy_abstract_hero3.jpg',
    headline: 'Seamless Integration for a Connected Enterprise',
    subheadline: 'Custom & Native Integrations — Optimize Workflows, Enhance Efficiency',
    cta: 'Request a Consultation',
  },
  {
    image: '/images/hero/Techy_cuty_image_hero2.jpg',
    headline: 'Strategic Guidance for Digital Transformation',
    subheadline: 'Actionable Insights, Proven Results — Your Trusted Advisors',
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
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary-slate mt-[-80px] pt-[80px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={slide.image} 
          alt={slide.headline}
          fill
          className="object-cover object-center w-full h-full" 
          priority
        />
        {/* Overlay for contrast - reducing opacity */}
        <div className="absolute inset-0 bg-primary-slate/40" />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 py-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 font-['Montserrat','IBM Plex Sans','Inter',sans-serif] drop-shadow-lg">
          {slide.headline}
        </h1>
        <p className="text-lg md:text-xl text-primary-light mb-8 font-medium drop-shadow">
          {slide.subheadline}
        </p>
        <AnimatedButton className="bg-primary-blue text-white hover:bg-primary-aqua font-semibold text-lg px-10 py-4 shadow-lg">
          {slide.cta}
        </AnimatedButton>
      </div>
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, idx) => (
          <span
            key={idx}
            className={`inline-block w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-primary-blue' : 'bg-primary-light/40'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroRotator;
