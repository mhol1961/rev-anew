// Central metadata configuration for the site
// Import this file in any page to use consistent metadata patterns

/**
 * Base metadata configuration for the site
 */
export const siteMetadata = {
  siteName: 'Technology Alliance Solutions',
  siteUrl: 'https://technologyalliancesolutions.com',
  logo: '/images/TAS_LOGO3.png',
  phone: '(404) 205-8405',
  address: '3355 Lenox Rd NE, Suite 1000, Atlanta, GA 30326',
  email: 'info@technologyalliancesolutions.com',
  description: 'Technology Alliance Solutions provides expert technology integration, CRM implementation, marketing automation, and consulting services for enterprise businesses.',
  author: 'Technology Alliance Solutions',
  socialLinks: {
    linkedin: 'https://linkedin.com/company/technology-alliance-solutions',
    twitter: 'https://twitter.com/tech_alliance',
    facebook: 'https://facebook.com/technologyalliancesolutions',
    instagram: 'https://instagram.com/tech_alliance_solutions',
    youtube: 'https://youtube.com/c/technologyalliancesolutions'
  }
};

/**
 * Generate consistent SEO metadata for pages
 */
export function generateMetadata(
  title: string,
  description?: string,
  imageUrl?: string,
  canonicalPath?: string
) {
  const fullTitle = `${title} | ${siteMetadata.siteName}`;
  const desc = description || siteMetadata.description;
  const image = imageUrl || siteMetadata.logo;
  const canonical = canonicalPath ? `${siteMetadata.siteUrl}${canonicalPath}` : undefined;

  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: fullTitle,
    description: desc,
    
    openGraph: {
      title: fullTitle,
      description: desc,
      url: canonical || siteMetadata.siteUrl,
      siteName: siteMetadata.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteMetadata.siteName}`
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [image],
      creator: '@tech_alliance'
    },
    
    // Canonical URL
    alternates: canonical ? {
      canonical: canonical
    } : undefined,
    
    // Bots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large' as const, // Type narrowing to match Next.js Metadata type
        'max-snippet': -1,
      }
    }
  };
}

/**
 * Generate schema.org structured data for pages
 * Usage: Pass this function's output to the dangerouslySetInnerHTML prop of a Script component
 */
export function generateStructuredData(type: string, data: Record<string, unknown>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
  
  return {
    __html: JSON.stringify(structuredData)
  };
}

/**
 * Helper to generate structured data for a service page
 */
export function generateServiceSchema(
  name: string,
  description: string,
  url: string,
  imageUrl?: string
) {
  return generateStructuredData('Service', {
    name: name,
    description: description,
    provider: {
      '@type': 'Organization',
      name: siteMetadata.siteName,
      url: siteMetadata.siteUrl
    },
    url: `${siteMetadata.siteUrl}${url}`,
    image: imageUrl || siteMetadata.logo
  });
}

/**
 * Helper to generate structured data for a blog post
 */
export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  publishDate: string,
  modifiedDate?: string,
  imageUrl?: string,
  authorName?: string
) {
  return generateStructuredData('Article', {
    headline: title,
    description: description, 
    image: imageUrl || siteMetadata.logo,
    url: `${siteMetadata.siteUrl}${url}`,
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Person',
      name: authorName || siteMetadata.author
    },
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}${siteMetadata.logo}`
      }
    }
  });
}
