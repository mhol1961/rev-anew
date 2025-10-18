-- Migration: Add Solutions Section to CMS
-- This adds the Solutions section with its editable fields

-- Insert Solutions section for home page
INSERT INTO cms_sections (page_id, section_key, section_type, display_order, status)
SELECT
  id,
  'solutions',
  'Solutions Section',
  2,
  'published'
FROM cms_pages
WHERE route = '/';

-- Insert content fields for Solutions section
INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'tag_text',
  'text',
  'Our Services',
  1
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'solutions';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'heading',
  'text',
  'Proven Solutions That Deliver Results',
  2
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'solutions';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'subtext',
  'textarea',
  'TAS delivers CRM, ERP, Marketing Automation, and Cloud Solutions designed to optimize operations, empower teams, and drive measurable growth across industries.',
  3
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'solutions';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'button_text',
  'text',
  'View All Solutions',
  4
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'solutions';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'button_url',
  'url',
  '/services',
  5
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'solutions';
