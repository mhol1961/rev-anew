'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaNetworkWired, FaExchangeAlt, FaCloud, FaLock, FaCode, FaDatabase, FaCheckCircle } from 'react-icons/fa';

export default function SystemsIntegrationPage() {
  const integrationTypes = [
    {
      title: 'API Integration',
      description: 'Connect applications through their APIs to enable seamless data exchange and process automation.',
      icon: FaExchangeAlt
    },
    {
      title: 'Data Integration',
      description: 'Synchronize data across multiple systems to create a unified view of your business information.',
      icon: FaDatabase
    },
    {
      title: 'Cloud Integration',
      description: 'Connect on-premises systems with cloud applications to create hybrid environments that maximize flexibility.',
      icon: FaCloud
    },
    {
      title: 'Custom Middleware',
      description: 'Develop tailored middleware solutions that bridge gaps between disparate systems and technologies.',
      icon: FaCode
    },
    {
      title: 'Enterprise Service Bus',
      description: 'Implement ESB architecture to facilitate communication between different applications and services.',
      icon: FaNetworkWired
    },
    {
      title: 'Secure Integration',
      description: 'Ensure all integrations meet security and compliance requirements with robust authentication and encryption.',
      icon: FaLock
    }
  ];

  const technologies = [
    {
      category: 'Integration Platforms',
      items: ['MuleSoft', 'Dell Boomi', 'Informatica', 'Microsoft Azure Integration Services', 'IBM App Connect']
    },
    {
      category: 'API Management',
      items: ['Apigee', 'Kong', 'Azure API Management', 'AWS API Gateway', 'Postman']
    },
    {
      category: 'iPaaS Solutions',
      items: ['Zapier', 'Workato', 'Integromat', 'Tray.io', 'Celigo']
    },
    {
      category: 'Data Integration Tools',
      items: ['Talend', 'Fivetran', 'Stitch', 'Matillion', 'Airbyte']
    }
  ];

  const benefits = [
    'Streamlined business processes and workflows',
    'Elimination of data silos and improved data quality',
    'Enhanced operational efficiency and productivity',
    'Real-time data visibility across the organization',
    'Reduced manual data entry and associated errors',
    'Improved customer experience through connected systems',
    'Faster time-to-market for new initiatives'
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Technology Integration" 
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
            Technology Integration
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Connect your business systems and applications to create a unified technology ecosystem that drives efficiency and innovation.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Seamless Integration for Business Success</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                In today's complex technology landscape, businesses rely on numerous applications and systems to operate effectively. However, when these systems don't communicate properly, inefficiencies arise, data becomes siloed, and opportunities are missed.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Our technology integration services help you connect your critical business systems—from CRM and ERP to marketing automation and custom applications—creating a cohesive ecosystem where data flows seamlessly and processes run efficiently.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                Whether you need to integrate cloud applications, connect legacy systems with modern platforms, or build custom middleware solutions, our team of integration experts will design and implement solutions that align with your business objectives and technical requirements.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Connected systems" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Integration Types Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Integration Solutions</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of integration services to connect your business systems and enable seamless data flow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationTypes.map((type, index) => (
              <motion.div 
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-blue mb-4 text-3xl">
                  {React.createElement(type.icon)}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white">{type.title}</h3>
                <p className="text-primary-slate dark:text-gray-300">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Our Approach Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Integration Approach</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to deliver successful integration projects that meet your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { 
                phase: 'Discovery', 
                description: 'We analyze your existing systems, integration requirements, and business objectives to develop a comprehensive integration strategy.',
                number: '01'
              },
              { 
                phase: 'Design', 
                description: 'Our team designs the integration architecture, data mapping, and transformation rules to ensure seamless data flow between systems.',
                number: '02'
              },
              { 
                phase: 'Implementation', 
                description: 'We build and deploy the integration solution using the most appropriate technologies and best practices for your environment.',
                number: '03'
              },
              { 
                phase: 'Support', 
                description: 'Our ongoing support ensures your integrations continue to function optimally as your business and technology landscape evolves.',
                number: '04'
              }
            ].map((phase, index) => (
              <motion.div 
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-xl">
                  {phase.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white mt-4">{phase.phase}</h3>
                <p className="text-primary-slate dark:text-gray-300">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Technologies Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Technologies We Work With</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We have expertise across a wide range of integration platforms and technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div 
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary-navy dark:text-white">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span key={item} className="bg-primary-blue/10 text-primary-blue dark:bg-primary-blue/20 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-16 bg-primary-blue/10 dark:bg-primary-navy/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Technology Integration</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Implementing well-designed integration solutions delivers numerous advantages for your business.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Retail Chain Integration</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Retail store" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  A national retail chain with 50+ locations was struggling with disconnected systems for inventory, POS, e-commerce, and customer management. We implemented a comprehensive integration solution that:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Created real-time inventory visibility across all channels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Reduced order processing time by 75%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Enabled unified customer profiles across all touchpoints</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Decreased manual data entry by 90%</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "The integration solution provided by REV-ANEW has transformed our operations. We now have a single view of inventory, orders, and customers across all channels, which has significantly improved our efficiency and customer experience." - CIO
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Connect Your Business Systems?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's discuss how our technology integration solutions can help you create a unified ecosystem that drives efficiency and innovation.
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
