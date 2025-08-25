'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import AdminLayout from '@/components/admin/AdminLayout'
import { supabase, Category } from '@/lib/supabase'
import type { AuthUser } from '@/lib/auth'

export default function CategoriesManagement() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingName, setEditingName] = useState('')
  const [newCategoryName, setNewCategoryName] = useState('')
  const [newCategoryDescription, setNewCategoryDescription] = useState('')
  const [showNewForm, setShowNewForm] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const loadData = async () => {
      try {
        const currentUser = await getCurrentUser()
        
        if (!currentUser || currentUser.role !== 'admin') {
          router.push('/admin/login')
          return
        }
        
        setUser(currentUser)

        // Fetch categories
        const { data, error } = await supabase
          .from('categories')
          .select('*')
          .order('name')

        if (!error && data) {
          setCategories(data as Category[])
        }
      } catch (error) {
        console.error('Error loading categories management:', error)
        router.push('/admin/login')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [router])

  const handleCreateCategory = async () => {
    if (!newCategoryName.trim()) return

    const slug = newCategoryName
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()

    const { data, error } = await supabase
      .from('categories')
      .insert({
        name: newCategoryName,
        slug,
        description: newCategoryDescription || null
      })
      .select()
      .single()

    if (!error && data) {
      setCategories([...categories, data as Category])
      setNewCategoryName('')
      setNewCategoryDescription('')
      setShowNewForm(false)
    }
  }

  const handleUpdateCategory = async (id: string) => {
    if (!editingName.trim()) return

    const { error } = await supabase
      .from('categories')
      .update({
        name: editingName,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)

    if (!error) {
      setCategories(categories.map(cat => 
        cat.id === id ? { ...cat, name: editingName } : cat
      ))
      setEditingId(null)
      setEditingName('')
    }
  }

  const handleDeleteCategory = async (id: string) => {
    if (!confirm('Are you sure you want to delete this category?')) return

    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id)

    if (!error) {
      setCategories(categories.filter(cat => cat.id !== id))
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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Categories</h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage content categories
            </p>
          </div>
          <button
            onClick={() => setShowNewForm(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
          >
            <svg className="mr-2 -ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            New Category
          </button>
        </div>

        {showNewForm && (
          <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Create New Category</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Category Name *
                </label>
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="e.g., Technology"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Description
                </label>
                <textarea
                  value={newCategoryDescription}
                  onChange={(e) => setNewCategoryDescription(e.target.value)}
                  rows={3}
                  className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Optional category description"
                />
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleCreateCategory}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
                >
                  Create Category
                </button>
                <button
                  onClick={() => {
                    setShowNewForm(false)
                    setNewCategoryName('')
                    setNewCategoryDescription('')
                  }}
                  className="inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
          {categories.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No categories</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Get started by creating your first category.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {categories.map((category) => (
                <li key={category.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        {editingId === category.id ? (
                          <div className="flex items-center space-x-2">
                            <input
                              type="text"
                              value={editingName}
                              onChange={(e) => setEditingName(e.target.value)}
                              className="flex-1 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                            <button
                              onClick={() => handleUpdateCategory(category.id)}
                              className="text-green-600 hover:text-green-700"
                            >
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </button>
                            <button
                              onClick={() => {
                                setEditingId(null)
                                setEditingName('')
                              }}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          <>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {category.name}
                            </p>
                            {category.description && (
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                {category.description}
                              </p>
                            )}
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                              Slug: {category.slug}
                            </p>
                          </>
                        )}
                      </div>
                      {editingId !== category.id && (
                        <div className="ml-4 flex-shrink-0 flex items-center space-x-2">
                          <button
                            onClick={() => {
                              setEditingId(category.id)
                              setEditingName(category.name)
                            }}
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                            title="Edit category"
                          >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDeleteCategory(category.id)}
                            className="text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                            title="Delete category"
                          >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </AdminLayout>
  )
}