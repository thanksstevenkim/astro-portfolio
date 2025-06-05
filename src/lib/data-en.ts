import type { PersonalInfo, Education, Skills, Projects } from "./types";

export const personalInfo: PersonalInfo = {
  name: 'Steven "thx" Kim',
  location: "Daejeon, South Korea",
  email: "stevenkim0325@gmail.com",
  github: "https://github.com/thanksstevenkim",
  mastodon: "https://mustard.blog/@thanksstevenkim",
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
  programmingLanguages: ["JavaScript", "Python", "Java"],
  frontendDevelopment: ["Tailwind CSS", "HTML", "CSS"],
  backendDevelopment: ["Nodejs"],
  databaseAndStorage: ["PostgreSQL"],
  cloudAndDevOps: ["AWS", "AWS S3", "OVHCloud", "Vultr"],
  toolsAndServices: [
    "Git",
    "GitHub",
    "Vercel",
    "Linux (Ubuntu)",
    "Nginx",
    "Docker (Beginner)",
    "Notion",
    "ChatGPT",
    "VSCode",
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
];
