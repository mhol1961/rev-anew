'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase, JobPosting } from '@/lib/supabase'

interface JobEditorProps {
  job?: JobPosting
  isEditing?: boolean
}

export default function JobEditor({ job, isEditing = false }: JobEditorProps) {
  const [formData, setFormData] = useState({
    title: job?.title || '',
    slug: job?.slug || '',
    department: job?.department || '',
    location: job?.location || '',
    type: job?.type || 'Full-time',
    experience_level: job?.experience_level || '',
    salary_range: job?.salary_range || '',
    description: job?.description || '',
    responsibilities: job?.responsibilities || '',
    qualifications: job?.qualifications || '',
    preferred_qualifications: job?.preferred_qualifications || '',
    benefits: job?.benefits || '',
    status: job?.status || 'draft',
    application_url: job?.application_url || '',
    contact_email: job?.contact_email || ''
  })
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: !isEditing || !prev.slug ? generateSlug(title) : prev.slug
    }))
  }

  const handleSubmit = async (e: React.FormEvent, status?: string) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const submitData = {
        ...formData,
        status: status || formData.status,
        posted_date: status === 'open' ? new Date().toISOString() : null
      }

      if (isEditing && job) {
        const { error } = await supabase
          .from('job_postings')
          .update({
            ...submitData,
            updated_at: new Date().toISOString()
          })
          .eq('id', job.id)

        if (error) throw error
      } else {
        const { error } = await supabase
          .from('job_postings')
          .insert(submitData)

        if (error) throw error
      }

      router.push('/admin/jobs')
    } catch (err: any) {
      setError(err.message || 'Failed to save job posting')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 dark:bg-red-900/50 p-4">
          <div className="text-sm text-red-700 dark:text-red-200">{error}</div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              Basic Information
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              General information about the job posting.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Job Title *
                </label>
                <input
                  type="text"
                  id="title"
                  required
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  URL Slug *
                </label>
                <input
                  type="text"
                  id="slug"
                  required
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                />
              </div>

              <div className="col-span-3">
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Department *
                </label>
                <input
                  type="text"
                  id="department"
                  required
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.department}
                  onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
                />
              </div>

              <div className="col-span-3">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  required
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Job Type *
                </label>
                <select
                  id="type"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-primary-blue focus:border-primary-blue sm:text-sm rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="col-span-2">
                <label htmlFor="experience_level" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Experience Level
                </label>
                <input
                  type="text"
                  id="experience_level"
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.experience_level}
                  onChange={(e) => setFormData(prev => ({ ...prev, experience_level: e.target.value }))}
                  placeholder="e.g., 3+ years"
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="salary_range" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Salary Range
                </label>
                <input
                  type="text"
                  id="salary_range"
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.salary_range}
                  onChange={(e) => setFormData(prev => ({ ...prev, salary_range: e.target.value }))}
                  placeholder="e.g., $65,000 - $85,000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              Job Details
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Detailed information about the position.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="space-y-6">
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Job Description *
                </label>
                <textarea
                  id="description"
                  rows={4}
                  required
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Brief overview of the role and what the candidate will be doing..."
                />
              </div>

              <div>
                <label htmlFor="responsibilities" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Responsibilities
                </label>
                <textarea
                  id="responsibilities"
                  rows={6}
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.responsibilities}
                  onChange={(e) => setFormData(prev => ({ ...prev, responsibilities: e.target.value }))}
                  placeholder="• Responsibility 1&#10;• Responsibility 2&#10;• Responsibility 3"
                />
              </div>

              <div>
                <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Required Qualifications
                </label>
                <textarea
                  id="qualifications"
                  rows={6}
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.qualifications}
                  onChange={(e) => setFormData(prev => ({ ...prev, qualifications: e.target.value }))}
                  placeholder="• Requirement 1&#10;• Requirement 2&#10;• Requirement 3"
                />
              </div>

              <div>
                <label htmlFor="preferred_qualifications" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Preferred Qualifications
                </label>
                <textarea
                  id="preferred_qualifications"
                  rows={4}
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.preferred_qualifications}
                  onChange={(e) => setFormData(prev => ({ ...prev, preferred_qualifications: e.target.value }))}
                  placeholder="• Preferred skill 1&#10;• Preferred skill 2"
                />
              </div>

              <div>
                <label htmlFor="benefits" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Benefits
                </label>
                <textarea
                  id="benefits"
                  rows={4}
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.benefits}
                  onChange={(e) => setFormData(prev => ({ ...prev, benefits: e.target.value }))}
                  placeholder="• Benefit 1&#10;• Benefit 2&#10;• Benefit 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              Application Details
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              How candidates can apply for this position.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="space-y-6">
              <div>
                <label htmlFor="application_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Application URL
                </label>
                <input
                  type="url"
                  id="application_url"
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.application_url}
                  onChange={(e) => setFormData(prev => ({ ...prev, application_url: e.target.value }))}
                  placeholder="https://example.com/apply"
                />
              </div>

              <div>
                <label htmlFor="contact_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.contact_email}
                  onChange={(e) => setFormData(prev => ({ ...prev, contact_email: e.target.value }))}
                  placeholder="hr@company.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-white dark:bg-gray-700 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
        >
          Cancel
        </button>
        
        <button
          type="submit"
          disabled={loading}
          onClick={(e) => handleSubmit(e, 'draft')}
          className="bg-gray-600 hover:bg-gray-700 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Saving...' : 'Save Draft'}
        </button>
        
        <button
          type="submit"
          disabled={loading}
          onClick={(e) => handleSubmit(e, 'open')}
          className="bg-primary-blue hover:bg-blue-700 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Publishing...' : 'Publish'}
        </button>
      </div>
    </form>
  )
}