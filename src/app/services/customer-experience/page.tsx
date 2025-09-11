'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaUserFriends, FaHeart, FaRoute, FaChartLine, FaMobile, FaComments, FaCheckCircle, FaEye, FaHandshake, FaStar } from 'react-icons/fa';

export default function CustomerExperiencePage() {
  const cxServices = [
    {
      name: 'Customer Journey Mapping',
      description: 'Design comprehensive customer journey maps that identify touchpoints, pain points, and opportunities for experience enhancement.',
      features: ['Journey Visualization', 'Touchpoint Analysis', 'Pain Point Identification', 'Opportunity Assessment', 'Experience Metrics'],
      icon: FaRoute
    },
    {
      name: 'Omnichannel Strategy',
      description: 'Create seamless experiences across all customer touchpoints, ensuring consistency and continuity throughout the customer lifecycle.',
      features: ['Channel Integration', 'Consistent Messaging', 'Cross-channel Analytics', 'Unified Customer Data', 'Experience Orchestration'],
      icon: FaMobile
    },
    {
      name: 'Voice of Customer Programs',
      description: 'Implement comprehensive feedback systems that capture, analyze, and act on customer insights to drive continuous improvement.',
      features: ['Feedback Collection', 'Sentiment Analysis', 'Customer Surveys', 'Social Listening', 'Actionable Insights'],
      icon: FaComments
    }
  ];

  const services = [
    {
      title: 'Experience Strategy Design',
      description: 'Develop comprehensive customer experience strategies that align with business objectives and customer expectations.',
      icon: FaEye
    },
    {
      title: 'Customer Journey Optimization',
      description: 'Analyze and optimize customer journeys to reduce friction and enhance satisfaction at every touchpoint.',
      icon: FaRoute
    },
    {
      title: 'Digital Experience Platforms',
      description: 'Implement and optimize digital platforms that deliver personalized, engaging customer experiences.',
      icon: FaMobile
    },
    {
      title: 'Customer Feedback Systems',
      description: 'Deploy comprehensive feedback collection and analysis systems to capture and act on customer insights.',
      icon: FaComments
    },
    {
      title: 'Personalization Engines',
      description: 'Implement AI-driven personalization that delivers relevant content and experiences based on customer behavior.',
      icon: FaHeart
    },
    {
      title: 'Experience Analytics',
      description: 'Measure and analyze customer experience metrics to identify trends and optimization opportunities.',
      icon: FaChartLine
    }
  ];

  const benefits = [
    'Increased customer satisfaction and loyalty',
    'Higher customer lifetime value and retention',
    'Improved brand reputation and advocacy',
    'Enhanced competitive differentiation',
    'Reduced customer service costs',
    'Increased conversion rates and revenue',
    'Better customer insights and decision-making',
    'Streamlined customer support processes'
  ];

  const cxMetrics = [
    {
      metric: 'Net Promoter Score (NPS)',
      description: 'Measure customer loyalty and likelihood to recommend your brand.',
      importance: 'Key indicator of customer advocacy and business growth potential'
    },
    {
      metric: 'Customer Satisfaction (CSAT)',
      description: 'Track satisfaction levels across touchpoints and interactions.',
      importance: 'Direct measure of experience quality and service effectiveness'
    },
    {
      metric: 'Customer Effort Score (CES)',
      description: 'Assess how easy it is for customers to accomplish their goals.',
      importance: 'Identifies friction points and optimization opportunities'
    },
    {
      metric: 'Customer Lifetime Value (CLV)',
      description: 'Calculate the total value a customer brings over their relationship.',
      importance: 'Measures long-term business impact of experience investments'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Customer Experience" 
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
            Customer Experience (CX) Design
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Create seamless, personalized customer experiences across every touchpoint by aligning CRM, marketing automation, and service strategies for meaningful engagement.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Designing Experiences That Matter</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Customer experience is the new competitive battleground. Organizations that deliver exceptional, seamless experiences across all touchpoints build stronger relationships, increase loyalty, and drive sustainable growth.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Our customer experience design services help you understand your customers' journeys, identify pain points, and create cohesive strategies that deliver meaningful interactions at every stage of the customer lifecycle.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                We align your CRM, marketing automation, customer service, and digital platforms to create unified experiences that delight customers and drive business results.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Customer journey mapping" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CX Services Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Customer Experience Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive CX services that transform how you understand, engage, and delight your customers.
            </p>
          </div>
          
          <div className="space-y-8">
            {cxServices.map((service, index) => (
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our CX Design Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              End-to-end customer experience design services that create meaningful connections and drive business growth.
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

      {/* CX Metrics Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Key Customer Experience Metrics</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We track the metrics that matter most for understanding and improving customer experience performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cxMetrics.map((metric, index) => (
              <motion.div 
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white">{metric.metric}</h3>
                <p className="text-primary-slate dark:text-gray-300 mb-3">{metric.description}</p>
                <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-3 rounded">
                  <span className="text-primary-blue dark:text-sky-300 text-sm font-medium">{metric.importance}</span>
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of CX Design</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Investing in customer experience design delivers measurable benefits across satisfaction, loyalty, and business performance.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Wellmark Blue Cross Customer Experience Transformation</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Healthcare customer service" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  Wellmark Blue Cross needed to integrate Marketo with Dynamics 365 to support healthcare marketing automation while ensuring compliance and improving customer experience:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Unified customer journey across all touchpoints</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Compliant marketing automation with personalization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Enhanced member engagement and satisfaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Improved marketing performance visibility</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "TAS helped us create a seamless customer experience that meets healthcare compliance requirements while delivering the personalized engagement our members expect." - CX Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Customer Experience?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's design customer experiences that build loyalty, drive growth, and create lasting competitive advantages for your business.
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