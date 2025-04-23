&apos;use client';

import Image from &apos;next/image';
import { FaStar as StarFilled } from &apos;react-icons/fa';
import { FaRegStar as StarEmpty } from &apos;react-icons/fa';

export default function WhyChooseUs() {
  // Function to render star ratings
  const renderStars = (count: number) => {
    return (
      <div className=&quot;flex">
        {[...Array(5)].map((_, i) => (
          i < count ? (
            <StarFilled key={i} className=&quot;text-yellow-500 mr-0.5&quot; />
          ) : (
            <StarEmpty key={i} className=&quot;text-gray-300 mr-0.5&quot; />
          )
        ))}
      </div>
    );
  };

  return (
    <main className=&quot;pt-24 pb-16 dark:bg-primary-navy">
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:bg-primary-navy">
        {/* Hero Section - Full screen height like homepage */}
        <section className=&quot;relative h-screen overflow-hidden -mt-24 mb-16">
          {/* Background image with overlay */}
          <div className=&quot;absolute inset-0 z-0">
            <Image
              src={`/images/photos/WhyChooseUs.png?v=${new Date().getTime()}`}
              alt=&quot;Why Choose TAS&quot;
              fill
              className=&quot;object-contain object-left&quot;
              priority
              sizes=&quot;100vw&quot;
            />
            {/* Dark overlay for better text visibility in both light and dark modes */}
            <div className=&quot;absolute inset-0 bg-gradient-to-r from-primary-navy/30 to-primary-blue/20"></div>
          </div>
          
          {/* Grid pattern overlay for visual texture */}
          <div className=&quot;absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none z-[1]"></div>

          {/* Content Container */}
          <div className=&quot;relative h-full z-10 flex items-center">
            <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8">
              <div className=&quot;flex flex-col items-start justify-center h-full pt-24">
                {/* Top heading with &quot;TAS&quot; in blue - larger size and more space */}
                <h1 className=&quot;text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]">
                  Why Choose <span className=&quot;text-primary-blue dark:text-primary-blue">TAS</span>?
                </h1>
                
                {/* Line under main header */}
                <div className=&quot;w-24 h-0.5 bg-white mb-6"></div>
                
                {/* Integrity quote text - 40% smaller than before */}
                <h2 className=&quot;text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight max-w-3xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]">
                  <span className=&quot;text-primary-blue dark:text-primary-blue">Integrity</span> is about doing the right thing, even when no one is watching...
                </h2>
                
                {/* Bottom text - aligned left, restored to original */}
                <div className=&quot;mt-4 self-start mb-20">
                  <p className=&quot;text-base md:text-lg text-white max-w-3xl [text-shadow:_1px_1px_3px_rgb(0_0_0_/_70%)]">
                    Finding the right technology partner can make all the difference in your business success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator removed */}
        </section>

        {/* Main content section */}
        <div className=&quot;grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16 dark:bg-primary-navy">
          <div className=&quot;lg:col-span-3 space-y-6">
            <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white mb-4">
              Finding the Right Tech Partner: Why a Custom Fit Delivers Real Results
            </h2>
            <p className=&quot;text-gray-700 dark:text-gray-100">
              Choosing a partner to implement and manage vital technology like CRM, marketing automation, and system integrations is a critical decision. Today&apos;s market is crowded, featuring everything from household-name global consulting firms to specialized experts and budget-focused offshore teams. Cutting through the noise to find a partner that truly understands your business and delivers tangible results requires looking beyond flashy presentations and brand size.
            </p>

            <h3 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mt-8">
              Understanding Your Options: The Tech Partner Landscape
            </h3>
            <p className=&quot;text-gray-700 dark:text-gray-100 mb-4">
              Companies seeking technology help generally encounter a few main types of providers:
            </p>

            <div className=&quot;space-y-4 pl-4">
              <div>
                <p className=&quot;font-bold text-primary-blue dark:text-primary-red">1. The Global Consulting Giants:</p>
                <p className=&quot;text-gray-700 dark:text-gray-100">
              Think large, established firms with worldwide reach and extensive resources. They excel at handling massive projects, often for Fortune 500 companies, applying well-defined processes across many industries. Names like Technology Source (with its vendor sourcing model [technology-source.com]) or TechUnity (leveraging strategic alliances [techunity.com]) sometimes operate within or adjacent to this large-scale provider space. Their strength lies in breadth and established methodologies.
                </p>
              </div>

              <div>
                <p className=&quot;font-bold text-primary-blue dark:text-primary-red">2. The Niche Technology Specialists:</p>
                <p className=&quot;text-gray-700 dark:text-gray-100">
                  These companies are laser-focused, often mastering a single software platform or a very specific process like a particular marketing automation tool [crm.consulting]. If you need deep expertise in one isolated area, they can be invaluable.
                </p>
              </div>

              <div>
                <p className=&quot;font-bold text-primary-blue dark:text-primary-red">3. The Offshore / Budget-Focused Providers:</p>
                <p className=&quot;text-gray-700 dark:text-gray-100">
                  Driven primarily by cost savings, these partners use global teams to perform tasks at lower price points. They can be effective for clearly defined, less complex projects where the budget is the main concern.
                </p>
              </div>
            </div>

            <h3 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mt-8">
              The Technology Alliance Solutions (TAS) Advantage: Partnership That Powers Performance
            </h3>
            <p className=&quot;text-gray-700 dark:text-gray-100 mb-4">
              While every provider type serves a purpose, Technology Alliance Solutions (TAS) offers a compelling alternative, especially for businesses that want more than just an order-taker. TAS blends enterprise-level know-how with the kind of dedicated attention often missing from larger players.
            </p>

            <div className=&quot;space-y-4 pl-4">
              <div>
                <p className=&quot;font-bold text-primary-blue dark:text-primary-red">• Beyond Frameworks: A Truly Personalized Approach</p>
                <p className=&quot;text-gray-700 dark:text-gray-100">
                  Where giant firms might lean on standardized playbooks, TAS starts by listening. We know every business challenge is unique, even if the underlying technology is common. We dig deep to understand your specific goals, existing systems, and company culture before recommending a solution. It&apos;s not just about installing software; it&apos;s about achieving the business outcomes you need.
                </p>
              </div>

              <div>
                <p className=&quot;font-bold text-primary-blue dark:text-primary-red">• Seeing the Whole Picture: Integrated Solutions</p>
                <p className=&quot;text-gray-700 dark:text-gray-100">
                  Optimizing one system rarely transforms a business. Real gains come when CRM, marketing automation, email, and other tools work together smoothly. Unlike specialists focused on a single piece, TAS excels at designing and implementing these crucial integrations, ensuring data flows correctly and your teams have a unified view. We believe in building bridges between systems, not just silos.
                </p>
              </div>

              <div>
                <p className=&quot;font-bold text-primary-blue dark:text-primary-red">• Real Partnership, Lasting Value:</p>
                <p className=&quot;text-gray-700 dark:text-gray-100">
                  TAS operates on the principle that technology projects are partnerships, not just transactions. You&apos;ll work directly with experienced consultants invested in your success [tsa.com]. This means clear communication, proactive troubleshooting, and the flexibility to adjust as your needs change [tdsusa.net]. We stick around to offer strategic guidance long after the initial setup, ensuring you continue to get the most from your investment—a level of dedicated support that larger, multi-layered firms often struggle to provide consistently across all clients.
                </p>
              </div>
            </div>

            <h3 className=&quot;text-2xl font-bold text-primary-navy dark:text-white mt-8">
              Making the Smart Choice
            </h3>
            <p className=&quot;text-gray-700 dark:text-gray-100">
              Global giants offer scale, specialists bring focused depth, and budget providers compete on price. Technology Alliance Solutions delivers a powerful combination: the strategic vision to see the big picture, the technical skill to connect the dots flawlessly, and the dedicated service that feels like we&apos;re part of your team. For companies seeking tailored technology solutions, seamless integration, and a partner genuinely focused on driving measurable success, TAS offers a distinct and compelling advantage.
            </p>
          </div>

          <div className=&quot;lg:col-span-2">
            <div className=&quot;sticky top-28">
              <div className=&quot;bg-white dark:bg-primary-slate rounded-xl shadow-xl overflow-hidden mb-8">
                <div className=&quot;relative h-64 w-full">
                  <Image 
                    src=&quot;/images/photos/TASCompCollab.png&quot; 
                    alt=&quot;TAS Collaboration&quot; 
                    fill
                    style={{ objectFit: &apos;cover' }}
                    className=&quot;transition-opacity duration-500 ease-in-out&quot;
                  />
                </div>
                <div className=&quot;p-6">
                  <h3 className=&quot;text-xl font-bold text-primary-navy dark:text-white mb-3">
                    Technology Alliance Solutions
                  </h3>
                  <p className=&quot;text-gray-700 dark:text-white/90 mb-4">
                    We partner with you to deliver tailored technology solutions that drive measurable business results.
                  </p>
                  <div className=&quot;flex justify-center">
                    <a 
                      href=&quot;/contact&quot; 
                      className=&quot;inline-block px-6 py-3 bg-primary-blue hover:bg-primary-navy text-white font-medium rounded-lg transition-colors duration-300 transform hover:scale-105"
                    >
                      Contact Us Today
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Chart Section */}
        <div className=&quot;mb-16">
          <h2 className=&quot;text-3xl font-bold text-primary-navy dark:text-white text-center mb-8">
            How We Compare
          </h2>
          
          <div className=&quot;overflow-x-auto">
            <table className=&quot;min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-lg overflow-hidden shadow-lg">
              <thead className=&quot;bg-primary-light dark:bg-primary-navy">
                <tr>
                  <th scope=&quot;col&quot; className=&quot;px-6 py-4 text-left text-sm font-bold text-primary-navy dark:text-white uppercase tracking-wider w-1/5">
                    Feature
                  </th>
                  <th scope=&quot;col&quot; className=&quot;px-6 py-4 text-left text-sm font-bold text-primary-navy dark:text-white uppercase tracking-wider bg-primary-blue/10 dark:bg-primary-red/20 w-1/5">
                    Technology Alliance Solutions (TAS)
                  </th>
                  <th scope=&quot;col&quot; className=&quot;px-6 py-4 text-left text-sm font-bold text-primary-navy dark:text-white uppercase tracking-wider w-1/5">
                    Global Consulting Giant
                  </th>
                  <th scope=&quot;col&quot; className=&quot;px-6 py-4 text-left text-sm font-bold text-primary-navy dark:text-white uppercase tracking-wider w-1/5">
                    Niche Technology Specialist
                  </th>
                  <th scope=&quot;col&quot; className=&quot;px-6 py-4 text-left text-sm font-bold text-primary-navy dark:text-white uppercase tracking-wider w-1/5">
                    Offshore / Budget Provider
                  </th>
                </tr>
              </thead>
              <tbody className=&quot;bg-white dark:bg-primary-slate divide-y divide-gray-200 dark:divide-gray-700">
                {/* Service Scope */}
                <tr>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-white">
                    Service Scope
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-100 bg-primary-blue/5 dark:bg-primary-red/10">
                    <div className=&quot;mb-1">{renderStars(5)}</div>
                    Holistic & Integrated (CRM, MA, Integrations, Strategy)
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-100">
                    <div className=&quot;mb-1">{renderStars(4)}</div>
                    Very Broad, All-Encompassing
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-100">
                    <div className=&quot;mb-1">{renderStars(2)}</div>
                    Deep but Narrow Expertise
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-100">
                    <div className=&quot;mb-1">{renderStars(2)}</div>
                    Often Task-Specific or Project-Based
                  </td>
                </tr>
                
                {/* Approach */}
                <tr>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-white">
                    Approach
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-100 bg-primary-blue/5 dark:bg-primary-red/10">
                    <div className=&quot;mb-1">{renderStars(5)}</div>
                    Tailored, Strategy-First, Custom Fit
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-100">
                    <div className=&quot;mb-1">{renderStars(2)}</div>
                    Often Standardized Frameworks, Process-Driven
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-100">
                    <div className=&quot;mb-1">{renderStars(4)}</div>
                    Highly Specialized within Niche
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-100">
                    <div className=&quot;mb-1">{renderStars(2)}</div>
                    Process/Task Oriented
                  </td>
                </tr>
                
                {/* Client Relationship */}
                <tr>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-white">
                    Client Relationship
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-100 bg-primary-blue/5 dark:bg-primary-red/10">
                    <div className=&quot;mb-1">{renderStars(5)}</div>
                    Personalized, Partnership-Driven, High-Touch
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-100">
                    <div className=&quot;mb-1">{renderStars(2)}</div>
                    Formal, Multi-Layered, Can Feel Impersonal
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300">
                    <div className=&quot;mb-1">{renderStars(3)}</div>
                    Often Tool/Platform Focused
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300">
                    <div className=&quot;mb-1">{renderStars(1)}</div>
                    Typically Transactional
                  </td>
                </tr>
                
                {/* Team Structure */}
                <tr>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-white">
                    Team Structure
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-100 bg-primary-blue/5 dark:bg-primary-red/10">
                    <div className=&quot;mb-1">{renderStars(5)}</div>
                    Dedicated Teams, Direct Senior Access
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-100">
                    <div className=&quot;mb-1">{renderStars(2)}</div>
                    Large, Potentially Rotational Teams
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300">
                    <div className=&quot;mb-1">{renderStars(4)}</div>
                    Small, Focused Experts
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300">
                    <div className=&quot;mb-1">{renderStars(2)}</div>
                    Often Remote/Offshore, Variable Quality
                  </td>
                </tr>
                
                {/* Agility/Flexibility */}
                <tr>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-white">
                    Agility/Flexibility
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-100 bg-primary-blue/5 dark:bg-primary-red/10">
                    <div className=&quot;mb-1">{renderStars(5)}</div>
                    High, Adaptive to Evolving Client Needs
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-100">
                    <div className=&quot;mb-1">{renderStars(2)}</div>
                    Can be Bureaucratic, Slower to Pivot
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300">
                    <div className=&quot;mb-1">{renderStars(4)}</div>
                    High Flexibility within their Niche
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300">
                    <div className=&quot;mb-1">{renderStars(2)}</div>
                    Varies Greatly by Provider
                  </td>
                </tr>
                
                {/* Integration Focus */}
                <tr>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-white">
                    Integration Focus
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-100 bg-primary-blue/5 dark:bg-primary-red/10">
                    <div className=&quot;mb-1">{renderStars(5)}</div>
                    Core Strength, Cross-Platform Expertise
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300">
                    <div className=&quot;mb-1">{renderStars(3)}</div>
                    Capability Exists, Can be Complex/Costly
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300">
                    <div className=&quot;mb-1">{renderStars(1)}</div>
                    Often Limited Outside of Niche Area
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300">
                    <div className=&quot;mb-1">{renderStars(1)}</div>
                    Usually Minimal, Focus on Specific Task
                  </td>
                </tr>
                
                {/* Strategic Input */}
                <tr>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-white">
                    Strategic Input
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300 bg-primary-blue/5 dark:bg-primary-red/10">
                    <div className=&quot;mb-1">{renderStars(5)}</div>
                    High, Focused on Business Outcomes & Long-Term Value
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300">
                    <div className=&quot;mb-1">{renderStars(3)}</div>
                    High-Level, Sometimes Generic Recommendations
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300">
                    <div className=&quot;mb-1">{renderStars(2)}</div>
                    Strategic within the Niche only
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300">
                    <div className=&quot;mb-1">{renderStars(1)}</div>
                    Minimal to None
                  </td>
                </tr>
                
                {/* Overall Value */}
                <tr>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm font-medium text-gray-900 dark:text-white">
                    Overall Value
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300 bg-primary-blue/5 dark:bg-primary-red/10">
                    <div className=&quot;mb-1">{renderStars(5)}</div>
                    Optimal Blend: Expertise, Personalization, Results
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300">
                    <div className=&quot;mb-1">{renderStars(3)}</div>
                    Value in Scale, Brand Recognition, Breadth
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300">
                    <div className=&quot;mb-1">{renderStars(3)}</div>
                    Value in Deep Niche Expertise
                  </td>
                  <td className=&quot;px-6 py-4 whitespace-normal text-sm text-gray-700 dark:text-gray-300">
                    <div className=&quot;mb-1">{renderStars(2)}</div>
                    Value Primarily in Cost Savings
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className=&quot;bg-gradient-to-r from-primary-blue to-primary-navy dark:from-primary-slate dark:to-primary-navy rounded-xl shadow-xl p-8 text-center">
          <h2 className=&quot;text-3xl font-bold text-white mb-4">
            Ready to Experience the TAS Difference?
          </h2>
          <p className=&quot;text-white text-lg mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our tailored approach can transform your technology implementation and deliver measurable business results.
          </p>
          <a 
            href=&quot;/contact&quot; 
            className=&quot;inline-block px-8 py-4 bg-white text-primary-navy hover:bg-primary-light font-bold rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
