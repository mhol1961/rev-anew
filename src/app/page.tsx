'use client';

import { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import SuccessStoriesSection from '@/components/home/SuccessStoriesSection';
import CTASection from '@/components/home/CTASection';
import { getSectionContent } from '@/lib/cms';
import type { CMSSectionWithFields } from '@/types/cms';

export default function Home() {
  const [heroContent, setHeroContent] = useState<CMSSectionWithFields | null>(null);
  const [solutionsContent, setSolutionsContent] = useState<CMSSectionWithFields | null>(null);
  const [successStoriesContent, setSuccessStoriesContent] = useState<CMSSectionWithFields | null>(null);
  const [ctaContent, setCtaContent] = useState<CMSSectionWithFields | null>(null);

  useEffect(() => {
    // Fetch CMS content for sections
    const loadCMSContent = async () => {
      const hero = await getSectionContent('/', 'hero');
      const solutions = await getSectionContent('/', 'solutions');
      const successStories = await getSectionContent('/', 'success_stories');
      const cta = await getSectionContent('/', 'cta');
      setHeroContent(hero);
      setSolutionsContent(solutions);
      setSuccessStoriesContent(successStories);
      setCtaContent(cta);
    };
    loadCMSContent();
  }, []);

  return (
    <PageLayout>
      <main className="flex-1">
        {/* Hero Section - CMS Enabled */}
        <HeroSection cmsContent={heroContent} />

        {/* Solutions Section - CMS Enabled */}
        <SolutionsSection cmsContent={solutionsContent} />

        {/* Success Stories Section - CMS Enabled */}
        <SuccessStoriesSection cmsContent={successStoriesContent} />

        {/* CTA Section - CMS Enabled */}
        <CTASection cmsContent={ctaContent} />
      </main>
    </PageLayout>
  );
}
