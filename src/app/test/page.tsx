'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function TestPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-primary-navy dark:text-white">Test Page</h1>
        <p className="text-lg text-primary-slate dark:text-gray-300">
          This is a test page to verify routing is working correctly.
        </p>
      </div>
    </PageLayout>
  );
}
