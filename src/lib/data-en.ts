import type { PersonalInfo, Education, Skills, Projects } from "./types";

export const personalInfo: PersonalInfo = {
  name: 'Steven "thx" Kim',
  location: "Daejeon, South Korea",
  languages: [
    { name: "Korean", level: "Native" },
    { name: "Japanese", level: "Fluent (JLPT N1)" },
    { name: "English", level: "Intermediate (TOEIC 810)" },
  ],
  email: "stevenkim0325@gmail.com",
  github: "https://github.com/thanksstevenkim",
  mastodon: "https://mustard.blog/@thanksstevenkim",
  bio: 'A developer exploring technical independence through operating a Mastodon server, frontend development, and backend infrastructure. Known online as "thanksstevenkim." Proficient in Korean (native), Japanese (JLPT N1), and English (TOEIC 810), with strong communication and documentation skills in multilingual environments.',
};

export const education: Education = [
  {
    institution: "Hanbat National University",
    location: "Daejeon, South Korea",
    degree:
      "Department of Information & Communication Engineering, College of Information Technology",
    period: "Mar 2017 - Feb 2026",
    achievements: ["Bachelor of Engineering, expected in February 2026"],
  },
];
export const skills: Skills = {
  programmingLanguages: ["JavaScript", "Python", "Java", "TypeScript"],
  frontendDevelopment: ["Tailwind CSS", "HTML", "CSS", "Astro", "Remix"],
  backendDevelopment: ["Nodejs"],
  databaseAndStorage: ["PostgreSQL", "Prisma ORM"],
  cloudAndDevOps: ["AWS", "AWS S3", "OVHCloud", "Vultr", "Fly.io", "Vercel"],
  toolsAndServices: [
    "Git",
    "GitHub",
    "Linux (Ubuntu)",
    "Nginx",
    "Docker (Beginner)",
    "Notion",
    "ChatGPT",
    "VSCode",
    "Mermaid",
  ],
};

export const projects: Projects = [
  {
    title: "Mustard",
    github: "https://github.com/thanksstevenkim/mastodon-v2",
    description: [
      "- Operating and maintaining the decentralized Mastodon server: mustard.blog",
      "- Managed infrastructure including VPS, PostgreSQL, Sidekiq, Nginx, and SSL setup",
      "- Optimized traffic using cache strategy and media proxy configuration",
      "- Customized the frontend using Bird UI and tailored onboarding flows",
      "- Currently tracking user count, post volume, and monthly active statistics",
      "- Planning to implement GitHub Actions for CI/CD deployment",
    ],
  },
  {
    title: "Thanks-wiki",
    github: "https://github.com/thanksstevenkim/thanks-wiki",
    description: [
      "- Built a lightweight static tech wiki using Astro + TypeScript",
      "- Deployed under the thanksstevenkim.dev domain with multilingual routes (/docs/[lang]/[slug]) for Korean, English, and Japanese",
      "- Structured as a read-only markdown-based wiki optimized for performance",
      "- Implemented multilingual routing with getStaticPaths and Astro Content Collections",
      "- Configured astro.config.mjs and tsconfig.json for aliasing and type safety",
      "- Custom layout in progress (DocLayout.astro) with plans for sidebar, SEO, and language switching",
      "- Tailwind CSS enabled for design customization and theme testing",
      "- Resolved technical issues: astro:content import errors, slug parameter mismatches, alias path conflicts, and more",
      "- Purpose: to archive decentralized web, ActivityPub, and open-source concepts for personal reference",
      "- Set up GitHub repo with version-controlled content for potential open-source contributions",
    ],
  },
  {
    title: "Jumin-Cheongwon",
    github: "https://github.com/thanksstevenkim/jumin-cheongwon",
    description: [
      "- Built a policy petition platform using Remix, including petition submission forms and API routes",
  "- Designed a district-based user authentication system and dynamic support thresholds based on local population",
  "- Implemented a civic tech workflow: Petition → Support → Survey → Policy → Feedback",
  "- Structured database schema using PostgreSQL with Prisma ORM and prepared migrations",
  "- Optimized form handling and server-side rendering, tested deployments on Fly.io and Vercel",
  "- Created technical documentation including user flow diagrams (Mermaid) and platform structure overview",
    ],
  },
];
