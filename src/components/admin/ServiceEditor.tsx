'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase, Service } from '@/lib/supabase'

interface ServiceEditorProps {
  service?: Service
  isEditing?: boolean
}

export default function ServiceEditor({ service, isEditing = false }: ServiceEditorProps) {
  const [formData, setFormData] = useState({
    title: service?.title || '',
    slug: service?.slug || '',
    excerpt: service?.excerpt || '',
    content: service?.content || '',
    featured_image: service?.featured_image || '',
    icon: service?.icon || '',
    status: service?.status || 'draft',
    seo_title: service?.seo_title || '',
    seo_description: service?.seo_description || '',
    seo_keywords: service?.seo_keywords || ''
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

      if (isEditing && service) {
        const { error } = await supabase
          .from('services')
          .update({
            ...submitData,
            updated_at: new Date().toISOString()
          })
          .eq('id', service.id)

        if (error) throw error
      } else {
        const { error } = await supabase
          .from('services')
          .insert(submitData)

        if (error) throw error
      }

      router.push('/admin/services')
    } catch (err: any) {
      setError(err.message || 'Failed to save service')
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
              The main content and details for your service.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Service Title *
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

              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Short Description
                </label>
                <textarea
                  id="excerpt"
                  rows={3}
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="A brief summary of this service..."
                />
              </div>

              <div>
                <label htmlFor="featured_image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Featured Image URL
                </label>
                <input
                  type="url"
                  id="featured_image"
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.featured_image}
                  onChange={(e) => setFormData(prev => ({ ...prev, featured_image: e.target.value }))}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label htmlFor="icon" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Icon URL
                </label>
                <input
                  type="url"
                  id="icon"
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.icon}
                  onChange={(e) => setFormData(prev => ({ ...prev, icon: e.target.value }))}
                  placeholder="https://example.com/icon.svg"
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Service Content *
                </label>
                <textarea
                  id="content"
                  rows={12}
                  required
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="Detailed description of your service..."
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
              SEO Settings
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Optimize your service page for search engines.
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
                  placeholder="Leave blank to use the service title"
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