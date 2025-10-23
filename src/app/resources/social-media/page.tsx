'use client';

import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';

interface SocialPlatform {
  id: string;
  name: string;
  handle: string;
  url: string;
  icon: string;
  description: string;
  followers: string;
  postFrequency: string;
  contentType: string[];
}

export default function SocialMediaPage() {
  const socialPlatforms: SocialPlatform[] = [
    {
      id: '1',
      name: 'LinkedIn',
      handle: '@TechAllianceSolutions',
      url: 'https://linkedin.com/company/tech-alliance-solutions',
      icon: '💼',
      description: 'Professional insights, industry updates, and thought leadership content for business technology.',
      followers: '15.2K',
      postFrequency: 'Daily',
      contentType: ['Industry News', 'Case Studies', 'Tech Tips', 'Company Updates']
    },
    {
      id: '2',
      name: 'Twitter/X',
      handle: '@TechAllianceHQ',
      url: 'https://twitter.com/techalliancehq',
      icon: '🐦',
      description: 'Real-time updates, quick tips, and engaging conversations about business technology trends.',
      followers: '8.5K',
      postFrequency: '3-4 times daily',
      contentType: ['Quick Tips', 'News', 'Thread Discussions', 'Event Updates']
    },
    {
      id: '3',
      name: 'Facebook',
      handle: 'REV-ANEW',
      url: 'https://facebook.com/techalliancesolutions',
      icon: '👍',
      description: 'Community engagement, event announcements, and behind-the-scenes content.',
      followers: '5.3K',
      postFrequency: '3 times weekly',
      contentType: ['Company Culture', 'Events', 'Success Stories', 'Videos']
    },
    {
      id: '4',
      name: 'YouTube',
      handle: 'Tech Alliance Solutions',
      url: 'https://youtube.com/@techalliancesolutions',
      icon: '📺',
      description: 'Tutorial videos, webinar recordings, and in-depth technology demonstrations.',
      followers: '3.2K',
      postFrequency: 'Weekly',
      contentType: ['Tutorials', 'Webinars', 'Product Demos', 'Client Testimonials']
    },
    {
      id: '5',
      name: 'Instagram',
      handle: '@techalliancesolutions',
      url: 'https://instagram.com/techalliancesolutions',
      icon: '📸',
      description: 'Visual storytelling, team highlights, and technology innovation showcases.',
      followers: '2.8K',
      postFrequency: '2-3 times weekly',
      contentType: ['Team Photos', 'Infographics', 'Office Life', 'Tech Quotes']
    }
  ];

  // Filter functionality removed for now - all platforms shown by default

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
              <span className="text-gray-900 dark:text-white">Social Media</span>
            </nav>
          </div>
        </div>

        {/* Hero section */}
        <div className="bg-gradient-to-r from-primary-blue to-blue-600 dark:from-blue-800 dark:to-blue-900 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold">Follow Us Online</h1>
              <p className="mt-4 text-lg text-blue-100">
                Connect with REV-ANEW across social media platforms for the latest updates, insights, and industry news.
              </p>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="container mx-auto px-4 py-12">
          {/* Social Stats Overview */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary-blue dark:text-blue-400">35K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">Total Followers</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">5</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">Active Platforms</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">Daily</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">Content Updates</div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">Community Support</div>
            </div>
          </div>

          {/* Social Platforms Grid */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Social Channels</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {socialPlatforms.map((platform) => (
              <div
                key={platform.id}
                className="group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-gray-900/50"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{platform.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{platform.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{platform.handle}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-primary-light dark:bg-blue-900/30 text-xs font-medium text-primary-navy dark:text-blue-300">
                      {platform.followers} followers
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {platform.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <span className="font-medium">Post Frequency:</span> {platform.postFrequency}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {platform.contentType.map((type) => (
                        <span
                          key={type}
                          className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary-blue dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
                  >
                    Follow on {platform.name}
                    <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Content Highlights */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What You'll Find</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="text-2xl mb-3">🎓</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Educational Content</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Tips, tutorials, and best practices for leveraging technology in your business.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="text-2xl mb-3">📰</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Industry Updates</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Latest news, trends, and insights from the world of business technology.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="text-2xl mb-3">🤝</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Community Engagement</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Join discussions, ask questions, and connect with other business technology enthusiasts.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 rounded-lg bg-primary-light/20 dark:bg-gray-800 p-8 text-center">
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white">Stay Updated</h2>
            <p className="mx-auto mt-3 max-w-2xl text-primary-slate dark:text-gray-300">
              Subscribe to our newsletter for exclusive content, early access to resources, and monthly technology insights delivered to your inbox.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-primary-blue hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>

          {/* Social Media Policy */}
          <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Social Media Guidelines</h3>
            <div className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
              <p>
                We encourage open dialogue and appreciate your feedback on our social channels. 
                Please keep discussions professional and respectful. We reserve the right to 
                moderate content that violates our community guidelines.
              </p>
              <p className="mt-3">
                For urgent support needs, please <Link href="/contact" className="text-primary-blue dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300">contact us directly</Link> rather 
                than through social media to ensure the fastest response time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}