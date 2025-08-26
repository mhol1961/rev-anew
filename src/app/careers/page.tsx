import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import Link from 'next/link';
import { getJobPostings } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Careers - Join Our Team | Technology Alliance Solutions',
  description: 'Join our team of technology experts. Explore career opportunities in CRM implementation, marketing automation, system integration, and more.',
  keywords: 'careers, jobs, technology careers, CRM jobs, marketing automation careers, system integration jobs',
};

export const revalidate = 0; // No caching for debugging

export default async function CareersPage() {
  // Get open job postings from database
  const allJobPostings = await getJobPostings();
  const activeJobPostings = allJobPostings.filter(job => job.status === 'open');

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
        {/* Hero Section with Background Image */}
        <AnimatedSection className="relative pt-32 pb-16 min-h-[70vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/hero/join-our-team.png)'
            }}
          ></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-none">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-2xl">
                WE'RE HIRING
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/95 max-w-4xl mx-auto leading-relaxed tracking-wide">
              <span className="drop-shadow-lg">
                Build Your Career in Enterprise Technology Solutions
              </span>
              <br className="hidden md:block" />
              <span className="drop-shadow-lg font-light text-lg md:text-xl lg:text-2xl text-white/90 mt-2 block">
                Join Industry Leaders Driving Digital Transformation Excellence
              </span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Professional Subtitle Section */}
        <AnimatedSection className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              Join our team of technology experts transforming businesses through innovative automation solutions.
            </p>
          </div>
        </AnimatedSection>

        {/* Why Work at TAS Section - Enhanced */}
        <AnimatedSection className="section-padding bg-primary-light/50 dark:bg-dark-card">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="content-header">
              <h2 className="heading-2 text-center mb-4">
                Why Work at Technology Alliance Solutions?
              </h2>
              <p className="body-large text-center max-w-3xl mx-auto">
                Join a team of technology experts who are passionate about transforming businesses through innovative solutions. We offer more than just a job - we offer a career path that grows with you.
              </p>
            </div>
            
            <div className="grid-services mb-12">
              <div className="card-feature hover:border-primary-blue/40 group">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="heading-5 text-center mb-4 group-hover:text-primary-blue transition-colors">
                  Innovation First
                </h3>
                <p className="body-base text-center">
                  Work with cutting-edge Microsoft technologies, AI solutions, and next-generation automation platforms. Shape the future of business technology.
                </p>
              </div>
              
              <div className="card-feature hover:border-primary-blue/40 group">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 mx-auto group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="heading-5 text-center mb-4 group-hover:text-primary-blue transition-colors">
                  Growth Opportunities
                </h3>
                <p className="body-base text-center">
                  $5,000 annual learning budget, Microsoft certification paths, mentorship programs, and clear career advancement opportunities.
                </p>
              </div>
              
              <div className="card-feature hover:border-primary-blue/40 group">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 mx-auto group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="heading-5 text-center mb-4 group-hover:text-primary-blue transition-colors">
                  Collaborative Culture
                </h3>
                <p className="body-base text-center">
                  Join a supportive team environment where your ideas matter, collaboration drives success, and work-life balance is prioritized.
                </p>
              </div>
            </div>

            {/* Company Culture Highlights */}
            <div className="bg-white dark:bg-dark-bg rounded-card p-8 lg:p-12 shadow-card">
              <h3 className="heading-3 text-center mb-8">What Our Team Says</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400/40 to-primary-blue/40 mx-auto mb-4 flex items-center justify-center border-2 border-primary-gray-200 dark:border-dark-border">
                    <span className="text-white font-bold text-lg">SA</span>
                  </div>
                  <p className="body-base italic mb-4">"The learning opportunities here are incredible. I've earned 3 Microsoft certifications in my first year, and the company supported me every step of the way."</p>
                  <p className="body-small font-medium">Sarah Anderson, Solutions Architect</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400/40 to-green-600/40 mx-auto mb-4 flex items-center justify-center border-2 border-primary-gray-200 dark:border-dark-border">
                    <span className="text-white font-bold text-lg">MR</span>
                  </div>
                  <p className="body-base italic mb-4">"Best decision I ever made. The projects are challenging, the team is supportive, and the work truly makes a difference for our clients."</p>
                  <p className="body-small font-medium">Marcus Rodriguez, CRM Implementation Lead</p>
                </div>
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
            
            {activeJobPostings.length > 0 ? (
              <div className="grid gap-8">
                {activeJobPostings.map((job) => (
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
                          {job.posted_date && (
                            <>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-500 dark:text-gray-400 text-sm">Posted {formatDate(job.posted_date)}</span>
                            </>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                          {job.description.replace(/<[^>]*>/g, '').substring(0, 200)}...
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.experience_level && (
                            <span className="px-3 py-1 bg-primary-light/20 text-primary-blue text-sm rounded-full">
                              {job.experience_level}
                            </span>
                          )}
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">
                            {job.salary_range || 'Competitive Salary'}
                          </span>
                          {job.closing_date && (
                            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-sm rounded-full">
                              Closes {formatDate(job.closing_date)}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-6 md:mt-0 md:ml-8">
                        <Link href={`/careers/${job.slug}`}>
                          <AnimatedButton className="bg-primary-blue hover:bg-primary-navy text-white">
                            View Details
                          </AnimatedButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-2">No Open Positions Currently</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We're always looking for talented individuals. Check back soon for new opportunities or send us your resume.
                </p>
                <Link href="/contact">
                  <AnimatedButton className="bg-primary-blue hover:bg-primary-navy text-white">
                    Contact Us About Future Opportunities
                  </AnimatedButton>
                </Link>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Benefits Section - Enhanced */}
        <AnimatedSection className="section-padding bg-white dark:bg-dark-bg">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="content-header">
              <h2 className="heading-2 text-center mb-4">
                Comprehensive Benefits & Perks
              </h2>
              <p className="body-large text-center max-w-2xl mx-auto">
                We invest in our team's success and well-being with competitive benefits and meaningful perks.
              </p>
            </div>
            
            <div className="grid-features">
              <div className="card-feature text-center hover:border-primary-blue/40 group">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="heading-6 mb-3 group-hover:text-primary-blue transition-colors">
                  Competitive Salary
                </h3>
                <p className="body-base">
                  Market-competitive compensation with annual reviews and performance bonuses
                </p>
              </div>
              
              <div className="card-feature text-center hover:border-primary-blue/40 group">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 mx-auto group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                  <span className="text-3xl">🏥</span>
                </div>
                <h3 className="heading-6 mb-3 group-hover:text-primary-blue transition-colors">
                  Health Benefits
                </h3>
                <p className="body-base">
                  100% company-paid health, dental, vision, and life insurance coverage
                </p>
              </div>
              
              <div className="card-feature text-center hover:border-primary-blue/40 group">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 mx-auto group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                  <span className="text-3xl">🏠</span>
                </div>
                <h3 className="heading-6 mb-3 group-hover:text-primary-blue transition-colors">
                  Remote Flexibility
                </h3>
                <p className="body-base">
                  Work from home, hybrid office options, and flexible scheduling
                </p>
              </div>
              
              <div className="card-feature text-center hover:border-primary-blue/40 group">
                <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-6 mx-auto group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/50 transition-colors">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="heading-6 mb-3 group-hover:text-primary-blue transition-colors">
                  Learning Budget
                </h3>
                <p className="body-base">
                  $5,000 annual budget for training, certifications, and conferences
                </p>
              </div>
            </div>

            {/* Additional Benefits Grid */}
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-primary-light/20 dark:bg-dark-card">
                <span className="text-2xl">🏖️</span>
                <div>
                  <h4 className="heading-6 mb-1">Unlimited PTO</h4>
                  <p className="body-small">Take time when you need it</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-primary-light/20 dark:bg-dark-card">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="heading-6 mb-1">Stock Options</h4>
                  <p className="body-small">Share in our company's success</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-primary-light/20 dark:bg-dark-card">
                <span className="text-2xl">🚀</span>
                <div>
                  <h4 className="heading-6 mb-1">Latest Equipment</h4>
                  <p className="body-small">MacBook Pro, monitors, and tools</p>
                </div>
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
            {activeJobPostings.length > 0 && (
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
                Currently showing {activeJobPostings.length} open position{activeJobPostings.length !== 1 ? 's' : ''}.
              </p>
            )}
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
