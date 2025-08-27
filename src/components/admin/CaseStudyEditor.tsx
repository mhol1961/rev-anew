'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase, CaseStudy } from '@/lib/supabase'
import ImageUpload from './ImageUpload'

interface CaseStudyEditorProps {
  caseStudy?: CaseStudy
  isEditing?: boolean
}

export default function CaseStudyEditor({ caseStudy, isEditing = false }: CaseStudyEditorProps) {
  const [formData, setFormData] = useState({
    title: caseStudy?.title || '',
    slug: caseStudy?.slug || '',
    client: caseStudy?.client || '',
    industry: caseStudy?.industry || '',
    project_duration: caseStudy?.project_duration || '',
    project_type: caseStudy?.project_type || '',
    challenge: caseStudy?.challenge || '',
    solution: caseStudy?.solution || '',
    results: caseStudy?.results || '',
    technologies_used: caseStudy?.technologies_used || '',
    testimonial: caseStudy?.testimonial || '',
    testimonial_author: caseStudy?.testimonial_author || '',
    testimonial_position: caseStudy?.testimonial_position || '',
    featured_image: caseStudy?.featured_image || '',
    gallery_images: caseStudy?.gallery_images || '',
    status: caseStudy?.status || 'draft',
    seo_title: caseStudy?.seo_title || '',
    seo_description: caseStudy?.seo_description || '',
    seo_keywords: caseStudy?.seo_keywords || ''
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
        published_at: status === 'published' ? new Date().toISOString() : null
      }

      if (isEditing && caseStudy) {
        const { error } = await supabase
          .from('case_studies')
          .update({
            ...submitData,
            updated_at: new Date().toISOString()
          })
          .eq('id', caseStudy.id)

        if (error) throw error
      } else {
        const { error } = await supabase
          .from('case_studies')
          .insert(submitData)

        if (error) throw error
      }

      router.push('/admin/case-studies')
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to save case study'
      setError(errorMessage)
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
              General information about the case study.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Case Study Title *
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

              <div>
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

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="client" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    id="client"
                    required
                    className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={formData.client}
                    onChange={(e) => setFormData(prev => ({ ...prev, client: e.target.value }))}
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Industry
                  </label>
                  <input
                    type="text"
                    id="industry"
                    className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={formData.industry}
                    onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="project_duration" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Project Duration
                  </label>
                  <input
                    type="text"
                    id="project_duration"
                    className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={formData.project_duration}
                    onChange={(e) => setFormData(prev => ({ ...prev, project_duration: e.target.value }))}
                    placeholder="e.g., 3 months"
                  />
                </div>

                <div>
                  <label htmlFor="project_type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Project Type
                  </label>
                  <input
                    type="text"
                    id="project_type"
                    className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={formData.project_type}
                    onChange={(e) => setFormData(prev => ({ ...prev, project_type: e.target.value }))}
                    placeholder="e.g., Website Redesign"
                  />
                </div>
              </div>

              <ImageUpload
                value={formData.featured_image}
                onChange={(imageUrl) => setFormData(prev => ({ ...prev, featured_image: imageUrl }))}
                label="Featured Image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              Project Details
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              The challenge, solution, and results of the project.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="space-y-6">
              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Challenge *
                </label>
                <textarea
                  id="challenge"
                  rows={4}
                  required
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.challenge}
                  onChange={(e) => setFormData(prev => ({ ...prev, challenge: e.target.value }))}
                  placeholder="Describe the main challenges the client was facing..."
                />
              </div>

              <div>
                <label htmlFor="solution" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Solution *
                </label>
                <textarea
                  id="solution"
                  rows={6}
                  required
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.solution}
                  onChange={(e) => setFormData(prev => ({ ...prev, solution: e.target.value }))}
                  placeholder="Explain how you addressed the challenges..."
                />
              </div>

              <div>
                <label htmlFor="results" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Results *
                </label>
                <textarea
                  id="results"
                  rows={4}
                  required
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.results}
                  onChange={(e) => setFormData(prev => ({ ...prev, results: e.target.value }))}
                  placeholder="Describe the outcomes and impact of the project..."
                />
              </div>

              <div>
                <label htmlFor="technologies_used" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Technologies Used
                </label>
                <input
                  type="text"
                  id="technologies_used"
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.technologies_used}
                  onChange={(e) => setFormData(prev => ({ ...prev, technologies_used: e.target.value }))}
                  placeholder="React, Next.js, Supabase, etc."
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
              Testimonial
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Client feedback about the project.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="space-y-6">
              <div>
                <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Testimonial
                </label>
                <textarea
                  id="testimonial"
                  rows={4}
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.testimonial}
                  onChange={(e) => setFormData(prev => ({ ...prev, testimonial: e.target.value }))}
                  placeholder="Client testimonial about the project..."
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="testimonial_author" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Author Name
                  </label>
                  <input
                    type="text"
                    id="testimonial_author"
                    className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={formData.testimonial_author}
                    onChange={(e) => setFormData(prev => ({ ...prev, testimonial_author: e.target.value }))}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="testimonial_position" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Author Position
                  </label>
                  <input
                    type="text"
                    id="testimonial_position"
                    className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={formData.testimonial_position}
                    onChange={(e) => setFormData(prev => ({ ...prev, testimonial_position: e.target.value }))}
                    placeholder="CEO, Company Name"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              SEO Settings
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Optimize your case study for search engines.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="space-y-6">
              <div>
                <label htmlFor="seo_title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  SEO Title
                </label>
                <input
                  type="text"
                  id="seo_title"
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.seo_title}
                  onChange={(e) => setFormData(prev => ({ ...prev, seo_title: e.target.value }))}
                  placeholder="Leave blank to use the case study title"
                />
              </div>

              <div>
                <label htmlFor="seo_description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  SEO Description
                </label>
                <textarea
                  id="seo_description"
                  rows={3}
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.seo_description}
                  onChange={(e) => setFormData(prev => ({ ...prev, seo_description: e.target.value }))}
                  placeholder="A description for search engines (150-160 characters)"
                />
              </div>

              <div>
                <label htmlFor="seo_keywords" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  SEO Keywords
                </label>
                <input
                  type="text"
                  id="seo_keywords"
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.seo_keywords}
                  onChange={(e) => setFormData(prev => ({ ...prev, seo_keywords: e.target.value }))}
                  placeholder="Comma-separated keywords"
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
          onClick={(e) => handleSubmit(e, 'published')}
          className="bg-primary-blue hover:bg-blue-700 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Publishing...' : 'Publish'}
        </button>
      </div>
    </form>
  )
}