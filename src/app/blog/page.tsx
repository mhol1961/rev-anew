import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { getBlogPosts, getCategories, User } from '@/lib/supabase';

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  // Get published blog posts and categories from database
  const [allBlogPosts, allCategories] = await Promise.all([
    getBlogPosts(),
    getCategories()
  ]);

  // Filter only published posts
  const publishedPosts = allBlogPosts.filter(post => post.status === 'published');
  
  // Get featured posts (first 2 published posts)
  const featuredPosts = publishedPosts.slice(0, 2);

  const getAuthorName = (post: { author?: User }) => {
    if (post.author?.first_name && post.author?.last_name) {
      return `${post.author.first_name} ${post.author.last_name}`;
    }
    return 'Technology Alliance Solutions';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <PageLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-navy to-primary-blue py-20 md:py-28">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technology Alliance Blog
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Expert insights, best practices, and thought leadership on CRM, marketing automation, and technology integration.
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        <AnimatedSection className="py-16 bg-white dark:bg-primary-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Featured Articles
              </h2>
              <p className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                Our most important and relevant content selected by our technology experts
              </p>
            </div>

            {/* Featured Posts Grid */}
            {featuredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white dark:bg-primary-slate/40 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col hover:-translate-y-1 transition-transform duration-200"
                  >
                    {/* Image */}
                    {post.featured_image && (
                      <div className="relative h-64 w-full">
                        <Image 
                          src={post.featured_image} 
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Overlay with category */}
                        {post.category && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-primary-blue/90 text-white text-sm px-3 py-1 rounded-full">
                              {post.category.name}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-primary-slate dark:text-white/80 mb-4 flex-grow line-clamp-3">
                        {post.excerpt || post.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...'}
                      </p>
                      
                      {/* Meta information */}
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center mr-4">
                          <FaCalendarAlt className="mr-1" />
                          <span>{post.published_at && formatDate(post.published_at)}</span>
                        </div>
                        <div className="flex items-center">
                          <FaUser className="mr-1" />
                          <span>{getAuthorName(post)}</span>
                        </div>
                      </div>
                      
                      <Link href={`/blog/${post.slug}`}>
                        <span className="text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center">
                          Read full article
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-2">No Featured Articles Yet</h3>
                <p className="text-primary-slate dark:text-white/80">
                  Check back soon for our featured technology insights.
                </p>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* All Articles Section */}
        <AnimatedSection className="py-16 bg-primary-light dark:bg-primary-slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">
                All Articles
              </h2>
              <p className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto">
                Browse our complete library of technology insights and best practices
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="px-5 py-2 rounded-full text-sm font-semibold bg-primary-blue text-white shadow-md">
                All Articles ({publishedPosts.length})
              </span>
              {allCategories.map((category) => {
                const categoryCount = publishedPosts.filter(post => post.category_id === category.id).length;
                return (
                  <span
                    key={category.id}
                    className="px-5 py-2 rounded-full text-sm font-semibold bg-gray-100 dark:bg-primary-slate/60 text-primary-navy dark:text-white/80"
                  >
                    {category.name} ({categoryCount})
                  </span>
                );
              })}
            </div>

            {/* Article Grid */}
            {publishedPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publishedPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white dark:bg-primary-navy/50 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 flex flex-col h-full hover:-translate-y-1 transition-transform duration-200"
                  >
                    {/* Image */}
                    {post.featured_image && (
                      <div className="relative h-48 w-full">
                        <Image 
                          src={post.featured_image} 
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {/* Overlay with category */}
                        {post.category && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-primary-blue/90 text-white text-xs px-2 py-1 rounded-full">
                              {post.category.name}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-primary-slate dark:text-white/80 mb-4 flex-grow line-clamp-3">
                        {post.excerpt || post.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...'}
                      </p>
                      
                      {/* Meta information */}
                      <div className="flex flex-wrap text-xs text-gray-500 dark:text-gray-400 mt-auto">
                        <div className="flex items-center mr-3 mb-2">
                          <FaCalendarAlt className="mr-1 text-xs" />
                          <span>{post.published_at && formatDate(post.published_at)}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <FaUser className="mr-1 text-xs" />
                          <span>{getAuthorName(post)}</span>
                        </div>
                      </div>
                      
                      <Link href={`/blog/${post.slug}`} className="mt-3">
                        <span className="text-primary-blue hover:text-primary-blue/80 text-sm font-medium inline-flex items-center">
                          Read more
                          <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // No results message
              <div className="text-center py-12">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-2">No Published Articles Yet</h3>
                <p className="text-primary-slate dark:text-white/80">
                  Check back soon for new content from our technology experts.
                </p>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Newsletter Section */}
        <AnimatedSection className="py-16 bg-white dark:bg-primary-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary-blue/10 to-blue-400/10 dark:from-primary-blue/20 dark:to-blue-500/20 rounded-xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy dark:text-white mb-4">
                  Subscribe to Our Technology Newsletter
                </h2>
                <p className="text-lg text-primary-slate dark:text-white/80 mb-8">
                  Get the latest insights, tips, and technology updates delivered to your inbox monthly.
                </p>
                
                <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    required
                  />
                  <AnimatedButton className="bg-primary-blue text-white hover:bg-primary-blue/90 border-none shadow-md whitespace-nowrap">
                    Subscribe Now
                  </AnimatedButton>
                </form>
                
                <p className="mt-4 text-sm text-primary-slate/80 dark:text-white/60">
                  By subscribing, you agree to our Privacy Policy and consent to receive technology-related updates.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-16 bg-primary-light dark:bg-primary-slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary-blue to-blue-600 rounded-xl overflow-hidden shadow-lg">
              <div className="px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
                  Let our technology experts help you implement, integrate, and optimize your business systems for maximum impact.
                </p>
                <div>
                  <Link href="/contact">
                    <AnimatedButton className="bg-white text-primary-blue hover:bg-white/90 border-transparent">
                      Schedule Your Consultation
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
