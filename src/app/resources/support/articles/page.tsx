'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';

interface SupportArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  lastUpdated: string;
  tags: string[];
  slug: string;
}

export default function SupportArticlesPage() {
  // Static support articles data (will be replaced with CMS eventually)
  const articles: SupportArticle[] = [
    {
      id: '1',
      title: 'Getting Started with CRM Implementation',
      description: 'A comprehensive guide to planning and executing your first CRM implementation project.',
      category: 'CRM',
      readTime: '8 min',
      lastUpdated: '2025-01-20',
      tags: ['CRM', 'Implementation', 'Getting Started'],
      slug: 'getting-started-crm-implementation'
    },
    {
      id: '2',
      title: 'Marketing Automation Best Practices',
      description: 'Learn how to optimize your marketing automation workflows for maximum efficiency and ROI.',
      category: 'Marketing',
      readTime: '12 min',
      lastUpdated: '2025-01-18',
      tags: ['Marketing Automation', 'Best Practices', 'Workflows'],
      slug: 'marketing-automation-best-practices'
    },
    {
      id: '3',
      title: 'Data Migration Strategies and Tips',
      description: 'Essential strategies for successful data migration during system implementations.',
      category: 'Data Management',
      readTime: '15 min',
      lastUpdated: '2025-01-15',
      tags: ['Data Migration', 'Implementation', 'Planning'],
      slug: 'data-migration-strategies'
    },
    {
      id: '4',
      title: 'User Adoption Techniques for New Systems',
      description: 'Proven methods to increase user adoption and reduce resistance to new technology.',
      category: 'Change Management',
      readTime: '10 min',
      lastUpdated: '2025-01-12',
      tags: ['User Adoption', 'Change Management', 'Training'],
      slug: 'user-adoption-techniques'
    },
    {
      id: '5',
      title: 'Security Best Practices for Business Systems',
      description: 'Essential security measures to protect your business data and systems.',
      category: 'Security',
      readTime: '6 min',
      lastUpdated: '2025-01-10',
      tags: ['Security', 'Data Protection', 'Best Practices'],
      slug: 'security-best-practices'
    },
    {
      id: '6',
      title: 'Integration Troubleshooting Guide',
      description: 'Common integration issues and step-by-step solutions to resolve them.',
      category: 'Integration',
      readTime: '20 min',
      lastUpdated: '2025-01-08',
      tags: ['Integration', 'Troubleshooting', 'Technical Support'],
      slug: 'integration-troubleshooting'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...new Set(articles.map(article => article.category))];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, string> = {
      'CRM': '🔧',
      'Marketing': '📈',
      'Data Management': '💾',
      'Change Management': '👥',
      'Security': '🔒',
      'Integration': '🔗'
    };
    return iconMap[category] || '📝';
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
          {/* Categories filter */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Browse by Category</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-blue text-white'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {category !== 'All' && (
                    <span className="mr-2">{getCategoryIcon(category)}</span>
                  )}
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/resources/support/articles/${article.slug}`}
                className="group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-gray-900/50"
              >
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-primary-light dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-primary-navy dark:text-blue-300">
                      <span className="mr-1">{getCategoryIcon(article.category)}</span>
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{article.readTime} read</span>
                  </div>
                  
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white group-hover:text-primary-blue dark:group-hover:text-blue-400">
                    {article.title}
                  </h3>
                  
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                    {article.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Updated {new Date(article.lastUpdated).toLocaleDateString()}
                    </span>
                    <span className="text-sm font-medium text-primary-blue dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300">
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

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