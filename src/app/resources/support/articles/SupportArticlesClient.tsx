'use client';

import { useState } from 'react';
import Link from 'next/link';

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

interface SupportArticlesClientProps {
  articles: SupportArticle[];
}

export default function SupportArticlesClient({ articles }: SupportArticlesClientProps) {
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
    <>
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
    </>
  );
}