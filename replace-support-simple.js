const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://gagquszfpxzkjwcvgcss.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhZ3F1c3pmcHh6a2p3Y3ZnY3NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNTk4MTEsImV4cCI6MjA2MjczNTgxMX0.tcu93JGjM5dkTWmUZnBBRw8a8xZvaETFFw1lXvYxWj8'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function simpleReplace() {
  console.log('Step 1: Getting existing articles to delete...')
  
  // Get existing articles
  const { data: existingArticles, error: getError } = await supabase
    .from('support_articles')
    .select('id, title')
  
  if (getError) {
    console.error('Error getting existing articles:', getError)
    return
  }
  
  console.log(`Found ${existingArticles.length} existing articles`)
  
  // Delete each one individually
  console.log('Step 2: Deleting existing articles...')
  for (const article of existingArticles) {
    const { error: deleteError } = await supabase
      .from('support_articles')
      .delete()
      .eq('id', article.id)
    
    if (deleteError) {
      console.error(`Error deleting ${article.title}:`, deleteError)
    } else {
      console.log(`✓ Deleted: ${article.title}`)
    }
  }
  
  console.log('Step 3: Adding website static articles...')
  
  // Static support articles from website matching only existing database schema
  const websiteArticles = [
    {
      title: 'Getting Started with CRM Implementation',
      slug: 'getting-started-crm-implementation',
      excerpt: 'A comprehensive guide to planning and executing your first CRM implementation project.',
      content: 'Planning and executing your first CRM implementation requires careful consideration and strategic planning. Learn essential steps for successful deployment including goal definition, process assessment, data migration strategies, user training, and best practices to avoid common pitfalls.',
      category: 'CRM',
      type: 'article',
      status: 'published',
      tags: '["CRM", "Implementation", "Getting Started"]',
      read_time: 8,
      published_at: '2025-01-20T00:00:00Z',
      seo_title: 'CRM Implementation Guide - Getting Started | Technology Alliance Solutions',
      seo_description: 'Complete guide to planning and executing your first CRM implementation project. Learn best practices, avoid common pitfalls, and ensure success.',
      seo_keywords: 'CRM implementation, CRM planning, business process, data migration'
    },
    {
      title: 'Marketing Automation Best Practices',
      slug: 'marketing-automation-best-practices',
      excerpt: 'Learn how to optimize your marketing automation workflows for maximum efficiency and ROI.',
      content: 'Marketing automation transforms marketing efforts when implemented correctly. This guide covers proven strategies including lead scoring systems, segmentation strategy, email campaign optimization, trigger-based automation, performance monitoring, CRM synchronization, and advanced personalization techniques.',
      category: 'Marketing',
      type: 'article',
      status: 'published',
      tags: '["Marketing Automation", "Best Practices", "Workflows"]',
      read_time: 12,
      published_at: '2025-01-18T00:00:00Z',
      seo_title: 'Marketing Automation Best Practices Guide | TAS',
      seo_description: 'Optimize your marketing automation workflows for maximum ROI. Learn lead scoring, segmentation, and campaign optimization strategies.',
      seo_keywords: 'marketing automation, lead scoring, email campaigns, workflow optimization'
    },
    {
      title: 'Data Migration Strategies and Tips',
      slug: 'data-migration-strategies',
      excerpt: 'Essential strategies for successful data migration during system implementations.',
      content: 'Data migration is critical for system implementation success. Learn comprehensive strategies including pre-migration planning, data assessment, migration approach selection, data quality management, technical implementation phases, testing and validation procedures, risk mitigation, and post-migration activities.',
      category: 'Data Management',
      type: 'article',
      status: 'published',
      tags: '["Data Migration", "Implementation", "Planning"]',
      read_time: 15,
      published_at: '2025-01-15T00:00:00Z',
      seo_title: 'Data Migration Strategies Guide | Technology Alliance Solutions',
      seo_description: 'Essential strategies for successful data migration during system implementations. Learn planning, testing, and risk mitigation techniques.',
      seo_keywords: 'data migration, system implementation, data quality, migration strategy'
    },
    {
      title: 'User Adoption Techniques for New Systems',
      slug: 'user-adoption-techniques',
      excerpt: 'Proven methods to increase user adoption and reduce resistance to new technology.',
      content: 'User adoption determines technology project success. Learn proven strategies including understanding resistance sources, stakeholder engagement, executive sponsorship, change champion programs, comprehensive training design, support systems, phased rollout approaches, and measurement techniques for long-term sustainability.',
      category: 'Change Management',
      type: 'article',
      status: 'published',
      tags: '["User Adoption", "Change Management", "Training"]',
      read_time: 10,
      published_at: '2025-01-12T00:00:00Z',
      seo_title: 'User Adoption Strategies for New Systems | TAS',
      seo_description: 'Proven techniques to increase user adoption and reduce resistance to new technology. Learn change management and training best practices.',
      seo_keywords: 'user adoption, change management, technology training, system implementation'
    },
    {
      title: 'Security Best Practices for Business Systems',
      slug: 'security-best-practices',
      excerpt: 'Essential security measures to protect your business data and systems.',
      content: 'Business system security is critical. Implement comprehensive security including defense in depth principles, identity and access management, privileged access controls, data protection through encryption and classification, infrastructure security, application security, cloud security measures, compliance governance, and incident response procedures.',
      category: 'Security',
      type: 'article',
      status: 'published',
      tags: '["Security", "Data Protection", "Best Practices"]',
      read_time: 6,
      published_at: '2025-01-10T00:00:00Z',
      seo_title: 'Business System Security Best Practices | TAS',
      seo_description: 'Essential security measures to protect your business data and systems. Learn about access management, data protection, and compliance.',
      seo_keywords: 'business security, data protection, access management, security best practices'
    },
    {
      title: 'Integration Troubleshooting Guide',
      slug: 'integration-troubleshooting',
      excerpt: 'Common integration issues and step-by-step solutions to resolve them.',
      content: 'System integration troubleshooting requires systematic approaches. Learn diagnostic methodology, authentication and authorization problem resolution, data synchronization issue fixes, API and web service troubleshooting, network connectivity solutions, advanced techniques, monitoring tools, and prevention strategies.',
      category: 'Integration',
      type: 'article',
      status: 'published',
      tags: '["Integration", "Troubleshooting", "Technical Support"]',
      read_time: 20,
      published_at: '2025-01-08T00:00:00Z',
      seo_title: 'Integration Troubleshooting Guide | Technology Alliance Solutions',
      seo_description: 'Step-by-step guide to diagnosing and resolving common system integration issues. Learn troubleshooting methodologies and best practices.',
      seo_keywords: 'integration troubleshooting, system integration, API issues, technical support'
    }
  ]
  
  // Insert new articles
  for (const article of websiteArticles) {
    console.log(`Adding: ${article.title}`)
    
    try {
      const { data, error } = await supabase
        .from('support_articles')
        .insert([article])
        .select()
      
      if (error) {
        console.error(`Error adding "${article.title}":`, error)
      } else {
        console.log(`✓ Added: ${article.title}`)
      }
    } catch (err) {
      console.error(`Exception adding "${article.title}":`, err)
    }
  }
  
  console.log('\nStep 4: Verification...')
  
  // Check final count
  const { data: finalData, error: finalError } = await supabase
    .from('support_articles')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (finalError) {
    console.error('Error checking final count:', finalError)
  } else {
    console.log(`Total support articles now in database: ${finalData.length}`)
    console.log('Published articles:', finalData.filter(a => a.status === 'published').length)
    
    console.log('\nFinal articles in database:')
    finalData.forEach((article, index) => {
      console.log(`${index + 1}. ${article.title} (${article.category})`)
    })
  }
}

simpleReplace().then(() => {
  console.log('\n✅ Support articles replacement completed successfully!')
  process.exit(0)
}).catch(err => {
  console.error('❌ Replacement failed:', err)
  process.exit(1)
})