# Blog CMS & Careers System - Implementation Progress

## ✅ Completed Components

### 1. Database Schema
**Files Created:**
- `supabase/migrations/20250117000004_create_blog_posts.sql`
- `supabase/migrations/20250117000005_create_blog_images_bucket.sql`

**Database Tables:**
- `blog_posts` - Stores blog post content with SEO fields
- `blog_categories` - 6 default categories (Technology, CRM, ERP, Marketing Automation, Cloud Solutions, Case Studies)
- `blog_tags` - 10 default tags (Microsoft Dynamics, Salesforce, HubSpot, Power Platform, Azure, AWS, etc.)
- `blog_post_tags` - Junction table for many-to-many relationships
- Storage bucket: `blog-images` for image uploads

### 2. TypeScript Types
**File:** `src/types/blog.ts`

Interfaces created:
- `BlogPost`
- `BlogCategory`
- `BlogTag`
- `BlogPostFormData`

### 3. Utility Functions
**File:** `src/lib/blog.ts`

Functions:
- `generateSlug(title)` - Creates URL-friendly slugs
- `getPublishedPosts(limit?)` - Fetch published posts
- `getPostBySlug(slug)` - Get single post
- `getCategories()` - Get all categories
- `getTags()` - Get all tags
- `getPostsByCategory(categorySlug, limit?)` - Filter by category
- `getPostsByTag(tagSlug, limit?)` - Filter by tag
- `createBlogPost(postData)` - Create new post
- `updateBlogPost(postId, postData)` - Update existing post
- `deleteBlogPost(postId)` - Delete post
- `getAllPosts()` - Get all posts including drafts (admin only)

### 4. Image Upload System
**File:** `src/lib/imageUpload.ts`

Functions:
- `uploadImage(file, bucket)` - Upload to Supabase Storage
- `deleteImage(imageUrl, bucket)` - Remove uploaded images
- `validateImageFile(file)` - Check file size (max 5MB) and type (JPEG, PNG, GIF, WebP)

### 5. Rich Text Editor Component
**File:** `src/components/admin/RichTextEditor.tsx`

**Features:**
- WYSIWYG editor (users never see HTML code!)
- Text formatting: Bold, Italic, Underline, Strikethrough
- Headings: H1, H2, H3
- Lists: Bullet points and numbered lists
- Blockquotes
- Text alignment (left, center, right)
- **Image Upload Button** - Users click and select from computer, no URLs needed!
- Link insertion
- Undo/Redo functionality
- Responsive toolbar
- Dark mode support

**How it works for users:**
1. User clicks "Upload Image" button
2. File picker opens
3. User selects image from computer
4. Image automatically uploads to Supabase Storage
5. Image appears in editor - NO URLs OR PATHS SHOWN!
6. Users format text with toolbar buttons like Word

## 📋 Remaining Tasks

### Blog CMS

#### 1. Blog Post Editor Admin Page
**Path:** `/admin/blog/new`
**Purpose:** Create new blog posts
**Features needed:**
- Form with all post fields (title, slug, excerpt, content, etc.)
- Rich text editor for content
- Featured image upload
- Category dropdown
- Tag selection (multi-select checkboxes)
- Author info fields
- SEO fields (meta title, description, keywords)
- Save as Draft / Publish buttons

#### 2. Blog Post List Admin Page
**Path:** `/admin/blog`
**Purpose:** Manage all blog posts
**Features needed:**
- List all posts (published + drafts)
- Filter by status, category, tag
- Search functionality
- Edit/Delete buttons for each post
- "Create New Post" button
- Show post status (Draft/Published)
- Show publication date

#### 3. Blog Post Edit Page
**Path:** `/admin/blog/[slug]/edit`
**Purpose:** Edit existing blog posts
**Features needed:**
- Pre-populate form with existing post data
- All same fields as create page
- Update/Delete functionality
- Change status (Draft ↔ Published)

#### 4. Public Blog Listing Page
**Path:** `/blog`
**Purpose:** Display all published blog posts to visitors
**Features needed:**
- Grid/list of blog posts
- Show featured image, title, excerpt, date, author
- Filter by category
- Filter by tag
- Pagination or "Load More"
- SEO metadata

