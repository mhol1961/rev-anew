// Search functionality for the website
export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  type: 'page' | 'blog' | 'article' | 'knowledge-base' | 'job' | 'case-study' | 'service';
  category?: string;
  tags?: string[];
  lastUpdated?: string;
  readTime?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface SearchFilters {
  type?: string;
  category?: string;
  difficulty?: string;
  dateRange?: 'week' | 'month' | 'year' | 'all';
}

// Mock search index - In production, this would be replaced with a proper search engine
const searchIndex: SearchResult[] = [
  // Blog Articles
  {
    id: 'blog-1',
    title: 'AI and CRM: Revolutionizing Customer Relationship Management',
    excerpt: 'Discover how artificial intelligence is transforming CRM systems, making them smarter, more efficient, and incredibly powerful.',
    url: '/blog/ai-crm-capabilities',
    type: 'blog',
    category: 'AI & Technology',
    tags: ['AI', 'CRM', 'Automation', 'Customer Management'],
    lastUpdated: '2025-01-20',
    readTime: '8 min'
  },
  {
    id: 'blog-2', 
    title: 'CRM Implementation Best Practices: A Complete Guide',
    excerpt: 'Learn the essential best practices for successful CRM implementation, from planning to user adoption.',
    url: '/blog/crm-implementation-best-practices',
    type: 'blog',
    category: 'CRM',
    tags: ['CRM', 'Implementation', 'Best Practices'],
    lastUpdated: '2025-01-18',
    readTime: '12 min'
  },
  {
    id: 'blog-3',
    title: 'Data Migration Strategies for Business Success',
    excerpt: 'Comprehensive strategies for successful data migration during system implementations.',
    url: '/blog/data-migration-strategies', 
    type: 'blog',
    category: 'Data Management',
    tags: ['Data Migration', 'Implementation', 'Strategy'],
    lastUpdated: '2025-01-16',
    readTime: '10 min'
  },
  {
    id: 'blog-4',
    title: 'Email Marketing Automation Strategies That Work',
    excerpt: 'Discover proven email marketing automation strategies that drive engagement and conversions.',
    url: '/blog/email-marketing-automation-strategies',
    type: 'blog', 
    category: 'Marketing',
    tags: ['Email Marketing', 'Automation', 'Marketing Strategy'],
    lastUpdated: '2025-01-14',
    readTime: '9 min'
  },

  // Support Articles
  {
    id: 'support-1',
    title: 'Getting Started with CRM Implementation',
    excerpt: 'A comprehensive guide to planning and executing your first CRM implementation project.',
    url: '/resources/support/articles/getting-started-crm-implementation',
    type: 'article',
    category: 'CRM',
    tags: ['CRM', 'Implementation', 'Getting Started'],
    lastUpdated: '2025-01-20',
    readTime: '8 min'
  },
  {
    id: 'support-2',
    title: 'Marketing Automation Best Practices',
    excerpt: 'Learn how to optimize your marketing automation workflows for maximum efficiency and ROI.',
    url: '/resources/support/articles/marketing-automation-best-practices',
    type: 'article',
    category: 'Marketing',
    tags: ['Marketing Automation', 'Best Practices', 'Workflows'],
    lastUpdated: '2025-01-18', 
    readTime: '12 min'
  },
  {
    id: 'support-3',
    title: 'Data Migration Strategies and Tips',
    excerpt: 'Essential strategies for successful data migration during system implementations.',
    url: '/resources/support/articles/data-migration-strategies',
    type: 'article',
    category: 'Data Management',
    tags: ['Data Migration', 'Implementation', 'Planning'],
    lastUpdated: '2025-01-15',
    readTime: '15 min'
  },

  // Knowledge Base
  {
    id: 'kb-1',
    title: 'CRM Setup and Configuration Guide',
    excerpt: 'Step-by-step instructions for setting up and configuring your CRM system.',
    url: '/resources/support/knowledge-base/crm-setup-configuration-guide',
    type: 'knowledge-base',
    category: 'CRM',
    difficulty: 'beginner',
    tags: ['CRM', 'Setup', 'Configuration'],
    lastUpdated: '2025-01-22',
    readTime: '15 min'
  },
  {
    id: 'kb-2',
    title: 'Email Marketing Campaign Setup',
    excerpt: 'Complete tutorial on creating and launching effective email marketing campaigns.',
    url: '/resources/support/knowledge-base/email-marketing-campaign-setup',
    type: 'knowledge-base',
    category: 'Marketing',
    difficulty: 'intermediate',
    tags: ['Email Marketing', 'Campaigns', 'Marketing Automation'],
    lastUpdated: '2025-01-20',
    readTime: '20 min'
  },
  {
    id: 'kb-3',
    title: 'System Integration Troubleshooting',
    excerpt: 'Solutions to common integration issues and error messages.',
    url: '/resources/support/knowledge-base/system-integration-troubleshooting',
    type: 'knowledge-base',
    category: 'Integration',
    difficulty: 'advanced',
    tags: ['Integration', 'Troubleshooting', 'Technical Support'],
    lastUpdated: '2025-01-15',
    readTime: '25 min'
  },

  // Services  
  {
    id: 'service-1',
    title: 'CRM Solutions & Implementation',
    excerpt: 'Comprehensive CRM solutions tailored to your business needs with expert implementation and ongoing support.',
    url: '/services/crm',
    type: 'service',
    category: 'CRM Solutions',
    tags: ['CRM', 'Implementation', 'Salesforce', 'HubSpot']
  },
  {
    id: 'service-2',
    title: 'Marketing Automation Services',
    excerpt: 'Streamline your marketing efforts with powerful automation tools and strategies.',
    url: '/services/marketing-automation',
    type: 'service',
    category: 'Marketing Solutions', 
    tags: ['Marketing Automation', 'Email Marketing', 'Lead Generation']
  },
  {
    id: 'service-3',
    title: 'System Integration Services',
    excerpt: 'Connect your business systems for seamless data flow and improved efficiency.',
    url: '/services/integration',
    type: 'service',
    category: 'Integration Solutions',
    tags: ['Integration', 'API', 'Data Synchronization']
  },

  // Case Studies (placeholder)
  {
    id: 'case-1',
    title: 'Manufacturing Company CRM Transformation',
    excerpt: '300% increase in sales productivity through comprehensive CRM implementation.',
    url: '/case-studies/manufacturing-crm-transformation',
    type: 'case-study',
    category: 'Manufacturing',
    tags: ['CRM', 'Manufacturing', 'Sales Productivity']
  },

  // Job Listings
  {
    id: 'job-1',
    title: 'Senior CRM Consultant',
    excerpt: 'Join our team as a Senior CRM Consultant and help businesses transform their customer relationships.',
    url: '/careers/senior-crm-consultant',
    type: 'job',
    category: 'Consulting',
    tags: ['CRM', 'Consulting', 'Senior Level']
  }
];

