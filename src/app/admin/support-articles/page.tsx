'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getCurrentUser } from '@/lib/auth'
import AdminLayout from '@/components/admin/AdminLayout'
import { supabase, SupportArticle } from '@/lib/supabase'
import type { AuthUser } from '@/lib/auth'

export default function SupportArticlesManagement() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [articles, setArticles] = useState<SupportArticle[]>([])
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

        // Fetch support articles
        const { data, error } = await supabase
          .from('support_articles')
          .select('*')
          .order('created_at', { ascending: false })

        if (!error && data) {
          setArticles(data as SupportArticle[])
        }
      } catch (error) {
        console.error('Error loading support articles management:', error)
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

  function getStatusBadge(status: string) {
    const badges = {
      published: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200',
      draft: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200',
      archived: 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-200'
    }
    return badges[status as keyof typeof badges] || badges.draft
  }

  function getCategoryBadge(category: string) {
    const badges = {
      general: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200',
      setup: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200',
      troubleshooting: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200',
      integration: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200',
      security: 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200',
      'best-practices': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200'
    }
    return badges[category as keyof typeof badges] || badges.general
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Support Articles</h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage your support documentation and knowledge base
            </p>
          </div>
          <Link
            href="/admin/support-articles/new"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
          >
            <svg className="mr-2 -ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            New Article
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No support articles</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Get started by creating your first support article.
              </p>
              <div className="mt-6">
                <Link
                  href="/admin/support-articles/new"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-blue hover:bg-blue-700"
                >
                  <svg className="mr-2 -ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  New Article
                </Link>
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {articles.map((article) => (
                <li key={article.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <p className="text-sm font-medium text-primary-blue truncate">
                            <Link href={`/admin/support-articles/${article.id}/edit`} className="hover:underline">
                              {article.title}
                            </Link>
                          </p>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(article.status)}`}>
                            {article.status}
                          </span>
                          {article.category && (
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryBadge(article.category)}`}>
                              {article.category}
                            </span>
                          )}
                          {article.difficulty && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-200">
                              {article.difficulty}
                            </span>
                          )}
                        </div>
                        {article.excerpt && (
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                            {article.excerpt}
                          </p>
                        )}
                        <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                          <span>
                            {article.published_at 
                              ? `Published ${new Date(article.published_at).toLocaleDateString()}`
                              : `Created ${new Date(article.created_at).toLocaleDateString()}`
                            }
                          </span>
                          {article.read_time && (
                            <span>{article.read_time}</span>
                          )}
                          {article.type && (
                            <span className="capitalize">{article.type}</span>
                          )}
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0 flex items-center space-x-2">
                        {article.status === 'published' && (
                          <Link
                            href={`/support/${article.slug}`}
                            target="_blank"
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                            title="View article"
                          >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </Link>
                        )}
                        <Link
                          href={`/admin/support-articles/${article.id}/edit`}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                          title="Edit article"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </Link>
                      </div>
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