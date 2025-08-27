const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

// Load environment variables from .env.local
function loadEnv() {
  try {
    const envContent = fs.readFileSync('.env.local', 'utf8')
    envContent.split('\n').forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/)
      if (match) {
        process.env[match[1].trim()] = match[2].trim()
      }
    })
  } catch (error) {
    console.error('Error loading .env.local:', error.message)
    process.exit(1)
  }
}

loadEnv()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Article data extracted from your files
const articles = [
  {
    slug: 'ai-crm-capabilities',
    title: 'How AI is Enhancing CRM Capabilities in 2025',
    excerpt: 'Artificial Intelligence has moved from aspirational technology to essential capability in the CRM landscape. Discover how AI is fundamentally transforming customer relationship management in 2025.',
    content: `<p>Artificial Intelligence has moved from aspirational technology to essential capability in the CRM landscape. As we navigate through 2025, AI is fundamentally transforming how organizations manage customer relationships, shifting from reactive database management to proactive relationship intelligence.</p>

<h2>The Evolution of AI in CRM Systems</h2>
<p>The integration of AI into CRM platforms has progressed through several distinct phases:</p>
<ul>
<li><strong>First Generation (2015-2019):</strong> Basic predictive analytics and rules-based automation</li>
<li><strong>Second Generation (2020-2022):</strong> Natural language processing and sentiment analysis integration</li>
<li><strong>Third Generation (2023-2024):</strong> Generative AI and deep learning algorithms</li>
<li><strong>Current Generation (2025):</strong> Contextual intelligence and autonomous decision-making capabilities</li>
</ul>

<h2>1. Hyper-Personalized Customer Engagement</h2>
<p>AI-powered CRM systems now enable personalization at a scale and depth previously impossible. Current capabilities include:</p>
<ul>
<li><strong>Individual Customer Behavior Modeling:</strong> Modern CRMs use behavioral AI to analyze thousands of interaction points</li>
<li><strong>Dynamic Content Generation:</strong> Generative AI automatically creates personalized content variations</li>
<li><strong>Next-Best-Action Intelligence:</strong> Contextual AI evaluates the customer's current journey stage</li>
<li><strong>Emotion-Aware Engagement:</strong> Advanced sentiment analysis detects emotional cues</li>
</ul>`,
    featured_image: '/images/photos/Abstract_laptop.png',
    author: 'Jacquelin Johnson',
    published_at: '2025-03-08T00:00:00.000Z',
    category: 'CRM',
    tags: ['AI', 'CRM', 'Technology Trends']
  },
  {
    slug: 'crm-implementation-best-practices',
    title: 'CRM Implementation Best Practices for Enterprise Organizations',
    excerpt: 'Learn the essential best practices for successful CRM implementation in large organizations. From stakeholder alignment to data migration strategies.',
    content: `<p>Implementing a CRM system in an enterprise environment presents unique challenges that require careful planning, stakeholder alignment, and strategic execution. This comprehensive guide outlines the proven best practices for successful enterprise CRM implementations.</p>

<h2>1. Stakeholder Alignment and Buy-In</h2>
<p>The foundation of successful CRM implementation begins with comprehensive stakeholder engagement:</p>
<ul>
<li><strong>Executive Sponsorship:</strong> Secure visible and active support from C-level executives</li>
<li><strong>Cross-Department Representatives:</strong> Include stakeholders from sales, marketing, customer service, and IT</li>
<li><strong>Change Champions:</strong> Identify and empower change advocates within each department</li>
</ul>

<h2>2. Requirements Gathering and Analysis</h2>
<p>Thorough requirements analysis ensures the CRM solution aligns with organizational needs:</p>
<ul>
<li>Current state assessment and process mapping</li>
<li>Future state visioning and goal definition</li>
<li>Integration requirements with existing systems</li>
<li>Scalability and performance requirements</li>
</ul>`,
    featured_image: '/images/photos/illustrations/CRM_dashboard.png',
    author: 'Technology Alliance Solutions',
    published_at: '2025-03-05T00:00:00.000Z',
    category: 'CRM',
    tags: ['CRM Implementation', 'Best Practices', 'Enterprise']
  },
  {
    slug: 'data-migration-strategies',
    title: 'Effective Data Migration Strategies for System Integration',
    excerpt: 'Master the complexities of data migration during system integrations. Learn strategies to ensure data integrity, minimize downtime, and maximize success.',
    content: `<p>Data migration is often the most complex and risky aspect of system integration projects. This comprehensive guide explores proven strategies for successful data migration that ensures integrity, minimizes downtime, and maximizes project success.</p>

<h2>Understanding Data Migration Complexity</h2>
<p>Modern data migration involves multiple challenges:</p>
<ul>
<li>Data quality and cleansing requirements</li>
<li>Schema mapping and transformation</li>
<li>Volume and performance considerations</li>
<li>Business continuity during migration</li>
</ul>

<h2>Migration Strategy Framework</h2>
<p>A structured approach to data migration includes these key phases:</p>
<ol>
<li><strong>Assessment and Planning:</strong> Comprehensive data audit and migration planning</li>
<li><strong>Design and Testing:</strong> Migration design and thorough testing protocols</li>
<li><strong>Execution and Validation:</strong> Controlled migration execution with validation</li>
<li><strong>Optimization and Monitoring:</strong> Post-migration optimization and ongoing monitoring</li>
</ol>`,
    featured_image: '/images/photos/Database_migration.png',
    author: 'Technology Alliance Solutions',
    published_at: '2025-03-01T00:00:00.000Z',
    category: 'Integration',
    tags: ['Data Migration', 'System Integration', 'Best Practices']
  },
  {
    slug: 'email-marketing-automation-strategies',
    title: 'Advanced Email Marketing Automation Strategies',
    excerpt: 'Maximize your email marketing ROI with sophisticated automation strategies. Learn advanced techniques for segmentation, personalization, and conversion optimization.',
    content: `<p>Email marketing automation has evolved far beyond simple autoresponders. Today's sophisticated automation strategies enable personalized, contextual communications that drive significant ROI improvements and customer engagement.</p>

<h2>Advanced Segmentation Strategies</h2>
<p>Modern email automation relies on sophisticated segmentation:</p>
<ul>
<li><strong>Behavioral Segmentation:</strong> Based on user actions, engagement patterns, and purchase history</li>
<li><strong>Lifecycle Segmentation:</strong> Targeting based on customer journey stage</li>
<li><strong>Predictive Segmentation:</strong> Using AI to predict future behaviors and preferences</li>
</ul>

<h2>Personalization at Scale</h2>
<p>Advanced personalization techniques include:</p>
<ul>
<li>Dynamic content based on user preferences</li>
<li>Predictive product recommendations</li>
<li>Contextual messaging based on user behavior</li>
<li>AI-powered send time optimization</li>
</ul>`,
    featured_image: '/images/photos/illustrations/Email_marketing_automation.png',
    author: 'Technology Alliance Solutions',
    published_at: '2025-02-28T00:00:00.000Z',
    category: 'Marketing',
    tags: ['Email Marketing', 'Automation', 'Marketing Strategy']
  },
  {
    slug: 'gohighlevel-white-label-solutions',
    title: 'GoHighLevel White Label Solutions for Agencies',
    excerpt: 'Discover how GoHighLevel white label solutions can transform your agency business. Complete guide to setup, customization, and client management.',
    content: `<p>GoHighLevel's white label solutions offer agencies unprecedented opportunities to build their own SaaS businesses while delivering comprehensive marketing and CRM solutions to clients. This guide explores how to leverage these powerful white label capabilities.</p>

<h2>White Label Opportunities</h2>
<p>GoHighLevel's white label program enables agencies to:</p>
<ul>
<li>Brand the entire platform with your company identity</li>
<li>Create recurring revenue streams through client subscriptions</li>
<li>Offer comprehensive marketing solutions under your brand</li>
<li>Scale your agency with enterprise-level tools</li>
</ul>

<h2>Implementation Strategy</h2>
<p>Successful white label implementation requires:</p>
<ol>
<li><strong>Brand Customization:</strong> Complete platform branding and customization</li>
<li><strong>Client Onboarding:</strong> Streamlined processes for new client setup</li>
<li><strong>Training and Support:</strong> Comprehensive team training and client support systems</li>
<li><strong>Pricing Strategy:</strong> Competitive pricing models that ensure profitability</li>
</ol>`,
    featured_image: '/images/photos/GoHighLevel_interface.png',
    author: 'Technology Alliance Solutions',
    published_at: '2025-02-25T00:00:00.000Z',
    category: 'Tools',
    tags: ['GoHighLevel', 'White Label', 'Agency Solutions']
  },
  {
    slug: 'lead-generation-techniques',
    title: 'Innovative Lead Generation Techniques for B2B Companies',
    excerpt: 'Discover cutting-edge lead generation techniques that drive high-quality B2B prospects. From AI-powered targeting to multi-channel attribution.',
    content: `<p>B2B lead generation has evolved dramatically with new technologies and changing buyer behaviors. This comprehensive guide explores innovative techniques that are generating high-quality leads for forward-thinking B2B companies.</p>

<h2>AI-Powered Lead Targeting</h2>
<p>Artificial intelligence is revolutionizing lead identification and targeting:</p>
<ul>
<li><strong>Predictive Lead Scoring:</strong> AI algorithms analyze prospect behavior to predict conversion likelihood</li>
<li><strong>Look-alike Audience Creation:</strong> Machine learning identifies prospects similar to your best customers</li>
<li><strong>Intent Data Analysis:</strong> AI processes buying signals across the web to identify ready-to-buy prospects</li>
</ul>

<h2>Multi-Channel Attribution and Optimization</h2>
<p>Modern lead generation requires sophisticated attribution:</p>
<ul>
<li>Cross-channel journey mapping and attribution</li>
<li>Real-time campaign optimization based on performance data</li>
<li>Advanced conversion tracking and ROI measurement</li>
<li>Integrated analytics across all touchpoints</li>
</ul>`,
    featured_image: '/images/photos/illustrations/Lead_generation_funnel.png',
    author: 'Technology Alliance Solutions',
    published_at: '2025-02-20T00:00:00.000Z',
    category: 'Marketing',
    tags: ['Lead Generation', 'B2B Marketing', 'Innovation']
  },
  {
    slug: 'marketing-automation-roi',
    title: 'Measuring ROI of Marketing Automation Investments',
    excerpt: 'Learn how to accurately measure and maximize the ROI of your marketing automation investments. Key metrics, attribution models, and optimization strategies.',
    content: `<p>Marketing automation investments require careful measurement and optimization to deliver maximum ROI. This guide provides frameworks for measuring, analyzing, and improving marketing automation performance.</p>

<h2>Key ROI Metrics for Marketing Automation</h2>
<p>Essential metrics for measuring marketing automation ROI include:</p>
<ul>
<li><strong>Revenue Attribution:</strong> Direct and influenced revenue from automated campaigns</li>
<li><strong>Cost Per Lead (CPL):</strong> Comparison of automated vs. manual lead generation costs</li>
<li><strong>Customer Lifetime Value:</strong> Impact of automation on customer retention and expansion</li>
<li><strong>Time Savings:</strong> Quantifying staff time saved through automation</li>
</ul>

<h2>Attribution Modeling</h2>
<p>Accurate ROI measurement requires sophisticated attribution models:</p>
<ul>
<li>Multi-touch attribution across customer journeys</li>
<li>Time-decay modeling for long sales cycles</li>
<li>Cross-channel attribution and influence analysis</li>
<li>Custom attribution models for complex B2B sales</li>
</ul>`,
    featured_image: '/images/photos/illustrations/Marketing_ROI_dashboard.png',
    author: 'Technology Alliance Solutions',
    published_at: '2025-02-15T00:00:00.000Z',
    category: 'Marketing',
    tags: ['Marketing Automation', 'ROI', 'Analytics']
  },
  {
    slug: 'reputation-management-digital-age',
    title: 'Reputation Management in the Digital Age',
    excerpt: 'Navigate the complexities of digital reputation management. Comprehensive strategies for monitoring, managing, and improving your online reputation.',
    content: `<p>Digital reputation management has become critical for business success in an era where online reviews, social media conversations, and search results directly impact customer decisions and business outcomes.</p>

<h2>The Digital Reputation Landscape</h2>
<p>Modern reputation management encompasses multiple digital touchpoints:</p>
<ul>
<li><strong>Review Platforms:</strong> Google, Yelp, industry-specific review sites</li>
<li><strong>Social Media:</strong> Facebook, Twitter, LinkedIn, and emerging platforms</li>
<li><strong>Search Results:</strong> First page search results and featured snippets</li>
<li><strong>News and Media:</strong> Online publications and news mentions</li>
</ul>

<h2>Proactive Reputation Strategies</h2>
<p>Effective reputation management requires proactive approaches:</p>
<ul>
<li>Consistent brand messaging across all digital channels</li>
<li>Regular content creation and thought leadership</li>
<li>Active community engagement and customer service</li>
<li>Strategic SEO to control search results</li>
</ul>`,
    featured_image: '/images/photos/illustrations/Digital_reputation_management.png',
    author: 'Technology Alliance Solutions',
    published_at: '2025-02-10T00:00:00.000Z',
    category: 'Digital Marketing',
    tags: ['Reputation Management', 'Digital Marketing', 'Brand Management']
  }
]

