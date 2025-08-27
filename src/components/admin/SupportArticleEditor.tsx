'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase, SupportArticle } from '@/lib/supabase'
// ImageUpload removed - featured_image field not in database schema

interface SupportArticleEditorProps {
  article?: SupportArticle
  isEditing?: boolean
}

export default function SupportArticleEditor({ article, isEditing = false }: SupportArticleEditorProps) {
  const [formData, setFormData] = useState({
    title: article?.title || '',
    slug: article?.slug || '',
    excerpt: article?.excerpt || '',
    content: article?.content || '',
    category: article?.category || 'general',
    type: article?.type || 'article',
    difficulty: article?.difficulty || 'beginner',
    tags: (() => {
      if (!article?.tags) return '';
      if (typeof article.tags === 'string') {
        try {
          const parsed = JSON.parse(article.tags);
          return Array.isArray(parsed) ? parsed.join(', ') : '';
        } catch {
          return article.tags;
        }
      }
      return Array.isArray(article.tags) ? article.tags.join(', ') : '';
    })(),
    read_time: article?.read_time || '',
    // featured_image field removed - not in database schema
    status: article?.status || 'draft',
    seo_title: article?.seo_title || '',
    seo_description: article?.seo_description || '',
    seo_keywords: article?.seo_keywords || ''
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
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
        status: status || formData.status,
        published_at: status === 'published' ? new Date().toISOString() : null
      }

      if (isEditing && article) {
        const { error } = await supabase
          .from('support_articles')
          .update({
            ...submitData,
            updated_at: new Date().toISOString()
          })
          .eq('id', article.id)

        if (error) throw error
      } else {
        const { error } = await supabase
          .from('support_articles')
          .insert([{
            ...submitData,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }])

        if (error) throw error
      }

      router.push('/admin/support-articles')
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to save support article'
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
              Article Information
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Basic information about the support article.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Article Title *
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
                  Article Summary
                </label>
                <textarea
                  id="excerpt"
                  rows={3}
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Brief summary of the article..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Category
                  </label>
                  <select
                    id="category"
                    className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  >
                    <option value="general">General</option>
                    <option value="setup">Setup & Configuration</option>
                    <option value="troubleshooting">Troubleshooting</option>
                    <option value="integration">Integration</option>
                    <option value="security">Security</option>
                    <option value="best-practices">Best Practices</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Type
                  </label>
                  <select
                    id="type"
                    className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={formData.type}
                    onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as 'article' | 'knowledge-base' }))}
                  >
                    <option value="article">Support Article</option>
                    <option value="knowledge-base">Knowledge Base</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Difficulty
                  </label>
                  <select
                    id="difficulty"
                    className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={formData.difficulty}
                    onChange={(e) => setFormData(prev => ({ ...prev, difficulty: e.target.value as 'beginner' | 'intermediate' | 'advanced' }))}
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Tags
                  </label>
                  <input
                    type="text"
                    id="tags"
                    className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={formData.tags}
                    onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                    placeholder="tag1, tag2, tag3"
                  />
                </div>

                <div>
                  <label htmlFor="read_time" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Read Time
                  </label>
                  <input
                    type="text"
                    id="read_time"
                    className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={formData.read_time}
                    onChange={(e) => setFormData(prev => ({ ...prev, read_time: e.target.value }))}
                    placeholder="5 min read"
                  />
                </div>
              </div>

              {/* Featured Image section removed - field not in database schema */}

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Article Content *
                </label>
                <textarea
                  id="content"
                  rows={15}
                  required
                  className="mt-1 focus:ring-primary-blue focus:border-primary-blue block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="Full article content with step-by-step instructions..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Section */}
      <div className="bg-white dark:bg-gray-800 shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              SEO Settings
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Search engine optimization settings.
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => router.push('/admin/support-articles')}
          className="bg-white dark:bg-gray-700 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={(e) => handleSubmit(e, 'draft')}
          disabled={loading}
          className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium disabled:opacity-50"
        >
          Save as Draft
        </button>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e, 'published')}
          disabled={loading}
          className="bg-primary-blue hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium disabled:opacity-50"
        >
          {loading ? 'Publishing...' : 'Publish Article'}
        </button>
      </div>
    </form>
  )
}