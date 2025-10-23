import { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';

export const metadata: Metadata = {
  title: 'Resources & Downloads | REV-ANEW',
  description: 'Access our library of resources, guides, templates, and downloadable documents to help grow your business.',
};

interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
  date: string;
  type: 'blog' | 'case-study' | 'events' | 'support' | 'social' | 'partnerships';
}

export default function ResourcesPage() {
  // Static resources data (will be replaced with CMS eventually)
  const resources: ResourceItem[] = [
    {
      id: '1',
      title: 'Latest Blog Posts',
      description: 'Stay updated with the latest insights on CRM implementation, marketing automation, and business technology trends.',
      category: 'Blog',
      href: '/blog',
      date: '2025-01-24',
      type: 'blog'
    },
    {
      id: '2', 
      title: 'Client Success Stories',
      description: 'Discover how we\'ve helped businesses transform their operations and achieve measurable results.',
      category: 'Case Studies',
      href: '/case-studies',
      date: '2025-01-24',
      type: 'case-study'
    },
    {
      id: '3',
      title: 'Training & Events',
      description: 'Join our training sessions and industry events to enhance your team\'s technology skills.',
      category: 'Events',
      href: '/resources/events',
      date: '2025-01-24',
      type: 'events'
    },
    {
      id: '4',
      title: 'Support Articles',
      description: 'Find helpful articles and guides to get the most out of your technology implementations.',
      category: 'Support Articles',
      href: '/resources/support/articles',
      date: '2025-01-24', 
      type: 'support'
    },
    {
      id: '5',
      title: 'Knowledge Base',
      description: 'Access our comprehensive knowledge base for step-by-step guides and troubleshooting.',
      category: 'Knowledge Base',
      href: '/resources/support/knowledge-base',
      date: '2025-01-24',
      type: 'support'
    },
    {
      id: '6',
      title: 'Follow Us Online',
      description: 'Connect with us on social media for the latest updates, tips, and industry news.',
      category: 'Social Media',
      href: '/resources/social-media',
      date: '2025-01-24',
      type: 'social'
    },
    {
      id: '7',
      title: 'Partner Network',
      description: 'Learn about our technology partnerships and how they benefit your business solutions.',
      category: 'Partnerships',
      href: '/resources/partnerships',
      date: '2025-01-24',
      type: 'partnerships'
    }
  ];

  // Get icon for resource type
  const getResourceIcon = (type: string) => {
    const iconMap: Record<string, string> = {
      blog: '📝',
      'case-study': '📊',
      events: '📅',
      support: '🛠️',
      social: '📱',
      partnerships: '🤝'
    };
    return iconMap[type] || '📄';
  };
  
  return (
    <PageLayout>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-primary-blue to-blue-600 dark:from-blue-800 dark:to-blue-900 py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Resources & Downloads</h1>
            <p className="mt-4 max-w-2xl text-lg">
              Access our library of resources, guides, templates, and downloadable documents to help grow your business.
            </p>
          </div>
        </div>
        
        {/* Content section */}
        <div className="container mx-auto px-4 py-12">
          {/* Resources grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.id}
                href={resource.href}
                className="group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-gray-900/50"
              >
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex rounded-full bg-primary-light dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-primary-navy dark:text-blue-300">
                      {resource.category}
                    </span>
                    <span className="text-2xl">
                      {getResourceIcon(resource.type)}
                    </span>
                  </div>
                  
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white group-hover:text-primary-blue dark:group-hover:text-blue-400">
                    {resource.title}
                  </h3>
                  
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-primary-blue dark:text-blue-400">
                    Access Resource
                    <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* CTA section */}
          <div className="mt-16 rounded-lg bg-primary-light/20 dark:bg-gray-800 p-8 text-center">
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white">Need Custom Solutions?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-primary-slate dark:text-gray-300">
              Our team can help you create custom documents, templates, and automation solutions tailored to your business needs.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-primary-blue hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
