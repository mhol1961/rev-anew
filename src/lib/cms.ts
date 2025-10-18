import { supabase } from '@/lib/supabase'
import type {
  CMSPage,
  CMSSection,
  CMSContentField,
  CMSPageWithSections,
  CMSSectionWithFields,
  CMSSectionUpdate
} from '@/types/cms'

/**
 * Get page content by route with all sections and fields
 * Fetches published content by default
 */
export async function getPageContent(
  route: string,
  includeDrafts = false
): Promise<CMSPageWithSections | null> {

  try {
    // Fetch page
    let pageQuery = supabase
      .from('cms_pages')
      .select('*')
      .eq('route', route)

    if (!includeDrafts) {
      pageQuery = pageQuery.eq('status', 'published')
    }

    const { data: page, error: pageError } = await pageQuery.single()

    if (pageError || !page) {
      console.log(`No CMS content found for route: ${route}`)
      return null
    }

    // Fetch sections for this page
    let sectionsQuery = supabase
      .from('cms_sections')
      .select('*')
      .eq('page_id', page.id)
      .order('display_order', { ascending: true })

    if (!includeDrafts) {
      sectionsQuery = sectionsQuery.eq('status', 'published')
    }

    const { data: sections, error: sectionsError } = await sectionsQuery

    if (sectionsError) {
      console.error('Error fetching sections:', sectionsError)
      return { ...page, sections: [] }
    }

    // Fetch fields for all sections
    const sectionsWithFields: CMSSectionWithFields[] = await Promise.all(
      (sections || []).map(async (section) => {
        const { data: fields } = await supabase
          .from('cms_content_fields')
          .select('*')
          .eq('section_id', section.id)
          .order('display_order', { ascending: true })

        return {
          ...section,
          fields: fields || []
        }
      })
    )

    return {
      ...page,
      sections: sectionsWithFields
    }
  } catch (error) {
    console.error('Error fetching page content:', error)
    return null
  }
}

/**
 * Get a specific section's content with all fields
 */
export async function getSectionContent(
  route: string,
  sectionKey: string,
  includeDrafts = false
): Promise<CMSSectionWithFields | null> {
  const pageContent = await getPageContent(route, includeDrafts)

  if (!pageContent) return null

  const section = pageContent.sections.find(s => s.section_key === sectionKey)
  return section || null
}

/**
 * Get field value from a section
 * Returns null if field not found
 */
export function getFieldValue(
  section: CMSSectionWithFields | null,
  fieldKey: string
): string | null {
  if (!section) return null
  const field = section.fields.find(f => f.field_key === fieldKey)
  return field?.field_value || null
}

/**
 * Get all pages (for admin page selector)
 */
export async function getAllPages(): Promise<CMSPage[]> {

  try {
    const { data, error } = await supabase
      .from('cms_pages')
      .select('*')
      .order('route', { ascending: true })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching pages:', error)
    return []
  }
}

/**
 * Update section fields
 */
export async function updateSectionFields(
  sectionId: string,
  updates: { field_key: string; field_value: string }[]
): Promise<boolean> {

  try {
    // Update each field
    for (const update of updates) {
      const { error } = await supabase
        .from('cms_content_fields')
        .update({ field_value: update.field_value })
        .eq('section_id', sectionId)
        .eq('field_key', update.field_key)

      if (error) {
        console.error(`Error updating field ${update.field_key}:`, error)
        return false
      }
    }

    return true
  } catch (error) {
    console.error('Error updating section fields:', error)
    return false
  }
}

/**
 * Publish a section (change status from draft to published)
 */
export async function publishSection(sectionId: string): Promise<boolean> {

  try {
    const { error } = await supabase
      .from('cms_sections')
      .update({ status: 'published' })
      .eq('id', sectionId)

    if (error) throw error
    return true
  } catch (error) {
    console.error('Error publishing section:', error)
    return false
  }
}

/**
 * Publish a page and all its sections
 */
export async function publishPage(pageId: string): Promise<boolean> {

  try {
    // Update page status
    const { error: pageError } = await supabase
      .from('cms_pages')
      .update({ status: 'published' })
      .eq('id', pageId)

    if (pageError) throw pageError

    // Update all sections status
    const { error: sectionsError } = await supabase
      .from('cms_sections')
      .update({ status: 'published' })
      .eq('page_id', pageId)

    if (sectionsError) throw sectionsError

    return true
  } catch (error) {
    console.error('Error publishing page:', error)
    return false
  }
}

/**
 * Create a new page
 */
export async function createPage(
  route: string,
  page_title: string,
  meta_description?: string
): Promise<CMSPage | null> {

  try {
    const { data, error } = await supabase
      .from('cms_pages')
      .insert({
        route,
        page_title,
        meta_description,
        status: 'draft'
      })
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error creating page:', error)
    return null
  }
}
