-- Fix admin access by creating proper RLS policies
-- Run this in your Supabase SQL editor

-- Allow users to insert their own profile when they sign up
CREATE POLICY "Users can insert own profile" ON users FOR INSERT WITH CHECK (auth.uid() = auth_id);

-- Allow users to read their own profile  
CREATE POLICY "Users can read own profile" ON users FOR SELECT USING (auth.uid() = auth_id);

-- Allow users to update their own profile
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (auth.uid() = auth_id);

-- Allow admins to manage all users
CREATE POLICY "Admins can manage users" ON users FOR ALL USING (
  EXISTS (
    SELECT 1 FROM users 
    WHERE users.auth_id = auth.uid() 
    AND users.role = 'admin'
  )
);

-- Temporary policy to allow initial admin creation (remove after setup)
-- This allows any authenticated user to create a user profile if none exists for their auth_id
CREATE POLICY "Allow initial user creation" ON users FOR INSERT WITH CHECK (
  auth.uid() IS NOT NULL AND 
  NOT EXISTS (SELECT 1 FROM users WHERE auth_id = auth.uid())
);

-- Allow authenticated users to read published content
CREATE POLICY "Public can read published blog posts" ON blog_posts FOR SELECT USING (status = 'published');
CREATE POLICY "Public can read published services" ON services FOR SELECT USING (status = 'published');  
CREATE POLICY "Public can read published case studies" ON case_studies FOR SELECT USING (status = 'published');

-- Allow admins to manage all content
CREATE POLICY "Admins can manage blog posts" ON blog_posts FOR ALL USING (
  EXISTS (
    SELECT 1 FROM users 
    WHERE users.auth_id = auth.uid() 
    AND users.role = 'admin'
  )
);

CREATE POLICY "Admins can manage services" ON services FOR ALL USING (
  EXISTS (
    SELECT 1 FROM users 
    WHERE users.auth_id = auth.uid() 
    AND users.role = 'admin'
  )
);

CREATE POLICY "Admins can manage case studies" ON case_studies FOR ALL USING (
  EXISTS (
    SELECT 1 FROM users 
    WHERE users.auth_id = auth.uid() 
    AND users.role = 'admin'
  )
);

-- Allow public read access to categories and other reference data
CREATE POLICY "Public can read categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Admins can manage categories" ON categories FOR ALL USING (
  EXISTS (
    SELECT 1 FROM users 
    WHERE users.auth_id = auth.uid() 
    AND users.role = 'admin'
  )
);