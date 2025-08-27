'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getCurrentUser } from '@/lib/auth'
import AdminLayout from '@/components/admin/AdminLayout'
import type { AuthUser } from '@/lib/auth'
import { getJobPostings, JobPosting } from '@/lib/supabase'

export default function JobsManagement() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([])
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

        // Fetch job postings from database
        const jobs = await getJobPostings()
        setJobPostings(jobs)
      } catch (error) {
        console.error('Error loading jobs management:', error)
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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Job Postings</h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage job listings and career opportunities
            </p>
          </div>
          <Link
            href="/admin/jobs/new"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
          >
            <svg className="mr-2 -ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            New Job Posting
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
          {jobPostings.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No job postings</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Get started by creating your first job posting.
              </p>
              <div className="mt-6">
                <Link
                  href="/admin/jobs/new"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-blue hover:bg-blue-700"
                >
                  <svg className="mr-2 -ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  New Job Posting
                </Link>
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {jobPostings.map((job) => (
                <li key={job.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center">
                          <p className="text-sm font-medium text-primary-blue truncate">
                            <Link href={`/admin/jobs/${job.id}/edit`} className="hover:underline">
                              {job.title}
                            </Link>
                          </p>
                          <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            job.status === 'open' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-200'
                          }`}>
                            {job.status}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {job.department} • {job.location} • {job.type}
                        </p>
                        <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                          <span>Posted {job.posted_date ? new Date(job.posted_date).toLocaleDateString() : new Date(job.created_at).toLocaleDateString()}</span>
                          {job.closing_date && (
                            <span>Closes {new Date(job.closing_date).toLocaleDateString()}</span>
                          )}
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0 flex items-center space-x-2">
                        {job.status === 'open' && (
                          <Link
                            href={`/careers/${job.slug}`}
                            target="_blank"
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                            title="View job posting"
                          >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </Link>
                        )}
                        <Link
                          href={`/admin/jobs/${job.id}/edit`}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                          title="Edit job posting"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </Link>
                        <button
                          className="text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                          title="Delete job posting"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
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