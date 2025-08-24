import { Metadata } from 'next';
import { caseStudies } from '@/data/caseStudiesData';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = caseStudies.find(study => study.slug === params.slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Intelligrow',
      description: 'The requested case study could not be found.',
    };
  }
  
  return {
    title: `${caseStudy.title} | Case Study | Intelligrow`,
    description: caseStudy.overview,
    openGraph: {
      title: `${caseStudy.title} | Case Study | Intelligrow`,
      description: caseStudy.overview,
      url: `/case-studies/${caseStudy.slug}`,
      type: 'article',
      images: [
        {
          url: caseStudy.featured_image,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
  };
}
