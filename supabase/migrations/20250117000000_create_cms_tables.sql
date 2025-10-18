-- Create CMS Pages table
CREATE TABLE IF NOT EXISTS cms_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  route TEXT UNIQUE NOT NULL, -- e.g., '/', '/about', '/services/crm'
  page_title TEXT NOT NULL,
  meta_description TEXT,
  meta_keywords TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id),
  updated_by UUID REFERENCES auth.users(id)
);

-- Create CMS Sections table
CREATE TABLE IF NOT EXISTS cms_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES cms_pages(id) ON DELETE CASCADE,
  section_key TEXT NOT NULL, -- e.g., 'hero', 'solutions', 'cta'
  section_type TEXT NOT NULL, -- e.g., 'hero', 'features', 'testimonial'
  display_order INTEGER DEFAULT 0,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(page_id, section_key)
);

-- Create CMS Content Fields table
CREATE TABLE IF NOT EXISTS cms_content_fields (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id UUID REFERENCES cms_sections(id) ON DELETE CASCADE,
  field_key TEXT NOT NULL, -- e.g., 'heading', 'subtext', 'button_text', 'button_url'
  field_type TEXT NOT NULL DEFAULT 'text', -- 'text', 'textarea', 'richtext', 'image', 'url', 'boolean'
  field_value TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(section_id, field_key)
);

-- Create indexes for performance
CREATE INDEX idx_cms_pages_route ON cms_pages(route);
CREATE INDEX idx_cms_pages_status ON cms_pages(status);
CREATE INDEX idx_cms_sections_page_id ON cms_sections(page_id);
CREATE INDEX idx_cms_sections_status ON cms_sections(status);
CREATE INDEX idx_cms_content_fields_section_id ON cms_content_fields(section_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER update_cms_pages_updated_at
  BEFORE UPDATE ON cms_pages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cms_sections_updated_at
  BEFORE UPDATE ON cms_sections
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cms_content_fields_updated_at
  BEFORE UPDATE ON cms_content_fields
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE cms_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms_content_fields ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users (admin only in production)
CREATE POLICY "Enable read access for all users" ON cms_pages
  FOR SELECT USING (true);

CREATE POLICY "Enable all access for authenticated users" ON cms_pages
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Enable read access for all users" ON cms_sections
  FOR SELECT USING (true);

CREATE POLICY "Enable all access for authenticated users" ON cms_sections
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Enable read access for all users" ON cms_content_fields
  FOR SELECT USING (true);

CREATE POLICY "Enable all access for authenticated users" ON cms_content_fields
  FOR ALL USING (auth.role() = 'authenticated');

-- Seed initial data for home page hero
INSERT INTO cms_pages (route, page_title, meta_description, status)
VALUES
  ('/', 'Technology Alliance Solutions - CRM, ERP & Cloud Solutions', 'Trusted experts in CRM, ERP, marketing automation, and cloud solutions. Delivering enterprise technology and consulting services.', 'published')
ON CONFLICT (route) DO NOTHING;

-- Get the page ID and create hero section
DO $$
DECLARE
  home_page_id UUID;
  hero_section_id UUID;
BEGIN
  SELECT id INTO home_page_id FROM cms_pages WHERE route = '/';

  INSERT INTO cms_sections (page_id, section_key, section_type, display_order, status)
  VALUES (home_page_id, 'hero', 'hero', 1, 'published')
  ON CONFLICT (page_id, section_key) DO NOTHING
  RETURNING id INTO hero_section_id;

  -- Create hero content fields
  INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
  VALUES
    (hero_section_id, 'heading', 'text', 'Your Trusted CRM, ERP, Marketing Automation & Cloud Solutions Provider', 1),
    (hero_section_id, 'subtext', 'textarea', 'Empowering organizations to modernize CRM, ERP, marketing, and cloud platforms to achieve greater efficiency, innovation, and measurable ROI through trusted expertise.', 2),
    (hero_section_id, 'button_primary_text', 'text', 'Request a Consultation', 3),
    (hero_section_id, 'button_primary_url', 'url', '/contact', 4),
    (hero_section_id, 'button_secondary_text', 'text', 'Explore Solutions', 5),
    (hero_section_id, 'button_secondary_url', 'url', '/services', 6)
  ON CONFLICT (section_id, field_key) DO NOTHING;
END $$;

COMMENT ON TABLE cms_pages IS 'Stores page-level content and metadata for the CMS';
COMMENT ON TABLE cms_sections IS 'Stores sections within pages (hero, features, etc.)';
COMMENT ON TABLE cms_content_fields IS 'Stores individual content fields within sections';
