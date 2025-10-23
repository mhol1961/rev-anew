import { Metadata } from 'next';

// Metadata for the page
export const metadata: Metadata = {
  title: 'Sitemap | REV-ANEW',
  description: 'Explore all pages on the REV-ANEW website with our comprehensive sitemap.'
};

export default function SitemapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
