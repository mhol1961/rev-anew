import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import Link from 'next/link';
import { jobListings } from '@/data/jobListings';

export const metadata: Metadata = {
  title: 'Careers - Join Our Team | Technology Alliance Solutions',
  description: 'Join our team of technology experts. Explore career opportunities in CRM implementation, marketing automation, system integration, and more.',
  keywords: 'careers, jobs, technology careers, CRM jobs, marketing automation careers, system integration jobs',
};

export default function CareersPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
        {/* Hero Section */}
        <AnimatedSection className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-navy dark:text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Be part of a dynamic team that's transforming businesses through innovative technology solutions. 
              We're looking for passionate professionals to help shape the future of business automation.
            </p>
          </div>
        </AnimatedSection>

        {/* Why Work With Us Section */}
        <AnimatedSection className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy dark:text-white mb-6">
                Why Work With Us?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="text-primary-blue text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-4">
                  Innovation First
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Work with cutting-edge technologies and be at the forefront of business automation innovation.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="text-primary-blue text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-4">
                  Growth Opportunities
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Continuous learning, professional development, and clear career advancement paths.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="text-primary-blue text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-4">
                  Collaborative Culture
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Join a supportive team environment where your ideas matter and collaboration drives success.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Open Positions Section */}
        <AnimatedSection className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy dark:text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Explore our current job opportunities and find your perfect role.
              </p>
            </div>
            
            <div className="grid gap-8">
              {jobListings.map((job) => (
                <div key={job.id} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary-navy dark:text-white mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="text-primary-blue font-medium">{job.department}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{job.location}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{job.type}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {job.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary-light/20 text-primary-blue text-sm rounded-full">
                          {job.experience}
                        </span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">
                          {job.salary || 'Competitive Salary'}
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 md:mt-0 md:ml-8">
                      <Link href={`/careers/${job.id}`}>
                        <AnimatedButton className="bg-primary-blue hover:bg-primary-navy text-white">
                          View Details
                        </AnimatedButton>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy dark:text-white mb-6">
                Benefits & Perks
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-primary-blue text-4xl mb-4">💼</div>
                <h3 className="text-lg font-bold text-primary-navy dark:text-white mb-2">
                  Competitive Salary
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Market-competitive compensation packages
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-primary-blue text-4xl mb-4">🏥</div>
                <h3 className="text-lg font-bold text-primary-navy dark:text-white mb-2">
                  Health Benefits
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive health, dental, and vision coverage
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-primary-blue text-4xl mb-4">🏠</div>
                <h3 className="text-lg font-bold text-primary-navy dark:text-white mb-2">
                  Remote Work
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Flexible remote and hybrid work options
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-primary-blue text-4xl mb-4">📚</div>
                <h3 className="text-lg font-bold text-primary-navy dark:text-white mb-2">
                  Learning Budget
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Annual budget for courses and certifications
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy dark:text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            <Link href="/contact">
              <AnimatedButton className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4">
                Get In Touch
              </AnimatedButton>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  );
}
