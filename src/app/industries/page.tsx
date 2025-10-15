import { Metadata } from 'next';
import HeroIndustries from '@/components/industries/HeroIndustries';
import IndustryGrid from '@/components/industries/IndustryGrid';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Industries We Serve | Technology Alliance Solutions',
  description: 'Delivering specialized CRM, ERP, and automation solutions across healthcare, manufacturing, government, technology, and professional services sectors with proven results.',
  keywords: 'industry solutions, healthcare CRM, manufacturing ERP, government technology, technology consulting, professional services automation',
  openGraph: {
    title: 'Industries We Serve | Technology Alliance Solutions',
    description: 'Empowering organizations across diverse sectors with tailored CRM, ERP, and automation solutions.',
    type: 'website',
    url: 'https://www.technologyalliancesolutions.com/industries',
    images: [
      {
        url: '/images/hero-image-industry-page.png',
        width: 1200,
        height: 630,
        alt: 'Technology Alliance Solutions Industries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve | Technology Alliance Solutions',
    description: 'Empowering organizations across diverse sectors with tailored CRM, ERP, and automation solutions.',
    images: ['/images/hero-image-industry-page.png'],
  },
  alternates: {
    canonical: 'https://www.technologyalliancesolutions.com/industries',
  },
};

export default function IndustriesPage() {
  // JSON-LD structured data for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.technologyalliancesolutions.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Industries',
        item: 'https://www.technologyalliancesolutions.com/industries',
      },
    ],
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        {/* Hero section */}
        <HeroIndustries />

        {/* Industry cards grid */}
        <IndustryGrid />

        {/* CTA section */}
        <CTASection
          title="Ready to Transform Your Industry?"
          description="Partner with Technology Alliance Solutions to leverage cutting-edge CRM, ERP, and automation technologies tailored to your industry needs."
          primaryButtonText="Schedule a Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View Our Services"
          secondaryButtonLink="/services"
        />
      </main>
    </>
  );
}
