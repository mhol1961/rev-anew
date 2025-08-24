import { NextResponse } from 'next/server';

// This array should be updated as new pages are added to the site
const pages = [
  { url: '/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 1.0 },
  { url: '/services', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.9 },
  { url: '/about', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: '/why-choose-us', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: '/case-studies', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: '/contact', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  
  // Service Pages
  { url: '/services/crm', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: '/services/technology-integration', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: '/services/marketing-automation', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: '/services/integration', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { url: '/services/system-optimization', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  
  // Technology Pages
  { url: '/services/technologies', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { url: '/services/technologies/crm', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { url: '/services/technologies/integration', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { url: '/services/technologies/marketing', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { url: '/services/technologies/compare', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  
  // Legal Pages
  { url: '/privacy', lastmod: new Date().toISOString().split('T')[0], changefreq: 'yearly', priority: 0.5 },
  { url: '/terms', lastmod: new Date().toISOString().split('T')[0], changefreq: 'yearly', priority: 0.5 },
  { url: '/sitemap', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.3 },
];

const baseUrl = 'https://technologyalliancesolutions.com';

export async function GET() {
  // Generate XML sitemap
  const xmlSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Return the XML sitemap with appropriate headers
  return new NextResponse(xmlSitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
