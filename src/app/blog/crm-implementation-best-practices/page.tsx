'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTag, FaChevronLeft } from 'react-icons/fa';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';

export default function BlogPost() {
  // Blog post data
  const post = {
    id: 'crm-implementation-best-practices',
    title: 'CRM Implementation Best Practices for Enterprise Organizations',
    date: 'April 15, 2025',
    author: 'Jacquelin Johnson',
    category: 'CRM',
    tags: ['CRM Implementation', 'Enterprise', 'Data Migration'],
    image: '/images/photos/Laptop_CRM_dashboard.png',
    content: `
      <p class="mb-4">Implementing a Customer Relationship Management (CRM) system in an enterprise organization is a significant undertaking that requires careful planning, stakeholder alignment, and a clear strategy. In this article, we'll explore the best practices that can help ensure your CRM implementation delivers maximum value and adoption across your organization.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Define Clear Objectives and Success Metrics</h2>
      
      <p class="mb-4">Before selecting a CRM platform, it's crucial to define what success looks like for your organization. Ask key questions such as:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>What specific business problems are you trying to solve?</li>
        <li>What operational efficiencies are you aiming to achieve?</li>
        <li>How will you measure ROI on your CRM investment?</li>
        <li>What key performance indicators (KPIs) will track success?</li>
      </ul>
      
      <p class="mb-4">Without clear objectives, it's easy for CRM implementations to lose focus and fail to deliver meaningful business impact. Document your objectives and ensure all stakeholders are aligned on expectations.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Secure Executive Sponsorship</h2>
      
      <p class="mb-4">Executive sponsorship is perhaps the single most important factor in successful CRM implementations. Your executive sponsor should:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Communicate the strategic importance of the CRM initiative</li>
        <li>Allocate appropriate resources and budget</li>
        <li>Remove organizational obstacles</li>
        <li>Champion user adoption across departments</li>
      </ul>
      
      <p class="mb-4">When leadership actively demonstrates commitment to the CRM project, it significantly increases the likelihood of broad organizational adoption.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Focus on Data Quality and Migration Strategy</h2>
      
      <p class="mb-4">Data is the lifeblood of your CRM system. Poor data quality can quickly undermine user confidence and system effectiveness. Develop a comprehensive data strategy that addresses:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Data cleansing and deduplication procedures</li>
        <li>Data governance policies</li>
        <li>Data migration approach (phased vs. all-at-once)</li>
        <li>Ongoing data maintenance responsibilities</li>
      </ul>
      
      <p class="mb-4">Consider implementing data validation rules, mandatory fields, and regular data quality audits to maintain high-quality information in your CRM.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Design with the End User in Mind</h2>
      
      <p class="mb-4">CRM systems that don't align with how users actually work are destined to fail. Involve end users from different departments in the design process to ensure the system:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Simplifies rather than complicates existing workflows</li>
        <li>Presents relevant information at the right time</li>
        <li>Minimizes duplicate data entry</li>
        <li>Provides genuine value to each user type</li>
      </ul>
      
      <p class="mb-4">Consider creating user personas and journey maps to better understand how different roles will interact with the system and what features will be most valuable to them.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Invest in Comprehensive Training</h2>
      
      <p class="mb-4">Training is often underestimated in CRM implementations. For maximum adoption, develop role-based training programs that:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Focus on specific workflows relevant to each team</li>
        <li>Provide hands-on practice opportunities</li>
        <li>Include follow-up sessions after go-live</li>
        <li>Offer self-service resources and documentation</li>
      </ul>
      
      <p class="mb-4">Consider implementing a "train the trainer" approach where power users from each department can provide ongoing support to their colleagues.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Implement in Phases</h2>
      
      <p class="mb-4">Trying to implement every CRM feature simultaneously across the entire organization often leads to overwhelm and resistance. Instead, consider a phased approach:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Start with core functionality for a specific department or user group</li>
        <li>Gather feedback and make adjustments</li>
        <li>Celebrate early wins to build momentum</li>
        <li>Gradually expand to additional departments and features</li>
      </ul>
      
      <p class="mb-4">This approach allows you to demonstrate value quickly while minimizing disruption to business operations.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Establish Ongoing Support and Governance</h2>
      
      <p class="mb-4">CRM implementation doesn't end at go-live. Establish clear structures for:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Ongoing user support and issue resolution</li>
        <li>System enhancements and feature requests</li>
        <li>Regular system health checks</li>
        <li>User adoption monitoring</li>
      </ul>
      
      <p class="mb-4">Consider forming a CRM governance committee with representatives from different departments to guide the system's evolution and ensure it continues to meet organizational needs.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Conclusion</h2>
      
      <p class="mb-4">Successful CRM implementation in enterprise organizations requires careful planning, strong leadership, and a focus on user adoption. By following these best practices, you can maximize the value of your CRM investment and create a system that genuinely enhances your customer relationships and business operations.</p>
      
      <p class="mb-4">At REV-ANEW, we specialize in helping enterprises implement and optimize CRM systems that drive tangible business results. Contact us to learn how we can support your CRM journey.</p>
    `
  };

  return (
    <PageLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-navy to-primary-blue py-16 md:py-24">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <FaChevronLeft className="mr-2" />
              Back to all articles
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              {post.title}
            </motion.h1>
            
            {/* Meta information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center text-white/80 gap-4 mb-8"
            >
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <FaUser className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <FaTag className="mr-2" />
                <span>{post.category}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-16 bg-white dark:bg-primary-navy pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <div className="relative h-72 md:h-96 w-full">
              <Image 
                src={post.image} 
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <AnimatedSection className="py-16 bg-white dark:bg-primary-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 dark:bg-primary-slate/30 text-primary-slate dark:text-white/80 rounded-full text-sm px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Article content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-lg text-primary-navy dark:text-white prose-headings:text-primary-navy dark:prose-headings:text-white prose-p:text-primary-navy dark:prose-p:text-white prose-li:text-primary-navy dark:prose-li:text-white prose-strong:text-primary-navy dark:prose-strong:text-white prose-a:text-primary-blue dark:prose-a:text-primary-blue/90 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Author info */}
            <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-2">About the Author</h3>
              <p className="text-primary-slate dark:text-white/80 mb-4">
                {post.author} is a senior CRM consultant at REV-ANEW with over 15 years of experience implementing enterprise CRM solutions across various industries.
              </p>
            </div>
            
            {/* Call to action */}
            <div className="mt-12 bg-gradient-to-r from-primary-blue/10 to-blue-400/10 dark:from-primary-blue/20 dark:to-blue-500/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-4">Need help with your CRM implementation?</h3>
              <p className="text-primary-slate dark:text-white/80 mb-6">
                Our team of experts can guide you through every step of the process, ensuring a successful implementation that drives real business value.
              </p>
              <Link href="/contact">
                <AnimatedButton className="bg-primary-blue text-white hover:bg-primary-blue/90 border-none">
                  Contact Our CRM Specialists
                </AnimatedButton>
              </Link>
            </div>
            
            {/* Related posts placeholder */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/ai-crm-capabilities" className="group">
                  <div className="bg-white dark:bg-primary-slate/30 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-primary-navy dark:text-white group-hover:text-primary-blue dark:group-hover:text-primary-blue/80 transition-colors">
                        How AI is Enhancing CRM Capabilities in 2025
                      </h4>
                      <p className="text-primary-slate dark:text-white/70 mt-2 text-sm">
                        Explore the latest artificial intelligence features transforming customer relationship management platforms.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/data-migration-strategies" className="group">
                  <div className="bg-white dark:bg-primary-slate/30 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-primary-navy dark:text-white group-hover:text-primary-blue dark:group-hover:text-primary-blue/80 transition-colors">
                        Effective Data Migration Strategies for System Transitions
                      </h4>
                      <p className="text-primary-slate dark:text-white/70 mt-2 text-sm">
                        Learn proven approaches to ensuring smooth data migration when transitioning between critical business systems.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
