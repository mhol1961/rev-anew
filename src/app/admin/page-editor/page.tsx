'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import AdminLayout from '@/components/admin/AdminLayout'
import type { AuthUser } from '@/lib/auth'
import type { CMSPage, CMSPageWithSections, CMSSectionWithFields } from '@/types/cms'
import { getAllPages, getPageContent, updateSectionFields, publishPage } from '@/lib/cms'

export default function PageEditor() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [pages, setPages] = useState<CMSPage[]>([])
  const [selectedPage, setSelectedPage] = useState<string>('')
  const [pageContent, setPageContent] = useState<CMSPageWithSections | null>(null)
  const [saving, setSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await getCurrentUser()

        if (!currentUser) {
          if (process.env.NODE_ENV === 'development') {
            console.log('DEV MODE: Bypassing page editor authentication')
            setUser({
              id: 'dev-admin',
              auth_id: 'dev-admin',
              email: 'dev@admin.local',
              first_name: 'Dev',
              last_name: 'Admin',
              role: 'admin',
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              isAuthenticated: true
            })
            setLoading(false)
            return
          }
          router.push('/admin/login')
          return
        }

        if (currentUser.role !== 'admin') {
          router.push('/admin/login')
          return
        }

        setUser(currentUser)
      } catch (error) {
        console.error('Auth check error:', error)
        if (process.env.NODE_ENV === 'development') {
          setUser({
            id: 'dev-admin',
            auth_id: 'dev-admin',
            email: 'dev@admin.local',
            first_name: 'Dev',
            last_name: 'Admin',
            role: 'admin',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            isAuthenticated: true
          })
          setLoading(false)
          return
        }
        router.push('/admin/login')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  useEffect(() => {
    if (user) {
      loadPages()
    }
  }, [user])

  useEffect(() => {
    if (selectedPage) {
      loadPageContent()
    }
  }, [selectedPage])

  const loadPages = async () => {
    const pagesData = await getAllPages()
    setPages(pagesData)
    if (pagesData.length > 0 && !selectedPage) {
      setSelectedPage(pagesData[0].route)
    }
  }

  const loadPageContent = async () => {
    const content = await getPageContent(selectedPage, true) // Include drafts
    setPageContent(content)
  }

  const handleFieldChange = (sectionId: string, fieldKey: string, value: string) => {
    if (!pageContent) return

    setPageContent({
      ...pageContent,
      sections: pageContent.sections.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            fields: section.fields.map(field =>
              field.field_key === fieldKey
                ? { ...field, field_value: value }
                : field
            )
          }
        }
        return section
      })
    })
  }

  const handleSaveSection = async (section: CMSSectionWithFields) => {
    setSaving(true)
    setSaveMessage('')

    const updates = section.fields.map(field => ({
      field_key: field.field_key,
      field_value: field.field_value || ''
    }))

    const success = await updateSectionFields(section.id, updates)

    if (success) {
      setSaveMessage('✓ Changes saved as draft')
      setTimeout(() => setSaveMessage(''), 3000)
    } else {
      setSaveMessage('✗ Error saving changes')
    }

    setSaving(false)
  }

  const handlePublish = async () => {
    if (!pageContent) return

    setSaving(true)
    setSaveMessage('')

    const success = await publishPage(pageContent.id)

    if (success) {
      setSaveMessage('✓ Page published successfully!')
      setTimeout(() => setSaveMessage(''), 3000)
      await loadPageContent() // Reload to get updated status
    } else {
      setSaveMessage('✗ Error publishing page')
    }

    setSaving(false)
  }

  const handlePreview = () => {
    if (selectedPage) {
      window.open(selectedPage, '_blank')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-blue"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Page Editor</h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Edit page content, preview changes, and publish when ready
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePreview}
              disabled={!selectedPage}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Preview Page
            </button>
            <button
              onClick={handlePublish}
              disabled={!pageContent || saving}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? 'Publishing...' : 'Publish Page'}
            </button>
          </div>
        </div>

        {saveMessage && (
          <div className={`p-4 rounded-md ${saveMessage.includes('✓') ? 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300' : 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300'}`}>
            {saveMessage}
          </div>
        )}

        {/* Page Selector */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <label htmlFor="page-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Page to Edit
          </label>
          <select
            id="page-select"
            value={selectedPage}
            onChange={(e) => setSelectedPage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
          >
            <option value="">-- Select a page --</option>
            {pages.map(page => (
              <option key={page.id} value={page.route}>
                {page.page_title} ({page.route})
              </option>
            ))}
          </select>
        </div>

        {/* Content Editor */}
        {pageContent && pageContent.sections.length > 0 ? (
          <div className="space-y-6">
            {pageContent.sections.map(section => (
              <div key={section.id} className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white capitalize">
                        {section.section_type} Section
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {section.section_key}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        section.status === 'published'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
                      }`}>
                        {section.status}
                      </span>
                      <button
                        onClick={() => handleSaveSection(section)}
                        disabled={saving}
                        className="px-4 py-2 bg-primary-blue hover:bg-blue-700 text-white rounded-md transition-colors text-sm disabled:opacity-50"
                      >
                        {saving ? 'Saving...' : 'Save Draft'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {section.fields.map(field => (
                    <div key={field.id}>
                      <label
                        htmlFor={`field-${field.id}`}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 capitalize"
                      >
                        {field.field_key.replace(/_/g, ' ')}
                      </label>
                      {field.field_type === 'textarea' ? (
                        <textarea
                          id={`field-${field.id}`}
                          value={field.field_value || ''}
                          onChange={(e) => handleFieldChange(section.id, field.field_key, e.target.value)}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                        />
                      ) : (
                        <input
                          id={`field-${field.id}`}
                          type={field.field_type === 'url' ? 'url' : 'text'}
                          value={field.field_value || ''}
                          onChange={(e) => handleFieldChange(section.id, field.field_key, e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                        />
                      )}
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Type: {field.field_type}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : pageContent ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              No editable sections found for this page yet.
            </p>
          </div>
        ) : null}
      </div>
    </AdminLayout>
  )
}
