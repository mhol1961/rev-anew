'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import AdminLayout from '@/components/admin/AdminLayout'
import BlogEditor from '@/components/admin/BlogEditor'
import { getCategories, Category } from '@/lib/supabase'
import type { AuthUser } from '@/lib/auth'

export default function NewBlogPost() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
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
        const cats = await getCategories()
        setCategories(cats)
      } catch (error) {
        console.error('Error loading new blog page:', error)
        router.push('/admin/login')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [router])

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
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Create New Blog Post</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Write and publish a new blog post
          </p>
        </div>

        <BlogEditor categories={categories} />
      </div>
    </AdminLayout>
  )
}
