const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Static article content from the website
const articlesContent = [
  {
    slug: 'getting-started-crm-implementation',
    title: 'Getting Started with CRM Implementation',
    category: 'setup',
    excerpt: 'A comprehensive guide to planning and executing your first CRM implementation project.',
    content: `<h2>Introduction</h2>
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
<p>CRM implementation is a journey, not a destination. Success requires careful planning, strong leadership support, and ongoing commitment to optimization. By following these guidelines, you'll be well on your way to a successful CRM implementation that drives real business value.</p>`,
    type: 'article',
    difficulty: 'beginner',
    tags: ['CRM', 'Implementation', 'Getting Started'],
    read_time: '8 min read',
    status: 'published',
    seo_title: 'Getting Started with CRM Implementation - Complete Guide',
    seo_description: 'Learn how to successfully implement a CRM system with this comprehensive guide covering planning, migration, configuration, and best practices.',
    seo_keywords: 'CRM implementation, customer relationship management, CRM setup, data migration, user adoption'
  },
  {
    slug: 'marketing-automation-best-practices',
    title: 'Marketing Automation Best Practices',
    category: 'best-practices',
    excerpt: 'Optimize your marketing automation workflows for maximum efficiency and ROI with these proven best practices.',
    content: `<h2>Introduction to Marketing Automation</h2>
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
<p>Marketing automation is a powerful tool when used correctly. By following these best practices, you can create more effective campaigns, improve customer engagement, and drive better business results.</p>`,
    type: 'article',
    difficulty: 'intermediate',
    tags: ['Marketing Automation', 'Best Practices', 'Workflows'],
    read_time: '12 min read',
    status: 'published',
    seo_title: 'Marketing Automation Best Practices - Complete Guide',
    seo_description: 'Master marketing automation with proven best practices for audience segmentation, personalization, workflow design, and optimization.',
    seo_keywords: 'marketing automation, best practices, email marketing, lead nurturing, workflow optimization'
  },
  {
    slug: 'data-migration-strategies',
    title: 'Data Migration Strategies and Tips',
    category: 'integration',
    excerpt: 'Essential strategies for successful data migration during your technology transitions.',
    content: `<h2>Understanding Data Migration</h2>
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
<p>Successful data migration requires careful planning, thorough testing, and attention to detail. By following these strategies, you can minimize risks and ensure a smooth transition to your new system.</p>`,
    type: 'article',
    difficulty: 'advanced',
    tags: ['Data Migration', 'Implementation', 'Planning'],
    read_time: '15 min read',
    status: 'published',
    seo_title: 'Data Migration Strategies - Complete Guide',
    seo_description: 'Learn proven data migration strategies including planning, cleansing, testing, and risk management for successful system transitions.',
    seo_keywords: 'data migration, data cleansing, migration strategies, system implementation, data quality'
  },
  {
    slug: 'user-adoption-techniques',
    title: 'User Adoption Techniques for New Systems',
    category: 'best-practices',
    excerpt: 'Proven methods to increase user adoption and reduce resistance to new systems.',
    content: `<h2>The Challenge of User Adoption</h2>
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
<p>User adoption is critical to realizing the value of new technology investments. By following these techniques, you can increase adoption rates and ensure your team embraces new systems effectively.</p>`,
    type: 'article',
    difficulty: 'intermediate',
    tags: ['User Adoption', 'Change Management', 'Training'],
    read_time: '10 min read',
    status: 'published',
    seo_title: 'User Adoption Techniques - Complete Guide',
    seo_description: 'Increase user adoption rates with proven techniques for change management, training, and overcoming resistance to new systems.',
    seo_keywords: 'user adoption, change management, system implementation, user training, technology adoption'
  },
  {
    slug: 'security-best-practices',
    title: 'Security Best Practices for Business Systems',
    category: 'security',
    excerpt: 'Essential security measures to protect your business data and systems in today\'s digital landscape.',
    content: `<h2>Protecting Your Business Data</h2>
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
<p>Security is an ongoing process, not a one-time implementation. By following these best practices, you can significantly reduce your risk and protect your valuable business data.</p>`,
    type: 'article',
    difficulty: 'intermediate',
    tags: ['Security', 'Data Protection', 'Best Practices'],
    read_time: '6 min read',
    status: 'published',
    seo_title: 'Security Best Practices for Business Systems',
    seo_description: 'Protect your business with essential security best practices including access control, encryption, updates, and incident response planning.',
    seo_keywords: 'business security, data protection, cybersecurity, access control, security best practices'
  },
  {
    slug: 'integration-troubleshooting',
    title: 'Integration Troubleshooting Guide',
    category: 'troubleshooting',
    excerpt: 'Comprehensive guide to troubleshoot common integration issues with step-by-step solutions.',
    content: `<h2>Common Integration Challenges</h2>
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
<p>Integration troubleshooting requires patience and systematic approach. By following this guide, you can quickly identify and resolve common integration issues, ensuring smooth data flow between your systems.</p>`,
    type: 'article',
    difficulty: 'advanced',
    tags: ['Integration', 'Troubleshooting', 'Technical Support'],
    read_time: '20 min read',
    status: 'published',
    seo_title: 'Integration Troubleshooting Guide - Complete Solutions',
    seo_description: 'Comprehensive guide to troubleshooting integration issues including connection problems, data sync errors, and performance optimization.',
    seo_keywords: 'integration troubleshooting, system integration, API issues, data sync, technical support'
  }
];

async function migrateArticles() {
  console.log('Starting support articles migration...');

  for (const article of articlesContent) {
    try {
      console.log(`Migrating: ${article.title}`);

      // Check if article already exists
      const { data: existing } = await supabase
        .from('support_articles')
        .select('id')
        .eq('slug', article.slug)
        .single();

      if (existing) {
        console.log(`Article ${article.slug} already exists, updating...`);
        
        const { error: updateError } = await supabase
          .from('support_articles')
          .update({
            title: article.title,
            excerpt: article.excerpt,
            content: article.content,
            category: article.category,
            type: article.type,
            difficulty: article.difficulty,
            tags: article.tags,
            read_time: article.read_time,
            status: article.status,
            published_at: new Date().toISOString(),
            seo_title: article.seo_title,
            seo_description: article.seo_description,
            seo_keywords: article.seo_keywords,
            updated_at: new Date().toISOString()
          })
          .eq('slug', article.slug);

        if (updateError) {
          console.error(`Error updating ${article.slug}:`, updateError);
        } else {
          console.log(`✓ Updated: ${article.title}`);
        }
      } else {
        console.log(`Article ${article.slug} doesn't exist, creating...`);
        
        const { error: insertError } = await supabase
          .from('support_articles')
          .insert({
            slug: article.slug,
            title: article.title,
            excerpt: article.excerpt,
            content: article.content,
            category: article.category,
            type: article.type,
            difficulty: article.difficulty,
            tags: article.tags,
            read_time: article.read_time,
            status: article.status,
            published_at: new Date().toISOString(),
            seo_title: article.seo_title,
            seo_description: article.seo_description,
            seo_keywords: article.seo_keywords,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          });

        if (insertError) {
          console.error(`Error inserting ${article.slug}:`, insertError);
        } else {
          console.log(`✓ Created: ${article.title}`);
        }
      }
    } catch (error) {
      console.error(`Error processing ${article.title}:`, error);
    }
  }

  console.log('Migration completed!');
}

migrateArticles();