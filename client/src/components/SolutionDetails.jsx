import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import OfferingDetailsPage from './OfferingDetailsPage'

const solutionDetails = {
  'digital-transformation': {
    number: '01', title: 'Digital Transformation', category: 'Modern business operations',
    lead: 'Modernize the way work gets done with connected processes and digital experiences designed around real business needs.',
    image: '/images/solution-digital-transformation.jpg', imageAlt: 'Digital transformation and connected business technology concept',
    overviewHeading: 'Move from disconnected processes to connected experiences.',
    overview: 'Digital transformation is a practical program of improving processes, services, and the systems behind them. It can begin with a focused workflow or customer experience, then connect supporting data and technology so teams can adapt without replacing everything at once.',
    problems: ['Manual processes that slow down employees and customers', 'Business information spread across separate tools', 'Legacy workflows that are difficult to adapt or measure', 'Digital experiences that do not match how people work today'],
    features: [
      ['Process discovery', 'Map current workflows, user needs, constraints, and opportunities for improvement.'],
      ['Experience modernization', 'Improve customer and employee journeys with responsive digital touchpoints.'],
      ['System integration', 'Connect relevant applications and data through maintainable integration patterns.'],
      ['Incremental delivery', 'Break larger change into practical releases that teams can evaluate and adopt.'],
      ['Data-informed operations', 'Make useful operational information easier to access and act on.'],
      ['Change-ready foundations', 'Use flexible architectures and delivery practices that support continued evolution.'],
    ],
    useCases: ['Digitizing customer service journeys', 'Modernizing internal operations', 'Connecting separate business applications', 'Replacing paper-based approval processes'],
    stack: ['React', 'Node.js', 'APIs', 'Cloud platforms', 'Analytics'],
    process: [['Discover', 'Understand business goals, users, existing processes, and systems.'], ['Prioritize', 'Select valuable improvements and define a realistic delivery sequence.'], ['Deliver', 'Design, build, integrate, and validate improvements in focused increments.'], ['Evolve', 'Support adoption, review outcomes, and plan the next improvements.']],
    gallery: [
      { src: '/images/solution-transformation.jpg', alt: 'Digital transformation strategy and technology concept', caption: 'A connected transformation roadmap' },
      { src: '/images/service-web.jpg', alt: 'Modern digital experience on a laptop', caption: 'Modern customer experiences' },
      { src: '/images/solution-enterprise.jpg', alt: 'Business platform supporting connected operations', caption: 'Connected business platforms' },
    ],
  },
  'business-automation': {
    number: '02', title: 'Business Automation', category: 'Workflow automation',
    lead: 'Reduce routine handoffs and make repeatable business processes easier to route, track, and improve.',
    image: '/images/service-automation.jpg', imageAlt: 'Workflow automation and connected process visualization',
    overviewHeading: 'Automate the steps that slow good work down.',
    overview: 'An automation solution connects clearly defined tasks across people and systems. It helps organizations reduce repetitive data entry, route work to the right owner, and keep a visible record of decisions while preserving human review for exceptions and important choices.',
    problems: ['Repeated copy-and-paste work across applications', 'Requests without clear owners or status visibility', 'Approval delays caused by inbox-based handoffs', 'Inconsistent process steps across teams'],
    features: [
      ['Workflow orchestration', 'Coordinate tasks, approvals, and system actions in a clear sequence.'],
      ['Rules-based routing', 'Direct work based on relevant inputs, roles, and business rules.'],
      ['Application integrations', 'Exchange data with existing tools using APIs and event-based connections.'],
      ['Human review steps', 'Route exceptions and sensitive decisions to the appropriate people.'],
      ['Notifications and tracking', 'Show ownership, status, and required actions throughout a workflow.'],
      ['Process monitoring', 'Review bottlenecks and failures to improve automation over time.'],
    ],
    useCases: ['Employee onboarding and offboarding', 'Purchase and expense approvals', 'Customer request intake and routing', 'Document processing and notifications'],
    stack: ['Node.js', 'Python', 'APIs', 'Webhooks', 'Workflow platforms'],
    process: [['Map', 'Document tasks, decision points, handoffs, and exception paths.'], ['Select', 'Choose repeatable processes with clear rules and measurable friction.'], ['Connect', 'Build integrations, routing, notifications, and audit-friendly status.'], ['Optimize', 'Review process behavior and adjust rules with business owners.']],
    gallery: [
      { src: '/images/solution-automation.jpg', alt: 'Automation workflow solution concept', caption: 'Workflow orchestration' },
      { src: '/images/service-business-automation.jpeg', alt: 'Business automation process illustration', caption: 'Routine work streamlined' },
      { src: '/images/service-automation.jpg', alt: 'Connected automation process visualization', caption: 'Connected applications and tasks' },
    ],
  },
  'custom-software': {
    number: '03', title: 'Custom Software', category: 'Purpose-built applications',
    lead: 'Build a digital product around the requirements, roles, and workflows that make your organization distinct.',
    image: '/images/service-software.jpg', imageAlt: 'Custom software development environment',
    overviewHeading: 'A product that fits your specific way of working.',
    overview: 'Custom software is useful when standard products do not support a critical workflow or when separate tools need a coherent experience. The solution can combine tailored interfaces, business rules, data services, and integrations in an application shaped around its users.',
    problems: ['Generic tools that force teams into awkward workarounds', 'Important processes managed through spreadsheets and email', 'Information that cannot move cleanly between current systems', 'Limited control over product capabilities and future changes'],
    features: [
      ['Requirements-led design', 'Translate workflows and user needs into a clear product scope.'],
      ['Role-specific workspaces', 'Provide relevant views and permissions for different user groups.'],
      ['Business logic', 'Implement consistent rules, validation, and workflow behavior.'],
      ['APIs and integrations', 'Connect data and functionality with the systems already in use.'],
      ['Secure application architecture', 'Plan authentication, authorization, and data access for the product.'],
      ['Extensible foundations', 'Structure the software so features can evolve with changing requirements.'],
    ],
    useCases: ['Internal operations and case tools', 'Customer or partner portals', 'Niche industry applications', 'Product extensions and system replacements'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Python'],
    process: [['Understand', 'Explore users, workflows, systems, and product constraints.'], ['Shape', 'Define essential features, architecture, and integration boundaries.'], ['Build', 'Deliver working increments, validate assumptions, and refine details.'], ['Support', 'Release with documentation and continue improving from user feedback.']],
    gallery: [
      { src: '/images/solution-custom.jpg', alt: 'Custom software product interface concept', caption: 'A tailored software experience' },
      { src: '/images/service-software-development.png', alt: 'Software development concept illustration', caption: 'Purpose-built application design' },
      { src: '/images/projects/enterprise-application.jpg', alt: 'Business application screen on a laptop', caption: 'A focused business application' },
    ],
  },
  'cloud-infrastructure': {
    number: '04', title: 'Cloud & Infrastructure', category: 'Cloud platforms & operations',
    lead: 'Create secure, observable cloud foundations that support reliable applications and consistent software delivery.',
    image: '/images/service-cloud.jpg', imageAlt: 'Cloud infrastructure visualization for modern applications',
    overviewHeading: 'Build reliable foundations for modern applications.',
    overview: 'A cloud and infrastructure solution brings application environments, deployment workflows, and service operations into a consistent model. It can improve repeatability and visibility while helping teams plan access, reliability, and capacity for their specific workloads.',
    problems: ['Manual releases that are difficult to repeat', 'Configuration drift between development and production', 'Limited visibility into service health and errors', 'Infrastructure access and recovery practices that need clearer controls'],
    features: [
      ['Cloud architecture', 'Choose environment patterns and services based on application and operating needs.'],
      ['Infrastructure as code', 'Version and review environment configuration for repeatable provisioning.'],
      ['Automated delivery', 'Build test and release pipelines that reduce manual deployment steps.'],
      ['Monitoring and alerting', 'Surface service health and operational signals for timely response.'],
      ['Identity and security', 'Apply access policies, secret handling, and security practices to infrastructure.'],
      ['Backup and recovery', 'Plan restoration and continuity approaches suited to the system.'],
    ],
    useCases: ['Cloud readiness and migration planning', 'Application hosting environments', 'CI/CD and release automation', 'Monitoring, resilience, and cost visibility'],
    stack: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'Infrastructure as code'],
    process: [['Assess', 'Review workloads, dependencies, operating needs, and current risks.'], ['Design', 'Plan environment topology, access, delivery, and monitoring.'], ['Implement', 'Provision infrastructure and automate build and release workflows.'], ['Operate', 'Observe behavior and refine security, reliability, and cost controls.']],
    gallery: [
      { src: '/images/solution-cloud.jpg', alt: 'Cloud deployment platform concept', caption: 'Cloud deployment foundations' },
      { src: '/images/service-cloud-infrastructure.webp', alt: 'Data center infrastructure environment', caption: 'Infrastructure operations' },
      { src: '/images/solution-enterprise-systems.jpg', alt: 'Technology systems and platform architecture', caption: 'Systems designed to work together' },
    ],
  },
  'data-analytics': {
    number: '05', title: 'Data & Analytics', category: 'Business intelligence & data products',
    lead: 'Bring business information into clear dashboards and analysis that help teams answer useful questions.',
    image: '/images/solution-data-analytics.jpg', imageAlt: 'Business analytics dashboard with data visualizations',
    overviewHeading: 'Turn scattered information into useful insight.',
    overview: 'A data and analytics solution connects relevant sources, prepares information for consistent interpretation, and presents it in the context of business decisions. Teams can move from delayed manual reports toward shared measures and exploratory views.',
    problems: ['Reporting compiled manually from multiple systems', 'Different groups using inconsistent metric definitions', 'Trends and exceptions buried in dense data', 'Limited ability to explore the detail behind a summary'],
    features: [
      ['Data integration', 'Connect operational and product sources through maintainable pipelines.'],
      ['Data modeling', 'Organize and define information so measures can be compared consistently.'],
      ['Interactive dashboards', 'Filter, compare, and explore visual summaries at useful levels of detail.'],
      ['KPI and trend analysis', 'Follow agreed measures and examine change across relevant periods.'],
      ['Scheduled reporting', 'Share repeatable views with teams and decision-makers.'],
      ['Data quality checks', 'Identify missing, inconsistent, or unexpected values in analytical flows.'],
    ],
    useCases: ['Business intelligence and management reporting', 'Product usage and customer analysis', 'Operational performance dashboards', 'Data pipeline and quality monitoring'],
    stack: ['Python', 'SQL', 'React', 'MongoDB', 'Visualization tools'],
    process: [['Frame', 'Define audiences, decision questions, and trusted measures.'], ['Connect', 'Identify source systems and build repeatable data flows.'], ['Visualize', 'Develop dashboards and reports around user questions.'], ['Validate', 'Review results with users and improve clarity and data quality.']],
    gallery: [
      { src: '/images/solution-data.jpg', alt: 'Data visualization concept with analytics charts', caption: 'Data brought into view' },
      { src: '/images/projects/analytics-visualization.jpg', alt: 'Analytics and business intelligence visualizations', caption: 'Explorable analytical views' },
      { src: '/images/projects/analytics-reporting.jpg', alt: 'Analytics report interface with business charts', caption: 'Reporting for decisions' },
    ],
  },
  'enterprise-solutions': {
    number: '06', title: 'Enterprise Solutions', category: 'Secure business platforms',
    lead: 'Connect enterprise workflows, teams, and systems through secure digital platforms designed to scale with organizational needs.',
    image: '/images/solution-enterprise-systems.jpg', imageAlt: 'Enterprise software systems and business technology concept',
    overviewHeading: 'Give teams a more connected way to work.',
    overview: 'Enterprise solutions bring shared services and role-specific workflows into a coordinated platform. A well-planned solution can connect legacy and modern systems, establish consistent access, and make organizational information easier to find and act on.',
    problems: ['Business processes divided across departments and systems', 'Complex permissions that are hard to manage consistently', 'Duplicated information and manual cross-system updates', 'Operational reporting assembled from disconnected sources'],
    features: [
      ['Role-based access', 'Organize identity and permissions around responsibilities and data sensitivity.'],
      ['Centralized workflows', 'Bring common operational tasks into coordinated user journeys.'],
      ['System integrations', 'Connect enterprise applications and data through APIs and managed interfaces.'],
      ['Shared information spaces', 'Make relevant policies, resources, and updates easier for teams to reach.'],
      ['Operational reporting', 'Give stakeholders consistent views of work status and key process indicators.'],
      ['Governance foundations', 'Support auditability, access review, and maintainable platform ownership.'],
    ],
    useCases: ['Employee and partner portals', 'Multi-department workflow platforms', 'Enterprise application integration', 'Centralized service and operations workspaces'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Identity and API integrations'],
    process: [['Align', 'Identify stakeholders, processes, systems, and access requirements.'], ['Architect', 'Plan platform boundaries, identity, integrations, and information flows.'], ['Integrate', 'Build shared experiences and connect priority systems and workflows.'], ['Govern', 'Validate access, operations, and platform ownership as it evolves.']],
    gallery: [
      { src: '/images/solution-enterprise.jpg', alt: 'Enterprise platform user interface concept', caption: 'A shared enterprise workspace' },
      { src: '/images/projects/enterprise-dashboard.jpg', alt: 'Business dashboard for an enterprise platform', caption: 'Operational overview' },
      { src: '/images/projects/enterprise-integrations.jpg', alt: 'Enterprise application integration visualization', caption: 'Connected enterprise systems' },
    ],
  },
}

export default function SolutionDetails() {
  const { solutionSlug } = useParams()
  const solution = solutionDetails[solutionSlug]
  if (!solution) return <Navigate to="/solutions" replace />

  return <OfferingDetailsPage detail={solution} kind="solution" basePath="/solutions" backLabel="Solutions" ctaLabel="Discuss This Solution" />
}
