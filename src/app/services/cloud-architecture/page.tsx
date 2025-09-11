'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaCloud, FaShieldAlt, FaServer, FaDocker, FaCogs, FaCheckCircle, FaRocket, FaExpandArrowsAlt } from 'react-icons/fa';

export default function CloudArchitecturePage() {
  const cloudPlatforms = [
    {
      name: 'Microsoft Azure',
      description: 'Comprehensive cloud platform with enterprise-grade security, AI capabilities, and seamless integration with Microsoft ecosystem.',
      features: ['Azure Kubernetes Service', 'Azure DevOps', 'Azure Active Directory', 'Cognitive Services', 'Power Platform Integration'],
      icon: FaCloud
    },
    {
      name: 'Amazon Web Services (AWS)',
      description: 'Leading cloud infrastructure platform offering the broadest selection of services and proven scalability for enterprises.',
      features: ['EC2 & Lambda', 'RDS & DynamoDB', 'CloudFormation', 'IAM & Security', 'Machine Learning Services'],
      icon: FaServer
    },
    {
      name: 'Kubernetes & Containers',
      description: 'Modern container orchestration enabling scalable, portable, and efficient application deployment across any environment.',
      features: ['Container Orchestration', 'Microservices Architecture', 'Auto-scaling', 'Service Mesh', 'CI/CD Integration'],
      icon: FaDocker
    }
  ];

  const services = [
    {
      title: 'Cloud Strategy & Architecture',
      description: 'Design comprehensive cloud strategies and architectures aligned with your business objectives and technical requirements.',
      icon: FaCloud
    },
    {
      title: 'Migration & Modernization',
      description: 'Migrate applications and infrastructure to the cloud while modernizing architectures for optimal performance.',
      icon: FaRocket
    },
    {
      title: 'Containerization & Orchestration',
      description: 'Implement Docker containers and Kubernetes orchestration for scalable, portable application deployments.',
      icon: FaDocker
    },
    {
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure deployment and management using code-based approaches for consistency and repeatability.',
      icon: FaCogs
    },
    {
      title: 'Security & Compliance',
      description: 'Implement comprehensive security frameworks and ensure compliance with industry regulations and standards.',
      icon: FaShieldAlt
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize cloud infrastructure for performance, cost-efficiency, and scalability to meet growing demands.',
      icon: FaExpandArrowsAlt
    }
  ];

  const benefits = [
    'Reduced infrastructure costs and operational overhead',
    'Enhanced scalability and elasticity',
    'Improved security and disaster recovery',
    'Faster time-to-market for applications',
    'Global reach and availability',
    'Automatic updates and maintenance',
    'Enhanced collaboration and remote access',
    'Environmental sustainability through shared resources'
  ];

  const architecturePatterns = [
    {
      pattern: 'Microservices Architecture',
      description: 'Decompose applications into small, independent services that can be developed, deployed, and scaled independently.',
      benefits: ['Independent scaling', 'Technology diversity', 'Fault isolation', 'Team autonomy']
    },
    {
      pattern: 'Serverless Architecture',
      description: 'Build and run applications without managing servers, paying only for actual compute resources used.',
      benefits: ['Zero server management', 'Automatic scaling', 'Pay-per-use pricing', 'Built-in availability']
    },
    {
      pattern: 'Hybrid Cloud',
      description: 'Combine on-premises, private cloud, and public cloud services with orchestration between platforms.',
      benefits: ['Flexibility and choice', 'Data sovereignty', 'Cost optimization', 'Risk mitigation']
    },
    {
      pattern: 'Multi-Cloud',
      description: 'Distribute applications and services across multiple cloud providers to avoid vendor lock-in.',
      benefits: ['Vendor independence', 'Best-of-breed services', 'Improved redundancy', 'Regulatory compliance']
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Cloud Architecture" 
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
            Cloud Architecture
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Build secure, scalable, and cloud-native architectures using AWS, Azure, and Kubernetes to support long-term growth and innovation.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Architect for the Future</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Cloud architecture is the foundation of modern digital transformation. Our cloud architects design and implement scalable, secure, and cost-effective solutions that leverage the power of cloud computing to accelerate your business growth.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                We specialize in multi-cloud and hybrid cloud architectures using AWS, Microsoft Azure, and container orchestration platforms like Kubernetes. Our approach focuses on building resilient, scalable systems that can adapt to changing business requirements.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                From cloud migration and application modernization to implementing DevOps practices and Infrastructure as Code, we ensure your cloud environment supports innovation while maintaining security and compliance.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Cloud infrastructure" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Cloud Platforms Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Cloud Platforms & Technologies</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We architect solutions across leading cloud platforms and container technologies to deliver optimal performance and scalability.
            </p>
          </div>
          
          <div className="space-y-8">
            {cloudPlatforms.map((platform, index) => (
              <motion.div 
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="text-primary-blue mr-4 text-3xl">
                    {React.createElement(platform.icon)}
                  </div>
                  <h3 className="text-2xl font-semibold text-primary-navy dark:text-white">{platform.name}</h3>
                </div>
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

      {/* Services Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Cloud Architecture Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud architecture services to design, build, and optimize your cloud infrastructure for maximum performance and efficiency.
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

      {/* Architecture Patterns Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Modern Architecture Patterns</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              We implement proven architecture patterns that deliver scalability, resilience, and flexibility for modern applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architecturePatterns.map((pattern, index) => (
              <motion.div 
                key={pattern.pattern}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white">{pattern.pattern}</h3>
                <p className="text-primary-slate dark:text-gray-300 mb-4">{pattern.description}</p>
                <div className="space-y-2">
                  {pattern.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center">
                      <span className="text-primary-blue mr-2 text-sm">
                        <FaCheckCircle />
                      </span>
                      <span className="text-primary-slate dark:text-gray-300 text-sm">{benefit}</span>
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Cloud Architecture</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Modern cloud architectures deliver transformative benefits that accelerate innovation and reduce operational complexity.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Enterprise Cloud Modernization</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Modern data center" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  A Fortune 500 company needed to modernize their legacy infrastructure and migrate to a scalable cloud architecture. Our comprehensive approach delivered:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">70% reduction in infrastructure costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">99.9% application uptime with auto-scaling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">50% faster deployment cycles with DevOps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Enhanced security and compliance posture</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "TAS transformed our infrastructure from a cost center to a competitive advantage. Their cloud architecture expertise enabled us to scale globally while reducing operational overhead." - CTO
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's design a cloud architecture that scales with your business, reduces costs, and accelerates innovation through modern cloud technologies.
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