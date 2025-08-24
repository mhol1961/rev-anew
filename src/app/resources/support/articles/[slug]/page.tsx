import { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import { notFound } from 'next/navigation';

interface ArticleContent {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  lastUpdated: string;
  tags: string[];
  content: string;
}

// Static article content (will be replaced with CMS eventually)
const articlesContent: ArticleContent[] = [
  {
    slug: 'getting-started-crm-implementation',
    title: 'Getting Started with CRM Implementation',
    category: 'CRM',
    readTime: '8 min',
    lastUpdated: '2025-01-20',
    tags: ['CRM', 'Implementation', 'Getting Started'],
    content: `
      <h2>Introduction</h2>
      <p>Implementing a CRM system is a transformative step for any business. This comprehensive guide will walk you through the essential steps of planning and executing your first CRM implementation project.</p>
      
      <h2>1. Define Your Objectives</h2>
      <p>Before diving into CRM implementation, it's crucial to clearly define what you want to achieve. Common objectives include:</p>
      <ul>
        <li>Improving customer relationship management</li>
        <li>Streamlining sales processes</li>
        <li>Enhancing customer service</li>
        <li>Centralizing customer data</li>
        <li>Automating marketing campaigns</li>
      </ul>
      
      <h2>2. Choose the Right CRM Platform</h2>
      <p>Selecting the appropriate CRM platform is critical to your success. Consider factors such as:</p>
      <ul>
        <li>Business size and scalability needs</li>
        <li>Industry-specific requirements</li>
        <li>Integration capabilities with existing systems</li>
        <li>Budget constraints</li>
        <li>User-friendliness and adoption potential</li>
      </ul>
      
      <h2>3. Plan Your Data Migration</h2>
      <p>Data migration is one of the most critical aspects of CRM implementation. Follow these steps:</p>
      <ul>
        <li>Audit your existing data sources</li>
        <li>Clean and standardize data formats</li>
        <li>Map data fields to the new CRM structure</li>
        <li>Test migration with a small dataset first</li>
        <li>Create backup plans for data recovery</li>
      </ul>
      
      <h2>4. Customize and Configure</h2>
      <p>Tailor the CRM to meet your specific business needs:</p>
      <ul>
        <li>Configure user roles and permissions</li>
        <li>Set up custom fields and workflows</li>
        <li>Create templates for common processes</li>
        <li>Establish automation rules</li>
        <li>Design custom reports and dashboards</li>
      </ul>
      
      <h2>5. Train Your Team</h2>
      <p>User adoption is key to CRM success. Implement a comprehensive training program:</p>
      <ul>
        <li>Conduct role-based training sessions</li>
        <li>Create user documentation and guides</li>
        <li>Establish a support system for questions</li>
        <li>Identify and train super users</li>
        <li>Provide ongoing training opportunities</li>
      </ul>
      
      <h2>6. Launch and Monitor</h2>
      <p>A successful launch requires careful planning and monitoring:</p>
      <ul>
        <li>Start with a pilot group or department</li>
        <li>Gather feedback and make adjustments</li>
        <li>Roll out to the entire organization</li>
        <li>Monitor adoption rates and usage</li>
        <li>Continuously optimize based on feedback</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>CRM implementation is a journey, not a destination. Success requires careful planning, strong leadership support, and ongoing commitment to optimization. By following these guidelines, you'll be well on your way to a successful CRM implementation that drives real business value.</p>
    `
  },
  {
    slug: 'marketing-automation-best-practices',
    title: 'Marketing Automation Best Practices',
    category: 'Marketing',
    readTime: '12 min',
    lastUpdated: '2025-01-18',
    tags: ['Marketing Automation', 'Best Practices', 'Workflows'],
    content: `
      <h2>Introduction to Marketing Automation</h2>
      <p>Marketing automation has revolutionized how businesses engage with their customers. This guide covers the best practices to help you optimize your marketing automation workflows for maximum efficiency and ROI.</p>
      
      <h2>1. Start with Clear Goals</h2>
      <p>Define specific, measurable objectives for your marketing automation:</p>
      <ul>
        <li>Lead generation targets</li>
        <li>Conversion rate improvements</li>
        <li>Customer retention goals</li>
        <li>Revenue attribution metrics</li>
      </ul>
      
      <h2>2. Segment Your Audience</h2>
      <p>Effective segmentation is the foundation of successful marketing automation:</p>
      <ul>
        <li>Demographic segmentation</li>
        <li>Behavioral segmentation</li>
        <li>Engagement-based segmentation</li>
        <li>Purchase history segmentation</li>
        <li>Lead scoring and grading</li>
      </ul>
      
      <h2>3. Create Personalized Content</h2>
      <p>Personalization drives engagement and conversions:</p>
      <ul>
        <li>Dynamic content based on user preferences</li>
        <li>Personalized email subject lines</li>
        <li>Customized landing pages</li>
        <li>Behavior-triggered content recommendations</li>
      </ul>
      
      <h2>4. Design Effective Workflows</h2>
      <p>Build workflows that guide prospects through the buyer's journey:</p>
      <ul>
        <li>Welcome series for new subscribers</li>
        <li>Lead nurturing campaigns</li>
        <li>Re-engagement workflows</li>
        <li>Post-purchase follow-ups</li>
        <li>Abandoned cart recovery</li>
      </ul>
      
      <h2>5. Test and Optimize</h2>
      <p>Continuous improvement is key to marketing automation success:</p>
      <ul>
        <li>A/B test email subject lines and content</li>
        <li>Optimize send times and frequency</li>
        <li>Test different CTAs and landing pages</li>
        <li>Monitor and adjust lead scoring models</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Marketing automation is a powerful tool when used correctly. By following these best practices, you can create more effective campaigns, improve customer engagement, and drive better business results.</p>
    `
  },
  {
    slug: 'data-migration-strategies',
    title: 'Data Migration Strategies and Tips',
    category: 'Data Management',
    readTime: '15 min',
    lastUpdated: '2025-01-15',
    tags: ['Data Migration', 'Implementation', 'Planning'],
    content: `
      <h2>Understanding Data Migration</h2>
      <p>Data migration is a critical component of any system implementation. This guide provides essential strategies for successful data migration during your technology transitions.</p>
      
      <h2>1. Assessment and Planning</h2>
      <p>Thorough planning is essential for successful data migration:</p>
      <ul>
        <li>Inventory all data sources</li>
        <li>Assess data quality and completeness</li>
        <li>Identify data dependencies</li>
        <li>Define migration scope and timeline</li>
        <li>Establish success metrics</li>
      </ul>
      
      <h2>2. Data Cleansing</h2>
      <p>Clean data is the foundation of successful migration:</p>
      <ul>
        <li>Remove duplicate records</li>
        <li>Standardize data formats</li>
        <li>Correct inconsistencies</li>
        <li>Fill in missing critical data</li>
        <li>Archive obsolete information</li>
      </ul>
      
      <h2>3. Migration Methods</h2>
      <p>Choose the right migration approach for your needs:</p>
      <ul>
        <li>Big Bang Migration: All at once</li>
        <li>Trickle Migration: Gradual transfer</li>
        <li>Hybrid Approach: Combination of both</li>
      </ul>
      
      <h2>4. Testing Strategy</h2>
      <p>Comprehensive testing ensures data integrity:</p>
      <ul>
        <li>Unit testing of individual data sets</li>
        <li>System integration testing</li>
        <li>User acceptance testing</li>
        <li>Performance testing</li>
        <li>Rollback testing</li>
      </ul>
      
      <h2>5. Risk Management</h2>
      <p>Identify and mitigate potential risks:</p>
      <ul>
        <li>Create comprehensive backups</li>
        <li>Develop rollback procedures</li>
        <li>Plan for downtime</li>
        <li>Establish data validation checkpoints</li>
        <li>Document all processes</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Successful data migration requires careful planning, thorough testing, and attention to detail. By following these strategies, you can minimize risks and ensure a smooth transition to your new system.</p>
    `
  },
  {
    slug: 'user-adoption-techniques',
    title: 'User Adoption Techniques for New Systems',
    category: 'Change Management',
    readTime: '10 min',
    lastUpdated: '2025-01-12',
    tags: ['User Adoption', 'Change Management', 'Training'],
    content: `
      <h2>The Challenge of User Adoption</h2>
      <p>Implementing new technology is only successful when users embrace it. This guide provides proven methods to increase user adoption and reduce resistance to new systems.</p>
      
      <h2>1. Involve Users Early</h2>
      <p>Early involvement creates buy-in and ownership:</p>
      <ul>
        <li>Include users in system selection</li>
        <li>Gather feedback during planning</li>
        <li>Create user advisory committees</li>
        <li>Identify and empower champions</li>
      </ul>
      
      <h2>2. Communicate the Why</h2>
      <p>Help users understand the benefits:</p>
      <ul>
        <li>Share the vision and goals</li>
        <li>Explain personal benefits</li>
        <li>Address concerns openly</li>
        <li>Celebrate early wins</li>
      </ul>
      
      <h2>3. Provide Comprehensive Training</h2>
      <p>Effective training accelerates adoption:</p>
      <ul>
        <li>Offer multiple training formats</li>
        <li>Create role-specific training paths</li>
        <li>Provide hands-on practice opportunities</li>
        <li>Develop quick reference guides</li>
        <li>Establish ongoing support channels</li>
      </ul>
      
      <h2>4. Make It Easy</h2>
      <p>Remove barriers to adoption:</p>
      <ul>
        <li>Simplify processes where possible</li>
        <li>Provide clear documentation</li>
        <li>Create intuitive workflows</li>
        <li>Offer templates and shortcuts</li>
        <li>Ensure mobile accessibility</li>
      </ul>
      
      <h2>5. Monitor and Support</h2>
      <p>Ongoing support ensures long-term success:</p>
      <ul>
        <li>Track adoption metrics</li>
        <li>Gather regular feedback</li>
        <li>Address issues quickly</li>
        <li>Recognize and reward adoption</li>
        <li>Continuously improve based on usage</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>User adoption is critical to realizing the value of new technology investments. By following these techniques, you can increase adoption rates and ensure your team embraces new systems effectively.</p>
    `
  },
  {
    slug: 'security-best-practices',
    title: 'Security Best Practices for Business Systems',
    category: 'Security',
    readTime: '6 min',
    lastUpdated: '2025-01-10',
    tags: ['Security', 'Data Protection', 'Best Practices'],
    content: `
      <h2>Protecting Your Business Data</h2>
      <p>In today's digital landscape, security is paramount. This guide covers essential security measures to protect your business data and systems.</p>
      
      <h2>1. Access Control</h2>
      <p>Implement strong access control measures:</p>
      <ul>
        <li>Use role-based access control (RBAC)</li>
        <li>Implement multi-factor authentication</li>
        <li>Regular access reviews and audits</li>
        <li>Principle of least privilege</li>
        <li>Strong password policies</li>
      </ul>
      
      <h2>2. Data Encryption</h2>
      <p>Protect data at rest and in transit:</p>
      <ul>
        <li>Encrypt sensitive data storage</li>
        <li>Use SSL/TLS for data transmission</li>
        <li>Implement email encryption</li>
        <li>Secure backup encryption</li>
      </ul>
      
      <h2>3. Regular Updates and Patches</h2>
      <p>Keep systems current and protected:</p>
      <ul>
        <li>Automate security updates</li>
        <li>Regular vulnerability assessments</li>
        <li>Patch management procedures</li>
        <li>Third-party software updates</li>
      </ul>
      
      <h2>4. Employee Training</h2>
      <p>Your team is your first line of defense:</p>
      <ul>
        <li>Security awareness training</li>
        <li>Phishing simulation exercises</li>
        <li>Data handling procedures</li>
        <li>Incident reporting protocols</li>
      </ul>
      
      <h2>5. Incident Response Planning</h2>
      <p>Be prepared for security incidents:</p>
      <ul>
        <li>Develop incident response procedures</li>
        <li>Regular backup and recovery testing</li>
        <li>Business continuity planning</li>
        <li>Security incident documentation</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Security is an ongoing process, not a one-time implementation. By following these best practices, you can significantly reduce your risk and protect your valuable business data.</p>
    `
  },
  {
    slug: 'integration-troubleshooting',
    title: 'Integration Troubleshooting Guide',
    category: 'Integration',
    readTime: '20 min',
    lastUpdated: '2025-01-08',
    tags: ['Integration', 'Troubleshooting', 'Technical Support'],
    content: `
      <h2>Common Integration Challenges</h2>
      <p>System integration can be complex. This comprehensive guide helps you troubleshoot common integration issues and provides step-by-step solutions.</p>
      
      <h2>1. Connection Issues</h2>
      <p>Troubleshooting connection problems:</p>
      <ul>
        <li>Verify API endpoints and credentials</li>
        <li>Check firewall and network settings</li>
        <li>Validate SSL certificates</li>
        <li>Test network connectivity</li>
        <li>Review authentication methods</li>
      </ul>
      
      <h2>2. Data Sync Errors</h2>
      <p>Resolving data synchronization issues:</p>
      <ul>
        <li>Check field mapping configurations</li>
        <li>Validate data formats and types</li>
        <li>Review sync frequency settings</li>
        <li>Monitor API rate limits</li>
        <li>Verify data transformation rules</li>
      </ul>
      
      <h2>3. Performance Problems</h2>
      <p>Optimizing integration performance:</p>
      <ul>
        <li>Implement batch processing</li>
        <li>Optimize query performance</li>
        <li>Use caching strategies</li>
        <li>Monitor resource utilization</li>
        <li>Scale infrastructure as needed</li>
      </ul>
      
      <h2>4. Error Handling</h2>
      <p>Implementing robust error handling:</p>
      <ul>
        <li>Set up comprehensive logging</li>
        <li>Implement retry mechanisms</li>
        <li>Create error notification systems</li>
        <li>Develop fallback procedures</li>
        <li>Document error codes and solutions</li>
      </ul>
      
      <h2>5. Testing Strategies</h2>
      <p>Ensuring integration reliability:</p>
      <ul>
        <li>Unit testing individual components</li>
        <li>Integration testing workflows</li>
        <li>Load testing for performance</li>
        <li>End-to-end testing scenarios</li>
        <li>Monitoring and alerting setup</li>
      </ul>
      
      <h2>Troubleshooting Checklist</h2>
      <p>Follow this systematic approach:</p>
      <ol>
        <li>Identify the specific error or issue</li>
        <li>Check recent changes or updates</li>
        <li>Review system logs and error messages</li>
        <li>Test individual components</li>
        <li>Verify configurations and settings</li>
        <li>Check documentation and known issues</li>
        <li>Implement and test solutions</li>
        <li>Document the resolution</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Integration troubleshooting requires patience and systematic approach. By following this guide, you can quickly identify and resolve common integration issues, ensuring smooth data flow between your systems.</p>
    `
  }
];

export async function generateStaticParams() {
  return articlesContent.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articlesContent.find(a => a.slug === params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found | Technology Alliance Solutions',
      description: 'The requested article could not be found.',
    };
  }
  
  return {
    title: `${article.title} | Support Articles | Technology Alliance Solutions`,
    description: `${article.title} - ${article.category} article. Reading time: ${article.readTime}.`,
    keywords: article.tags.join(', '),
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesContent.find(a => a.slug === params.slug);
  
  if (!article) {
    notFound();
  }

  return (
    <PageLayout>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-gray-50 dark:bg-gray-800 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex text-sm">
              <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                Home
              </Link>
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
              <Link href="/resources" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                Resources
              </Link>
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
              <Link href="/resources/support/articles" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                Support Articles
              </Link>
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
              <span className="text-gray-900 dark:text-white">{article.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <div className="bg-gradient-to-r from-primary-blue to-blue-600 dark:from-blue-800 dark:to-blue-900 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
                  {article.category}
                </span>
                <span className="text-sm">•</span>
                <span className="text-sm">{article.readTime} read</span>
                <span className="text-sm">•</span>
                <span className="text-sm">Updated {new Date(article.lastUpdated).toLocaleDateString()}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
              <div className="flex flex-wrap gap-2 mt-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-md bg-white/10 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* CTA Section */}
            <div className="mt-16 p-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Need More Help?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                If you need additional assistance or have specific questions, our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary-blue hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors"
                >
                  Contact Support
                </Link>
                <Link
                  href="/resources/support/articles"
                  className="inline-flex items-center justify-center rounded-md border border-primary-blue dark:border-blue-600 text-primary-blue dark:text-blue-400 hover:bg-primary-blue hover:text-white dark:hover:bg-blue-600 dark:hover:text-white px-6 py-3 text-base font-medium transition-colors"
                >
                  Browse More Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}