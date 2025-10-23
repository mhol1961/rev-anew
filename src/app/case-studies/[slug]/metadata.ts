import { Metadata } from 'next';
import { getCaseStudyBySlug } from '@/lib/supabase';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | REV-ANEW',
      description: 'The requested case study could not be found.',
    };
  }
  
  return {
    title: `${caseStudy.title} | Case Study | REV-ANEW`,
    description: caseStudy.challenge || caseStudy.solution || 'Learn about this successful technology implementation.',
    openGraph: {
      title: `${caseStudy.title} | Case Study | REV-ANEW`,
      description: caseStudy.challenge || caseStudy.solution || 'Learn about this successful technology implementation.',
      url: `/case-studies/${caseStudy.slug}`,
      type: 'article',
      images: caseStudy.featured_image ? [
        {
          url: caseStudy.featured_image,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ] : [],
    },
  };
}
