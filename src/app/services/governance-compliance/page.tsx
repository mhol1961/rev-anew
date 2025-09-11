'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaShieldAlt, FaClipboardCheck, FaLock, FaUserShield, FaFileAlt, FaCogs, FaCheckCircle, FaGavel, FaKey, FaEye } from 'react-icons/fa';

export default function GovernanceCompliancePage() {
  const complianceFrameworks = [
    {
      name: 'Healthcare Compliance (HIPAA)',
      description: 'Comprehensive data protection and privacy frameworks designed specifically for healthcare organizations and patient data management.',
      features: ['PHI Protection', 'Access Controls', 'Audit Trails', 'Breach Prevention', 'Risk Assessments'],
      icon: FaUserShield
    },
    {
      name: 'Financial Services Compliance',
      description: 'Regulatory compliance frameworks including SOX, PCI DSS, and industry-specific requirements for financial institutions.',
      features: ['SOX Compliance', 'PCI DSS Standards', 'Data Encryption', 'Fraud Prevention', 'Regulatory Reporting'],
      icon: FaGavel
    },
    {
      name: 'Government & Public Sector',
      description: 'Specialized governance frameworks for government organizations ensuring transparency, accountability, and citizen data protection.',
      features: ['FISMA Compliance', 'FedRAMP Standards', 'Public Records', 'Citizen Privacy', 'Security Controls'],
      icon: FaShieldAlt
    }
  ];

  const services = [
    {
      title: 'Governance Framework Design',
      description: 'Develop comprehensive governance frameworks that ensure data security, regulatory compliance, and operational excellence.',
      icon: FaClipboardCheck
    },
    {
      title: 'Compliance Assessment',
      description: 'Conduct thorough assessments of current systems and processes to identify compliance gaps and risk areas.',
      icon: FaEye
    },
    {
      title: 'Data Security & Privacy',
      description: 'Implement robust data protection measures including encryption, access controls, and privacy safeguards.',
      icon: FaLock
    },
    {
      title: 'Policy Development',
      description: 'Create detailed policies and procedures that align with regulatory requirements and industry best practices.',
      icon: FaFileAlt
    },
    {
      title: 'Access Management',
      description: 'Design and implement role-based access controls and identity management systems for secure data access.',
      icon: FaKey
    },
    {
      title: 'Audit & Monitoring',
      description: 'Establish continuous monitoring and audit capabilities to ensure ongoing compliance and risk management.',
      icon: FaCogs
    }
  ];

  const benefits = [
    'Reduced regulatory risk and compliance violations',
    'Enhanced data security and privacy protection',
    'Improved stakeholder trust and confidence',
    'Streamlined audit processes and reporting',
    'Better risk management and mitigation',
    'Standardized processes and procedures',
    'Reduced operational overhead and costs',
    'Proactive compliance monitoring and alerting'
  ];

  const industries = [
    {
      industry: 'Healthcare',
      regulations: ['HIPAA', 'HITECH', 'FDA CFR Part 11', 'State Privacy Laws'],
      focus: 'Patient data protection and healthcare information security'
    },
    {
      industry: 'Financial Services',
      regulations: ['SOX', 'PCI DSS', 'GLBA', 'FFIEC Guidelines'],
      focus: 'Financial data security and regulatory reporting compliance'
    },
    {
      industry: 'Government',
      regulations: ['FISMA', 'FedRAMP', 'FOIA', 'Privacy Act'],
      focus: 'Citizen data protection and government transparency requirements'
    },
    {
      industry: 'Education',
      regulations: ['FERPA', 'COPPA', 'State Education Laws', 'GDPR'],
      focus: 'Student data privacy and educational record protection'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Governance & Compliance" 
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
            Governance & Compliance
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Protect your business with tailored governance frameworks and compliance models designed for healthcare, financial services, and government organizations.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Security, Compliance, and Trust</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                In today's regulatory environment, governance and compliance are not optional - they're essential for business continuity, customer trust, and legal protection. Our governance solutions ensure your technology investments meet the highest standards of security and compliance.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                We specialize in designing and implementing governance frameworks for highly regulated industries including healthcare, financial services, and government organizations. Our approach balances security requirements with operational efficiency.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                From HIPAA compliance and SOX controls to FISMA standards and data privacy regulations, we ensure your systems, processes, and data management practices meet all applicable requirements while supporting your business objectives.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Security compliance" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Compliance Frameworks Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Compliance Frameworks</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Specialized governance frameworks tailored to meet the unique compliance requirements of regulated industries.
            </p>
          </div>
          
          <div className="space-y-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div 
                key={framework.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="text-primary-blue mr-4 text-3xl">
                    {React.createElement(framework.icon)}
                  </div>
                  <h3 className="text-2xl font-semibold text-primary-navy dark:text-white">{framework.name}</h3>
                </div>
                <p className="text-primary-slate dark:text-gray-300 mb-4">{framework.description}</p>
                <div className="flex flex-wrap gap-2">
                  {framework.features.map((feature) => (
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Governance Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive governance and compliance services that protect your organization while enabling business growth.
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

      {/* Industry Focus Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Industry-Specific Expertise</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Deep expertise in regulated industries with specific compliance requirements and governance needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div 
                key={industry.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white">{industry.industry}</h3>
                <p className="text-primary-slate dark:text-gray-300 mb-4">{industry.focus}</p>
                <div className="mb-3">
                  <span className="text-primary-blue dark:text-sky-300 font-medium text-sm">Key Regulations:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {industry.regulations.map((regulation) => (
                    <span key={regulation} className="bg-primary-blue/10 text-primary-blue dark:bg-primary-blue/20 dark:text-sky-300 px-2 py-1 rounded text-xs font-medium">
                      {regulation}
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Strong Governance</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Implementing robust governance and compliance frameworks delivers protection, efficiency, and competitive advantages.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: City of Atlanta Security & Compliance</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Government building" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  The City of Atlanta needed to modernize their CRM and case management systems while ensuring transparency, security, and compliance with government regulations:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">FISMA-compliant security controls and architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Secure public portals with Azure-based integrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Enhanced transparency and citizen service delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Comprehensive audit trails and compliance reporting</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "TAS delivered a solution that meets our strict security and compliance requirements while improving how we serve our citizens." - CIO, City of Atlanta
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Strengthen Your Governance?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's design a comprehensive governance and compliance framework that protects your organization while enabling innovation and growth.
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