'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';

interface Event {
  id: string;
  title: string;
  description: string;
  type: 'training' | 'webinar' | 'conference' | 'workshop';
  date: string;
  time: string;
  location: string;
  isVirtual: boolean;
  registrationUrl: string;
  status: 'upcoming' | 'past' | 'registration-open' | 'sold-out';
}

export default function EventsPage() {
  // Static events data (will be replaced with CMS eventually)
  const events: Event[] = [
    {
      id: '1',
      title: 'CRM Implementation Masterclass',
      description: 'Learn the fundamentals of successful CRM implementation, from planning to go-live.',
      type: 'training',
      date: '2025-02-15',
      time: '10:00 AM - 4:00 PM EST',
      location: 'Virtual Training Center',
      isVirtual: true,
      registrationUrl: '/contact',
      status: 'registration-open'
    },
    {
      id: '2',
      title: 'Marketing Automation Workshop',
      description: 'Hands-on workshop covering advanced marketing automation strategies and best practices.',
      type: 'workshop',
      date: '2025-02-28',
      time: '2:00 PM - 5:00 PM EST',
      location: 'Virtual Workshop',
      isVirtual: true,
      registrationUrl: '/contact',
      status: 'registration-open'
    },
    {
      id: '3',
      title: 'Data Migration Strategies Webinar',
      description: 'Essential strategies for successful data migration during system implementations.',
      type: 'webinar',
      date: '2025-03-10',
      time: '1:00 PM - 2:30 PM EST',
      location: 'Online',
      isVirtual: true,
      registrationUrl: '/contact',
      status: 'upcoming'
    },
    {
      id: '4',
      title: 'Business Technology Summit 2025',
      description: 'Annual conference featuring the latest trends in business technology and automation.',
      type: 'conference',
      date: '2025-04-22',
      time: '9:00 AM - 6:00 PM EST',
      location: 'Downtown Convention Center',
      isVirtual: false,
      registrationUrl: '/contact',
      status: 'upcoming'
    },
    {
      id: '5',
      title: 'System Integration Best Practices',
      description: 'Past webinar covering integration challenges and solutions. Recording available.',
      type: 'webinar',
      date: '2025-01-15',
      time: '2:00 PM - 3:00 PM EST',
      location: 'Online',
      isVirtual: true,
      registrationUrl: '/contact',
      status: 'past'
    },
    {
      id: '6',
      title: 'Advanced CRM Customization',
      description: 'Deep dive into CRM customization techniques and workflow automation.',
      type: 'training',
      date: '2025-01-08',
      time: '10:00 AM - 2:00 PM EST',
      location: 'Virtual Training Center',
      isVirtual: true,
      registrationUrl: '/contact',
      status: 'past'
    }
  ];

  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const types = ['all', 'training', 'webinar', 'conference', 'workshop'];
  const statuses = ['all', 'upcoming', 'registration-open', 'past'];

  const filteredEvents = events.filter(event => {
    const typeMatch = selectedType === 'all' || event.type === selectedType;
    const statusMatch = selectedStatus === 'all' || event.status === selectedStatus;
    return typeMatch && statusMatch;
  });

  const getTypeIcon = (type: string) => {
    const iconMap: Record<string, string> = {
      'training': '🎓',
      'webinar': '💻',
      'conference': '🏢',
      'workshop': '🔧'
    };
    return iconMap[type] || '📅';
  };

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { color: string; label: string }> = {
      'upcoming': { color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300', label: 'Upcoming' },
      'registration-open': { color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300', label: 'Registration Open' },
      'past': { color: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300', label: 'Past Event' },
      'sold-out': { color: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300', label: 'Sold Out' }
    };
    return statusMap[status] || { color: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300', label: status };
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
              <span className="text-gray-900 dark:text-white">Training & Events</span>
            </nav>
          </div>
        </div>

        {/* Hero section */}
        <div className="bg-gradient-to-r from-primary-blue to-blue-600 dark:from-blue-800 dark:to-blue-900 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold">Training & Events</h1>
              <p className="mt-4 text-lg text-blue-100">
                Join our training sessions and industry events to enhance your team's technology skills and stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>

        {/* Filters section */}
        <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 py-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Event Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        selectedType === type
                          ? 'bg-primary-blue text-white'
                          : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      {type === 'all' ? 'All Types' : (
                        <>
                          <span className="mr-1.5">{getTypeIcon(type)}</span>
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Event Status
                </label>
                <div className="flex flex-wrap gap-2">
                  {statuses.map((status) => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        selectedStatus === status
                          ? 'bg-primary-blue text-white'
                          : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      {status === 'all' ? 'All Events' : status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="container mx-auto px-4 py-12">
          {/* Results count */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredEvents.length} of {events.length} events
            </p>
          </div>

          {/* Events grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => {
              const statusInfo = getStatusBadge(event.status);
              return (
                <div
                  key={event.id}
                  className="group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-gray-900/50 hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{getTypeIcon(event.type)}</span>
                        <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${statusInfo.color}`}>
                          {statusInfo.label}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {event.isVirtual ? '💻 Virtual' : '📍 In-Person'}
                      </span>
                    </div>
                    
                    <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white group-hover:text-primary-blue dark:group-hover:text-blue-400">
                      {event.title}
                    </h3>
                    
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                      {event.description}
                    </p>
                    
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className="mr-2">📅</span>
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className="mr-2">⏰</span>
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className="mr-2">📍</span>
                        {event.location}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                        {event.type}
                      </span>
                      <Link
                        href={event.registrationUrl}
                        className="text-sm font-medium text-primary-blue dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 flex items-center"
                      >
                        {event.status === 'past' ? 'View Details' : 'Register'}
                        <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No results message */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No events found matching your filters.</p>
              <button
                onClick={() => {
                  setSelectedType('all');
                  setSelectedStatus('all');
                }}
                className="mt-4 text-primary-blue dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* CTA sections */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {/* Custom Training CTA */}
            <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-8 text-center">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">Need Custom Training?</h3>
              <p className="text-blue-700 dark:text-blue-300 mb-6">
                We can create customized training programs tailored to your team's specific needs and technology stack.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-primary-blue hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors"
              >
                Request Custom Training
              </Link>
            </div>

            {/* Newsletter CTA */}
            <div className="rounded-lg bg-primary-light/20 dark:bg-gray-800 p-8 text-center">
              <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-3">Stay Updated</h3>
              <p className="text-primary-slate dark:text-gray-300 mb-6">
                Get notified about upcoming events, training sessions, and industry insights.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md border border-primary-blue dark:border-blue-600 text-primary-blue dark:text-blue-400 hover:bg-primary-blue hover:text-white dark:hover:bg-blue-600 dark:hover:text-white px-6 py-3 text-base font-medium transition-colors"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}