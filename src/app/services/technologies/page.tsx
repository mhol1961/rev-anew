import { getTechnologies } from '@/lib/supabase';
import PageLayout from '@/components/layout/PageLayout';
import TechnologiesClientPage from './TechnologiesClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Platforms & Solutions | Technology Alliance Solutions',
  description: 'Compare and explore CRM, marketing automation, and integration platforms. Find the right technology solution for your business needs.',
  keywords: 'CRM platforms, marketing automation, Salesforce, HubSpot, technology comparison',
};

export const revalidate = 3600; // Revalidate every hour

export default async function TechnologiesPage() {
  const technologies = await getTechnologies();

  return (
    <PageLayout>
      <TechnologiesClientPage technologies={technologies} />
    </PageLayout>
  );
}