import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { getBlogPosts, getCategories } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Blog - Technology Insights & Best Practices | Technology Alliance Solutions',
  description: 'Stay updated with the latest technology trends, CRM insights, and digital transformation strategies from Technology Alliance Solutions experts.',
  keywords: 'technology blog, CRM insights, digital transformation, business automation, technology trends',
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getBlogPosts(),
    getCategories()
  ]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getAuthorName = (post: { author?: { first_name?: string; last_name?: string } }) => {
    if (post.author?.first_name && post.author?.last_name) {
      return `${post.author.first_name} ${post.author.last_name}`;
    }
    return 'Technology Alliance Solutions';
  };

  return (
    <PageLayout>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-blue to-blue-600 dark:from-blue-800 dark:to-blue-900 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Technology Insights & Best Practices</h1>
              <p className="text-lg text-blue-100">
                Stay ahead with expert insights on CRM, automation, AI, and digital transformation strategies that drive business success.
              </p>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="bg-gray-50 dark:bg-gray-800 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue text-white text-sm font-medium">
                All Posts ({posts.length})
              </span>
              {categories.map((category) => (
                <span 
                  key={category.id}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  {category.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="container mx-auto px-4 py-12">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No posts available</h2>
              <p className="text-gray-600 dark:text-gray-400">Check back soon for new content!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <AnimatedSection
                  key={post.id}
                  delay={index * 0.1}
                  className="group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-gray-900/50"
                >
                  {post.featured_image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.featured_image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      {post.category && (
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-blue text-white text-xs font-semibold">
                            {post.category.name}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="h-4 w-4" />
                        {post.published_at && formatDate(post.published_at)}
                      </div>
                      <div className="flex items-center gap-1">
                        <FaUser className="h-4 w-4" />
                        {getAuthorName(post)}
                      </div>
                    </div>
                    
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-blue dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                      {post.excerpt || post.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...'}
                    </p>
                    
                    <Link
                      href={`/blog-dynamic/${post.slug}`}
                      className="inline-flex items-center text-sm font-medium text-primary-blue dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 group-hover:underline"
                    >
                      Read More
                      <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 rounded-lg bg-primary-light/20 dark:bg-blue-900/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-3">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-slate dark:text-gray-300 mb-6">
              Get expert guidance on implementing the technologies and strategies discussed in our blog.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-primary-blue hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}