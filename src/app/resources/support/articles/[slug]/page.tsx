import { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import { notFound } from 'next/navigation';
import { getSupportArticleBySlug, getSupportArticles } from '@/lib/supabase';

// Generate static params for all published articles
export async function generateStaticParams() {
  const articles = await getSupportArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = await getSupportArticleBySlug(resolvedParams.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found | Technology Alliance Solutions',
      description: 'The requested article could not be found.',
    };
  }
  
  return {
    title: article.seo_title || `${article.title} | Support Articles | Technology Alliance Solutions`,
    description: article.seo_description || `${article.title} - ${article.category} article. Reading time: ${article.read_time || '8 min read'}.`,
    keywords: article.seo_keywords || (Array.isArray(article.tags) ? article.tags.join(', ') : ''),
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = await getSupportArticleBySlug(resolvedParams.slug);
  
  if (!article) {
    notFound();
  }

  // Format tags if they're stored as JSON string
  let tags: string[] = [];
  if (article.tags) {
    if (typeof article.tags === 'string') {
      try {
        tags = JSON.parse(article.tags);
      } catch {
        tags = (article.tags as string).split(',').map(tag => tag.trim());
      }
    } else if (Array.isArray(article.tags)) {
      tags = article.tags;
    }
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
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-medium capitalize">
                  {article.category || 'General'}
                </span>
                <span className="text-sm">•</span>
                <span className="text-sm">{article.read_time || '8 min read'}</span>
                <span className="text-sm">•</span>
                <span className="text-sm">Updated {new Date(article.updated_at || article.created_at).toLocaleDateString()}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
              <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag) => (
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
              dangerouslySetInnerHTML={{ __html: article.content || '' }}
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