'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaServer, FaShieldAlt, FaTools, FaUserCog, FaChartLine, FaCheckCircle, FaCogs } from 'react-icons/fa';

export default function SystemOptimizationPage() {
  const optimizationServices = [
    {
      title: 'Performance Analysis',
      description: 'Comprehensive assessment of your current systems to identify bottlenecks, inefficiencies, and opportunities for improvement.',
      icon: FaChartLine
    },
    {
      title: 'Infrastructure Optimization',
      description: 'Fine-tuning your hardware and software infrastructure to maximize resource utilization and operational efficiency.',
      icon: FaServer
    },
    {
      title: 'Process Automation',
      description: 'Implementing automated workflows to reduce manual intervention, minimize errors, and accelerate business processes.',
      icon: FaCogs
    },
    {
      title: 'Security Hardening',
      description: 'Enhancing system security without compromising performance through strategic configuration and best practices.',
      icon: FaShieldAlt
    },
    {
      title: 'Maintenance & Monitoring',
      description: 'Proactive system monitoring and maintenance to ensure optimal performance and prevent downtime.',
      icon: FaTools
    },
    {
      title: 'User Experience Optimization',
      description: 'Refining user interfaces and system interactions to improve productivity and user satisfaction.',
      icon: FaUserCog
    }
  ];

  const benefits = [
    'Increased system performance and responsiveness',
    'Reduced operational costs and resource usage',
    'Enhanced security posture with minimal performance impact',
    'Improved business agility and time-to-market',
    'Higher employee productivity and satisfaction',
    'Extended lifespan of existing IT investments',
    'Reduced downtime and system failures'
  ];

  const optimizationAreas = [
    {
      name: 'Database Optimization',
      description: 'Improve query performance, optimize data storage, and enhance data retrieval processes to ensure your applications run at peak efficiency.',
      techniques: ['Query optimization', 'Indexing strategies', 'Data normalization', 'Cache implementation', 'Storage optimization']
    },
    {
      name: 'Application Performance',
      description: 'Enhance the speed, responsiveness, and resource efficiency of your business applications through code optimization and architecture improvements.',
      techniques: ['Code profiling and refactoring', 'Memory management', 'Load balancing', 'Caching strategies', 'Asynchronous processing']
    },
    {
      name: 'Network Optimization',
      description: 'Streamline your network infrastructure to reduce latency, improve throughput, and ensure reliable connectivity across your business ecosystem.',
      techniques: ['Bandwidth allocation', 'Traffic prioritization', 'Protocol optimization', 'Compression techniques', 'Network segmentation']
    }
  ];

  const approachSteps = [
    {
      title: 'Assessment',
      description: 'We begin with a comprehensive analysis of your current systems, identifying performance bottlenecks, inefficiencies, and potential risks.',
      icon: '🔍'
    },
    {
      title: 'Strategy Development',
      description: 'Based on our findings, we develop a tailored optimization strategy that aligns with your business goals and technical requirements.',
      icon: '📝'
    },
    {
      title: 'Implementation',
      description: 'Our expert engineers implement the optimization solutions with minimal disruption to your ongoing operations.',
      icon: '⚙️'
    },
    {
      title: 'Verification',
      description: 'We conduct thorough testing to validate performance improvements and ensure all systems are functioning correctly.',
      icon: '✓'
    },
    {
      title: 'Continuous Improvement',
      description: 'We establish monitoring systems and provide recommendations for ongoing optimization as your business evolves.',
      icon: '📈'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/photos/Static_tech_image.png" 
            alt="System Optimization" 
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
            System Optimization
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Maximize efficiency, performance, and ROI from your technology investments through strategic system optimizations.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Unlock Your System's Full Potential</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                In today's fast-paced digital environment, system performance directly impacts business outcomes. Our system optimization services help you identify and eliminate inefficiencies, enhance performance, and maximize the return on your technology investments.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Whether you're dealing with slow applications, resource constraints, or seeking to reduce operational costs, our team of expert engineers will analyze your current infrastructure and implement targeted optimizations to transform your system's performance.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                We take a holistic approach to optimization, considering software, hardware, network, and user experience factors to deliver comprehensive improvements that align with your business objectives.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/photos/System_optimization.png" 
                alt="System Optimization" 
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Optimization Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive suite of optimization services designed to enhance every aspect of your technology ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizationServices.map((service, index) => (
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

      {/* Optimization Areas Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Key Optimization Areas</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Our optimization expertise spans multiple domains to deliver comprehensive improvements to your technology ecosystem.
            </p>
          </div>
          
          <div className="space-y-8">
            {optimizationAreas.map((area, index) => (
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of System Optimization</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Investing in system optimization delivers multiple advantages that impact your bottom line and operational effectiveness.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Enterprise Healthcare Provider</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/photos/Techy_abstract_hero3.jpg" 
                  alt="Healthcare system optimization" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  A large healthcare provider was experiencing significant performance issues with their patient management system, leading to delays in care delivery. Our optimization team:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Reduced database response times by 65%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Decreased system resource usage by 40%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Eliminated unplanned downtime through proactive monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Improved patient data access speed by 78%</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "The system optimization performed by TAS transformed our operations. What was once a daily source of frustration is now a smooth, responsive system that allows our staff to focus on patient care instead of waiting for technology." - CTO
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Optimization Approach</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to deliver measurable and sustainable improvements to your systems.
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
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Systems?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's discuss how our system optimization services can help you achieve greater performance, efficiency, and ROI from your technology investments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AnimatedButton className="bg-white text-primary-blue hover:bg-primary-light border-none shadow-md">
              <a href="/contact">Request a Performance Assessment</a>
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
