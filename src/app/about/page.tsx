'use client';

import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { FaLightbulb, FaHandshake, FaChartLine, FaUsers } from 'react-icons/fa';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Marketing Lead',
      title: 'Reputation Management Specialist',
      bio: 'Expert in reputation management, review generation, and online brand protection using GoHighLevel platform.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Automation Expert',
      title: 'Marketing Automation Specialist',
      bio: 'Specializes in building sophisticated marketing workflows, funnels, and automation sequences that drive revenue.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'CRM Specialist',
      title: 'Client Success Manager',
      bio: 'Ensures every client maximizes their GoHighLevel investment with personalized strategies and ongoing support.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Growth Strategist',
      title: 'Business Development Lead',
      bio: 'Helps businesses leverage white-label solutions to scale their operations and increase customer lifetime value.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Team collaboration" 
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
            About REV-ANEW
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            We're reputation management and marketing automation experts helping businesses reimagine their revenue through white-label GoHighLevel solutions.
          </motion.p>
        </div>
      </div>

      {/* Our Story Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary-navy dark:text-white">Our Story</h2>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                REV-ANEW was built on a simple belief: your reputation is your revenue. We help businesses harness the power of GoHighLevel's white-label platform to transform how they manage customer relationships, automate marketing, and grow their revenue.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300 mb-4">
                As certified GoHighLevel partners, we specialize in reputation management, marketing automation, CRM implementation, and business growth tools that help our clients stand out in competitive markets. Our white-label approach means you get enterprise-level capabilities with your own branding.
              </p>
              <p className="text-lg text-primary-slate dark:text-gray-300">
                From lead generation and funnel building to review management and social media automation, we provide the complete suite of tools and expertise you need to reimagine your revenue.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="REV-ANEW team meeting" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Values Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-navy dark:text-white">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl text-primary-blue mb-4 flex justify-center">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white">Innovation</h3>
              <p className="text-primary-slate dark:text-gray-300">
                We constantly explore new technologies and approaches to deliver cutting-edge solutions for our clients.
              </p>
            </div>
            <div className="bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl text-primary-blue mb-4 flex justify-center">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white">Partnership</h3>
              <p className="text-primary-slate dark:text-gray-300">
                We work as an extension of your team, committed to your success and building lasting relationships.
              </p>
            </div>
            <div className="bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl text-primary-blue mb-4 flex justify-center">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white">Results-Driven</h3>
              <p className="text-primary-slate dark:text-gray-300">
                We focus on delivering measurable outcomes and tangible business value with every engagement.
              </p>
            </div>
            <div className="bg-white dark:bg-primary-slate p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl text-primary-blue mb-4 flex justify-center">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-navy dark:text-white">Expertise</h3>
              <p className="text-primary-slate dark:text-gray-300">
                Our team brings deep domain knowledge and technical skill to solve your most complex challenges.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-navy dark:text-white">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-primary-navy/50 rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-64 w-full">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-primary-navy dark:text-white">{member.name}</h3>
                  <p className="text-primary-blue font-medium mb-3">{member.title}</p>
                  <p className="text-primary-slate dark:text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Let's discuss how our team can help you leverage CRM and marketing automation to drive growth and enhance customer relationships.
          </p>
          <motion.a 
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-primary-blue font-bold py-4 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
