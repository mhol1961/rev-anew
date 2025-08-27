import { createClient } from '@supabase/supabase-js'

// Environment variable validation
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Log environment variable status during build
if (typeof window === 'undefined') {
  console.log('Build Environment Check:')
  console.log('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? 'SET' : 'NOT SET')
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'SET (hidden)' : 'NOT SET')
}

// Runtime validation - throw error if environment variables are missing in production
if (typeof window !== 'undefined' && (!supabaseUrl || !supabaseAnonKey)) {
  console.error('Missing Supabase environment variables. Please check your deployment configuration.')
  console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? 'SET' : 'MISSING')
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'SET' : 'MISSING')
}

// For build time, use placeholder values if env vars are missing to allow build to complete
// For runtime, use actual values or empty strings (which will cause clear errors)
const finalUrl = supabaseUrl || (typeof window === 'undefined' ? 'https://placeholder.supabase.co' : '')
const finalKey = supabaseAnonKey || (typeof window === 'undefined' ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder' : '')

// Client for public/read operations
export const supabase = createClient(finalUrl, finalKey)

// Health check function to test Supabase connection
export const testSupabaseConnection = async () => {
  try {
    const { error } = await supabase.from('users').select('count').limit(1)
    if (error) {
      console.error('Supabase connection test failed:', error)
      return false
    }
    return true
  } catch (err) {
    console.error('Supabase connection test error:', err)
    return false
  }
}

// Types for database tables
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  featured_image: string | null
  author_id: string | null
  status: string
  published_at: string | null
  category_id: string | null
  seo_title: string | null
  seo_description: string | null
  seo_keywords: string | null
  created_at: string
  updated_at: string
  category?: Category
  author?: User
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  parent_id: string | null
  created_at: string
  updated_at: string
}

export interface User {
  id: string
  auth_id: string | null
  email: string
  first_name: string | null
  last_name: string | null
  role: string
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  featured_image: string | null
  icon: string | null
  status: string
  published_at: string | null
  seo_title: string | null
  seo_description: string | null
  seo_keywords: string | null
  created_at: string
  updated_at: string
}

export interface CaseStudy {
  id: string
  title: string
  slug: string
  client: string | null
  industry: string | null
  project_duration: string | null
  project_type: string | null
  challenge: string | null
  solution: string | null
  results: string | null
  technologies_used: string | null
  testimonial: string | null
  testimonial_author: string | null
  testimonial_position: string | null
  featured_image: string | null
  gallery_images: string | null
  status: string
  published_at: string | null
  seo_title: string | null
  seo_description: string | null
  seo_keywords: string | null
  created_at: string
  updated_at: string
}

export interface JobPosting {
  id: string
  title: string
  slug: string
  department: string
  location: string
  type: string
  experience_level: string | null
  salary_range: string | null
  description: string
  responsibilities: string | null
  qualifications: string | null
  preferred_qualifications: string | null
  benefits: string | null
  status: string
  posted_date: string | null
  closing_date: string | null
  application_url: string | null
  contact_email: string | null
  created_at: string
  updated_at: string
}

export interface SupportArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string | null
  category: string | null
  type: 'article' | 'knowledge-base'
  difficulty: 'beginner' | 'intermediate' | 'advanced' | null
  tags: string[]
  read_time: string | null
  status: string
  published_at: string | null
  seo_title: string | null
  seo_description: string | null
  seo_keywords: string | null
  created_at: string
  updated_at: string
}

// Database operations
export const getBlogPosts = async (limit?: number) => {
  let query = supabase
    .from('blog_posts')
    .select(`
      *,
      category:categories!fk_blog_posts_category(*),
      author:users(*)
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }

  return data as BlogPost[]
}

export const getBlogPostBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:categories!fk_blog_posts_category(*),
      author:users(*)
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) {
    console.error('Error fetching blog post:', error)
    return null
  }

  return data as BlogPost
}

export const getServices = async (limit?: number) => {
  let query = supabase
    .from('services')
    .select('*')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching services:', error)
    return []
  }

  return data as Service[]
}

export const getServiceBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) {
    console.error('Error fetching service:', error)
    return null
  }

  return data as Service
}

export const getCaseStudies = async (limit?: number) => {
  let query = supabase
    .from('case_studies')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching case studies:', error)
    return []
  }

  return data as CaseStudy[]
}

export const getCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  if (error) {
    console.error('Error fetching categories:', error)
    return []
  }

  return data as Category[]
}

// Job posting operations
export const getJobPostings = async (limit?: number) => {
  let query = supabase
    .from('job_postings')
    .select('*')
    .order('posted_date', { ascending: false })

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching job postings:', error)
    return []
  }

  return data as JobPosting[]
}

export const getJobPostingBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('job_postings')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'open')
    .single()

  if (error) {
    console.error('Error fetching job posting:', error)
    return null
  }

  return data as JobPosting
}

export const getJobPostingById = async (id: string) => {
  const { data, error } = await supabase
    .from('job_postings')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching job posting by ID:', error)
    return null
  }

  return data as JobPosting
}

export const getCaseStudyById = async (id: string) => {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching case study by ID:', error)
    return null
  }

  return data as CaseStudy
}

export const getCaseStudyBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) {
    console.error('Error fetching case study by slug:', error)
    return null
  }

  return data as CaseStudy
}

// Technology operations
export interface Technology {
  id: string
  slug: string
  title: string
  description: string
  pros: string[]
  cons: string[]
  cost_factors: string[]
  image_url: string | null
  cost_summary: string
  feature_contact_management: boolean
  feature_lead_management: boolean
  feature_opportunity_management: boolean
  feature_sales_pipeline_visualization: boolean
  feature_sales_forecasting: boolean
  feature_custom_objects: boolean
  feature_email_marketing: boolean
  feature_landing_pages: boolean
  feature_lead_scoring: boolean
  feature_marketing_automation_workflows: boolean
  feature_social_media_integration: boolean
  feature_workflow_automation: boolean
  feature_sales_automation: boolean
  feature_customer_service_tools: boolean
  feature_standard_reporting: boolean
  feature_custom_reporting: boolean
  feature_dashboards: boolean
  feature_api_access: boolean
  feature_app_marketplace: boolean
  feature_mobile_app: boolean
  feature_free_tier: boolean
  feature_dedicated_support_options: boolean
  feature_gdpr_tools: boolean
  status: string
  published_at: string | null
  seo_title: string | null
  seo_description: string | null
  seo_keywords: string | null
  created_at: string
  updated_at: string
}

export const getTechnologies = async (limit?: number) => {
  let query = supabase
    .from('technologies')
    .select('*')
    .eq('status', 'published')
    .order('title')

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching technologies:', error)
    return []
  }

  return data as Technology[]
}

export const getTechnologyBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('technologies')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) {
    console.error('Error fetching technology by slug:', error)
    return null
  }

  return data as Technology
}

// Support Articles operations
export const getSupportArticles = async (limit?: number) => {
  let query = supabase
    .from('support_articles')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching support articles:', error)
    return []
  }

  return data as SupportArticle[]
}

export const getSupportArticleBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('support_articles')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) {
    console.error('Error fetching support article:', error)
    return null
  }

  return data as SupportArticle
}

// Alias functions for backward compatibility with search system
export const getJobListings = getJobPostings