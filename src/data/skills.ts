export interface SkillCategory {
  category: string;
  skills: string;
}

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: "Go (Golang), Node.js, JavaScript, TypeScript, Swift, SQL"
  },
  {
    category: "Backend & Data",
    skills: "Microservices, Clean Architecture, REST, gRPC, NestJS, PostgreSQL, MySQL, Redis, NATS, RabbitMQ"
  },
  {
    category: "Infrastructure & Cloud",
    skills: "AWS, GCP, Kubernetes, Docker, GitLab CI/CD, Linux"
  },
  {
    category: "Observability & Quality",
    skills: "DataDog, Splunk, New Relic, SonarQube"
  },
  {
    category: "Analytics & Intelligence",
    skills: "Business Intelligence, Data Analysis"
  },
  {
    category: "Core Competencies",
    skills: "Technical Leadership, System Design, SDLC, Cross-Team Collaboration"
  },
  {
    category: "Languages",
    skills: "English (C2 Proficient), Indonesian (Native)"
  }
];
