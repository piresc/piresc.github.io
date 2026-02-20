export interface Project {
  title: string;
  description: string;
  impact: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  projects: Project[];
}

export const workExperience: WorkExperience[] = [
  {
    role: "Developer",
    company: "Telkomsel",
    period: "Oct 2024 - Present",
    location: "Indonesia",
    summary: "Member of the IT Expert Pool responsible for development, improving software quality standards, and modernization initiatives.",
    projects: [
      {
        title: "MyTelkomsel Web Ecosystem",
        description: "Facilitated the critical transition of development ownership from external vendors to in-house teams for the MyTelkomsel web ecosystem.",
        impact: [
          "Managed and optimized 27 microservices ensuring a seamless digital experience for millions of users.",
          "Successfully maintained sprint velocity and system stability during the critical vendor handover period.",
          "Delivered key features including Mytelkomsel Lite and Trivia gamification during the transition."
        ]
      },
      {
        title: "Infrastructure & Quality Modernization",
        description: "Involved in the modernization of the deployment infrastructure and enforced strict software quality standards across the SDLC.",
        impact: [
          "Migrated deployment pipelines from Jenkins to GitLab CI/CD for improved automation and efficiency.",
          "Implemented Green Pipeline standards to integrate automated SonarQube quality checks and security scanning.",
          "Collaborated with vendors and internal departments to strictly enforce software quality standards across the stack."
        ]
      }
    ]
  },
  {
    role: "Software Engineer - Digital Fulfillment",
    company: "Tokopedia",
    period: "Jul 2022 - Aug 2024",
    location: "Indonesia",
    summary: "Managed digital fulfillment ecosystem for 4,000+ SKUs across 100+ suppliers, handling high-traffic microservices (>300 RPS). Maintained a 98% Fulfillment Success Rate through rigorous testing, proactive monitoring, and cross-team collaboration.",
    projects: [
      {
        title: "Fulfillment Nextgen",
        description: "Created new microservices separating fulfillment processes from the legacy codebase, addressing complexity and multi-team conflicts in debugging and integration testing.",
        impact: [
          "Reduced the time needed to develop new features.",
          "Simplified and expedited the integration testing process.",
          "Enhanced the readability and debugging of the code.",
          "Enabled the team to deploy more confidently and efficiently."
        ]
      },
      {
        title: "Smart-Card Auto Escalation",
        description: "Developed an automated escalation feature for Mandiri e-money smart-card issues, where ~1% of users faced balance update errors requiring manual support.",
        impact: [
          "Automated escalation reduced customer support tickets by 60%.",
          "Monthly savings reached tens of millions of rupiah through reduced operational costs.",
          "Users no longer had to manually report issues, improving their experience."
        ]
      },
      {
        title: "High-Performance & Cost Optimization",
        description: "A comprehensive initiative to improve system latency, reliability, and cloud efficiency.",
        impact: [
          "Improved order fulfillment speed from 4s to 1s.",
          "Achieved a 200% CVR improvement by optimizing caching strategies.",
          "Eliminated Single Point of Failure (SPOF) by implementing auto-scaling for cron jobs.",
          "Reduced cloud infrastructure costs by refactoring specific services into a monolithic architecture.",
          "Ensured smooth operations for the 2023 and 2024 Ramadan campaigns."
        ]
      }
    ]
  },
  {
    role: "Software Engineer - Digital B2B",
    company: "Tokopedia",
    period: "Oct 2021 - Jun 2022",
    location: "Indonesia",
    summary: "Developed and maintained 5+ microservices for Digital B2B products, created integration tests, applied clean architecture, managed client integrations, and integrated with new billers to scale business growth.",
    projects: [
      {
        title: "Partner Self-Onboarding",
        description: "Built a self-onboarding feature to streamline the B2B partner onboarding process, replacing the manual multi-team workflow with an automated system.",
        impact: [
          "Reduced B2B client onboarding time by 80%.",
          "Cut integration time by 50%.",
          "Enabled partners to self-onboard, freeing up business, product, and tech teams."
        ]
      },
      {
        title: "System Resilience & Security",
        description: "Implemented features to improve system stability and reduce burden on support teams.",
        impact: [
          "Developed a rate limiter that decreased invalid orders by 86%.",
          "Built a self-refund feature contributing to an 85% reduction in refund-related tickets.",
          "Migrated over 1,000 configuration lines to a more efficient database system."
        ]
      },
      {
        title: "DevCamp 2021 Participant",
        description: "Tokopedia DevCamp is a 6-day intensive training program held by Tokopedia to improve the quality of local Indonesian talent.",
        impact: [
          "Selected from over 3,600 applicants to participate in DevCamp's 6 day boot camp.",
          "Engaged in intensive training and received direct mentorship from Tokopedia tech experts.",
          "Contributed to a 20 hour hackathon, earning an internship at Tokopedia."
        ]
      }
    ]
  },
  {
    role: "Developer",
    company: "Apple Developer Academy",
    period: "2020",
    location: "Indonesia",
    summary: "Selected as one of 200 individuals from 2,500+ applicants across Indonesia. Built and shipped 7 iOS applications using Swift, acting as both Developer and Product Owner. Joined and contributed to the development of two macro projects simultaneously for three months.",
    projects: [
      {
        title: "Videre/Mumu AR App",
        description: "An AR app helping visual artists visualize and measure grid and artwork arrangements using Augmented Reality. Implemented MVC architecture, camera integration, and cloud save with Core Data using CloudKit.",
        impact: [
          "Simplified grid calculation and design overlay for mural artists and visual creatives.",
          "Improved user experience and app performance through optimized architecture."
        ]
      },
      {
        title: "Lugna Smart Journaling App",
        description: "A smart journaling app enabling users to express thoughts and emotions through guided journaling, serving as a communication tool between patients, caregivers, and psychiatrists.",
        impact: [
          "Conducted research and interviews with mental health patients to design user interfaces for iPhone, iPad, and web.",
          "Led user and usability testing, improving app usability and satisfaction.",
          "Created designs for marketing and App Store content."
        ]
      }
    ]
  }
];
