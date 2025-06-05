import type { PersonalInfo, Education, Skills, Projects } from "./types";

export const personalInfo: PersonalInfo = {
  name: 'スティーブン "thx" キム',
  location: "韓国・大田広域市",
  languages: [
    { name: "韓国語", level: "母語" },
    { name: "日本語", level: "流暢（JLPT N1）" },
    { name: "英語", level: "中級（TOEIC 810）" },
  ],
  email: "stevenkim0325@gmail.com",
  github: "https://github.com/thanksstevenkim",
  mastodon: "https://mustard.blog/@thanksstevenkim",
  bio: "Mastodon サーバーの運営からフロントエンド開発、サーバー管理まで経験し、技術的自立を追求する開発者「thanksstevenkim」です。韓国語（母語）、日本語（JLPT N1）、英語（TOEIC 810）の3言語を使用可能で、多言語環境でのコミュニケーションや文書作成にも慣れています。",
};

export const education: Education = [
  {
    institution: "ハンバッ大学",
    location: "韓国・大田広域市",
    degree: "情報通信工学科",
    period: "2017年3月 ～ 2026年2月",
    achievements: ["2026年2月、ハンバッ大学 情報通信工学科 学士号取得予定"],
  },
];

export const skills: Skills = {
  programmingLanguages: ["JavaScript", "Python", "Java"],
  frontendDevelopment: ["Tailwind CSS", "HTML", "CSS"],
  backendDevelopment: ["Node.js"],
  databaseAndStorage: ["PostgreSQL"],
  cloudAndDevOps: ["AWS", "AWS S3", "OVHCloud", "Vultr"],
  toolsAndServices: [
    "Git",
    "GitHub",
    "Vercel",
    "Linux (Ubuntu)",
    "Nginx",
    "Docker（基礎）",
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
      "- Mastodon ベースの分散型ソーシャルネットワーク「Mustard.blog」を独自運営",
      "- VPS + PostgreSQL + Redis + Nginx + SSL の構成を担当",
      "- キャッシュ戦略と media proxy によるトラフィック最適化の経験あり",
      "- Bird UI 採用とカスタム onboarding フローを実装",
      "- 月間アクティブユーザー、投稿数、接続数などの統計を収集中",
      "- GitHub Actions による自動デプロイパイプラインの構築を予定",
    ],
  },
];
