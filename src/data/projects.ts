export interface Project {
  title: string;
  period: string;
  role: string;
  link?: string;
  overview: string;
  impact: string[];
  tags: string[];
  category: "professional" | "academy" | "academic";
}

export const projects: Project[] = [
  {
    title: "Fulfillment Nextgen",
    period: "July 2023 – June 2024",
    role: "Backend Engineer",
    link: "https://www.tokopedia.com/tagihan/",
    overview: "Strategic initiative to decouple fulfillment processes from legacy codebase into a dedicated service, addressing technical debt and improving system maintainability.",
    impact: [
      "Significantly reduced feature development and deployment time",
      "Simplified integration testing for faster deployment cycles",
      "Enhanced code quality and debugging efficiency",
      "Implemented async processing with throttling for order prioritization",
      "Built custom gRPC and DB interceptors for real-time monitoring"
    ],
    tags: ["Go", "gRPC", "Microservices", "Message Queue", "Observability"],
    category: "professional"
  },
  {
    title: "Smart-Card Auto Escalation",
    period: "July 2023 – December 2023",
    role: "Backend Engineer",
    link: "https://www.tokopedia.com/emoney/",
    overview: "Automated resolution process for Mandiri e-money balance update errors, eliminating manual intervention for approximately 1% of users.",
    impact: [
      "Reduced customer support tickets by 60%",
      "Achieved monthly savings in tens of millions IDR",
      "Improved user experience by eliminating manual error reporting",
      "Built automated feedback email categorization system"
    ],
    tags: ["Go", "Automation", "Email Processing", "Microservices"],
    category: "professional"
  },
  {
    title: "Partner Self-Onboarding",
    period: "January 2022 – June 2022",
    role: "Backend Engineer",
    link: "https://www.tokopedia.com/partner/register",
    overview: "Streamlined Digital B2B onboarding by replacing manual workflows with an automated self-service platform.",
    impact: [
      "Reduced B2B client onboarding time by 80%",
      "Cut technical integration time by 50%",
      "Enabled partners to manage their own onboarding journey",
      "Freed up business and tech teams for strategic work"
    ],
    tags: ["Go", "Self-Service", "B2B", "Automation"],
    category: "professional"
  },
  {
    title: "Lugna App",
    period: "August 2020 – December 2020",
    role: "UI/UX Designer",
    link: "https://apps.apple.com/id/app/lugna/id1538556393",
    overview: "Smart journaling application bridging communication between patients, caregivers, and psychiatrists through personalized prompts and mood tracking.",
    impact: [
      "Enabled better communication between users and clinicians",
      "Increased journaling consistency through guided questions",
      "Provided weekly and monthly mood analytics",
      "Conducted expert interviews with mental health professionals"
    ],
    tags: ["Swift", "iOS", "UI/UX", "Mental Health", "CloudKit"],
    category: "academy"
  },
  {
    title: "Videre / Mumu App",
    period: "June 2020 – December 2020",
    role: "iOS Developer",
    link: "https://testflight.apple.com/",
    overview: "AR assistant for visual and mural artists, helping visualize artwork arrangements and calculate grid sizes with precision.",
    impact: [
      "Reduced time for manual grid size calculations",
      "Streamlined transition from digital design to physical execution",
      "Implemented AR features using MVC architecture",
      "Developed cloud-save functionality with Core Data and CloudKit"
    ],
    tags: ["Swift", "ARKit", "iOS", "Core Data", "CloudKit"],
    category: "academy"
  },
  {
    title: "Socialism Game",
    period: "September 2019 – January 2020",
    role: "Game Developer",
    link: "https://github.com/piresc/socialism",
    overview: "2D Adventure RPG featuring a unique typing battle system, set in a dystopian future exploring social media addiction.",
    impact: [
      "Created innovative typing battle system",
      "Developed narrative exploring social commentary",
      "Built complete game mechanics and level design"
    ],
    tags: ["C#", "Unity", "Game Development", "2D RPG"],
    category: "academic"
  }
];
