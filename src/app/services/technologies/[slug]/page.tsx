import React from 'react';
import { notFound } from 'next/navigation';
import { getTechnologyBySlug, getTechnologies } from '@/lib/supabase';
import PageLayout from '@/components/layout/PageLayout'; 
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Metadata } from 'next';
import { TechnologySlugHeader, TechnologySlugLeftColumn, TechnologySlugRightColumn } from './TechnologySlugClient';

export const revalidate = 3600; // Revalidate every hour

interface TechnologyDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}


export async function generateStaticParams() {
  const technologies = await getTechnologies();
  return technologies.map((tech) => ({
    slug: tech.slug,
  }));
}

export async function generateMetadata({ params }: TechnologyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const technology = await getTechnologyBySlug(slug);
  
  if (!technology) {
    return {
      title: 'Technology Not Found | Technology Alliance Solutions',
      description: 'The requested technology information could not be found.',
    };
  }

  return {
    title: `${technology.title} - Technology Overview | Technology Alliance Solutions`,
    description: technology.description,
    keywords: `${technology.title}, CRM, marketing automation, technology comparison`,
  };
}

const TechnologyDetailPage = async ({ params }: TechnologyDetailPageProps) => {
  const { slug } = await params;
  const technology = await getTechnologyBySlug(slug);

  if (!technology) {
    notFound(); 
  }

  return (
    <PageLayout>
      <AnimatedSection className="bg-gradient-to-b from-blue-50 to-white dark:from-primary-dark dark:to-primary-slate py-16 md:py-24">
        <div className="container mx-auto px-4">
          <TechnologySlugHeader technology={technology} />

          {/* Main Content Area */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Left Column: Image and Description */}
            <TechnologySlugLeftColumn technology={technology} />

            {/* Right Column: Pros, Cons, Cost */}
            <TechnologySlugRightColumn technology={technology} />
          </div>

        </div>
      </AnimatedSection>
    </PageLayout>
  );
};

export default TechnologyDetailPage;
