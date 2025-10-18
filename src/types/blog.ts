// Blog Post Types

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  category_id?: string;
  category?: BlogCategory;
  author_name?: string;
  author_email?: string;
  status: 'draft' | 'published';
  published_at?: string;
  created_at: string;
  updated_at: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  tags?: BlogTag[];
}

export interface BlogPostFormData {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  category_id?: string;
  author_name?: string;
  author_email?: string;
  status: 'draft' | 'published';
  published_at?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  tag_ids?: string[];
}
