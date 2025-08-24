'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaSearch } from 'react-icons/fa';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { useState } from 'react';

// Define blog posts data
const blogPosts = [
  {
    id: 'crm-implementation-best-practices',
    title: 'CRM Implementation Best Practices for Enterprise Organizations',
    excerpt: 'Learn the essential best practices for successful CRM implementation in large organizations. From stakeholder alignment to data migration strategies.',
    date: 'April 15, 2025',
    author: 'Jacquelin Johnson',
    category: 'CRM',
    tags: ['CRM Implementation', 'Enterprise', 'Data Migration'],
    image: '/images/photos/Laptop_CRM_dashboard.png',
    featured: true
  },
  {
    id: 'marketing-automation-roi',
    title: 'Measuring ROI of Marketing Automation Investments',
    excerpt: 'Discover effective methods to track and measure the return on investment from your marketing automation technology.',
    date: 'April 8, 2025',
    author: 'Chris Johnson',
    category: 'Marketing',
    tags: ['Marketing Automation', 'ROI', 'Analytics'],
    image: '/images/photos/Marketing_growth_success.jpg',
    featured: true
  },
  {
    id: 'system-integration-challenges',
    title: 'Overcoming Common System Integration Challenges',
    excerpt: 'Explore solutions to the most frequent challenges organizations face when integrating disparate systems and technologies.',
    date: 'March 30, 2025',
    author: 'Chris Johnson',
    category: 'Integration',
    tags: ['System Integration', 'API', 'Technology Stack'],
    image: '/images/photos/Table_with_laptops.png',
    featured: false
  },
  {
    id: 'sales-enablement-technologies',
    title: 'Top Sales Enablement Technologies for 2025',
    excerpt: 'Review of the most impactful technologies helping sales teams improve productivity and close more deals in 2025.',
    date: 'March 22, 2025',
    author: 'Jacquelin Johnson',
    category: 'Sales',
    tags: ['Sales Enablement', 'Technology', 'Productivity'],
    image: '/images/photos/Two_People_looking_at_screen1.png',
    featured: false
  },
  {
    id: 'data-migration-strategies',
    title: 'Effective Data Migration Strategies for System Transitions',
    excerpt: 'Learn proven approaches to ensuring smooth data migration when transitioning between critical business systems.',
    date: 'March 15, 2025',
    author: 'Chris Johnson',
    category: 'Integration',
    tags: ['Data Migration', 'System Transition', 'Data Quality'],
    image: '/images/photos/Static_tech_image.png',
    featured: false
  },
  {
    id: 'ai-crm-capabilities',
    title: 'How AI is Enhancing CRM Capabilities in 2025',
    excerpt: 'Explore the latest artificial intelligence features transforming customer relationship management platforms.',
    date: 'March 8, 2025',
    author: 'Jacquelin Johnson',
    category: 'CRM',
    tags: ['AI', 'CRM', 'Technology Trends'],
    image: '/images/photos/Abstract_laptop.png',
    featured: false
  },
  {
    id: 'seo-best-practices-2025',
    title: 'SEO Best Practices for Business Growth in 2025',
    excerpt: 'Discover the latest search engine optimization strategies that are driving organic traffic and business growth in 2025.',
    date: 'March 1, 2025',
    author: 'Chris Johnson',
    category: 'Marketing',
    tags: ['SEO', 'Digital Marketing', 'Organic Traffic'],
    image: '/images/photos/SEO_Services.png',
    featured: false
  },
  {
    id: 'email-marketing-automation-strategies',
    title: 'Advanced Email Marketing Automation Strategies',
    excerpt: 'Learn how to implement sophisticated email marketing automation workflows that nurture leads and drive conversions.',
    date: 'February 22, 2025',
    author: 'Jacquelin Johnson',
    category: 'Marketing',
    tags: ['Email Marketing', 'Automation', 'Lead Nurturing'],
    image: '/images/photos/MArketingAtuomationPlatforms.png',
    featured: false
  },
  {
    id: 'reputation-management-digital-age',
    title: 'Reputation Management in the Digital Age',
    excerpt: 'Explore effective strategies for managing and improving your business reputation online through automated monitoring and response systems.',
    date: 'February 15, 2025',
    author: 'Chris Johnson',
    category: 'Marketing',
    tags: ['Reputation Management', 'Online Reviews', 'Brand Image'],
    image: '/images/photos/StandOutFRomCompetition.png',
    featured: false
  },
  {
    id: 'lead-generation-techniques',
    title: 'Innovative Lead Generation Techniques for B2B Companies',
    excerpt: 'Discover cutting-edge approaches to generating high-quality leads for B2B companies using automation and AI-powered tools.',
    date: 'February 8, 2025',
    author: 'Jacquelin Johnson',
    category: 'Sales',
    tags: ['Lead Generation', 'B2B Marketing', 'Sales Automation'],
    image: '/images/photos/LeadGenService.png',
    featured: false
  },
  {
    id: 'website-conversion-optimization',
    title: 'Website Conversion Optimization: Turning Visitors into Customers',
    excerpt: 'Learn proven techniques to optimize your website for higher conversion rates and better user engagement.',
    date: 'February 1, 2025',
    author: 'Chris Johnson',
    category: 'Marketing',
    tags: ['Conversion Optimization', 'UX Design', 'Website Analytics'],
    image: '/images/photos/WebsiteConversion.png',
    featured: false
  },
  {
    id: 'gohighlevel-white-label-solutions',
    title: 'Maximizing Business Growth with White-Labeled GoHighLevel Solutions',
    excerpt: 'Explore how white-labeled GoHighLevel instances can help agencies scale their offerings and provide comprehensive marketing solutions to clients.',
    date: 'January 25, 2025',
    author: 'Jacquelin Johnson',
    category: 'CRM',
    tags: ['GoHighLevel', 'White Label', 'Agency Growth'],
    image: '/images/photos/ClientSuccessStories.png',
    featured: false
  }
];

