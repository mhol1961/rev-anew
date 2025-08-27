import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';

interface ResourcePageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface ResourceData {
  title: string;
  description: string;
  content: string;
}

// Static resource data (will be replaced with CMS eventually)
const resourceData: Record<string, ResourceData> = {
  'events': {
    title: 'Training & Events',
    description: 'Join our training sessions and industry events to enhance your team\'s technology skills.',
    content: `Stay tuned for upcoming training sessions and industry events. Our team regularly hosts workshops and participates in technology conferences to help you stay current with the latest trends.
    
    Upcoming events and training opportunities:
    • Monthly CRM Implementation Workshops
    • Quarterly Marketing Automation Seminars  
    • Annual Technology Summit
    • Custom Training Sessions for Enterprise Clients
    
    All training sessions are led by certified professionals with real-world implementation experience.`
  },
  'social-media': {
    title: 'Follow Us Online',
    description: 'Connect with us on social media for the latest updates, tips, and industry news.',
    content: `Stay connected with Technology Alliance Solutions across all major social media platforms:
    
    📘 LinkedIn: Follow us for professional insights, industry updates, and company news
    🐦 Twitter: Get quick tips, announcements, and join technology discussions  
    📘 Facebook: Connect with our community and see client success stories
    📸 Instagram: Behind-the-scenes content and team highlights
    🎥 YouTube: Watch tutorial videos, webinars, and case study presentations
    
    Follow us to stay updated on the latest technology trends, best practices, and exclusive content from our experts.`
  },
  'partnerships': {
    title: 'Technology Partnerships',
    description: 'Learn about our technology partnerships and how they benefit your business solutions.',
    content: `Technology Alliance Solutions maintains strategic partnerships with leading technology providers to deliver comprehensive, integrated solutions:
    
    🚀 **Microsoft Partners**
    • Microsoft Dynamics 365 implementations
    • Azure cloud solutions and migrations  
    • Power Platform development and automation
    • Microsoft 365 optimization and security
    
    ⚡ **Salesforce Partners**
    • Salesforce implementation and customization
    • Lightning platform development
    • Integration with marketing and service clouds
    
    🎯 **HubSpot Partners** 
    • HubSpot CRM setup and optimization
    • Marketing automation workflows
    • Sales enablement and reporting
    
    These partnerships ensure you receive certified expertise, access to latest features, and comprehensive support for your technology investments.`
  }
};

// Generate metadata for the page
export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const resource = resourceData[slug];
  
  if (!resource) {
    return {
      title: 'Resource Not Found | Technology Alliance Solutions',
      description: 'The requested resource could not be found.',
    };
  }
  
  return {
    title: `${resource.title} | Resources | Technology Alliance Solutions`,
    description: resource.description,
  };
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const resource = resourceData[slug];
  
  if (!resource) {
    return notFound();
  }
  
  return (
    <PageLayout>
      <div className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex text-sm">
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link href="/resources" className="text-gray-500 hover:text-gray-700">
                Resources
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-900">{resource.title}</span>
            </nav>
          </div>
        </div>
        
        {/* Resource header */}
        <div className="bg-gradient-to-r from-primary-blue to-primary-accentblue py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <div className="flex-1">
                <h1 className="text-3xl font-bold md:text-4xl">{resource.title}</h1>
                <p className="mt-4 max-w-3xl text-lg text-blue-100">
                  {resource.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Resource content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-xl font-bold">Information</h2>
                <div className="prose prose-blue max-w-none">
                  <div className="text-gray-700 whitespace-pre-line">
                    {resource.content}
                  </div>
                  
                  <div className="mt-8 rounded-lg bg-blue-50 p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Get Involved</h3>
                    <p className="text-blue-700">
                      Ready to take advantage of these resources? Contact our team to learn more about 
                      how we can help you implement the right technology solutions for your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-bold">Need Help?</h2>
                <p className="text-sm text-gray-600">
                  If you have any questions about this resource or need assistance, our team is here to help.
                </p>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
              
              <div className="mt-6 rounded-lg border border-gray-200 bg-primary-light/20 p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-bold text-primary-navy">Related Resources</h2>
                <p className="text-sm text-primary-slate">
                  Explore more resources to help grow your business.
                </p>
                <div className="mt-4">
                  <Link
                    href="/resources"
                    className="inline-flex w-full items-center justify-center rounded-md bg-primary-blue px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-accentblue focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
                  >
                    Browse All Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}