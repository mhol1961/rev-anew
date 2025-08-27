// Quick setup script for admin user
const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')

// Load environment variables from .env.local
function loadEnv() {
  try {
    const envContent = fs.readFileSync('.env.local', 'utf8')
    envContent.split('\n').forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/)
      if (match) {
        process.env[match[1].trim()] = match[2].trim()
      }
    })
  } catch (error) {
    console.error('Error loading .env.local:', error.message)
    process.exit(1)
  }
}

loadEnv()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

async function setupAdmin() {
  console.log('Setting up admin user...')
  
  const email = 'admin@tas.com'
  const password = 'admin123'
  
  try {
    // Try to sign up first
    console.log('Creating auth user...')
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password
    })
    
    if (signUpError && !signUpError.message.includes('User already registered')) {
      console.error('Signup error:', signUpError.message)
      return
    }
    
    let userId
    if (signUpData?.user) {
      userId = signUpData.user.id
      console.log('New auth user created:', userId)
    } else {
      // Try to sign in if user already exists
      console.log('User might exist, trying to sign in...')
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      
      if (signInError) {
        console.error('Sign in error:', signInError.message)
        console.log('Please check if the user already exists with different credentials')
        return
      }
      
      userId = signInData.user.id
      console.log('Signed in with existing user:', userId)
    }
    
    // Create or update user profile
    const { data: existingUser } = await supabase
      .from('users')
      .select('*')
      .eq('auth_id', userId)
      .single()
    
    if (existingUser) {
      console.log('User profile already exists, updating to admin role...')
      await supabase
        .from('users')
        .update({ role: 'admin' })
        .eq('auth_id', userId)
    } else {
      console.log('Creating user profile...')
      const { error: insertError } = await supabase
        .from('users')
        .insert({
          auth_id: userId,
          email: email,
          first_name: 'Admin',
          last_name: 'User', 
          role: 'admin'
        })
      
      if (insertError) {
        console.error('Error creating user profile:', insertError.message)
        return
      }
    }
    
    console.log('\n✅ Admin user setup complete!')
    console.log('📧 Email:', email)
    console.log('🔑 Password:', password)
    console.log('🌐 Admin URL: http://localhost:3007/admin')
    console.log('\n⚠️  IMPORTANT: Change the password after first login!')
    
  } catch (error) {
    console.error('Setup failed:', error)
  }
}

setupAdmin()