// Category definitions for filtering
const categories = [
  { id: 'all', name: 'All Articles' },
  { id: 'crm', name: 'CRM' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'integration', name: 'Integration' },
  { id: 'sales', name: 'Sales' }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter blog posts based on selected category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || 
                            post.category.toLowerCase() === selectedCategory.toLowerCase();
    
    const matchesSearch = searchQuery === '' || 
                         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <PageLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-navy to-primary-blue py-20 md:py-28">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Technology Alliance Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Expert insights, best practices, and thought leadership on CRM, marketing automation, and technology integration.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl mx-auto mt-8 mb-4"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-3 pr-12 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                />
                <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <AnimatedSection className="py-16 bg-white dark:bg-primary-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-primary-navy dark:text-white mb-4"
              >
                Featured Articles
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                Our most important and relevant content selected by our technology experts
              </motion.p>
            </div>

            {/* Featured Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-primary-slate/40 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-64 w-full">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay with category */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-blue/90 text-white text-sm px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-primary-slate dark:text-white/80 mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta information */}
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center mr-4">
                        <FaCalendarAlt className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <FaUser className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <Link href={`/blog/${post.id}`}>
                      <span className="text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center">
                        Read full article
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* All Articles Section */}
        <AnimatedSection className="py-16 bg-primary-light dark:bg-primary-slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-primary-navy dark:text-white mb-4"
              >
                All Articles
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                Browse our complete library of technology insights and best practices
              </motion.p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-blue text-white shadow-md'
                      : 'bg-gray-100 dark:bg-primary-slate/60 text-primary-navy dark:text-white/80 hover:bg-gray-200 dark:hover:bg-primary-slate'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Article Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-primary-navy/50 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 flex flex-col h-full"
                  >
                    {/* Image */}
                    <div className="relative h-48 w-full">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Overlay with category */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-blue/90 text-white text-xs px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-primary-slate dark:text-white/80 mb-4 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta information */}
                      <div className="flex flex-wrap text-xs text-gray-500 dark:text-gray-400 mt-auto">
                        <div className="flex items-center mr-3 mb-2">
                          <FaCalendarAlt className="mr-1 text-xs" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <FaUser className="mr-1 text-xs" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      
                      <Link href={`/blog/${post.id}`} className="mt-3">
                        <span className="text-primary-blue hover:text-primary-blue/80 text-sm font-medium inline-flex items-center">
                          Read more
                          <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              // No results message
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-2">No Articles Found</h3>
                <p className="text-primary-slate dark:text-white/80">
                  Try adjusting your search criteria or browse a different category.
                </p>
                <button 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('all');}}
                  className="mt-4 text-primary-blue hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Newsletter Section */}
        <AnimatedSection className="py-16 bg-white dark:bg-primary-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary-blue/10 to-blue-400/10 dark:from-primary-blue/20 dark:to-blue-500/20 rounded-xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold text-primary-navy dark:text-white mb-4"
                >
                  Subscribe to Our Technology Newsletter
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg text-primary-slate dark:text-white/80 mb-8"
                >
                  Get the latest insights, tips, and technology updates delivered to your inbox monthly.
                </motion.p>
                
                <motion.form
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    required
                  />
                  <AnimatedButton className="bg-primary-blue text-white hover:bg-primary-blue/90 border-none shadow-md whitespace-nowrap">
                    Subscribe Now
                  </AnimatedButton>
                </motion.form>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-4 text-sm text-primary-slate/80 dark:text-white/60"
                >
                  By subscribing, you agree to our Privacy Policy and consent to receive technology-related updates.
                </motion.p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-16 bg-primary-light dark:bg-primary-slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary-blue to-blue-600 rounded-xl overflow-hidden shadow-lg">
              <div className="px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-4"
                >
                  Ready to Transform Your Business?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg text-white/90 mb-8 max-w-3xl mx-auto"
                >
                  Let our technology experts help you implement, integrate, and optimize your business systems for maximum impact.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link href="/contact">
                    <AnimatedButton className="bg-white text-primary-blue hover:bg-white/90 border-transparent">
                      Schedule Your Consultation
                    </AnimatedButton>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
