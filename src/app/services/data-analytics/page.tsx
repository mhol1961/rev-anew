'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaDatabase, FaChartLine, FaBrain, FaSearch, FaFileExport, FaCogs, FaCheckCircle, FaEye, FaTachometerAlt, FaFilter } from 'react-icons/fa';

export default function DataAnalyticsPage() {
  const analyticsServices = [
    {
      name: 'Data Warehousing & ETL',
      description: 'Build robust data warehouses and implement efficient ETL processes to consolidate data from multiple sources into unified, analytics-ready datasets.',
      features: ['Data Integration', 'ETL Pipelines', 'Data Modeling', 'Performance Optimization', 'Real-time Processing'],
      icon: FaDatabase
    },
    {
      name: 'Business Intelligence & Reporting',
      description: 'Create compelling dashboards and reports that transform raw data into actionable insights for strategic decision-making.',
      features: ['Interactive Dashboards', 'Automated Reporting', 'KPI Monitoring', 'Self-Service Analytics', 'Mobile BI'],
      icon: FaChartLine
    },
    {
      name: 'Advanced Analytics & AI',
      description: 'Leverage machine learning and AI technologies to uncover patterns, predict trends, and automate decision-making processes.',
      features: ['Predictive Analytics', 'Machine Learning', 'Statistical Analysis', 'AI Model Development', 'Anomaly Detection'],
      icon: FaBrain
    }
  ];

  const services = [
    {
      title: 'Data Strategy & Governance',
      description: 'Develop comprehensive data strategies and governance frameworks to ensure data quality, security, and compliance.',
      icon: FaCogs
    },
    {
      title: 'Data Visualization',
      description: 'Create stunning, interactive visualizations that make complex data accessible and understandable to all stakeholders.',
      icon: FaEye
    },
    {
      title: 'Performance Analytics',
      description: 'Monitor and analyze business performance with real-time metrics, KPIs, and operational dashboards.',
      icon: FaTachometerAlt
    },
    {
      title: 'Data Mining & Discovery',
      description: 'Uncover hidden patterns and insights in your data using advanced data mining and discovery techniques.',
      icon: FaSearch
    },
    {
      title: 'Data Migration & Cleansing',
      description: 'Migrate data from legacy systems while ensuring data quality through comprehensive cleansing and validation.',
      icon: FaFilter
    },
    {
      title: 'Custom Analytics Solutions',
      description: 'Build tailored analytics solutions that address your specific business requirements and industry needs.',
      icon: FaFileExport
    }
  ];

  const benefits = [
    'Improved decision-making with data-driven insights',
    'Enhanced operational efficiency and productivity',
    'Better customer understanding and segmentation',
    'Predictive capabilities for proactive planning',
    'Reduced costs through optimization insights',
    'Competitive advantage through market intelligence',
    'Automated reporting and monitoring',
    'Scalable analytics infrastructure'
  ];

  const platforms = [
    {
      name: 'Microsoft Power BI',
      description: 'Comprehensive business analytics platform with self-service capabilities.',
      capabilities: ['Self-service BI', 'Real-time dashboards', 'Natural language queries', 'Mobile analytics']
    },
    {
      name: 'Tableau',
      description: 'Leading data visualization platform for creating compelling, interactive analytics.',
      capabilities: ['Advanced visualization', 'Data preparation', 'Collaboration tools', 'Enterprise deployment']
    },
    {
      name: 'Microsoft Fabric',
      description: 'Unified analytics platform combining data integration, warehousing, and AI capabilities.',
      capabilities: ['Unified workspace', 'Real-time analytics', 'AI integration', 'Lakehouse architecture']
    },
    {
      name: 'Snowflake',
      description: 'Cloud data platform enabling seamless data warehousing and analytics at scale.',
      capabilities: ['Cloud-native', 'Automatic scaling', 'Data sharing', 'Multi-cloud support']
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Data Analytics" 
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
            Data & Analytics
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Transform raw data into actionable insights with comprehensive analytics solutions, business intelligence, and AI-powered decision-making tools.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Unlock the Power of Your Data</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                In today's data-driven world, organizations that can effectively analyze and act on their data gain significant competitive advantages. Our data and analytics solutions help you transform raw information into strategic insights.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                We provide end-to-end data analytics services including data warehousing, ETL processes, business intelligence, and advanced analytics. Our solutions enable real-time decision making and predictive insights that drive business growth.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                From Power BI and Tableau dashboards to machine learning models and data lakes, we deliver analytics solutions that scale with your business and evolve with your needs.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Analytics dashboard" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Analytics Services Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Analytics Solutions</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive analytics services that turn your data into a strategic asset for informed decision-making.
            </p>
          </div>
          
          <div className="space-y-8">
            {analyticsServices.map((service, index) => (
              <motion.div 
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="text-primary-blue mr-4 text-3xl">
                    {React.createElement(service.icon)}
                  </div>
                  <h3 className="text-2xl font-semibold text-primary-navy dark:text-white">{service.name}</h3>
                </div>
                <p className="text-primary-slate dark:text-gray-300 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Analytics Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              End-to-end analytics services to help you harness the full potential of your data assets.
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

      {/* Platforms Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Analytics Platforms We Support</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We work with leading analytics platforms to deliver solutions that meet your specific requirements and technical preferences.
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
                className="bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white">{platform.name}</h3>
                <p className="text-primary-slate dark:text-gray-300 mb-3">{platform.description}</p>
                <div className="space-y-1">
                  {platform.capabilities.map((capability) => (
                    <div key={capability} className="flex items-center">
                      <span className="text-primary-blue mr-2 text-sm">
                        <FaCheckCircle />
                      </span>
                      <span className="text-primary-slate dark:text-gray-300 text-sm">{capability}</span>
                    </div>
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Data Analytics</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Implementing robust analytics solutions delivers measurable benefits across all aspects of your business operations.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Southcoast Health Analytics Transformation</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Healthcare analytics" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  Southcoast Health needed to transform their CRM and marketing automation to support patient engagement and provider outreach with predictive analytics capabilities:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Unified patient data analytics platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">HIPAA-compliant analytics and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Predictive models for care coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Enhanced patient engagement insights</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "REV-ANEW delivered analytics solutions that transformed how we understand and engage with our patients while ensuring full compliance with healthcare regulations." - Analytics Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data into Insights?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's unlock the potential of your data with comprehensive analytics solutions that drive informed decision-making and business growth.
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