#### 5. Public Blog Detail Page
**Path:** `/blog/[slug]`
**Purpose:** Display single blog post
**Features needed:**
- Full post content (HTML rendered properly)
- Featured image
- Author info
- Publication date
- Category and tags
- Related posts
- SEO metadata (from post's meta fields)

### Careers/Job Postings System

#### 6. Job Postings Database Schema
**File to create:** `supabase/migrations/20250117000006_create_job_postings.sql`

**Table:** `job_postings`
Fields needed:
- id (UUID)
- title (TEXT)
- slug (TEXT, unique)
- department (TEXT) - e.g., "Engineering", "Sales", "Marketing"
- location (TEXT) - e.g., "Remote", "Boston, MA", "Hybrid"
- employment_type (TEXT) - "Full-time", "Part-time", "Contract"
- description (TEXT) - Rich text job description
- requirements (TEXT) - Rich text or JSON for bullet points
- responsibilities (TEXT) - Rich text or JSON for bullet points
- how_to_apply (TEXT) - Instructions or application link
- status ('active' | 'closed' | 'draft')
- created_at (TIMESTAMPTZ)
- updated_at (TIMESTAMPTZ)
- posted_date (TIMESTAMPTZ)

#### 7. Job Posting TypeScript Types
**File to create:** `src/types/jobs.ts`

Interfaces:
- `JobPosting`
- `JobPostingFormData`

#### 8. Job Posting Utilities
**File to create:** `src/lib/jobs.ts`

Functions:
- `getActiveJobs()`
- `getJobBySlug(slug)`
- `createJob(jobData)`
- `updateJob(jobId, jobData)`
- `deleteJob(jobId)`
- `getAllJobs()` (for admin)

#### 9. Job Posting Editor Admin Page
**Path:** `/admin/jobs/new` and `/admin/jobs/[slug]/edit`
**Purpose:** Create/edit job postings

Fields:
- Title
- Department dropdown or text
- Location
- Employment type dropdown
- Description (Rich text editor)
- Requirements (Rich text editor or bullet list)
- Responsibilities (Rich text editor or bullet list)
- How to Apply (text or URL)
- Status (Active/Closed/Draft)

#### 10. Job Postings List Admin Page
**Path:** `/admin/jobs`
**Purpose:** Manage all job postings
**Features:**
- List all jobs
- Filter by status, department, location
- Edit/Delete buttons
- "Create New Job" button

#### 11. Update Careers Page
**Path:** `/careers`
**Current:** Uses hardcoded `jobListings` array in `src/data/jobListings.ts`
**Update to:**
- Fetch jobs from database using `getActiveJobs()`
- Remove hardcoded data file
- Add "View Job" buttons linking to `/careers/[slug]`

#### 12. Job Detail Page
**Path:** `/careers/[slug]`
**Purpose:** Display single job posting
**Features:**
- Full job description
- Requirements list
- Responsibilities list
- How to apply section
- Application button/link
- SEO metadata

## 🎯 Key Implementation Notes

### Image Uploads - User Experience
**IMPORTANT:** Users should NEVER see file paths or URLs!

✅ Good UX:
- Click "Upload Image" button
- Select file from computer
- Image appears in editor
- Done!

❌ Bad UX:
- Show Supabase Storage URLs
- Ask users to paste image URLs
- Display file paths like `/storage/blog-images/12345.jpg`

### Content Editing - User Experience
**IMPORTANT:** Users should NEVER see HTML code!

✅ Good UX:
- WYSIWYG editor (looks like Word)
- Toolbar with buttons for formatting
- Images appear as actual images
- Content looks like final result

❌ Bad UX:
- Raw HTML textarea
- Code editor
- Showing `<p>` tags and `<img src="">`

### File Structure Recommendations

```
src/
├── app/
│   ├── admin/
│   │   ├── blog/
│   │   │   ├── page.tsx          (list all posts)
│   │   │   ├── new/
│   │   │   │   └── page.tsx      (create new post)
│   │   │   └── [slug]/
│   │   │       └── edit/
│   │   │           └── page.tsx  (edit post)
│   │   └── jobs/
│   │       ├── page.tsx          (list all jobs)
│   │       ├── new/
│   │       │   └── page.tsx      (create new job)
│   │       └── [slug]/
│   │           └── edit/
│   │               └── page.tsx  (edit job)
│   ├── blog/
│   │   ├── page.tsx              (public blog listing)
│   │   └── [slug]/
│   │       └── page.tsx          (public blog post)
│   └── careers/
│       ├── page.tsx              (public jobs listing - UPDATE THIS)
│       └── [slug]/
│           └── page.tsx          (public job detail - CREATE THIS)
├── components/
│   └── admin/
│       └── RichTextEditor.tsx    (✅ DONE)
├── lib/
│   ├── blog.ts                   (✅ DONE)
│   ├── imageUpload.ts            (✅ DONE)
│   └── jobs.ts                   (TODO)
└── types/
    ├── blog.ts                   (✅ DONE)
    └── jobs.ts                   (TODO)
```

## 🚀 Next Steps to Continue

1. **Create blog admin pages** (`/admin/blog`)
2. **Create public blog pages** (`/blog`)
3. **Create jobs database and utilities**
4. **Create jobs admin pages** (`/admin/jobs`)
5. **Update careers page** to use database instead of hardcoded data

## 📝 Code Patterns to Follow

### Creating a new admin page with Rich Text Editor:

```typescript
'use client';

import { useState } from 'react';
import RichTextEditor from '@/components/admin/RichTextEditor';
import { uploadImage, validateImageFile } from '@/lib/imageUpload';

export default function MyAdminPage() {
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const error = validateImageFile(file);
    if (error) {
      alert(error);
      return;
    }

    setIsUploading(true);
    const url = await uploadImage(file);
    if (url) setFeaturedImage(url);
    setIsUploading(false);
  };

  return (
    <div>
      {/* Featured Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        disabled={isUploading}
      />

      {/* Rich Text Editor */}
      <RichTextEditor
        content={content}
        onChange={setContent}
        placeholder="Start writing..."
      />
    </div>
  );
}
```

## 🔗 Useful Resources

- **TipTap Docs:** https://tiptap.dev/docs/editor/introduction
- **Supabase Storage:** https://supabase.com/docs/guides/storage
- **Supabase Database:** https://supabase.com/docs/guides/database

## ⚠️ Important Reminders

1. **Never show file paths to users** - Always use upload buttons
2. **Never show HTML code to users** - Use WYSIWYG editor
3. **Always validate images** - Check size and type before upload
4. **Use slugs for URLs** - `generateSlug()` function creates clean URLs
5. **Handle errors gracefully** - Show user-friendly error messages
6. **Test on mobile** - Ensure editor works on all devices
