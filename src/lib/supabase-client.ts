import { createClient } from '@supabase/supabase-js'

// Check if we're in a build environment without proper env vars
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create a placeholder client if env vars are missing during build
// This allows the build to complete but the app won't work without proper env vars
let supabase: ReturnType<typeof createClient>

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
  console.error('⚠️ SUPABASE ENVIRONMENT VARIABLES ARE MISSING!')
  console.error('Please set the following environment variables in Vercel:')
  console.error('- NEXT_PUBLIC_SUPABASE_URL')
  console.error('- NEXT_PUBLIC_SUPABASE_ANON_KEY')
  
  // Create a dummy client for build time only
  // This will fail at runtime if env vars are still missing
  supabase = createClient('https://placeholder.supabase.co', 'placeholder-key')
}

export { supabase }