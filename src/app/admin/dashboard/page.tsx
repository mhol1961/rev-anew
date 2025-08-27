'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import AdminLayout from '@/components/admin/AdminLayout'
import DashboardStats from '@/components/admin/DashboardStats'
import type { AuthUser } from '@/lib/auth'

export default function AdminDashboard() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await getCurrentUser()
        console.log('Dashboard auth check:', currentUser)
        
        if (!currentUser) {
          console.log('No user found, redirecting to login')
          router.push('/admin/login')
          return
        }
        
        if (currentUser.role !== 'admin') {
          console.log('User is not admin, access denied')
          router.push('/admin/login')
          return
        }
        
        console.log('Admin access granted')
        setUser(currentUser)
      } catch (error) {
        console.error('Auth check error:', error)
        router.push('/admin/login')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Welcome to the content management system
          </p>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Recent Blog Posts */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Blog Posts</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      AI and CRM: Revolutionizing Customer Relationships
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Published Mar 8, 2025</p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Published
                    </span>
                  </div>
                </div>
                {/* Add more recent posts here */}
              </div>
              <div className="mt-6">
                <a
                  href="/admin/blog"
                  className="text-sm font-medium text-primary-blue hover:text-blue-500"
                >
                  View all posts →
                </a>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="/admin/blog/new"
                  className="flex items-center p-3 bg-primary-blue hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Create New Blog Post
                </a>
                <a
                  href="/admin/services/new"
                  className="flex items-center p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors"
                >
                  <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Add New Service
                </a>
                <a
                  href="/admin/case-studies/new"
                  className="flex items-center p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors"
                >
                  <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Create Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}