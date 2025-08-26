const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://gagquszfpxzkjwcvgcss.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhZ3F1c3pmcHh6a2p3Y3ZnY3NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNTk4MTEsImV4cCI6MjA2MjczNTgxMX0.tcu93JGjM5dkTWmUZnBBRw8a8xZvaETFFw1lXvYxWj8'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function checkSupportArticles() {
  console.log('Checking support articles in database...')
  
  const { data, error } = await supabase
    .from('support_articles')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error:', error)
    return
  }

  console.log('Total support articles in database:', data.length)
  
  if (data.length === 0) {
    console.log('No support articles found in database!')
  } else {
    console.log('\nAll support articles:')
    data.forEach((article, index) => {
      console.log(`\n${index + 1}. ${article.title}`)
      console.log(`   Slug: ${article.slug}`)
      console.log(`   Status: ${article.status}`)
      console.log(`   Category: ${article.category}`)
      console.log(`   Type: ${article.type}`)
      console.log(`   Has Content: ${article.content ? 'Yes (' + article.content.length + ' chars)' : 'No'}`)
      console.log(`   Excerpt: ${article.excerpt ? article.excerpt.substring(0, 100) + '...' : 'None'}`)
    })
  }
  
  const publishedArticles = data.filter(article => article.status === 'published')
  console.log(`\nPublished articles (should show on website): ${publishedArticles.length}`)
}

checkSupportArticles().then(() => process.exit(0))