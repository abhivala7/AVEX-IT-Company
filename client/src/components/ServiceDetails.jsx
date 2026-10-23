import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import OfferingDetailsPage from './OfferingDetailsPage'

const serviceDetails = {
  'web-development': {
    number: '01', title: 'Web Development', category: 'Websites & web applications',
    lead: 'Fast, accessible web experiences that make it easier for customers and teams to get things done.',
    image: '/images/service-web-development.jpg', imageAlt: 'Developer working on a modern web application',
    overviewHeading: 'A dependable digital front door.',
    overview: 'AVEX plans and builds responsive websites and web applications around the people who use them. From a clear marketing site to an authenticated customer workspace, each experience is designed to be easy to navigate, performant, and maintainable.',
    problems: ['Slow or difficult-to-maintain websites', 'Mobile visitors facing cramped or confusing layouts', 'Disconnected forms and customer workflows', 'Poor performance that makes important content harder to reach'],
    features: [
      ['Responsive interfaces', 'Layouts and interactions designed to work across phones, tablets, and desktop screens.'],
      ['Accessible components', 'Semantic patterns, keyboard support, and readable contrast built into the experience.'],
      ['Application functionality', 'Interactive flows, account areas, forms, and tools shaped around user needs.'],
      ['Performance foundations', 'Efficient assets and frontend patterns that support fast, reliable page experiences.'],
      ['Content management', 'Practical structures that help teams maintain and extend their web content.'],
      ['Search and integrations', 'Connect the experience to analytics, APIs, and the tools that support the business.'],
    ],
    useCases: ['Company and product websites', 'Customer and partner portals', 'Campaign and lead-generation pages', 'Internal web tools'],
    stack: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    process: [['Plan', 'Clarify audience, content, requirements, and success criteria.'], ['Design', 'Shape page structure and responsive interaction patterns.'], ['Build', 'Develop the frontend, backend, and required integrations.'], ['Launch', 'Test across devices, deploy, and prepare for ongoing improvements.']],
    gallery: [
      { src: '/images/service-web.jpg', alt: 'Web interface shown on a laptop', caption: 'A responsive web experience' },
      { src: '/images/project-enterprise.jpg', alt: 'Enterprise web application preview', caption: 'Application interface direction' },
      { src: '/images/service-uiux.jpg', alt: 'Digital product interface design', caption: 'Clear interface structure' },
    ],
  },
  'software-development': {
    number: '02', title: 'Software Development', category: 'Custom business software',
    lead: 'Purpose-built applications that bring important business workflows, data, and tools into one coherent system.',
    image: '/images/service-software-development.png', imageAlt: 'Illustration representing custom software development',
    overviewHeading: 'Software shaped around your operation.',
    overview: 'Custom software can connect the steps that generic tools leave separate. AVEX works from business requirements and real user workflows to design and develop maintainable applications, from focused internal tools to multi-role business platforms.',
    problems: ['Manual work repeated across spreadsheets and tools', 'Off-the-shelf products that do not fit the workflow', 'Business data split across disconnected systems', 'Limited visibility into ownership, progress, or approvals'],
    features: [
      ['Workflow applications', 'Purpose-built screens and flows for the work teams perform every day.'],
      ['Role-based experiences', 'Relevant access and tools for administrators, managers, staff, and customers.'],
      ['Business rules', 'Consistent validation and decision logic that reduces avoidable manual steps.'],
      ['System integrations', 'Connect existing services and data through APIs and practical integration patterns.'],
      ['Secure data handling', 'Application architecture designed with access control and data protection in mind.'],
      ['Maintainable foundations', 'Clear, modular implementation that can evolve as requirements change.'],
    ],
    useCases: ['Operations and case-management tools', 'Inventory and order workflows', 'Approval and reporting systems', 'Customer and partner applications'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Python'],
    process: [['Discover', 'Map users, workflows, constraints, and system dependencies.'], ['Architect', 'Define application boundaries, data models, and integration needs.'], ['Develop', 'Build in focused increments and review working software.'], ['Release', 'Validate, deploy, and support the application as teams adopt it.']],
    gallery: [
      { src: '/images/service-software.jpg', alt: 'Software development environment on a computer', caption: 'Application engineering' },
      { src: '/images/solution-custom.jpg', alt: 'Custom software concept interface', caption: 'Purpose-built product concept' },
      { src: '/images/projects/enterprise-application.jpg', alt: 'Business application interface on a laptop', caption: 'Business application experience' },
    ],
  },
  'ui-ux-design': {
    number: '03', title: 'UI/UX Design', category: 'Product design & research',
    lead: 'Clear, considered interfaces that help people understand a product and move through it with confidence.',
    image: '/images/service-ui-ux.webp', imageAlt: 'Modern interface design and user experience concept',
    overviewHeading: 'Make complex products feel intuitive.',
    overview: 'Good product design connects user needs with business goals. AVEX uses discovery, information architecture, wireframes, and prototypes to clarify how a digital product should work before detailed interface design and implementation begin.',
    problems: ['Users struggle to find important actions or information', 'Inconsistent patterns make a product feel difficult to learn', 'Teams lack a shared prototype to evaluate before development', 'Interfaces do not adapt well to different devices or abilities'],
    features: [
      ['User and product discovery', 'Understand key audiences, tasks, constraints, and product priorities.'],
      ['Information architecture', 'Organize content and navigation so important paths are easier to follow.'],
      ['Wireframes and prototypes', 'Explore structure and interactions before committing to implementation.'],
      ['Visual interface design', 'Create consistent layouts, components, typography, and visual hierarchy.'],
      ['Responsive design systems', 'Define reusable patterns that adapt across screen sizes and product areas.'],
      ['Usability refinement', 'Review flows and interactions to reduce friction and improve clarity.'],
    ],
    useCases: ['New digital products', 'Website and application redesigns', 'Complex dashboards and workflows', 'Design systems and component libraries'],
    stack: ['Figma', 'FigJam', 'Prototyping', 'Accessibility', 'Design systems'],
    process: [['Research', 'Learn about users, context, product goals, and current pain points.'], ['Structure', 'Map information and sketch the primary tasks and navigation.'], ['Prototype', 'Create interface concepts and test important interactions.'], ['Refine', 'Prepare responsive specifications and reusable design patterns.']],
    gallery: [
      { src: '/images/service-uiux.jpg', alt: 'User experience and interface design concept', caption: 'Interface and interaction direction' },
      { src: '/images/service-ui-ux.webp', alt: 'Digital product design shown on a screen', caption: 'Product interface design' },
      { src: '/images/projects/enterprise-application.jpg', alt: 'Web application screen design', caption: 'A focused application flow' },
    ],
  },
  'business-automation': {
    number: '04', title: 'Business Automation', category: 'Workflow automation',
    lead: 'Reduce repetitive handoffs by connecting business steps, systems, and decisions into more consistent workflows.',
    image: '/images/service-business-automation.jpeg', imageAlt: 'Business automation process and workflow concept',
    overviewHeading: 'Give routine work a clearer path.',
    overview: 'Business automation starts with understanding how work moves today. AVEX identifies repetitive steps and handoffs, then designs integrations and workflow tools that help teams process requests, route information, and track outcomes more consistently.',
    problems: ['Repeated copying of information between systems', 'Requests waiting in inboxes without clear ownership', 'Approval steps that are difficult to track', 'Routine work consuming time better spent on exceptions and service'],
    features: [
      ['Workflow mapping', 'Make current steps, decision points, and handoffs visible before automating them.'],
      ['Task routing', 'Send work to the right role or team based on clear business rules.'],
      ['System connections', 'Move relevant information between tools using APIs and integration services.'],
      ['Approval flows', 'Capture decisions, status, and ownership in a traceable process.'],
      ['Notifications and reminders', 'Keep participants informed when work needs attention or action.'],
      ['Operational visibility', 'Review workflow status and identify recurring delays or bottlenecks.'],
    ],
    useCases: ['Intake and request handling', 'Document and approval routing', 'Customer onboarding workflows', 'Data synchronization between business tools'],
    stack: ['Node.js', 'APIs', 'Webhooks', 'Python', 'Workflow tools'],
    process: [['Map', 'Document the existing workflow and where time or information is lost.'], ['Prioritize', 'Select repeatable tasks with clear rules and useful expected outcomes.'], ['Connect', 'Implement the workflow, system integrations, and exception handling.'], ['Improve', 'Monitor results and refine rules as teams use the process.']],
    gallery: [
      { src: '/images/service-automation.jpg', alt: 'Business workflow automation visualization', caption: 'Connected workflow steps' },
      { src: '/images/service-business-automation.jpeg', alt: 'Business automation concept illustration', caption: 'Routine work, streamlined' },
      { src: '/images/solution-automation.jpg', alt: 'Automation solution interface concept', caption: 'Automated process visibility' },
    ],
  },
  'cloud-infrastructure': {
    number: '05', title: 'Cloud & Infrastructure', category: 'Cloud platforms & operations',
    lead: 'Secure, dependable infrastructure that supports modern applications and gives teams room to grow.',
    image: '/images/service-cloud-infrastructure.webp', imageAlt: 'Cloud infrastructure and data-center environment',
    overviewHeading: 'A reliable foundation for digital products.',
    overview: 'Cloud and infrastructure work covers the environments that applications depend on. AVEX helps plan deployment foundations, automate repeatable delivery tasks, and improve visibility into reliability, security, and operational readiness.',
    problems: ['Unclear deployment steps that rely on manual intervention', 'Environments that differ between development and production', 'Infrastructure that is difficult to monitor or maintain', 'Security and access practices that have grown inconsistently'],
    features: [
      ['Cloud architecture', 'Plan application environments and services around reliability and operating needs.'],
      ['Infrastructure as code', 'Describe repeatable environments in version-controlled configuration.'],
      ['CI/CD pipelines', 'Automate build, validation, and release steps for predictable delivery.'],
      ['Monitoring and alerts', 'Track service health and surface issues that need attention.'],
      ['Access and security', 'Apply practical identity, permissions, and secret-management patterns.'],
      ['Resilience planning', 'Prepare backup, recovery, and scaling approaches for application needs.'],
    ],
    useCases: ['Cloud migration planning', 'Application deployment platforms', 'Development and test environments', 'Reliability and delivery improvements'],
    stack: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'Node.js'],
    process: [['Assess', 'Review workloads, dependencies, risks, and current operational practices.'], ['Design', 'Define environments, deployment approach, access, and observability.'], ['Implement', 'Build and document infrastructure and automated delivery workflows.'], ['Operate', 'Review service behavior and refine reliability and security controls.']],
    gallery: [
      { src: '/images/service-cloud.jpg', alt: 'Cloud technology and infrastructure visualization', caption: 'Cloud platform foundations' },
      { src: '/images/solution-cloud.jpg', alt: 'Cloud deployment architecture concept', caption: 'Deployment architecture' },
      { src: '/images/service-cloud-infrastructure.webp', alt: 'Infrastructure environment supporting digital services', caption: 'Reliable service operations' },
    ],
  },
  'data-analytics': {
    number: '06', title: 'Data & Analytics', category: 'Business intelligence & data products',
    lead: 'Turn business data into trusted views, useful analysis, and information teams can act on.',
    image: '/images/service-data-analytics.jpeg', imageAlt: 'Analytics dashboard with business charts and visualizations',
    overviewHeading: 'Make useful signals easier to see.',
    overview: 'Data and analytics solutions help teams bring information together and explore it in context. AVEX can shape data pipelines, reporting experiences, and dashboards around the decisions people need to make, with attention to clarity and data quality.',
    problems: ['Reports assembled manually from multiple sources', 'Different teams relying on inconsistent metric definitions', 'Important trends hidden in dense tables or disconnected tools', 'Decision-makers unable to explore the data behind a summary'],
    features: [
      ['Data source integration', 'Connect relevant application, operational, and reporting data sources.'],
      ['Data preparation', 'Structure and validate information for consistent analysis.'],
      ['Interactive dashboards', 'Explore measures with filters, comparisons, and useful detail views.'],
      ['KPI and trend views', 'Follow agreed measures over time and highlight meaningful changes.'],
      ['Scheduled reporting', 'Prepare repeatable reports and shared views for different audiences.'],
      ['Analytics applications', 'Build custom tools that bring analysis into existing team workflows.'],
    ],
    useCases: ['Operational and product dashboards', 'Business intelligence reporting', 'Customer and usage analysis', 'Data quality and pipeline visibility'],
    stack: ['Python', 'React', 'SQL', 'MongoDB', 'Visualization tools'],
    process: [['Frame', 'Agree on the decisions, questions, audiences, and data definitions.'], ['Connect', 'Identify sources and build reliable paths for relevant data.'], ['Explore', 'Design visualizations and reports around real user questions.'], ['Refine', 'Validate outputs with users and improve clarity and usefulness.']],
    gallery: [
      { src: '/images/solution-data-analytics.jpg', alt: 'Business intelligence analytics visualization', caption: 'Business intelligence views' },
      { src: '/images/project-analytics.jpg', alt: 'Analytics suite dashboard concept', caption: 'Interactive data dashboard' },
      { src: '/images/projects/analytics-reporting.jpg', alt: 'Data reporting interface with KPI visualizations', caption: 'Reporting and performance trends' },
    ],
  },
}

export default function ServiceDetails() {
  const { serviceSlug } = useParams()
  const service = serviceDetails[serviceSlug]
  if (!service) return <Navigate to="/services" replace />

  return <OfferingDetailsPage detail={service} kind="service" basePath="/services" backLabel="Services" ctaLabel="Discuss This Service" />
}
