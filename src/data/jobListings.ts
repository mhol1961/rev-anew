export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  qualifications: string[];
  benefits: string[];
  salary?: string;
  postedDate: string;
}

export const jobListings: JobListing[] = [
  {
    id: 'senior-crm-implementation-specialist',
    title: 'Senior CRM Implementation Specialist',
    department: 'Technology Solutions',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '5+ years',
    summary: 'Lead CRM implementations and drive digital transformation for enterprise clients.',
    description: 'We are seeking an experienced Senior CRM Implementation Specialist to join our growing team. You will be responsible for leading complex CRM implementations, working directly with clients to understand their business processes, and delivering solutions that drive measurable results.',
    responsibilities: [
      'Lead end-to-end CRM implementation projects for enterprise clients',
      'Conduct business process analysis and requirements gathering sessions',
      'Design and configure CRM solutions including Salesforce, HubSpot, and Microsoft Dynamics',
      'Manage project timelines, deliverables, and client communications',
      'Provide training and support to client teams during go-live phases',
      'Collaborate with technical teams on custom integrations and data migrations',
      'Develop best practices and implementation methodologies',
      'Mentor junior team members and contribute to knowledge sharing'
    ],
    requirements: [
      'Bachelor\'s degree in Business, Information Technology, or related field',
      '5+ years of experience in CRM implementation and consulting',
      'Expert-level knowledge of Salesforce, HubSpot, or Microsoft Dynamics',
      'Strong project management skills with PMP certification preferred',
      'Experience with data migration and system integrations',
      'Excellent communication and client-facing skills',
      'Ability to translate business requirements into technical solutions'
    ],
    qualifications: [
      'Salesforce Administrator/Developer certification',
      'HubSpot Implementation Specialist certification',
      'Microsoft Dynamics 365 certification',
      'Experience with API integrations and middleware platforms',
      'Knowledge of marketing automation platforms',
      'Previous consulting or agency experience preferred'
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work arrangements (remote/hybrid)',
      'Professional development and certification reimbursement',
      '401(k) with company matching',
      'Unlimited PTO policy',
      'Latest technology and equipment provided'
    ],
    salary: '$85,000 - $120,000',
    postedDate: '2025-01-15'
  },
  {
    id: 'marketing-automation-specialist',
    title: 'Marketing Automation Specialist',
    department: 'Digital Marketing',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    summary: 'Design and execute sophisticated marketing automation campaigns that drive lead generation and customer engagement.',
    description: 'Join our dynamic marketing team as a Marketing Automation Specialist. You\'ll be responsible for creating, implementing, and optimizing marketing automation workflows that nurture leads and drive conversions for our clients across various industries.',
    responsibilities: [
      'Design and implement marketing automation workflows and campaigns',
      'Develop lead scoring models and customer segmentation strategies',
      'Create email marketing campaigns with A/B testing and optimization',
      'Set up and manage marketing automation platforms (HubSpot, Marketo, Pardot)',
      'Analyze campaign performance and provide data-driven recommendations',
      'Collaborate with sales teams to align marketing and sales processes',
      'Maintain marketing databases and ensure data quality',
      'Stay current with marketing automation trends and best practices'
    ],
    requirements: [
      'Bachelor\'s degree in Marketing, Communications, or related field',
      '3+ years of experience in marketing automation and email marketing',
      'Proficiency with marketing automation platforms (HubSpot, Marketo, Pardot)',
      'Strong analytical skills and experience with marketing analytics',
      'Knowledge of HTML/CSS for email template customization',
      'Experience with CRM systems and lead management processes',
      'Excellent written and verbal communication skills'
    ],
    qualifications: [
      'HubSpot Marketing Hub certification',
      'Marketo Certified Expert (MCE)',
      'Google Analytics certification',
      'Experience with Salesforce or other CRM platforms',
      'Knowledge of marketing attribution models',
      'Experience with landing page optimization and conversion rate optimization'
    ],
    benefits: [
      'Competitive salary with quarterly bonuses',
      'Health, dental, and vision insurance',
      'Remote work flexibility',
      'Professional development budget',
      'Company-sponsored certifications',
      'Flexible PTO policy',
      'Home office setup allowance'
    ],
    salary: '$65,000 - $85,000',
    postedDate: '2025-01-20'
  },
  {
    id: 'technology-integration-developer',
    title: 'Technology Integration Developer',
    department: 'Engineering',
    location: 'Remote / On-site',
    type: 'Full-time',
    experience: '4+ years',
    summary: 'Build robust integrations between business systems and develop custom solutions for complex technical challenges.',
    description: 'We\'re looking for a skilled Technology Integration Developer to join our engineering team. You\'ll work on challenging integration projects, connecting disparate systems and building custom solutions that streamline business processes for our clients.',
    responsibilities: [
      'Develop and maintain API integrations between various business systems',
      'Build custom middleware solutions for complex data synchronization',
      'Design and implement webhook-based real-time integrations',
      'Create custom applications and tools to support business processes',
      'Troubleshoot and resolve integration issues and performance bottlenecks',
      'Document technical specifications and integration architectures',
      'Collaborate with project managers and clients on technical requirements',
      'Participate in code reviews and maintain coding standards'
    ],
    requirements: [
      'Bachelor\'s degree in Computer Science, Software Engineering, or related field',
      '4+ years of experience in software development and system integrations',
      'Proficiency in multiple programming languages (Python, JavaScript, C#, Java)',
      'Experience with REST APIs, GraphQL, and webhook implementations',
      'Knowledge of database design and SQL optimization',
      'Familiarity with cloud platforms (AWS, Azure, Google Cloud)',
      'Strong problem-solving and debugging skills'
    ],
    qualifications: [
      'Experience with integration platforms (Zapier, MuleSoft, Dell Boomi)',
      'Knowledge of microservices architecture and containerization (Docker)',
      'Experience with message queues and event-driven architectures',
      'Familiarity with DevOps practices and CI/CD pipelines',
      'Understanding of security best practices for API development',
      'Experience with version control systems (Git) and agile methodologies'
    ],
    benefits: [
      'Competitive salary with annual reviews',
      'Comprehensive benefits package',
      'Flexible work location options',
      'Technology stipend for equipment and tools',
      'Conference and training opportunities',
      'Stock options or equity participation',
      'Collaborative and innovative work environment'
    ],
    salary: '$75,000 - $105,000',
    postedDate: '2025-01-18'
  },
  {
    id: 'client-success-manager',
    title: 'Client Success Manager',
    department: 'Customer Success',
    location: 'Hybrid',
    type: 'Full-time',
    experience: '3+ years',
    summary: 'Drive client satisfaction and growth by ensuring successful adoption of our technology solutions.',
    description: 'As a Client Success Manager, you\'ll be the primary point of contact for our key clients, ensuring they achieve maximum value from our technology solutions. You\'ll work closely with clients to understand their evolving needs and identify opportunities for expansion.',
    responsibilities: [
      'Manage relationships with assigned client portfolio',
      'Conduct regular check-ins and business reviews with clients',
      'Monitor client health metrics and proactively address potential issues',
      'Identify upselling and cross-selling opportunities',
      'Coordinate with technical teams to resolve client issues',
      'Develop and execute client success plans and strategies',
      'Gather client feedback and communicate insights to product teams',
      'Create and deliver client training and onboarding programs'
    ],
    requirements: [
      'Bachelor\'s degree in Business, Communications, or related field',
      '3+ years of experience in client success, account management, or consulting',
      'Strong relationship-building and communication skills',
      'Experience with CRM and customer success platforms',
      'Analytical mindset with ability to interpret client data and metrics',
      'Problem-solving skills and ability to work under pressure',
      'Technology-savvy with understanding of business software solutions'
    ],
    qualifications: [
      'Experience in B2B SaaS or technology services industry',
      'Knowledge of marketing automation and CRM platforms',
      'Customer Success Manager (CSM) certification',
      'Experience with client onboarding and training programs',
      'Understanding of business process optimization',
      'Previous experience in a client-facing role at a consulting firm'
    ],
    benefits: [
      'Base salary plus commission structure',
      'Comprehensive health and wellness benefits',
      'Flexible hybrid work arrangement',
      'Professional development and training programs',
      'Performance-based bonuses and incentives',
      'Company-sponsored team building events',
      'Career advancement opportunities'
    ],
    salary: '$60,000 - $80,000 + Commission',
    postedDate: '2025-01-22'
  }
];

export function getJobById(id: string): JobListing | undefined {
  return jobListings.find(job => job.id === id);
}

export function getAllJobs(): JobListing[] {
  return jobListings;
}
