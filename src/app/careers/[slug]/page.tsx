import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getJobPostingBySlug, getJobPostings } from '@/lib/supabase';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedButton from '@/components/ui/AnimatedButton';
import Link from 'next/link';

interface JobDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const jobs = await getJobPostings();
  const activeJobs = jobs.filter(job => job.status === 'active');
  return activeJobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobPostingBySlug(slug);
  
  if (!job) {
    return {
      title: 'Job Not Found | Technology Alliance Solutions',
      description: 'The requested job posting could not be found.',
    };
  }

  return {
    title: `${job.title} - Careers | Technology Alliance Solutions`,
    description: job.description.replace(/<[^>]*>/g, '').substring(0, 160),
    keywords: `careers, ${job.title}, ${job.department}, ${job.location}, technology jobs`,
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = await getJobPostingBySlug(slug);

  if (!job || job.status !== 'active') {
    notFound();
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Recently';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Parse responsibilities, qualifications, and benefits from HTML or text
  const parseListFromHtml = (htmlString: string | null): string[] => {
    if (!htmlString) return [];
    // Extract list items from HTML or split by line breaks
    const listItems = htmlString.match(/<li[^>]*>(.*?)<\/li>/gi);
    if (listItems) {
      return listItems.map(item => item.replace(/<[^>]*>/g, '').trim());
    }
    // Fallback: split by line breaks and filter empty lines
    return htmlString.split('\n').filter(line => line.trim()).slice(0, 10);
  };

  const responsibilities = parseListFromHtml(job.responsibilities);
  const qualifications = parseListFromHtml(job.qualifications);
  const preferredQualifications = parseListFromHtml(job.preferred_qualifications);
  const benefits = parseListFromHtml(job.benefits);

  return (
    <PageLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-blue to-blue-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link href="/careers" className="text-blue-200 hover:text-white transition-colors">
                ← Back to Careers
              </Link>
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500 bg-opacity-20 text-blue-100">
                {job.department}
              </span>
              <span className="text-blue-200 text-sm">
                Posted {formatDate(job.posted_date)}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
            <div className="flex flex-wrap gap-4 text-blue-100">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {job.location}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {job.type}
              </div>
              {job.experience_level && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {job.experience_level}
                </div>
              )}
              {job.salary_range && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  {job.salary_range}
                </div>
              )}
            </div>
            {job.closing_date && (
              <div className="mt-4 p-3 bg-yellow-500/20 border border-yellow-400/30 rounded-lg">
                <p className="text-yellow-100 text-sm">
                  ⏰ Application deadline: {formatDate(job.closing_date)}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Job Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About This Role</h2>
                <div 
                  className="prose prose-lg max-w-none dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
              </div>

              {/* Responsibilities */}
              {responsibilities.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Responsibilities</h3>
                  <ul className="space-y-3">
                    {responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-blue mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {qualifications.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Requirements</h3>
                  <ul className="space-y-3">
                    {qualifications.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-blue mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Preferred Qualifications */}
              {preferredQualifications.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Preferred Qualifications</h3>
                  <ul className="space-y-3">
                    {preferredQualifications.map((qualification, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{qualification}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Button */}
              <div className="bg-primary-light/20 dark:bg-primary-blue/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Ready to Apply?</h3>
                {job.application_url ? (
                  <a 
                    href={job.application_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <AnimatedButton className="w-full bg-primary-blue hover:bg-primary-navy text-white font-semibold py-3 px-6">
                      Apply Now
                    </AnimatedButton>
                  </a>
                ) : job.contact_email ? (
                  <a href={`mailto:${job.contact_email}?subject=Application for ${job.title}`} className="block w-full">
                    <AnimatedButton className="w-full bg-primary-blue hover:bg-primary-navy text-white font-semibold py-3 px-6">
                      Email Application
                    </AnimatedButton>
                  </a>
                ) : (
                  <Link href="/contact" className="block w-full">
                    <AnimatedButton className="w-full bg-primary-blue hover:bg-primary-navy text-white font-semibold py-3 px-6">
                      Contact Us to Apply
                    </AnimatedButton>
                  </Link>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 text-center">
                  We'll review your application and get back to you within 48 hours.
                </p>
              </div>

              {/* Benefits */}
              {benefits.length > 0 && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What We Offer</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Job Details */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Job Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Department:</span>
                    <p className="text-sm text-gray-900 dark:text-white">{job.department}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Location:</span>
                    <p className="text-sm text-gray-900 dark:text-white">{job.location}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Employment Type:</span>
                    <p className="text-sm text-gray-900 dark:text-white">{job.type}</p>
                  </div>
                  {job.experience_level && (
                    <div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Experience Level:</span>
                      <p className="text-sm text-gray-900 dark:text-white">{job.experience_level}</p>
                    </div>
                  )}
                  {job.salary_range && (
                    <div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Salary Range:</span>
                      <p className="text-sm text-gray-900 dark:text-white">{job.salary_range}</p>
                    </div>
                  )}
                  {job.closing_date && (
                    <div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Application Deadline:</span>
                      <p className="text-sm text-gray-900 dark:text-white">{formatDate(job.closing_date)}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
