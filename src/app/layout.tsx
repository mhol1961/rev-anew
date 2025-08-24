import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';
import { siteMetadata, generateMetadata, generateStructuredData } from '@/data/seoMetadata';

// Configure the Inter font
const inter = Inter({ subsets: ['latin'] });

// Define viewport configuration separately as per Next.js 15+ recommendations
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// Generate site-wide metadata
export const metadata: Metadata = {
  ...generateMetadata(
    'Expert Tech Integration & Consulting',
    'Technology Alliance Solutions provides expert technology integration, CRM implementation, marketing automation, and consulting services for enterprise businesses.',
    `${siteMetadata.siteUrl}${siteMetadata.logo}`,
    '/'
  ),
  keywords: 'CRM implementation, technology integration, marketing automation, tech consulting, system optimization, enterprise solutions, business automation',
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the Inter font class and other base styles to the body */}
      <body className={`${inter.className} bg-background text-foreground flex flex-col min-h-screen overflow-x-hidden`}>
        {/* Schema.org JSON-LD structured data */}
        <Script
          id="schema-org-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={generateStructuredData('Organization', {
            name: siteMetadata.siteName,
            url: siteMetadata.siteUrl,
            logo: `${siteMetadata.siteUrl}${siteMetadata.logo}`,
            sameAs: Object.values(siteMetadata.socialLinks),
            address: {
              '@type': 'PostalAddress',
              streetAddress: siteMetadata.address.split(',')[0].trim(),
              addressLocality: 'Atlanta',
              addressRegion: 'GA',
              postalCode: '30326',
              addressCountry: 'US'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: siteMetadata.phone,
              contactType: 'customer service',
              email: siteMetadata.email
            },
            description: siteMetadata.description
          })}
        />
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
