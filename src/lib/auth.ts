import { supabase } from './supabase'
import { User } from './supabase'

export interface AuthUser extends User {
  isAuthenticated: boolean
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw error
  }

  if (!data?.user) {
    throw new Error('No user data returned')
  }

  // Get user profile from our users table
  const { data: userProfile, error: profileError } = await supabase
    .from('users')
    .select('*')
    .eq('auth_id', data.user.id)
    .single()

  if (profileError || !userProfile) {
    throw new Error(`User profile not found: ${profileError?.message || 'Unknown error'}`)
  }

  return {
    ...userProfile,
    isAuthenticated: true,
  } as AuthUser
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