import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaChevronLeft } from 'react-icons/fa';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { getBlogPostBySlug, getBlogPosts, User } from '@/lib/supabase';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 3600; // Revalidate every hour

// Generate static params for existing blog posts
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Technology Alliance Solutions',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: post.seo_title || `${post.title} | Technology Alliance Solutions`,
    description: post.seo_description || post.excerpt || post.content.replace(/<[^>]*>/g, '').substring(0, 160),
    keywords: post.seo_keywords || 'technology, CRM, automation, digital transformation',
    openGraph: {
      title: post.title,
      description: post.excerpt || post.content.replace(/<[^>]*>/g, '').substring(0, 160),
      images: post.featured_image ? [{ url: post.featured_image }] : [],
      type: 'article',
      publishedTime: post.published_at || undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  // Get related posts
  const allPosts = await getBlogPosts(6);
  const relatedPosts = allPosts.filter(p => p.id !== post.id && p.category_id === post.category_id).slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getAuthorName = (post: { author?: User }) => {
    if (post.author?.first_name && post.author?.last_name) {
      return `${post.author.first_name} ${post.author.last_name}`;
    }
    return 'Technology Alliance Solutions';
  };

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
              <Link href="/blog-dynamic" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                Blog
              </Link>
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
              <span className="text-gray-900 dark:text-white">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <div className="container mx-auto px-4 py-8">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link
                href="/blog-dynamic"
                className="inline-flex items-center text-primary-blue dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-medium"
              >
                <FaChevronLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </div>

            {post.category && (
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-blue text-white text-sm font-semibold">
                  {post.category.name}
                </span>
              </div>
            )}

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="h-4 w-4" />
                {post.published_at && formatDate(post.published_at)}
              </div>
              <div className="flex items-center gap-2">
                <FaUser className="h-4 w-4" />
                {getAuthorName(post)}
              </div>
            </div>

            {post.featured_image && (
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
                <Image
                  src={post.featured_image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </AnimatedSection>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <AnimatedSection>
                  <div 
                    className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-primary-navy dark:prose-headings:text-white prose-links:text-primary-blue dark:prose-links:text-blue-400 prose-strong:text-primary-navy dark:prose-strong:text-white article-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </AnimatedSection>

                {/* Call to Action */}
                <AnimatedSection className="mt-12 p-6 bg-primary-light/10 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-3">
                    Ready to Implement These Solutions?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our experts can help you implement the strategies and technologies discussed in this article.
                  </p>
                  <Link href="/contact" passHref>
                    <AnimatedButton className="bg-primary-blue hover:bg-blue-700 text-white border-transparent">
                      Get Expert Consultation
                    </AnimatedButton>
                  </Link>
                </AnimatedSection>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Related Posts */}
                  {relatedPosts.length > 0 && (
                    <AnimatedSection>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Articles</h3>
                      <div className="space-y-4">
                        {relatedPosts.map((relatedPost) => (
                          <Link
                            key={relatedPost.id}
                            href={`/blog-dynamic/${relatedPost.slug}`}
                            className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-blue dark:hover:border-blue-400 transition-colors group"
                          >
                            <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-blue dark:group-hover:text-blue-400 line-clamp-2 mb-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                              {relatedPost.excerpt || relatedPost.content.replace(/<[^>]*>/g, '').substring(0, 100) + '...'}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </AnimatedSection>
                  )}

                  {/* Contact CTA */}
                  <AnimatedSection>
                    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Need Help?</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Our technology experts are ready to help you implement these solutions in your organization.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex w-full items-center justify-center rounded-md bg-primary-blue hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 px-4 py-2 text-sm font-medium text-white transition-colors"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}