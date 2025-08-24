'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaUsers, FaChartLine, FaCogs, FaDatabase, FaLaptopCode, FaClipboardCheck, FaCheckCircle } from 'react-icons/fa';

export default function CrmSolutionsPage() {
  const crmPlatforms = [
    {
      name: 'Salesforce',
      description: 'The world\'s #1 CRM platform, offering a complete suite of cloud-based applications for sales, service, marketing, and more.',
      features: ['Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Commerce Cloud', 'Analytics Cloud']
    },
    {
      name: 'Microsoft Dynamics 365',
      description: 'A powerful suite of business applications that combines CRM and ERP capabilities to provide end-to-end business solutions.',
      features: ['Sales', 'Customer Service', 'Field Service', 'Marketing', 'Finance & Operations']
    },
    {
      name: 'HubSpot',
      description: 'An all-in-one inbound marketing, sales, and service platform that helps businesses attract visitors, convert leads, and close customers.',
      features: ['Marketing Hub', 'Sales Hub', 'Service Hub', 'CMS Hub', 'Operations Hub']
    }
  ];

  const services = [
    {
      title: 'CRM Implementation',
      description: 'End-to-end implementation services to set up your CRM platform for success, from initial planning to deployment and beyond.',
      icon: FaLaptopCode
    },
    {
      title: 'Data Migration',
      description: 'Seamless transfer of your valuable customer data from legacy systems to your new CRM platform with data cleansing and validation.',
      icon: FaDatabase
    },
    {
      title: 'Custom Development',
      description: 'Tailored solutions that extend your CRM functionality to meet your unique business requirements and processes.',
      icon: FaCogs
    },
    {
      title: 'Integration Services',
      description: 'Connect your CRM with other business systems to create a unified ecosystem that enhances productivity and data flow.',
      icon: FaChartLine
    },
    {
      title: 'Training & Adoption',
      description: 'Comprehensive training programs and adoption strategies to ensure your team maximizes the value of your CRM investment.',
      icon: FaUsers
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous support and optimization services to keep your CRM running smoothly and evolving with your business needs.',
      icon: FaClipboardCheck
    }
  ];

  const benefits = [
    'Improved customer relationships and satisfaction',
    'Enhanced sales performance and forecasting',
    'Streamlined customer service operations',
    'Better marketing campaign effectiveness',
    'Increased team collaboration and productivity',
    'Data-driven decision making',
    'Scalable growth for your business'
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="CRM Solutions" 
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
            CRM Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Transform your customer relationships with tailored CRM strategies and implementations that drive growth and enhance customer experiences.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Elevate Your Customer Relationships</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                In today's competitive business landscape, managing customer relationships effectively is critical to success. Our CRM solutions help you centralize customer data, streamline processes, and gain valuable insights to deliver exceptional customer experiences.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Whether you're implementing a new CRM system or optimizing an existing one, our team of experts will guide you through every step of the journey, ensuring your CRM strategy aligns with your business objectives and delivers measurable results.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                We work with leading CRM platforms including Salesforce, Microsoft Dynamics 365, and HubSpot, tailoring our approach to your specific needs and industry requirements.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="CRM dashboard" 
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our CRM Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive suite of CRM services to help you maximize the value of your customer relationship management investment.
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

      {/* CRM Platforms Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">CRM Platforms We Support</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We have expertise across leading CRM platforms, helping you select and implement the right solution for your business needs.
            </p>
          </div>
          
          <div className="space-y-8">
            {crmPlatforms.map((platform, index) => (
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

      {/* Benefits Section */}
      <AnimatedSection className="py-16 bg-primary-blue/10 dark:bg-primary-navy/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Our CRM Solutions</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Implementing the right CRM solution with our expert guidance delivers numerous advantages for your business.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Global Manufacturing Company</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Manufacturing facility" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  A global manufacturing company with 500+ employees was struggling with disconnected systems and poor visibility into their sales pipeline. We implemented a customized Salesforce solution that:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Increased sales productivity by 35%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Reduced lead response time from 24 hours to 2 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Improved forecast accuracy by 40%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Achieved 98% user adoption within 3 months</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "TAS transformed our sales operations with their CRM expertise. We now have complete visibility into our pipeline and can make data-driven decisions that have significantly improved our results." - VP of Sales
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Customer Relationships?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's discuss how our CRM solutions can help you achieve your business objectives and deliver exceptional customer experiences.
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
