'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { FaUsers, FaGraduationCap, FaChartLine, FaHandshake, FaLightbulb, FaCogs, FaCheckCircle, FaClipboardCheck, FaUserTie, FaRocket } from 'react-icons/fa';

export default function ChangeManagementPage() {
  const changeServices = [
    {
      name: 'Adoption Strategy Development',
      description: 'Create comprehensive adoption strategies that address organizational culture, user personas, and change readiness to ensure successful technology implementations.',
      features: ['Change Readiness Assessment', 'Stakeholder Analysis', 'Adoption Roadmap', 'Success Metrics', 'Risk Mitigation'],
      icon: FaRocket
    },
    {
      name: 'Training & Enablement',
      description: 'Design and deliver targeted training programs that empower users to effectively utilize new technologies and processes.',
      features: ['Role-based Training', 'Learning Paths', 'Hands-on Workshops', 'Digital Learning', 'Certification Programs'],
      icon: FaGraduationCap
    },
    {
      name: 'Organizational Change Support',
      description: 'Guide organizations through transformational change with proven methodologies that minimize resistance and accelerate adoption.',
      features: ['Change Communication', 'Leadership Alignment', 'Culture Transformation', 'Process Redesign', 'Performance Management'],
      icon: FaUsers
    }
  ];

  const services = [
    {
      title: 'Change Strategy & Planning',
      description: 'Develop comprehensive change strategies that align with your organizational goals and technology initiatives.',
      icon: FaClipboardCheck
    },
    {
      title: 'User Training & Education',
      description: 'Create and deliver effective training programs that build user confidence and competency with new systems.',
      icon: FaGraduationCap
    },
    {
      title: 'Communication & Engagement',
      description: 'Design communication strategies that build awareness, excitement, and commitment to change initiatives.',
      icon: FaHandshake
    },
    {
      title: 'Leadership Development',
      description: 'Empower leaders with the skills and tools needed to champion change and drive adoption throughout the organization.',
      icon: FaUserTie
    },
    {
      title: 'Performance Measurement',
      description: 'Establish metrics and monitoring systems to track adoption progress and measure the success of change initiatives.',
      icon: FaChartLine
    },
    {
      title: 'Continuous Improvement',
      description: 'Implement feedback loops and continuous improvement processes to optimize adoption and drive ongoing success.',
      icon: FaCogs
    }
  ];

  const benefits = [
    'Higher user adoption rates and system utilization',
    'Reduced training time and support costs',
    'Improved employee satisfaction and engagement',
    'Faster time-to-value for technology investments',
    'Enhanced organizational agility and resilience',
    'Better alignment between technology and business goals',
    'Reduced risk of project failure and user resistance',
    'Sustained behavior change and continuous improvement'
  ];

  const adoptionFramework = [
    {
      phase: 'Assess & Plan',
      description: 'Evaluate organizational readiness and develop comprehensive adoption strategies.',
      activities: ['Stakeholder mapping', 'Change impact analysis', 'Strategy development', 'Resource planning']
    },
    {
      phase: 'Engage & Communicate',
      description: 'Build awareness and excitement for the change through targeted communication.',
      activities: ['Communication planning', 'Leadership alignment', 'Change champions', 'Feedback collection']
    },
    {
      phase: 'Train & Enable',
      description: 'Deliver comprehensive training and support to build user competency and confidence.',
      activities: ['Training delivery', 'Support resources', 'Performance support', 'Skill assessment']
    },
    {
      phase: 'Monitor & Optimize',
      description: 'Track adoption progress and continuously improve processes and support.',
      activities: ['Usage monitoring', 'Feedback analysis', 'Process optimization', 'Continuous improvement']
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Change Management" 
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
            Change Management & Adoption
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Ensure long-term success with structured adoption strategies, comprehensive training, and organizational change management that maximizes technology investments.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Transforming People, Not Just Technology</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                Technology implementations succeed when people embrace change. Our change management and adoption services ensure your teams not only learn new systems but thrive with them, turning technology investments into sustainable business value.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                We use proven change management methodologies to assess organizational readiness, develop comprehensive adoption strategies, and deliver training programs that build confidence and competency across all user groups.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                From executive leadership alignment to end-user training and ongoing support, we guide organizations through every aspect of change to achieve lasting transformation and maximum ROI.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team collaboration" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Change Services Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Change Management Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive change management services that address the human side of technology transformation.
            </p>
          </div>
          
          <div className="space-y-8">
            {changeServices.map((service, index) => (
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Adoption Services</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              End-to-end adoption services that ensure your technology investments deliver measurable business value.
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

      {/* Adoption Framework Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Our Proven Adoption Framework</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              A structured, four-phase approach that ensures sustainable adoption and long-term success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adoptionFramework.map((phase, index) => (
              <motion.div 
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-slate p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white">{phase.phase}</h3>
                <p className="text-primary-slate dark:text-gray-300 mb-4">{phase.description}</p>
                <div className="space-y-2">
                  {phase.activities.map((activity) => (
                    <div key={activity} className="flex items-center">
                      <span className="text-primary-blue mr-2 text-sm">
                        <FaCheckCircle />
                      </span>
                      <span className="text-primary-slate dark:text-gray-300 text-sm">{activity}</span>
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
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">Benefits of Effective Change Management</h2>
            <p className="text-lg text-primary-slate dark:text-gray-300 max-w-3xl mx-auto">
              Structured change management delivers measurable improvements in adoption rates, user satisfaction, and business outcomes.
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
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">Case Study: Manufacturing Company CRM Adoption</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Manufacturing team" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-primary-slate dark:text-gray-300 mb-4">
                  A global manufacturing company with 500+ employees needed to ensure successful adoption of their new Salesforce CRM implementation. Our comprehensive change management approach delivered:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">98% user adoption within 3 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">35% increase in sales productivity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">90% reduction in support tickets post go-live</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-blue mr-2">✓</span>
                    <span className="text-primary-slate dark:text-gray-300">Strong leadership buy-in and champion network</span>
                  </li>
                </ul>
                <p className="text-primary-slate dark:text-gray-300 italic">
                  "TAS didn't just implement our CRM - they transformed how our teams work together. Their change management approach made all the difference in our success." - VP of Sales
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ensure Adoption Success?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's create a comprehensive change management strategy that transforms your technology investment into sustained business value through effective adoption.
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