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
        {/* Hero Section with Background Image */}
        <AnimatedSection className="relative pt-32 pb-20 min-h-[80vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/hero/join-our-team.png)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Main H1 Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  JOIN OUR
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                  TEAM
                </span>
              </h1>
              
              {/* Professional H2 Subheading */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/95 mb-8 leading-relaxed max-w-3xl">
                Shape the Future of Business Automation with Industry-Leading Technology Solutions
              </h2>
              
              {/* Supporting text */}
              <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl mb-10">
                Join our elite team of technology experts and help transform businesses through cutting-edge CRM implementations, marketing automation, and system integrations.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <AnimatedButton className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 font-semibold shadow-xl">
                  View Open Positions
                </AnimatedButton>
                <AnimatedButton className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white text-lg px-8 py-4 font-semibold">
                  Learn About Our Culture
                </AnimatedButton>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Professional Subtitle Section */}
        <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy dark:text-white mb-8 leading-tight">
              Where Innovation Meets Excellence
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium max-w-4xl mx-auto">
              We're building the next generation of business automation solutions. Join us in creating technology that doesn't just solve problems—it transforms entire industries.
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
