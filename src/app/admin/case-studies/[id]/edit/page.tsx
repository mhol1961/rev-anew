'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import AdminLayout from '@/components/admin/AdminLayout'
import CaseStudyEditor from '@/components/admin/CaseStudyEditor'
import type { AuthUser } from '@/lib/auth'
import { getCaseStudyById, CaseStudy } from '@/lib/supabase'

interface PageProps {
  params: {
    id: string
  }
}

export default function EditCaseStudy({ params }: PageProps) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null)
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

        // Fetch case study from database
        const study = await getCaseStudyById(params.id)
        setCaseStudy(study)
      } catch (error) {
        console.error('Error loading case study edit page:', error)
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

  if (!caseStudy) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Case Study Not Found</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">The case study you're looking for doesn't exist.</p>
          <a href="/admin/case-studies" className="mt-4 inline-block text-primary-blue hover:text-blue-700">
            ← Back to Case Studies
          </a>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Case Study</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Editing: {caseStudy.title}
          </p>
        </div>

        <CaseStudyEditor caseStudy={caseStudy} isEditing={true} />
      </div>
    </AdminLayout>
  )
}