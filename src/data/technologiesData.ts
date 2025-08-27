export interface TechnologyDetails {
  slug: string;
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  costFactors: string[];
  imageUrl?: string;
  costSummary: string;

  // --- Expanded Feature Set ---
  // Core CRM / Sales
  feature_contactManagement: boolean;
  feature_leadManagement: boolean;
  feature_opportunityManagement: boolean;
  feature_salesPipelineVisualization: boolean;
  feature_salesForecasting: boolean;
  feature_customObjects: boolean; // Ability to create custom data structures

  // Marketing Automation
  feature_emailMarketing: boolean;
  feature_landingPages: boolean; // Built-in or integrated
  feature_leadScoring: boolean;
  feature_marketingAutomationWorkflows: boolean;
  feature_socialMediaIntegration: boolean;

  // Sales & Service Automation
  feature_workflowAutomation: boolean; // General process automation
  feature_salesAutomation: boolean; // Specific sales task automation (sequences, etc.)
  feature_customerServiceTools: boolean; // Ticketing, helpdesk features (native or tight integration)

  // Analytics & Reporting
  feature_standardReporting: boolean;
  feature_customReporting: boolean;
  feature_dashboards: boolean;

  // Platform & Integration
  feature_apiAccess: boolean;
  feature_appMarketplace: boolean; // Availability of an app store/marketplace
  feature_mobileApp: boolean;

  // Pricing & Support
  feature_freeTier: boolean;
  feature_dedicatedSupportOptions: boolean; // Beyond standard support

  // Compliance
  feature_gdprTools: boolean; // Specific tools to aid GDPR compliance
}

