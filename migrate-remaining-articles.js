const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')

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

// Remaining articles data
const remainingArticles = [
  {
    slug: 'sales-enablement-technologies',
    title: 'Top Sales Enablement Technologies for 2025',
    excerpt: 'Discover the cutting-edge sales enablement technologies that are empowering sales teams to enhance productivity, improve customer engagement, and drive higher conversion rates.',
    content: `<p>Sales enablement technology has evolved dramatically in recent years, empowering sales teams with tools that enhance productivity, improve customer engagement, and drive higher conversion rates. As we navigate through 2025, several innovative technologies are reshaping how sales teams operate and engage with prospects.</p>

<h2>The Evolution of Sales Enablement</h2>
<p>Traditional sales processes relied heavily on manual efforts, intuition, and relationship-building skills. While these fundamentals remain important, today's competitive landscape requires sales teams to leverage technology to gain advantages in:</p>
<ul>
<li>Identifying and prioritizing high-potential prospects</li>
<li>Personalizing outreach at scale</li>
<li>Streamlining sales workflows and eliminating administrative burdens</li>
<li>Providing real-time coaching and guidance during sales interactions</li>
<li>Analyzing customer behavior and sales performance to continuously improve</li>
</ul>

<h2>1. AI-Powered Sales Intelligence Platforms</h2>
<p>Artificial intelligence has transformed sales intelligence from static data repositories into dynamic systems that deliver actionable insights in real-time.</p>
<p><strong>Key Capabilities:</strong></p>
<ul>
<li><strong>Predictive Lead Scoring:</strong> Advanced algorithms that analyze hundreds of data points to identify which prospects are most likely to convert</li>
<li><strong>Buying Intent Signals:</strong> AI systems that monitor digital behavior across the web to identify prospects actively researching solutions</li>
<li><strong>Competitive Intelligence:</strong> Automated tracking of competitor activities, pricing changes, and market positioning</li>
<li><strong>Opportunity Insights:</strong> AI-driven analysis of deal progress with alerts for stalled opportunities</li>
</ul>`,
    featured_image: '/images/photos/Two_People_looking_at_screen1.png',
    author: 'Jacquelin Johnson',
    published_at: '2025-03-22T00:00:00.000Z',
    category: 'Sales',
    tags: ['Sales Enablement', 'Technology', 'Productivity']
  },
  {
    slug: 'seo-best-practices-2025',
    title: 'SEO Best Practices for Business Growth in 2025',
    excerpt: 'Master the latest SEO strategies and best practices for 2025. From AI-powered optimization to Core Web Vitals, learn what drives organic growth today.',
    content: `<p>Search Engine Optimization continues to evolve rapidly, with 2025 bringing new challenges and opportunities for businesses looking to improve their organic search visibility. This comprehensive guide outlines the most effective SEO strategies and best practices for driving business growth in the current search landscape.</p>

<h2>The 2025 SEO Landscape</h2>
<p>Several key factors are shaping SEO in 2025:</p>
<ul>
<li><strong>AI-First Search:</strong> Google's continued integration of AI and machine learning into search algorithms</li>
<li><strong>User Experience Focus:</strong> Increasing emphasis on Core Web Vitals and overall user experience</li>
<li><strong>E-A-T Evolution:</strong> Enhanced focus on Expertise, Authoritativeness, and Trustworthiness</li>
<li><strong>Voice and Visual Search:</strong> Growing importance of optimizing for voice queries and visual search</li>
</ul>

<h2>Technical SEO Foundations</h2>
<p>Modern SEO requires solid technical foundations:</p>
<ul>
<li>Core Web Vitals optimization for superior page experience</li>
<li>Mobile-first indexing compliance and mobile optimization</li>
<li>Structured data implementation for rich snippets</li>
<li>Advanced crawling and indexing optimization</li>
</ul>

<h2>Content Strategy and Optimization</h2>
<p>Content remains king, but the approach has evolved:</p>
<ul>
<li>Topic clusters and semantic SEO strategies</li>
<li>AI-assisted content creation and optimization</li>
<li>User intent mapping and content alignment</li>
<li>Featured snippet optimization techniques</li>
</ul>`,
    featured_image: '/images/photos/illustrations/SEO_analytics_dashboard.png',
    author: 'Technology Alliance Solutions',
    published_at: '2025-03-18T00:00:00.000Z',
    category: 'Digital Marketing',
    tags: ['SEO', 'Digital Marketing', 'Business Growth']
  },
  {
    slug: 'system-integration-challenges',
    title: 'Overcoming Common System Integration Challenges',
    excerpt: 'Navigate the complexities of system integration projects. Learn to overcome data silos, compatibility issues, and implementation challenges.',
    content: `<p>System integration projects are essential for modern businesses but often present complex challenges that can derail implementations and impact business operations. This guide explores the most common integration challenges and provides practical strategies for overcoming them.</p>

<h2>Common Integration Challenges</h2>
<p>Organizations typically encounter several categories of challenges during system integration:</p>

<h3>1. Data Integration Challenges</h3>
<ul>
<li><strong>Data Silos:</strong> Isolated systems with incompatible data formats and structures</li>
<li><strong>Data Quality Issues:</strong> Inconsistent, incomplete, or duplicate data across systems</li>
<li><strong>Schema Differences:</strong> Varying data models and field definitions between systems</li>
<li><strong>Real-time vs. Batch Processing:</strong> Balancing performance with data consistency requirements</li>
</ul>

<h3>2. Technical Integration Challenges</h3>
<ul>
<li><strong>API Limitations:</strong> Insufficient or poorly documented APIs for system connectivity</li>
<li><strong>Legacy System Constraints:</strong> Outdated systems with limited integration capabilities</li>
<li><strong>Security Considerations:</strong> Maintaining data security across integrated systems</li>
<li><strong>Performance Impact:</strong> Managing system performance during and after integration</li>
</ul>

<h2>Solution Strategies</h2>
<p>Successful integration requires systematic approaches to these challenges:</p>
<ol>
<li><strong>Comprehensive Assessment:</strong> Thorough analysis of existing systems and integration requirements</li>
<li><strong>Phased Implementation:</strong> Gradual integration approach to minimize risk and disruption</li>
<li><strong>Robust Testing:</strong> Extensive testing protocols for data integrity and system functionality</li>
<li><strong>Change Management:</strong> Proper training and support for users during transition</li>
</ol>`,
    featured_image: '/images/photos/illustrations/System_integration_diagram.png',
    author: 'Technology Alliance Solutions',
    published_at: '2025-03-12T00:00:00.000Z',
    category: 'Integration',
    tags: ['System Integration', 'Technical Challenges', 'Solutions']
  },
  {
    slug: 'website-conversion-optimization',
    title: 'Website Conversion Optimization: Turning Visitors into Customers',
    excerpt: 'Master the art and science of conversion rate optimization. Learn proven techniques to turn more website visitors into paying customers.',
    content: `<p>Website conversion optimization (CRO) is the systematic process of increasing the percentage of website visitors who complete desired actions—whether that's making a purchase, signing up for a newsletter, or requesting a consultation. This comprehensive guide explores proven strategies for maximizing your website's conversion potential.</p>

<h2>Understanding Conversion Optimization</h2>
<p>Effective conversion optimization involves understanding and optimizing the entire user journey:</p>
<ul>
<li><strong>Landing Page Optimization:</strong> Creating compelling first impressions that encourage further engagement</li>
<li><strong>User Experience (UX) Design:</strong> Removing friction and obstacles throughout the conversion process</li>
<li><strong>Persuasion Psychology:</strong> Leveraging behavioral psychology to influence user decisions</li>
<li><strong>Data-Driven Testing:</strong> Using A/B testing and analytics to validate optimization strategies</li>
</ul>

<h2>Key Conversion Elements</h2>
<p>Several critical elements impact conversion rates:</p>

<h3>1. Value Proposition</h3>
<ul>
<li>Clear and compelling messaging that communicates unique benefits</li>
<li>Prominent placement of key value propositions</li>
<li>Alignment between marketing messages and landing page content</li>
</ul>

<h3>2. Trust Signals</h3>
<ul>
<li>Customer testimonials and case studies</li>
<li>Security badges and certifications</li>
<li>Professional design and error-free content</li>
<li>Contact information and business credentials</li>
</ul>

<h2>Optimization Strategies</h2>
<p>Proven strategies for improving conversion rates include:</p>
<ol>
<li><strong>Page Load Speed Optimization:</strong> Ensuring fast loading times to reduce bounce rates</li>
<li><strong>Mobile Responsiveness:</strong> Optimizing for mobile users who represent the majority of traffic</li>
<li><strong>Clear Call-to-Action (CTA) Design:</strong> Creating prominent, compelling CTAs that guide user actions</li>
<li><strong>Form Optimization:</strong> Minimizing form fields and improving form usability</li>
</ol>`,
    featured_image: '/images/photos/illustrations/Conversion_optimization_funnel.png',
    author: 'Technology Alliance Solutions',
    published_at: '2025-03-15T00:00:00.000Z',
    category: 'Digital Marketing',
    tags: ['Conversion Optimization', 'Website Optimization', 'Digital Marketing']
  }
]

async function migrateRemainingArticles() {
  console.log('Migrating remaining articles to Supabase...')
  
  try {
    // Get category mappings
    const { data: allCategories } = await supabase
      .from('categories')
      .select('*')

    const categoryMap = {}
    allCategories?.forEach(cat => {
      categoryMap[cat.name] = cat.id
    })

    // Add Sales category if not exists
    if (!categoryMap['Sales']) {
      const { data: salesCategory } = await supabase
        .from('categories')
        .insert({ 
          name: 'Sales', 
          slug: 'sales', 
          description: 'Sales strategies and enablement content' 
        })
        .select()
        .single()

      if (salesCategory) {
        categoryMap['Sales'] = salesCategory.id
      }
    }

    // Migrate remaining articles
    for (const article of remainingArticles) {
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

    console.log('\n🎉 Remaining articles migrated successfully!')
    console.log(`📝 Migrated ${remainingArticles.length} additional articles`)
    console.log('\n🔍 Total articles now in database: 12')
    console.log('🌐 Your blog page should now show all articles!')
    
  } catch (error) {
    console.error('Migration failed:', error)
  }
}

migrateRemainingArticles()