import { getTechnologies, getCaseStudies, getJobListings, getBlogPosts, getSupportArticles, getServices } from './supabase';

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


// Build dynamic search index from Supabase data
async function buildSearchIndex(): Promise<SearchResult[]> {
  const searchIndex: SearchResult[] = [];

  try {
    // Get dynamic content from Supabase
    const [technologies, caseStudies, jobListings, blogPosts, supportArticles, services] = await Promise.all([
      getTechnologies(),
      getCaseStudies(),
      getJobListings(),
      getBlogPosts(),
      getSupportArticles(),
      getServices()
    ]);

    // Add technologies to search index
    technologies.forEach(tech => {
      searchIndex.push({
        id: tech.id,
        title: tech.title,
        excerpt: tech.description,
        url: `/services/technologies/${tech.slug}`,
        type: 'service',
        category: 'Technology Platforms',
        tags: [
          ...(tech.feature_contact_management ? ['Contact Management'] : []),
          ...(tech.feature_email_marketing ? ['Email Marketing'] : []),
          ...(tech.feature_lead_management ? ['Lead Management'] : []),
          ...(tech.feature_sales_automation ? ['Sales Automation'] : []),
          ...(tech.feature_marketing_automation_workflows ? ['Marketing Automation'] : []),
          ...(tech.feature_free_tier ? ['Free Tier'] : []),
        ],
        lastUpdated: tech.updated_at?.split('T')[0],
      });
    });

    // Add case studies to search index
    caseStudies.forEach(study => {
      searchIndex.push({
        id: study.id,
        title: study.title,
        excerpt: study.challenge || study.solution || 'Learn about this successful technology implementation.',
        url: `/case-studies/${study.slug}`,
        type: 'case-study',
        category: study.industry || undefined,
        tags: Array.isArray(study.technologies_used) ? study.technologies_used : (study.technologies_used ? [study.technologies_used] : []),
        lastUpdated: study.updated_at?.split('T')[0],
      });
    });

    // Add job listings to search index
    jobListings.forEach(job => {
      searchIndex.push({
        id: job.id,
        title: job.title,
        excerpt: job.description || 'Join our team and help businesses transform their technology.',
        url: `/careers/${job.slug}`,
        type: 'job',
        category: job.department,
        tags: [job.department, job.type, job.location].filter(Boolean),
        lastUpdated: job.updated_at?.split('T')[0],
      });
    });

    // Add blog posts to search index
    blogPosts.forEach(post => {
      searchIndex.push({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt || 'Read our latest insights on technology and business solutions.',
        url: `/blog/${post.slug}`,
        type: 'blog',
        category: post.category?.name || 'Technology',
        tags: [], // Tags would need to be fetched separately in a more complex implementation
        lastUpdated: post.updated_at?.split('T')[0],
        readTime: '5 min', // Could be calculated or stored
      });
    });

    // Add support articles to search index
    supportArticles.forEach(article => {
      searchIndex.push({
        id: article.id,
        title: article.title,
        excerpt: article.excerpt,
        url: `/resources/support/${article.type === 'knowledge-base' ? 'knowledge-base' : 'articles'}/${article.slug}`,
        type: article.type === 'knowledge-base' ? 'knowledge-base' : 'article',
        category: article.category || undefined,
        tags: article.tags || [],
        lastUpdated: article.updated_at?.split('T')[0],
        readTime: article.read_time || undefined,
        difficulty: article.difficulty || undefined,
      });
    });

    // Add services to search index
    services.forEach(service => {
      searchIndex.push({
        id: service.id,
        title: service.title,
        excerpt: service.excerpt || service.content?.substring(0, 200) || 'Learn about our professional services.',
        url: `/services/${service.slug}`,
        type: 'service',
        category: 'Professional Services',
        tags: [], // Could be extracted from content or stored separately
        lastUpdated: service.updated_at?.split('T')[0],
      });
    });

  } catch (error) {
    console.error('Error building search index:', error);
  }

  return searchIndex;
}


export async function searchContent(query: string, filters: SearchFilters = {}): Promise<SearchResult[]> {
  if (!query.trim() && Object.keys(filters).length === 0) {
    return [];
  }

  // Build search index with current Supabase data
  const searchIndex = await buildSearchIndex();
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
    .map((item) => {
      const { score: _, ...result } = item;
      return result;
    });
}

export async function getSearchSuggestions(query: string): Promise<string[]> {
  if (!query.trim() || query.length < 2) {
    return [];
  }

  const suggestions = new Set<string>();
  const queryLower = query.toLowerCase();
  const searchIndex = await buildSearchIndex();

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

export async function getSearchCategories(): Promise<{ value: string; label: string; count: number }[]> {
  const categories = new Map<string, number>();
  const searchIndex = await buildSearchIndex();
  
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

export async function getSearchTypes(): Promise<{ value: string; label: string; count: number }[]> {
  const types = new Map<string, number>();
  const searchIndex = await buildSearchIndex();
  
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