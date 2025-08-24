// Script to create an admin user in the users table
// This fixes the authentication issue by linking your Supabase auth user to the CMS

import { createClient } from '@supabase/supabase-js';
import readline from 'readline';
import fs from 'fs';
import path from 'path';

// Read environment variables from .env.local file
function loadEnv() {
  try {
    const envPath = path.join(process.cwd(), '.env.local');
    const envContent = fs.readFileSync(envPath, 'utf8');
    
    envContent.split('\n').forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim();
        process.env[key] = value;
      }
    });
    console.log('Environment variables loaded from .env.local');
  } catch (error) {
    console.error('Error loading .env.local file:', error.message);
  }
}

// Load environment variables
loadEnv();

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get input from user
const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function createAdminUser() {
  try {
      // Get credentials from user
    const email = await question('Enter your email: ');
    const password = await question('Enter your password: ');
    
    // Create Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Error: Supabase URL or Anon Key not found in environment variables.');
      console.log('Make sure you have NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file');
      return;
    }
    
    console.log('Using Supabase URL:', supabaseUrl);
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    
    // Sign in to get the auth_id
    console.log('\nAttempting to sign in...');
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (signInError) {
      console.error('Error signing in:', signInError.message);
      return;
    }
    
    console.log('Sign in successful!');
    
    // Get the auth_id from the session
    const authId = signInData.user.id;
    console.log(`Your auth_id is: ${authId}`);
    
    // Check if user already exists in users table
    const { data: existingUser, error: checkError } = await supabase
      .from('users')
      .select('*')
      .eq('auth_id', authId)
      .single();
    
    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 is "no rows returned" error
      console.error('Error checking for existing user:', checkError.message);
      return;
    }
    
    if (existingUser) {
      console.log('\nUser already exists in users table:');
      console.log(`ID: ${existingUser.id}`);
      console.log(`Email: ${existingUser.email}`);
      console.log(`Role: ${existingUser.role}`);
      
      if (existingUser.role !== 'admin') {
        // Update role to admin if not already
        const { error: updateError } = await supabase
          .from('users')
          .update({ role: 'admin' })
          .eq('auth_id', authId);
        
        if (updateError) {
          console.error('Error updating user role:', updateError.message);
          return;
        }
        
        console.log('\nUser role updated to admin!');
      }
    } else {
      // Create new user in users table
      const { data: newUser, error: insertError } = await supabase
        .from('users')
        .insert([
          {
            auth_id: authId,
            email: email,
            role: 'admin'
          }
        ])
        .select()
        .single();
      
      if (insertError) {
        console.error('Error creating user:', insertError.message);
        return;
      }
      
      console.log('\nAdmin user created successfully!');
      console.log(`ID: ${newUser.id}`);
      console.log(`Email: ${newUser.email}`);
      console.log(`Role: ${newUser.role}`);
    }
    
    console.log('\nYou should now be able to log in to the admin dashboard.');
    
  } catch (error) {
    console.error('Unexpected error:', error);
  } finally {
    rl.close();
  }
}

createAdminUser();
