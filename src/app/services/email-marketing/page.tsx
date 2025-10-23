'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaEnvelope, FaChartLine, FaUsers, FaRobot, FaLayerGroup, FaFilter, FaCheckCircle } from 'react-icons/fa';

export default function EmailMarketingPage() {
  const services = [
    {
      title: 'Campaign Design & Creation',
      description: 'Eye-catching, responsive email templates and compelling content that drives engagement and conversions.',
      icon: FaEnvelope
    },
    {
      title: 'Audience Segmentation',
      description: 'Strategic division of your contact list based on demographics, behavior, and preferences for targeted messaging.',
      icon: FaUsers
    },
    {
      title: 'Automation Workflows',
      description: 'Sophisticated email sequences triggered by specific actions, time intervals, or customer behaviors.',
      icon: FaRobot
    },
    {
      title: 'A/B Testing',
      description: 'Data-driven optimization of subject lines, content, and designs to maximize open rates and conversions.',
      icon: FaLayerGroup
    },
    {
      title: 'Performance Analytics',
      description: 'Comprehensive reporting on campaign performance with actionable insights for continuous improvement.',
      icon: FaChartLine
    },
    {
      title: 'List Management & Growth',
      description: 'Strategic approaches to building, cleaning, and maintaining high-quality email lists for optimal deliverability.',
      icon: FaFilter
    }
  ];

  const benefits = [
    'Higher engagement rates with your audience',
    'Increased conversion rates and ROI',
    'Improved customer retention and loyalty',
    'Personalized communication at scale',
    'Automated customer journeys and nurturing',
    'Valuable data insights for business decisions',
    'Cost-effective marketing channel'
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Email Marketing" 
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
            Email Marketing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Drive revenue and nurture customer relationships with sophisticated email campaigns, automation, and audience segmentation.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Strategic Email Marketing</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Email marketing remains one of the most effective channels for engaging with your audience and driving conversions. Our email marketing services help you create and manage targeted campaigns that deliver measurable results.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                We combine creative design, compelling content, and data-driven strategy to develop email campaigns that resonate with your audience and support your business objectives.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                From one-time promotional campaigns to sophisticated automation workflows, our comprehensive approach covers every aspect of effective email marketing, helping you build stronger customer relationships and drive more revenue.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Email marketing dashboard" 
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Email Marketing Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive email marketing solutions that cover every aspect of creating and managing effective campaigns.
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

      {/* Automation Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Email Automation That Drives Results</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Our advanced automation workflows nurture leads and customers throughout their journey with your brand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-3">Welcome Series</h3>
              <p className="text-primary-slate dark:text-gray-300">
                Introduce new subscribers to your brand with a strategic sequence of emails that build trust and encourage first purchases.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-3">Abandoned Cart Recovery</h3>
              <p className="text-primary-slate dark:text-gray-300">
                Automatically remind customers about products they left behind, with personalized incentives to complete their purchase.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-3">Re-Engagement Campaigns</h3>
              <p className="text-primary-slate dark:text-gray-300">
                Revive inactive subscribers with targeted content and special offers designed to rebuild engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-16 bg-primary-blue/10 dark:bg-primary-navy/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Our Email Marketing</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Strategic email marketing delivers measurable advantages for your business.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: E-commerce Retailer</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="E-commerce shopping bags" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  An online fashion retailer was struggling with low email engagement and poor conversion rates. We implemented a comprehensive email marketing strategy that:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Increased open rates from 15% to 32% through improved segmentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Boosted click-through rates by 78% with enhanced design and content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Recovered 23% of abandoned carts with automated workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Generated a 34% increase in email-attributed revenue within 3 months</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "REV-ANEW transformed our email marketing from a basic newsletter to a sophisticated revenue driver. Their strategic approach and automation expertise has significantly improved our customer engagement and sales." - Marketing Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Email Marketing?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's discuss how our email marketing solutions can help you engage your audience and drive more revenue.
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
