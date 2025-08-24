'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaTools, FaCode, FaExchangeAlt, FaLaptopCode, FaServer, FaChartLine, FaCheckCircle } from 'react-icons/fa';

export default function CustomSolutionsPage() {
  const services = [
    {
      title: 'Bespoke Software Development',
      description: 'Custom-built applications tailored to your exact business needs and workflows, creating tools that work precisely how you need them.',
      icon: FaCode
    },
    {
      title: 'Custom API Integrations',
      description: 'Seamlessly connect your disparate systems with tailored API solutions, enabling data flow between platforms that weren&apos;t designed to work together.',
      icon: FaExchangeAlt
    },
    {
      title: 'Specialized Workflow Automation',
      description: 'Automate complex, industry-specific business processes with custom workflow solutions that eliminate repetitive tasks and reduce human error.',
      icon: FaLaptopCode
    },
    {
      title: 'Industry-Specific Solutions',
      description: 'Software tools designed for your industry&apos;s unique requirements, compliance needs, and specialized processes.',
      icon: FaTools
    },
    {
      title: 'Scalable Architecture Design',
      description: 'Future-proofed solutions built on scalable architectures that grow with your business and adapt to changing requirements.',
      icon: FaServer
    },
    {
      title: 'Ongoing Support & Maintenance',
      description: 'Dedicated support services to ensure your custom solutions continue to perform optimally and evolve with your business needs.',
      icon: FaChartLine
    }
  ];

  const benefits = [
    'Tailored solutions addressing your specific business needs',
    'Improved operational efficiency and productivity',
    'Seamless integration with existing systems',
    'Reduced manual work and human error',
    'Competitive advantage through custom functionality',
    'Scalable systems that grow with your business',
    'Long-term ROI compared to off-the-shelf solutions'
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/photos/TASComparisonCollab.png" 
            alt="Custom Software Solutions" 
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
            Custom Software Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Tailored software and integration solutions designed specifically for your unique business challenges. We build bespoke systems that automate processes, integrate disparate technologies, and drive efficiency.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Strategic Custom Solutions</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                In today&apos;s complex business landscape, off-the-shelf software often fails to address the unique challenges and workflows of your organization. Our custom software solutions are designed from the ground up to fit your exact requirements.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                We take a collaborative approach to development, working closely with your team to understand your business processes, pain points, and growth objectives before crafting a solution that seamlessly integrates with your existing systems.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                Using cutting-edge technologies and agile development methodologies, we build robust, scalable, and secure solutions that evolve with your business needs and deliver long-term value.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/photos/TASCompCollab.png" 
                alt="Custom solutions development" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Custom Development Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive custom software and integration solutions that address your unique business requirements.
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

      {/* Process Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Development Process</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to develop and implement effective custom solutions for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: "1",
                title: "Requirements Analysis",
                description: "We start by thoroughly understanding your business needs, current systems, and future goals to define clear project requirements."
              },
              {
                number: "2",
                title: "Solution Design",
                description: "Our technical architects design a solution that addresses your requirements while ensuring scalability, security, and performance."
              },
              {
                number: "3",
                title: "Agile Development",
                description: "Using agile methodologies, we develop your solution in iterative cycles, allowing for continuous feedback and adaptation."
              },
              {
                number: "4",
                title: "Testing & QA",
                description: "Rigorous testing protocols ensure your solution works flawlessly across all scenarios and edge cases."
              },
              {
                number: "5",
                title: "Deployment & Support",
                description: "We carefully deploy your solution and provide ongoing support to ensure optimal performance and evolution."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-slate-50 dark:bg-primary-navy/50 p-6 rounded-lg shadow-md h-full">
                  <div className="text-primary-blue mb-3 text-2xl">
                    <div className="bg-primary-blue text-white w-10 h-10 rounded-full flex items-center justify-center mb-3">{step.number}</div>
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-3">{step.title}</h3>
                  <p className="text-primary-slate dark:text-gray-300">
                    {step.description}
                  </p>
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Custom Solutions</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Investing in custom software delivers numerous advantages for your business.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Manufacturing Enterprise</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/photos/Abstract_laptop.png" 
                  alt="Manufacturing software solution" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  A mid-sized manufacturing company struggled with disconnected systems and manual data processing. After implementing our custom integration solution:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Reduced manual data entry by 87%, eliminating errors and saving 20+ hours per week</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Unified ERP, CRM, and financial data for real-time visibility across departments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Automated inventory management and procurement workflows, reducing stockouts by 62%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Improved decision-making with custom dashboards providing actionable insights</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  &quot;The custom solution Technology Alliance Solutions developed has transformed our operations. Tasks that used to take days now happen automatically, and we have visibility into our business we never thought possible. This has been a game-changer for our efficiency and profitability.&quot; - Director of Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Integration Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <Image 
                src="/images/photos/System_optimization.png" 
                alt="System integration" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="text-primary-blue mb-4 text-4xl">
                <FaExchangeAlt />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Seamless Integration</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Our custom solutions are designed with integration in mind, connecting with your existing technology stack and third-party services to create a cohesive ecosystem for your business.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">Custom API development and integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">Legacy system modernization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">Data migration and synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">Third-party service integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  <span className="text-primary-slate dark:text-gray-300">Secure authentication and data exchange</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for a Custom Solution?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let&apos;s discuss your unique challenges and create a tailored solution that drives efficiency, automation, and growth for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AnimatedButton className="bg-white text-primary-blue hover:bg-primary-light border-none shadow-md">
              <a href="/contact">Schedule a Consultation</a>
            </AnimatedButton>
            <AnimatedButton className="bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-md">
              <a href="/case-studies">View Case Studies</a>
            </AnimatedButton>
          </div>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