export function searchContent(query: string, filters: SearchFilters = {}): SearchResult[] {
  if (!query.trim() && Object.keys(filters).length === 0) {
    return [];
  }

  let results = [...searchIndex];

  // Apply filters first
  if (filters.type && filters.type !== 'all') {
    results = results.filter(item => item.type === filters.type);
  }

  if (filters.category && filters.category !== 'all') {
    results = results.filter(item => item.category === filters.category);
  }

  if (filters.difficulty && filters.difficulty !== 'all') {
    results = results.filter(item => item.difficulty === filters.difficulty);
  }

  if (filters.dateRange && filters.dateRange !== 'all' && query.trim()) {
    const now = new Date();
    const filterDate = new Date();
    
    switch (filters.dateRange) {
      case 'week':
        filterDate.setDate(now.getDate() - 7);
        break;
      case 'month':
        filterDate.setMonth(now.getMonth() - 1);
        break;
      case 'year':
        filterDate.setFullYear(now.getFullYear() - 1);
        break;
    }

    results = results.filter(item => {
      if (!item.lastUpdated) return true;
      return new Date(item.lastUpdated) >= filterDate;
    });
  }

  // If no query, return filtered results
  if (!query.trim()) {
    return results;
  }

  // Search through content
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  const scoredResults = results.map(item => {
    let score = 0;
    const titleLower = item.title.toLowerCase();
    const excerptLower = item.excerpt.toLowerCase();
    const tagsLower = item.tags?.join(' ').toLowerCase() || '';
    const categoryLower = item.category?.toLowerCase() || '';

    // Calculate relevance score
    searchTerms.forEach(term => {
      // Title matches (highest weight)
      if (titleLower.includes(term)) {
        score += titleLower.startsWith(term) ? 10 : 5;
      }
      
      // Category matches (high weight)
      if (categoryLower.includes(term)) {
        score += 4;
      }
      
      // Tags matches (medium weight) 
      if (tagsLower.includes(term)) {
        score += 3;
      }
      
      // Excerpt matches (lower weight)
      if (excerptLower.includes(term)) {
        score += 2;
      }
    });

    return { ...item, score };
  });

  // Filter out items with no matches and sort by score
  return scoredResults
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ score, ...item }) => item);
}

export function getSearchSuggestions(query: string): string[] {
  if (!query.trim() || query.length < 2) {
    return [];
  }

  const suggestions = new Set<string>();
  const queryLower = query.toLowerCase();

  searchIndex.forEach(item => {
    // Add title suggestions
    if (item.title.toLowerCase().includes(queryLower)) {
      suggestions.add(item.title);
    }

    // Add tag suggestions
    item.tags?.forEach(tag => {
      if (tag.toLowerCase().includes(queryLower)) {
        suggestions.add(tag);
      }
    });

    // Add category suggestions
    if (item.category?.toLowerCase().includes(queryLower)) {
      suggestions.add(item.category);
    }
  });

  return Array.from(suggestions).slice(0, 5);
}

export function getPopularSearches(): string[] {
  return [
    'CRM Implementation',
    'Marketing Automation',
    'Data Migration',
    'System Integration',
    'Email Marketing',
    'Salesforce',
    'HubSpot',
    'Lead Generation'
  ];
}

export function getSearchCategories(): { value: string; label: string; count: number }[] {
  const categories = new Map<string, number>();
  
  searchIndex.forEach(item => {
    if (item.category) {
      categories.set(item.category, (categories.get(item.category) || 0) + 1);
    }
  });

  return [
    { value: 'all', label: 'All Categories', count: searchIndex.length },
    ...Array.from(categories.entries()).map(([category, count]) => ({
      value: category,
      label: category,
      count
    }))
  ].sort((a, b) => b.count - a.count);
}

export function getSearchTypes(): { value: string; label: string; count: number }[] {
  const types = new Map<string, number>();
  
  searchIndex.forEach(item => {
    types.set(item.type, (types.get(item.type) || 0) + 1);
  });

  const typeLabels: Record<string, string> = {
    'page': 'Pages',
    'blog': 'Blog Posts',
    'article': 'Support Articles', 
    'knowledge-base': 'Knowledge Base',
    'job': 'Job Listings',
    'case-study': 'Case Studies',
    'service': 'Services'
  };

  return [
    { value: 'all', label: 'All Types', count: searchIndex.length },
    ...Array.from(types.entries()).map(([type, count]) => ({
      value: type,
      label: typeLabels[type] || type,
      count
    }))
  ].sort((a, b) => b.count - a.count);
}