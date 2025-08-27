import { supabase } from './supabase'
import { User } from './supabase'

export interface AuthUser extends User {
  isAuthenticated: boolean
}

export const signIn = async (email: string, password: string) => {
  // Check if Supabase is properly configured
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Supabase configuration is missing. Please check environment variables.')
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      // Provide more specific error messages
      if (error.message.includes('Invalid login credentials')) {
        throw new Error('Invalid email or password. Please check your credentials and try again.')
      } else if (error.message.includes('Email not confirmed')) {
        throw new Error('Please confirm your email address before signing in.')
      } else if (error.message.includes('Failed to fetch')) {
        throw new Error('Unable to connect to authentication service. Please check your internet connection and try again.')
      }
      throw error
    }

    if (!data?.user) {
      throw new Error('No user data returned from authentication service.')
    }

    // Get user profile from our users table
    const { data: userProfile, error: profileError } = await supabase
      .from('users')
      .select('*')
      .eq('auth_id', data.user.id)
      .single()

    if (profileError || !userProfile) {
      throw new Error(`User profile not found in database. Please contact support. Error: ${profileError?.message || 'Unknown error'}`)
    }

    return {
      ...userProfile,
      isAuthenticated: true,
    } as AuthUser
  } catch (error) {
    // Log the full error for debugging
    console.error('Auth Error:', error)
    throw error
  }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export const getCurrentUser = async (): Promise<AuthUser | null> => {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return null

  // Get user profile from our users table
  const { data: userProfile, error } = await supabase
    .from('users')
    .select('*')
    .eq('auth_id', user.id)
    .single()

  if (error || !userProfile) {
    return null
  }

  return {
    ...userProfile,
    isAuthenticated: true,
  } as AuthUser
}

export const requireAuth = async () => {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error('Authentication required')
  }
  return user
}

export const requireAdmin = async () => {
  const user = await requireAuth()
  if (user.role !== 'admin') {
    throw new Error('Admin access required')
  }
  return user
}