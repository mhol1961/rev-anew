-- Enable Row Level Security
ALTER TABLE IF EXISTS users ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS services ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS tags ENABLE ROW LEVEL SECURITY;

-- Create users table for CMS access
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  auth_id UUID UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  role TEXT NOT NULL DEFAULT 'editor',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  parent_id UUID REFERENCES categories(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create tags table
CREATE TABLE IF NOT EXISTS tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  author_id UUID REFERENCES users(id),
  status TEXT NOT NULL DEFAULT 'draft',
  published_at TIMESTAMP WITH TIME ZONE,
  category_id UUID REFERENCES categories(id),
  seo_title TEXT,
  seo_description TEXT,
  seo_keywords TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog posts to tags junction table
CREATE TABLE IF NOT EXISTS blog_posts_tags (
  blog_post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (blog_post_id, tag_id)
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  icon TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  published_at TIMESTAMP WITH TIME ZONE,
  seo_title TEXT,
  seo_description TEXT,
  seo_keywords TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create case studies table
CREATE TABLE IF NOT EXISTS case_studies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  client_name TEXT,
  industry TEXT,
  challenge TEXT,
  solution TEXT,
  results TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  published_at TIMESTAMP WITH TIME ZONE,
  seo_title TEXT,
  seo_description TEXT,
  seo_keywords TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create case studies to services junction table
CREATE TABLE IF NOT EXISTS case_studies_services (
  case_study_id UUID REFERENCES case_studies(id) ON DELETE CASCADE,
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  PRIMARY KEY (case_study_id, service_id)
);

-- Create resources table
CREATE TABLE IF NOT EXISTS resources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  resource_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft',
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create documents table
CREATE TABLE IF NOT EXISTS documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  file_path TEXT,
  file_type TEXT,
  file_size INTEGER,
  document_type TEXT,
  template_id UUID,
  metadata JSONB,
  resource_id UUID REFERENCES resources(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create document templates table
CREATE TABLE IF NOT EXISTS document_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  template_type TEXT NOT NULL,
  preview_image TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create document template fields table
CREATE TABLE IF NOT EXISTS document_template_fields (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  template_id UUID REFERENCES document_templates(id) ON DELETE CASCADE,
  field_key TEXT NOT NULL,
  display_name TEXT NOT NULL,
  field_type TEXT NOT NULL,
  required BOOLEAN DEFAULT false,
  placeholder TEXT,
  help_text TEXT,
  options JSONB,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(template_id, field_key)
);

-- Create pages table
CREATE TABLE IF NOT EXISTS pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  is_published BOOLEAN DEFAULT false,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE,
  updated_by UUID REFERENCES users(id)
);

-- Create page_blocks table
CREATE TABLE IF NOT EXISTS page_blocks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  data JSONB NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security for new tables
ALTER TABLE IF EXISTS pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS page_blocks ENABLE ROW LEVEL SECURITY;

-- RLS policies for pages and page_blocks
CREATE POLICY "Allow public read access to pages" ON pages FOR SELECT USING (is_published);
CREATE POLICY "Allow admin/editor full access to pages" ON pages FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE users.auth_id = auth.uid())
);

CREATE POLICY "Allow public read access to page_blocks" ON page_blocks FOR SELECT USING (
  EXISTS (SELECT 1 FROM pages WHERE pages.id = page_blocks.page_id AND pages.is_published)
);
CREATE POLICY "Allow admin/editor full access to page_blocks" ON page_blocks FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE users.auth_id = auth.uid())
);

-- Triggers for updated_at
CREATE TRIGGER update_pages_updated_at
BEFORE UPDATE ON pages
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_page_blocks_updated_at
BEFORE UPDATE ON page_blocks
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Create Row Level Security Policies
-- Users can read all content (public)
CREATE POLICY "Allow public read access" ON blog_posts FOR SELECT USING (status = 'published');
CREATE POLICY "Allow public read access" ON services FOR SELECT USING (status = 'published');
CREATE POLICY "Allow public read access" ON case_studies FOR SELECT USING (status = 'published');
CREATE POLICY "Allow public read access" ON resources FOR SELECT USING (status = 'published');
CREATE POLICY "Allow public read access" ON categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON tags FOR SELECT USING (true);

-- Only authenticated users with appropriate roles can modify content
CREATE POLICY "Allow authenticated create access" ON blog_posts FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update access" ON blog_posts FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated delete access" ON blog_posts FOR DELETE USING (auth.role() = 'authenticated');

-- Admin/editor users can read all content (for admin panel)
CREATE POLICY "Allow admin/editor read access to blog_posts" ON blog_posts
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users WHERE users.auth_id = auth.uid()
    )
  );

CREATE POLICY "Allow admin/editor read access to services" ON services
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users WHERE users.auth_id = auth.uid()
    )
  );

CREATE POLICY "Allow admin/editor read access to case_studies" ON case_studies
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users WHERE users.auth_id = auth.uid()
    )
  );

CREATE POLICY "Allow admin/editor read access to resources" ON resources
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users WHERE users.auth_id = auth.uid()
    )
  );

CREATE POLICY "Allow admin/editor read access to documents" ON documents
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users WHERE users.auth_id = auth.uid()
    )
  );

-- Similar policies can be added for INSERT/UPDATE/DELETE as needed

-- Create functions and triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON blog_posts
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_services_updated_at
BEFORE UPDATE ON services
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_case_studies_updated_at
BEFORE UPDATE ON case_studies
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_resources_updated_at
BEFORE UPDATE ON resources
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_documents_updated_at
BEFORE UPDATE ON documents
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_categories_updated_at
BEFORE UPDATE ON categories
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_tags_updated_at
BEFORE UPDATE ON tags
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- RLS policy: allow user to read their own row
CREATE POLICY "Allow user to read own row" ON users
  FOR SELECT
  USING (auth.uid() = auth_id);
