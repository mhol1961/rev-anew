'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaUsers, FaDatabase, FaChartLine, FaServer, FaSearchDollar, FaCheckCircle, FaFilter } from 'react-icons/fa';

export default function LeadGenerationPage() {
  const services = [
    {
      title: 'API-Integrated Solutions',
      description: 'Seamless integration with Supabase backend for secure, scalable data storage and management of lead information.',
      icon: FaServer
    },
    {
      title: 'Custom Lead Criteria',
      description: 'Advanced filtering and segmentation tools to identify and target the most valuable prospects for your business.',
      icon: FaFilter
    },
    {
      title: 'Lead Qualification',
      description: 'Automated processes to score and qualify leads based on your specific business requirements and buyer personas.',
      icon: FaUsers
    },
    {
      title: 'Data Enrichment',
      description: 'Enhancement of lead data with additional demographic, firmographic, and behavioral information for better targeting.',
      icon: FaDatabase
    },
    {
      title: 'Performance Analytics',
      description: 'Comprehensive reporting on lead generation campaigns with key metrics to measure ROI and optimize strategies.',
      icon: FaChartLine
    },
    {
      title: 'Conversion Optimization',
      description: 'Strategies and tools to improve lead-to-customer conversion rates through the sales funnel.',
      icon: FaSearchDollar
    }
  ];

  const benefits = [
    'Increased quantity and quality of leads',
    'Higher conversion rates from lead to customer',
    'Reduced cost per acquisition',
    'Better alignment between marketing and sales',
    'Data-driven insights for campaign optimization',
    'Scalable lead generation processes',
    'Enhanced targeting of ideal customer profiles'
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Lead Generation" 
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
            Lead Generation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Drive business growth with AI-powered lead generation solutions that deliver high-quality prospects ready for conversion.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Strategic Lead Generation</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                In today's competitive market, generating high-quality leads is essential for sustainable business growth. Our lead generation solutions help you identify, attract, and convert your ideal prospects into customers through data-driven strategies and advanced technology.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                We leverage API-integrated solutions with a robust Supabase backend to create a seamless lead generation ecosystem that captures, analyzes, and distributes leads to your sales team efficiently.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                Whether you need a consistent flow of new prospects or want to optimize your existing lead generation processes, our customizable solutions adapt to your specific business requirements and scale with your growth.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/photos/LeadGenService.png" 
                alt="Lead generation analytics" 
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Lead Generation Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive lead generation solutions that cover every aspect of the process, from capturing to qualifying and converting leads.
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

      {/* Pricing Models Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Flexible Pricing Models</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Choose the lead generation pricing model that best fits your business needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-primary-navy/50 p-8 rounded-lg shadow-md border-t-4 border-primary-blue"
            >
              <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-4">Pay-Per-Lead</h3>
              <p className="text-primary-slate dark:text-gray-300 mb-4">
                Only pay for qualified leads that match your specific criteria. Perfect for businesses with fluctuating lead requirements or those testing new markets.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">No monthly commitment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">Custom lead criteria</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">Volume discounts available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">Quality guarantee</span>
                </li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-primary-navy/50 p-8 rounded-lg shadow-md border-t-4 border-primary-blue"
            >
              <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-4">Subscription-Based</h3>
              <p className="text-primary-slate dark:text-gray-300 mb-4">
                Receive a consistent flow of qualified leads each month. Ideal for businesses with established sales processes and predictable growth targets.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">Predictable monthly lead volume</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">Lower cost per lead</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">Priority lead delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">Advanced reporting and insights</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-16 bg-primary-blue/10 dark:bg-primary-navy/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Our Lead Generation</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Our lead generation solutions deliver measurable business impacts.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: B2B Software Provider</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Software team meeting" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  A B2B software provider was struggling to generate enough qualified leads for their sales team. We implemented our API-integrated lead generation solution that:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Increased qualified lead volume by 187% in the first quarter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Reduced cost per acquisition by 42%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Improved lead-to-opportunity conversion rate from 12% to 28%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Generated $1.2M in additional pipeline value</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "REV-ANEW' lead generation system transformed our sales pipeline. We're now getting consistent, high-quality leads that are properly qualified and ready for our sales team to engage with." - VP of Sales
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Generate More High-Quality Leads?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's discuss how our lead generation solutions can help you attract more of your ideal customers and accelerate your business growth.
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
