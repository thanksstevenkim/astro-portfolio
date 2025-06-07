import type { PersonalInfo, Education, Skills, Projects } from "./types";

export const personalInfo: PersonalInfo = {
  name: 'Steven "thx" Kim',
  location: "대한민국, 대전광역시",
  languages: [
    { name: "한국어", level: "모국어" },
    { name: "일본어", level: "유창 (JLPT N1)" },
    { name: "영어", level: "중상급 (TOEIC 810)" },
  ],
  email: "stevenkim0325@gmail.com",
  github: "https://github.com/thanksstevenkim",
  mastodon: "https://mustard.blog/@thanksstevenkim",
  bio: "Mastodon 서버 운영부터 프론트엔드 개발, 서버 관리 경험을 기반으로 기술 독립성을 추구하며 살아가는 방법을 고민하는 개발자입니다. 한국어(모국어), 일본어(JLPT N1), 영어(TOEIC 810) 3개 국어 사용이 가능하며, 다국어 환경에서의 커뮤니케이션과 문서 작성에도 익숙합니다.",
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
  {
    title: "Thanks-wiki",
    github: "https://github.com/thanksstevenkim/thanks-wiki",
    description: [
      "- Astro + TypeScript 기반의 정적 기술 위키 사이트 직접 구축",
      "- thanksstevenkim.dev 도메인 내 /docs/[lang]/[slug] 구조로 다국어 기술 문서 제공 (한국어, 영어, 일본어)",
      "- Markdown 콘텐츠 기반의 초경량 읽기 전용 위키 구조 구현",
      "- Astro Content Collections 설정 및 getStaticPaths 기반 다국어 라우팅 처리",
      "- astro.config.mjs, tsconfig.json을 통한 alias 및 타입 안정성 구성",
      "- DocLayout.astro 커스텀 레이아웃 및 향후 사이드바, SEO 설정 예정",
      "- Tailwind CSS 사용 가능하도록 설정하며, 커스텀 스타일 적용 테스트 중",
      "- 오류 해결 경험: astro:content 모듈 인식 문제, slug 경로 오류, 모듈 별칭 충돌 등 해결",
      "- 프로젝트 목적: 탈중앙 웹, ActivityPub, 오픈소스 기술 개념 정리를 위한 개인 아카이브",
      "- GitHub 레포 관리 및 문서 버전 관리를 통한 오픈소스 기여 기반 마련",
    ],
  },
];
