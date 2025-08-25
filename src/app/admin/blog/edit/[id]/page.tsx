import { redirect, notFound } from 'next/navigation'
import { requireAdmin } from '@/lib/auth'
import AdminLayout from '@/components/admin/AdminLayout'
import BlogEditor from '@/components/admin/BlogEditor'
import { supabase, getCategories, BlogPost } from '@/lib/supabase'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

async function getBlogPostForEdit(id: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:categories!fk_blog_posts_category(*),
      author:users(*)
    `)
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching blog post for edit:', error)
    return null
  }

  return data as BlogPost
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const post = await getBlogPostForEdit(resolvedParams.id)
  
  return {
    title: post ? `Edit: ${post.title} | Technology Alliance Solutions Admin` : 'Edit Blog Post',
    description: 'Edit blog post content and settings',
  }
}

export default async function EditBlogPost({ params }: PageProps) {
  try {
    await requireAdmin()
  } catch {
    redirect('/admin/login')
  }

  const resolvedParams = await params
  const [post, categories] = await Promise.all([
    getBlogPostForEdit(resolvedParams.id),
    getCategories()
  ])

  if (!post) {
    notFound()
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