import { supabase } from '@/lib/supabase'
import type {
  CMSPage,
  CMSSection,
  CMSContentField,
  CMSPageWithSections,
  CMSSectionWithFields
} from '@/types/cms'

/**
 * Server-side: Get page content by route with all sections and fields
 * Fetches published content by default (for SSR/SSG)
 */
export async function getPageContentServer(
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
 * Server-side: Get a specific section's content with all fields
 */
export async function getSectionContentServer(
  route: string,
  sectionKey: string,
  includeDrafts = false
): Promise<CMSSectionWithFields | null> {
  const pageContent = await getPageContentServer(route, includeDrafts)

  if (!pageContent) return null

  const section = pageContent.sections.find(s => s.section_key === sectionKey)
  return section || null
}

/**
 * Server-side: Get field value from a section
 * Returns null if field not found
 */
export function getFieldValueServer(
  section: CMSSectionWithFields | null,
  fieldKey: string
): string | null {
  if (!section) return null
  const field = section.fields.find(f => f.field_key === fieldKey)
  return field?.field_value || null
}
