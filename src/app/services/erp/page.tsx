'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaCogs, FaChartLine, FaDatabase, FaShieldAlt, FaUserTie, FaClipboardCheck, FaCheckCircle, FaIndustry, FaCalculator, FaTruck } from 'react-icons/fa';

export default function ErpSolutionsPage() {
  const erpPlatforms = [
    {
      name: 'Microsoft Dynamics 365 Finance & Operations',
      description: 'Comprehensive ERP solution that unifies financial management, supply chain, manufacturing, and retail operations with advanced analytics and AI capabilities.',
      features: ['Financial Management', 'Supply Chain Management', 'Manufacturing', 'Project Operations', 'Human Resources']
    },
    {
      name: 'NetSuite',
      description: 'Cloud-first ERP platform designed for growing businesses, offering complete business management suite with real-time visibility and control.',
      features: ['Financial Planning', 'Order Management', 'Inventory Management', 'CRM Integration', 'E-commerce']
    },
    {
      name: 'Sage',
      description: 'Scalable ERP solutions from small business to enterprise, offering industry-specific functionality and seamless integration capabilities.',
      features: ['Accounting & Finance', 'Business Intelligence', 'HR & Payroll', 'Fixed Assets', 'Multi-currency']
    }
  ];

  const services = [
    {
      title: 'ERP Implementation',
      description: 'End-to-end ERP implementation services from system selection to go-live, ensuring your ERP investment delivers maximum value.',
      icon: FaCogs
    },
    {
      title: 'Financial Management',
      description: 'Streamline accounting, budgeting, and financial reporting with integrated financial management solutions.',
      icon: FaCalculator
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Optimize inventory management, procurement, and logistics operations with intelligent supply chain solutions.',
      icon: FaTruck
    },
    {
      title: 'Manufacturing Solutions',
      description: 'Enhance production planning, quality control, and shop floor management with integrated manufacturing modules.',
      icon: FaIndustry
    },
    {
      title: 'Business Intelligence',
      description: 'Transform your ERP data into actionable insights with advanced analytics and real-time reporting capabilities.',
      icon: FaChartLine
    },
    {
      title: 'Integration & Migration',
      description: 'Seamlessly integrate your ERP with existing systems and migrate data from legacy platforms with minimal disruption.',
      icon: FaDatabase
    }
  ];

  const benefits = [
    'Improved operational efficiency and productivity',
    'Real-time visibility into business performance',
    'Streamlined financial processes and reporting',
    'Enhanced supply chain management',
    'Better inventory control and forecasting',
    'Regulatory compliance and audit readiness',
    'Scalable platform for business growth',
    'Integrated business processes across departments'
  ];

  const industries = [
    { name: 'Manufacturing', icon: FaIndustry },
    { name: 'Distribution', icon: FaTruck },
    { name: 'Professional Services', icon: FaUserTie },
    { name: 'Healthcare', icon: FaShieldAlt },
    { name: 'Financial Services', icon: FaCalculator },
    { name: 'Retail & E-commerce', icon: FaClipboardCheck }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="ERP Solutions" 
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
            ERP Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Modernize your business operations with comprehensive ERP solutions that unify finance, operations, and supply chain management for enhanced efficiency and growth.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Transform Your Business Operations</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Enterprise Resource Planning (ERP) systems are the backbone of modern business operations. Our ERP solutions integrate all your critical business processes into a single, unified platform that provides real-time visibility and control across your organization.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                From financial management and supply chain optimization to manufacturing and human resources, our ERP implementations are designed to streamline operations, reduce costs, and accelerate growth.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                We specialize in Microsoft Dynamics 365 Finance & Operations, NetSuite, and Sage ERP platforms, providing expert implementation, integration, and optimization services tailored to your industry and business needs.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="ERP dashboard" 
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our ERP Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive ERP services to modernize your business operations and drive sustainable growth across all departments.
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

      {/* ERP Platforms Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">ERP Platforms We Implement</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We have deep expertise across leading ERP platforms, helping you select and implement the right solution for your business requirements.
            </p>
          </div>
          
          <div className="space-y-8">
            {erpPlatforms.map((platform, index) => (
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

      {/* Industries Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Industries We Serve</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Our ERP solutions are tailored to meet the unique requirements and compliance needs of various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div 
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-blue mb-3 text-2xl flex justify-center">
                  {React.createElement(industry.icon)}
                </div>
                <h3 className="text-sm font-semibold text-primary-navy dark:text-white">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-16 bg-primary-blue/10 dark:bg-primary-navy/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Our ERP Solutions</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Implementing the right ERP solution with our expert guidance delivers transformative benefits across your organization.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Hodess Cleanrooms ERP Modernization</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Cleanroom facility" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  Hodess Cleanrooms required stabilization of Power BI reporting environment and preparation for transition from Sage 300 to CMiC ERP. Our comprehensive approach delivered:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Power BI audit and system stabilization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">ERP readiness assessment and migration planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Data quality improvement framework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Long-term modernization roadmap</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "TAS provided the strategic guidance and technical expertise we needed to modernize our ERP environment. Their roadmap positioned us for a successful transition while stabilizing our current operations." - IT Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Modernize Your Business Operations?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's discuss how our ERP solutions can streamline your operations, improve efficiency, and support your business growth objectives.
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