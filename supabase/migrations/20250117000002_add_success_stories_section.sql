-- Migration: Add Success Stories Section to CMS
-- This adds the Success Stories section with its editable fields

-- Insert Success Stories section for home page
INSERT INTO cms_sections (page_id, section_key, section_type, display_order, status)
SELECT
  id,
  'success_stories',
  'Success Stories Section',
  3,
  'published'
FROM cms_pages
WHERE route = '/';

-- Insert content fields for Success Stories section
INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'heading',
  'text',
  'Success Stories',
  1
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'success_stories';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'subtext',
  'textarea',
  'See how TAS has helped leading organizations modernize technology, improve operations, and drive measurable outcomes.',
  2
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'success_stories';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'background_image',
  'url',
  '/images/photos/Two_People_looking_at_screen1.png',
  3
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'success_stories';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'button_primary_text',
  'text',
  'Become Our Next Success Story',
  4
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'success_stories';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'button_primary_url',
  'url',
  '/contact',
  5
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'success_stories';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'button_secondary_text',
  'text',
  'Read More Case Studies →',
  6
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'success_stories';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'button_secondary_url',
  'url',
  '/case-studies',
  7
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'success_stories';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'badge_1_icon',
  'text',
  '📅',
  8
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'success_stories';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'badge_1_text',
  'text',
  'In Business Since 2016',
  9
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'success_stories';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'badge_2_icon',
  'text',
  '🌍',
  10
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'success_stories';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'badge_2_text',
  'text',
  'Trusted by Industry Leaders Worldwide',
  11
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'success_stories';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'badge_3_icon',
  'text',
  '🏅',
  12
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'success_stories';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'badge_3_text',
  'text',
  'Certified Multi Platform Partner',
  13
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'success_stories';
