'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import AdminLayout from '@/components/admin/AdminLayout'
import SupportArticleEditor from '@/components/admin/SupportArticleEditor'
import { supabase, SupportArticle } from '@/lib/supabase'
import type { AuthUser } from '@/lib/auth'

export default function EditSupportArticle() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [article, setArticle] = useState<SupportArticle | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()
  const params = useParams()
  const articleId = params.id as string

  useEffect(() => {
    const loadData = async () => {
      try {
        const currentUser = await getCurrentUser()
        
        if (!currentUser || currentUser.role !== 'admin') {
          router.push('/admin/login')
          return
        }
        
        setUser(currentUser)

        // Fetch the support article
        const { data, error } = await supabase
          .from('support_articles')
          .select('*')
          .eq('id', articleId)
          .single()

        if (error) {
          setError('Support article not found')
          return
        }

        setArticle(data as SupportArticle)
      } catch (error) {
        console.error('Error loading support article:', error)
        setError('Failed to load support article')
      } finally {
        setLoading(false)
      }
    }

    if (articleId) {
      loadData()
    }
  }, [router, articleId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-blue"></div>
      </div>
    )
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <div className="text-red-600 dark:text-red-400">
            <h2 className="text-lg font-medium">Error</h2>
            <p className="mt-1">{error}</p>
          </div>
          <button
            onClick={() => router.push('/admin/support-articles')}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-blue hover:bg-blue-700"
          >
            Back to Support Articles
          </button>
        </div>
      </AdminLayout>
    )
  }

  if (!user || !article) {
    return null
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Support Article</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Update your support article: {article.title}
          </p>
        </div>

        <SupportArticleEditor article={article} isEditing={true} />
      </div>
    </AdminLayout>
  )
}