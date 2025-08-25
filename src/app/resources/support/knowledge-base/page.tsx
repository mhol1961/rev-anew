'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';

interface KnowledgeBaseItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'guide' | 'faq' | 'tutorial' | 'troubleshooting';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lastUpdated: string;
  slug: string;
}

export default function KnowledgeBasePage() {
  // Static knowledge base data (will be replaced with CMS eventually)
  const knowledgeBaseItems: KnowledgeBaseItem[] = [
    {
      id: '1',
      title: 'CRM Setup and Configuration Guide',
      description: 'Step-by-step instructions for setting up and configuring your CRM system.',
      category: 'CRM',
      type: 'guide',
      difficulty: 'beginner',
      lastUpdated: '2025-01-22',
      slug: 'crm-setup-configuration-guide'
    },
    {
      id: '2',
      title: 'Email Marketing Campaign Setup',
      description: 'Complete tutorial on creating and launching effective email marketing campaigns.',
      category: 'Marketing',
      type: 'tutorial',
      difficulty: 'intermediate',
      lastUpdated: '2025-01-20',
      slug: 'email-marketing-campaign-setup'
    },
    {
      id: '3',
      title: 'Frequently Asked Questions',
      description: 'Common questions and answers about our services and implementations.',
      category: 'General',
      type: 'faq',
      difficulty: 'beginner',
      lastUpdated: '2025-01-18',
      slug: 'frequently-asked-questions'
    },
    {
      id: '4',
      title: 'System Integration Troubleshooting',
      description: 'Solutions to common integration issues and error messages.',
      category: 'Integration',
      type: 'troubleshooting',
      difficulty: 'advanced',
      lastUpdated: '2025-01-15',
      slug: 'system-integration-troubleshooting'
    },
    {
      id: '5',
      title: 'Data Import/Export Guide',
      description: 'Learn how to import and export data between systems effectively.',
      category: 'Data Management',
      type: 'guide',
      difficulty: 'intermediate',
      lastUpdated: '2025-01-12',
      slug: 'data-import-export-guide'
    },
    {
      id: '6',
      title: 'User Permissions and Security',
      description: 'Understanding and configuring user roles, permissions, and security settings.',
      category: 'Security',
      type: 'guide',
      difficulty: 'intermediate',
      lastUpdated: '2025-01-10',
      slug: 'user-permissions-security'
    },
    {
      id: '7',
      title: 'Automation Workflow Builder',
      description: 'Tutorial on creating automated workflows for your business processes.',
      category: 'Automation',
      type: 'tutorial',
      difficulty: 'advanced',
      lastUpdated: '2025-01-08',
      slug: 'automation-workflow-builder'
    },
    {
      id: '8',
      title: 'Reporting and Analytics Setup',
      description: 'Configure custom reports and dashboards for business insights.',
      category: 'Analytics',
      type: 'guide',
      difficulty: 'intermediate',
      lastUpdated: '2025-01-05',
      slug: 'reporting-analytics-setup'
    }
  ];

  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Categories will be used in future implementation
  const types = ['all', 'guide', 'tutorial', 'faq', 'troubleshooting'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  const filteredItems = knowledgeBaseItems.filter(item => {
    const typeMatch = selectedType === 'all' || item.type === selectedType;
    const difficultyMatch = selectedDifficulty === 'all' || item.difficulty === selectedDifficulty;
    return typeMatch && difficultyMatch;
  });

  const getTypeIcon = (type: string) => {
    const iconMap: Record<string, string> = {
      'guide': '📖',
      'faq': '❓',
      'tutorial': '🎓',
      'troubleshooting': '🔧'
    };
    return iconMap[type] || '📄';
  };

  const getDifficultyColor = (difficulty: string) => {
    const colorMap: Record<string, string> = {
      'beginner': 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
      'intermediate': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300',
      'advanced': 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
    };
    return colorMap[difficulty] || 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300';
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
              <span className="text-gray-900 dark:text-white">Knowledge Base</span>
            </nav>
          </div>
        </div>

        {/* Hero section */}
        <div className="bg-gradient-to-r from-primary-blue to-blue-600 dark:from-blue-800 dark:to-blue-900 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold">Knowledge Base</h1>
              <p className="mt-4 text-lg text-blue-100">
                Comprehensive guides, tutorials, and troubleshooting resources to help you get the most out of your technology solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Filters section */}
        <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 py-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Resource Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        selectedType === type
                          ? 'bg-primary-blue text-white'
                          : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      {type === 'all' ? 'All Types' : (
                        <>
                          <span className="mr-1.5">{getTypeIcon(type)}</span>
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Difficulty Level
                </label>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((difficulty) => (
                    <button
                      key={difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        selectedDifficulty === difficulty
                          ? 'bg-primary-blue text-white'
                          : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      {difficulty === 'all' ? 'All Levels' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="container mx-auto px-4 py-12">
          {/* Results count */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredItems.length} of {knowledgeBaseItems.length} resources
            </p>
          </div>

          {/* Knowledge Base Items Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                href={`/resources/support/knowledge-base/${item.slug}`}
                className="group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-gray-900/50 hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{getTypeIcon(item.type)}</span>
                      <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                        {item.difficulty}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white group-hover:text-primary-blue dark:group-hover:text-blue-400">
                    {item.title}
                  </h3>
                  
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Updated {new Date(item.lastUpdated).toLocaleDateString()}
                    </span>
                    <span className="text-sm font-medium text-primary-blue dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 flex items-center">
                      View Resource
                      <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No results message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No resources found matching your filters.</p>
              <button
                onClick={() => {
                  setSelectedType('all');
                  setSelectedDifficulty('all');
                }}
                className="mt-4 text-primary-blue dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* CTA section */}
          <div className="mt-16 rounded-lg bg-primary-light/20 dark:bg-gray-800 p-8 text-center">
            <h2 className="text-2xl font-bold text-primary-navy dark:text-white">Can't Find What You're Looking For?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-primary-slate dark:text-gray-300">
              Our support team is ready to provide personalized assistance and answer any questions you may have.
            </p>
            <div className="mt-6 space-y-3 sm:space-y-0 sm:space-x-3 sm:flex sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-primary-blue hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/resources/support/articles"
                className="inline-flex items-center rounded-md border border-primary-blue dark:border-blue-600 text-primary-blue dark:text-blue-400 hover:bg-primary-blue hover:text-white dark:hover:bg-blue-600 dark:hover:text-white px-6 py-3 text-base font-medium transition-colors"
              >
                Browse Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}