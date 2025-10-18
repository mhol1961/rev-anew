// Job Posting Utility Functions
import { supabase } from '@/lib/supabase';
import type { JobPosting, JobPostingFormData } from '@/types/jobs';

// Generate a URL-friendly slug from a title
export function generateJobSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Get all active job postings (for public careers page)
export async function getActiveJobs(): Promise<JobPosting[]> {
  const { data, error } = await supabase
    .from('job_postings')
    .select('*')
    .eq('status', 'active')
    .not('posted_date', 'is', null)
    .order('posted_date', { ascending: false });

  if (error) {
    console.error('Error fetching active jobs:', error);
    return [];
  }

  return data || [];
}

// Get a single job posting by slug
export async function getJobBySlug(slug: string): Promise<JobPosting | null> {
  const { data, error } = await supabase
    .from('job_postings')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) {
    console.error('Error fetching job:', error);
    return null;
  }

  return data;
}

// Get all job postings (including drafts and closed) for admin
export async function getAllJobs(): Promise<JobPosting[]> {
  const { data, error } = await supabase
    .from('job_postings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching all jobs:', error);
    return [];
  }

  return data || [];
}

// Create a new job posting
export async function createJob(jobData: JobPostingFormData): Promise<{ success: boolean; job?: JobPosting; error?: string }> {
  const { data: job, error } = await supabase
    .from('job_postings')
    .insert([jobData])
    .select()
    .single();

  if (error || !job) {
    console.error('Error creating job:', error);
    return { success: false, error: error?.message || 'Failed to create job posting' };
  }

  return { success: true, job };
}

// Update a job posting
export async function updateJob(jobId: string, jobData: Partial<JobPostingFormData>): Promise<{ success: boolean; job?: JobPosting; error?: string }> {
  const { data: job, error } = await supabase
    .from('job_postings')
    .update(jobData)
    .eq('id', jobId)
    .select()
    .single();

  if (error || !job) {
    console.error('Error updating job:', error);
    return { success: false, error: error?.message || 'Failed to update job posting' };
  }

  return { success: true, job };
}

// Delete a job posting
export async function deleteJob(jobId: string): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase
    .from('job_postings')
    .delete()
    .eq('id', jobId);

  if (error) {
    console.error('Error deleting job:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

// Get jobs by department
export async function getJobsByDepartment(department: string): Promise<JobPosting[]> {
  const { data, error } = await supabase
    .from('job_postings')
    .select('*')
    .eq('status', 'active')
    .eq('department', department)
    .not('posted_date', 'is', null)
    .order('posted_date', { ascending: false });

  if (error) {
    console.error('Error fetching jobs by department:', error);
    return [];
  }

  return data || [];
}

// Get jobs by location
export async function getJobsByLocation(location: string): Promise<JobPosting[]> {
  const { data, error } = await supabase
    .from('job_postings')
    .select('*')
    .eq('status', 'active')
    .eq('location', location)
    .not('posted_date', 'is', null)
    .order('posted_date', { ascending: false });

  if (error) {
    console.error('Error fetching jobs by location:', error);
    return [];
  }

  return data || [];
}
