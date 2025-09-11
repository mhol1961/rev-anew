'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaCogs, FaHeadset, FaChartLine, FaShieldAlt, FaServer, FaToolbox, FaCheckCircle, FaClock, FaUserTie, FaRocket } from 'react-icons/fa';

export default function ManagedServicesPage() {
  const managedServices = [
    {
      name: 'Platform Administration',
      description: 'Comprehensive administration and management of your CRM, ERP, marketing automation, and cloud platforms to ensure optimal performance.',
      features: ['System Administration', 'User Management', 'Configuration Updates', 'Security Monitoring', 'Performance Optimization'],
      icon: FaCogs
    },
    {
      name: 'Continuous Support',
      description: 'Round-the-clock support services with dedicated teams providing expertise across all your technology platforms and business processes.',
      features: ['24/7 Monitoring', 'Help Desk Support', 'Issue Resolution', 'Emergency Response', 'User Training'],
      icon: FaHeadset
    },
    {
      name: 'Performance Monitoring',
      description: 'Proactive monitoring and optimization services that ensure your systems perform at peak efficiency and deliver maximum value.',
      features: ['Performance Analytics', 'Capacity Planning', 'Health Monitoring', 'Optimization Recommendations', 'Reporting Dashboards'],
      icon: FaChartLine
    }
  ];

  const services = [
    {
      title: 'System Administration',
      description: 'Expert administration of your technology platforms ensuring optimal configuration, security, and performance.',
      icon: FaServer
    },
    {
      title: 'Help Desk & Support',
      description: 'Comprehensive user support services with dedicated help desk teams and multi-tier support structures.',
      icon: FaHeadset
    },
    {
      title: 'Preventive Maintenance',
      description: 'Proactive maintenance programs that prevent issues before they impact your business operations.',
      icon: FaToolbox
    },
    {
      title: 'Security Management',
      description: 'Ongoing security monitoring, threat detection, and compliance management to protect your critical systems.',
      icon: FaShieldAlt
    },
    {
      title: 'Performance Optimization',
      description: 'Continuous optimization services that enhance system performance and improve user experience.',
      icon: FaRocket
    },
    {
      title: 'Strategic Consulting',
      description: 'Ongoing strategic guidance and recommendations to maximize the value of your technology investments.',
      icon: FaUserTie
    }
  ];

  const benefits = [
    'Reduced total cost of ownership and operational overhead',
    'Improved system reliability and uptime',
    'Access to specialized expertise and best practices',
    'Proactive issue prevention and resolution',
    'Enhanced security and compliance posture',
    'Scalable support that grows with your business',
    'Focus on core business while we manage technology',
    'Continuous optimization and innovation'
  ];

  const supportTiers = [
    {
      tier: 'Essential Support',
      description: 'Fundamental support services for stable operations and user assistance.',
      features: ['Business hours support', 'Issue tracking', 'Basic monitoring', 'User training resources', 'Email support']
    },
    {
      tier: 'Professional Support',
      description: 'Enhanced support with proactive monitoring and optimization services.',
      features: ['Extended hours support', 'Proactive monitoring', 'Performance optimization', 'Priority response', 'Phone & email support']
    },
    {
      tier: 'Enterprise Support',
      description: 'Comprehensive support with dedicated resources and strategic guidance.',
      features: ['24/7 support coverage', 'Dedicated account team', 'Strategic consulting', 'Emergency response', 'All communication channels']
    },
    {
      tier: 'Premium Support',
      description: 'White-glove support with full-service management and optimization.',
      features: ['Dedicated specialists', 'Continuous optimization', 'Strategic roadmapping', 'Custom SLAs', 'Executive escalation']
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Managed Services" 
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
            Managed Services & Support
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Extend your team with ongoing platform support, monitoring, and administration for CRM, ERP, marketing, and cloud platforms to ensure peak performance.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Your Technology Partner for Long-Term Success</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Technology implementations are just the beginning. Our managed services ensure your CRM, ERP, marketing automation, and cloud platforms continue to deliver value through ongoing support, optimization, and strategic guidance.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                With our comprehensive managed services, you gain access to specialized expertise, proactive monitoring, and continuous optimization without the overhead of maintaining internal teams for every technology platform.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                From 24/7 monitoring and help desk support to strategic consulting and performance optimization, we ensure your technology investments continue to drive business growth and operational efficiency.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Support team" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Managed Services Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Managed Services Portfolio</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive managed services that keep your technology platforms running smoothly and performing at their best.
            </p>
          </div>
          
          <div className="space-y-8">
            {managedServices.map((service, index) => (
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Support Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive support services that ensure your technology platforms perform at their best every day.
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

      {/* Support Tiers Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Support Tiers</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Flexible support options designed to meet your specific needs and budget requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportTiers.map((tier, index) => (
              <motion.div 
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white">{tier.tier}</h3>
                <p className="text-primary-slate dark:text-gray-300 mb-4">{tier.description}</p>
                <div className="space-y-2">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <span className="text-primary-blue mr-2 text-sm">
                        <FaCheckCircle />
                      </span>
                      <span className="text-primary-slate dark:text-gray-300 text-sm">{feature}</span>
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Managed Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Partnering with us for managed services delivers predictable costs, enhanced performance, and peace of mind.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: CohnReznick Ongoing Platform Management</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Professional services office" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  CohnReznick required ongoing management and optimization of their Dynamics 365 and Marketo integration to strengthen marketing operations and sales enablement:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">24/7 monitoring and proactive issue resolution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Continuous optimization of marketing and sales processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Enhanced data quality and campaign performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Strategic guidance for platform evolution</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "TAS managed services give us confidence that our marketing and sales platforms are always performing at their best, allowing our teams to focus on what they do best." - Marketing Operations Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Worry-Free Technology Management?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's discuss how our managed services can optimize your technology platforms, reduce operational overhead, and ensure long-term success.
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