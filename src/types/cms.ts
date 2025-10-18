export type CMSStatus = 'draft' | 'published'

export type CMSFieldType = 'text' | 'textarea' | 'richtext' | 'image' | 'url' | 'boolean'

export interface CMSPage {
  id: string
  route: string
  page_title: string
  meta_description?: string
  meta_keywords?: string
  status: CMSStatus
  created_at: string
  updated_at: string
  created_by?: string
  updated_by?: string
}

export interface CMSSection {
  id: string
  page_id: string
  section_key: string
  section_type: string
  display_order: number
  status: CMSStatus
  created_at: string
  updated_at: string
}

export interface CMSContentField {
  id: string
  section_id: string
  field_key: string
  field_type: CMSFieldType
  field_value: string | null
  display_order: number
  created_at: string
  updated_at: string
}

// Composite types for easier querying
export interface CMSSectionWithFields extends CMSSection {
  fields: CMSContentField[]
}

export interface CMSPageWithSections extends CMSPage {
  sections: CMSSectionWithFields[]
}

// Helper type for content updates
export interface CMSContentUpdate {
  field_key: string
  field_value: string
}

export interface CMSSectionUpdate {
  section_key: string
  fields: CMSContentUpdate[]
}
