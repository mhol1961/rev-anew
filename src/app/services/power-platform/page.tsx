'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaLaptopCode, FaChartBar, FaCogs, FaRobot, FaLightbulb, FaMobile, FaCheckCircle, FaDatabase, FaNetworkWired } from 'react-icons/fa';

export default function PowerPlatformPage() {
  const powerPlatformComponents = [
    {
      name: 'Power BI',
      description: 'Transform your data into compelling visual narratives with interactive dashboards, reports, and analytics that drive informed decision-making.',
      features: ['Interactive Dashboards', 'Real-time Analytics', 'Data Modeling', 'Mobile Reports', 'Embedded Analytics'],
      icon: FaChartBar
    },
    {
      name: 'Power Apps',
      description: 'Build custom business applications quickly with low-code/no-code tools that connect to your data and work across devices.',
      features: ['Canvas Apps', 'Model-driven Apps', 'Portal Apps', 'Mobile Ready', 'Integration Ready'],
      icon: FaMobile
    },
    {
      name: 'Power Automate',
      description: 'Streamline repetitive tasks and paperless processes with automated workflows that connect your apps and services.',
      features: ['Process Automation', 'Approval Workflows', 'Data Integration', 'AI Builder', 'Robotic Process Automation'],
      icon: FaCogs
    },
    {
      name: 'Power Virtual Agents',
      description: 'Create intelligent chatbots that can resolve common issues and answer questions using natural language without coding.',
      features: ['No-code Chatbots', 'Natural Language', 'Teams Integration', 'Analytics', 'Handoff to Humans'],
      icon: FaRobot
    }
  ];

  const services = [
    {
      title: 'Dashboard & Analytics Design',
      description: 'Create stunning, interactive dashboards that provide real-time insights and empower data-driven decision making.',
      icon: FaChartBar
    },
    {
      title: 'Custom App Development',
      description: 'Build tailored business applications that streamline processes and enhance productivity across your organization.',
      icon: FaLaptopCode
    },
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks and complex business processes to increase efficiency and reduce manual errors.',
      icon: FaCogs
    },
    {
      title: 'Data Integration',
      description: 'Connect and integrate data from multiple sources to create unified views and enable comprehensive analytics.',
      icon: FaDatabase
    },
    {
      title: 'AI & Machine Learning',
      description: 'Leverage AI Builder to add intelligent capabilities to your apps and workflows with pre-built AI models.',
      icon: FaRobot
    },
    {
      title: 'Training & Adoption',
      description: 'Empower your team with comprehensive training and adoption strategies to maximize Power Platform value.',
      icon: FaLightbulb
    }
  ];

  const benefits = [
    'Rapid application development with low-code tools',
    'Enhanced data visualization and insights',
    'Streamlined business processes and workflows',
    'Improved collaboration across teams',
    'Reduced development time and costs',
    'Seamless integration with Microsoft 365',
    'Mobile-first applications and dashboards',
    'AI-powered automation and insights'
  ];

  const useCases = [
    {
      title: 'Employee Onboarding App',
      description: 'Streamline new hire processes with automated workflows and digital forms.',
      result: '70% reduction in onboarding time'
    },
    {
      title: 'Sales Performance Dashboard',
      description: 'Real-time visibility into sales metrics, pipeline, and performance indicators.',
      result: '40% improvement in forecast accuracy'
    },
    {
      title: 'Expense Management Automation',
      description: 'Automated expense approval workflows with receipt processing and integration.',
      result: '60% faster expense processing'
    },
    {
      title: 'Customer Service Bot',
      description: 'AI-powered chatbot handling common customer inquiries and support tickets.',
      result: '50% reduction in support volume'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Power Platform Solutions" 
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
            Power Platform Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Unlock innovation and productivity with Microsoft Power Platform - transforming data into insights, building custom apps, and automating processes with low-code solutions.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Empower Every Employee to Innovate</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Microsoft Power Platform democratizes innovation by enabling everyone in your organization to build solutions, analyze data, and automate processes without extensive technical expertise.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Our Power Platform experts help you harness the full potential of Power BI, Power Apps, Power Automate, and Power Virtual Agents to create custom solutions that drive productivity, improve decision-making, and accelerate digital transformation.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                From interactive dashboards and custom applications to intelligent automation and AI-powered chatbots, we deliver solutions that transform how your business operates and competes.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Power Platform dashboard" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Power Platform Components */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Power Platform Components</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Discover the four key components of Microsoft Power Platform and how they work together to enable digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {powerPlatformComponents.map((component, index) => (
              <motion.div 
                key={component.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="text-primary-blue mr-4 text-3xl">
                    {React.createElement(component.icon)}
                  </div>
                  <h3 className="text-2xl font-semibold text-primary-navy dark:text-white">{component.name}</h3>
                </div>
                <p className="text-primary-slate dark:text-gray-300 mb-4">{component.description}</p>
                <div className="flex flex-wrap gap-2">
                  {component.features.map((feature) => (
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Power Platform Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive Power Platform services to accelerate your digital transformation and empower your workforce.
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

      {/* Use Cases Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Real-World Success Stories</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              See how organizations are transforming their operations with Power Platform solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white">{useCase.title}</h3>
                <p className="text-primary-slate dark:text-gray-300 mb-3">{useCase.description}</p>
                <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-3 rounded">
                  <span className="text-primary-blue dark:text-sky-300 font-semibold">{useCase.result}</span>
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Power Platform</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Implementing Power Platform solutions delivers immediate and long-term benefits across your organization.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: City of Atlanta Digital Transformation</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="City skyline" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  The City of Atlanta needed to modernize citizen services and improve internal collaboration. We implemented Dynamics 365 Customer Service with Power Platform components:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Real-time Power BI dashboards for city operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Custom Power Apps for citizen service requests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Automated workflows for case routing and approvals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Secure public portals with Azure integration</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "Power Platform enabled us to create citizen-focused solutions quickly while providing our teams with the insights they need to serve our community better." - CIO, City of Atlanta
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Unlock Your Organization's Potential?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's explore how Power Platform can transform your data into insights, streamline your processes, and empower your teams to innovate.
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