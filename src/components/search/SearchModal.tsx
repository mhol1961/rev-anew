'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { searchContent, getSearchSuggestions, SearchResult, SearchFilters } from '@/lib/search';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus search input when modal opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Handle search with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (query.trim() || Object.keys(filters).length > 0) {
        setIsLoading(true);
        const searchResults = await searchContent(query, filters);
        setResults(searchResults);
        setIsLoading(false);
      } else {
        setResults([]);
      }

      // Update suggestions
      if (query.length >= 2) {
        const newSuggestions = await getSearchSuggestions(query);
        setSuggestions(newSuggestions);
        setShowSuggestions(newSuggestions.length > 0);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, filters]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < (showSuggestions ? suggestions.length - 1 : results.length - 1) ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => prev > -1 ? prev - 1 : -1);
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0) {
            if (showSuggestions && selectedIndex < suggestions.length) {
              setQuery(suggestions[selectedIndex]);
              setShowSuggestions(false);
              setSelectedIndex(-1);
            } else if (!showSuggestions && selectedIndex < results.length) {
              router.push(results[selectedIndex].url);
              onClose();
            }
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, suggestions, results, showSuggestions, router, onClose]);

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    setSelectedIndex(-1);
  };

  const getResultIcon = (type: string) => {
    const icons: Record<string, string> = {
      'blog': '📝',
      'article': '📄',
      'knowledge-base': '📚',
      'service': '🔧',
      'job': '💼',
      'case-study': '📊',
      'page': '📃'
    };
    return icons[type] || '📄';
  };

  const getResultTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'blog': 'Blog Post',
      'article': 'Support Article',
      'knowledge-base': 'Knowledge Base',
      'service': 'Service',
      'job': 'Job Listing',
      'case-study': 'Case Study',
      'page': 'Page'
    };
    return labels[type] || type;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-start justify-center p-4 pt-16 sm:pt-24">
        <div
          className="fixed inset-0 bg-black/50 transition-opacity"
          onClick={onClose}
        />
        
        <div className="relative w-full max-w-3xl rounded-lg bg-white dark:bg-gray-900 shadow-2xl">
          {/* Search Header */}
          <div className="border-b border-gray-200 dark:border-gray-700 p-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, guides, services..."
                className="w-full pl-10 pr-4 py-3 text-lg border-0 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                onClick={onClose}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="border-b border-gray-200 dark:border-gray-700 p-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilters({})}
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  Object.keys(filters).length === 0
                    ? 'bg-primary-blue text-white'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                All Content
              </button>
              <button
                onClick={() => setFilters({ type: 'blog' })}
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filters.type === 'blog'
                    ? 'bg-primary-blue text-white'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                📝 Blog Posts
              </button>
              <button
                onClick={() => setFilters({ type: 'article' })}
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filters.type === 'article'
                    ? 'bg-primary-blue text-white'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                📄 Support Articles
              </button>
              <button
                onClick={() => setFilters({ type: 'knowledge-base' })}
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filters.type === 'knowledge-base'
                    ? 'bg-primary-blue text-white'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                📚 Knowledge Base
              </button>
              <button
                onClick={() => setFilters({ type: 'service' })}
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filters.type === 'service'
                    ? 'bg-primary-blue text-white'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                🔧 Services
              </button>
            </div>
          </div>

          {/* Search Content */}
          <div className="max-h-96 overflow-y-auto">
            {isLoading && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue"></div>
              </div>
            )}

            {/* Search Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Suggestions</h3>
                <div className="space-y-1">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedIndex === index
                          ? 'bg-primary-blue text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      🔍 {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search Results */}
            {!showSuggestions && results.length > 0 && (
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  {results.length} result{results.length !== 1 ? 's' : ''} found
                </h3>
                <div className="space-y-1">
                  {results.map((result, index) => (
                    <Link
                      key={result.id}
                      href={result.url}
                      onClick={onClose}
                      className={`block p-3 rounded-md transition-colors ${
                        selectedIndex === index
                          ? 'bg-primary-blue text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-lg flex-shrink-0 mt-0.5">{getResultIcon(result.type)}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium truncate">{result.title}</h4>
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                              selectedIndex === index 
                                ? 'bg-white/20 text-white' 
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}>
                              {getResultTypeLabel(result.type)}
                            </span>
                          </div>
                          <p className={`text-sm line-clamp-2 ${
                            selectedIndex === index ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            {result.excerpt}
                          </p>
                          <div className="flex items-center gap-3 mt-2 text-xs">
                            {result.category && (
                              <span className={selectedIndex === index ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}>
                                📁 {result.category}
                              </span>
                            )}
                            {result.readTime && (
                              <span className={selectedIndex === index ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}>
                                ⏱️ {result.readTime}
                              </span>
                            )}
                            {result.difficulty && (
                              <span className={selectedIndex === index ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}>
                                🎯 {result.difficulty}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {!showSuggestions && !isLoading && query.trim() && results.length === 0 && (
              <div className="p-8 text-center">
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No results found</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  We couldn't find anything matching "{query}". Try different keywords or browse our categories.
                </p>
                <div className="flex justify-center gap-3">
                  <Link
                    href="/blog"
                    onClick={onClose}
                    className="inline-flex items-center px-4 py-2 rounded-md bg-primary-blue text-white hover:bg-blue-700 transition-colors"
                  >
                    Browse Blog
                  </Link>
                  <Link
                    href="/resources"
                    onClick={onClose}
                    className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Browse Resources
                  </Link>
                </div>
              </div>
            )}

            {/* Empty State */}
            {!query.trim() && results.length === 0 && (
              <div className="p-8 text-center">
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Start searching</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Find articles, guides, services, and more across our entire site.
                </p>
                <div className="text-left">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Popular searches:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['CRM Implementation', 'Marketing Automation', 'Data Migration', 'System Integration'].map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-3 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center justify-between">
              <span>Press ESC to close</span>
              <span>↑↓ to navigate • Enter to select</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}