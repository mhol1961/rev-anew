import { Metadata } from 'next';

// Metadata for the page
export const metadata: Metadata = {
  title: 'Sitemap | Technology Alliance Solutions',
  description: 'Explore all pages on the Technology Alliance Solutions website with our comprehensive sitemap.'
};

export default function SitemapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
