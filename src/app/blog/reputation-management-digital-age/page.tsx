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
    id: 'reputation-management-digital-age',
    title: 'Reputation Management in the Digital Age',
    date: 'February 15, 2025',
    author: 'Chris Johnson',
    category: 'Marketing',
    tags: ['Reputation Management', 'Online Reviews', 'Brand Image'],
    image: '/images/photos/StandOutFRomCompetition.png',
    content: `
      <p class="mb-4">In today&apos;s hyperconnected world, a company&apos;s reputation can be made or broken in a matter of hours. With consumers increasingly turning to online reviews, social media, and search engines to inform their purchasing decisions, effective reputation management has become a critical component of business success. This article explores how businesses can leverage automation and strategic approaches to protect and enhance their online reputation in the digital age.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">The Evolution of Reputation Management</h2>
      
      <p class="mb-4">Reputation management has transformed dramatically in recent years. What was once primarily concerned with traditional public relations and damage control now encompasses:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Proactive monitoring across dozens of online platforms and review sites</li>
        <li>Real-time response to customer feedback and mentions</li>
        <li>Strategic content creation to shape brand perception</li>
        <li>Search engine optimization to influence what appears when people search for your brand</li>
        <li>Social listening to identify emerging issues before they escalate</li>
      </ul>
      
      <p class="mb-4">This evolution has been driven by the increasing transparency of the digital world and the growing power of consumer voices in shaping brand narratives.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Automated Review Monitoring and Response</h2>
      
      <p class="mb-4">One of the most significant advancements in reputation management is the ability to automate the monitoring and initial response to online reviews. Modern reputation management systems can:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Monitor reviews across Google, Yelp, Facebook, industry-specific sites, and app stores</li>
        <li>Alert appropriate team members when new reviews are posted</li>
        <li>Analyze sentiment and categorize feedback for appropriate routing</li>
        <li>Generate AI-assisted response templates that can be quickly personalized</li>
        <li>Track response times and ensure no review goes unanswered</li>
      </ul>
      
      <p class="mb-4">This automation ensures that businesses can maintain a consistent presence across all review platforms without overwhelming their customer service teams. Research shows that responding to 45% of reviews can increase engagement by up to 30%.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Social Media Sentiment Analysis</h2>
      
      <p class="mb-4">Beyond formal reviews, consumers frequently discuss brands on social media platforms. Advanced reputation management now includes sentiment analysis tools that:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Monitor brand mentions across major social platforms in real-time</li>
        <li>Analyze the emotional tone of conversations about your brand</li>
        <li>Identify emerging trends or potential crisis situations</li>
        <li>Track sentiment changes over time to measure reputation improvement</li>
        <li>Compare sentiment against competitors for benchmarking</li>
      </ul>
      
      <p class="mb-4">These insights allow businesses to understand how their brand is perceived emotionally and to identify specific areas where reputation enhancement efforts should be focused.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Proactive Review Generation</h2>
      
      <p class="mb-4">The most effective reputation management strategies don&apos;t just respond to existing reviews—they actively generate positive reviews through automated systems that:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Identify satisfied customers through transaction data or NPS surveys</li>
        <li>Send timely, personalized review requests through email or SMS</li>
        <li>Make the review process as frictionless as possible with direct links</li>
        <li>Follow up with customers who haven&apos;t left reviews after initial requests</li>
        <li>Thank customers who provide feedback, regardless of sentiment</li>
      </ul>
      
      <p class="mb-4">Businesses implementing automated review generation systems typically see a 300% increase in review volume, which not only improves overall ratings but also enhances SEO and provides valuable customer insights.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Crisis Management Protocols</h2>
      
      <p class="mb-4">Even with the best preventative measures, reputation crises can still occur. Modern reputation management includes automated crisis detection and response systems that:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Detect unusual spikes in negative mentions or reviews</li>
        <li>Immediately alert designated crisis team members</li>
        <li>Activate pre-approved response protocols based on crisis type</li>
        <li>Provide real-time dashboards to track crisis evolution</li>
        <li>Analyze post-crisis data to prevent similar situations in the future</li>
      </ul>
      
      <p class="mb-4">These systems ensure that businesses can respond quickly and consistently to reputation threats, minimizing potential damage and demonstrating responsiveness to stakeholders.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Search Results Management</h2>
      
      <p class="mb-4">What appears when someone searches for your brand name has enormous impact on your reputation. Advanced reputation management includes search result optimization strategies that:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Create and optimize owned properties that rank for brand searches</li>
        <li>Develop positive content that can outrank potential negative mentions</li>
        <li>Monitor search results for emerging negative content</li>
        <li>Leverage schema markup to enhance how brand information appears in search</li>
        <li>Address legitimate negative content through appropriate legal or outreach channels</li>
      </ul>
      
      <p class="mb-4">By proactively managing search results, businesses can ensure that the first impression potential customers receive accurately reflects their brand values and strengths.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Employee Advocacy Programs</h2>
      
      <p class="mb-4">Employees can be powerful advocates for your brand&apos;s reputation. Modern reputation management includes employee advocacy platforms that:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Make it easy for employees to share approved brand content</li>
        <li>Provide guidelines and training on representing the brand online</li>
        <li>Gamify advocacy with recognition and rewards for participation</li>
        <li>Track the impact of employee advocacy on overall brand sentiment</li>
        <li>Ensure compliance with disclosure requirements and company policies</li>
      </ul>
      
      <p class="mb-4">Employee advocacy not only extends your brand reach but also builds credibility, as people trust content shared by individuals more than content shared directly by brands.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Reputation Analytics and Reporting</h2>
      
      <p class="mb-4">Measuring reputation management effectiveness is essential for continuous improvement. Comprehensive analytics platforms now provide:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Unified dashboards that aggregate data from multiple reputation sources</li>
        <li>Trend analysis to track reputation changes over time</li>
        <li>Competitive benchmarking against industry peers</li>
        <li>Attribution modeling to connect reputation improvements to business outcomes</li>
        <li>Predictive analytics to identify potential future reputation issues</li>
      </ul>
      
      <p class="mb-4">These analytics capabilities allow businesses to demonstrate ROI from reputation management efforts and continuously refine their strategies based on data.</p>
      
      <h2 class="text-2xl font-bold text-primary-navy dark:text-white mt-8 mb-4">Conclusion</h2>
      
      <p class="mb-4">In the digital age, reputation management has evolved from a reactive necessity to a proactive strategic advantage. By implementing automated monitoring, response systems, and strategic content creation, businesses can not only protect their reputation but actively shape how they&apos;re perceived online.</p>
      
      <p class="mb-4">The most successful organizations recognize that reputation is not just about damage control—it&apos;s about consistently delivering on brand promises and effectively communicating those successes. With the right tools and strategies, businesses can turn their online reputation into a powerful competitive differentiator that drives customer trust and business growth.</p>
      
      <p class="mb-4">At REV-ANEW, we help businesses implement comprehensive reputation management systems that protect and enhance their brand image. Contact us to learn how we can help you take control of your online reputation.</p>
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
                {post.author} is the Director of Digital Strategy at REV-ANEW with specialized expertise in online reputation management and brand protection for businesses of all sizes.
              </p>
            </div>
            
            {/* Call to action */}
            <div className="mt-12 bg-gradient-to-r from-primary-blue/10 to-blue-400/10 dark:from-primary-blue/20 dark:to-blue-500/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-4">Take control of your online reputation</h3>
              <p className="text-primary-slate dark:text-white/80 mb-6">
                Our reputation management experts can help you implement automated monitoring systems and develop strategies to protect and enhance your brand&apos;s online presence.
              </p>
              <Link href="/contact">
                <AnimatedButton className="bg-primary-blue text-white hover:bg-primary-blue/90 border-none">
                  Get a Reputation Analysis
                </AnimatedButton>
              </Link>
            </div>
            
            {/* Related posts */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/seo-best-practices-2025" className="group">
                  <div className="bg-white dark:bg-primary-slate/30 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-primary-navy dark:text-white group-hover:text-primary-blue dark:group-hover:text-primary-blue/80 transition-colors">
                        SEO Best Practices for Business Growth in 2025
                      </h4>
                      <p className="text-primary-slate dark:text-white/70 mt-2 text-sm">
                        Discover the latest search engine optimization strategies that are driving organic traffic and business growth in 2025.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/social-media-management" className="group">
                  <div className="bg-white dark:bg-primary-slate/30 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-primary-navy dark:text-white group-hover:text-primary-blue dark:group-hover:text-primary-blue/80 transition-colors">
                        Innovative Lead Generation Techniques for B2B Companies
                      </h4>
                      <p className="text-primary-slate dark:text-white/70 mt-2 text-sm">
                        Discover cutting-edge approaches to generating high-quality leads for B2B companies using automation and AI-powered tools.
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
