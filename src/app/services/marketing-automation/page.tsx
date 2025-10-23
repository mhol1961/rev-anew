'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaChartLine, FaEnvelope, FaRobot, FaChartPie, FaUserFriends, FaTools, FaCheckCircle } from 'react-icons/fa';

export default function MarketingAutomationPage() {
  const platforms = [
    {
      name: 'Marketo',
      description: 'Enterprise-grade marketing automation platform that helps marketers master the art and science of digital marketing.',
      features: ['Email Marketing', 'Lead Management', 'Consumer Marketing', 'Customer Base Marketing', 'Mobile Marketing']
    },
    {
      name: 'HubSpot Marketing Hub',
      description: 'All-in-one inbound marketing software that helps you attract visitors, convert leads, and close customers.',
      features: ['Email Marketing', 'Marketing Automation', 'Lead Generation', 'Analytics', 'Social Media']
    },
    {
      name: 'Pardot (Salesforce)',
      description: 'B2B marketing automation by Salesforce that helps marketing and sales teams maximize efficiency and increase revenue.',
      features: ['Email Marketing', 'Lead Management', 'Sales Alignment', 'ROI Reporting', 'Lifecycle Reporting']
    },
    {
      name: 'ClickDimensions',
      description: 'Marketing automation solution made exclusively for Microsoft Dynamics 365, designed to help marketers create and implement effective marketing campaigns.',
      features: ['Email Marketing', 'Web Intelligence', 'Campaign Automation', 'Social Marketing', 'Event Management']
    }
  ];

  const services = [
    {
      title: 'Email Marketing Automation',
      description: 'Design and implement sophisticated email workflows that nurture leads, engage customers, and drive conversions.',
      icon: FaEnvelope
    },
    {
      title: 'Lead Scoring & Nurturing',
      description: 'Develop intelligent lead scoring models and nurturing campaigns that identify and cultivate your most promising prospects.',
      icon: FaUserFriends
    },
    {
      title: 'Campaign Management',
      description: 'Create, execute, and optimize multi-channel marketing campaigns that deliver measurable results and ROI.',
      icon: FaChartLine
    },
    {
      title: 'Marketing Analytics',
      description: 'Implement comprehensive analytics solutions that provide actionable insights into campaign performance and customer behavior.',
      icon: FaChartPie
    },
    {
      title: 'Platform Implementation',
      description: 'Expert setup and configuration of leading marketing automation platforms tailored to your specific business needs.',
      icon: FaTools
    },
    {
      title: 'AI-Powered Personalization',
      description: 'Leverage artificial intelligence to deliver hyper-personalized content and experiences that resonate with your audience.',
      icon: FaRobot
    }
  ];

  const benefits = [
    'Increased marketing efficiency and productivity',
    'Enhanced lead quality and conversion rates',
    'Improved marketing and sales alignment',
    'Better customer segmentation and targeting',
    'Personalized customer journeys at scale',
    'Data-driven marketing decisions',
    'Measurable marketing ROI'
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Marketing Automation" 
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
            Marketing Automation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Streamline your marketing efforts, nurture leads, and drive conversions with powerful automation solutions tailored to your business.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Marketing dashboard" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Accelerate Your Marketing Impact</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                In today's digital landscape, marketing teams are expected to do more with less while delivering exceptional results. Marketing automation empowers you to scale your efforts, personalize customer experiences, and measure the impact of your campaigns with precision.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Our marketing automation solutions help you streamline repetitive tasks, nurture leads through personalized journeys, and gain valuable insights into customer behavior and campaign performance.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                Whether you're just getting started with marketing automation or looking to optimize your existing setup, our team of experts will help you implement strategies and technologies that drive measurable business results.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Marketing Automation Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive marketing automation services to help you engage customers, generate leads, and drive revenue growth.
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Marketing Automation Platforms</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We have expertise across leading marketing automation platforms, helping you select and implement the right solution for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <motion.div 
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-semibold mb-3 text-primary-navy dark:text-white">{platform.name}</h3>
                <p className="text-primary-slate dark:text-gray-300 mb-4">{platform.description}</p>
                <div className="flex flex-wrap gap-2">
                  {platform.features.map((feature) => (
                    <span key={feature} className="bg-primary-blue/10 text-primary-blue dark:bg-primary-blue/20 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Customer Journey Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">The Customer Journey</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Our marketing automation solutions help you guide prospects through every stage of the customer journey.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Journey Path Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary-blue/30 dark:bg-primary-blue/20 -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { stage: 'Awareness', description: 'Attract prospects with targeted content and campaigns', icon: '🔍' },
                { stage: 'Consideration', description: 'Nurture leads with personalized content and automated workflows', icon: '🤔' },
                { stage: 'Decision', description: 'Convert prospects with timely, relevant offers and information', icon: '✅' },
                { stage: 'Retention', description: 'Delight customers with ongoing engagement and support', icon: '❤️' }
              ].map((step, index) => (
                <motion.div 
                  key={step.stage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md relative z-10"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-blue text-white flex items-center justify-center text-xl hidden md:flex">
                    {index + 1}
                  </div>
                  <div className="text-4xl mb-4 text-center">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-primary-navy dark:text-white text-center">{step.stage}</h3>
                  <p className="text-primary-slate dark:text-gray-300 text-center">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-16 bg-primary-blue/10 dark:bg-primary-navy/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Marketing Automation</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Implementing the right marketing automation solution delivers numerous advantages for your business.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: B2B Technology Company</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Technology company" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  A mid-sized B2B technology company was struggling with lead generation and nurturing. We implemented a comprehensive marketing automation solution that:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Increased qualified leads by 67% in the first quarter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Improved email engagement rates by 43%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Reduced cost per lead by 28%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Shortened sales cycle by 22%</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "The marketing automation solution implemented by REV-ANEW has transformed our lead generation and nurturing processes. We're now able to deliver personalized experiences at scale and see a clear ROI from our marketing efforts." - Marketing Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Marketing?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's discuss how our marketing automation solutions can help you engage customers, generate leads, and drive revenue growth.
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
