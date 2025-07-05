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
    "Docker（基礎）",
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
      "- Mastodon ベースの分散型ソーシャルネットワーク「Mustard.blog」を独自運営",
      "- VPS + PostgreSQL + Redis + Nginx + SSL の構成を担当",
      "- キャッシュ戦略と media proxy によるトラフィック最適化の経験あり",
      "- Bird UI 採用とカスタム onboarding フローを実装",
      "- 月間アクティブユーザー、投稿数、接続数などの統計を収集中",
      "- GitHub Actions による自動デプロイパイプラインの構築を予定",
    ],
  },
  {
    title: "Thanks-wiki",
    github: "https://github.com/thanksstevenkim/thanks-wiki",
    description: [
      "- Astro + TypeScript を用いて軽量な静的技術ウィキを構築",
      "- thanksstevenkim.dev ドメイン配下にて、韓国語・英語・日本語対応のルーティング（/docs/[lang]/[slug]）を実装",
      "- Markdownベースの読み取り専用ウィキとして高速・軽量構成",
      "- getStaticPaths と Astro Content Collections による多言語ルーティング対応",
      "- astro.config.mjs と tsconfig.json を用いたエイリアスと型安全設定",
      "- カスタムレイアウト（DocLayout.astro）構築中。サイドバーやSEO、言語切替機能も今後追加予定",
      "- Tailwind CSS によるデザイン調整やテーマ試験を実施",
      "- 技術的課題を解決：astro:content 認識エラー、slugパラメータの不整合、パスエイリアスの衝突 など",
      "- 目的：分散型Web、ActivityPub、オープンソース技術の概念を個人向けにアーカイブ",
      "- GitHub上でバージョン管理し、将来的なOSS貢献も視野に入れた構成",
    ],
  },
  {
    title: "Jumin-Cheongwon",
    github: "https://github.com/thanksstevenkim/jumin-cheongwon",
    description: [
      "- Remixを用いて、請願投稿フォームとAPI処理を含む政策提案プラットフォームを構築",
  "- 住民の選挙区に基づく認証システムと、人口に応じた共感基準アルゴリズムを設計",
  "- 「請願 → 共感 → アンケート → 政策化 → フィードバック」までのCivic Techワークフローを実装",
  "- PostgreSQLとPrisma ORMによるデータベース設計およびマイグレーションの準備",
  "- Fly.ioやVercelでのデプロイを通じて、フォーム処理とSSRの最適化を実施",
  "- MermaidによるフローチャートとREADMEの技術ドキュメントを作成",
    ],
  },
];
