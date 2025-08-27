import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import { getSupportArticles } from '@/lib/supabase';
import SupportArticlesClient from './SupportArticlesClient';

export const revalidate = 0; // Disable caching for debugging

export default async function SupportArticlesPage() {
  // Get support articles from database
  const dbArticles = await getSupportArticles();
  
  // Transform database data to match the UI format
  const articles = dbArticles.map((article) => {
    // Parse tags from JSON string
    const tags = typeof article.tags === 'string' 
      ? JSON.parse(article.tags) 
      : Array.isArray(article.tags) 
        ? article.tags 
        : [];
    
    return {
      id: article.id,
      title: article.title,
      description: article.excerpt,
      category: article.category || 'General',
      readTime: article.read_time ? `${article.read_time} min` : '5 min',
      lastUpdated: article.published_at ? new Date(article.published_at).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
      tags: tags,
      slug: article.slug
    };
  });

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
              <span className="text-gray-900 dark:text-white">Support Articles</span>
            </nav>
          </div>
        </div>

        {/* Hero section */}
        <div className="bg-gradient-to-r from-primary-blue to-blue-600 dark:from-blue-800 dark:to-blue-900 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold">Support Articles</h1>
              <p className="mt-4 text-lg text-blue-100">
                Find helpful articles and guides to get the most out of your technology implementations.
              </p>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="container mx-auto px-4 py-12">
          <SupportArticlesClient articles={articles} />

          {/* Coming Soon Section */}
          <div className="mt-16 text-center">
            <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-8">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">More Articles Coming Soon</h3>
              <p className="text-blue-700 dark:text-blue-300 mb-6">
                We're continuously adding new support articles and guides. 
                Have a specific topic you'd like us to cover? Let us know!
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-primary-blue hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors"
              >
                Request an Article
              </Link>
            </div>
          </div>

          {/* CTA section */}
          <div className="mt-16 rounded-lg bg-primary-light/20 dark:bg-gray-800 p-8 text-center">
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white">Need Personal Support?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-primary-slate dark:text-gray-300">
              Can't find what you're looking for? Our support team is here to provide personalized assistance.
            </p>
            <div className="mt-6 space-y-3 sm:space-y-0 sm:space-x-3 sm:flex sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-primary-blue hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/resources/support/knowledge-base"
                className="inline-flex items-center rounded-md border border-primary-blue dark:border-blue-600 text-primary-blue dark:text-blue-400 hover:bg-primary-blue hover:text-white dark:hover:bg-blue-600 dark:hover:text-white px-6 py-3 text-base font-medium transition-colors"
              >
                Browse Knowledge Base
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}