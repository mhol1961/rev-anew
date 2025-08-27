import Link from 'next/link';
import Image from 'next/image';
import { FaBuilding, FaChartLine, FaUsers, FaLaptopCode } from 'react-icons/fa';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { getCaseStudies } from '@/lib/supabase';
import { IndustryResultsSection, CTASection } from './CaseStudiesClient';

// Helper function to get icon and colors based on industry
function getIndustryIconAndColors(industry: string) {
  const industryMap: { [key: string]: { icon: typeof FaBuilding; bgColor: string; iconColor: string } } = {
    'Manufacturing': {
      icon: FaBuilding,
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    'SaaS Technology': {
      icon: FaChartLine,
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    'Healthcare': {
      icon: FaUsers,
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    'Financial Services': {
      icon: FaLaptopCode,
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      iconColor: 'text-orange-600 dark:text-orange-400'
    }
  }
  
  return industryMap[industry] || {
    icon: FaBuilding,
    bgColor: 'bg-gray-100 dark:bg-gray-900/30',
    iconColor: 'text-gray-600 dark:text-gray-400'
  }
}

export default async function CaseStudies() {
  // Get published case studies from database
  const dbCaseStudies = await getCaseStudies();
  
  // Transform database data to match the UI format
  const caseStudies = dbCaseStudies.map((study) => {
    const { icon, bgColor, iconColor } = getIndustryIconAndColors(study.industry || '');
    return {
      id: study.slug,
      title: study.title,
      client: study.client,
      industry: study.industry,
      challenge: study.challenge,
      solution: study.solution,
      results: study.results ? study.results.split('\n').map(result => result.replace(/^• /, '')) : [],
      image: study.featured_image || '/images/photos/DefaultCaseStudy.png',
      icon,
      bgColor,
      iconColor
    };
  });
  return (
    <PageLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#143758] to-[#5AAADD] py-20 md:py-28 hero-section">
          {/* Diagonal lines pattern overlay */}
          <svg width="100%" height="100%" style={{position: "absolute", top: 0, left: 0, zIndex: 0}} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="lines" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40 L40 0" stroke="#ffffff13" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lines)"/>
          </svg>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
            <div className="md:flex items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Client Success Stories
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-lg">
                  Discover how our technology solutions have transformed businesses across industries with measurable results and ROI.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <AnimatedButton className="bg-white text-primary-navy hover:bg-white/90 border-transparent">
                      Discuss Your Project
                    </AnimatedButton>
                  </Link>
                  <Link href="/services">
                    <AnimatedButton className="bg-white/20 hover:bg-white/30 text-white border-white border-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105">
                      Explore Our Services
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
              
              <div className="md:w-2/5">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/photos/ClientSuccessStories.png?v=2"
                    alt="Technology Implementation Results"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <AnimatedSection className="py-16 bg-white dark:bg-primary-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Featured Case Studies
              </h2>
              <p
                className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                See how our clients have achieved remarkable results with our technology solutions and expertise.
              </p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((caseStudy, index) => (
                <div 
                  key={caseStudy.id}
                  className={`relative rounded-xl overflow-hidden shadow-lg ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className="bg-white dark:bg-primary-slate/40 rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                      {/* Image Section - Always showing on mobile, left/right based on index in desktop */}
                      <div className="md:w-2/5 relative"> {/* Reverted width for case study image */}
                        <div className="relative h-64 md:h-full w-full"> {/* Reverted height to h-64 md:h-full */}
                          <Image 
                            src={caseStudy.image} // Source now includes ?v=2 from the array
                            alt={caseStudy.title}
                            fill
                            className="object-cover" // Kept object-cover
                            sizes="(max-width: 768px) 100vw, 40vw" // Reverted sizes attribute
                          />
                          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/30 to-transparent"></div> {/* Kept reduced overlay opacity */}
                          
                          {/* Mobile-only title overlay */}
                          <div className="absolute inset-x-0 bottom-0 p-6 md:hidden">
                            <h3 className="text-2xl font-bold text-white mb-1">{caseStudy.title}</h3>
                            <p className="text-white/90">{caseStudy.client}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="md:w-3/5 p-6 md:p-8"> {/* Reverted width for case study text */}
                        {/* Desktop title - hidden on mobile */}
                        <div className="hidden md:block mb-5">
                          <div className={`w-12 h-12 rounded-full ${caseStudy.bgColor} flex items-center justify-center mb-4`}>
                            <caseStudy.icon className={`${caseStudy.iconColor} text-xl`} />
                          </div>
                          <h3 className="text-2xl font-bold text-primary-navy dark:text-white">{caseStudy.title}</h3>
                          <p className="text-primary-blue dark:text-blue-400 font-medium">{caseStudy.client} | {caseStudy.industry}</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-primary-navy dark:text-white mb-2">Challenge</h4>
                            <p className="text-primary-slate dark:text-white/80">{caseStudy.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-primary-navy dark:text-white mb-2">Solution</h4>
                            <p className="text-primary-slate dark:text-white/80">{caseStudy.solution}</p>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold text-primary-navy dark:text-white mb-3">Results</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {caseStudy.results.map((result, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                <span className="text-primary-slate dark:text-white/80">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-6">
                          <Link href={`/contact?ref=${caseStudy.id}`}>
                            <span className="text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center">
                              Discuss a similar project
                              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Industry Results Section */}
        <AnimatedSection className="py-16 bg-primary-light dark:bg-primary-slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-navy dark:text-white mb-4">
                Results By Industry
              </h2>
              <p
                className="text-lg text-primary-slate dark:text-white/80 max-w-3xl mx-auto"
              >
                We deliver measurable improvements across a wide range of industries
              </p>
            </div>

            <IndustryResultsSection />
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-16 bg-white dark:bg-primary-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CTASection />
          </div>
        </AnimatedSection>
      </main>
    </PageLayout>
  );
}
