'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaLaptopCode, FaShoppingCart, FaSearch, FaRobot, FaTools, FaMobile, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';

export default function WebsiteCreationPage() {
  const services = [
    {
      title: 'SEO-Optimized Websites',
      description: 'Custom websites built with search engine visibility in mind from the ground up, ensuring maximum organic traffic.',
      icon: FaSearch
    },
    {
      title: 'E-Commerce Development',
      description: 'Powerful online stores with secure payment processing, inventory management, and optimized checkout experiences.',
      icon: FaShoppingCart
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first websites that provide an exceptional user experience across all devices and screen sizes.',
      icon: FaMobile
    },
    {
      title: 'Custom Web Applications',
      description: 'Tailored web applications that automate processes and provide unique functionality for your business needs.',
      icon: FaLaptopCode
    },
    {
      title: 'AI-Powered Experiences',
      description: 'Integration of chatbots, recommendation engines, and other AI tools to create intelligent, interactive websites.',
      icon: FaRobot
    },
    {
      title: 'Website Maintenance',
      description: 'Ongoing support, updates, and optimization to keep your website secure, fast, and up-to-date.',
      icon: FaTools
    }
  ];

  const maintenancePlans = [
    {
      title: 'Basic Maintenance',
      features: [
        'Monthly security updates',
        'Regular backups',
        'Uptime monitoring',
        'Basic performance optimization',
        'Email support'
      ]
    },
    {
      title: 'Advanced Maintenance',
      features: [
        'All Basic features',
        'Weekly security scans',
        'Content updates (2 hours/month)',
        'Technical SEO monitoring',
        'Performance optimization',
        'Priority email & phone support'
      ]
    },
    {
      title: 'Full SEO + Chatbots',
      features: [
        'All Advanced features',
        'Monthly SEO audits & updates',
        'AI chatbot integration & management',
        'Content updates (5 hours/month)',
        'Analytics reports with insights',
        'Conversion rate optimization',
        '24/7 emergency support'
      ]
    }
  ];

  const benefits = [
    'Professional brand representation online',
    'Improved user experience and engagement',
    'Higher search engine rankings',
    'Increased conversion rates',
    'Mobile-friendly functionality',
    'Fast loading speeds',
    'Secure and reliable performance'
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/photos/Abstract_laptop.png" 
            alt="Website Creation" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary-navy/50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center dark:text-blue-800"
          >
            Website Creation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Build your digital presence with custom, SEO-optimized websites and e-commerce solutions designed for performance and conversions.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Custom Website Solutions</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Your website is often the first point of contact between your business and potential customers. Our website creation services help you make a powerful first impression with custom designs that reflect your brand identity and drive conversions.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                We build websites that are not only visually stunning but also technically sound—optimized for search engines, fast-loading, secure, and responsive across all devices.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                From simple informational sites to complex e-commerce platforms, our experienced development team handles projects of all sizes with a focus on creating exceptional user experiences that help you achieve your business goals.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Web development" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Website Creation Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive website development solutions tailored to your specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-blue mb-4 text-3xl">
                  {React.createElement(service.icon)}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white">{service.title}</h3>
                <p className="text-primary-slate dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Maintenance Plans Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Website Maintenance Plans</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Keep your website secure, up-to-date, and performing at its best with our comprehensive maintenance packages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {maintenancePlans.map((plan, index) => (
              <motion.div 
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md border-t-4 border-primary-blue hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-4 text-center">{plan.title}</h3>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-blue mr-2">✓</span>
                      <span className="text-primary-slate dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <AnimatedButton className="bg-primary-blue text-white hover:bg-primary-blue/90 border-none shadow-md">
              <a href="/contact">Request Custom Plan</a>
            </AnimatedButton>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-16 bg-primary-blue/10 dark:bg-primary-navy/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Our Website Solutions</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              A professionally designed and developed website delivers numerous advantages for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <span className="text-primary-blue mr-2 mt-1">
                  <FaCheckCircle />
                </span>
                <span className="text-primary-navy dark:text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Case Study Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="bg-slate-50 dark:bg-primary-navy/30 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Professional Services Firm</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Business office" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  A professional services firm was struggling with an outdated website that was not generating leads or properly representing their brand. We built a new SEO-optimized website that:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Increased organic traffic by 156% within 6 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Improved mobile conversion rate by 83%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Reduced page load time from 5.2 seconds to 1.8 seconds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Generated a 68% increase in qualified leads through the website</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "Technology Alliance Solutions delivered a website that far exceeded our expectations. Not only does it look amazing, but it's actually generating new business for us consistently. The SEO optimization and performance improvements have made a significant impact on our digital presence." - Marketing Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Security Feature */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="text-primary-blue mb-4 text-4xl">
                <FaShieldAlt />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Built with Security in Mind</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Every website we build includes robust security measures to protect your business and your customers. Our security-first approach includes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">SSL encryption for all websites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">Regular security updates and patches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">Secure hosting with firewall protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">Protection against common vulnerabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">Secure payment processing for e-commerce</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative h-[350px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Cybersecurity" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Dream Website?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's discuss how we can build a website that elevates your brand, engages your visitors, and drives your business forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AnimatedButton className="bg-white text-primary-blue hover:bg-primary-light border-none shadow-md">
              <a href="/contact">Request a Consultation</a>
            </AnimatedButton>
            <AnimatedButton className="bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-md">
              <a href="/services">Explore Other Services</a>
            </AnimatedButton>
          </div>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
