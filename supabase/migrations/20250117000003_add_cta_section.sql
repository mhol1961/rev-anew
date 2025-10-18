-- Migration: Add CTA Section to CMS
-- This adds the CTA section with its editable fields

-- Insert CTA section for home page
INSERT INTO cms_sections (page_id, section_key, section_type, display_order, status)
SELECT
  id,
  'cta',
  'CTA Section',
  4,
  'published'
FROM cms_pages
WHERE route = '/';

-- Insert content fields for CTA section
INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'heading',
  'text',
  'Ready to Transform Your Business?',
  1
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'cta';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'subtext',
  'textarea',
  'Partner with TAS to unlock the full potential of your CRM, ERP, marketing automation, and cloud platforms. As Certified Partners with Microsoft, Salesforce, HubSpot, Adobe, and ClickDimensions, our team combines deep technical expertise with proven consulting experience to modernize systems, connect data, and deliver measurable business outcomes across ecosystems.',
  2
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'cta';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'button_primary_text',
  'text',
  'Request a Consultation',
  3
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'cta';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'button_primary_url',
  'url',
  '/contact',
  4
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'cta';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'button_secondary_text',
  'text',
  'Explore Solutions',
  5
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'cta';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'button_secondary_url',
  'url',
  '/services',
  6
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'cta';

-- Credibility tiles
INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'stat_1_value',
  'text',
  '50+ Years',
  7
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'cta';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'stat_1_label',
  'text',
  'of Combined Consulting Experience',
  8
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'cta';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'stat_1_subtext',
  'textarea',
  'Deep expertise in CRM, ERP, marketing automation, and cloud solutions.',
  9
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'cta';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'stat_2_value',
  'text',
  'Dozens of Clients',
  10
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'cta';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'stat_2_label',
  'text',
  'Served Across Multiple Industries',
  11
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'cta';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'stat_2_subtext',
  'textarea',
  'Trusted by organizations across healthcare, government, finance, technology, and more.',
  12
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'cta';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'stat_3_value',
  'text',
  'Exceptional Client Satisfaction',
  13
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'cta';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'stat_3_label',
  'text',
  'Trusted by Clients Worldwide',
  14
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'cta';

INSERT INTO cms_content_fields (section_id, field_key, field_type, field_value, display_order)
SELECT
  s.id,
  'stat_3_subtext',
  'textarea',
  'Dedicated to delivering measurable value, partnership, and long term success across every engagement.',
  15
FROM cms_sections s
JOIN cms_pages p ON s.page_id = p.id
WHERE p.route = '/' AND s.section_key = 'cta';