// Define data for each technology
// NOTE: Data entries below DO NOT yet reflect the expanded feature set above.
// This will be populated in a subsequent step.
export const technologies: { [key: string]: TechnologyDetails } = {
  salesforce: {
    slug: 'salesforce',
    title: 'Salesforce Sales Cloud',
    description: 'Salesforce Sales Cloud is a leading cloud-based CRM platform designed to help sales teams sell smarter and faster by centralizing customer information, logging interactions, and automating many tasks salespeople previously handled manually.',
    pros: [
      'Highly customizable and scalable platform.',
      'Extensive AppExchange marketplace for integrations.',
      'Robust reporting and analytics capabilities.',
      'Strong community and support resources.'
    ],
    cons: [
      'Can be expensive, especially for smaller businesses.',
      'Complexity can lead to a steep learning curve.',
      'Customization often requires specialized expertise.'
    ],
    costFactors: [
      'Tiered subscription plans (Essentials, Professional, Enterprise, Unlimited).',
      'Costs per user, per month.',
      'Additional costs for add-ons (e.g., CPQ, Pardot).',
      'Implementation and customization services often required.'
    ],
    imageUrl: '/images/photos/salesforce_technologies_page.png',
    costSummary: 'Starts ~$25/user/mo (Essentials)',
    feature_contactManagement: true,
    feature_leadManagement: true,
    feature_opportunityManagement: true,
    feature_salesPipelineVisualization: true,
    feature_salesForecasting: true,
    feature_customObjects: true,
    feature_emailMarketing: true,
    feature_landingPages: true,
    feature_leadScoring: true,
    feature_marketingAutomationWorkflows: true,
    feature_socialMediaIntegration: true,
    feature_workflowAutomation: true,
    feature_salesAutomation: true,
    feature_customerServiceTools: true,
    feature_standardReporting: true,
    feature_customReporting: true,
    feature_dashboards: true,
    feature_apiAccess: true,
    feature_appMarketplace: true,
    feature_mobileApp: true,
    feature_freeTier: false,
    feature_dedicatedSupportOptions: true,
    feature_gdprTools: true,
  },
  'microsoft-dynamics-365': {
    slug: 'microsoft-dynamics-365',
    title: 'Microsoft Dynamics 365 Sales',
    description: 'Microsoft Dynamics 365 Sales is a comprehensive CRM solution that integrates tightly with other Microsoft products like Office 365 and Power BI, offering capabilities for sales force automation, relationship management, and performance analysis.',
    pros: [
      'Seamless integration with the Microsoft ecosystem.',
      'Flexible deployment options (cloud or on-premises).',
      'Strong AI and predictive analytics features (with addons).',
      'Familiar interface for users of Microsoft products.'
    ],
    cons: [
      'Licensing structure can be complex to navigate.',
      'Customization may require developer skills.',
      'Can be perceived as less intuitive than some competitors initially.'
    ],
    costFactors: [
      'Multiple application-specific licenses (Sales Professional, Sales Enterprise).',
      'Costs per user, per month.',
      'Potential need for Power Platform licenses for deeper customization.',
      'Integration costs if outside the Microsoft ecosystem.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    costSummary: 'Starts ~$65/user/mo (Professional)',
    feature_contactManagement: true,
    feature_leadManagement: true,
    feature_opportunityManagement: true,
    feature_salesPipelineVisualization: true,
    feature_salesForecasting: true,
    feature_customObjects: true,
    feature_emailMarketing: true,
    feature_landingPages: true,
    feature_leadScoring: true,
    feature_marketingAutomationWorkflows: true,
    feature_socialMediaIntegration: true,
    feature_workflowAutomation: true,
    feature_salesAutomation: true,
    feature_customerServiceTools: true,
    feature_standardReporting: true,
    feature_customReporting: true,
    feature_dashboards: true,
    feature_apiAccess: true,
    feature_appMarketplace: true,
    feature_mobileApp: true,
    feature_freeTier: false,
    feature_dedicatedSupportOptions: true,
    feature_gdprTools: true,
  },
  hubspot: {
    slug: 'hubspot',
    title: 'HubSpot CRM Suite',
    description: 'HubSpot offers a suite of tools built around a free core CRM, including Marketing Hub, Sales Hub, Service Hub, CMS Hub, and Operations Hub. It focuses on ease of use and providing an all-in-one platform for inbound marketing and sales.',
    pros: [
      'Generous free CRM tier available.',
      'User-friendly interface, easy to learn.',
      'Strong focus on inbound marketing features.',
      'Good integration between its own Hubs.'
    ],
    cons: [
      'Paid tiers can become expensive as you scale or add Hubs.',
      'Advanced features might be less robust than specialized platforms.',
      'Customization options are more limited compared to Salesforce.'
    ],
    costFactors: [
      'Free CRM core.',
      'Tiered pricing (Starter, Professional, Enterprise) for each Hub.',
      'Costs can escalate quickly when adding multiple Hubs or users.',
      'Some essential features locked behind higher tiers.'
    ],
    imageUrl: '/images/photos/Hubspot_logo.png',
    costSummary: 'Free CRM available; Paid Hubs start ~$20/mo',
    feature_contactManagement: true,
    feature_leadManagement: true,
    feature_opportunityManagement: true,
    feature_salesPipelineVisualization: true,
    feature_salesForecasting: true,
    feature_customObjects: true,
    feature_emailMarketing: true,
    feature_landingPages: true,
    feature_leadScoring: true,
    feature_marketingAutomationWorkflows: true,
    feature_socialMediaIntegration: true,
    feature_workflowAutomation: true,
    feature_salesAutomation: true,
    feature_customerServiceTools: true,
    feature_standardReporting: true,
    feature_customReporting: true,
    feature_dashboards: true,
    feature_apiAccess: true,
    feature_appMarketplace: true,
    feature_mobileApp: true,
    feature_freeTier: true,
    feature_dedicatedSupportOptions: true,
    feature_gdprTools: true,
  },
  marketo: {
    slug: 'marketo',
    title: 'Adobe Marketo Engage',
    description: 'Adobe Marketo Engage is a comprehensive marketing automation platform focused on lead management, email marketing, lead nurturing, and analytics, primarily serving enterprise B2B companies.',
    pros: [
      'Powerful and highly customizable automation workflows.',
      'Deep analytics and revenue attribution features.',
      'Strong integration with CRMs like Salesforce and Microsoft Dynamics.',
      'Robust lead scoring and nurturing capabilities.'
    ],
    cons: [
      'Can have a steep learning curve and complex interface.',
      'Generally higher price point, less suitable for small businesses.',
      'Requires dedicated resources for effective management.'
    ],
    costFactors: [
      'Tiered subscription based on database size (number of contacts).',
      'Multiple package options (e.g., Select, Prime, Ultimate).',
      'Additional costs for certain features or add-ons.',
      'Implementation and training services often recommended.'
    ],
    imageUrl: '/images/photos/Adobe_marketo_engage.png',
    costSummary: 'Quote-based; Enterprise focus',
    feature_contactManagement: true,
    feature_leadManagement: true,
    feature_opportunityManagement: false,
    feature_salesPipelineVisualization: false,
    feature_salesForecasting: false,
    feature_customObjects: true,
    feature_emailMarketing: true,
    feature_landingPages: true,
    feature_leadScoring: true,
    feature_marketingAutomationWorkflows: true,
    feature_socialMediaIntegration: true,
    feature_workflowAutomation: true,
    feature_salesAutomation: false,
    feature_customerServiceTools: false,
    feature_standardReporting: true,
    feature_customReporting: true,
    feature_dashboards: true,
    feature_apiAccess: true,
    feature_appMarketplace: true,
    feature_mobileApp: true,
    feature_freeTier: false,
    feature_dedicatedSupportOptions: true,
    feature_gdprTools: true,
  },
  pardot: {
    slug: 'pardot',
    title: 'Salesforce Pardot (Marketing Cloud Account Engagement)',
    description: 'Pardot, now part of Salesforce Marketing Cloud Account Engagement, is a B2B marketing automation solution tightly integrated with Salesforce CRM, focusing on lead generation, nurturing, email marketing, and ROI reporting.',
    pros: [
      'Seamless integration with Salesforce Sales Cloud.',
      'Good alignment for B2B sales and marketing processes.',
      'User-friendly interface compared to some competitors.',
      'Leverages Salesforce ecosystem and reporting.'
    ],
    cons: [
      'Primarily beneficial for existing Salesforce CRM users.',
      'Less flexible than Marketo for complex, non-standard workflows.',
      'Feature set might be less extensive than some enterprise competitors in specific areas.'
    ],
    costFactors: [
      'Tiered pricing (Growth, Plus, Advanced, Premium) based on features and automation limits.',
      'Costs often tied to the number of contacts in the database.',
      'Requires Salesforce CRM (Sales or Service Cloud) Professional Edition or higher for full integration.',
      'Add-on costs for features like B2B Marketing Analytics Plus.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    costSummary: 'Starts ~$1,250/mo (Growth)',
    feature_contactManagement: true,
    feature_leadManagement: true,
    feature_opportunityManagement: true,
    feature_salesPipelineVisualization: true,
    feature_salesForecasting: true,
    feature_customObjects: true,
    feature_emailMarketing: true,
    feature_landingPages: true,
    feature_leadScoring: true,
    feature_marketingAutomationWorkflows: true,
    feature_socialMediaIntegration: true,
    feature_workflowAutomation: true,
    feature_salesAutomation: true,
    feature_customerServiceTools: false,
    feature_standardReporting: true,
    feature_customReporting: true,
    feature_dashboards: true,
    feature_apiAccess: true,
    feature_appMarketplace: true,
    feature_mobileApp: true,
    feature_freeTier: false,
    feature_dedicatedSupportOptions: true,
    feature_gdprTools: true,
  },
  clickdimensions: { 
    slug: 'clickdimensions', 
    title: 'ClickDimensions', 
    description: 'ClickDimensions is a marketing automation platform natively built within Microsoft Dynamics 365, offering email marketing, campaign automation, web forms, surveys, and analytics specifically for Dynamics users.',
    pros: [
      'Native integration with Microsoft Dynamics 365.',
      'Familiar interface for Dynamics 365 users.',
      'Comprehensive feature set for marketing automation within Dynamics.',
      'Includes web intelligence and tracking features.'
    ],
    cons: [
      'Primarily useful only for Dynamics 365 customers.',
      'User interface can feel dated compared to newer platforms.',
      'May lack some advanced features found in standalone enterprise platforms.'
    ],
    costFactors: [
      'Subscription based on the number of emails sent per month and features needed.',
      'Different tiers available (e.g., Basic, Business, Premier).',
      'Requires an existing Microsoft Dynamics 365 instance.'
    ],
    imageUrl: '/images/photos/ClickDimensions.png',
    costSummary: 'Quote-based; Requires Dynamics 365',
    feature_contactManagement: true,
    feature_leadManagement: true,
    feature_opportunityManagement: true,
    feature_salesPipelineVisualization: true,
    feature_salesForecasting: true,
    feature_customObjects: true,
    feature_emailMarketing: true,
    feature_landingPages: true,
    feature_leadScoring: true,
    feature_marketingAutomationWorkflows: true,
    feature_socialMediaIntegration: true,
    feature_workflowAutomation: true,
    feature_salesAutomation: false,
    feature_customerServiceTools: false,
    feature_standardReporting: true,
    feature_customReporting: true,
    feature_dashboards: true,
    feature_apiAccess: true,
    feature_appMarketplace: false,
    feature_mobileApp: true,
    feature_freeTier: false,
    feature_dedicatedSupportOptions: true,
    feature_gdprTools: true,
  },
  activecampaign: { 
    slug: 'activecampaign', 
    title: 'ActiveCampaign', 
    description: 'ActiveCampaign combines email marketing, marketing automation, sales CRM, and machine learning for segmentation and messaging. It is popular among small to medium-sized businesses.',
    pros: [
      'Powerful and flexible automation builder.',
      'Integrated CRM capabilities (Sales Pipelines).',
      'Strong email deliverability and marketing features.',
      'Relatively affordable compared to enterprise solutions.'
    ],
    cons: [
      'Can become complex with advanced automations.',
      'CRM features are less robust than dedicated CRM platforms like Salesforce.',
      'Reporting could be more advanced for some users.'
    ],
    costFactors: [
      'Tiered pricing (Lite, Plus, Professional, Enterprise) based on features and number of contacts.',
      'Costs increase with contact list size.',
      'Sales CRM features require higher tiers (Plus and above).' 
    ],
    imageUrl: '/images/photos/ActiveCampaign.png',
    costSummary: 'Starts ~$9/mo (Lite - Marketing)',
    feature_contactManagement: true,
    feature_leadManagement: true,
    feature_opportunityManagement: true,
    feature_salesPipelineVisualization: true,
    feature_salesForecasting: true,
    feature_customObjects: true,
    feature_emailMarketing: true,
    feature_landingPages: true,
    feature_leadScoring: true,
    feature_marketingAutomationWorkflows: true,
    feature_socialMediaIntegration: true,
    feature_workflowAutomation: true,
    feature_salesAutomation: true,
    feature_customerServiceTools: true,
    feature_standardReporting: true,
    feature_customReporting: true,
    feature_dashboards: true,
    feature_apiAccess: true,
    feature_appMarketplace: true,
    feature_mobileApp: true,
    feature_freeTier: false,
    feature_dedicatedSupportOptions: true,
    feature_gdprTools: true,
  },
  mailchimp: { 
    slug: 'mailchimp', 
    title: 'Mailchimp', 
    description: 'Mailchimp started as an email marketing service but has expanded into an all-in-one marketing platform with automation, landing pages, websites, CRM features, and analytics, targeting primarily small businesses.',
    pros: [
      'Very user-friendly interface, easy to get started.',
      'Generous free plan for beginners.',
      'Good template editor for emails and landing pages.',
      'Wide range of integrations available.'
    ],
    cons: [
      'Automation capabilities are less sophisticated than ActiveCampaign or HubSpot.',
      'Pricing can escalate quickly as lists grow or advanced features are needed.',
      'CRM functionality is relatively basic.'
    ],
    costFactors: [
      'Free tier available with limitations.',
      'Tiered paid plans (Essentials, Standard, Premium) based on contacts and features.',
      'Pay-as-you-go option available.',
      'Advanced automation and segmentation require higher tiers.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    costSummary: 'Free tier available; Paid plans start ~$13/mo',
    feature_contactManagement: true,
    feature_leadManagement: true,
    feature_opportunityManagement: false,
    feature_salesPipelineVisualization: false,
    feature_salesForecasting: false,
    feature_customObjects: false,
    feature_emailMarketing: true,
    feature_landingPages: true,
    feature_leadScoring: false,
    feature_marketingAutomationWorkflows: true,
    feature_socialMediaIntegration: true,
    feature_workflowAutomation: true,
    feature_salesAutomation: false,
    feature_customerServiceTools: false,
    feature_standardReporting: true,
    feature_customReporting: false,
    feature_dashboards: true,
    feature_apiAccess: true,
    feature_appMarketplace: true,
    feature_mobileApp: true,
    feature_freeTier: true,
    feature_dedicatedSupportOptions: true,
    feature_gdprTools: true,
  },
  'zoho-crm': { 
    slug: 'zoho-crm', 
    title: 'Zoho CRM', 
    description: 'Zoho CRM is part of the extensive Zoho suite of business applications. It offers sales force automation, marketing automation, customer service features, and analytics, known for its broad feature set and competitive pricing.',
    pros: [
      'Part of a large ecosystem of integrated Zoho apps (Zoho One).',
      'Comprehensive feature set across sales, marketing, and support.',
      'Competitive pricing, including a free tier.',
      'Highly customizable.'
    ],
    cons: [
      'User interface can feel cluttered or less intuitive for some users.',
      'Integration with non-Zoho apps can sometimes be challenging.',
      'Advanced customization might require technical expertise.'
    ],
    costFactors: [
      'Free edition available for up to 3 users.',
      'Multiple paid editions (Standard, Professional, Enterprise, Ultimate).',
      'Costs per user, per month (billed annually or monthly).',
      'Zoho One bundle offers access to many Zoho apps for a flat fee.'
    ],
    imageUrl: '/images/photos/ZOHO_CRM.png',
    costSummary: 'Free tier available; Paid plans start ~$14/user/mo',
    feature_contactManagement: true,
    feature_leadManagement: true,
    feature_opportunityManagement: true,
    feature_salesPipelineVisualization: true,
    feature_salesForecasting: true,
    feature_customObjects: true,
    feature_emailMarketing: true,
    feature_landingPages: true,
    feature_leadScoring: true,
    feature_marketingAutomationWorkflows: true,
    feature_socialMediaIntegration: true,
    feature_workflowAutomation: true,
    feature_salesAutomation: true,
    feature_customerServiceTools: true,
    feature_standardReporting: true,
    feature_customReporting: true,
    feature_dashboards: true,
    feature_apiAccess: true,
    feature_appMarketplace: true,
    feature_mobileApp: true,
    feature_freeTier: true,
    feature_dedicatedSupportOptions: true,
    feature_gdprTools: true,
  },
  sugarcrm: { 
    slug: 'sugarcrm', 
    title: 'SugarCRM (Sugar Sell)', 
    description: 'SugarCRM provides CRM solutions focusing on sales automation (Sugar Sell), marketing automation (Sugar Market), and customer service (Sugar Serve). It offers flexibility with cloud or on-premises deployment.',
    pros: [
      'Highly customizable platform.',
      'Offers both cloud and on-premises deployment options.',
      'Strong core CRM functionality for sales.',
      'Open-source heritage offers flexibility (though commercial versions are standard).'
    ],
    cons: [
      'Can be more expensive than some competitors.',
      'User interface might not be as modern as some newer platforms.',
      'Requires technical resources for deep customization and on-premises management.'
    ],
    costFactors: [
      'Requires minimum number of users for some editions.',
      'Different products (Sell, Serve, Market) priced separately or in bundles.',
      'Costs per user, per month, typically billed annually.',
      'On-premises deployment involves infrastructure costs.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    costSummary: 'Starts ~$49/user/mo (Sell)',
    feature_contactManagement: true,
    feature_leadManagement: true,
    feature_opportunityManagement: true,
    feature_salesPipelineVisualization: true,
    feature_salesForecasting: true,
    feature_customObjects: true,
    feature_emailMarketing: true,
    feature_landingPages: true,
    feature_leadScoring: true,
    feature_marketingAutomationWorkflows: true,
    feature_socialMediaIntegration: true,
    feature_workflowAutomation: true,
    feature_salesAutomation: true,
    feature_customerServiceTools: true,
    feature_standardReporting: true,
    feature_customReporting: true,
    feature_dashboards: true,
    feature_apiAccess: true,
    feature_appMarketplace: true,
    feature_mobileApp: true,
    feature_freeTier: false,
    feature_dedicatedSupportOptions: true,
    feature_gdprTools: true,
  },
  zendesk: { 
    slug: 'zendesk', 
    title: 'Zendesk Sell', 
    description: 'Zendesk Sell is a sales CRM designed to enhance productivity, processes, and pipeline visibility for sales teams. It integrates tightly with Zendesk Support.',
    pros: [
      'Modern, user-friendly interface.',
      'Strong focus on sales productivity tools (e.g., call tracking, email automation).',
      'Seamless integration with Zendesk Support.',
      'Good mobile application.'
    ],
    cons: [
      'CRM feature set might be less comprehensive than Salesforce or Dynamics for complex needs.',
      'Primarily focused on sales; marketing automation is less central.',
      'Can become costly as you add more features or integrations.'
    ],
    costFactors: [
      'Tiered pricing (Sell Team, Sell Growth, Sell Professional, Sell Enterprise).',
      'Costs per user, per month.',
      'Separate costs for Zendesk Suite if full customer service integration is needed.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    costSummary: 'Starts ~$19/user/mo (Team)',
    feature_contactManagement: true,
    feature_leadManagement: true,
    feature_opportunityManagement: true,
    feature_salesPipelineVisualization: true,
    feature_salesForecasting: true,
    feature_customObjects: false,
    feature_emailMarketing: true,
    feature_landingPages: false,
    feature_leadScoring: true,
    feature_marketingAutomationWorkflows: false,
    feature_socialMediaIntegration: true,
    feature_workflowAutomation: true,
    feature_salesAutomation: true,
    feature_customerServiceTools: true,
    feature_standardReporting: true,
    feature_customReporting: true,
    feature_dashboards: true,
    feature_apiAccess: true,
    feature_appMarketplace: true,
    feature_mobileApp: true,
    feature_freeTier: false,
    feature_dedicatedSupportOptions: true,
    feature_gdprTools: true,
  },
  pipedrive: { 
    slug: 'pipedrive', 
    title: 'Pipedrive', 
    description: 'Pipedrive is a sales-focused CRM built around visualizing the sales pipeline. It emphasizes activity-based selling, ease of use, and helping salespeople manage deals effectively.',
    pros: [
      'Highly intuitive, visual pipeline interface.',
      'Focuses specifically on the sales process.',
      'Easy to set up and use.',
      'Good mobile apps and integrations marketplace.'
    ],
    cons: [
      'Marketing automation features are limited or require add-ons.',
      'Less suitable for complex enterprise needs or cross-departmental workflows.',
      'Customer support options can be limited on lower tiers.'
    ],
    costFactors: [
      'Tiered pricing (Essential, Advanced, Professional, Enterprise).',
      'Costs per user, per month.',
      'Add-on costs for features like LeadBooster or Web Visitors.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    costSummary: 'Starts ~$15/user/mo (Essential)',
    feature_contactManagement: true,
    feature_leadManagement: true,
    feature_opportunityManagement: true,
    feature_salesPipelineVisualization: true,
    feature_salesForecasting: true,
    feature_customObjects: true,
    feature_emailMarketing: true,
    feature_landingPages: false,
    feature_leadScoring: true,
    feature_marketingAutomationWorkflows: true,
    feature_socialMediaIntegration: true,
    feature_workflowAutomation: true,
    feature_salesAutomation: true,
    feature_customerServiceTools: false,
    feature_standardReporting: true,
    feature_customReporting: true,
    feature_dashboards: true,
    feature_apiAccess: true,
    feature_appMarketplace: true,
    feature_mobileApp: true,
    feature_freeTier: false,
    feature_dedicatedSupportOptions: true,
    feature_gdprTools: true,
  },
};
