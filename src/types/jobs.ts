// Job Posting Types

export interface JobPosting {
  id: string;
  title: string;
  slug: string;
  department?: string;
  location?: string;
  employment_type?: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
  requirements?: string;
  responsibilities?: string;
  how_to_apply?: string;
  status: 'draft' | 'active' | 'closed';
  posted_date?: string;
  created_at: string;
  updated_at: string;
}

export interface JobPostingFormData {
  title: string;
  slug: string;
  department?: string;
  location?: string;
  employment_type?: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
  requirements?: string;
  responsibilities?: string;
  how_to_apply?: string;
  status: 'draft' | 'active' | 'closed';
  posted_date?: string;
}
