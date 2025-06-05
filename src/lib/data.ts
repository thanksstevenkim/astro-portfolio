import type { PersonalInfo, Education, Skills, Projects } from "./types";

export const personalInfo: PersonalInfo = {
  name: 'Steven "thx" Kim',
  location: "대한민국, 대전광역시",
  email: "stevenkim0325@gmail.com",
  github: "https://github.com/thanksstevenkim",
  mastodon: "https://mustard.blog/@thanksstevenkim",
};

export const education: Education = [
  {
    institution: "한밭대학교",
    location: "대한민국, 대전광역시",
    degree: "정보통신공학과",
    period: "2017년 3월 ~ 2026년 2월",
    achievements: ["2026년 2월, 한밭대학교 정보통신공학과 학사 졸업"],
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
    "Docker (기초)",
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
      "- Mastodon 기반의 탈중앙형 소셜 네트워크 인스턴스를 직접 운영 및 유지보수",
      "- VPS 기반으로 PostgreSQL, Sidekiq, Nginx, SSL 인증 구성까지 전담",
      "- 트래픽 최적화를 위한 캐시 정책 및 media proxy 구성 경험",
      "- Bird UI 및 custom onboarding flow 등 프론트엔드 커스터마이징",
      "- 사용자 수, 게시글 수, 월간 접속 통계 기록 중 (요약 그래프 첨부 가능)",
      "- GitHub Actions 기반의 자동 배포 파이프라인 구축 예정",
    ],
  },
];
