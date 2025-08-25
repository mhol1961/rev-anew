'use client'

import { useEffect, useState } from 'react'
import { useRouter, notFound } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import AdminLayout from '@/components/admin/AdminLayout'
import BlogEditor from '@/components/admin/BlogEditor'
import { supabase, getCategories, BlogPost, Category } from '@/lib/supabase'
import type { AuthUser } from '@/lib/auth'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default function EditBlogPost({ params }: PageProps) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [post, setPost] = useState<BlogPost | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const loadData = async () => {
      try {
        const resolvedParams = await params
        const currentUser = await getCurrentUser()
        
        if (!currentUser || currentUser.role !== 'admin') {
          router.push('/admin/login')
          return
        }
        
        setUser(currentUser)

        // Fetch blog post
        const { data: postData, error: postError } = await supabase
          .from('blog_posts')
          .select(`
            *,
            category:categories!fk_blog_posts_category(*),
            author:users(*)
          `)
          .eq('id', resolvedParams.id)
          .single()

        if (postError || !postData) {
          notFound()
          return
        }

        setPost(postData as BlogPost)

        // Fetch categories
        const cats = await getCategories()
        setCategories(cats)
      } catch (error) {
        console.error('Error loading edit blog page:', error)
        router.push('/admin/login')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [params.id, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-blue"></div>
      </div>
    )
  }

  if (!user || !post) {
    return null
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Blog Post</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Update your blog post content and settings
          </p>
        </div>

        <BlogEditor categories={categories} post={post} isEditing={true} />
      </div>
    </AdminLayout>
  )
}