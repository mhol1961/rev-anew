// Blog Utility Functions
import { supabase } from '@/lib/supabase';
import type { BlogPost, BlogCategory, BlogTag, BlogPostFormData } from '@/types/blog';

// Helper type for Supabase tag join structure
interface TagJoin {
  tag: BlogTag;
}

// Generate a URL-friendly slug from a title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Get all published blog posts
export async function getPublishedPosts(limit?: number): Promise<BlogPost[]> {
  let query = supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(*),
      tags:blog_post_tags(tag:blog_tags(*))
    `)
    .eq('status', 'published')
    .not('published_at', 'is', null)
    .order('published_at', { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching published posts:', error);
    return [];
  }

  // Transform the tags array structure
  return (data || []).map(post => ({
    ...post,
    tags: post.tags?.map((t: TagJoin) => t.tag) || []
  }));
}

// Get a single blog post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(*),
      tags:blog_post_tags(tag:blog_tags(*))
    `)
    .eq('slug', slug)
    .single();

  if (error || !data) {
    console.error('Error fetching post:', error);
    return null;
  }

  // Transform the tags array structure
  return {
    ...data,
    tags: data.tags?.map((t: TagJoin) => t.tag) || []
  };
}

// Get all blog categories
export async function getCategories(): Promise<BlogCategory[]> {
  const { data, error } = await supabase
    .from('blog_categories')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data || [];
}

// Get all blog tags
export async function getTags(): Promise<BlogTag[]> {
  const { data, error } = await supabase
    .from('blog_tags')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching tags:', error);
    return [];
  }

  return data || [];
}

// Get posts by category
export async function getPostsByCategory(categorySlug: string, limit?: number): Promise<BlogPost[]> {
  let query = supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories!inner(*),
      tags:blog_post_tags(tag:blog_tags(*))
    `)
    .eq('status', 'published')
    .eq('category.slug', categorySlug)
    .not('published_at', 'is', null)
    .order('published_at', { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }

  return (data || []).map(post => ({
    ...post,
    tags: post.tags?.map((t: TagJoin) => t.tag) || []
  }));
}

// Get posts by tag
export async function getPostsByTag(tagSlug: string, limit?: number): Promise<BlogPost[]> {
  let query = supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(*),
      tags:blog_post_tags!inner(tag:blog_tags!inner(*))
    `)
    .eq('status', 'published')
    .eq('tags.tag.slug', tagSlug)
    .not('published_at', 'is', null)
    .order('published_at', { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error} = await query;

  if (error) {
    console.error('Error fetching posts by tag:', error);
    return [];
  }

  return (data || []).map(post => ({
    ...post,
    tags: post.tags?.map((t: TagJoin) => t.tag) || []
  }));
}

// Create a new blog post
export async function createBlogPost(postData: BlogPostFormData): Promise<{ success: boolean; post?: BlogPost; error?: string }> {
  const { tag_ids, ...postFields } = postData;

  // Insert the blog post
  const { data: post, error: postError } = await supabase
    .from('blog_posts')
    .insert([postFields])
    .select()
    .single();

  if (postError || !post) {
    console.error('Error creating post:', postError);
    return { success: false, error: postError?.message || 'Failed to create post' };
  }

  // Add tags if provided
  if (tag_ids && tag_ids.length > 0) {
    const tagLinks = tag_ids.map(tag_id => ({
      post_id: post.id,
      tag_id
    }));

    const { error: tagsError } = await supabase
      .from('blog_post_tags')
      .insert(tagLinks);

    if (tagsError) {
      console.error('Error adding tags:', tagsError);
    }
  }

  return { success: true, post };
}

// Update a blog post
export async function updateBlogPost(postId: string, postData: Partial<BlogPostFormData>): Promise<{ success: boolean; post?: BlogPost; error?: string }> {
  const { tag_ids, ...postFields } = postData;

  // Update the blog post
  const { data: post, error: postError } = await supabase
    .from('blog_posts')
    .update(postFields)
    .eq('id', postId)
    .select()
    .single();

  if (postError || !post) {
    console.error('Error updating post:', postError);
    return { success: false, error: postError?.message || 'Failed to update post' };
  }

  // Update tags if provided
  if (tag_ids !== undefined) {
    // Delete existing tags
    await supabase
      .from('blog_post_tags')
      .delete()
      .eq('post_id', postId);

    // Add new tags
    if (tag_ids.length > 0) {
      const tagLinks = tag_ids.map(tag_id => ({
        post_id: postId,
        tag_id
      }));

      const { error: tagsError } = await supabase
        .from('blog_post_tags')
        .insert(tagLinks);

      if (tagsError) {
        console.error('Error updating tags:', tagsError);
      }
    }
  }

  return { success: true, post };
}

// Delete a blog post
export async function deleteBlogPost(postId: string): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', postId);

  if (error) {
    console.error('Error deleting post:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

// Get all posts (including drafts) for admin
export async function getAllPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(*),
      tags:blog_post_tags(tag:blog_tags(*))
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching all posts:', error);
    return [];
  }

  return (data || []).map(post => ({
    ...post,
    tags: post.tags?.map((t: TagJoin) => t.tag) || []
  }));
}
