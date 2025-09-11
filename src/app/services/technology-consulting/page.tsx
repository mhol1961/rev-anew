'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaUserTie, FaRoad, FaLightbulb, FaChartLine, FaCogs, FaShieldAlt, FaCheckCircle, FaClipboardList, FaProjectDiagram, FaHandshake } from 'react-icons/fa';

export default function TechnologyConsultingPage() {
  const consultingAreas = [
    {
      name: 'Strategic Technology Planning',
      description: 'Develop comprehensive technology roadmaps that align with your business objectives and drive sustainable growth.',
      features: ['Technology Assessment', 'Strategic Roadmapping', 'Investment Planning', 'Risk Analysis', 'ROI Modeling'],
      icon: FaRoad
    },
    {
      name: 'Digital Transformation Advisory',
      description: 'Guide your organization through digital transformation initiatives with proven methodologies and best practices.',
      features: ['Transformation Strategy', 'Change Readiness', 'Technology Selection', 'Implementation Planning', 'Success Metrics'],
      icon: FaLightbulb
    },
    {
      name: 'Solution Architecture Design',
      description: 'Design robust, scalable solution architectures that support your business requirements and future growth.',
      features: ['Enterprise Architecture', 'Integration Design', 'Scalability Planning', 'Security Architecture', 'Performance Optimization'],
      icon: FaProjectDiagram
    }
  ];

  const services = [
    {
      title: 'Technology Assessment',
      description: 'Comprehensive evaluation of your current technology landscape to identify opportunities for improvement and optimization.',
      icon: FaClipboardList
    },
    {
      title: 'Strategic Planning',
      description: 'Develop strategic technology plans that align with business goals and provide clear roadmaps for implementation.',
      icon: FaRoad
    },
    {
      title: 'Vendor Selection',
      description: 'Expert guidance in selecting the right technology vendors and solutions based on your specific requirements.',
      icon: FaHandshake
    },
    {
      title: 'Implementation Strategy',
      description: 'Design detailed implementation strategies that minimize risk and ensure successful technology deployments.',
      icon: FaCogs
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize existing technology investments to improve performance, reduce costs, and enhance user experience.',
      icon: FaChartLine
    },
    {
      title: 'Compliance & Security',
      description: 'Ensure your technology initiatives meet regulatory requirements and maintain the highest security standards.',
      icon: FaShieldAlt
    }
  ];

  const benefits = [
    'Aligned technology investments with business strategy',
    'Reduced technology risks and implementation costs',
    'Accelerated time-to-value for technology initiatives',
    'Enhanced operational efficiency and productivity',
    'Improved competitive positioning through innovation',
    'Better stakeholder buy-in and project success rates',
    'Scalable technology foundations for growth',
    'Optimized technology portfolio and vendor relationships'
  ];

  const expertiseAreas = [
    {
      area: 'CRM & ERP Strategy',
      description: 'Strategic guidance for customer relationship management and enterprise resource planning initiatives.',
      outcomes: ['Platform selection', 'Integration planning', 'Change management', 'Success metrics']
    },
    {
      area: 'Marketing Technology',
      description: 'Advisory services for marketing automation, lead generation, and customer experience platforms.',
      outcomes: ['MarTech stack design', 'Attribution modeling', 'Campaign optimization', 'ROI measurement']
    },
    {
      area: 'Cloud Transformation',
      description: 'Strategic planning for cloud adoption, migration, and optimization initiatives.',
      outcomes: ['Cloud strategy', 'Migration roadmap', 'Cost optimization', 'Security planning']
    },
    {
      area: 'Data & Analytics',
      description: 'Strategic advisory for data management, business intelligence, and analytics initiatives.',
      outcomes: ['Data strategy', 'Analytics roadmap', 'Governance framework', 'KPI development']
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Technology Consulting" 
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
            Technology Consulting & Advisory
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Align technology investments with business strategy through expert advisory services, solution architecture, and strategic guidance for digital transformation.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Strategic Technology Leadership</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Technology decisions shape the future of your business. Our technology consulting and advisory services provide the strategic guidance you need to make informed decisions that drive growth, reduce risk, and maximize return on investment.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                As subject matter experts across CRM, ERP, marketing automation, cloud technologies, and data platforms, we bring deep industry knowledge and proven methodologies to help you navigate complex technology landscapes.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                From strategic planning and solution architecture to vendor selection and implementation roadmaps, we deliver actionable insights that enable successful technology transformations.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Strategic consulting" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Consulting Areas Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Consulting & Advisory Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive advisory services that guide your technology strategy and ensure successful implementation of complex initiatives.
            </p>
          </div>
          
          <div className="space-y-8">
            {consultingAreas.map((area, index) => (
              <motion.div 
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="text-primary-blue mr-4 text-3xl">
                    {React.createElement(area.icon)}
                  </div>
                  <h3 className="text-2xl font-semibold text-primary-navy dark:text-white">{area.name}</h3>
                </div>
                <p className="text-primary-slate dark:text-gray-300 mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.features.map((feature) => (
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Advisory Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Expert guidance across all aspects of technology strategy, planning, and implementation to ensure your success.
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

      {/* Expertise Areas Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Areas of Expertise</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Deep expertise across key technology domains to provide informed guidance and strategic direction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((expertise, index) => (
              <motion.div 
                key={expertise.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white">{expertise.area}</h3>
                <p className="text-primary-slate dark:text-gray-300 mb-4">{expertise.description}</p>
                <div className="space-y-2">
                  {expertise.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center">
                      <span className="text-primary-blue mr-2 text-sm">
                        <FaCheckCircle />
                      </span>
                      <span className="text-primary-slate dark:text-gray-300 text-sm">{outcome}</span>
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Technology Consulting</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Expert advisory services deliver strategic value and ensure successful technology initiatives that drive business growth.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: StarTech.com Global Technology Strategy</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Global technology office" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  StarTech.com wanted to strengthen global sales, marketing, and customer service using Dynamics 365 and Marketo. Our strategic advisory approach delivered:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Comprehensive technology strategy for global operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Scalable CRM and marketing automation architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Implementation roadmap with risk mitigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Change management and adoption strategy</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "TAS provided the strategic vision and expert guidance we needed to align our technology investments with our global growth objectives." - CTO, StarTech.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Align Technology with Strategy?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's develop a comprehensive technology strategy that drives growth, reduces risk, and positions your organization for long-term success.
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