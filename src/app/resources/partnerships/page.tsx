'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';

interface Partner {
  id: string;
  name: string;
  logo: string;
  category: 'technology' | 'integration' | 'consulting' | 'training';
  description: string;
  benefits: string[];
  website: string;
  partnerLevel: 'platinum' | 'gold' | 'silver' | 'certified';
}

export default function PartnershipsPage() {
  const partners: Partner[] = [
    {
      id: '1',
      name: 'Microsoft',
      logo: '🔷',
      category: 'technology',
      description: 'Gold Partner for Microsoft 365, Azure, and Power Platform solutions.',
      benefits: [
        'Priority support access',
        'Advanced training resources',
        'Early access to new features',
        'Co-marketing opportunities'
      ],
      website: 'https://partner.microsoft.com',
      partnerLevel: 'gold'
    },
    {
      id: '2',
      name: 'Salesforce',
      logo: '☁️',
      category: 'technology',
      description: 'Certified Consulting Partner for Salesforce CRM and Marketing Cloud.',
      benefits: [
        'Certified implementation expertise',
        'Direct support escalation',
        'Partner success resources',
        'Joint solution development'
      ],
      website: 'https://partners.salesforce.com',
      partnerLevel: 'certified'
    },
    {
      id: '3',
      name: 'GoHighLevel',
      logo: '🚀',
      category: 'technology',
      description: 'Platinum Partner for GoHighLevel white-label solutions and automation.',
      benefits: [
        'White-label platform access',
        'Custom branding options',
        'Priority feature requests',
        'Revenue sharing programs'
      ],
      website: 'https://www.gohighlevel.com/partners',
      partnerLevel: 'platinum'
    },
    {
      id: '4',
      name: 'HubSpot',
      logo: '🔶',
      category: 'technology',
      description: 'Solutions Partner for HubSpot CRM, Marketing, and Sales Hub.',
      benefits: [
        'Technical certification',
        'Partner portal access',
        'Lead registration program',
        'Solution showcase opportunities'
      ],
      website: 'https://www.hubspot.com/partners',
      partnerLevel: 'gold'
    },
    {
      id: '5',
      name: 'Zapier',
      logo: '⚡',
      category: 'integration',
      description: 'Certified Integration Partner for workflow automation and app connections.',
      benefits: [
        'Premium API access',
        'Custom integration support',
        'Partner app directory listing',
        'Technical documentation'
      ],
      website: 'https://zapier.com/partners',
      partnerLevel: 'certified'
    },
    {
      id: '6',
      name: 'Make (Integromat)',
      logo: '🔄',
      category: 'integration',
      description: 'Advanced Partner for complex automation scenarios and integrations.',
      benefits: [
        'Advanced scenario building',
        'Custom app development',
        'Priority support queue',
        'Training workshops'
      ],
      website: 'https://www.make.com/partners',
      partnerLevel: 'silver'
    },
    {
      id: '7',
      name: 'Stripe',
      logo: '💳',
      category: 'integration',
      description: 'Verified Partner for payment processing and financial integrations.',
      benefits: [
        'Payment integration expertise',
        'PCI compliance support',
        'Revenue optimization tools',
        'Partner commission program'
      ],
      website: 'https://stripe.com/partners',
      partnerLevel: 'certified'
    },
    {
      id: '8',
      name: 'AWS',
      logo: '☁️',
      category: 'technology',
      description: 'Select Consulting Partner for cloud infrastructure and services.',
      benefits: [
        'Cloud architecture expertise',
        'Cost optimization tools',
        'Technical training credits',
        'Solution validation'
      ],
      website: 'https://aws.amazon.com/partners',
      partnerLevel: 'silver'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', 'technology', 'integration', 'consulting', 'training'];

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

  const getPartnerLevelBadge = (level: string) => {
    const levelMap: Record<string, { color: string; label: string }> = {
      'platinum': { color: 'bg-gradient-to-r from-gray-400 to-gray-600 text-white', label: 'Platinum Partner' },
      'gold': { color: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white', label: 'Gold Partner' },
      'silver': { color: 'bg-gradient-to-r from-gray-300 to-gray-500 text-white', label: 'Silver Partner' },
      'certified': { color: 'bg-gradient-to-r from-blue-400 to-blue-600 text-white', label: 'Certified Partner' }
    };
    return levelMap[level] || { color: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300', label: level };
  };

  return (
    <PageLayout>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-gray-50 dark:bg-gray-800 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex text-sm">
              <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                Home
              </Link>
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
              <Link href="/resources" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                Resources
              </Link>
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
              <span className="text-gray-900 dark:text-white">Partner Network</span>
            </nav>
          </div>
        </div>

        {/* Hero section */}
        <div className="bg-gradient-to-r from-primary-blue to-blue-600 dark:from-blue-800 dark:to-blue-900 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold">Our Partner Network</h1>
              <p className="mt-4 text-lg text-blue-100">
                We collaborate with industry-leading technology partners to deliver comprehensive solutions that drive your business forward.
              </p>
            </div>
          </div>
        </div>

        {/* Partner Benefits Overview */}
        <div className="bg-gray-50 dark:bg-gray-800/50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Why Our Partnerships Matter</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Certified Expertise</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Access to certified professionals and validated solutions
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Priority Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Direct escalation paths and faster issue resolution
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Latest Innovation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Early access to new features and technologies
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Better Pricing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Partner discounts and volume licensing benefits
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="container mx-auto px-4 py-12">
          {/* Category Filter */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Browse by Category</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-blue text-white'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {category === 'all' ? 'All Partners' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPartners.map((partner) => {
              const levelInfo = getPartnerLevelBadge(partner.partnerLevel);
              return (
                <div
                  key={partner.id}
                  className="group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-gray-900/50"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{partner.logo}</span>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{partner.name}</h3>
                          <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium mt-1 ${levelInfo.color}`}>
                            {levelInfo.label}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {partner.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-200 mb-2 uppercase">Partner Benefits:</h4>
                      <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                        {partner.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 dark:text-green-400 mr-1">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300">
                        {partner.category}
                      </span>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary-blue dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 flex items-center"
                      >
                        Learn More
                        <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Become a Partner CTA */}
          <div className="mt-16 rounded-lg bg-gradient-to-r from-primary-blue to-blue-600 dark:from-blue-800 dark:to-blue-900 p-8 text-white">
            <div className="md:flex md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold">Become a Partner</h2>
                <p className="mt-2 text-blue-100">
                  Join our partner network and grow your business with Technology Alliance Solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-white hover:bg-gray-100 text-primary-blue px-6 py-3 text-base font-medium shadow-sm transition-colors"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center rounded-md border border-white text-white hover:bg-white hover:text-primary-blue px-6 py-3 text-base font-medium transition-colors"
                >
                  View Resources
                </Link>
              </div>
            </div>
          </div>

          {/* Partner Success Stories */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Partnership Success</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">📈</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">500+ Joint Implementations</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Successfully delivered over 500 projects leveraging partner technologies and expertise.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">🏅</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">15+ Certifications</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Our team holds 15+ partner certifications ensuring expert-level implementations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">98% Client Satisfaction</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Partner-based solutions achieve 98% client satisfaction ratings.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">24/7 Partner Support</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Round-the-clock support through our partner network ensures continuous operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}