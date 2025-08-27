# Deployment Instructions

## Vercel Deployment Setup

### Required Environment Variables

To deploy this application on Vercel, you need to configure the following environment variables in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the following variables:

#### Required Variables

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

#### How to Get These Values

1. Log in to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to Settings → API
4. Copy the following:
   - **Project URL** → Use for `NEXT_PUBLIC_SUPABASE_URL`
   - **Project API keys - anon public** → Use for `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Important Notes

- These environment variables MUST be set for all environments (Production, Preview, Development)
- The `NEXT_PUBLIC_` prefix is required for these variables to be accessible in the browser
- After adding the environment variables, trigger a new deployment for the changes to take effect

### Build Configuration

- Framework Preset: Next.js
- Build Command: `npm run build` (default)
- Output Directory: `.next` (default)
- Install Command: `npm install` (default)

### Node Version

This project uses Next.js 15.2.4 and requires Node.js 18.x or later.

## Local Development

For local development, create a `.env.local` file in the project root with the same environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Troubleshooting

### Build Error: "supabaseUrl is required"

This error occurs when the Supabase environment variables are not properly configured in Vercel. Make sure:

1. The environment variables are set in Vercel's project settings
2. The variable names are exactly as shown above (including the `NEXT_PUBLIC_` prefix)
3. There are no extra spaces or quotes in the values
4. You've triggered a new deployment after adding the variables

### Build Error: "Failed to collect page data"

This typically indicates that:
1. Environment variables are missing
2. There's an issue connecting to Supabase
3. Check the Vercel build logs for more specific error messages

## Database Setup

Make sure your Supabase database has all the required tables and RLS policies configured. The application expects the following tables:

- `blog_posts` - Blog content management
- `categories` - Blog categories
- `users` - User management
- `job_postings` - Career opportunities
- `services` - Service offerings
- `case_studies` - Case study content

Each table should have appropriate Row Level Security (RLS) policies configured for read/write access.