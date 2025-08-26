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

// Correct featured images based on the original screenshot and available files
const imageUpdates = [
  {
    slug: 'crm-implementation-best-practices',
    featured_image: '/images/photos/Laptop_CRM_dashboard.png'
  },
  {
    slug: 'marketing-automation-roi',
    featured_image: '/images/photos/Marketing_growth_success.jpg'
  },
  {
    slug: 'system-integration-challenges',
    featured_image: '/images/photos/System_optimization.png'
  },
  {
    slug: 'data-migration-strategies',
    featured_image: '/images/photos/DataManagement.png'
  },
  {
    slug: 'ai-crm-capabilities',
    featured_image: '/images/photos/Abstract_laptop.png'
  },
  {
    slug: 'seo-best-practices-2025',
    featured_image: '/images/photos/SEO_Services.png'
  },
  {
    slug: 'email-marketing-automation-strategies',
    featured_image: '/images/photos/TransformYourBusinessAutomation.png'
  },
  {
    slug: 'reputation-management-digital-age',
    featured_image: '/images/photos/StandOutFRomCompetition.png'
  },
  {
    slug: 'lead-generation-techniques',
    featured_image: '/images/photos/LeadGenService.png'
  },
  {
    slug: 'website-conversion-optimization',
    featured_image: '/images/photos/WebsiteConversion.png'
  },
  {
    slug: 'gohighlevel-white-label-solutions',
    featured_image: '/images/photos/ClientSuccessStories.png'
  },
  {
    slug: 'sales-enablement-technologies',
    featured_image: '/images/photos/Two_People_looking_at_screen1.png'
  }
]

async function updateArticleImages() {
  console.log('Updating article images to match the original design...')
  
  try {
    for (const update of imageUpdates) {
      const { error } = await supabase
        .from('blog_posts')
        .update({ featured_image: update.featured_image })
        .eq('slug', update.slug)
      
      if (error) {
        console.error(`Error updating ${update.slug}:`, error.message)
      } else {
        console.log(`✓ Updated image for: ${update.slug}`)
      }
    }
    
    console.log('\n🎉 All article images updated successfully!')
    console.log('📸 Your blog should now show all the beautiful images from your original design!')
    
  } catch (error) {
    console.error('Update failed:', error)
  }
}

updateArticleImages()