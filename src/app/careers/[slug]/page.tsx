import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import Link from 'next/link';
import { getJobPostingBySlug } from '@/lib/supabase';

interface JobDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const job = await getJobPostingBySlug(resolvedParams.slug);

  if (!job) {
    return {
      title: 'Job Not Found | Technology Alliance Solutions',
    };
  }

  return {
    title: `${job.title} - ${job.department} | Technology Alliance Solutions`,
    description: job.description.replace(/<[^>]*>/g, '').substring(0, 160),
    keywords: `${job.title}, ${job.department}, ${job.location}, ${job.type}, careers, jobs`,
  };
}

export const revalidate = 0;

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const resolvedParams = await params;
  const job = await getJobPostingBySlug(resolvedParams.slug);

  if (!job) {
    notFound();
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
        {/* Job Header */}
        <AnimatedSection className="pt-32 pb-12 bg-gradient-to-br from-primary-navy to-primary-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <Link href="/careers" className="hover:underline">
                  ← Back to Careers
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {job.title}
              </h1>
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {job.department}
                </span>
                <span className="text-white/70">•</span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </span>
                <span className="text-white/70">•</span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {job.type}
                </span>
              </div>
              {job.posted_date && (
                <p className="mt-4 text-white/80">
                  Posted {formatDate(job.posted_date)}
                  {job.closing_date && ` • Closes ${formatDate(job.closing_date)}`}
                </p>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Job Content */}
        <AnimatedSection className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 lg:p-12">
              {/* Quick Info Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {job.experience_level && (
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Experience Level</h3>
                    <p className="text-lg font-semibold text-primary-navy dark:text-white">{job.experience_level}</p>
                  </div>
                )}
                {job.salary_range && (
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Salary Range</h3>
                    <p className="text-lg font-semibold text-primary-navy dark:text-white">{job.salary_range}</p>
                  </div>
                )}
              </div>

              {/* Job Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  About the Role
                </h2>
                <div
                  className="prose prose-lg dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
              </div>

              {/* Responsibilities */}
              {job.responsibilities && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    Responsibilities
                  </h2>
                  <div
                    className="prose prose-lg dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: job.responsibilities }}
                  />
                </div>
              )}

              {/* Qualifications */}
              {job.qualifications && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Required Qualifications
                  </h2>
                  <div
                    className="prose prose-lg dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: job.qualifications }}
                  />
                </div>
              )}

              {/* Preferred Qualifications */}
              {job.preferred_qualifications && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Preferred Qualifications
                  </h2>
                  <div
                    className="prose prose-lg dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: job.preferred_qualifications }}
                  />
                </div>
              )}

              {/* Benefits */}
              {job.benefits && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-primary-navy dark:text-white mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                    Benefits & Perks
                  </h2>
                  <div
                    className="prose prose-lg dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: job.benefits }}
                  />
                </div>
              )}

              {/* Application CTA */}
              <div className="border-t-2 border-gray-200 dark:border-gray-700 pt-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-4">
                    Ready to Apply?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                    Join our team and help transform businesses through innovative technology solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {job.application_url ? (
                      <a
                        href={job.application_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <AnimatedButton className="bg-primary-blue hover:bg-primary-navy text-white px-8 py-3 text-lg">
                          Apply Now
                        </AnimatedButton>
                      </a>
                    ) : job.contact_email ? (
                      <a
                        href={`mailto:${job.contact_email}?subject=Application for ${job.title}`}
                        className="inline-block"
                      >
                        <AnimatedButton className="bg-primary-blue hover:bg-primary-navy text-white px-8 py-3 text-lg">
                          Apply via Email
                        </AnimatedButton>
                      </a>
                    ) : (
                      <Link href="/contact">
                        <AnimatedButton className="bg-primary-blue hover:bg-primary-navy text-white px-8 py-3 text-lg">
                          Contact Us to Apply
                        </AnimatedButton>
                      </Link>
                    )}
                    <Link href="/careers">
                      <AnimatedButton className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 text-lg">
                        View All Positions
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Work at TAS Section */}
        <AnimatedSection className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-navy dark:text-white text-center mb-12">
              Why Work at Technology Alliance Solutions?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-2">
                  Innovation First
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Work with cutting-edge technologies and shape the future of business automation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-2">
                  Growth Opportunities
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  $5,000 annual learning budget, certifications, mentorship, and clear career paths.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-navy dark:text-white mb-2">
                  Collaborative Culture
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Join a supportive team where your ideas matter and work-life balance is prioritized.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  );
}