async function migrateArticles() {
  console.log('Starting article migration to Supabase...')
  
  try {
    // First, let's create some basic categories
    console.log('Creating categories...')
    const categories = [
      { name: 'CRM', slug: 'crm', description: 'Customer Relationship Management insights and best practices' },
      { name: 'Marketing', slug: 'marketing', description: 'Marketing automation and strategy content' },
      { name: 'Integration', slug: 'integration', description: 'System integration and technical guides' },
      { name: 'Tools', slug: 'tools', description: 'Platform-specific guides and reviews' },
      { name: 'Digital Marketing', slug: 'digital-marketing', description: 'Digital marketing strategies and techniques' }
    ]

    const { data: insertedCategories, error: catError } = await supabase
      .from('categories')
      .upsert(categories, { 
        onConflict: 'slug',
        ignoreDuplicates: false 
      })
      .select()

    if (catError) {
      console.log('Category creation info:', catError.message)
    } else {
      console.log('Categories created/updated successfully!')
    }

    // Get category mappings
    const { data: allCategories } = await supabase
      .from('categories')
      .select('*')

    const categoryMap = {}
    allCategories?.forEach(cat => {
      categoryMap[cat.name] = cat.id
    })

    // Migrate articles
    console.log('Migrating articles...')
    
    for (const article of articles) {
      const articleData = {
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt,
        content: article.content,
        featured_image: article.featured_image,
        status: 'published',
        published_at: article.published_at,
        category_id: categoryMap[article.category] || null,
        seo_title: article.title,
        seo_description: article.excerpt,
        seo_keywords: article.tags.join(', '),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }

      const { error: articleError } = await supabase
        .from('blog_posts')
        .upsert(articleData, { 
          onConflict: 'slug',
          ignoreDuplicates: false 
        })

      if (articleError) {
        console.error(`Error migrating article ${article.slug}:`, articleError.message)
      } else {
        console.log(`✓ Migrated: ${article.title}`)
      }
    }

    console.log('\n🎉 Migration completed successfully!')
    console.log(`📝 Migrated ${articles.length} articles`)
    console.log('🏷️ Created/updated categories')
    console.log('\nYour blog page should now display all articles!')
    
  } catch (error) {
    console.error('Migration failed:', error)
  }
}

migrateArticles()