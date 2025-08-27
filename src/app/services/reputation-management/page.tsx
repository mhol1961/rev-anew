'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaStar, FaSearchLocation, FaChartLine, FaCogs, FaComments, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';

export default function ReputationManagementPage() {
  const services = [
    {
      title: 'Review Monitoring',
      description: 'Continuous monitoring of reviews across all major platforms to keep track of what customers are saying about your business.',
      icon: FaStar
    },
    {
      title: 'Automated Review Handling',
      description: 'AI-powered responses to customer reviews, ensuring timely engagement with both positive and negative feedback.',
      icon: FaCogs
    },
    {
      title: 'Local SEO Optimization',
      description: 'Enhancement of your local online presence to improve visibility in local search results and online directories.',
      icon: FaSearchLocation
    },
    {
      title: 'Sentiment Analysis',
      description: 'Advanced analytics to track sentiment trends and identify areas for improvement in customer experience.',
      icon: FaChartLine
    },
    {
      title: 'Crisis Management',
      description: 'Proactive strategies to address and mitigate negative publicity or reputation damage quickly and effectively.',
      icon: FaShieldAlt
    },
    {
      title: 'Customer Feedback Integration',
      description: 'Systems to collect, analyze, and act on customer feedback across multiple channels and touchpoints.',
      icon: FaComments
    }
  ];

  const benefits = [
    'Enhanced brand perception and trust',
    'Increased customer loyalty and retention',
    'Higher conversion rates from positive reviews',
    'Early detection of potential reputation issues',
    'Competitive advantage in your market',
    'Improved local search rankings',
    'Data-driven insights for business improvements'
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Reputation Management" 
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
            Reputation Management
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Protect and enhance your brand's online presence with our automated review handling, monitoring, and crisis management solutions.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Protect Your Brand's Reputation</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                In today's digital landscape, your online reputation can make or break your business. Our reputation management services help you take control of how your brand is perceived online, ensuring that potential customers see the best version of your business.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                We leverage advanced AI tools to monitor reviews across all major platforms, respond appropriately to customer feedback, and proactively manage your online presence to build trust and credibility with your audience.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                Our comprehensive approach covers everything from automated review responses to crisis management strategies, giving you peace of mind and allowing you to focus on what you do best – running your business.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Reputation management dashboard" 
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Reputation Management Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive suite of reputation management services to help you build and maintain a positive online presence.
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

      {/* Platforms Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Platforms We Monitor</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We keep track of your online reputation across all major review platforms and social media channels.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-primary-navy/50 p-4 rounded-lg text-center shadow-sm"
            >
              <h3 className="font-semibold text-primary-navy dark:text-white">Google</h3>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-primary-navy/50 p-4 rounded-lg text-center shadow-sm"
            >
              <h3 className="font-semibold text-primary-navy dark:text-white">Yelp</h3>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-primary-navy/50 p-4 rounded-lg text-center shadow-sm"
            >
              <h3 className="font-semibold text-primary-navy dark:text-white">Facebook</h3>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-primary-navy/50 p-4 rounded-lg text-center shadow-sm"
            >
              <h3 className="font-semibold text-primary-navy dark:text-white">TripAdvisor</h3>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-primary-navy/50 p-4 rounded-lg text-center shadow-sm"
            >
              <h3 className="font-semibold text-primary-navy dark:text-white">Twitter</h3>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-primary-navy/50 p-4 rounded-lg text-center shadow-sm"
            >
              <h3 className="font-semibold text-primary-navy dark:text-white">Industry-Specific</h3>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-16 bg-primary-blue/10 dark:bg-primary-navy/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Our Reputation Management</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              A positive online reputation delivers numerous advantages for your business.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Local Restaurant Chain</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Restaurant interior" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  A local restaurant chain with 8 locations was struggling with inconsistent online reviews and had difficulty responding to all customer feedback. We implemented our reputation management solution that:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Increased their average rating from 3.6 to 4.5 stars across platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Reduced response time to negative reviews from 48 hours to 2 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Identified and resolved recurring customer issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Increased foot traffic by 22% within 6 months</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "Technology Alliance Solutions transformed how we manage our online reputation. We now have a consistent presence across all review platforms, and our improved ratings have directly translated to more customers." - Director of Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Online Reputation?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's discuss how our reputation management solutions can help you build trust with customers and grow your business.
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
