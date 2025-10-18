const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function fixBlogContent() {
  console.log('Fetching blog post...');

  // Get the test blog post
  const { data: post, error: fetchError } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', 'this-is-a-test-blog-post')
    .single();

  if (fetchError) {
    console.error('Error fetching post:', fetchError);
    return;
  }

  if (!post) {
    console.log('Post not found');
    return;
  }

  console.log('Converting plain text to HTML...');

  // Convert the plain text content to proper HTML
  const plainText = post.content;

  // Split by double newlines for paragraphs
  const paragraphs = plainText.split(/\n\n+/).filter(p => p.trim());

  let htmlContent = '';

  paragraphs.forEach(para => {
    const trimmed = para.trim();

    // Check if it's a heading (starts with emoji or specific patterns)
    if (trimmed.startsWith('⚠️') || trimmed.startsWith('📚') || trimmed.startsWith('🎯')) {
      htmlContent += `<h2>${trimmed}</h2>\n`;
    }
    // Check if it's a numbered list item
    else if (/^\d+\./.test(trimmed)) {
      const lines = trimmed.split('\n');
      htmlContent += '<ol>\n';
      lines.forEach(line => {
        const cleaned = line.replace(/^\d+\.\s*/, '').trim();
        if (cleaned) {
          htmlContent += `  <li>${cleaned}</li>\n`;
        }
      });
      htmlContent += '</ol>\n';
    }
    // Check if it's a bulleted list
    else if (trimmed.includes('\n  - ') || trimmed.startsWith('- ')) {
      const lines = trimmed.split('\n').filter(l => l.trim());
      htmlContent += '<ul>\n';
      lines.forEach(line => {
        const cleaned = line.replace(/^[\s-]*-\s*/, '').trim();
        if (cleaned) {
          htmlContent += `  <li>${cleaned}</li>\n`;
        }
      });
      htmlContent += '</ul>\n';
    }
    // Check for section headers (lines ending with colon)
    else if (trimmed.endsWith(':')) {
      htmlContent += `<h3>${trimmed}</h3>\n`;
    }
    // Check for horizontal rule pattern
    else if (trimmed === '---') {
      htmlContent += '<hr />\n';
    }
    // Regular paragraph
    else {
      const lines = trimmed.split('\n').filter(l => l.trim());
      lines.forEach(line => {
        htmlContent += `<p>${line.trim()}</p>\n`;
      });
    }
  });

  console.log('Updating database...');

  // Update the post with proper HTML
  const { error: updateError } = await supabase
    .from('blog_posts')
    .update({
      content: htmlContent,
      updated_at: new Date().toISOString()
    })
    .eq('id', post.id);

  if (updateError) {
    console.error('Error updating post:', updateError);
    return;
  }

  console.log('✅ Blog post content updated successfully!');
  console.log('\nConverted content preview:');
  console.log(htmlContent.substring(0, 500) + '...');
}

fixBlogContent().then(() => {
  console.log('\nDone!');
  process.exit(0);
}).catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
