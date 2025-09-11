'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaExchangeAlt, FaNetworkWired, FaDatabase, FaShieldAlt, FaCogs, FaCloudDownloadAlt, FaCheckCircle, FaPlug, FaSync, FaLock } from 'react-icons/fa';

export default function SystemsIntegrationPage() {
  const integrationTypes = [
    {
      name: 'CRM & ERP Integration',
      description: 'Seamlessly connect your customer relationship management and enterprise resource planning systems for unified business operations.',
      features: ['Data Synchronization', 'Real-time Updates', 'Workflow Automation', 'Unified Reporting'],
      icon: FaExchangeAlt
    },
    {
      name: 'Marketing Automation Integration',
      description: 'Integrate marketing platforms with CRM and analytics tools to create comprehensive customer journey tracking and attribution.',
      features: ['Lead Scoring', 'Campaign Attribution', 'Customer Journey Mapping', 'Multi-channel Orchestration'],
      icon: FaNetworkWired
    },
    {
      name: 'Data Platform Integration',
      description: 'Connect disparate data sources to create unified data lakes and enable comprehensive business intelligence and analytics.',
      features: ['Data Warehousing', 'ETL Processes', 'Real-time Streaming', 'Data Governance'],
      icon: FaDatabase
    }
  ];

  const services = [
    {
      title: 'API Development & Management',
      description: 'Design and implement robust APIs that enable secure, scalable integration between your business systems.',
      icon: FaPlug
    },
    {
      title: 'Data Synchronization',
      description: 'Ensure data consistency across systems with real-time and batch synchronization solutions.',
      icon: FaSync
    },
    {
      title: 'Middleware Solutions',
      description: 'Implement enterprise service bus and middleware platforms to orchestrate complex system integrations.',
      icon: FaCogs
    },
    {
      title: 'Cloud Integration',
      description: 'Connect on-premises systems with cloud platforms for hybrid and multi-cloud architectures.',
      icon: FaCloudDownloadAlt
    },
    {
      title: 'Security & Compliance',
      description: 'Implement secure integration patterns with encryption, authentication, and compliance controls.',
      icon: FaShieldAlt
    },
    {
      title: 'Legacy System Modernization',
      description: 'Modernize and integrate legacy systems without disrupting critical business operations.',
      icon: FaNetworkWired
    }
  ];

  const benefits = [
    'Eliminate data silos and improve data accuracy',
    'Automate manual processes and reduce errors',
    'Enhance operational efficiency and productivity',
    'Enable real-time decision making with unified data',
    'Reduce total cost of ownership',
    'Improve customer experience with seamless workflows',
    'Accelerate digital transformation initiatives',
    'Ensure scalability for future growth'
  ];

  const integrationPatterns = [
    {
      pattern: 'Point-to-Point',
      description: 'Direct connections between systems for simple, real-time data exchange.',
      bestFor: 'Simple integrations with few systems'
    },
    {
      pattern: 'Hub-and-Spoke',
      description: 'Centralized integration hub that manages all system connections and data flow.',
      bestFor: 'Multiple systems requiring centralized control'
    },
    {
      pattern: 'Event-Driven',
      description: 'Asynchronous integration using events and message queues for scalable architectures.',
      bestFor: 'High-volume, real-time data processing'
    },
    {
      pattern: 'API Gateway',
      description: 'Centralized API management with security, routing, and monitoring capabilities.',
      bestFor: 'Microservices and cloud-native architectures'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Systems Integration" 
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
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            Systems Integration
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Eliminate data silos and streamline operations by connecting your CRM, ERP, marketing, and analytics platforms into unified, efficient workflows.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Unify Your Business Ecosystem</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                In today's digital landscape, businesses rely on multiple software systems that often operate in isolation. Our systems integration services break down these silos, creating seamless data flow and automated workflows across your entire technology stack.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                We design secure APIs and middleware solutions that connect CRM, ERP, marketing automation, analytics platforms, and cloud services. This unified approach eliminates manual data entry, reduces errors, and provides real-time visibility across your organization.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                Our integration expertise spans leading platforms including Salesforce, Microsoft Dynamics 365, NetSuite, HubSpot, Marketo, Power BI, and cloud services from AWS, Azure, and Google Cloud.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="System integration network" 
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
              We provide comprehensive integration solutions that connect your critical business systems and enable seamless data flow.
            </p>
          </div>
          
          <div className="space-y-8">
            {integrationTypes.map((integration, index) => (
              <motion.div 
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="text-primary-blue mr-4 text-3xl">
                    {React.createElement(integration.icon)}
                  </div>
                  <h3 className="text-2xl font-semibold text-primary-navy dark:text-white">{integration.name}</h3>
                </div>
                <p className="text-primary-slate dark:text-gray-300 mb-4">{integration.description}</p>
                <div className="flex flex-wrap gap-2">
                  {integration.features.map((feature) => (
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

      {/* Services Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Integration Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              End-to-end integration services that connect your systems, automate workflows, and ensure secure data exchange.
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
                className="bg-slate-50 dark:bg-primary-navy/50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
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

      {/* Integration Patterns Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Integration Patterns</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We implement the right integration pattern based on your specific requirements, system architecture, and scalability needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrationPatterns.map((pattern, index) => (
              <motion.div 
                key={pattern.pattern}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white">{pattern.pattern}</h3>
                <p className="text-primary-slate dark:text-gray-300 mb-3">{pattern.description}</p>
                <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-3 rounded">
                  <span className="text-primary-blue dark:text-sky-300 font-medium">Best for: {pattern.bestFor}</span>
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Systems Integration</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Connecting your systems delivers immediate operational improvements and long-term strategic advantages.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Ernst & Young Integration Project</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Professional services office" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  Ernst & Young sought to unify sales and marketing operations through Dynamics 365 and accelerate adoption of Microsoft Fabric for advanced analytics. Our integration approach delivered:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Unified CRM and marketing automation platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Real-time analytics with Microsoft Fabric integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Scalable framework supporting global initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Enhanced reporting and unified data visibility</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "TAS delivered the integration expertise we needed to unify our sales and marketing operations while positioning us for advanced analytics capabilities." - Digital Transformation Lead
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Connect Your Systems?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's design an integration strategy that eliminates silos, automates workflows, and creates a unified view of your business operations.
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