'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaDatabase, FaChartBar, FaCloudUploadAlt, FaShieldAlt, FaExchangeAlt, FaCheckCircle, FaCogs } from 'react-icons/fa';

export default function DataManagementPage() {
  const dataServices = [
    {
      title: 'Data Migration',
      description: 'Seamlessly transfer data between systems with minimal disruption while ensuring data integrity and completeness.',
      icon: FaExchangeAlt
    },
    {
      title: 'Data Integration',
      description: 'Connect disparate data sources to create a unified view of your business information across all your systems.',
      icon: FaCloudUploadAlt
    },
    {
      title: 'Data Cleansing',
      description: 'Identify and correct inaccurate, incomplete, or duplicate data to improve data quality and reliability.',
      icon: FaCogs
    },
    {
      title: 'Data Governance',
      description: 'Implement policies and procedures to ensure data quality, security, and compliance throughout your organization.',
      icon: FaShieldAlt
    },
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into meaningful insights with advanced analytics and visualization capabilities.',
      icon: FaChartBar
    },
    {
      title: 'Database Optimization',
      description: 'Enhance database performance, scalability, and reliability to support your growing business needs.',
      icon: FaDatabase
    }
  ];

  const benefits = [
    'Improved data accuracy and consistency',
    'Enhanced decision-making through reliable insights',
    'Reduced data management costs',
    'Increased operational efficiency',
    'Better regulatory compliance',
    'Elimination of data silos',
    'Streamlined business processes'
  ];

  const dataAreas = [
    {
      name: 'Enterprise Data Strategy',
      description: 'Develop a comprehensive data strategy aligned with your business objectives to maximize the value of your information assets.',
      techniques: ['Data maturity assessment', 'Information architecture', 'Data roadmapping', 'Value identification', 'Stakeholder alignment']
    },
    {
      name: 'Data Quality Management',
      description: 'Implement processes and tools to ensure your data is accurate, complete, and reliable for business-critical operations.',
      techniques: ['Data profiling', 'Cleansing automation', 'Quality monitoring', 'Duplicate detection', 'Validation rules']
    },
    {
      name: 'Data Integration & ETL',
      description: 'Connect and synchronize data across multiple systems to create a unified view of your business information.',
      techniques: ['ETL pipelines', 'API integrations', 'Real-time sync', 'Data warehouse design', 'Master data management']
    }
  ];

  const approachSteps = [
    {
      title: 'Discovery',
      description: 'We assess your current data landscape, identify challenges, and understand your business objectives.',
      icon: '🔍'
    },
    {
      title: 'Strategy',
      description: 'We develop a tailored data management roadmap aligned with your business goals and technical requirements.',
      icon: '📝'
    },
    {
      title: 'Implementation',
      description: 'Our expert engineers implement data solutions with precision and care for data integrity.',
      icon: '⚙️'
    },
    {
      title: 'Validation',
      description: 'We conduct comprehensive testing to ensure data accuracy, completeness, and system functionality.',
      icon: '✓'
    },
    {
      title: 'Knowledge Transfer',
      description: 'We provide training and documentation to ensure your team can maintain and leverage the data solutions effectively.',
      icon: '📚'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/photos/Static_tech_image.png" 
            alt="Data Management" 
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
            Data Management
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Transform your business data into a strategic asset with comprehensive data management solutions.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Unlock the Full Potential of Your Data</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                In today's data-driven business environment, effective data management is the foundation of competitive advantage. Our comprehensive data management services help you collect, organize, protect, and leverage your data assets to drive informed decision-making and business growth.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Whether you're struggling with data quality issues, siloed information, complex migrations, or need to enhance your analytical capabilities, our team of data experts will develop and implement solutions tailored to your unique business needs.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                We take a holistic approach to data management, ensuring that your data is not just stored efficiently but is accessible, reliable, and actionable across your organization.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/photos/DataManagement.png" 
                alt="Data Management" 
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Data Management Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive suite of data management services designed to address all aspects of your enterprise data needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataServices.map((service, index) => (
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

      {/* Data Management Areas Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Key Data Management Areas</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Our data expertise spans multiple domains to deliver comprehensive improvements to your information ecosystem.
            </p>
          </div>
          
          <div className="space-y-8">
            {dataAreas.map((area, index) => (
              <motion.div 
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-semibold mb-3 text-primary-navy dark:text-white">{area.name}</h3>
                <p className="text-primary-slate dark:text-gray-300 mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.techniques.map((technique) => (
                    <span key={technique} className="bg-primary-blue/10 text-primary-blue dark:bg-primary-blue/20 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium">
                      {technique}
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Effective Data Management</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Investing in data management delivers multiple advantages that impact your decision-making capabilities and operational efficiency.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Financial Services Firm</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/photos/Techy_abstract_hero3.jpg" 
                  alt="Financial services data management" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  A mid-sized financial services firm was struggling with fragmented customer data across multiple systems, leading to reporting inaccuracies and compliance risks. Our data management team:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Implemented a master data management solution, creating a single source of truth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Automated data quality checks, reducing errors by 87%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Created secure data governance processes that ensured regulatory compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Developed business intelligence dashboards that improved decision-making speed by 60%</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "The data management solution implemented by TAS has transformed our business intelligence capabilities. We now have complete confidence in our reporting and can make decisions based on accurate, timely information." - CFO
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Approach Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Data Management Approach</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to deliver measurable and sustainable improvements to your data ecosystem.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-blue/30 dark:bg-primary-blue/50"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16">
                {approachSteps.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Timeline Point */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary-blue text-white flex items-center justify-center z-10">
                      {index + 1}
                    </div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white dark:bg-primary-slate p-4 rounded-lg shadow-md">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h3 className="text-lg font-semibold text-primary-navy dark:text-white">{item.title}</h3>
                        <p className="text-primary-slate dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Spacer for opposite side */}
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data Management?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's discuss how our data management services can help you turn your business information into a strategic asset that drives growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AnimatedButton className="bg-white text-primary-blue hover:bg-primary-light border-none shadow-md">
              <a href="/contact">Request a Data Assessment</a>
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
