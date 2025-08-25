'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import AdminLayout from '@/components/admin/AdminLayout'
import JobEditor from '@/components/admin/JobEditor'
import type { AuthUser } from '@/lib/auth'
import { getJobPostingById, JobPosting } from '@/lib/supabase'

interface PageProps {
  params: {
    id: string
  }
}

export default function EditJobPosting({ params }: PageProps) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [job, setJob] = useState<JobPosting | null>(null)
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

        // Fetch job posting from database
        const jobPosting = await getJobPostingById(params.id)
        setJob(jobPosting)
      } catch (error) {
        console.error('Error loading job edit page:', error)
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

  if (!user) {
    return null
  }

  if (!job) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Job Not Found</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">The job posting you're looking for doesn't exist.</p>
          <a href="/admin/jobs" className="mt-4 inline-block text-primary-blue hover:text-blue-700">
            ← Back to Job Postings
          </a>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Job Posting</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Editing: {job.title}
          </p>
        </div>

        <JobEditor job={job} isEditing={true} />
      </div>
    </AdminLayout>
  )
}